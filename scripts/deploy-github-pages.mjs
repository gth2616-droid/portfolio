// Publish source and static build together without force-pushing or changing checkout.
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const run=(command,args,options={})=>execFileSync(command,args,{cwd:root,encoding:'utf8',...options});
const git=(...args)=>run('git',args).trim();
if(git('status','--porcelain'))throw new Error('Commit source changes before publishing.');
run('npm',['run','build'],{stdio:'inherit'});
fs.writeFileSync(path.join(root,'dist/.nojekyll'),'');
const refs=git('ls-remote','origin','refs/heads/main','refs/heads/gh-pages').split('\n').filter(Boolean).map(line=>line.split(/\s+/));
const remoteMain=refs.find(r=>r[1]==='refs/heads/main')?.[0],remotePages=refs.find(r=>r[1]==='refs/heads/gh-pages')?.[0];
if(remoteMain){git('fetch','origin','main');git('merge-base','--is-ancestor',remoteMain,'HEAD');}
if(remotePages)git('fetch','origin','gh-pages');
const temporary=fs.mkdtempSync(path.join(os.tmpdir(),'portfolio-pages-'));
try{
 const env={...process.env,GIT_INDEX_FILE:path.join(temporary,'index'),GIT_WORK_TREE:path.join(root,'dist')};
 run('git',['add','--all','--','.'],{env,cwd:path.join(root,'dist')});
 const tree=run('git',['write-tree'],{env}).trim(),source=git('rev-parse','HEAD');
 const args=['commit-tree',tree,...(remotePages?['-p',remotePages]:[])];
 const commit=run('git',args,{input:`Deploy portfolio from ${source}\n`}).trim();
 run('git',['push','--atomic','origin','HEAD:refs/heads/main',`${commit}:refs/heads/gh-pages`],{stdio:'inherit'});
 console.log('Published source to main and site to gh-pages.');
 console.log('Pages URL (after branch publishing is enabled): https://gth2616-droid.github.io/portfolio/');
}finally{fs.rmSync(temporary,{recursive:true,force:true});}
