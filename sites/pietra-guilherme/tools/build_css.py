"""Junta e minifica o CSS em styles/site.min.css (um request só, sem bloquear com vários arquivos).

Uso: python3 tools/build_css.py  (rodar sempre que editar tokens/ ou styles/)
"""
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
ORDEM = ["styles/fonts.css", "tokens/tokens.css", "styles/base.css", "styles/components.css", "styles/app.css"]

css = "\n".join((RAIZ / f).read_text() for f in ORDEM)
css = css.replace("url('../fonts/", "url('../fonts/").replace('url("../assets/', 'url("../assets/')
css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
css = re.sub(r"\s+", " ", css)
css = re.sub(r"\s*([{};,>])\s*", r"\1", css)
css = re.sub(r":\s+", ":", css)
css = css.replace(";}", "}")
(RAIZ / "styles/site.min.css").write_text(css.strip() + "\n")
print("site.min.css", len(css), "bytes")
