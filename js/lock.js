
(function(){var done=false;function lock(){if(done)return;done=true;var m=document.createElement("meta");m.httpEquiv="Content-Security-Policy";m.content="script-src 'self' file:; img-src 'self' data:; connect-src 'self'";(document.head||document.documentElement).appendChild(m)}
addEventListener("load",function(){var t=setTimeout(lock,4000);try{if(window.claude&&claude.use){Promise.resolve(claude.use("downloads")).then(function(){clearTimeout(t);lock()},function(){clearTimeout(t);lock()})}else{clearTimeout(t);setTimeout(lock,1500)}}catch(e){lock()}})})();
