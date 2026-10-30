
/* First thing on the page. The whole site travels inside this file, so the policy can refuse every outside connection, and any HTML the scripts write passes one guard. */
(function(){"use strict";
var d=document,h=d.head||d.documentElement,m=d.createElement("meta");m.httpEquiv="Content-Security-Policy";
m.content="default-src 'none'; script-src 'self' file: 'unsafe-inline'; style-src 'self' file: 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; require-trusted-types-for 'script'";
h.insertBefore(m,h.firstChild);
var BAD=/<\s*(script|iframe|object|embed|base|meta|link|form|animate|set)\b|[\s\/"'<]on[a-z]+\s*=|(href|src|action|formaction|xlink:href)\s*=\s*["']?\s*(data:text|[a-z]*&#|[a-z]*script:)/i;
function clean(v){v=String(v);if(!BAD.test(v))return v;console.error("blocked unsafe HTML");return v.replace(/[&<>"']/g,function(c){return"&#"+c.charCodeAt(0)+";"})}
if(window.trustedTypes&&trustedTypes.createPolicy){try{trustedTypes.createPolicy("default",{createHTML:clean,createScript:function(v){return v},createScriptURL:function(v){return v}})}catch(e){}}
})();
