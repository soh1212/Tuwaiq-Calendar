
(()=>{var yu="170";var Vd=0,Dh=1,Gd=2;var zf=1,Wd=2,Oi=3,rs=0,Yn=1,ln=2,ss=0,gr=1,fa=2,Lh=3,Uh=4,Xd=5,Rs=100,qd=101,Yd=102,Kd=103,Zd=104,Jd=200,$d=201,jd=202,Qd=203,sc=204,rc=205,tp=206,ep=207,np=208,ip=209,sp=210,rp=211,ap=212,op=213,lp=214,ac=0,oc=1,lc=2,yr=3,cc=4,uc=5,hc=6,fc=7,Hf=0,cp=1,up=2,Ai=0,hp=1,fp=2,dp=3,pp=4,mp=5,gp=6,vp=7;var kf=300,Mr=301,br=302,dc=303,pc=304,Ko=306,oi=1e3,Is=1001,mc=1002,Fn=1003,xp=1004;var Ka=1005;var Ne=1006,Tl=1007;var _i=1008;var li=1009,Vf=1010,Gf=1011,da=1012,Mu=1013,Ds=1014,ei=1015,An=1016,bu=1017,Su=1018,Sr=1020,Wf=35902,Xf=1021,qf=1022,Je=1023,Yf=1024,Kf=1025,vr=1026,Er=1027,Fs=1028,Eu=1029,Zf=1030,wu=1031;var Tu=1033,So=33776,Eo=33777,wo=33778,To=33779,gc=35840,vc=35841,xc=35842,_c=35843,yc=36196,Mc=37492,bc=37496,Sc=37808,Ec=37809,wc=37810,Tc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Ic=37816,Dc=37817,Lc=37818,Uc=37819,Fc=37820,Nc=37821,Ao=36492,Bc=36494,Oc=36495,Jf=36283,zc=36284,Hc=36285,kc=36286;var Ro=2300,Vc=2301,Al=2302,Fh=2400,Nh=2401,Bh=2402;var _p=3200,yp=3201;var Mp=0,bp=1,xi="",qn="srgb",us="srgb-linear",Zo="linear",Ve="srgb";var js=7680;var Oh=519,Sp=512,Ep=513,wp=514,$f=515,Tp=516,Ap=517,Rp=518,Cp=519,zh=35044;var Hh="300 es",ki=2e3,Co=2001,as=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=1234567,ca=Math.PI/180,pa=180/Math.PI;function Ir(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function yn(i,t,e){return Math.max(t,Math.min(e,i))}function Au(i,t){return(i%t+t)%t}function Pp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ip(i,t,e){return i!==t?(e-i)/(t-i):0}function ua(i,t,e){return(1-e)*i+e*t}function Dp(i,t,e,n){return ua(i,t,1-Math.exp(-e*n))}function Lp(i,t=1){return t-Math.abs(Au(i,t*2)-t)}function Up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bp(i,t){return i+Math.random()*(t-i)}function Op(i){return i*(.5-Math.random())}function zp(i){i!==void 0&&(kh=i);let t=kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(i){return i*ca}function kp(i){return i*pa}function Vp(i){return(i&i-1)===0&&i!==0}function Gp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bn={DEG2RAD:ca,RAD2DEG:pa,generateUUID:Ir,clamp:yn,euclideanModulo:Au,mapLinear:Pp,inverseLerp:Ip,lerp:ua,damp:Dp,pingpong:Lp,smoothstep:Up,smootherstep:Fp,randInt:Np,randFloat:Bp,randFloatSpread:Op,seededRandom:zp,degToRad:Hp,radToDeg:kp,isPowerOfTwo:Vp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:Xp,normalize:kn,denormalize:dr},xe=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(yn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],M=s[0],m=s[3],h=s[6],R=s[1],A=s[4],S=s[7],k=s[2],L=s[5],F=s[8];return r[0]=a*M+o*R+l*k,r[3]=a*m+o*A+l*L,r[6]=a*h+o*S+l*F,r[1]=c*M+u*R+d*k,r[4]=c*m+u*A+d*L,r[7]=c*h+u*S+d*F,r[2]=f*M+p*R+g*k,r[5]=f*m+p*A+g*L,r[8]=f*h+p*S+g*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Rl.makeScale(t,e)),this}rotate(t){return this.premultiply(Rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Rl=new ce;function jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qp(){let i=Po("canvas");return i.style.display="block",i}var Vh={};function oa(i){i in Vh||(Vh[i]=!0,console.warn(i))}function Yp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Kp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ie={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ve&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ve&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?Zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gh=[.64,.33,.3,.6,.15,.06],Wh=[.2126,.7152,.0722],Xh=[.3127,.329],qh=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ie.define({[us]:{primaries:Gh,whitePoint:Xh,transfer:Zo,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:Gh,whitePoint:Xh,transfer:Ve,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Wh,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});var Qs,Gc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qs===void 0&&(Qs=Po("canvas")),Qs.width=t.width,Qs.height=t.height;let n=Qs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Po("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jp=0,Io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Ir(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cl(s[a].image)):r.push(Cl(s[a]))}else r=Cl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $p=0,Nn=class i extends as{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Is,s=Is,r=Ne,a=_i,o=Je,l=li,c=i.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ir(),this.name="",this.source=new Io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case Is:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case Is:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=kf;Nn.DEFAULT_ANISOTROPY=1;var sn=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],M=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,S=(p+1)/2,k=(h+1)/2,L=(u+f)/4,F=(d+M)/4,U=(g+m)/4;return A>S&&A>k?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=L/n,r=F/n):S>k?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=L/s,r=U/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=F/r,s=U/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(d-M)/R,this.z=(f-u)/R,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wc=class extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new sn(0,0,t,e),this.scissorTest=!1,this.viewport=new sn(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Do=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=M;return}if(d!==M||l!==f||c!==p||u!==g){let m=1-o,h=l*f+c*p+u*g+d*M,R=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){let k=Math.sqrt(A),L=Math.atan2(k,h*R);m=Math.sin(m*L)/k,o=Math.sin(o*L)/k}let S=o*R;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,d=d*m+M*S,m===1-o){let k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*p-c*f,t[e+1]=l*g+u*f+c*d-o*p,t[e+2]=c*g+u*p+o*f-l*d,t[e+3]=u*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pl.copy(this).projectOnVector(t),this.sub(Pl)}reflect(t){return this.sub(Pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(yn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pl=new V,Kh=new os,Gi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),Ja.subVectors(this.max,ta),tr.subVectors(t.a,ta),er.subVectors(t.b,ta),nr.subVectors(t.c,ta),ji.subVectors(er,tr),Qi.subVectors(nr,er),Ms.subVectors(tr,nr);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-Ms.z,Ms.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,Ms.z,0,-Ms.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-Ms.y,Ms.x,0];return!Il(e,tr,er,nr,Ja)||(e=[1,0,0,0,1,0,0,0,1],!Il(e,tr,er,nr,Ja))?!1:($a.crossVectors(ji,Qi),e=[$a.x,$a.y,$a.z],Il(e,tr,er,nr,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Li=[new V,new V,new V,new V,new V,new V,new V,new V],mi=new V,Za=new Gi,tr=new V,er=new V,nr=new V,ji=new V,Qi=new V,Ms=new V,ta=new V,Ja=new V,$a=new V,bs=new V;function Il(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bs.fromArray(i,r);let o=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=t.dot(bs),c=e.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var jp=new Gi,ea=new V,Dl=new V,yi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);let e=ea.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ea,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(Dl)),this.expandByPoint(ea.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ui=new V,Ll=new V,ja=new V,ts=new V,Ul=new V,Qa=new V,Fl=new V,ma=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ll.copy(t).add(e).multiplyScalar(.5),ja.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(Ll);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ja),o=ts.dot(this.direction),l=-ts.dot(ja),c=ts.lengthSq(),u=Math.abs(1-a*a),d,f,p,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){let M=1/u;d*=M,f*=M,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ll).addScaledVector(ja,f),p}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,s,r){Ul.subVectors(e,t),Qa.subVectors(n,t),Fl.crossVectors(Ul,Qa);let a=this.direction.dot(Fl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ts.subVectors(this.origin,t);let l=o*this.direction.dot(Qa.crossVectors(ts,Qa));if(l<0)return null;let c=o*this.direction.dot(Ul.cross(ts));if(c<0||l+c>a)return null;let u=-o*ts.dot(Fl);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(t,e,n,s,r,a,o,l,c,u,d,f,p,g,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,p,g,M,m)}set(t,e,n,s,r,a,o,l,c,u,d,f,p,g,M,m){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ir.setFromMatrixColumn(t,0).length(),r=1/ir.setFromMatrixColumn(t,1).length(),a=1/ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*d,g=o*u,M=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,g=c*u,M=c*d;e[0]=f+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,g=c*u,M=c*d;e[0]=f-M*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,p=a*d,g=o*u,M=o*d;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+M,e[1]=l*d,e[5]=M*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=M-f*d,e[8]=g*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+g,e[10]=f-M*d}else if(t.order==="XZY"){let f=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+M,e[5]=a*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*u,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qp,t,tm)}lookAt(t,e,n){let s=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),es.crossVectors(n,Qn),es.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),es.crossVectors(n,Qn)),es.normalize(),to.crossVectors(Qn,es),s[0]=es.x,s[4]=to.x,s[8]=Qn.x,s[1]=es.y,s[5]=to.y,s[9]=Qn.y,s[2]=es.z,s[6]=to.z,s[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],M=n[6],m=n[10],h=n[14],R=n[3],A=n[7],S=n[11],k=n[15],L=s[0],F=s[4],U=s[8],E=s[12],b=s[1],N=s[5],G=s[9],K=s[13],et=s[2],ft=s[6],it=s[10],_t=s[14],J=s[3],Ct=s[7],Dt=s[11],Zt=s[15];return r[0]=a*L+o*b+l*et+c*J,r[4]=a*F+o*N+l*ft+c*Ct,r[8]=a*U+o*G+l*it+c*Dt,r[12]=a*E+o*K+l*_t+c*Zt,r[1]=u*L+d*b+f*et+p*J,r[5]=u*F+d*N+f*ft+p*Ct,r[9]=u*U+d*G+f*it+p*Dt,r[13]=u*E+d*K+f*_t+p*Zt,r[2]=g*L+M*b+m*et+h*J,r[6]=g*F+M*N+m*ft+h*Ct,r[10]=g*U+M*G+m*it+h*Dt,r[14]=g*E+M*K+m*_t+h*Zt,r[3]=R*L+A*b+S*et+k*J,r[7]=R*F+A*N+S*ft+k*Ct,r[11]=R*U+A*G+S*it+k*Dt,r[15]=R*E+A*K+S*_t+k*Zt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],M=t[7],m=t[11],h=t[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+M*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-n*a*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],M=t[13],m=t[14],h=t[15],R=d*m*c-M*f*c+M*l*p-o*m*p-d*l*h+o*f*h,A=g*f*c-u*m*c-g*l*p+a*m*p+u*l*h-a*f*h,S=u*M*c-g*d*c+g*o*p-a*M*p-u*o*h+a*d*h,k=g*d*l-u*M*l-g*o*f+a*M*f+u*o*m-a*d*m,L=e*R+n*A+s*S+r*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=R*F,t[1]=(M*f*r-d*m*r-M*s*p+n*m*p+d*s*h-n*f*h)*F,t[2]=(o*m*r-M*l*r+M*s*c-n*m*c-o*s*h+n*l*h)*F,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*F,t[4]=A*F,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*h+e*f*h)*F,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*h-e*l*h)*F,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*F,t[8]=S*F,t[9]=(g*d*r-u*M*r-g*n*p+e*M*p+u*n*h-e*d*h)*F,t[10]=(a*M*r-g*o*r+g*n*c-e*M*c-a*n*h+e*o*h)*F,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*p-e*o*p)*F,t[12]=k*F,t[13]=(u*M*s-g*d*s+g*n*f-e*M*f-u*n*m+e*d*m)*F,t[14]=(g*o*s-a*M*s-g*n*l+e*M*l+a*n*m-e*o*m)*F,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*f+e*o*f)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,g=r*d,M=a*u,m=a*d,h=o*d,R=l*c,A=l*u,S=l*d,k=n.x,L=n.y,F=n.z;return s[0]=(1-(M+h))*k,s[1]=(p+S)*k,s[2]=(g-A)*k,s[3]=0,s[4]=(p-S)*L,s[5]=(1-(f+h))*L,s[6]=(m+R)*L,s[7]=0,s[8]=(g+A)*F,s[9]=(m-R)*F,s[10]=(1-(f+M))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ir.set(s[0],s[1],s[2]).length(),a=ir.set(s[4],s[5],s[6]).length(),o=ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gi.copy(this);let c=1/r,u=1/a,d=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,e.setFromRotationMatrix(gi),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ki){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(o===ki)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Co)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ki){let l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(a-r),f=(e+t)*c,p=(n+s)*u,g,M;if(o===ki)g=(a+r)*d,M=-2*d;else if(o===Co)g=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ir=new V,gi=new ze,Qp=new V(0,0,0),tm=new V(1,1,1),es=new V,to=new V,Qn=new V,Zh=new ze,Jh=new os,Wi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},em=0,$h=new V,sr=new os,Fi=new ze,eo=new V,na=new V,nm=new V,im=new os,jh=new V(1,0,0),Qh=new V(0,1,0),tf=new V(0,0,1),ef={type:"added"},sm={type:"removed"},rr={type:"childadded",child:null},Nl={type:"childremoved",child:null},Gn=class i extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Wi,n=new os,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new ce}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,e){return sr.setFromAxisAngle(t,e),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(na,eo,this.up):Fi.lookAt(eo,na,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Fi),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),rr.child=t,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sm),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,t,nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Gn.DEFAULT_UP=new V(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=new V,Ni=new V,Bl=new V,Bi=new V,ar=new V,or=new V,nf=new V,Ol=new V,zl=new V,Hl=new V,kl=new sn,Vl=new sn,Gl=new sn,Cs=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vi.subVectors(t,e),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vi.subVectors(s,e),Ni.subVectors(n,e),Bl.subVectors(t,e);let a=vi.dot(vi),o=vi.dot(Ni),l=vi.dot(Bl),c=Ni.dot(Ni),u=Ni.dot(Bl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return kl.setScalar(0),Vl.setScalar(0),Gl.setScalar(0),kl.fromBufferAttribute(t,e),Vl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(kl,r.x),a.addScaledVector(Vl,r.y),a.addScaledVector(Gl,r.z),a}static isFrontFacing(t,e,n,s){return vi.subVectors(n,e),Ni.subVectors(t,e),vi.cross(Ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),vi.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ar.subVectors(s,n),or.subVectors(r,n),Ol.subVectors(t,n);let l=ar.dot(Ol),c=or.dot(Ol);if(l<=0&&c<=0)return e.copy(n);zl.subVectors(t,s);let u=ar.dot(zl),d=or.dot(zl);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ar,a);Hl.subVectors(t,r);let p=ar.dot(Hl),g=or.dot(Hl);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(or,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return nf.subVectors(r,s),o=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(nf,o);let h=1/(m+M+f);return a=M*h,o=f*h,e.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},no={h:0,s:0,l:0};function Wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=Au(t,1),e=yn(e,0,1),n=yn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wl(a,r,t+1/3),this.g=Wl(a,r,t),this.b=Wl(a,r,t-1/3)}return Ie.toWorkingColorSpace(this,s),this}setStyle(t,e=qn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qn){let n=Qf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Ie.fromWorkingColorSpace(Un.copy(this),t),Math.round(yn(Un.r*255,0,255))*65536+Math.round(yn(Un.g*255,0,255))*256+Math.round(yn(Un.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(Un.copy(this),e);let n=Un.r,s=Un.g,r=Un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=qn){Ie.fromWorkingColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,s=Un.b;return t!==qn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(no);let n=ua(ns.h,no.h,e),s=ua(ns.s,no.s,e),r=ua(ns.l,no.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new ie;ie.NAMES=Qf;var rm=0,ls=class extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Ir(),this.name="",this.blending=gr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==rs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Uo=class extends ls{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hi=am();function am(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function om(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=yn(i,-65504,65504),Hi.floatView[0]=i;let t=Hi.uint32View[0],e=t>>23&511;return Hi.baseTable[e]+((t&8388607)>>Hi.shiftTable[e])}function lm(i){let t=i>>10;return Hi.uint32View[0]=Hi.mantissaTable[Hi.offsetTable[t]+(i&1023)]+Hi.exponentTable[t],Hi.floatView[0]}var td={toHalfFloat:om,fromHalfFloat:lm},on=new V,io=new xe,Rt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zh&&(t.usage=this.usage),t}};var Fo=class extends Rt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var No=class extends Rt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Rt{constructor(t,e,n){super(new Float32Array(t),e,n)}},cm=0,ai=new ze,Xl=new Gn,lr=new V,ti=new Gi,ia=new Gi,_n=new V,de=class i extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?No:Fo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,e,n){return ai.makeTranslation(t,e,n),this.applyMatrix4(ai),this}scale(t,e,n){return ai.makeScale(t,e,n),this.applyMatrix4(ai),this}lookAt(t){return Xl.lookAt(t),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(ti.min,ia.min),ti.expandByPoint(_n),_n.addVectors(ti.max,ia.max),ti.expandByPoint(_n)):(ti.expandByPoint(ia.min),ti.expandByPoint(ia.max))}ti.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_n.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_n));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_n.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(t,c),_n.add(lr)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new V,l[U]=new V;let c=new V,u=new V,d=new V,f=new xe,p=new xe,g=new xe,M=new V,m=new V;function h(U,E,b){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),u.sub(c),d.sub(c),p.sub(f),g.sub(f);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),o[U].add(M),o[E].add(M),o[b].add(M),l[U].add(m),l[E].add(m),l[b].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,E=R.length;U<E;++U){let b=R[U],N=b.start,G=b.count;for(let K=N,et=N+G;K<et;K+=3)h(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let A=new V,S=new V,k=new V,L=new V;function F(U){k.fromBufferAttribute(s,U),L.copy(k);let E=o[U];A.copy(E),A.sub(k.multiplyScalar(k.dot(E))).normalize(),S.crossVectors(L,E);let N=S.dot(l[U])<0?-1:1;a.setXYZW(U,A.x,A.y,A.z,N)}for(let U=0,E=R.length;U<E;++U){let b=R[U],N=b.start,G=b.count;for(let K=N,et=N+G;K<et;K+=3)F(t.getX(K+0)),F(t.getX(K+1)),F(t.getX(K+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Rt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sf=new ze,Ss=new ma,so=new yi,rf=new V,ro=new V,ao=new V,oo=new V,ql=new V,lo=new V,af=new V,co=new V,$e=class extends Gn{constructor(t=new de,e=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(ql.fromBufferAttribute(d,t),a?lo.addScaledVector(ql,u):lo.addScaledVector(ql.sub(e),u))}e.add(lo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(so.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(so,rf)===null||Ss.origin.distanceToSquared(rf)>(t.far-t.near)**2))&&(sf.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(sf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){let m=f[g],h=a[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,k=A;S<k;S+=3){let L=o.getX(S),F=o.getX(S+1),U=o.getX(S+2);s=uo(this,h,t,n,c,u,d,L,F,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,h=M;m<h;m+=3){let R=o.getX(m),A=o.getX(m+1),S=o.getX(m+2);s=uo(this,a,t,n,c,u,d,R,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){let m=f[g],h=a[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,k=A;S<k;S+=3){let L=S,F=S+1,U=S+2;s=uo(this,h,t,n,c,u,d,L,F,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,h=M;m<h;m+=3){let R=m,A=m+1,S=m+2;s=uo(this,a,t,n,c,u,d,R,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function um(i,t,e,n,s,r,a,o){let l;if(t.side===Yn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===rs,o),l===null)return null;co.copy(o),co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:i}}function uo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ro),i.getVertexPosition(l,ao),i.getVertexPosition(c,oo);let u=um(i,t,e,n,ro,ao,oo,af);if(u){let d=new V;Cs.getBarycoord(af,ro,ao,oo,d),s&&(u.uv=Cs.getInterpolatedAttribute(s,o,l,c,d,new xe)),r&&(u.uv1=Cs.getInterpolatedAttribute(r,o,l,c,d,new xe)),a&&(u.normal=Cs.getInterpolatedAttribute(a,o,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new V,materialIndex:0};Cs.getNormal(ro,ao,oo,f.normal),u.face=f,u.barycoord=d}return u}var Xi=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(d,2));function g(M,m,h,R,A,S,k,L,F,U,E){let b=S/F,N=k/U,G=S/2,K=k/2,et=L/2,ft=F+1,it=U+1,_t=0,J=0,Ct=new V;for(let Dt=0;Dt<it;Dt++){let Zt=Dt*N-K;for(let _e=0;_e<ft;_e++){let Be=_e*b-G;Ct[M]=Be*R,Ct[m]=Zt*A,Ct[h]=et,c.push(Ct.x,Ct.y,Ct.z),Ct[M]=0,Ct[m]=0,Ct[h]=L>0?1:-1,u.push(Ct.x,Ct.y,Ct.z),d.push(_e/F),d.push(1-Dt/U),_t+=1}}for(let Dt=0;Dt<U;Dt++)for(let Zt=0;Zt<F;Zt++){let _e=f+Zt+ft*Dt,Be=f+Zt+ft*(Dt+1),nt=f+(Zt+1)+ft*(Dt+1),mt=f+(Zt+1)+ft*Dt;l.push(_e,Be,mt),l.push(Be,nt,mt),J+=6}o.addGroup(p,J,E),p+=J,f+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function wr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Vn(i){let t={};for(let e=0;e<i.length;e++){let n=wr(i[e]);for(let s in n)t[s]=n[s]}return t}function hm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ed(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}var fm={clone:wr,merge:Vn},dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends ls{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Bo=class extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},is=new V,of=new xe,lf=new xe,Tn=class extends Bo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,of,lf),e.subVectors(lf,of)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ca*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cr=-90,ur=1,qc=class extends Gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(cr,ur,t,e);s.layers=this.layers,this.add(s);let r=new Tn(cr,ur,t,e);r.layers=this.layers,this.add(r);let a=new Tn(cr,ur,t,e);a.layers=this.layers,this.add(a);let o=new Tn(cr,ur,t,e);o.layers=this.layers,this.add(o);let l=new Tn(cr,ur,t,e);l.layers=this.layers,this.add(l);let c=new Tn(cr,ur,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Oo=class extends Nn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Mr,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yc=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:ss});r.uniforms.tEquirect.value=e;let a=new $e(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=Ne),new qc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Yl=new V,mm=new V,gm=new ce,zi=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yl.subVectors(n,e).cross(mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gm.getNormalMatrix(t),s=this.coplanarPoint(Yl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new yi,ho=new V,zo=class{constructor(t=new zi,e=new zi,n=new zi,s=new zi,r=new zi,a=new zi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],g=s[9],M=s[10],m=s[11],h=s[12],R=s[13],A=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,m-p,S-h).normalize(),n[1].setComponents(l+r,f+c,m+p,S+h).normalize(),n[2].setComponents(l+a,f+u,m+g,S+R).normalize(),n[3].setComponents(l-a,f-u,m-g,S-R).normalize(),n[4].setComponents(l-o,f-d,m-M,S-A).normalize(),e===ki)n[5].setComponents(l+o,f+d,m+M,S+A).normalize();else if(e===Co)n[5].setComponents(o,d,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vm(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let M=d[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Tr=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,p=[],g=[],M=[],m=[];for(let h=0;h<u;h++){let R=h*f-a;for(let A=0;A<c;A++){let S=A*d-r;g.push(S,-R,0),M.push(0,0,1),m.push(A/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<o;R++){let A=R+c*h,S=R+c*(h+1),k=R+1+c*(h+1),L=R+1+c*h;p.push(A,S,L),p.push(S,k,L)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(M,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Im=`#ifdef USE_IRIDESCENCE
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
#endif`,Dm=`#ifdef USE_BUMPMAP
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,km=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`struct PhysicalMaterial {
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
}`,v0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wg=`#define DISTANCE
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,kg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Xg=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Zg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:xm,alphahash_pars_fragment:_m,alphamap_fragment:ym,alphamap_pars_fragment:Mm,alphatest_fragment:bm,alphatest_pars_fragment:Sm,aomap_fragment:Em,aomap_pars_fragment:wm,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Pm,iridescence_fragment:Im,bumpmap_pars_fragment:Dm,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Um,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Nm,color_fragment:Bm,color_pars_fragment:Om,color_pars_vertex:zm,color_vertex:Hm,common:km,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Km,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:u0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:a0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:h0,lights_toon_pars_fragment:f0,lights_phong_fragment:d0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:v0,lights_fragment_maps:x0,lights_fragment_end:_0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:S0,map_fragment:E0,map_pars_fragment:w0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:C0,morphinstance_vertex:P0,morphcolor_vertex:I0,morphnormal_vertex:D0,morphtarget_pars_vertex:L0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:N0,normal_pars_fragment:B0,normal_pars_vertex:O0,normal_vertex:z0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:K0,dithering_fragment:Z0,dithering_pars_fragment:J0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:ag,specularmap_fragment:og,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:ug,transmission_fragment:hg,transmission_pars_fragment:fg,uv_pars_fragment:dg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:vg,background_frag:xg,backgroundCube_vert:_g,backgroundCube_frag:yg,cube_vert:Mg,cube_frag:bg,depth_vert:Sg,depth_frag:Eg,distanceRGBA_vert:wg,distanceRGBA_frag:Tg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Ig,meshbasic_frag:Dg,meshlambert_vert:Lg,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:Ng,meshnormal_vert:Bg,meshnormal_frag:Og,meshphong_vert:zg,meshphong_frag:Hg,meshphysical_vert:kg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:Kg,sprite_vert:Zg,sprite_frag:Jg},At={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ti={basic:{uniforms:Vn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Vn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ie(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Vn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Vn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Vn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new ie(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Vn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Vn([At.points,At.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Vn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Vn([At.common,At.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Vn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Vn([At.sprite,At.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Vn([At.common,At.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Vn([At.lights,At.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Ti.physical={uniforms:Vn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};var fo={r:0,b:0,g:0},ws=new Wi,$g=new ze;function jg(i,t,e,n,s,r,a){let o=new ie(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function g(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?e:t).get(A)),A}function M(R){let A=!1,S=g(R);S===null?h(o,l):S&&S.isColor&&(h(S,1),A=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(R,A){let S=g(A);S&&(S.isCubeTexture||S.mapping===Ko)?(u===void 0&&(u=new $e(new Xi(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:wr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ws.copy(A.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(ws)),u.material.toneMapped=Ie.getTransfer(S.colorSpace)!==Ve,(d!==S||f!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $e(new Tr(2,2),new tn({name:"BackgroundMaterial",uniforms:wr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ie.getTransfer(S.colorSpace)!==Ve,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function h(R,A){R.getRGB(fo,ed(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(R,A=1){o.set(R),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,h(o,l)},render:M,addToRenderList:m}}function Qg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,N,G,K,et){let ft=!1,it=d(K,G,N);r!==it&&(r=it,c(r.object)),ft=p(b,K,G,et),ft&&g(b,K,G,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(ft||a)&&(a=!1,S(b,N,G,K),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function d(b,N,G){let K=G.wireframe===!0,et=n[b.id];et===void 0&&(et={},n[b.id]=et);let ft=et[N.id];ft===void 0&&(ft={},et[N.id]=ft);let it=ft[K];return it===void 0&&(it=f(l()),ft[K]=it),it}function f(b){let N=[],G=[],K=[];for(let et=0;et<e;et++)N[et]=0,G[et]=0,K[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:K,object:b,attributes:{},index:null}}function p(b,N,G,K){let et=r.attributes,ft=N.attributes,it=0,_t=G.getAttributes();for(let J in _t)if(_t[J].location>=0){let Dt=et[J],Zt=ft[J];if(Zt===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(Zt=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(Zt=b.instanceColor)),Dt===void 0||Dt.attribute!==Zt||Zt&&Dt.data!==Zt.data)return!0;it++}return r.attributesNum!==it||r.index!==K}function g(b,N,G,K){let et={},ft=N.attributes,it=0,_t=G.getAttributes();for(let J in _t)if(_t[J].location>=0){let Dt=ft[J];Dt===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(Dt=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(Dt=b.instanceColor));let Zt={};Zt.attribute=Dt,Dt&&Dt.data&&(Zt.data=Dt.data),et[J]=Zt,it++}r.attributes=et,r.attributesNum=it,r.index=K}function M(){let b=r.newAttributes;for(let N=0,G=b.length;N<G;N++)b[N]=0}function m(b){h(b,0)}function h(b,N){let G=r.newAttributes,K=r.enabledAttributes,et=r.attributeDivisors;G[b]=1,K[b]===0&&(i.enableVertexAttribArray(b),K[b]=1),et[b]!==N&&(i.vertexAttribDivisor(b,N),et[b]=N)}function R(){let b=r.newAttributes,N=r.enabledAttributes;for(let G=0,K=N.length;G<K;G++)N[G]!==b[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function A(b,N,G,K,et,ft,it){it===!0?i.vertexAttribIPointer(b,N,G,et,ft):i.vertexAttribPointer(b,N,G,K,et,ft)}function S(b,N,G,K){M();let et=K.attributes,ft=G.getAttributes(),it=N.defaultAttributeValues;for(let _t in ft){let J=ft[_t];if(J.location>=0){let Ct=et[_t];if(Ct===void 0&&(_t==="instanceMatrix"&&b.instanceMatrix&&(Ct=b.instanceMatrix),_t==="instanceColor"&&b.instanceColor&&(Ct=b.instanceColor)),Ct!==void 0){let Dt=Ct.normalized,Zt=Ct.itemSize,_e=t.get(Ct);if(_e===void 0)continue;let Be=_e.buffer,nt=_e.type,mt=_e.bytesPerElement,kt=nt===i.INT||nt===i.UNSIGNED_INT||Ct.gpuType===Mu;if(Ct.isInterleavedBufferAttribute){let St=Ct.data,te=St.stride,oe=Ct.offset;if(St.isInstancedInterleavedBuffer){for(let ge=0;ge<J.locationSize;ge++)h(J.location+ge,St.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ge=0;ge<J.locationSize;ge++)m(J.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ge=0;ge<J.locationSize;ge++)A(J.location+ge,Zt/J.locationSize,nt,Dt,te*mt,(oe+Zt/J.locationSize*ge)*mt,kt)}else{if(Ct.isInstancedBufferAttribute){for(let St=0;St<J.locationSize;St++)h(J.location+St,Ct.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let St=0;St<J.locationSize;St++)m(J.location+St);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let St=0;St<J.locationSize;St++)A(J.location+St,Zt/J.locationSize,nt,Dt,Zt*mt,Zt/J.locationSize*St*mt,kt)}}else if(it!==void 0){let Dt=it[_t];if(Dt!==void 0)switch(Dt.length){case 2:i.vertexAttrib2fv(J.location,Dt);break;case 3:i.vertexAttrib3fv(J.location,Dt);break;case 4:i.vertexAttrib4fv(J.location,Dt);break;default:i.vertexAttrib1fv(J.location,Dt)}}}}R()}function k(){U();for(let b in n){let N=n[b];for(let G in N){let K=N[G];for(let et in K)u(K[et].object),delete K[et];delete N[G]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;let N=n[b.id];for(let G in N){let K=N[G];for(let et in K)u(K[et].object),delete K[et];delete N[G]}delete n[b.id]}function F(b){for(let N in n){let G=n[N];if(G[b.id]===void 0)continue;let K=G[b.id];for(let et in K)u(K[et].object),delete K[et];delete G[b.id]}}function U(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:m,disableUnusedAttributes:R}}function tv(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let M=0;M<d;M++)g+=u[M]*f[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ev(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==Je&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let U=F===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==li&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ei&&!U)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:k,maxSamples:L}}function nv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zi,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let R=r?0:n,A=R*4,S=h.clippingState||null;l.value=S,S=u(g,f,A,p);for(let k=0;k!==A;++k)S[k]=e[k];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let h=p+M*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,S=p;A!==M;++A,S+=4)a.copy(d[A]).applyMatrix4(R,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function iv(i){let t=new WeakMap;function e(a,o){return o===dc?a.mapping=Mr:o===pc&&(a.mapping=br),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===dc||o===pc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Yc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ga=class extends Bo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pr=4,cf=[.125,.215,.35,.446,.526,.582],Ps=20,Kl=new ga,uf=new ie,Zl=null,Jl=0,$l=0,jl=!1,As=(1+Math.sqrt(5))/2,hr=1/As,hf=[new V(-As,hr,0),new V(As,hr,0),new V(-hr,0,As),new V(hr,0,As),new V(0,As,-hr),new V(0,As,hr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Ho=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,Jl,$l),this._renderer.xr.enabled=jl,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:An,format:Je,colorSpace:us,depthBuffer:!1},s=ff(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sv(r)),this._blurMaterial=rv(r,t,e)}return s}_compileMaterial(t){let e=new $e(this._lodPlanes[0],t);this._renderer.compile(e,Kl)}_sceneToCubeUV(t,e,n,s){let o=new Tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(uf),u.toneMapping=Ai,u.autoClear=!1;let p=new Uo({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),g=new $e(new Xi,p),M=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,M=!0):(p.color.copy(uf),M=!0);for(let h=0;h<6;h++){let R=h%3;R===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):R===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));let A=this._cubeSize;po(s,R*A,h>2?A:0,A,A),u.setRenderTarget(s),M&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Mr||t.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;po(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Kl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hf[(s-r-1)%hf.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new $e(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ps-1),M=r/g,m=isFinite(r)?1+Math.floor(u*M):Ps;m>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);let h=[],R=0;for(let F=0;F<Ps;++F){let U=F/M,E=Math.exp(-U*U/2);h.push(E),F===0?R+=E:F<m&&(R+=2*E)}for(let F=0;F<h.length;F++)h[F]=h[F]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;let S=this._sizeLods[s],k=3*S*(s>A-pr?s-A+pr:0),L=4*(this._cubeSize-S);po(e,k,L,3*S,2*S),l.setRenderTarget(e),l.render(d,Kl)}};function sv(i){let t=[],e=[],n=[],s=i,r=i-pr+1+cf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-pr?l=cf[a-i+pr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,M=3,m=2,h=1,R=new Float32Array(M*g*p),A=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let L=0;L<p;L++){let F=L%3*2/3-1,U=L>2?0:-1,E=[F,U,0,F+2/3,U,0,F+2/3,U+1,0,F,U,0,F+2/3,U+1,0,F,U+1,0];R.set(E,M*g*L),A.set(f,m*g*L);let b=[L,L,L,L,L,L];S.set(b,h*g*L)}let k=new de;k.setAttribute("position",new Rt(R,M)),k.setAttribute("uv",new Rt(A,m)),k.setAttribute("faceIndex",new Rt(S,h)),t.push(k),s>pr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ff(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rv(i,t,e){let n=new Float32Array(Ps),s=new V(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function df(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function pf(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function av(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===dc||l===pc,u=l===Mr||l===br;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ho(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Ho(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ov(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&oa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lv(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let M=f.morphAttributes[g];for(let m=0,h=M.length;m<h;m++)t.remove(M[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let M=p[g];for(let m=0,h=M.length;m<h;m++)t.update(M[m],i.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,M=0;if(p!==null){let R=p.array;M=p.version;for(let A=0,S=R.length;A<S;A+=3){let k=R[A+0],L=R[A+1],F=R[A+2];f.push(k,L,L,F,F,k)}}else if(g!==void 0){let R=g.array;M=g.version;for(let A=0,S=R.length/3-1;A<S;A+=3){let k=A+0,L=A+1,F=A+2;f.push(k,L,L,F,F,k)}}else return;let m=new(jf(f)?No:Fo)(f,1);m.version=M;let h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function cv(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function d(f,p,g,M){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],M[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,M,0,g);let h=0;for(let R=0;R<g;R++)h+=p[R]*M[R];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function uv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hv(i,t,e){let n=new WeakMap,s=new sn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let E=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let S=o.attributes.position.count*A,k=1;S>t.maxTextureSize&&(k=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let L=new Float32Array(S*k*4*d),F=new Do(L,S,k,d);F.type=ei,F.needsUpdate=!0;let U=A*4;for(let b=0;b<d;b++){let N=m[b],G=h[b],K=R[b],et=S*k*4*b;for(let ft=0;ft<N.count;ft++){let it=ft*U;p===!0&&(s.fromBufferAttribute(N,ft),L[et+it+0]=s.x,L[et+it+1]=s.y,L[et+it+2]=s.z,L[et+it+3]=0),g===!0&&(s.fromBufferAttribute(G,ft),L[et+it+4]=s.x,L[et+it+5]=s.y,L[et+it+6]=s.z,L[et+it+7]=0),M===!0&&(s.fromBufferAttribute(K,ft),L[et+it+8]=s.x,L[et+it+9]=s.y,L[et+it+10]=s.z,L[et+it+11]=K.itemSize===4?s.w:1)}}f={count:d,texture:F,size:new xe(S,k)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fv(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ko=class extends Nn{constructor(t,e,n,s,r,a,o,l,c,u=vr){if(u!==vr&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vr&&(n=Ds),n===void 0&&u===Er&&(n=Sr),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},id=new Nn,mf=new ko(1,1),sd=new Do,rd=new Xc,ad=new Oo,gf=[],vf=[],xf=new Float32Array(16),_f=new Float32Array(9),yf=new Float32Array(4);function Dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jo(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function vv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),gn(e,n)}}function xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),gn(e,n)}}function _v(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;xf.set(n),i.uniformMatrix4fv(this.addr,!1,xf),gn(e,n)}}function yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function Sv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function Ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function Rv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mf.compareFunction=$f,r=mf):r=id,e.setTexture2D(t||r,s)}function Cv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rd,s)}function Pv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function Iv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sd,s)}function Dv(i){switch(i){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return vv;case 35675:return xv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return Mv;case 35668:case 35672:return bv;case 35669:case 35673:return Sv;case 5125:return Ev;case 36294:return wv;case 36295:return Tv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Lv(i,t){i.uniform1fv(this.addr,t)}function Uv(i,t){let e=Dr(t,this.size,2);i.uniform2fv(this.addr,e)}function Fv(i,t){let e=Dr(t,this.size,3);i.uniform3fv(this.addr,e)}function Nv(i,t){let e=Dr(t,this.size,4);i.uniform4fv(this.addr,e)}function Bv(i,t){let e=Dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ov(i,t){let e=Dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zv(i,t){let e=Dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hv(i,t){i.uniform1iv(this.addr,t)}function kv(i,t){i.uniform2iv(this.addr,t)}function Vv(i,t){i.uniform3iv(this.addr,t)}function Gv(i,t){i.uniform4iv(this.addr,t)}function Wv(i,t){i.uniform1uiv(this.addr,t)}function Xv(i,t){i.uniform2uiv(this.addr,t)}function qv(i,t){i.uniform3uiv(this.addr,t)}function Yv(i,t){i.uniform4uiv(this.addr,t)}function Kv(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||id,r[a])}function Zv(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rd,r[a])}function Jv(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ad,r[a])}function $v(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sd,r[a])}function jv(i){switch(i){case 5126:return Lv;case 35664:return Uv;case 35665:return Fv;case 35666:return Nv;case 35674:return Bv;case 35675:return Ov;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Gv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return $v}}var Kc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dv(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jv(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function Mf(i,t){i.seq.push(t),i.map[t.id]=t}function Qv(i,t,e){let n=i.name,s=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mf(e,c===void 0?new Kc(o,i,t):new Zc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Jc(o),Mf(e,d)),e=d}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Qv(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tx=37297,ex=0;function nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Sf=new ce;function ix(i){Ie._getMatrix(Sf,Ie.workingColorSpace,i);let t=`mat3( ${Sf.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case Zo:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ef(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nx(i.getShaderSource(t),a)}else return s}function sx(i,t){let e=ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rx(i,t){let e;switch(t){case hp:e="Linear";break;case fp:e="Reinhard";break;case dp:e="Cineon";break;case pp:e="ACESFilmic";break;case gp:e="AgX";break;case vp:e="Neutral";break;case mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new V;function ax(){Ie.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function lx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function la(i){return i!==""}function wf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(ux,fx)}var hx=new Map;function fx(i,t){let e=Me[t];if(e===void 0){let n=hx.get(t);if(n!==void 0)e=Me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $c(e)}var dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(dx,px)}function px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rf(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function gx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mr:case br:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function xx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hf:t="ENVMAP_BLENDING_MULTIPLY";break;case cp:t="ENVMAP_BLENDING_MIX";break;case up:t="ENVMAP_BLENDING_ADD";break}return t}function _x(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=mx(e),c=gx(e),u=vx(e),d=xx(e),f=_x(e),p=ox(e),g=lx(r),M=s.createProgram(),m,h,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),h.length>0&&(h+=`
`)):(m=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),h=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Me.tonemapping_pars_fragment:"",e.toneMapping!==Ai?rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,sx("linearToOutputTexel",e.outputColorSpace),ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),a=$c(a),a=wf(a,e),a=Tf(a,e),o=$c(o),o=wf(o,e),o=Tf(o,e),a=Af(a),o=Af(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let A=R+m+a,S=R+h+o,k=bf(s,s.VERTEX_SHADER,A),L=bf(s,s.FRAGMENT_SHADER,S);s.attachShader(M,k),s.attachShader(M,L),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function F(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(M).trim(),K=s.getShaderInfoLog(k).trim(),et=s.getShaderInfoLog(L).trim(),ft=!0,it=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,k,L);else{let _t=Ef(s,k,"vertex"),J=Ef(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+_t+`
`+J)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(K===""||et==="")&&(it=!1);it&&(N.diagnostics={runnable:ft,programLog:G,vertexShader:{log:K,prefix:m},fragmentShader:{log:et,prefix:h}})}s.deleteShader(k),s.deleteShader(L),U=new _r(s,M),E=cx(s,M)}let U;this.getUniforms=function(){return U===void 0&&F(this),U};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(M,tx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=k,this.fragmentShader=L,this}var Mx=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}};function bx(i,t,e,n,s,r,a){let o=new Lo,l=new jc,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,N,G,K){let et=G.fog,ft=K.geometry,it=E.isMeshStandardMaterial?G.environment:null,_t=(E.isMeshStandardMaterial?e:t).get(E.envMap||it),J=_t&&_t.mapping===Ko?_t.image.height:null,Ct=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let Dt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Zt=Dt!==void 0?Dt.length:0,_e=0;ft.morphAttributes.position!==void 0&&(_e=1),ft.morphAttributes.normal!==void 0&&(_e=2),ft.morphAttributes.color!==void 0&&(_e=3);let Be,nt,mt,kt;if(Ct){let Re=Ti[Ct];Be=Re.vertexShader,nt=Re.fragmentShader}else Be=E.vertexShader,nt=E.fragmentShader,l.update(E),mt=l.getVertexShaderID(E),kt=l.getFragmentShaderID(E);let St=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),oe=K.isInstancedMesh===!0,ge=K.isBatchedMesh===!0,Xe=!!E.map,be=!!E.matcap,Ge=!!_t,z=!!E.aoMap,Mt=!!E.lightMap,ut=!!E.bumpMap,ye=!!E.normalMap,ee=!!E.displacementMap,He=!!E.emissiveMap,Ft=!!E.metalnessMap,C=!!E.roughnessMap,y=E.anisotropy>0,X=E.clearcoat>0,at=E.dispersion>0,ht=E.iridescence>0,rt=E.sheen>0,Yt=E.transmission>0,Tt=y&&!!E.anisotropyMap,Nt=X&&!!E.clearcoatMap,Ee=X&&!!E.clearcoatNormalMap,vt=X&&!!E.clearcoatRoughnessMap,Ot=ht&&!!E.iridescenceMap,$t=ht&&!!E.iridescenceThicknessMap,re=rt&&!!E.sheenColorMap,lt=rt&&!!E.sheenRoughnessMap,ve=!!E.specularMap,le=!!E.specularColorMap,Ae=!!E.specularIntensityMap,B=Yt&&!!E.transmissionMap,Et=Yt&&!!E.thicknessMap,j=!!E.gradientMap,ot=!!E.alphaMap,Pt=E.alphaTest>0,bt=!!E.alphaHash,ue=!!E.extensions,We=Ai;E.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(We=i.toneMapping);let vn={shaderID:Ct,shaderType:E.type,shaderName:E.name,vertexShader:Be,fragmentShader:nt,defines:E.defines,customVertexShaderID:mt,customFragmentShaderID:kt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ge,batchingColor:ge&&K._colorsTexture!==null,instancing:oe,instancingColor:oe&&K.instanceColor!==null,instancingMorph:oe&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:us,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:be,envMap:Ge,envMapMode:Ge&&_t.mapping,envMapCubeUVHeight:J,aoMap:z,lightMap:Mt,bumpMap:ut,normalMap:ye,displacementMap:f&&ee,emissiveMap:He,normalMapObjectSpace:ye&&E.normalMapType===bp,normalMapTangentSpace:ye&&E.normalMapType===Mp,metalnessMap:Ft,roughnessMap:C,anisotropy:y,anisotropyMap:Tt,clearcoat:X,clearcoatMap:Nt,clearcoatNormalMap:Ee,clearcoatRoughnessMap:vt,dispersion:at,iridescence:ht,iridescenceMap:Ot,iridescenceThicknessMap:$t,sheen:rt,sheenColorMap:re,sheenRoughnessMap:lt,specularMap:ve,specularColorMap:le,specularIntensityMap:Ae,transmission:Yt,transmissionMap:B,thicknessMap:Et,gradientMap:j,opaque:E.transparent===!1&&E.blending===gr&&E.alphaToCoverage===!1,alphaMap:ot,alphaTest:Pt,alphaHash:bt,combine:E.combine,mapUv:Xe&&M(E.map.channel),aoMapUv:z&&M(E.aoMap.channel),lightMapUv:Mt&&M(E.lightMap.channel),bumpMapUv:ut&&M(E.bumpMap.channel),normalMapUv:ye&&M(E.normalMap.channel),displacementMapUv:ee&&M(E.displacementMap.channel),emissiveMapUv:He&&M(E.emissiveMap.channel),metalnessMapUv:Ft&&M(E.metalnessMap.channel),roughnessMapUv:C&&M(E.roughnessMap.channel),anisotropyMapUv:Tt&&M(E.anisotropyMap.channel),clearcoatMapUv:Nt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:re&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:lt&&M(E.sheenRoughnessMap.channel),specularMapUv:ve&&M(E.specularMap.channel),specularColorMapUv:le&&M(E.specularColorMap.channel),specularIntensityMapUv:Ae&&M(E.specularIntensityMap.channel),transmissionMapUv:B&&M(E.transmissionMap.channel),thicknessMapUv:Et&&M(E.thicknessMap.channel),alphaMapUv:ot&&M(E.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ye||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ft.attributes.uv&&(Xe||ot),fog:!!et,useFog:E.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:te,skinning:K.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:_e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&Ie.getTransfer(E.map.colorSpace)===Ve,decodeVideoTextureEmissive:He&&E.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(E.emissiveMap.colorSpace)===Ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===Yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ue&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&E.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return vn.vertexUv1s=c.has(1),vn.vertexUv2s=c.has(2),vn.vertexUv3s=c.has(3),c.clear(),vn}function h(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)b.push(N),b.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(R(b,E),A(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function R(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function A(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){let b=g[E.type],N;if(b){let G=Ti[b];N=fm.clone(G.uniforms)}else N=E.uniforms;return N}function k(E,b){let N;for(let G=0,K=u.length;G<K;G++){let et=u[G];if(et.cacheKey===b){N=et,++N.usedTimes;break}}return N===void 0&&(N=new yx(i,b,E,r),u.push(N)),N}function L(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function F(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:k,releaseProgram:L,releaseShaderCache:F,programs:u,dispose:U}}function Sx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,g,M,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:M,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=M,h.group=m),t++,h}function o(d,f,p,g,M,m){let h=a(d,f,p,g,M,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,g,M,m){let h=a(d,f,p,g,M,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||Ex),n.length>1&&n.sort(f||Cf),s.length>1&&s.sort(f||Cf)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function wx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pf,i.set(n,[a])):s>=r.length?(a=new Pf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new ie};break;case"SpotLight":e={position:new V,direction:new V,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Rx=0;function Cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Px(i){let t=new Tx,e=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new ze,a=new ze;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,M=0,m=0,h=0,R=0,A=0,S=0,k=0,L=0,F=0;c.sort(Cx);for(let E=0,b=c.length;E<b;E++){let N=c[E],G=N.color,K=N.intensity,et=N.distance,ft=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=G.r*K,d+=G.g*K,f+=G.b*K;else if(N.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(N.sh.coefficients[it],K);F++}else if(N.isDirectionalLight){let it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let _t=N.shadow,J=e.get(N);J.shadowIntensity=_t.intensity,J.shadowBias=_t.bias,J.shadowNormalBias=_t.normalBias,J.shadowRadius=_t.radius,J.shadowMapSize=_t.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=ft,n.directionalShadowMatrix[p]=N.shadow.matrix,R++}n.directional[p]=it,p++}else if(N.isSpotLight){let it=t.get(N);it.position.setFromMatrixPosition(N.matrixWorld),it.color.copy(G).multiplyScalar(K),it.distance=et,it.coneCos=Math.cos(N.angle),it.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),it.decay=N.decay,n.spot[M]=it;let _t=N.shadow;if(N.map&&(n.spotLightMap[k]=N.map,k++,_t.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[M]=_t.matrix,N.castShadow){let J=e.get(N);J.shadowIntensity=_t.intensity,J.shadowBias=_t.bias,J.shadowNormalBias=_t.normalBias,J.shadowRadius=_t.radius,J.shadowMapSize=_t.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=ft,S++}M++}else if(N.isRectAreaLight){let it=t.get(N);it.color.copy(G).multiplyScalar(K),it.halfWidth.set(N.width*.5,0,0),it.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=it,m++}else if(N.isPointLight){let it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),it.distance=N.distance,it.decay=N.decay,N.castShadow){let _t=N.shadow,J=e.get(N);J.shadowIntensity=_t.intensity,J.shadowBias=_t.bias,J.shadowNormalBias=_t.normalBias,J.shadowRadius=_t.radius,J.shadowMapSize=_t.mapSize,J.shadowCameraNear=_t.camera.near,J.shadowCameraFar=_t.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=ft,n.pointShadowMatrix[g]=N.shadow.matrix,A++}n.point[g]=it,g++}else if(N.isHemisphereLight){let it=t.get(N);it.skyColor.copy(N.color).multiplyScalar(K),it.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[h]=it,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==M||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==R||U.numPointShadows!==A||U.numSpotShadows!==S||U.numSpotMaps!==k||U.numLightProbes!==F)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=S+k-L,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,U.directionalLength=p,U.pointLength=g,U.spotLength=M,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=R,U.numPointShadows=A,U.numSpotShadows=S,U.numSpotMaps=k,U.numLightProbes=F,n.version=Rx++)}function l(c,u){let d=0,f=0,p=0,g=0,M=0,m=u.matrixWorldInverse;for(let h=0,R=c.length;h<R;h++){let A=c[h];if(A.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(A.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){let S=n.hemi[M];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:n}}function If(i){let t=new Px(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ix(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new If(i),t.set(s,[o])):r>=a.length?(o=new If(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var tu=class extends ls{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eu=class extends ls{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
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
}`;function Ux(i,t,e){let n=new zo,s=new xe,r=new xe,a=new sn,o=new tu({depthPacking:yp}),l=new eu,c={},u=e.maxTextureSize,d={[rs]:Yn,[Yn]:rs,[ln]:ln},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Dx,fragmentShader:Lx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zf;let h=this.type;this.render=function(L,F,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ss),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=h!==Oi&&this.type===Oi,et=h===Oi&&this.type!==Oi;for(let ft=0,it=L.length;ft<it;ft++){let _t=L[ft],J=_t.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",_t,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Ct=J.getFrameExtents();if(s.multiply(Ct),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Ct.x),s.x=r.x*Ct.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Ct.y),s.y=r.y*Ct.y,J.mapSize.y=r.y)),J.map===null||K===!0||et===!0){let Zt=this.type!==Oi?{minFilter:Fn,magFilter:Fn}:{};J.map!==null&&J.map.dispose(),J.map=new cn(s.x,s.y,Zt),J.map.texture.name=_t.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let Dt=J.getViewportCount();for(let Zt=0;Zt<Dt;Zt++){let _e=J.getViewport(Zt);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),G.viewport(a),J.updateMatrices(_t,Zt),n=J.getFrustum(),S(F,U,J.camera,_t,this.type)}J.isPointLightShadow!==!0&&this.type===Oi&&R(J,U),J.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,N)};function R(L,F){let U=t.update(M);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new cn(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(F,null,U,f,M,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(F,null,U,p,M,null)}function A(L,F,U,E){let b=null,N=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)b=N;else if(b=U.isPointLight===!0?l:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){let G=b.uuid,K=F.uuid,et=c[G];et===void 0&&(et={},c[G]=et);let ft=et[K];ft===void 0&&(ft=b.clone(),et[K]=ft,F.addEventListener("dispose",k)),b=ft}if(b.visible=F.visible,b.wireframe=F.wireframe,E===Oi?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:d[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=U}return b}function S(L,F,U,E,b){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===Oi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);let K=t.update(L),et=L.material;if(Array.isArray(et)){let ft=K.groups;for(let it=0,_t=ft.length;it<_t;it++){let J=ft[it],Ct=et[J.materialIndex];if(Ct&&Ct.visible){let Dt=A(L,Ct,E,b);L.onBeforeShadow(i,L,F,U,K,Dt,J),i.renderBufferDirect(U,null,K,Dt,L,J),L.onAfterShadow(i,L,F,U,K,Dt,J)}}}else if(et.visible){let ft=A(L,et,E,b);L.onBeforeShadow(i,L,F,U,K,ft,null),i.renderBufferDirect(U,null,K,ft,L,null),L.onAfterShadow(i,L,F,U,K,ft,null)}}let G=L.children;for(let K=0,et=G.length;K<et;K++)S(G[K],F,U,E,b)}function k(L){L.target.removeEventListener("dispose",k);for(let U in c){let E=c[U],b=L.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var Fx={[ac]:oc,[lc]:hc,[cc]:fc,[yr]:uc,[oc]:ac,[hc]:lc,[fc]:cc,[uc]:yr};function Nx(i,t){function e(){let B=!1,Et=new sn,j=null,ot=new sn(0,0,0,0);return{setMask:function(Pt){j!==Pt&&!B&&(i.colorMask(Pt,Pt,Pt,Pt),j=Pt)},setLocked:function(Pt){B=Pt},setClear:function(Pt,bt,ue,We,vn){vn===!0&&(Pt*=We,bt*=We,ue*=We),Et.set(Pt,bt,ue,We),ot.equals(Et)===!1&&(i.clearColor(Pt,bt,ue,We),ot.copy(Et))},reset:function(){B=!1,j=null,ot.set(-1,0,0,0)}}}function n(){let B=!1,Et=!1,j=null,ot=null,Pt=null;return{setReversed:function(bt){if(Et!==bt){let ue=t.get("EXT_clip_control");Et?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);let We=Pt;Pt=null,this.setClear(We)}Et=bt},getReversed:function(){return Et},setTest:function(bt){bt?St(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(bt){j!==bt&&!B&&(i.depthMask(bt),j=bt)},setFunc:function(bt){if(Et&&(bt=Fx[bt]),ot!==bt){switch(bt){case ac:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case uc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=bt}},setLocked:function(bt){B=bt},setClear:function(bt){Pt!==bt&&(Et&&(bt=1-bt),i.clearDepth(bt),Pt=bt)},reset:function(){B=!1,j=null,ot=null,Pt=null,Et=!1}}}function s(){let B=!1,Et=null,j=null,ot=null,Pt=null,bt=null,ue=null,We=null,vn=null;return{setTest:function(Re){B||(Re?St(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(Re){Et!==Re&&!B&&(i.stencilMask(Re),Et=Re)},setFunc:function(Re,Rn,ni){(j!==Re||ot!==Rn||Pt!==ni)&&(i.stencilFunc(Re,Rn,ni),j=Re,ot=Rn,Pt=ni)},setOp:function(Re,Rn,ni){(bt!==Re||ue!==Rn||We!==ni)&&(i.stencilOp(Re,Rn,ni),bt=Re,ue=Rn,We=ni)},setLocked:function(Re){B=Re},setClear:function(Re){vn!==Re&&(i.clearStencil(Re),vn=Re)},reset:function(){B=!1,Et=null,j=null,ot=null,Pt=null,bt=null,ue=null,We=null,vn=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],g=null,M=!1,m=null,h=null,R=null,A=null,S=null,k=null,L=null,F=new ie(0,0,0),U=0,E=!1,b=null,N=null,G=null,K=null,et=null,ft=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,_t=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(J)[1]),it=_t>=1):J.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),it=_t>=2);let Ct=null,Dt={},Zt=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Be=new sn().fromArray(Zt),nt=new sn().fromArray(_e);function mt(B,Et,j,ot){let Pt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(B,bt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<j;ue++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Et+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return bt}let kt={};kt[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(i.DEPTH_TEST),a.setFunc(yr),ut(!1),ye(Dh),St(i.CULL_FACE),z(ss);function St(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function te(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function oe(B,Et){return d[B]!==Et?(i.bindFramebuffer(B,Et),d[B]=Et,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Et),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function ge(B,Et){let j=p,ot=!1;if(B){j=f.get(Et),j===void 0&&(j=[],f.set(Et,j));let Pt=B.textures;if(j.length!==Pt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,ue=Pt.length;bt<ue;bt++)j[bt]=i.COLOR_ATTACHMENT0+bt;j.length=Pt.length,ot=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ot=!0);ot&&i.drawBuffers(j)}function Xe(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let be={[Rs]:i.FUNC_ADD,[qd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};be[Kd]=i.MIN,be[Zd]=i.MAX;let Ge={[Jd]:i.ZERO,[$d]:i.ONE,[jd]:i.SRC_COLOR,[sc]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[tp]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[rc]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[ap]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function z(B,Et,j,ot,Pt,bt,ue,We,vn,Re){if(B===ss){M===!0&&(te(i.BLEND),M=!1);return}if(M===!1&&(St(i.BLEND),M=!0),B!==Xd){if(B!==m||Re!==E){if((h!==Rs||S!==Rs)&&(i.blendEquation(i.FUNC_ADD),h=Rs,S=Rs),Re)switch(B){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,A=null,k=null,L=null,F.set(0,0,0),U=0,m=B,E=Re}return}Pt=Pt||Et,bt=bt||j,ue=ue||ot,(Et!==h||Pt!==S)&&(i.blendEquationSeparate(be[Et],be[Pt]),h=Et,S=Pt),(j!==R||ot!==A||bt!==k||ue!==L)&&(i.blendFuncSeparate(Ge[j],Ge[ot],Ge[bt],Ge[ue]),R=j,A=ot,k=bt,L=ue),(We.equals(F)===!1||vn!==U)&&(i.blendColor(We.r,We.g,We.b,vn),F.copy(We),U=vn),m=B,E=!1}function Mt(B,Et){B.side===ln?te(i.CULL_FACE):St(i.CULL_FACE);let j=B.side===Yn;Et&&(j=!j),ut(j),B.blending===gr&&B.transparent===!1?z(ss):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ot=B.stencilWrite;o.setTest(ot),ot&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),He(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function ye(B){B!==Vd?(St(i.CULL_FACE),B!==N&&(B===Dh?i.cullFace(i.BACK):B===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),N=B}function ee(B){B!==G&&(it&&i.lineWidth(B),G=B)}function He(B,Et,j){B?(St(i.POLYGON_OFFSET_FILL),(K!==Et||et!==j)&&(i.polygonOffset(Et,j),K=Et,et=j)):te(i.POLYGON_OFFSET_FILL)}function Ft(B){B?St(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+ft-1),Ct!==B&&(i.activeTexture(B),Ct=B)}function y(B,Et,j){j===void 0&&(Ct===null?j=i.TEXTURE0+ft-1:j=Ct);let ot=Dt[j];ot===void 0&&(ot={type:void 0,texture:void 0},Dt[j]=ot),(ot.type!==B||ot.texture!==Et)&&(Ct!==j&&(i.activeTexture(j),Ct=j),i.bindTexture(B,Et||kt[B]),ot.type=B,ot.texture=Et)}function X(){let B=Dt[Ct];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(B){Be.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Be.copy(B))}function lt(B){nt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),nt.copy(B))}function ve(B,Et){let j=c.get(Et);j===void 0&&(j=new WeakMap,c.set(Et,j));let ot=j.get(B);ot===void 0&&(ot=i.getUniformBlockIndex(Et,B.name),j.set(B,ot))}function le(B,Et){let ot=c.get(Et).get(B);l.get(Et)!==ot&&(i.uniformBlockBinding(Et,ot,B.__bindingPointIndex),l.set(Et,ot))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Ct=null,Dt={},d={},f=new WeakMap,p=[],g=null,M=!1,m=null,h=null,R=null,A=null,S=null,k=null,L=null,F=new ie(0,0,0),U=0,E=!1,b=null,N=null,G=null,K=null,et=null,Be.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:te,bindFramebuffer:oe,drawBuffers:ge,useProgram:Xe,setBlending:z,setMaterial:Mt,setFlipSided:ut,setCullFace:ye,setLineWidth:ee,setPolygonOffset:He,setScissorTest:Ft,activeTexture:C,bindTexture:y,unbindTexture:X,compressedTexImage2D:at,compressedTexImage3D:ht,texImage2D:Ot,texImage3D:$t,updateUBOMapping:ve,uniformBlockBinding:le,texStorage2D:Ee,texStorage3D:vt,texSubImage2D:rt,texSubImage3D:Yt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Nt,scissor:re,viewport:lt,reset:Ae}}function Df(i,t,e,n){let s=Bx(n);switch(e){case Xf:return i*t;case Yf:return i*t;case Kf:return i*t*2;case Fs:return i*t/s.components*s.byteLength;case Eu:return i*t/s.components*s.byteLength;case Zf:return i*t*2/s.components*s.byteLength;case wu:return i*t*2/s.components*s.byteLength;case qf:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case Tu:return i*t*4/s.components*s.byteLength;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case _c:return Math.max(i,16)*Math.max(t,8)/4;case gc:case xc:return Math.max(i,8)*Math.max(t,8)/2;case yc:case Mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ao:case Bc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jf:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bx(i){switch(i){case li:case Vf:return{byteLength:1,components:1};case da:case Gf:case An:return{byteLength:2,components:1};case bu:case Su:return{byteLength:2,components:4};case Ds:case Mu:case ei:return{byteLength:4,components:1};case Wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ox(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):Po("canvas")}function M(C,y,X){let at=1,ht=Ft(C);if((ht.width>X||ht.height>X)&&(at=X/Math.max(ht.width,ht.height)),at<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(at*ht.width),Yt=Math.floor(at*ht.height);d===void 0&&(d=g(rt,Yt));let Tt=y?g(rt,Yt):d;return Tt.width=rt,Tt.height=Yt,Tt.getContext("2d").drawImage(C,0,0,rt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Yt+")."),Tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function m(C){return C.generateMipmaps}function h(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,y,X,at,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=y;if(y===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),y===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),X===i.UNSIGNED_INT&&(rt=i.RGB32UI),X===i.BYTE&&(rt=i.RGB8I),X===i.SHORT&&(rt=i.RGB16I),X===i.INT&&(rt=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),X===i.UNSIGNED_INT&&(rt=i.RGBA32UI),X===i.BYTE&&(rt=i.RGBA8I),X===i.SHORT&&(rt=i.RGBA16I),X===i.INT&&(rt=i.RGBA32I)),y===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),y===i.RGBA){let Yt=ht?Zo:Ie.getTransfer(at);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=Yt===Ve?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(C,y){let X;return C?y===null||y===Ds||y===Sr?X=i.DEPTH24_STENCIL8:y===ei?X=i.DEPTH32F_STENCIL8:y===da&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ds||y===Sr?X=i.DEPTH_COMPONENT24:y===ei?X=i.DEPTH_COMPONENT32F:y===da&&(X=i.DEPTH_COMPONENT16),X}function k(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==Ne?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function L(C){let y=C.target;y.removeEventListener("dispose",L),U(y),y.isVideoTexture&&u.delete(y)}function F(C){let y=C.target;y.removeEventListener("dispose",F),b(y)}function U(C){let y=n.get(C);if(y.__webglInit===void 0)return;let X=C.source,at=f.get(X);if(at){let ht=at[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&E(C),Object.keys(at).length===0&&f.delete(X)}n.remove(C)}function E(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let X=C.source,at=f.get(X);delete at[y.__cacheKey],a.memory.textures--}function b(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(y.__webglFramebuffer[at]))for(let ht=0;ht<y.__webglFramebuffer[at].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[at][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[at]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[at])}else{if(Array.isArray(y.__webglFramebuffer))for(let at=0;at<y.__webglFramebuffer.length;at++)i.deleteFramebuffer(y.__webglFramebuffer[at]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let at=0;at<y.__webglColorRenderbuffer.length;at++)y.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[at]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=C.textures;for(let at=0,ht=X.length;at<ht;at++){let rt=n.get(X[at]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(X[at])}n.remove(C)}let N=0;function G(){N=0}function K(){let C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function et(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ft(C,y){let X=n.get(C);if(C.isVideoTexture&&ee(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){let at=C.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(X,C,y);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function it(C,y){let X=n.get(C);if(C.version>0&&X.__version!==C.version){nt(X,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function _t(C,y){let X=n.get(C);if(C.version>0&&X.__version!==C.version){nt(X,C,y);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function J(C,y){let X=n.get(C);if(C.version>0&&X.__version!==C.version){mt(X,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}let Ct={[oi]:i.REPEAT,[Is]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},Dt={[Fn]:i.NEAREST,[xp]:i.NEAREST_MIPMAP_NEAREST,[Ka]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},Zt={[Sp]:i.NEVER,[Cp]:i.ALWAYS,[Ep]:i.LESS,[$f]:i.LEQUAL,[wp]:i.EQUAL,[Rp]:i.GEQUAL,[Tp]:i.GREATER,[Ap]:i.NOTEQUAL};function _e(C,y){if(y.type===ei&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ne||y.magFilter===Tl||y.magFilter===Ka||y.magFilter===_i||y.minFilter===Ne||y.minFilter===Tl||y.minFilter===Ka||y.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ct[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ct[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ct[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Dt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Dt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Zt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fn||y.minFilter!==Ka&&y.minFilter!==_i||y.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Be(C,y){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",L));let at=y.source,ht=f.get(at);ht===void 0&&(ht={},f.set(at,ht));let rt=et(y);if(rt!==C.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ht[rt].usedTimes++;let Yt=ht[C.__cacheKey];Yt!==void 0&&(ht[C.__cacheKey].usedTimes--,Yt.usedTimes===0&&E(y)),C.__cacheKey=rt,C.__webglTexture=ht[rt].texture}return X}function nt(C,y,X){let at=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(at=i.TEXTURE_3D);let ht=Be(C,y),rt=y.source;e.bindTexture(at,C.__webglTexture,i.TEXTURE0+X);let Yt=n.get(rt);if(rt.version!==Yt.__version||ht===!0){e.activeTexture(i.TEXTURE0+X);let Tt=Ie.getPrimaries(Ie.workingColorSpace),Nt=y.colorSpace===xi?null:Ie.getPrimaries(y.colorSpace),Ee=y.colorSpace===xi||Tt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let vt=M(y.image,!1,s.maxTextureSize);vt=He(y,vt);let Ot=r.convert(y.format,y.colorSpace),$t=r.convert(y.type),re=A(y.internalFormat,Ot,$t,y.colorSpace,y.isVideoTexture);_e(at,y);let lt,ve=y.mipmaps,le=y.isVideoTexture!==!0,Ae=Yt.__version===void 0||ht===!0,B=rt.dataReady,Et=k(y,vt);if(y.isDepthTexture)re=S(y.format===Er,y.type),Ae&&(le?e.texStorage2D(i.TEXTURE_2D,1,re,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,re,vt.width,vt.height,0,Ot,$t,null));else if(y.isDataTexture)if(ve.length>0){le&&Ae&&e.texStorage2D(i.TEXTURE_2D,Et,re,ve[0].width,ve[0].height);for(let j=0,ot=ve.length;j<ot;j++)lt=ve[j],le?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,Ot,$t,lt.data):e.texImage2D(i.TEXTURE_2D,j,re,lt.width,lt.height,0,Ot,$t,lt.data);y.generateMipmaps=!1}else le?(Ae&&e.texStorage2D(i.TEXTURE_2D,Et,re,vt.width,vt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Ot,$t,vt.data)):e.texImage2D(i.TEXTURE_2D,0,re,vt.width,vt.height,0,Ot,$t,vt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){le&&Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,re,ve[0].width,ve[0].height,vt.depth);for(let j=0,ot=ve.length;j<ot;j++)if(lt=ve[j],y.format!==Je)if(Ot!==null)if(le){if(B)if(y.layerUpdates.size>0){let Pt=Df(lt.width,lt.height,y.format,y.type);for(let bt of y.layerUpdates){let ue=lt.data.subarray(bt*Pt/lt.data.BYTES_PER_ELEMENT,(bt+1)*Pt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,bt,lt.width,lt.height,1,Ot,ue)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,vt.depth,Ot,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,re,lt.width,lt.height,vt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,vt.depth,Ot,$t,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,re,lt.width,lt.height,vt.depth,0,Ot,$t,lt.data)}else{le&&Ae&&e.texStorage2D(i.TEXTURE_2D,Et,re,ve[0].width,ve[0].height);for(let j=0,ot=ve.length;j<ot;j++)lt=ve[j],y.format!==Je?Ot!==null?le?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,Ot,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,re,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,Ot,$t,lt.data):e.texImage2D(i.TEXTURE_2D,j,re,lt.width,lt.height,0,Ot,$t,lt.data)}else if(y.isDataArrayTexture)if(le){if(Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,re,vt.width,vt.height,vt.depth),B)if(y.layerUpdates.size>0){let j=Df(vt.width,vt.height,y.format,y.type);for(let ot of y.layerUpdates){let Pt=vt.data.subarray(ot*j/vt.data.BYTES_PER_ELEMENT,(ot+1)*j/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,vt.width,vt.height,1,Ot,$t,Pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ot,$t,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,re,vt.width,vt.height,vt.depth,0,Ot,$t,vt.data);else if(y.isData3DTexture)le?(Ae&&e.texStorage3D(i.TEXTURE_3D,Et,re,vt.width,vt.height,vt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ot,$t,vt.data)):e.texImage3D(i.TEXTURE_3D,0,re,vt.width,vt.height,vt.depth,0,Ot,$t,vt.data);else if(y.isFramebufferTexture){if(Ae)if(le)e.texStorage2D(i.TEXTURE_2D,Et,re,vt.width,vt.height);else{let j=vt.width,ot=vt.height;for(let Pt=0;Pt<Et;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,re,j,ot,0,Ot,$t,null),j>>=1,ot>>=1}}else if(ve.length>0){if(le&&Ae){let j=Ft(ve[0]);e.texStorage2D(i.TEXTURE_2D,Et,re,j.width,j.height)}for(let j=0,ot=ve.length;j<ot;j++)lt=ve[j],le?B&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Ot,$t,lt):e.texImage2D(i.TEXTURE_2D,j,re,Ot,$t,lt);y.generateMipmaps=!1}else if(le){if(Ae){let j=Ft(vt);e.texStorage2D(i.TEXTURE_2D,Et,re,j.width,j.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ot,$t,vt)}else e.texImage2D(i.TEXTURE_2D,0,re,Ot,$t,vt);m(y)&&h(at),Yt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function mt(C,y,X){if(y.image.length!==6)return;let at=Be(C,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);let rt=n.get(ht);if(ht.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+X);let Yt=Ie.getPrimaries(Ie.workingColorSpace),Tt=y.colorSpace===xi?null:Ie.getPrimaries(y.colorSpace),Nt=y.colorSpace===xi||Yt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,vt=y.image[0]&&y.image[0].isDataTexture,Ot=[];for(let ot=0;ot<6;ot++)!Ee&&!vt?Ot[ot]=M(y.image[ot],!0,s.maxCubemapSize):Ot[ot]=vt?y.image[ot].image:y.image[ot],Ot[ot]=He(y,Ot[ot]);let $t=Ot[0],re=r.convert(y.format,y.colorSpace),lt=r.convert(y.type),ve=A(y.internalFormat,re,lt,y.colorSpace),le=y.isVideoTexture!==!0,Ae=rt.__version===void 0||at===!0,B=ht.dataReady,Et=k(y,$t);_e(i.TEXTURE_CUBE_MAP,y);let j;if(Ee){le&&Ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ve,$t.width,$t.height);for(let ot=0;ot<6;ot++){j=Ot[ot].mipmaps;for(let Pt=0;Pt<j.length;Pt++){let bt=j[Pt];y.format!==Je?re!==null?le?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,0,0,bt.width,bt.height,re,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,ve,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,0,0,bt.width,bt.height,re,lt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,ve,bt.width,bt.height,0,re,lt,bt.data)}}}else{if(j=y.mipmaps,le&&Ae){j.length>0&&Et++;let ot=Ft(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,ve,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(vt){le?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ot[ot].width,Ot[ot].height,re,lt,Ot[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ve,Ot[ot].width,Ot[ot].height,0,re,lt,Ot[ot].data);for(let Pt=0;Pt<j.length;Pt++){let ue=j[Pt].image[ot].image;le?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,0,0,ue.width,ue.height,re,lt,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,ve,ue.width,ue.height,0,re,lt,ue.data)}}else{le?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,re,lt,Ot[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ve,re,lt,Ot[ot]);for(let Pt=0;Pt<j.length;Pt++){let bt=j[Pt];le?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,0,0,re,lt,bt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,ve,re,lt,bt.image[ot])}}}m(y)&&h(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function kt(C,y,X,at,ht,rt){let Yt=r.convert(X.format,X.colorSpace),Tt=r.convert(X.type),Nt=A(X.internalFormat,Yt,Tt,X.colorSpace),Ee=n.get(y),vt=n.get(X);if(vt.__renderTarget=y,!Ee.__hasExternalTextures){let Ot=Math.max(1,y.width>>rt),$t=Math.max(1,y.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,Nt,Ot,$t,y.depth,0,Yt,Tt,null):e.texImage2D(ht,rt,Nt,Ot,$t,0,Yt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ht,vt.__webglTexture,0,ut(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ht,vt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(C,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let at=y.depthTexture,ht=at&&at.isDepthTexture?at.type:null,rt=S(y.stencilBuffer,ht),Yt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=ut(y);ye(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,rt,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Yt,i.RENDERBUFFER,C)}else{let at=y.textures;for(let ht=0;ht<at.length;ht++){let rt=at[ht],Yt=r.convert(rt.format,rt.colorSpace),Tt=r.convert(rt.type),Nt=A(rt.internalFormat,Yt,Tt,rt.colorSpace),Ee=ut(y);X&&ye(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Nt,y.width,y.height):ye(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Nt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(y.depthTexture);at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ft(y.depthTexture,0);let ht=at.__webglTexture,rt=ut(y);if(y.depthTexture.format===vr)ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(y.depthTexture.format===Er)ye(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function oe(C){let y=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let at=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),at){let ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,at.removeEventListener("dispose",ht)};at.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=at}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");te(y.__webglFramebuffer,C)}else if(X){y.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[at]),y.__webglDepthbuffer[at]===void 0)y.__webglDepthbuffer[at]=i.createRenderbuffer(),St(y.__webglDepthbuffer[at],C,!1);else{let ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),St(y.__webglDepthbuffer,C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(C,y,X){let at=n.get(C);y!==void 0&&kt(at.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&oe(C)}function Xe(C){let y=C.texture,X=n.get(C),at=n.get(y);C.addEventListener("dispose",F);let ht=C.textures,rt=C.isWebGLCubeRenderTarget===!0,Yt=ht.length>1;if(Yt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=y.version,a.memory.textures++),rt){X.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[Tt]=[];for(let Nt=0;Nt<y.mipmaps.length;Nt++)X.__webglFramebuffer[Tt][Nt]=i.createFramebuffer()}else X.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)X.__webglFramebuffer[Tt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Yt)for(let Tt=0,Nt=ht.length;Tt<Nt;Tt++){let Ee=n.get(ht[Tt]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ye(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Tt=0;Tt<ht.length;Tt++){let Nt=ht[Tt];X.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Tt]);let Ee=r.convert(Nt.format,Nt.colorSpace),vt=r.convert(Nt.type),Ot=A(Nt.internalFormat,Ee,vt,Nt.colorSpace,C.isXRRenderTarget===!0),$t=ut(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Ot,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,X.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),St(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),_e(i.TEXTURE_CUBE_MAP,y);for(let Tt=0;Tt<6;Tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Nt=0;Nt<y.mipmaps.length;Nt++)kt(X.__webglFramebuffer[Tt][Nt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Nt);else kt(X.__webglFramebuffer[Tt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);m(y)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Yt){for(let Tt=0,Nt=ht.length;Tt<Nt;Tt++){let Ee=ht[Tt],vt=n.get(Ee);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),_e(i.TEXTURE_2D,Ee),kt(X.__webglFramebuffer,C,Ee,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),m(Ee)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,at.__webglTexture),_e(Tt,y),y.mipmaps&&y.mipmaps.length>0)for(let Nt=0;Nt<y.mipmaps.length;Nt++)kt(X.__webglFramebuffer[Nt],C,y,i.COLOR_ATTACHMENT0,Tt,Nt);else kt(X.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,Tt,0);m(y)&&h(Tt),e.unbindTexture()}C.depthBuffer&&oe(C)}function be(C){let y=C.textures;for(let X=0,at=y.length;X<at;X++){let ht=y[X];if(m(ht)){let rt=R(C),Yt=n.get(ht).__webglTexture;e.bindTexture(rt,Yt),h(rt),e.unbindTexture()}}}let Ge=[],z=[];function Mt(C){if(C.samples>0){if(ye(C)===!1){let y=C.textures,X=C.width,at=C.height,ht=i.COLOR_BUFFER_BIT,rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Yt=n.get(C),Tt=y.length>1;if(Tt)for(let Nt=0;Nt<y.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Nt=0;Nt<y.length;Nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Yt.__webglColorRenderbuffer[Nt]);let Ee=n.get(y[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,X,at,0,0,X,at,ht,i.NEAREST),l===!0&&(Ge.length=0,z.length=0,Ge.push(i.COLOR_ATTACHMENT0+Nt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(rt),z.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Nt=0;Nt<y.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Yt.__webglColorRenderbuffer[Nt]);let Ee=n.get(y[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,Ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ut(C){return Math.min(s.maxSamples,C.samples)}function ye(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(C){let y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function He(C,y){let X=C.colorSpace,at=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==us&&X!==xi&&(Ie.getTransfer(X)===Ve?(at!==Je||ht!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function Ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.setTexture2D=ft,this.setTexture2DArray=it,this.setTexture3D=_t,this.setTextureCube=J,this.rebindTextures=ge,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=ye}function zx(i,t){function e(n,s=xi){let r,a=Ie.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===bu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Su)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vf)return i.BYTE;if(n===Gf)return i.SHORT;if(n===da)return i.UNSIGNED_SHORT;if(n===Mu)return i.INT;if(n===Ds)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Xf)return i.ALPHA;if(n===qf)return i.RGB;if(n===Je)return i.RGBA;if(n===Yf)return i.LUMINANCE;if(n===Kf)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===Fs)return i.RED;if(n===Eu)return i.RED_INTEGER;if(n===Zf)return i.RG;if(n===wu)return i.RG_INTEGER;if(n===Tu)return i.RGBA_INTEGER;if(n===So||n===Eo||n===wo||n===To)if(a===Ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===vc||n===xc||n===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Mc||n===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===Mc)return a===Ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===Ec||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Fc||n===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Bc||n===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return a===Ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jf||n===zc||n===Hc||n===kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nu=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},mr=class extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hx={type:"move"},ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),h=this._getHandJoint(c,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:kx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $e(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends as{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null,M=new iu,m=e.getContextAttributes(),h=null,R=null,A=[],S=[],k=new xe,L=null,F=new Tn;F.viewport=new sn;let U=new Tn;U.viewport=new sn;let E=[F,U],b=new nu,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let mt=A[nt];return mt===void 0&&(mt=new ha,A[nt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(nt){let mt=A[nt];return mt===void 0&&(mt=new ha,A[nt]=mt),mt.getGripSpace()},this.getHand=function(nt){let mt=A[nt];return mt===void 0&&(mt=new ha,A[nt]=mt),mt.getHandSpace()};function K(nt){let mt=S.indexOf(nt.inputSource);if(mt===-1)return;let kt=A[mt];kt!==void 0&&(kt.update(nt.inputSource,nt.frame,c||a),kt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function et(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",ft);for(let nt=0;nt<A.length;nt++){let mt=S[nt];mt!==null&&(S[nt]=null,A[nt].disconnect(mt))}N=null,G=null,M.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,R=null,Be.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",et),s.addEventListener("inputsourceschange",ft),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new cn(p.framebufferWidth,p.framebufferHeight,{format:Je,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let mt=null,kt=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?Er:vr,kt=m.stencil?Sr:Ds);let te={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(te),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new cn(f.textureWidth,f.textureHeight,{format:Je,type:li,depthTexture:new ko(f.textureWidth,f.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ft(nt){for(let mt=0;mt<nt.removed.length;mt++){let kt=nt.removed[mt],St=S.indexOf(kt);St>=0&&(S[St]=null,A[St].disconnect(kt))}for(let mt=0;mt<nt.added.length;mt++){let kt=nt.added[mt],St=S.indexOf(kt);if(St===-1){for(let oe=0;oe<A.length;oe++)if(oe>=S.length){S.push(kt),St=oe;break}else if(S[oe]===null){S[oe]=kt,St=oe;break}if(St===-1)break}let te=A[St];te&&te.connect(kt)}}let it=new V,_t=new V;function J(nt,mt,kt){it.setFromMatrixPosition(mt.matrixWorld),_t.setFromMatrixPosition(kt.matrixWorld);let St=it.distanceTo(_t),te=mt.projectionMatrix.elements,oe=kt.projectionMatrix.elements,ge=te[14]/(te[10]-1),Xe=te[14]/(te[10]+1),be=(te[9]+1)/te[5],Ge=(te[9]-1)/te[5],z=(te[8]-1)/te[0],Mt=(oe[8]+1)/oe[0],ut=ge*z,ye=ge*Mt,ee=St/(-z+Mt),He=ee*-z;if(mt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(He),nt.translateZ(ee),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),te[10]===-1)nt.projectionMatrix.copy(mt.projectionMatrix),nt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let Ft=ge+ee,C=Xe+ee,y=ut-He,X=ye+(St-He),at=be*Xe/C*Ft,ht=Ge*Xe/C*Ft;nt.projectionMatrix.makePerspective(y,X,at,ht,Ft,C),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Ct(nt,mt){mt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(mt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let mt=nt.near,kt=nt.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(kt=M.depthFar)),b.near=U.near=F.near=mt,b.far=U.far=F.far=kt,(N!==b.near||G!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,G=b.far),F.layers.mask=nt.layers.mask|2,U.layers.mask=nt.layers.mask|4,b.layers.mask=F.layers.mask|U.layers.mask;let St=nt.parent,te=b.cameras;Ct(b,St);for(let oe=0;oe<te.length;oe++)Ct(te[oe],St);te.length===2?J(b,F,U):b.projectionMatrix.copy(F.projectionMatrix),Dt(nt,b,St)};function Dt(nt,mt,kt){kt===null?nt.matrix.copy(mt.matrixWorld):(nt.matrix.copy(kt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(mt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(mt.projectionMatrix),nt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=pa*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let Zt=null;function _e(nt,mt){if(u=mt.getViewerPose(c||a),g=mt,u!==null){let kt=u.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let St=!1;kt.length!==b.cameras.length&&(b.cameras.length=0,St=!0);for(let oe=0;oe<kt.length;oe++){let ge=kt[oe],Xe=null;if(p!==null)Xe=p.getViewport(ge);else{let Ge=d.getViewSubImage(f,ge);Xe=Ge.viewport,oe===0&&(t.setRenderTargetTextures(R,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),t.setRenderTarget(R))}let be=E[oe];be===void 0&&(be=new Tn,be.layers.enable(oe),be.viewport=new sn,E[oe]=be),be.matrix.fromArray(ge.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ge.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),oe===0&&(b.matrix.copy(be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),St===!0&&b.cameras.push(be)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")){let oe=d.getDepthInformation(kt[0]);oe&&oe.isValid&&oe.texture&&M.init(t,oe,s.renderState)}}for(let kt=0;kt<A.length;kt++){let St=S[kt],te=A[kt];St!==null&&te!==void 0&&te.update(St,mt,c||a)}Zt&&Zt(nt,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let Be=new nd;Be.setAnimationLoop(_e),this.setAnimationLoop=function(nt){Zt=nt},this.dispose=function(){}}},Ts=new Wi,Gx=new ze;function Wx(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,ed(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,R,A,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),M(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,R,A):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Yn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Yn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let R=t.get(h),A=R.envMap,S=R.envMapRotation;A&&(m.envMap.value=A,Ts.copy(S),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Ts)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,R,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*R,m.scale.value=A*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,R){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){let R=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){let S=A.program;n.uniformBlockBinding(R,S)}function c(R,A){let S=s[R.id];S===void 0&&(g(R),S=u(R),s[R.id]=S,R.addEventListener("dispose",m));let k=A.program;n.updateUBOMapping(R,k);let L=t.render.frame;r[R.id]!==L&&(f(R),r[R.id]=L)}function u(R){let A=d();R.__bindingPointIndex=A;let S=i.createBuffer(),k=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,k,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,S),S}function d(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let A=s[R.id],S=R.uniforms,k=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let L=0,F=S.length;L<F;L++){let U=Array.isArray(S[L])?S[L]:[S[L]];for(let E=0,b=U.length;E<b;E++){let N=U[E];if(p(N,L,E,k)===!0){let G=N.__offset,K=Array.isArray(N.value)?N.value:[N.value],et=0;for(let ft=0;ft<K.length;ft++){let it=K[ft],_t=M(it);typeof it=="number"||typeof it=="boolean"?(N.__data[0]=it,i.bufferSubData(i.UNIFORM_BUFFER,G+et,N.__data)):it.isMatrix3?(N.__data[0]=it.elements[0],N.__data[1]=it.elements[1],N.__data[2]=it.elements[2],N.__data[3]=0,N.__data[4]=it.elements[3],N.__data[5]=it.elements[4],N.__data[6]=it.elements[5],N.__data[7]=0,N.__data[8]=it.elements[6],N.__data[9]=it.elements[7],N.__data[10]=it.elements[8],N.__data[11]=0):(it.toArray(N.__data,et),et+=_t.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,A,S,k){let L=R.value,F=A+"_"+S;if(k[F]===void 0)return typeof L=="number"||typeof L=="boolean"?k[F]=L:k[F]=L.clone(),!0;{let U=k[F];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return k[F]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function g(R){let A=R.uniforms,S=0,k=16;for(let F=0,U=A.length;F<U;F++){let E=Array.isArray(A[F])?A[F]:[A[F]];for(let b=0,N=E.length;b<N;b++){let G=E[b],K=Array.isArray(G.value)?G.value:[G.value];for(let et=0,ft=K.length;et<ft;et++){let it=K[et],_t=M(it),J=S%k,Ct=J%_t.boundary,Dt=J+Ct;S+=Ct,Dt!==0&&k-Dt<_t.storage&&(S+=k-Dt),G.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=_t.storage}}}let L=S%k;return L>0&&(S+=k-L),R.__size=S,R.__cache={},this}function M(R){let A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){let A=R.target;A.removeEventListener("dispose",m);let S=a.indexOf(A.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Vo=class{constructor(t={}){let{canvas:e=qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),M=new Int32Array(4),m=null,h=null,R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=Ai,this.toneMappingExposure=1;let S=this,k=!1,L=0,F=0,U=null,E=-1,b=null,N=new sn,G=new sn,K=null,et=new ie(0),ft=0,it=e.width,_t=e.height,J=1,Ct=null,Dt=null,Zt=new sn(0,0,it,_t),_e=new sn(0,0,it,_t),Be=!1,nt=new zo,mt=!1,kt=!1,St=new ze,te=new ze,oe=new V,ge=new sn,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function Ge(){return U===null?J:1}let z=n;function Mt(v,H){return e.getContext(v,H)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yu}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),z===null){let H="webgl2";if(z=Mt(H,v),z===null)throw Mt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ut,ye,ee,He,Ft,C,y,X,at,ht,rt,Yt,Tt,Nt,Ee,vt,Ot,$t,re,lt,ve,le,Ae,B;function Et(){ut=new ov(z),ut.init(),le=new zx(z,ut),ye=new ev(z,ut,t,le),ee=new Nx(z,ut),ye.reverseDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),He=new uv(z),Ft=new Sx,C=new Ox(z,ut,ee,Ft,ye,le,He),y=new iv(S),X=new av(S),at=new vm(z),Ae=new Qg(z,at),ht=new lv(z,at,He,Ae),rt=new fv(z,ht,at,He),re=new hv(z,ye,C),vt=new nv(Ft),Yt=new bx(S,y,X,ut,ye,Ae,vt),Tt=new Wx(S,Ft),Nt=new wx,Ee=new Ix(ut),$t=new jg(S,y,X,ee,rt,p,l),Ot=new Ux(S,rt,ye),B=new Xx(z,He,ye,ee),lt=new tv(z,ut,He),ve=new cv(z,ut,He),He.programs=Yt.programs,S.capabilities=ye,S.extensions=ut,S.properties=Ft,S.renderLists=Nt,S.shadowMap=Ot,S.state=ee,S.info=He}Et();let j=new su(S,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let v=ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(v){v!==void 0&&(J=v,this.setSize(it,_t,!1))},this.getSize=function(v){return v.set(it,_t)},this.setSize=function(v,H,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=v,_t=H,e.width=Math.floor(v*J),e.height=Math.floor(H*J),Y===!0&&(e.style.width=v+"px",e.style.height=H+"px"),this.setViewport(0,0,v,H)},this.getDrawingBufferSize=function(v){return v.set(it*J,_t*J).floor()},this.setDrawingBufferSize=function(v,H,Y){it=v,_t=H,J=Y,e.width=Math.floor(v*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,v,H)},this.getCurrentViewport=function(v){return v.copy(N)},this.getViewport=function(v){return v.copy(Zt)},this.setViewport=function(v,H,Y,W){v.isVector4?Zt.set(v.x,v.y,v.z,v.w):Zt.set(v,H,Y,W),ee.viewport(N.copy(Zt).multiplyScalar(J).round())},this.getScissor=function(v){return v.copy(_e)},this.setScissor=function(v,H,Y,W){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,H,Y,W),ee.scissor(G.copy(_e).multiplyScalar(J).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(v){ee.setScissorTest(Be=v)},this.setOpaqueSort=function(v){Ct=v},this.setTransparentSort=function(v){Dt=v},this.getClearColor=function(v){return v.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(v=!0,H=!0,Y=!0){let W=0;if(v){let O=!1;if(U!==null){let gt=U.texture.format;O=gt===Tu||gt===wu||gt===Eu}if(O){let gt=U.texture.type,It=gt===li||gt===Ds||gt===da||gt===Sr||gt===bu||gt===Su,Wt=$t.getClearColor(),Xt=$t.getClearAlpha(),ae=Wt.r,he=Wt.g,Vt=Wt.b;It?(g[0]=ae,g[1]=he,g[2]=Vt,g[3]=Xt,z.clearBufferuiv(z.COLOR,0,g)):(M[0]=ae,M[1]=he,M[2]=Vt,M[3]=Xt,z.clearBufferiv(z.COLOR,0,M))}else W|=z.COLOR_BUFFER_BIT}H&&(W|=z.DEPTH_BUFFER_BIT),Y&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Nt.dispose(),Ee.dispose(),Ft.dispose(),y.dispose(),X.dispose(),rt.dispose(),Ae.dispose(),B.dispose(),Yt.dispose(),j.dispose(),j.removeEventListener("sessionstart",hs),j.removeEventListener("sessionend",fs),Oe.stop()};function ot(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let v=He.autoReset,H=Ot.enabled,Y=Ot.autoUpdate,W=Ot.needsUpdate,O=Ot.type;Et(),He.autoReset=v,Ot.enabled=H,Ot.autoUpdate=Y,Ot.needsUpdate=W,Ot.type=O}function bt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ue(v){let H=v.target;H.removeEventListener("dispose",ue),We(H)}function We(v){vn(v),Ft.remove(v)}function vn(v){let H=Ft.get(v).programs;H!==void 0&&(H.forEach(function(Y){Yt.releaseProgram(Y)}),v.isShaderMaterial&&Yt.releaseShaderCache(v))}this.renderBufferDirect=function(v,H,Y,W,O,gt){H===null&&(H=Xe);let It=O.isMesh&&O.matrixWorld.determinant()<0,Wt=Lt(v,H,Y,W,O);ee.setMaterial(W,It);let Xt=Y.index,ae=1;if(W.wireframe===!0){if(Xt=ht.getWireframeAttribute(Y),Xt===void 0)return;ae=2}let he=Y.drawRange,Vt=Y.attributes.position,Se=he.start*ae,Le=(he.start+he.count)*ae;gt!==null&&(Se=Math.max(Se,gt.start*ae),Le=Math.min(Le,(gt.start+gt.count)*ae)),Xt!==null?(Se=Math.max(Se,0),Le=Math.min(Le,Xt.count)):Vt!=null&&(Se=Math.max(Se,0),Le=Math.min(Le,Vt.count));let Ue=Le-Se;if(Ue<0||Ue===1/0)return;Ae.setup(O,W,Wt,Y,Xt);let Ze,pe=lt;if(Xt!==null&&(Ze=at.get(Xt),pe=ve,pe.setIndex(Ze)),O.isMesh)W.wireframe===!0?(ee.setLineWidth(W.wireframeLinewidth*Ge()),pe.setMode(z.LINES)):pe.setMode(z.TRIANGLES);else if(O.isLine){let Gt=W.linewidth;Gt===void 0&&(Gt=1),ee.setLineWidth(Gt*Ge()),O.isLineSegments?pe.setMode(z.LINES):O.isLineLoop?pe.setMode(z.LINE_LOOP):pe.setMode(z.LINE_STRIP)}else O.isPoints?pe.setMode(z.POINTS):O.isSprite&&pe.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)pe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))pe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Gt=O._multiDrawStarts,ui=O._multiDrawCounts,Pe=O._multiDrawCount,On=Xt?at.get(Xt).bytesPerElement:1,bi=Ft.get(W).currentProgram.getUniforms();for(let Sn=0;Sn<Pe;Sn++)bi.setValue(z,"_gl_DrawID",Sn),pe.render(Gt[Sn]/On,ui[Sn])}else if(O.isInstancedMesh)pe.renderInstances(Se,Ue,O.count);else if(Y.isInstancedBufferGeometry){let Gt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ui=Math.min(Y.instanceCount,Gt);pe.renderInstances(Se,Ue,ui)}else pe.render(Se,Ue)};function Re(v,H,Y){v.transparent===!0&&v.side===ln&&v.forceSinglePass===!1?(v.side=Yn,v.needsUpdate=!0,bn(v,H,Y),v.side=rs,v.needsUpdate=!0,bn(v,H,Y),v.side=ln):bn(v,H,Y)}this.compile=function(v,H,Y=null){Y===null&&(Y=v),h=Ee.get(Y),h.init(H),A.push(h),Y.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),v!==Y&&v.traverseVisible(function(O){O.isLight&&O.layers.test(H.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let W=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let gt=O.material;if(gt)if(Array.isArray(gt))for(let It=0;It<gt.length;It++){let Wt=gt[It];Re(Wt,Y,O),W.add(Wt)}else Re(gt,Y,O),W.add(gt)}),A.pop(),h=null,W},this.compileAsync=function(v,H,Y=null){let W=this.compile(v,H,Y);return new Promise(O=>{function gt(){if(W.forEach(function(It){Ft.get(It).currentProgram.isReady()&&W.delete(It)}),W.size===0){O(v);return}setTimeout(gt,10)}ut.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Rn=null;function ni(v){Rn&&Rn(v)}function hs(){Oe.stop()}function fs(){Oe.start()}let Oe=new nd;Oe.setAnimationLoop(ni),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(v){Rn=v,j.setAnimationLoop(v),v===null?Oe.stop():Oe.start()},j.addEventListener("sessionstart",hs),j.addEventListener("sessionend",fs),this.render=function(v,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(H),H=j.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,H,U),h=Ee.get(v,A.length),h.init(H),A.push(h),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),nt.setFromProjectionMatrix(te),kt=this.localClippingEnabled,mt=vt.init(this.clippingPlanes,kt),m=Nt.get(v,R.length),m.init(),R.push(m),j.enabled===!0&&j.isPresenting===!0){let gt=S.xr.getDepthSensingMesh();gt!==null&&ci(gt,H,-1/0,S.sortObjects)}ci(v,H,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Ct,Dt),be=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,be&&$t.addToRenderList(m,v),this.info.render.frame++,mt===!0&&vt.beginShadows();let Y=h.state.shadowsArray;Ot.render(Y,v,H),mt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(h.setupLights(),H.isArrayCamera){let gt=H.cameras;if(O.length>0)for(let It=0,Wt=gt.length;It<Wt;It++){let Xt=gt[It];Ns(W,O,v,Xt)}be&&$t.render(v);for(let It=0,Wt=gt.length;It<Wt;It++){let Xt=gt[It];Mn(m,v,Xt,Xt.viewport)}}else O.length>0&&Ns(W,O,v,H),be&&$t.render(v),Mn(m,v,H);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(S,v,H),Ae.resetDefaultState(),E=-1,b=null,A.pop(),A.length>0?(h=A[A.length-1],mt===!0&&vt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function ci(v,H,Y,W){if(v.visible===!1)return;if(v.layers.test(H.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(H);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||nt.intersectsSprite(v)){W&&ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(te);let It=rt.update(v),Wt=v.material;Wt.visible&&m.push(v,It,Wt,Y,ge.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||nt.intersectsObject(v))){let It=rt.update(v),Wt=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ge.copy(v.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ge.copy(It.boundingSphere.center)),ge.applyMatrix4(v.matrixWorld).applyMatrix4(te)),Array.isArray(Wt)){let Xt=It.groups;for(let ae=0,he=Xt.length;ae<he;ae++){let Vt=Xt[ae],Se=Wt[Vt.materialIndex];Se&&Se.visible&&m.push(v,It,Se,Y,ge.z,Vt)}}else Wt.visible&&m.push(v,It,Wt,Y,ge.z,null)}}let gt=v.children;for(let It=0,Wt=gt.length;It<Wt;It++)ci(gt[It],H,Y,W)}function Mn(v,H,Y,W){let O=v.opaque,gt=v.transmissive,It=v.transparent;h.setupLightsView(Y),mt===!0&&vt.setGlobalState(S.clippingPlanes,Y),W&&ee.viewport(N.copy(W)),O.length>0&&qe(O,H,Y),gt.length>0&&qe(gt,H,Y),It.length>0&&qe(It,H,Y),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ns(v,H,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new cn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?An:li,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));let gt=h.state.transmissionRenderTarget[W.id],It=W.viewport||N;gt.setSize(It.z,It.w);let Wt=S.getRenderTarget();S.setRenderTarget(gt),S.getClearColor(et),ft=S.getClearAlpha(),ft<1&&S.setClearColor(16777215,.5),S.clear(),be&&$t.render(Y);let Xt=S.toneMapping;S.toneMapping=Ai;let ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),mt===!0&&vt.setGlobalState(S.clippingPlanes,W),qe(v,Y,W),C.updateMultisampleRenderTarget(gt),C.updateRenderTargetMipmap(gt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Vt=0,Se=H.length;Vt<Se;Vt++){let Le=H[Vt],Ue=Le.object,Ze=Le.geometry,pe=Le.material,Gt=Le.group;if(pe.side===ln&&Ue.layers.test(W.layers)){let ui=pe.side;pe.side=Yn,pe.needsUpdate=!0,Ye(Ue,Y,W,Ze,pe,Gt),pe.side=ui,pe.needsUpdate=!0,he=!0}}he===!0&&(C.updateMultisampleRenderTarget(gt),C.updateRenderTargetMipmap(gt))}S.setRenderTarget(Wt),S.setClearColor(et,ft),ae!==void 0&&(W.viewport=ae),S.toneMapping=Xt}function qe(v,H,Y){let W=H.isScene===!0?H.overrideMaterial:null;for(let O=0,gt=v.length;O<gt;O++){let It=v[O],Wt=It.object,Xt=It.geometry,ae=W===null?It.material:W,he=It.group;Wt.layers.test(Y.layers)&&Ye(Wt,H,Y,Xt,ae,he)}}function Ye(v,H,Y,W,O,gt){v.onBeforeRender(S,H,Y,W,O,gt),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(S,H,Y,W,v,gt),O.transparent===!0&&O.side===ln&&O.forceSinglePass===!1?(O.side=Yn,O.needsUpdate=!0,S.renderBufferDirect(Y,H,W,O,v,gt),O.side=rs,O.needsUpdate=!0,S.renderBufferDirect(Y,H,W,O,v,gt),O.side=ln):S.renderBufferDirect(Y,H,W,O,v,gt),v.onAfterRender(S,H,Y,W,O,gt)}function bn(v,H,Y){H.isScene!==!0&&(H=Xe);let W=Ft.get(v),O=h.state.lights,gt=h.state.shadowsArray,It=O.state.version,Wt=Yt.getParameters(v,O.state,gt,H,Y),Xt=Yt.getProgramCacheKey(Wt),ae=W.programs;W.environment=v.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(v.isMeshStandardMaterial?X:y).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?H.environmentRotation:v.envMapRotation,ae===void 0&&(v.addEventListener("dispose",ue),ae=new Map,W.programs=ae);let he=ae.get(Xt);if(he!==void 0){if(W.currentProgram===he&&W.lightsStateVersion===It)return wt(v,Wt),he}else Wt.uniforms=Yt.getUniforms(v),v.onBeforeCompile(Wt,S),he=Yt.acquireProgram(Wt,Xt),ae.set(Xt,he),W.uniforms=Wt.uniforms;let Vt=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Vt.clippingPlanes=vt.uniform),wt(v,Wt),W.needsLights=Os(v),W.lightsStateVersion=It,W.needsLights&&(Vt.ambientLightColor.value=O.state.ambient,Vt.lightProbe.value=O.state.probe,Vt.directionalLights.value=O.state.directional,Vt.directionalLightShadows.value=O.state.directionalShadow,Vt.spotLights.value=O.state.spot,Vt.spotLightShadows.value=O.state.spotShadow,Vt.rectAreaLights.value=O.state.rectArea,Vt.ltc_1.value=O.state.rectAreaLTC1,Vt.ltc_2.value=O.state.rectAreaLTC2,Vt.pointLights.value=O.state.point,Vt.pointLightShadows.value=O.state.pointShadow,Vt.hemisphereLights.value=O.state.hemi,Vt.directionalShadowMap.value=O.state.directionalShadowMap,Vt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Vt.spotShadowMap.value=O.state.spotShadowMap,Vt.spotLightMatrix.value=O.state.spotLightMatrix,Vt.spotLightMap.value=O.state.spotLightMap,Vt.pointShadowMap.value=O.state.pointShadowMap,Vt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=he,W.uniformsList=null,he}function Bs(v){if(v.uniformsList===null){let H=v.currentProgram.getUniforms();v.uniformsList=_r.seqWithValue(H.seq,v.uniforms)}return v.uniformsList}function wt(v,H){let Y=Ft.get(v);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Lt(v,H,Y,W,O){H.isScene!==!0&&(H=Xe),C.resetTextureUnits();let gt=H.fog,It=W.isMeshStandardMaterial?H.environment:null,Wt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:us,Xt=(W.isMeshStandardMaterial?X:y).get(W.envMap||It),ae=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,he=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Vt=!!Y.morphAttributes.position,Se=!!Y.morphAttributes.normal,Le=!!Y.morphAttributes.color,Ue=Ai;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ue=S.toneMapping);let Ze=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=Ze!==void 0?Ze.length:0,Gt=Ft.get(W),ui=h.state.lights;if(mt===!0&&(kt===!0||v!==b)){let Wn=v===b&&W.id===E;vt.setState(W,v,Wn)}let Pe=!1;W.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==ui.state.version||Gt.outputColorSpace!==Wt||O.isBatchedMesh&&Gt.batching===!1||!O.isBatchedMesh&&Gt.batching===!0||O.isBatchedMesh&&Gt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Gt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Gt.instancing===!1||!O.isInstancedMesh&&Gt.instancing===!0||O.isSkinnedMesh&&Gt.skinning===!1||!O.isSkinnedMesh&&Gt.skinning===!0||O.isInstancedMesh&&Gt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Gt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Gt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Gt.instancingMorph===!1&&O.morphTexture!==null||Gt.envMap!==Xt||W.fog===!0&&Gt.fog!==gt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==vt.numPlanes||Gt.numIntersection!==vt.numIntersection)||Gt.vertexAlphas!==ae||Gt.vertexTangents!==he||Gt.morphTargets!==Vt||Gt.morphNormals!==Se||Gt.morphColors!==Le||Gt.toneMapping!==Ue||Gt.morphTargetsCount!==pe)&&(Pe=!0):(Pe=!0,Gt.__version=W.version);let On=Gt.currentProgram;Pe===!0&&(On=bn(W,H,O));let bi=!1,Sn=!1,qi=!1,we=On.getUniforms(),Zn=Gt.uniforms;if(ee.useProgram(On.program)&&(bi=!0,Sn=!0,qi=!0),W.id!==E&&(E=W.id,Sn=!0),bi||b!==v){ee.buffers.depth.getReversed()?(St.copy(v.projectionMatrix),Kp(St),Zp(St),we.setValue(z,"projectionMatrix",St)):we.setValue(z,"projectionMatrix",v.projectionMatrix),we.setValue(z,"viewMatrix",v.matrixWorldInverse);let Ei=we.map.cameraPosition;Ei!==void 0&&Ei.setValue(z,oe.setFromMatrixPosition(v.matrixWorld)),ye.logarithmicDepthBuffer&&we.setValue(z,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&we.setValue(z,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,Sn=!0,qi=!0)}if(O.isSkinnedMesh){we.setOptional(z,O,"bindMatrix"),we.setOptional(z,O,"bindMatrixInverse");let Wn=O.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),we.setValue(z,"boneTexture",Wn.boneTexture,C))}O.isBatchedMesh&&(we.setOptional(z,O,"batchingTexture"),we.setValue(z,"batchingTexture",O._matricesTexture,C),we.setOptional(z,O,"batchingIdTexture"),we.setValue(z,"batchingIdTexture",O._indirectTexture,C),we.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&we.setValue(z,"batchingColorTexture",O._colorsTexture,C));let Si=Y.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&re.update(O,Y,On),(Sn||Gt.receiveShadow!==O.receiveShadow)&&(Gt.receiveShadow=O.receiveShadow,we.setValue(z,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Zn.envMap.value=Xt,Zn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&H.environment!==null&&(Zn.envMapIntensity.value=H.environmentIntensity),Sn&&(we.setValue(z,"toneMappingExposure",S.toneMappingExposure),Gt.needsLights&&Du(Zn,qi),gt&&W.fog===!0&&Tt.refreshFogUniforms(Zn,gt),Tt.refreshMaterialUniforms(Zn,W,J,_t,h.state.transmissionRenderTarget[v.id]),_r.upload(z,Bs(Gt),Zn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_r.upload(z,Bs(Gt),Zn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&we.setValue(z,"center",O.center),we.setValue(z,"modelViewMatrix",O.modelViewMatrix),we.setValue(z,"normalMatrix",O.normalMatrix),we.setValue(z,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Wn=W.uniformsGroups;for(let Ei=0,zn=Wn.length;Ei<zn;Ei++){let Cn=Wn[Ei];B.update(Cn,On),B.bind(Cn,On)}}return On}function Du(v,H){v.ambientLightColor.needsUpdate=H,v.lightProbe.needsUpdate=H,v.directionalLights.needsUpdate=H,v.directionalLightShadows.needsUpdate=H,v.pointLights.needsUpdate=H,v.pointLightShadows.needsUpdate=H,v.spotLights.needsUpdate=H,v.spotLightShadows.needsUpdate=H,v.rectAreaLights.needsUpdate=H,v.hemisphereLights.needsUpdate=H}function Os(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,H,Y){Ft.get(v.texture).__webglTexture=H,Ft.get(v.depthTexture).__webglTexture=Y;let W=Ft.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=Y===void 0,W.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,H){let Y=Ft.get(v);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(v,H=0,Y=0){U=v,L=H,F=Y;let W=!0,O=null,gt=!1,It=!1;if(v){let Xt=Ft.get(v);if(Xt.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(z.FRAMEBUFFER,null),W=!1;else if(Xt.__webglFramebuffer===void 0)C.setupRenderTarget(v);else if(Xt.__hasExternalTextures)C.rebindTextures(v,Ft.get(v.texture).__webglTexture,Ft.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Vt=v.depthTexture;if(Xt.__boundDepthTexture!==Vt){if(Vt!==null&&Ft.has(Vt)&&(v.width!==Vt.image.width||v.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(v)}}let ae=v.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(It=!0);let he=Ft.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(he[H])?O=he[H][Y]:O=he[H],gt=!0):v.samples>0&&C.useMultisampledRTT(v)===!1?O=Ft.get(v).__webglMultisampledFramebuffer:Array.isArray(he)?O=he[Y]:O=he,N.copy(v.viewport),G.copy(v.scissor),K=v.scissorTest}else N.copy(Zt).multiplyScalar(J).floor(),G.copy(_e).multiplyScalar(J).floor(),K=Be;if(ee.bindFramebuffer(z.FRAMEBUFFER,O)&&W&&ee.drawBuffers(v,O),ee.viewport(N),ee.scissor(G),ee.setScissorTest(K),gt){let Xt=Ft.get(v.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Xt.__webglTexture,Y)}else if(It){let Xt=Ft.get(v.texture),ae=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,Y||0,ae)}E=-1},this.readRenderTargetPixels=function(v,H,Y,W,O,gt,It){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt){ee.bindFramebuffer(z.FRAMEBUFFER,Wt);try{let Xt=v.texture,ae=Xt.format,he=Xt.type;if(!ye.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=v.width-W&&Y>=0&&Y<=v.height-O&&z.readPixels(H,Y,W,O,le.convert(ae),le.convert(he),gt)}finally{let Xt=U!==null?Ft.get(U).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(v,H,Y,W,O,gt,It){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt){let Xt=v.texture,ae=Xt.format,he=Xt.type;if(!ye.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=v.width-W&&Y>=0&&Y<=v.height-O){ee.bindFramebuffer(z.FRAMEBUFFER,Wt);let Vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.bufferData(z.PIXEL_PACK_BUFFER,gt.byteLength,z.STREAM_READ),z.readPixels(H,Y,W,O,le.convert(ae),le.convert(he),0);let Se=U!==null?Ft.get(U).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,Se);let Le=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Yp(z,Le,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,gt),z.deleteBuffer(Vt),z.deleteSync(Le),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,H=null,Y=0){v.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,v=arguments[1]);let W=Math.pow(2,-Y),O=Math.floor(v.image.width*W),gt=Math.floor(v.image.height*W),It=H!==null?H.x:0,Wt=H!==null?H.y:0;C.setTexture2D(v,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,It,Wt,O,gt),ee.unbindTexture()},this.copyTextureToTexture=function(v,H,Y=null,W=null,O=0){v.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],H=arguments[2],O=arguments[3]||0,Y=null);let gt,It,Wt,Xt,ae,he,Vt,Se,Le,Ue=v.isCompressedTexture?v.mipmaps[O]:v.image;Y!==null?(gt=Y.max.x-Y.min.x,It=Y.max.y-Y.min.y,Wt=Y.isBox3?Y.max.z-Y.min.z:1,Xt=Y.min.x,ae=Y.min.y,he=Y.isBox3?Y.min.z:0):(gt=Ue.width,It=Ue.height,Wt=Ue.depth||1,Xt=0,ae=0,he=0),W!==null?(Vt=W.x,Se=W.y,Le=W.z):(Vt=0,Se=0,Le=0);let Ze=le.convert(H.format),pe=le.convert(H.type),Gt;H.isData3DTexture?(C.setTexture3D(H,0),Gt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(C.setTexture2DArray(H,0),Gt=z.TEXTURE_2D_ARRAY):(C.setTexture2D(H,0),Gt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let ui=z.getParameter(z.UNPACK_ROW_LENGTH),Pe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),On=z.getParameter(z.UNPACK_SKIP_PIXELS),bi=z.getParameter(z.UNPACK_SKIP_ROWS),Sn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Xt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,he);let qi=v.isDataArrayTexture||v.isData3DTexture,we=H.isDataArrayTexture||H.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let Zn=Ft.get(v),Si=Ft.get(H),Wn=Ft.get(Zn.__renderTarget),Ei=Ft.get(Si.__renderTarget);ee.bindFramebuffer(z.READ_FRAMEBUFFER,Wn.__webglFramebuffer),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let zn=0;zn<Wt;zn++)qi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(v).__webglTexture,O,he+zn),v.isDepthTexture?(we&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(H).__webglTexture,O,Le+zn),z.blitFramebuffer(Xt,ae,gt,It,Vt,Se,gt,It,z.DEPTH_BUFFER_BIT,z.NEAREST)):we?z.copyTexSubImage3D(Gt,O,Vt,Se,Le+zn,Xt,ae,gt,It):z.copyTexSubImage2D(Gt,O,Vt,Se,Le+zn,Xt,ae,gt,It);ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else we?v.isDataTexture||v.isData3DTexture?z.texSubImage3D(Gt,O,Vt,Se,Le,gt,It,Wt,Ze,pe,Ue.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Gt,O,Vt,Se,Le,gt,It,Wt,Ze,Ue.data):z.texSubImage3D(Gt,O,Vt,Se,Le,gt,It,Wt,Ze,pe,Ue):v.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,Vt,Se,gt,It,Ze,pe,Ue.data):v.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,Vt,Se,Ue.width,Ue.height,Ze,Ue.data):z.texSubImage2D(z.TEXTURE_2D,O,Vt,Se,gt,It,Ze,pe,Ue);z.pixelStorei(z.UNPACK_ROW_LENGTH,ui),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,On),z.pixelStorei(z.UNPACK_SKIP_ROWS,bi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Sn),O===0&&H.generateMipmaps&&z.generateMipmap(Gt),ee.unbindTexture()},this.copyTextureToTexture3D=function(v,H,Y=null,W=null,O=0){return v.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,W=arguments[1]||null,v=arguments[2],H=arguments[3],O=arguments[4]||0),oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,H,Y,W,O)},this.initRenderTarget=function(v){Ft.get(v).__webglFramebuffer===void 0&&C.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?C.setTextureCube(v,0):v.isData3DTexture?C.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?C.setTexture2DArray(v,0):C.setTexture2D(v,0),ee.unbindTexture()},this.resetState=function(){L=0,F=0,U=null,ee.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}};var Ar=class extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var cs=class extends Nn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Fn,u=Fn,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends Rt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fr=new ze,Lf=new ze,go=[],Uf=new Gi,qx=new ze,sa=new $e,ra=new yi,un=class extends $e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fr),Uf.copy(t.boundingBox).applyMatrix4(fr),this.boundingBox.union(Uf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fr),ra.copy(t.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(ra)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),t.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fr),Lf.multiplyMatrices(n,fr),sa.matrixWorld=Lf,sa.raycast(t,go);for(let a=0,o=go.length;a<o;a++){let l=go[a];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(s*this.count),s,this.count,Fs,ei));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ru=class extends ls{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Go=new V,Wo=new V,Ff=new ze,aa=new ma,vo=new yi,tc=new V,Nf=new V,Xo=class extends Gn{constructor(t=new de,e=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Go.fromBufferAttribute(e,s-1),Wo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Go.distanceTo(Wo);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;Ff.copy(s).invert(),aa.copy(t.ray).applyMatrix4(Ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){let h=u.getX(M),R=u.getX(M+1),A=xo(this,t,aa,l,h,R);A&&e.push(A)}if(this.isLineLoop){let M=u.getX(g-1),m=u.getX(p),h=xo(this,t,aa,l,M,m);h&&e.push(h)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){let h=xo(this,t,aa,l,M,M+1);h&&e.push(h)}if(this.isLineLoop){let M=xo(this,t,aa,l,g-1,p);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xo(i,t,e,n,s,r){let a=i.geometry.attributes.position;if(Go.fromBufferAttribute(a,s),Wo.fromBufferAttribute(a,r),e.distanceSqToSegment(Go,Wo,tc,Nf)>n)return;tc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(tc);if(!(l<t.near||l>t.far))return{distance:l,point:Nf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var au=class extends ls{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bf=new ze,ou=new ma,_o=new yi,yo=new V,en=class extends Gn{constructor(t=new de,e=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;Bf.copy(s).invert(),ou.copy(t.ray).applyMatrix4(Bf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,M=p;g<M;g++){let m=c.getX(g);yo.fromBufferAttribute(d,m),Of(yo,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,M=p;g<M;g++)yo.fromBufferAttribute(d,g),Of(yo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Of(i,t,e,n,s,r,a){let o=ou.distanceSqToPoint(i);if(o<e){let l=new V;ou.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var va=class extends Nn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},lu=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xe:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new V,s=[],r=[],a=[],o=new V,l=new ze;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new V)}r[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(yn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(yn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Cu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Mo=new V,ec=new Cu,nc=new Cu,ic=new Cu,xa=class extends lu{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Mo.subVectors(s[0],s[1]).add(s[0]),c=Mo);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),ec.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,M,m),nc.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,M,m),ic.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),nc.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),ic.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(ec.calc(l),nc.calc(l),ic.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Kn=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],g=0,M=[],m=n/2,h=0;R(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(p,2));function R(){let S=new V,k=new V,L=0,F=(e-t)/n;for(let U=0;U<=r;U++){let E=[],b=U/r,N=b*(e-t)+t;for(let G=0;G<=s;G++){let K=G/s,et=K*l+o,ft=Math.sin(et),it=Math.cos(et);k.x=N*ft,k.y=-b*n+m,k.z=N*it,d.push(k.x,k.y,k.z),S.set(ft,F,it).normalize(),f.push(S.x,S.y,S.z),p.push(K,1-b),E.push(g++)}M.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){let b=M[E][U],N=M[E+1][U],G=M[E+1][U+1],K=M[E][U+1];(t>0||E!==0)&&(u.push(b,N,K),L+=3),(e>0||E!==r-1)&&(u.push(N,G,K),L+=3)}c.addGroup(h,L,0),h+=L}function A(S){let k=g,L=new xe,F=new V,U=0,E=S===!0?t:e,b=S===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let et=G/s*l+o,ft=Math.cos(et),it=Math.sin(et);F.x=E*it,F.y=m*b,F.z=E*ft,d.push(F.x,F.y,F.z),f.push(0,b,0),L.x=ft*.5+.5,L.y=it*.5*b+.5,p.push(L.x,L.y),g++}for(let G=0;G<s;G++){let K=k+G,et=N+G;S===!0?u.push(et,et+1,K):u.push(et+1,et,K),U+=3}c.addGroup(h,U,S===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cr=class i extends Kn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cu=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(R){let A=new V,S=new V,k=new V;for(let L=0;L<e.length;L+=3)p(e[L+0],A),p(e[L+1],S),p(e[L+2],k),l(A,S,k,R)}function l(R,A,S,k){let L=k+1,F=[];for(let U=0;U<=L;U++){F[U]=[];let E=R.clone().lerp(S,U/L),b=A.clone().lerp(S,U/L),N=L-U;for(let G=0;G<=N;G++)G===0&&U===L?F[U][G]=E:F[U][G]=E.clone().lerp(b,G/N)}for(let U=0;U<L;U++)for(let E=0;E<2*(L-U)-1;E++){let b=Math.floor(E/2);E%2===0?(f(F[U][b+1]),f(F[U+1][b]),f(F[U][b])):(f(F[U][b+1]),f(F[U+1][b+1]),f(F[U+1][b]))}}function c(R){let A=new V;for(let S=0;S<r.length;S+=3)A.x=r[S+0],A.y=r[S+1],A.z=r[S+2],A.normalize().multiplyScalar(R),r[S+0]=A.x,r[S+1]=A.y,r[S+2]=A.z}function u(){let R=new V;for(let A=0;A<r.length;A+=3){R.x=r[A+0],R.y=r[A+1],R.z=r[A+2];let S=m(R)/2/Math.PI+.5,k=h(R)/Math.PI+.5;a.push(S,1-k)}g(),d()}function d(){for(let R=0;R<a.length;R+=6){let A=a[R+0],S=a[R+2],k=a[R+4],L=Math.max(A,S,k),F=Math.min(A,S,k);L>.9&&F<.1&&(A<.2&&(a[R+0]+=1),S<.2&&(a[R+2]+=1),k<.2&&(a[R+4]+=1))}}function f(R){r.push(R.x,R.y,R.z)}function p(R,A){let S=R*3;A.x=t[S+0],A.y=t[S+1],A.z=t[S+2]}function g(){let R=new V,A=new V,S=new V,k=new V,L=new xe,F=new xe,U=new xe;for(let E=0,b=0;E<r.length;E+=9,b+=6){R.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),L.set(a[b+0],a[b+1]),F.set(a[b+2],a[b+3]),U.set(a[b+4],a[b+5]),k.copy(R).add(A).add(S).divideScalar(3);let N=m(k);M(L,b+0,R,N),M(F,b+2,A,N),M(U,b+4,S,N)}}function M(R,A,S,k){k<0&&R.x===1&&(a[A]=R.x-1),S.x===0&&S.z===0&&(a[A]=k/2/Math.PI+.5)}function m(R){return Math.atan2(R.z,-R.x)}function h(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var _a=class i extends cu{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var qo=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new V,f=new V,p=[],g=[],M=[],m=[];for(let h=0;h<=n;h++){let R=[],A=h/n,S=0;h===0&&a===0?S=.5/e:h===n&&l===Math.PI&&(S=-.5/e);for(let k=0;k<=e;k++){let L=k/e;d.x=-t*Math.cos(s+L*r)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(s+L*r)*Math.sin(a+A*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(L+S,1-A),R.push(c++)}u.push(R)}for(let h=0;h<n;h++)for(let R=0;R<e;R++){let A=u[h][R+1],S=u[h][R],k=u[h+1][R],L=u[h+1][R+1];(h!==0||a>0)&&p.push(A,S,L),(h!==n-1||l<Math.PI)&&p.push(S,k,L)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(M,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function bo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Pr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uu=class extends Pr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nh:r=t,o=2*e-n;break;case Bh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:a=t,l=2*n-e;break;case Bh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,h=-f*m+2*f*M-f*g,R=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*g+1,A=(-1-p)*m+(1.5+p)*M+.5*g,S=p*m-p*M;for(let k=0;k!==o;++k)r[k]=h*a[u+k]+R*a[c+k]+A*a[l+k]+S*a[d+k];return r}},hu=class extends Pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},fu=class extends Pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bo(e,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:bo(t.times,Array),values:bo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ro:e=this.InterpolantFactoryMethodDiscrete;break;case Vc:e=this.InterpolantFactoryMethodLinear;break;case Al:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Vc;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Yx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Al,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[f+g]||M!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Vc;var Ls=class extends Mi{constructor(t,e,n){super(t,e,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ro;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends Mi{};du.prototype.ValueTypeName="color";var pu=class extends Mi{};pu.prototype.ValueTypeName="number";var mu=class extends Pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)os.slerpFlat(r,0,a,c-o,a,c,l);return r}},Yo=class extends Mi{InterpolantFactoryMethodLinear(t){return new mu(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Mi{constructor(t,e,n){super(t,e,n)}};Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=Ro;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends Mi{};gu.prototype.ValueTypeName="vector";var vu=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Kx=new vu,xu=class{constructor(t){this.manager=t!==void 0?t:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pu="\\[\\]\\.:\\/",Zx=new RegExp("["+Pu+"]","g"),Iu="[^"+Pu+"]",Jx="[^"+Pu.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",Iu),jx=/(WCOD+)?/.source.replace("WCOD",Jx),Qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),t_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),e_=new RegExp("^"+$x+jx+Qx+t_+"$"),n_=["material","materials","bones","map"],_u=class{constructor(t,e,n){let s=n||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ke=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zx,"")}static parseTrackName(t){let e=e_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);n_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=_u;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yu);(async function(){let t=window.__tw;if(!t)return;let e=document.getElementById("world"),n=document.documentElement,s=()=>{n.classList.add("no3d"),t.worldReady&&t.worldReady(!1)},r;try{r=new Vo({canvas:e,antialias:!1,powerPreference:"high-performance",alpha:!1,depth:!1,stencil:!1})}catch{return s()}let a=r.getContext();if(!a||!(a instanceof WebGL2RenderingContext))return s();r.outputColorSpace=us,r.toneMapping=Ai,r.autoClear=!1,r.setPixelRatio(1);let o=matchMedia("(max-width: 760px), (pointer: coarse)").matches,l=a.getExtension("WEBGL_debug_renderer_info"),c=l?String(a.getParameter(l.UNMASKED_RENDERER_WEBGL)):"",d=o||/intel|uhd|iris|mali|adreno|powervr|apple gpu|swiftshader|llvmpipe|microsoft basic/i.test(c)&&!/arc|rtx/i.test(c)?o?0:1:2,f=[{stride:4,coarse:3,shadow:768,shadowSteps:22,clouds:.28,cloudSteps:12,msaa:0,max:1440,acacia:.07,boulder:.05,dust:300},{stride:2,coarse:2,shadow:1024,shadowSteps:32,clouds:.35,cloudSteps:18,msaa:2,max:2560,acacia:.5,boulder:.4,dust:700},{stride:1,coarse:1,shadow:1536,shadowSteps:56,clouds:.5,cloudSteps:30,msaa:4,max:3840,acacia:1,boulder:1,dust:1600}][d],p=JSON.parse(document.getElementById("a-meta").textContent),g=x=>{let _=document.getElementById(x).textContent.trim(),w=atob(_),T=new Uint8Array(w.length);for(let P=0;P<w.length;P++)T[P]=w.charCodeAt(P);return T},M=(x,_)=>createImageBitmap(new Blob([g(x)],{type:_}),{colorSpaceConversion:"none",premultiplyAlpha:"none",imageOrientation:"none"});function m(x){let _=document.createElement("canvas");_.width=x.width,_.height=x.height;let w=_.getContext("2d",{willReadFrequently:!0});return w.drawImage(x,0,0),w.getImageData(0,0,x.width,x.height).data}function h(x,_){let w=new Nn(x);return w.flipY=!1,w.generateMipmaps=!0,w.minFilter=_i,w.magFilter=Ne,w.anisotropy=Math.min(16,r.capabilities.getMaxAnisotropy()),w.colorSpace=_?qn:xi,w.needsUpdate=!0,w}let R,A,S,k,L,F;try{[R,A,S,k,L,F]=await Promise.all([M("a-height","image/png"),M("a-normal","image/webp"),M("a-albedo","image/webp"),M("a-cheight","image/png"),M("a-calbedo","image/webp"),M("a-moon","image/jpeg")])}catch{return s()}let U=R.width,E=p.size,b=p.hmax,N=new Float32Array(U*U);{let x=m(R);for(let _=0;_<U*U;_++)N[_]=(x[_*4]*256+x[_*4+1])/65535*b}function G(x,_){let w=(x/E+.5)*(U-1),T=(_/E+.5)*(U-1),P=Math.max(0,Math.min(U-2,Math.floor(w))),I=Math.max(0,Math.min(U-2,Math.floor(T))),D=w-P,Z=T-I,q=I*U+P;return(N[q]*(1-D)+N[q+1]*D)*(1-Z)+(N[q+U]*(1-D)+N[q+U+1]*D)*Z}let K=h(A,!1),et=h(S,!0),ft=h(F,!0);ft.wrapS=oi;let it=h(L,!0),_t=!!a.getExtension("OES_texture_float_linear");a.getExtension("EXT_color_buffer_float"),a.getExtension("EXT_color_buffer_half_float");let J;if(_t)J=new cs(N,U,U,Fs,ei);else{let x=new Uint16Array(U*U);for(let _=0;_<x.length;_++)x[_]=td.toHalfFloat(N[_]);J=new cs(x,U,U,Fs,An)}J.minFilter=J.magFilter=Ne,J.needsUpdate=!0;let Ct=new ga(-1,1,1,-1,0,1),Dt=new de;Dt.setAttribute("position",new Te([-1,-1,0,3,-1,0,-1,3,0],3)),Dt.setAttribute("uv",new Te([0,0,2,0,0,2],2));let Zt=new $e(Dt);Zt.frustumCulled=!1;let _e=new Ar;_e.add(Zt);let Be="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}";function nt(x,_,w){return new tn(Object.assign({vertexShader:Be,fragmentShader:x,uniforms:_||{},depthTest:!1,depthWrite:!1},w||{}))}function mt(x,_){Zt.material=x,r.setRenderTarget(_||null),r.render(_e,Ct)}let kt=new Uint8Array(256*256*4);{let x=1234567,_=()=>(x^=x<<13,x^=x>>>17,x^=x<<5,(x>>>0)%256),w=new Uint8Array(65536);for(let T=0;T<65536;T++)w[T]=_();for(let T=0;T<256;T++)for(let P=0;P<256;P++){let I=(T*256+P)*4;kt[I]=w[T*256+P],kt[I+1]=w[(T+17&255)*256+(P+37&255)],kt[I+2]=_(),kt[I+3]=255}}let St=new cs(kt,256,256,Je);St.wrapS=St.wrapT=oi,St.minFilter=St.magFilter=Ne,St.needsUpdate=!0;let te=d===0?512:1024,oe=new cn(te,te,{type:An,format:Je,depthBuffer:!1,wrapS:oi,wrapT:oi}),ge=new cn(te,te,{type:li,format:Je,depthBuffer:!1,wrapS:oi,wrapT:oi,generateMipmaps:!0,minFilter:_i,magFilter:Ne,anisotropy:Math.min(16,r.capabilities.getMaxAnisotropy())});mt(nt(`varying vec2 vUv;
vec2 h22(vec2 p,float P){p=mod(p,P);vec3 a=fract(p.xyx*vec3(.1031,.1030,.0973));a+=dot(a,a.yzx+33.33);return fract((a.xx+a.yz)*a.zy);}
float vn(vec2 p,float P){vec2 i=floor(p),f=fract(p);vec2 u=f*f*f*(f*(f*6.-15.)+10.);
  float a=dot(h22(i,P)-.5,f),b=dot(h22(i+vec2(1,0),P)-.5,f-vec2(1,0)),c=dot(h22(i+vec2(0,1),P)-.5,f-vec2(0,1)),d=dot(h22(i+vec2(1,1),P)-.5,f-vec2(1,1));return mix(mix(a,b,u.x),mix(c,d,u.x),u.y)*2.;}
float wor(vec2 p,float P){vec2 i=floor(p),f=fract(p);float d1=9.,d2=9.;for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 g=vec2(x,y),o=h22(i+g,P);float d=length(g+o-f);if(d<d1){d2=d1;d1=d;}else if(d<d2)d2=d;}return d2-d1;}
void main(){vec2 p=vUv;float h=0.,a=.5,f=8.;for(int i=0;i<7;i++){h+=a*vn(p*f,f);a*=.52;f*=2.;}
  float cr=wor(p*14.,14.),cr2=wor(p*53.,53.);float crack=smoothstep(.0,.035,cr)*(.5+.5*smoothstep(.0,.06,cr2));
  float pebble=(1.-smoothstep(.0,.55,wor(p*96.,96.)))*.0+wor(p*96.,96.)*.3;
  gl_FragColor=vec4(h,crack,pebble,1.);}`),oe);let Xe=nt(`uniform sampler2D t;uniform float px;varying vec2 vUv;void main(){vec4 c=texture2D(t,vUv);float hx=texture2D(t,vUv+vec2(px,0)).r-texture2D(t,vUv-vec2(px,0)).r,hy=texture2D(t,vUv+vec2(0,px)).r-texture2D(t,vUv-vec2(0,px)).r;
  float cx=texture2D(t,vUv+vec2(px,0)).g-texture2D(t,vUv-vec2(px,0)).g,cy=texture2D(t,vUv+vec2(0,px)).g-texture2D(t,vUv-vec2(0,px)).g;
  vec2 g=vec2(hx,hy)*32.+vec2(cx,cy)*2.4;gl_FragColor=vec4(clamp(g,-1.,1.)*.5+.5,clamp(c.r*1.1+.5,0.,1.),c.g);}`,{t:{value:oe.texture},px:{value:1/te}});mt(Xe,ge),r.setRenderTarget(null),ge.texture.colorSpace=xi;let be=4096,Ge=new Uint8Array(be*4);{let x=99,_=()=>(x=x*16807%2147483647,(x-1)/2147483646),w=0;for(;w<be;){let T=26+_()*_()*420,P=.22+_()*.78,I=_();for(let D=0;D<T&&w<be;D++,w++){let Z=D/T,q=w*4;Ge[q]=Math.round(255*(P*(1-.3*Math.pow(1-Z,7)))),Ge[q+1]=Math.round(255*Math.max(0,Math.min(1,Z<.1?1-Z/.1:0))),Ge[q+2]=Math.round(255*I),Ge[q+3]=255}}}let z=new cs(Ge,be,1,Je);z.wrapS=oi,z.minFilter=Ne,z.magFilter=Ne,z.needsUpdate=!0;let Mt=(x,_,w)=>new V(x,_,w),ut={uSunDir:{value:Mt(0,1,0)},uMoonDir:{value:Mt(0,1,0)},uKeyDir:{value:Mt(0,1,0)},uKeyCol:{value:new ie},uFillDir:{value:Mt(0,1,0)},uFillCol:{value:new ie},uAmbSky:{value:new ie},uAmbGnd:{value:new ie},uSunRad:{value:new ie},uFog:{value:2e-5},uFogH:{value:1100},uTwi:{value:0},uTime:{value:0},uClouds:{value:0},uFlash:{value:0},uNight:{value:0},uSize:{value:E},uLUT:{value:null},uShadow:{value:null},uNormal:{value:K},uAlbedo:{value:et},uDetail:{value:ge.texture},uStrata:{value:z},uNoise:{value:St},uHeight:{value:J}},ye=`uniform vec3 uSunDir,uMoonDir,uKeyDir,uFillDir;uniform vec3 uKeyCol,uFillCol,uAmbSky,uAmbGnd,uSunRad;uniform float uFog,uFogH,uTime,uClouds,uFlash,uNight,uSize,uTwi;uniform sampler2D uLUT,uShadow,uNoise;
#define PI 3.14159265
vec3 lutDir(vec3 d){float az=atan(d.x,-d.z)/(2.*PI)+.5;float el=asin(clamp(d.y,-1.,1.))/(PI*.5);float v=.5+.5*sign(el)*sqrt(abs(el));return texture2D(uLUT,vec2(az,v)).rgb+uTwi*vec3(.1,.2,.42)*mix(.6,1.,clamp(d.y*3.,0.,1.));}
vec3 aerial(vec3 col,vec3 wp){vec3 v=wp-cameraPosition;float d=length(v);vec3 dir=v/max(d,1e-3);
  float a=max(cameraPosition.y,0.)/uFogH,b=max(wp.y,0.)/uFogH;float dd=b-a;float m=abs(dd)<1e-3?exp(-a):(exp(-a)-exp(-b))/dd;
  float od=d*uFog*m;vec3 T=exp(-od*vec3(.55,.78,1.15));
  vec3 ins=lutDir(normalize(vec3(dir.x,max(dir.y,.018),dir.z)));
  float c=max(dot(dir,uSunDir),0.);ins+=uSunRad*(.006*pow(c,6.)+.022*pow(c,40.));
  return col*T+ins*(1.-T);}
float fireL(vec3 wp){vec2 p=wp.xz;vec2 a=p-vec2(-6040.,2330.),b=p-vec2(-3700.,2250.),c=p-vec2(1300.,10350.);return (exp(-dot(a,a)/5200.)+exp(-dot(b,b)/5200.)+exp(-dot(c,c)/5200.))*uNight*(.86+.14*sin(uTime*9.)*sin(uTime*5.3));}
float cloudShadow(vec3 wp){if(uClouds<.01)return 1.;vec2 p=(wp.xz+uSunDir.xz/max(uSunDir.y,.15)*3000.)*.00004+vec2(uTime*.0005,uTime*.00016);
  float n=texture2D(uNoise,p*.25).r*.5+texture2D(uNoise,p*.53).g*.3+texture2D(uNoise,p*1.13).b*.2;return 1.-smoothstep(1.02-uClouds*.72,1.3-uClouds*.72,n+.25)*.36;}
vec3 lit(vec3 alb,vec3 n,vec3 wp,float ao,float sh){
  vec3 L=uKeyCol*pow(max(dot(n,uKeyDir),0.),.72)*sh*cloudShadow(wp)+uFillCol*max(dot(n,uFillDir),0.)+mix(uAmbGnd,uAmbSky,n.y*.5+.5)*ao;
  L+=vec3(.55,.65,1.)*uFlash*(.3+.7*max(n.y,0.))*.45;L+=vec3(1.,.5,.18)*fireL(wp)*.75;return alb*L;}
`;function ee(x,_){return new tn(Object.assign({uniforms:Object.assign({},ut,x||{})},_))}let He=new cn(512,256,{type:An,format:Je,depthBuffer:!1,wrapS:oi,minFilter:Ne,magFilter:Ne});ut.uLUT.value=He.texture;let Ft={uSun:{value:Mt(0,1,0)},uMoon:{value:Mt(0,-1,0)},uSunI:{value:20},uMoonI:{value:0},uHaze:{value:1},uTint:{value:new ie(1,1,1)},uFloor:{value:new ie(6e-4,.001,.002)},uEcl:{value:0}},C=nt(`uniform vec3 uSun,uMoon,uTint,uFloor;uniform float uSunI,uMoonI,uHaze,uEcl;varying vec2 vUv;
#define PI 3.14159265
const float Re=6360e3,Ra=6460e3;const vec3 bR=vec3(5.8e-6,13.5e-6,33.1e-6);const float HR=8000.,HM=1300.;
float rs(vec3 o,vec3 d,float r){float b=dot(o,d),c=dot(o,o)-r*r,D=b*b-c;if(D<0.)return -1.;D=sqrt(D);float t=-b+D;return t;}
float rg(vec3 o,vec3 d){float b=dot(o,d),c=dot(o,o)-Re*Re,D=b*b-c;if(D<0.)return -1.;float t=-b-sqrt(D);return t;}
vec3 scatter(vec3 d,vec3 L,float I){vec3 o=vec3(0.,Re+700.,0.);float tm=rs(o,d,Ra);float tg=rg(o,d);if(tg>0.)tm=min(tm,tg);
  float mu=dot(d,L);float pR=.0596831*(1.+mu*mu);float g=.82;float pM=.1193662*((1.-g*g)*(1.+mu*mu))/((2.+g*g)*pow(max(1.+g*g-2.*g*mu,1e-3),1.5));
  vec3 bM=vec3(11e-6)*uHaze;float dt=tm/12.;float oR=0.,oM=0.;vec3 sR=vec3(0.),sM=vec3(0.);
  for(int i=0;i<12;i++){vec3 p=o+d*dt*(float(i)+.5);float h=length(p)-Re;float hr=exp(-h/HR)*dt,hm=exp(-h/HM)*dt;oR+=hr;oM+=hm;
    float tl=rs(p,L,Ra);float lg=rg(p,L);if(lg>0.)continue;float dl=tl/4.,lR=0.,lM=0.;
    for(int j=0;j<4;j++){vec3 q=p+L*dl*(float(j)+.5);float hh=length(q)-Re;lR+=exp(-hh/HR)*dl;lM+=exp(-hh/HM)*dl;}
    vec3 T=exp(-(bR*(oR+lR)+bM*1.1*(oM+lM)+vec3(.65e-6,1.881e-6,.085e-6)*(oR+lR)*.9));sR+=T*hr;sM+=T*hm;}
  return I*(sR*bR*pR+sM*bM*pM);}
void main(){float az=(vUv.x-.5)*2.*PI;float s=(vUv.y-.5)*2.;float el=sign(s)*s*s*PI*.5;vec3 d=vec3(sin(az)*cos(el),sin(el),-cos(az)*cos(el));
  vec3 c=uFloor*(1.-.8*max(d.y,0.));if(uSunI>0.)c+=scatter(d,uSun,uSunI);if(uMoonI>0.)c+=scatter(d,uMoon,uMoonI)*vec3(.5,.72,1.5);
  c*=vec3(1.05,.94,1.0);c+=dot(c,vec3(.3,.4,.3))*vec3(.1,.07,.09);c+=uEcl*(vec3(1.,.42,.13)*exp(-max(el,0.)*11.)*.34+vec3(.018,.028,.07));gl_FragColor=vec4(c*uTint,1.);}`,Ft),y=new cn(f.shadow,f.shadow,{type:li,format:Je,depthBuffer:!1,minFilter:Ne,magFilter:Ne});ut.uShadow.value=y.texture;let X=a.getExtension("EXT_color_buffer_float")?ei:An,at=()=>new cn(f.shadow,f.shadow,{type:X,format:Fs,depthBuffer:!1,minFilter:_t||X===An?Ne:Fn,magFilter:_t||X===An?Ne:Fn}),ht=at(),rt=at(),Yt=nt("uniform sampler2D t;varying vec2 vUv;void main(){gl_FragColor=vec4(texture2D(t,vUv).r,0.,0.,1.);}",{t:{value:J}}),Tt=nt("uniform sampler2D t;uniform vec2 off;uniform float drop;varying vec2 vUv;void main(){float s=texture2D(t,vUv).r;vec2 u=vUv+off;if(u.x>0.&&u.y>0.&&u.x<1.&&u.y<1.)s=max(s,texture2D(t,u).r-drop);gl_FragColor=vec4(s,0.,0.,1.);}",{t:{value:null},off:{value:new xe},drop:{value:0}}),Nt=nt(`uniform sampler2D t,h;uniform float px;varying vec2 vUv;float V(vec2 u){float d=texture2D(t,u).r-texture2D(h,u).r;return 1.-smoothstep(.6,9.,d);}
  void main(){float s=V(vUv)*.28;s+=(V(vUv+vec2(px,0.))+V(vUv-vec2(px,0.))+V(vUv+vec2(0.,px))+V(vUv-vec2(0.,px)))*.13;s+=(V(vUv+vec2(px))+V(vUv-vec2(px))+V(vUv+vec2(px,-px))+V(vUv+vec2(-px,px)))*.05;gl_FragColor=vec4(s,s,s,1.);}`,{t:{value:null},h:{value:J},px:{value:1/f.shadow}});function Ee(x){let _=Math.hypot(x.x,x.z);if(mt(Yt,ht),x.y<=5e-4){r.setRenderTarget(y),r.setClearColor(0,1),r.clear();return}let w=1/f.shadow,T=x.x/_*w,P=x.z/_*w,I=E/f.shadow,D=x.y/_,Z=Math.ceil(Math.log2(f.shadow));for(let q=0;q<Z;q++){let $=Math.pow(2,q);Tt.uniforms.t.value=ht.texture,Tt.uniforms.off.value.set(T*$,P*$),Tt.uniforms.drop.value=$*I*D,mt(Tt,rt);let st=ht;ht=rt,rt=st}Nt.uniforms.t.value=ht.texture,mt(Nt,y)}let vt="varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",Ot=`${ye}uniform sampler2D tWords;uniform mat4 uWPV;uniform float uWV;uniform sampler2D uNormal,uAlbedo,uDetail,uStrata;varying vec3 vW;
vec4 D(vec2 u){return texture2D(uDetail,u);}
void main(){vec2 uv=vW.xz/uSize+.5;vec4 nt=texture2D(uNormal,uv);vec2 nn=nt.rg*2.-1.;vec3 n=vec3(nn.x,sqrt(max(0.,1.-dot(nn,nn))),nn.y);float ao=nt.b*1.25;
  float dist=length(vW-cameraPosition);
  vec3 alb=texture2D(uAlbedo,uv).rgb;float steep=1.-n.y;
  /* limestone beds follow height, slightly warped so they never read as ruled lines */
  vec4 lw=D(vW.xz/1400.);float wy=vW.y+(texture2D(uDetail,vW.xz/2600.,5.).b-.5)*90.+(texture2D(uDetail,vW.xz/500.,4.).b-.5)*14.;
  vec4 st=texture2D(uStrata,vec2(wy/640.,.5));float sk=smoothstep(.1,.34,steep);
  float tone=st.r;vec3 rockA=mix(vec3(.46,.33,.22),vec3(.84,.70,.52),tone);alb=mix(alb,mix(alb,rockA,.72)*(.9+.3*st.b),sk);
  /* detail at three scales: flat ground and two wall planes */
  vec2 g=vec2(0.);float hgt=0.,cav=0.;
  {vec4 a=D(vW.xz/9.),b=D(vW.xz/47.),c=D(vW.xz/410.);float k=1.-sk;float rock=smoothstep(.04,.14,steep);float near=1.-smoothstep(60.,900.,dist);g+=((texture2D(uDetail,vW.xz/13.,1.2).xy-.5)*(.12+.2*near)+(b.xy-.5)*(.28+.9*rock)+(c.xy-.5)*(.16+.95*rock))*k;hgt+=(a.b*.5+b.b*.3+c.b*.2)*k;cav+=(a.a*.5+b.a*.5)*k;}
  if(sk>.01){vec3 w=abs(vec3(n.x,0.,n.z));w/=max(w.x+w.z,1e-3);
    vec2 uX=vec2(vW.z,vW.y*2.4),uZ=vec2(vW.x,vW.y*2.4);
    vec4 a=D(uX/21.)*w.x+D(uZ/21.)*w.z,b=D(uX/120.)*w.x+D(uZ/120.)*w.z,c3=D(uX/620.)*w.x+D(uZ/620.)*w.z;
    vec4 jt=D(vec2(vW.z,vW.y*.09)/70.)*w.x+D(vec2(vW.x,vW.y*.09)/70.)*w.z;float joint=smoothstep(.38,.66,jt.b);alb*=mix(1.,.8+.34*joint,sk);
    vec2 gw=(a.xy-.5)*1.2+(b.xy-.5)*2.+(c3.xy-.5)*2.6+(jt.xy-.5)*1.8;g+=gw*sk;hgt+=(a.b*.3+b.b*.35+c3.b*.35)*sk;cav+=(a.a*.25+b.a*.35+c3.a*.4)*sk;
    n.y-=(st.g-.12)*.9*sk;}
  float fade=1.;
  float dk=mix(.95,.6,smoothstep(150.,5000.,dist));float dkf=dk*mix(.5,1.,max(sk,smoothstep(.04,.14,steep)));n=normalize(vec3(n.x-g.x*dkf,n.y,n.z-g.y*dkf));
  alb*=mix(.92+.16*hgt,.8+.4*hgt,sk);alb*=mix(.93+.07*cav,.5+.5*cav,sk);
  /* wind ripples on pale washes, only when close */
  float pale=smoothstep(.32,.6,dot(alb,vec3(.33)))*(1.-sk);
  if(pale>.01&&dist<500.){float rp=sin(dot(vW.xz,vec2(.72,.41))*2.4+lw.b*40.+D(vW.xz/40.).b*18.);n.x+=rp*.06*pale*(1.-dist/500.);}
  float sh=texture2D(uShadow,uv).r;
  vec3 col=lit(alb,n,vW,ao*(.6+.4*cav),sh);
  if(uWV>.002){vec4 pw=uWPV*vec4(vW,1.);if(pw.w>0.){vec2 wq=pw.xy/pw.w*.5+.5;if(wq.x>0.&&wq.x<1.&&wq.y>0.&&wq.y<1.){float wm=texture2D(tWords,wq).r*uWV;col=mix(col,col*vec3(.17,.11,.07),wm*.92*(1.-uNight));col+=vec3(1.,.72,.34)*wm*uNight*.95;}}}
  col*=1.+vec3(1.3,.72,.26)*fireL(vW);
  gl_FragColor=vec4(aerial(col,vW),1.);}`,$t={tWords:{value:null},uWPV:{value:new ze},uWV:{value:0}},re=ee($t,{vertexShader:vt,fragmentShader:Ot}),lt=new Ar,ve=new Ar,le=8,Ae=f.stride;{let x=Math.floor((U-1)/Ae),_=Math.floor(x/le),w=E/(U-1);for(let T=0;T<le;T++)for(let P=0;P<le;P++){let I=_+1,D=new Float32Array(I*I*3),Z=new Uint32Array(_*_*6),q=1e9,$=-1e9;for(let Q=0;Q<I;Q++)for(let Bt=0;Bt<I;Bt++){let Ut=(P*_+Bt)*Ae,Ht=(T*_+Q)*Ae,qt=(Q*I+Bt)*3,Jt=N[Math.min(U-1,Ht)*U+Math.min(U-1,Ut)];D[qt]=Ut*w-E/2,D[qt+1]=Jt,D[qt+2]=Ht*w-E/2,Jt<q&&(q=Jt),Jt>$&&($=Jt)}let st=0;for(let Q=0;Q<_;Q++)for(let Bt=0;Bt<_;Bt++){let Ut=Q*I+Bt,Ht=Ut+1,qt=Ut+I,Jt=qt+1;Z[st++]=Ut,Z[st++]=qt,Z[st++]=Ht,Z[st++]=Ht,Z[st++]=qt,Z[st++]=Jt}let ct=new de;ct.setAttribute("position",new Rt(D,3)),ct.setIndex(new Rt(Z,1));let dt=P*_*Ae*w-E/2,xt=(P+1)*_*Ae*w-E/2,yt=T*_*Ae*w-E/2,tt=(T+1)*_*Ae*w-E/2;ct.boundingSphere=new yi(Mt((dt+xt)/2,(q+$)/2,(yt+tt)/2),Math.hypot(xt-dt,tt-yt,$-q)/2+1),lt.add(new $e(ct,re))}}{let x=m(k),_=k.width,w=f.coarse,T=Math.floor((_-1)/w)+1,P=p.csize,I=new Float32Array(T*T*3),D=new Float32Array(T*T*2),Z=new Uint32Array((T-1)*(T-1)*6),q=E/2-30;for(let dt=0;dt<T;dt++)for(let xt=0;xt<T;xt++){let yt=dt*w*_+xt*w,tt=(x[yt*4]*256+x[yt*4+1])/65535*(p.chi-p.clo)+p.clo,Q=(xt*w/(_-1)-.5)*P+p.ccx,Bt=(dt*w/(_-1)-.5)*P+p.ccz;Math.abs(Q)<q&&Math.abs(Bt)<q&&(tt-=120);let Ut=dt*T+xt;I[Ut*3]=Q,I[Ut*3+1]=tt,I[Ut*3+2]=Bt,D[Ut*2]=xt*w/(_-1),D[Ut*2+1]=dt*w/(_-1)}let $=0;for(let dt=0;dt<T-1;dt++)for(let xt=0;xt<T-1;xt++){let yt=dt*T+xt,tt=yt+1,Q=yt+T,Bt=Q+1;Z[$++]=yt,Z[$++]=Q,Z[$++]=tt,Z[$++]=tt,Z[$++]=Q,Z[$++]=Bt}let st=new de;st.setAttribute("position",new Rt(I,3)),st.setAttribute("uv",new Rt(D,2)),st.setIndex(new Rt(Z,1)),st.computeVertexNormals();let ct=new $e(st,ee({uCA:{value:it}},{vertexShader:"varying vec3 vW;varying vec3 vN;varying vec2 vU;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;vN=normal;vU=uv;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`${ye}uniform sampler2D uCA;varying vec3 vW;varying vec3 vN;varying vec2 vU;void main(){vec3 n=normalize(vN);vec3 c=lit(texture2D(uCA,vU).rgb,n,vW,1.,1.);gl_FragColor=vec4(aerial(c,vW),1.);}`}));ct.frustumCulled=!1,ve.add(ct)}let B=new cn(4,4,{type:An,format:Je,depthBuffer:!1,minFilter:Ne,magFilter:Ne}),Et={uCamW:{value:new ce},uTan:{value:new xe(1,1)},uCam:{value:Mt(0,0,0)}},j=Object.assign({},ut,Et,{uCover:{value:0},uStorm:{value:0},uJit:{value:0}}),ot="uniform mat3 uCamW;uniform vec2 uTan;uniform vec3 uCam;vec3 rayDir(vec2 uv){return normalize(uCamW*vec3((uv.x*2.-1.)*uTan.x,(uv.y*2.-1.)*uTan.y,-1.));}",Pt=nt(`${ye}${ot}uniform float uCover,uStorm,uJit;varying vec2 vUv;
float n3(vec3 x){vec3 p=floor(x),f=fract(x);f=f*f*(3.-2.*f);vec2 u=(p.xy+vec2(37.,17.)*p.z)+f.xy;vec2 rg=texture2D(uNoise,(u+.5)/256.).yx;return mix(rg.x,rg.y,f.z);}
float dens(vec3 p,bool hi){vec3 q=p*.00021+vec3(uTime*.004,0.,uTime*.0014);float b=n3(q)*.55+n3(q*2.1+7.)*.28+n3(q*4.3)*.13;
  float h=(p.y-2600.)/2600.;float prof=smoothstep(0.,.12,h)*smoothstep(1.,.35,h);float cov=1.-uCover*.68;float d=smoothstep(cov,cov+.22,b*(.72+.5*prof))*prof;
  if(hi&&d>.001){d-=(n3(q*9.+3.)*.6+n3(q*21.)*.4)*.22*(1.-d);}return max(d,0.);}
void main(){if(uCover<.01){gl_FragColor=vec4(0.);return;}vec3 d=rayDir(vUv);vec3 o=uCam;if(d.y<.008||o.y>5000.){gl_FragColor=vec4(0.);return;}
  float t0=(2600.-o.y)/d.y,t1=(5200.-o.y)/d.y;if(t0<0.)t0=0.;t1=min(t1,70000.);if(t1<=t0){gl_FragColor=vec4(0.);return;}
  float dt=(t1-t0)/${f.cloudSteps}.;float j=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453+uJit);float t=t0+dt*j;vec3 acc=vec3(0.);float tr=1.;
  float mu=dot(d,uSunDir);float g1=.72,g2=-.25;float ph=.5*((1.-g1*g1)/pow(1.+g1*g1-2.*g1*mu,1.5))+.5*((1.-g2*g2)/pow(1.+g2*g2-2.*g2*mu,1.5));
  vec3 keyC=uKeyCol*1.9;vec3 amb=uAmbSky*2.2*(1.-uStorm*.55);
  for(int i=0;i<${f.cloudSteps};i++){vec3 p=o+d*t;float de=dens(p,true);if(de>.002){float ls=0.;for(int k=1;k<4;k++)ls+=dens(p+uKeyDir*90.*float(k*k),false);
      float beer=exp(-ls*2.2);float pw=1.-exp(-de*6.);vec3 c=keyC*beer*pw*(.55+ph*.5)+amb*(.55+.45*smoothstep(0.,1.,(p.y-2600.)/2600.));
      c+=vec3(.7,.78,1.)*uFlash*.7;float a=1.-exp(-de*dt*.0052);acc+=tr*c*a;tr*=1.-a;if(tr<.02)break;}t+=dt;}
  float dF=exp(-t0*uFog*.55);vec3 hz=lutDir(normalize(vec3(d.x,max(d.y,.02),d.z)));acc=mix(hz*(1.-tr),acc,dF);
  gl_FragColor=vec4(acc,1.-tr);}`,j),bt=Object.assign({},ut,Et,{uCloudT:{value:B.texture},uMoonT:{value:ft},uSunSize:{value:.0047},uMoonSize:{value:.0047},uEclipse:{value:0},uEqW:{value:new ce},uMilky:{value:0},uMoonLight:{value:Mt(0,1,0)},uStars:{value:0},uMoonVis:{value:1}}),ue=nt(`${ye}${ot}uniform sampler2D uCloudT,uMoonT;uniform float uSunSize,uMoonSize,uEclipse,uMilky,uStars,uMoonVis;uniform mat3 uEqW;uniform vec3 uMoonLight;varying vec2 vUv;
float n3(vec3 x){vec3 p=floor(x),f=fract(x);f=f*f*(3.-2.*f);vec2 u=(p.xy+vec2(37.,17.)*p.z)+f.xy;vec2 rg=texture2D(uNoise,(u+.5)/256.).yx;return mix(rg.x,rg.y,f.z);}
float fb(vec3 p){return n3(p)*.5+n3(p*2.1)*.27+n3(p*4.4)*.14+n3(p*9.1)*.09;}
void main(){vec3 d=rayDir(vUv);vec3 col=lutDir(normalize(vec3(d.x,max(d.y,.006),d.z)));float h=d.y;
  /* Milky Way in true galactic coordinates */
  if(uMilky>.01&&h>-.05){vec3 e=transpose(uEqW)*d;const vec3 NGP=vec3(-.8676,-.1981,.4560);const vec3 GC=vec3(-.0549,-.8734,-.4838);float b=dot(e,NGP);vec3 y=cross(NGP,GC);float l=atan(dot(e,y),dot(e,GC));
    float wide=exp(-b*b*(30.-18.*exp(-l*l*1.1)));float bulge=exp(-l*l*1.6-b*b*46.);float dust=smoothstep(.40,.60,fb(e*4.3+3.)*.6+fb(e*11.+9.)*.4)*exp(-b*b*150.);float grain=.7+.6*fb(e*24.);
    vec3 mw=(vec3(.46,.52,.72)*wide*.5+vec3(1.,.78,.55)*bulge*1.)*grain*(1.-dust*.72);col+=mw*.05*uMilky*smoothstep(-.02,.16,h);}
  /* sun */
  float sa=acos(clamp(dot(d,uSunDir),-1.,1.));float px=fwidth(sa)+1e-5;float disc=1.-smoothstep(uSunSize-px,uSunSize+px,sa);
  float limb=sqrt(max(0.,1.-pow(sa/uSunSize,2.)));col+=uSunRad*disc*(.45+.55*limb)*38.*(1.-uEclipse);
  /* moon: a lit sphere with the real albedo map */
  vec3 mu=normalize(cross(uMoonDir,vec3(0.,1.,0.)));vec3 mv=cross(mu,uMoonDir);float md=dot(d,uMoonDir);
  if(md>0.&&uMoonVis>.01){vec2 p=vec2(dot(d,mu),dot(d,mv))/uMoonSize;float r2=dot(p,p);float rr=sqrt(r2);float aa=fwidth(rr)*1.2;
    if(r2<1.2){float z=sqrt(max(0.,1.-min(r2,1.)));vec3 nM=normalize(p.x*mu+p.y*mv-z*uMoonDir);float lon=atan(-p.x,z)/(2.*PI)+.5+.25*.0;float lat=asin(clamp(p.y,-1.,1.))/PI+.5;
      vec3 a=pow(texture2D(uMoonT,vec2(lon*.5+.25,1.-lat)).rgb,vec3(1.));a=a*a;float li=max(dot(nM,uMoonLight),0.);li=smoothstep(0.,.03,li)*(.35+.65*sqrt(li));
      vec3 disc=a*li*vec3(1.,.97,.92)*5.2+a*.012;float cov=1.-smoothstep(1.-aa,1.+aa,rr);col=mix(col,disc,cov*uMoonVis);}
    col+=vec3(.75,.82,1.)*pow(max(md,0.),5000.)*.02*uMoonVis*uNight;}
  /* eclipse */
  if(uEclipse>.01){float r=sa/uSunSize;vec3 a1=normalize(cross(uSunDir,vec3(0.,1.,0.)));vec3 a2=cross(a1,uSunDir);float th=atan(dot(d,a2),dot(d,a1));
    float str=.55+.45*sin(th*6.+1.2)*sin(th*11.-.7)+.3*n3(vec3(th*3.,uTime*.02,0.));
    float corona=exp(-(r-1.)*1.25)*step(1.,r)*str;col+=vec3(.86,.9,1.)*corona*3.2*uEclipse;col+=vec3(1.,.4,.35)*exp(-abs(r-1.015)*90.)*3.*uEclipse;
    col=mix(col,vec3(.002),(1.-smoothstep(.992,1.004,r))*uEclipse);}
  if(uClouds>.01&&h>.0){vec2 cp=d.xz/(h+.12)*.03;mat2 rt=mat2(.86,-.5,.5,.86);cp=rt*cp;cp.x*=.3;cp+=vec2(uTime*.00008,uTime*.00003);float c=0.,a=.5,f=1.;for(int i=0;i<6;i++){c+=a*texture2D(uNoise,cp*f+float(i)*.17).r;a*=.5;f*=2.13;}
    float wisps=texture2D(uNoise,cp*vec2(14.,48.)).g;float cov=smoothstep(.6-uClouds*.2,.92-uClouds*.2,c+(wisps-.5)*.1)*smoothstep(.0,.2,h);
    float sdc=max(dot(d,uSunDir),0.);vec3 cc=uSunRad*(.12+.75*pow(sdc,5.)+1.7*pow(sdc,40.))*.62+uAmbSky*.55+uKeyCol*.03;col=mix(col,cc,cov*.72);}
  vec4 cl=texture2D(uCloudT,vUv);col=col*(1.-cl.a)+cl.rgb;
  gl_FragColor=vec4(col,1.);}`,bt),We=new $e(Dt,ue);We.frustumCulled=!1,We.renderOrder=-10;let vn=g("a-stars"),Re=p.nstars,Rn=new Float32Array(Re*3),ni=new Float32Array(Re),hs=new Float32Array(Re*3);{let x=new DataView(vn.buffer);for(let _=0;_<Re;_++){let w=_*6,T=x.getUint16(w,!0)/65535*Math.PI*2,P=x.getInt16(w+2,!0)/360*Math.PI/180,I=x.getUint8(w+4)/30-2,D=x.getUint8(w+5)/100-.4,Z=Math.cos(P);Rn[_*3]=Z*Math.cos(T),Rn[_*3+1]=Z*Math.sin(T),Rn[_*3+2]=Math.sin(P),ni[_]=I;let q=Math.max(0,Math.min(1,(D+.3)/1.8));hs[_*3]=.72+.28*Math.min(1,q*2),hs[_*3+1]=.82+.12*(1-Math.abs(q-.4)),hs[_*3+2]=1-.62*q}}let fs=new de;fs.setAttribute("position",new Rt(Rn,3)),fs.setAttribute("aMag",new Rt(ni,1)),fs.setAttribute("aCol",new Rt(hs,3));let Oe={value:1},ci={uEq:bt.uEqW,uVis:{value:0},uPR:Oe,uTime:ut.uTime,uFov:{value:1}},Mn=(x,_,w,T)=>new tn(Object.assign({uniforms:w,vertexShader:x,fragmentShader:_,transparent:!0,depthWrite:!1,blending:fa},T||{})),Ns=new en(fs,Mn(`attribute float aMag;attribute vec3 aCol;uniform mat3 uEqW;uniform float uVis,uPR,uTime,uFov;varying vec3 vC;varying float vA;
  void main(){vec3 d=uEqW*position;vec4 p=projectionMatrix*mat4(mat3(viewMatrix))*vec4(d*1000.,1.);gl_Position=p.xyww;float b=pow(10.,-.4*(aMag-1.));float tw=.78+.22*sin(uTime*(2.+fract(aMag*7.)*5.)+aMag*90.);
    float ext=smoothstep(-.01,.22,d.y);vA=uVis*min(1.,b*1.5+.2)*tw*ext;vC=aCol;gl_PointSize=clamp((1.25+sqrt(b)*1.7)*uPR*uFov,1.5,20.*uPR);}`,"varying vec3 vC;varying float vA;void main(){vec2 c=gl_PointCoord-.5;float r=length(c)*2.;float a=exp(-r*r*5.)*(1.-smoothstep(.8,1.,r));gl_FragColor=vec4(vC*a*vA*5.5,a*vA);}",{uEqW:bt.uEqW,uVis:ci.uVis,uPR:Oe,uTime:ut.uTime,uFov:ci.uFov},{depthTest:!1}));Ns.frustumCulled=!1,Ns.renderOrder=-9;function qe(x,_,w,T,P,I,D){return new tn(Object.assign({defines:x||{},uniforms:Object.assign({},ut,I||{}),vertexShader:`uniform float uTime;varying vec3 vW;varying vec3 vN;varying vec3 vC;varying vec3 vL;attribute vec3 aC;${_||""}
    void main(){vec3 pos=position;vec3 nor=normal;vC=aC;vL=position;
    #ifdef USE_INSTANCING
      mat4 im=instanceMatrix;
    #else
      mat4 im=mat4(1.);
    #endif
    ${w||""}
    vec4 w=modelMatrix*im*vec4(pos,1.);vW=w.xyz;vN=normalize(mat3(modelMatrix*im)*nor);gl_Position=projectionMatrix*viewMatrix*w;}`,fragmentShader:`${ye}uniform sampler2D uDetail;varying vec3 vW;varying vec3 vN;varying vec3 vC;varying vec3 vL;${T||""}
    void main(){vec3 n=normalize(vN);if(!gl_FrontFacing)n=-n;vec3 alb=vC;float ao=1.;${P||""}
    vec2 uvS=vW.xz/uSize+.5;float sh=texture2D(uShadow,uvS).r;vec3 c=lit(alb,n,vW,ao,sh);
    #ifdef EMIT
      c+=emit;
    #endif
    gl_FragColor=vec4(aerial(c,vW),1.);}`},D||{}))}function Ye(x,_){let w=x.attributes.position,T=new Float32Array(w.count*3),P=new ie;for(let I=0;I<w.count;I++)_(P,w.getX(I),w.getY(I),w.getZ(I)),T[I*3]=P.r,T[I*3+1]=P.g,T[I*3+2]=P.b;return x.setAttribute("aC",new Rt(T,3)),x}function bn(x){let _=0,w=0;x.forEach(st=>{let ct=st.index?st.index:null;_+=st.attributes.position.count,w+=ct?ct.count:st.attributes.position.count});let T=new Float32Array(_*3),P=new Float32Array(_*3),I=new Float32Array(_*3),D=new Uint32Array(w),Z=0,q=0;x.forEach(st=>{let ct=st.attributes.position,dt=st.attributes.normal,xt=st.attributes.aC;for(let yt=0;yt<ct.count;yt++){let tt=(Z+yt)*3;T[tt]=ct.getX(yt),T[tt+1]=ct.getY(yt),T[tt+2]=ct.getZ(yt),P[tt]=dt.getX(yt),P[tt+1]=dt.getY(yt),P[tt+2]=dt.getZ(yt),I[tt]=xt?xt.getX(yt):1,I[tt+1]=xt?xt.getY(yt):1,I[tt+2]=xt?xt.getZ(yt):1}if(st.index)for(let yt=0;yt<st.index.count;yt++)D[q++]=st.index.getX(yt)+Z;else for(let yt=0;yt<ct.count;yt++)D[q++]=Z+yt;Z+=ct.count});let $=new de;return $.setAttribute("position",new Rt(T,3)),$.setAttribute("normal",new Rt(P,3)),$.setAttribute("aC",new Rt(I,3)),$.setIndex(new Rt(D,1)),$}let Bs=4242,wt=()=>(Bs=Bs*16807%2147483647,(Bs-1)/2147483646),Lt=new Gn,Du=x=>{let _=[];for(let w=0;w<x.length;w+=2)_.push([x[w],x[w+1]]);return _};{let x=g("a-boulder"),_=new Float32Array(x.buffer,x.byteOffset,x.byteLength/4),w=Math.floor(_.length/2*f.boulder),T=new _a(1,d===0?1:2),P=T.attributes.position;for(let D=0;D<P.count;D++){let Z=P.getX(D),q=P.getY(D),$=P.getZ(D),st=1+.28*Math.sin(Z*4.1+q*2.3)*Math.cos($*3.7+Z)+.14*Math.sin(q*9+$*7);P.setXYZ(D,Z*st,q*st*.72,$*st)}T.computeVertexNormals(),Ye(T,(D,Z,q)=>D.setRGB(.42+.1*q,.31+.08*q,.21+.06*q));let I=new un(T,qe(),w);for(let D=0;D<w;D++){let Z=_[D*2],q=_[D*2+1],$=G(Z,q),st=1.2+Math.pow(wt(),3)*9;Lt.position.set(Z,$+st*.1,q),Lt.rotation.set(wt()*.5,wt()*6.28,wt()*.5),Lt.scale.set(st,st*(.6+wt()*.5),st*(.7+wt()*.5)),Lt.updateMatrix(),I.setMatrixAt(D,Lt.matrix)}I.frustumCulled=!1,lt.add(I)}{let x=g("a-acacia"),_=new Float32Array(x.buffer,x.byteOffset,x.byteLength/4),w=Math.floor(_.length/2*f.acacia),T=[],P=d===0,I=P?4:6,D=new Kn(.14,.3,3,P?4:6);D.translate(0,1.5,0),Ye(D,q=>q.setRGB(.17,.12,.08)),T.push(D);for(let q=0;q<I;q++){let $=new _a(1,P?0:1),st=q/(P?3:6)*6.283,ct=q?2.1:0;$.scale(P?3:2.4,P?.78:.62,P?3:2.4),$.translate(Math.cos(st)*ct,3.1+.25*(q%2),Math.sin(st)*ct),Ye($,(dt,xt,yt)=>{let tt=.8+.5*(yt-3)/1;dt.setRGB(.15*tt,.19*tt,.075*tt)}),T.push($)}let Z=new un(bn(T),qe(),w);for(let q=0;q<w;q++){let $=_[q*2],st=_[q*2+1],ct=.8+wt()*1.1;Lt.position.set($,G($,st)-.1,st),Lt.rotation.set(0,wt()*6.28,0),Lt.scale.set(ct,ct*(.85+wt()*.5),ct),Lt.updateMatrix(),Z.setMatrixAt(q,Lt.matrix)}Z.frustumCulled=!1,lt.add(Z)}function Os(x,_,w,T){let P=new de;P.setAttribute("position",new Te(x,3));let I=new Float32Array(x.length/3);for(let Z=0;Z<I.length;Z++)I[Z]=wt();P.setAttribute("aR",new Rt(I,1));let D=new en(P,Mn("attribute float aR;uniform float uVis,uPR,uTime,uK;varying float vA;void main(){vec4 mv=viewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;vA=uVis*(.78+.22*sin(uTime*(5.+aR*6.)+aR*40.)*sin(uTime*3.1+aR*9.));gl_PointSize=clamp(uK*uPR*(1500./max(-mv.z,1.)),3.*uPR,46.*uPR);}","varying float vA;void main(){vec2 c=gl_PointCoord-.5;float d=length(c);float a=(smoothstep(.5,0.,d)*.32+smoothstep(.12,0.,d)*2.2)*vA;gl_FragColor=vec4(vec3(1.,.62,.26)*a*5.,a);}",{uVis:w,uPR:Oe,uTime:ut.uTime,uK:{value:_}}));return D.frustumCulled=!1,lt.add(D),D}let v=Mt(2950,0,9750),Y=qe({EMIT:1},"varying float vS;varying vec3 vSz;","vec3 sz=vec3(length(im[0].xyz),length(im[1].xyz),length(im[2].xyz));vSz=sz;vS=fract(sin(dot(im[3].xz,vec2(12.9898,78.233)))*43758.5453);pos.xz*=1.-.05*(pos.y+.5);","varying float vS;varying vec3 vSz;float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*9187.3);}",`vec3 emit=vec3(0.);bool sx=abs(n.x)>.5;bool wall=abs(n.y)<.4;vec2 q=sx?vec2(vW.z,vW.y):vec2(vW.x,vW.y);vec4 d1=texture2D(uDetail,q/7.),d2=texture2D(uDetail,q/1.9);
  alb=mix(vec3(.56,.44,.32),vec3(.72,.60,.46),vS)*(.72+.45*d1.b)*(.78+.3*d2.b)*(.75+.25*d2.a);
  if(wall){float band=smoothstep(.0,.12,fract(q.y/3.1)-.86);alb*=1.-.18*band;float hr=vL.y+.5;float top=hr*vSz.y;float crown=smoothstep(vSz.y-.9,vSz.y-.75,top);alb=mix(alb,alb*1.22,crown);
    vec2 g=vec2(q.x/4.3+vS*7.,q.y/3.3);vec2 c=floor(g),f=fract(g);float tri=step(abs(f.x-.5)*3.1,.62-f.y)*step(.36,f.y)*step(.42,hash(c*1.7+vS));float e=step(abs(sx?vL.z:vL.x),.42);float win=tri*e*step(1.3,top)*step(top,vSz.y-1.);
    float on=step(.72,hash(c+vS*9.));float fl=.88+.12*sin(uTime*(2.+vS*3.)+c.x*7.);alb=mix(alb,alb*.1,win);emit+=vec3(1.,.56,.22)*win*on*uNight*5.*fl;
    float door=step(abs(fract(q.x/13.+vS)-.5),.08)*step(top,2.2);alb=mix(alb,vec3(.07,.05,.04),door*step(.5,vS));n=normalize(n+vec3(d1.x-.5,d1.y-.5,d2.x-.5)*.45);ao*=.6+.4*smoothstep(0.,4.,top);}
  else{alb*=.86;n=normalize(n+vec3(d1.x-.5,0.,d1.y-.5)*.3);}`,{uDetail:ut.uDetail});{let x=[],_=(Ht,qt,Jt,jt,se)=>x.push([Ht,qt,Jt,jt,se]),T=Math.cos(.32),P=Math.sin(.32);for(let Ht=-14;Ht<=14;Ht++)for(let qt=-16;qt<=16;qt++){let Jt=qt*19+Ht%2*7+(wt()-.5)*5,jt=Ht*17+(wt()-.5)*5;if(Math.hypot(Jt/300,jt/240)>1.02-wt()*.12||Math.hypot(Jt,jt)<34||wt()<.11)continue;let Kt=v.x+Jt*T-jt*P,Fe=v.z+Jt*P+jt*T;_(Kt,Fe,9+wt()*8,8+wt()*8,4.5+wt()*wt()*9)}_(v.x,v.z,44,10,8),_(v.x-19,v.z+18,8,36,5),_(v.x+19,v.z+18,8,36,5),_(v.x,v.z+34,44,6,5);{let Jt=v.x+-128*T- -34*P,jt=v.z+-128*P+-34*T;_(Jt,jt,62,50,11),_(Jt-2,jt+1,44,34,19),_(Jt+3,jt-2,26,22,27),_(Jt-5,jt+3,13,12,33)}let I=x.length,D=new Xi(1,1,1);Ye(D,Ht=>Ht.setRGB(1,1,1));let Z=new un(D,Y,I),q=[];x.forEach((Ht,qt)=>{let[Jt,jt,se,Kt,Fe]=Ht,me=[G(Jt-se/2,jt-Kt/2),G(Jt+se/2,jt-Kt/2),G(Jt-se/2,jt+Kt/2),G(Jt+se/2,jt+Kt/2)],fn=Math.min(...me)-.5,nn=Math.max(...me)+Fe;Lt.position.set(Jt,(fn+nn)/2,jt),Lt.rotation.set(0,.32,0),Lt.scale.set(se,nn-fn,Kt),Lt.updateMatrix(),Z.setMatrixAt(qt,Lt.matrix);let dn=Math.max(2,Math.round(se/1.05)),De=Math.max(2,Math.round(Kt/1.05));for(let pn=0;pn<dn;pn++){let Qe=-se*.475+(pn+.5)*se*.95/dn;q.push([Jt+Qe*T+Kt*.47*P,nn,jt-Qe*P+Kt*.47*T],[Jt+Qe*T-Kt*.47*P,nn,jt-Qe*P-Kt*.47*T])}for(let pn=0;pn<De;pn++){let Qe=-Kt*.475+(pn+.5)*Kt*.95/De;q.push([Jt+se*.47*T+Qe*P,nn,jt-se*.47*P+Qe*T],[Jt-se*.47*T+Qe*P,nn,jt+se*.47*P+Qe*T])}}),Z.frustumCulled=!1,lt.add(Z);let $=new Cr(.3,.72,4);$.rotateY(Math.PI/4),$.translate(0,.3,0),Ye($,Ht=>Ht.setRGB(.72,.55,.38));let st=new un($,qe(),q.length);q.forEach((Ht,qt)=>{Lt.position.set(Ht[0],Ht[1],Ht[2]),Lt.rotation.set(0,.32,0),Lt.scale.set(1,1,1),Lt.updateMatrix(),st.setMatrixAt(qt,Lt.matrix)}),st.frustumCulled=!1,d>0&&lt.add(st);let ct=G(v.x+26,v.z-2),dt=new Kn(1.5,3,29,4,8);dt.rotateY(Math.PI/4),dt.translate(0,14.5,0),Ye(dt,Ht=>Ht.setRGB(.74,.58,.41));let xt=new Kn(2.2,1.7,1.4,4);xt.rotateY(Math.PI/4),xt.translate(0,29.5,0),Ye(xt,Ht=>Ht.setRGB(.62,.47,.32));let yt=new $e(bn([dt,xt]),qe());yt.position.set(v.x+26,ct-.5,v.z-2),yt.rotation.y=.32,lt.add(yt);let tt=new Kn(3.6,5.2,17,14);tt.translate(0,8.5,0),Ye(tt,Ht=>Ht.setRGB(.66,.49,.33));let Q=new un(tt,qe(),7);for(let Ht=0;Ht<7;Ht++){let qt=Ht/7*6.283+.3,Jt=v.x+Math.cos(qt)*322,jt=v.z+Math.sin(qt)*262;Lt.position.set(Jt,G(Jt,jt)-.5,jt),Lt.rotation.set(0,0,0),Lt.scale.setScalar(1),Lt.updateMatrix(),Q.setMatrixAt(Ht,Lt.matrix)}Q.frustumCulled=!1,lt.add(Q);{let Jt=v.x+-128*T- -34*P,jt=v.z+-128*P+-34*T,se=new Kn(4.2,6,30,16);se.translate(0,15,0);let Kt=new Cr(4.6,3,16);Kt.translate(0,31.5,0),Ye(se,De=>De.setRGB(.7,.54,.38)),Ye(Kt,De=>De.setRGB(.64,.48,.33));let Fe=new un(bn([se,Kt]),qe(),4);[[-33,-27],[33,-27],[-33,27],[33,27]].forEach((De,pn)=>{let Qe=Jt+De[0]*T-De[1]*P,xn=jt+De[0]*P+De[1]*T;Lt.position.set(Qe,G(Qe,xn)-.5,xn),Lt.rotation.set(0,0,0),Lt.scale.setScalar(1),Lt.updateMatrix(),Fe.setMatrixAt(pn,Lt.matrix)}),Fe.frustumCulled=!1,lt.add(Fe);let me=78,fn=new Xi(1,1,1);Ye(fn,(De,pn,Qe)=>{let xn=Qe>.3?1.08:.92;De.setRGB(.6*xn,.45*xn,.31*xn)});let nn=new un(fn,qe(),me),dn=[];for(let De=0;De<me;De++){let pn=De/me*6.283,Qe=(De+1)/me*6.283,xn=v.x+Math.cos(pn)*335,gs=v.z+Math.sin(pn)*275,Zs=v.x+Math.cos(Qe)*335,Js=v.z+Math.sin(Qe)*275,Hn=(xn+Zs)/2,vs=(gs+Js)/2,Di=Math.hypot(Zs-xn,Js-gs),$i=De===Math.round(me*.27);Lt.position.set(Hn,G(Hn,vs)+($i?6.5:3.2),vs),Lt.rotation.set(0,Math.atan2(-(Js-gs),Zs-xn),0),Lt.scale.set(Di+.6,$i?14:7.4,$i?5:2.4),Lt.updateMatrix(),nn.setMatrixAt(De,Lt.matrix),De%5===0&&dn.push(Hn,G(Hn,vs)+($i?14.5:8.2),vs)}nn.frustumCulled=!1,lt.add(nn),Os(dn,1,ut.uNight,!1)}let Bt=new de;Bt.setAttribute("position",new Te([v.x+26,ct+31.5,v.z-2],3));let Ut=new en(Bt,Mn("uniform float uVis,uPR,uTime;varying float vA;void main(){vec4 mv=viewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;vA=uVis*(.88+.12*sin(uTime*2.3));gl_PointSize=min(48.*uPR,(90.*uPR)*(120./max(-mv.z,1.)));}","varying float vA;void main(){vec2 c=gl_PointCoord-.5;float d=length(c);float a=(smoothstep(.5,0.,d)*.22+smoothstep(.09,0.,d)*2.)*vA;gl_FragColor=vec4(vec3(1.,.8,.5)*a*5.,a);}",{uVis:ut.uNight,uPR:Oe,uTime:ut.uTime}));Ut.frustumCulled=!1,lt.add(Ut)}{let x=[],_=new Kn(.26,.42,13,7,5);_.translate(0,6.5,0);{let Q=_.attributes.position;for(let Bt=0;Bt<Q.count;Bt++){let Ut=Q.getY(Bt);Q.setX(Bt,Q.getX(Bt)+Math.sin(Ut*.13)*.5)}}_.computeVertexNormals(),Ye(_,(Q,Bt,Ut)=>Q.setRGB(.095+.03*Math.sin(Ut*9),.072+.02*Math.sin(Ut*9),.05)),x.push(_);let w=[],T=[],P=[],I=[],D=0,Z=Math.sin(13*.13)*.5;for(let Q=0;Q<20;Q++){let Bt=Q*2.4,Ut=.25+Q%5*.3,Ht=4.6+Q*7%3*.5,qt=Math.cos(Bt),Jt=Math.sin(Bt);for(let jt=0;jt<=9;jt++){let se=jt/9,Kt=Ht*se,Fe=Ut*Kt*.55+Kt*Kt*.075,me=.72*Math.sin(Math.min(1,se*1.15)*Math.PI*.92)+.03,fn=Z+qt*Kt*Math.cos(Ut*.6),nn=13+Math.sin(1-Ut)*Kt*.62-Fe*.6,dn=Jt*Kt*Math.cos(Ut*.6);w.push(fn-Jt*me,nn,dn+qt*me,fn+Jt*me,nn,dn-qt*me),P.push(0,1,0,0,1,0),I.push(se*1,0,0,se*1,1,0),jt<9&&T.push(D,D+1,D+2,D+1,D+3,D+2),D+=2}}let q=new de;q.setAttribute("position",new Te(w,3)),q.setAttribute("normal",new Te(P,3)),q.setAttribute("aC",new Te(I,3)),q.setIndex(T);let $=qe(),st=qe(null,"attribute float aW;varying vec2 vF;","vF=aC.xy;float sway=sin(uTime*1.1+im[3].x*.3+position.x)*.05*pos.y*.0;float wv=vF.x*vF.x*sin(uTime*1.7+im[3].z*.2+position.z*.6)*.22;pos.y+=wv;","varying vec2 vF;","float cut=fract(vF.x*30.);float edge=abs(vF.y-.5)*2.;if(edge>.12+.88*(1.-cut*.92))discard;alb=mix(vec3(.16,.24,.09),vec3(.3,.36,.13),vF.x)*(.8+.3*sin(vF.x*50.));n=normalize(n+vec3(0.,.0,.0));",{},{side:ln}),ct=d===0?140:700,dt=new un(x[0],$,ct),xt=new un(q,st,ct),yt=0,tt=0;for(;yt<ct&&tt++<9e3;){let Q=Math.floor(wt()*9),Bt=Q/9*6.283+.4,Ut=1.06+Q%3*.09,Ht=Bt+(wt()-.5)*.62,qt=(wt()+wt())*.5,Jt=v.x+Math.cos(Ht)*(300*Ut+qt*150),jt=v.z+Math.sin(Ht)*(250*Ut+qt*110);if(Math.hypot((Jt-v.x)/300,(jt-v.z)/250)<1||G(Jt,jt)>G(v.x,v.z)+18)continue;let se=.75+wt()*.55;Lt.position.set(Jt,G(Jt,jt)-.3,jt),Lt.rotation.set(0,wt()*6.28,0),Lt.scale.set(se,se,se),Lt.updateMatrix(),dt.setMatrixAt(yt,Lt.matrix),xt.setMatrixAt(yt,Lt.matrix),yt++}dt.count=xt.count=yt,dt.frustumCulled=xt.frustumCulled=!1,lt.add(dt,xt)}function W(x,_,w){let T=[],P=[],I=x.length;for(let Z=0;Z<I;Z++){let[q,$,st]=x[Z];for(let ct=0;ct<_;ct++){let dt=ct/_*6.283;T.push(q[0],q[1]+Math.sin(dt)*st,q[2]+Math.cos(dt)*$)}}for(let Z=0;Z<I-1;Z++)for(let q=0;q<_;q++){let $=Z*_+q,st=Z*_+(q+1)%_,ct=$+_,dt=st+_;P.push($,ct,st,st,ct,dt)}let D=new de;return D.setAttribute("position",new Te(T,3)),D.setIndex(P),D.computeVertexNormals(),Ye(D,w),D}let O=(x,_,w)=>{let T=.92+.12*Math.sin(_*3+w*2);x.setRGB(.56*T,.4*T,.25*T)},gt=[];gt.push(W([[[-1.45,1.46,0],.06,.1],[[-1.32,1.55,0],.28,.34],[[-1,1.6,0],.44,.48],[[-.65,1.72,0],.5,.58],[[-.35,1.92,0],.5,.72],[[-.1,2.08,0],.48,.8],[[.18,1.95,0],.47,.7],[[.5,1.68,0],.42,.56],[[.8,1.52,0],.33,.4],[[1.02,1.5,0],.2,.26]],12,O)),gt.push(W([[[.8,1.58,0],.26,.34],[[1.06,1.56,0],.2,.26],[[1.32,1.66,0],.15,.18],[[1.52,1.92,0],.125,.15],[[1.62,2.22,0],.11,.13],[[1.68,2.42,0],.12,.14],[[1.84,2.5,0],.13,.13],[[2.06,2.46,0],.095,.1],[[2.2,2.4,0],.05,.05]],9,O));let Wt=[[-1,.26,0],[-1,-.26,1],[.72,.24,1],[.72,-.24,0]].map(([x,_,w],T)=>{let P=W([[[x,1.34,_],.19,.25],[[x,1,_],.13,.14],[[x+.02,.82,_],.135,.12],[[x,.5,_],.09,.095],[[x+.02,.1,_],.095,.07],[[x+.09,0,_],.15,.05]],7,O),I=P.attributes.position.count,D=new Float32Array(I);for(let Z=0;Z<I;Z++)D[Z]=w;return P.setAttribute("aLeg",new Rt(D,1)),P});function Xt(x){let _=bn(x),w=new Float32Array(_.attributes.position.count).fill(-1),T=0;return x.forEach(P=>{let I=P.attributes.position.count;P.attributes.aLeg&&w.set(P.attributes.aLeg.array,T),T+=I}),_.setAttribute("aLeg",new Rt(w,1)),_}let ae=Xt(gt.concat(Wt)),he=qe(null,"attribute float aLeg;","if(aLeg>-.5){float s=(1.6-pos.y)/1.6;float ph=uTime*2.6+im[3].x*.13+aLeg*3.14159;pos.x+=sin(ph)*.34*s;pos.y+=max(0.,cos(ph))*.08*s;}else{pos.y+=sin(uTime*5.2+im[3].x*.13)*.018;}","","vec4 d=texture2D(uDetail,vW.xz/1.2);alb*=.82+.3*d.b;",{uDetail:ut.uDetail}),Vt=9,Se=new un(ae,he,Vt);Se.frustumCulled=!1,lt.add(Se);let Le={a:Mt(-6201,0,2377),b:Mt(-6109,0,2483)},Ue=[];{let x=W([[[-.34,0,0],.015,.012],[[-.15,0,0],.05,.05],[[.1,.01,0],.06,.06],[[.25,.03,0],.04,.04],[[.31,.02,0],.012,.012]],6,D=>D.setRGB(.2,.15,.1));Ue.push(x);let _=[],w=[],T=[],P=[];for(let D=-1;D<=1;D+=2)for(let Z=0;Z<=6;Z++){let q=Z/6,$=D*q*.82,st=.26*(1-q*q*.7);_.push(.11-st*.3,0,$,.11-st,0,$),P.push(0,1,0,0,1,0),T.push(.2,.15,.1,.17,.12,.09)}for(let D=0;D<2;D++){let Z=D*14;for(let q=0;q<6;q++){let $=Z+q*2;w.push($,$+1,$+2,$+1,$+3,$+2)}}let I=new de;I.setAttribute("position",new Te(_,3)),I.setAttribute("normal",new Te(P,3)),I.setAttribute("aC",new Te(T,3)),I.setIndex(w),Ue.push(I)}let Ze=new $e(bn(Ue),qe(null,"","float ww=abs(pos.z);float fl=sin(uTime*7.)*step(fract(uTime*.13),.3)+.18;pos.y+=ww*ww*fl*.8;","","",{},{side:ln}));Ze.scale.setScalar(2.6),Ze.frustumCulled=!1,Ze.visible=!1,lt.add(Ze);{let x=(()=>{let Q=[],Bt=[],Ut=[];for(let qt=0;qt<=12;qt++)for(let Jt=0;Jt<=28;Jt++){let jt=Jt/28,se=qt/12,Kt=(jt-.5)*15,Fe=(se-.5)*7.5,me=.72+.28*Math.pow(Math.abs(Math.cos(jt*Math.PI*3)),2.6),nn=.22+2.55*Math.pow(1-Math.abs(se-.5)*2,.72)*me*(1-.2*Math.pow(Math.abs(jt-.5)*2,5));Q.push(Kt,nn,Fe);let dn=Math.abs(se*7%1-.5)<.055,De=dn?.5:.045+.012*Math.sin(jt*60);if(Bt.push(De,dn?.42:De*.9,dn?.3:De*.8),Jt<28&&qt<12){let pn=qt*29+Jt,Qe=pn+1,xn=pn+28+1,gs=xn+1;Ut.push(pn,xn,Qe,Qe,xn,gs)}}let Ht=new de;return Ht.setAttribute("position",new Te(Q,3)),Ht.setAttribute("aC",new Te(Bt,3)),Ht.setIndex(Ut),Ht.computeVertexNormals(),Ht})(),_=[[-6040,2330,5],[-3700,2250,6],[1300,10350,4]],w=_.reduce((dt,xt)=>dt+xt[2],0),T=new un(x,qe(null,"","","","",{},{side:ln}),w),P=0,I=[];_.forEach(([dt,xt,yt])=>{for(let tt=0;tt<yt;tt++){let Q=tt/yt*6.283+wt()*.3,Bt=26+wt()*20,Ut=dt+Math.cos(Q)*Bt,Ht=xt+Math.sin(Q)*Bt;Lt.position.set(Ut,G(Ut,Ht)-.1,Ht),Lt.rotation.set(0,Q+1.57+(wt()-.5)*.5,0);let qt=.9+wt()*.35;Lt.scale.set(qt,qt,qt),Lt.updateMatrix(),T.setMatrixAt(P++,Lt.matrix)}I.push(dt,G(dt,xt)+1.1,xt)}),T.frustumCulled=!1,lt.add(T),Os(I,1.25,{value:.9},!0);{let dt=[60,120,200][d],xt=new Float32Array(dt*3),yt=new Float32Array(dt*3);for(let Bt=0;Bt<dt;Bt++){let Ut=Bt%3*3;xt[Bt*3]=I[Ut],xt[Bt*3+1]=I[Ut+1],xt[Bt*3+2]=I[Ut+2],yt[Bt*3]=wt(),yt[Bt*3+1]=wt(),yt[Bt*3+2]=wt()}let tt=new de;tt.setAttribute("position",new Rt(xt,3)),tt.setAttribute("aR",new Rt(yt,3));let Q=new en(tt,Mn("attribute vec3 aR;uniform float uTime,uPR,uNight;varying float vA;void main(){float t=fract(uTime*(.09+aR.x*.12)+aR.y);vec3 p=position+vec3(sin(aR.z*40.+t*7.)*(.5+t*3.),t*(13.+aR.x*15.),cos(aR.y*33.+t*6.)*(.5+t*3.));vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;vA=uNight*(1.-t)*(1.-t);gl_PointSize=clamp(90.*uPR/max(-mv.z,1.)*(1.-t*.5),1.2*uPR,7.*uPR);}","varying float vA;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d)*vA;gl_FragColor=vec4(vec3(1.,.5,.14)*a*5.,a);}",{uTime:ut.uTime,uPR:Oe,uNight:ut.uNight}));Q.frustumCulled=!1,lt.add(Q)}let Z=90,q=new Float32Array(Z*3),$=new Float32Array(Z);for(let dt=0;dt<Z;dt++){let xt=dt%3*3;q[dt*3]=I[xt],q[dt*3+1]=I[xt+1],q[dt*3+2]=I[xt+2],$[dt]=wt()}let st=new de;st.setAttribute("position",new Rt(q,3)),st.setAttribute("aR",new Rt($,1));let ct=new en(st,new tn({uniforms:{uTime:ut.uTime,uPR:Oe,uAmb:ut.uAmbSky,uKey:ut.uKeyCol},transparent:!0,depthWrite:!1,vertexShader:"attribute float aR;uniform float uTime,uPR;varying float vA;void main(){float t=fract(uTime*.045+aR);vec3 p=position+vec3(sin(aR*40.+t*4.)*(1.+t*7.)+t*22.,t*62.,cos(aR*27.+t*3.)*(1.+t*7.));vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;vA=(1.-t)*smoothstep(0.,.08,t)*.2;gl_PointSize=clamp((5.+t*20.)*uPR*(90./max(-mv.z,1.)),2.,70.*uPR);}",fragmentShader:"uniform vec3 uAmb,uKey;varying float vA;void main(){vec2 c=gl_PointCoord-.5;float a=smoothstep(.5,.1,length(c))*vA;gl_FragColor=vec4((uAmb*1.1+uKey*.35),a);}"}));ct.frustumCulled=!1,lt.add(ct)}let pe=Mt(2640,0,9480);pe.y=G(pe.x,pe.z);let Gt=128,ui=69,Pe=46,On={uAmen:{value:0}},bi={value:0};{let x=document.createElement("canvas");x.width=2048,x.height=1366;let _=x.getContext("2d");_.fillStyle="#005430",_.fillRect(0,0,2048,1366);let w=2048/900;(t.flag||[]).forEach(tt=>{_.setTransform(w*tt[0],w*tt[1],w*tt[2],w*tt[3],w*tt[4],w*tt[5]),_.fillStyle=tt[7],_.fill(new Path2D(tt[6]))});let T=new va(x);T.minFilter=_i,T.magFilter=Ne,T.generateMipmaps=!0,T.anisotropy=Math.min(8,r.capabilities.getMaxAnisotropy());let P=new Tr(1,1,72,44);P.translate(.5,.5,0);{let tt=P.attributes.position.count;P.setAttribute("aC",new Rt(new Float32Array(tt*3).fill(1),3))}let I=qe({EMIT:1},`uniform float uAmen;uniform vec2 uDim;
   float wave(vec2 p,float t){float g=1.+uAmen*.9;float e=.06+.94*p.x;return e*g*(sin(p.x*8.5-t*3.3+p.y*1.5)*.052+sin(p.x*17.-t*5.6-p.y*2.6)*.02+sin(p.x*3.7-t*1.5+1.)*.05+sin(p.x*29.-t*8.2+p.y*6.)*.006);}`,`vec2 p=pos.xy;float tw=uTime;float z=wave(p,tw);float dx=(wave(p+vec2(.012,0.),tw)-z)/.012,dy=(wave(p+vec2(0.,.012),tw)-z)/.012;
    float droop=p.x*p.x*.035;pos=vec3(p.x*uDim.x,(p.y-droop)*uDim.y,z*uDim.x);nor=normalize(vec3(-dx,-dy*uDim.x/uDim.y,1.));`,"uniform sampler2D tFlag;uniform float uAmen;","vec2 fu=vec2(gl_FrontFacing?vL.x:1.-vL.x,vL.y);alb=pow(texture2D(tFlag,fu).rgb,vec3(2.2));vec3 emit=alb*(uNight*.62+uAmen*.55)+alb*uKeyCol*max(dot(-n,uKeyDir),0.)*.3;",{tFlag:{value:T},uAmen:On.uAmen,uDim:{value:new xe(ui,Pe)}},{side:ln}),D=new $e(P,I);D.position.set(pe.x,pe.y+Gt-Pe-2,pe.z),D.rotation.y=Math.atan2(-.66,.75)+.32,D.frustumCulled=!1,lt.add(D);let Z=tt=>tt.setRGB(.84,.84,.82),q=tt=>tt.setRGB(.86,.64,.26),$=tt=>tt.setRGB(.6,.48,.35),st=new Kn(.75,1.9,Gt,18);st.translate(0,Gt/2,0),Ye(st,Z);let ct=new qo(2.1,16,12);ct.translate(0,Gt+1.6,0),Ye(ct,q);let dt=[];[[17,18,1.6,0],[12.5,13.5,1.6,1.6],[8,9,2.4,3.2]].forEach(tt=>{let Q=new Kn(tt[0],tt[1],tt[2],8);Q.translate(0,tt[3]+tt[2]/2,0),Ye(Q,$),dt.push(Q)});let xt=new $e(bn([st,ct,...dt]),qe(null,"","","","",{}));xt.position.copy(pe),xt.frustumCulled=!1,lt.add(xt);let yt=[];for(let tt=0;tt<8;tt++){let Q=tt/8*6.283;yt.push(pe.x+Math.cos(Q)*15,pe.y+3.2,pe.z+Math.sin(Q)*15)}Os(yt,.5,bi,!1),Os([v.x+26,G(v.x+26,v.z-2)+31.5,v.z-2],.7,bi,!0)}let Sn={uHT:{value:0},uHC:{value:pe.clone()},uHS:{value:3.3}},qi={value:0},we={value:1e3},Zn=`uniform vec3 uHC;uniform float uHT;
 vec3 hp(float t){float a=t*.17;return uHC+vec3(cos(a)*1720.+cos(a*2.+.7)*250.,300.+sin(a*2.)*64.+sin(a*3.+1.)*42.,sin(a)*880.+sin(a*2.)*110.);}
 void hb(float t,out vec3 T,out vec3 R,out vec3 Up){T=normalize(hp(t+.08)-hp(t-.08));vec3 r=normalize(cross(T,vec3(0.,1.,0.)));vec3 u=cross(r,T);float b=.46+.22*sin(t*.34);R=r*cos(b)-u*sin(b);Up=cross(R,T);}`,Si=[[0,0,0],[-34,-5,-30],[34,-5,-30],[-68,-10,-60],[68,-10,-60],[0,-14,-68]],Wn=(()=>{let x=$=>$.setRGB(.8,.8,.78),_=$=>$.setRGB(.012,.2,.1),w=W([[[6.3,0,0],.04,.04],[[5,-.03,0],.36,.36],[[3.2,.08,0],.54,.62],[[1.6,.2,0],.6,.78],[[0,.1,0],.64,.7],[[-3,.05,0],.56,.54],[[-5.5,0,0],.36,.36],[[-6.1,0,0],.26,.26]],10,($,st,ct)=>{ct<-.12?$.setRGB(.012,.2,.1):ct>.48&&st>.6&&st<3.2?$.setRGB(.03,.04,.06):$.setRGB(.8,.8,.78)}),T=($,st)=>{let ct=new de;ct.setAttribute("position",new Te($.flat(),3));let dt=[];for(let xt=1;xt<$.length-1;xt++)dt.push(0,xt,xt+1);return ct.setIndex(dt),ct.computeVertexNormals(),Ye(ct,st),ct},P=[w];[-1,1].forEach($=>{P.push(T([[1.6,-.12,.45*$],[-2.5,-.12,.45*$],[-3.3,-.32,4.9*$],[-1.8,-.32,4.9*$]],_)),P.push(T([[-3.9,.05,.3*$],[-5.7,.05,.3*$],[-6.3,.2,2.3*$],[-5.3,.2,2.3*$]],x))}),P.push(T([[-3.2,.4,0],[-5.6,.45,0],[-6.5,2.75,0],[-5.6,2.75,0]],_));let I=bn(P),D=new Float32Array(Si.flat());I.setAttribute("aO",new Rr(D,3));let Z=new un(I,qe(null,`attribute vec3 aO;uniform float uHS;${Zn}`,"float ht=uHT+aO.z/190.;vec3 T,R,Up;hb(ht,T,R,Up);vec3 P=hp(ht)+R*aO.x+Up*aO.y;vec3 lp=pos*uHS;pos=P+T*lp.x+Up*lp.y+R*lp.z;nor=T*nor.x+Up*nor.y+R*nor.z;","","",Sn,{side:ln}),6),q=new ze;for(let $=0;$<6;$++)Z.setMatrixAt($,q);return Z.frustumCulled=!1,Z.visible=!1,lt.add(Z),Z})(),Ei=(()=>{let x=[200,360,520][d],_=x*6,w=new Float32Array(_*3),T=new Float32Array(_),P=new Float32Array(_),I=new Float32Array(_),D=[1,0,0,1,1,0],Z=new Float32Array(_*3);for(let st=0,ct=0;st<6;st++)for(let dt=0;dt<x;dt++,ct++)w[ct*3]=Si[st][0],w[ct*3+1]=Si[st][1],w[ct*3+2]=Si[st][2],T[ct]=dt/x,P[ct]=D[st],I[ct]=wt();let q=new de;q.setAttribute("position",new Rt(Z,3)),q.setAttribute("aO",new Rt(w,3)),q.setAttribute("aI",new Rt(T,1)),q.setAttribute("aW",new Rt(P,1)),q.setAttribute("aR",new Rt(I,1));let $=new en(q,new tn({uniforms:Object.assign({uVis:qi,uPxK:we,uPR:Oe,uKey:ut.uKeyCol,uAmb:ut.uAmbSky},Sn),transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aO;attribute float aI,aW,aR;uniform float uVis,uPxK,uPR;uniform vec3 uKey,uAmb;varying vec4 vK;${Zn}
   void main(){float age=aI*9.5;float t=uHT+aO.z/190.-age-.04;vec3 T,R,Up;hb(t,T,R,Up);vec3 P=hp(t)+R*aO.x+Up*(aO.y-1.);
    float jw=aO.x*.13+aO.z*.07;P+=vec3(sin(age*1.7+jw),sin(age*1.1+jw*2.)-.5,cos(age*1.3+jw))*age*1.1+vec3(sin(aR*51.),sin(aR*37.),cos(aR*23.))*age*.55+vec3(4.,0.,1.5)*age*.9;
    vec4 mv=viewMatrix*vec4(P,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((6.5+age*5.5)*uPxK/max(-mv.z,1.),2.*uPR,240.*uPR);
    vec3 c=aW>.5?vec3(.96,.96,.93):vec3(.02,.5,.24);vK=vec4(c*(uAmb*1.1+uKey*.55+.012),pow(1.-aI,1.4)*.3*uVis*smoothstep(0.,.012,aI));}`,fragmentShader:"varying vec4 vK;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.05,d);gl_FragColor=vec4(vK.rgb,vK.a*a);}"}));return $.frustumCulled=!1,$.visible=!1,lt.add($),$})(),zn=(x,_)=>{let w=new de;w.setAttribute("position",new Te(x.flat(),3));let T=[];for(let P=1;P<x.length-1;P++)T.push(0,P,P+1);return w.setIndex(T),w.computeVertexNormals(),Ye(w,_),w},Cn=2.1,Lu=()=>qe(null,"","","","",{},{side:ln}),ya=(()=>{let x=(D,Z,q)=>{q>.5&&Z>2.3&&Z<5.2?D.setRGB(.02,.03,.04):Z>7.2?D.setRGB(.1,.11,.13):D.setRGB(.36,.39,.43)},_=D=>D.setRGB(.31,.34,.38),w=D=>D.setRGB(.05,.05,.06),T=(D,Z,q)=>q>2.7?D.setRGB(.01,.26,.13):D.setRGB(.33,.36,.4),P=[W([[[8,0,0],.03,.03],[[6.4,-.02,0],.38,.38],[[4.2,.12,0],.62,.74],[[2.4,.1,0],.72,.78],[[0,0,0],.95,.72],[[-3,0,0],1.05,.66],[[-6.6,0,0],.98,.6],[[-7.8,0,0],.86,.52]],12,x),W([[[3,-.76,0],.68,.26],[[1,-.8,0],.82,.34],[[-2,-.72,0],.86,.3]],8,_)];[-1,1].forEach(D=>{P.push(zn([[1.2,-.1,.6*D],[-7.2,-.1,.85*D],[-7.7,-.2,5.5*D],[-6.5,-.2,5.5*D]],_)),P.push(zn([[5,.15,.6*D],[3.9,.15,.6*D],[3.5,.22,2.1*D],[3.95,.22,2.1*D]],_)),P.push(W([[[-7.7,0,.42*D],.42,.42],[[-8.4,0,.42*D],.37,.37]],10,w))}),P.push(zn([[-3.2,.6,0],[-7.2,.6,0],[-8.2,3.9,0],[-6.9,3.9,0]],T));let I=new un(bn(P),Lu(),2);return I.frustumCulled=!1,I.visible=!1,lt.add(I),I})(),Ma=(()=>{let x=(D,Z,q)=>{q>.48&&Z>3.4&&Z<6.2?D.setRGB(.02,.03,.04):Z>8.6?D.setRGB(.1,.11,.13):D.setRGB(.25,.28,.32)},_=D=>D.setRGB(.29,.32,.36),w=D=>D.setRGB(.05,.05,.06),T=(D,Z,q)=>q>2.6?D.setRGB(.01,.26,.13):D.setRGB(.25,.28,.32),P=[W([[[9.6,0,0],.03,.03],[[7.6,-.02,0],.5,.45],[[5.4,.2,0],.72,.8],[[3.6,.12,0],.8,.7]],12,x),W([[[3.8,-.1,0],1.4,.55],[[0,0,0],2.1,.7],[[-5,0,0],2.2,.62],[[-8.6,0,0],1.7,.5]],12,x)];[-1,1].forEach(D=>{P.push(zn([[2.2,.05,1.7*D],[-4.5,.05,2*D],[-6,0,6.6*D],[-3.6,0,6.6*D]],_)),P.push(zn([[-6.6,0,1.8*D],[-9.4,0,1.9*D],[-9.9,-.05,4.6*D],[-8.6,-.05,4.6*D]],_)),P.push(zn([[-5.2,.55,1.35*D],[-8.8,.55,1.35*D],[-9.6,3.7,1.55*D],[-8.2,3.7,1.55*D]],T)),P.push(W([[[-8.6,0,.75*D],.62,.62],[[-9.7,0,.75*D],.52,.52]],10,w))});let I=new un(bn(P),Lu(),2);return I.frustumCulled=!1,I.visible=!1,lt.add(I),I})(),zt={id:null,t:0,i:0,lines:null,DS:900,C:Mt(0,0,0),P:Mt(0,0,0),Rt:Mt(1,0,0),Up:Mt(0,1,0),Fw:Mt(0,0,1),rumble:0,vis:0},Lr=3300,od=1050,Ur=8.5,ld=32,Ri={uFr0:{value:1.75},uFrW:{value:3.5},uT:{value:0},uDur:{value:Ur},uF0:{value:22},uF1:{value:28},uVis:{value:0},uDS:{value:900},uPxK:we,uPR:Oe,uNight:ut.uNight,uKey:ut.uKeyCol,uAmb:ut.uAmbSky,uC:{value:Mt(0,0,0)},uRt:{value:Mt(1,0,0)},uFw:{value:Mt(0,0,1)}},zs=[3800,6800,1e4][d],$o=(()=>{let x=new de,_=new Float32Array(zs*3);for(let T=0;T<zs*3;T++)_[T]=wt();x.setAttribute("position",new Rt(new Float32Array(zs*3),3)),x.setAttribute("aP",new Rt(new Float32Array(zs*2),2)),x.setAttribute("aR",new Rt(_,3));let w=new en(x,new tn({uniforms:Ri,transparent:!0,depthWrite:!1,vertexShader:`attribute vec2 aP;attribute vec3 aR;uniform float uFr0,uFrW,uT,uDur,uF0,uF1,uVis,uDS,uPxK,uPR,uNight;uniform vec3 uC,uRt,uFw,uKey,uAmb;varying vec4 vK;
   void main(){float born=(uFr0-aP.x)/uFrW*uDur+aR.x*.22;float age=uT-born;float g=clamp(age,0.,40.),fd=max(0.,uT-uF0);
    vec3 up=vec3(0.,1.,0.);vec3 P=uC+uRt*(aP.x*uDS)+up*(aP.y*uDS);P+=(uRt*(aR.y-.5)+up*(aR.z-.5)+uFw*(aR.x-.5))*(sqrt(g)*3.4+fd*fd*2.6+5.)-uRt*g*1.5+up*g*.3;
    vec4 mv=viewMatrix*vec4(P,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((9.5+sqrt(g)*2.6+fd*2.)*uPxK/max(-mv.z,1.),2.*uPR,80.*uPR);
    vec3 L=uAmb*1.25+uKey*.6+vec3(.02,.018,.016);vK=vec4(vec3(1.,.985,.95)*L+vec3(1.,.74,.38)*uNight*.36,step(0.,age)*smoothstep(0.,.3,age)*(1.-smoothstep(uF0,uF1,uT))*uVis*.72);}`,fragmentShader:"varying vec4 vK;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.0,d);gl_FragColor=vec4(vK.rgb,vK.a*a);}"}));return w.frustumCulled=!1,w.visible=!1,lt.add(w),w})(),jo=document.createElement("canvas");jo.width=1400,jo.height=360;let cd=jo.getContext("2d",{willReadFrequently:!0}),Fr=new Map;function ba(x){let _=Fr.get(x),w=$o.geometry.attributes.aP;if(_){w.array.set(_),w.needsUpdate=!0;return}let T=1400,P=360,I=cd;I.setTransform(1,0,0,1,0,0),I.clearRect(0,0,T,P),I.fillStyle="#fff",I.direction="rtl",I.textAlign="center",I.textBaseline="middle";let D=300;I.font=`400 ${D}px "Katibeh","Amiri",serif`,D=Math.min(D,D*(T*.95)/I.measureText(x).width),I.font=`400 ${D}px "Katibeh","Amiri",serif`,I.fillText(x,T/2,P*.52);let Z=I.getImageData(0,0,T,P).data,q=yt=>{let tt=[];for(let Q=yt/2,Bt=0;Q<P;Q+=yt*.866,Bt++)for(let Ut=yt/2+(Bt%2?yt/2:0);Ut<T;Ut+=yt){let Ht=Ut|0,qt=Q|0;Ht<T&&qt<P&&Z[(qt*T+Ht)*4+3]>128&&tt.push(Ht,qt)}return tt},$=1.1,st=14;for(let yt=0;yt<11;yt++){let tt=($+st)/2;q(tt).length/2>zs?$=tt:st=tt}let ct=q(st),dt=ct.length/2,xt=$o.geometry.attributes.aP;for(let yt=0;yt<zs;yt++){let tt=yt<dt?yt:Math.floor(wt()*Math.max(1,dt));xt.setXY(yt,dt?(ct[tt*2]/T-.5)*2:9,dt?(.5-ct[tt*2+1]/P)*(P/T)*2:9)}xt.needsUpdate=!0,Fr.size>24&&Fr.clear(),Fr.set(x,xt.array.slice())}let Uu=[[ya,0,5.6],[Ma,0,6.8],[ya,1,5.6],[Ma,1,6.8]],ud=[.19,.065,-.065,-.19],hd=[0,.05,.1,.15],Fu=[[-8.4,.42],[-9.7,.75],[-8.4,.42],[-9.7,.75]],ds={uJ:{value:[Mt(0,0,0),Mt(0,0,0),Mt(0,0,0),Mt(0,0,0)]},uD:{value:Mt(1,0,0)},uR:{value:Mt(0,0,1)},uS:{value:140},uTS:{value:0},uVis:{value:0},uPxK:we,uPR:Oe,uKey:ut.uKeyCol,uAmb:ut.uAmbSky},Nu=(()=>{let x=[110,190,300][d],_=[50,90,150][d],w=(x+_*2)*4,T=new Float32Array(w),P=new Float32Array(w),I=new Float32Array(w*3),D=0;for(let $=0;$<4;$++){let st=Uu[$][2]*Cn,ct=Fu[$][1]*Cn;for(let dt=0;dt<x;dt++,D++)T[D]=dt/x,P[D]=$,I[D*3]=(dt%2?1:-1)*ct,I[D*3+1]=0,I[D*3+2]=1;[-1,1].forEach(dt=>{for(let xt=0;xt<_;xt++,D++)T[D]=xt/_,P[D]=$,I[D*3]=dt*st,I[D*3+1]=-.6,I[D*3+2]=.34})}let Z=new de;Z.setAttribute("position",new Rt(new Float32Array(w*3),3)),Z.setAttribute("aI",new Rt(T,1)),Z.setAttribute("aJ",new Rt(P,1)),Z.setAttribute("aO",new Rt(I,3));let q=new en(Z,new tn({uniforms:ds,transparent:!0,depthWrite:!1,vertexShader:`attribute float aI,aJ;attribute vec3 aO;uniform vec3 uJ[4];uniform vec3 uD,uR,uKey,uAmb;uniform float uS,uTS,uVis,uPxK,uPR;varying vec4 vK;
   void main(){float age=aI*3.4;vec3 P=uJ[int(aJ+.5)]-uD*(uS*age+14.)+uR*aO.x+vec3(0.,aO.y,0.);P+=vec3(sin(aI*23.+aJ),sin(aI*17.+aJ*2.),cos(aI*19.))*age*.5*aO.z;
    vec4 mv=viewMatrix*vec4(P,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((3.4+age*2.2)*(aO.z<.5?.6:1.)*uPxK/max(-mv.z,1.),1.4*uPR,70.*uPR);
    vK=vec4(vec3(.98,.98,1.)*(uAmb*1.2+uKey*.6+.05),step(age,uTS)*pow(1.-aI,1.6)*.42*aO.z*uVis);}`,fragmentShader:"varying vec4 vK;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(vK.rgb,vK.a*smoothstep(.5,.0,d));}"}));return q.frustumCulled=!1,q.visible=!1,lt.add(q),q})(),Bu={uVis:{value:0},uPR:Oe,uTime:ut.uTime,uNight:ut.uNight},Qo=(()=>{let x=new de;x.setAttribute("position",new Rt(new Float32Array(12*3),3));let _=new Float32Array(12*3),w=new Float32Array(12);for(let P=0;P<4;P++)_.set([1,.08,.06],P*9),_.set([.1,1,.3],P*9+3),_.set([1,1,1],P*9+6),w[P*3]=0,w[P*3+1]=0,w[P*3+2]=1;x.setAttribute("aK",new Rt(_,3)),x.setAttribute("aS",new Rt(w,1));let T=new en(x,Mn("attribute vec3 aK;attribute float aS;uniform float uVis,uPR,uTime,uNight;varying vec3 vK;void main(){vec4 mv=viewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;float bl=aS>.5?step(.86,fract(uTime*1.3+position.y*.01)):1.;vK=aK*uVis*bl*(.35+uNight*1.2);gl_PointSize=(aS>.5?7.:5.)*uPR;}","varying vec3 vK;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d);a*=a;gl_FragColor=vec4(vK*a*7.,a);}",Bu));return T.frustumCulled=!1,T.visible=!1,lt.add(T),T})(),Ou={uVis:{value:0},uPxK:we,uPR:Oe,uTime:ut.uTime},tl=(()=>{let x=new de;x.setAttribute("position",new Rt(new Float32Array(8*3),3));let _=new Float32Array(8);for(let T=0;T<8;T++)_[T]=wt();x.setAttribute("aR",new Rt(_,1));let w=new en(x,Mn("attribute float aR;uniform float uVis,uPxK,uPR,uTime;varying float vA;void main(){vec4 mv=viewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;vA=uVis*(.75+.25*sin(uTime*(40.+aR*30.)+aR*50.));gl_PointSize=clamp(5.2*uPxK/max(-mv.z,1.),3.*uPR,40.*uPR);}","varying float vA;void main(){float d=length(gl_PointCoord-.5);float a=(smoothstep(.5,0.,d)*.5+smoothstep(.16,0.,d)*2.6)*vA;gl_FragColor=vec4(mix(vec3(1.,.42,.1),vec3(1.,.86,.62),smoothstep(.2,0.,d))*a*5.,a);}",Ou));return w.frustumCulled=!1,w.visible=!1,lt.add(w),w})(),ii={on:!1},Hs=(()=>{let x=[[10,.1],[9.7,2.4],[8.8,4.6],[7,6.4],[4.5,7.3],[1.5,7.3],[-1.5,6.6],[-4.5,5],[-7,3],[-8.6,1.5]].map(I=>[[I[0],0,0],I[1],I[1]]),_=W(x,24,I=>I.setRGB(1,1,1));_.rotateZ(Math.PI/2),Ye(_,(I,D,Z,q)=>{let $=Math.atan2(q,D),st=Math.floor(($+Math.PI)/(Math.PI/6))%4;st===0?I.setRGB(.86,.84,.78):st===2?I.setRGB(.72,.53,.2):I.setRGB(.02,.3,.15)}),_.computeVertexNormals();let w=new Xi(2.2,1.6,2.2);w.translate(0,-13,0),Ye(w,I=>I.setRGB(.34,.22,.1));let T=new Kn(.9,1.5,3.6,6,1,!0);T.translate(0,-10.6,0),Ye(T,I=>I.setRGB(.2,.15,.1));let P=new un(bn([_,w,T]),qe(null,"","","","",{},{side:ln}),[4,7,9][d]);return P.frustumCulled=!1,P.visible=!1,lt.add(P),P})(),zu=[];for(let x=0;x<Hs.count;x++)zu.push([wt(),wt(),wt()]);let el={uVis:{value:0},uTime:ut.uTime,uPxK:we,uPR:Oe,uKey:ut.uKeyCol,uAmb:ut.uAmbSky},Hu=(()=>{let x=[300,600,900][d],_=new Float32Array(x*3),w=new Float32Array(x*3);for(let I=0;I<x*3;I++)w[I]=wt();let T=new de;T.setAttribute("position",new Rt(_,3)),T.setAttribute("aR",new Rt(w,3));let P=new en(T,new tn({uniforms:el,transparent:!0,depthWrite:!1,vertexShader:`attribute vec3 aR;uniform float uVis,uTime,uPxK,uPR;uniform vec3 uKey,uAmb;varying vec4 vK;void main(){float h=fract(aR.x+uTime*.085)*170.;float an=aR.y*6.283+uTime*(2.6+aR.z*1.8);float rad=(2.5+h*.17+sin(h*.09+uTime)*1.6)*(.72+.28*aR.z);vec3 P=position+vec3(cos(an)*rad+sin(h*.03+uTime*.4)*(h*.14),h,sin(an)*rad+cos(h*.024+uTime*.3)*(h*.12));P.xz+=vec2(sin(uTime*.06),cos(uTime*.05))*60.;
   vec4 mv=viewMatrix*vec4(P,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((3.2+h*.05)*uPxK/max(-mv.z,1.),1.5*uPR,26.*uPR);vK=vec4(vec3(.82,.67,.47)*(uAmb*.9+uKey*.5),uVis*.22*(1.-h/170.)*smoothstep(0.,6.,h));}`,fragmentShader:"varying vec4 vK;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(vK.rgb,vK.a*smoothstep(.5,.05,d));}"}));return P.frustumCulled=!1,P.visible=!1,lt.add(P),P})(),ps=new un(bn(Ue.map(x=>x.clone())),qe(null,"","float ww=abs(pos.z);float fl=sin(uTime*6.+im[3][0]*.2)*.9;pos.y+=ww*ww*fl*.8;","","",{},{side:ln}),9);ps.frustumCulled=!1,ps.visible=!1,lt.add(ps);{let x=I=>I.setRGB(.84,.82,.76),_=I=>I.setRGB(.06,.05,.05),w=(I,D)=>D>1.02?I.setRGB(.1,.08,.07):I.setRGB(.84,.82,.76),T=[W([[[-.75,.95,0],.05,.05],[[-.6,.95,0],.24,.3],[[0,1,0],.27,.33],[[.55,1.05,0],.24,.3],[[.72,1.15,0],.12,.14]],10,x),W([[[.7,1.15,0],.11,.14],[[.92,1.46,0],.08,.1]],8,x),W([[[.88,1.5,0],.075,.085],[[1.18,1.37,0],.035,.045]],8,w)];[-1,1].forEach(I=>{T.push(W([[[.92,1.56,.04*I],.016,.016],[[.6,2.25,.08*I],.004,.004]],5,_)),[-1,1].forEach(D=>{let Z=new Kn(.04,.026,.74,6);Z.translate(D*.52,.36,.13*I),Ye(Z,(q,$,st)=>st<.3?q.setRGB(.1,.08,.07):q.setRGB(.84,.82,.76)),T.push(Z)})});let P=new un(bn(T),qe(null,"","","","",{},{side:ln}),14);for(let I=0;I<14;I++){let D=-6702+(wt()-.5)*150,Z=1826+(wt()-.5)*150;Lt.position.set(D,G(D,Z)-.02,Z),Lt.rotation.set(0,wt()*6.283,0),Lt.scale.setScalar(2.7+wt()*.5),Lt.updateMatrix(),P.setMatrixAt(I,Lt.matrix)}P.frustumCulled=!1,lt.add(P)}let Nr={uVis:{value:0},uTime:ut.uTime,uPR:Oe,uPxK:we,uKey:ut.uKeyCol,uAmb:ut.uAmbSky,uCam:{value:Mt(0,0,0)},uG:{value:0}},ku=(()=>{let x=[220,450,800][d],_=new Float32Array(x*3);for(let P=0;P<x*3;P++)_[P]=wt();let w=new de;w.setAttribute("position",new Rt(new Float32Array(x*3),3)),w.setAttribute("aR",new Rt(_,3));let T=new en(w,new tn({uniforms:Nr,transparent:!0,depthWrite:!1,vertexShader:"attribute vec3 aR;uniform float uVis,uTime,uPR,uPxK,uG;uniform vec3 uCam,uKey,uAmb;varying vec4 vK;const float B=170.;void main(){vec2 o=vec2(mod(aR.x*B+uTime*(9.+aR.y*11.)-uCam.x,B),mod(aR.z*B+uTime*(2.+aR.y*2.)-uCam.z,B))-B*.5;vec3 P=vec3(uCam.x+o.x,uG+.15+aR.y*aR.y*2.8+sin(uTime*2.+aR.x*30.)*.25,uCam.z+o.y);vec4 mv=viewMatrix*vec4(P,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(.3*uPxK/max(-mv.z,1.),1.*uPR,5.*uPR);vK=vec4(vec3(.86,.72,.52)*(uAmb*.9+uKey*.55),uVis*.3);}",fragmentShader:"varying vec4 vK;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(vK.rgb,vK.a*smoothstep(.5,.1,d));}"}));return T.frustumCulled=!1,T.visible=!1,lt.add(T),T})(),Vu={uVis:{value:0},uPxK:we,uPR:Oe,uTime:ut.uTime,uKey:ut.uKeyCol,uAmb:ut.uAmbSky},ks=null;try{await Promise.race([document.fonts.load('400 200px "Katibeh"',"طويق"),new Promise(x=>setTimeout(x,1500))])}catch{}let Yi={uSc:{value:1.2},uVis:{value:0},uPxK:we,uPR:Oe,uTime:ut.uTime,uDS:{value:560},uC:{value:Mt(0,0,0)},uRt:{value:Mt(1,0,0)},uUp:{value:Mt(0,1,0)},uFw:{value:Mt(0,0,1)}},fd=(()=>{let x=[3e3,5200,8e3][d],_=960,w=480,T=document.createElement("canvas");T.width=_,T.height=w;let P=T.getContext("2d",{willReadFrequently:!0}),I=tt=>{P.setTransform(1,0,0,1,0,0),P.globalCompositeOperation="source-over",P.clearRect(0,0,_,w),P.fillStyle="#fff",P.strokeStyle="#fff",P.lineCap="round",P.lineJoin="round",tt();let Q=P.getImageData(0,0,_,w).data,Bt=(Kt,Fe)=>Q[(Fe*_+Kt)*4+3]>128,Ut=Kt=>{let Fe=[];for(let me=Kt/2,fn=0;me<w;me+=Kt*.866,fn++)for(let nn=Kt/2+(fn%2?Kt/2:0);nn<_;nn+=Kt){let dn=nn|0,De=me|0;dn<_&&De<w&&Bt(dn,De)&&Fe.push(dn,De)}return Fe},Ht=1.2,qt=14;for(let Kt=0;Kt<12;Kt++){let Fe=(Ht+qt)/2;Ut(Fe).length/2>x?Ht=Fe:qt=Fe}let Jt=Ut(qt),jt=Jt.length/2,se=new Float32Array(x*2);for(let Kt=0;Kt<x;Kt++){let Fe=Kt<jt?Kt:Math.floor(wt()*jt);se[Kt*2]=(Jt[Fe*2]/_-.5)*2+(Kt<jt?0:(wt()-.5)*.003),se[Kt*2+1]=(.5-Jt[Fe*2+1]/w)*(w/_)*2}for(let Kt=x-1;Kt>0;Kt--){let Fe=Math.floor(wt()*(Kt+1));for(let me=0;me<2;me++){let fn=se[Kt*2+me];se[Kt*2+me]=se[Fe*2+me],se[Fe*2+me]=fn}}return se},D=tt=>()=>{P.direction="rtl",P.textAlign="center",P.textBaseline="middle";let Q=230;P.font=`400 ${Q}px "Katibeh","Amiri",serif`;let Bt=P.measureText(tt).width;Q=Math.min(Q,Q*(_*.93)/Bt),P.font=`400 ${Q}px "Katibeh","Amiri",serif`,P.fillText(tt,_/2,w*.52)},Z=()=>{let tt=t.map;if(!tt)return;let Q=w*.94/tt.h,Bt=(_-tt.w*Q)/2,Ut=w*.03;P.setTransform(Q,0,0,Q,Bt,Ut);let Ht=Object.values(tt.r).map(qt=>new Path2D(qt));Ht.forEach(qt=>P.fill(qt)),P.globalCompositeOperation="destination-out",P.lineWidth=3.2/Q,Ht.forEach(qt=>P.stroke(qt)),P.globalCompositeOperation="source-over"},q=()=>{let tt=w/205,Q=_/2-100*tt;P.setTransform(tt,0,0,tt,Q,0),(t.emblem||[]).forEach(Bt=>{P.lineWidth=Bt[1],P.stroke(new Path2D(Bt[0]))})},$=[I(Z),I(D("همّة مثل طويق")),I(q),I(D("حمى الله جنودنا"))],st=new Float32Array(x*4),ct=new Float32Array(x*4),dt=new Float32Array(x*3);for(let tt=0;tt<x;tt++)st[tt*4]=$[0][tt*2],st[tt*4+1]=$[0][tt*2+1],st[tt*4+2]=$[1][tt*2],st[tt*4+3]=$[1][tt*2+1],ct[tt*4]=$[2][tt*2],ct[tt*4+1]=$[2][tt*2+1],ct[tt*4+2]=$[3][tt*2],ct[tt*4+3]=$[3][tt*2+1],dt[tt*3]=wt(),dt[tt*3+1]=wt(),dt[tt*3+2]=wt();let xt=new de;xt.setAttribute("position",new Rt(new Float32Array(x*3),3)),xt.setAttribute("aA",new Rt(st,4)),xt.setAttribute("aB",new Rt(ct,4)),xt.setAttribute("aR",new Rt(dt,3));let yt=new en(xt,Mn(`attribute vec4 aA,aB;attribute vec3 aR;uniform float uSc,uVis,uPxK,uPR,uTime,uDS;uniform vec3 uC,uRt,uUp,uFw;varying vec3 vK;
   vec2 pick(float i){return i<.5?aA.xy:i<1.5?aA.zw:i<2.5?aB.xy:aB.zw;}
   vec3 tint(float i,vec2 q){if(i<.5)return vec3(.05,1.,.42);if(i<1.5)return vec3(1.,.74,.32);if(i<2.5)return q.y<-.2?vec3(1.,.72,.3):vec3(.06,1.,.46);return vec3(1.,1.,.92);}
   void main(){float i0=floor(uSc),f=uSc-i0;float m=smoothstep(.72+.1*aR.x,.9+.1*aR.x,f);float a=mod(i0,4.),b=mod(i0+1.,4.);vec2 pa=pick(a),pb=pick(b);vec2 q=mix(pa,pb,m);float arc=sin(m*3.14159);float t=uTime;
    vec3 P=uC+uRt*(q.x*uDS+sin(aR.y*40.+t*.9)*.9+arc*(aR.y-.5)*340.)+uUp*(q.y*uDS+sin(aR.z*33.+t*1.1)*.9+arc*(aR.z-.5)*260.)+uFw*(arc*(aR.x-.5)*520.);
    vec4 mv=viewMatrix*vec4(P,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(3.1*uPxK/max(-mv.z,1.),1.8*uPR,30.*uPR);
    vK=mix(tint(a,pa),tint(b,pb),m)*uVis*(.86+.14*sin(t*(2.+aR.x*3.)+aR.y*30.));}`,"varying vec3 vK;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.12,d)*.5+smoothstep(.2,0.,d)*2.2;gl_FragColor=vec4(vK*a*2.6,1.);}",Yi));return yt.frustumCulled=!1,yt.visible=!1,lt.add(yt),yt})(),nl=o?120:260,Sa=new Float32Array(nl*3),Gu=new Float32Array(nl),Wu=Mt(-3300,0,1750);for(let x=0;x<nl;x++)Sa[x*3]=Wu.x+(wt()-.5)*2300,Sa[x*3+1]=wt(),Sa[x*3+2]=Wu.z+(wt()-.5)*1600,Gu[x]=wt();let il=new de;il.setAttribute("position",new Rt(Sa,3)),il.setAttribute("aR",new Rt(Gu,1));let Xu={uTime:ut.uTime,uVis:{value:0},uPR:Oe},Ea=new en(il,Mn("attribute float aR;uniform float uTime,uVis,uPR;varying float vA;varying float vR;void main(){vec3 p=position;float t=fract(p.y+uTime*(.006+aR*.006));p.y=60.+t*900.;p.x+=sin(uTime*.2+aR*30.)*14.;p.z+=cos(uTime*.16+aR*20.)*14.;vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;vA=uVis*smoothstep(1.,.75,t)*smoothstep(0.,.05,t)*(.8+.2*sin(uTime*6.+aR*50.));vR=aR;gl_PointSize=clamp((4.+aR*2.)*uPR*(5200./max(-mv.z,1.)),4.*uPR,70.*uPR);}","varying float vA;varying float vR;void main(){vec2 c=gl_PointCoord-.5;float d=length(c);float core=smoothstep(.17,.0,d);float halo=smoothstep(.5,.0,d)*.28;vec3 col=mix(vec3(1.,.42,.12),vec3(1.,.8,.42),core);gl_FragColor=vec4(col*(core*5.+halo*1.4)*vA,(core+halo)*vA);}",Xu));Ea.frustumCulled=!1,Ea.visible=!1,lt.add(Ea);let Br=6,Or=o?180:520,dd=["#ffc978","#7ee0a0","#ff9a6a","#a3b6e8","#f5e0b0","#ff7aa8"],qu=Mt(-1e3,0,1500),Yu=[],Ku=[];for(let x=0;x<Br;x++)Yu.push(Mt(qu.x+(x-2.5)*520+(wt()-.5)*200,560+x%3*130+wt()*90,qu.z+(wt()-.5)*700)),Ku.push(new ie(dd[x]));let wa=new Float32Array(Br*Or*3),Zu=new Float32Array(Br*Or),Ju=new Float32Array(Br*Or);for(let x=0;x<Br;x++)for(let _=0;_<Or;_++){let w=x*Or+_,T=wt()*2-1,P=wt()*6.283,I=Math.sqrt(1-T*T);wa[w*3]=I*Math.cos(P),wa[w*3+1]=T,wa[w*3+2]=I*Math.sin(P),Zu[w]=x,Ju[w]=wt()}let Ta=new de;Ta.setAttribute("position",new Rt(wa,3)),Ta.setAttribute("aB",new Rt(Zu,1)),Ta.setAttribute("aR",new Rt(Ju,1));let $u={uTime:ut.uTime,uVis:{value:0},uPR:Oe,uOrig:{value:Yu},uCol:{value:Ku}},pd="varying float vA;varying vec3 vC;void main(){vec2 c=gl_PointCoord-.5;float a=smoothstep(.5,0.,length(c));gl_FragColor=vec4(vC*a*vA*7.,a*vA);}",Aa=new en(Ta,Mn(`attribute float aB;attribute float aR;uniform float uTime,uVis,uPR;uniform vec3 uOrig[6];uniform vec3 uCol[6];varying float vA;varying vec3 vC;
 void main(){int b=int(aB+.5);float T=fract(uTime/5.2+aB*.173);vec3 p;float a,sz;
 if(T<.22){float k=T/.22,e=1.-pow(1.-k,2.2),lg=aR*.3;vec3 o=uOrig[b];p=mix(vec3(o.x,o.y-420.,o.z),o,max(0.,e-lg));a=uVis*step(aR,.4)*(1.-aR*2.4);vC=vec3(1.,.72,.42);sz=3.;}
 else{float t=(T-.22)/.78,r=1.-pow(1.-t,3.);p=uOrig[b]+position*r*(190.+aR*70.)+vec3(0.,-110.*t*t,0.);a=uVis*pow(1.-t,1.4)*(.7+.3*sin(uTime*26.+aR*60.))*(t<.03?3.:1.);vC=mix(vec3(1.,.95,.85),uCol[b],smoothstep(0.,.14,t));sz=4.5+5.*(1.-t);}
 vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;vA=a;gl_PointSize=clamp(sz*uPR*(2600./max(-mv.z,1.)),1.5,44.*uPR);}`,pd,$u));Aa.frustumCulled=!1,Aa.visible=!1,lt.add(Aa);let sl=o?1500:4200,Ra=new Float32Array(sl*3),ju=new Float32Array(sl);for(let x=0;x<sl;x++)Ra[x*3]=wt()*90,Ra[x*3+1]=wt()*50,Ra[x*3+2]=wt()*90,ju[x]=wt();let rl=new de;rl.setAttribute("position",new Rt(Ra,3)),rl.setAttribute("aR",new Rt(ju,1));let Ca={uTime:ut.uTime,uVis:{value:0},uPR:Oe,uCam:{value:Mt(0,0,0)}},Pa=new en(rl,Mn("attribute float aR;uniform float uTime,uVis,uPR;uniform vec3 uCam;varying float vA;void main(){vec3 box=vec3(90.,50.,90.);vec3 p=position+vec3(uTime*2.,-uTime*(26.+aR*10.),uTime*.6);p=mod(p-uCam+box*.5,box)-box*.5+uCam;vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;float d=-mv.z;vA=uVis*smoothstep(46.,6.,d)*smoothstep(.8,3.,d)*(.3+.7*aR);gl_PointSize=clamp((16.+aR*12.)*uPR*(11./max(d,1.)),2.,90.*uPR);}","varying float vA;void main(){vec2 c=gl_PointCoord-.5;float a=smoothstep(.028,0.,abs(c.x-c.y*.09))*smoothstep(.5,.05,abs(c.y));gl_FragColor=vec4(vec3(.72,.8,.95)*a*vA*1.4,a*vA*.7);}",Ca));Pa.frustumCulled=!1,Pa.visible=!1,lt.add(Pa);let Ia=3,Vs=30,Da=new Float32Array(Ia*Vs*3),md=new Float32Array(Ia*Vs),al=[];for(let x=0;x<Ia;x++)al.push({on:!1});let zr=new de;zr.setAttribute("position",new Rt(Da,3)),zr.setAttribute("aA",new Rt(md,1));let ol=new en(zr,Mn("attribute float aA;uniform float uPR;varying float vA;void main(){vA=aA;vec4 p=projectionMatrix*mat4(mat3(viewMatrix))*vec4(position,1.);gl_Position=p.xyww;gl_PointSize=(1.2+aA*3.)*uPR;}","varying float vA;void main(){vec2 c=gl_PointCoord-.5;float a=smoothstep(.5,0.,length(c))*vA;gl_FragColor=vec4(vec3(1.,.94,.82)*a*4.,a);}",{uPR:Oe},{depthTest:!1}));ol.frustumCulled=!1,ol.renderOrder=-8;let La=34,Ua=new Float32Array(La*3),Qu=new Float32Array(La),Hr=new de;Hr.setAttribute("position",new Rt(Ua,3)),Hr.setAttribute("aA",new Rt(Qu,1));let Fa=new Xo(Hr,Mn("attribute float aA;varying float vA;void main(){vA=aA;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}","varying float vA;void main(){gl_FragColor=vec4(vec3(.85,.9,1.)*vA*30.,vA);}",{}));Fa.frustumCulled=!1,Fa.visible=!1,lt.add(Fa);let ll=new Cr(120,3200,28,1,!0);ll.rotateX(Math.PI),ll.translate(0,1600,0);let gd=x=>Mn("varying vec2 vUv;varying vec3 vN;varying vec3 vV;void main(){vUv=uv;vec4 mv=viewMatrix*modelMatrix*vec4(position,1.);vV=-mv.xyz;vN=mat3(viewMatrix)*mat3(modelMatrix)*normal;gl_Position=projectionMatrix*mv;}","uniform vec3 uC;uniform float uVis;varying vec2 vUv;varying vec3 vN;varying vec3 vV;void main(){float f=abs(dot(normalize(vN),normalize(vV)));float a=pow(f,2.2)*pow(vUv.y,1.5)*uVis*.72;gl_FragColor=vec4(uC*a,a);}",{uC:{value:new ie(x)},uVis:null},{side:ln}),th={value:0},eh=[],nh=Mt(-4900,0,300);for(let x=0;x<7;x++){let _=nh.x+Math.sin(x*2)*140,w=nh.z-1700+x*520,T=gd(x%3===1?"#eafff0":"#26d57f");T.uniforms.uVis=th;let P=new $e(ll,T);P.position.set(_,G(_,w),w),P.userData.ph=x*1.3,P.visible=!1,P.frustumCulled=!1,lt.add(P),eh.push(P)}let cl=f.dust,Na=new Float32Array(cl*3),ih=new Float32Array(cl);for(let x=0;x<cl;x++)Na[x*3]=wt()*120,Na[x*3+1]=wt()*60,Na[x*3+2]=wt()*120,ih[x]=wt();let ul=new de;ul.setAttribute("position",new Rt(Na,3)),ul.setAttribute("aR",new Rt(ih,1));let hl={uTime:ut.uTime,uVis:{value:0},uPR:Oe,uCam:Ca.uCam,uCol:{value:new ie(1,1,1)},uWind:{value:Mt(3,0,1)}},sh=new en(ul,Mn("attribute float aR;uniform float uTime,uVis,uPR;uniform vec3 uCam,uWind;varying float vA;void main(){vec3 box=vec3(120.,60.,120.);vec3 p=mod(position+uWind*uTime*(.6+aR*.8)-uCam+box*.5,box)-box*.5+uCam;p.y+=sin(uTime*.6+aR*20.)*.6;vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;float d=-mv.z;vA=uVis*smoothstep(58.,10.,d)*smoothstep(1.,5.,d)*(.3+.7*aR);gl_PointSize=clamp((1.1+aR*1.9)*uPR*(30./max(d,1.)),1.,6.*uPR);}","uniform vec3 uCol;varying float vA;void main(){vec2 c=gl_PointCoord-.5;float a=smoothstep(.5,0.,length(c));gl_FragColor=vec4(uCol*a*vA*.5,a*vA);}",hl));sh.frustumCulled=!1,lt.add(sh),ve.add(We),ve.add(Ns),ve.add(ol);let rh={top:[-6900,1950,22,-4700,1050,250,30],upcoming:[-6600,-400,26,-4800,-900,240,30],school:[-6250,2480,6,-4300,780,190,34],ramadan:[-4600,2650,34,-2500,850,300,44],eid:[-1700,2600,60,-300,950,360,46],national:[-7300,1300,16,-5100,250,330,34],kingdom:[2262,9908,9,o?2640:2722,o?9480:9553,o?26:58,o?36:31],salary:[1200,11500,25,3400,8250,240,26],majlis:[1168,10484,4,1300,10350,8,25],prayer:[2420,10190,30,2990,9720,10,30],moon:[-1200,12300,20,2600,8500,500,9.5],seasons:[3030,8950,24,3e3,11200,340,50],fasting:[5650,10350,60,3800,8500,210,38],sky:[7400,11900,50,7e3,9200,720,48],month:[3050,6600,30,3050,9800,1900,62],tools:[1800,-6600,1700,-5100,800,40,48]},hn=Object.keys(rh),Xn=hn.map(x=>{let _=rh[x];return{id:x,p:Mt(_[0],G(_[0],_[1])+_[2],_[1]),t:Mt(_[3],G(_[3],_[4])+_[5],_[4]),fov:_[6]}}),ah=x=>{let _=Xn[hn.indexOf(x)];return Math.atan2(_.t.x-_.p.x,-(_.t.z-_.p.z))*180/Math.PI},oh=new xa(Xn.map(x=>x.p),!1,"catmullrom",.35),vd=new xa(Xn.map(x=>x.t),!1,"catmullrom",.35),Gs=1400,Ws=new Float32Array(Gs+1);{let x=new V;for(let _=0;_<=Gs;_++)oh.getPoint(_/Gs,x),Ws[_]=Math.max(0,G(x.x,x.z)+10-x.y);for(let _=0;_<3;_++){let w=0;for(let T=0;T<=Gs;T++)w=Math.max(w*.965,Ws[T]),Ws[T]=w;w=0;for(let T=Gs;T>=0;T--)w=Math.max(w*.965,Ws[T]),Ws[T]=w}}{let x=Xn[hn.indexOf("national")],_=Mt(0,0,0).subVectors(x.t,x.p).setY(0).normalize(),w=Mt(-_.z,0,_.x);Yi.uFw.value.copy(_),Yi.uRt.value.copy(w),Yi.uC.value.copy(x.p).addScaledVector(_,2500).addScaledVector(w,o?0:-430),Yi.uC.value.y=x.p.y+500,Yi.uDS.value=o?430:600}{let x=hn.map(ct=>Xn[hn.indexOf(ct)]),_=(ct,dt,xt)=>{let yt=Mt(0,0,0).subVectors(ct.t,ct.p).setY(0).normalize(),tt=Mt(-yt.z,0,yt.x),Q=Mt(0,0,0).copy(ct.p).addScaledVector(yt,dt).addScaledVector(tt,xt);return Q.y=G(Q.x,Q.z),Q},w=_(Xn[hn.indexOf("top")],1500,-520),T=_(Xn[hn.indexOf("salary")],1600,-400),P=Hu.geometry.attributes.position;for(let ct=0;ct<P.count;ct++){let dt=ct%2?w:T;P.setXYZ(ct,dt.x,dt.y,dt.z)}let I=[12,24,36][d],D=new Float32Array(I*3),Z=new Float32Array(I*2),q=Xn[hn.indexOf("school")],$=Xn[hn.indexOf("tools")];for(let ct=0;ct<I;ct++){let dt=ct%3===2?$:q,xt=_(dt,300+wt()*1700,(wt()-.5)*1900);D[ct*3]=xt.x,D[ct*3+1]=xt.y+8+wt()*16,D[ct*3+2]=xt.z,Z[ct*2]=wt(),Z[ct*2+1]=wt()}let st=new de;st.setAttribute("position",new Rt(D,3)),st.setAttribute("aR",new Rt(Z,2)),ks=new en(st,new tn({uniforms:Vu,transparent:!0,depthWrite:!1,vertexShader:"attribute vec2 aR;uniform float uVis,uPxK,uPR,uTime;uniform vec3 uKey,uAmb;varying vec4 vK;void main(){vec3 P=position+vec3(sin(uTime*.05+aR.x*9.)*50.,0.,cos(uTime*.04+aR.y*9.)*50.);vec4 mv=viewMatrix*vec4(P,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((120.+aR.x*190.)*uPxK/max(-mv.z,1.),6.*uPR,230.*uPR);vK=vec4(uAmb*1.05+uKey*.3,uVis*.11);}",fragmentShader:"varying vec4 vK;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.0,d);gl_FragColor=vec4(vK.rgb,vK.a*a*a);}"})),ks.frustumCulled=!1,ks.visible=!1,lt.add(ks),ii.f=Mt(0,0,0).subVectors(q.t,q.p).setY(0).normalize(),ii.rt=Mt(-ii.f.z,0,ii.f.x),ii.p=q.p.clone()}let Pn=x=>Object.assign({sunAlt:-30,sunYaw:0,moonAlt:-20,moonYaw:0,moonI:0,moonSize:1,phaseK:-1,wax:1,exp:1,haze:.8,fog:2e-5,fogH:900,drones:0,hawks:0,balloons:0,mist:0,clouds:0,stars:0,milky:0,dust:.2,fire:0,lanterns:0,beams:0,rain:0,storm:0,falcon:0,eclipse:0,sunSize:1,lst:-1,acc:"#f2dfb3",tint:"#ffffff",amb:1,trueSky:0},x),xd=["الوسم","المربعانية","العقارب"].includes(t.season),_d={school:Pn({sunAlt:7,sunYaw:58,exp:1.2,clouds:.3,haze:.7,fog:22e-6,falcon:1,dust:.7,balloons:1,mist:1,acc:"#ffc98a"}),ramadan:Pn({sunAlt:-14,sunYaw:-150,moonAlt:14,moonYaw:-5,moonI:.5,phaseK:.16,wax:1,moonSize:6,exp:1.9,stars:1,milky:.8,lanterns:1,fog:16e-6,acc:"#c9d6ff",lst:9}),eid:Pn({sunAlt:-20,sunYaw:170,moonAlt:-5,exp:2.3,stars:.7,milky:.4,fire:1,fog:18e-6,acc:"#ffb3d9",lst:17}),national:Pn({sunAlt:-5,sunYaw:34,exp:2.1,haze:1,clouds:0,beams:.24,stars:1,milky:1.1,amb:.5,fog:18e-6,drones:1,acc:"#7ee0a8",lst:19}),kingdom:Pn({sunAlt:6.2,sunYaw:-150,exp:1.16,haze:.82,clouds:.24,dust:.7,fog:19e-6,hawks:1,acc:"#a8e6bd"}),salary:Pn({sunAlt:13,sunYaw:62,exp:.98,haze:.75,fog:2e-5,clouds:.2,falcon:1,dust:.8,acc:"#ffd27a"}),majlis:Pn({sunAlt:-24,sunYaw:160,moonAlt:30,moonYaw:35,moonI:.55,phaseK:.72,wax:1,moonSize:1.5,exp:2.35,stars:1,milky:.9,fog:12e-6,acc:"#ffc48a",lst:22}),prayer:Pn({sunAlt:7,sunYaw:-120,moonAlt:34,moonYaw:-20,moonI:.02,exp:1.2,haze:.8,clouds:.34,fog:2e-5,dust:.5,acc:"#ffb08a"}),moon:Pn({sunAlt:-30,sunYaw:170,moonAlt:7.1,moonYaw:.8,moonI:1,moonSize:1,phaseK:-2,exp:2,stars:.55,fog:13e-6,acc:"#dfe8ff",lst:2}),seasons:Pn(xd?{sunAlt:-20,sunYaw:165,moonAlt:30,moonYaw:120,moonI:.3,exp:2,stars:.55,clouds:.3,storm:1,rain:1,fog:4e-5,dust:.05,acc:"#bcd0e6",lst:6.4}:{sunAlt:-20,sunYaw:165,exp:2.1,stars:.9,milky:.4,dust:1,fog:6e-5,acc:"#e9c79a",lst:6.4}),fasting:Pn({sunAlt:-28,sunYaw:170,moonAlt:15,moonYaw:9,moonI:1.1,phaseK:.995,moonSize:2.2,exp:1.9,stars:.4,fog:15e-6,acc:"#f4f1e6",lst:13}),sky:Pn({sunAlt:21,sunYaw:-4,exp:1.6,eclipse:1,sunSize:3.6,stars:.9,fog:12e-6,acc:"#a9c4ff",lst:9.6}),month:Pn({sunAlt:-40,sunYaw:170,exp:2.6,stars:1,milky:1.5,fog:1e-5,acc:"#b9b6ff",lst:18.3,amb:1.2}),tools:Pn({sunAlt:6,sunYaw:-105,exp:1.15,clouds:.38,haze:.9,fog:15e-6,mist:.7,acc:"#d9c2ff"})};function lh(x){let _=t.skyNow(x||Date.now()),w=Bn.smoothstep(_.sun.alt,-6,12),T=Bn.smoothstep(_.sun.alt,-8,0)*(1-Bn.smoothstep(_.sun.alt,6,30));return Pn({trueSky:1,sunAlt:_.sun.alt,sunAz:_.sun.az,moonAlt:_.moon.alt,moonAz:_.moon.az,moonI:_.moon.alt>-2?1:0,phaseK:-2,moonSize:2.2,exp:1.05+1.45*(1-w),amb:1+.7*(1-w),haze:.75+.3*T,fog:18e-6,clouds:.08+.26*T,stars:Math.max(0,Math.min(1,(-_.sun.alt-3)/9)),milky:Math.max(0,Math.min(1,(-_.sun.alt-12)/6))*.9,falcon:w>.6?1:0,dust:.3})}let fl=null,ch=-1e9,uh=-1,dl=null;function hh(x){if(t.cine&&t.cine.on){let _=t.cine.hour;return(uh!==_||!dl)&&(uh=_,dl=lh(t.cine.dayStart+_*36e5)),dl}return x==="top"||x==="upcoming"?((performance.now()-ch>3e4||!fl)&&(fl=lh(),ch=performance.now()),fl):_d[x]}function fh(x){return(((18.697374558+24.06570982441908*(x/864e5+24405875e-1-2451545))%24+46.7/15)%24+24)%24}let dh=24.95*Math.PI/180;function yd(x,_){let w=x/24*2*Math.PI,T=Math.sin(w),P=Math.cos(w),I=Math.sin(dh),D=Math.cos(dh);return _.set(T*-1,P,0,D*P,D*T,I,I*P,I*T,-D),_}let kr=(x,_)=>{let w=x*Math.PI/180,T=_*Math.PI/180;return Mt(Math.sin(T)*Math.cos(w),Math.sin(w),-Math.cos(T)*Math.cos(w))},Ki=null,Ba=null,hi=[],rn={scale:1,w:0,h:0,cap:f.max,mode:["auto","4k","fast"].includes(t.initialQ)?t.initialQ:"auto"},fi=0,Jn=0,Oa=0,Vr=0,pl=0,ml=()=>{Oa=e.clientWidth||innerWidth,Vr=e.clientHeight||innerHeight,pl=window.devicePixelRatio||1};ml();function Md(){let x=Math.min(Oa,7680),_=Math.min(Vr,4320);if(!x||!_)return[0,0];let w=x/_,T=window.devicePixelRatio||1,P=Math.max(x,_)*T,D=(rn.mode==="4k"?d===2?3840:rn.cap:rn.mode==="fast"?Math.min(P,1600,rn.cap):Math.min(rn.cap,Math.max(P,d===2?Math.min(3840,Math.max(2560,P*1.5)):P)))*rn.scale;return w>=1?[Math.round(D),Math.round(D/w)]:[Math.round(D*w),Math.round(D)]}function Gr(x){let[_,w]=Md();if(!_||!x&&Math.abs(_-fi)<4&&Math.abs(w-Jn)<4)return;fi=_,Jn=w,rn.w=fi,rn.h=Jn,r.setSize(fi,Jn,!1),e.style.width="100%",[Ki,Ba,...hi].forEach(I=>I&&I.dispose()),Ki=new cn(fi,Jn,{type:An,format:Je,samples:Math.max(fi,Jn)>Math.max(innerWidth,innerHeight)*(devicePixelRatio||1)*1.3?Math.min(f.msaa,2):f.msaa,depthBuffer:!0,minFilter:Ne,magFilter:Ne}),B.setSize(Math.max(4,Math.round(fi*f.clouds)),Math.max(4,Math.round(Jn*f.clouds))),Ba=new cn(Math.round(fi/4),Math.round(Jn/4),{type:An,format:Je,depthBuffer:!1}),hi=[];let T=fi>>1,P=Jn>>1;for(let I=0;I<5;I++)hi.push(new cn(Math.max(2,T),Math.max(2,P),{type:An,format:Je,depthBuffer:!1})),T>>=1,P>>=1;Oe.value=Jn/1080,fe.aspect=fi/Jn,fe.updateProjectionMatrix(),t.onResolution&&t.onResolution(rn)}let fe=new Tn(40,1,2,45e3),Ci=new Tn(40,1,1500,9e5);fe.rotation.order="YXZ";let Xs=nt("uniform sampler2D t;uniform vec2 px;uniform float k;varying vec2 vUv;void main(){vec3 c=texture2D(t,vUv).rgb*4.;c+=texture2D(t,vUv-px).rgb+texture2D(t,vUv+px).rgb+texture2D(t,vUv+vec2(px.x,-px.y)).rgb+texture2D(t,vUv+vec2(-px.x,px.y)).rgb;c/=8.;if(k>0.){float l=max(c.r,max(c.g,c.b));c*=smoothstep(k,k*2.2,l);}gl_FragColor=vec4(min(c,vec3(30.)),1.);}",{t:{value:null},px:{value:new xe},k:{value:0}}),gl=nt("uniform sampler2D t;uniform vec2 px;varying vec2 vUv;void main(){vec3 c=texture2D(t,vUv+vec2(-px.x*2.,0.)).rgb+texture2D(t,vUv+vec2(px.x*2.,0.)).rgb+texture2D(t,vUv+vec2(0.,px.y*2.)).rgb+texture2D(t,vUv+vec2(0.,-px.y*2.)).rgb;c+=(texture2D(t,vUv+px).rgb+texture2D(t,vUv-px).rgb+texture2D(t,vUv+vec2(px.x,-px.y)).rgb+texture2D(t,vUv+vec2(-px.x,px.y)).rgb)*2.;gl_FragColor=vec4(c/12.,1.);}",{t:{value:null},px:{value:new xe}},{blending:fa,transparent:!0}),ms={t:{value:null},uSun:{value:new xe},uVis:{value:0},uAspect:{value:1}},bd=nt("uniform sampler2D t;uniform vec2 uSun;uniform float uVis;varying vec2 vUv;void main(){if(uVis<.002){gl_FragColor=vec4(0.);return;}vec2 d=(uSun-vUv)/48.;vec2 p=vUv;vec3 acc=vec3(0.);float w=1.;float j=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);p+=d*j;for(int i=0;i<48;i++){vec3 c=texture2D(t,p).rgb;float l=max(c.r,max(c.g,c.b));acc+=min(c,vec3(8.))*smoothstep(1.6,4.5,l)*w;w*=.965;p+=d;}gl_FragColor=vec4(acc/48.*uVis,1.);}",ms),di={tS:{value:null},tB:{value:null},tR:{value:null},uExp:{value:1},px:{value:new xe},uSharp:{value:.55},uHz:{value:.5},uHeat:{value:0},uT:{value:0},uFl:{value:0},uSunS:{value:new xe(.5,.5)},uTint:{value:new ie(1,1,1)}},Sd=nt(`uniform sampler2D tS,tB,tR;uniform float uExp,uSharp,uHz,uHeat,uT,uFl;uniform vec2 uSunS;uniform vec2 px;uniform vec3 uTint;varying vec2 vUv;
vec3 aces(vec3 x){x=mat3(.59719,.07600,.02840,.35458,.90834,.13383,.04823,.01566,.83777)*x;vec3 a=x*(x+.0245786)-.000090537,b=x*(.983729*x+.4329510)+.238081;x=a/b;return clamp(mat3(1.60475,-.10208,-.00327,-.53108,1.10813,-.07276,-.07367,-.00605,1.07602)*x,0.,1.);}
vec3 tm(vec2 u){return aces(texture2D(tS,u).rgb*uExp*uTint);}
vec3 srgb(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));}
void main(){vec2 uv=vUv;{float hb=exp(-pow((vUv.y-uHz)*24.,2.))*uHeat;uv.x+=(sin(vUv.y*1700.+uT*6.)*.00055+sin(vUv.y*740.-uT*3.7)*.00035)*hb;}vec3 c=tm(uv),a=tm(uv-vec2(0.,px.y)),b=tm(uv-vec2(px.x,0.)),d=tm(uv+vec2(px.x,0.)),e=tm(uv+vec2(0.,px.y));
  vec3 mn=min(c,min(a,min(b,min(d,e)))),mx=max(c,max(a,max(b,max(d,e))));vec3 amp=sqrt(clamp(min(mn,2.-mx)/max(mx,vec3(1e-4)),0.,1.));vec3 w=-amp*mix(.125,.2,uSharp);c=clamp((c+(a+b+d+e)*w)/(1.+4.*w),0.,1.);
  vec3 add=(texture2D(tB,vUv).rgb*.11+texture2D(tR,vUv).rgb*.55)*uExp*uTint;vec3 st=vec3(0.);float ign=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))));for(int i=1;i<=7;i++){float of=(float(i)-1.+ign)*.0068;float w=1.-float(i)/8.;st+=(texture2D(tB,vUv+vec2(of,0.)).rgb+texture2D(tB,vUv-vec2(of,0.)).rgb)*w;}add+=st*vec3(.62,.8,1.15)*.0048*uExp*uTint;vec3 o=1.-(1.-c)*(1.-aces(add));
  if(uFl>.01){vec2 sv=uSunS-.5,gp=vUv-.5;float asp=px.y/px.x;vec3 gh=vec3(0.);for(int i=0;i<5;i++){float fi=float(i),k=-.35-fi*.42,rr=.016+.015*fi;float dd=length((gp-sv*k)*vec2(asp,1.));gh+=smoothstep(rr,rr*.55,dd)*vec3(.6+.1*fi,.75,1.-.12*fi)*.02;}o+=gh*uFl;}
  vec2 q=vUv-.5;o*=1.-dot(q,q)*.32;
  float lum=dot(o,vec3(.2126,.7152,.0722));o=mix(vec3(lum),o,1.06);o*=mix(vec3(.955,1.,1.05),vec3(1.035,1.,.955),smoothstep(.08,.75,lum));
  gl_FragColor=vec4(srgb(clamp(o,0.,1.)),1.);}`,di),ph=Mt(0,0,0),si={s:Mt(0,0,0),m:Mt(0,0,0),h:0,e:-1,mi:-1},mh=!0;function Ed(){let x=ut.uKeyDir.value;(mh||x.distanceToSquared(ph)>15e-7)&&(ph.copy(x),Ee(x),mh=!1);let _=ut.uSunDir.value,w=ut.uMoonDir.value;(_.distanceToSquared(si.s)>1e-6||w.distanceToSquared(si.m)>1e-6||Math.abs(Ft.uHaze.value-si.h)>.01||Math.abs(Ft.uSunI.value-si.e)>.05||Math.abs(Ft.uMoonI.value-si.mi)>.005||Math.abs(Ft.uEcl.value-(si.c||0))>.01)&&(si.c=Ft.uEcl.value,si.s.copy(_),si.m.copy(w),si.h=Ft.uHaze.value,si.e=Ft.uSunI.value,si.mi=Ft.uMoonI.value,Ft.uSun.value.copy(_),Ft.uMoon.value.copy(w),mt(C,He))}let wd=x=>{let _=1/(Math.max(x,0)+.15*Math.pow(Math.max(x,0)*57.3+3.885,-1.253)*57.3*0+.035),w=[.12,.26,.56],T=Ft.uHaze.value;return[Math.exp(-(w[0]+.07*T)*_*.65),Math.exp(-(w[1]+.08*T)*_*.65),Math.exp(-(w[2]+.1*T)*_*.65)]},In={u:0,uS:0,px:0,py:0,pxS:0,pyS:0,drag:0};t.world=In;function Td(){let x=t.layout;if(!x.length)return 0;let _=scrollY+innerHeight*.5,w=x.map(T=>T.top+Math.min(T.h,innerHeight*1.2)*.5);if(_<=w[0])return 0;for(let T=0;T<w.length-1;T++)if(_<w[T+1])return T+(_-w[T])/(w[T+1]-w[T]);return w.length-1}addEventListener("pointermove",x=>{In.px=x.clientX/innerWidth-.5,In.py=x.clientY/innerHeight-.5},{passive:!0});let gh=new ie,Ad=Mt(0,0,0),Rd=Mt(0,0,0),a_=new ie("#f2dfb3"),o_=x=>new ie(x),vh=(x,_,w)=>x+(_-x)*w;function Cd(x,_,w){let T=hh(hn[x]),P=hh(hn[_]),I={};for(let D in T)typeof T[D]=="number"&&typeof P[D]=="number"&&(I[D]=vh(T[D],P[D],w));return I.a=T,I.b=P,I.w=w,I}let ne=Pn({}),vl=!1,Zi=Mt(0,1,0),Ji=Mt(0,1,0),l_=Mt(0,0,1),$n=null,za=0,xl=40,qs=-1,Wr=performance.now(),c_=t.pins||[],u_=Mt(0,0,0);function xh(x,_){return x.trueSky?kr(x.sunAlt,x.sunAz):kr(x.sunAlt,_+x.sunYaw)}function _h(x,_){return x.trueSky?kr(x.moonAlt,x.moonAz):kr(x.moonAlt,_+x.moonYaw)}let h_=(x,_,w)=>x,En=new Tn(30,1.6,10,4e4),Ha=document.createElement("canvas");Ha.width=1536,Ha.height=768;let jn=Ha.getContext("2d"),Xr=new va(Ha);Xr.minFilter=Ne,Xr.magFilter=Ne,Xr.generateMipmaps=!1,$t.tWords.value=Xr;let _l=null,yh=0;function Mh(x){En.fov=x.fov,En.aspect=fe.aspect||1.6,En.position.copy(x.p),En.lookAt(x.t),En.updateProjectionMatrix(),En.updateMatrixWorld();let _=G(x.p.x,x.p.z),w=new V,T=[];for(let I=.62;I>=-.42;I-=.05){let D=[];for(let $=-.9;$<=.901;$+=.06){w.set($,I,.5).unproject(En).sub(En.position).normalize();let st=!1;for(let ct=260;ct<9e3;ct*=1.09){let dt=x.p.x+w.x*ct,xt=x.p.y+w.y*ct,yt=x.p.z+w.z*ct;if(xt<=G(dt,yt)){st=xt-_>26;break}}D.push(st)}let Z=[0,-1,-1],q=0;D.forEach(($,st)=>{q=$?q+1:0,q>Z[0]&&(Z=[q,st-q+1,st])}),T.push({y:I,a:-.9+Z[1]*.06,b:-.9+Z[2]*.06,n:Z[0]})}let P=null;for(let I=0;I+3<T.length;I++){let D=Math.max(T[I].a,T[I+1].a,T[I+2].a,T[I+3].a),Z=Math.min(T[I].b,T[I+1].b,T[I+2].b,T[I+3].b),q=Z-D;if(T[I].n&&T[I+3].n&&q>.44){P={w:q,cx:(D+Z)/2,cy:T[I+1].y-.025};break}}return P}let qr=new Map;function Pd(x){_l=x,$t.uWV.value=0,yh=fe.aspect;let _=t.cliffLines&&t.cliffLines[x],w=Xn[hn.indexOf(x)],T=x+"|"+fe.aspect.toFixed(2),P=null;if(_&&w&&!(x==="top"&&fe.aspect<1.2)&&(qr.has(T)?P=qr.get(T):(P=Mh(w),qr.set(T,P)),En.fov=w.fov,En.aspect=fe.aspect||1.6,En.position.copy(w.p),En.lookAt(w.t),En.updateProjectionMatrix(),En.updateMatrixWorld()),jn.fillStyle="#000",jn.fillRect(0,0,1536,768),!P){jn.noText=!0;return}jn.noText=!1,En.updateMatrixWorld(),$t.uWPV.value.multiplyMatrices(En.projectionMatrix,En.matrixWorldInverse),jn.fillStyle="#fff",jn.direction="rtl",jn.textAlign="center",jn.textBaseline="middle";let I=110;jn.font=`400 ${I}px "Katibeh","Amiri",serif`,I=Math.min(I,I*(P.w*.84*768)/jn.measureText(_).width),jn.font=`400 ${I}px "Katibeh","Amiri",serif`,jn.fillText(_,(P.cx+1)*768,(1-P.cy)*384),Xr.needsUpdate=!0}function Id(x){zt.id=x,zt.i=0,zt.t=0,zt.lines=t.skyLines?t.skyLines(x):null;let _=Xn[hn.indexOf(x)];if(!zt.lines||!zt.lines.length||!_)return;let w=Mt(0,0,0).subVectors(_.t,_.p).normalize(),T=Mt(w.x,0,w.z).normalize(),P=Mt(-T.z,0,T.x),I=Math.asin(w.y)+_.fov*Math.PI/360*(x==="top"?(fe.aspect||1.6)>1.2?.7:.5:.66),D=Math.atan(Math.tan(_.fov*Math.PI/360)*(fe.aspect||1.6)),Z=(fe.aspect||1.6)>1.2,q=x==="top"&&Z?-.47:0,$=q?.43:Z?.62:.92;zt.DS=Lr*Math.tan(D)*$,zt.fr0=(1-q)/$+.14,zt.fr1=(-1-q)/$-.14,Ri.uFr0.value=zt.fr0,Ri.uFrW.value=zt.fr0-zt.fr1,zt.P.copy(_.p),zt.Rt.copy(P),zt.Fw.copy(T),zt.C.copy(_.p).addScaledVector(T,Lr).addScaledVector(P,Lr*Math.tan(D)*q),zt.C.y=_.p.y+Lr*Math.tan(I),Ri.uC.value.copy(zt.C),Ri.uRt.value.copy(P),Ri.uFw.value.copy(T),Ri.uDS.value=zt.DS,ba(zt.lines[0])}let ka=new ze,Pi=Mt(0,0,0),Dd=Mt(0,1,0),Ii=Mt(0,0,0),Dn=Mt(0,0,0),bh=0,Sh=null,Eh=0;function Ld(x,_,w,T){let P=Math.round(w),I=Math.abs(w-P),D=hn[P];D!==Sh&&(Sh=D,Eh=performance.now());let Z=T||performance.now()-Eh>240&&I<.4;Z&&(D!==zt.id||Math.abs((fe.aspect||1)-bh)>.02)&&(bh=fe.aspect,Id(D)),Z&&(D!==_l||Math.abs(fe.aspect-yh)>.02)&&Pd(D);let q=jn.noText||D!==_l?0:1-Bn.smoothstep(I,.16,.34);$t.uWV.value+=(q-$t.uWV.value)*Math.min(1,x*(q>$t.uWV.value?1.1:4));let $=zt.lines&&zt.lines.length&&D===zt.id,st=$?1-Bn.smoothstep(I,.2,.42):0;if(zt.vis=st,$o.visible=st>.01,!$||st<=.01){ya.visible=Ma.visible=Nu.visible=tl.visible=Qo.visible=!1,zt.rumble=0;return}T?zt.t=14:(zt.t+=x,zt.t>ld&&(zt.t=0,zt.i=(zt.i+1)%zt.lines.length,t.skyLines&&(zt.lines=t.skyLines(D)||zt.lines),ba(zt.lines[zt.i%zt.lines.length]))),Ri.uT.value=zt.t,Ri.uVis.value=st;let ct=zt.fr0-(zt.fr0-zt.fr1)*zt.t/Ur,dt=!T&&zt.t<Ur&&st>.02;ya.visible=Ma.visible=tl.visible=Qo.visible=dt,Bu.uVis.value=st,Nu.visible=!T&&zt.t<Ur+4&&st>.02,zt.rumble=dt?Math.max(0,1-Math.abs(ct)/.8)*st:0;let xt=od/Lr;Pi.copy(zt.Rt).multiplyScalar(-1),Ii.crossVectors(Pi,Dd),ds.uD.value.copy(Pi),ds.uR.value.copy(Ii),ds.uS.value=(zt.fr0-zt.fr1)/Ur*zt.DS*xt,ds.uTS.value=zt.t,ds.uVis.value=st,Ou.uVis.value=st;let yt=tl.geometry.attributes.position,tt=Qo.geometry.attributes.position;for(let Q=0;Q<4;Q++){let Bt=Uu[Q],Ut=(ct-hd[Q])*zt.DS*xt,Ht=ud[Q]*zt.DS*xt;Dn.copy(zt.P).lerp(zt.C,xt).addScaledVector(zt.Rt,Ut),Dn.y+=Ht+Math.sin(_*1.3+Q)*1.2,ds.uJ.value[Q].copy(Dn);let qt=Lt.up.clone();qt.addScaledVector(Ii,Math.sin(_*.9+Q*1.7)*.05).normalize();let Jt=new V().crossVectors(Pi,qt);ka.makeBasis(Pi,qt,Jt),ka.scale(Mt(Cn,Cn,Cn)),ka.setPosition(Dn),Bt[0].setMatrixAt(Bt[1],ka),Bt[0].instanceMatrix.needsUpdate=!0;let jt=Fu[Q];[-1,1].forEach((Kt,Fe)=>{yt.setXYZ(Q*2+Fe,Dn.x+Pi.x*jt[0]*Cn+Ii.x*Kt*jt[1]*Cn,Dn.y,Dn.z+Pi.z*jt[0]*Cn+Ii.z*Kt*jt[1]*Cn)});let se=Bt[2]*Cn;tt.setXYZ(Q*3,Dn.x-Ii.x*se,Dn.y,Dn.z-Ii.z*se),tt.setXYZ(Q*3+1,Dn.x+Ii.x*se,Dn.y,Dn.z+Ii.z*se),tt.setXYZ(Q*3+2,Dn.x+Pi.x*jt[0]*Cn,Dn.y+3.9*Cn,Dn.z+Pi.z*jt[0]*Cn)}yt.needsUpdate=!0,tt.needsUpdate=!0}function Yr(x){let _=za?Math.min(.6,(performance.now()-za)/1e3):1;za=performance.now();let w=t.still(),T=w?1:1-Math.exp(-_*4.2),P=w?1:1-Math.exp(-_*3.4);ut.uTime.value=w?12:x/1e3;let I=performance.now()/1e3,D=ut.uTime.value,Z=Td();In.u=Z,In.uS+=(Z-In.uS)*T;let q=1-Math.exp(-_*2.6);In.pxS+=(In.px-In.pxS)*q,In.pyS+=(In.py-In.pyS)*q;let $=hn.length-1,st=Math.max(0,Math.min($,In.uS)),ct=st/$,dt=Math.floor(st),xt=st-dt,yt=Math.min($,dt+1),tt=Bn.smoothstep(xt,.15,.85);oh.getPoint(ct,fe.position);let Q=fe.position,Bt=vd.getPoint(ct,Ad);{let pt=Math.min(xt,1-xt);Q.y+=Ws[Math.round(ct*Gs)]*Bn.smoothstep(pt,.02,.24)}$n&&(Q.set($n[0],G($n[0],$n[1])+$n[2],$n[1]),Bt.set($n[3],G($n[3],$n[4])+$n[5],$n[4]));let Ut=Rd.subVectors(Bt,Q).setY(0).normalize(),Ht=-Ut.z,qt=Ut.x,Jt=Q.distanceTo(Bt),jt=Math.min(1,Jt/2e3)*16;if(Q.x+=Ht*In.pxS*-jt,Q.z+=qt*In.pxS*-jt,Q.y+=-In.pyS*jt*.4,!w){Q.y+=Math.sin(I*.36)*.9,Q.x+=Ht*Math.sin(I*.23)*1.6,Q.z+=qt*Math.sin(I*.23)*1.6;let pt=Math.min(1,Math.max(0,(performance.now()-Wr)/5200)),Qt=1-Math.pow(1-pt,3.5);Qt<1&&st<1&&(Q.x-=Ut.x*2600*(1-Qt),Q.z-=Ut.z*2600*(1-Qt),Q.y+=520*(1-Qt))}let se=G(Q.x,Q.z)+5;Q.y<se&&(Q.y=se),fe.lookAt(Bt),zt.rumble>.01&&!w&&(fe.rotateZ(Math.sin(I*43)*.0011*zt.rumble),fe.rotateX(Math.sin(I*57)*8e-4*zt.rumble)),t.cine&&t.cine.on&&(fe.rotateY(t.cine.lx||0),fe.rotateX(t.cine.ly||0));let Kt=$n?$n[6]:vh(Xn[dt].fov,Xn[yt].fov,tt),Fe=Math.min(1,Math.abs(t.scrollVel||0)/2800);w||(t.scrollVel=(t.scrollVel||0)*Math.exp(-_*5)),xl+=(Kt+Fe*4-xl)*(1-Math.exp(-_*5)),fe.fov=xl,fe.updateProjectionMatrix(),fe.updateMatrixWorld();let me=Cd(dt,yt,tt),fn=P,nn=(pt,Qt)=>{ne[pt]=vl?ne[pt]+(Qt-ne[pt])*fn:Qt};["exp","haze","fog","drones","hawks","balloons","mist","clouds","stars","milky","dust","fire","lanterns","beams","rain","storm","falcon","eclipse","sunSize","moonI","moonSize","amb"].forEach(pt=>nn(pt,me[pt]));let dn=ah(hn[dt]),De=ah(hn[yt]),pn=xh(me.a,dn),Qe=xh(me.b,De),xn=_h(me.a,dn),gs=_h(me.b,De),Zs=pn.lerp(Qe,tt).normalize(),Js=xn.lerp(gs,tt).normalize();vl?(Zi.lerp(Zs,fn).normalize(),Ji.lerp(Js,fn).normalize()):(Zi.copy(Zs),Ji.copy(Js)),vl=!0,ut.uSunDir.value.copy(Zi),ut.uMoonDir.value.copy(Ji);let Hn=Zi.y,vs=Ji.y,Di=wd(Hn),$i=1-ne.eclipse*.985,xs=3.1*Bn.smoothstep(Hn,-.03,.03)*$i;gh.setRGB(Di[0],Di[1],Di[2]),ut.uSunRad.value.copy(gh).multiplyScalar(xs);let $s=ne.moonI*Bn.smoothstep(vs,-.03,.06),ri=1-Bn.smoothstep(Hn,-.09,.03);ut.uNight.value=Math.max(ri,ne.eclipse*.9);let Sl=Fd(.42,.47,.6,$s*.42*ri);Ft.uSunI.value=26*Bn.smoothstep(Hn,-.32,-.03)*$i,Ft.uMoonI.value=$s*.36*ri,Ft.uHaze.value=ne.haze,Ft.uEcl.value=ne.eclipse,xs*Math.max(Di[1],.01)>$s*.1&&Hn>-.01?(ut.uKeyDir.value.copy(Zi),ut.uKeyCol.value.copy(ut.uSunRad.value),ut.uFillDir.value.copy(Ji),ut.uFillCol.value.setRGB(0,0,0)):(ut.uKeyDir.value.copy(Ji),ut.uKeyCol.value.setRGB(Sl[0],Sl[1],Sl[2]),ut.uFillDir.value.copy(Zi),ut.uFillCol.value.setRGB(0,0,0));let _s=Bn.smoothstep(Hn,-.12,.5),ys=Bn.smoothstep(Hn,-.25,0)*(1-Bn.smoothstep(Hn,0,.3)),El=ne.amb*$i;ut.uTwi.value=ys*.16*(1-ne.eclipse),ut.uAmbSky.value.setRGB((.46*_s+.25*ys+.034*ri+.012*$s*ri)*El+.016*ne.eclipse,(.54*_s+.22*ys+.042*ri+.016*$s*ri)*El+.012*ne.eclipse,(.7*_s+.27*ys+.066*ri+.024*$s*ri)*El+.012*ne.eclipse),ut.uAmbGnd.value.setRGB(.3*_s*Di[0]+.12*ys+.012*ri,.22*_s*Di[1]+.08*ys+.012*ri,.14*_s*Di[2]+.05*ys+.016*ri),ut.uFog.value=ne.fog,ut.uClouds.value=ne.clouds,bt.uEclipse.value=ne.eclipse,bt.uMilky.value=ne.milky,ci.uVis.value=ne.stars*(1-ne.clouds*.65),bt.uSunSize.value=.00465*ne.sunSize,bt.uMoonSize.value=.00465*ne.moonSize*(Kt<15?2.1:1),bt.uMoonVis.value=Bn.smoothstep(vs,-.02,.01);let Jr=tt<.5?me.a.phaseK:me.b.phaseK,wl=t.moonNow(),Bd=Jr===-2?Math.max(.02,wl.k):Jr===-1?wl.k:Jr,Od=Jr===-2||Jr===-1?wl.waxing:tt<.5?me.a.wax:me.b.wax;{let pt=Math.acos(1-2*Bd),Qt=je.crossVectors(Ji,wh).normalize();bt.uMoonLight.value.copy(Ji).multiplyScalar(Math.cos(pt)).addScaledVector(Qt,(Od?-1:1)*Math.sin(pt)).normalize()}let Ch=me.a.lst<0?fh(Date.now()):me.a.lst,$r=(me.b.lst<0?fh(Date.now()):me.b.lst)-Ch;$r>12&&($r-=24),$r<-12&&($r+=24);let Ph=Ch+$r*tt;qs<0&&(qs=Ph);let jr=Ph-qs;if(jr>12&&(jr-=24),jr<-12&&(jr+=24),qs=(qs+jr*fn+24)%24,yd(qs,bt.uEqW.value),Ea.visible=ne.lanterns>.01,Xu.uVis.value=ne.lanterns,Aa.visible=ne.fire>.01,$u.uVis.value=ne.fire,th.value=ne.beams,eh.forEach(pt=>{pt.visible=ne.beams>.01,pt.visible&&pt.rotation.set(Math.sin(D*.31+pt.userData.ph)*.3,0,Math.cos(D*.23+pt.userData.ph*1.7)*.34)}),Pa.visible=ne.rain>.01,Ca.uVis.value=ne.rain,Ca.uCam.value.copy(Q),hl.uVis.value=ne.dust*(xs>.05?1:.25),hl.uCol.value.copy(ut.uKeyCol.value).add(ut.uAmbSky.value),Ld(_,D,st,w),Hs.visible=ne.balloons>.01,Hs.visible&&ii.p){for(let pt=0;pt<Hs.count;pt++){let Qt=zu[pt],Ce=450+Qt[0]*1500,ke=(Qt[1]-.5)*(Ce*1.1)+Math.sin(D*.012+Qt[2]*9)*40,an=ii.p.x+ii.f.x*Ce+ii.rt.x*ke,wn=ii.p.z+ii.f.z*Ce+ii.rt.z*ke;Lt.position.set(an,G(an,wn)+60+Qt[2]*260+Math.sin(D*.16+Qt[0]*9)*7,wn),Lt.rotation.set(0,Qt[1]*6.283,0),Lt.scale.setScalar(1.15+Qt[2]*.5),Lt.updateMatrix(),Hs.setMatrixAt(pt,Lt.matrix)}Hs.instanceMatrix.needsUpdate=!0}if(el.uVis.value=Math.min(1,ne.dust*1.5)*Math.min(1,xs/1.2)*(1-ne.rain),Hu.visible=el.uVis.value>.02,ps.visible=ne.falcon>.05,ps.visible){let pt=D%46/46;for(let Qt=0;Qt<9;Qt++){let Ce=(Qt+1>>1)*(Qt%2?1:-1),ke=(pt*2.6-1.3)*560;Lt.position.set(Q.x+Ut.x*620+-Ut.z*(ke-Math.abs(Ce)*9)+Ut.x*Ce*7,Q.y+96+Math.abs(Ce)*2.2,Q.z+Ut.z*620+Ut.x*(ke-Math.abs(Ce)*9)+Ut.z*Ce*7),Lt.rotation.set(0,Math.atan2(Ut.x,Ut.z)+Math.PI,0),Lt.scale.setScalar(2.4),Lt.updateMatrix(),ps.setMatrixAt(Qt,Lt.matrix)}ps.instanceMatrix.needsUpdate=!0}Nr.uVis.value=Math.min(1,ne.dust*1.6)*Math.min(1,xs/1.2+.2),ku.visible=Nr.uVis.value>.03,ku.visible&&(Nr.uCam.value.copy(Q),Nr.uG.value=G(Q.x,Q.z)),Vu.uVis.value=ne.mist,ks&&(ks.visible=ne.mist>.01),On.uAmen.value*=Math.exp(-_*.75),bi.value=ut.uNight.value*.9,we.value=Jn/(2*Math.tan(fe.fov*Math.PI/360)),Wn.visible=Ei.visible=ne.hawks>.01,qi.value=ne.hawks,Sn.uHT.value=D,fd.visible=ne.drones>.01,Yi.uVis.value=ne.drones,Yi.uSc.value=w?1.2:t.dbg&&t.dbg.sc!==void 0?t.dbg.sc:D/9;{let pt=Ks.subVectors(Le.b,Le.a),Qt=pt.length();pt.normalize();let Ce=Math.atan2(-pt.z,pt.x);for(let ke=0;ke<Vt;ke++){let an=(D*1.5+ke*6.2+ke%3*.8)%Qt,wn=Le.a.x+pt.x*an+Math.sin(ke*2.1)*1.4,wi=Le.a.z+pt.z*an+Math.cos(ke*1.3)*1.4;Lt.position.set(wn,G(wn,wi)-.03,wi),Lt.rotation.set(0,Ce,0);let Qr=1+ke%4*.03;Lt.scale.set(Qr,Qr,Qr),Lt.updateMatrix(),Se.setMatrixAt(ke,Lt.matrix)}Se.instanceMatrix.needsUpdate=!0}if(Ze.visible=ne.falcon>.05,Ze.visible){let pt=D*.22,Qt=140,Ce=Q.x+Ut.x*320+Math.cos(pt)*Qt,ke=Q.z+Ut.z*320+Math.sin(pt)*Qt;Ze.position.set(Ce,Q.y+70+Math.sin(D*.5)*8,ke),Ze.rotation.set(0,-pt-Math.PI/2,Math.sin(pt)*.2)}if(!w&&ci.uVis.value>.3&&I>pi.nm){pi.nm=I+3+Math.random()*5;let pt=al.find(Qt=>!Qt.on);if(pt){let Qt=Math.atan2(Ut.x,-Ut.z)*180/Math.PI,Ce=kr(24+Math.random()*30,Qt+(Math.random()-.5)*50),ke=Mt(0,0,0).crossVectors(Ce,wh).normalize(),an=Mt(0,0,0).crossVectors(ke,Ce);pt.on=!0,pt.t0=I,pt.dur=.7+Math.random()*.7,pt.st=Ce,pt.dir=ke.multiplyScalar(Math.random()<.5?1:-1).addScaledVector(an,-.5-Math.random()*.5).normalize(),pt.sp=.26+Math.random()*.2}}for(let pt=0;pt<Ia;pt++){let Qt=al[pt],Ce=Qt.on?I-Qt.t0:0,ke=Qt.on?Ce/Qt.dur:1;ke>=1&&(Qt.on=!1);for(let an=0;an<Vs;an++){let wn=pt*Vs+an;if(!Qt.on){xn[wn]=0;continue}je.copy(Qt.st).addScaledVector(Qt.dir,Qt.sp*Ce-an/(Vs-1)*.11*Math.min(1,Ce*6)).normalize().multiplyScalar(900),Da[wn*3]=je.x,Da[wn*3+1]=je.y,Da[wn*3+2]=je.z,xn[wn]=Math.pow(1-an/(Vs-1),1.6)*Math.sin(ke*Math.PI)*ci.uVis.value}}zr.attributes.position.needsUpdate=!0,zr.attributes.aA.needsUpdate=!0;let qa=0;if(!w&&ne.storm>.4&&I>pi.nf){pi.nf=I+3+Math.random()*6,pi.fT=I,pi.fl=1;let pt=Math.atan2(Ut.x,-Ut.z)+(Math.random()-.5)*.9,Qt=Math.sin(pt),Ce=-Math.cos(pt),ke=2600+Math.random()*3e3,an=0,wn=G(Q.x+Qt*ke,Q.z+Ce*ke);for(let wi=0;wi<La;wi++){let Qr=wi/(La-1);an+=wi?(Math.random()-.5)*170:0,Ua[wi*3]=Q.x+Qt*ke-Ce*an,Ua[wi*3+1]=wn+(1-Qr)*2400,Ua[wi*3+2]=Q.z+Ce*ke+Qt*an}Hr.attributes.position.needsUpdate=!0}if(pi.fl){let pt=I-pi.fT;qa=pt<.07?1:pt<.14?.2:pt<.22?.8:Math.max(0,.8-(pt-.22)*3.2),pt>.6&&(pi.fl=0)}ut.uFlash.value=qa*ne.storm*.2,Qu.fill(Math.min(1,qa*1.3)*ne.storm),Hr.attributes.aA.needsUpdate=!0,Fa.visible=qa>0;{let pt=tt<.5?me.a.acc:me.b.acc;if(pt!==pi.acc&&t.setAccent){pi.acc=pt;let Qt=Ud.set(pt).getHex(),Ce=()=>t.setAccent(Qt>>16&255,Qt>>8&255,Qt&255);window.requestIdleCallback?requestIdleCallback(Ce,{timeout:700}):setTimeout(Ce,150)}}Gr(!1),Ed(),Et.uCamW.value.setFromMatrix4(fe.matrixWorld);let Ih=Math.tan(fe.fov*Math.PI/360);Et.uTan.value.set(Ih*fe.aspect,Ih),Et.uCam.value.copy(Q),j.uCover.value=ne.storm*.82,j.uStorm.value=ne.storm,j.uJit.value=w?0:I%1,mt(Pt,B),ci.uFov.value=Math.max(1,Math.min(2.4,40/fe.fov)),Ci.fov=fe.fov,Ci.aspect=fe.aspect,Ci.position.copy(Q),Ci.quaternion.copy(fe.quaternion),Ci.updateProjectionMatrix(),Ci.updateMatrixWorld(),r.setRenderTarget(Ki),r.clear(!0,!0,!1),r.render(ve,Ci),r.clearDepth(),r.render(lt,fe),Xs.uniforms.t.value=Ki.texture,Xs.uniforms.k.value=0;let Ya=Ki;for(let pt=0;pt<hi.length;pt++){let Qt=hi[pt];Xs.uniforms.t.value=Ya.texture,Xs.uniforms.px.value.set(.5/Ya.width*2,.5/Ya.height*2),Xs.uniforms.k.value=pt===0?1.05/Math.max(ne.exp,.1):0,mt(Xs,Qt),Ya=Qt}r.autoClear=!1;for(let pt=hi.length-1;pt>0;pt--)gl.uniforms.t.value=hi[pt].texture,gl.uniforms.px.value.set(.5/hi[pt].width,.5/hi[pt].height),mt(gl,hi[pt-1]);je.copy(Zi).multiplyScalar(4e4).add(Q).project(fe);let zd=Zi.dot(Ks.set(0,0,-1).applyQuaternion(fe.quaternion))>0,Hd=Math.max(Math.abs(je.x),Math.abs(je.y)),kd=zd&&Hn>-.02?Math.max(0,1-(Hd-1)/.8)*Math.min(1,xs/1.5)*(1-ne.eclipse):0;if(ms.uSun.value.set(je.x*.5+.5,je.y*.5+.5),ms.uVis.value+=(Math.min(1,kd)-ms.uVis.value)*Math.min(1,_*5),ms.t.value=Ki.texture,mt(bd,Ba),di.tS.value=Ki.texture,di.tB.value=hi[0].texture,di.tR.value=Ba.texture,di.uExp.value=ne.exp,di.uT.value=D,di.uFl.value=ms.uVis.value,di.uSunS.value.copy(ms.uSun.value),fe.getWorldDirection(Ks),Ks.y=0,Ks.normalize(),je.copy(Q).addScaledVector(Ks,9e3).project(fe),di.uHz.value=je.y*.5+.5,di.uHeat.value=w?0:_s*Math.min(1,xs/1.5)*(1-ne.rain)*(Hn>.05?1:0),di.px.value.set(1/fi,1/Jn),mt(Sd,null),t.pins)for(let pt of t.pins){let Qt=st>=pt.from&&st<=pt.to&&(!pt.night||ut.uNight.value>.6&&ci.uVis.value>.25),Ce=!1;if(Qt){if(pt.ra!==void 0){let an=pt.ra/12*Math.PI,wn=pt.dec*Math.PI/180;je.set(Math.cos(wn)*Math.cos(an),Math.cos(wn)*Math.sin(an),Math.sin(wn)).applyMatrix3(bt.uEqW.value).multiplyScalar(4e4).add(Q)}else je.set(pt.x,G(pt.x,pt.z)+(pt.h||0),pt.z);let ke=je.distanceTo(Q);je.project(fe),Ce=je.z<1&&je.x>-.92&&je.x<(innerWidth>900?.12:.92)&&Math.abs(je.y)<.86,Ce&&pt.el&&(pt.el.style.transform=`translate(${(je.x*.5+.5)*innerWidth}px,${(.5-je.y*.5)*Vr}px)`)}pt.el&&pt.on!==Ce&&(pt.on=Ce,pt.el.classList.toggle("on",Ce))}if(Xa&&!w&&!t.reading&&Wr&&performance.now()-Wr>7e3&&(Ga+=_,Ml++,Ga>4)){let pt=Ga/Ml*1e3;Ga=0,Ml=0,Wa=pt>70?Wa+1:0,Wa>=2&&t.onOverload&&(Wa=0,t.onOverload())}if(rn.mode==="auto"&&Xa&&!w&&!t.reading&&_<.2&&!document.hidden&&performance.now()-Wr>5500&&(yl++,Va+=_,Va>1.6)){let pt=Va/yl*1e3;yl=0,Va=0,pt>(d===0?42:23.5)&&rn.scale>.42?(Kr=Math.min(Kr,rn.scale*.97),Ys=0,rn.scale=Math.max(.42,rn.scale*.84)):pt<(d===0?36:19)?(Ys+=1.6,Ys>8&&rn.scale<Kr&&(Ys=0,rn.scale=Math.min(Kr,rn.scale*1.12))):Ys=0}}let yl=0,Va=0,Ys=0,Kr=1,Ga=0,Ml=0,Wa=0,wh=Mt(0,1,0),je=Mt(0,0,0),Ks=Mt(0,0,0),Ud=new ie,pi={nm:3,nf:2,fT:0,fl:0,la:0};function Fd(x,_,w,T){return[x*T,_*T,w*T]}t.setQuality=x=>{rn.mode=x,rn.scale=1,Kr=1,Ys=0,Gr(!0)},t.stats=rn;let Zr=0,Xa=!1,Th=0,Ah=0,Nd=()=>{if(t.cine&&t.cine.on)return!1;let x=t.layout;if(!x||!x.length)return!1;let _=scrollY,w=innerHeight;for(let T of x)if(_>=T.top&&_<T.top+T.h)return _>T.top+w*1.05&&_+w<T.top+T.h-w*.25;return!1};function Rh(x){if(Zr=requestAnimationFrame(Rh),Ah=performance.now(),document.hidden||t.paused)return;let _=Nd();x-Th<(d===0?_?45:29:_?29:13)||(Th=x,t.reading=_,Xa=!0,Yr(x),Xa=!1)}function bl(){ml(),t.still()?(cancelAnimationFrame(Zr),Zr=0,Yr(performance.now())):Zr||(Zr=requestAnimationFrame(Rh))}addEventListener("scroll",()=>{t.still()&&requestAnimationFrame(()=>Yr(performance.now()))},{passive:!0}),addEventListener("resize",()=>{let x=Oa,_=Vr,w=pl;ml(),(x!==Oa||_!==Vr||w!==pl)&&Gr(!0),t.refresh()}),t.listeners.push(bl),t.dbgResetSky=()=>{zt.id=null},t.amen=()=>{On.uAmen.value=1},document.addEventListener("visibilitychange",()=>{document.hidden||bl()}),setInterval(()=>{!t.still()&&!t.paused&&!document.hidden&&performance.now()-Math.max(za,Ah)>1200&&Yr(performance.now())},300),e.addEventListener("webglcontextlost",x=>{x.preventDefault(),s()}),t.refresh(),Gr(!0);try{r.setRenderTarget(Ki),fe.updateMatrixWorld(),Ci.updateMatrixWorld(),r.compileAsync&&await Promise.race([Promise.all([r.compileAsync(lt,fe),r.compileAsync(ve,Ci)]),new Promise(w=>setTimeout(w,9e3))]);let x=new cn(8,8,{type:An,format:Je,samples:f.msaa,depthBuffer:!0}),_=[];lt.traverse(w=>{!w.visible&&(w.isMesh||w.isPoints)&&(_.push(w),w.visible=!0)}),r.setRenderTarget(x),r.clear(!0,!0,!1),r.render(lt,fe),_.forEach(w=>{w.visible=!1}),r.setRenderTarget(null),x.dispose()}catch{}t.refresh(),Gr(!0);try{Yr(performance.now());let x=r.getContext().getError()}catch(x){return console.error(x),s()}{let x=window.requestIdleCallback||(T=>setTimeout(T,120)),_=hn.slice(),w=()=>{let T=_.shift();if(T){try{let P=Xn[hn.indexOf(T)],I=T+"|"+fe.aspect.toFixed(2);t.cliffLines&&t.cliffLines[T]&&!qr.has(I)&&!(T==="top"&&fe.aspect<1.2)&&qr.set(I,Mh(P));let D=t.skyLines&&t.skyLines(T);D&&D.forEach(Z=>{Fr.has(Z)||ba(Z)}),zt.id&&zt.lines&&ba(zt.lines[zt.i%zt.lines.length])}catch{}x(w)}};setTimeout(()=>x(w),2500)}Wr=performance.now(),e.classList.add("on"),t.worldReady&&t.worldReady(!0),bl()})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

