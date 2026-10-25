import {badgeDesigns} from './vector-data.js';
import {badgeTextureSources,commonBadgeBack} from './badge-texture-data.js';
import {renderBadgeTexture} from './vector-source.js';
const cache=new Map(),budget=64*1024*1024,pinned=new Set([commonBadgeBack['1024'],commonBadgeBack['2048']]);
function trim(){let bytes=0;for(const entry of cache.values())if(entry.ready)bytes+=entry.image.naturalWidth*entry.image.naturalHeight*4;for(const [url,entry] of cache){if(bytes<=budget)break;if(!entry.ready||pinned.has(url))continue;bytes-=entry.image.naturalWidth*entry.image.naturalHeight*4;cache.delete(url);}}
function loadImage(url){
 if(cache.has(url)){const e=cache.get(url);cache.delete(url);cache.set(url,e);return e.promise;}
 const image=new Image(),entry={image,ready:false};image.decoding='async';image.src=url;
 entry.promise=image.decode().then(()=>{entry.ready=true;trim();return image;}).catch(error=>{cache.delete(url);throw error;});cache.set(url,entry);return entry.promise;
}
export function readyBadgeFace(badge,face,size=1024){const source=face==='back'?commonBadgeBack:badgeTextureSources[badge.id];const url=source?.[size>1024?'2048':'1024'],entry=cache.get(url);if(entry?.ready){cache.delete(url);cache.set(url,entry);return entry.image;}return null;}
export function warmCommonBadgeBack(){return loadImage(commonBadgeBack['1024']);}
export function warmBadge(badge){if(typeof badge==='string')badge=badgeDesigns.find(b=>b.id===badge);if(!badge)return Promise.resolve();return Promise.all([loadImage(badgeTextureSources[badge.id]['1024']),warmCommonBadgeBack()]);}
export function loadBadgeFace(badge,face,size){
 if(size<=2048){const sources=face==='back'?commonBadgeBack:badgeTextureSources[badge.id];return loadImage(sources[size>1024?'2048':'1024']);}
 return renderBadgeTexture(face,face==='back'?commonBadgeBack.rectangle:badge.front,size);
}
