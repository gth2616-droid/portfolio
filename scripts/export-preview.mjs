import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const result=await build({entryPoints:[path.join(root,'src/main.js')],bundle:true,write:false,format:'iife',minify:true,target:'es2020',legalComments:'none',plugins:[{
 name:'offline-assets',setup(build){
  build.onResolve({filter:/\.css\?inline$/},args=>({path:path.resolve(args.resolveDir,args.path.replace('?inline','')),namespace:'inline-css'}));
  build.onLoad({filter:/.*/,namespace:'inline-css'},async args=>({contents:'export default '+JSON.stringify(await fs.readFile(args.path,'utf8')),loader:'js'}));
  build.onResolve({filter:/\.css$/},()=>({path:'main-css',namespace:'empty-css'}));
  build.onLoad({filter:/.*/,namespace:'empty-css'},()=>({contents:'',loader:'js'}));
  build.onLoad({filter:/(?:package|package-preview|retail|content|vector|badge-texture)-data\.js$/},async args=>{let source=await fs.readFile(args.path,'utf8');const matches=[...source.matchAll(/new URL\('([^']+)',import.meta.url\)\.href/g)];for(const match of matches){const bytes=await fs.readFile(path.resolve(path.dirname(args.path),match[1]));source=source.replace(match[0],JSON.stringify('data:'+(path.extname(match[1])==='.gz'?'application/gzip':path.extname(match[1])==='.webp'?'image/webp':'image/png')+';base64,'+bytes.toString('base64')));}return {contents:source,loader:'js',resolveDir:path.dirname(args.path)};});
 }
}]});
const cssFiles=['style.css','portfolio.css','vendor/devices/devices.css','digital.css'];
let css=(await Promise.all(cssFiles.map(name=>fs.readFile(path.join(root,'src',name),'utf8')))).join('\n').replace(/@import[^;]+;/g,'');
for(const match of [...css.matchAll(/url\('([^']+\.woff2)'\)/g)]){const bytes=await fs.readFile(path.join(root,'src',match[1]));css=css.replace(match[0],`url(data:font/woff2;base64,${bytes.toString('base64')})`);}
let html=await fs.readFile(path.join(root,'index.html'),'utf8');html=html.replace('</head>',`<style>${css}</style></head>`).replace('<script type="module" src="/src/main.js"></script>',()=>'<script>'+result.outputFiles[0].text.replaceAll('</script','<\\/script')+'</script>');
await fs.mkdir(path.join(root,'.validation'),{recursive:true});
for(const name of ['teenieping-wireframe.html','teenieping-all-packages.html','teenieping-fixed-packages.html','teenieping-retail-packages.html','teenieping-portfolio-draft.html','teenieping-vector-badges.html'])await fs.writeFile(path.join(root,'.validation',name),html);
console.log('Offline WebGL portfolio:',Buffer.byteLength(html),'bytes');
