
(function(){
"use strict";
document.documentElement.lang="ar";document.documentElement.dir="rtl";
const $=s=>document.querySelector(s);
const AR="٠١٢٣٤٥٦٧٨٩";
const ar=v=>String(v).replace(/\d/g,d=>AR[d]);
const ar2=v=>ar(String(v).padStart(2,"0"));
const GM=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
const HM=["محرم","صفر","ربيع الأول","ربيع الآخر","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"];
const WD=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
const CAT={school:"الدراسة",rel:"دينية",nat:"وطنية",pay:"رواتب ودعم",astro:"فلكية",season:"المواسم",fast:"صيام"};
const DAY=864e5;
const D=(y,m,d)=>new Date(Date.UTC(y,m-1,d,12));
const iso=s=>{const p=s.split("-").map(Number);return D(p[0],p[1],p[2])};
const isoOf=d=>d.toISOString().slice(0,10);
const diff=(a,b)=>Math.round((a-b)/DAY);
const addDays=(d,n)=>new Date(d.getTime()+n*DAY);
const reduce=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches);
const store={get(k){try{const v=localStorage.getItem(k);return v&&v.length>2e5?null:v}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* ---------- Umm al-Qura via Intl ---------- */
const HF=new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn",{day:"numeric",month:"numeric",year:"numeric",timeZone:"UTC"});
const hc=new Map();
function H(d){const k=d.getTime();let r=hc.get(k);if(r)return r;const p=HF.formatToParts(d);const g=t=>{const x=p.find(q=>q.type===t);return x?x.value:""};r={y:parseInt(g("year"),10),m:parseInt(g("month"),10),d:parseInt(g("day"),10)};hc.set(k,r);return r}
const EPOCH=D(622,7,19).getTime();
function H2G(y,m,d){const n=Math.round((y-1)*354.36667+(m-1)*29.5306+(d-1));for(let o=-9;o<=9;o++){const t=new Date(EPOCH+(n+o)*DAY);const h=H(t);if(h.y===y&&h.m===m&&h.d===d)return t}return null}
function hMonthLen(y,m){const a=H2G(y,m,1),b=m===12?H2G(y+1,1,1):H2G(y,m+1,1);return a&&b?diff(b,a):30}

const fG=d=>`${ar(d.getUTCDate())} ${GM[d.getUTCMonth()]} ${ar(d.getUTCFullYear())}م`;
const fGs=d=>`${ar(d.getUTCDate())} ${GM[d.getUTCMonth()]}`;
const fH=d=>{const h=H(d);return `${ar(h.d)} ${HM[h.m-1]} ${ar(h.y)}هـ`};
const fHs=d=>{const h=H(d);return `${ar(h.d)} ${HM[h.m-1]}`};
const wd=d=>WD[d.getUTCDay()];
function dayWord(n){if(n===1)return "يوم واحد";if(n===2)return "يومان";const r=n%100;if(r>=3&&r<=10)return `${ar(n)} أيام`;if(r>=11)return `${ar(n)} يوماً`;return `${ar(n)} يوم`}
function unitWord(n,one,two,few,many){if(n===1)return one;if(n===2)return two;const r=n%100;if(r>=3&&r<=10)return `${ar(n)} ${few}`;return `${ar(n)} ${many}`}
const yearsW=n=>n===0?"":unitWord(n,"سنة واحدة","سنتان","سنوات","سنة");
const monthsW=n=>n===0?"":unitWord(n,"شهر واحد","شهران","أشهر","شهراً");
function afterWord(n){if(n===1)return "غداً";if(n===2)return "بعد يومين";return "بعد "+dayWord(n)}
function today(){const n=new Date(Date.now()+3*3600e3);return D(n.getUTCFullYear(),n.getUTCMonth()+1,n.getUTCDate())}
const startMs=d=>Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate())-3*3600e3;
const msToLocalDay=ms=>{const n=new Date(ms+3*3600e3);return D(n.getUTCFullYear(),n.getUTCMonth()+1,n.getUTCDate())};
function fClock(ms,sec){const n=new Date(ms+3*3600e3);let h=n.getUTCHours();const m=n.getUTCMinutes(),pm=h>=12;h=h%12||12;return `${ar(h)}:${ar2(m)}${sec?":"+ar2(n.getUTCSeconds()):""} ${pm?"م":"ص"}`}

/* ---------- astronomy ---------- */
const RAD=Math.PI/180,DEG=180/Math.PI;
const sn=x=>Math.sin(x*RAD),cs=x=>Math.cos(x*RAD),tn=x=>Math.tan(x*RAD);
const asn=x=>DEG*Math.asin(x),acs=x=>DEG*Math.acos(x),at2=(y,x)=>DEG*Math.atan2(y,x),acot=x=>DEG*Math.atan(1/x);
const fixA=a=>a-360*Math.floor(a/360),fixH=h=>h-24*Math.floor(h/24);
function jdOf(y,m,d){if(m<=2){y-=1;m+=12}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5}
function sunPos(jd){const n=jd-2451545,g=fixA(357.529+0.98560028*n),q=fixA(280.459+0.98564736*n),L=fixA(q+1.915*sn(g)+0.020*sn(2*g)),e=23.439-0.00000036*n,RA=at2(cs(e)*sn(L),cs(L))/15;return{decl:asn(sn(e)*sn(L)),eqt:q/15-fixH(RA),ra:fixA(RA*15)}}
/* prayer times, Umm al-Qura method (Fajr 18.5°, Isha +90 min / +120 in Ramadan, Asr shadow factor 1) */
function prayerTimes(date,lat,lng){
  const jDate=jdOf(date.getUTCFullYear(),date.getUTCMonth()+1,date.getUTCDate())-lng/(15*24);
  const midDay=t=>fixH(12-sunPos(jDate+t).eqt);
  const angleTime=(a,t,ccw)=>{const dc=sunPos(jDate+t).decl,noon=midDay(t);const T=acs((-sn(a)-sn(dc)*sn(lat))/(cs(dc)*cs(lat)))/15;return noon+(ccw?-T:T)};
  const asrT=t=>{const dc=sunPos(jDate+t).decl;return angleTime(-acot(1+tn(Math.abs(lat-dc))),t)};
  let fajr=angleTime(18.5,5/24,true),sunrise=angleTime(0.833,6/24,true),dhuhr=midDay(12/24),asr=asrT(13/24),maghrib=angleTime(0.833,18/24);
  const adj=3-lng/15;
  fajr+=adj;sunrise+=adj;dhuhr+=adj;asr+=adj;maghrib+=adj;
  const ram=H(date).m===9;
  const isha=maghrib+(ram?2:1.5);
  return{fajr,sunrise,dhuhr,asr,maghrib,isha,ram};
}
const roundMin=h=>Math.round(h*60);
function fHour(h){let m=roundMin(h);m=((m%1440)+1440)%1440;let hh=Math.floor(m/60);const mm=m%60,pm=hh>=12;hh=hh%12||12;return `${ar(hh)}:${ar2(mm)} ${pm?"م":"ص"}`}
const hourMs=(date,h)=>startMs(date)+roundMin(h)*6e4;
/* equatorial -> horizontal for the live sky */
function horizon(raDeg,decDeg,ms,lat,lng){const jd=ms/DAY+2440587.5;const gmst=fixA(280.46061837+360.98564736629*(jd-2451545));const Hh=fixA(gmst+lng-raDeg);const alt=asn(sn(lat)*sn(decDeg)+cs(lat)*cs(decDeg)*cs(Hh));const az=fixA(at2(sn(Hh),cs(Hh)*sn(lat)-tn(decDeg)*cs(lat))+180);return{alt,az}}
function moonRaDec(ms){const jd=ms/DAY+2440587.5,T=(jd-2451545)/36525;
  const lam=218.32+481267.881*T+6.29*sn(135+477198.87*T)-1.27*sn(259.3-413335.36*T)+0.66*sn(235.7+890534.22*T)+0.21*sn(269.9+954397.74*T)-0.19*sn(357.5+35999.05*T)-0.11*sn(186.5+966404.03*T);
  const bet=5.13*sn(93.3+483202.02*T)+0.28*sn(228.2+960400.89*T)-0.28*sn(318.3+6003.15*T)-0.17*sn(217.6-407332.21*T);
  const e=23.439;return{ra:fixA(at2(sn(lam)*cs(e)-tn(bet)*sn(e),cs(lam))),dec:asn(sn(bet)*cs(e)+cs(bet)*sn(e)*sn(lam))}}
function skyNow(ms,lat,lng){lat=lat||24.7136;lng=lng||46.6753;const jd=ms/DAY+2440587.5;const s=sunPos(jd);const sun=horizon(s.ra,s.decl,ms,lat,lng);const m=moonRaDec(ms);const moon=horizon(m.ra,m.dec,ms,lat,lng);const il=moonIllum(ms);return{sun,moon,k:il.k,waxing:il.waxing}}
function sunAlt(ms,lat,lng){return skyNow(ms,lat,lng).sun}
const KAABA=[21.4225,39.8262];
function qibla(lat,lng){const p1=lat*RAD,p2=KAABA[0]*RAD,dl=(KAABA[1]-lng)*RAD;return fixA(DEG*Math.atan2(Math.sin(dl),Math.cos(p1)*Math.tan(p2)-Math.sin(p1)*Math.cos(dl)))}
function distKm(lat,lng){const p1=lat*RAD,p2=KAABA[0]*RAD,dp=p2-p1,dl=(KAABA[1]-lng)*RAD;const a=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2;return 6371*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}
/* moon phases (Meeus, ch. 49) */
function phaseJDE(k){
  const T=k/1236.85,T2=T*T,T3=T2*T,T4=T3*T;
  let J=2451550.09766+29.530588861*k+0.00015437*T2-0.00000015*T3+0.00000000073*T4;
  const E=1-0.002516*T-0.0000074*T2;
  const M=fixA(2.5534+29.1053567*k-0.0000014*T2-0.00000011*T3);
  const Mp=fixA(201.5643+385.81693528*k+0.0107582*T2+0.00001238*T3-0.000000058*T4);
  const F=fixA(160.7108+390.67050284*k-0.0016118*T2-0.00000227*T3+0.000000011*T4);
  const Om=fixA(124.7746-1.56375588*k+0.0020672*T2+0.00000215*T3);
  const ph=Math.round((k-Math.floor(k))*4);
  let c;
  if(ph===0||ph===2){const n=ph===0;
    c=(n?-0.4072:-0.40614)*sn(Mp)+(n?0.17241:0.17302)*E*sn(M)+(n?0.01608:0.01614)*sn(2*Mp)+(n?0.01039:0.01043)*sn(2*F)+(n?0.00739:0.00734)*E*sn(Mp-M)+(n?-0.00514:-0.00515)*E*sn(Mp+M)+(n?0.00208:0.00209)*E*E*sn(2*M)-0.00111*sn(Mp-2*F)-0.00057*sn(Mp+2*F)+0.00056*E*sn(2*Mp+M)-0.00042*sn(3*Mp)+0.00042*E*sn(M+2*F)+0.00038*E*sn(M-2*F)-0.00024*E*sn(2*Mp-M)-0.00017*sn(Om)-0.00007*sn(Mp+2*M)+0.00004*sn(2*Mp-2*F)+0.00004*sn(3*M)+0.00003*sn(Mp+M-2*F)+0.00003*sn(2*Mp+2*F)-0.00003*sn(Mp+M+2*F)+0.00003*sn(Mp-M+2*F)-0.00002*sn(Mp-M-2*F)-0.00002*sn(3*Mp+M)+0.00002*sn(4*Mp);
  }else{
    c=-0.62801*sn(Mp)+0.17172*E*sn(M)-0.01183*E*sn(Mp+M)+0.00862*sn(2*Mp)+0.00804*sn(2*F)+0.00454*E*sn(Mp-M)+0.00204*E*E*sn(2*M)-0.0018*sn(Mp-2*F)-0.0007*sn(Mp+2*F)-0.0004*sn(3*Mp)-0.00034*E*sn(2*Mp-M)+0.00032*E*sn(M+2*F)+0.00032*E*sn(M-2*F)-0.00028*E*E*sn(Mp+2*M)+0.00027*E*sn(2*Mp+M)-0.00017*sn(Om)-0.00005*sn(Mp-M-2*F)+0.00004*sn(2*Mp+2*F)-0.00004*sn(Mp+M+2*F)+0.00004*sn(Mp-2*M)+0.00003*sn(Mp+M-2*F)+0.00003*sn(3*M)+0.00002*sn(2*Mp-2*F)+0.00002*sn(Mp-M+2*F)-0.00002*sn(3*Mp+M);
    const W=0.00306-0.00038*E*cs(M)+0.00026*cs(Mp)-0.00002*cs(Mp-M)+0.00002*cs(Mp+M)+0.00002*cs(2*F);
    c+=ph===1?W:-W;
  }
  const A=[299.77+0.107408*k-0.009173*T2,251.88+0.016321*k,251.83+26.651886*k,349.42+36.412478*k,84.66+18.206239*k,141.74+53.303771*k,207.14+2.453732*k,154.84+7.30686*k,34.52+27.261239*k,207.19+0.121824*k,291.34+1.844379*k,161.72+24.198154*k,239.56+25.513099*k,331.55+3.592518*k];
  const AC=[0.000325,0.000165,0.000164,0.000126,0.00011,0.000062,0.00006,0.000056,0.000047,0.000042,0.00004,0.000037,0.000035,0.000023];
  for(let i=0;i<14;i++)c+=AC[i]*sn(A[i]);
  return J+c;
}
const DELTA_T=69.5;
const jdeToMs=j=>(j-DELTA_T/86400-2440587.5)*DAY;
const PHASES=[];
for(let k=325;k<=352;k++)for(let q=0;q<4;q++){PHASES.push({type:q,ms:jdeToMs(phaseJDE(k+q/4))})}
PHASES.sort((a,b)=>a.ms-b.ms);
const PH_NAME=["المحاق","التربيع الأول","البدر","التربيع الثاني"];
function moonIllum(ms){
  const jd=ms/DAY+2440587.5,T=(jd-2451545)/36525;
  const Dm=fixA(297.8501921+445267.1114034*T-0.0018819*T*T+T*T*T/545868);
  const M=fixA(357.5291092+35999.0502909*T-0.0001536*T*T);
  const Mp=fixA(134.9633964+477198.8675055*T+0.0087414*T*T+T*T*T/69699);
  const i=fixA(180-Dm-6.289*sn(Mp)+2.1*sn(M)-1.274*sn(2*Dm-Mp)-0.658*sn(2*Dm)-0.214*sn(2*Mp)-0.11*sn(Dm));
  return{k:(1+cs(i))/2,waxing:fixA(Dm)<180};
}
function moonInfo(ms){
  const il=moonIllum(ms);
  let prev=null;
  for(const p of PHASES){if(p.ms<=ms)prev=p;else break}
  const day=msToLocalDay(ms);
  let name;
  const evToday=PHASES.find(p=>msToLocalDay(p.ms).getTime()===day.getTime());
  if(evToday)name=PH_NAME[evToday.type];
  else if(prev){name=["هلال متزايد","أحدب متزايد","أحدب متناقص","هلال متناقص"][prev.type]}
  let lastNew=null;for(const p of PHASES){if(p.type===0&&p.ms<=ms)lastNew=p}
  const age=lastNew?(ms-lastNew.ms)/DAY:0;
  const nextFull=PHASES.find(p=>p.type===2&&p.ms>ms);
  return{k:il.k,waxing:il.waxing,name,age,nextFull};
}
function moonSvg(k,wax,size){
  const r=size*.42,x=size/2,y=size/2,s=wax?1:-1,rx=r*Math.abs(1-2*k),term=k<.5?s:-s;
  const lit=k<0.015?"":`<path d="M${x} ${y-r}A${r} ${r} 0 0 ${s>0?1:0} ${x} ${y+r}A${rx.toFixed(2)} ${r} 0 0 ${term>0?0:1} ${x} ${y-r}Z" fill="#efe3c2"/>`;
  return `<svg class="mn" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${x}" cy="${y}" r="${r}" fill="rgba(239,227,194,.13)"/>${k>0.985?`<circle cx="${x}" cy="${y}" r="${r}" fill="#efe3c2"/>`:lit}</svg>`;
}
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

/* ---------- cities ---------- */
const CITIES=[
  ["riyadh","الرياض",24.7136,46.6753],["makkah","مكة المكرمة",21.4225,39.8262],["madinah","المدينة المنورة",24.4672,39.6111],["jeddah","جدة",21.4858,39.1925],
  ["dammam","الدمام",26.4207,50.0888],["ahsa","الأحساء",25.3833,49.5867],["taif","الطائف",21.2703,40.4158],["buraidah","بريدة",26.326,43.975],
  ["hail","حائل",27.5114,41.69],["tabuk","تبوك",28.3835,36.5662],["abha","أبها",18.2164,42.5053],["jazan","جازان",16.8892,42.5511],
  ["najran","نجران",17.5656,44.2289],["baha","الباحة",20.0129,41.4677],["sakaka","سكاكا",29.9697,40.2064],["arar","عرعر",30.9753,41.0381]
];
let city=CITIES.find(c=>c[0]===store.get("tw-city"))||CITIES[0];

/* ---------- data ---------- */
const EV=[];
function add(cat,date,title,x){x=x||{};const e=Object.assign({cat:cat,title:title},x);e.date=typeof date==="string"?iso(date):date;if(x.end)e.endD=typeof x.end==="string"?iso(x.end):x.end;if(x.back)e.backD=iso(x.back);EV.push(e);return e}

const SCHOOL=[
  ["2026-08-11","عودة الهيئة الإدارية والمشرفين التربويين",{staff:1}],
  ["2026-08-16","عودة المعلمين",{staff:1}],
  ["2026-08-23","بداية العام الدراسي ١٤٤٨هـ",{key:"sy"}],
  ["2026-09-23","إجازة اليوم الوطني",{end:"2026-09-26",back:"2026-09-27",hol:1}],
  ["2026-11-20","إجازة الخريف",{end:"2026-11-28",back:"2026-11-29",hol:1}],
  ["2027-01-07","نهاية الفصل الدراسي الأول",{note:"آخر يوم دراسي في الفصل الأول"}],
  ["2027-01-08","إجازة منتصف العام الدراسي",{end:"2027-01-16",back:"2027-01-17",hol:1}],
  ["2027-01-17","بداية الفصل الدراسي الثاني",{}],
  ["2027-02-19","إجازة يوم التأسيس",{end:"2027-02-22",back:"2027-02-23",hol:1}],
  ["2027-02-26","إجازة عيد الفطر للمدارس",{end:"2027-03-13",back:"2027-03-14",hol:1,key:"fitrhol"}],
  ["2027-05-07","إجازة عيد الأضحى للمدارس",{end:"2027-05-22",back:"2027-05-23",hol:1}],
  ["2027-06-24","بداية إجازة نهاية العام الدراسي",{end:"2027-08-21",back:"2027-08-22",hol:1,note:"تبدأ بنهاية دوام يوم الخميس",key:"ey"}],
  ["2027-08-10","عودة الهيئة الإدارية لعام ١٤٤٩هـ",{staff:1}],
  ["2027-08-15","عودة المعلمين لعام ١٤٤٩هـ",{staff:1}],
  ["2027-08-22","بداية العام الدراسي ١٤٤٩هـ",{}]
];
SCHOOL.forEach(r=>add("school",r[0],r[1],r[2]));

function R(y,m,d,title,x){return add("rel",H2G(y,m,d),title,Object.assign({expected:true},x||{}))}
R(1448,9,1,"أول أيام شهر رمضان",{key:"ram1",note:"يبدأ الصيام بعد ثبوت رؤية الهلال مساء ٢٩ شعبان."});
R(1448,9,21,"بداية العشر الأواخر",{key:"l10",note:"تبدأ ليالي العشر الأواخر من مساء اليوم السابق."});
R(1448,10,1,"عيد الفطر المبارك",{key:"fitr"});
R(1448,12,1,"بداية عشر ذي الحجة",{note:"أول أيام شهر ذي الحجة، وأفضل أيام السنة للعمل الصالح."});
R(1448,12,8,"يوم التروية",{note:"أول أيام مناسك الحج."});
R(1448,12,9,"يوم عرفة",{key:"arafah",note:"الركن الأعظم في الحج، ويُستحب صيامه لغير الحاج."});
R(1448,12,10,"عيد الأضحى المبارك",{key:"adha"});
R(1448,12,11,"أيام التشريق",{end:H2G(1448,12,13),note:"من ١١ إلى ١٣ ذي الحجة، ولا يُصام فيها."});
R(1449,1,1,"رأس السنة الهجرية ١٤٤٩هـ",{key:"ny"});
R(1449,1,9,"يوم تاسوعاء",{key:"tasua",note:"التاسع من محرم، ويُستحب صيامه مع عاشوراء."});
R(1449,1,10,"يوم عاشوراء",{key:"ashura",note:"العاشر من محرم، ويُستحب صيامه مع يوم قبله أو بعده."});

add("nat","2027-01-07","انطلاق كأس آسيا ٢٠٢٧ في السعودية",{key:"afc",end:"2027-02-05",note:"تستضيفها الرياض وجدة والخبر، والمباراة الافتتاحية بين السعودية وفلسطين."});
add("nat","2026-09-23","اليوم الوطني ٩٦",{key:"nd96",note:"ذكرى توحيد المملكة على يد الملك عبدالعزيز عام ١٩٣٢م."});
add("nat","2027-02-22","يوم التأسيس",{key:"fd",note:"ذكرى مرور ٣٠٠ عام على تأسيس الدولة السعودية الأولى عام ١٧٢٧م."});
add("nat","2027-03-11","يوم العلم",{key:"flag",note:"ذكرى إقرار الملك عبدالعزيز للعلم السعودي عام ١٩٣٧م."});
add("nat","2027-09-23","اليوم الوطني ٩٧",{key:"nd97",note:"ذكرى توحيد المملكة العربية السعودية."});

add("astro","2026-12-13","ذروة شهب التوأميات",{key:"gem",shower:1,note:"أغزر زخات الشهب في السنة، وأفضل رصدها بعد منتصف ليل ١٣–١٤ ديسمبر بعيداً عن أضواء المدن."});
add("astro","2026-12-21","بداية فصل الشتاء فلكياً",{note:"الانقلاب الشتوي، وفيه أقصر نهار في السنة."});
add("astro","2027-01-03","ذروة شهب الرباعيات",{key:"qua",shower:1,note:"ذروة قصيرة لا تتجاوز ساعات قليلة في ليلة ٣–٤ يناير، وتُرصد قبيل الفجر."});
add("astro","2027-02-21","خسوف شبه ظلي للقمر",{key:"lun",note:"من ١٢:١٢ إلى ٤:١٣ بعد منتصف الليل، والذروة ٢:١٢ صباحاً. يخفت ضوء القمر خفوتاً طفيفاً يصعب ملاحظته."});
add("astro","2027-03-20","بداية فصل الربيع فلكياً",{note:"الاعتدال الربيعي، يتساوى فيه الليل والنهار تقريباً."});
add("astro","2027-06-21","بداية فصل الصيف فلكياً",{note:"الانقلاب الصيفي، وفيه أطول نهار في السنة."});
add("astro","2027-08-02","كسوف الشمس الكلي",{key:"ecl",note:"كلي في مكة المكرمة وجدة والطائف وجنوب غرب المملكة، وجزئي في الرياض وبقية المناطق."});
add("astro","2027-08-12","ذروة شهب البرشاويات",{key:"per",shower:1,note:"زخة صيفية غزيرة، وأفضل رصدها بعد منتصف ليل ١٢–١٣ أغسطس."});
add("astro","2027-09-23","بداية فصل الخريف فلكياً",{note:"الاعتدال الخريفي."});

/* folk seasons (Suhail year) */
const SEASONS=[
  ["سهيل","08-24","طلوع نجم سهيل وبداية انكسار حر الصيف، وتبرد آخر الليل."],
  ["الوسم","10-16","أول أمطار الخريف «الوسمي» واعتدال الأجواء، وتنبت بعده الكمأة."],
  ["المربعانية","12-07","قلب الشتاء، تطول فيه الليالي ويشتد البرد."],
  ["الشبط","01-15","أشد أيام البرد، ويكثر فيه الصقيع في الشمال والوسط."],
  ["العقارب","02-10","يبدأ انكسار البرد مع تقلّب الأجواء والرياح."],
  ["الحميمين","03-21","اعتدال الربيع، دفء في النهار وبرودة في الليل."],
  ["الذراعين","04-16","ارتفاع تدريجي في الحرارة ونشاط الرياح."],
  ["الثريا","05-12","بداية حر الصيف وطول النهار."],
  ["التويبع","06-20","اشتداد الحر، ويُسمى الدبران."],
  ["الجوزاء","07-03","ذروة القيظ ورياح السموم الحارة."],
  ["المرزم","07-29","استمرار شدة الحر، وتزداد الرطوبة على السواحل."],
  ["الكليبين","08-11","آخر القيظ وأشده رطوبة، ويسبق طلوع سهيل."]
];
const S_TEMP=[.72,.42,.08,0,.22,.45,.62,.78,.88,1,.97,.9];
function seasonCycle(y0){return SEASONS.map((s,i)=>{const[mm,dd]=s[1].split("-").map(Number);const y=mm>=8&&!(mm===8&&dd<24)?y0:y0+1;return{name:s[0],start:D(y,mm,dd),desc:s[2],temp:S_TEMP[i],i:i}}).map((s,i,a)=>{const nx=i<a.length-1?a[i+1].start:D(y0+1,8,24);s.end=addDays(nx,-1);s.len=diff(nx,s.start);return s})}
const CYCLES=[seasonCycle(2025),seasonCycle(2026),seasonCycle(2027)];
CYCLES.flat().forEach(s=>{if(s.start>=iso("2026-10-01")&&s.start<=iso("2027-12-31"))add("season",s.start,`بداية موسم ${s.name}`,{end:s.end,note:s.desc})});
function seasonOn(d){for(const c of CYCLES)for(const s of c)if(d>=s.start&&d<=s.end)return s;return null}

/* white days */
const WHITE=[];
for(let y=1448,m=5;y*12+m<=1449*12+3;m++){if(m>12){m=1;y++}
  const days=[13,14,15].map(d=>H2G(y,m,d));
  const row={y:y,m:m,days:days,note:""};
  if(m===9)row.note="ضمن صيام شهر رمضان";
  else if(m===12)row.note="١٣ ذي الحجة من أيام التشريق التي لا يُصام فيها";
  WHITE.push(row);
  if(m!==9){const first=m===12?days[1]:days[0];add("fast",first,`الأيام البيض (${HM[m-1]})`,{end:days[2],key:"white",note:row.note||"صيام ١٣ و١٤ و١٥ من الشهر الهجري."})}
}
add("fast",H2G(1448,10,2),"ست من شوال",{end:H2G(1448,10,hMonthLen(1448,10)),key:"shawwal",expected:true,note:"تُصام بعد يوم العيد في أي أيام من شوال، متتابعة أو متفرقة."});

/* payments */
const SAL_OVERRIDE={"2026-5":24};
function salary(y,m){const o=SAL_OVERRIDE[y+"-"+m];if(o)return D(y,m,o);const d=D(y,m,27),w=d.getUTCDay();if(w===5)return D(y,m,26);if(w===6)return D(y,m,28);return d}
/* Citizen Account: the 10th; a Friday moves to Thursday, a Saturday to Sunday */
function caDate(y,m){const d=D(y,m,10),w=d.getUTCDay();return w===5?D(y,m,9):w===6?D(y,m,11):d}
const PAY=[];
for(let k=10;k<=24;k++){const y=2026+Math.floor((k-1)/12),m=(k-1)%12+1;const row={y:y,m:m,gov:salary(y,m),ca:caDate(y,m),ss:D(y,m,1),official:y===2026};PAY.push(row);
  add("pay",row.gov,`الراتب الحكومي لشهر ${GM[m-1]}`,{key:"gov",tag:row.official?"":"حسب القاعدة"});
  add("pay",row.ca,`إيداع حساب المواطن (${GM[m-1]})`,{key:"ca"});
  add("pay",row.ss,`صرف الضمان الاجتماعي المطوّر (${GM[m-1]})`,{key:"ss"});
}
EV.sort((a,b)=>a.date-b.date);

const dayMap=new Map();
EV.forEach(e=>{if(e.staff)return;const k=isoOf(e.date);if(!dayMap.has(k))dayMap.set(k,[]);dayMap.get(k).push(e)});
const offDays=new Set();
EV.forEach(e=>{if(e.hol&&e.endD){for(let d=e.date;d<=e.endD;d=addDays(d,1))offDays.add(isoOf(d))}});

let T=today();
const upcoming=pred=>EV.filter(e=>pred(e)&&e.date>=T);
const byKey=k=>EV.find(e=>e.key===k);

/* ---------- shared bits ---------- */
function countHTML(ms,id){return `<div class="count"${id?` id="${id}"`:""} data-target="${ms}"><div><b data-u="d">٠</b><span>يوم</span></div><div><b data-u="h">٠٠</b><span>ساعة</span></div><div><b data-u="m">٠٠</b><span>دقيقة</span></div><div><b data-u="s">٠٠</b><span>ثانية</span></div></div>`}
function status(e){const dd=diff(e.date,T);const on=e.endD&&dd<0&&e.endD>=T;if(dd===0)return {c:"st-now",t:"اليوم",past:false};if(on)return {c:"st-now",t:"جارية الآن",past:false};if(dd<0)return {c:"st-past",t:"انتهى",past:true};return {c:"st-soon",t:afterWord(dd),past:false}}
const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const evText=e=>`${e.title} — ${wd(e.date)} ${fG(e.date)} (${fH(e.date)})${e.endD?" حتى "+fG(e.endD):""}`;
const copyBtn=e=>`<button class="copy" type="button" data-copy="${esc(evText(e))}" aria-label="نسخ الموعد: ${esc(e.title)}"><svg aria-hidden="true"><use href="#i-copy"/></svg></button>`;
const dur=h=>{const m=Math.round(h*60);return `${ar(Math.floor(m/60))} س و${ar(m%60)} د`};
function card(e,opts){opts=opts||{};const s=status(e);const range=e.endD?` حتى ${wd(e.endD)} ${fGs(e.endD)}`:"";
  return `<article class="ec glow${s.past?" past":""}" style="--cat:var(--c-${e.cat})">${copyBtn(e)}<p class="k">${opts.kicker||CAT[e.cat]}${e.expected?" · متوقع":""}</p><h3>${e.title}</h3><p class="h">${fH(e.date)}</p><p class="g">${wd(e.date)} ${fG(e.date)}${range}</p>${e.note?`<p class="nt">${e.note}</p>`:""}${opts.extra||""}<div class="ft"><span class="pill ${s.c}">${s.t}</span></div></article>`}
function feature(el,e,kicker,ms,extra){if(!e){el.hidden=true;return}el.hidden=false;
  el.innerHTML=`<div><p class="k">${kicker}${e.expected?" · متوقع حسب أم القرى":""}</p><h3>${e.title}</h3><p class="h">${fH(e.date)}</p><p class="g">${wd(e.date)} ${fG(e.date)}</p>${extra||""}</div>${countHTML(ms||startMs(e.date))}`}

/* ---------- prayer state ---------- */
function prayersFor(d){const p=prayerTimes(d,city[2],city[3]);return[["الفجر",p.fajr],["الشروق",p.sunrise],["الظهر",p.dhuhr],["العصر",p.asr],["المغرب",p.maghrib],["العشاء",p.isha]].map(x=>({n:x[0],h:x[1],ms:hourMs(d,x[1]),sun:x[0]==="الشروق"}))}
function nextPrayer(){const now=Date.now();const list=prayersFor(T).concat(prayersFor(addDays(T,1))).filter(p=>!p.sun);return list.find(p=>p.ms>now)}

/* ---------- hero ---------- */
let leafOff=0;
function renderHero(){
  const lf=addDays(T,leafOff);$("#t-big").textContent=ar(H(lf).d);$("#t-wd").textContent=wd(lf);$("#t-tag").textContent=leafOff===0?"اليوم":leafOff===1?"غداً":afterWord(leafOff);$("#t-h").textContent=fH(lf).replace(/^[^ ]+ /,"");$("#t-g").textContent=fG(lf);
  const sy=byKey("sy").date,ey=byKey("ey").date;
  let note;if(T<sy)note=`يبدأ العام الدراسي ${afterWord(diff(sy,T))}`;else if(T<ey)note=`يبقى ${dayWord(diff(ey,T))} على إجازة نهاية العام الدراسي`;else note="إجازة نهاية العام الدراسي";
  const se=seasonOn(T);
  $("#t-note").innerHTML=`<span>${note}</span>${se?`<span>موسم ${se.name} · اليوم ${ar(diff(T,se.start)+1)} من ${ar(se.len)}</span>`:""}`;
  if(leafOff)$("#t-note").innerHTML=`<span>${(dayMap.get(isoOf(lf))||[]).map(e=>e.title).join("، ")||"لا مناسبة مسجلة في هذا اليوم"}</span>`;
  renderSkyCap();
  const nx=upcoming(e=>e.cat!=="pay"&&e.cat!=="fast")[0];
  if(nx){$("#n-title").textContent=nx.title+(nx.expected?" (متوقع)":"");$("#n-date").textContent=`${wd(nx.date)} ${fG(nx.date)} · ${fH(nx.date)}`;$("#n-count").outerHTML=countHTML(startMs(nx.date),"n-count")}
  renderQuick();
}
function renderSkyCap(){
  const sk=skyNow(Date.now());const mi=moonInfo(Date.now());
  const sunTxt=sk.sun.alt>0?`الشمس ${ar(Math.round(sk.sun.alt))}° فوق الأفق`:`الشمس تحت الأفق بـ${ar(Math.round(-sk.sun.alt))}°`;
  const moonTxt=`القمر ${mi.name} ${ar(Math.round(mi.k*100))}٪${sk.moon.alt>0?` على ارتفاع ${ar(Math.round(sk.moon.alt))}°`:" تحت الأفق"}`;
  $("#sky-cap").innerHTML=`<i class="live-dot" aria-hidden="true"></i><span>سماء الرياض الآن</span><span>·</span><span>${sunTxt}</span><span>·</span><span>${moonTxt}</span>`;
}
function renderQuick(){
  const np=nextPrayer();
  const q=[["الراتب القادم",upcoming(e=>e.key==="gov")[0],"#salary"],["الإجازة الدراسية القادمة",upcoming(e=>e.hol)[0],"#school"],["رمضان ١٤٤٨هـ",byKey("ram1"),"#ramadan"]];
  let html=np?`<a class="qc glow" href="#prayer" style="--cat:var(--gold)"><p class="k"><i></i>الصلاة القادمة · ${city[1]}</p><p class="v">${np.n}</p><p class="d">${fClock(np.ms)}</p></a>`:"";
  html+=q.filter(x=>x[1]).map(([k,e,h])=>{const dd=diff(e.date,T);const v=dd>0?dayWord(dd):dd===0?"اليوم":"جارٍ";return `<a class="qc glow" href="${h}" style="--cat:var(--c-${e.cat})"><p class="k"><i></i>${k}</p><p class="v">${v}</p><p class="d">${e.cat==="pay"?"":e.title.replace("بداية ","")+" · "}${wd(e.date)} ${fGs(e.date)}</p></a>`}).join("");
  $("#quick").innerHTML=html;
}

/* ---------- film strip + timeline ---------- */
function renderStrip(){
  const list=EV.filter(e=>!e.staff&&(e.cat!=="pay"||e.key==="gov")&&(e.endD||e.date)>=T).slice(0,12);
  $("#strip").innerHTML=list.map(e=>{const s=status(e);return `<article class="sc glow" style="--cat:var(--c-${e.cat})">${copyBtn(e)}<span class="ic"><svg aria-hidden="true"><use href="#ic-${e.cat}"/></svg></span><p class="big">${ar(e.date.getUTCDate())}</p><p class="mo">${GM[e.date.getUTCMonth()]} ${ar(e.date.getUTCFullYear())} · ${wd(e.date)}</p><h4>${e.title}</h4><p class="h">${fH(e.date)}${e.expected?" · متوقع":""}</p><div class="ft"><span class="pill ${s.c}">${s.t}</span></div></article>`}).join("");
}
let filter="all",showPast=false,expanded=false;
const FILTERS=[["all","الكل"],["school","الدراسة"],["rel","دينية"],["nat","وطنية"],["pay","رواتب ودعم"],["fast","صيام"],["season","المواسم"],["astro","فلكية"]];
$("#filters").innerHTML=FILTERS.map(([k,l])=>`<button class="chip" type="button" data-f="${k}" aria-pressed="${k==="all"}">${l}</button>`).join("");
$("#filters").addEventListener("click",ev=>{const b=ev.target.closest(".chip");if(!b)return;filter=b.dataset.f;expanded=false;document.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b));renderTimeline();refreshLayout()});
$("#show-past").addEventListener("change",ev=>{showPast=ev.target.checked;renderTimeline();refreshLayout()});
$("#tl-more").addEventListener("click",()=>{expanded=!expanded;renderTimeline();refreshLayout()});
function renderTimeline(){
  const list=EV.filter(e=>filter==="all"||e.cat===filter).filter(e=>!e.staff).filter(e=>showPast||(e.endD||e.date)>=T);
  const LIM=16;const shown=expanded?list:list.slice(0,LIM);
  let html="",lastM="";
  shown.forEach(e=>{const mk=e.date.getUTCFullYear()+"-"+e.date.getUTCMonth();if(mk!==lastM){lastM=mk;const a=D(e.date.getUTCFullYear(),e.date.getUTCMonth()+1,1),b=D(e.date.getUTCFullYear(),e.date.getUTCMonth()+2,0);const ha=H(a),hb=H(b);html+=`<li class="tl-m" aria-hidden="true">${GM[e.date.getUTCMonth()]} ${ar(e.date.getUTCFullYear())}م<small>${HM[ha.m-1]}${ha.m!==hb.m?" – "+HM[hb.m-1]:""} ${ar(hb.y)}هـ</small></li>`}
    const s=status(e);const range=e.endD?` · حتى ${wd(e.endD)} ${fGs(e.endD)}`:"";
    html+=`<li class="ev glow${s.past?" past":""}" data-ev="${EV.indexOf(e)}" style="--cat:var(--c-${e.cat})"><div class="dt"><b>${ar(e.date.getUTCDate())}</b><span>${GM[e.date.getUTCMonth()]}</span></div><div><h4>${e.title}<span class="cat">${CAT[e.cat]}</span>${e.expected?'<span class="exp">متوقع</span>':""}${e.tag?`<span class="exp">${e.tag}</span>`:""}</h4><p class="meta-l">${wd(e.date)} · ${fH(e.date)}${range}</p></div><div class="st"><span class="pill ${s.c}">${s.t}</span></div></li>`});
  if(!shown.length)html='<li class="note">لا توجد مواعيد في هذا التصنيف.</li>';
  $("#tl").innerHTML=html;
  const m=$("#tl-more");m.hidden=list.length<=LIM;m.textContent=expanded?"عرض أقل":`عرض كل المواعيد (${ar(list.length)})`;
}

/* ---------- school ---------- */
function renderSchool(){
  const sy=byKey("sy").date,ey=byKey("ey").date;const tot=diff(ey,sy);const done=Math.min(tot,Math.max(0,diff(T,sy)));const pct=done/tot*100;
  $("#sc-prog").style.width=pct.toFixed(1)+"%";$("#sc-pct").textContent=ar(Math.round(pct))+"٪";$("#sc-pct").dataset.countup=Math.round(pct);$("#sc-pct").dataset.suffix="٪";
  $("#sc-bar").setAttribute("aria-valuenow",Math.round(pct));$("#sc-bar").setAttribute("aria-valuemin","0");$("#sc-bar").setAttribute("aria-valuemax","100");
  $("#sc-left").textContent=T<ey?`مضى ${dayWord(done)} من العام، ويبقى ${dayWord(diff(ey,T))} على إجازة نهاية العام.`:"انتهى العام الدراسي ١٤٤٨هـ.";
  const terms=[["الفصل الدراسي الأول","2026-08-23","2027-01-07"],["الفصل الدراسي الثاني","2027-01-17","2027-06-24"]];
  $("#terms").innerHTML=terms.map(([n,a,b])=>{a=iso(a);b=iso(b);const t=diff(b,a),d=Math.min(t,Math.max(0,diff(T,a)));const st=T<a?`يبدأ ${afterWord(diff(a,T))}`:T<=b?`جارٍ الآن · يبقى ${dayWord(diff(b,T))}`:"انتهى";
    return `<div class="panel term glow"><h3>${n}</h3><div class="row"><span>البداية</span><b>${wd(a)} ${fG(a)}<br><small>${fH(a)}</small></b></div><div class="row"><span>النهاية</span><b>${wd(b)} ${fG(b)}<br><small>${fH(b)}</small></b></div><div class="row"><span>الحالة</span><b>${st}</b></div><div class="prog"><i style="width:${(d/t*100).toFixed(1)}%"></i></div></div>`}).join("");
  let nextMarked=false;
  $("#sc-rows").innerHTML=EV.filter(e=>e.cat==="school").map(e=>{const s=status(e);let cls=s.past?"past":"";if(!s.past&&!nextMarked){cls="next";nextMarked=true}
    const len=e.endD?dayWord(diff(e.endD,e.date)+1):"—";const back=e.backD?`${wd(e.backD)} ${fG(e.backD)}<span class="s">${fH(e.backD)}</span>`:"—";
    return `<tr class="${cls}"><td class="t">${e.title}${e.note?`<span class="s">${e.note}</span>`:""}</td><td>${wd(e.date)} ${fG(e.date)}<span class="s">${fH(e.date)}</span></td><td>${back}</td><td>${len}</td><td><span class="pill ${s.c}">${s.t}</span></td></tr>`}).join("");
}

/* ---------- ramadan ---------- */
function renderRamadan(){
  const r1=byKey("ram1");const len=hMonthLen(1448,9);
  $("#ram-meta").innerHTML=`<span>١ رمضان · ${wd(r1.date)} ${fG(r1.date)}</span><span>متوقع حسب أم القرى</span>`;
  feature($("#ram-feature"),r1,"يبقى على رمضان");
  $("#ram-len").textContent=`شهر رمضان ${len===29?"تسعة وعشرون":"ثلاثون"} يوماً حسب تقويم أم القرى`;
  let h="";for(let i=1;i<=len;i++){const d=H2G(1448,9,i);const k=isoOf(d);let c="rd";if(i>=21)c+=" l10";if(i>=20&&i<=28&&(i+1)%2===1)c+=" odd";if(k>="2027-02-19"&&k<="2027-02-22")c+=" fd";if(k>="2027-02-26")c+=" sh";if(d.getTime()===T.getTime())c+=" now";
    h+=`<div class="${c}" title="${wd(d)} ${fG(d)}"><b>${ar(i)}</b><span>${wd(d)}</span><span>${fGs(d)}</span></div>`}
  $("#ram-grid").innerHTML=h;
  const last=H2G(1448,9,len);
  const rp=prayerTimes(r1.date,city[2],city[3]);
  const extra=`<p class="nt">في ${city[1]} أول يوم: الإمساك عند الفجر ${fHour(rp.fajr)}، والإفطار عند المغرب ${fHour(rp.maghrib)}، والعشاء ${fHour(rp.isha)}.</p>`;
  $("#ram-cards").innerHTML=[card(r1,{extra:extra}),card(byKey("l10")),card({cat:"rel",title:"آخر أيام رمضان",date:last,expected:true,note:"حسب أم القرى، ويكتمل الشهر ثلاثين يوماً إن لم يُرَ هلال شوال."}),card(byKey("fitrhol"))].join("");
}

/* ---------- eid / national ---------- */
function renderEid(){
  const nx=["fitr","adha","ny"].map(byKey).find(e=>e.date>=T);
  feature($("#eid-feature"),nx,"يبقى على");
  $("#eid-cards").innerHTML=EV.filter(e=>e.cat==="rel"&&!["ram1","l10","tasua"].includes(e.key)).map(e=>card(e)).join("");
}
function renderNational(){
  const nat=EV.filter(e=>e.cat==="nat");
  feature($("#nat-feature"),nat.find(e=>e.date>=T),"يبقى على");
  $("#nat-cards").innerHTML=nat.map(e=>card(e)).join("");
}

/* ---------- salary ---------- */
function renderSalary(){
  const g=upcoming(e=>e.key==="gov")[0];feature($("#pay-feature"),g,"الراتب الحكومي القادم");
  const mini=[["حساب المواطن",upcoming(e=>e.key==="ca")[0]],["الضمان الاجتماعي المطوّر",upcoming(e=>e.key==="ss")[0]]];
  $("#pay-mini").innerHTML=mini.filter(x=>x[1]).map(([n,e])=>{const s=status(e);return `<div class="panel glow"><p class="note" style="color:var(--c-pay)">الدفعة القادمة</p><h3>${n}</h3><p style="font-family:var(--f-callig);font-size:20px;color:var(--gold-hi)">${fH(e.date)}</p><p>${wd(e.date)} ${fG(e.date)} · <span class="pill ${s.c}">${s.t}</span></p></div>`}).join("");
  const cell=(d,mark)=>{const w=d.getUTCDay();const wk=mark&&(w===5||w===6);return `${wd(d)} ${fGs(d)}${wk?'<span class="wk-mark" title="يوافق إجازة نهاية الأسبوع">*</span>':""}<span class="s">${fHs(d)} ${ar(H(d).y)}هـ</span>`};
  let nextDone=false;
  $("#pay-rows").innerHTML=PAY.map(r=>{const past=r.gov<T&&r.ca<T&&r.ss<T;let cls=past?"past":"";if(!past&&!nextDone&&r.gov>=T){cls="next";nextDone=true}
    return `<tr class="${cls}"><td class="t">${GM[r.m-1]} ${ar(r.y)}${r.official?"":'<span class="tag">حسب القاعدة</span>'}</td><td>${cell(r.gov,false)}</td><td>${cell(r.ca,false)}</td><td>${cell(r.ss,true)}</td></tr>`}).join("");
}

/* ---------- prayer section ---------- */
const sel=$("#city");
CITIES.forEach(c=>sel.add(new Option(c[1],c[0])));
sel.value=city[0];
sel.addEventListener("change",()=>{city=CITIES.find(c=>c[0]===sel.value)||CITIES[0];store.set("tw-city",city[0]);renderPrayer();renderQuick();renderRamadan();renderDetail();renderImsakiya();renderNight();renderCities()});
(function ticks(){let s="";for(let i=0;i<72;i++){const a=i*5,l=i%18===0?8:i%6===0?5:2.5;const x1=60+Math.sin(a*RAD)*50,y1=60-Math.cos(a*RAD)*50,x2=60+Math.sin(a*RAD)*(50-l),y2=60-Math.cos(a*RAD)*(50-l);s+=`<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="rgba(212,175,106,${i%6===0?.6:.25})" stroke-width="1"/>`}$("#qibla-ticks").innerHTML=s})();
let qiblaShown=0;
function renderPrayer(){
  const list=prayersFor(T);const now=Date.now();const np=nextPrayer();
  $("#pr-today").innerHTML=list.map(p=>`<li class="${p.ms<=now?"done":""}${np&&p.ms===np.ms?" next":""}"><span>${p.n}</span><b>${fHour(p.h)}</b></li>`).join("");
  $("#pr-next").textContent=np?np.n+" · "+fClock(np.ms):"";
  const q=qibla(city[2],city[3]),km=distKm(city[2],city[3]);
  const cur=qiblaShown%360;const delta=((q-cur+540)%360)-180;qiblaShown=qiblaShown+delta;
  $("#qibla-needle").style.transform=`rotate(${qiblaShown.toFixed(1)}deg)`;
  $("#qibla-deg").textContent=km<5?"أنت عند الكعبة":`${ar(Math.round(q))}° من الشمال`;
  $("#qibla-txt").textContent=km<5?"المسجد الحرام":`المسافة إلى الكعبة المشرفة ${ar(Math.round(km).toLocaleString("en").replace(/,/g,"٬"))} كم تقريباً`;
  renderDial();
  let rows="";for(let i=0;i<30;i++){const d=addDays(T,i);const p=prayerTimes(d,city[2],city[3]);const h=H(d);
    rows+=`<tr class="${i===0?"next":""}${p.ram?" rmd":""}"><td class="t">${wd(d)} ${fGs(d)}<span class="s">${ar(h.d)} ${HM[h.m-1]}${p.ram?" · عشاء رمضان":""}</span></td><td>${fHour(p.fajr)}</td><td>${fHour(p.sunrise)}</td><td>${fHour(p.dhuhr)}</td><td>${fHour(p.asr)}</td><td>${fHour(p.maghrib)}</td><td>${fHour(p.isha)}</td></tr>`}
  $("#pr-rows").innerHTML=rows;
}
function renderDial(){
  const list=prayersFor(T);const now=Date.now();
  const rise=list[1].ms,set=list[4].ms;
  const cx=200,cy=176,R=158;
  const pt=f=>[cx+R*Math.cos(Math.PI*f),cy-R*Math.sin(Math.PI*f)];
  const fOf=ms=>(ms-rise)/(set-rise);
  let marks="";
  list.forEach(p=>{if(p.n==="الفجر"||p.n==="العشاء")return;const f=Math.max(0,Math.min(1,fOf(p.ms)));const[x,y]=pt(f);const done=p.ms<=now;
    marks+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="${done?"#9c7638":"#0b1915"}" stroke="#d4af6a" stroke-width="1.5"/><text x="${x.toFixed(1)}" y="${(y-14).toFixed(1)}" text-anchor="middle" font-size="13" fill="#d8d2c3" font-family="IBM Plex Sans Arabic, sans-serif">${p.n}</text><text x="${x.toFixed(1)}" y="${(y+24).toFixed(1)}" text-anchor="middle" font-size="12" fill="#a5aa9b" font-family="IBM Plex Sans Arabic, sans-serif">${fHour(p.h)}</text>`});
  const f=fOf(now);const day=f>=0&&f<=1;
  let sunEl="";
  if(day){const[x,y]=pt(f);sunEl=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="18" fill="rgba(243,220,171,.16)"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="#f3dcab"/>`}
  const lit=day?`<path d="M${cx+R} ${cy} A${R} ${R} 0 0 0 ${pt(f)[0].toFixed(1)} ${pt(f)[1].toFixed(1)}" fill="none" stroke="#d4af6a" stroke-width="3" stroke-linecap="round"/>`:"";
  $("#pr-dial").innerHTML=`<svg viewBox="0 0 400 236" role="img" aria-label="مسار الشمس اليوم في ${city[1]}"><line x1="20" y1="${cy}" x2="380" y2="${cy}" stroke="rgba(212,175,106,.3)"/><path d="M${cx+R} ${cy} A${R} ${R} 0 0 0 ${cx-R} ${cy}" fill="none" stroke="rgba(212,175,106,.22)" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>${lit}${marks}${sunEl}<text x="${cx+R-14}" y="${cy+52}" text-anchor="middle" font-size="12" fill="#8d9689" font-family="IBM Plex Sans Arabic, sans-serif">قبله الفجر ${fHour(list[0].h)}</text><text x="${cx-R+14}" y="${cy+52}" text-anchor="middle" font-size="12" fill="#8d9689" font-family="IBM Plex Sans Arabic, sans-serif">بعده العشاء ${fHour(list[5].h)}</text></svg>`;
  const dayLen=(set-rise)/36e5;
  $("#pr-dial-cap").textContent=day?`الشمس الآن في ${Math.round(f*100)>=50?"النصف الثاني":"النصف الأول"} من نهار ${city[1]} · طول النهار ${ar(Math.floor(dayLen))} ساعة و${ar(Math.round((dayLen%1)*60))} دقيقة`:`الشمس تحت الأفق في ${city[1]} · طول النهار اليوم ${ar(Math.floor(dayLen))} ساعة و${ar(Math.round((dayLen%1)*60))} دقيقة`;
}

/* ---------- moon section ---------- */
const mcv=$("#moon-cv"),mctx=mcv.getContext("2d");
let moonView={k:0,wax:true},moonAnim=null;
function moonLitPath(c,x,y,r,k,wax){const s=wax?1:-1,rx=r*Math.abs(1-2*k),term=k<.5?s:-s;c.beginPath();c.arc(x,y,r,-Math.PI/2,Math.PI/2,s<0);c.ellipse(x,y,Math.max(rx,.001),r,0,Math.PI/2,-Math.PI/2,term>0);c.closePath()}
function drawMoon(c,x,y,r,k,wax,halo){
  if(halo){const hg=c.createRadialGradient(x,y,r*.8,x,y,r*3);hg.addColorStop(0,`rgba(243,230,200,${(.06+.2*k).toFixed(3)})`);hg.addColorStop(1,"rgba(243,230,200,0)");c.fillStyle=hg;c.fillRect(x-r*3,y-r*3,r*6,r*6)}
  c.fillStyle="rgba(40,48,46,.6)";c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();
  if(k<0.012)return;
  c.save();if(k<0.988){moonLitPath(c,x,y,r,k,wax);c.clip()}
  const g=c.createRadialGradient(x-r*.3,y-r*.35,r*.1,x,y,r*1.05);g.addColorStop(0,"#fff6e0");g.addColorStop(1,"#cdbb92");c.fillStyle=g;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();
  const MARIA=[[-.28,-.32,.22],[.1,-.3,.16],[.22,-.05,.18],[-.42,.05,.26],[-.18,.18,.14],[.05,.32,.1]];
  MARIA.forEach(m=>{const mx=x+m[0]*r,my=y+m[1]*r,mr=m[2]*r;const mg=c.createRadialGradient(mx,my,0,mx,my,mr);mg.addColorStop(0,"rgba(118,108,86,.32)");mg.addColorStop(.7,"rgba(118,108,86,.2)");mg.addColorStop(1,"rgba(118,108,86,0)");c.fillStyle=mg;c.beginPath();c.arc(mx,my,mr,0,Math.PI*2);c.fill()});
  const rr=rng(91);c.fillStyle="rgba(255,250,235,.35)";
  for(let i=0;i<12;i++){const a=rr()*Math.PI*2,d=rr()*r*.85,s=r*(.012+rr()*.025);c.beginPath();c.arc(x+Math.cos(a)*d,y+Math.sin(a)*d,s,0,Math.PI*2);c.fill()}
  const tg=c.createRadialGradient(x,y,r*.7,x,y,r);tg.addColorStop(0,"rgba(0,0,0,0)");tg.addColorStop(1,"rgba(60,50,30,.18)");c.fillStyle=tg;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();
  c.restore();
}
function sizeMoonCv(){const dpr=Math.min(2,window.devicePixelRatio||1),w=mcv.clientWidth;if(!w)return;mcv.width=Math.round(w*dpr);mcv.height=Math.round(w*dpr);mctx.setTransform(dpr,0,0,dpr,0,0);paintMoonCv()}
function paintMoonCv(){const w=mcv.clientWidth;if(!w)return;mctx.clearRect(0,0,w,w);const r=rng(4);for(let i=0;i<70;i++){mctx.fillStyle=`rgba(255,244,220,${(.15+r()*.5).toFixed(2)})`;mctx.beginPath();mctx.arc(r()*w,r()*w,.4+r()*1,0,Math.PI*2);mctx.fill()}drawMoon(mctx,w/2,w/2,w*.33,moonView.k,moonView.wax,true)}
function setMoonView(k,wax){const from=Object.assign({},moonView);if(reduce||from.wax!==wax){moonView={k:k,wax:wax};paintMoonCv();return}
  const t0=performance.now();cancelAnimationFrame(moonAnim);const step=t=>{const p=Math.min(1,(t-t0)/380),e=1-Math.pow(1-p,3);moonView={k:from.k+(k-from.k)*e,wax:wax};paintMoonCv();if(p<1)moonAnim=requestAnimationFrame(step)};moonAnim=requestAnimationFrame(step)}
const mrange=$("#moon-range");
let moonMonth=null;
function renderMoon(){
  const th=H(T);const len=hMonthLen(th.y,th.m);moonMonth={y:th.y,m:th.m,len:len};
  mrange.max=len;mrange.value=th.d;
  $("#mr-a").textContent=`١ ${HM[th.m-1]}`;$("#mr-b").textContent=`${ar(len)} ${HM[th.m-1]}`;
  showMoonDay(th.d,false);
  const mi=moonInfo(Date.now());
  $("#moon-meta").innerHTML=`<span>الليلة: ${mi.name}</span><span>${ar(Math.round(mi.k*100))}٪ مضاء</span>${mi.nextFull?`<span>البدر القادم ${wd(msToLocalDay(mi.nextFull.ms))} ${fGs(msToLocalDay(mi.nextFull.ms))}</span>`:""}`;
  const start=T.getTime()-32*DAY,endMs=iso("2027-12-31").getTime()+DAY;let rows="",cur=null,cells=[];
  const flush=()=>{if(cur){while(cells.length<4)cells.push("<td>—</td>");for(let i=0;i<4;i++)if(!cells[i])cells[i]="<td>—</td>";rows+=`<tr><td class="t">${cur}</td>${cells.join("")}</tr>`}};
  PHASES.forEach(p=>{if(p.ms<start||p.ms>endMs)return;if(p.type===0){flush();const d=msToLocalDay(p.ms);const hh=H(addDays(d,2));cur=`${HM[hh.m-1]} ${ar(hh.y)}هـ`;cells=[]}if(cur===null)return;const d=msToLocalDay(p.ms);const past=p.ms<Date.now();cells[p.type]=`<td${past?' style="color:var(--dim)"':""}>${wd(d)} ${fGs(d)} ${ar(d.getUTCFullYear())}<span class="s">${fClock(p.ms)}</span></td>`});
  flush();
  $("#moon-rows").innerHTML=rows;
}
function showMoonDay(hd,anim){
  const g=H2G(moonMonth.y,moonMonth.m,Math.min(hd,moonMonth.len));if(!g)return;
  const ms=startMs(g)+21*36e5;
  const mi=moonInfo(ms);
  $("#mi-name").textContent=`القمر ${mi.name}`;
  $("#mi-h").textContent=`${ar(hd)} ${HM[moonMonth.m-1]} ${ar(moonMonth.y)}هـ`;
  $("#mi-g").textContent=`${wd(g)} ${fG(g)} · الساعة ٩ مساءً`;
  $("#mi-ill").textContent=ar(Math.round(mi.k*100))+"٪";
  $("#mi-age").textContent=ar(mi.age.toFixed(1))+" يوم";
  $("#mi-full").textContent=mi.nextFull?fGs(msToLocalDay(mi.nextFull.ms)):"—";
  mrange.setAttribute("aria-valuetext",`${ar(hd)} ${HM[moonMonth.m-1]}، ${mi.name}، ${ar(Math.round(mi.k*100))}٪`);
  if(anim)setMoonView(mi.k,mi.waxing);else{moonView={k:mi.k,wax:mi.waxing};paintMoonCv()}
}
mrange.addEventListener("input",()=>showMoonDay(+mrange.value,true));
if(window.ResizeObserver)new ResizeObserver(sizeMoonCv).observe(mcv);

/* ---------- seasons ---------- */
function tempColor(t){const stops=[[0,[110,198,216]],[.5,[226,191,122]],[1,[224,120,74]]];let a=stops[0],b=stops[2];for(let i=0;i<2;i++)if(t>=stops[i][0]&&t<=stops[i+1][0]){a=stops[i];b=stops[i+1]}const f=(t-a[0])/(b[0]-a[0]||1);return `rgb(${a[1].map((v,j)=>Math.round(v+(b[1][j]-v)*f)).join(",")})`}
function renderSeasons(){
  const cyc=CYCLES.find(c=>T>=c[0].start&&T<=c[11].end)||CYCLES[1];
  const yStart=cyc[0].start,total=diff(addDays(cyc[11].end,1),yStart);
  const cur=seasonOn(T);
  const cx=260,cy=260,R1=150,R2=212;
  const pol=(a,r)=>[cx+r*Math.sin(a),cy-r*Math.cos(a)];
  let segs="",labels="";
  cyc.forEach(s=>{
    const a0=diff(s.start,yStart)/total*2*Math.PI,a1=(diff(s.start,yStart)+s.len)/total*2*Math.PI;
    const m0=-a0,m1=-a1;
    const[p1x,p1y]=pol(m0,R2),[p2x,p2y]=pol(m1,R2),[p3x,p3y]=pol(m1,R1),[p4x,p4y]=pol(m0,R1);const large=a1-a0>Math.PI?1:0;
    const isCur=cur&&cur.name===s.name&&cur.start.getTime()===s.start.getTime();
    segs+=`<path d="M${p1x.toFixed(1)} ${p1y.toFixed(1)}A${R2} ${R2} 0 ${large} 0 ${p2x.toFixed(1)} ${p2y.toFixed(1)}L${p3x.toFixed(1)} ${p3y.toFixed(1)}A${R1} ${R1} 0 ${large} 1 ${p4x.toFixed(1)} ${p4y.toFixed(1)}Z" fill="${tempColor(s.temp)}" fill-opacity="${isCur?.95:.42}" stroke="#07110e" stroke-width="2"><title>${s.name}: ${fGs(s.start)} – ${fGs(s.end)}</title></path>`;
    const mid=(m0+m1)/2;const[lx,ly]=pol(mid,R2+26);
    labels+=`<text x="${lx.toFixed(1)}" y="${(ly+4).toFixed(1)}" text-anchor="middle"${isCur?' style="fill:#f3dcab;font-weight:600"':""}>${s.name}</text>`;
  });
  const atDeg=-(diff(T,yStart)+.5)/total*360;
  const needle=`<g class="needle" id="season-needle" data-rot="${atDeg.toFixed(2)}" transform="rotate(${atDeg.toFixed(2)} ${cx} ${cy})"><line x1="${cx}" y1="${cy-R1+12}" x2="${cx}" y2="${cy-R2-6}" stroke="#f3dcab" stroke-width="3" stroke-linecap="round"/><circle cx="${cx}" cy="${cy-R2-6}" r="6" fill="#f3dcab"/></g>`;
  const center=cur?`<text x="${cx}" y="${cy-18}" text-anchor="middle" style="font-family:'Reem Kufi',sans-serif;font-size:38px;fill:#f3dcab;font-weight:600">${cur.name}</text><text x="${cx}" y="${cy+18}" text-anchor="middle" style="font-size:15px;fill:#a5aa9b">اليوم ${ar(diff(T,cur.start)+1)} من ${ar(cur.len)}</text><text x="${cx}" y="${cy+44}" text-anchor="middle" style="font-size:13px;fill:#a5aa9b">السنة السهيلية ${ar(yStart.getUTCFullYear())}–${ar(yStart.getUTCFullYear()+1)}</text>`:"";
  $("#wheel").innerHTML=`<svg viewBox="0 0 520 520" role="img" aria-label="عجلة المواسم، الموسم الحالي ${cur?cur.name:""}">${segs}${labels}${needle}${center}</svg>`;
  if(cur){const nxt=cyc[(cur.i+1)%12];const nStart=cur.i===11?CYCLES[CYCLES.indexOf(cyc)+1][0].start:nxt.start;
    $("#season-now").innerHTML=`<p class="note" style="margin:0">نحن الآن في موسم</p><h3>${cur.name}</h3><p class="d">من ${wd(cur.start)} ${fGs(cur.start)} إلى ${wd(cur.end)} ${fGs(cur.end)} · ${dayWord(cur.len)}</p><p>${cur.desc}</p><div class="prog" style="margin-top:16px"><i style="width:${((diff(T,cur.start)+1)/cur.len*100).toFixed(1)}%"></i></div><p class="note" style="margin-top:10px">يبدأ موسم ${nxt.name} ${afterWord(diff(nStart,T))}، ${wd(nStart)} ${fG(nStart)}.</p><div class="temp-scale"><span>بارد</span><i></i><span>حار</span></div>`;
    $("#season-meta").innerHTML=`<span>الموسم الحالي: ${cur.name}</span><span>اليوم ${ar(diff(T,cur.start)+1)} من ${ar(cur.len)}</span>`;
    const sc=$("#seasons");if(sc)sc.dataset.scene=`ريح ${cur.name} وطلوع سهيل`}
  $("#season-rows").innerHTML=cyc.map(s=>{const isCur=cur&&cur.start.getTime()===s.start.getTime();const past=s.end<T;return `<tr class="${isCur?"next":past?"past":""}"><td class="t"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${tempColor(s.temp)};margin-inline-end:8px"></span>${s.name}</td><td>${wd(s.start)} ${fGs(s.start)} ${ar(s.start.getUTCFullYear())}<span class="s">${fHs(s.start)}</span></td><td>${fGs(s.end)}</td><td>${dayWord(s.len)}</td><td>${s.desc}</td></tr>`}).join("");
}

/* ---------- fasting ---------- */
function renderFasting(){
  const nw=upcoming(e=>e.key==="white")[0]||EV.find(e=>e.key==="white"&&e.endD>=T);
  if(nw){const on=nw.date<=T&&nw.endD>=T;feature($("#fast-feature"),nw,on?"جارية الآن":"تبدأ بعد",on?startMs(addDays(nw.endD,1)):startMs(nw.date),`<p class="g">حتى ${wd(nw.endD)} ${fG(nw.endD)}</p>`)}
  const nextDow=dw=>{for(let i=0;i<7;i++){const d=addDays(T,i);if(d.getUTCDay()===dw)return d}};
  const mon=nextDow(1),thu=nextDow(4);
  const mt=`<p class="nt">أقرب اثنين: ${fGs(mon)} · أقرب خميس: ${fGs(thu)}</p>`;
  $("#fast-cards").innerHTML=[card(byKey("arafah")),card(Object.assign({},byKey("tasua"),{title:"تاسوعاء وعاشوراء",endD:byKey("ashura").date,cat:"fast",note:"٩ و١٠ محرم ١٤٤٩هـ، ويُستحب صيام عاشوراء مع يوم قبله."})),card(byKey("shawwal")),`<article class="ec glow" style="--cat:var(--c-fast)"><p class="k">كل أسبوع</p><h3>الاثنين والخميس</h3><p class="h">${fH(mon)}</p><p class="g">الاثنين ${fG(mon)}</p>${mt}<div class="ft"><span class="pill st-soon">${mon.getTime()===T.getTime()?"اليوم":afterWord(diff(mon,T))}</span></div></article>`].join("");
  $("#fast-rows").innerHTML=WHITE.map(r=>{const past=r.days[2]<T;const cur=r.days[0]<=T&&r.days[2]>=T;return `<tr class="${cur?"next":past?"past":""}${r.m===9?" rmd":""}"><td class="t">${HM[r.m-1]} ${ar(r.y)}هـ</td>${r.days.map((d,i)=>`<td${r.m===12&&i===0?' style="color:var(--dim);text-decoration:line-through"':""}>${wd(d)}<span class="s">${fGs(d)} ${ar(d.getUTCFullYear())}</span></td>`).join("")}<td>${r.note||"—"}</td></tr>`}).join("");
}

/* ---------- sky ---------- */
function renderSky(){
  const ecl=byKey("ecl");const start=Date.UTC(2027,7,2,9,1,50);
  feature($("#sky-feature"),ecl,"يبقى على بداية الكسوف في مكة المكرمة",start,`<p class="g">الكلّية في مكة المكرمة من ١:٢٣:٥٥ إلى ١:٢٩:٠٩ ظهراً</p>`);
  const showers=["gem","qua","per"].map(byKey);
  const others=[byKey("lun")].concat(showers.map(e=>{const mi=moonInfo(startMs(addDays(e.date,1))+60);return Object.assign({},e,{_moon:mi})}),EV.filter(e=>e.cat==="astro"&&/فلكياً/.test(e.title)));
  $("#sky-cards").innerHTML=others.map(e=>card(e,{extra:e._moon?`<p class="nt">القمر ليلتها ${e._moon.name} ${ar(Math.round(e._moon.k*100))}٪${e._moon.k<.35?"، والسماء مظلمة ومناسبة للرصد":e._moon.k>.7?"، وضوءه يحجب الشهب الخافتة":""}.</p>`:""})).join("");
}

/* ---------- month calendar ---------- */
const CMIN=[2026,8],CMAX=[2027,12];
let cy=T.getUTCFullYear(),cm=T.getUTCMonth()+1,selD=isoOf(T);
if(cy*12+cm<CMIN[0]*12+CMIN[1]){cy=CMIN[0];cm=CMIN[1]}if(cy*12+cm>CMAX[0]*12+CMAX[1]){cy=CMAX[0];cm=CMAX[1]}
$("#cal-dots").innerHTML=["school","rel","nat","pay","fast","season","astro"].map(c=>`<span style="--cat:var(--c-${c});display:inline-flex;align-items:center;gap:5px;margin-inline-end:12px"><b class="dot"></b>${CAT[c]}</span>`).join("");
$("#cal-prev").addEventListener("click",()=>{cm--;if(cm<1){cm=12;cy--}renderMonth()});
$("#cal-next").addEventListener("click",()=>{cm++;if(cm>12){cm=1;cy++}renderMonth()});
$("#cal").addEventListener("click",ev=>{const b=ev.target.closest(".day");if(!b)return;selD=b.dataset.d;document.querySelectorAll(".day.sel").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");renderDetail()});
const WS=["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"];
function renderMonth(){
  const first=D(cy,cm,1),n=new Date(Date.UTC(cy,cm,0)).getUTCDate(),last=D(cy,cm,n);const ha=H(first),hb=H(last);
  $("#cal-title").innerHTML=`${GM[cm-1]} ${ar(cy)}م<span class="hs">${HM[ha.m-1]}${ha.y!==hb.y?" "+ar(ha.y)+"هـ":""}${ha.m!==hb.m?" – "+HM[hb.m-1]:""} ${ar(hb.y)}هـ</span>`;
  $("#cal-prev").disabled=cy*12+cm<=CMIN[0]*12+CMIN[1];$("#cal-next").disabled=cy*12+cm>=CMAX[0]*12+CMAX[1];
  let h=WD.map((w,i)=>`<div class="wd" aria-hidden="true"><span class="wl">${w}</span><span class="ws">${WS[i]}</span></div>`).join("");
  for(let i=0;i<first.getUTCDay();i++)h+='<div class="blank"></div>';
  for(let i=1;i<=n;i++){const d=D(cy,cm,i),k=isoOf(d),hh=H(d),w=d.getUTCDay();let c="day";if(w===5||w===6)c+=" wk";if(offDays.has(k))c+=" off";if(d.getTime()===T.getTime())c+=" now";if(k===selD)c+=" sel";
    const evs=dayMap.get(k)||[];const cats=[...new Set(evs.map(e=>e.cat))];
    const mi=moonIllum(startMs(d)+21*36e5);
    const lab=`${wd(d)} ${fG(d)}، ${fH(d)}${evs.length?"، "+evs.map(e=>e.title).join("، "):""}`;
    h+=`<button type="button" class="${c}" data-d="${k}" aria-label="${lab}"${evs.length?` data-tip="${esc(evs.map(e=>e.title).join(" · "))}"`:""}>${moonSvg(mi.k,mi.waxing,16)}<span class="g">${ar(i)}</span><span class="h">${ar(hh.d)}</span>${hh.d===1||i===1?`<span class="hm">${HM[hh.m-1]}</span>`:""}<span class="dots">${cats.map(x=>`<b class="dot" style="--cat:var(--c-${x})"></b>`).join("")}</span></button>`}
  $("#cal").innerHTML=h;
  const sd=iso(selD);if(sd.getUTCFullYear()!==cy||sd.getUTCMonth()+1!==cm){selD=isoOf(T.getUTCFullYear()===cy&&T.getUTCMonth()+1===cm?T:first)}
  document.querySelectorAll(".day").forEach(b=>b.classList.toggle("sel",b.dataset.d===selD));
  renderDetail();
  if(window.gsap&&!reduce&&!motionOff)gsap.fromTo("#cal .day",{y:10,opacity:.4},{y:0,opacity:1,duration:.45,ease:"power3.out",stagger:{each:.008,from:"start"},overwrite:true});
}
function renderDetail(){
  const d=iso(selD);const evs=(dayMap.get(selD)||[]).slice();
  EV.forEach(e=>{if(e.endD&&d>e.date&&d<=e.endD&&!evs.includes(e)&&e.cat!=="season")evs.push(e)});
  const dd=diff(d,T);const rel=dd===0?"اليوم":dd>0?afterWord(dd):`قبل ${dayWord(-dd)}`;
  const p=prayerTimes(d,city[2],city[3]);const mi=moonInfo(startMs(d)+21*36e5);const se=seasonOn(d);
  $("#cal-detail").innerHTML=`<h4>${wd(d)} ${fG(d)} <span class="pill ${dd===0?"st-now":dd>0?"st-soon":"st-past"}" style="vertical-align:3px;margin-inline-start:6px">${rel}</span></h4><p class="dh">${fH(d)}</p>${evs.length?`<ul>${evs.map(e=>`<li style="--cat:var(--c-${e.cat})"><i></i>${e.title}${e.expected?'<span class="exp">متوقع</span>':""}${e.endD&&d>e.date?'<span class="exp">مستمرة</span>':""}</li>`).join("")}</ul>`:'<p class="empty">لا توجد مناسبات مسجلة في هذا اليوم.</p>'}<div class="pt"><span>${moonSvg(mi.k,mi.waxing,16).replace('class="mn"','class="mg" width="16" height="16"')}القمر ${mi.name} ${ar(Math.round(mi.k*100))}٪</span>${se?`<span>موسم ${se.name}</span>`:""}</div><div class="pt"><span>${city[1]}:</span><span>الفجر <b>${fHour(p.fajr)}</b></span><span>الظهر <b>${fHour(p.dhuhr)}</b></span><span>العصر <b>${fHour(p.asr)}</b></span><span>المغرب <b>${fHour(p.maghrib)}</b></span><span>العشاء <b>${fHour(p.isha)}</b></span></div>`;
}

/* ---------- converters & calculators ---------- */
const gin=$("#g-in");gin.value=isoOf(T);
function relText(dd){return dd===0?"هذا هو تاريخ اليوم":dd>0?afterWord(dd)+" من اليوم":"قبل "+dayWord(-dd)+" من اليوم"}
function validInput(v){return /^(19|20|21)\d\d-\d\d-\d\d$/.test(v)&&!isNaN(iso(v))}
function g2h(){const v=gin.value;const o=$("#g-out");if(!v||!validInput(v)){o.innerHTML='<p class="err">اختر تاريخاً ميلادياً.</p>';return}const d=iso(v);
  o.innerHTML=`<p class="big">${fH(d)}</p><p class="sm">${wd(d)} ${fG(d)}</p><p class="sm" style="color:var(--muted)">${relText(diff(d,T))}</p>`}
gin.addEventListener("input",g2h);
function fillHijri(ys,ms,ds,y0,y1){for(let y=y0;y<=y1;y++)ys.add(new Option(ar(y)+"هـ",y));HM.forEach((m,i)=>ms.add(new Option(m,i+1)));for(let d=1;d<=30;d++)ds.add(new Option(ar(d),d))}
const hy=$("#h-y"),hm=$("#h-m"),hd=$("#h-d");const th=H(T);
fillHijri(hy,hm,hd,1360,1500);hy.value=th.y;hm.value=th.m;hd.value=th.d;
function h2g(){const y=+hy.value,m=+hm.value,d=+hd.value;const o=$("#h-out");const g=H2G(y,m,d);
  if(!g){o.innerHTML=`<p class="err">شهر ${HM[m-1]} ${ar(y)}هـ تسعة وعشرون يوماً حسب تقويم أم القرى، فلا يوجد فيه يوم ٣٠.</p>`;return}
  o.innerHTML=`<p class="big">${fG(g)}</p><p class="sm">${wd(g)} · ${fH(g)}</p><p class="sm" style="color:var(--muted)">${relText(diff(g,T))}</p>`}
[hy,hm,hd].forEach(s=>s.addEventListener("change",h2g));
let ageCal="g";
const agin=$("#age-gin");agin.value="1995-06-15";agin.max=isoOf(T);
const ahy=$("#age-hy"),ahm=$("#age-hm"),ahd=$("#age-hd");fillHijri(ahy,ahm,ahd,1340,th.y);ahy.value=1416;ahm.value=1;ahd.value=16;
$("#f-age .seg").addEventListener("click",ev=>{const b=ev.target.closest("button");if(!b)return;ageCal=b.dataset.cal;document.querySelectorAll("#f-age .seg button").forEach(x=>x.setAttribute("aria-pressed",x===b));$("#age-g").hidden=ageCal!=="g";$("#age-h").hidden=ageCal!=="h";
  if(ageCal==="h"&&agin.value){const h=H(iso(agin.value));ahy.value=h.y;ahm.value=h.m;ahd.value=h.d}else if(ageCal==="g"){const g=H2G(+ahy.value,+ahm.value,+ahd.value);if(g)agin.value=isoOf(g)}calcAge()});
[agin,ahy,ahm,ahd].forEach(x=>x.addEventListener(x.tagName==="INPUT"?"input":"change",calcAge));
function ymdG(a,b){let y=b.getUTCFullYear()-a.getUTCFullYear(),m=b.getUTCMonth()-a.getUTCMonth(),d=b.getUTCDate()-a.getUTCDate();if(d<0){m--;d+=new Date(Date.UTC(b.getUTCFullYear(),b.getUTCMonth(),0)).getUTCDate()}if(m<0){y--;m+=12}return[y,m,d]}
function ymdH(a,b){const A=H(a),B=H(b);let y=B.y-A.y,m=B.m-A.m,d=B.d-A.d;if(d<0){m--;const pm=B.m===1?12:B.m-1,py=B.m===1?B.y-1:B.y;d+=hMonthLen(py,pm)}if(m<0){y--;m+=12}return[y,m,d]}
const ymdText=([y,m,d])=>[yearsW(y),monthsW(m),d?dayWord(d):""].filter(Boolean).join(" و")||"أقل من يوم";
function calcAge(){const o=$("#age-out");let b;
  if(ageCal==="g"){if(!agin.value||!validInput(agin.value)){o.innerHTML='<p class="err">اختر تاريخ الميلاد.</p>';return}b=iso(agin.value)}
  else{b=H2G(+ahy.value,+ahm.value,+ahd.value);if(!b){o.innerHTML=`<p class="err">شهر ${HM[(+ahm.value-1)|0]||""} ${ar(+ahy.value)}هـ تسعة وعشرون يوماً، فلا يوجد فيه يوم ٣٠.</p>`;return}}
  if(b>T){o.innerHTML='<p class="err">تاريخ الميلاد بعد اليوم. اختر تاريخاً سابقاً.</p>';return}
  const g=ymdG(b,T),h=ymdH(b,T);
  let ng=D(T.getUTCFullYear(),b.getUTCMonth()+1,b.getUTCDate());if(ng<T)ng=D(T.getUTCFullYear()+1,b.getUTCMonth()+1,b.getUTCDate());
  const bh=H(b),thh=H(T);let nh=H2G(thh.y,bh.m,Math.min(bh.d,hMonthLen(thh.y,bh.m)));if(!nh||nh<T)nh=H2G(thh.y+1,bh.m,Math.min(bh.d,hMonthLen(thh.y+1,bh.m)));
  o.innerHTML=`<p class="big">${ar(g[0])} سنة ميلادية</p><dl><dt>بالميلادي</dt><dd>${ymdText(g)}</dd><dt>بالهجري</dt><dd>${ymdText(h)}</dd><dt>عدد الأيام</dt><dd>${ar(diff(T,b).toLocaleString("en").replace(/,/g,"٬"))} يوم</dd><dt>الميلاد</dt><dd>${wd(b)} ${fG(b)} · ${fH(b)}</dd><dt>عيد الميلاد القادم</dt><dd>${fGs(ng)} ${ar(ng.getUTCFullYear())} · ${ng.getTime()===T.getTime()?"اليوم":afterWord(diff(ng,T))}</dd><dt>بالهجري</dt><dd>${nh?`${fH(nh)} · ${nh.getTime()===T.getTime()?"اليوم":afterWord(diff(nh,T))}`:"—"}</dd></dl><p class="sm" style="color:var(--muted);margin-top:8px">التاريخ المعروض مثال، غيّره إلى تاريخ ميلادك.</p>`}
const da=$("#dif-a"),db=$("#dif-b");da.value=isoOf(T);db.value=isoOf(byKey("ram1").date);
[da,db].forEach(x=>x.addEventListener("input",calcDiff));
function calcDiff(){const o=$("#dif-out");if(!validInput(da.value)||!validInput(db.value)){o.innerHTML='<p class="err">اختر التاريخين.</p>';return}
  let a=iso(da.value),b=iso(db.value);const neg=b<a;if(neg){const t=a;a=b;b=t}
  const n=diff(b,a);let work=0;for(let d=a;d<b;d=addDays(d,1)){const w=d.getUTCDay();if(w!==5&&w!==6)work++}
  const ymd=ymdG(a,b);
  o.innerHTML=`<p class="big">${n===0?"التاريخان متطابقان":dayWord(n)}</p><dl><dt>بالأسابيع</dt><dd>${Math.floor(n/7)?unitWord(Math.floor(n/7),"أسبوع واحد","أسبوعان","أسابيع","أسبوعاً"):"—"}${n%7?" و"+dayWord(n%7):""}</dd><dt>بالأشهر</dt><dd>${ymdText(ymd)}</dd><dt>أيام العمل</dt><dd>${dayWord(work)} من الأحد إلى الخميس</dd><dt>من</dt><dd>${wd(a)} ${fG(a)} · ${fHs(a)}</dd><dt>إلى</dt><dd>${wd(b)} ${fG(b)} · ${fHs(b)}</dd></dl>${neg?'<p class="sm" style="color:var(--muted);margin-top:8px">التاريخ الثاني أقدم من الأول، فحُسب الفرق بينهما بالعكس.</p>':""}<p class="sm" style="color:var(--muted);margin-top:8px">أيام العمل لا تستثني الإجازات الرسمية.</p>`}
["f-g2h","f-h2g","f-age","f-diff"].forEach(id=>$("#"+id).addEventListener("submit",e=>e.preventDefault()));

/* ---------- motion follows the system setting only ---------- */
const motionOff=false;
document.documentElement.classList.toggle("still",reduce);

/* ---------- shared state for the 3D world ---------- */
const CHAPTERS=[...document.querySelectorAll("main > section")];
window.__tw={skyNow:skyNow,moonNow:()=>moonIllum(Date.now()),still:()=>reduce,reduce:reduce,listeners:[],chapters:CHAPTERS,layout:[],scrollVel:0,season:(seasonOn(T)||{}).name||"",setAccent:(r,g,b)=>{const v=r+","+g+","+b;["#progress","#rail","#clock"].forEach(q=>{const el=document.querySelector(q);if(el)el.style.setProperty("--acc",v)})}};
/* ---------- toast, copy, share ---------- */
let toastT=0;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),2600)}
function copyText(txt){try{if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(txt).then(()=>true,()=>legacyCopy(txt))}catch(e){}return Promise.resolve(legacyCopy(txt))}
function legacyCopy(txt){try{const ta=document.createElement("textarea");ta.value=txt;ta.setAttribute("readonly","");ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();const ok=document.execCommand("copy");ta.remove();return ok}catch(e){return false}}
document.addEventListener("click",ev=>{const b=ev.target.closest&&ev.target.closest(".copy");if(!b)return;ev.stopPropagation();copyText(b.dataset.copy).then(ok=>toast(ok?"نُسخ الموعد، الصقه حيث تريد":"تعذّر النسخ، حدّد النص يدوياً"))});
const PAGE_URL="https://claude.ai/artifact/EDuB1dDhcGW2Azct8S5hFz";
$("#share-btn").addEventListener("click",()=>copyText(PAGE_URL).then(ok=>toast(ok?"نُسخ رابط الصفحة":"تعذّر النسخ: "+PAGE_URL)));

/* ---------- clock, ticker, hero facts, ghosts, footer ---------- */
function renderClock(){const n=new Date(Date.now()+3*3600e3);const h=n.getUTCHours();$("#clock b").textContent=`${ar(h%12||12)}:${ar2(n.getUTCMinutes())}:${ar2(n.getUTCSeconds())} ${h>=12?"م":"ص"}`;$("#clock span").textContent=fHs(T)}
function renderTicker(){const list=EV.filter(e=>!e.staff&&(e.cat!=="pay"||e.key==="gov")&&(e.endD||e.date)>=T).slice(0,14);const one=list.map(e=>{const dd=diff(e.date,T);return `<span style="--cat:var(--c-${e.cat})"><i></i>${e.title} <b>${dd>0?afterWord(dd):dd===0?"اليوم":"جارية الآن"}</b></span>`}).join("");$("#ticker").innerHTML=one+one}
function renderFacts(){
  const tm=prayerTimes(addDays(T,1),24.7136,46.6753),td=prayerTimes(T,24.7136,46.6753);
  const ny=H2G(1449,1,1),left=ny?diff(ny,T):-1;
  const sy=byKey("sy").date,ey=byKey("ey").date,wk=T>=sy&&T<=ey?Math.floor(diff(T,sy)/7)+1:0;
  $("#facts").innerHTML=`<span>شروق الغد في الرياض <b>${fHour(tm.sunrise)}</b></span><span>طول نهار اليوم <b>${dur(td.maghrib-td.sunrise)}</b></span>${left>0?`<span>على نهاية ١٤٤٨هـ <b>${dayWord(left)}</b></span>`:""}${wk?`<span>الأسبوع <b>${ar(wk)}</b> منذ بداية العام الدراسي</span>`:""}`;
}
function renderGhosts(){const set=(id,v)=>{const el=document.querySelector(`#${id} .title-card`);if(el)el.dataset.ghost=v};set("upcoming",ar(EV.filter(e=>!e.staff&&(e.endD||e.date)>=T).length));set("moon",ar(Math.round(moonIllum(Date.now()).k*100))+"٪")}
function renderFoot(){$("#foot-stats").innerHTML=`<span><b>${ar(EV.filter(e=>!e.staff).length)}</b> موعداً في التقويم</span><span><b>١٦</b> مدينة لأوقات الصلاة</span><span><b>${ar(PHASES.length)}</b> طوراً قمرياً محسوباً</span><span><b>١٤</b> مشهداً ثلاثي الأبعاد</span>`}

/* ---------- school stats ---------- */
function studyDays(a,b){let n=0;for(let d=a;d<=b;d=addDays(d,1)){const w=d.getUTCDay();if(w===5||w===6||offDays.has(isoOf(d)))continue;n++}return n}
function renderSchoolStats(){
  const sy=byKey("sy").date,ey=byKey("ey").date;const total=studyDays(sy,ey);const left=T>ey?0:studyDays(T>sy?T:sy,ey);const done=total-left;
  const nh=upcoming(e=>e.hol)[0];const wk=T>=sy&&T<=ey?Math.floor(diff(T,sy)/7)+1:0;
  $("#sc-stats").innerHTML=`<div class="stat glow"><span>أيام الدراسة المتبقية</span><b data-countup="${left}">${ar(left)}</b><small>من ${ar(total)} يوم دراسة، بلا الجمعة والسبت والإجازات</small></div><div class="stat glow"><span>أيام دراسة مضت</span><b data-countup="${done}">${ar(done)}</b><small>منذ الأحد ٢٣ أغسطس ٢٠٢٦م</small></div><div class="stat glow"><span>الأسبوع منذ بداية العام</span><b data-countup="${wk}">${ar(wk)}</b><small>من ${ar(Math.ceil((diff(ey,sy)+1)/7))} أسبوعاً تقويمياً</small></div><div class="stat glow"><span>أقرب إجازة دراسية</span><b>${nh?dayWord(diff(nh.date,T)):"—"}</b><small>${nh?nh.title+" · "+wd(nh.date)+" "+fGs(nh.date):""}</small></div>`;
}

/* ---------- ramadan imsakiya ---------- */
function renderImsakiya(){
  const len=hMonthLen(1448,9);let rows="";
  for(let i=1;i<=len;i++){const d=H2G(1448,9,i);const p=prayerTimes(d,city[2],city[3]);const now=d.getTime()===T.getTime();const odd=i>=20&&i<=28&&(i+1)%2===1;
    rows+=`<tr class="${now?"next":""}${odd?" oddn":""}"><td class="t">${ar(i)} رمضان<span class="s">${wd(d)} ${fGs(d)}</span></td><td>${fHour(p.fajr)}</td><td>${fHour(p.sunrise)}</td><td>${fHour(p.maghrib)}</td><td>${fHour(p.isha)}</td><td>${dur(p.maghrib-p.fajr)}</td><td>${odd?`ليلة ${ar(i+1)} من العشر الأواخر`:i===len?"ليلة العيد (متوقعة)":"—"}</td></tr>`}
  $("#imsak-rows").innerHTML=rows;
  const f=H2G(1448,9,1),l=H2G(1448,9,len),pf=prayerTimes(f,city[2],city[3]),pl=prayerTimes(l,city[2],city[3]);
  $("#imsak-cap").textContent=`${city[1]} · من ${fGs(f)} إلى ${fGs(l)} ٢٠٢٧م · مدة الصيام في أول يوم ${dur(pf.maghrib-pf.fajr)} وفي آخر يوم ${dur(pl.maghrib-pl.fajr)}. العشاء بعد المغرب بساعتين في رمضان. غيّر المدينة من فصل الصلاة.`;
}

/* ---------- hajj rites ---------- */
const RITES=[[8,"يوم التروية","التوجه إلى منى والمبيت بها."],[9,"يوم عرفة","الوقوف بعرفة، ثم النفرة إلى مزدلفة والمبيت بها."],[10,"يوم النحر","رمي جمرة العقبة والنحر والحلق وطواف الإفاضة، وهو أول أيام عيد الأضحى."],[11,"أول أيام التشريق","رمي الجمرات الثلاث والمبيت بمنى."],[12,"ثاني أيام التشريق","رمي الجمرات، ويجوز للمتعجّل المغادرة قبل الغروب."],[13,"ثالث أيام التشريق","رمي الجمرات لغير المتعجّل، وطواف الوداع عند المغادرة."]];
function renderRites(){$("#rites").innerHTML=RITES.map(([d,t,n])=>{const g=H2G(1448,12,d);const now=g&&g.getTime()===T.getTime();return `<li class="rite glow${now?" now":""}"><b>${ar(d)}</b><h4>${t}</h4><p>${n}</p><p class="g">${wd(g)} ${fG(g)}</p></li>`}).join("")}

/* ---------- prayer: night and other cities ---------- */
function renderNight(){
  const p=prayerTimes(T,city[2],city[3]),n=prayerTimes(addDays(T,1),city[2],city[3]);
  const night=(n.fajr+24)-p.maghrib,mid=p.maghrib+night/2,third=p.maghrib+night*2/3;
  $("#night-panel").innerHTML=`<h3>الليل في ${city[1]}</h3><div class="moon-stats" style="margin:8px 0 0"><div><span>من المغرب إلى الفجر</span><b>${dur(night)}</b></div><div><span>منتصف الليل</span><b>${fHour(mid)}</b></div><div><span>بداية الثلث الأخير</span><b>${fHour(third)}</b></div></div><p class="note" style="margin-top:12px">محسوبة من مغرب اليوم ${fHour(p.maghrib)} إلى فجر الغد ${fHour(n.fajr)}.</p>`;
}
function renderCities(){
  const tm=addDays(T,1);
  $("#cities-panel").innerHTML=`<h3>مغرب اليوم وفجر الغد في المدن</h3><div style="max-height:380px;overflow:auto;border-radius:12px"><table style="min-width:0"><thead><tr><th>المدينة</th><th>مغرب اليوم</th><th>فجر الغد</th></tr></thead><tbody>${CITIES.map(c=>{const a=prayerTimes(T,c[2],c[3]),b=prayerTimes(tm,c[2],c[3]);return `<tr class="${c[0]===city[0]?"next":""}"><td class="t">${c[1]}</td><td>${fHour(a.maghrib)}</td><td>${fHour(b.fajr)}</td></tr>`}).join("")}</tbody></table></div>`;
}

/* ---------- moonrise and moonset ---------- */
function moonRiseSet(day,lat,lng){const t0=startMs(day),st=6;let prev=skyNow(t0,lat,lng).moon.alt-.125,rise=null,set=null;for(let m=st;m<=1440;m+=st){const t=t0+m*6e4;const a=skyNow(t,lat,lng).moon.alt-.125;if(prev<0&&a>=0&&rise===null)rise=t-st*6e4+(-prev)/(a-prev)*st*6e4;if(prev>=0&&a<0&&set===null)set=t-st*6e4+prev/(prev-a)*st*6e4;prev=a}return{rise,set}}
function renderMoonExtra(){
  const rs=moonRiseSet(T,24.7136,46.6753);const th=H(T);const nm=th.m===12?H2G(th.y+1,1,1):H2G(th.y,th.m+1,1);
  $("#moon-extra").innerHTML=`<div><span>شروق القمر اليوم بالرياض</span><b>${rs.rise?fClock(rs.rise):"لا يشرق"}</b></div><div><span>غروب القمر اليوم</span><b>${rs.set?fClock(rs.set):"لا يغرب"}</b></div><div><span>أول ${HM[th.m%12]}</span><b>${nm?fGs(nm):"—"}</b></div>`;
}

/* ---------- eclipse simulator (Makkah contact times) ---------- */
const EC={c1:Date.UTC(2027,7,2,9,1,50),c2:Date.UTC(2027,7,2,10,23,55),mx:Date.UTC(2027,7,2,10,26,32),c3:Date.UTC(2027,7,2,10,29,9),c4:Date.UTC(2027,7,2,11,44,39)};
const RS=1,RM=1.026,ecv=$("#ecl-cv"),ectx=ecv.getContext("2d"),er=$("#ecl-range");
er.value=Math.round((EC.mx-EC.c1)/(EC.c4-EC.c1)*1000);
const eclT=()=>EC.c1+(+er.value)/1000*(EC.c4-EC.c1);
function eclSep(t){const k=RM-RS;if(t<=EC.c2)return k+(RS+RM-k)*(EC.c2-t)/(EC.c2-EC.c1);if(t<=EC.mx)return k*(EC.mx-t)/(EC.mx-EC.c2);if(t<=EC.c3)return k*(t-EC.mx)/(EC.c3-EC.mx);return k+(RS+RM-k)*(t-EC.c3)/(EC.c4-EC.c3)}
function coverFrac(d){const r1=RS,r2=RM;if(d>=r1+r2)return 0;if(d<=r2-r1)return 1;const a=r1*r1*Math.acos((d*d+r1*r1-r2*r2)/(2*d*r1))+r2*r2*Math.acos((d*d+r2*r2-r1*r1)/(2*d*r2))-.5*Math.sqrt((-d+r1+r2)*(d+r1-r2)*(d-r1+r2)*(d+r1+r2));return a/(Math.PI*r1*r1)}
function drawEcl(t){const w=ecv.clientWidth,h=ecv.clientHeight;if(!w||!h)return;const dpr=Math.min(2,devicePixelRatio||1);if(ecv.width!==Math.round(w*dpr)){ecv.width=Math.round(w*dpr);ecv.height=Math.round(h*dpr)}const c=ectx;c.setTransform(dpr,0,0,dpr,0,0);
  const s=eclSep(t),sign=t<EC.mx?-1:1,cov=coverFrac(s),total=s<=RM-RS+1e-9,L=1-Math.pow(cov,3)*.96;
  const g=c.createLinearGradient(0,0,0,h);g.addColorStop(0,`rgb(${Math.round(8+70*L)},${Math.round(14+120*L)},${Math.round(34+170*L)})`);g.addColorStop(1,`rgb(${Math.round(40+190*L)},${Math.round(26+150*L)},${Math.round(30+110*L)})`);c.fillStyle=g;c.fillRect(0,0,w,h);
  if(cov>.96){const r=rng(5);c.fillStyle=`rgba(255,255,255,${Math.min(.8,(cov-.96)*20)})`;for(let i=0;i<46;i++){c.beginPath();c.arc(r()*w,r()*h*.75,r()*1.2+.3,0,Math.PI*2);c.fill()}}
  const cx=w*.5,cy=h*.46,R=Math.min(w,h)*.19;
  if(total){const cg=c.createRadialGradient(cx,cy,R*.95,cx,cy,R*3.3);cg.addColorStop(0,"rgba(235,240,255,.8)");cg.addColorStop(.3,"rgba(200,215,255,.22)");cg.addColorStop(1,"rgba(200,215,255,0)");c.fillStyle=cg;c.fillRect(0,0,w,h);const r=rng(9);c.strokeStyle="rgba(230,236,255,.35)";for(let i=0;i<40;i++){const a=i/40*Math.PI*2+r()*.2,l=R*(1.5+r()*1.7);c.lineWidth=.8+r()*1.8;c.beginPath();c.moveTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);c.lineTo(cx+Math.cos(a)*l,cy+Math.sin(a)*l);c.stroke()}}
  else{const sg=c.createRadialGradient(cx,cy,R*.3,cx,cy,R*3);sg.addColorStop(0,`rgba(255,236,190,${(.15+.75*(1-cov)).toFixed(3)})`);sg.addColorStop(1,"rgba(255,220,150,0)");c.fillStyle=sg;c.fillRect(0,0,w,h)}
  c.fillStyle=total?"#ffffff":"#fff3d0";c.beginPath();c.arc(cx,cy,R,0,Math.PI*2);c.fill();
  const ang=-.42,mx=cx+Math.cos(ang)*s*sign*R,my=cy+Math.sin(ang)*s*sign*R;c.fillStyle="#04060a";c.beginPath();c.arc(mx,my,R*RM,0,Math.PI*2);c.fill();
  if(total){c.strokeStyle="rgba(255,120,110,.7)";c.lineWidth=1.5;c.beginPath();c.arc(mx,my,R*RM,1.9,2.6);c.stroke()}
  const near=Math.min(Math.abs(t-EC.c2),Math.abs(t-EC.c3));if(near<22e3&&!total){const k=1-near/22e3;const da=Math.atan2(cy-my,cx-mx);const px=cx+Math.cos(da)*R,py=cy+Math.sin(da)*R;const dg=c.createRadialGradient(px,py,0,px,py,R*1.1);dg.addColorStop(0,`rgba(255,255,255,${k})`);dg.addColorStop(1,"rgba(255,255,255,0)");c.fillStyle=dg;c.fillRect(px-R*1.2,py-R*1.2,R*2.4,R*2.4)}
  $("#ecl-time").textContent=fClock(t,true);
  $("#ecl-phase").textContent=t<EC.c2?"كسوف جزئي يتزايد":t<=EC.c3?(Math.abs(t-EC.mx)<15e3?"ذروة الكسوف الكلي":"كسوف كلي: الشمس محجوبة تماماً"):"كسوف جزئي يتناقص";
  $("#ecl-cov").textContent=total?"القمر يغطي قرص الشمس كاملاً وتظهر الهالة الشمسية":`القمر يغطي ${ar(Math.round(cov*100))}٪ من قرص الشمس`;
  er.setAttribute("aria-valuetext",`${fClock(t,true)}، ${$("#ecl-phase").textContent}`);
}
er.addEventListener("input",()=>{if(eclPlay){cancelAnimationFrame(eclPlay);eclPlay=null;$("#ecl-play").textContent="شغّل الكسوف"}drawEcl(eclT())});
let eclPlay=null;
$("#ecl-play").addEventListener("click",()=>{const b=$("#ecl-play");if(eclPlay){cancelAnimationFrame(eclPlay);eclPlay=null;b.textContent="شغّل الكسوف";return}if(+er.value>=1000)er.value=0;b.textContent="أوقف";let last=performance.now();const step=now=>{const dt=now-last;last=now;let v=+er.value;const t=eclT();const slow=t>EC.c2-40e3&&t<EC.c3+40e3?.18:1;v=Math.min(1000,v+dt*.055*slow);er.value=v;drawEcl(eclT());if(v<1000)eclPlay=requestAnimationFrame(step);else{eclPlay=null;b.textContent="شغّل الكسوف"}};eclPlay=requestAnimationFrame(step)});
if(window.ResizeObserver)new ResizeObserver(()=>drawEcl(eclT())).observe(ecv);

/* ---------- calendar: keyboard and the next twelve months ---------- */
$("#cal").addEventListener("keydown",ev=>{const b=ev.target.closest&&ev.target.closest(".day");if(!b)return;const step={ArrowLeft:1,ArrowRight:-1,ArrowDown:7,ArrowUp:-7}[ev.key];if(step===undefined)return;ev.preventDefault();const nd=addDays(iso(b.dataset.d),step),ym=nd.getUTCFullYear()*12+nd.getUTCMonth()+1;if(ym<CMIN[0]*12+CMIN[1]||ym>CMAX[0]*12+CMAX[1])return;selD=isoOf(nd);if(nd.getUTCMonth()+1!==cm||nd.getUTCFullYear()!==cy){cy=nd.getUTCFullYear();cm=nd.getUTCMonth()+1;renderMonth()}else{document.querySelectorAll(".day").forEach(x=>x.classList.toggle("sel",x.dataset.d===selD));renderDetail()}const nb=document.querySelector(`.day[data-d="${selD}"]`);if(nb)nb.focus()});
function renderYear(){let h="";for(let k=0;k<12;k++){const y=T.getUTCFullYear()+Math.floor((T.getUTCMonth()+k)/12),m=(T.getUTCMonth()+k)%12+1;if(y*12+m>CMAX[0]*12+CMAX[1])break;const first=D(y,m,1),n=new Date(Date.UTC(y,m,0)).getUTCDate(),hm=H(first);let cells="";for(let i=0;i<first.getUTCDay();i++)cells+='<i class="b"></i>';
  for(let i=1;i<=n;i++){const d=D(y,m,i),key=isoOf(d),w=d.getUTCDay();const c=[];if(offDays.has(key))c.push("o");else if((dayMap.get(key)||[]).some(e=>e.cat!=="pay"))c.push("e");else if(w===5||w===6)c.push("w");if(d.getTime()===T.getTime())c.push("t");cells+=`<i class="${c.join(" ")}"></i>`}
  h+=`<button type="button" class="ym" data-y="${y}" data-m="${m}" aria-label="افتح ${GM[m-1]} ${ar(y)} في التقويم"><h5>${GM[m-1]} ${ar(y)}<small>${HM[hm.m-1]}</small></h5><div class="g7">${cells}</div></button>`}
  $("#year").innerHTML=h}
$("#year").addEventListener("click",ev=>{const b=ev.target.closest(".ym");if(!b)return;cy=+b.dataset.y;cm=+b.dataset.m;renderMonth();$("#month .cal-head").scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"})});

/* ---------- your own countdowns (kept in this browser) ---------- */
const okDate=v=>{if(!/^(19|20|21)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(String(v)))return false;const t=iso(v);return !isNaN(t)&&isoOf(t)===v};
let CDS=[];try{const raw=JSON.parse(store.get("tw-cds")||"[]");if(Array.isArray(raw))CDS=raw.filter(c=>c&&typeof c.n==="string"&&okDate(c.d)).slice(0,12).map(c=>({n:c.n.slice(0,40),d:c.d}))}catch(e){CDS=[]}
const cdDate=$("#cd-date");cdDate.min=isoOf(T);cdDate.value=isoOf(addDays(T,30));
function saveCds(){store.set("tw-cds",JSON.stringify(CDS.slice(0,12)))}
function renderCds(){$("#cd-list").innerHTML=CDS.length?CDS.map((c,i)=>{const d=iso(c.d);return `<li><b></b><button type="button" data-del="${i}"><svg aria-hidden="true"><use href="#i-x"/></svg></button><span class="cdv" data-left="${startMs(d)}"></span><small>${wd(d)} ${fG(d)} · ${fH(d)}</small></li>`}).join(""):'<li style="grid-template-columns:1fr"><small>أضف أول عدّاد لمناسبتك، مثل موعد سفر أو مناسبة عائلية، ويبقى محفوظاً في متصفحك.</small></li>';if(CDS.length)[...$("#cd-list").children].forEach((li,i)=>{const c=CDS[i];li.querySelector("b").textContent=c.n;li.querySelector("button").setAttribute("aria-label","احذف عدّاد "+c.n)});updCds()}
function updCds(){const now=Date.now();document.querySelectorAll("[data-left]").forEach(el=>{const ms=+el.dataset.left-now;if(ms<=0){el.textContent="حان الموعد";return}const d=Math.floor(ms/DAY),h=Math.floor(ms%DAY/36e5),m=Math.floor(ms%36e5/6e4);const parts=[d?dayWord(d):"",h?unitWord(h,"ساعة واحدة","ساعتان","ساعات","ساعة"):"",m?unitWord(m,"دقيقة واحدة","دقيقتان","دقائق","دقيقة"):""].filter(Boolean);const s=parts.length?parts.join(" و"):"أقل من دقيقة";if(el.textContent!==s)el.textContent=s})}
$("#f-cd").addEventListener("submit",ev=>{ev.preventDefault();const n=$("#cd-name").value.trim(),d=cdDate.value;if(!n){toast("اكتب اسم المناسبة أولاً.");$("#cd-name").focus();return}if(!okDate(d)){toast("اختر تاريخاً صحيحاً للمناسبة.");cdDate.focus();return}if(CDS.length>=12){toast("الحد الأقصى ١٢ عدّاداً. احذف واحداً أولاً.");return}CDS.unshift({n:n.slice(0,40),d:d});saveCds();renderCds();$("#cd-name").value="";toast("أُضيف العدّاد: "+n)});
$("#cd-list").addEventListener("click",ev=>{const b=ev.target.closest("[data-del]");if(!b)return;CDS.splice(+b.dataset.del,1);saveCds();renderCds();toast("حُذف العدّاد")});

/* ---------- search palette ---------- */
const norm=v=>String(v).replace(/[ً-ٰٟـ]/g,"").replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي").toLowerCase();
let palOpen=false,palItems=[],palSel=0;
function palIndex(){const secs=[...document.querySelectorAll("main > section")].map(x=>({type:"sec",id:x.id,title:((x.querySelector("h1,h2")||{}).textContent||"").trim(),sub:"فصل · "+(x.dataset.scene||"")}));const evs=EV.filter(e=>!e.staff).map(e=>({type:"ev",e:e,title:e.title,sub:`${wd(e.date)} ${fGs(e.date)} ${ar(e.date.getUTCFullYear())} · ${fHs(e.date)}`,cat:e.cat}));return secs.concat(evs)}
function palFilter(){const q=norm($("#pal-in").value.trim());const words=q.split(/\s+/).map(w=>w.replace(/^(ال|بال|وال)(?=..)/,"")).filter(Boolean);const all=palIndex();palItems=(q?all.filter(x=>{const t=norm(x.title+" "+x.sub);return words.every(w=>t.includes(w))}):all.filter(x=>x.type==="sec").concat(all.filter(x=>x.type==="ev"&&(x.e.endD||x.e.date)>=T).slice(0,8))).slice(0,40);palSel=0;
  $("#pal-list").innerHTML=palItems.length?palItems.map((x,i)=>`<li role="option" id="pal-${i}" aria-selected="${i===0}" data-i="${i}" style="--cat:var(--c-${x.cat||"rel"})"><i${x.type==="sec"?' style="background:var(--gold)"':""}></i><span>${esc(x.title)}</span><small>${esc(x.sub)}</small></li>`).join(""):'<li aria-disabled="true"><span class="note">لا توجد نتائج. جرّب كلمة أخرى مثل: رمضان، الراتب، الكسوف.</span></li>';$("#pal-in").setAttribute("aria-activedescendant",palItems.length?"pal-0":"")}
function openPal(){const pal=$("#palette");pal.hidden=false;palOpen=true;topbar.classList.remove("hide");$("#pal-in").value="";palFilter();setTimeout(()=>$("#pal-in").focus(),30)}
function closePal(){$("#palette").hidden=true;palOpen=false;$("#search-btn").focus({preventScroll:true})}
function palGo(i){const x=palItems[i];if(!x)return;closePal();if(x.type==="sec"){document.getElementById(x.id).scrollIntoView({behavior:reduce?"auto":"smooth"});return}const d=x.e.date,ym=d.getUTCFullYear()*12+d.getUTCMonth()+1;if(ym<CMIN[0]*12+CMIN[1]||ym>CMAX[0]*12+CMAX[1]){document.getElementById("upcoming").scrollIntoView({behavior:reduce?"auto":"smooth"});return}cy=d.getUTCFullYear();cm=d.getUTCMonth()+1;selD=isoOf(d);renderMonth();$("#month .cal-head").scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});setTimeout(()=>{const b=document.querySelector(`.day[data-d="${selD}"]`);if(b)b.focus({preventScroll:true})},900)}
$("#search-btn").addEventListener("click",openPal);
$("#pal-in").addEventListener("input",palFilter);
$("#pal-in").addEventListener("keydown",ev=>{if(ev.key==="ArrowDown"||ev.key==="ArrowUp"){ev.preventDefault();if(!palItems.length)return;palSel=(palSel+(ev.key==="ArrowDown"?1:-1)+palItems.length)%palItems.length;document.querySelectorAll("#pal-list li[data-i]").forEach((li,i)=>li.setAttribute("aria-selected",String(i===palSel)));$("#pal-in").setAttribute("aria-activedescendant","pal-"+palSel);const li=$("#pal-"+palSel);if(li)li.scrollIntoView({block:"nearest"})}else if(ev.key==="Enter"){ev.preventDefault();palGo(palSel)}});
$("#pal-list").addEventListener("click",ev=>{const li=ev.target.closest("li[data-i]");if(li)palGo(+li.dataset.i)});
$("#palette").addEventListener("click",ev=>{if(ev.target.id==="palette")closePal()});
document.addEventListener("keydown",ev=>{if(ev.key==="Escape"&&palOpen){closePal();return}const tag=(ev.target.tagName||"").toLowerCase();if(tag==="input"||tag==="select"||tag==="textarea")return;if(ev.key==="/"||((ev.ctrlKey||ev.metaKey)&&String(ev.key).toLowerCase()==="k")){ev.preventDefault();openPal()}});

/* ---------- countdown digits decode ---------- */
function scramble(el){const bs=el.querySelectorAll("b");let n=0;bs.forEach(b=>b.dataset.lock="1");const id=setInterval(()=>{bs.forEach(b=>{b.textContent=ar(Math.floor(Math.random()*90+10))});if(++n>14){clearInterval(id);bs.forEach(b=>delete b.dataset.lock);tick()}},45)}

function chime(){}
/* ---------- the calendar leaf tears off, like the wall ruznama ---------- */
$("#tear").addEventListener("click",()=>{const el=$("#leaf");const r=el.getBoundingClientRect();
  if(window.gsap&&!reduce){const c=el.cloneNode(true);c.removeAttribute("id");c.querySelectorAll("[id]").forEach(x=>x.removeAttribute("id"));c.classList.add("leaf-fly");Object.assign(c.style,{top:r.top+"px",left:r.left+"px",width:r.width+"px",height:r.height+"px"});document.querySelector(".site").appendChild(c);
    const dir=Math.random()<.5?-1:1;gsap.timeline({onComplete:()=>c.remove()}).to(c,{rotation:dir*6,rotationX:-24,duration:.22,ease:"power2.out",transformPerspective:900}).to(c,{y:innerHeight-r.top+120,x:dir*(90+Math.random()*120),rotation:dir*(38+Math.random()*30),rotationX:-70,duration:1.05,ease:"power2.in"});}
  leafOff=leafOff>=6?0:leafOff+1;renderHero();$("#tear").textContent=leafOff===0?"انزع الورقة":leafOff===6?"ارجع إلى اليوم":"انزع الورقة التالية"});

/* ---------- pencilled notes pinned to the real land and sky ---------- */
window.__tw.pins=[{x:1300,z:10350,h:9,from:7.7,to:8.3,t:"مجلس تحت النجوم",s:"حيّاك الله عند النار"},{x:2640,z:9480,h:128,from:5.72,to:6.42,t:"علم لا يُنكَّس",s:"سارية تخيّلية بطول ١٢٨ متراً"},{x:-3985,z:-1228,h:18,from:-.4,to:1.6,t:"حافة جبل طويق",s:"الموقع الحقيقي على الخريطة"},{x:2980,z:9730,h:32,from:7.3,to:10.7,t:"بلدة نجدية وقصرها",s:"مشهد تخيّلي، لا بلدة حقيقية هنا"},{x:-6040,z:2330,h:8,from:1.5,to:2.6,t:"بيوت الشعر",s:"مضارب وقهوة ونار"},{ra:6.399,dec:-52.7,from:10.6,to:11.45,night:1,t:"نجم سهيل",s:"«إذا طلع سهيل برد الليل»"},{ra:3.79,dec:24.1,from:-1,to:15.5,night:1,t:"الثريا",s:"في موضعها الحقيقي"},{ra:17.76,dec:-29,from:13.6,to:14.4,night:1,t:"قلب درب التبانة",s:""}];
window.__tw.pins.forEach(p=>{const e=document.createElement("div");e.className="pin";e.setAttribute("aria-hidden","true");const w=Math.random()*10;e.innerHTML=`<svg viewBox="0 0 70 92"><path d="M2 92C8 ${66+w} ${20+w} 44 62 18"/><path d="M2 92m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg><span>${p.t}${p.s?`<small>${p.s}</small>`:""}</span>`;document.querySelector(".site").appendChild(e);p.el=e});

/* ---------- honest resolution note: click to choose ---------- */
{const q=$("#qbadge"),names={auto:"تلقائي","4k":"٤K ثابت",fast:"أخف"},seq=["auto","4k","fast"];const upd=st=>{q.hidden=false;q.innerHTML=`<b>${ar(st.w)}×${ar(st.h)}</b> · ${names[st.mode]}`;q.setAttribute("aria-label",`دقة العرض ${st.w} في ${st.h}، الوضع ${names[st.mode]}. اضغط للتبديل`)};window.__tw.onResolution=upd;q.addEventListener("click",()=>{const t=window.__tw;if(!t.stats)return;const m=seq[(seq.indexOf(t.stats.mode)+1)%3];t.setQuality(m);upd(t.stats);toast(m==="4k"?"العرض الآن بدقة ٤K ثابتة، يحتاج جهازاً قوياً":m==="fast"?"وضع أخف للأجهزة المحدودة":"الدقة تتكيف تلقائياً مع جهازك")})}

/* ---------- a Najdi door, painted in the old way, opens onto the mountain ---------- */
{const pal=["#8c2f18","#24405f","#b58a33","#1c120a"];
 const tri=(y,h,n,o)=>{let g="";const w=400/n;for(let i=0;i<n;i++){const c=pal[(i+o)%3];g+=`<path d="M${50+i*w} ${y+h}L${50+i*w+w/2} ${y}L${50+i*w+w} ${y+h}Z" fill="${c}"/>`}return g};
 const ros=(y,r,n)=>{let g="";const st=400/n;for(let i=0;i<n;i++){const cx=50+st*(i+.5),cy=y+r+6;g+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#1c120a"/><circle cx="${cx}" cy="${cy}" r="${r-5}" fill="#e8dcc0"/>`;for(let k=0;k<8;k++){const a=k/8*6.283,col=pal[k%3];g+=`<path d="M${cx} ${cy}L${cx+Math.cos(a-.28)*(r-9)} ${cy+Math.sin(a-.28)*(r-9)}L${cx+Math.cos(a+.28)*(r-9)} ${cy+Math.sin(a+.28)*(r-9)}Z" fill="${col}"/>`}g+=`<circle cx="${cx}" cy="${cy}" r="5" fill="#b58a33"/>`}return g};
 const door=()=>{let g=`<rect width="500" height="1000" fill="#3a2110"/>`;for(let x=0;x<500;x+=62)g+=`<rect x="${x}" width="2.4" height="1000" fill="#1d0f06" opacity=".75"/><rect x="${x+14}" width="1" height="1000" fill="#5b3a1e" opacity=".5"/>`;
   g+=`<rect x="40" y="26" width="420" height="948" fill="#e8dcc0"/><rect x="46" y="32" width="408" height="936" fill="none" stroke="#1c120a" stroke-width="3"/>`;let y=44,o=0;
   while(y<930){const band=o%4;if(band===0){g+=tri(y,50,10,o);y+=58}else if(band===1){g+=`<rect x="50" y="${y}" width="400" height="9" fill="#1c120a"/><rect x="50" y="${y+13}" width="400" height="4" fill="#8c2f18"/>`;y+=25}else if(band===2){g+=ros(y,44,4);y+=106}else{g+=`<g transform="translate(0 ${2*y+38}) scale(1 -1)">${tri(y,38,14,o+1)}</g>`;y+=46}o++}
   for(let i=0;i<9;i++){const yy=60+i*110;[30,470].forEach(x=>g+=`<circle cx="${x}" cy="${yy}" r="7" fill="#b58a33"/><circle cx="${x-2}" cy="${yy-2}" r="2.4" fill="#f3dfa2"/>`)}
   return g};
 const ring=`<g fill="none" stroke="#c9983c" stroke-width="9"><circle cx="478" cy="520" r="30"/></g><circle cx="478" cy="480" r="10" fill="#c9983c"/>`;
 const svg=(m)=>`<svg viewBox="0 0 500 1000" preserveAspectRatio="xMaxYMid slice" style="${m?"transform:scaleX(-1)":""}">${door()}${ring}</svg>`;
 $("#door-l").innerHTML=svg(false);$("#door-r").innerHTML=svg(true);
 const raise=()=>{const i=$("#intro");if(i&&!i.classList.contains("out")){i.classList.add("out");setTimeout(()=>i.remove(),2500)}};{const L=["حيّاك الله","نفرش المجلس","نصبّ القهوة","نفتح الباب"];let li=0;const el=$("#door-line");const id=setInterval(()=>{li=Math.min(L.length-1,li+1);if(el)el.textContent=L[li];if(li===L.length-1)clearInterval(id)},1100)}window.__tw.worldReady=()=>setTimeout(raise,350);setTimeout(raise,14000)}

/* ---------- chapter ordinals and gilded medallions on the woven band ---------- */
{const ORD=["الأول","الثاني","الثالث","الرابع","الخامس","السادس","السابع","الثامن","التاسع","العاشر","الحادي عشر","الثاني عشر","الثالث عشر","الرابع عشر","الخامس عشر"];
 const IC={upcoming:'<path d="M7 3h10M7 21h10M8 3c0 5 8 6 8 9s-8 4-8 9M16 3c0 5-8 6-8 9s8 4 8 9"/>',school:'<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1zM12 6v13"/>',ramadan:'<path d="M12 2v3M9 5h6l2 4v8l-2 3H9l-2-3V9zM7 9h10M7 17h10M12 9v8"/>',eid:'<path d="M16 4a8 8 0 1 0 0 16 6.5 6.5 0 1 1 0-16zM18 9l.8 1.9 2 .2-1.5 1.3.5 2-1.8-1-1.8 1 .5-2-1.5-1.3 2-.2z"/>',national:'<path d="M12 22c0-7 .4-10 1-13M13 9C11 6 7 6 4 8M13 9c2-3 6-3 8-1M13 9c-3-1-6 0-7 4M13 9c3-1 6 0 6 4M13 9c0-3-1-5-3-6"/>',kingdom:'<path d="M12 22V10M12 10C10 6 7 5 4 6M12 10c2-4 5-5 8-4M12 10c-1-4 0-6 1-8M5 21c5-1 10-5 14-11M19 21C14 20 9 16 5 10"/>',salary:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3 3 7 3s7-1.300 7-3V6M5 12v6c0 1.700 3 3 7 3s7-1.300 7-3v-6"/>',majlis:'<path d="M9 3l3 3M6 8c2-1 4-1 6 0v1h1c3 0 4 3 2 6l-2 3H7C5 15 4 11 6 8zM4 21h14"/>',prayer:'<path d="M12 2l1.500 3h-3zM10 5h4l1 16H9zM8 21h8M9.600 11h4.800"/>',moon:'<path d="M15 3a9 9 0 1 0 6 13 7.500 7.500 0 0 1-6-13z"/>',seasons:'<path d="M12 3v6M9 6h6M10 4l4 4M14 4l-4 4M5 18a4 4 0 0 1 1-7.800A5 5 0 0 1 15.500 11 3.500 3.500 0 0 1 18 18z"/>',fasting:'<path d="M12 3c-1 2-1 3 0 4M7 13c0-4 2-6 5-6s5 2 5 6-2 8-5 8-5-4-5-8z"/>',sky:'<circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',month:'<path d="M4 6h16v15H4zM4 10h16M8 3v5M16 3v5M8 14h2M14 14h2M8 18h2M14 18h2"/>',tools:'<path d="M9 21h8l-1-4c2-3 2-7-1-9l1-3-3 1-1-2-2 3C7 8 7 13 9 17zM7 10C4 10 3 8 3 6M17 12c2 0 4-2 4-4"/>'};
 const ids=Object.keys(IC);ids.forEach((id,i)=>{const sec=document.getElementById(id);if(!sec)return;const tc=sec.querySelector(".title-card"),sb=sec.querySelector(".sec-body");if(tc){const o=document.createElement("p");o.className="ord";o.textContent="الفصل "+ORD[i];tc.prepend(o)}if(sb){const m=document.createElement("div");m.className="medal";m.setAttribute("aria-hidden","true");m.innerHTML=`<svg viewBox="0 0 24 24">${IC[id]}</svg>`;sb.style.position="relative";sb.prepend(m)}})}

/* ---------- countdown ---------- */
function rollDigit(b,s){b.textContent=s;if(!b.animate||motionOff)return;b.animate(reduce?[{opacity:.35},{opacity:1}]:[{transform:"translateY(-45%)",opacity:0,filter:"blur(4px)"},{transform:"none",opacity:1,filter:"blur(0)"}],{duration:reduce?180:380,easing:"cubic-bezier(.16,1,.3,1)"})}
let lastMinute=-1,lastNext=null;
function tick(){
  const t=today();if(t.getTime()!==T.getTime()){T=t;renderAll();return}
  const now=Date.now();
  document.querySelectorAll("[data-target]").forEach(el=>{let ms=Math.max(0,+el.dataset.target-now);const v={d:Math.floor(ms/DAY),h:Math.floor(ms%DAY/36e5),m:Math.floor(ms%36e5/6e4),s:Math.floor(ms%6e4/1e3)};
    el.querySelectorAll("[data-u]").forEach(b=>{if(b.dataset.lock)return;const u=b.dataset.u;const s=u==="d"?ar(v.d):ar2(v[u]);if(b.textContent!==s)rollDigit(b,s)})});
  renderClock();updCds();
  const np=nextPrayer();
  if(np){const l=Math.max(0,np.ms-now);const s=`${ar2(Math.floor(l/36e5))}:${ar2(Math.floor(l%36e5/6e4))}:${ar2(Math.floor(l%6e4/1e3))}`;const el=$("#pr-left");if(el.textContent!==s)el.textContent=s;}
  const mnt=Math.floor(now/6e4);if(mnt!==lastMinute){lastMinute=mnt;const key=np?np.ms:0;if(key!==lastNext){lastNext=key;renderPrayer();renderQuick()}else renderDial();renderSkyCap()}
}

/* ---------- the Kingdom chapter ---------- */
const readJson=id=>{const el=document.getElementById(id);if(!el)return null;try{return JSON.parse(el.textContent)}catch(e){return null}};
const FLAG_ART=readJson("a-flag"),MAP=readJson("a-map");window.__tw.flag=FLAG_ART;window.__tw.map=MAP;
/* palm and two swords, drawn by hand for this site: [path, stroke width] */
const EMB=[["M100 124C98 96 99 74 100 54",8],["M100 54C84 36 62 34 44 46",5.5],["M100 54C80 48 58 54 46 72",5.5],["M100 54C86 58 72 70 66 90",5.5],["M100 54C90 32 76 18 58 16",5.5],["M100 54C116 36 138 34 156 46",5.5],["M100 54C120 48 142 54 154 72",5.5],["M100 54C114 58 128 70 134 90",5.5],["M100 54C110 32 124 18 142 16",5.5],["M100 54C100 38 100 22 100 8",5.5],["M90 68h.1M110 68h.1M84 76h.1M116 76h.1",8],["M166 188C126 176 72 158 26 118",6.5],["M34 188C74 176 128 158 174 118",6.5],["M148.5 196L155.5 172",6],["M51.5 196L44.5 172",6],["M166 188L184 193",8],["M34 188L16 193",8]];window.__tw.emblem=EMB;
{const f=$("#kg-flag");if(f&&FLAG_ART)f.innerHTML=`<svg viewBox="0 0 900 600" aria-hidden="true">${FLAG_ART.map(p=>`<path transform="matrix(${p.slice(0,6).join(" ")})" d="${p[6]}" fill="${p[7]}"/>`).join("")}</svg>`}
/* dua: Amen is counted on this device only */
{let n=/^\d{1,7}$/.test(store.get("tw-amen")||"")?+store.get("tw-amen"):0;const out=$("#amen-n"),b=$("#amen");const show=()=>{out.textContent=n?`قلتها من هذا الجهاز ${n===1?"مرة واحدة":n===2?"مرتين":ar(n)+((n%100>=3&&n%100<=10)?" مرات":" مرة")}. تقبّل الله.`:""};show();
 b.addEventListener("click",()=>{n=Math.min(9999999,n+1);store.set("tw-amen",String(n));show();b.classList.remove("go");void b.offsetWidth;b.classList.add("go");if(navigator.vibrate&&navigator.userActivation&&navigator.userActivation.isActive)try{navigator.vibrate(18)}catch(e){}if(window.__tw.amen)window.__tw.amen()});
 $("#dua-copy").addEventListener("click",()=>{const t=[...document.querySelectorAll(".kg-dua-list p")].map(p=>p.textContent).join("\n\n");copyText(t+"\n\nآمين");toast("نُسخ الدعاء")})}
/* regions: ISO code, name, seat, lat, lng */
const REG=[["SA-01","الرياض","الرياض",24.7136,46.6753],["SA-02","مكة المكرمة","مكة المكرمة",21.4225,39.8262],["SA-03","المدينة المنورة","المدينة المنورة",24.4686,39.6142],["SA-04","المنطقة الشرقية","الدمام",26.4207,50.0888],["SA-05","القصيم","بريدة",26.326,43.975],["SA-06","حائل","حائل",27.5114,41.7208],["SA-07","تبوك","تبوك",28.3838,36.555],["SA-08","الحدود الشمالية","عرعر",30.9753,41.0381],["SA-09","جازان","جازان",16.8892,42.5511],["SA-10","نجران","نجران",17.4933,44.1277],["SA-11","الباحة","الباحة",20.0129,41.4677],["SA-12","الجوف","سكاكا",29.9697,40.2064],["SA-14","عسير","أبها",18.2164,42.5053]];
const HER=[["الحِجر، العلا",2008,26.79,37.95],["حي الطريف بالدرعية",2010,24.734,46.575],["جدة التاريخية",2014,21.483,39.187],["الفنون الصخرية في حائل",2015,28.0,40.93],["واحة الأحساء",2018,25.43,49.62],["منطقة حِمى الثقافية، نجران",2021,18.25,44.45],["عروق بني معارض",2023,19.7,45.3],["منطقة الفاو الأثرية",2024,19.78,45.14]];
let kgSel=0,kgHer=-1,ADHAN=[],adhanFor=0;
const prj=(lat,lng)=>[(lng-MAP.minx)*MAP.cos*MAP.sc,(MAP.maxy-lat)*MAP.sc];
const lerpC=(a,b,t)=>`rgb(${a.map((v,i)=>Math.round(v+(b[i]-v)*t)).join(",")})`;
function buildAdhan(){if(adhanFor===T.getTime())return;adhanFor=T.getTime();ADHAN=[];[T,addDays(T,1)].forEach(d=>REG.forEach((r,i)=>{const p=prayerTimes(d,r[3],r[4]);[["الفجر",p.fajr],["الظهر",p.dhuhr],["العصر",p.asr],["المغرب",p.maghrib],["العشاء",p.isha]].forEach(x=>ADHAN.push({r:i,n:x[0],h:x[1],ms:hourMs(d,x[1])}))}));ADHAN.sort((a,b)=>a.ms-b.ms)}
function inMin(ms){const m=Math.max(0,Math.round((ms-Date.now())/6e4));if(m<1)return"الآن";return "بعد "+(m<60?unitWord(m,"دقيقة واحدة","دقيقتين","دقائق","دقيقة"):unitWord(Math.round(m/60),"ساعة واحدة","ساعتين","ساعات","ساعة"))}
function kgShade(){const now=Date.now();document.querySelectorAll("#kg-map .rg").forEach(p=>{const r=REG[+p.dataset.i],a=skyNow(now,r[3],r[4]).sun.alt;const t=Math.max(0,Math.min(1,(a+8)/16));p.style.fill=lerpC([13,42,58],[201,163,90],t*t*(3-2*t))});
 buildAdhan();const nx=ADHAN.find(a=>a.ms>now);if(nx)$("#kg-wave").innerHTML=`الأذان القادم في المملكة: <b>${REG[nx.r][1]}</b>، ${nx.n} ${fHour(nx.h)}، ${inMin(nx.ms)}. يبدأ كل وقت من الشرق ثم يمضي غرباً.`;kgInfo()}
function kgInfo(){const r=REG[kgSel],p=prayerTimes(T,r[3],r[4]),now=Date.now(),s=skyNow(now,r[3],r[4]).sun.alt;const nx=ADHAN.find(a=>a.r===kgSel&&a.ms>now);
 $("#kg-info").innerHTML=`<h4>${r[1]}</h4><p class="sub2">${r[1]===r[2]?"مقر الإمارة في المدينة نفسها":"مقر الإمارة: "+r[2]}. الشمس الآن ${s>0?"فوق":"تحت"} الأفق بـ${ar(Math.abs(Math.round(s)))}°</p><p class="sub2">${SPEC[r[0]]||""}</p><dl class="kg-rows">${nx?`<div><dt>الأذان القادم</dt><dd>${nx.n} ${fHour(nx.h)}</dd></div>`:""}<div><dt>الفجر</dt><dd>${fHour(p.fajr)}</dd></div><div><dt>المغرب</dt><dd>${fHour(p.maghrib)}</dd></div><div><dt>اتجاه القبلة</dt><dd>${ar(Math.round(qibla(r[3],r[4])))}° من الشمال</dd></div><div><dt>المسافة إلى مكة</dt><dd>${ar(Math.round(distKm(r[3],r[4])))} كم</dd></div></dl>${kgHer>=0?`<p class="sub2" style="margin-top:12px">★ ${HER[kgHer][0]}، سُجّل في التراث العالمي عام ${ar(HER[kgHer][1])}م. الموضع على الخريطة تقريبي.</p>`:""}`}
function renderKingdom(){if(!MAP)return;const svg=$("#kg-map");if(!svg.firstChild){svg.setAttribute("viewBox",`0 0 ${MAP.w} ${MAP.h}`);
   svg.innerHTML=REG.map((r,i)=>`<path class="rg" data-i="${i}" tabindex="0" role="button" aria-label="منطقة ${r[1]}" d="${MAP.r[r[0]]||""}"/>`).join("")+REG.map(r=>{const[x,y]=prj(r[3],r[4]);return `<circle class="cap" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5"/><text class="capt" x="${x.toFixed(1)}" y="${(y-11).toFixed(1)}">${r[1]}</text>`}).join("")+HER.map((h,i)=>{const[x,y]=prj(h[2],h[3]);return `<path class="her" data-h="${i}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" d="M0-11 3-3.4 11-3.4 4.6 1.4 7 9.4 0 4.6-7 9.4-4.6 1.4-11-3.4-3-3.4Z"><title>${h[0]}</title></path>`}).join("");
   const pick=i=>{kgSel=i;kgHer=-1;svg.querySelectorAll(".rg").forEach(p=>p.classList.toggle("on",+p.dataset.i===i));svg.querySelectorAll(".her").forEach(p=>p.classList.remove("on"));kgInfo()};
   const nearest=(lat,lng)=>{let b=0,bd=1e9;REG.forEach((r,i)=>{const d=Math.hypot(r[3]-lat,r[4]-lng);if(d<bd){bd=d;b=i}});return b};
   const star=i=>{svg.classList.remove("no-her");$("#kg-her-t").checked=true;pick(nearest(HER[i][2],HER[i][3]));kgHer=i;svg.querySelectorAll(".her").forEach(p=>p.classList.toggle("on",+p.dataset.h===i));kgInfo()};
   svg.addEventListener("click",ev=>{const h=ev.target.closest("[data-h]");if(h){star(+h.dataset.h);return}const g=ev.target.closest("[data-i]");if(g)pick(+g.dataset.i)});
   svg.addEventListener("keydown",ev=>{if(ev.key!=="Enter"&&ev.key!==" ")return;const g=ev.target.closest("[data-i]");if(g){ev.preventDefault();pick(+g.dataset.i)}});
   $("#kg-her-t").addEventListener("change",ev=>svg.classList.toggle("no-her",!ev.target.checked));
   $("#kg-her").innerHTML=HER.map((h,i)=>`<li><button type="button" data-hi="${i}">${h[0]}</button><span>${ar(h[1])}م</span></li>`).join("");
   $("#kg-her").addEventListener("click",ev=>{const b=ev.target.closest("[data-hi]");if(!b)return;star(+b.dataset.hi);svg.scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"})});
   pick(0);
   const FUT=[["٣٠٠ عام على التأسيس","يوم التأسيس ٢٢ فبراير ٢٠٢٧، ثلاثة قرون منذ ١٧٢٧م.",D(2027,2,22)],["كأس آسيا ٢٠٢٧","٧ يناير إلى ٥ فبراير ٢٠٢٧، في الرياض وجدة والخبر.",D(2027,1,7)],["إكسبو ٢٠٣٠ الرياض","من ١ أكتوبر ٢٠٣٠ إلى ٣١ مارس ٢٠٣١.",D(2030,10,1)]];
   $("#kg-future").innerHTML=FUT.map(f=>`<div class="fut"><h4>${f[0]}</h4><p>${f[1]}</p>${countHTML(startMs(f[2]))}</div>`).join("")+`<div class="fut"><h4>كأس العالم ٢٠٣٤</h4><p>المملكة مستضيفة بقرار FIFA في ديسمبر ٢٠٢٤. لم يُعلن موعد البطولة بعد، فلا عدّاد هنا حتى يُعلن.</p></div>`;
   const CUPS=[["الهيف","يشربه المضيف أولاً، ليطمئن ضيفه إلى القهوة."],["الكيف","فنجال الضيف الأول، للمزاج والكيف."],["الضيف","إكراماً للضيف وحقاً من حقوقه."],["السيف","عهد بالوقوف مع المضيف عند الشدة."]];
   $("#kg-coffee").innerHTML=CUPS.map((c,i)=>`<button type="button" class="kg-cup" data-c="${i}" aria-label="فنجال ${c[0]}"><svg viewBox="0 0 60 44" aria-hidden="true"><path d="M8 6h44c0 18-7 30-22 30S8 24 8 6Z" fill="#f4ecd8" stroke="#7a2d17" stroke-width="2"/><path class="fill" d="M12 12h36c-1 12-8 20-18 20s-17-8-18-20Z" fill="#b98a3e"/><path d="M8 6h44M22 41h16" fill="none" stroke="#b58a33" stroke-width="2.4" stroke-linecap="round"/></svg><b>${c[0]}</b></button>`).join("");
   $("#kg-coffee").addEventListener("click",ev=>{const b=ev.target.closest("[data-c]");if(!b)return;b.classList.add("on");$("#kg-cup-note").textContent=CUPS[+b.dataset.c][1]});
   $("#kg-cup-note").textContent="الفناجيل الأربعة كما تعرفها مجالس نجد.";
   setInterval(()=>{if(!document.hidden)kgShade()},3e4)}
 kgShade()}

/* ---------- saving a generated file: through the viewer when it offers saving, otherwise the browser ---------- */
const dlCap=()=>{try{return window.claude&&claude.use?claude.use("downloads"):Promise.resolve(null)}catch(e){return Promise.resolve(null)}};
async function saveFile(filename,data){let cap=null;try{cap=await Promise.race([dlCap(),new Promise(r=>setTimeout(()=>r(null),1500))])}catch(e){}
 if(cap){try{await cap.save({filename,data});toast("حُفظ الملف");return}catch(e){if(e&&e.code==="declined")return;toast("تعذّر الحفظ هنا.");return}}
 try{const url=URL.createObjectURL(data instanceof Blob?data:new Blob([data],{type:"text/csv;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);toast("حُفظ الملف")}catch(e){toast("تعذّر الحفظ هنا.")}}
$("#csv-save").addEventListener("click",()=>{const q=v=>'"'+String(v).replace(/"/g,'""')+'"',us=d=>`${String(d.getUTCMonth()+1).padStart(2,"0")}/${String(d.getUTCDate()).padStart(2,"0")}/${d.getUTCFullYear()}`;const rows=EV.filter(e=>!e.staff&&(e.endD||e.date)>=T).sort((a,b)=>a.date-b.date).map(e=>[q(e.title),us(e.date),us(e.endD||e.date),"True",q(CAT[e.cat]||"")].join(","));saveFile("مواعيد-تقويم-طويق.csv","﻿Subject,Start Date,End Date,All Day Event,Description\r\n"+rows.join("\r\n"))});

/* ---------- greeting card ---------- */
{const OCC=[["عيد الفطر","عيدكم مبارك","تقبّل الله طاعتكم، وأعاده عليكم باليمن والبركات",0],["عيد الأضحى","عيدكم مبارك","تقبّل الله منا ومنكم صالح الأعمال",0],["رمضان","رمضان كريم","بلّغكم الله صيامه وقيامه",0],["جمعة","جمعة مباركة","جعلها الله نوراً وسكينة لقلوبكم",0],["اليوم الوطني","دام عزّك يا وطن","كل عام وبلادنا في أمن ورفعة",1],["يوم التأسيس","يوم بدينا","ثلاثة قرون من الأصالة والمجد",1],["يوم العلم","رايتنا عالية","لا تُنكَّس ولا تنحني",1],["تحية لجنودنا","حمى الله جنودنا","دعاء من القلب لكل مرابط على الحدود",1]];
 const sel=$("#c-occ"),nm=$("#c-name"),cv=$("#c-cv"),x=cv.getContext("2d");OCC.forEach((o,i)=>sel.add(new Option(o[0],i)));sel.value="4";
 const fit=(t,font,size,maxW)=>{x.font=`${font.replace("$",size)}`;const w=x.measureText(t).width;return w>maxW?font.replace("$",Math.floor(size*maxW/w)):font.replace("$",size)};
 function draw(){const o=OCC[+sel.value]||OCC[0],W=1080,HH=1350,nat=o[3];const g=x.createRadialGradient(W*.7,HH*.15,60,W*.5,HH*.5,HH*.85);nat?(g.addColorStop(0,"#0f5535"),g.addColorStop(.55,"#06301c"),g.addColorStop(1,"#02150c")):(g.addColorStop(0,"#3a2412"),g.addColorStop(.55,"#1c1008"),g.addColorStop(1,"#0a0603"));x.setTransform(1,0,0,1,0,0);x.fillStyle=g;x.fillRect(0,0,W,HH);
  const gold=x.createLinearGradient(0,0,W,HH);gold.addColorStop(0,"#f8e6b4");gold.addColorStop(.5,"#d4a956");gold.addColorStop(1,"#a97b34");x.strokeStyle=gold;x.lineWidth=5;x.strokeRect(44,44,W-88,HH-88);x.lineWidth=1.5;x.strokeRect(60,60,W-120,HH-120);
  x.fillStyle=gold;[[100,'t'],[HH-100,'b']].forEach(([y,k])=>{for(let i=0;i<22;i++){const px=84+i*(W-168)/22,w=(W-168)/22;x.beginPath();if(k==="t"){x.moveTo(px,y+22);x.lineTo(px+w/2,y-6);x.lineTo(px+w,y+22)}else{x.moveTo(px,y-22);x.lineTo(px+w/2,y+6);x.lineTo(px+w,y-22)}x.closePath();x.globalAlpha=i%2?.45:1;x.fill()}x.globalAlpha=1});
  x.save();if(nat){x.translate(W/2-150,180);x.scale(1.5,1.5);x.strokeStyle=gold;x.lineCap="round";x.lineJoin="round";EMB.forEach(e=>{x.lineWidth=e[1];x.stroke(new Path2D(e[0]))})}else{x.translate(W/2,320);x.fillStyle=gold;x.beginPath();x.arc(0,0,120,0,6.283);x.fill();x.globalCompositeOperation="source-atop";x.fillStyle="#1c1008";x.beginPath();x.arc(42,-22,106,0,6.283);x.fill()}x.restore();
  x.direction="rtl";x.textAlign="center";x.textBaseline="middle";x.fillStyle=gold;x.font=fit(o[1],'400 $px "Katibeh","Amiri",serif',176,W-210);x.fillText(o[1],W/2,700);
  x.fillStyle="#f6ecd2";x.font=fit(o[2],'400 $px "Amiri",serif',50,W-230);x.fillText(o[2],W/2,860);
  const n=nm.value.trim().slice(0,28);if(n){x.fillStyle="#d9c592";x.font='400 34px "Noto Naskh Arabic","Amiri",serif';x.fillText("من",W/2,985);x.fillStyle=gold;x.font=fit(n,'400 $px "Katibeh","Amiri",serif',92,W-260);x.fillText(n,W/2,1060)}
  const h=H(T);x.fillStyle="#bfae85";x.font='400 28px "Noto Naskh Arabic","Amiri",serif';x.fillText("تقويم طويق · "+ar(h.d)+" "+HM[h.m-1]+" "+ar(h.y)+"هـ",W/2,HH-150)}
 sel.addEventListener("change",draw);nm.addEventListener("input",draw);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(draw);draw();
 $("#c-save").addEventListener("click",()=>cv.toBlob(b=>{if(b)saveFile("بطاقة-تهنئة.png",b)},"image/png"));
 $("#c-copy").addEventListener("click",()=>{const o=OCC[+sel.value]||OCC[0],n=nm.value.trim().slice(0,28);copyText(o[1]+"\n"+o[2]+(n?"\n\nمن "+n:""));toast("نُسخ النص")})}

/* ---------- tasbih: after prayer, or a counted dhikr ---------- */
{const DH=["سبحان الله","الحمد لله","الله أكبر"],SEAL="لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",MODES=[["بعد الصلاة: ٣٣ لكل ذكر",0],["سبحان الله وبحمده: ١٠٠",100],["أستغفر الله: ١٠٠",100],["لا إله إلا الله: ١٠٠",100],["اللهم صلّ على محمد: ١٠",10]],NM=["","سبحان الله وبحمده","أستغفر الله","لا إله إلا الله","اللهم صلّ على محمد"];
 let s={d:isoOf(T),n:0,t:0,m:0};try{const r=JSON.parse(store.get("tw-tb")||"null");if(r&&r.d===isoOf(T)&&Number.isInteger(r.n)&&r.n>=0&&r.n<=100&&Number.isInteger(r.t)&&r.t>=0&&r.t<1e6){s.n=r.n;s.t=r.t}if(r&&Number.isInteger(r.m)&&r.m>=0&&r.m<MODES.length)s.m=r.m}catch(e){}
 const ring=$("#tb-ring");let h="";for(let i=0;i<33;i++){const a=-Math.PI/2+i/33*6.283;h+=`<circle cx="${(100+90*Math.cos(a)).toFixed(2)}" cy="${(100+90*Math.sin(a)).toFixed(2)}" r="6.4"/>`}ring.innerHTML=h;const beads=[...ring.children];const sel=$("#tb-mode");MODES.forEach((m,i)=>sel.add(new Option(m[0],i)));sel.value=String(s.m);
 const draw=()=>{const lim=MODES[s.m][1];let k,txt,done,lit;if(!lim){done=s.n>=99;k=s.n%33;lit=done?33:k;txt=done?"تمّت":DH[Math.min(2,Math.floor(s.n/33))]}else{done=s.n>=lim;k=s.n;lit=Math.round(33*s.n/lim);txt=done?"تمّت":NM[s.m]}beads.forEach((b,i)=>b.classList.toggle("on",i<lit));$("#tb-n").textContent=ar(done&&!lim?33:k);$("#tb-t").textContent=txt;$("#tb-seal").textContent=done&&!lim?SEAL:"";$("#tb-total").textContent=s.t?`سبّحت اليوم ${ar(s.t)}`:"اضغط الدائرة لتسبّح. يبقى العدّ في جهازك.";$("#tb").setAttribute("aria-label",done?"تمّت، اضغط للبدء من جديد":`${txt}، العدد ${k}`)};
 const save=()=>store.set("tw-tb",JSON.stringify(s));sel.addEventListener("change",()=>{const v=+sel.value;s.m=MODES[v]?v:0;s.n=0;save();draw()});
 $("#tb").addEventListener("click",()=>{const lim=MODES[s.m][1]||99;if(s.n>=lim)s.n=0;else{s.n++;s.t=Math.min(999999,s.t+1)}if(navigator.vibrate&&navigator.userActivation&&navigator.userActivation.isActive)try{navigator.vibrate(!MODES[s.m][1]&&s.n%33===0?40:8)}catch(e){}save();draw()});$("#tb-reset").addEventListener("click",()=>{s.n=0;save();draw()});draw()}

/* ---------- ask the calendar: answered here, nothing leaves the page ---------- */
const ASK_STOP=new Set(["كم","باقي","يبقي","بقي","تبقي","متبقي","علي","علي","الي","متي","موعد","وش","ايش","ما","ماهو","هو","هي","يوم","تاريخ","في","متى","عن","هل"].map(norm));
const HMg=m=>HM[m-1].replace(/^ذو /,"ذي ");
const dayLeft=g=>{const n=diff(g,T);return n===0?"اليوم":n>0?afterWord(n):"قبل "+dayWord(-n)};
function askAnswer(){const el=$("#pal-ans"),raw=$("#pal-in").value.trim();const q=norm(raw);const say=t=>{el.textContent=t;el.hidden=false};if(raw.length<2){el.hidden=true;return}
 if(/(صلاه|اذان)/.test(q)&&!/عيد|جمعه|تراويح/.test(q)){const p=nextPrayer();if(p){say(`${p.n} في ${city[1]}: ${fClock(p.ms)}، ${inMin(p.ms)}.`);return}}
 if(/^(ما |وش |ايش )?(تاريخ )?(اليوم|الان)(\s|$)/.test(q)){const h=H(T);say(`اليوم ${wd(T)} ${fGs(T)}، ${ar(h.d)} ${HM[h.m-1]} ${ar(h.y)}هـ.`);return}
 {const q2=q.replace(/[٠-٩]/g,x=>"٠١٢٣٤٥٦٧٨٩".indexOf(x)).replace(/\bذي /g,"ذو ").replace(/(^|\s)ذي\s/g,"$1ذو ");const mk=(names,fn)=>{for(let i=0;i<12;i++){const m=q2.match(new RegExp("(\\d{1,2})\\s+"+norm(names[i])+"(?:\\s+(\\d{4}))?(?:\\s|ه|م|$)"));if(m)return fn(+m[1],i+1,m[2]?+m[2]:0)}return null};
  const hit=mk(HM,(d,m,y)=>{if(d<1||d>30)return null;let yy=y||H(T).y,g=H2G(yy,m,d);if(!y&&g&&g<T){yy++;g=H2G(yy,m,d)}return g?`${ar(d)} ${HMg(m)} ${ar(yy)}هـ يوافق ${wd(g)} ${fGs(g)} ${ar(g.getUTCFullYear())}م، ${dayLeft(g)}.`:null})||mk(GM,(d,m,y)=>{if(d<1||d>31)return null;let yy=y||T.getUTCFullYear(),g=D(yy,m,d);if(g.getUTCMonth()!==m-1)return null;if(!y&&g<T){yy++;g=D(yy,m,d)}const h=H(g);return `${wd(g)} ${ar(d)} ${GM[m-1]} ${ar(yy)}م يوافق ${ar(h.d)} ${HMg(h.m)} ${ar(h.y)}هـ، ${dayLeft(g)}.`});if(hit){say(hit);return}}
 const words=q.split(/\s+/).filter(w=>!ASK_STOP.has(w)).map(w=>w.replace(/^(ال|بال|وال)(?=..)/,"")).filter(w=>w.length>1);if(!words.length){el.hidden=true;return}
 const e0=EV.filter(x=>!x.staff&&(x.endD||x.date)>=T).sort((a,b)=>a.date-b.date);const inT=x=>{const t=norm(x.title);return words.every(w=>t.includes(w))},inN=x=>{const t=norm(x.title+" "+(x.note||""));return words.every(w=>t.includes(w))};const e=e0.find(inT)||e0.find(inN);if(!e){el.hidden=true;return}
 const dd=diff(e.date,T);say(`${e.title}: ${dd<0?"جارٍ الآن":dd===0?"اليوم":afterWord(dd)}، ${wd(e.date)} ${fGs(e.date)} ${ar(e.date.getUTCFullYear())}.`)}
$("#pal-in").addEventListener("input",askAnswer);

/* ---------- viewing mode: the page steps aside, the true sky at any hour ---------- */
{const t=window.__tw,hr=$("#cine-h"),out=$("#cine-out"),pl=$("#cine-place");const fmt=h=>{const m=Math.round(h*60)%1440;let a=Math.floor(m/60);const b=m%60,pm=a>=12;a=a%12||12;return `${ar(a)}:${ar2(b)} ${pm?"م":"ص"}`};
 CHAPTERS.forEach(c=>pl.add(new Option(((c.querySelector("h1,h2")||{}).textContent||"").trim()||"الآن",c.id)));
 const nudge=()=>(t.listeners||[]).forEach(f=>f());
 const set=h=>{t.cine.hour=+h;t.cine.dayStart=startMs(T);out.textContent=fmt(+h);nudge()};
 const on=v=>{t.cine=t.cine||{};t.cine.on=v;t.cine.lx=0;t.cine.ly=0;document.documentElement.classList.toggle("cine",v);if(v){const n=new Date(Date.now()+3*3600e3);const h=n.getUTCHours()+n.getUTCMinutes()/60;hr.value=h;set(h);const c=CHAPTERS.reduce((b,x)=>{const d=Math.abs(x.getBoundingClientRect().top);return d<b[0]?[d,x]:b},[1e9,null])[1];if(c)pl.value=c.id;hr.focus({preventScroll:true})}else $("#cine-btn").focus({preventScroll:true});nudge()};
 $("#cine-btn").addEventListener("click",()=>on(true));$("#cine-x").addEventListener("click",()=>on(false));hr.addEventListener("input",()=>set(hr.value));pl.addEventListener("change",()=>{const c=document.getElementById(pl.value);if(c){c.scrollIntoView({behavior:"auto"});if(t.refresh)t.refresh();nudge()}});
 let drag=null;addEventListener("pointerdown",ev=>{if(!t.cine||!t.cine.on||ev.target.closest(".cine-bar"))return;drag=[ev.clientX,ev.clientY,t.cine.lx,t.cine.ly]},{passive:true});addEventListener("pointermove",ev=>{if(!drag)return;t.cine.lx=Math.max(-1.3,Math.min(1.3,drag[2]+(ev.clientX-drag[0])*.0022));t.cine.ly=Math.max(-.5,Math.min(.5,drag[3]+(ev.clientY-drag[1])*.0016));nudge()},{passive:true});addEventListener("pointerup",()=>{drag=null},{passive:true});addEventListener("pointercancel",()=>{drag=null},{passive:true});
 document.addEventListener("keydown",ev=>{const tag=(ev.target.tagName||"").toLowerCase();if(ev.key==="Escape"&&t.cine&&t.cine.on){on(false);return}if(tag==="input"||tag==="select"||tag==="textarea"||ev.ctrlKey||ev.metaKey||ev.altKey)return;if((ev.key==="v"||ev.key==="V"||ev.key==="ر")&&!palOpen)on(!(t.cine&&t.cine.on))})}


/* ---------- welcome: greeting by the hour, the visitor's own name, words for the sky and the cliff ---------- */
const NAME_OK=/^[\p{L}\p{M} ]{1,20}$/u;
const nameGet=()=>{const v=store.get("tw-name")||"";return NAME_OK.test(v)?v.trim():""};
const hourR=()=>new Date(Date.now()+3*3600e3).getUTCHours();
const salam=()=>{const h=hourR();return h<4?"سهرة طيبة":h<11?"صباح الخير":h<15?"طاب يومك":h<18?"مساء الخير":"مساء النور"};
function renderGreet(){const n=nameGet(),g=$("#greet"),w=(salam()+(n?" يا "+n:"")+"، حيّاك الله في طويق").split(" ");g.textContent="";w.forEach((x,i)=>{const sp=document.createElement("span");sp.textContent=x;sp.style.setProperty("--i",i);g.append(sp,document.createTextNode(" "))});
 const today=EV.filter(e=>!e.staff&&e.cat!=="pay"&&(e.date.getTime()===T.getTime()||(e.endD&&e.date<=T&&e.endD>=T))).map(e=>e.title)[0];const fri=T.getUTCDay()===5;let last=store.get("tw-last");const gone=last&&okDate(last)?diff(T,iso(last)):0;store.set("tw-last",isoOf(T));
 $("#greet-sub").textContent=today?"اليوم: "+today:fri?"جمعة مباركة":gone>0?`نوّرت من جديد بعد ${dayWord(gone)}`:"البيت بيتك، والقهوة جاهزة";$("#name-btn").textContent=n?"غيّر الاسم":"وش اسمك؟";
 const h=hourR();$("#farewell").textContent=(h>=20||h<4?"تصبح على خير":"في أمان الله")+(n?" يا "+n:"")}
{const f=$("#name-f"),inp=$("#name-in");$("#name-btn").addEventListener("click",()=>{f.hidden=!f.hidden;if(!f.hidden){inp.value=nameGet();inp.focus()}});f.addEventListener("submit",ev=>{ev.preventDefault();const v=inp.value.trim().replace(/\s+/g," ");if(v&&!NAME_OK.test(v)){toast("اكتب الاسم بالحروف فقط.");return}store.set("tw-name",v);f.hidden=true;renderGreet();if(window.__tw.resetSky)window.__tw.resetSky();toast(v?`حيّاك الله يا ${v}`:"حُذف الاسم")})}
window.__tw.skyLines=id=>{const n=nameGet();const first=n?"حيّاك الله يا "+n:salam()+"، حيّاكم الله";return {top:[first,"يا هلا ومرحبا بكم","شامخ مثل طويق","دام عزّك يا وطن"],school:["بالتوفيق يا طلابنا"],ramadan:["رمضان كريم"],eid:["عيدكم مبارك"],salary:["بارك الله في رزقكم"],tools:["في أمان الله"]}[id]||null};
window.__tw.cliffLines={top:"طويق شامخ، وهمّتنا أعلى",upcoming:"كل يوم على هذا الجبل وعد جديد",school:"العلم نور",ramadan:"اللهم بلّغنا رمضان",eid:"أعاده الله علينا باليمن والبركات",national:"دام عزّك يا وطن",kingdom:"حمى الله جنودنا",salary:"الرزق على الله",majlis:"حيّاكم الله في مجلسنا",prayer:"حيّ على الفلاح",moon:"ما أجمل ليلك يا طويق",seasons:"إذا طلع سهيل برد الليل",fasting:"صيامكم مقبول",sky:"سبحان الله",month:"سبحان من زيّن السماء",tools:"في أمان الله"};
{const K={upcoming:"الأيام تمشي، وخيرها ما نستعد له.",school:"كل صفحة تفتحها اليوم باب يفتح لك بكرة.",ramadan:"شهر تهدأ فيه القلوب قبل أن تضيء الفوانيس.",eid:"فرحة تجمع الأهل، وقهوة تجمع القلوب.",national:"وطن نعدّ أيامه، لأن كل يوم فيه نعمة.",kingdom:"في كل حجر من هذا الجبل حكاية رجال.",salary:"رزقك مكتوب، وموعده هنا.",majlis:"المجلس مفتوح، وأنت صاحب بيت.",prayer:"خمس وقفات في اليوم تعيد لك نفسك.",moon:"القمر تقويم معلّق في السماء.",seasons:"عرف الأولون مواسمهم من نجوم هذا الليل.",fasting:"يوم تصومه يقرّبك خطوة.",sky:"سماء واحدة، ودهشة لا تنتهي.",month:"كل خانة في التقويم يوم يستاهل يُعاش.",tools:"احسبها صح، والباقي على الله."};Object.keys(K).forEach(id=>{const sec=document.getElementById(id),tc=sec&&sec.querySelector(".title-card .sub");if(tc){const p=document.createElement("p");p.className="kalima";p.textContent=K[id];tc.after(p)}})}

/* ---------- the majlis ---------- */
{const WORDS=["طويق ما يلين، وأهله مثله.","في كل فجر على هذا الجبل وعد جديد.","اللي له أصل ما يضيع.","الضيف إذا جاء، جاء معه الخير.","البيت اللي فيه قهوة ما يبرد.","الأرض تحفظ خطى من مشوا عليها.","اللي يزرع النخل يفكر فيمن بعده.","بلادنا كبيرة، وقلوب أهلها أكبر.","الصبر على الطريق نصف الوصول.","النجوم فوق نجد ما خذلت سارياً.","كلمة طيبة تدفّي ليلة باردة.","اليوم اللي تبدأه بشكر، يمشي معك.","من طويق نتعلم: الثبات مو عناد، الثبات عهد.","الديرة ما هي تراب، الديرة ناسها.","لا تستعجل، السيل يوصل ولو طال الوادي.","في السماء نفسها التي اهتدى بها أجدادك.","الفنجال الأول للضيف، والعز للجميع.","ما فيه مسافة بعيدة على من نيته صادقة.","اللي يعرف قدر بلاده يعرف قدر نفسه.","كل صباح في المملكة يبدأ بالأذان.","الشمس تطلع على طويق قبل ما توصلك، فاسبقها بالخير.","خلّك مثل النخلة: عالية، وتعطي.","الوقت أغلى من الذهب، وهذا التقويم يشهد.","حيّاك الله، دايم وأبد.","اللي يبني اليوم، يتظلل أولاده بكرة.","ما يهزّ الجبل ريح، ولا يهزّ الأصيل قول.","الناس بالناس، والكل بالله.","قلبك ديرة، خلّها عامرة.","ليل نجد طويل، لكن نجومه ونّاسة.","من صان وطنه صانه وطنه.","ربّك كريم، والخير جاي."];let i=Math.floor(T.getTime()/DAY)%WORDS.length;const el=$("#mj-w");el.textContent=WORDS[i];$("#mj-next").addEventListener("click",()=>{i=(i+1)%WORDS.length;el.textContent=WORDS[i];el.animate&&el.animate([{opacity:0,translate:"0 8px"},{opacity:1,translate:"0 0"}],{duration:reduce?1:500})});
 const flips=(sel,rows)=>{const box=$(sel);box.innerHTML=rows.map((r,i)=>`<button type="button" class="flip" data-f="${i}" aria-label="${esc(r[0])}"><span><b>${esc(r[0])}</b><i>${esc(r[1])}</i></span></button>`).join("");box.addEventListener("click",ev=>{const b=ev.target.closest(".flip");if(b)b.classList.toggle("on")})};
 flips("#mj-prov",[["الجار قبل الدار","اختر جارك قبل بيتك."],["اللي ما يعرف الصقر يشويه","من يجهل قيمة الشيء يضيّعه."],["من شبّ على شيء شاب عليه","ما تعتاده صغيراً يلازمك كبيراً."],["العين ما تعلى على الحاجب","لكل مقامه، والأدب مع الكبير."],["اللي فات مات","لا تُطل الوقوف عند ما مضى."],["القناعة كنز لا يفنى","الرضا غنى لا ينتهي."],["ابن الوز عوّام","الولد يأخذ من أهله."],["طق الحديد وهو حامي","اغتنم الفرصة في وقتها."]]);
 flips("#mj-dict",[["أبشر","حاضر، وأتم ما طلبت."],["سمّ","تفضّل، قل ما عندك."],["طال عمرك","عبارة احترام وتقدير."],["وش لونك","كيف حالك؟"],["علومك","ما أخبارك؟"],["عساك طيب","أرجو أنك بخير."],["تقلّطوا","تفضلوا إلى الطعام."],["الحين","الآن."],["زين","جيد، حسن."],["مير","لكن."],["لا تبطي","لا تتأخر."],["يا هلا","ترحيب بالقادم."]]);
 const DYK=["يمتد جبل طويق نحو ٨٠٠ كيلومتر في قلب نجد، وأعلى قمم حافته فريدة الشظية بارتفاع ١١٩٦ متراً.","مساحة المملكة نحو ٢٫١٥ مليون كيلومتر مربع، ومناطقها الإدارية ثلاث عشرة.","بلغ عدد سكان المملكة ٣٢٫٢ مليون نسمة في تعداد ٢٠٢٢.","عروق بني معارض أول موقع طبيعي سعودي في قائمة التراث العالمي، سُجّل عام ٢٠٢٣.","صدر الأمر الملكي بيوم التأسيس عام ٢٠٢٢، وبيوم العلم عام ٢٠٢٣.","عام ٢٠٢٧ يتم يوم التأسيس ثلاثة قرون كاملة منذ ١٧٢٧م.","افتُتح مترو الرياض للركاب في ديسمبر ٢٠٢٤.","يربط قطار الحرمين مكة المكرمة بالمدينة المنورة عبر نحو ٤٥٠ كيلومتراً.","العرضة النجدية مسجلة في قائمة اليونسكو للتراث غير المادي منذ ٢٠١٥.","الربع الخالي أكبر صحراء رملية متصلة في العالم."];let d=Math.floor(T.getTime()/DAY)%DYK.length;const dy=$("#mj-dyk");dy.textContent=DYK[d];$("#mj-dyk-n").addEventListener("click",()=>{d=(d+1)%DYK.length;dy.textContent=DYK[d]})}
const SPEC={"SA-01":"العاصمة، والدرعية، وجبل طويق.","SA-02":"المسجد الحرام، وجدة التاريخية.","SA-03":"المسجد النبوي، والعلا والحِجر.","SA-04":"الأحساء، والنفط، وساحل الخليج.","SA-05":"التمور، ومهرجاناتها في بريدة وعنيزة.","SA-06":"جبلا أجا وسلمى، والفنون الصخرية.","SA-07":"نيوم، وجبل اللوز، وساحل البحر الأحمر.","SA-08":"عرعر وطريف، وبرد الشتاء.","SA-09":"جزر فرسان، والمانجو، والبن.","SA-10":"حِمى الثقافية، والأخدود.","SA-11":"غابة رغدان، وقرية ذي عين.","SA-12":"قلعة زعبل، ومارد في دومة الجندل.","SA-14":"جبال السودة، ورجال ألمع."};
const ANN=[["01-15","استعادة الرياض",1902],["02-22","يوم التأسيس",1727],["03-04","تدفق النفط من بئر الدمام ٧",1938],["03-11","يوم العلم",1937],["04-25","إطلاق رؤية السعودية ٢٠٣٠",2016],["09-23","توحيد المملكة",1932],["10-24","عبارة «همّة طويق»",2018],["11-28","فوز الرياض باستضافة إكسبو ٢٠٣٠",2023],["12-01","افتتاح مترو الرياض",2024],["12-11","إسناد كأس العالم ٢٠٣٤ إلى المملكة",2024]];
function renderAnn(){const Y=T.getUTCFullYear();const rows=ANN.map(a=>{const[m,d]=a[0].split("-").map(Number);let dt=D(Y,m,d);if(dt<T)dt=D(Y+1,m,d);return{a,dt,left:diff(dt,T)}}).sort((x,y)=>x.left-y.left).slice(0,6);$("#mj-ann").innerHTML=rows.map(r=>`<li class="${r.left===0?"today":""}"><b style="font-weight:600">${r.a[1]}</b><span>${r.left===0?"اليوم":afterWord(r.left)} · ${unitWord(r.dt.getUTCFullYear()-r.a[2],"سنة واحدة","سنتان","سنوات","سنة")}</span></li>`).join("");
 const yrs=(a)=>{let y=T.getUTCFullYear()-a.getUTCFullYear();const anni=D(T.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate());if(anni>T)y--;const last=D(a.getUTCFullYear()+y,a.getUTCMonth()+1,a.getUTCDate());return[y,diff(T,last)]};const[u,ud]=yrs(D(1932,9,23)),[f]=yrs(D(1727,2,22));$("#kg-age").textContent=`منذ التوحيد ${ar(u)} سنة و${dayWord(ud)}، ومنذ التأسيس ${ar(f)} سنة.`}

/* ---------- your week, the year so far, saved dates ---------- */
function renderWeek(){const by={};EV.filter(e=>!e.staff).forEach(e=>{(by[isoOf(e.date)]=by[isoOf(e.date)]||[]).push(e)});let h="";for(let i=0;i<7;i++){const d=addDays(T,i),hh=H(d),l=by[isoOf(d)]||[];h+=`<div class="${i===0?"now":""}"><small>${i===0?"اليوم":wd(d)}</small><b>${ar(d.getUTCDate())}</b><small>${ar(hh.d)} ${HM[hh.m-1]}</small>${l.length?`<em>${l[0].title}</em>`:""}</div>`}$("#wk").innerHTML=h;
 const y=T.getUTCFullYear(),gp=diff(T,D(y,1,1))/diff(D(y+1,1,1),D(y,1,1)),hh=H(T),a=H2G(hh.y,1,1),b=H2G(hh.y+1,1,1),hp=a&&b?diff(T,a)/diff(b,a):0;const bar=(t,p)=>`<div><p><span>${t}</span><span>${ar(Math.round(p*100))}٪</span></p><i style="--w:${(p*100).toFixed(1)}%"></i></div>`;$("#yrs").innerHTML=bar(`مضى من ${ar(y)}م`,gp)+bar(`مضى من ${ar(hh.y)}هـ`,hp)}
const favKey=e=>isoOf(e.date)+"|"+e.title;let FAV=new Set();try{const r=JSON.parse(store.get("tw-fav")||"[]");if(Array.isArray(r))FAV=new Set(r.filter(x=>typeof x==="string"&&x.length<=160).slice(0,100))}catch(e){}
function renderFav(){const list=EV.filter(e=>FAV.has(favKey(e))&&(e.endD||e.date)>=T).sort((a,b)=>a.date-b.date);$("#fav-list").innerHTML=list.length?list.map(e=>{const dd=diff(e.date,T);return `<li><b style="font-weight:600">${e.title}</b><span>${dd<=0?"اليوم":afterWord(dd)}</span></li>`}).join(""):'<li style="border:0">اضغط النجمة بجانب أي موعد في القائمة أعلاه ليظهر هنا.</li>'}
function decorateTl(){document.querySelectorAll("#tl li[data-ev]").forEach(li=>{if(li.querySelector(".star"))return;const e=EV[+li.dataset.ev];if(!e)return;const b=document.createElement("button");b.type="button";b.className="star"+(FAV.has(favKey(e))?" on":"");b.textContent="★";b.setAttribute("aria-label","أضف إلى مواعيدي: "+e.title);b.setAttribute("aria-pressed",FAV.has(favKey(e)));b.addEventListener("click",ev=>{ev.preventDefault();ev.stopPropagation();const k=favKey(e);FAV.has(k)?FAV.delete(k):FAV.add(k);store.set("tw-fav",JSON.stringify([...FAV].slice(0,100)));b.classList.toggle("on",FAV.has(k));b.setAttribute("aria-pressed",FAV.has(k));renderFav()});li.append(b)})}
new MutationObserver(decorateTl).observe($("#tl"),{childList:true});

/* ---------- the sun today, shadow, qibla ---------- */
function renderSun(){const p=prayerTimes(T,city[2],city[3]),py=prayerTimes(addDays(T,-1),city[2],city[3]),now=Date.now(),sr=hourMs(T,p.sunrise),ss=hourMs(T,p.maghrib),f=Math.max(-.03,Math.min(1.03,(now-sr)/(ss-sr))),alt=skyNow(now,city[2],city[3]).sun.alt;const x=20+360*f,y=150-Math.sin(Math.max(0,Math.min(1,f))*Math.PI)*120,up=f>=0&&f<=1;
 $("#sun-h").textContent="الشمس اليوم فوق "+city[1];const len=p.maghrib-p.sunrise,lenY=py.maghrib-py.sunrise,dm=Math.round((len-lenY)*60);
 $("#sun-arc").innerHTML=`<defs><linearGradient id="sun-g" x1="0" x2="1"><stop offset="0" stop-color="#b98a3e"/><stop offset=".5" stop-color="#e2b25a"/><stop offset="1" stop-color="#a0401c"/></linearGradient></defs><path d="M20 150C20 150 110 30 200 30S380 150 380 150" fill="none" stroke="#c4b18c" stroke-width="2" stroke-dasharray="3 6"/><path d="M0 150H400" stroke="#7a2d17" stroke-width="2"/><circle cx="${x.toFixed(1)}" cy="${(up?y:158).toFixed(1)}" r="${up?12:7}" fill="${up?"url(#sun-g)":"#5a6b7a"}" stroke="#7a2d17" stroke-width="1.5"/><text x="380" y="168" text-anchor="middle" font-size="13" fill="#6d5b42">${fHour(p.maghrib)}</text><text x="20" y="168" text-anchor="middle" font-size="13" fill="#6d5b42">${fHour(p.sunrise)}</text>`;
 const shadow=alt>2?170/Math.tan(alt*RAD)/100:null;const lh=Math.floor(len),lm=Math.round((len-lh)*60);
 $("#sun-f").innerHTML=`<div><dt>طول النهار</dt><dd>${ar(lh)} س ${ar(lm)} د</dd></div><div><dt>مقارنة بأمس</dt><dd>${dm===0?"مثله":(dm>0?"أطول بـ":"أقصر بـ")+ar(Math.abs(dm))+" د"}</dd></div><div><dt>ارتفاع الشمس الآن</dt><dd>${ar(Math.round(alt))}°</dd></div><div><dt>ظل من طوله ١٧٠ سم</dt><dd>${shadow===null?"لا ظل الآن":ar(shadow.toFixed(1))+" م"}</dd></div>`;
 const q=qibla(city[2],city[3]);const dial=$("#qibla-d");if(!dial.firstChild){let t="";for(let i=0;i<36;i++){const a=i*10*RAD,r1=i%9===0?78:86;t+=`<line x1="${100+Math.sin(a)*r1}" y1="${100-Math.cos(a)*r1}" x2="${100+Math.sin(a)*92}" y2="${100-Math.cos(a)*92}" stroke="#7a2d17" stroke-width="${i%9===0?2.4:1}"/>`}dial.innerHTML=`<circle cx="100" cy="100" r="96" fill="none" stroke="#b58a33" stroke-width="2.5"/>${t}<text x="100" y="62" text-anchor="middle" font-size="17" fill="#7a2d17">شمال</text><g class="needle"><path d="M100 22L108 100H92Z" fill="#005430"/><path d="M92 100H108L100 136Z" fill="#c4b18c"/><rect x="92.500" y="10" width="15" height="15" fill="#1a1208" stroke="#c9983c" stroke-width="1.500"/><circle cx="100" cy="100" r="6" fill="#c9983c"/></g>`}
 dial.querySelector(".needle").style.rotate=q.toFixed(1)+"deg";$("#qibla-t").textContent=`القبلة من ${city[1]}: ${ar(Math.round(q))}° من الشمال، و${ar(Math.round(distKm(city[2],city[3])))} كم إلى مكة المكرمة.`}

/* ---------- zakat, and the next holiday in working days ---------- */
{const inp=$("#zk-in"),out=$("#zk-out");const f=new Intl.NumberFormat("ar-SA",{maximumFractionDigits:2});const up=()=>{const v=parseFloat(inp.value);out.textContent=isFinite(v)&&v>0&&v<=1e12?`الزكاة: ${f.format(v*.025)} ريال`:"اكتب المبلغ لتظهر الزكاة."};inp.addEventListener("input",up);up();const h=H(T),g=H2G(h.y+1,h.m,Math.min(h.d,29));if(g)$("#zk-hawl").textContent=`إن بدأ حولك اليوم، فيتم في ${wd(g)} ${fGs(g)} ${ar(g.getUTCFullYear())}.`}
function renderWork(){const n=EV.filter(e=>e.cat==="school"&&!e.staff&&e.date>T&&/إجازة/.test(e.title)).sort((a,b)=>a.date-b.date)[0];if(!n){$("#wd-out").textContent="لا إجازة دراسية قريبة في هذا التقويم.";return}const dd=diff(n.date,T);let wk=0;for(let d=T;d<n.date;d=addDays(d,1)){const w=d.getUTCDay();if(w!==5&&w!==6)wk++}$("#wd-out").textContent=`${n.title}: ${afterWord(dd)}، وبينك وبينها ${dayWord(wk)} من الأحد إلى الخميس.`}

/* ---------- display settings and help ---------- */
{const box=$("#help"),main=$("#main");const open=v=>{box.hidden=!v;if(v)$("#help-x").focus();else $("#help-btn").focus({preventScroll:true})};const fs=v=>{main.classList.remove("fs1","fs2");if(v>0)main.classList.add("fs"+v);store.set("tw-fs",String(v));if(window.ScrollTrigger)ScrollTrigger.refresh();window.__tw.refresh&&window.__tw.refresh()};
 const rd=v=>{document.documentElement.classList.toggle("read",v);window.__tw.paused=v;$("#read-t").checked=v;store.set("tw-read",v?"1":"0");if(window.ScrollTrigger)ScrollTrigger.refresh();window.__tw.refresh&&window.__tw.refresh();if(!v)(window.__tw.listeners||[]).forEach(f=>f())};
 $("#help-btn").addEventListener("click",()=>open(true));$("#help-x").addEventListener("click",()=>open(false));box.addEventListener("click",ev=>{if(ev.target===box)open(false);const b=ev.target.closest("[data-fs]");if(b)fs(+b.dataset.fs)});$("#read-t").addEventListener("change",ev=>rd(ev.target.checked));$("#print-btn").addEventListener("click",()=>{open(false);setTimeout(()=>window.print(),80)});
 document.addEventListener("keydown",ev=>{if(ev.key==="Escape"&&!box.hidden){open(false);return}const tag=(ev.target.tagName||"").toLowerCase();if(tag==="input"||tag==="select"||tag==="textarea")return;if((ev.key==="?"||ev.key==="؟")&&!palOpen)open(box.hidden)});
 const sf=store.get("tw-fs");if(sf==="1"||sf==="2")fs(+sf);if(store.get("tw-read")==="1")rd(true)}

/* ---------- touches: tilt, sheen, magnet, ripple, sand behind the pointer, falcon and rings on the scroll ---------- */
{const fine=matchMedia("(pointer:fine)").matches&&!reduce,root=document.documentElement;
 let sq=false,maxS=1;const pfEl=$(".pf"),ringC=$(".totop .ring circle");const mS=()=>{maxS=Math.max(1,root.scrollHeight-innerHeight)};const onS=()=>{if(sq)return;sq=true;requestAnimationFrame(()=>{sq=false;const p=Math.min(1,scrollY/maxS);if(pfEl)pfEl.style.translate=`${(12-p*innerWidth).toFixed(1)}px 0`;if(ringC)ringC.style.strokeDashoffset=(100-p*100).toFixed(1)})};addEventListener("scroll",onS,{passive:true});addEventListener("resize",mS);setTimeout(mS,1500);setInterval(mS,8000);mS();onS();
 /* nav ink */
 {const nav=$("#nav"),ink=document.createElement("span");ink.className="nav-ink";nav.append(ink);const mv=()=>{const a=nav.querySelector("a.on");if(!a){ink.style.width="0";return}ink.style.left=a.offsetLeft+"px";ink.style.width=a.offsetWidth+"px"};new MutationObserver(mv).observe(nav,{subtree:true,attributes:true,attributeFilter:["class"]});addEventListener("resize",mv)}
 /* things arriving in view */
 if(window.IntersectionObserver&&!reduce){const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const t=e.target;if(t.classList.contains("panel")){const i=document.createElement("i");i.className="sweep";t.append(i);setTimeout(()=>i.remove(),1700)}else if(t.classList.contains("medal"))t.classList.add("in");else t.classList.add("lit")}),{threshold:.22});document.querySelectorAll(".panel,.medal,.title-card h2").forEach(el=>io.observe(el))}
 /* ripple everywhere */
 document.addEventListener("pointerdown",ev=>{const b=ev.target.closest&&ev.target.closest(".btn");if(!b||reduce)return;const r=b.getBoundingClientRect(),i=document.createElement("i");i.className="rip";i.style.left=ev.clientX-r.left+"px";i.style.top=ev.clientY-r.top+"px";b.append(i);setTimeout(()=>i.remove(),750)},{passive:true});
 if(fine){let rq=false,lx=0,ly=0,cur=null;
  /* buttons lean toward the pointer */
  addEventListener("pointermove",ev=>{lx=ev.clientX;ly=ev.clientY;const b=ev.target.closest&&ev.target.closest(".btn");if(cur&&cur!==b)cur.style.translate="";cur=b;if(b&&!rq){rq=true;requestAnimationFrame(()=>{rq=false;if(!cur)return;const r=cur.getBoundingClientRect();cur.style.translate=`${((lx-r.left-r.width/2)*.14).toFixed(1)}px ${((ly-r.top-r.height/2)*.2).toFixed(1)}px`})}spawn(lx,ly)},{passive:true});
  /* a few grains of sand behind the pointer, nothing on click; the canvas exists only while they fall */
  const cv=$("#sand-cv"),c=cv.getContext("2d");const G=[];let run=false,px=0,py=0;
  function spawn(x,y){const d=Math.hypot(x-px,y-py);if(d<16)return;px=x;py=y;if(G.length<30)G.push({x,y,vx:(Math.random()-.5)*.5,vy:Math.random()*.5+.15,l:1,s:.7+Math.random()*1.1});if(!run){run=true;if(cv.width!==innerWidth||cv.height!==innerHeight){cv.width=innerWidth;cv.height=innerHeight}cv.style.display="block";requestAnimationFrame(tk)}}
  function tk(){c.clearRect(0,0,cv.width,cv.height);for(let i=G.length-1;i>=0;i--){const g=G[i];g.x+=g.vx;g.y+=g.vy;g.vy+=.012;g.l-=.026;if(g.l<=0){G.splice(i,1);continue}c.globalAlpha=g.l*.75;c.fillStyle="#d9b26f";c.fillRect(g.x,g.y,g.s,g.s)}if(G.length)requestAnimationFrame(tk);else{run=false;c.clearRect(0,0,cv.width,cv.height);cv.style.display="none"}}
 }}
window.__tw.resetSky=()=>{if(window.__tw.dbgResetSky)window.__tw.dbgResetSky()};

/* ---------- your own note on any day, kept in this browser ---------- */
{const NOTES=new Map();try{const r=JSON.parse(store.get("tw-notes")||"{}");if(r&&typeof r==="object"&&!Array.isArray(r))Object.keys(r).slice(0,300).forEach(k=>{if(okDate(k)&&typeof r[k]==="string"&&r[k].length<=200&&r[k])NOTES.set(k,r[k])})}catch(e){}
 const saveN=()=>{const o={};NOTES.forEach((v,k)=>{o[k]=v});store.set("tw-notes",JSON.stringify(o))};
 const list=()=>{const box=$("#note-list");box.textContent="";[...NOTES.keys()].filter(k=>iso(k)>=T).sort().slice(0,8).forEach(k=>{const li=document.createElement("li"),a=document.createElement("b"),b=document.createElement("span");a.style.fontWeight="500";a.textContent=NOTES.get(k);const d=iso(k);b.textContent=`${fGs(d)} ${ar(d.getUTCFullYear())}`;li.append(a,b);box.append(li)})};
 const orig=renderDetail;renderDetail=function(){orig();const key=selD,w=document.createElement("div");w.className="day-note";const l=document.createElement("label");l.htmlFor="day-note-in";l.textContent="ملاحظتي لهذا اليوم";const ta=document.createElement("textarea");ta.id="day-note-in";ta.name="day-note-in";ta.maxLength=200;ta.rows=2;ta.autocomplete="off";ta.placeholder="تبقى في جهازك فقط";ta.value=NOTES.get(key)||"";let tm=0;ta.addEventListener("input",()=>{clearTimeout(tm);tm=setTimeout(()=>{const v=ta.value.trim().slice(0,200);if(v){if(NOTES.size<300||NOTES.has(key))NOTES.set(key,v)}else NOTES.delete(key);saveN();list()},300)});w.append(l,ta);$("#cal-detail").append(w)};list()}
$("#copy-today").addEventListener("click",()=>{const h=H(T);copyText(`اليوم ${wd(T)} ${fGs(T)} ${ar(T.getUTCFullYear())}م، ${ar(h.d)} ${HM[h.m-1]} ${ar(h.y)}هـ`);toast("نُسخ تاريخ اليوم")});
/* the next chapter, at the end of each chapter */
CHAPTERS.forEach((c,i)=>{const nx=CHAPTERS[i+1];if(!nx)return;const t=(nx.querySelector("h1,h2")||{}).textContent;if(!t)return;const a=document.createElement("a");a.className="next-ch";a.href="#"+nx.id;const sp=document.createElement("span");sp.textContent="الفصل التالي";const b=document.createElement("b");b.textContent=t.trim();a.append(sp,b);c.append(a)});
document.addEventListener("keydown",ev=>{const tag=(ev.target.tagName||"").toLowerCase();if(tag==="input"||tag==="select"||tag==="textarea"||ev.ctrlKey||ev.metaKey||ev.altKey||palOpen)return;if(ev.code!=="BracketRight"&&ev.code!=="BracketLeft")return;const y=scrollY+innerHeight*.4;let i=0;CHAPTERS.forEach((c,k)=>{if(c.offsetTop<=y)i=k});const n=CHAPTERS[i+(ev.code==="BracketRight"?1:-1)];if(n)n.scrollIntoView({behavior:reduce?"auto":"smooth"})});
/* scene quality: remembered, gentle on weak devices, and the scene stops itself rather than freeze the page */
{const t=window.__tw,qs=$("#q-sel"),qv=store.get("tw-q");const conn=navigator.connection;if(["auto","4k","fast"].includes(qv))t.initialQ=qv;else if((navigator.deviceMemory&&navigator.deviceMemory<=4)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||(conn&&conn.saveData))t.initialQ="fast";qs.value=t.initialQ||"auto";
 const pf=()=>{const st=t.stats;$("#perf-t").textContent=st?`${ar(st.w)}×${ar(st.h)}`:""};qs.addEventListener("change",()=>{const v=qs.value;if(!["auto","4k","fast"].includes(v))return;store.set("tw-q",v);if(t.setQuality)t.setQuality(v);setTimeout(pf,100)});$("#help-btn").addEventListener("click",pf);$("#qbadge").addEventListener("click",()=>{if(t.stats){store.set("tw-q",t.stats.mode);qs.value=t.stats.mode}});
 t.onOverload=()=>{if(document.documentElement.classList.contains("read"))return;document.documentElement.classList.add("read");t.paused=true;$("#read-t").checked=true;store.set("tw-q","fast");qs.value="fast";if(window.ScrollTrigger)ScrollTrigger.refresh();t.refresh&&t.refresh();toast("أوقفنا المشهد ثلاثي الأبعاد ليبقى الموقع سريعاً. تعيده من الإعدادات.")}}

function renderAll(){renderHero();renderFacts();renderTicker();renderStrip();renderTimeline();renderSchool();renderSchoolStats();renderRamadan();renderImsakiya();renderEid();renderRites();renderNational();renderSalary();renderPrayer();renderNight();renderCities();renderMoon();renderMoonExtra();renderSeasons();renderFasting();renderSky();drawEcl(eclT());renderMonth();renderYear();g2h();h2g();calcAge();calcDiff();renderCds();renderGhosts();renderFoot();renderKingdom();renderGreet();renderAnn();renderWeek();renderFav();renderSun();renderWork();decorateTl();tick()}
renderAll();
setInterval(tick,1000);setInterval(()=>{if(!document.hidden){renderSun();renderGreet.__t=(renderGreet.__t||0)+1}},3e4);

function refreshLayout(){const y=window.scrollY;window.__tw.layout=CHAPTERS.map(s=>{const r=s.getBoundingClientRect();return{id:s.id,top:r.top+y,h:r.height}});if(window.ScrollTrigger)ScrollTrigger.refresh()}
window.__tw.refresh=()=>{const y=window.scrollY;window.__tw.layout=CHAPTERS.map(s=>{const r=s.getBoundingClientRect();return{id:s.id,top:r.top+y,h:r.height}})};

/* ---------- chapter rail, header, progress ---------- */
const rail=$("#rail");
rail.innerHTML=CHAPTERS.map(s=>`<li><a href="#${s.id}" data-id="${s.id}"><i></i><span>${s.dataset.scene||""}</span></a></li>`).join("");
const navLinks=[...document.querySelectorAll("#nav a")],railLinks=[...rail.querySelectorAll("a")];
let activeId="";
function setActive(id){if(id===activeId)return;const first=!activeId;activeId=id;if(!first)chime(id);navLinks.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+id));railLinks.forEach(a=>a.classList.toggle("on",a.dataset.id===id));const on=navLinks.find(a=>a.classList.contains("on"));if(on&&on.scrollIntoView&&window.innerWidth<=760){const nav=$("#nav");nav.scrollTo({left:on.offsetLeft-nav.clientWidth/2+on.clientWidth/2,behavior:"smooth"})}}
const topbar=$("#topbar"),bar=$("#progress");
let lastY=scrollY,lastST=performance.now();
function onScroll(){const y=window.scrollY,max=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${max>0?(y/max).toFixed(4):0})`;topbar.classList.toggle("solid",y>40);
  const nowT=performance.now(),dy=y-lastY;window.__tw.scrollVel=dy/Math.max(16,nowT-lastST)*1000;lastST=nowT;
  if(y>innerHeight*.7&&dy>6&&!palOpen)topbar.classList.add("hide");else if(dy<-6||y<innerHeight*.7)topbar.classList.remove("hide");lastY=y;
  $("#totop").classList.toggle("on",y>innerHeight*1.4);
  const mid=y+innerHeight*.45;let id=CHAPTERS[0].id;for(const L of window.__tw.layout){if(L.top<=mid)id=L.id}setActive(id)}
addEventListener("scroll",onScroll,{passive:true});

/* ---------- pointer glow ---------- */
{let gq=false,gx=0,gy=0,gel=null;document.addEventListener("pointermove",e=>{gel=e.target.closest&&e.target.closest(".glow");if(!gel)return;gx=e.clientX;gy=e.clientY;if(gq)return;gq=true;requestAnimationFrame(()=>{gq=false;if(!gel)return;const r=gel.getBoundingClientRect();gel.style.setProperty("--mx",(gx-r.left)+"px");gel.style.setProperty("--my",(gy-r.top)+"px")})},{passive:true})}

/* ---------- GSAP choreography ---------- */
function setupMotion(){
  if(!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);
  const mm=gsap.matchMedia();
  mm.add({full:"(prefers-reduced-motion: no-preference)",wide:"(min-width: 901px)"},ctx=>{
    const {full,wide}=ctx.conditions;
    if(!full||motionOff)return;
    /* titles are written right to left, then the pen underlines them */
    document.querySelectorAll(".title-card").forEach(tc=>{const h=tc.querySelector("h2");
      const v=["M598 12C470 3 392 22 298 13S104 7 2 17","M598 16C520 21 430 5 310 12S120 22 4 9","M597 9C486 17 402 4 296 15S98 12 3 20"];const P=document.createElementNS("http://www.w3.org/2000/svg","svg");P.setAttribute("viewBox","0 0 600 26");P.setAttribute("preserveAspectRatio","none");P.setAttribute("class","pen");P.setAttribute("aria-hidden","true");const pa=document.createElementNS("http://www.w3.org/2000/svg","path");pa.setAttribute("d",v[Math.floor(Math.random()*3)]);pa.setAttribute("pathLength","1");P.appendChild(pa);h.after(P);
      const rest=tc.querySelectorAll(".sub,.meta,.scene");
      const tl=gsap.timeline({scrollTrigger:{trigger:tc,start:"bottom 92%",toggleActions:"play none none reverse"}});
      tl.fromTo(h,{clipPath:"inset(-30% -4% -30% 100%)"},{clipPath:"inset(-30% -4% -30% -4%)",duration:1.25,ease:"power2.inOut"}).fromTo(pa,{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,duration:.8,ease:"power2.out"},"-=.45").fromTo(rest,{opacity:0,y:12},{opacity:1,y:0,duration:.7,stagger:.08,ease:"power2.out"},"-=.5");
    });
    /* panels settle in from an already visible state */
    ScrollTrigger.batch(".sec-body > *:not(.strip-wrap)",{start:"top 92%",onEnter:els=>gsap.fromTo(els,{y:46,scale:.985},{y:0,scale:1,duration:1,ease:"expo.out",stagger:.07,overwrite:true})});
    /* hero drifts up and dims as the journey begins */
    gsap.to(".hero-text",{yPercent:-22,opacity:.25,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    /* school progress bar grows from zero to the real share of the year */
    gsap.from("#sc-prog",{scaleX:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:"#sc-bar",start:"top 85%"}});
    /* wheel needle sweeps to today */
    const nd=$("#season-needle");if(nd){gsap.fromTo(nd,{rotation:0,svgOrigin:"260 260"},{rotation:+nd.dataset.rot||0,svgOrigin:"260 260",duration:2,ease:"expo.out",scrollTrigger:{trigger:"#wheel",start:"top 80%"}})}
    /* the film strip of upcoming dates: pinned horizontal travel on wide screens */
    if(wide){const strip=$("#strip"),wrapEl=$("#strip-wrap");const dist=()=>Math.max(0,strip.scrollWidth-wrapEl.clientWidth);
      if(dist()>40)gsap.to(strip,{x:()=>dist(),ease:"none",scrollTrigger:{trigger:wrapEl,start:"center center",end:()=>"+="+dist(),pin:true,scrub:.6,invalidateOnRefresh:true,anticipatePin:1}})}
    /* hero title leans toward the pointer */
    if(matchMedia("(pointer:fine)").matches){const h1=$("#hero-title");const rx=gsap.quickTo(h1,"rotationX",{duration:.9,ease:"power3"}),ry=gsap.quickTo(h1,"rotationY",{duration:.9,ease:"power3"});gsap.set(h1,{transformPerspective:900});addEventListener("pointermove",e=>{if(window.scrollY>innerHeight)return;ry((e.clientX/innerWidth-.5)*-10);rx((e.clientY/innerHeight-.5)*6)},{passive:true})}
    /* numbers count up when they arrive */
    document.querySelectorAll("[data-countup]").forEach(el=>{const v=+el.dataset.countup;if(!v)return;const o={v:0};ScrollTrigger.create({trigger:el,start:"top 90%",once:true,onEnter:()=>gsap.to(o,{v:v,duration:1.6,ease:"expo.out",onUpdate:()=>{el.textContent=ar(Math.round(o.v))+(el.dataset.suffix||"")}})})});
    /* plates land on the table one after another */
    ScrollTrigger.batch(".ec,.stat,.rite",{start:"top 94%",once:true,onEnter:els=>gsap.fromTo(els,{y:26,rotation:()=>gsap.utils.random(-1.4,1.4)},{y:0,rotation:0,duration:.8,ease:"power3.out",stagger:.05,clearProps:"transform"})});
    /* the hero title writes itself once the land is visible */
    gsap.fromTo($("#hero-title"),{clipPath:"inset(-30% -4% -30% 100%)"},{clipPath:"inset(-30% -4% -30% -4%)",duration:1.7,delay:1.5,ease:"power2.inOut"});
    return()=>{};
  });
  ScrollTrigger.addEventListener("refresh",()=>{window.__tw.refresh();onScroll()});
}
setupMotion();
window.__tw.refresh();onScroll();
$("#sheen").classList.add("go");
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{refreshLayout();onScroll()});
addEventListener("load",()=>{refreshLayout();onScroll()});
})();
