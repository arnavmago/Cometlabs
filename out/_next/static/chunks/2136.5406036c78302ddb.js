(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2136],{22307:function(t,e,r){"use strict";r.r(e),r.d(e,{FestecTracks:function(){return j},TrackCard:function(){return b}});var n=r(85893),i=r(86886),l=r(15861),o=r(63403),a=r(54799),s=r(68520),c=r(67294),p=r(25675),u=r.n(p),d=r(2286),h=r(11163),f=r(57632),x=r(5434),g=r(5152),m=r.n(g);let y=m()(()=>r.e(1564).then(r.bind(r,61564)),{loadableGenerated:{webpack:()=>[61564]},ssr:!1}),v=t=>{let{plus:e,value:r}=t,[l,o]=c.useState();c.useEffect(()=>{!async function(){let t=JSON.parse(window.localStorage.getItem("user")||"{}");t&&o(t)}()},[]);let[a,s]=c.useState(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.ZP,{direction:"row",container:!0,spacing:2,justifyContent:"center",children:[j.map((t,e)=>t.title.includes(r)&&e<5&&(0,n.jsx)(i.ZP,{item:!0,children:(0,n.jsx)(b,{user:l,...t})},"pg-"+e)),e&&(0,n.jsx)(i.ZP,{item:!0,children:(0,n.jsx)(d._L,{sx:{textAlign:"center",p:2,height:"80px",width:"66px",border:0,cursor:"pointer"},onClick:()=>{s(!0)},elevation:1,children:(0,n.jsx)(u(),{src:"/plus.png",height:34,width:34,alt:"add-logo"})})})]}),(0,n.jsx)(y,{open:a,setOpen:s,user:l})]})};function b(t){let{selected:e,sx:r,user:p,...g}=t,m=(0,h.useRouter)(),[y,v]=(0,c.useState)(!1),[b,j]=(0,c.useState)("MyLab"),w=t=>{if(p){localStorage.setItem("free",JSON.stringify(t));let e="/lab/"+g.title+"/"+p.username+"/f/"+(0,f.Z)();p.username?m.push(e):m.push("/signin")}else m.push("/signin")},C=(t,e)=>{e&&"backdropClick"==e||v(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d._L,{sx:{"&:hover":{backgroundColor:"surfacevariant.main"},height:"100px",width:"100px",p:1,py:2,display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"transparent",backgroundImage:"none"},onClick:()=>{v(!0)},elevation:1,children:[(0,n.jsx)("div",{style:{width:"40px",height:"40x",margin:"auto",marginTop:"0px"},children:(0,n.jsx)(u(),{src:"/new/".concat(function(t){let e=t.replace("-t","-T");return e.charAt(0).toUpperCase()+e.slice(1)}(g.title),".png"),height:40,width:40,alt:g.title+"-logo"})}),(0,n.jsx)(l.Z,{variant:"BodySmall",children:function(t){let e=t.replace("-t"," T");return e.charAt(0).toUpperCase()+e.slice(1)}(g.title)})]}),(0,n.jsx)(o.Z,{open:y,onClose:C,children:(0,n.jsx)(i.ZP,{container:!0,children:(0,n.jsxs)(i.ZP,{item:!0,sx:{borderRadius:"4px",textAlign:"center",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",justifyContent:"space-between",alignContent:"center",width:{xs:"80%",sm:"70%",md:"50%"}},children:[(0,n.jsx)(a.Z,{sx:{position:"absolute",right:"16px",top:"16px"},onClick:()=>{v(!1)},children:(0,n.jsx)(x.xg7,{})}),(0,n.jsxs)(d._L,{elevation:0,sx:{p:3,pb:{md:7,xs:4},maxWidth:"200x",backgroundColor:"black"},children:[(0,n.jsxs)(l.Z,{paragraph:!0,sx:{mb:5},variant:"TitleLarge",children:["Create ",g.title[0].toUpperCase()+g.title.slice(1),"-LAB"]}),(0,n.jsx)(s.Z,{margin:"normal",required:!0,defaultValue:"MyLab",label:"Enter Lab Name",type:"text",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},onChange:t=>j(t.target.value),InputProps:{endAdornment:(0,n.jsx)(d.Av,{color:"primary",onClick:()=>{w(b)},children:(0,n.jsx)(l.Z,{variant:"LabelMedium",children:"Open"})})},ref:null})]})]})})})]})}e.default=v;let j=[{title:"react"},{title:"angular"},{title:"vue"},{title:"next"},{title:"nuxt"},{title:"react-Typescript"},{title:"next-Typescript"},{title:"quasar"},{title:"quasar-Typescript"},{title:"remix"},{title:"remix-Typescript"},{title:"solid"},{title:"solid-Typescript"},{title:"svelte"},{title:"vite-Lit"},{title:"vite-Lit-Typescript"},{title:"vite-Preact"},{title:"vite-Preact-Typescript"},{title:"vite-React"},{title:"vite-React-Typescript"},{title:"vite-Svelte"},{title:"vite-Svelte-Typescript"},{title:"vite-Vanilla"},{title:"vite-Vanilla-Typescript"},{title:"vue-Typescript"},{title:"express"},{title:"feathers"},{title:"nest"},{title:"java"},{title:"c"},{title:"cpp"},{title:"swift"},{title:"python"}]},11163:function(t,e,r){t.exports=r(96885)},88357:function(t,e,r){"use strict";r.d(e,{w_:function(){return s}});var n=r(67294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(i),o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},a=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)0>e.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};function s(t){return function(e){return n.createElement(c,o({attr:o({},t.attr)},e),function t(e){return e&&e.map(function(e,r){return n.createElement(e.tag,o({key:r},e.attr),t(e.child))})}(t.child))}}function c(t){var e=function(e){var r,i=t.attr,l=t.size,s=t.title,c=a(t,["attr","size","title"]),p=l||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:r,style:o(o({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),t.children)};return void 0!==l?n.createElement(l.Consumer,null,function(t){return e(t)}):e(i)}},57632:function(t,e,r){"use strict";let n;r.d(e,{Z:function(){return c}});let i="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var l={randomUUID:i};let o=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}let s=[];for(let t=0;t<256;++t)s.push((t+256).toString(16).slice(1));var c=function(t,e,r){if(l.randomUUID&&!e&&!t)return l.randomUUID();t=t||{};let n=t.random||(t.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=n[t];return e}return function(t,e=0){return(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase()}(n)}}}]);
//# sourceMappingURL=2136.5406036c78302ddb.js.map