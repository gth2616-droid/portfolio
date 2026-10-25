"""Package the exact verified standalone HTML into small, checksum-verified downloads.
No image or vector recompression; the loader reconstructs the original bytes.
"""
from pathlib import Path
import gzip,hashlib,json,math
root=Path(__file__).resolve().parents[1];original=root/'.validation/teenieping-vector-badges.html';out=root/'.validation/portfolio-download';out.mkdir(parents=True,exist_ok=True)
source=original.read_bytes();compressed=gzip.compress(source,compresslevel=9,mtime=0);size=24*1024*1024;manifest=[]
for i,start in enumerate(range(0,len(compressed),size),1):
 data=compressed[start:start+size];name=f'portfolio-data-{i}.bin';(out/name).write_bytes(data);manifest.append(dict(name=name,bytes=len(data),sha256=hashlib.sha256(data).hexdigest()))
expected=hashlib.sha256(source).hexdigest();count=len(manifest)
html=r'''<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>티니핑 포트폴리오 실행</title><style>*{box-sizing:border-box}body{margin:0;font-family:Arial,'Malgun Gothic',sans-serif;color:#252525;background:#f6f6f4;line-height:1.8}main{max-width:670px;margin:9vh auto;padding:38px;background:#fff;border:1px solid #ccc}h1{font-size:26px;line-height:1.5;margin:15px 0 22px;letter-spacing:-.6px}.eyebrow{font-size:10px;letter-spacing:1px;color:#777}p,li{font-size:13px}ol{padding-left:22px;margin:22px 0}label{display:block;padding:16px;background:#292929;color:white;text-align:center;cursor:pointer;font-size:13px;margin-top:25px;min-height:48px}input{position:absolute;width:1px;height:1px;opacity:0}label:focus-within{outline:3px solid #777;outline-offset:4px}button{font:inherit;cursor:pointer}#status{font-size:12px;margin-top:20px;min-height:44px;white-space:pre-line;overflow-wrap:anywhere}#status[data-error=true]{color:#a12525}progress{width:100%;accent-color:#444;margin-top:15px}.note{font-size:11px;color:#777;border-top:1px solid #ddd;margin-top:25px;padding-top:18px}.files{background:#f6f6f4;padding:16px;font:12px/1.9 monospace;overflow-wrap:anywhere}@media(max-width:700px){main{margin:22px 16px;padding:25px}h1{font-size:23px}}</style></head><body><main><span class="eyebrow">YUBIN JEON · DESIGN PORTFOLIO</span><h1>티니핑 포트폴리오<br>다운로드 실행 파일</h1><p>원본 벡터와 3D 자료를 작은 파일들로 나누었습니다. 아래 자료 파일을 모두 저장한 뒤 한 번에 선택해주세요.</p><div class="files">__FILES__</div><ol><li>위 자료 파일 __COUNT__개를 모두 다운로드합니다.</li><li>아래 버튼을 눌러 다운로드한 자료 파일 __COUNT__개를 함께 선택합니다.</li><li>자료 확인이 끝나면 포트폴리오가 자동으로 열립니다.</li></ol><label>자료 파일 __COUNT__개 선택<input id="parts" type="file" multiple accept=".bin,application/octet-stream" aria-label="포트폴리오 자료 파일 선택"></label><progress id="progress" value="0" max="100" hidden></progress><p id="status" role="status" aria-live="polite">자료 파일을 기다리고 있습니다.</p><p class="note">Chrome에서 열어주세요. 인터넷 연결이나 ZIP 해제는 필요 없습니다. 이미지와 벡터의 화질을 낮추지 않고 기존 포트폴리오를 그대로 복원합니다.</p></main><script>
const manifest=__MANIFEST__,expected=__EXPECTED__,expectedBytes=__BYTES__;
const input=document.querySelector('#parts'),status=document.querySelector('#status'),progress=document.querySelector('#progress');
window.portfolioDownload={manifest,expected,expectedBytes};
const hash=async data=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',data)),v=>v.toString(16).padStart(2,'0')).join('');
input.addEventListener('change',async()=>{
 const selected=Array.from(input.files),found=new Map();status.dataset.error='false';progress.hidden=false;progress.value=0;
 try{
  // Match sizes and SHA-256 so browser-renamed downloads such as "(1).bin" work.
  const candidates=selected.filter(file=>manifest.some(p=>p.bytes===file.size));
  if(selected.length<manifest.length)throw new Error('자료 파일 '+manifest.length+'개를 모두 선택해주세요. 선택한 파일: '+selected.length+'개');
  if(candidates.length<manifest.length)throw new Error('자료 파일 크기가 맞지 않습니다. 다운로드가 완료됐는지 확인하고 자료 파일 '+manifest.length+'개를 다시 선택해주세요.');
  for(let i=0;i<candidates.length;i++){
   const file=candidates[i];status.textContent='자료 확인 중: '+file.name;const data=await file.arrayBuffer(),digest=await hash(data),part=manifest.find(p=>p.sha256===digest);
   if(part)found.set(part.name,data);progress.value=Math.min(65,Math.round((i+1)/candidates.length*65));
  }
  const missing=manifest.filter(p=>!found.has(p.name));if(missing.length)throw new Error('필요한 자료가 없거나 다운로드가 끝나지 않았습니다.\n다시 선택할 파일: '+missing.map(p=>p.name).join(', '));
  if(typeof DecompressionStream==='undefined')throw new Error('최신 Chrome에서 이 HTML 파일을 열어주세요.');
  status.textContent='포트폴리오를 복원하는 중…';progress.value=75;
  const stream=new Blob(manifest.map(p=>found.get(p.name))).stream().pipeThrough(new DecompressionStream('gzip'));
  const data=await new Response(stream).arrayBuffer();if(data.byteLength!==expectedBytes||await hash(data)!==expected)throw new Error('자료 확인에 실패했습니다. 파일을 다시 다운로드해주세요.');
  progress.value=100;status.textContent='확인 완료 · 포트폴리오를 여는 중…';window.portfolioDownload.verified=true;
  const html=new TextDecoder().decode(data);document.open();document.write(html);document.close();
 }catch(error){status.dataset.error='true';status.textContent=error.message||'파일을 읽지 못했습니다. 다시 선택해주세요.';progress.hidden=true;input.value='';}
});
</script></body></html>'''
html=html.replace('__FILES__','<br>'.join(p['name'] for p in manifest)).replace('__COUNT__',str(count)).replace('__MANIFEST__',json.dumps(manifest)).replace('__EXPECTED__',json.dumps(expected)).replace('__BYTES__',str(len(source)))
(out/'portfolio.html').write_text(html);(out/'manifest.json').write_text(json.dumps(dict(original_bytes=len(source),original_sha256=expected,compressed_bytes=len(compressed),parts=manifest),indent=2))
assert gzip.decompress(b''.join((out/p['name']).read_bytes() for p in manifest))==source
print(json.dumps(dict(html_bytes=len(html.encode()),source_bytes=len(source),compressed_bytes=len(compressed),parts=[{'name':p['name'],'bytes':p['bytes']} for p in manifest]),indent=2))
