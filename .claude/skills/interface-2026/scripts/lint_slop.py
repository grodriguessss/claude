#!/usr/bin/env python3
"""
lint_slop.py, varredura mecânica de tells de AI slop em HTML, CSS, SCSS, JS, JSX e TSX.

Uso:
    python3 lint_slop.py <arquivo_ou_pasta> [...]
    python3 lint_slop.py . --json

Pega só o que é verificável por regra. Julgamento continua sendo humano:
depois de rodar isto, aplique a rubrica de references/evals.md.

Saída: lista de achados com arquivo, linha, severidade e correção sugerida.
Código de saída 1 quando houver algo em severidade ALTA.
"""

import argparse
import json
import os
import re
import sys
from collections import defaultdict

EXTS = {".html", ".htm", ".css", ".scss", ".less", ".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte"}
SKIP_DIRS = {"node_modules", ".git", "dist", "build", ".next", "vendor", "__pycache__", ".venv"}
STYLE_EXTS = {".css", ".scss", ".less"}

# (id, severidade, regex, mensagem, correção)
RULES = [
    ("gradiente-roxo-azul", "ALTA",
     re.compile(r"linear-gradient\([^)]*(?:#(?:6[0-9a-f]{2}|7[0-9a-f]{2}|8[0-9a-f]{2})[0-9a-f]{3}|purple|violet|indigo|blueviolet|rebeccapurple)[^)]*\)", re.I),
     "Gradiente na faixa azul/roxo/violeta.",
     "Trocar por cor chapada, ou gradiente derivado da imagem do hero."),

    ("gradiente-em-texto", "ALTA",
     re.compile(r"background-clip\s*:\s*text|-webkit-background-clip\s*:\s*text", re.I),
     "Texto com gradiente via background-clip.",
     "Cor sólida. Se precisar de destaque, usar peso, tamanho ou uma segunda família."),

    ("fonte-inter", "ALTA",
     re.compile(r"font-family\s*:[^;{}]*\bInter\b|fontFamily[^,;}]*['\"][^'\"]*\bInter\b", re.I),
     "Fonte Inter declarada.",
     "Escolher família com intenção. Inter só com justificativa escrita."),

    ("fonte-sistema-como-padrao", "MEDIA",
     re.compile(r"font-family\s*:\s*(?:-apple-system|system-ui|BlinkMacSystemFont)\s*[,;]", re.I),
     "Stack de fonte de sistema como escolha principal.",
     "Definir família própria. Sistema serve de fallback, não de decisão."),

    ("branco-puro-em-texto", "MEDIA",
     re.compile(r"(?<!background)(?<!background-)color\s*:\s*(?:#fff\b|#ffffff\b|white\b|rgb\(\s*255\s*,\s*255\s*,\s*255\s*\))", re.I),
     "Branco puro em cor de texto.",
     "Em fundo escuro usar cinza claro, faixa #d0d6e0 a #8a8f98."),

    ("preto-puro-em-fundo", "MEDIA",
     re.compile(r"background(?:-color)?\s*:\s*(?:#000\b|#000000\b|black\b|rgb\(\s*0\s*,\s*0\s*,\s*0\s*\))", re.I),
     "Preto puro como fundo.",
     "Usar quase-preto, faixa #08090a a #141414."),

    ("anel-de-progresso-decorativo", "BAIXA",
     re.compile(r"stroke-dasharray|conic-gradient\([^)]*from", re.I),
     "Possível anel/rosca de progresso.",
     "Preferir arco segmentado ou blocos de pílula. Ver graficos-e-dados.md."),

    ("glassmorphism", "MEDIA",
     re.compile(r"backdrop-filter\s*:\s*[^;]*blur", re.I),
     "Backdrop-filter com blur (glassmorphism).",
     "Só com fundo por trás que justifique o vidro. Senão, superfície opaca."),

    ("travessao", "ALTA",
     re.compile(r"[—–]"),
     "Travessão no conteúdo.",
     "Trocar por vírgula, ponto, dois-pontos ou parêntese."),

    ("jargao-inflado", "MEDIA",
     re.compile(r"\b(leverag\w+|seamless\w*|empower\w*|unlock\s+the|revolutioniz\w+|game[- ]chang\w+|cutting[- ]edge|next[- ]level|próximo n[íi]vel|transformar sua rotina|elevar\s+(?:o\s+)?seu)\b", re.I),
     "Jargão de texto gerado.",
     "Frase concreta com número ou substantivo específico."),

    ("estado-vazio-preguicoso", "MEDIA",
     re.compile(r"(?:nenhum (?:dado|resultado|item)\s+encontrado|no data (?:found|available)|nothing (?:here|to show)|sem resultados)", re.I),
     "Estado vazio sem instrução.",
     "Dizer o que é, por que está vazio e qual a próxima ação, com o botão ali."),

    ("emoji-como-icone", "MEDIA",
     re.compile(r"[\U0001F300-\U0001FAFF✀-➿⬀-⯿]"),
     "Emoji no markup, possivelmente como ícone.",
     "Set monoline único, Phosphor ou Lucide. Emoji só como estilo declarado do produto."),

    ("botao-radius-8", "BAIXA",
     re.compile(r"border-radius\s*:\s*8px\s*;", re.I),
     "border-radius de 8px.",
     "Comprometer a escala. Ver leis-visuais.md, no máximo 4 degraus."),

    ("sombra-pesada", "BAIXA",
     re.compile(r"box-shadow\s*:[^;]*\b(?:[5-9]\d|\d{3,})px\s+(?:rgba?\([^)]*0?\.[3-9]|#[0-9a-f]{3,8})", re.I),
     "Sombra com blur grande e opacidade alta.",
     "Baixar opacidade, subir blur. Card pede sombra fraca."),

    ("z-index-magico", "BAIXA",
     re.compile(r"z-index\s*:\s*(?:9{3,}|\d{4,})", re.I),
     "z-index mágico.",
     "Escala nomeada de camadas em tokens."),

    ("outline-none-sem-substituto", "ALTA",
     re.compile(r"outline\s*:\s*(?:none|0)\s*;", re.I),
     "outline removido.",
     "Só é aceitável com :focus-visible estilizado logo em seguida."),
]

HEX_RE = re.compile(r"#[0-9a-fA-F]{3,8}\b")
RADIUS_RE = re.compile(r"border-radius\s*:\s*([^;{}]+)", re.I)
RADIUS_VAL_RE = re.compile(r"(\d+(?:\.\d+)?)(px|rem|em|%)")
REDUCED_MOTION_RE = re.compile(r"prefers-reduced-motion", re.I)
ANIM_RE = re.compile(r"(?:@keyframes|animation\s*:|transition\s*:|framer-motion|gsap)", re.I)
VAR_RE = re.compile(r"var\(\s*--")


def iter_files(targets):
    for target in targets:
        if os.path.isfile(target):
            if os.path.splitext(target)[1].lower() in EXTS:
                yield target
            continue
        for root, dirs, files in os.walk(target):
            dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith(".")]
            for name in files:
                if os.path.splitext(name)[1].lower() in EXTS:
                    yield os.path.join(root, name)


def scan_file(path):
    findings = []
    try:
        with open(path, "r", encoding="utf-8", errors="replace") as fh:
            text = fh.read()
    except OSError as exc:
        return [{"file": path, "line": 0, "id": "leitura", "sev": "BAIXA",
                 "msg": f"não foi possível ler: {exc}", "fix": ""}]

    lines = text.splitlines()
    ext = os.path.splitext(path)[1].lower()

    for rule_id, sev, pattern, msg, fix in RULES:
        seen_lines = set()
        for match in pattern.finditer(text):
            line_no = text.count("\n", 0, match.start()) + 1
            if line_no in seen_lines:
                continue
            seen_lines.add(line_no)
            # outline:none é aceitável se houver :focus-visible no arquivo
            if rule_id == "outline-none-sem-substituto" and "focus-visible" in text:
                continue
            findings.append({"file": path, "line": line_no, "id": rule_id, "sev": sev,
                             "msg": msg, "fix": fix,
                             "snippet": lines[line_no - 1].strip()[:100] if line_no <= len(lines) else ""})

    # escala de raio esparramada
    radii = set()
    for match in RADIUS_RE.finditer(text):
        for value, unit in RADIUS_VAL_RE.findall(match.group(1)):
            num = float(value)
            if unit == "px" and num >= 900:
                radii.add("pill")
            elif num > 0:
                radii.add(f"{num}{unit}")
    if len(radii) > 5:
        findings.append({"file": path, "line": 0, "id": "escala-de-raio-esparramada", "sev": "ALTA",
                         "msg": f"{len(radii)} valores distintos de border-radius: {', '.join(sorted(radii)[:10])}.",
                         "fix": "Colapsar para no máximo 4 degraus. Botão a 2px ao lado de card a 16px lê como dois produtos.",
                         "snippet": ""})

    # hex chumbado em arquivo de componente
    if ext in STYLE_EXTS and "token" not in path.lower() and "theme" not in path.lower():
        hexes = set(h.lower() for h in HEX_RE.findall(text))
        if len(hexes) > 6 and not VAR_RE.search(text):
            findings.append({"file": path, "line": 0, "id": "hex-fora-de-token", "sev": "MEDIA",
                             "msg": f"{len(hexes)} cores literais e nenhuma custom property.",
                             "fix": "Componente consome token semântico, nunca primitivo nem literal.",
                             "snippet": ""})

    # animação sem reduced-motion
    if ANIM_RE.search(text) and not REDUCED_MOTION_RE.search(text):
        findings.append({"file": path, "line": 0, "id": "sem-reduced-motion", "sev": "ALTA",
                         "msg": "Há animação ou transição e nenhuma consulta a prefers-reduced-motion.",
                         "fix": "@media (prefers-reduced-motion: reduce) desligando tudo de forma limpa.",
                         "snippet": ""})

    return findings


SEV_ORDER = {"ALTA": 0, "MEDIA": 1, "BAIXA": 2}


def main():
    parser = argparse.ArgumentParser(description="Varredura de tells de AI slop.")
    parser.add_argument("targets", nargs="*", default=["."], help="arquivos ou pastas")
    parser.add_argument("--json", action="store_true", help="saída em JSON")
    args = parser.parse_args()
    targets = args.targets or ["."]

    all_findings = []
    n_files = 0
    for path in iter_files(targets):
        n_files += 1
        all_findings.extend(scan_file(path))

    if args.json:
        print(json.dumps({"arquivos": n_files, "achados": all_findings}, ensure_ascii=False, indent=2))
        return 1 if any(f["sev"] == "ALTA" for f in all_findings) else 0

    if not all_findings:
        print(f"Varridos {n_files} arquivos. Nenhum tell mecânico encontrado.")
        print("Agora rode a rubrica de references/evals.md, que é onde mora o julgamento.")
        return 0

    by_sev = defaultdict(list)
    for f in all_findings:
        by_sev[f["sev"]].append(f)

    print(f"Varridos {n_files} arquivos. {len(all_findings)} achados.\n")
    for sev in ("ALTA", "MEDIA", "BAIXA"):
        items = by_sev.get(sev, [])
        if not items:
            continue
        print(f"{'=' * 60}\n{sev}  ({len(items)})\n{'=' * 60}")
        for f in sorted(items, key=lambda x: (x["file"], x["line"])):
            loc = f"{f['file']}:{f['line']}" if f["line"] else f["file"]
            print(f"\n  [{f['id']}] {loc}")
            print(f"    {f['msg']}")
            if f.get("snippet"):
                print(f"    > {f['snippet']}")
            if f["fix"]:
                print(f"    corrigir: {f['fix']}")
        print()

    print("O linter pega o mecânico. O julgamento é a rubrica de references/evals.md.")
    return 1 if by_sev.get("ALTA") else 0


if __name__ == "__main__":
    sys.exit(main())
