(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6785],{69661:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var o=r(63366),a=r(87462),n=r(67294),l=r(86010),i=r(94780),s=r(90948),c=r(71657),u=r(82066),d=r(85893),f=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=r(1588),p=r(34867);function m(e){return(0,p.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],h=e=>{let{classes:t,variant:r,colorDefault:o}=e;return(0,i.Z)({root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]},m,t)},Z=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),k=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,s.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),y=n.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:i,children:s,className:u,component:f="div",imgProps:v,sizes:p,src:m,srcSet:y,variant:R="circular"}=r,S=(0,o.Z)(r,g),w=null,x=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:o}){let[a,l]=n.useState(!1);return n.useEffect(()=>{if(!r&&!o)return;l(!1);let a=!0,n=new Image;return n.onload=()=>{a&&l("loaded")},n.onerror=()=>{a&&l("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=r,o&&(n.srcset=o),()=>{a=!1}},[e,t,r,o]),a}((0,a.Z)({},v,{src:m,srcSet:y})),j=m||y,M=j&&"error"!==x,P=(0,a.Z)({},r,{colorDefault:!M,component:f,variant:R}),A=h(P);return w=M?(0,d.jsx)(k,(0,a.Z)({alt:i,src:m,srcSet:y,sizes:p,ownerState:P,className:A.img},v)):null!=s?s:j&&i?i[0]:(0,d.jsx)(b,{ownerState:P,className:A.fallback}),(0,d.jsx)(Z,(0,a.Z)({as:f,ownerState:P,className:(0,l.default)(A.root,u),ref:t},S,{children:w}))});var R=y},51233:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var o=r(63366),a=r(87462),n=r(67294),l=r(86010),i=r(59766),s=r(94780),c=r(34867),u=r(13264),d=r(65149),f=r(39707),v=r(66500),p=r(95408),m=r(98700),g=r(85893);let h=["component","direction","spacing","divider","children","className"],Z=(0,v.Z)(),k=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:Z})}let y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],R=({ownerState:e,theme:t})=>{let r=(0,a.Z)({display:"flex",flexDirection:"column"},(0,p.k9)({theme:t},(0,p.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let o=(0,m.hB)(t),a=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),n=(0,p.P$)({values:e.direction,base:a}),l=(0,p.P$)({values:e.spacing,base:a});"object"==typeof n&&Object.keys(n).forEach((e,t,r)=>{let o=n[e];if(!o){let o=t>0?n[r[t-1]]:"column";n[e]=o}});let s=(t,r)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${y(r?n[r]:e.direction)}`]:(0,m.NA)(o,t)}});r=(0,i.Z)(r,(0,p.k9)({theme:t},l,s))}return(0,p.dt)(t.breakpoints,r)};var S=r(90948),w=r(71657);let x=function(e={}){let{createStyledComponent:t=k,useThemeProps:r=b,componentName:i="MuiStack"}=e,u=()=>(0,s.Z)({root:["root"]},e=>(0,c.Z)(i,e),{}),d=t(R),v=n.forwardRef(function(e,t){let i=r(e),s=(0,f.Z)(i),{component:c="div",direction:v="column",spacing:p=0,divider:m,children:Z,className:k}=s,b=(0,o.Z)(s,h),y=u();return(0,g.jsx)(d,(0,a.Z)({as:c,ownerState:{direction:v,spacing:p},ref:t,className:(0,l.default)(y.root,k)},b,{children:m?function(e,t){let r=n.Children.toArray(e).filter(Boolean);return r.reduce((e,o,a)=>(e.push(o),a<r.length-1&&e.push(n.cloneElement(t,{key:`separator-${a}`})),e),[])}(Z,m):Z}))});return v}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiStack"})});var j=x},13264:function(e,t,r){"use strict";var o=r(70182);let a=(0,o.ZP)();t.Z=a},11163:function(e,t,r){e.exports=r(96885)}}]);
//# sourceMappingURL=6785.20a0ce39b850b5f1.js.map