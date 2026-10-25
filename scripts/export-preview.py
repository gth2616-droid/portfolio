"""Bundle the full portfolio and local 3D engine for offline review."""
from pathlib import Path
import subprocess,zipfile
root=Path(__file__).resolve().parents[1]
subprocess.run(['node',str(root/'scripts/export-preview.mjs')],cwd=root,check=True)
with zipfile.ZipFile(root/'.validation/teenieping-web-build.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in (root/'dist').rglob('*'):
  if p.is_file():z.write(p,p.relative_to(root/'dist'))
with zipfile.ZipFile(root/'.validation/teenieping-fixed-packages.zip','w',zipfile.ZIP_DEFLATED) as z:
 z.write(root/'.validation/teenieping-fixed-packages.html','teenieping-fixed-packages.html')
