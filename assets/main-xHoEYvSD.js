import"./modulepreload-polyfill-B5Qt9EMX.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="180",ac=0,Jo=1,lc=2,el=1,cc=2,an=3,fn=0,yt=1,Nt=2,wn=0,ai=1,jo=2,Qo=3,$o=4,uc=5,In=100,hc=101,dc=102,fc=103,pc=104,mc=200,gc=201,vc=202,_c=203,Es=204,As=205,xc=206,bc=207,Mc=208,yc=209,wc=210,Sc=211,Ec=212,Ac=213,Rc=214,Rs=0,Ts=1,Ls=2,ci=3,Cs=4,Us=5,Ps=6,Ds=7,tl=0,Tc=1,Lc=2,un=0,Cc=1,Uc=2,Pc=3,Dc=4,Ic=5,Nc=6,Fc=7,nl=300,ui=301,hi=302,Is=303,Ns=304,Ir=306,Fs=1e3,Fn=1001,Os=1002,Ht=1003,Oc=1004,Ki=1005,Ft=1006,zr=1007,On=1008,jt=1009,il=1010,rl=1011,Pi=1012,yo=1013,kn=1014,cn=1015,Vi=1016,wo=1017,So=1018,Di=1020,sl=35902,ol=35899,al=1021,ll=1022,Vt=1023,Ii=1026,Ni=1027,cl=1028,Eo=1029,ul=1030,Ao=1031,Ro=1033,br=33776,Mr=33777,yr=33778,wr=33779,ks=35840,Bs=35841,zs=35842,Gs=35843,Vs=36196,Hs=37492,Ws=37496,Xs=37808,qs=37809,Ys=37810,Zs=37811,Ks=37812,Js=37813,js=37814,Qs=37815,$s=37816,eo=37817,to=37818,no=37819,io=37820,ro=37821,so=36492,oo=36494,ao=36495,lo=36283,co=36284,uo=36285,ho=36286,kc=3200,Bc=3201,hl=0,zc=1,ln="",Et="srgb",di="srgb-linear",Tr="linear",et="srgb",Hn=7680,ea=519,Gc=512,Vc=513,Hc=514,dl=515,Wc=516,Xc=517,qc=518,Yc=519,ta=35044,na="300 es",Yt=2e3,Lr=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,fo=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Zc(i,e){return(i%e+e)%e}function Vr(i,e,t){return(1-t)*i+t*e}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],d=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=v,e[t+3]=x;return}if(h!==x||c!==p||l!==d||u!==v){let m=1-a;const f=c*p+l*d+u*v+h*x,A=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,f*A);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const M=a*A;if(c=c*m+p*M,l=l*m+d*M,u=u*m+v*M,h=h*m+x*M,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],p=s[o+1],d=s[o+2],v=s[o+3];return e[t]=a*v+u*h+c*d-l*p,e[t+1]=c*v+u*p+l*h-a*d,e[t+2]=l*v+u*d+a*p-c*h,e[t+3]=u*v-a*h-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),p=c(n/2),d=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=p*u*h+l*d*v,this._y=l*d*h-p*u*v,this._z=l*u*v+p*d*h,this._w=l*u*h-p*d*v;break;case"YXZ":this._x=p*u*h+l*d*v,this._y=l*d*h-p*u*v,this._z=l*u*v-p*d*h,this._w=l*u*h+p*d*v;break;case"ZXY":this._x=p*u*h-l*d*v,this._y=l*d*h+p*u*v,this._z=l*u*v+p*d*h,this._w=l*u*h-p*d*v;break;case"ZYX":this._x=p*u*h-l*d*v,this._y=l*d*h+p*u*v,this._z=l*u*v-p*d*h,this._w=l*u*h+p*d*v;break;case"YZX":this._x=p*u*h+l*d*v,this._y=l*d*h+p*u*v,this._z=l*u*v-p*d*h,this._w=l*u*h-p*d*v;break;case"XZY":this._x=p*u*h-l*d*v,this._y=l*d*h-p*u*v,this._z=l*u*v+p*d*h,this._w=l*u*h+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new N,ia=new Hi;class We{constructor(e,t,n,r,s,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],d=n[5],v=n[8],x=r[0],m=r[3],f=r[6],A=r[1],S=r[4],M=r[7],L=r[2],R=r[5],C=r[8];return s[0]=o*x+a*A+c*L,s[3]=o*m+a*S+c*R,s[6]=o*f+a*M+c*C,s[1]=l*x+u*A+h*L,s[4]=l*m+u*S+h*R,s[7]=l*f+u*M+h*C,s[2]=p*x+d*A+v*L,s[5]=p*m+d*S+v*R,s[8]=p*f+d*M+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,p=a*c-u*s,d=l*s-o*c,v=t*h+n*p+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=p*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new We;function fl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kc(){const i=Fi("canvas");return i.style.display="block",i}const ra={};function Oi(i){i in ra||(ra[i]=!0,console.warn(i))}function Jc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const sa=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oa=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jc(){const i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===et&&(r.r=hn(r.r),r.g=hn(r.g),r.b=hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ln?Tr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:e,whitePoint:n,transfer:Tr,toXYZ:sa,fromXYZ:oa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:et,toXYZ:sa,fromXYZ:oa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}const Je=jc();function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class Qc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wn===void 0&&(Wn=Fi("canvas")),Wn.width=e.width,Wn.height=e.height;const r=Wn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Wn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hn(t[n]/255)*255):t[n]=hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $c=0;class To{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xr(r[o].image)):s.push(Xr(r[o]))}else s=Xr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;const qr=new N;class xt extends gi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Fn,r=Fn,s=Ft,o=On,a=Vt,c=jt,l=xt.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=vi(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=nl;xt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],d=c[5],v=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,M=(d+1)/2,L=(f+1)/2,R=(u+p)/4,C=(h+x)/4,U=(v+m)/4;return S>M&&S>L?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=R/n,s=C/n):M>L?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=R/r,s=U/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=C/s,r=U/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(h-x)/A,this.z=(p-u)/A,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new xt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new To(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pl extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nu extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kt):kt.fromBufferAttribute(s,o),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),ji.subVectors(this.max,yi),Xn.subVectors(e.a,yi),qn.subVectors(e.b,yi),Yn.subVectors(e.c,yi),mn.subVectors(qn,Xn),gn.subVectors(Yn,qn),An.subVectors(Xn,Yn);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-An.z,An.y,mn.z,0,-mn.x,gn.z,0,-gn.x,An.z,0,-An.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-An.y,An.x,0];return!Yr(t,Xn,qn,Yn,ji)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,Xn,qn,Yn,ji))?!1:(Qi.crossVectors(mn,gn),t=[Qi.x,Qi.y,Qi.z],Yr(t,Xn,qn,Yn,ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tn=[new N,new N,new N,new N,new N,new N,new N,new N],kt=new N,Ji=new _i,Xn=new N,qn=new N,Yn=new N,mn=new N,gn=new N,An=new N,yi=new N,ji=new N,Qi=new N,Rn=new N;function Yr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Rn.fromArray(i,s);const a=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),c=e.dot(Rn),l=t.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const iu=new _i,wi=new N,Zr=new N;class Lo{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(wi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Zr)),this.expandByPoint(wi.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const nn=new N,Kr=new N,$i=new N,vn=new N,Jr=new N,er=new N,jr=new N;class ru{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kr.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Kr);const s=e.distanceTo(t)*.5,o=-this.direction.dot($i),a=vn.dot(this.direction),c=-vn.dot($i),l=vn.lengthSq(),u=Math.abs(1-o*o);let h,p,d,v;if(u>0)if(h=o*c-a,p=o*a-c,v=s*u,h>=0)if(p>=-v)if(p<=v){const x=1/u;h*=x,p*=x,d=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*c)+l;else p<=-v?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+p*(p+2*c)+l):p<=v?(h=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+p*(p+2*c)+l);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Kr).addScaledVector($i,p),d}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),r=nn.dot(nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,s){Jr.subVectors(t,e),er.subVectors(n,e),jr.crossVectors(Jr,er);let o=this.direction.dot(jr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,e);const c=a*this.direction.dot(er.crossVectors(vn,er));if(c<0)return null;const l=a*this.direction.dot(Jr.cross(vn));if(l<0||c+l>o)return null;const u=-a*vn.dot(jr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,o,a,c,l,u,h,p,d,v,x,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,p,d,v,x,m)}set(e,t,n,r,s,o,a,c,l,u,h,p,d,v,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,d=o*h,v=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+v*l,t[5]=p-x*l,t[9]=-a*c,t[2]=x-p*l,t[6]=v+d*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,d=c*h,v=l*u,x=l*h;t[0]=p+x*a,t[4]=v*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-v,t[6]=x+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,d=c*h,v=l*u,x=l*h;t[0]=p-x*a,t[4]=-o*h,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,d=o*h,v=a*u,x=a*h;t[0]=c*u,t[4]=v*l-d,t[8]=p*l+x,t[1]=c*h,t[5]=x*l+p,t[9]=d*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,d=o*l,v=a*c,x=a*l;t[0]=c*u,t[4]=x-p*h,t[8]=v*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+v,t[10]=p-x*h}else if(e.order==="XZY"){const p=o*c,d=o*l,v=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+x,t[5]=o*u,t[9]=d*h-v,t[2]=v*h-d,t[6]=a*u,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(su,e,ou)}lookAt(e,t,n){const r=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),_n.crossVectors(n,Tt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),_n.crossVectors(n,Tt)),_n.normalize(),tr.crossVectors(Tt,_n),r[0]=_n.x,r[4]=tr.x,r[8]=Tt.x,r[1]=_n.y,r[5]=tr.y,r[9]=Tt.y,r[2]=_n.z,r[6]=tr.z,r[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],d=n[13],v=n[2],x=n[6],m=n[10],f=n[14],A=n[3],S=n[7],M=n[11],L=n[15],R=r[0],C=r[4],U=r[8],w=r[12],y=r[1],T=r[5],k=r[9],z=r[13],H=r[2],X=r[6],W=r[10],ie=r[14],q=r[3],de=r[7],j=r[11],fe=r[15];return s[0]=o*R+a*y+c*H+l*q,s[4]=o*C+a*T+c*X+l*de,s[8]=o*U+a*k+c*W+l*j,s[12]=o*w+a*z+c*ie+l*fe,s[1]=u*R+h*y+p*H+d*q,s[5]=u*C+h*T+p*X+d*de,s[9]=u*U+h*k+p*W+d*j,s[13]=u*w+h*z+p*ie+d*fe,s[2]=v*R+x*y+m*H+f*q,s[6]=v*C+x*T+m*X+f*de,s[10]=v*U+x*k+m*W+f*j,s[14]=v*w+x*z+m*ie+f*fe,s[3]=A*R+S*y+M*H+L*q,s[7]=A*C+S*T+M*X+L*de,s[11]=A*U+S*k+M*W+L*j,s[15]=A*w+S*z+M*ie+L*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],d=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*c*h-r*l*h-s*a*p+n*l*p+r*a*d-n*c*d)+x*(+t*c*d-t*l*p+s*o*p-r*o*d+r*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+f*(-r*a*u-t*c*h+t*a*p+r*o*h-n*o*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],d=e[11],v=e[12],x=e[13],m=e[14],f=e[15],A=h*m*l-x*p*l+x*c*d-a*m*d-h*c*f+a*p*f,S=v*p*l-u*m*l-v*c*d+o*m*d+u*c*f-o*p*f,M=u*x*l-v*h*l+v*a*d-o*x*d-u*a*f+o*h*f,L=v*h*c-u*x*c-v*a*p+o*x*p+u*a*m-o*h*m,R=t*A+n*S+r*M+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=A*C,e[1]=(x*p*s-h*m*s-x*r*d+n*m*d+h*r*f-n*p*f)*C,e[2]=(a*m*s-x*c*s+x*r*l-n*m*l-a*r*f+n*c*f)*C,e[3]=(h*c*s-a*p*s-h*r*l+n*p*l+a*r*d-n*c*d)*C,e[4]=S*C,e[5]=(u*m*s-v*p*s+v*r*d-t*m*d-u*r*f+t*p*f)*C,e[6]=(v*c*s-o*m*s-v*r*l+t*m*l+o*r*f-t*c*f)*C,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*d+t*c*d)*C,e[8]=M*C,e[9]=(v*h*s-u*x*s-v*n*d+t*x*d+u*n*f-t*h*f)*C,e[10]=(o*x*s-v*a*s+v*n*l-t*x*l-o*n*f+t*a*f)*C,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*C,e[12]=L*C,e[13]=(u*x*r-v*h*r+v*n*p-t*x*p-u*n*m+t*h*m)*C,e[14]=(v*a*r-o*x*r-v*n*c+t*x*c+o*n*m-t*a*m)*C,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*p+t*a*p)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,p=s*l,d=s*u,v=s*h,x=o*u,m=o*h,f=a*h,A=c*l,S=c*u,M=c*h,L=n.x,R=n.y,C=n.z;return r[0]=(1-(x+f))*L,r[1]=(d+M)*L,r[2]=(v-S)*L,r[3]=0,r[4]=(d-M)*R,r[5]=(1-(p+f))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(v+S)*C,r[9]=(m-A)*C,r[10]=(1-(p+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zn.set(r[0],r[1],r[2]).length();const o=Zn.set(r[4],r[5],r[6]).length(),a=Zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bt.copy(this);const l=1/s,u=1/o,h=1/a;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Yt,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),d=(n+r)/(n-r);let v,x;if(c)v=s/(o-s),x=o*s/(o-s);else if(a===Yt)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Lr)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Yt,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),p=-(t+e)/(t-e),d=-(n+r)/(n-r);let v,x;if(c)v=1/(o-s),x=o/(o-s);else if(a===Yt)v=-2/(o-s),x=-(o+s)/(o-s);else if(a===Lr)v=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new N,Bt=new lt,su=new N(0,0,0),ou=new N(1,1,1),_n=new N,tr=new N,Tt=new N,aa=new lt,la=new Hi;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let au=0;const ca=new N,Kn=new Hi,rn=new lt,nr=new N,Si=new N,lu=new N,cu=new Hi,ua=new N(1,0,0),ha=new N(0,1,0),da=new N(0,0,1),fa={type:"added"},uu={type:"removed"},Jn={type:"childadded",child:null},Qr={type:"childremoved",child:null};class gt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new N,t=new Qt,n=new Hi,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(ua,e)}rotateY(e){return this.rotateOnAxis(ha,e)}rotateZ(e){return this.rotateOnAxis(da,e)}translateOnAxis(e,t){return ca.copy(e).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ua,e)}translateY(e){return this.translateOnAxis(ha,e)}translateZ(e){return this.translateOnAxis(da,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Si,nr,this.up):rn.lookAt(nr,Si,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(rn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fa),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fa),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new N,sn=new N,$r=new N,on=new N,jn=new N,Qn=new N,pa=new N,es=new N,ts=new N,ns=new N,is=new ot,rs=new ot,ss=new ot;class Gt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zt.subVectors(e,t),r.cross(zt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zt.subVectors(r,t),sn.subVectors(n,t),$r.subVectors(e,t);const o=zt.dot(zt),a=zt.dot(sn),c=zt.dot($r),l=sn.dot(sn),u=sn.dot($r),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,d=(l*c-a*u)*p,v=(o*u-a*c)*p;return s.set(1-d-v,v,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return is.setScalar(0),rs.setScalar(0),ss.setScalar(0),is.fromBufferAttribute(e,t),rs.fromBufferAttribute(e,n),ss.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(is,s.x),o.addScaledVector(rs,s.y),o.addScaledVector(ss,s.z),o}static isFrontFacing(e,t,n,r){return zt.subVectors(n,t),sn.subVectors(e,t),zt.cross(sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),zt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,n),Qn.subVectors(s,n),es.subVectors(e,n);const c=jn.dot(es),l=Qn.dot(es);if(c<=0&&l<=0)return t.copy(n);ts.subVectors(e,r);const u=jn.dot(ts),h=Qn.dot(ts);if(u>=0&&h<=u)return t.copy(r);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(jn,o);ns.subVectors(e,s);const d=jn.dot(ns),v=Qn.dot(ns);if(v>=0&&d<=v)return t.copy(s);const x=d*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(Qn,a);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return pa.subVectors(s,r),a=(h-u)/(h-u+(d-v)),t.copy(r).addScaledVector(pa,a);const f=1/(m+x+p);return o=x*f,a=p*f,t.copy(n).addScaledVector(jn,o).addScaledVector(Qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function os(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Zc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=os(o,s,e+1/3),this.g=os(o,s,e),this.b=os(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=gl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Je.workingToColorSpace(_t.copy(this),e),Math.round(qe(_t.r*255,0,255))*65536+Math.round(qe(_t.g*255,0,255))*256+Math.round(qe(_t.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,s=_t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Et){Je.workingToColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(ir);const n=Vr(xn.h,ir.h,t),r=Vr(xn.s,ir.s,t),s=Vr(xn.l,ir.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Ze;Ze.NAMES=gl;let hu=0;class Wi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ai,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Es,this.blendDst=As,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Es&&(n.blendSrc=this.blendSrc),this.blendDst!==As&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fi extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new N,rr=new Me;let du=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ta,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ta&&(e.usage=this.usage),e}}class vl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _l extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fu=0;const It=new lt,as=new gt,$n=new N,Lt=new _i,Ei=new _i,mt=new N;class Ot extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?_l:vl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return as.lookAt(e),as.updateMatrix(),this.applyMatrix4(as.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Lt.min,Ei.min),Lt.expandByPoint(mt),mt.addVectors(Lt.max,Ei.max),Lt.expandByPoint(mt)):(Lt.expandByPoint(Ei.min),Lt.expandByPoint(Ei.max))}Lt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)mt.fromBufferAttribute(a,l),c&&($n.fromBufferAttribute(e,l),mt.add($n)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new N,c[U]=new N;const l=new N,u=new N,h=new N,p=new Me,d=new Me,v=new Me,x=new N,m=new N;function f(U,w,y){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),p.fromBufferAttribute(s,U),d.fromBufferAttribute(s,w),v.fromBufferAttribute(s,y),u.sub(l),h.sub(l),d.sub(p),v.sub(p);const T=1/(d.x*v.y-v.x*d.y);isFinite(T)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(T),a[U].add(x),a[w].add(x),a[y].add(x),c[U].add(m),c[w].add(m),c[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,w=A.length;U<w;++U){const y=A[U],T=y.start,k=y.count;for(let z=T,H=T+k;z<H;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new N,M=new N,L=new N,R=new N;function C(U){L.fromBufferAttribute(r,U),R.copy(L);const w=a[U];S.copy(w),S.sub(L.multiplyScalar(L.dot(w))).normalize(),M.crossVectors(R,w);const T=M.dot(c[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,T)}for(let U=0,w=A.length;U<w;++U){const y=A[U],T=y.start,k=y.count;for(let z=T,H=T+k;z<H;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let p=0,d=e.count;p<d;p+=3){const v=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,p=new l.constructor(c.length*u);let d=0,v=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let f=0;f<u;f++)p[v++]=l[d++]}return new Jt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const p=l[u],d=e(p,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new lt,Tn=new ru,sr=new Lo,ga=new N,or=new N,ar=new N,lr=new N,ls=new N,cr=new N,va=new N,ur=new N;class ut extends gt{constructor(e=new Ot,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ls.fromBufferAttribute(h,e),o?cr.addScaledVector(ls,u):cr.addScaledVector(ls.sub(t),u))}t.add(cr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),Tn.copy(e.ray).recast(e.near),!(sr.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(sr,ga)===null||Tn.origin.distanceToSquared(ga)>(e.far-e.near)**2))&&(ma.copy(s).invert(),Tn.copy(e.ray).applyMatrix4(ma),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=o[m.materialIndex],A=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,L=S;M<L;M+=3){const R=a.getX(M),C=a.getX(M+1),U=a.getX(M+2);r=hr(this,f,e,n,l,u,h,R,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=v,f=x;m<f;m+=3){const A=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=hr(this,o,e,n,l,u,h,A,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=o[m.materialIndex],A=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,L=S;M<L;M+=3){const R=M,C=M+1,U=M+2;r=hr(this,f,e,n,l,u,h,R,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=v,f=x;m<f;m+=3){const A=m,S=m+1,M=m+2;r=hr(this,o,e,n,l,u,h,A,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pu(i,e,t,n,r,s,o,a){let c;if(e.side===yt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===fn,a),c===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ur);return l<t.near||l>t.far?null:{distance:l,point:ur.clone(),object:i}}function hr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,or),i.getVertexPosition(c,ar),i.getVertexPosition(l,lr);const u=pu(i,e,t,n,or,ar,lr,va);if(u){const h=new N;Gt.getBarycoord(va,or,ar,lr,h),r&&(u.uv=Gt.getInterpolatedAttribute(r,a,c,l,h,new Me)),s&&(u.uv1=Gt.getInterpolatedAttribute(s,a,c,l,h,new Me)),o&&(u.normal=Gt.getInterpolatedAttribute(o,a,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new N,materialIndex:0};Gt.getNormal(or,ar,lr,p.normal),u.face=p,u.barycoord=h}return u}class Xi extends Ot{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let p=0,d=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function v(x,m,f,A,S,M,L,R,C,U,w){const y=M/C,T=L/U,k=M/2,z=L/2,H=R/2,X=C+1,W=U+1;let ie=0,q=0;const de=new N;for(let j=0;j<W;j++){const fe=j*T-z;for(let ge=0;ge<X;ge++){const Pe=ge*y-k;de[x]=Pe*A,de[m]=fe*S,de[f]=H,l.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[f]=R>0?1:-1,u.push(de.x,de.y,de.z),h.push(ge/C),h.push(1-j/U),ie+=1}}for(let j=0;j<U;j++)for(let fe=0;fe<C;fe++){const ge=p+fe+X*j,Pe=p+fe+X*(j+1),Ne=p+(fe+1)+X*(j+1),ke=p+(fe+1)+X*j;c.push(ge,Pe,ke),c.push(Pe,Ne,ke),q+=6}a.addGroup(d,q,w),d+=q,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function mu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const gu={clone:pi,merge:Mt};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bl extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new N,_a=new Me,xa=new Me;class Ct extends bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,_a,xa),t.subVectors(xa,_a)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class xu extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct(ei,ti,e,t);r.layers=this.layers,this.add(r);const s=new Ct(ei,ti,e,t);s.layers=this.layers,this.add(s);const o=new Ct(ei,ti,e,t);o.layers=this.layers,this.add(o);const a=new Ct(ei,ti,e,t);a.layers=this.layers,this.add(a);const c=new Ct(ei,ti,e,t);c.layers=this.layers,this.add(c);const l=new Ct(ei,ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Yt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ml extends xt{constructor(e=[],t=ui,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bu extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ml(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:wn});s.uniforms.tEquirect.value=t;const o=new ut(r,s),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Ft),new xu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Ut extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mu={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,v=.005;l.inputState.pinching&&p>d+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mu)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Co extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const us=new N,yu=new N,wu=new We;class Pn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=us.subVectors(n,t).cross(yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wu.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Lo,Su=new Me(.5,.5),dr=new N;class Uo{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yt,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],p=s[6],d=s[7],v=s[8],x=s[9],m=s[10],f=s[11],A=s[12],S=s[13],M=s[14],L=s[15];if(r[0].setComponents(l-o,d-u,f-v,L-A).normalize(),r[1].setComponents(l+o,d+u,f+v,L+A).normalize(),r[2].setComponents(l+a,d+h,f+x,L+S).normalize(),r[3].setComponents(l-a,d-h,f-x,L-S).normalize(),n)r[4].setComponents(c,p,m,M).normalize(),r[5].setComponents(l-c,d-p,f-m,L-M).normalize();else if(r[4].setComponents(l-c,d-p,f-m,L-M).normalize(),t===Yt)r[5].setComponents(l+c,d+p,f+m,L+M).normalize();else if(t===Lr)r[5].setComponents(c,p,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){Ln.center.set(0,0,0);const t=Su.distanceTo(e.center);return Ln.radius=.7071067811865476+t,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(dr.x=r.normal.x>0?e.max.x:e.min.x,dr.y=r.normal.y>0?e.max.y:e.min.y,dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eu extends xt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yl extends xt{constructor(e,t,n=kn,r,s,o,a=Ht,c=Ht,l,u=Ii,h=1){if(u!==Ii&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new To(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wl extends xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nr extends Ot{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new N,u=new Me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){const d=n+h/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fr extends Ot{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],d=[];let v=0;const x=[],m=n/2;let f=0;A(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(p,3)),this.setAttribute("uv",new ht(d,2));function A(){const M=new N,L=new N;let R=0;const C=(t-e)/n;for(let U=0;U<=s;U++){const w=[],y=U/s,T=y*(t-e)+e;for(let k=0;k<=r;k++){const z=k/r,H=z*c+a,X=Math.sin(H),W=Math.cos(H);L.x=T*X,L.y=-y*n+m,L.z=T*W,h.push(L.x,L.y,L.z),M.set(X,C,W).normalize(),p.push(M.x,M.y,M.z),d.push(z,1-y),w.push(v++)}x.push(w)}for(let U=0;U<r;U++)for(let w=0;w<s;w++){const y=x[w][U],T=x[w+1][U],k=x[w+1][U+1],z=x[w][U+1];(e>0||w!==0)&&(u.push(y,T,z),R+=3),(t>0||w!==s-1)&&(u.push(T,k,z),R+=3)}l.addGroup(f,R,0),f+=R}function S(M){const L=v,R=new Me,C=new N;let U=0;const w=M===!0?e:t,y=M===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,m*y,0),p.push(0,y,0),d.push(.5,.5),v++;const T=v;for(let k=0;k<=r;k++){const H=k/r*c+a,X=Math.cos(H),W=Math.sin(H);C.x=w*W,C.y=m*y,C.z=w*X,h.push(C.x,C.y,C.z),p.push(0,y,0),R.x=X*.5+.5,R.y=W*.5*y+.5,d.push(R.x,R.y),v++}for(let k=0;k<r;k++){const z=L+k,H=T+k;M===!0?u.push(H,H+1,z):u.push(H+1,H,z),U+=3}l.addGroup(f,U,M===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],p=n[r+1]-u,d=(o-u)/p;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Me:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,r=[],s=[],o=[],a=new N,c=new lt;for(let d=0;d<=e;d++){const v=d/e;r[d]=this.getTangentAt(v,new N)}s[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(qe(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,v))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(qe(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let v=1;v<=e;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],d*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Po extends $t{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Me){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*u-d*h+this.aX,l=p*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Au extends Po{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let p=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;p*=u,d*=u,r(o,a,p,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const fr=new N,hs=new Do,ds=new Do,fs=new Do;class Ru extends $t{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(fr.subVectors(r[0],r[1]).add(r[0]),l=fr);const h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(fr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=fr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),hs.initNonuniformCatmullRom(l.x,h.x,p.x,u.x,v,x,m),ds.initNonuniformCatmullRom(l.y,h.y,p.y,u.y,v,x,m),fs.initNonuniformCatmullRom(l.z,h.z,p.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(hs.initCatmullRom(l.x,h.x,p.x,u.x,this.tension),ds.initCatmullRom(l.y,h.y,p.y,u.y,this.tension),fs.initCatmullRom(l.z,h.z,p.z,u.z,this.tension));return n.set(hs.calc(c),ds.calc(c),fs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ba(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function Tu(i,e){const t=1-i;return t*t*e}function Lu(i,e){return 2*(1-i)*i*e}function Cu(i,e){return i*i*e}function Li(i,e,t,n){return Tu(i,e)+Lu(i,t)+Cu(i,n)}function Uu(i,e){const t=1-i;return t*t*t*e}function Pu(i,e){const t=1-i;return 3*t*t*i*e}function Du(i,e){return 3*(1-i)*i*i*e}function Iu(i,e){return i*i*i*e}function Ci(i,e,t,n,r){return Uu(i,e)+Pu(i,t)+Du(i,n)+Iu(i,r)}class Sl extends $t{constructor(e=new Me,t=new Me,n=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ci(e,r.x,s.x,o.x,a.x),Ci(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nu extends $t{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ci(e,r.x,s.x,o.x,a.x),Ci(e,r.y,s.y,o.y,a.y),Ci(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class El extends $t{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fu extends $t{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Al extends $t{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Li(e,r.x,s.x,o.x),Li(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ou extends $t{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Li(e,r.x,s.x,o.x),Li(e,r.y,s.y,o.y),Li(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rl extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(ba(a,c.x,l.x,u.x,h.x),ba(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Me().fromArray(r))}return this}}var po=Object.freeze({__proto__:null,ArcCurve:Au,CatmullRomCurve3:Ru,CubicBezierCurve:Sl,CubicBezierCurve3:Nu,EllipseCurve:Po,LineCurve:El,LineCurve3:Fu,QuadraticBezierCurve:Al,QuadraticBezierCurve3:Ou,SplineCurve:Rl});class ku extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new po[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new po[r.type]().fromJSON(r))}return this}}class mo extends ku{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new El(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Al(this.currentPoint.clone(),new Me(e,t),new Me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Sl(this.currentPoint.clone(),new Me(e,t),new Me(n,r),new Me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Rl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const l=new Po(e,t,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Io extends mo{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new mo().fromJSON(r))}return this}}function Bu(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Tl(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=Wu(i,e,s,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let p=t;p<r;p+=t){const d=i[p],v=i[p+1];d<a&&(a=d),v<c&&(c=v),d>u&&(u=d),v>h&&(h=v)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return ki(s,o,t,a,c,l,0),o}function Tl(i,e,t,n,r){let s;if(r===th(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Ma(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Ma(o/n|0,i[o],i[o+1],s);return s&&mi(s,s.next)&&(zi(s),s=s.next),s}function zn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mi(t,t.next)||at(t.prev,t,t.next)===0)){if(zi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ki(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Ku(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?Gu(i,n,r,s):zu(i)){e.push(c.i,i.i,l.i),zi(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Vu(zn(i),e),ki(i,e,t,n,r,s,2)):o===2&&Hu(i,e,t,n,r,s):ki(zn(i),e,t,n,r,s,1);break}}}function zu(i){const e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(r,s,o),h=Math.min(a,c,l),p=Math.max(r,s,o),d=Math.max(a,c,l);let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=p&&v.y>=h&&v.y<=d&&Ai(r,a,s,c,o,l,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Gu(i,e,t,n){const r=i.prev,s=i,o=i.next;if(at(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,p=o.y,d=Math.min(a,c,l),v=Math.min(u,h,p),x=Math.max(a,c,l),m=Math.max(u,h,p),f=go(d,v,e,t,n),A=go(x,m,e,t,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=f&&M&&M.z<=A;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==o&&Ai(a,u,c,h,l,p,S.x,S.y)&&at(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=x&&M.y>=v&&M.y<=m&&M!==r&&M!==o&&Ai(a,u,c,h,l,p,M.x,M.y)&&at(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=f;){if(S.x>=d&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==o&&Ai(a,u,c,h,l,p,S.x,S.y)&&at(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=A;){if(M.x>=d&&M.x<=x&&M.y>=v&&M.y<=m&&M!==r&&M!==o&&Ai(a,u,c,h,l,p,M.x,M.y)&&at(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vu(i,e){let t=i;do{const n=t.prev,r=t.next.next;!mi(n,r)&&Cl(n,t,t.next,r)&&Bi(n,r)&&Bi(r,n)&&(e.push(n.i,t.i,r.i),zi(t),zi(t.next),t=i=r),t=t.next}while(t!==i);return zn(t)}function Hu(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qu(o,a)){let c=Ul(o,a);o=zn(o,o.next),c=zn(c,c.next),ki(o,e,t,n,r,s,0),ki(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Wu(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=Tl(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(ju(l))}r.sort(Xu);for(let s=0;s<r.length;s++)t=qu(r[s],t);return t}function Xu(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function qu(i,e){const t=Yu(i,e);if(!t)return e;const n=Ul(t,i);return zn(n,n.next),zn(t,t.next)}function Yu(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(mi(i,t))return t;do{if(mi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ll(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);Bi(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Zu(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Zu(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function Ku(i,e,t,n){let r=i;do r.z===0&&(r.z=go(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ju(r)}function Ju(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function go(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ju(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ll(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Ai(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Ll(i,e,t,n,r,s,o,a)}function Qu(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$u(i,e)&&(Bi(i,e)&&Bi(e,i)&&eh(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||mi(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mi(i,e){return i.x===e.x&&i.y===e.y}function Cl(i,e,t,n){const r=mr(at(i,e,t)),s=mr(at(i,e,n)),o=mr(at(t,n,i)),a=mr(at(t,n,e));return!!(r!==s&&o!==a||r===0&&pr(i,t,e)||s===0&&pr(i,n,e)||o===0&&pr(t,i,n)||a===0&&pr(t,e,n))}function pr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function mr(i){return i>0?1:i<0?-1:0}function $u(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Cl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bi(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function eh(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ul(i,e){const t=vo(i.i,i.x,i.y),n=vo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ma(i,e,t,n){const r=vo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function th(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class nh{static triangulate(e,t,n=2){return Bu(e,t,n)}}class Zt{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Zt.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ya(e),wa(n,e);let o=e.length;t.forEach(ya);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,wa(n,t[c]);const a=nh.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ya(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wa(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class No extends Ot{constructor(e=new Io([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ht(r,3)),this.setAttribute("uv",new ht(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:ih;let S,M=!1,L,R,C,U;f&&(S=f.getSpacedPoints(u),M=!0,p=!1,L=f.computeFrenetFrames(u,!1),R=new N,C=new N,U=new N),p||(m=0,d=0,v=0,x=0);const w=a.extractPoints(l);let y=w.shape;const T=w.holes;if(!Zt.isClockWise(y)){y=y.reverse();for(let oe=0,te=T.length;oe<te;oe++){const $=T[oe];Zt.isClockWise($)&&(T[oe]=$.reverse())}}function z(oe){const $=10000000000000001e-36;let I=oe[0];for(let Q=1;Q<=oe.length;Q++){const ne=Q%oe.length,re=oe[ne],V=re.x-I.x,ce=re.y-I.y,_=V*V+ce*ce,g=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(I.x),Math.abs(I.y)),P=$*g*g;if(_<=P){oe.splice(ne,1),Q--;continue}I=re}}z(y),T.forEach(z);const H=T.length,X=y;for(let oe=0;oe<H;oe++){const te=T[oe];y=y.concat(te)}function W(oe,te,$){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(te,$)}const ie=y.length;function q(oe,te,$){let I,Q,ne;const re=oe.x-te.x,V=oe.y-te.y,ce=$.x-oe.x,_=$.y-oe.y,g=re*re+V*V,P=re*_-V*ce;if(Math.abs(P)>Number.EPSILON){const B=Math.sqrt(g),Z=Math.sqrt(ce*ce+_*_),G=te.x-V/B,ye=te.y+re/B,le=$.x-_/Z,xe=$.y+ce/Z,_e=((le-G)*_-(xe-ye)*ce)/(re*_-V*ce);I=G+re*_e-oe.x,Q=ye+V*_e-oe.y;const ae=I*I+Q*Q;if(ae<=2)return new Me(I,Q);ne=Math.sqrt(ae/2)}else{let B=!1;re>Number.EPSILON?ce>Number.EPSILON&&(B=!0):re<-Number.EPSILON?ce<-Number.EPSILON&&(B=!0):Math.sign(V)===Math.sign(_)&&(B=!0),B?(I=-V,Q=re,ne=Math.sqrt(g)):(I=re,Q=V,ne=Math.sqrt(g/2))}return new Me(I/ne,Q/ne)}const de=[];for(let oe=0,te=X.length,$=te-1,I=oe+1;oe<te;oe++,$++,I++)$===te&&($=0),I===te&&(I=0),de[oe]=q(X[oe],X[$],X[I]);const j=[];let fe,ge=de.concat();for(let oe=0,te=H;oe<te;oe++){const $=T[oe];fe=[];for(let I=0,Q=$.length,ne=Q-1,re=I+1;I<Q;I++,ne++,re++)ne===Q&&(ne=0),re===Q&&(re=0),fe[I]=q($[I],$[ne],$[re]);j.push(fe),ge=ge.concat(fe)}let Pe;if(m===0)Pe=Zt.triangulateShape(X,T);else{const oe=[],te=[];for(let $=0;$<m;$++){const I=$/m,Q=d*Math.cos(I*Math.PI/2),ne=v*Math.sin(I*Math.PI/2)+x;for(let re=0,V=X.length;re<V;re++){const ce=W(X[re],de[re],ne);Ae(ce.x,ce.y,-Q),I===0&&oe.push(ce)}for(let re=0,V=H;re<V;re++){const ce=T[re];fe=j[re];const _=[];for(let g=0,P=ce.length;g<P;g++){const B=W(ce[g],fe[g],ne);Ae(B.x,B.y,-Q),I===0&&_.push(B)}I===0&&te.push(_)}}Pe=Zt.triangulateShape(oe,te)}const Ne=Pe.length,ke=v+x;for(let oe=0;oe<ie;oe++){const te=p?W(y[oe],ge[oe],ke):y[oe];M?(C.copy(L.normals[0]).multiplyScalar(te.x),R.copy(L.binormals[0]).multiplyScalar(te.y),U.copy(S[0]).add(C).add(R),Ae(U.x,U.y,U.z)):Ae(te.x,te.y,0)}for(let oe=1;oe<=u;oe++)for(let te=0;te<ie;te++){const $=p?W(y[te],ge[te],ke):y[te];M?(C.copy(L.normals[oe]).multiplyScalar($.x),R.copy(L.binormals[oe]).multiplyScalar($.y),U.copy(S[oe]).add(C).add(R),Ae(U.x,U.y,U.z)):Ae($.x,$.y,h/u*oe)}for(let oe=m-1;oe>=0;oe--){const te=oe/m,$=d*Math.cos(te*Math.PI/2),I=v*Math.sin(te*Math.PI/2)+x;for(let Q=0,ne=X.length;Q<ne;Q++){const re=W(X[Q],de[Q],I);Ae(re.x,re.y,h+$)}for(let Q=0,ne=T.length;Q<ne;Q++){const re=T[Q];fe=j[Q];for(let V=0,ce=re.length;V<ce;V++){const _=W(re[V],fe[V],I);M?Ae(_.x,_.y+S[u-1].y,S[u-1].x+$):Ae(_.x,_.y,h+$)}}}Y(),ee();function Y(){const oe=r.length/3;if(p){let te=0,$=ie*te;for(let I=0;I<Ne;I++){const Q=Pe[I];Se(Q[2]+$,Q[1]+$,Q[0]+$)}te=u+m*2,$=ie*te;for(let I=0;I<Ne;I++){const Q=Pe[I];Se(Q[0]+$,Q[1]+$,Q[2]+$)}}else{for(let te=0;te<Ne;te++){const $=Pe[te];Se($[2],$[1],$[0])}for(let te=0;te<Ne;te++){const $=Pe[te];Se($[0]+ie*u,$[1]+ie*u,$[2]+ie*u)}}n.addGroup(oe,r.length/3-oe,0)}function ee(){const oe=r.length/3;let te=0;ve(X,te),te+=X.length;for(let $=0,I=T.length;$<I;$++){const Q=T[$];ve(Q,te),te+=Q.length}n.addGroup(oe,r.length/3-oe,1)}function ve(oe,te){let $=oe.length;for(;--$>=0;){const I=$;let Q=$-1;Q<0&&(Q=oe.length-1);for(let ne=0,re=u+m*2;ne<re;ne++){const V=ie*ne,ce=ie*(ne+1),_=te+I+V,g=te+Q+V,P=te+Q+ce,B=te+I+ce;Ge(_,g,P,B)}}}function Ae(oe,te,$){c.push(oe),c.push(te),c.push($)}function Se(oe,te,$){je(oe),je(te),je($);const I=r.length/3,Q=A.generateTopUV(n,r,I-3,I-2,I-1);E(Q[0]),E(Q[1]),E(Q[2])}function Ge(oe,te,$,I){je(oe),je(te),je(I),je(te),je($),je(I);const Q=r.length/3,ne=A.generateSideWallUV(n,r,Q-6,Q-3,Q-2,Q-1);E(ne[0]),E(ne[1]),E(ne[3]),E(ne[1]),E(ne[2]),E(ne[3])}function je(oe){r.push(c[oe*3+0]),r.push(c[oe*3+1]),r.push(c[oe*3+2])}function E(oe){s.push(oe.x),s.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rh(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new po[r.type]().fromJSON(r)),new No(n,e.options)}}const ih={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new Me(s,o),new Me(a,c),new Me(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],p=e[r*3],d=e[r*3+1],v=e[r*3+2],x=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Me(o,1-c),new Me(l,1-h),new Me(p,1-v),new Me(x,1-f)]:[new Me(a,1-c),new Me(u,1-h),new Me(d,1-v),new Me(m,1-f)]}};function rh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qi extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,p=t/c,d=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const A=f*p-o;for(let S=0;S<l;S++){const M=S*h-s;v.push(M,-A,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){const S=A+l*f,M=A+l*(f+1),L=A+1+l*(f+1),R=A+1+l*f;d.push(S,M,R),d.push(M,L,R)}this.setIndex(d),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ui extends Ot{constructor(e=new Io([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(s,3)),this.setAttribute("uv",new ht(o,2));function l(u){const h=r.length/3,p=u.extractPoints(t);let d=p.shape;const v=p.holes;Zt.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=v.length;m<f;m++){const A=v[m];Zt.isClockWise(A)===!0&&(v[m]=A.reverse())}const x=Zt.triangulateShape(d,v);for(let m=0,f=v.length;m<f;m++){const A=v[m];d=d.concat(A)}for(let m=0,f=d.length;m<f;m++){const A=d[m];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let m=0,f=x.length;m<f;m++){const A=x[m],S=A[0]+h,M=A[1]+h,L=A[2]+h;n.push(S,M,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return sh(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Ui(n,e.curveSegments)}}function sh(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Pl extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oh extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ps={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lh{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const d=l[h],v=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ch=new lh;class Fo{constructor(e){this.manager=e!==void 0?e:ch,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni=new WeakMap;class uh extends Fo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ps.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=ni.get(o);h===void 0&&(h=[],ni.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=Fi("img");function c(){u(),t&&t(this);const h=ni.get(this)||[];for(let p=0;p<h.length;p++){const d=h[p];d.onLoad&&d.onLoad(this)}ni.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),ps.remove(`image:${e}`);const p=ni.get(this)||[];for(let d=0;d<p.length;d++){const v=p[d];v.onError&&v.onError(h)}ni.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ps.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class hh extends Fo{constructor(e){super(e)}load(e,t,n,r){const s=new xt,o=new uh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Dl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Il extends Dl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ms=new lt,Sa=new N,Ea=new N;class dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sa),Ea.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ea),t.updateMatrixWorld(),ms.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ms,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ms)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oo extends bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fh extends dh{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _o extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ph extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Aa(i,e,t,n){const r=mh(n);switch(t){case al:return i*e;case cl:return i*e/r.components*r.byteLength;case Eo:return i*e/r.components*r.byteLength;case ul:return i*e*2/r.components*r.byteLength;case Ao:return i*e*2/r.components*r.byteLength;case ll:return i*e*3/r.components*r.byteLength;case Vt:return i*e*4/r.components*r.byteLength;case Ro:return i*e*4/r.components*r.byteLength;case br:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bs:case Gs:return Math.max(i,16)*Math.max(e,8)/4;case ks:case zs:return Math.max(i,8)*Math.max(e,8)/2;case Vs:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Js:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $s:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case oo:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uo:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mh(i){switch(i){case jt:case il:return{byteLength:1,components:1};case Pi:case rl:case Vi:return{byteLength:2,components:1};case wo:case So:return{byteLength:2,components:4};case kn:case yo:case cn:return{byteLength:4,components:1};case sl:case ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function gh(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,v)=>d.start-v.start);let p=0;for(let d=1;d<h.length;d++){const v=h[p],x=h[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,h[p]=x)}h.length=p+1;for(let d=0,v=h.length;d<v;d++){const x=h[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_h=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ad=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,df=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ef=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:vh,alphahash_pars_fragment:_h,alphamap_fragment:xh,alphamap_pars_fragment:bh,alphatest_fragment:Mh,alphatest_pars_fragment:yh,aomap_fragment:wh,aomap_pars_fragment:Sh,batching_pars_vertex:Eh,batching_vertex:Ah,begin_vertex:Rh,beginnormal_vertex:Th,bsdfs:Lh,iridescence_fragment:Ch,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Dh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:kh,color_vertex:Bh,common:zh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:Kh,envmap_common_pars_fragment:Jh,envmap_pars_fragment:jh,envmap_pars_vertex:Qh,envmap_physical_pars_fragment:cd,envmap_vertex:$h,fog_vertex:ed,fog_pars_vertex:td,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:rd,lightmap_pars_fragment:sd,lights_lambert_fragment:od,lights_lambert_pars_fragment:ad,lights_pars_begin:ld,lights_toon_fragment:ud,lights_toon_pars_fragment:hd,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:vd,lights_fragment_end:_d,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:yd,map_fragment:wd,map_pars_fragment:Sd,map_particle_fragment:Ed,map_particle_pars_fragment:Ad,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Td,morphinstance_vertex:Ld,morphcolor_vertex:Cd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Pd,morphtarget_vertex:Dd,normal_fragment_begin:Id,normal_fragment_maps:Nd,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:kd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Vd,iridescence_pars_fragment:Hd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:Zd,dithering_pars_fragment:Kd,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:$d,shadowmap_vertex:ef,shadowmask_pars_fragment:tf,skinbase_vertex:nf,skinning_pars_vertex:rf,skinning_vertex:sf,skinnormal_vertex:of,specularmap_fragment:af,specularmap_pars_fragment:lf,tonemapping_fragment:cf,tonemapping_pars_fragment:uf,transmission_fragment:hf,transmission_pars_fragment:df,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:vf,background_frag:_f,backgroundCube_vert:xf,backgroundCube_frag:bf,cube_vert:Mf,cube_frag:yf,depth_vert:wf,depth_frag:Sf,distanceRGBA_vert:Ef,distanceRGBA_frag:Af,equirect_vert:Rf,equirect_frag:Tf,linedashed_vert:Lf,linedashed_frag:Cf,meshbasic_vert:Uf,meshbasic_frag:Pf,meshlambert_vert:Df,meshlambert_frag:If,meshmatcap_vert:Nf,meshmatcap_frag:Ff,meshnormal_vert:Of,meshnormal_frag:kf,meshphong_vert:Bf,meshphong_frag:zf,meshphysical_vert:Gf,meshphysical_frag:Vf,meshtoon_vert:Hf,meshtoon_frag:Wf,points_vert:Xf,points_frag:qf,shadow_vert:Yf,shadow_frag:Zf,sprite_vert:Kf,sprite_frag:Jf},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Xt={basic:{uniforms:Mt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Mt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Mt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Mt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Mt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Mt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Mt([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Mt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Mt([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Mt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Mt([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Mt([Ee.common,Ee.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Mt([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Xt.physical={uniforms:Mt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const gr={r:0,b:0,g:0},Cn=new Qt,jf=new lt;function Qf(i,e,t,n,r,s,o){const a=new Ze(0);let c=s===!0?0:1,l,u,h=null,p=0,d=null;function v(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1;const L=v(S);L===null?f(a,c):L&&L.isColor&&(f(L,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){const L=v(M);L&&(L.isCubeTexture||L.mapping===Ir)?(u===void 0&&(u=new ut(new Xi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:pi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cn.copy(M.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(Cn)),u.material.toneMapped=Je.getTransfer(L.colorSpace)!==et,(h!==L||p!==L.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,p=L.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new ut(new qi(2,2),new pn({name:"BackgroundMaterial",uniforms:pi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(L.colorSpace)!==et,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||p!==L.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,p=L.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,M){S.getRGB(gr,xl(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,M,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:x,addToRenderList:m,dispose:A}}function $f(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(y,T,k,z,H){let X=!1;const W=h(z,k,T);s!==W&&(s=W,l(s.object)),X=d(y,z,k,H),X&&v(y,z,k,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(y,T,k,z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,T,k){const z=k.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let X=H[T.id];X===void 0&&(X={},H[T.id]=X);let W=X[z];return W===void 0&&(W=p(c()),X[z]=W),W}function p(y){const T=[],k=[],z=[];for(let H=0;H<t;H++)T[H]=0,k[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,T,k,z){const H=s.attributes,X=T.attributes;let W=0;const ie=k.getAttributes();for(const q in ie)if(ie[q].location>=0){const j=H[q];let fe=X[q];if(fe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),j===void 0||j.attribute!==fe||fe&&j.data!==fe.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function v(y,T,k,z){const H={},X=T.attributes;let W=0;const ie=k.getAttributes();for(const q in ie)if(ie[q].location>=0){let j=X[q];j===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));const fe={};fe.attribute=j,j&&j.data&&(fe.data=j.data),H[q]=fe,W++}s.attributes=H,s.attributesNum=W,s.index=z}function x(){const y=s.newAttributes;for(let T=0,k=y.length;T<k;T++)y[T]=0}function m(y){f(y,0)}function f(y,T){const k=s.newAttributes,z=s.enabledAttributes,H=s.attributeDivisors;k[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),H[y]!==T&&(i.vertexAttribDivisor(y,T),H[y]=T)}function A(){const y=s.newAttributes,T=s.enabledAttributes;for(let k=0,z=T.length;k<z;k++)T[k]!==y[k]&&(i.disableVertexAttribArray(k),T[k]=0)}function S(y,T,k,z,H,X,W){W===!0?i.vertexAttribIPointer(y,T,k,H,X):i.vertexAttribPointer(y,T,k,z,H,X)}function M(y,T,k,z){x();const H=z.attributes,X=k.getAttributes(),W=T.defaultAttributeValues;for(const ie in X){const q=X[ie];if(q.location>=0){let de=H[ie];if(de===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){const j=de.normalized,fe=de.itemSize,ge=e.get(de);if(ge===void 0)continue;const Pe=ge.buffer,Ne=ge.type,ke=ge.bytesPerElement,Y=Ne===i.INT||Ne===i.UNSIGNED_INT||de.gpuType===yo;if(de.isInterleavedBufferAttribute){const ee=de.data,ve=ee.stride,Ae=de.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)f(q.location+Se,ee.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Se=0;Se<q.locationSize;Se++)S(q.location+Se,fe/q.locationSize,Ne,j,ve*ke,(Ae+fe/q.locationSize*Se)*ke,Y)}else{if(de.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)f(q.location+ee,de.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ee=0;ee<q.locationSize;ee++)S(q.location+ee,fe/q.locationSize,Ne,j,fe*ke,fe/q.locationSize*ee*ke,Y)}}else if(W!==void 0){const j=W[ie];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(q.location,j);break;case 3:i.vertexAttrib3fv(q.location,j);break;case 4:i.vertexAttrib4fv(q.location,j);break;default:i.vertexAttrib1fv(q.location,j)}}}}A()}function L(){U();for(const y in n){const T=n[y];for(const k in T){const z=T[k];for(const H in z)u(z[H].object),delete z[H];delete T[k]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const T=n[y.id];for(const k in T){const z=T[k];for(const H in z)u(z[H].object),delete z[H];delete T[k]}delete n[y.id]}function C(y){for(const T in n){const k=n[T];if(k[y.id]===void 0)continue;const z=k[y.id];for(const H in z)u(z[H].object),delete z[H];delete k[y.id]}}function U(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function ep(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let v=0;v<h;v++)d+=u[v];t.update(d,n,1)}function c(l,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<l.length;v++)o(l[v],u[v],p[v]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*p[x];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Vt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!U)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:R}}function np(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Pn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||n!==0||r;return r=p,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):l();else{const A=s?0:n,S=A*4;let M=f.clippingState||null;c.value=M,M=u(v,p,S,d);for(let L=0;L!==S;++L)M[L]=t[L];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const f=d+x*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,M=d;S!==x;++S,M+=4)o.copy(h[S]).applyMatrix4(A,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ip(i){let e=new WeakMap;function t(o,a){return a===Is?o.mapping=ui:a===Ns&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Is||a===Ns)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const si=4,Ra=[.125,.215,.35,.446,.526,.582],Nn=20,gs=new Oo,Ta=new Ze;let vs=null,_s=0,xs=0,bs=!1;const Dn=(1+Math.sqrt(5))/2,ii=1/Dn,La=[new N(-Dn,ii,0),new N(Dn,ii,0),new N(-ii,0,Dn),new N(ii,0,Dn),new N(0,Dn,-ii),new N(0,Dn,ii),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],rp=new N;class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=rp}=s;vs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vs,_s,xs),this._renderer.xr.enabled=bs,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Vi,format:Vt,colorSpace:di,depthBuffer:!1},r=Ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sp(s)),this._blurMaterial=op(s,e,t)}return r}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,n,r,s){const c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Ta),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new fi({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),m=new ut(new Xi,x);let f=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,f=!0):(x.color.copy(Ta),f=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):M===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));const L=this._cubeSize;vr(r,M*L,S>2?L:0,L,L),h.setRenderTarget(r),f&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ui||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Da()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=La[(r-s-1)%La.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ut(this._lodPlanes[r],l),p=l.uniforms,d=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Nn-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Nn;m>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);const f=[];let A=0;for(let C=0;C<Nn;++C){const U=C/x,w=Math.exp(-U*U/2);f.push(w),C===0?A+=w:C<m&&(A+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/A;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-n;const M=this._sizeLods[r],L=3*M*(r>S-si?r-S+si:0),R=4*(this._cubeSize-M);vr(t,L,R,3*M,2*M),c.setRenderTarget(t),c.render(h,gs)}}function sp(i){const e=[],t=[],n=[];let r=i;const s=i-si+1+Ra.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-si?c=Ra[o-i+si-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,x=3,m=2,f=1,A=new Float32Array(x*v*d),S=new Float32Array(m*v*d),M=new Float32Array(f*v*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,U=R>2?0:-1,w=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];A.set(w,x*v*R),S.set(p,m*v*R);const y=[R,R,R,R,R,R];M.set(y,f*v*R)}const L=new Ot;L.setAttribute("position",new Jt(A,x)),L.setAttribute("uv",new Jt(S,m)),L.setAttribute("faceIndex",new Jt(M,f)),e.push(L),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ua(i,e,t){const n=new Bn(i,e,t);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function op(i,e,t){const n=new Float32Array(Nn),r=new N(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Pa(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Da(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ap(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Is||c===Ns,u=c===ui||c===hi;if(l||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Ca(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Ca(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cp(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete r[p.id];const d=s.get(p);d&&(e.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const d in p)e.update(p[d],i.ARRAY_BUFFER)}function l(h){const p=[],d=h.index,v=h.attributes.position;let x=0;if(d!==null){const A=d.array;x=d.version;for(let S=0,M=A.length;S<M;S+=3){const L=A[S+0],R=A[S+1],C=A[S+2];p.push(L,R,R,C,C,L)}}else if(v!==void 0){const A=v.array;x=v.version;for(let S=0,M=A.length/3-1;S<M;S+=3){const L=S+0,R=S+1,C=S+2;p.push(L,R,R,C,C,L)}}else return;const m=new(fl(p)?_l:vl)(p,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const p=s.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function up(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,s,p*o),t.update(d,n,1)}function l(p,d,v){v!==0&&(i.drawElementsInstanced(n,d,s,p*o,v),t.update(d,n,v))}function u(p,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,v);let m=0;for(let f=0;f<v;f++)m+=d[f];t.update(m,n,1)}function h(p,d,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,d[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,x,0,v);let f=0;for(let A=0;A<v;A++)f+=d[A]*x[A];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dp(i,e,t){const n=new WeakMap,r=new ot;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();const d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),v===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*L*4*h),C=new pl(R,M,L,h);C.type=cn,C.needsUpdate=!0;const U=S*4;for(let y=0;y<h;y++){const T=m[y],k=f[y],z=A[y],H=M*L*4*y;for(let X=0;X<T.count;X++){const W=X*U;d===!0&&(r.fromBufferAttribute(T,X),R[H+W+0]=r.x,R[H+W+1]=r.y,R[H+W+2]=r.z,R[H+W+3]=0),v===!0&&(r.fromBufferAttribute(k,X),R[H+W+4]=r.x,R[H+W+5]=r.y,R[H+W+6]=r.z,R[H+W+7]=0),x===!0&&(r.fromBufferAttribute(z,X),R[H+W+8]=r.x,R[H+W+9]=r.y,R[H+W+10]=r.z,R[H+W+11]=z.itemSize===4?r.w:1)}}p={count:h,texture:C,size:new Me(M,L)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];const v=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function fp(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Fl=new xt,Ia=new yl(1,1),Ol=new pl,kl=new nu,Bl=new Ml,Na=[],Fa=[],Oa=new Float32Array(16),ka=new Float32Array(9),Ba=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Na[r];if(s===void 0&&(s=new Float32Array(r),Na[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Or(i,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function _p(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ba.set(n),i.uniformMatrix2fv(this.addr,!1,Ba),pt(t,n)}}function xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;ka.set(n),i.uniformMatrix3fv(this.addr,!1,ka),pt(t,n)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Oa.set(n),i.uniformMatrix4fv(this.addr,!1,Oa),pt(t,n)}}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ia.compareFunction=dl,s=Ia):s=Fl,t.setTexture2D(e||s,r)}function Cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kl,r)}function Up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bl,r)}function Pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ol,r)}function Dp(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return vp;case 35674:return _p;case 35675:return xp;case 35676:return bp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return wp;case 35669:case 35673:return Sp;case 5125:return Ep;case 36294:return Ap;case 36295:return Rp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Pp}}function Ip(i,e){i.uniform1fv(this.addr,e)}function Np(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function Fp(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Op(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function kp(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bp(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zp(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gp(i,e){i.uniform1iv(this.addr,e)}function Vp(i,e){i.uniform2iv(this.addr,e)}function Hp(i,e){i.uniform3iv(this.addr,e)}function Wp(i,e){i.uniform4iv(this.addr,e)}function Xp(i,e){i.uniform1uiv(this.addr,e)}function qp(i,e){i.uniform2uiv(this.addr,e)}function Yp(i,e){i.uniform3uiv(this.addr,e)}function Zp(i,e){i.uniform4uiv(this.addr,e)}function Kp(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fl,s[o])}function Jp(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||kl,s[o])}function jp(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bl,s[o])}function Qp(i,e,t){const n=this.cache,r=e.length,s=Or(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ol,s[o])}function $p(i){switch(i){case 5126:return Ip;case 35664:return Np;case 35665:return Fp;case 35666:return Op;case 35674:return kp;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return Gp;case 35667:case 35671:return Vp;case 35668:case 35672:return Hp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Qp}}class em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dp(t.type)}}class tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$p(t.type)}}class nm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ms=/(\w+)(\])?(\[|\.)?/g;function za(i,e){i.seq.push(e),i.map[e.id]=e}function im(i,e,t){const n=i.name,r=n.length;for(Ms.lastIndex=0;;){const s=Ms.exec(n),o=Ms.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){za(t,l===void 0?new em(a,i,e):new tm(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new nm(a),za(t,h)),t=h}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);im(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ga(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rm=37297;let sm=0;function om(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Va=new We;function am(i){Je._getMatrix(Va,Je.workingColorSpace,i);const e=`mat3( ${Va.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Tr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ha(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+om(i.getShaderSource(e),a)}else return s}function lm(i,e){const t=am(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cm(i,e){let t;switch(e){case Cc:t="Linear";break;case Uc:t="Reinhard";break;case Pc:t="Cineon";break;case Dc:t="ACESFilmic";break;case Nc:t="AgX";break;case Fc:t="Neutral";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new N;function um(){Je.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function dm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ri(i){return i!==""}function Wa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(i){return i.replace(pm,gm)}const mm=new Map;function gm(i,e){let t=Xe[e];if(t===void 0){const n=mm.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xo(t)}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qa(i){return i.replace(vm,_m)}function _m(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ya(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===el?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case hi:e="ENVMAP_TYPE_CUBE";break;case Ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function ym(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case Tc:e="ENVMAP_BLENDING_MIX";break;case Lc:e="ENVMAP_BLENDING_ADD";break}return e}function wm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=xm(t),l=bm(t),u=Mm(t),h=ym(t),p=wm(t),d=hm(t),v=dm(s),x=r.createProgram();let m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),f.length>0&&(f+=`
`)):(m=[Ya(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),f=[Ya(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Xe.tonemapping_pars_fragment:"",t.toneMapping!==un?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,lm("linearToOutputTexel",t.outputColorSpace),um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),o=xo(o),o=Wa(o,t),o=Xa(o,t),a=xo(a),a=Wa(a,t),a=Xa(a,t),o=qa(o),a=qa(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=A+m+o,M=A+f+a,L=Ga(r,r.VERTEX_SHADER,S),R=Ga(r,r.FRAGMENT_SHADER,M);r.attachShader(x,L),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(T){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(L)||"",H=r.getShaderInfoLog(R)||"",X=k.trim(),W=z.trim(),ie=H.trim();let q=!0,de=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,L,R);else{const j=Ha(r,L,"vertex"),fe=Ha(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+X+`
`+j+`
`+fe)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||ie==="")&&(de=!1);de&&(T.diagnostics={runnable:q,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:ie,prefix:f}})}r.deleteShader(L),r.deleteShader(R),U=new Sr(r,x),w=fm(r,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,rm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}let Em=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rm(e),t.set(e,n)),n}}class Rm{constructor(e){this.id=Em++,this.code=e,this.usedTimes=0}}function Tm(i,e,t,n,r,s,o){const a=new ml,c=new Am,l=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,y,T,k,z){const H=k.fog,X=z.geometry,W=w.isMeshStandardMaterial?k.environment:null,ie=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),q=ie&&ie.mapping===Ir?ie.image.height:null,de=v[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const j=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=j!==void 0?j.length:0;let ge=0;X.morphAttributes.position!==void 0&&(ge=1),X.morphAttributes.normal!==void 0&&(ge=2),X.morphAttributes.color!==void 0&&(ge=3);let Pe,Ne,ke,Y;if(de){const Qe=Xt[de];Pe=Qe.vertexShader,Ne=Qe.fragmentShader}else Pe=w.vertexShader,Ne=w.fragmentShader,c.update(w),ke=c.getVertexShaderID(w),Y=c.getFragmentShaderID(w);const ee=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,Ge=!!w.map,je=!!w.matcap,E=!!ie,oe=!!w.aoMap,te=!!w.lightMap,$=!!w.bumpMap,I=!!w.normalMap,Q=!!w.displacementMap,ne=!!w.emissiveMap,re=!!w.metalnessMap,V=!!w.roughnessMap,ce=w.anisotropy>0,_=w.clearcoat>0,g=w.dispersion>0,P=w.iridescence>0,B=w.sheen>0,Z=w.transmission>0,G=ce&&!!w.anisotropyMap,ye=_&&!!w.clearcoatMap,le=_&&!!w.clearcoatNormalMap,xe=_&&!!w.clearcoatRoughnessMap,_e=P&&!!w.iridescenceMap,ae=P&&!!w.iridescenceThicknessMap,ue=B&&!!w.sheenColorMap,Ce=B&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,we=!!w.specularColorMap,Ve=!!w.specularIntensityMap,D=Z&&!!w.transmissionMap,he=Z&&!!w.thicknessMap,be=!!w.gradientMap,Le=!!w.alphaMap,pe=w.alphaTest>0,se=!!w.alphaHash,Ie=!!w.extensions;let He=un;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(He=i.toneMapping);const nt={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:Pe,fragmentShader:Ne,defines:w.defines,customVertexShaderID:ke,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:di,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:je,envMap:E,envMapMode:E&&ie.mapping,envMapCubeUVHeight:q,aoMap:oe,lightMap:te,bumpMap:$,normalMap:I,displacementMap:p&&Q,emissiveMap:ne,normalMapObjectSpace:I&&w.normalMapType===zc,normalMapTangentSpace:I&&w.normalMapType===hl,metalnessMap:re,roughnessMap:V,anisotropy:ce,anisotropyMap:G,clearcoat:_,clearcoatMap:ye,clearcoatNormalMap:le,clearcoatRoughnessMap:xe,dispersion:g,iridescence:P,iridescenceMap:_e,iridescenceThicknessMap:ae,sheen:B,sheenColorMap:ue,sheenRoughnessMap:Ce,specularMap:Ue,specularColorMap:we,specularIntensityMap:Ve,transmission:Z,transmissionMap:D,thicknessMap:he,gradientMap:be,opaque:w.transparent===!1&&w.blending===ai&&w.alphaToCoverage===!1,alphaMap:Le,alphaTest:pe,alphaHash:se,combine:w.combine,mapUv:Ge&&x(w.map.channel),aoMapUv:oe&&x(w.aoMap.channel),lightMapUv:te&&x(w.lightMap.channel),bumpMapUv:$&&x(w.bumpMap.channel),normalMapUv:I&&x(w.normalMap.channel),displacementMapUv:Q&&x(w.displacementMap.channel),emissiveMapUv:ne&&x(w.emissiveMap.channel),metalnessMapUv:re&&x(w.metalnessMap.channel),roughnessMapUv:V&&x(w.roughnessMap.channel),anisotropyMapUv:G&&x(w.anisotropyMap.channel),clearcoatMapUv:ye&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(w.sheenRoughnessMap.channel),specularMapUv:Ue&&x(w.specularMap.channel),specularColorMapUv:we&&x(w.specularColorMap.channel),specularIntensityMapUv:Ve&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:he&&x(w.thicknessMap.channel),alphaMapUv:Le&&x(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(I||ce),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Ge||Le),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===et,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===et,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Nt,flipSided:w.side===yt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function f(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const T in w.defines)y.push(T),y.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(A(y,w),S(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function A(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function S(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){const y=v[w.type];let T;if(y){const k=Xt[y];T=gu.clone(k.uniforms)}else T=w.uniforms;return T}function L(w,y){let T;for(let k=0,z=u.length;k<z;k++){const H=u[k];if(H.cacheKey===y){T=H,++T.usedTimes;break}}return T===void 0&&(T=new Sm(i,y,w,s),u.push(T)),T}function R(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function C(w){c.remove(w)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:L,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:U}}function Lm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Cm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Za(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ka(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,d,v,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,p,d,v,x,m){const f=o(h,p,d,v,x,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function c(h,p,d,v,x,m){const f=o(h,p,d,v,x,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,p){t.length>1&&t.sort(h||Cm),n.length>1&&n.sort(p||Za),r.length>1&&r.sort(p||Za)}function u(){for(let h=e,p=i.length;h<p;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Um(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ka,i.set(n,[o])):r>=s.length?(o=new Ka,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Im=0;function Nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fm(i){const e=new Pm,t=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new lt,o=new lt;function a(l){let u=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,v=0,x=0,m=0,f=0,A=0,S=0,M=0,L=0,R=0,C=0;l.sort(Nm);for(let w=0,y=l.length;w<y;w++){const T=l[w],k=T.color,z=T.intensity,H=T.distance,X=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=k.r*z,h+=k.g*z,p+=k.b*z;else if(T.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(T.sh.coefficients[W],z);C++}else if(T.isDirectionalLight){const W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ie=T.shadow,q=t.get(T);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=T.shadow.matrix,A++}n.directional[d]=W,d++}else if(T.isSpotLight){const W=e.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(k).multiplyScalar(z),W.distance=H,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,n.spot[x]=W;const ie=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,ie.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[x]=ie.matrix,T.castShadow){const q=t.get(T);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=X,M++}x++}else if(T.isRectAreaLight){const W=e.get(T);W.color.copy(k).multiplyScalar(z),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=W,m++}else if(T.isPointLight){const W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.distance=T.distance,W.decay=T.decay,T.castShadow){const ie=T.shadow,q=t.get(T);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,q.shadowCameraNear=ie.camera.near,q.shadowCameraFar=ie.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=T.shadow.matrix,S++}n.point[v]=W,v++}else if(T.isHemisphereLight){const W=e.get(T);W.skyColor.copy(T.color).multiplyScalar(z),W.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==d||U.pointLength!==v||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==A||U.numPointShadows!==S||U.numSpotShadows!==M||U.numSpotMaps!==L||U.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,U.directionalLength=d,U.pointLength=v,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=A,U.numPointShadows=S,U.numSpotShadows=M,U.numSpotMaps=L,U.numLightProbes=C,n.version=Im++)}function c(l,u){let h=0,p=0,d=0,v=0,x=0;const m=u.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){const S=l[f];if(S.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(S.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Ja(i){const e=new Fm(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Om(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ja(i),e.set(r,[a])):s>=o.length?(a=new Ja(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zm(i,e,t){let n=new Uo;const r=new Me,s=new Me,o=new ot,a=new oh({depthPacking:Bc}),c=new ah,l={},u=t.maxTextureSize,h={[fn]:yt,[yt]:fn,[Nt]:Nt},p=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:km,fragmentShader:Bm}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ot;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ut(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let f=this.type;this.render=function(R,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),k=i.state;k.setBlending(wn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=f!==an&&this.type===an,H=f===an&&this.type!==an;for(let X=0,W=R.length;X<W;X++){const ie=R[X],q=ie.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const de=q.getFrameExtents();if(r.multiply(de),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,q.mapSize.y=s.y)),q.map===null||z===!0||H===!0){const fe=this.type!==an?{minFilter:Ht,magFilter:Ht}:{};q.map!==null&&q.map.dispose(),q.map=new Bn(r.x,r.y,fe),q.map.texture.name=ie.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const j=q.getViewportCount();for(let fe=0;fe<j;fe++){const ge=q.getViewport(fe);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),k.viewport(o),q.updateMatrices(ie,fe),n=q.getFrustum(),M(C,U,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===an&&A(q,U),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,T)};function A(R,C){const U=e.update(x);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bn(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,U,p,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,U,d,x,null)}function S(R,C,U,w){let y=null;const T=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)y=T;else if(y=U.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=y.uuid,z=C.uuid;let H=l[k];H===void 0&&(H={},l[k]=H);let X=H[z];X===void 0&&(X=y.clone(),H[z]=X,C.addEventListener("dispose",L)),y=X}if(y.visible=C.visible,y.wireframe=C.wireframe,w===an?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=U}return y}function M(R,C,U,w,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===an)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const z=e.update(R),H=R.material;if(Array.isArray(H)){const X=z.groups;for(let W=0,ie=X.length;W<ie;W++){const q=X[W],de=H[q.materialIndex];if(de&&de.visible){const j=S(R,de,w,y);R.onBeforeShadow(i,R,C,U,z,j,q),i.renderBufferDirect(U,null,z,j,R,q),R.onAfterShadow(i,R,C,U,z,j,q)}}}else if(H.visible){const X=S(R,H,w,y);R.onBeforeShadow(i,R,C,U,z,X,null),i.renderBufferDirect(U,null,z,X,R,null),R.onAfterShadow(i,R,C,U,z,X,null)}}const k=R.children;for(let z=0,H=k.length;z<H;z++)M(k[z],C,U,w,y)}function L(R){R.target.removeEventListener("dispose",L);for(const U in l){const w=l[U],y=R.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const Gm={[Rs]:Ts,[Ls]:Ps,[Cs]:Ds,[ci]:Us,[Ts]:Rs,[Ps]:Ls,[Ds]:Cs,[Us]:ci};function Vm(i,e){function t(){let D=!1;const he=new ot;let be=null;const Le=new ot(0,0,0,0);return{setMask:function(pe){be!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),be=pe)},setLocked:function(pe){D=pe},setClear:function(pe,se,Ie,He,nt){nt===!0&&(pe*=He,se*=He,Ie*=He),he.set(pe,se,Ie,He),Le.equals(he)===!1&&(i.clearColor(pe,se,Ie,He),Le.copy(he))},reset:function(){D=!1,be=null,Le.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,be=null,Le=null,pe=null;return{setReversed:function(se){if(he!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=se;const He=pe;pe=null,this.setClear(He)}},getReversed:function(){return he},setTest:function(se){se?ee(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(se){be!==se&&!D&&(i.depthMask(se),be=se)},setFunc:function(se){if(he&&(se=Gm[se]),Le!==se){switch(se){case Rs:i.depthFunc(i.NEVER);break;case Ts:i.depthFunc(i.ALWAYS);break;case Ls:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case Cs:i.depthFunc(i.EQUAL);break;case Us:i.depthFunc(i.GEQUAL);break;case Ps:i.depthFunc(i.GREATER);break;case Ds:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=se}},setLocked:function(se){D=se},setClear:function(se){pe!==se&&(he&&(se=1-se),i.clearDepth(se),pe=se)},reset:function(){D=!1,be=null,Le=null,pe=null,he=!1}}}function r(){let D=!1,he=null,be=null,Le=null,pe=null,se=null,Ie=null,He=null,nt=null;return{setTest:function(Qe){D||(Qe?ee(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Qe){he!==Qe&&!D&&(i.stencilMask(Qe),he=Qe)},setFunc:function(Qe,en,Wt){(be!==Qe||Le!==en||pe!==Wt)&&(i.stencilFunc(Qe,en,Wt),be=Qe,Le=en,pe=Wt)},setOp:function(Qe,en,Wt){(se!==Qe||Ie!==en||He!==Wt)&&(i.stencilOp(Qe,en,Wt),se=Qe,Ie=en,He=Wt)},setLocked:function(Qe){D=Qe},setClear:function(Qe){nt!==Qe&&(i.clearStencil(Qe),nt=Qe)},reset:function(){D=!1,he=null,be=null,Le=null,pe=null,se=null,Ie=null,He=null,nt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,d=[],v=null,x=!1,m=null,f=null,A=null,S=null,M=null,L=null,R=null,C=new Ze(0,0,0),U=0,w=!1,y=null,T=null,k=null,z=null,H=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ie>=2);let de=null,j={};const fe=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Pe=new ot().fromArray(fe),Ne=new ot().fromArray(ge);function ke(D,he,be,Le){const pe=new Uint8Array(4),se=i.createTexture();i.bindTexture(D,se),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<be;Ie++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(he+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return se}const Y={};Y[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(ci),$(!1),I(Jo),ee(i.CULL_FACE),oe(wn);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ve(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ae(D,he){return h[D]!==he?(i.bindFramebuffer(D,he),h[D]=he,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Se(D,he){let be=d,Le=!1;if(D){be=p.get(he),be===void 0&&(be=[],p.set(he,be));const pe=D.textures;if(be.length!==pe.length||be[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ie=pe.length;se<Ie;se++)be[se]=i.COLOR_ATTACHMENT0+se;be.length=pe.length,Le=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Le=!0);Le&&i.drawBuffers(be)}function Ge(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const je={[In]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[dc]:i.FUNC_REVERSE_SUBTRACT};je[fc]=i.MIN,je[pc]=i.MAX;const E={[mc]:i.ZERO,[gc]:i.ONE,[vc]:i.SRC_COLOR,[Es]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[xc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[As]:i.ONE_MINUS_SRC_ALPHA,[yc]:i.ONE_MINUS_DST_COLOR,[bc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[Ec]:i.ONE_MINUS_CONSTANT_COLOR,[Ac]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(D,he,be,Le,pe,se,Ie,He,nt,Qe){if(D===wn){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(ee(i.BLEND),x=!0),D!==uc){if(D!==m||Qe!==w){if((f!==In||M!==In)&&(i.blendEquation(i.FUNC_ADD),f=In,M=In),Qe)switch(D){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,S=null,L=null,R=null,C.set(0,0,0),U=0,m=D,w=Qe}return}pe=pe||he,se=se||be,Ie=Ie||Le,(he!==f||pe!==M)&&(i.blendEquationSeparate(je[he],je[pe]),f=he,M=pe),(be!==A||Le!==S||se!==L||Ie!==R)&&(i.blendFuncSeparate(E[be],E[Le],E[se],E[Ie]),A=be,S=Le,L=se,R=Ie),(He.equals(C)===!1||nt!==U)&&(i.blendColor(He.r,He.g,He.b,nt),C.copy(He),U=nt),m=D,w=!1}function te(D,he){D.side===Nt?ve(i.CULL_FACE):ee(i.CULL_FACE);let be=D.side===yt;he&&(be=!be),$(be),D.blending===ai&&D.transparent===!1?oe(wn):oe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Le=D.stencilWrite;a.setTest(Le),Le&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function I(D){D!==ac?(ee(i.CULL_FACE),D!==T&&(D===Jo?i.cullFace(i.BACK):D===lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),T=D}function Q(D){D!==k&&(W&&i.lineWidth(D),k=D)}function ne(D,he,be){D?(ee(i.POLYGON_OFFSET_FILL),(z!==he||H!==be)&&(i.polygonOffset(he,be),z=he,H=be)):ve(i.POLYGON_OFFSET_FILL)}function re(D){D?ee(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function V(D){D===void 0&&(D=i.TEXTURE0+X-1),de!==D&&(i.activeTexture(D),de=D)}function ce(D,he,be){be===void 0&&(de===null?be=i.TEXTURE0+X-1:be=de);let Le=j[be];Le===void 0&&(Le={type:void 0,texture:void 0},j[be]=Le),(Le.type!==D||Le.texture!==he)&&(de!==be&&(i.activeTexture(be),de=be),i.bindTexture(D,he||Y[D]),Le.type=D,Le.texture=he)}function _(){const D=j[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){Pe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Pe.copy(D))}function Ce(D){Ne.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ne.copy(D))}function Ue(D,he){let be=l.get(he);be===void 0&&(be=new WeakMap,l.set(he,be));let Le=be.get(D);Le===void 0&&(Le=i.getUniformBlockIndex(he,D.name),be.set(D,Le))}function we(D,he){const Le=l.get(he).get(D);c.get(he)!==Le&&(i.uniformBlockBinding(he,Le,D.__bindingPointIndex),c.set(he,Le))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,j={},h={},p=new WeakMap,d=[],v=null,x=!1,m=null,f=null,A=null,S=null,M=null,L=null,R=null,C=new Ze(0,0,0),U=0,w=!1,y=null,T=null,k=null,z=null,H=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:ve,bindFramebuffer:Ae,drawBuffers:Se,useProgram:Ge,setBlending:oe,setMaterial:te,setFlipSided:$,setCullFace:I,setLineWidth:Q,setPolygonOffset:ne,setScissorTest:re,activeTexture:V,bindTexture:ce,unbindTexture:_,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:_e,texImage3D:ae,updateUBOMapping:Ue,uniformBlockBinding:we,texStorage2D:le,texStorage3D:xe,texSubImage2D:B,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:ye,scissor:ue,viewport:Ce,reset:Ve}}function Hm(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,g){return d?new OffscreenCanvas(_,g):Fi("canvas")}function x(_,g,P){let B=1;const Z=ce(_);if((Z.width>P||Z.height>P)&&(B=P/Math.max(Z.width,Z.height)),B<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const G=Math.floor(B*Z.width),ye=Math.floor(B*Z.height);h===void 0&&(h=v(G,ye));const le=g?v(G,ye):h;return le.width=G,le.height=ye,le.getContext("2d").drawImage(_,0,0,G,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+ye+")."),le}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),_;return _}function m(_){return _.generateMipmaps}function f(_){i.generateMipmap(_)}function A(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(_,g,P,B,Z=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let G=g;if(g===i.RED&&(P===i.FLOAT&&(G=i.R32F),P===i.HALF_FLOAT&&(G=i.R16F),P===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.R8UI),P===i.UNSIGNED_SHORT&&(G=i.R16UI),P===i.UNSIGNED_INT&&(G=i.R32UI),P===i.BYTE&&(G=i.R8I),P===i.SHORT&&(G=i.R16I),P===i.INT&&(G=i.R32I)),g===i.RG&&(P===i.FLOAT&&(G=i.RG32F),P===i.HALF_FLOAT&&(G=i.RG16F),P===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.RG8UI),P===i.UNSIGNED_SHORT&&(G=i.RG16UI),P===i.UNSIGNED_INT&&(G=i.RG32UI),P===i.BYTE&&(G=i.RG8I),P===i.SHORT&&(G=i.RG16I),P===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.RGB8UI),P===i.UNSIGNED_SHORT&&(G=i.RGB16UI),P===i.UNSIGNED_INT&&(G=i.RGB32UI),P===i.BYTE&&(G=i.RGB8I),P===i.SHORT&&(G=i.RGB16I),P===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),P===i.UNSIGNED_INT&&(G=i.RGBA32UI),P===i.BYTE&&(G=i.RGBA8I),P===i.SHORT&&(G=i.RGBA16I),P===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){const ye=Z?Tr:Je.getTransfer(B);P===i.FLOAT&&(G=i.RGBA32F),P===i.HALF_FLOAT&&(G=i.RGBA16F),P===i.UNSIGNED_BYTE&&(G=ye===et?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function M(_,g){let P;return _?g===null||g===kn||g===Di?P=i.DEPTH24_STENCIL8:g===cn?P=i.DEPTH32F_STENCIL8:g===Pi&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===kn||g===Di?P=i.DEPTH_COMPONENT24:g===cn?P=i.DEPTH_COMPONENT32F:g===Pi&&(P=i.DEPTH_COMPONENT16),P}function L(_,g){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Ht&&_.minFilter!==Ft?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function R(_){const g=_.target;g.removeEventListener("dispose",R),U(g),g.isVideoTexture&&u.delete(g)}function C(_){const g=_.target;g.removeEventListener("dispose",C),y(g)}function U(_){const g=n.get(_);if(g.__webglInit===void 0)return;const P=_.source,B=p.get(P);if(B){const Z=B[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(_),Object.keys(B).length===0&&p.delete(P)}n.remove(_)}function w(_){const g=n.get(_);i.deleteTexture(g.__webglTexture);const P=_.source,B=p.get(P);delete B[g.__cacheKey],o.memory.textures--}function y(_){const g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(g.__webglFramebuffer[B]))for(let Z=0;Z<g.__webglFramebuffer[B].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[B][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[B]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[B])}else{if(Array.isArray(g.__webglFramebuffer))for(let B=0;B<g.__webglFramebuffer.length;B++)i.deleteFramebuffer(g.__webglFramebuffer[B]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let B=0;B<g.__webglColorRenderbuffer.length;B++)g.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[B]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=_.textures;for(let B=0,Z=P.length;B<Z;B++){const G=n.get(P[B]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(P[B])}n.remove(_)}let T=0;function k(){T=0}function z(){const _=T;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),T+=1,_}function H(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function X(_,g){const P=n.get(_);if(_.isVideoTexture&&re(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&P.__version!==_.version){const B=_.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(P,_,g);return}}else _.isExternalTexture&&(P.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+g)}function W(_,g){const P=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){Y(P,_,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+g)}function ie(_,g){const P=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){Y(P,_,g);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+g)}function q(_,g){const P=n.get(_);if(_.version>0&&P.__version!==_.version){ee(P,_,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+g)}const de={[Fs]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Os]:i.MIRRORED_REPEAT},j={[Ht]:i.NEAREST,[Oc]:i.NEAREST_MIPMAP_NEAREST,[Ki]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},fe={[Gc]:i.NEVER,[Yc]:i.ALWAYS,[Vc]:i.LESS,[dl]:i.LEQUAL,[Hc]:i.EQUAL,[qc]:i.GEQUAL,[Wc]:i.GREATER,[Xc]:i.NOTEQUAL};function ge(_,g){if(g.type===cn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ft||g.magFilter===zr||g.magFilter===Ki||g.magFilter===On||g.minFilter===Ft||g.minFilter===zr||g.minFilter===Ki||g.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,de[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,de[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,de[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,j[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,j[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ht||g.minFilter!==Ki&&g.minFilter!==On||g.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Pe(_,g){let P=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",R));const B=g.source;let Z=p.get(B);Z===void 0&&(Z={},p.set(B,Z));const G=H(g);if(G!==_.__cacheKey){Z[G]===void 0&&(Z[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Z[G].usedTimes++;const ye=Z[_.__cacheKey];ye!==void 0&&(Z[_.__cacheKey].usedTimes--,ye.usedTimes===0&&w(g)),_.__cacheKey=G,_.__webglTexture=Z[G].texture}return P}function Ne(_,g,P){return Math.floor(Math.floor(_/P)/g)}function ke(_,g,P,B){const G=_.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,P,B,g.data);else{G.sort((ae,ue)=>ae.start-ue.start);let ye=0;for(let ae=1;ae<G.length;ae++){const ue=G[ye],Ce=G[ae],Ue=ue.start+ue.count,we=Ne(Ce.start,g.width,4),Ve=Ne(ue.start,g.width,4);Ce.start<=Ue+1&&we===Ve&&Ne(Ce.start+Ce.count-1,g.width,4)===we?ue.count=Math.max(ue.count,Ce.start+Ce.count-ue.start):(++ye,G[ye]=Ce)}G.length=ye+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ae=0,ue=G.length;ae<ue;ae++){const Ce=G[ae],Ue=Math.floor(Ce.start/4),we=Math.ceil(Ce.count/4),Ve=Ue%g.width,D=Math.floor(Ue/g.width),he=we,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ve,D,he,be,P,B,g.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Y(_,g,P){let B=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(B=i.TEXTURE_3D);const Z=Pe(_,g),G=g.source;t.bindTexture(B,_.__webglTexture,i.TEXTURE0+P);const ye=n.get(G);if(G.version!==ye.__version||Z===!0){t.activeTexture(i.TEXTURE0+P);const le=Je.getPrimaries(Je.workingColorSpace),xe=g.colorSpace===ln?null:Je.getPrimaries(g.colorSpace),_e=g.colorSpace===ln||le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ae=x(g.image,!1,r.maxTextureSize);ae=V(g,ae);const ue=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type);let Ue=S(g.internalFormat,ue,Ce,g.colorSpace,g.isVideoTexture);ge(B,g);let we;const Ve=g.mipmaps,D=g.isVideoTexture!==!0,he=ye.__version===void 0||Z===!0,be=G.dataReady,Le=L(g,ae);if(g.isDepthTexture)Ue=M(g.format===Ni,g.type),he&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ue,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ue,Ce,null));else if(g.isDataTexture)if(Ve.length>0){D&&he&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,Ve[0].width,Ve[0].height);for(let pe=0,se=Ve.length;pe<se;pe++)we=Ve[pe],D?be&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,we.width,we.height,ue,Ce,we.data):t.texImage2D(i.TEXTURE_2D,pe,Ue,we.width,we.height,0,ue,Ce,we.data);g.generateMipmaps=!1}else D?(he&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,ae.width,ae.height),be&&ke(g,ae,ue,Ce)):t.texImage2D(i.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ue,Ce,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,Ve[0].width,Ve[0].height,ae.depth);for(let pe=0,se=Ve.length;pe<se;pe++)if(we=Ve[pe],g.format!==Vt)if(ue!==null)if(D){if(be)if(g.layerUpdates.size>0){const Ie=Aa(we.width,we.height,g.format,g.type);for(const He of g.layerUpdates){const nt=we.data.subarray(He*Ie/we.data.BYTES_PER_ELEMENT,(He+1)*Ie/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,He,we.width,we.height,1,ue,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,ae.depth,ue,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Ue,we.width,we.height,ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,we.width,we.height,ae.depth,ue,Ce,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Ue,we.width,we.height,ae.depth,0,ue,Ce,we.data)}else{D&&he&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,Ve[0].width,Ve[0].height);for(let pe=0,se=Ve.length;pe<se;pe++)we=Ve[pe],g.format!==Vt?ue!==null?D?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,we.width,we.height,ue,we.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?be&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,we.width,we.height,ue,Ce,we.data):t.texImage2D(i.TEXTURE_2D,pe,Ue,we.width,we.height,0,ue,Ce,we.data)}else if(g.isDataArrayTexture)if(D){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,ae.width,ae.height,ae.depth),be)if(g.layerUpdates.size>0){const pe=Aa(ae.width,ae.height,g.format,g.type);for(const se of g.layerUpdates){const Ie=ae.data.subarray(se*pe/ae.data.BYTES_PER_ELEMENT,(se+1)*pe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ae.width,ae.height,1,ue,Ce,Ie)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ue,Ce,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ae.width,ae.height,ae.depth,0,ue,Ce,ae.data);else if(g.isData3DTexture)D?(he&&t.texStorage3D(i.TEXTURE_3D,Le,Ue,ae.width,ae.height,ae.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ue,Ce,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ae.width,ae.height,ae.depth,0,ue,Ce,ae.data);else if(g.isFramebufferTexture){if(he)if(D)t.texStorage2D(i.TEXTURE_2D,Le,Ue,ae.width,ae.height);else{let pe=ae.width,se=ae.height;for(let Ie=0;Ie<Le;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ue,pe,se,0,ue,Ce,null),pe>>=1,se>>=1}}else if(Ve.length>0){if(D&&he){const pe=ce(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ue,pe.width,pe.height)}for(let pe=0,se=Ve.length;pe<se;pe++)we=Ve[pe],D?be&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ue,Ce,we):t.texImage2D(i.TEXTURE_2D,pe,Ue,ue,Ce,we);g.generateMipmaps=!1}else if(D){if(he){const pe=ce(ae);t.texStorage2D(i.TEXTURE_2D,Le,Ue,pe.width,pe.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ce,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ue,ue,Ce,ae);m(g)&&f(B),ye.__version=G.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function ee(_,g,P){if(g.image.length!==6)return;const B=Pe(_,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+P);const G=n.get(Z);if(Z.version!==G.__version||B===!0){t.activeTexture(i.TEXTURE0+P);const ye=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===ln?null:Je.getPrimaries(g.colorSpace),xe=g.colorSpace===ln||ye===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let se=0;se<6;se++)!_e&&!ae?ue[se]=x(g.image[se],!0,r.maxCubemapSize):ue[se]=ae?g.image[se].image:g.image[se],ue[se]=V(g,ue[se]);const Ce=ue[0],Ue=s.convert(g.format,g.colorSpace),we=s.convert(g.type),Ve=S(g.internalFormat,Ue,we,g.colorSpace),D=g.isVideoTexture!==!0,he=G.__version===void 0||B===!0,be=Z.dataReady;let Le=L(g,Ce);ge(i.TEXTURE_CUBE_MAP,g);let pe;if(_e){D&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ve,Ce.width,Ce.height);for(let se=0;se<6;se++){pe=ue[se].mipmaps;for(let Ie=0;Ie<pe.length;Ie++){const He=pe[Ie];g.format!==Vt?Ue!==null?D?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,He.width,He.height,Ue,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,He.width,He.height,Ue,we,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,He.width,He.height,0,Ue,we,He.data)}}}else{if(pe=g.mipmaps,D&&he){pe.length>0&&Le++;const se=ce(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(ae){D?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ue[se].width,ue[se].height,Ue,we,ue[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,ue[se].width,ue[se].height,0,Ue,we,ue[se].data);for(let Ie=0;Ie<pe.length;Ie++){const nt=pe[Ie].image[se].image;D?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,nt.width,nt.height,Ue,we,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,nt.width,nt.height,0,Ue,we,nt.data)}}else{D?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,we,ue[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,Ue,we,ue[se]);for(let Ie=0;Ie<pe.length;Ie++){const He=pe[Ie];D?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Ue,we,He.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,Ue,we,He.image[se])}}}m(g)&&f(i.TEXTURE_CUBE_MAP),G.__version=Z.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function ve(_,g,P,B,Z,G){const ye=s.convert(P.format,P.colorSpace),le=s.convert(P.type),xe=S(P.internalFormat,ye,le,P.colorSpace),_e=n.get(g),ae=n.get(P);if(ae.__renderTarget=g,!_e.__hasExternalTextures){const ue=Math.max(1,g.width>>G),Ce=Math.max(1,g.height>>G);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,G,xe,ue,Ce,g.depth,0,ye,le,null):t.texImage2D(Z,G,xe,ue,Ce,0,ye,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Z,ae.__webglTexture,0,Q(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,Z,ae.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(_,g,P){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){const B=g.depthTexture,Z=B&&B.isDepthTexture?B.type:null,G=M(g.stencilBuffer,Z),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Q(g);ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,G,g.width,g.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,_)}else{const B=g.textures;for(let Z=0;Z<B.length;Z++){const G=B[Z],ye=s.convert(G.format,G.colorSpace),le=s.convert(G.type),xe=S(G.internalFormat,ye,le,G.colorSpace),_e=Q(g);P&&ne(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,xe,g.width,g.height):ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,xe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,xe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(g.depthTexture);B.__renderTarget=g,(!B.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const Z=B.__webglTexture,G=Q(g);if(g.depthTexture.format===Ii)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Ni)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ge(_){const g=n.get(_),P=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){const B=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),B){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,B.removeEventListener("dispose",Z)};B.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=B}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const B=_.texture.mipmaps;B&&B.length>0?Se(g.__webglFramebuffer[0],_):Se(g.__webglFramebuffer,_)}else if(P){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]===void 0)g.__webglDepthbuffer[B]=i.createRenderbuffer(),Ae(g.__webglDepthbuffer[B],_,!1);else{const Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}else{const B=_.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ae(g.__webglDepthbuffer,_,!1);else{const Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(_,g,P){const B=n.get(_);g!==void 0&&ve(B.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Ge(_)}function E(_){const g=_.texture,P=n.get(_),B=n.get(g);_.addEventListener("dispose",C);const Z=_.textures,G=_.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=g.version,o.memory.textures++),G){P.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[le]=[];for(let xe=0;xe<g.mipmaps.length;xe++)P.__webglFramebuffer[le][xe]=i.createFramebuffer()}else P.__webglFramebuffer[le]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)P.__webglFramebuffer[le]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ye)for(let le=0,xe=Z.length;le<xe;le++){const _e=n.get(Z[le]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(_.samples>0&&ne(_)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const xe=Z[le];P.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[le]);const _e=s.convert(xe.format,xe.colorSpace),ae=s.convert(xe.type),ue=S(xe.internalFormat,_e,ae,xe.colorSpace,_.isXRRenderTarget===!0),Ce=Q(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ue,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,P.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(P.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),ge(i.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)ve(P.__webglFramebuffer[le][xe],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else ve(P.__webglFramebuffer[le],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,xe=Z.length;le<xe;le++){const _e=Z[le],ae=n.get(_e);let ue=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ue=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ae.__webglTexture),ge(ue,_e),ve(P.__webglFramebuffer,_,_e,i.COLOR_ATTACHMENT0+le,ue,0),m(_e)&&f(ue)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(le=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,B.__webglTexture),ge(le,g),g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)ve(P.__webglFramebuffer[xe],_,g,i.COLOR_ATTACHMENT0,le,xe);else ve(P.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,le,0);m(g)&&f(le),t.unbindTexture()}_.depthBuffer&&Ge(_)}function oe(_){const g=_.textures;for(let P=0,B=g.length;P<B;P++){const Z=g[P];if(m(Z)){const G=A(_),ye=n.get(Z).__webglTexture;t.bindTexture(G,ye),f(G),t.unbindTexture()}}}const te=[],$=[];function I(_){if(_.samples>0){if(ne(_)===!1){const g=_.textures,P=_.width,B=_.height;let Z=i.COLOR_BUFFER_BIT;const G=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(_),le=g.length>1;if(le)for(let _e=0;_e<g.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const xe=_.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let _e=0;_e<g.length;_e++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);const ae=n.get(g[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,P,B,0,0,P,B,Z,i.NEAREST),c===!0&&(te.length=0,$.length=0,te.push(i.COLOR_ATTACHMENT0+_e),_.depthBuffer&&_.resolveDepthBuffer===!1&&(te.push(G),$.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let _e=0;_e<g.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ye.__webglColorRenderbuffer[_e]);const ae=n.get(g[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&c){const g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Q(_){return Math.min(r.maxSamples,_.samples)}function ne(_){const g=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function re(_){const g=o.render.frame;u.get(_)!==g&&(u.set(_,g),_.update())}function V(_,g){const P=_.colorSpace,B=_.format,Z=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||P!==di&&P!==ln&&(Je.getTransfer(P)===et?(B!==Vt||Z!==jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function ce(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(l.width=_.naturalWidth||_.width,l.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(l.width=_.displayWidth,l.height=_.displayHeight):(l.width=_.width,l.height=_.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=q,this.rebindTextures=je,this.setupRenderTarget=E,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ne}function Wm(i,e){function t(n,r=ln){let s;const o=Je.getTransfer(r);if(n===jt)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return i.BYTE;if(n===rl)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===al)return i.ALPHA;if(n===ll)return i.RGB;if(n===Vt)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===ul)return i.RG;if(n===Ao)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===br||n===Mr||n===yr||n===wr)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ks||n===Bs||n===zs||n===Gs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ks)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vs||n===Hs||n===Ws)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vs||n===Hs)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ws)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xs||n===qs||n===Ys||n===Zs||n===Ks||n===Js||n===js||n===Qs||n===$s||n===eo||n===to||n===no||n===io||n===ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ys)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ks)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Js)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===js)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$s)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===oo||n===ao)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===so)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===uo||n===ho)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends gi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,p=null,d=null,v=null;const x=typeof XRWebGLBinding<"u",m=new Ym,f={},A=t.getContextAttributes();let S=null,M=null;const L=[],R=[],C=new Me;let U=null;const w=new Ct;w.viewport=new ot;const y=new Ct;y.viewport=new ot;const T=[w,y],k=new ph;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=L[Y];return ee===void 0&&(ee=new cs,L[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=L[Y];return ee===void 0&&(ee=new cs,L[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=L[Y];return ee===void 0&&(ee=new cs,L[Y]=ee),ee.getHandSpace()};function X(Y){const ee=R.indexOf(Y.inputSource);if(ee===-1)return;const ve=L[ee];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<L.length;Y++){const ee=R[Y];ee!==null&&(R[Y]=null,L[Y].disconnect(ee))}z=null,H=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(S),d=null,p=null,h=null,r=null,M=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ie),A.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ae=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=A.stencil?Ni:Ii,Ae=A.stencil?Di:kn);const Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(Ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new Bn(p.textureWidth,p.textureHeight,{format:Vt,type:jt,depthTexture:new yl(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ve={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Bn(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let ee=0;ee<Y.removed.length;ee++){const ve=Y.removed[ee],Ae=R.indexOf(ve);Ae>=0&&(R[Ae]=null,L[Ae].disconnect(ve))}for(let ee=0;ee<Y.added.length;ee++){const ve=Y.added[ee];let Ae=R.indexOf(ve);if(Ae===-1){for(let Ge=0;Ge<L.length;Ge++)if(Ge>=R.length){R.push(ve),Ae=Ge;break}else if(R[Ge]===null){R[Ge]=ve,Ae=Ge;break}if(Ae===-1)break}const Se=L[Ae];Se&&Se.connect(ve)}}const q=new N,de=new N;function j(Y,ee,ve){q.setFromMatrixPosition(ee.matrixWorld),de.setFromMatrixPosition(ve.matrixWorld);const Ae=q.distanceTo(de),Se=ee.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,je=Se[14]/(Se[10]-1),E=Se[14]/(Se[10]+1),oe=(Se[9]+1)/Se[5],te=(Se[9]-1)/Se[5],$=(Se[8]-1)/Se[0],I=(Ge[8]+1)/Ge[0],Q=je*$,ne=je*I,re=Ae/(-$+I),V=re*-$;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(V),Y.translateZ(re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ce=je+re,_=E+re,g=Q-V,P=ne+(Ae-V),B=oe*E/_*ce,Z=te*E/_*ce;Y.projectionMatrix.makePerspective(g,P,B,Z,ce,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function fe(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,ve=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),k.near=y.near=w.near=ee,k.far=y.far=w.far=ve,(z!==k.near||H!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,H=k.far),k.layers.mask=Y.layers.mask|6,w.layers.mask=k.layers.mask&3,y.layers.mask=k.layers.mask&5;const Ae=Y.parent,Se=k.cameras;fe(k,Ae);for(let Ge=0;Ge<Se.length;Ge++)fe(Se[Ge],Ae);Se.length===2?j(k,w,y):k.projectionMatrix.copy(w.projectionMatrix),ge(Y,k,Ae)};function ge(Y,ee,ve){ve===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return f[Y]};let Pe=null;function Ne(Y,ee){if(u=ee.getViewerPose(l||o),v=ee,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ae=!1;ve.length!==k.cameras.length&&(k.cameras.length=0,Ae=!0);for(let E=0;E<ve.length;E++){const oe=ve[E];let te=null;if(d!==null)te=d.getViewport(oe);else{const I=h.getViewSubImage(p,oe);te=I.viewport,E===0&&(e.setRenderTargetTextures(M,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(M))}let $=T[E];$===void 0&&($=new Ct,$.layers.enable(E),$.viewport=new ot,T[E]=$),$.matrix.fromArray(oe.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(oe.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(te.x,te.y,te.width,te.height),E===0&&(k.matrix.copy($.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ae===!0&&k.cameras.push($)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const E=h.getDepthInformation(ve[0]);E&&E.isValid&&E.texture&&m.init(E,r.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let E=0;E<ve.length;E++){const oe=ve[E].camera;if(oe){let te=f[oe];te||(te=new wl,f[oe]=te);const $=h.getCameraImage(oe);te.sourceTexture=$}}}}for(let ve=0;ve<L.length;ve++){const Ae=R[ve],Se=L[ve];Ae!==null&&Se!==void 0&&Se.update(Ae,ee,l||o)}Pe&&Pe(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const ke=new Nl;ke.setAnimationLoop(Ne),this.setAnimationLoop=function(Y){Pe=Y},this.dispose=function(){}}}const Un=new Qt,Km=new lt;function Jm(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,xl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,A,S,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,A,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f),S=A.envMap,M=A.envMapRotation;S&&(m.envMap.value=S,Un.copy(M),Un.x*=-1,Un.y*=-1,Un.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Un)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jm(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,S){const M=S.program;n.uniformBlockBinding(A,M)}function l(A,S){let M=r[A.id];M===void 0&&(v(A),M=u(A),r[A.id]=M,A.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(A,L);const R=e.render.frame;s[A.id]!==R&&(p(A),s[A.id]=R)}function u(A){const S=h();A.__bindingPointIndex=S;const M=i.createBuffer(),L=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const S=r[A.id],M=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,C=M.length;R<C;R++){const U=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,y=U.length;w<y;w++){const T=U[w];if(d(T,R,w,L)===!0){const k=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let H=0;for(let X=0;X<z.length;X++){const W=z[X],ie=x(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+H,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,H),H+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,S,M,L){const R=A.value,C=S+"_"+M;if(L[C]===void 0)return typeof R=="number"||typeof R=="boolean"?L[C]=R:L[C]=R.clone(),!0;{const U=L[C];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return L[C]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(A){const S=A.uniforms;let M=0;const L=16;for(let C=0,U=S.length;C<U;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,T=w.length;y<T;y++){const k=w[y],z=Array.isArray(k.value)?k.value:[k.value];for(let H=0,X=z.length;H<X;H++){const W=z[H],ie=x(W),q=M%L,de=q%ie.boundary,j=q+de;M+=de,j!==0&&L-j<ie.storage&&(M+=L-j),k.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=ie.storage}}}const R=M%L;return R>0&&(M+=L-R),A.__size=M,A.__cache={},this}function x(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Bo{constructor(e={}){const{canvas:t=Kc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const A=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=Et;let R=0,C=0,U=null,w=-1,y=null;const T=new ot,k=new ot;let z=null;const H=new Ze(0);let X=0,W=t.width,ie=t.height,q=1,de=null,j=null;const fe=new ot(0,0,W,ie),ge=new ot(0,0,W,ie);let Pe=!1;const Ne=new Uo;let ke=!1,Y=!1;const ee=new lt,ve=new N,Ae=new ot,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function je(){return U===null?q:1}let E=n;function oe(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mo}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",pe,!1),E===null){const F="webgl2";if(E=oe(F,b),E===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let te,$,I,Q,ne,re,V,ce,_,g,P,B,Z,G,ye,le,xe,_e,ae,ue,Ce,Ue,we,Ve;function D(){te=new lp(E),te.init(),Ue=new Wm(E,te),$=new tp(E,te,e,Ue),I=new Vm(E,te),$.reversedDepthBuffer&&p&&I.buffers.depth.setReversed(!0),Q=new hp(E),ne=new Lm,re=new Hm(E,te,I,ne,$,Ue,Q),V=new ip(M),ce=new ap(M),_=new gh(E),we=new $f(E,_),g=new cp(E,_,Q,we),P=new fp(E,g,_,Q),ae=new dp(E,$,re),le=new np(ne),B=new Tm(M,V,ce,te,$,we,le),Z=new Jm(M,ne),G=new Um,ye=new Om(te),_e=new Qf(M,V,ce,I,P,d,c),xe=new zm(M,P,$),Ve=new jm(E,Q,$,I),ue=new ep(E,te,Q),Ce=new up(E,te,Q),Q.programs=B.programs,M.capabilities=$,M.extensions=te,M.properties=ne,M.renderLists=G,M.shadowMap=xe,M.state=I,M.info=Q}D();const he=new Zm(M,E);this.xr=he,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(W,ie,!1))},this.getSize=function(b){return b.set(W,ie)},this.setSize=function(b,F,K=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,ie=F,t.width=Math.floor(b*q),t.height=Math.floor(F*q),K===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(W*q,ie*q).floor()},this.setDrawingBufferSize=function(b,F,K){W=b,ie=F,q=K,t.width=Math.floor(b*K),t.height=Math.floor(F*K),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(fe)},this.setViewport=function(b,F,K,J){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,F,K,J),I.viewport(T.copy(fe).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,F,K,J){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,F,K,J),I.scissor(k.copy(ge).multiplyScalar(q).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){I.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){de=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,K=!0){let J=0;if(b){let O=!1;if(U!==null){const me=U.texture.format;O=me===Ro||me===Ao||me===Eo}if(O){const me=U.texture.type,Re=me===jt||me===kn||me===Pi||me===Di||me===wo||me===So,De=_e.getClearColor(),Te=_e.getClearAlpha(),Be=De.r,ze=De.g,Fe=De.b;Re?(v[0]=Be,v[1]=ze,v[2]=Fe,v[3]=Te,E.clearBufferuiv(E.COLOR,0,v)):(x[0]=Be,x[1]=ze,x[2]=Fe,x[3]=Te,E.clearBufferiv(E.COLOR,0,x))}else J|=E.COLOR_BUFFER_BIT}F&&(J|=E.DEPTH_BUFFER_BIT),K&&(J|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),G.dispose(),ye.dispose(),ne.dispose(),V.dispose(),ce.dispose(),P.dispose(),we.dispose(),Ve.dispose(),B.dispose(),he.dispose(),he.removeEventListener("sessionstart",Wt),he.removeEventListener("sessionend",Wo),Sn.stop()};function be(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Q.autoReset,F=xe.enabled,K=xe.autoUpdate,J=xe.needsUpdate,O=xe.type;D(),Q.autoReset=b,xe.enabled=F,xe.autoUpdate=K,xe.needsUpdate=J,xe.type=O}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const F=b.target;F.removeEventListener("dispose",se),Ie(F)}function Ie(b){He(b),ne.remove(b)}function He(b){const F=ne.get(b).programs;F!==void 0&&(F.forEach(function(K){B.releaseProgram(K)}),b.isShaderMaterial&&B.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,K,J,O,me){F===null&&(F=Se);const Re=O.isMesh&&O.matrixWorld.determinant()<0,De=tc(b,F,K,J,O);I.setMaterial(J,Re);let Te=K.index,Be=1;if(J.wireframe===!0){if(Te=g.getWireframeAttribute(K),Te===void 0)return;Be=2}const ze=K.drawRange,Fe=K.attributes.position;let Ye=ze.start*Be,$e=(ze.start+ze.count)*Be;me!==null&&(Ye=Math.max(Ye,me.start*Be),$e=Math.min($e,(me.start+me.count)*Be)),Te!==null?(Ye=Math.max(Ye,0),$e=Math.min($e,Te.count)):Fe!=null&&(Ye=Math.max(Ye,0),$e=Math.min($e,Fe.count));const ct=$e-Ye;if(ct<0||ct===1/0)return;we.setup(O,J,De,K,Te);let it,tt=ue;if(Te!==null&&(it=_.get(Te),tt=Ce,tt.setIndex(it)),O.isMesh)J.wireframe===!0?(I.setLineWidth(J.wireframeLinewidth*je()),tt.setMode(E.LINES)):tt.setMode(E.TRIANGLES);else if(O.isLine){let Oe=J.linewidth;Oe===void 0&&(Oe=1),I.setLineWidth(Oe*je()),O.isLineSegments?tt.setMode(E.LINES):O.isLineLoop?tt.setMode(E.LINE_LOOP):tt.setMode(E.LINE_STRIP)}else O.isPoints?tt.setMode(E.POINTS):O.isSprite&&tt.setMode(E.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Oe=O._multiDrawStarts,rt=O._multiDrawCounts,Ke=O._multiDrawCount,At=Te?_.get(Te).bytesPerElement:1,Vn=ne.get(J).currentProgram.getUniforms();for(let Rt=0;Rt<Ke;Rt++)Vn.setValue(E,"_gl_DrawID",Rt),tt.render(Oe[Rt]/At,rt[Rt])}else if(O.isInstancedMesh)tt.renderInstances(Ye,ct,O.count);else if(K.isInstancedBufferGeometry){const Oe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rt=Math.min(K.instanceCount,Oe);tt.renderInstances(Ye,ct,rt)}else tt.render(Ye,ct)};function nt(b,F,K){b.transparent===!0&&b.side===Nt&&b.forceSinglePass===!1?(b.side=yt,b.needsUpdate=!0,Zi(b,F,K),b.side=fn,b.needsUpdate=!0,Zi(b,F,K),b.side=Nt):Zi(b,F,K)}this.compile=function(b,F,K=null){K===null&&(K=b),f=ye.get(K),f.init(F),S.push(f),K.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),b!==K&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const J=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const me=O.material;if(me)if(Array.isArray(me))for(let Re=0;Re<me.length;Re++){const De=me[Re];nt(De,K,O),J.add(De)}else nt(me,K,O),J.add(me)}),f=S.pop(),J},this.compileAsync=function(b,F,K=null){const J=this.compile(b,F,K);return new Promise(O=>{function me(){if(J.forEach(function(Re){ne.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){O(b);return}setTimeout(me,10)}te.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Qe=null;function en(b){Qe&&Qe(b)}function Wt(){Sn.stop()}function Wo(){Sn.start()}const Sn=new Nl;Sn.setAnimationLoop(en),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(b){Qe=b,he.setAnimationLoop(b),b===null?Sn.stop():Sn.start()},he.addEventListener("sessionstart",Wt),he.addEventListener("sessionend",Wo),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(F),F=he.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,F,U),f=ye.get(b,S.length),f.init(F),S.push(f),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix(ee,Yt,F.reversedDepth),Y=this.localClippingEnabled,ke=le.init(this.clippingPlanes,Y),m=G.get(b,A.length),m.init(),A.push(m),he.enabled===!0&&he.isPresenting===!0){const me=M.xr.getDepthSensingMesh();me!==null&&kr(me,F,-1/0,M.sortObjects)}kr(b,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(de,j),Ge=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ge&&_e.addToRenderList(m,b),this.info.render.frame++,ke===!0&&le.beginShadows();const K=f.state.shadowsArray;xe.render(K,b,F),ke===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const me=F.cameras;if(O.length>0)for(let Re=0,De=me.length;Re<De;Re++){const Te=me[Re];qo(J,O,b,Te)}Ge&&_e.render(b);for(let Re=0,De=me.length;Re<De;Re++){const Te=me[Re];Xo(m,b,Te,Te.viewport)}}else O.length>0&&qo(J,O,b,F),Ge&&_e.render(b),Xo(m,b,F);U!==null&&C===0&&(re.updateMultisampleRenderTarget(U),re.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(M,b,F),we.resetDefaultState(),w=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],ke===!0&&le.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function kr(b,F,K,J){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ne.intersectsSprite(b)){J&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Re=P.update(b),De=b.material;De.visible&&m.push(b,Re,De,K,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ne.intersectsObject(b))){const Re=P.update(b),De=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ae.copy(Re.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(De)){const Te=Re.groups;for(let Be=0,ze=Te.length;Be<ze;Be++){const Fe=Te[Be],Ye=De[Fe.materialIndex];Ye&&Ye.visible&&m.push(b,Re,Ye,K,Ae.z,Fe)}}else De.visible&&m.push(b,Re,De,K,Ae.z,null)}}const me=b.children;for(let Re=0,De=me.length;Re<De;Re++)kr(me[Re],F,K,J)}function Xo(b,F,K,J){const O=b.opaque,me=b.transmissive,Re=b.transparent;f.setupLightsView(K),ke===!0&&le.setGlobalState(M.clippingPlanes,K),J&&I.viewport(T.copy(J)),O.length>0&&Yi(O,F,K),me.length>0&&Yi(me,F,K),Re.length>0&&Yi(Re,F,K),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function qo(b,F,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new Bn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Vi:jt,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const me=f.state.transmissionRenderTarget[J.id],Re=J.viewport||T;me.setSize(Re.z*M.transmissionResolutionScale,Re.w*M.transmissionResolutionScale);const De=M.getRenderTarget(),Te=M.getActiveCubeFace(),Be=M.getActiveMipmapLevel();M.setRenderTarget(me),M.getClearColor(H),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Ge&&_e.render(K);const ze=M.toneMapping;M.toneMapping=un;const Fe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),ke===!0&&le.setGlobalState(M.clippingPlanes,J),Yi(b,K,J),re.updateMultisampleRenderTarget(me),re.updateRenderTargetMipmap(me),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let $e=0,ct=F.length;$e<ct;$e++){const it=F[$e],tt=it.object,Oe=it.geometry,rt=it.material,Ke=it.group;if(rt.side===Nt&&tt.layers.test(J.layers)){const At=rt.side;rt.side=yt,rt.needsUpdate=!0,Yo(tt,K,J,Oe,rt,Ke),rt.side=At,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(re.updateMultisampleRenderTarget(me),re.updateRenderTargetMipmap(me))}M.setRenderTarget(De,Te,Be),M.setClearColor(H,X),Fe!==void 0&&(J.viewport=Fe),M.toneMapping=ze}function Yi(b,F,K){const J=F.isScene===!0?F.overrideMaterial:null;for(let O=0,me=b.length;O<me;O++){const Re=b[O],De=Re.object,Te=Re.geometry,Be=Re.group;let ze=Re.material;ze.allowOverride===!0&&J!==null&&(ze=J),De.layers.test(K.layers)&&Yo(De,F,K,Te,ze,Be)}}function Yo(b,F,K,J,O,me){b.onBeforeRender(M,F,K,J,O,me),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(M,F,K,J,b,me),O.transparent===!0&&O.side===Nt&&O.forceSinglePass===!1?(O.side=yt,O.needsUpdate=!0,M.renderBufferDirect(K,F,J,O,b,me),O.side=fn,O.needsUpdate=!0,M.renderBufferDirect(K,F,J,O,b,me),O.side=Nt):M.renderBufferDirect(K,F,J,O,b,me),b.onAfterRender(M,F,K,J,O,me)}function Zi(b,F,K){F.isScene!==!0&&(F=Se);const J=ne.get(b),O=f.state.lights,me=f.state.shadowsArray,Re=O.state.version,De=B.getParameters(b,O.state,me,F,K),Te=B.getProgramCacheKey(De);let Be=J.programs;J.environment=b.isMeshStandardMaterial?F.environment:null,J.fog=F.fog,J.envMap=(b.isMeshStandardMaterial?ce:V).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",se),Be=new Map,J.programs=Be);let ze=Be.get(Te);if(ze!==void 0){if(J.currentProgram===ze&&J.lightsStateVersion===Re)return Ko(b,De),ze}else De.uniforms=B.getUniforms(b),b.onBeforeCompile(De,M),ze=B.acquireProgram(De,Te),Be.set(Te,ze),J.uniforms=De.uniforms;const Fe=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=le.uniform),Ko(b,De),J.needsLights=ic(b),J.lightsStateVersion=Re,J.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),J.currentProgram=ze,J.uniformsList=null,ze}function Zo(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Sr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ko(b,F){const K=ne.get(b);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function tc(b,F,K,J,O){F.isScene!==!0&&(F=Se),re.resetTextureUnits();const me=F.fog,Re=J.isMeshStandardMaterial?F.environment:null,De=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:di,Te=(J.isMeshStandardMaterial?ce:V).get(J.envMap||Re),Be=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Fe=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,$e=!!K.morphAttributes.color;let ct=un;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ct=M.toneMapping);const it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tt=it!==void 0?it.length:0,Oe=ne.get(J),rt=f.state.lights;if(ke===!0&&(Y===!0||b!==y)){const bt=b===y&&J.id===w;le.setState(J,b,bt)}let Ke=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==rt.state.version||Oe.outputColorSpace!==De||O.isBatchedMesh&&Oe.batching===!1||!O.isBatchedMesh&&Oe.batching===!0||O.isBatchedMesh&&Oe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Oe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Oe.instancing===!1||!O.isInstancedMesh&&Oe.instancing===!0||O.isSkinnedMesh&&Oe.skinning===!1||!O.isSkinnedMesh&&Oe.skinning===!0||O.isInstancedMesh&&Oe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Oe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Oe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Oe.instancingMorph===!1&&O.morphTexture!==null||Oe.envMap!==Te||J.fog===!0&&Oe.fog!==me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==le.numPlanes||Oe.numIntersection!==le.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==ze||Oe.morphTargets!==Fe||Oe.morphNormals!==Ye||Oe.morphColors!==$e||Oe.toneMapping!==ct||Oe.morphTargetsCount!==tt)&&(Ke=!0):(Ke=!0,Oe.__version=J.version);let At=Oe.currentProgram;Ke===!0&&(At=Zi(J,F,O));let Vn=!1,Rt=!1,bi=!1;const st=At.getUniforms(),Pt=Oe.uniforms;if(I.useProgram(At.program)&&(Vn=!0,Rt=!0,bi=!0),J.id!==w&&(w=J.id,Rt=!0),Vn||y!==b){I.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),st.setValue(E,"projectionMatrix",b.projectionMatrix),st.setValue(E,"viewMatrix",b.matrixWorldInverse);const wt=st.map.cameraPosition;wt!==void 0&&wt.setValue(E,ve.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&st.setValue(E,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&st.setValue(E,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Rt=!0,bi=!0)}if(O.isSkinnedMesh){st.setOptional(E,O,"bindMatrix"),st.setOptional(E,O,"bindMatrixInverse");const bt=O.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),st.setValue(E,"boneTexture",bt.boneTexture,re))}O.isBatchedMesh&&(st.setOptional(E,O,"batchingTexture"),st.setValue(E,"batchingTexture",O._matricesTexture,re),st.setOptional(E,O,"batchingIdTexture"),st.setValue(E,"batchingIdTexture",O._indirectTexture,re),st.setOptional(E,O,"batchingColorTexture"),O._colorsTexture!==null&&st.setValue(E,"batchingColorTexture",O._colorsTexture,re));const Dt=K.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&ae.update(O,K,At),(Rt||Oe.receiveShadow!==O.receiveShadow)&&(Oe.receiveShadow=O.receiveShadow,st.setValue(E,"receiveShadow",O.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Pt.envMap.value=Te,Pt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Rt&&(st.setValue(E,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&nc(Pt,bi),me&&J.fog===!0&&Z.refreshFogUniforms(Pt,me),Z.refreshMaterialUniforms(Pt,J,q,ie,f.state.transmissionRenderTarget[b.id]),Sr.upload(E,Zo(Oe),Pt,re)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Sr.upload(E,Zo(Oe),Pt,re),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&st.setValue(E,"center",O.center),st.setValue(E,"modelViewMatrix",O.modelViewMatrix),st.setValue(E,"normalMatrix",O.normalMatrix),st.setValue(E,"modelMatrix",O.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const bt=J.uniformsGroups;for(let wt=0,Br=bt.length;wt<Br;wt++){const En=bt[wt];Ve.update(En,At),Ve.bind(En,At)}}return At}function nc(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ic(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,F,K){const J=ne.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ne.get(b.texture).__webglTexture=F,ne.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const K=ne.get(b);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0};const rc=E.createFramebuffer();this.setRenderTarget=function(b,F=0,K=0){U=b,R=F,C=K;let J=!0,O=null,me=!1,Re=!1;if(b){const Te=ne.get(b);if(Te.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(E.FRAMEBUFFER,null),J=!1;else if(Te.__webglFramebuffer===void 0)re.setupRenderTarget(b);else if(Te.__hasExternalTextures)re.rebindTextures(b,ne.get(b.texture).__webglTexture,ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(Te.__boundDepthTexture!==Fe){if(Fe!==null&&ne.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Re=!0);const ze=ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?O=ze[F][K]:O=ze[F],me=!0):b.samples>0&&re.useMultisampledRTT(b)===!1?O=ne.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[K]:O=ze,T.copy(b.viewport),k.copy(b.scissor),z=b.scissorTest}else T.copy(fe).multiplyScalar(q).floor(),k.copy(ge).multiplyScalar(q).floor(),z=Pe;if(K!==0&&(O=rc),I.bindFramebuffer(E.FRAMEBUFFER,O)&&J&&I.drawBuffers(b,O),I.viewport(T),I.scissor(k),I.setScissorTest(z),me){const Te=ne.get(b.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,K)}else if(Re){const Te=F;for(let Be=0;Be<b.textures.length;Be++){const ze=ne.get(b.textures[Be]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Be,ze.__webglTexture,K,Te)}}else if(b!==null&&K!==0){const Te=ne.get(b.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Te.__webglTexture,K)}w=-1},this.readRenderTargetPixels=function(b,F,K,J,O,me,Re,De=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Te=Te[Re]),Te){I.bindFramebuffer(E.FRAMEBUFFER,Te);try{const Be=b.textures[De],ze=Be.format,Fe=Be.type;if(!$.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-J&&K>=0&&K<=b.height-O&&(b.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+De),E.readPixels(F,K,J,O,Ue.convert(ze),Ue.convert(Fe),me))}finally{const Be=U!==null?ne.get(U).__webglFramebuffer:null;I.bindFramebuffer(E.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,F,K,J,O,me,Re,De=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Te=Te[Re]),Te)if(F>=0&&F<=b.width-J&&K>=0&&K<=b.height-O){I.bindFramebuffer(E.FRAMEBUFFER,Te);const Be=b.textures[De],ze=Be.format,Fe=Be.type;if(!$.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.bufferData(E.PIXEL_PACK_BUFFER,me.byteLength,E.STREAM_READ),b.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+De),E.readPixels(F,K,J,O,Ue.convert(ze),Ue.convert(Fe),0);const $e=U!==null?ne.get(U).__webglFramebuffer:null;I.bindFramebuffer(E.FRAMEBUFFER,$e);const ct=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Jc(E,ct,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ye),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,me),E.deleteBuffer(Ye),E.deleteSync(ct),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,K=0){const J=Math.pow(2,-K),O=Math.floor(b.image.width*J),me=Math.floor(b.image.height*J),Re=F!==null?F.x:0,De=F!==null?F.y:0;re.setTexture2D(b,0),E.copyTexSubImage2D(E.TEXTURE_2D,K,0,0,Re,De,O,me),I.unbindTexture()};const sc=E.createFramebuffer(),oc=E.createFramebuffer();this.copyTextureToTexture=function(b,F,K=null,J=null,O=0,me=null){me===null&&(O!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=O,O=0):me=0);let Re,De,Te,Be,ze,Fe,Ye,$e,ct;const it=b.isCompressedTexture?b.mipmaps[me]:b.image;if(K!==null)Re=K.max.x-K.min.x,De=K.max.y-K.min.y,Te=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,ze=K.min.y,Fe=K.isBox3?K.min.z:0;else{const Dt=Math.pow(2,-O);Re=Math.floor(it.width*Dt),De=Math.floor(it.height*Dt),b.isDataArrayTexture?Te=it.depth:b.isData3DTexture?Te=Math.floor(it.depth*Dt):Te=1,Be=0,ze=0,Fe=0}J!==null?(Ye=J.x,$e=J.y,ct=J.z):(Ye=0,$e=0,ct=0);const tt=Ue.convert(F.format),Oe=Ue.convert(F.type);let rt;F.isData3DTexture?(re.setTexture3D(F,0),rt=E.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(re.setTexture2DArray(F,0),rt=E.TEXTURE_2D_ARRAY):(re.setTexture2D(F,0),rt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,F.unpackAlignment);const Ke=E.getParameter(E.UNPACK_ROW_LENGTH),At=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Vn=E.getParameter(E.UNPACK_SKIP_PIXELS),Rt=E.getParameter(E.UNPACK_SKIP_ROWS),bi=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,it.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,it.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(E.UNPACK_SKIP_ROWS,ze),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Fe);const st=b.isDataArrayTexture||b.isData3DTexture,Pt=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Dt=ne.get(b),bt=ne.get(F),wt=ne.get(Dt.__renderTarget),Br=ne.get(bt.__renderTarget);I.bindFramebuffer(E.READ_FRAMEBUFFER,wt.__webglFramebuffer),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let En=0;En<Te;En++)st&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(b).__webglTexture,O,Fe+En),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ne.get(F).__webglTexture,me,ct+En)),E.blitFramebuffer(Be,ze,Re,De,Ye,$e,Re,De,E.DEPTH_BUFFER_BIT,E.NEAREST);I.bindFramebuffer(E.READ_FRAMEBUFFER,null),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||ne.has(b)){const Dt=ne.get(b),bt=ne.get(F);I.bindFramebuffer(E.READ_FRAMEBUFFER,sc),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,oc);for(let wt=0;wt<Te;wt++)st?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Dt.__webglTexture,O,Fe+wt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Dt.__webglTexture,O),Pt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,bt.__webglTexture,me,ct+wt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,bt.__webglTexture,me),O!==0?E.blitFramebuffer(Be,ze,Re,De,Ye,$e,Re,De,E.COLOR_BUFFER_BIT,E.NEAREST):Pt?E.copyTexSubImage3D(rt,me,Ye,$e,ct+wt,Be,ze,Re,De):E.copyTexSubImage2D(rt,me,Ye,$e,Be,ze,Re,De);I.bindFramebuffer(E.READ_FRAMEBUFFER,null),I.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Pt?b.isDataTexture||b.isData3DTexture?E.texSubImage3D(rt,me,Ye,$e,ct,Re,De,Te,tt,Oe,it.data):F.isCompressedArrayTexture?E.compressedTexSubImage3D(rt,me,Ye,$e,ct,Re,De,Te,tt,it.data):E.texSubImage3D(rt,me,Ye,$e,ct,Re,De,Te,tt,Oe,it):b.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,me,Ye,$e,Re,De,tt,Oe,it.data):b.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,me,Ye,$e,it.width,it.height,tt,it.data):E.texSubImage2D(E.TEXTURE_2D,me,Ye,$e,Re,De,tt,Oe,it);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ke),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,At),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Vn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Rt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,bi),me===0&&F.generateMipmaps&&E.generateMipmap(rt),I.unbindTexture()},this.initRenderTarget=function(b){ne.get(b).__webglFramebuffer===void 0&&re.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),I.unbindTexture()},this.resetState=function(){R=0,C=0,U=null,I.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const zl=":root{font-family:Arial,Apple SD Gothic Neo,Malgun Gothic,sans-serif;color:#292929;background:#fff;font-synthesis:none}*{box-sizing:border-box}body{margin:0}button,input{font:inherit}button{cursor:pointer;color:inherit;background:#fff;border:1px solid #aaa;min-height:44px;padding:10px 17px;font-size:12px}button:disabled{opacity:.45;cursor:default}button:focus-visible,input:focus-visible,[tabindex]:focus-visible,a:focus-visible{outline:3px solid #333;outline-offset:4px}a{color:inherit}h1,p,dl,dd{margin:0}#fold-app{max-width:1240px;margin:auto;padding:0 48px}.demo-header{display:flex;justify-content:space-between;gap:20px;padding:25px 0;border-bottom:1px solid #ddd;font-size:10px;line-height:1.8}.demo-header span{letter-spacing:1px}.demo-intro{display:flex;align-items:end;justify-content:space-between;gap:30px;padding:42px 0 30px}.overline{font-size:11px;color:#666;margin-bottom:14px}h1{font-size:29px;font-weight:500;letter-spacing:-.6px}.demo-intro>div>p:last-child{font-size:13px;line-height:1.9;color:#555;margin-top:16px}dl{font-size:11px;line-height:1.8}dl>div{display:flex;gap:20px;padding:5px 0}dt{color:#666;min-width:55px}.viewer{border:1px solid #c8c8c8;background:#fafafa}.viewer-top,.viewer-bottom{display:flex;justify-content:space-between;gap:20px;padding:18px 22px;font-size:11px;line-height:1.7}.viewer-top{border-bottom:1px solid #e3e3e3}.viewer-top span:last-child{color:#666}.viewer-bottom{border-top:1px solid #e3e3e3}.stage{height:530px;position:relative;perspective:1800px;overflow:hidden;touch-action:pan-y;-webkit-user-select:none;user-select:none}.stage[data-state=folded]{cursor:grab}.stage.dragging{cursor:grabbing}.rig{position:absolute;top:50%;left:50%;width:0;height:0;transform-style:preserve-3d}.turntable{position:absolute;left:-120px;top:-140px;width:240px;height:280px;transform-style:preserve-3d}.package-root{width:240px;height:280px;position:relative;transform-style:preserve-3d}.panel{position:absolute;transform-style:preserve-3d}.paper,.paper-inside{position:absolute;inset:0;backface-visibility:hidden;pointer-events:none}.paper{transform:translateZ(.12px)}.paper>img{display:block;width:100%;height:100%;pointer-events:none}.paper-inside{background:#fff9fc;transform:rotateY(180deg) translateZ(.12px)}.front{width:240px;height:280px;left:0;top:0}.left{width:80px;height:280px;left:-80px;top:0;transform-origin:right center}.back{width:240px;height:280px;left:-240px;top:0;transform-origin:right center}.right{width:80px;height:280px;left:240px;top:0;transform-origin:left center}.glue{width:30.4px;height:280px;left:-30.4px;top:0;transform-origin:right center}.glue .paper-inside{clip-path:polygon(100% 0,0 3%,0 85%,18% 92%,100% 100%)}.lid{width:240px;height:80px;left:0;top:-80px;transform-origin:center bottom}.lid-tuck{width:240px;height:30.4px;left:0;top:-30.4px;transform-origin:center bottom}.lid-tuck .paper-inside{border-radius:20px 20px 0 0}.dust-left-top,.dust-right-top{width:80px;height:55.8px;left:0;top:-55.8px;transform-origin:center bottom}.dust-left-top .paper-inside,.dust-right-top .paper-inside{clip-path:polygon(0 100%,0 75%,12% 55%,18% 0,90% 0,100% 100%)}.bottom-front,.bottom-back{width:240px;height:66.4px;left:0;top:280px;transform-origin:center top}.bottom-front .paper-inside,.bottom-back .paper-inside{clip-path:polygon(0 0,100% 0,97% 100%,66% 60%,49.5% 60%,49.5% 72%,40% 72%,33% 100%,4% 100%)}.dust-left-bottom,.dust-right-bottom{width:80px;height:44.6px;left:0;top:280px;transform-origin:center top}.dust-left-bottom .paper-inside,.dust-right-bottom .paper-inside{clip-path:polygon(0 0,100% 0,78% 38%,65% 100%,27% 100%)}.package-shadow{position:absolute;left:calc(50% - 105px);top:calc(50% + 165px);width:210px;height:12px;border-radius:50%;background:#333;filter:blur(11px);opacity:0;pointer-events:none}.main-controls{display:flex;justify-content:center;gap:12px;padding:25px 0}.primary{background:#303030;color:#fff;border-color:#303030;min-width:185px}.detail-controls{display:flex;justify-content:space-between;align-items:end;gap:35px;border-top:1px solid #ddd;padding:25px 0}.scrubber{flex:1;max-width:430px}.scrubber label{font-size:11px;display:block;margin-bottom:15px}.scrubber input{width:100%;accent-color:#444;min-height:26px;margin:0}.rotation-controls{display:flex;gap:7px;flex-wrap:wrap}.rotation-controls button{font-size:11px;padding:10px 12px}.demo-notes{padding:0 0 35px;font-size:11px;color:#555;line-height:1.9}.demo-notes p+p{margin-top:10px}.demo-notes strong{color:#333;margin-right:9px}@media(max-width:700px){#fold-app{padding:0 20px}.demo-header{font-size:9px;padding:17px 0;gap:12px}.demo-intro{display:block;padding:28px 0 22px}h1{font-size:25px}.demo-intro>div>p:last-child{font-size:12px}.demo-intro dl{font-size:10px;margin-top:18px}.demo-intro dl>div{padding:2px 0}.overline{font-size:10px}.viewer-top,.viewer-bottom{padding:13px 12px;font-size:10px;gap:10px}.viewer-top{flex-wrap:wrap}.viewer-top span:last-child{font-size:9px}.stage{height:390px;perspective:1100px}.main-controls{gap:8px;padding:20px 0}.main-controls button{font-size:11px;padding:10px 12px}.primary{min-width:160px}.detail-controls{display:block;padding:20px 0}.scrubber{max-width:none}.rotation-controls{margin-top:20px;justify-content:center;gap:6px}.rotation-controls button{font-size:10px;padding:10px}.demo-notes{font-size:10px}.package-shadow{top:calc(50% + 110px);width:130px;left:calc(50% - 65px)}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}}.render-filters{position:absolute;pointer-events:none}.paper>img,.paper-inside>img{position:absolute;inset:0;width:100%;height:100%;display:block}.paper>.ink-original{opacity:calc(1 - var(--clean-mix,0))}.paper>.ink-clean{opacity:var(--clean-mix,0);filter:url(#no-cutlines)}.paper-inside{background:none!important;clip-path:none!important;border-radius:0!important}.paper-inside>img{transform:scaleX(-1);filter:url(#paper-stock)}.bottom-backing{position:absolute;left:0;top:279.1px;width:240px;height:80px;background:#efa0c3;transform-origin:center top;transform:rotateX(-90deg);backface-visibility:hidden;opacity:var(--base-opacity,0)}.bottom-main,.diagonal-hinge{position:absolute;inset:0;transform-style:preserve-3d}.diagonal-hinge{transform-origin:100% 0}.bottom-main .paper>img,.bottom-main .paper-inside>img{clip-path:polygon(0 0,100% 0,78.47% 77.66%,65.78% 59.57%,49.56% 59.57%,49.56% 72.34%,40.12% 72.34%,32.74% 100%,3.83% 100%)}.diagonal-hinge .paper>img,.diagonal-hinge .paper-inside>img{clip-path:polygon(100% 0,96.16% 12.77%,98.82% 36.17%,97.05% 100%,78.47% 77.66%)}.bottom-backing{background:none;backface-visibility:visible;transform-style:preserve-3d;top:279.5px}.base-outside,.base-inside{position:absolute;inset:0;backface-visibility:hidden}.base-outside{background:#efa0c3;transform:translateZ(.12px)}.base-inside{background:#f8c4dc;transform:rotateY(180deg) translateZ(.12px)}",ys=new Map;function Gl(i){return ys.has(i)||ys.set(i,new hh().loadAsync(i).then(e=>(e.colorSpace=ln,e.minFilter=Ft,e.magFilter=Ft,e.generateMipmaps=!1,e))),ys.get(i)}const Qm=`varying vec2 vUv;varying vec3 vNormal;
void main(){vUv=uv;vNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,$m=`precision highp float;
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
}`;function Vl(i,e,t){const n=e||[[0,0],[100,0],[100,100],[0,100]],r=Array.from({length:16},()=>new ot);n.forEach(([a,c],l)=>{const[u,h]=n[(l+1)%n.length];r[l].set(a/100,1-c/100,u/100,1-h/100)});const s=new pn({vertexShader:Qm,fragmentShader:$m,side:Nt,depthTest:!0,depthWrite:!0,toneMapped:!1,uniforms:{printMap:{value:i},texSize:{value:new Me(i.image.width,i.image.height)},stock:{value:new N},clean:{value:0},edges:{value:r},edgeCount:{value:n.length}}}),o=new Ze(t).convertLinearToSRGB();return s.uniforms.stock.value=new N(o.r,o.g,o.b),s}const ws=i=>Math.max(0,Math.min(1,i)),e0=i=>i*i*(3-2*i);let t0=0;function n0(i,e,t={}){const n=e[0],r=n.shape==="pouch",s=`retail-${++t0}`,[o,a,c]=n.dimensions,l=`${n.label} ${n.title}`,u=i.attachShadow({mode:"open"}),h=I=>u.querySelector(I),p=I=>u.querySelectorAll(I);u.innerHTML=`<style>${zl}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555;line-height:1.8}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.viewer-bottom{min-height:55px}.render-error{padding:35px;font-size:12px;line-height:1.9}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 </style><div class="widget"><h4 class="model-name">${l}</h4><p class="dimensions">${n.dimensionNote}</p>
 <section class="viewer" aria-label="${l} 입체 목업"><div class="viewer-top"><span id="view-state">01 / 평면 그래픽</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${l}. 입체 상태에서 드래그 회전, 휠 확대·축소가 가능합니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>3D 목업으로 보기</button><button id="flat-reset" disabled>평면 그래픽으로 초기화</button></div>
 <div class="detail-controls"><div class="scrubber"><label for="${s}">${r?"앞뒤 인쇄면 → 실링 파우치":"전면 그래픽 → 입체 진열 팩"}</label><input id="${s}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled /></div><div class="rotation-controls" role="group" aria-label="패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>${r?"제공된 앞·뒷면으로 봉투를 만들고, 상하 실링과 중앙의 볼륨을 표현했습니다.":"제공 전면 그래픽으로 얇은 진열 팩과 원형 배지의 높이감을 표현했습니다. 후면은 자료가 없어 무지로 표시합니다."}</p><p>약 2초 입체 전환 · 드래그 회전 · 휠 확대/축소 · 초기 시점에서 배율 복원.</p></div></div>`;const d=h(".stage"),v=h("#fold-toggle"),x=h(".fold-progress");let m=t.progress??0,f=t.rx??-12,A=t.ry??-28,S=t.zoom??1,M,L,R,C,U,w,y,T=!1,k=!1,z=!1,H=0,X=!1,W=0,ie=0;const q=[],de=[],j=[],fe=[];i.dataset.variant=n.id,i.dataset.state="loading",i.dataset.dimensions=n.dimensions.join(",");function ge(I){const Q=new Pl({color:I,roughness:.5,metalness:.03,side:Nt});return q.push(Q),Q}function Pe(I){const Q=Vl(I,null,n.stock),ne=Q.uniforms.edges.value;let re=Q.uniforms.edgeCount.value;for(const g of n.sealLines)ne[re++].set(0,1-g,1,1-g);const[V,ce,_]=n.hole;for(let g=0;g<8;g++){const P=g*Math.PI/4,B=(g+1)*Math.PI/4;ne[re++].set(V+_*Math.cos(P),1-ce+_*o/a*Math.sin(P),V+_*Math.cos(B),1-ce+_*o/a*Math.sin(B))}return Q.uniforms.edgeCount.value=re,q.push(Q),Q}function Ne(I=a/2,Q=-a/2,ne=!1){const re=new Io;if(re.moveTo(-o/2,I),re.lineTo(o/2,I),re.lineTo(o/2,Q),re.lineTo(-o/2,Q),re.closePath(),ne){const[V,ce,_]=n.hole,g=new mo;g.absarc((V-.5)*o,a/2-ce*a,_*o,0,Math.PI*2,!0),re.holes.push(g)}return re}function ke(I){const Q=I.getAttribute("position"),ne=[];for(let re=0;re<Q.count;re++)ne.push(Q.getX(re)/o+.5,Q.getY(re)/a+.5);return I.setAttribute("uv",new ht(ne,2)),de.push(I),I}function Y(I,Q,ne,re=!1){const V=new ut(ke(Q),ne);I.add(V);const ce=Q.getAttribute("position"),_=[];for(let g=0;g<ce.count;g++){const P=ce.getX(g),B=ce.getY(g),Z=ws((a/2-15-B)/(a-30)),G=ws(P/o+.5);_.push(r?.16+(re?c/2*Math.pow(Math.max(0,Math.sin(Math.PI*G)*Math.sin(Math.PI*Z)),.8):0):c/2+.02)}return j.push({mesh:V,depth:_}),V}function ee(I){L=new Co,L.background=new Ze("#fafafa"),L.add(new Il("#ffffff","#b7acb5",2));const Q=new _o("#ffffff",2.2);Q.position.set(-120,200,300),L.add(Q),R=new Ct(30,1,10,5e3),C=new Ut,L.add(C),U=new Ut,w=new Ut,C.add(U,w);const ne=Pe(I.front),re=I.back?Pe(I.back):ge("#f6f1f3");for(const[_,g]of[[U,ne],[w,re]])if(r){Y(_,new Ui(Ne(a/2,a/2-15,!0),48),g);const P=new qi(o,a-30,56,48);Y(_,P,g,!0),Y(_,new Ui(Ne(-a/2+15,-a/2),8),g)}else Y(_,new Ui(Ne(a/2,-a/2,!0),64),g);const V=new No(Ne(a/2,-a/2,!0),{depth:r?.3:c,bevelEnabled:!1,curveSegments:48,steps:1});V.translate(0,0,-(r?.3:c)/2),de.push(V);const ce=new fi;if(ce.visible=!1,q.push(ce),y=new ut(V,[ce,ge(r?n.stock:"#e2d5dc")]),C.add(y),!r){const _=I.front;for(const g of[420,590])for(const P of[120,290,460]){const B=.13675213675213677*o,Z=(P/585-.5)*o,G=a/2-g/_.image.height*a,ye=new Nr(B,64),le=ye.getAttribute("position"),xe=[];for(let Ce=0;Ce<le.count;Ce++)xe.push((le.getX(Ce)+Z)/o+.5,(le.getY(Ce)+G)/a+.5);ye.setAttribute("uv",new ht(xe,2)),de.push(ye);const _e=new Ut,ae=new ut(ye,Pe(_));ae.position.z=.85,_e.add(ae);const ue=new Fr(B,B,1.6,64,1,!0);ue.rotateX(Math.PI/2),de.push(ue),_e.add(new ut(ue,ge(n.group==="daiso"?"#dac28d":n.stock))),_e.position.set(Z,G,0),U.add(_e),fe.push(_e)}}}function ve(){H&&cancelAnimationFrame(H),H=0,X=!1,d.classList.remove("dragging"),d.removeAttribute("aria-busy"),v.disabled=!T}function Ae(){if(!T||k)return;const I=e0(m),Q=Math.PI/180;for(const{mesh:Z,depth:G}of j){const ye=Z.geometry.getAttribute("position");for(let le=0;le<ye.count;le++)ye.setZ(le,G[le]*I);ye.needsUpdate=!0,Z.geometry.computeVertexNormals()}U.position.x=r?-o*.6*(1-I):0,w.position.x=r?o*.6*(1-I):0,w.rotation.y=Math.PI*I,w.visible=r||m>.001,y.scale.z=I,y.visible=m>.001;for(const Z of fe)Z.visible=m>.001,Z.position.z=(c/2+.85)*I,Z.scale.z=I;q.forEach(Z=>{Z.uniforms?.clean&&(Z.uniforms.clean.value=I)}),C.rotation.set(-f*I*Q,A*I*Q,0,"XYZ");const ne=d.clientWidth,re=d.clientHeight,V=ne/re,ce=Math.tan(R.fov*Q/2),_=Math.max(a/2/ce,o*(r?2.25:1.1)/2/ce/V)*1.16,g=Math.hypot(o,a,c)/2/Math.sin(R.fov*Q/2)*1.15;R.aspect=V,R.position.z=(_+(g-_)*I)/S,R.updateProjectionMatrix(),M.render(L,R);const P=m>=.999,B=m<=.001;i.dataset.state=d.dataset.state=B?"flat":P?"folded":"partial",h("#view-state").textContent=B?"01 / 평면 그래픽":P?"03 / 입체 패키지":"02 / 입체 전환",h("#view-hint").textContent=P?"드래그 회전 · 휠 확대/축소":"휠 확대/축소",h("#phase-text").textContent=B?r?"앞면 · 뒷면 인쇄 그래픽":"전면 인쇄 그래픽":P?"완성 · 드래그로 회전":r?"앞뒤 면 조립 · 실링과 볼륨 형성":"진열 팩 · 배지 높이감 형성",h("#progress-text").textContent=Math.round(m*100)+"%",x.value=Math.round(m*100),x.setAttribute("aria-valuetext",`${P?"입체 목업":"평면에서 입체로 전환"}, ${Math.round(m*100)}퍼센트`),v.textContent=P?"평면 그래픽으로 보기":B?"3D 목업으로 보기":"이어서 3D로 보기",p("[data-view]").forEach(Z=>Z.disabled=!P)}function Se(){T&&!k&&(M.setSize(d.clientWidth,d.clientHeight,!1),Ae())}async function Ge(){if(!(z||k)){z=!0;try{M=new Bo({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),M.setPixelRatio(Math.min(devicePixelRatio,1.5)),d.append(M.domElement);const I=Object.fromEntries(await Promise.all(Object.entries(n.textures).map(async([Q,ne])=>[Q,await Gl(ne)])));if(k)return;ee(I),T=!0,v.disabled=x.disabled=h("#flat-reset").disabled=!1,Se()}catch(I){i.dataset.state=d.dataset.state="error",h("#phase-text").textContent="3D 표시 실패",d.innerHTML='<p class="render-error">3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',console.error(I)}}}function je(I){if(!T)return;ve();const Q=m;if(matchMedia("(prefers-reduced-motion: reduce)").matches){m=I,Ae();return}v.disabled=!0,d.setAttribute("aria-busy","true");const ne=performance.now(),re=Math.max(1,2e3*Math.abs(I-Q)),V=ce=>{const _=ws((ce-ne)/re);m=Q+(I-Q)*_,Ae(),_<1?H=requestAnimationFrame(V):(ve(),Ae())};H=requestAnimationFrame(V)}v.onclick=()=>je(m>=.999?0:1),h("#flat-reset").onclick=()=>{f=-12,A=-28,S=1,je(0)},x.oninput=()=>{ve(),m=Number(x.value)/100,Ae()};const E={front:[0,0],back:[0,180],side:[0,-82],bottom:[85,30],reset:[-12,-28]};p("[data-view]").forEach(I=>I.onclick=()=>{[f,A]=E[I.dataset.view],I.dataset.view==="reset"&&(S=1),Ae()}),d.onpointerdown=I=>{m<.999||H||(X=!0,W=I.clientX,ie=I.clientY,d.setPointerCapture(I.pointerId),d.classList.add("dragging"))},d.onpointermove=I=>{X&&(A+=(I.clientX-W)*.5,f=Math.max(-90,Math.min(90,f-(I.clientY-ie)*.35)),W=I.clientX,ie=I.clientY,Ae())},d.onpointerup=d.onpointercancel=()=>{X=!1,d.classList.remove("dragging")},d.onkeydown=I=>{m<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(I.key)||(I.preventDefault(),I.key==="ArrowLeft"&&(A-=10),I.key==="ArrowRight"&&(A+=10),I.key==="ArrowUp"&&(f=Math.max(-90,f-10)),I.key==="ArrowDown"&&(f=Math.min(90,f+10)),Ae())},d.addEventListener("wheel",I=>{if(!T||H)return;I.preventDefault();const Q=I.deltaY*(I.deltaMode===1?16:I.deltaMode===2?d.clientHeight:1);S=Math.max(.65,Math.min(2.5,S*Math.exp(-Math.max(-200,Math.min(200,Q))*.0015))),Ae()},{passive:!1});const oe=new ResizeObserver(Se);oe.observe(d);const te=new IntersectionObserver(I=>{I.some(Q=>Q.isIntersecting)&&(Ge(),te.disconnect())},{rootMargin:"500px"});te.observe(i);const $={getState(){return{progress:m,rx:f,ry:A,zoom:S}},setView(I,Q){f=I,A=Q,Ae()},setBackground(I){L&&(L.background.set(I),Ae())},destroy(){k=!0,ve(),te.disconnect(),oe.disconnect(),de.forEach(I=>I.dispose()),q.forEach(I=>I.dispose()),M?.dispose(),u.innerHTML=""}};return i.viewer=$,$}const ja=i=>Math.max(0,Math.min(1,i)),i0=i=>i*i*(3-2*i);let r0=0;function Hl(i,e,t={}){if(["retail-card","pouch"].includes(e[0].shape))return n0(i,e,t);const n=i.attachShadow({mode:"open"}),r=++r0,s=e[0],o=V=>n.querySelector(V),a=V=>n.querySelectorAll(V),c=s.title?`${s.label} ${s.title}`:s.group==="full"?"풀박스":`${s.label} ${s.group==="single"?"싱글팩":"리미티드 에디션"}`;n.innerHTML=`<style>${zl}
 :host{display:block;min-width:0;font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;color:#292929}.model-name{font-size:17px;margin:0 0 9px;font-weight:600}.dimensions{font-size:11px;margin:0 0 18px;color:#555}.stage{height:470px;touch-action:pan-y}.stage canvas{display:block;width:100%;height:100%}.main-controls{padding:20px 0;flex-wrap:wrap}.scrubber{max-width:360px}.demo-notes{padding-bottom:0}.demo-notes p{margin:0}.render-error{padding:35px;font-size:12px;line-height:1.9}.viewer-bottom{min-height:55px}
 @media(max-width:700px){.stage{height:370px}.model-name{font-size:15px}.dimensions{font-size:10px}.detail-controls{display:block}.scrubber{max-width:none}.rotation-controls{margin-top:18px}.viewer-top{font-size:9px}.demo-notes{font-size:10px}}
 </style><div class="widget"><h4 class="model-name">${c}</h4><p class="dimensions">${s.dimensionNote||`${s.dimensions.join(" × ")} mm · ${s.group==="single"?"제공 사양 기준":"인수인계 규격 기록 기준"}`}</p>
 <section class="viewer" aria-label="${c} 전개도 접힘 뷰어"><div class="viewer-top"><span id="view-state">01 / 평면 전개도</span><span id="view-hint">자료를 불러오는 중</span></div><div class="stage" tabindex="0" role="group" aria-label="${c}. 마우스 휠로 확대·축소하고, 접은 후 드래그 또는 방향키로 회전할 수 있습니다." data-state="loading"></div><div class="viewer-bottom"><span id="phase-text" aria-live="polite">자료를 불러오는 중</span><span id="progress-text">0%</span></div></section>
 <div class="main-controls"><button id="fold-toggle" class="primary" disabled>접어서 3D로 보기</button><button id="flat-reset" disabled>전개도로 초기화</button>${s.shape==="display"?'<button id="display-toggle" disabled aria-pressed="false">진열형으로 보기</button>':""}</div>
 <div class="detail-controls"><div class="scrubber"><label for="fold-progress-${r}">접힘 단계 직접 살펴보기</label><input id="fold-progress-${r}" class="fold-progress" type="range" min="0" max="100" step="1" value="0" disabled aria-valuetext="평면 전개도, 0퍼센트"/></div><div class="rotation-controls" role="group" aria-label="완성된 패키지 시점"><button data-view="front" disabled>정면</button><button data-view="back" disabled>뒷면</button><button data-view="side" disabled>측면</button><button data-view="bottom" disabled>바닥</button><button data-view="reset" disabled>초기 시점</button></div></div>
 <div class="demo-notes"><p>전개도 → 약 2초 접힘 → 드래그 회전 · 휠 확대/축소 → 다시 펼치기. 칼선은 펼친 전개도에서만 표시합니다.</p><p>제공 그래픽과 규격 기록을 바탕으로 한 시각적 시연입니다. 생산용 조립·접착 순서와 종이 두께의 정밀 검증은 별도입니다.</p></div></div>`;const l=o(".stage"),u=o("#fold-toggle"),h=o(".fold-progress"),[p,d,v]=s.dimensions,{tuck:x,dustTop:m,bottom:f,dustBottom:A,glue:S}=s.heights;let M,L,R,C,U,w,y=!1,T=!1,k=!1,z=t.progress??0,H=0,X=t.rx??-12,W=t.ry??-28,ie=t.zoom??1,q=!1,de=0,j=0,fe=t.displayOpen??!1;const ge={},Pe=[],Ne=[],ke=[],Y=(V,ce)=>i0(ja((z-V)/(ce-V)));i.dataset.variant=s.id,i.dataset.state="loading",i.dataset.dimensions=s.dimensions.join(",");function ee(){H&&cancelAnimationFrame(H),H=0,q=!1,l.classList.remove("dragging"),l.removeAttribute("aria-busy"),u.disabled=!y}function ve(V,ce,_,g=0,P=0,B=0){const Z=_||[[0,0],[100,0],[100,100],[0,100]],G=Z.map(([ae,ue])=>new Me(g+V*ae/100-B,-P-ce*ue/100)),ye=Zt.triangulateShape(G,[]),le=[],xe=[];for(const ae of ye){let[ue,Ce,Ue]=ae;const we=G[ue],Ve=G[Ce],D=G[Ue];(Ve.x-we.x)*(D.y-we.y)-(Ve.y-we.y)*(D.x-we.x)<0&&([Ce,Ue]=[Ue,Ce]);for(const he of[ue,Ce,Ue])le.push(G[he].x,G[he].y,0),xe.push(Z[he][0]/100,1-Z[he][1]/100)}const _e=new Ot;return _e.setAttribute("position",new ht(le,3)),_e.setAttribute("uv",new ht(xe,2)),_e.computeVertexNormals(),Ne.push(_e),_e}function Ae(V,ce){const _=Vl(V,ce,s.stock);return Pe.push(_),_}function Se(V,ce,_,g,P=0,B=0){const Z=new Ut;if(ce.add(Z),ge[V]=Z,s.shape==="display"&&["front","left","right"].includes(V)){const G=s.tearHeight*100,ye=V==="front"?[[0,G],[100,G],[100,100],[0,100]]:V==="left"?[[0,0],[100,G],[100,100],[0,100]]:[[0,G],[100,0],[100,100],[0,100]],le=V==="front"?[[0,0],[100,0],[100,G],[0,G]]:V==="left"?[[0,0],[100,0],[100,G]]:[[0,0],[100,0],[0,G]];Z.add(new ut(ve(_,g,ye,P,B),Ae(Ge[V],ye)));const xe=new ut(ve(_,g,le,P,B),Ae(Ge[V],le));Z.add(xe),ke.push(xe)}else if(V==="bottom-front"||V==="bottom-back"){Z.add(new ut(ve(_,g,s.bottomMain),Ae(Ge[V],s.bottomMain)));const G=new Ut;G.position.x=_,Z.add(G),G.add(new ut(ve(_,g,s.bottomTab,0,0,_),Ae(Ge[V],s.bottomTab))),ge[V+"-tab"]=G}else Z.add(new ut(ve(_,g,null,P,B),Ae(Ge[V])));return Z}let Ge={};function je(){L=new Co,L.background=new Ze("#fafafa"),R=new Ct(30,1,10,5e3),R.position.z=1e3,C=new Ut,L.add(C),U=new Ut,U.position.set(-p/2,d/2,v/2),C.add(U);const V=Se("left",U,v,d,-v,0),ce=Se("back",V,p,d,-p,0);ce.position.x=-v;const _=Se("glue",ce,S,d,-S,0);_.position.x=-p;const g=Se("right",U,v,d);g.position.x=p,Se("front",U,p,d);const P=Se("lid",U,p,v,0,-v),B=Se("lid-tuck",P,p,x,0,-x);B.position.y=v,Se("dust-left-top",V,v,m,-v,-m),Se("dust-right-top",g,v,m,0,-m);const Z=Se("dust-left-bottom",V,v,A,-v,0);Z.position.y=-d;const G=Se("dust-right-bottom",g,v,A);G.position.y=-d;const ye=Se("bottom-front",U,p,f);ye.position.y=-d,Se("bottom-back",ce,p,f).position.set(-p,-d,0);const xe=ve(p,v),_e=new fi({color:s.stock,side:Nt});if(Pe.push(_e),w=new ut(xe,_e),w.rotation.x=Math.PI/2,w.position.y=-d+(s.shape==="display"?1:.32),U.add(w),s.shape==="display"){const ae=new fi({color:"#fff9fc",side:yt});Pe.push(ae),_e.side=fn,w.add(new ut(xe,ae))}}function E(){if(!y||T)return;const V=Math.PI/180;ge.left.rotation.y=-90*V*Y(.08,.32),ge.back.rotation.y=-90*V*Y(.26,.52),ge.right.rotation.y=90*V*Y(.4,.61),ge.glue.rotation.y=-90*V*Y(.5,.65);for(const ue of["dust-left-top","dust-right-top"])ge[ue].rotation.x=-90*V*Y(.61,.73);for(const ue of["dust-left-bottom","dust-right-bottom"])ge[ue].rotation.x=90*V*Y(.62,.73);ge["bottom-back"].rotation.x=90*V*Y(.69,.82),ge["bottom-front"].rotation.x=90*V*Y(.74,.87);const ce=new N(s.diagonal[0]*p,s.diagonal[1]*f,0).normalize();for(const ue of["bottom-front-tab","bottom-back-tab"])ge[ue].quaternion.setFromAxisAngle(ce,Math.PI*Y(.57,.74)),ge[ue].position.z=-.35*Y(.57,.74);ge.lid.rotation.x=-90*V*Y(.76,.94),ge["lid-tuck"].rotation.x=-90*V*Y(.87,.98);const _=Y(.6,1);if(ge["dust-left-top"].position.y=ge["dust-right-top"].position.y=-.4*_,ge["dust-left-bottom"].position.y=ge["dust-right-bottom"].position.y=-d+.6*_,ge["bottom-back"].position.y=-d+.25*_,ge.glue.position.set(-p+.65*_,0,0),ge["lid-tuck"].position.set(0,v-.65*_,0),s.shape==="display"){const ue=fe&&z>=.999;ke.forEach(Ce=>Ce.visible=!ue);for(const Ce of["lid","dust-left-top","dust-right-top"])ge[Ce].visible=!ue;o("#display-toggle").disabled=z<.999,o("#display-toggle").textContent=ue?"상단 닫힌 형태로 보기":"진열형으로 보기",o("#display-toggle").setAttribute("aria-pressed",String(ue))}w.visible=z>.88,Pe.forEach(ue=>{ue.uniforms&&(ue.uniforms.clean.value=Y(.03,.65))});const g=Y(0,1);C.rotation.set(-X*g*V,W*g*V,0,"XYZ"),C.position.set((p+S)/2*(1-g),-(v+x-f)/2*(1-g),0);const P=l.clientWidth,B=l.clientHeight,Z=P/B;R.aspect=Z;const G=Math.tan(R.fov*V/2),ye=Math.max((d+v+x+f)/2/G,(2*p+2*v+S)/2/G/Z)*1.13,le=Math.hypot(p,d,v)/2/Math.sin(R.fov*V/2)*1.12;R.position.z=(ye+(le-ye)*g)/ie,R.updateProjectionMatrix(),M.render(L,R);const xe=z>=.999,_e=z<=.001;l.dataset.state=i.dataset.state=_e?"flat":xe?"folded":"partial",o("#view-state").textContent=_e?"01 / 평면 전개도":xe?"03 / 입체 패키지":"02 / 접힘 과정",o("#view-hint").textContent=xe?"드래그 회전 · 휠 확대/축소":"휠 확대/축소 · 연결된 면 접기";const ae=_e?"평면 전개도":z<.61?"옆면과 뒷면 접기":z<.76?"안쪽 날개 접기":z<.9?"바닥과 덮개 접기":xe?"완성 · 드래그로 회전":"덮개 마무리";o("#phase-text").textContent=ae,o("#progress-text").textContent=Math.round(z*100)+"%",h.value=Math.round(z*100),h.setAttribute("aria-valuetext",ae+", "+Math.round(z*100)+"퍼센트"),u.textContent=xe?"전개도로 펼치기":_e?"접어서 3D로 보기":"이어서 접기",a("[data-view]").forEach(ue=>ue.disabled=!xe)}function oe(){!M||!y||(M.setSize(l.clientWidth,l.clientHeight,!1),E())}async function te(){if(!(k||T)){k=!0;try{M=new Bo({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),M.setPixelRatio(Math.min(devicePixelRatio,1.5)),l.append(M.domElement),M.domElement.addEventListener("webglcontextlost",ce=>{ce.preventDefault(),ee(),o("#phase-text").textContent="3D 화면이 중단됐습니다. 페이지를 새로 열어주세요."});const V=await Promise.all(Object.entries(s.textures).map(async([ce,_])=>[ce,await Gl(_)]));if(T)return;Ge=Object.fromEntries(V),je(),y=!0,u.disabled=h.disabled=o("#flat-reset").disabled=!1,oe()}catch(V){i.dataset.state=l.dataset.state="error",l.innerHTML='<p class="render-error">이 브라우저에서 3D 화면을 표시할 수 없습니다. 최신 Chrome 또는 Safari에서 다시 열어주세요.</p>',o("#phase-text").textContent="3D 표시 실패",console.error(V)}}}function $(V){if(!y)return;ee();const ce=z;if(matchMedia("(prefers-reduced-motion: reduce)").matches||Math.abs(V-ce)<1e-4){z=V,E();return}const _=performance.now(),g=2e3*Math.abs(V-ce);u.disabled=!0,l.setAttribute("aria-busy","true");const P=B=>{const Z=ja((B-_)/g);z=ce+(V-ce)*Z,E(),Z<1?H=requestAnimationFrame(P):(ee(),E())};H=requestAnimationFrame(P)}u.onclick=()=>{X=-12,W=-28,$(z>=.999?0:1)},o("#flat-reset").onclick=()=>{X=-12,W=-28,ie=1,$(0)},h.oninput=()=>{ee(),z=Number(h.value)/100,E()},o("#display-toggle")&&(o("#display-toggle").onclick=()=>{fe=!fe,E()});const I={front:[0,0],back:[0,180],side:[0,-90],bottom:[85,30],reset:[-12,-28]};a("[data-view]").forEach(V=>V.onclick=()=>{[X,W]=I[V.dataset.view],V.dataset.view==="reset"&&(ie=1),E()}),l.onpointerdown=V=>{z<.999||H||(q=!0,de=V.clientX,j=V.clientY,l.setPointerCapture(V.pointerId),l.classList.add("dragging"))},l.onpointermove=V=>{q&&(W+=(V.clientX-de)*.5,X=Math.max(-90,Math.min(90,X-(V.clientY-j)*.35)),de=V.clientX,j=V.clientY,E())},l.onpointerup=l.onpointercancel=()=>{q=!1,l.classList.remove("dragging")},l.onkeydown=V=>{z<.999||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(V.key)||(V.preventDefault(),V.key==="ArrowLeft"&&(W-=10),V.key==="ArrowRight"&&(W+=10),V.key==="ArrowUp"&&(X=Math.max(-90,X-10)),V.key==="ArrowDown"&&(X=Math.min(90,X+10)),E())},l.addEventListener("wheel",V=>{if(!y||H)return;V.preventDefault();const ce=V.deltaY*(V.deltaMode===1?16:V.deltaMode===2?l.clientHeight:1);ie=Math.max(.65,Math.min(2.5,ie*Math.exp(-Math.max(-200,Math.min(200,ce))*.0015))),E()},{passive:!1});const Q=new ResizeObserver(oe);Q.observe(l);const ne=new IntersectionObserver(V=>{V.some(ce=>ce.isIntersecting)&&(te(),ne.disconnect())},{rootMargin:"500px"});ne.observe(i);const re={getState(){return{progress:z,rx:X,ry:W,zoom:ie,displayOpen:fe}},getInteriorBounds(){if(!y)return null;U.updateWorldMatrix(!0,!0);const V=new lt().copy(U.matrixWorld).invert(),ce={};for(const _ of["glue","lid-tuck"]){const g=new _i;ge[_].traverse(P=>{if(!P.isMesh)return;const B=P.geometry.getAttribute("position");for(let Z=0;Z<B.count;Z++)g.expandByPoint(new N().fromBufferAttribute(B,Z).applyMatrix4(P.matrixWorld).applyMatrix4(V))}),ce[_]={min:g.min.toArray(),max:g.max.toArray()}}return ce},setBackground(V){L&&(L.background.set(V),E())},setView(V,ce){X=V,W=ce,E()},projectBottom(){return y?(U.updateWorldMatrix(!0,!1),[[0,-d,0],[p,-d,0],[p,-d,-v],[0,-d,-v]].map(V=>{const ce=new N(...V).applyMatrix4(U.matrixWorld).project(R);return[(ce.x+1)/2*l.clientWidth,(1-ce.y)/2*l.clientHeight]})):[]},destroy(){T=!0,ee(),ne.disconnect(),Q.disconnect(),Ne.forEach(V=>V.dispose()),Pe.forEach(V=>V.dispose()),M?.dispose(),n.innerHTML=""}};return i.viewer=re,re}const s0=[{id:"single-pink",group:"single",label:"하츄핑",dimensions:[120,140,40],stock:"#efa0c3",shape:"single",heights:{tuck:15.163727959697733,dustTop:27.858942065491185,bottom:33.14861460957179,dustBottom:22.216624685138537,glue:15.163727959697733},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-01.png",textures:{front:new URL(""+new URL("front-e5GXidIH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DMiR0G3S.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BRXMtE7b.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-CMX7rSdK.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGNCAYAAACIb4iHAAADWUlEQVR4nO3YTW6rQBAA4bblKyB5wf1PxgLJhyAbY2GCMWBqfqSqVV6yeJ86zTjDZRiGKK2+aRe/f0vsWOwTLiKGiIj7o4u+afNgV3AREcP90S3+IAn2KG4ehl0D3h/doQflNOxZ01vrMPYL7vD01tqFJX61e1rF5sbNe8Pm+NXu6Vba9NZ6m+zziS0KOO0WJx0rKbrmBuxJLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSiyVWCqxVGKpxFKJpRJLJZZKLJVYKrFUYqnEUomlEksllkoslVgqsVRiqcRSiaUSSyWWSixVddhLbsTWqptsNV0jIvqmze3Y1DjZKva2vjWopWqxxe9tXZO9P7rchs29JlvDWTtfg6L3tq6dzQ3Y0zUiYnzInntb7CrUN9laemFnq1BknyZb5N7WuQYR5a9CvZOd1jdtcXv7D1vyX2Gra1Da7i5iS53utwfsUtJ0P2JLnO7qZJ/gYqa79ZwtAvwVO1mH7Ofurk+w3B8Um7DThy0nePNkF8DJ0bvWYOE4Swo+/FfX5HRIBt6Nna3D+GUS8KHJ5gIfXoMc4J9uCqnBP19rUoJPuYOlAp92YZyDifdmp95u5x8aE/Ap6NOv4vdHh60F9t6AWAv0JcfKWhzqMgzDj6RtzW8a90e36z/umzbd66OFKe++KiV91zV/+GLn3S7ZGiw1gQ4R69f/vmnzYqeQeIIjltFJd3at8f3E+O/JUfdWEdiI1z6/HWtzcBFrsFTftP9gxWKfDdPpFrMGH7pMH7bSJzs2RJQ/2bFLRMQfLcG714zJpU8AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-BCx3X8mq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BNtBl9OP.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CYDHFBH2.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DIjeEmX6.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqsAvOWF.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-BpulUVxU.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DqrnRkT3.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-v27nUHFX.png",import.meta.url).href,import.meta.url).href}},{id:"single-lavender",group:"single",label:"다이아나핑",dimensions:[120,140,40],stock:"#b6a1ca",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-02.png",textures:{front:new URL(""+new URL("front-Bk8Csp7z.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DdBvJthX.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BR6quRuh.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DYNtUgPc.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAET0lEQVR4nO3dzW7TQBiF4TMhoiwQu0gVigR3wf3fSxeRegUptMOChgbjOHbqY88rnXcLi0eTL/6ZxGmptaqVDrv9xX97/vFV2wUtvQ0B7x8f6un/1O12eewVnCRdfKnt2CGc9LZ6Y5odOwInDazeULNg3/PSTukm7AicNBPwvFFY50s7uk93/dgmcJ3K8fiGXeulndL2EnKN1Ruq1rOZbWX1htpKqmfQZitF2qyNmFKwroJ1VAXCFoGwQh26KgmrYH0F6ypYV8G6CtYVBltJ1wa5YXQWrCsMFnU0kIL1FayrYF0F6ypYV8G6CtZVsK6CdRWsq2BdYbDZN3AWrKtgXQXrKlhXwboK1lWwrjhY1MU36iN81MoqWF8YbL2742DL8cjBSqAxkIL1FayrYF0F6ypYV8E6yqc1zoJ1FayrYF0F64qDRZ1uUfuzImFRY6BgfQVrKYcuVzl0GcNgUT8nJAXrK1hXwboK1lWwroJ1FayrYF1xsLWCsKWAsMoYmMoYGAvWVbCugnUVrKtgLeVCxhgHSxoD1oNAT08crESaWQXrK1hLpONsTrfOOFjUzIq0sgrWFwib46wvEJZ0nCVdG6D+ugoKi3rgsr6Q3mA5KRgL1lWwroL1hDopoFY2ZzBfwboK1lWwroK1lJ1vY8G6CtZVsK6CdRWsI9RPBhSBsFKwvoJ1FayrYF1xsKTvG7A+UyB9hC8Fa4r1BiOtbHYRjWGwLx9BTy1tnvLni3xxsKTvIkokbK66jAXrKlhXwboK1hUHuyHd3bKeUyCNgUhY1Mxmk8NUIY0B6nmwzKwzDhY1syJhSYcu1lUX6tOaHGeNcbCoowHqpJA3mCnUtzylYH1hsKgfENl8AJ0Uyga0sqgxkEBY1CYHC/tMwpJuGFEXMqjHVVArK5GwpEOXRMLm2sBYsK6CdYQ63aIOXazPbl9AK1tJW56sN5iC9RWsKwwW9SBQyYNAplAnhWxyOAvWEeoNJgXri4PN97qMBesqWFcb/TmTIcKtLCYkFjG3yJVFhMF2726bn1vMykqv2MNuv7ZjVJiV7bu7bXpuMSsr0bD3jw+S/nmTNTsKrJVdGzCljST1jEJzDW0mNzm3vDGQGKPAXNnzXle3rbntfnHyNAqtdnEMWpzd/7Atr+7gG+yw2zc1t73YVlf36qGrpdW9iO2sbhPgwZXtnNVWB48+g7UAvoo9H4e1waNWtufoULQCevKFTOfMtih4NLZnHE4tBp60smuDJ4/BmuCbLr7XAt98p7AGeLbbmiXA78LePz4susKzrOxS4NnG4Ap4FvSst+IDYGkG8Oz7Bl3wnGNh2eRwvfGsOzIDq3wT2L591L28PENPAi/2FH53LKTbLuQX3Zjrm+Wxd8+r/cxFD7qM2a5adcuze7vfc6j7WxO/HNFZ5SJd3hRcHXvqDF10YZWbwZ4aWuVSa12BNK5XaJWkn9+/tI09ddjt669vnxnY1+pvSwkiXPbOs+0AAAAASUVORK5CYII=",import.meta.url).href,lid:new URL(""+new URL("lid-Dutmkx9N.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-CKc2vOVf.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-D0z99_53.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DZhGv1a9.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CsI1X4sH.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CrG4jeDt.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ogJ-mMfB.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-CUupCh0Q.png",import.meta.url).href,import.meta.url).href}},{id:"single-purple",group:"single",label:"이클립스핑",dimensions:[120,140,40],stock:"#755695",shape:"single",heights:{tuck:15.202020202020202,dustTop:27.92929292929293,bottom:33.23232323232323,dustBottom:22.272727272727273,glue:15.202020202020202},bottomMain:[[0,0],[100,0],[78.46607669616519,77.6595744680851],[65.78171091445427,59.57446808510638],[49.557522123893804,59.57446808510638],[49.557522123893804,72.3404255319149],[40.117994100294986,72.3404255319149],[32.743362831858406,100],[3.8348082595870205,100]],bottomTab:[[100,0],[96.16519174041298,12.76595744680851],[98.82005899705014,36.17021276595745],[97.05014749262537,100],[78.46607669616519,77.6595744680851]],diagonal:[.2153392330383481,.776595744680851],source:"싱글팩-03.png",textures:{front:new URL(""+new URL("front-BebZoQRK.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BJJUt85G.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-DNKqWfXl.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DOd5pDR6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGMCAYAAABDM1siAAAEaUlEQVR4nO2du27bQBBFL2klSJqkMuAARv7/w1wIcBekyUubxkpkmqQoiZe7B7intWEcjIa7M7NLuSulqBX294+TP/v29Yt2G7qMMif48PxUjr9zuNttL3tGTpImP2q77Jyc9D96S1hddoGcNBO9OVaRveWjvYSrZBfISSsJnrJI1vnRXsKobCtyQ/7J1vpoF9NLuynJWtGb5HAS2Said4adpHIi2i691Nd2uITIusDIdgLJFoFku44kS1q6yh+QrBRZHxhZ1tIlkGwi6wQjWw4g2XQKTjCyqNUAtc5KIFlUp5Di20lkXUTWRWRdRNZFZF1E1kIhySqyPiLrAiOLasUz5HDBiixqPqvI+sDIolYD5QEzElkXkXURWRccWdLRkkSSRW23qPsGiawLVGQVWQ+stkYk2YzpjUTWBUcWVc9mNTCCkUVtt6wzBYFkUZGVQLKFtM6yLvuSIitF1kdkLWQiYySyLiLrIrIuIusisi4i6yKyLjCyhdSKp1NwElkXkXURWReRdYA6rZEi6wMjm0M7FzlacpETRicY2aSBC1RkJZAsqkRMbeAksi4wsqhNQYqsB9R2m5x1gpFF5WzeYXQSWQeoTgH1IlCWLhf56mwnkXURWReRdRFZBz1pu9UdSVYkWVIhc0jDaCSyLiLrIrIuIusisi4i6yKyLiLrIrIO8s8fnETWRWRdcGRRx6EiyZJOxSWSbHLWSGQtoFaDPGBGImsB9YApsj4wsh3qvoFAsqz3FFCyAsmiHrBMEZ1E1kVkXWBkUess6g0QVCGTHcxJZF1E1gVHlrQpSCRZ0g7WkV6qyAuXTjCyPSln80azi34HkkV9zQWrByPJoqou1GoggWRRVReqns1ExklkHaCGyRJIlrUakGoDKbI+IusAdQ7WvwPJ7t6DZDvS3ABVGxx+RdbDgdSK//kJkk3VZeNQQLIiRVaR9RFZF5G10HcgWZEiK5Asq7sl9WCH3yBZ1nGoIusjsi4i6yKyLiLrIrIuIusishZQxTepYWRFVpH1gZFFnd2yrkoJKNvVllgKLrIYkLKIvOVEFlV1CSzbdt6iLkccTxj394+1VRbBiazeyrabt+nBXHRS//D8JOnVQ9ZsKnAiK6LsSCo0yVRkm8xbThqc1gaEVOBEVhOyL9FtKm+LBve6jqnQKpNp0GLuvpFtObqzD9j+/rGpvB2VbTW6Z5eulqI7KTuIbhPCs5Ed7GrVhRfvYC0In5U9TYfawosiO7I6dKogfXEhM9jZthO+ZIo4kg4nf2YDLp0b1BS+6v5sTeGriu8awjddUK8hvFpbs4XwTbIPz0+bRniVyG4ivOZpzRnhm6VXP8KfEZZWEF59bjAUXistbDc5HA+e/SbHTJSvEraPj4bl5Yn0xcKbzLqGaSFdV8hvOpgby+VLuucqU8QR6W7JuKrqyHPY7o8sda+oPp8dRLmTpoeC1WWPnEh3mohyM7JH5qLclVIqKC3jRbRI0vdPn9uWPbK/fyw/PnxkyL5Q/gKnQS31mWptmAAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid--WvKRmvn.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-Bf_4jwr7.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BVLFq6Tn.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-j0Gldl1h.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BDvY_-gu.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-h6fJxT8y.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-BIObAEvy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-B5VtVAMG.png",import.meta.url).href,import.meta.url).href}},{id:"full-box",group:"full",label:"풀박스",dimensions:[127,146,125],stock:"#c9b9d8",shape:"full",heights:{tuck:18.33816425120773,dustTop:59.951690821256044,bottom:80.05314009661836,dustBottom:63.1256038647343,glue:17.280193236714975},bottomMain:[[0,0],[100,0],[50,78.4],[50,83.3],[36.1,100],[12.2,100],[7.8,95.2]],bottomTab:[[100,0],[96.1,15],[97.2,91.2],[93.6,100],[64.2,100],[50,78.4]],diagonal:[.5,.784],source:"풀박스.png",textures:{front:new URL(""+new URL("front-DxgCBSra.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-B66TpQTD.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CZM9lG24.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DlVhPi0m.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CQnXX3_1.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CO3tq9Ga.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BYEAbdVL.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-KkK1Ws7B.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-D50KtCWr.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CB884Hev.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-VKOVXq2_.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DWjBssOd.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-ByTnCZtZ.png",import.meta.url).href,import.meta.url).href}},{id:"limited-blue",group:"limited",label:"다이아나핑",dimensions:[209,146,125],stock:"#9fcde1",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-01.png",textures:{front:new URL(""+new URL("front-2otkuX8h.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-CMJ_d1NQ.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-wqLkAjir.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DXKBYbHJ.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CJCr71zt.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-CzDDMAwJ.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DUmjOo3O.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-Bj0Dh9Oc.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-Q3POZwDJ.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DxCSGxKt.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CWdBHUTi.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-Bb1hcE2j.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BYQrNlEn.png",import.meta.url).href,import.meta.url).href}},{id:"limited-purple",group:"limited",label:"이클립스핑",dimensions:[209,146,125],stock:"#aa9ccf",shape:"limited",heights:{tuck:18.38256658595642,dustTop:71.76271186440678,bottom:80.24697336561744,dustBottom:62.924939467312356,glue:17.322033898305087},bottomMain:[[0,0],[100,0],[69.93,78.41],[49.83,78.41],[49.83,83.26],[41.72,100],[4.73,100],[2.2,95.2]],bottomTab:[[100,0],[98.14,7.5],[99.49,15.86],[98.31,93.83],[96.79,100],[78.38,100],[69.93,78.41]],diagonal:[.3007,.7841],source:"리미티드에디션-02.png",textures:{front:new URL(""+new URL("front-CyY7EI6N.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-DCRdAkby.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-0rCWM6j1.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DQF4vOVd.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-B7axEelj.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-D8iIkkkk.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DjM59GgK.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-4uccvSD8.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-B8s4zKWp.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-DbEP0n3K.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CwaMzh0v.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-DUqWrnmA.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-DZShgkQG.png",import.meta.url).href,import.meta.url).href}}],o0=[{id:"daiso-1",group:"daiso",label:"골드",stock:"#efa0c3",shape:"retail-card",dimensions:[200,244.7863247863248,4],dimensionNote:"추정 약 200 × 245 × 4 mm · 배지 지름과 원본 비율 기준 · 후면 무지",title:"다이소 딱지",hole:[.49914529914529915,.040502793296089384,.02564102564102564],sealLines:[.1829608938547486],source:"다이소딱지-01.png",textures:{front:new URL(""+new URL("front-BdzM2YL7.png",import.meta.url).href,import.meta.url).href}},{id:"display-1",group:"display",label:"하츄핑",stock:"#efa0c3",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-01.png",textures:{front:new URL(""+new URL("front-BIsDPo87.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-sAgV_f8P.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-5gk4WA1-.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-DHm7xnd6.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAALIklEQVR4nO2dy44dRxnHf3V8bMdOHCeWhsTBwvbE4/gix5YnCCJE2LDgKXgCtjwFCzZ5DiTegD0IdrBBCAkhj0ABgRUsOdP9sejTPX3O9KWuXZfjv+SJ4+mu+vevv657VysRIUWdHNxq/vL0W8if/wXrC6hUzHbmHrwP/3yFvK5R33+I+vhTUYefIX/8DevoBo+/DS+/bv7h+CPUk++JunsMd4+3D17a7MnBLXh0A65egd/9He6/h7r3CHX4XLj7Gbz1zuT5Qc2e3dob8NUr5PolVkcP4PAZ6qfHwnsfzaahgDZQvZptzcn99+F/36AAfvwUdfQUdfdY+PC+U/rOZk8ObiGH14ENhWc34d5j+OSHyO3nohSs3rqI7YMs3Q8LsycHt5APr8K7l+FvL+HOdXj0CPXgB8jt53D52nlXnkqcWbPdrX1wA/XVK+TaJXh8BA8/hzvP4fpNkHE7IkAtsFJhzJ4c3NqKO/n8Y9S9J8gnX8AHR3AW81qqa0H5Mtvd2qsXUX/5Dzz9AHX/U7j7DDn6go27YYMatqWqWV28ACJmV7lr9sXhIdx5F548hjvPkAc/gstdeTdxg/UlAiKCUsopftfq5Wvkl786M9eT2v2HHc39vpMIclqjLl6wMtlqtcmv/RNMUtXOaawmM5i5ZVp3dHOQiDSlgqFU92PGrF8pqtPKKYXlzIoglbCC5kHTPa339+XMbkqCqrIvYMbN+m6Ut7F7WllXZgvGbCORpkazUXizA/FpW4wtThag9mnWvckxoba8rUWrVFCclR5RyALUp5p0lULqGpGRJqJu+Lu0S6SWnZNVl2ZLv6pqpGpaAqqSuF3xuhLUhU0oiCBVTV3VTdUsnMXjbLdGA5trSSynFVI1+TSkpzNwJ6vTThy6cGlrMv1LjvaA2WjSrEmDw4tmsiuHrEkR5uegaZVDFtAi4rUxOZFdYWR1tUDc7ilZnxq5AWmaHZGe2aVrshEVSBb06AYuEQolqytfdAcO2XOyPrVDN22zOzIzG7m8LZispkL1HMzNRmyM5xsGXh+fAKGQL1n9rnecwY98yerK6+CHgfIla0TCFzaDdPIl631SUfdATbr5kg0ijyXC/pBduibbH7I6T7s2e427tD9kgVkiPovuPSOrI93AnblLb8iGkh+zC1UOe0hWQ9rwJw7cU7ILVA57SlZHjnH7hmwo7bHZwDXZHpPVkEtNtudkA9ZkGZJNbM3h2XHbB2ZINhPlZ1Yp/MZtoGcgP7IxXsS3gR+ObIDZnGhhYHMzt82mWjlslN8Dlrxiv7Vko6Bmfc/m5EvWd7Xru67Jl2yQanfmTul3IHMm22nBmszkZhZAVlPe+GsmtD9kl26z50/WewfSk/Inm2oHMn+y3uVpnXhBZBPr7eZHNsEidVALrjfY13fFhy7cZ7X7Zr1BX7rVro/1LzqHlEO209ysoceGz1RSBZLVVOgOZL5kXYvU0G32fMmOPdU+azKXNkK+ZJUaBrhUOTqn/Mj6mqgI3UbIj6z2ttaR2wj5kU1Wxe0ckWrXPH+ySwx52pTt+ZMdayN0v/Qg5zUyi+9boKG+pXzDYPHPwhiOiOdLVluRYrscsskUDsXtdpJatVsO2bFqN9bwfYZkldr6CM5cHMX6/pnXcYPQWgNcOnin2cG8qpHNfvBS1UhdQyXNxxo2m9kHkeYm92sAdeki1DVUzR9V1UilqE8Vojb/z6r5fUStAV7/47/N54VEqNtN7HvGRi/a8XNEpmmtAeSb08YUva66Uss3GWfUmJ35gIhPgC4ZZVjO7mi3KJuk6rvYK3rLgPbBaglPds3bA3yq+BfbjYquEHRdXrhcPBzYftjLCYMxLTEW1kp6aZZPdlYh2sd5vlRhSWLJ2IUsyUKHyWdLUK3mCmYzZUp2I5ue7hLrFCB3ssCiDWoTFUAWrGiELncLIQvJxW5BZMGIhlYHcy9XzI1Kk8ZuB3OU8GxnblgFkgXvJYPNJEqGZHWv0KFHsasuvMuftAtM10eadvvI+G7k6KT56uuMwuDK2wNmTeh67mDO5Z0PWTx0a3Q7mD5G0QsgC2ZPvM76LA+j6IWQBe90m8MMYtdlTiG2vHZrbGLXhHBhZMGsGxJsCYsqkaypQrTKyDJmTV6Nihi7GZIFfboQrUeRKVlIhm572u6pGZOF6HR3ex59wpmThah0p3oUBZCF6LE7pJlujUFKCxguJAxaJUS3MLKQDN0CyYI5XR1yb2ZrWpmGmS5dqzmFxGUxW0O00iFTsmA4COfZiUb+GZOFMHRNh03LHaaPTbc9vsxh+hTotueUN0yfCt1N+tmQVXifWtI9zpyukBFZ0DSrjIbnNXO2WDVXHlnjpSUh2ru0L7abJByikV50t8Yo1EMtRMul8a1z+du7Shml7rco6x7iYhvfMenOpZ0sWQV6PYUU6G7F8EbJkm3VJzxqNgW6kOlOaLONb6OKKmTJQHGNb0kndqEoshulErvlkQ0auwYJRyeruh/zMt5AxPfBWe4xp3NtZ5N2OkeLYZgZ9IabjUKmj0mGbKupa7OeWgoxswQ9wgMZJEd2Sk5TS0axa6OdkHd/EUj7QDvD/Qcv8zBolRDdNpNCyEJydAsiC2Z0A84nQESyQ8NDc/K6v4FJI9151//UFWR/g1DNyELJgvEDYdzJzGUCREdmr1hBWLpt+mVNgJjSDfZi5XgemZIF4+EcXbou96C/1iFjsjbSpeswPN+qALIhYtd02HRABZBtFahksCVcEFkIVrPZEPb/IhAEa6jHDwPjdV1ar5UEMtHtgz9/6ApgtY4PGOYNN2RX29+tGU/Nc+59CbMVRzcBksy3a9S44c39F9Ahu0nMLHO7xTFDZ6URrEMaIGz28lovoWDTNa0GCHdk5z4Hk4Ias0JT3pl2BE2GOB3Unr0CqE/jfkNJV43ZavsLVUbFWOAB5P756ZYGAxo02/+UhZYWGiDJn2ynkC9g5jQBYiP/LwIFHD6NT9b7nEKoms0wj/hkDRTOrG1l5WuYPnZvwsisVc3mkfC6S7Rzo5kQ6H8+RRmkPZYXGT1gCpdt28CsSHPsCjkvULfK28H08LZt+ssLNudY5G5xir+YXcDw9OZiSxSrBvl4LQ1CVxpeR76NK43dfHRGEX0rFOG1Xu6b/2rWQluETT8S1r/OnVPD12COiyX7Mlwj45yfk/TCIKZ6V7s69y86J9uUEK4Pnepma1oX2ufZ97MctIL+A6uXmOHh24o1fGRD2IXtgFn9oLQhrPMC+5i8lLPWMWyoCbP6uS8Vw35bXd0Pi3M1DM+YNStUXQjrlMdhWl3dD9sEnEZkzHJ2iuHu3POUDd67XXboaHDuVt5ewx9+PXmiaQ03m6uGhsrjFQdXkF98OWu4Pc+qJ+nppqxu/vZPyJ1rWoZbwlZh4aG3vAIwMQy7YbGc6e4BMzUcQyt612lveBnCLVkPhu1k4rlfzkYhLKr5o3PabqUQlbDNiEwcwudyP6+x6jZJwlNtgw7PkoaninCdhoyDYfdqq5+CbnvWkbC94a60wKzxvXhI7OZu2lOIGhI23ZpohG37YB4Im1N26TA6EbZpE7v2bq0Nm47eg5+uuIdibdkRGQ8P3bxpn4McwUsJ3yMyQQmHGD5SgHInfN50yHkwD4a3FXrSzivhJdbIeCO81IIeL4aXXH3kbHjppVJOhmOs67I2HGsRmpXhmCvmzhu2GORYUtuGfz9tOLZZMDCcglkYM2wxyLGUzhveUUpmoTGsxginZhaAc4YBlEJNfbI1tl5896Gov75E/fxnyL9fpG0Wzgzzk2fpm4Ue4RzMApx857b8H5eAF6E0cD4wAAAAAElFTkSuQmCC",import.meta.url).href,lid:new URL(""+new URL("lid-TYOhicBo.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BMv_rRHh.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-BkN7rhR-.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-9lcNBxub.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-B8P4Zo5d.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-vlKUikdG.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-C5SjvFfc.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BTaT2_6E.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-1",group:"pouch",label:"하츄핑",stock:"#efa0c3",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-01.png",textures:{front:new URL(""+new URL("front-Bj9gZaBp.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-Bfy1hUOt.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-2",group:"daiso",label:"샤이닝",stock:"#b6a1ca",shape:"retail-card",dimensions:[200,244.7863247863248,4],dimensionNote:"추정 약 200 × 245 × 4 mm · 배지 지름과 원본 비율 기준 · 후면 무지",title:"다이소 딱지",hole:[.49914529914529915,.040502793296089384,.02564102564102564],sealLines:[.1829608938547486],source:"다이소딱지-02.png",textures:{front:new URL(""+new URL("front-CiLv1Drm.png",import.meta.url).href,import.meta.url).href}},{id:"display-2",group:"display",label:"다이아나핑",stock:"#b6a1ca",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-02.png",textures:{front:new URL(""+new URL("front-BxlsOXbH.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BdpBmYzh.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-TPXL9KdZ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-BJrnwN5C.png",import.meta.url).href,import.meta.url).href,glue:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAGVCAYAAABn6ghxAAAMH0lEQVR4nO2dS48dRxXH/9Vzx4/xCwdNgmGSGFt+YcZOGIZEBAFZI+VTsGXLjhUfAfE5kPgALGHJBgRSVkgocSQERNbYk5nbdVj07b7V9/ajzqmq7qoa/ovEsruqzv31qVOnHt2tiAgx6sX+AQCgPHoTxaf/Bi7tQMVibG2cPrwN9cVrYKmx/Og7WD58j87vHePSX/+AxdwGlh8eQL08QQGg/OBbOD/6kJb3jnF697h17e5fJjb2xf4ByudfB/auYudP/4Q+vI3lk6dY3j+is7s/QHnlxmD5oMY2t/bZG1D/eg28cQn68WOcP/gezn7+AS1v3WHV59XYplM8vQ316hwFgLOfPYd+8j7O7h3T2VtP2gWY/cXZ2Bf7Bygf3QIA7ABYHt/B+eNDnD75MV6/c0RFUWD3yi7XLkOq+VFsY1/sH0C/vQe6eRnFP15CP7qJ5eFTnD79EU7fOUZ5+Tqpdf0g0lIrtzRqbHNrDyu/U1+7hOXhA3x1+BFO3/0+zm/eAYAWtxZFAnRJUIVqV2yNmprKO419sX/Q8rvzn9zH2aNn+OrxT3H65sMt44aloLXGTrFjX6RHi9o4/fYe6Noudv7+JZZH38D502c4+/b7OHn4cXWldPRQAJUaancBEHF+5apdw9jPH9yDfnATy+ffxdn99/Dqlx+jvHyj41KZ6t9IWkMVBTsCmFqo/57hi9/+ftg4ywbMjtUuTtClRlH7LcdgtbaqWP2R4IHikHSpVy3LVfgxZVxEGqQlPFTzEyczFqSgl6VTFV6NHXJFAkGXJZRC5dz2tTbeMx1ZVB2tXJLYc8eN9Zyc03Ip7meTkgUArQla1NFGjFVMBDauSCCQoKMpNQNZpRTKUpaJDWZdgpF8VOvhFyiK8ZFIGbdrcrK1dFlahzAiAmnyO63hBI6yLLFD6+YVCkCtK9AlQWsNKnWTW8w6Fdd6ndwQCHqpQVpX1Gu7DfrjxvalUo5SqIZfDQCaoPumP0bbQcja/D5C5YcKynqeNlsHk8jKWKXi+E1xWGEpK2O5gwOnPxLIOt7mRxYAM2EOo0zJCuT7ZuRLNmS8tak7X7L8eGvvtDbxNl+yAPgLFB6VOdkZlaCxAYd97ig2FG8TJMsVAxcn1gLDsTxFsiqg3wpibc+dK3xXGFIpukF4+bgRCZP1GMBd1VV3wmSZIYyTjPsYHFImGzLeutedMtm4lb6xIYd9l2Q8fbLsfsvCJb9t6ZMNmYxzj4eZy0o5kI1z5pAD2TiVj7FRjWTViYR+hRwcuMk4kJMbxLRSQ6CsyMY1OORENrw4N2J2YzmyPCMT2gw75Uc2lpEsP7KxjGTpkR2HFsdIlh5ZIOj2rZVsbkSaZK00M/6MyXLleSTLmey8I1nL2CB2eBwcmGTnfRfClrFzDw5DyrmDVZprDSxBskxUc3WzBMkC/L2sYLs5/RUnStaQd2ieDginTxYYoztPPMiD7NzqcvNoje1SO5/dOqWmMOi9jE7u43RdumS3T6n5e6+Ij0dd0iULIJocoeuOJk7WkPelUMcpRj5kgbhmu3mRtdJEs91uY2M6b2IoEzeIZHAwh91MyBqKZQKZH1kgjglknmRjUD7Gsid5QQe+kYOTsWnklGfAXi7IEfIhCyCeHAHZkTU0b46QM1lg3hwhb7JzKj9jY8kR8iMbMkfg3LX8yAIIliNw7prsJIekkAdl6gYb8jrsXuyXOEagfI3lDrv/f4mjrdj7r4xrL/ZLHAHMOuxmTtbQ1DlCUmQXALB3/crqowwaRACV5frDTpqqF4j3uJTxWZkOCXKEgTdLLADg6q296tXrunphff1/0oSyLEElNX+eUwsAePXlq4qqptXnAABQZTRRP1UbDZPvKtBPdwEApyengLGTRyDjowvs5oJpAdRbjm2DeG8lqX/YdhmCqr6TwBvOOukmFQ3kr8dsjWRD57+oKeLWRppk3TrQyInFVQvCJfwYvq4ikZuxHX7Vr9Xdc6DrlayNOzQXCupOxg16t5YUN85suIMVYQHdZMgCfa9tk34fMvAKefpk1xK8LDSg7+ZEVjgM899vZaWcyNaSDDlt37W6fuTCHMlO4bvjiU6OZGvJfdc6IxtoJmeyE8VdoJNuzmRryRc7ub5rXhs/WbX+Nuyi/gsArE++Sxo12+hfcNpsiRrC8ZOtNcuRVOFOXuJvnGQtWpjFBLPh+o+wjw4Jk12JS0o0GxbcRU8PAjWFBGXWJYdKF69PetYNxE2Gk756bcRn2XTDukP6HayliHw3M7LALL7bRThDskDYx1tbzWxkAFgTzpQsIE50OOr74GlayTdiNjaTvVumBL7LTtA72kqQ7AQhVLpdZSpBsoB8t5p/REPQUKVEyQLiH83r6XLfTZgsIKJLwCS+mzhZIFrfzYAsMKHv2mtkkUNYa6CVyEzcoBZre8Us538lMjOyLvI8wYyO7FBHYyxyYPYkPTqytboICx4EErXMLtJFOFqytUzCK2OZDik60CHcWaT12Znoya5V7916OmkxJPckJ8W9W9UkwuF992K9F7HyJxi/mkF4QrrpkV2LhKQkZS7iVHz9o5m+y17n8HXeIEL1nzcQz2y511/ELXyR79aXc5XSuoECRg0u6gu7LpvSd5vsRKlemy1fgWVaENYdqudMuwtG4wY2ahkbgzusy12kvVux77oo7b3bDY36bqBHqMaUPtlafYRFE0wPdBMkK/mmnWSC6Ug3QbLAIN1x32XIgW6iZIFpfVdAOGGygMh3p1ocSZwsVkvq4gVmQqiRLX2yY9FzkJv0jlgUi4as2nxgsUMjixwy35XMKJq39w1cHg3ZWkOEB41tfLeHbojZ8BDh6MjW6iJstyIDePBdnmrCynhJg5Wxbu4g2AFq1VG7RU5fV9mUzB2ESU6H8iUr9d3mH7lJzobyJduSJElvleETTo+s+AiA00DBV3pknZ4kYfrudpJj77uzkZUcnWpvgAj9SZKk09bINk54dp/lEG4ZK/Vdm5Gtv6w94dnJcjRykoOnoaxs1CO3LtgukT7ZUL5rpQHC6ZP1IqnvmhduKFqy8ql4gKxsjHDXYke0ZGuZhO3WDQJlZZUxloSRAFlTwsMRjDLSgh3iTcUF7mA7UNiEtPTcoDr4ZX+rQk4whwgXALCzKNx6/ESqyC52WLScQ5mQcAEARcFzAxe5tLKaihPUzjTGtqIDk3Dz1NJUZE0juFqHLpLN5QFZdJAk6o2xRJrfogdxRrjGWK1J/BiUS3TgEC4AoFyW8LbwH1AFAOilbj3gOKXvcipoQlcKGnioYlrfbTQQf9PLuvo0m+/WlaR85nsx9I8t32U4pNf+uv1EcwJi7YpPnOh0KR2yiPC9iEPKmGytmeiK9m7rHFQyaLh40mCc7ZNLGG3ercAP36uPRgIVLqYV0kFDcDmApDuY/PjKJJ0uYbIrKSnhwHS9kvW5cNwV4gaPUXPb9bLDWNdF2xEjiM/6JGxq/LDvREtDNgoaDXwTtjNWGB18E04qzrISGaVWtCSZjElXOKOcnKyLH4vOz7q4oIsfz3diDmAbLDLW6RUCZh0Aa+owezTgREXh98GMlmr5OrEU+r2IqvmPh7oGJqLbj7JKFpGb8uyinXU1c7uQS55eCXdUtTDrd12pbBF2rKwrHvc/Heogn4SbOhVQ0M0Frv/5d00jDRQHg0Ps/RCAgt66imu//k1jcEuOq4ZNcU+Ui2/+8W/QD270G+ygpmd7UgEAmwZvwfCxLuuBcNPBQhI25fK7Cxi/dwrC66C/WbmdsXVRABMSBt8rzDgbPeHNQWFywk3DFr+/awSblHAtG9J9icx8hNHvFUNZV1MuFsI2KWKnwVPJ5GCbz05OuJY5ZHOS73kJgz9TYBL2l8YQZNMae8KqmGHJs8MMwIJwc/X8S56T+7Dr7HaQcIu0h0jhYyrOI+xgtK91g0GDe/14ilXEHgX3Yd+riL0Gd/oxMPuSpwKg2IQtjA65Pjto8GBMnumUJ5/wgKZY+fZGeKpl+lHCYx1QknW5yNklpt4AsTa4i/QcuzViwnNtLQni8Lz7YGyD5960Yxk8t7EAw+AYjAUsDY7FWMDC4JiMBSqDVZ/BsRkLAOgzWMX8xNJnP3xCxacvcfKrX6D4z2dxGwusDT7/5Hn8xgJrg5MwFgA+v/su/Q9WZMQj4TblGgAAAABJRU5ErkJggg==",import.meta.url).href,lid:new URL(""+new URL("lid-COuQJ5cq.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-DPaUIvec.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-CoSWr-M4.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-DyMy9Evq.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-BusKU_Sv.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-z04hDaDz.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-_ytD71Kv.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BeN7Um8Y.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-2",group:"pouch",label:"다이아나핑",stock:"#b6a1ca",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-02.png",textures:{front:new URL(""+new URL("front-DBzll1nM.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-L1hydHCK.png",import.meta.url).href,import.meta.url).href}},{id:"daiso-3",group:"daiso",label:"스파클",stock:"#755695",shape:"retail-card",dimensions:[200,245.12820512820514,4],dimensionNote:"추정 약 200 × 245 × 4 mm · 배지 지름과 원본 비율 기준 · 후면 무지",title:"다이소 딱지",hole:[.49914529914529915,.040446304044630406,.02564102564102564],sealLines:[.18270571827057183],source:"다이소딱지-03.png",textures:{front:new URL(""+new URL("front-DvJc3sVP.png",import.meta.url).href,import.meta.url).href}},{id:"display-3",group:"display",label:"이클립스핑",stock:"#755695",shape:"display",dimensions:[250,146.3150289017341,127.16763005780348],dimensionNote:"추정 약 250 × 146 × 127 mm · 파우치 20개 수납과 전개도 비율 기준",title:"딱지 파우치 디스플레이 박스",heights:{tuck:25.65028901734104,dustTop:76.58959537572255,bottom:74.78323699421965,dustBottom:63.58381502890174,glue:15.534682080924856},bottomMain:[[0,0],[100,0],[74.56647398843931,85.02415458937197],[50,85.02415458937197],[50,89.3719806763285],[46.82080924855491,100],[5.202312138728324,100]],bottomTab:[[100,0],[98.121387283237,7.246376811594203],[98.121387283237,100],[78.90173410404624,100],[74.56647398843931,85.02415458937197]],diagonal:[.2543352601156069,.8502415458937198],tearHeight:.6345679012345679,source:"딱지파우치_디스플레이박스-03.png",textures:{front:new URL(""+new URL("front-BQkxmqo-.png",import.meta.url).href,import.meta.url).href,left:new URL(""+new URL("left-BMoc_exG.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-CSOjSXRJ.png",import.meta.url).href,import.meta.url).href,right:new URL(""+new URL("right-Cgrnh9CU.png",import.meta.url).href,import.meta.url).href,glue:new URL(""+new URL("glue-CkRK4kjm.png",import.meta.url).href,import.meta.url).href,lid:new URL(""+new URL("lid-DRDMzO9U.png",import.meta.url).href,import.meta.url).href,"lid-tuck":new URL(""+new URL("lid-tuck-BnocQkHz.png",import.meta.url).href,import.meta.url).href,"dust-left-top":new URL(""+new URL("dust-left-top-c5SOTFAq.png",import.meta.url).href,import.meta.url).href,"dust-right-top":new URL(""+new URL("dust-right-top-zNUH0wdE.png",import.meta.url).href,import.meta.url).href,"bottom-front":new URL(""+new URL("bottom-front-CqZTE5i4.png",import.meta.url).href,import.meta.url).href,"bottom-back":new URL(""+new URL("bottom-back-CN3Aps6S.png",import.meta.url).href,import.meta.url).href,"dust-left-bottom":new URL(""+new URL("dust-left-bottom-ZdskTHOy.png",import.meta.url).href,import.meta.url).href,"dust-right-bottom":new URL(""+new URL("dust-right-bottom-BX7ZqwhK.png",import.meta.url).href,import.meta.url).href}},{id:"pouch-3",group:"pouch",label:"이클립스핑",stock:"#755695",shape:"pouch",dimensions:[120,130,12],dimensionNote:"120 × 130 mm · 상하 실링 15 mm · 내용물 두께 약 12 mm 추정",title:"딱지 파우치",hole:[.5,.05675675675675676,.020527859237536656],sealLines:[.11621621621621622,.8810810810810811],source:"딱지파우치-03.png",textures:{front:new URL(""+new URL("front-wqKkdR0Z.png",import.meta.url).href,import.meta.url).href,back:new URL(""+new URL("back-BdUrXAp4.png",import.meta.url).href,import.meta.url).href}}],Gi=[{id:"A001",title:"카피라이트 가이드",group:"brand",source:"COPYRIGHT.ai",credit:"",kind:"document",src:new URL(""+new URL("A001-aoBPiBCZ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A002",title:"전체 제품 라인업",group:"product",source:"공통_썸네일.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A002-DpRrkLfO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A003",title:"프린세스 캐치! 티니핑 로고",group:"brand",source:"로고.png",credit:"",kind:"image",width:1300,height:1300,src:new URL(""+new URL("A003-BrwH5VOQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A004",title:"로고·카피라이트 가이드 6페이지",group:"brand",source:"로고_카피라이트_가이드라인.pdf",credit:"",kind:"document",src:new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("A004-CiS58igM.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-2-CHShFYa6.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-3-GMFbJFuS.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-4-CnCirEj-.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-5-BJauCt5m.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("guide-6-CirN_2mo.webp",import.meta.url).href,import.meta.url).href]},{id:"A005",title:"리미티드 2종 라인업",group:"product",source:"리미티드/PNG/깨끗한 화이트 배경.png",credit:"",kind:"image",width:906,height:467,src:new URL(""+new URL("A005-p7ySwXBq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A006",title:"이클립스핑 리미티드",group:"product",source:"리미티드/PNG/레이어 0.png",credit:"",kind:"image",width:820,height:673,src:new URL(""+new URL("A006-DYSxLsVP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A007",title:"다이아나핑 리미티드",group:"product",source:"리미티드/PNG/레이어 11.png",credit:"",kind:"image",width:819,height:675,src:new URL(""+new URL("A007-Bqti81fq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A008",title:"리미티드 구성",group:"product",source:"리미티드/그룹.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A008-8m0baskg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A009",title:"리미티드 대표 비주얼",group:"product",source:"리미티드/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A009-2Q3wIW0u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A010",title:"다이아나핑 싱글팩",group:"product",source:"싱글팩/PNG/다이아나핑.png",credit:"",kind:"image",width:629,height:815,src:new URL(""+new URL("A010-pRxLI05u.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A011",title:"이클립스핑 싱글팩",group:"product",source:"싱글팩/PNG/이클립스핑.png",credit:"",kind:"image",width:625,height:810,src:new URL(""+new URL("A011-kNaUbrmq.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A012",title:"다이아나핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_다이아나핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A012-MfjW-C-6.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A013",title:"이클립스핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_이클립스핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A013-pz2oFL1f.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A014",title:"하츄핑 패키지 다른 각도",group:"product",source:"싱글팩/PNG/일반_하츄핑 복사.png",credit:"",kind:"image",width:791,height:943,src:new URL(""+new URL("A014-J1z7cou1.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A015",title:"하츄핑 싱글팩",group:"product",source:"싱글팩/PNG/하츄핑.png",credit:"",kind:"image",width:625,height:809,src:new URL(""+new URL("A015-Gn2XwwUy.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A016",title:"싱글팩 3종 구성",group:"product",source:"싱글팩/그룹 (1).png",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A016-CKdJOEo_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A017",title:"싱글팩 3종 라인업",group:"product",source:"싱글팩/그룹 (2).png",credit:"",kind:"image",width:1300,height:740,src:new URL(""+new URL("A017-GovsCjJl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A018",title:"이클립스핑 제품 이미지",group:"product",source:"싱글팩/기본 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A018-C5PmGReN.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A019",title:"하츄핑 제품 이미지",group:"product",source:"싱글팩/기본 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A019-DftAen3R.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A020",title:"다이아나핑 제품 이미지",group:"product",source:"싱글팩/기본 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A020-BUZgAKUi.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A021",title:"싱글팩 대표 비주얼",group:"product",source:"싱글팩/대표이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A021-BPPnOR_h.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A022",title:"다이아나핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (1).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A022--bcudOUP.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A023",title:"이클립스핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (2).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A023-Da5aWh2m.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A024",title:"하츄핑 팩·케이스·배지",group:"product",source:"싱글팩/케이스컷 (3).jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A024-Cpdu0FuV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A025",title:"후기 콘셉트 카드 01",group:"digital",source:"인스타/01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A025-D9KcDXUo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A026",title:"후기 콘셉트 카드 02",group:"digital",source:"인스타/02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A026-COucjxfY.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A027",title:"후기 콘셉트 카드 03",group:"digital",source:"인스타/03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A027-CAyx-NZv.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A028",title:"후기 콘셉트 카드 04",group:"digital",source:"인스타/04.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A028-C49qTXT0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A029",title:"상품 상세페이지 전체",group:"digital",source:"인스타/260609_티니핑상페_원본.png",credit:"",kind:"image",width:780,height:14964,src:new URL(""+new URL("A029-CqUbFD5y.webp",import.meta.url).href,import.meta.url).href,pages:[],preview:new URL(""+new URL("A029-preview-C9uso0yz.webp",import.meta.url).href,import.meta.url).href},{id:"A030",title:"AI 제품 연출 비주얼",group:"usage",source:"인스타/ChatGPT Image 2026년 7월 28일 오후 01_51_37 복사.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A030-sS0--Tka.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A031",title:"출시 이벤트 표지",group:"digital",source:"인스타/ㄹㄴㅇㄹ (2).jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A031-Ii4AWEDc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A032",title:"3가지 배지 타입 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (3).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A032-tl29_WZO.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A033",title:"3가지 케이스 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (4).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A033-RLNAntI0.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A034",title:"이벤트 참여 안내",group:"digital",source:"인스타/ㄹㄴㅇㄹ (5).jpg",credit:"",kind:"image",width:1040,height:1300,src:new URL(""+new URL("A034-9iwMtlKo.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A035",title:"제품 활용 소개 카드",group:"digital",source:"인스타/인스타_카드뉴스.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A035-uLSoj6af.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A036",title:"다이어리 꾸미기 카드",group:"digital",source:"인스타/카드뉴스_다이어리.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A036-D1HHS67_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A037",title:"싱글팩 소개 카드",group:"digital",source:"인스타/카드뉴스_싱글팩.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A037-tkA3JD3z.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A038",title:"제품 홍보 포스터",group:"promotion",source:"인스타/티니핑딱지_홍보포스터.jpg",credit:"",kind:"image",width:919,height:1300,src:new URL(""+new URL("A038-Ygs9Lv9F.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A039",title:"다이소 골드 타입",group:"packaging",source:"지기구조/다이소딱지-01.png",credit:"",kind:"image",width:585,height:716,src:new URL(""+new URL("A039-D4v7S040.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A040",title:"다이소 샤이닝 타입",group:"packaging",source:"지기구조/다이소딱지-02.png",credit:"",kind:"image",width:585,height:716,src:new URL(""+new URL("A040-S_wMPuVr.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A041",title:"다이소 스파클 타입",group:"packaging",source:"지기구조/다이소딱지-03.png",credit:"",kind:"image",width:585,height:717,src:new URL(""+new URL("A041-C4ElZ9li.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A042",title:"하츄핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-01.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A042-DjoWZh-A.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A043",title:"다이아나핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-02.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A043-BqMDjPUQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A044",title:"이클립스핑 파우치 앞뒤",group:"packaging",source:"지기구조/딱지파우치-03.png",credit:"",kind:"image",width:842,height:596,src:new URL(""+new URL("A044-Cdd4Gx2U.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A045",title:"하츄핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-01.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A045-DXgJci11.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A046",title:"다이아나핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-02.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A046-CKxmPAw8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A047",title:"이클립스핑 디스플레이 전개도",group:"packaging",source:"지기구조/딱지파우치_디스플레이박스-03.png",credit:"",kind:"image",width:1300,height:633,src:new URL(""+new URL("A047-BnUd3Gbp.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A048",title:"리미티드 1+1 이벤트",group:"promotion",source:"지기구조/리미티드_이벤트.jpg",credit:"",kind:"image",width:975,height:1300,src:new URL(""+new URL("A048-CuZ3BMFl.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A049",title:"다이아나핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-01.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A049-CXTcNlLg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A050",title:"이클립스핑 리미티드 전개도",group:"packaging",source:"지기구조/리미티드에디션-02.png",credit:"",kind:"image",width:1300,height:700,src:new URL(""+new URL("A050-CmGRRcly.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A051",title:"하츄핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-01.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A051-CTRc-5WU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A052",title:"다이아나핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-02.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A052-C2wYdsih.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A053",title:"이클립스핑 싱글팩 전개도",group:"packaging",source:"지기구조/싱글팩-03.png",credit:"",kind:"image",width:1300,height:919,src:new URL(""+new URL("A053-DXV-lyzb.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A054",title:"물류용 카톤박스 인쇄 그래픽",group:"production",source:"지기구조/카톤박스.png",credit:"",kind:"image",width:1300,height:321,src:new URL(""+new URL("A054-Dc4LGRjr.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A055",title:"크리스탈 케이스 보호 파우치",group:"production",source:"지기구조/케이스파우치.png",credit:"",kind:"image",width:1041,height:618,src:new URL(""+new URL("A055-BIEH9qdk.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A056",title:"풀박스 전개도",group:"packaging",source:"지기구조/풀박스.png",credit:"",kind:"image",width:1300,height:824,src:new URL(""+new URL("A056-E-Rtk_DU.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A057",title:"블루 케이스 · 보관 연출",group:"usage",source:"컨셉컷/34.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A057-DRiIUZpw.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A058",title:"다이아나핑 · 제품 구성 연출",group:"usage",source:"컨셉컷/36.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A058-BSPrGWIg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A059",title:"핑크 케이스 · 침실 연출",group:"usage",source:"컨셉컷/38.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A059-DThxwxuI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A060",title:"블루 케이스 · 생활 공간 연출",group:"usage",source:"컨셉컷/39.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A060-DlDeSZt9.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A061",title:"핑크 케이스 · 선반 전시",group:"usage",source:"컨셉컷/42.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A061-Kpg24czI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A062",title:"자석 배지 · 보드 활용",group:"usage",source:"컨셉컷/43.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A062-O9QQ2SKI.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A063",title:"핑크 케이스 · 전시 연출",group:"usage",source:"컨셉컷/44.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A063-DmpGhSYD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A064",title:"퍼플 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/47.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A064-B16JOuoc.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A065",title:"블루 케이스 · 배지 넣기",group:"usage",source:"컨셉컷/52.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A065-CUio22GL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A066",title:"다이아나핑 · 탁상 구성",group:"usage",source:"컨셉컷/53.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A066-v93I7zu8.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A067",title:"퍼플 케이스 · 사용 연출",group:"usage",source:"컨셉컷/55.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A067-vZkd6QHF.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A068",title:"핑크 케이스 · 탁상 구성",group:"usage",source:"컨셉컷/56.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A068-CobA29q_.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A069",title:"핑크 케이스 · 보관 연출 01",group:"usage",source:"컨셉컷/58.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A069-CoNlK4mD.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A070",title:"핑크 케이스 · 보관 연출 02",group:"usage",source:"컨셉컷/59.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A070-BxP_7Cp7.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A071",title:"아이 놀이 콘셉트 01",group:"usage",source:"컨셉컷/66.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A071-DvRC7Omg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A072",title:"아이 놀이 콘셉트 02",group:"usage",source:"컨셉컷/69.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A072-MOTBjPqQ.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A073",title:"아이 놀이 콘셉트 03",group:"usage",source:"컨셉컷/72.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A073-CpqFVpMW.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A074",title:"아이 놀이 콘셉트 04",group:"usage",source:"컨셉컷/73.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A074-DMI9jL2D.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A075",title:"아이 놀이 콘셉트 05",group:"usage",source:"컨셉컷/74.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1300,height:975,src:new URL(""+new URL("A075-DYrQqjtt.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A076",title:"이클립스핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/82.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A076-R1imCyhg.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A077",title:"다이아나핑 · 후기 콘셉트",group:"usage",source:"컨셉컷/83.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:975,height:1300,src:new URL(""+new URL("A077-Bbn168Ce.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A078",title:"블루 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_01.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A078-h4Am-4RB.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A079",title:"핑크 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_02.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A079-DwHfTixV.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A080",title:"퍼플 크리스탈 케이스",group:"usage",source:"컨셉컷/기본_03.jpg",credit:"ChatGPT 이미지 생성 · Adobe Photoshop 후보정",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A080-f2hsvjnf.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A081",title:"제공 제품 사양",group:"production",source:"티니핑미스터리뱃지_사양.txt",credit:"",kind:"text",text:`1. 딱지 스팩
재질: 종이&자석
규격: 원형 5.4 x 5.4
두깨: 2mm
중량: 하나당 중량 4g, 종이 420g, 자석: 20g
종류: 골드 스파클 샤이닝

딱지전면 인쇄 
1. 종이재질 : 아트지200g 
2. 인쇄도수 : 4도
3. 인쇄 코팅방식 : 유광코팅 
4. 홀로그램 : 박2도 

딱지후면 인쇄 
1. 종이재질 : 아트지150g 
2. 인쇄도수 : 4도인쇄 
3. 코팅방식 : 유광코팅
 
2. 인박스 패키지
ㄴ 딱지가 3개 포함되는 포장 파우치
ㄴ 크리스탈 케이스 한개가 포함되는 포장 파우치
가로: 120mm
세로: 140mm
폭: 40mm

3. 딱지 파우치
 가로: 120mm
 세로: 130mm
 실링: 상하단 15mm
 
4. 크리스탈 케이스
양쪽:100mm

1파레트 2400개 적재



1단(바닥) 적재 수량: 10상자 (가로 2줄, 세로 5줄 배치)

안전 권장 적재 (약 1.5m 높이): 9단 적재 ➔ 총 90상자

최대 적재 (약 1.95m 높이): 12단 적재 ➔ 총 120상자

2400개 1파레트`,src:null,pages:[]},{id:"A082",title:"풀박스 제품 이미지",group:"product",source:"풀박스/레이어 1.png",credit:"",kind:"image",width:610,height:670,src:new URL(""+new URL("A082-Cl9oaX5r.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A083",title:"풀박스 구성",group:"product",source:"풀박스/풀박스_단색배경.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A083-BhJsK5aL.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"A084",title:"풀박스 대표 비주얼",group:"product",source:"풀박스/풀박스_이미지.jpg",credit:"",kind:"image",width:1e3,height:1e3,src:new URL(""+new URL("A084-vhist52g.webp",import.meta.url).href,import.meta.url).href,pages:[]},{id:"B001",title:"배지 제작 시트 · 앞면과 공통 뒷면",group:"badge",source:"260417_티니핑3종딱지(최종칼선).pdf",credit:"",kind:"document",src:new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,pages:[new URL(""+new URL("badge-front-BeRoCcsF.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-back-BOkZlx0J.webp",import.meta.url).href,import.meta.url).href]}];new URL("data:image/webp;base64,UklGRtgPAABXRUJQVlA4IMwPAACwOQCdASpuAG4APjESiEKiISEXKu9kIAMEtABkC9Mm++b80Wv/2r8EflT8VfBHpfy5ec/+n9zvah/QfsB/rp0pfMJ+2/7Se8P/svUV/WvUG/qn+16yT0D/3Q9OD91vhA/tP/T9LbBSd+v6jwj8eHtz25/tPtxY+7Rf5T92v2fmr35/E/UI9gf7fxJduFZf0BfbP7B/0/Df1dPDvsAfq//v/XrvtfRvYC/P/qzf2//x8xP6H/ov2p+Av+e/3DrTejh+6DwOfbs7Oe/fBGCVP8fC7piJDMsQfRaK38Bm/iq4NmPjc71kUB+yA+u8f28Ay9cNTbH3VxNfKMB/URq4m6VeVZRgPOTiHe7SjhPHrGuvF7ESBKdis8bFWz41sEf1JVWoGq+YnuTI3uHl3c5hGOBgT+7/7igbZII8Qb/ZYX6X60z+AzVR14u6pW6byZSPfY5a85Klw9jLaJi29n9djD2hoMetVoyhIP6Eo9AhhQW7oZMa3W9h8fVEBXP+EsATQ+ZlD0mGpimf1Ogq2g+VBJl97W5xa5hhizn/OCunzySibq3RiUSx3oLyAJZXcnTI7+rhYFmPLtrH2H1G2C+5zstioE2UumJaQGr/PXdqSVOBG4Pa7mdFQAD+/3yAJ7YletVx1r23McXhuCK7eJj9sUKjPpeLXM7D//4lb5X8+cxJOi9OG2iV8kx4eCFI0z7VYAw6kLmSlkZGz7cKr/jl8vnJcohPBDnrgKDEcpIdhUdiobh0vWEX2gBMw/fbd6ctFswJLy8DJsw7cwrXiaUC2pmXlZpR+nR55aguGfWX+nmY0k2Ei7hYZMZbbB8tbFCxuog0hNMZAQr0RwCKU07sjZ0uI9b9lzc6jWsmzx8LEqV2fBfD1oTA9LrjGQAFNjvmzbYXpqlGLsNvQ9ax8kZCPWjGrjLMPOF8GHLXuPmQILo1tKKzMo2gMTdDc8CTR6cWXKyuktkWbsBOXWc8S0VdDoYhb1EqZdnrRgEk9iwVriH28BNdkBcVNul32+R95mbEu1t3gyM7XPo7SGH803il7McyPuMO++ZwRRxrJL0xZAY6w1Zm38Bb6boeK+x1PSlTWwGcTE9EdPNqCsLA8kf+du0DPlhhRd9mp5aXbj98r8fY+bHR3JC1wSja4OiemurefQ7c5FblA4e0B6VXFURBa30ng/76ji+YP00gvstdcRH93IaMIFliObUdeyORufK2hFOS9wAm+lf8iv8N59ECWWcJsRIC58yB3/2gjvjG8R7XXI12gMxvti7zeQpJobm60Rl7rW5Bx/HIUnKFgpux73/16X0ZgEKb4NLt7X5xcN/OLI7zHV/NY+rFdsP2A+9m7zpgbix/zlTFNs77xjvVEF13DelGI23OG1J1P+mE9KBaLsAdIRDtzMJNPCK/92xGmTW1llkpvTJcbA3ZhrNJSB3sGpFxGMpQ+TU7t6neWEelZFYo7XhcHsHSZmMkSrp4H2T8QJtqIwNGeIz5GEz6eoL7Es5n2XGferhHMb3fOpe5Ko6luM9yyb4tZhyCjnqlB+bI+hpVEtOA7khMQYndflMXnvbeG2EaiTMzfJg113iYwcxKaIZIOl5ChTgEvIc2ORYQjz7S9qQce8ko7hKMkSw3WHjOp66ilvcdvkeAKR83eUeMfPVPGGJaONDuZPu8MVibIOYZSsr/d+En28N1BdvybTF+Ea/kGi8P/j/vugVicSRPWUvlTzI/HQnCnb2W3VuXJZjwmcwzxKPMjgIUocXl/w+WvT1UnrgHtaIJr7fk1unG6SPnbhmZJ232eiWKJSa8Si2RsgRS39174OR2b62GXBw74H4T48bL5XKhK+x98QyagZSgDbdetOMYuq5XErq77s9jvCP3R9bqwojA3Uvs0JPEgrPIDQ/lJ/e3sb7ZBJf7X5LJKoINQIYxYoSW2rtIM1YIzIu13WxLMRFQedNe3pDXp9pV/6MSX594MH/ij38i+5w4dYpU30bTWekNcKNa60dWTHt0aym6E0SjekUkElAjX5q/fqkwQsvenbTT57ZuKoNmEcSHi/zuI0qSzIIkR31CCHktXukshfve0XxEexUUnM2N5Dh1clfJtjW25dCXQKSVmQXa7z8z2EHIgw2PVS33BEMP/du8P1rxFhVyrt2bhplbXeRGgFQU9LaOs5xN/aWKciHg9ivjMb8/LaHA/5EERrwms9POiz0MUfmcFMsFEo/BbU8h2px84n6lZfZJ0wf1CsGZ+UuF3mMOQg0wqXyVHQxsKQez6GbP1L+StbKjxT+/IpczRhdWdyZfn6R4p9em8CIxT5xFFY6LoX5/1QaksscW9yunlLGjZ/f/a7Jm4rBzeSI4f4fZdfxIVDJepL4rukFlRTN7bL7hjSn6e9z2Zd5ecDSvBArl/MK+6uvOldujNv7ZCqnHKHA8MwKBNzzjvwvbm16/dFKmtFUiX50wvdUkVv2MsuvPodP3Y6QQ2kENwMF4a3GhpMnU4K9dQo7lrnpp6+NWyoN5JT5c3+Rj079bwqYkXbM3iDg9lvPtCoz7stuDjj/tO/Qd1swEmLcDv3rPlheAXYEVQWI7bz9fnypPYN+3EYhZ0hjfRJMitcqL16sORGxihvSBlezl1TmFkBpGVCsrqXDHA09Da0bqp0aMLREibC9UO5lBO/wMpeh0OmpEtpmvNX8gOTV+HoklRT5otbx88W6YKSe6kXYiK/09uZc+sFNbWOz+rhVDuhmVRgwHmD53ue9KBD6qTmMdEmX6fBasoYkKXUzUs+FAd5iFtsj6zx2D1oaUq3JMHV9AQYIfEFlRWVq+CJtZxnVC2kp/9tL6xNOacLVuPOQBdOMU+TpZEXUMKUmf09YAwrtkAcKzTY2uRa1kG9HJmk7dXfC6OHi2lR2+cVZ0kf2PdPyy318kQ8hwahxbg8nqGxpmnH7EpPKAE2ItaYRtcy0uOBKjSVxYh4sytQyZ/EKQ3FV1z0joJfYXm7GmZ368vahWH/A/NjmRAFgU9pJ2RZCPu9UlDFjuTv9oJX1UbRxyB9LKtPndJOS7ay1SV0r1p/wMRT3ZY6t6KNeQj7KV7o8BGsJceYTL/4ytdRv/xmOzvvbGKsNNwQvS3HdpEyiDiBmuDKIhmqRV3tU6Kf/+bkez829vm2tPuR52g7Yag/vwk1NFtwzgIVa+lnF3zPVPf17cQWvInZUURZLGsoCJS0vBY7Py3tY/67KeGpoxeOxStTLS0V/qDy1Er71+qJpy4Nwz7i/qrLVobRSb3Xo1lU8BO7EIVci5Sa/E8CfgGyA+VZfFpuvPqr+S7DujFIQEbedXvkjseGcSw/924AV3+HWU64D7hY01FtPe1LwcjtTvQh5Z9+3vbIWAB18OEhlPwzy+sfAxMkAjZc1GHKu1C+T8ubpaWAiyVnpZMw/kl8tyBDy7KMf18rwM3KCXxWFsIcCtLqMM8qBZkvhRF46/ghEdvanejrM3ZKN7hoHyKwHTF8ww/9sgJFuJHq+V/Yjt8ePfHZNncrVaZlLQ6V6MJxoK5oeDgpn9sidSaE9843UuEh40b5L9QLVLkk99fF6X6EHTfzVW9q+rufvF56v7MJfsXT5bg7DriKRLwvOe15ans9zY6Iulb+frU4gAYXvEmkDujkd/46+v0NejyHJCbIVwOUOoM4NmTch27AO+ZyaVWH8iifmHpQpRflgNdyz176ZRlQFfVEmPEs/gNlg4da4Tq/Pf45rkYa3ognj/WhVwBq4Q3lU2U+R4DkUPwKXmg/24oDvG0fA4/4hzoDQ6TBTW7m/bV5XB+R9t6c7z2PMaOBrSW2c7JErWfrh0G73BrPU2NyctT9KSCyt+N670WsePWsH7mYUmywpnUMekrRew3guTkBi8XasnDorB4cn5Wv+hKtPch9ztETFZjcZJzhi+P5tPCqMMzem6beM0zsWRz8JARGtuQHWGbao4cRdSBIg6sfQvn+rj5kDhMVizjoJc1Hu7eZMRbdG/YiN6hjaoZVlaSKc883kV60CqECKpUyp8ndRwRCmWDyosTFaHE9r8bXomUAQLa/Qf9duWaH1Rf2ILDxf5UFwmuyb5+CHN68HSO3+0n+z76yEC+kmnOAsDpknFD7fxrNsETw95oarZlcx8drN9Ttl+jR55KKFbAQHqVr3ZyQaxGVD7L05+1dlsPDHVHQ3FjHMVdTFQXyTkEOphc+Zzq6c3L5Be43mEU4ThiA1ayExZr9gUfjuWyAYIPoR5S+S+kcAsgXViu53Nvlhf1DdkI4JzP3x986MsHKwImyacSZevgIT8EKr0hCQc+PkQspZe1j2Cn9GMgWRvMwryQZdBOfMh+np4LQ4AvHi6mtjCKI+caQ+hHV6ECLkpj9O/h2xFMwtszXZTlYtLA/vFbNVq7yKXhc3qTOGxI0bzlAJQgvQl4GYJiBDy0533CxoesNyJrtO5W/vc3a7N4lqXOtwMaQfi9x4B2IYauhkHxwEd+xdqyLsQS+Fva+zTaSu3sKaTKG3Hhgn3ComN4EQqvUfZZVnk2Tdqi27nbXgfIrGPNTFt29K9UX7iHuUN5Twy3awdbivngHJdZgfGPurcfEOW+nObxGL6bef7wQ68aOWeVF5S0zGSU/O9blxU6cPqcXATHA3sUVOwormKn309OaVQnW0KvEcpi9aVp8pyzdpnrITVHB74VRq5yC31r8hhUnahIB71UnNu+m/gSUwx+eIdpAnM+hxz4ZJRhGS/tZr5HYQr6UQbfCAw7C+n1NjtXPzeUL22gkvncYL9aIyulFCRSZuJlm16fBQzSHknQTEfTteZ7do90rG0ewK4yfWXEvsSiuuBs5llyyhshTeBfZ1V0PZSWRBP0vN1HTBGq6Gma0iT7Sz/NlZGxRne/O36OocU1BDK5F1h2Bjtqzuafjo3fLzKoJaKRvIZ8iLWwb/G2o7z4CzgkSr49Ir0+rbkObf/+eiCD3OhUPY5JUSermkCkdgehAcsTsyLmzYisV2Sz9kkDU8N1cIZx6h8FVgxqAPEqlkSlFG6JwjQbNnH5NXabJ7+hBaz5kD7HXi9fq/ft3rwlwd4GvkMhImQ/APuXd7+790GtEOHiXMLJPkBnMStq5cfVKK1R5O5anbhTBFyNE6g/BcI8MGdNrXXcwnqcqPgUy5DxSmSI8KGdRQR9hcpSoB4zZZ2HNTNs8aXZVGKF4brtit/zD2/nmnVY3mdaKUR7d6/QxDC9TMX953qpTtRRXsqH2EwZS3nthTU7ghbaD39iRZvY8DASmL51tENDYg+fqDyhi3MOOpLyYBj3SB/pshC8NlHjeM9kT1TtkXj7Zb/5lqeAsGcCrm6zVEPcKBtNhbDAcvr45CRGT39Qb5Fo5g62/A2FjMG8BIM+pqs62fteL+gAAMBeMcboTmzGQyx4DziXd1EYhc8miTnHrQAAAA=",import.meta.url).href,new URL(""+new URL("badge-sample-2-C9akOfRk.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-3-BacbPyRw.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-4-BljmGkla.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-5-DWGY2Bab.webp",import.meta.url).href,import.meta.url).href,new URL(""+new URL("badge-sample-6-BSEwgY1Y.webp",import.meta.url).href,import.meta.url).href;const Er={B001:{pages:[{url:new URL(""+new URL("B001-1.svg-DLOshZ_2.gz",import.meta.url).href,import.meta.url).href,width:1842.52001953125,height:1388.97998046875},{url:new URL(""+new URL("B001-2.svg-DuMFJMti.gz",import.meta.url).href,import.meta.url).href,width:1836.8499755859375,height:1383.31005859375}]},A004:{pages:[{url:new URL(""+new URL("A004-1.svg-Dm4KXuBb.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-2.svg-BMoD3VSE.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-3.svg-CZujMGnP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-4.svg-B-_pYSMP.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-5.svg-C_KC-hjD.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625},{url:new URL(""+new URL("A004-6.svg-Coy9z03B.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]},A001:{pages:[{url:new URL(""+new URL("A001-1.svg-DdwMotaf.gz",import.meta.url).href,import.meta.url).href,width:841.8900146484375,height:595.2760009765625}]}},Ar=[{id:"gold",label:"골드",description:"금색 링 · 클로버 보석 프레임"},{id:"sparkle",label:"스파클",description:"은색 링 · 하트 보석 프레임"},{id:"shining",label:"샤이닝",description:"캐릭터 컬러 링 · 원형 보석 프레임"}],Gn=[{id:"badge-08",sourcePosition:8,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:8,frontPrint:[1254.330319862666,34.01955173522468,1424.4090600201464,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,42.523488743098696,1415.9051230122723,195.59435488483098],back:[1262.9755859375,36.71195983886719,1415.7635498046875,189.4999542236328],typeIndex:1,label:"골드 01",thumbnail:new URL(""+new URL("badge-08-DE-FqJsL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-09",sourcePosition:9,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:9,frontPrint:[1421.5748266986036,34.01955173522468,1591.653566856084,204.098291892705],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,42.523488743098696,1583.1496298482098,195.59435488483098],back:[1430.2200927734375,36.71195983886719,1583.008056640625,189.4999542236328],typeIndex:2,label:"골드 02",thumbnail:new URL(""+new URL("badge-09-DmH9n4DQ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-10",sourcePosition:10,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:1,column:10,frontPrint:[1588.8187231829786,34.01942966491218,1758.897463340459,204.0981698223925],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,42.523366672786196,1750.3935263325848,195.59423281451848],back:[1597.4639892578125,36.71195983886719,1750.251953125,189.4999542236328],typeIndex:3,label:"골드 03",thumbnail:new URL(""+new URL("badge-10-BejpQ3og.webp",import.meta.url).href,import.meta.url).href},{id:"badge-18",sourcePosition:18,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:8,frontPrint:[1254.330319862666,198.42891452819345,1424.4090600201464,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,206.93285153606746,1415.9051230122723,360.0037176777997],back:[1262.9755859375,201.1211395263672,1415.7635498046875,353.90911865234375],typeIndex:4,label:"골드 04",thumbnail:new URL(""+new URL("badge-18-XlSUykBc.webp",import.meta.url).href,import.meta.url).href},{id:"badge-19",sourcePosition:19,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:9,frontPrint:[1421.5748266986036,198.42891452819345,1591.653566856084,368.50765468567374],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,206.93285153606746,1583.1496298482098,360.0037176777997],back:[1430.2200927734375,201.1211395263672,1583.008056640625,353.90911865234375],typeIndex:5,label:"골드 05",thumbnail:new URL(""+new URL("badge-19-DBne2Zis.webp",import.meta.url).href,import.meta.url).href},{id:"badge-20",sourcePosition:20,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:2,column:10,frontPrint:[1588.8187231829786,198.42879245788095,1758.897463340459,368.50753261536124],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,206.93272946575496,1750.3935263325848,360.0035956074872],back:[1597.4639892578125,201.1211395263672,1750.251953125,353.90911865234375],typeIndex:6,label:"골드 06",thumbnail:new URL(""+new URL("badge-20-CIL8-nl4.webp",import.meta.url).href,import.meta.url).href},{id:"badge-28",sourcePosition:28,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:8,frontPrint:[1254.330319862666,362.838345985713,1424.4090600201464,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,371.342282993587,1415.9051230122723,524.4131491353193],back:[1262.9755859375,365.53057861328125,1415.7635498046875,518.3185424804688],typeIndex:7,label:"골드 07",thumbnail:new URL(""+new URL("badge-28-CcBXr4M_.webp",import.meta.url).href,import.meta.url).href},{id:"badge-29",sourcePosition:29,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:9,frontPrint:[1421.5748266986036,362.838345985713,1591.653566856084,532.9170861431933],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,371.342282993587,1583.1496298482098,524.4131491353193],back:[1430.2200927734375,365.53057861328125,1583.008056640625,518.3185424804688],typeIndex:8,label:"골드 08",thumbnail:new URL(""+new URL("badge-29-Dd0k_HIo.webp",import.meta.url).href,import.meta.url).href},{id:"badge-30",sourcePosition:30,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:3,column:10,frontPrint:[1588.8187231829786,362.8382239154005,1758.897463340459,532.9169640728808],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,371.3421609232745,1750.3935263325848,524.4130270650068],back:[1597.4639892578125,365.53057861328125,1750.251953125,518.3185424804688],typeIndex:9,label:"골드 09",thumbnail:new URL(""+new URL("badge-30-DfvCrJrR.webp",import.meta.url).href,import.meta.url).href},{id:"badge-38",sourcePosition:38,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:8,frontPrint:[1254.330319862666,527.2477087786817,1424.4090600201464,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,535.7516457865557,1415.9051230122723,688.822511928288],back:[1262.9755859375,529.9398803710938,1415.7635498046875,682.7278442382812],typeIndex:10,label:"골드 10",thumbnail:new URL(""+new URL("badge-38-Cg79xo4X.webp",import.meta.url).href,import.meta.url).href},{id:"badge-39",sourcePosition:39,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:9,frontPrint:[1421.5748266986036,527.2477087786817,1591.653566856084,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,535.7516457865557,1583.1496298482098,688.822511928288],back:[1430.2200927734375,529.9398803710938,1583.008056640625,682.7278442382812],typeIndex:11,label:"골드 11",thumbnail:new URL(""+new URL("badge-39-B_YUpvKk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-40",sourcePosition:40,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:4,column:10,frontPrint:[1588.8187231829786,527.2477087786817,1758.897463340459,697.326448936162],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,535.7516457865557,1750.3935263325848,688.822511928288],back:[1597.4639892578125,529.9398803710938,1750.251953125,682.7278442382812],typeIndex:12,label:"골드 12",thumbnail:new URL(""+new URL("badge-40-DBsTG2MC.webp",import.meta.url).href,import.meta.url).href},{id:"badge-48",sourcePosition:48,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:8,frontPrint:[1254.330319862666,691.6571326068067,1424.4090600201464,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,700.1610696146807,1415.9051230122723,853.231935756413],back:[1262.9755859375,694.3494873046875,1415.7635498046875,847.137451171875],typeIndex:13,label:"골드 13",thumbnail:new URL(""+new URL("badge-48-rZmMYQXx.webp",import.meta.url).href,import.meta.url).href},{id:"badge-49",sourcePosition:49,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:9,frontPrint:[1421.5748266986036,691.6571326068067,1591.653566856084,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,700.1610696146807,1583.1496298482098,853.231935756413],back:[1430.2200927734375,694.3494873046875,1583.008056640625,847.137451171875],typeIndex:14,label:"골드 14",thumbnail:new URL(""+new URL("badge-49-Dhx76ABa.webp",import.meta.url).href,import.meta.url).href},{id:"badge-50",sourcePosition:50,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:5,column:10,frontPrint:[1588.8187231829786,691.6571326068067,1758.897463340459,861.735872764287],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,700.1610696146807,1750.3935263325848,853.231935756413],back:[1597.4639892578125,694.3494873046875,1750.251953125,847.137451171875],typeIndex:15,label:"골드 15",thumbnail:new URL(""+new URL("badge-50-5Am-PpTX.webp",import.meta.url).href,import.meta.url).href},{id:"badge-58",sourcePosition:58,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:8,frontPrint:[1254.330319862666,856.0665564349317,1424.4090600201464,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,864.5704934428057,1415.9051230122723,1017.641359584538],back:[1262.9755859375,858.7587890625,1415.7635498046875,1011.5467529296875],typeIndex:16,label:"골드 16",thumbnail:new URL(""+new URL("badge-58-CbB1XB4w.webp",import.meta.url).href,import.meta.url).href},{id:"badge-59",sourcePosition:59,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:9,frontPrint:[1421.5748266986036,856.0665564349317,1591.653566856084,1026.145296592412],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,864.5704934428057,1583.1496298482098,1017.641359584538],back:[1430.2200927734375,858.7587890625,1583.008056640625,1011.5467529296875],typeIndex:17,label:"골드 17",thumbnail:new URL(""+new URL("badge-59-CELhVXQJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-60",sourcePosition:60,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:6,column:10,frontPrint:[1588.8187231829786,856.0666785052442,1758.897463340459,1026.1454186627245],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,864.5706155131182,1750.3935263325848,1017.6414816548505],back:[1597.4639892578125,858.7587890625,1750.251953125,1011.5467529296875],typeIndex:18,label:"골드 18",thumbnail:new URL(""+new URL("badge-60-BAzuZeiE.webp",import.meta.url).href,import.meta.url).href},{id:"badge-68",sourcePosition:68,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:8,frontPrint:[1254.330319862666,1020.4759802630567,1424.4090600201464,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1028.9799172709309,1415.9051230122723,1182.050783412663],back:[1262.9755859375,1023.1682739257812,1415.7635498046875,1175.956298828125],typeIndex:19,label:"골드 19",thumbnail:new URL(""+new URL("badge-68-D6yD2wXZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-69",sourcePosition:69,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:9,frontPrint:[1421.5748266986036,1020.4759802630567,1591.653566856084,1190.554720420537],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1028.9799172709309,1583.1496298482098,1182.050783412663],back:[1430.2200927734375,1023.1682739257812,1583.008056640625,1175.956298828125],typeIndex:20,label:"골드 20",thumbnail:new URL(""+new URL("badge-69-DZ9miDly.webp",import.meta.url).href,import.meta.url).href},{id:"badge-70",sourcePosition:70,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:7,column:10,frontPrint:[1588.8187231829786,1020.4761023333692,1758.897463340459,1190.5548424908495],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1028.9800393412434,1750.3935263325848,1182.0509054829754],back:[1597.4639892578125,1023.1682739257812,1750.251953125,1175.956298828125],typeIndex:21,label:"골드 21",thumbnail:new URL(""+new URL("badge-70-DgXjk1az.webp",import.meta.url).href,import.meta.url).href},{id:"badge-78",sourcePosition:78,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:8,frontPrint:[1254.330319862666,1184.8853735736036,1424.4090600201464,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1262.8342568705402,1193.3893105814777,1415.9051230122723,1346.4601767232098],back:[1262.9755859375,1187.57763671875,1415.7635498046875,1340.36572265625],typeIndex:22,label:"골드 22",thumbnail:new URL(""+new URL("badge-78-Cd2vu3Y5.webp",import.meta.url).href,import.meta.url).href},{id:"badge-79",sourcePosition:79,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:9,frontPrint:[1421.5748266986036,1184.8853735736036,1591.653566856084,1354.964113731084],bleedMM:3,finishedDiameterMM:54,front:[1430.0787637064777,1193.3893105814777,1583.1496298482098,1346.4601767232098],back:[1430.2200927734375,1187.57763671875,1583.008056640625,1340.36572265625],typeIndex:23,label:"골드 23",thumbnail:new URL(""+new URL("badge-79-DRsnIm3D.webp",import.meta.url).href,import.meta.url).href},{id:"badge-80",sourcePosition:80,type:"gold",typeLabel:"골드",typeDescription:"금색 링 · 클로버 보석 프레임",row:8,column:10,frontPrint:[1588.8187231829786,1184.885495643916,1758.897463340459,1354.9642358013964],bleedMM:3,finishedDiameterMM:54,front:[1597.3226601908527,1193.3894326517902,1750.3935263325848,1346.4602987935223],back:[1597.4639892578125,1187.57763671875,1750.251953125,1340.36572265625],typeIndex:24,label:"골드 24",thumbnail:new URL(""+new URL("badge-80-IkvXAdCT.webp",import.meta.url).href,import.meta.url).href},{id:"badge-03",sourcePosition:3,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:3,frontPrint:[418.042203407588,34.04199741393562,588.1209435650683,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,42.54593442180963,579.6170065571943,195.61680056354191],back:[426.7555236816406,36.71195983886719,579.5435180664062,189.4999542236328],typeIndex:1,label:"스파클 01",thumbnail:new URL(""+new URL("badge-03-C2Andf4t.webp",import.meta.url).href,import.meta.url).href},{id:"badge-04",sourcePosition:4,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:4,frontPrint:[584.8421912005567,34.04199741393562,754.920931358037,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,42.54593442180963,746.416994350163,195.61680056354191],back:[593.9993896484375,36.71195983886719,746.7874145507812,189.4999542236328],typeIndex:2,label:"스파클 02",thumbnail:new URL(""+new URL("badge-04-evTzyb21.webp",import.meta.url).href,import.meta.url).href},{id:"badge-05",sourcePosition:5,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:5,frontPrint:[752.1222204974317,34.04199741393562,922.200960654912,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,42.54593442180963,913.697023647038,195.61680056354191],back:[761.24365234375,36.71195983886719,914.0316162109375,189.4999542236328],typeIndex:3,label:"스파클 03",thumbnail:new URL(""+new URL("badge-05-COCRur_e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-07",sourcePosition:7,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:1,column:7,frontPrint:[1086.824216347041,34.63428257018562,1256.9029565045214,204.71302272766593],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,43.13821957805963,1248.3990194966473,196.20908571979191],back:[1095.731689453125,36.71195983886719,1248.5196533203125,189.4999542236328],typeIndex:4,label:"스파클 04",thumbnail:new URL(""+new URL("badge-07-VA6G1nD3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-13",sourcePosition:13,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:3,frontPrint:[418.042203407588,198.44202182799813,588.1209435650683,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,206.94595883587215,579.6170065571943,360.0168249776044],back:[426.7555236816406,201.1211395263672,579.5435180664062,353.90911865234375],typeIndex:5,label:"스파클 05",thumbnail:new URL(""+new URL("badge-13-BFRXnlsh.webp",import.meta.url).href,import.meta.url).href},{id:"badge-14",sourcePosition:14,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:4,frontPrint:[584.8421912005567,198.44202182799813,754.920931358037,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,206.94595883587215,746.416994350163,360.0168249776044],back:[593.9993896484375,201.1211395263672,746.7874145507812,353.90911865234375],typeIndex:6,label:"스파클 06",thumbnail:new URL(""+new URL("badge-14-DtQvtGMO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-15",sourcePosition:15,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:5,frontPrint:[752.1222204974317,198.44202182799813,922.200960654912,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,206.94595883587215,913.697023647038,360.0168249776044],back:[761.24365234375,201.1211395263672,914.0316162109375,353.90911865234375],typeIndex:7,label:"스파클 07",thumbnail:new URL(""+new URL("badge-15-czov33Tv.webp",import.meta.url).href,import.meta.url).href},{id:"badge-17",sourcePosition:17,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:2,column:7,frontPrint:[1086.824216347041,198.53052280456063,1256.9029565045214,368.60926296204093],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,207.03445981243465,1248.3990194966473,360.1053259541669],back:[1095.731689453125,201.1211395263672,1248.5196533203125,353.90911865234375],typeIndex:8,label:"스파클 08",thumbnail:new URL(""+new URL("badge-17-QyXdOENZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-24",sourcePosition:24,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:4,frontPrint:[584.8421912005567,362.8420386126661,754.920931358037,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,371.3459756205401,746.416994350163,524.4168417622724],back:[593.9993896484375,365.53057861328125,746.7874145507812,518.3185424804688],typeIndex:9,label:"스파클 09",thumbnail:new URL(""+new URL("badge-24-D06_EHHY.webp",import.meta.url).href,import.meta.url).href},{id:"badge-25",sourcePosition:25,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:5,frontPrint:[752.1222204974317,362.8420386126661,922.200960654912,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,371.3459756205401,913.697023647038,524.4168417622724],back:[761.24365234375,365.53057861328125,914.0316162109375,518.3185424804688],typeIndex:10,label:"스파클 10",thumbnail:new URL(""+new URL("badge-25-DtDCPFNy.webp",import.meta.url).href,import.meta.url).href},{id:"badge-27",sourcePosition:27,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:3,column:7,frontPrint:[1086.824216347041,363.2766089251661,1256.9029565045214,533.3553490826464],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,371.7805459330401,1248.3990194966473,524.8514120747724],back:[1095.731689453125,365.53057861328125,1248.5196533203125,518.3185424804688],typeIndex:11,label:"스파클 11",thumbnail:new URL(""+new URL("badge-27-Cd6A13TO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-34",sourcePosition:34,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:4,frontPrint:[584.8421912005567,527.2420630267286,754.920931358037,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,535.7460000346026,746.416994350163,688.8168661763349],back:[593.9993896484375,529.9398803710938,746.7874145507812,682.7278442382812],typeIndex:12,label:"스파클 12",thumbnail:new URL(""+new URL("badge-34-Cd0ySSwt.webp",import.meta.url).href,import.meta.url).href},{id:"badge-35",sourcePosition:35,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:5,frontPrint:[752.1222204974317,527.2420630267286,922.200960654912,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,535.7460000346026,913.697023647038,688.8168661763349],back:[761.24365234375,529.9398803710938,914.0316162109375,682.7278442382812],typeIndex:13,label:"스파클 13",thumbnail:new URL(""+new URL("badge-35-DOwYXlfS.webp",import.meta.url).href,import.meta.url).href},{id:"badge-37",sourcePosition:37,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:4,column:7,frontPrint:[1086.824216347041,527.4719824603224,1256.9029565045214,697.5507226178026],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,535.9759194681964,1248.3990194966473,689.0467856099286],back:[1095.731689453125,529.9398803710938,1248.5196533203125,682.7278442382812],typeIndex:14,label:"스파클 14",thumbnail:new URL(""+new URL("badge-37-CbOkyFPI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-44",sourcePosition:44,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:4,frontPrint:[584.8421912005567,691.6420264056349,754.920931358037,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,700.1459634135089,746.416994350163,853.2168295552411],back:[593.9993896484375,694.3494873046875,746.7874145507812,847.137451171875],typeIndex:15,label:"스파클 15",thumbnail:new URL(""+new URL("badge-44-B0QQhtl8.webp",import.meta.url).href,import.meta.url).href},{id:"badge-45",sourcePosition:45,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:5,frontPrint:[752.1222204974317,691.6420264056349,922.200960654912,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,700.1459634135089,913.697023647038,853.2168295552411],back:[761.24365234375,694.3494873046875,914.0316162109375,847.137451171875],typeIndex:16,label:"스파클 16",thumbnail:new URL(""+new URL("badge-45-DmxY66ow.webp",import.meta.url).href,import.meta.url).href},{id:"badge-47",sourcePosition:47,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:5,column:7,frontPrint:[1086.824216347041,691.9851050189161,1256.9029565045214,862.0638451763964],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,700.4890420267901,1248.3990194966473,853.5599081685224],back:[1095.731689453125,694.3494873046875,1248.5196533203125,847.137451171875],typeIndex:17,label:"스파클 17",thumbnail:new URL(""+new URL("badge-47-CeRviWJJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-54",sourcePosition:54,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:4,frontPrint:[584.8421912005567,856.0420508196974,754.920931358037,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,864.5459878275714,746.416994350163,1017.6168539693036],back:[593.9993896484375,858.7587890625,746.7874145507812,1011.5467529296875],typeIndex:18,label:"스파클 18",thumbnail:new URL(""+new URL("badge-54-B5s3ZlQK.webp",import.meta.url).href,import.meta.url).href},{id:"badge-55",sourcePosition:55,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:5,frontPrint:[752.1222204974317,856.0420508196974,922.200960654912,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,864.5459878275714,913.697023647038,1017.6168539693036],back:[761.24365234375,858.7587890625,914.0316162109375,1011.5467529296875],typeIndex:19,label:"스파클 19",thumbnail:new URL(""+new URL("badge-55-DODeslOI.webp",import.meta.url).href,import.meta.url).href},{id:"badge-57",sourcePosition:57,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:6,column:7,frontPrint:[1086.824216347041,856.3358130267286,1256.9029565045214,1026.414553184209],bleedMM:3,finishedDiameterMM:54,front:[1095.3281533549152,864.8397500346026,1248.3990194966473,1017.9106161763349],back:[1095.731689453125,858.7587890625,1248.5196533203125,1011.5467529296875],typeIndex:20,label:"스파클 20",thumbnail:new URL(""+new URL("badge-57-BoHgYb2v.webp",import.meta.url).href,import.meta.url).href},{id:"badge-64",sourcePosition:64,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:4,frontPrint:[584.8421912005567,1020.4420141986036,754.920931358037,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1028.9459512064777,746.416994350163,1182.0168173482098],back:[593.9993896484375,1023.1682739257812,746.7874145507812,1175.956298828125],typeIndex:21,label:"스파클 21",thumbnail:new URL(""+new URL("badge-64-9ht6MIZ6.webp",import.meta.url).href,import.meta.url).href},{id:"badge-65",sourcePosition:65,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:7,column:5,frontPrint:[752.1222204974317,1020.4420141986036,922.200960654912,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1028.9459512064777,913.697023647038,1182.0168173482098],back:[761.24365234375,1023.1682739257812,914.0316162109375,1175.956298828125],typeIndex:22,label:"스파클 22",thumbnail:new URL(""+new URL("badge-65-DdkxeC42.webp",import.meta.url).href,import.meta.url).href},{id:"badge-74",sourcePosition:74,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:4,frontPrint:[584.8421912005567,1184.842038612666,754.920931358037,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[593.3461282084307,1193.3459756205402,746.416994350163,1346.4168417622723],back:[593.9993896484375,1187.57763671875,746.7874145507812,1340.36572265625],typeIndex:23,label:"스파클 23",thumbnail:new URL(""+new URL("badge-74-PcRnXs2E.webp",import.meta.url).href,import.meta.url).href},{id:"badge-75",sourcePosition:75,type:"sparkle",typeLabel:"스파클",typeDescription:"은색 링 · 하트 보석 프레임",row:8,column:5,frontPrint:[752.1222204974317,1184.842038612666,922.200960654912,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[760.6261575053057,1193.3459756205402,913.697023647038,1346.4168417622723],back:[761.24365234375,1187.57763671875,914.0316162109375,1340.36572265625],typeIndex:24,label:"스파클 24",thumbnail:new URL(""+new URL("badge-75-Cu6sRJZU.webp",import.meta.url).href,import.meta.url).href},{id:"badge-01",sourcePosition:1,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:1,frontPrint:[83.60220859557624,34.04199741393562,253.68094875305655,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,42.54593442180963,245.17701174518254,195.61680056354191],back:[92.26741027832031,36.71195983886719,245.05540466308594,189.4999542236328],typeIndex:1,label:"샤이닝 01",thumbnail:new URL(""+new URL("badge-01-z9KiWMp0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-02",sourcePosition:2,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:2,frontPrint:[250.88221500426766,34.04199741393562,420.96095516174796,204.12073757141593],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,42.54593442180963,412.45701815387395,195.61680056354191],back:[259.51129150390625,36.71195983886719,412.2992858886719,189.4999542236328],typeIndex:2,label:"샤이닝 02",thumbnail:new URL(""+new URL("badge-02-DHBRGsSq.webp",import.meta.url).href,import.meta.url).href},{id:"badge-06",sourcePosition:6,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:1,column:6,frontPrint:[919.7811255267286,34.82433841735359,1089.859865684209,204.9030785748339],bleedMM:3,finishedDiameterMM:54,front:[928.2850625346026,43.3282754252276,1081.3559286763348,196.39914156695988],back:[928.487548828125,36.71195983886719,1081.2755126953125,189.4999542236328],typeIndex:3,label:"샤이닝 03",thumbnail:new URL(""+new URL("badge-06-C_JSAFg0.webp",import.meta.url).href,import.meta.url).href},{id:"badge-11",sourcePosition:11,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:1,frontPrint:[83.60220859557624,198.44202182799813,253.68094875305655,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,206.94595883587215,245.17701174518254,360.0168249776044],back:[92.26741027832031,201.1211395263672,245.05540466308594,353.90911865234375],typeIndex:4,label:"샤이닝 04",thumbnail:new URL(""+new URL("badge-11-DHLpc7QZ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-12",sourcePosition:12,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:2,frontPrint:[250.88221500426766,198.44202182799813,420.96095516174796,368.52076198547843],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,206.94595883587215,412.45701815387395,360.0168249776044],back:[259.51129150390625,201.1211395263672,412.2992858886719,353.90911865234375],typeIndex:5,label:"샤이닝 05",thumbnail:new URL(""+new URL("badge-12-DCfR1xAr.webp",import.meta.url).href,import.meta.url).href},{id:"badge-16",sourcePosition:16,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:2,column:6,frontPrint:[919.7803625872755,198.7830786517286,1089.8591027447558,368.8618188092089],bleedMM:3,finishedDiameterMM:54,front:[928.2842995951495,207.28701565960262,1081.3551657368816,360.3578818013349],back:[928.487548828125,201.1211395263672,1081.2755126953125,353.90911865234375],typeIndex:6,label:"샤이닝 06",thumbnail:new URL(""+new URL("badge-16-CTzAvAez.webp",import.meta.url).href,import.meta.url).href},{id:"badge-21",sourcePosition:21,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:1,frontPrint:[83.60220859557624,362.8420386126661,253.68094875305655,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,371.3459756205401,245.17701174518254,524.4168417622724],back:[92.26741027832031,365.53057861328125,245.05540466308594,518.3185424804688],typeIndex:7,label:"샤이닝 07",thumbnail:new URL(""+new URL("badge-21-NIdd2ZW2.webp",import.meta.url).href,import.meta.url).href},{id:"badge-22",sourcePosition:22,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:2,frontPrint:[250.88221500426766,362.8420386126661,420.96095516174796,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,371.3459756205401,412.45701815387395,524.4168417622724],back:[259.51129150390625,365.53057861328125,412.2992858886719,518.3185424804688],typeIndex:8,label:"샤이닝 08",thumbnail:new URL(""+new URL("badge-22-BVzALAYL.webp",import.meta.url).href,import.meta.url).href},{id:"badge-23",sourcePosition:23,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:3,frontPrint:[418.042203407588,362.8420386126661,588.1209435650683,532.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,371.3459756205401,579.6170065571943,524.4168417622724],back:[426.7555236816406,365.53057861328125,579.5435180664062,518.3185424804688],typeIndex:9,label:"샤이닝 09",thumbnail:new URL(""+new URL("badge-23-3N0N0K4-.webp",import.meta.url).href,import.meta.url).href},{id:"badge-26",sourcePosition:26,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:3,column:6,frontPrint:[919.7803015521192,363.05091617614266,1089.8590417095995,533.129656333623],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,371.5548531840167,1081.3551047017254,524.625719325749],back:[928.487548828125,365.53057861328125,1081.2755126953125,518.3185424804688],typeIndex:10,label:"샤이닝 10",thumbnail:new URL(""+new URL("badge-26-BBKF5945.webp",import.meta.url).href,import.meta.url).href},{id:"badge-31",sourcePosition:31,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:1,frontPrint:[83.60220859557624,527.2420630267286,253.68094875305655,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,535.7460000346026,245.17701174518254,688.8168661763349],back:[92.26741027832031,529.9398803710938,245.05540466308594,682.7278442382812],typeIndex:11,label:"샤이닝 11",thumbnail:new URL(""+new URL("badge-31-CtwaKdwO.webp",import.meta.url).href,import.meta.url).href},{id:"badge-32",sourcePosition:32,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:2,frontPrint:[250.88221500426766,527.2420630267286,420.96095516174796,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,535.7460000346026,412.45701815387395,688.8168661763349],back:[259.51129150390625,529.9398803710938,412.2992858886719,682.7278442382812],typeIndex:12,label:"샤이닝 12",thumbnail:new URL(""+new URL("badge-32-DoB35F9k.webp",import.meta.url).href,import.meta.url).href},{id:"badge-33",sourcePosition:33,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:3,frontPrint:[418.042203407588,527.2420630267286,588.1209435650683,697.3208031842089],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,535.7460000346026,579.6170065571943,688.8168661763349],back:[426.7555236816406,529.9398803710938,579.5435180664062,682.7278442382812],typeIndex:13,label:"샤이닝 13",thumbnail:new URL(""+new URL("badge-33-C_vBQs8e.webp",import.meta.url).href,import.meta.url).href},{id:"badge-36",sourcePosition:36,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:4,column:6,frontPrint:[919.7803015521192,527.3186011126661,1089.8590417095995,697.3973412701464],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,535.8225381205401,1081.3551047017254,688.8934042622724],back:[928.487548828125,529.9398803710938,1081.2755126953125,682.7278442382812],typeIndex:14,label:"샤이닝 14",thumbnail:new URL(""+new URL("badge-36-BU5XfqNk.webp",import.meta.url).href,import.meta.url).href},{id:"badge-41",sourcePosition:41,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:1,frontPrint:[83.60220859557624,691.6420264056349,253.68094875305655,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[92.10614560345026,700.1459634135089,245.17701174518254,853.2168295552411],back:[92.26741027832031,694.3494873046875,245.05540466308594,847.137451171875],typeIndex:15,label:"샤이닝 15",thumbnail:new URL(""+new URL("badge-41-sv0NYG45.webp",import.meta.url).href,import.meta.url).href},{id:"badge-42",sourcePosition:42,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:2,frontPrint:[250.88221500426766,691.6420264056349,420.96095516174796,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,700.1459634135089,412.45701815387395,853.2168295552411],back:[259.51129150390625,694.3494873046875,412.2992858886719,847.137451171875],typeIndex:16,label:"샤이닝 16",thumbnail:new URL(""+new URL("badge-42-eAkGDu0d.webp",import.meta.url).href,import.meta.url).href},{id:"badge-43",sourcePosition:43,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:3,frontPrint:[418.0421881487989,691.6420264056349,588.1209283062792,861.7207665631151],bleedMM:3,finishedDiameterMM:54,front:[426.54612515667293,700.1459634135089,579.6169912984052,853.2168295552411],back:[426.7555236816406,694.3494873046875,579.5435180664062,847.137451171875],typeIndex:17,label:"샤이닝 17",thumbnail:new URL(""+new URL("badge-43-B-R7zh4F.webp",import.meta.url).href,import.meta.url).href},{id:"badge-46",sourcePosition:46,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:5,column:6,frontPrint:[919.7803015521192,691.5863013079786,1089.8590417095995,861.6650414654589],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,700.0902383158526,1081.3551047017254,853.1611044575849],back:[928.487548828125,694.3494873046875,1081.2755126953125,847.137451171875],typeIndex:18,label:"샤이닝 18",thumbnail:new URL(""+new URL("badge-46-BqF9wPY3.webp",import.meta.url).href,import.meta.url).href},{id:"badge-52",sourcePosition:52,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:2,frontPrint:[250.88221500426766,856.0420508196974,420.96095516174796,1026.1207909771776],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,864.5459878275714,412.45701815387395,1017.6168539693036],back:[259.51129150390625,858.7587890625,412.2992858886719,1011.5467529296875],typeIndex:19,label:"샤이닝 19",thumbnail:new URL(""+new URL("badge-52-CGMpcjvJ.webp",import.meta.url).href,import.meta.url).href},{id:"badge-56",sourcePosition:56,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:6,column:6,frontPrint:[919.7803015521192,856.7039770892286,1089.8590417095995,1026.782717246709],bleedMM:3,finishedDiameterMM:54,front:[928.2842385599932,865.2079140971026,1081.3551047017254,1018.2787802388349],back:[928.487548828125,858.7587890625,1081.2755126953125,1011.5467529296875],typeIndex:20,label:"샤이닝 20",thumbnail:new URL(""+new URL("badge-56-Cvemc1GB.webp",import.meta.url).href,import.meta.url).href},{id:"badge-62",sourcePosition:62,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:2,frontPrint:[250.88221500426766,1020.4420141986036,420.96095516174796,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1028.9459512064777,412.45701815387395,1182.0168173482098],back:[259.51129150390625,1023.1682739257812,412.2992858886719,1175.956298828125],typeIndex:21,label:"샤이닝 21",thumbnail:new URL(""+new URL("badge-62-DBFLMbtl.webp",import.meta.url).href,import.meta.url).href},{id:"badge-63",sourcePosition:63,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:7,column:3,frontPrint:[418.042203407588,1020.4420141986036,588.1209435650683,1190.520754356084],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1028.9459512064777,579.6170065571943,1182.0168173482098],back:[426.7555236816406,1023.1682739257812,579.5435180664062,1175.956298828125],typeIndex:22,label:"샤이닝 22",thumbnail:new URL(""+new URL("badge-63-CuC8TDLf.webp",import.meta.url).href,import.meta.url).href},{id:"badge-72",sourcePosition:72,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:2,frontPrint:[250.88221500426766,1184.842038612666,420.96095516174796,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[259.3861520121417,1193.3459756205402,412.45701815387395,1346.4168417622723],back:[259.51129150390625,1187.57763671875,412.2992858886719,1340.36572265625],typeIndex:23,label:"샤이닝 23",thumbnail:new URL(""+new URL("badge-72-pm8cvWoA.webp",import.meta.url).href,import.meta.url).href},{id:"badge-73",sourcePosition:73,type:"shining",typeLabel:"샤이닝",typeDescription:"캐릭터 컬러 링 · 원형 보석 프레임",row:8,column:3,frontPrint:[418.042203407588,1184.842038612666,588.1209435650683,1354.9207787701464],bleedMM:3,finishedDiameterMM:54,front:[426.546140415462,1193.3459756205402,579.6170065571943,1346.4168417622723],back:[426.7555236816406,1187.57763671875,579.5435180664062,1340.36572265625],typeIndex:24,label:"샤이닝 24",thumbnail:new URL(""+new URL("badge-73-BHFfZ8n8.webp",import.meta.url).href,import.meta.url).href}],Ss=new Map;function zo(i,e=0){const t=`${i}:${e}`;return Ss.has(t)||Ss.set(t,(async()=>{const n=Er[i]?.pages[e];if(!n)throw new Error("벡터 페이지가 없습니다.");const r=await fetch(n.url);if(!r.ok)throw new Error("벡터 자료를 불러오지 못했습니다.");const s=await r.arrayBuffer(),o=new Uint8Array(s,0,Math.min(2,s.byteLength)),a=o[0]===31&&o[1]===139?await new Response(new Blob([s]).stream().pipeThrough(new DecompressionStream("gzip"))).text():new TextDecoder().decode(s);if(!a.includes("<svg"))throw new Error("벡터 자료 형식이 올바르지 않습니다.");const c=new Blob([a],{type:"image/svg+xml"}),l=URL.createObjectURL(c);return{...n,text:a,url:l}})()),Ss.get(t)}async function a0(i,e,t=2048){const n=await zo("B001",i==="front"?0:1),[r,s,o,a]=e;return(i==="back"?n.text.replace(/<path\b(?=[^>]*\bstroke="#ec148d")[^>]*\/>/g,""):n.text).replace(/<svg\b[^>]*>/,l=>l.replace(/\bwidth="[^"]*"/,`width="${t}"`).replace(/\bheight="[^"]*"/,`height="${t}"`).replace(/\bviewBox="[^"]*"/,`viewBox="${r} ${s} ${o-r} ${a-s}"`))}async function xr(i,e,t){const n=await a0(i,e,t),r=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));try{const s=new Image;s.src=r,await s.decode();const o=document.createElement("canvas");o.width=o.height=t;const a=o.getContext("2d");return a.fillStyle="#fff",a.fillRect(0,0,t,t),a.drawImage(s,0,0,t,t),o}finally{URL.revokeObjectURL(r)}}const Qa=Math.PI/180;function l0(i,e){const t=i.querySelector(".badge-3d-stage"),n=i.querySelector(".badge-3d-status");let r,s,o,a,c,l,u=!1,h=!1,p=null,d=0,v=0,x=1,m=!1,f=0,A=0,S=0,M=0,L=!1;const R=[],C=[];let U,w;function y(){r=new Bo({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"}),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.toneMapping=un,r.outputColorSpace=Et,t.append(r.domElement),s=new Co,s.background=new Ze("#f7f7f5"),s.add(new Il("#ffffff","#d3cbd2",2));const j=new _o("#ffffff",2);j.position.set(-70,95,150),s.add(j);const fe=new _o("#ffffff",.7);fe.position.set(100,-40,80),s.add(fe),o=new Oo(-64,64,32,-32,.1,1e3),a=new Ut,s.add(a);const ge=new Nr(27,192);R.push(ge);for(const Pe of["front","back"]){const Ne=new fi({color:"#fff",toneMapped:!1});C.push(Ne);const ke=new ut(ge,Ne);ke.position.z=Pe==="front"?1.005:-1.005,Pe==="back"&&(ke.rotation.y=Math.PI),a.add(ke),Pe==="front"?c=ke:l=ke}for(const[Pe,Ne,ke]of[[1.6,0,"#454247"],[.2,.9,"#ede8ed"],[.2,-.9,"#ede8ed"]]){const Y=new Fr(26.98,26.98,Pe,192,1,!0);Y.rotateX(Math.PI/2),R.push(Y);const ee=new Pl({color:ke,roughness:.65,metalness:.05});C.push(ee);const ve=new ut(Y,ee);ve.position.z=Ne,a.add(ve)}u=!0,k()}function T(){if(!u||h)return;const j=t.clientWidth,fe=t.clientHeight;if(!j||!fe)return;const ge=j/fe,Pe=Math.max(64,64/ge);o.left=-Pe*ge/2,o.right=Pe*ge/2,o.top=Pe/2,o.bottom=-Pe/2,o.position.z=120,o.zoom=x,o.updateProjectionMatrix(),a.rotation.set(-d*Qa,v*Qa,0,"XYZ"),r.render(s,o),t.dataset.face=Math.abs((v%360+360)%360-180)<90?"back":"front",i.querySelector(".badge-zoom-value").textContent=Math.round(x*100)+"%"}function k(){r&&!h&&(r.setSize(t.clientWidth,t.clientHeight,!1),T(),p&&!L&&W())}function z(){const j=Math.min(t.clientWidth,t.clientHeight)*Math.min(devicePixelRatio,2)*x;return Math.min(r.capabilities.maxTextureSize,j>1500?4096:j>750?2048:1024)}function H(j){const fe=new Eu(j);return fe.colorSpace=Et,fe.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy()),fe}async function X(j,fe=!1){const ge=Gn.find(Ne=>Ne.id===j);if(!ge)return;const Pe=++S;p=ge,fe&&(d=0,v=0,x=1),M=0,L=!0,i.dataset.badge=j,t.dataset.state="loading",t.setAttribute("aria-busy","true"),n.textContent="원본 인쇄면을 불러오는 중",i.querySelector(".badge-selected-title").textContent=`${ge.label} · ${ge.typeDescription}`,e?.(ge);try{u||y(),c.visible=l.visible=!1;const Ne=z(),[ke,Y]=await Promise.all([xr("front",ge.front,Ne),xr("back",ge.back,Ne)]);if(h||Pe!==S)return;const ee=H(ke),ve=H(Y);U?.dispose(),w?.dispose(),U=ee,w=ve,c.material.map=ee,l.material.map=ve,c.material.needsUpdate=l.material.needsUpdate=!0,c.visible=l.visible=!0,M=Ne,L=!1,t.dataset.state="ready",t.dataset.textureSize=String(Ne),t.removeAttribute("aria-busy"),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",T(),W()}catch(Ne){if(Pe!==S||h)return;L=!1,t.dataset.state="error",t.removeAttribute("aria-busy"),n.textContent="배지 화면을 불러오지 못했습니다. 다시 선택해주세요.",console.error(Ne)}}async function W(){if(!u||!p||L)return;const j=z();if(j<=M)return;const fe=p.id,ge=++S,Pe=p;L=!0,n.textContent="확대 배율에 맞춰 원본 인쇄면을 다시 그리는 중";try{const[Ne,ke]=await Promise.all([xr("front",Pe.front,j),xr("back",Pe.back,j)]);if(h||ge!==S||p.id!==fe)return;const Y=H(Ne),ee=H(ke);U?.dispose(),w?.dispose(),U=Y,w=ee,c.material.map=Y,l.material.map=ee,M=j,L=!1,t.dataset.textureSize=String(j),n.textContent="드래그 회전 · 휠 확대/축소 · 앞면/뒷면 선택",T()}catch(Ne){ge===S&&!h&&(L=!1,n.textContent="현재 해상도로 표시 중입니다. 다시 확대하면 재시도합니다.",console.error(Ne))}}function ie(j){x=Math.max(.7,Math.min(2.8,j)),T(),W()}t.addEventListener("wheel",j=>{if(!u)return;j.preventDefault();const fe=j.deltaY*(j.deltaMode===1?16:j.deltaMode===2?t.clientHeight:1);ie(x*Math.exp(-Math.max(-200,Math.min(200,fe))*.0015))},{passive:!1}),t.onpointerdown=j=>{u&&(m=!0,f=j.clientX,A=j.clientY,t.setPointerCapture(j.pointerId),t.classList.add("dragging"))},t.onpointermove=j=>{m&&(v+=(j.clientX-f)*.5,d=Math.max(-90,Math.min(90,d-(j.clientY-A)*.4)),f=j.clientX,A=j.clientY,T())},t.onpointerup=t.onpointercancel=()=>{m=!1,t.classList.remove("dragging")},t.onkeydown=j=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(j.key)&&(j.preventDefault(),j.stopPropagation(),j.key==="ArrowLeft"&&(v-=10),j.key==="ArrowRight"&&(v+=10),j.key==="ArrowUp"&&(d=Math.max(-90,d-10)),j.key==="ArrowDown"&&(d=Math.min(90,d+10)),T())},i.querySelectorAll("[data-badge-view]").forEach(j=>j.onclick=()=>{const fe=j.dataset.badgeView;fe==="front"&&(d=0,v=0),fe==="back"&&(d=0,v=180),fe==="edge"&&(d=-10,v=82),fe==="reset"&&(d=0,v=0,x=1),T()}),i.querySelector('[data-badge-zoom="in"]').onclick=()=>ie(x*1.25),i.querySelector('[data-badge-zoom="out"]').onclick=()=>ie(x/1.25);const q=new ResizeObserver(k);q.observe(t);const de={select:X,getState(){return{badge:p?.id,rx:d,ry:v,zoom:x,resolution:M,loading:L}},destroy(){h=!0,S++,q.disconnect(),U?.dispose(),w?.dispose(),R.forEach(j=>j.dispose()),C.forEach(j=>j.dispose()),r?.dispose(),r?.forceContextLoss(),t.replaceChildren()}};return i.badgeViewer=de,de}const Go=[...s0,...o0],c0=new Map(Gi.map(i=>[i.id,i])),qt=i=>c0.get(i),dn=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Mn=(i,e,t="",n="")=>`<div class="section-heading"><span class="section-number">${i}</span><div>${n?`<p class="eyebrow">${n}</p>`:""}<h2>${e}</h2>${t?`<p class="section-description">${t}</p>`:""}</div></div>`;function yn(i,{caption:e=!0,cls:t="",eager:n=!1}={}){const r=qt(i);return`<figure class="work-image ${t}" data-asset="${i}"><button class="image-button" data-open-asset="${i}" aria-label="${dn(r.title)} 크게 보기"><img src="${r.preview||r.src}" alt="${dn(r.title)}" ${n?'fetchpriority="high"':'loading="lazy"'} decoding="async" width="${r.width||1e3}" height="${r.height||1e3}"/>${r.credit?'<span class="ai-tag">AI 연출</span>':""}<span class="image-expand" aria-hidden="true">↗</span></button>${e?`<figcaption>${dn(r.title)}${r.credit?"<span>ChatGPT 생성 · Photoshop 후보정</span>":""}</figcaption>`:""}</figure>`}const ri=(i,e="")=>`<div class="image-grid ${e}">${i.map(t=>yn(t)).join("")}</div>`,u0=[{id:"single",num:"03",name:"싱글팩",tag:"기본 구성",description:"랜덤 배지 3개와 크리스탈 케이스 1개를 하나의 패키지에 담았습니다.",detail:"하츄핑·다이아나핑·이클립스핑의 캐릭터와 색상을 구분하고, 로고와 제품 정보의 위치는 공통된 틀로 연결했습니다.",contents:[["배지","3개"],["크리스탈 케이스","1개"]],hero:"A017",images:["A024","A022","A023"],captions:"캐릭터별 구성품",types:!0},{id:"full",num:"04",name:"풀박스",tag:"3종 한 박스",description:"싱글팩 3종을 한 번에 만나는 구성. 배지 9개와 케이스 3개를 담았습니다.",detail:"작은 팩의 디자인을 확장해 외부에서도 수집 구성과 제품 라인업이 보이도록 정리했습니다.",contents:[["싱글팩","3개"],["배지 / 케이스","9개 / 3개"]],hero:"A082",images:["A083","A084"],captions:"제품 구성과 대표 비주얼"},{id:"limited",num:"05",name:"리미티드 에디션",tag:"5팩 구성",description:"배지 15개와 케이스 5개를 담은 리미티드 구성입니다.",detail:"다이아나핑과 이클립스핑의 컬러를 중심으로, 넓어진 패키지 면에서도 캐릭터와 수집 요소가 함께 읽히도록 구성했습니다.",contents:[["싱글팩","5개"],["배지 / 케이스","15개 / 5개"]],hero:"A005",images:["A009","A008"],captions:"리미티드 2종과 대표 비주얼",types:!0},{id:"daiso",num:"06",name:"다이소 딱지",tag:"유통 채널 확장",description:"원형 자석 배지와 캐릭터 자석, 총 12개를 함께 보여주는 진열 팩입니다.",detail:"박스에서 꺼내는 경험과 달리, 매대에서 구성과 타입을 바로 볼 수 있는 전면 그래픽으로 전개했습니다.",contents:[["구성","원형 배지 + 캐릭터 자석"],["타입","골드 · 샤이닝 · 스파클"]],hero:"A039",images:[],types:!0,flat:!0},{id:"display",num:"07",name:"딱지 파우치 디스플레이 박스",tag:"매대 진열",description:"개별 파우치 20개를 모아 담는 진열용 박스입니다.",detail:"운송·보관 시 닫힌 형태와, 상단 절취 후 제품을 꺼낼 수 있는 진열 형태를 같은 전개도에서 살펴볼 수 있습니다.",contents:[["딱지 파우치","20개"],["캐릭터","하츄핑 · 다이아나핑 · 이클립스핑"]],hero:"A045",images:[],types:!0,display:!0},{id:"pouch",num:"08",name:"딱지 파우치",tag:"개별 포장",description:"배지 3개를 담는 120 × 130mm 개별 포장입니다.",detail:"앞면에는 캐릭터와 제품 분위기를, 뒷면에는 구성·주의사항·제품 정보를 배치했습니다. 상하 실링과 걸이 구멍까지 함께 확인할 수 있습니다.",contents:[["배지","3개"],["상하 실링","각 15mm"]],hero:"A042",images:[],types:!0,flat:!0}],h0={"single-pink":"A015","single-lavender":"A010","single-purple":"A011","limited-blue":"A007","limited-purple":"A006","daiso-1":"A039","daiso-2":"A040","daiso-3":"A041","display-1":"A045","display-2":"A046","display-3":"A047","pouch-1":"A042","pouch-2":"A043","pouch-3":"A044"};function d0(i){const e=Go.filter(t=>t.group===i.id);return`<section class="section package-section" id="${i.id}">${Mn(i.num,i.name,"",i.tag)}<div class="product-overview"><div class="product-visual" data-product-visual>${yn(i.hero,{cls:i.display?"dieline-hero":""})}</div><div class="product-copy"><p class="lead">${i.description}</p><p>${i.detail}</p><dl class="contents-list">${i.contents.map(([t,n])=>`<div><dt>${t}</dt><dd>${n}</dd></div>`).join("")}</dl><p class="small-note">담당: 패키지 그래픽 · 제품 정보 구성 · OEM 제작 소통</p></div></div><div class="package-interaction"><div class="interaction-heading"><h3>${i.flat?"평면 그래픽에서 입체 목업으로":"전개도에서 입체 패키지로"}</h3><p>${i.display?"접은 뒤 ‘진열형으로 보기’를 눌러 상단을 분리해보세요.":"드래그로 회전하고, 마우스 휠로 확대해보세요."}</p></div>${e.length>1?`<div class="design-selector" role="group" aria-label="${i.name} 디자인 선택">${e.map((t,n)=>`<button type="button" data-design="${t.id}" aria-pressed="${n===0}" aria-controls="${i.id}-viewer">${t.label}</button>`).join("")}</div>`:""}<div id="${i.id}-viewer" class="package-viewer-mount" data-package="${i.id}" data-model="${e[0].id}"></div></div>${i.images.length?`<details class="work-details"><summary>${i.captions}<span>${i.images.length}개 이미지 +</span></summary>${ri(i.images)}</details>`:""}</section>`}const Vo={product:"제품 이미지",packaging:"패키지·전개도",badge:"배지 제작 시트",usage:"AI 연출 이미지",digital:"상세페이지·SNS",promotion:"광고·프로모션",production:"제작·사양",brand:"브랜드 가이드"},f0=Gi.map(i=>`<article class="archive-card" data-library-group="${i.group}" data-library-title="${dn(i.title+" "+i.source)}">${i.src?yn(i.id,{caption:!1}):`<button class="document-button" data-open-asset="${i.id}"><span>SPECIFICATION</span><strong>제품 사양</strong><span>원본 기록 읽기 ↗</span></button>`}<h4>${dn(i.title)}</h4><p>${dn(Vo[i.group])}${i.credit?" · AI 연출":""}</p></article>`).join("");document.querySelector("#app").innerHTML=`
<div class="draft-banner"><span>PORTFOLIO DRAFT / 01</span><span>전유빈 · 제품과 패키지를 잇는 디자인</span></div>
<header class="header"><a class="site-name" href="#cover">YUBIN JEON<span>DESIGN PORTFOLIO</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">메뉴 열기</button><nav id="main-nav" aria-label="섹션 이동"><a href="#overview">프로젝트</a><a href="#badges">배지</a><a href="#single">패키지</a><a href="#experience">케이스·활용</a><a href="#digital">디지털</a><a href="#production">제작</a></nav></header>
<main id="main">
<section class="section cover" id="cover"><div class="cover-copy"><p class="eyebrow">PRODUCT · PACKAGE · VISUAL COMMUNICATION</p><h1>프린세스 캐치! 티니핑<br/>미스터리 뱃지</h1><p class="cover-subtitle">수집하는 재미를,<br/>하나의 제품 경험으로.</p><p class="cover-role">사내 유일 디자이너로 패키지·배지 디자인,<br/>케이스 컨택과 OEM 제작 소통까지 전담했습니다.</p><a class="text-link" href="#overview">프로젝트 살펴보기 ↓</a><div class="cover-meta"><span>SAMG 공식 라이선스 제품</span><span>디자인 · 전유빈</span></div></div><div class="cover-visual">${yn("A002",{caption:!1,eager:!0})}<p class="caption">싱글팩 · 풀박스 · 리미티드 전체 라인업</p></div></section>
<section class="section" id="overview">${Mn("01","사내 유일 디자이너로,<br/>디자인에서 제작 실무까지.","입사 전 대표와 실장이 기획한 완구를, 신입 입사 후 수습기간을 마치고 본격적으로 제품화했습니다.","PROJECT & MY ROLE")}<div class="overview-grid"><div class="project-intro"><h3>모으고, 붙이고,<br/>케이스에 전시하는 장난감.</h3><p>랜덤 배지를 모으는 즐거움에 자석 놀이와 크리스탈 케이스의 보관·전시 경험을 더한 제품입니다. SAMG Entertainment의 공식 라이선스 캐릭터를 바탕으로 여러 구성과 유통 채널에 맞춰 디자인을 전개했습니다.</p><div class="metrics"><div><strong>6</strong><span>패키지 유형</span></div><div><strong>15</strong><span>패키지 디자인</span></div><div><strong>72</strong><span>배지 라인업 · 제품 표기 기준</span></div></div></div><div class="role-list"><article><span>01</span><div><h3>패키지·배지 디자인 전담</h3><p>패키지 전반의 그래픽과 제품에 들어가는 배지 디자인.</p></div></article><article><span>02</span><div><h3>케이스 공급처 컨택</h3><p>구성품 케이스 컨택과 제품 구성에 필요한 실무 진행.</p></div></article><article><span>03</span><div><h3>OEM 제작사 소통</h3><p>디자인을 실제 제작에 연결하는 제작 커뮤니케이션.</p></div></article><article><span>04</span><div><h3>제품을 보여주는 이미지와 콘텐츠</h3><p>제품 비주얼, 상세페이지·SNS 및 AI 연출 이미지 제작.</p></div></article></div></div><div class="credit-strip"><span><b>선행 기획</b> 입사 전 대표·실장</span><span><b>디자인·제작 소통</b> 전유빈</span><span><b>원작 IP</b> SAMG Entertainment</span></div></section>
<section class="section" id="badges">${Mn("02","작은 배지에서 시작한<br/>수집의 경험.","골드·스파클·샤이닝의 3가지 타입, 제품 표기 기준 각 24종의 라인업입니다.","BADGE DESIGN")}<div class="badge-samples" aria-label="타입별 대표 배지 3D 보기">${Ar.flatMap(i=>Gn.filter(e=>e.type===i.id).slice(0,2)).map(i=>`<button class="badge-sample-button" data-badge-id="${i.id}" aria-label="${i.label} 3D로 크게 보기"><img src="${i.thumbnail}" alt="${i.label} 앞면" loading="lazy" width="384" height="384"/><span>${i.typeLabel} · 3D로 보기 ↗</span></button>`).join("")}</div><p class="badge-intro-copy">같은 타입 안의 반복 캐릭터를 정리해 총 72종으로 모았습니다. 인쇄 여분을 제외한 배지를 누르면 완성선 기준의 앞뒤를 3D로 볼 수 있습니다.</p><div class="badge-catalog-heading"><h3>타입별 배지 컬렉션</h3><p>골드 24종 · 스파클 24종 · 샤이닝 24종</p></div><div class="badge-type-controls segmented" role="group" aria-label="배지 타입 선택">${Ar.map((i,e)=>`<button data-badge-type="${i.id}" aria-pressed="${e===0}" aria-controls="badge-catalog">${i.label} <span>24</span></button>`).join("")}</div><p class="badge-type-description" id="badge-type-description">${Ar[0].description}</p><div class="badge-catalog" id="badge-catalog" aria-label="골드 배지 24종">${Gn.map(i=>`<button class="badge-catalog-item" data-badge-id="${i.id}" data-badge-type-item="${i.type}" ${i.type!=="gold"?"hidden":""} aria-label="${i.label}, 3D 목업 열기"><img src="${i.thumbnail}" alt="${i.label} 앞면" loading="lazy" width="384" height="384"/><span>${i.label} <span aria-hidden="true">↗</span></span></button>`).join("")}</div><details class="work-details badge-source-details" id="badge-source-details"><summary>제작 원본 PDF · 앞면과 공통 뒷면<span>인쇄용 원본 보기 +</span></summary><div class="segmented" role="group" aria-label="배지 제작 시트 면 선택"><button data-badge-side="0" aria-pressed="true">앞면 제작 시트</button><button data-badge-side="1" aria-pressed="false">공통 뒷면 시트</button></div><figure class="work-image badge-sheet"><button class="image-button" data-open-asset="B001" aria-label="원본 벡터 배지 제작 시트 확대"><img id="badge-sheet-image" src="${qt("B001").pages[0]}" alt="배지 제작 시트 앞면" loading="lazy"/><span class="image-expand" aria-hidden="true">↗</span></button><figcaption id="badge-sheet-caption">제공 PDF · 앞면 제작 시트 · 원본 벡터 불러오는 중</figcaption></figure><p class="small-note">제작 원본은 반복과 인쇄 여분을 포함한 그대로 보존했습니다. 위 컬렉션과 3D 목업은 중복을 정리하고 완성선 기준으로 표시합니다.</p></details></section>
<div class="section-divider"><span>PACKAGE DESIGN</span><p>하나의 제품을, 여러 구성과 판매 방식으로.</p></div>
${u0.map(d0).join("")}
<section class="section" id="experience">${Mn("09","꺼낸 뒤의 경험까지.","배지를 보호하고, 색상을 고르고, 생활 공간에 전시하는 구성입니다.","CRYSTAL CASE & PLAY")}${ri(["A079","A078","A080"],"three-col")}<div class="experience-notes"><article><span>KEEP</span><h3>안전하게 보관하기</h3><p>투명 케이스 안에 배지를 넣고, 수집한 캐릭터를 꺼내볼 수 있는 구성.</p></article><article><span>DISPLAY</span><h3>내 공간에 전시하기</h3><p>핑크·블루·퍼플 케이스로 패키지 밖에서도 이어지는 제품의 분위기.</p></article><article><span>PLAY</span><h3>자석으로 놀이하기</h3><p>보드나 자석이 붙는 공간에서 배지를 옮기며 즐기는 활용.</p></article></div>${ri(["A062","A064","A065"],"three-col")}<p class="ai-disclosure">위 케이스 및 활용 이미지는 ChatGPT 이미지 생성 후 Adobe Photoshop으로 후보정한 AI 연출 이미지입니다.</p></section>
<section class="section" id="usage">${Mn("10","사용하는 장면을 설계하다.","제품의 보관·전시·놀이를 생활 속 장면으로 보여주는 이미지 작업입니다.","AI IMAGE DIRECTION")}<div class="ai-credit"><strong>ChatGPT 이미지 생성 × Adobe Photoshop 후보정</strong><p>후기·사용 장면은 100% ChatGPT 이미지 생성 기능으로 제작하고 Photoshop으로 후보정했습니다. 실제 고객 후기나 실촬영 사진이 아닌, 제품 사용과 후기 상황을 연출한 콘셉트 이미지입니다.</p></div>${ri(["A061","A069","A071","A073","A076","A030"],"usage-gallery")}<details class="work-details"><summary>다른 공간과 사용 장면<span>추가 연출 이미지 +</span></summary>${ri(["A057","A058","A059","A060","A063","A066","A067","A068","A070","A072","A074","A075","A077"],"three-col")}</details><div class="method-strip"><div><span>01 / 장면 설정</span><p>보관·전시·놀이의 맥락</p></div><div><span>02 / 이미지 생성</span><p>ChatGPT로 상황 시각화</p></div><div><span>03 / 후보정</span><p>Photoshop으로 최종 이미지 정리</p></div></div></section>
<section class="section" id="digital">${Mn("11","제품을 이해하고,<br/>관심을 이어가는 콘텐츠.","상세페이지, 인스타그램 카드뉴스, 프로모션으로 제품의 구성과 활용을 전달했습니다.","DIGITAL COMMUNICATION")}<article class="digital-row"><div class="digital-copy"><p class="eyebrow">01 / PRODUCT DETAIL PAGE</p><h3>전체 구성을 이해시키는<br/>한 장의 긴 흐름.</h3><p>제품 소개부터 팩별 구성, 배지 타입, 자석 활용, 케이스 전시와 제품 정보까지 연결했습니다.</p><ul class="plain-list"><li>패키지마다 다른 구성 수량을 비교</li><li>수집·놀이·보관의 사용 장면 제시</li><li>주의사항과 제품 정보를 마지막에 정리</li></ul><button class="outline-button" data-open-asset="A029">상세페이지 전체 확대 ↗</button><p class="small-note">휴대폰 화면 안에서 스크롤해 전체를 볼 수 있습니다. 포함된 후기·사용 장면은 AI 연출 이미지입니다.</p></div><div class="phone-position"><div class="phone-mockup"><div class="phone-speaker" aria-hidden="true"></div><div class="phone-screen detail-screen" tabindex="0" role="region" aria-label="상품 상세페이지 전체, 휴대폰 안에서 세로 스크롤"><img src="${qt("A029").src}" alt="티니핑 미스터리 뱃지 상품 상세페이지 전체" loading="lazy" width="${qt("A029").width}" height="${qt("A029").height}"/></div><div class="phone-home" aria-hidden="true"></div></div><p class="caption">화면 안에서 스크롤 ↓</p></div></article><article class="digital-row social-row"><div class="digital-copy"><p class="eyebrow">02 / SOCIAL CONTENT</p><h3>소개에서 활용으로,<br/>카드 한 장씩 이어지는 이야기.</h3><p>제품 소개 카드, 출시 이벤트 안내, 후기 콘셉트 카드를 목적에 맞춰 묶었습니다. 원본 이미지의 비율을 유지해 작은 화면에서도 디자인을 살펴볼 수 있습니다.</p><div class="social-groups" role="group" aria-label="SNS 콘텐츠 묶음"><button data-social-group="intro" aria-pressed="true">제품·활용</button><button data-social-group="event" aria-pressed="false">출시 이벤트</button><button data-social-group="reviews" aria-pressed="false">후기 콘셉트</button></div><p id="social-description" class="small-note">싱글팩 소개 · 제품 활용 · 다이어리 꾸미기.</p><p class="small-note">콘텐츠별 검토용 묶음이며 실제 게시 순서를 의미하지 않습니다. 후기 콘셉트 카드의 사용 장면은 AI 생성·후보정 이미지입니다.</p></div><div class="phone-position"><div class="phone-mockup"><div class="phone-speaker" aria-hidden="true"></div><div class="phone-screen social-screen"><div class="social-account">TEENIEPING <span>DESIGN CONTENT</span></div><button class="social-image-button" id="social-image-open" data-open-asset="A037" aria-label="현재 SNS 카드 크게 보기"><img id="social-image" src="${qt("A037").src}" alt="싱글팩 소개 카드" loading="lazy"/></button><div class="social-card-caption"><strong id="social-title">싱글팩 소개 카드</strong><span id="social-credit">제품 소개 콘텐츠</span></div></div><div class="phone-home" aria-hidden="true"></div></div><div class="carousel-controls"><button id="slide-prev" aria-label="이전 SNS 카드">←</button><span id="slide-count" aria-live="polite">1 / 3</span><button id="slide-next" aria-label="다음 SNS 카드">→</button></div></div></article><div class="promotion-heading"><p class="eyebrow">03 / POSTER & PROMOTION</p><h3>구매 접점에 맞춘 비주얼 확장.</h3></div>${ri(["A038","A048"],"poster-grid")}</section>
<section class="section" id="production">${Mn("12","디자인 파일을 넘어,<br/>제작을 연결하는 역할.","상품 패키지와 배지, 구성품 케이스 컨택, OEM 제작사 소통을 함께 맡았습니다.","PRODUCTION & BRAND APPLICATION")}<div class="production-grid"><article><span class="eyebrow">구성품 포장</span><h3>크리스탈 케이스 보호 파우치</h3>${yn("A055")}<p>본품 외에 구성품을 보호하는 포장까지 제품 정보와 브랜드 표기를 연결했습니다.</p></article><article><span class="eyebrow">물류 포장</span><h3>카톤박스 인쇄 그래픽</h3>${yn("A054")}<p>개별 제품 패키지에서 운송용 외포장까지 이어지는 인쇄 그래픽 자료입니다.</p></article></div><div class="brand-application"><div><p class="eyebrow">LICENSED BRAND</p><h3>공식 IP의 기준 안에서.</h3><p>공식 로고·카피라이트 자료를 바탕으로 제품과 매체에 적용했습니다. 원작 캐릭터와 IP는 SAMG Entertainment의 권리이며, 이 포트폴리오는 개인의 디자인 담당 범위를 정리한 작업 사례입니다.</p><div class="reference-links"><button data-open-asset="A004">로고·카피라이트 가이드 6p ↗</button><button data-open-asset="A001">제공 카피라이트 자료 ↗</button><button data-open-asset="A081">제공 제품 사양 ↗</button></div></div><figure class="brand-logo"><img src="${qt("A003").src}" alt="공식 프린세스 캐치! 티니핑 로고" loading="lazy"/><figcaption>© SAMG. All rights reserved.</figcaption></figure></div><details class="work-details"><summary>목업 규격과 표기 기준<span>제공 사양 / 추정 치수 +</span></summary><div class="table-scroll"><table><thead><tr><th>유형</th><th>가로 × 세로 × 깊이 (mm)</th><th>기준</th></tr></thead><tbody><tr><td>싱글팩</td><td>120 × 140 × 40</td><td>제공 사양</td></tr><tr><td>풀박스</td><td>127 × 146 × 125</td><td>인수인계 기록</td></tr><tr><td>리미티드</td><td>209 × 146 × 125</td><td>인수인계 기록</td></tr><tr><td>다이소 딱지</td><td>약 200 × 245 × 4</td><td>배지 지름·그래픽 비율로 추정</td></tr><tr><td>파우치 디스플레이</td><td>약 250 × 146 × 127</td><td>20개 수납·전개도 비율로 추정</td></tr><tr><td>딱지 파우치</td><td>120 × 130 × 약 12</td><td>가로·세로는 제공 사양, 두께 추정</td></tr></tbody></table></div><p class="small-note">3D 목업은 포트폴리오 검토용으로 재구성했습니다. 추정 치수는 실측·발주 규격이 아니며, 다이소 팩 후면은 자료가 없어 무지로 표시했습니다.</p></details></section>
<section class="section closing" id="closing">${Mn("13","하나의 IP를,<br/>일관된 제품 경험으로.","배지에서 패키지, 보관과 놀이, 판매 콘텐츠까지 연결한 작업입니다.","DELIVERED SCOPE")}<div class="closing-grid">${yn("A021",{caption:!1})}<div><h3>전유빈 · 디자인 전담</h3><ul class="closing-scope"><li>전반적인 패키지·배지 디자인</li><li>구성품 케이스 컨택</li><li>OEM 제작사 커뮤니케이션</li><li>상세페이지·SNS·프로모션 비주얼</li><li>ChatGPT 이미지 생성·Photoshop 후보정</li></ul><div class="closing-credit"><p>선행 기획: 입사 전 대표·실장</p><p>원작 IP: SAMG Entertainment</p><p>© SAMG. All rights reserved.</p></div></div></div></section>
<section class="section archive" id="archive"><details id="asset-library"><summary><div><p class="eyebrow">WORK ARCHIVE</p><h2>전체 작업 자료</h2><p>대표 작업 외의 구도·버전과 제공 제작 자료까지 모았습니다.</p></div><span>${Gi.length}개 자료 펼치기 +</span></summary><div class="archive-tools"><label>분류<select id="library-filter"><option value="all">전체</option>${Object.entries(Vo).map(([i,e])=>`<option value="${i}">${e}</option>`).join("")}</select></label><label class="archive-search">검색<input id="library-search" type="search" placeholder="제품명 또는 작업명"/></label><span id="library-count" aria-live="polite">${Gi.length}개 자료</span></div><div class="archive-grid">${f0}</div><p id="library-empty" hidden>검색 결과가 없습니다. 다른 단어로 찾아보세요.</p><p class="small-note">제공 ZIP의 84개 파일과 별도 배지 제작 PDF를 모두 연결했습니다. 후기·사용 장면은 AI 연출 작업입니다.</p></details></section>
</main><footer class="footer"><a href="#cover">YUBIN JEON</a><p>티니핑 미스터리 뱃지 · 포트폴리오 초안<br/>원작 IP © SAMG. All rights reserved.</p><a href="#cover">처음으로 ↑</a></footer>
<dialog id="asset-dialog" aria-labelledby="asset-dialog-title"><div class="dialog-toolbar"><div><span id="asset-dialog-category"></span><h2 id="asset-dialog-title"></h2></div><button id="asset-dialog-close" aria-label="이미지 확대 창 닫기">닫기 ×</button></div><div class="dialog-navigation"><button id="asset-prev" aria-label="같은 분류의 이전 자료">← 이전</button><span id="asset-dialog-credit"></span><button id="asset-next" aria-label="같은 분류의 다음 자료">다음 →</button></div><div class="dialog-content" id="asset-dialog-content"></div><p class="dialog-source" id="asset-dialog-source"></p></dialog>
<dialog id="badge-dialog" aria-labelledby="badge-dialog-title"><div class="dialog-toolbar"><div><span>BADGE · 3D MOCKUP</span><h2 id="badge-dialog-title">배지 앞뒤 3D 목업</h2></div><button id="badge-dialog-close" aria-label="배지 3D 목업 닫기">닫기 ×</button></div><div id="badge-viewer"><div class="badge-model-top"><strong class="badge-selected-title"></strong><span>완성 지름 54 mm · 두께 2 mm</span></div><div class="badge-3d-stage" tabindex="0" role="group" aria-label="배지 3D 모델. 드래그 또는 방향키로 회전하고 휠로 확대할 수 있습니다."></div><p class="badge-3d-status" aria-live="polite">인쇄면을 불러오는 중</p><div class="badge-model-controls"><div role="group" aria-label="배지 시점"><button data-badge-view="front">앞면</button><button data-badge-view="back">뒷면</button><button data-badge-view="edge">옆면·두께</button><button data-badge-view="reset">초기 시점</button></div><div role="group" aria-label="배지 확대 배율"><button data-badge-zoom="out" aria-label="배지 축소">−</button><span class="badge-zoom-value">100%</span><button data-badge-zoom="in" aria-label="배지 확대">+</button></div></div><div class="badge-model-navigation"><button data-badge-next="-1">← 이전 배지</button><span>인쇄 여분 3mm 제외 · 앞·뒷면 완성선 기준</span><button data-badge-next="1">다음 배지 →</button></div></div></dialog>`;const oi=document.querySelector(".menu-toggle");function Wl(){oi.setAttribute("aria-expanded","false"),oi.textContent="메뉴 열기",document.querySelector(".header").classList.remove("menu-open")}oi.addEventListener("click",()=>{const i=oi.getAttribute("aria-expanded")!=="true";oi.setAttribute("aria-expanded",String(i)),oi.textContent=i?"메뉴 닫기":"메뉴 열기",document.querySelector(".header").classList.toggle("menu-open",i)});document.querySelectorAll("nav a").forEach(i=>i.addEventListener("click",Wl));document.addEventListener("keydown",i=>{i.key==="Escape"&&Wl()});document.querySelectorAll(".package-viewer-mount").forEach(i=>Hl(i,Go.filter(e=>e.id===i.dataset.model)));document.querySelectorAll(".design-selector").forEach(i=>i.addEventListener("click",e=>{const t=e.target.closest("button[data-design]");if(!t||t.getAttribute("aria-pressed")==="true")return;const n=i.closest(".package-section"),r=n.querySelector(".package-viewer-mount"),s=r.viewer.getState();r.viewer.destroy();const o=document.createElement("div");o.id=r.id,o.className=r.className,o.dataset.package=r.dataset.package,o.dataset.model=t.dataset.design,r.replaceWith(o),Hl(o,Go.filter(c=>c.id===t.dataset.design),s),i.querySelectorAll("button").forEach(c=>c.setAttribute("aria-pressed",String(c===t)));const a=h0[t.dataset.design];a&&(n.querySelector("[data-product-visual]").innerHTML=yn(a,{cls:n.id==="display"?"dieline-hero":""}))}));let $a=0;async function Xl(i){const e=++$a;document.querySelectorAll("[data-badge-side]").forEach(t=>t.setAttribute("aria-pressed",String(Number(t.dataset.badgeSide)===i)));try{const t=await zo("B001",i);if(e!==$a)return;const n=document.querySelector("#badge-sheet-image");n.src=t.url,n.dataset.vector="true",n.alt=i?"배지 제작 시트 공통 뒷면":"배지 제작 시트 앞면",document.querySelector("#badge-sheet-caption").textContent=`제공 PDF · ${i?"공통 뒷면":"앞면"} 제작 시트 · 원본 벡터`}catch{document.querySelector("#badge-sheet-caption").textContent="원본 벡터를 불러오지 못했습니다. 다시 선택해주세요."}}document.querySelectorAll("[data-badge-side]").forEach(i=>i.addEventListener("click",()=>Xl(Number(i.dataset.badgeSide))));const ql=new IntersectionObserver(i=>{i.some(e=>e.isIntersecting)&&(Xl(0),ql.disconnect())},{rootMargin:"400px"});ql.observe(document.querySelector("#badge-sheet-image"));function Yl(i){const e=Ar.find(t=>t.id===i);e&&(document.querySelectorAll("[data-badge-type]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.badgeType===i))),document.querySelectorAll(".badge-catalog-item").forEach(t=>t.hidden=t.dataset.badgeTypeItem!==i),document.querySelector("#badge-type-description").textContent=e.description,document.querySelector("#badge-catalog").setAttribute("aria-label",`${e.label} 배지 24종`))}document.querySelectorAll("[data-badge-type]").forEach(i=>i.onclick=()=>Yl(i.dataset.badgeType));const Cr=document.querySelector("#badge-dialog");let Ur=null,Zl=null,Pr=Gn[0].id;function Kl(i){const e=Gn.find(t=>t.id===i);e&&(Pr=i,Yl(e.type),Cr.open||(Zl=document.activeElement,Cr.showModal(),document.body.classList.add("dialog-open"),Ur=l0(document.querySelector("#badge-viewer"),t=>{Pr=t.id})),Ur.select(i))}document.addEventListener("click",i=>{const e=i.target.closest("[data-badge-id]");e&&Kl(e.dataset.badgeId)});document.querySelectorAll("[data-badge-next]").forEach(i=>i.onclick=()=>{const e=Gn.find(r=>r.id===Pr),t=Gn.filter(r=>r.type===e.type),n=t.findIndex(r=>r.id===Pr);Kl(t[(n+Number(i.dataset.badgeNext)+t.length)%t.length].id)});document.querySelector("#badge-dialog-close").onclick=()=>Cr.close();Cr.addEventListener("close",()=>{Ur?.destroy(),Ur=null,document.body.classList.remove("dialog-open"),Zl?.focus()});const p0={intro:{ids:["A037","A035","A036"],description:"싱글팩 소개 · 제품 활용 · 다이어리 꾸미기."},event:{ids:["A031","A032","A033","A034"],description:"출시 이벤트 표지부터 배지·케이스 소개와 참여 안내까지."},reviews:{ids:["A025","A026","A027","A028"],description:"ChatGPT 생성과 Photoshop 후보정으로 제작한 후기 콘셉트 카드입니다. 실제 고객 후기가 아닙니다."}};let bo="intro",Ti=0;function Ho(i=0){const e=p0[bo];Ti=(Ti+i+e.ids.length)%e.ids.length;const t=qt(e.ids[Ti]);document.querySelector("#social-image").src=t.src,document.querySelector("#social-image").alt=t.title,document.querySelector("#social-image-open").dataset.openAsset=t.id,document.querySelector("#social-title").textContent=t.title,document.querySelector("#social-credit").textContent=t.credit?"AI 연출 · ChatGPT 생성 / Photoshop 후보정":bo==="event"?"출시 이벤트 안내 디자인":"제품 소개·활용 콘텐츠",document.querySelector("#slide-count").textContent=`${Ti+1} / ${e.ids.length}`,document.querySelector("#social-description").textContent=e.description}document.querySelectorAll("[data-social-group]").forEach(i=>i.addEventListener("click",()=>{bo=i.dataset.socialGroup,Ti=0,Ho(),document.querySelectorAll("[data-social-group]").forEach(e=>e.setAttribute("aria-pressed",String(e===i)))}));document.querySelector("#slide-prev").onclick=()=>Ho(-1);document.querySelector("#slide-next").onclick=()=>Ho(1);const Kt=document.querySelector("#asset-dialog");let Jl=null,jl=null,Rr=0;async function Ql(i){const e=qt(i);if(!e)return;const t=++Rr;Jl=i,document.querySelector("#asset-dialog-title").textContent=e.title,document.querySelector("#asset-dialog-category").textContent=Vo[e.group],document.querySelector("#asset-dialog-credit").textContent=e.credit?"AI 연출 · ChatGPT 생성 / Adobe Photoshop 후보정":"",document.querySelector("#asset-dialog-source").textContent=`제공 자료: ${e.source}`;const n=document.querySelector("#asset-dialog-content");if(n.innerHTML=e.kind==="text"?`<div class="source-text"><p>제공된 원본 사양 기록입니다. 단위와 중량 등이 모호한 항목은 최종 확정 사양으로 인용하지 않았습니다.</p><pre>${dn(e.text)}</pre></div>`:Er[i]?'<p class="vector-loading" role="status">PDF의 원본 벡터를 불러오는 중…</p>':(e.pages.length?e.pages:[e.src]).map((r,s)=>`<figure><img src="${r}" alt="${dn(e.title)}${e.pages.length?" · "+(s+1)+"페이지":""}"/>${e.pages.length?`<figcaption>${s+1} / ${e.pages.length}</figcaption>`:""}</figure>`).join(""),n.scrollTop=0,Kt.open||(jl=document.activeElement,Kt.showModal(),document.body.classList.add("dialog-open")),Er[i])try{const r=await Promise.all(Er[i].pages.map((o,a)=>zo(i,a)));if(t!==Rr||!Kt.open)return;n.innerHTML=`<div class="vector-zoom-controls"><span>PDF 원본 벡터 확대</span><button data-vector-zoom="out" aria-label="PDF 축소">−</button><output id="vector-zoom-value">100%</output><button data-vector-zoom="in" aria-label="PDF 확대">+</button><button data-vector-zoom="reset">화면에 맞춤</button></div><div class="vector-pages">${r.map((o,a)=>`<figure><img src="${o.url}" data-vector-source="${i}" alt="${dn(e.title)} · ${a+1}페이지"/><figcaption>${a+1} / ${r.length}</figcaption></figure>`).join("")}</div>`;let s=1;n.querySelectorAll("[data-vector-zoom]").forEach(o=>o.onclick=()=>{s=o.dataset.vectorZoom==="reset"?1:Math.max(.5,Math.min(4,s*(o.dataset.vectorZoom==="in"?1.5:1/1.5))),n.querySelector(".vector-pages").style.width=s*100+"%",n.querySelector("#vector-zoom-value").textContent=Math.round(s*100)+"%"})}catch{t===Rr&&Kt.open&&(n.innerHTML='<p role="alert">원본 벡터를 불러오지 못했습니다. 창을 닫고 다시 열어주세요.</p>')}}function $l(){Kt.close()}document.addEventListener("click",i=>{const e=i.target.closest("[data-open-asset]");e&&Ql(e.dataset.openAsset)});document.querySelector("#asset-dialog-close").onclick=$l;Kt.addEventListener("close",()=>{Rr++,document.body.classList.remove("dialog-open"),jl?.focus()});Kt.addEventListener("click",i=>{if(i.target===Kt){const e=Kt.getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&$l()}});function Dr(i){const e=qt(Jl),t=Gi.filter(r=>r.group===e.group),n=t.findIndex(r=>r.id===e.id);Ql(t[(n+i+t.length)%t.length].id)}document.querySelector("#asset-prev").onclick=()=>Dr(-1);document.querySelector("#asset-next").onclick=()=>Dr(1);Kt.addEventListener("keydown",i=>{i.key==="ArrowRight"&&(i.preventDefault(),Dr(1)),i.key==="ArrowLeft"&&(i.preventDefault(),Dr(-1))});function ec(){const i=document.querySelector("#library-filter").value,e=document.querySelector("#library-search").value.trim().toLocaleLowerCase();let t=0;document.querySelectorAll(".archive-card").forEach(n=>{const r=(i==="all"||n.dataset.libraryGroup===i)&&n.dataset.libraryTitle.toLocaleLowerCase().includes(e);n.hidden=!r,r&&t++}),document.querySelector("#library-count").textContent=t+"개 자료",document.querySelector("#library-empty").hidden=t>0}document.querySelector("#library-filter").onchange=ec;document.querySelector("#library-search").oninput=ec;
