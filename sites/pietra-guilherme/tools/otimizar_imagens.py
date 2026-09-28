"""Gera variantes responsivas (AVIF + WebP) de cada imagem de assets/.

Uso: python3 tools/otimizar_imagens.py
Saída: assets/r/<nome>-<largura>.avif|webp. Os originais em assets/ ficam
como fonte da verdade; o HTML aponta para as variantes via srcset.
"""
from pathlib import Path
from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
ORIGEM = RAIZ / "assets"
DESTINO = ORIGEM / "r"
LARGURAS = [240, 480, 720, 1100]
IGNORAR = {"grain.png", "og.jpg", "favicon.svg"}

DESTINO.mkdir(exist_ok=True)
for arq in sorted(ORIGEM.iterdir()):
    if arq.is_dir() or arq.name in IGNORAR:
        continue
    im = Image.open(arq)
    tem_alfa = im.mode in ("RGBA", "LA") or "transparency" in im.info
    im = im.convert("RGBA" if tem_alfa else "RGB")
    for w in LARGURAS:
        if w > im.width and w != LARGURAS[0]:
            continue
        alvo = min(w, im.width)
        v = im.resize((alvo, round(im.height * alvo / im.width)), Image.LANCZOS)
        v.save(DESTINO / f"{arq.stem}-{w}.webp", "WEBP", quality=72, method=6)
        v.save(DESTINO / f"{arq.stem}-{w}.avif", "AVIF", quality=52, speed=4)
    print(arq.name, im.size)
