import T from"react";var g=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],y=g;import{twMerge as I}from"tailwind-merge";var P=Symbol("isTwElement?"),b=(e,n)=>e.reduce((r,o,t)=>r.concat(o||[],n[t]||[]),[]),S=(e,n="")=>{let r=e.join(" ").trim().replace(/\n/g," ").replace(/\s{2,}/g," ").split(" ").filter(t=>t!==","),o=n?n.split(" "):[];return I(...r.concat(o).filter(t=>t!==" "))},O=([e])=>e.charAt(0)!=="$",c=e=>e[P]===!0,C=e=>(n,...r)=>{let o=(t=[])=>{let i=T.forwardRef((a,u)=>{let{$as:p=e,style:x={},...s}=a,m=c(e)?e:p,w=t?t.reduce((l,d)=>Object.assign(l,typeof d=="function"?d(a):d),{}):{},f=c(m)?s:Object.fromEntries(Object.entries(s).filter(O));return T.createElement(m,{...f,style:{...w,...x},ref:u,className:S(b(n,r.map(l=>l({...s,$as:p}))),s.className),...c(e)?{$as:p}:{}})});return i[P]=!0,typeof e!="string"?i.displayName=e.displayName||e.name||"tw.Component":i.displayName="tw."+e,i.withStyle=a=>o(t.concat(a)),i};return o()},A=y.reduce((e,n)=>({...e,[n]:C(n)}),{}),h=Object.assign(C,A),F=h;export{F as default};
//# sourceMappingURL=tailwind-styled-components.esm.js.map
