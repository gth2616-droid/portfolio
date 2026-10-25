"""Export the folding interaction with embedded panel textures, for offline review."""
from pathlib import Path
import base64,re
root=Path(__file__).resolve().parents[1]
js=(root/'src/fold-demo.js').read_text().replace("import './fold-demo.css';",'')
def embed(match):
 path=root/'src'/match.group(1)
 return "'data:image/png;base64,"+base64.b64encode(path.read_bytes()).decode()+"'"
js=re.sub(r"new URL\('([^']+)',import.meta.url\)\.href",embed,js)
assert 'import.meta' not in js
html=(root/'fold-demo.html').read_text().replace('</head>','<style>'+(root/'src/fold-demo.css').read_text()+'</style></head>').replace('<script type="module" src="/src/fold-demo.js"></script>','<script>'+js+'</script>')
html=html.replace('href="./index.html"','href="./teenieping-wireframe.html"')
out=root/'.validation/hachuping-fold-demo.html';out.write_text(html)
print(out,'bytes',out.stat().st_size)
