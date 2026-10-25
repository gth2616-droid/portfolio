import {vectorDocuments} from './vector-data.js';
const pages=new Map();

export function getVectorPage(id,index=0){
 const key=`${id}:${index}`;
 if(!pages.has(key))pages.set(key,(async()=>{
  const page=vectorDocuments[id]?.pages[index];if(!page)throw new Error('벡터 페이지가 없습니다.');
  const response=await fetch(page.url);if(!response.ok)throw new Error('벡터 자료를 불러오지 못했습니다.');
  const bytes=await response.arrayBuffer(),magic=new Uint8Array(bytes,0,Math.min(2,bytes.byteLength));
  // Hosts may deliver .gz as a file or transparently decode Content-Encoding.
  const text=magic[0]===31&&magic[1]===139
   ?await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).text()
   :new TextDecoder().decode(bytes);
  if(!text.includes('<svg'))throw new Error('벡터 자료 형식이 올바르지 않습니다.');
  const blob=new Blob([text],{type:'image/svg+xml'}),url=URL.createObjectURL(blob);
  return {...page,text,url};
 })());
 return pages.get(key);
}

export async function croppedVectorSVG(face,rectangle,size=2048){
 const page=await getVectorPage('B001',face==='front'?0:1);
 const [x0,y0,x1,y1]=rectangle;
 const artwork=face==='back'?page.text.replace(/<path\b(?=[^>]*\bstroke="#ec148d")[^>]*\/>/g,''):page.text;
 return artwork.replace(/<svg\b[^>]*>/,tag=>tag.replace(/\bwidth="[^"]*"/,`width="${size}"`).replace(/\bheight="[^"]*"/,`height="${size}"`).replace(/\bviewBox="[^"]*"/,`viewBox="${x0} ${y0} ${x1-x0} ${y1-y0}"`));
}

// WebGL samples pixels; regenerate those pixels from the vector operations at
// the size required by the current zoom, instead of enlarging a tiny thumbnail.
export async function renderBadgeTexture(face,rectangle,size){
 const svg=await croppedVectorSVG(face,rectangle,size),url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
 try{
  const img=new Image();img.src=url;await img.decode();
  const canvas=document.createElement('canvas');canvas.width=canvas.height=size;
  const context=canvas.getContext('2d');context.fillStyle='#fff';context.fillRect(0,0,size,size);context.drawImage(img,0,0,size,size);
  return canvas;
 }finally{URL.revokeObjectURL(url);}
}
