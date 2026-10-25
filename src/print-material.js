import * as THREE from 'three';
const textureCache=new Map();
export function loadTexture(url){
 if(!textureCache.has(url))textureCache.set(url,new THREE.TextureLoader().loadAsync(url).then(t=>{t.colorSpace=THREE.NoColorSpace;t.minFilter=THREE.LinearFilter;t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;return t;}));
 return textureCache.get(url);
}

// Cutline removal is part of the material, independent of SVG/Shadow DOM filters.
// Only saturated ink next to a physical cut/fold edge is replaced with nearby print.
const vertexShader=`varying vec2 vUv;varying vec3 vNormal;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
const fragmentShader=`precision highp float;
uniform sampler2D printMap;uniform vec2 texSize;uniform vec3 stock;uniform float clean;
uniform vec4 edges[16];uniform int edgeCount;varying vec2 vUv;varying vec3 vNormal;
float edgeDistance(vec2 p,vec2 a,vec2 b){vec2 ab=b-a;float t=clamp(dot(p-a,ab)/max(dot(ab,ab),0.0001),0.0,1.0);return length(p-a-ab*t);}
float outlineDistance(vec2 uv){float d=10000.0;for(int i=0;i<16;i++){if(i<edgeCount)d=min(d,edgeDistance(uv*texSize,edges[i].xy*texSize,edges[i].zw*texSize));}return d;}
bool cutInk(vec3 c){return c.r>0.88&&c.g<0.49&&c.r-c.g>0.34&&(c.r-c.b>0.22||(c.r>0.96&&c.g<0.18));}
void main(){vec4 c=texture2D(printMap,vUv);if(c.a<0.15)discard;
 float nearEdge=10000.0;for(int i=0;i<16;i++){if(i<edgeCount)nearEdge=min(nearEdge,edgeDistance(vUv*texSize,edges[i].xy*texSize,edges[i].zw*texSize));}
 bool whiteMargin=min(c.r,min(c.g,c.b))>0.97;
 if(clean>0.0&&nearEdge<6.5&&(nearEdge<2.5||cutInk(c.rgb)||whiteMargin)){
  vec3 sum=vec3(0.0);float count=0.0;
  for(int radius=1;radius<=3;radius++){for(int n=0;n<8;n++){float angle=float(n)*0.785398163;vec2 offset=vec2(cos(angle),sin(angle))*float(radius*3)/texSize;vec4 sampleColor=texture2D(printMap,clamp(vUv+offset,vec2(0.0),vec2(1.0)));
   if(sampleColor.a>0.95&&outlineDistance(clamp(vUv+offset,vec2(0.0),vec2(1.0)))>3.5&&!cutInk(sampleColor.rgb)&&min(sampleColor.r,min(sampleColor.g,sampleColor.b))<0.97){sum+=sampleColor.rgb;count+=1.0;}
  }}vec3 fixedColor=count>0.0?sum/count:stock;c.rgb=mix(c.rgb,fixedColor,clean);
 }
 if(!gl_FrontFacing)c.rgb=vec3(1.0,0.975,0.985);
 float light=0.92+0.08*abs(dot(normalize(vNormal),normalize(vec3(-0.4,0.8,1.0))));
 gl_FragColor=vec4(c.rgb*light,1.0);
}`;

export function createPrintMaterial(texture,poly,stock){
  const p=poly||[[0,0],[100,0],[100,100],[0,100]],edges=Array.from({length:16},()=>new THREE.Vector4());
  p.forEach(([x,y],i)=>{const [nx,ny]=p[(i+1)%p.length];edges[i].set(x/100,1-y/100,nx/100,1-ny/100);});
  const m=new THREE.ShaderMaterial({vertexShader,fragmentShader,side:THREE.DoubleSide,depthTest:true,depthWrite:true,toneMapped:false,uniforms:{printMap:{value:texture},texSize:{value:new THREE.Vector2(texture.image.width,texture.image.height)},stock:{value:new THREE.Vector3()},clean:{value:0},edges:{value:edges},edgeCount:{value:p.length}}});
  // Source textures are sampled in their original sRGB numeric values.
  const color=new THREE.Color(stock).convertLinearToSRGB();m.uniforms.stock.value=new THREE.Vector3(color.r,color.g,color.b);return m;
 }
