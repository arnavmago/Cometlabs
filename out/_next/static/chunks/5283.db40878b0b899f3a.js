"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5283],{87357:function(t,e,r){r.d(e,{Z:function(){return v}});var o=r(87462),a=r(63366),n=r(67294),i=r(86010),l=r(49731),s=r(86523),c=r(39707),u=r(96682),p=r(85893);let d=["className","component"];var h=r(37078),g=r(68239);let m=(0,g.Z)(),f=function(t={}){let{defaultTheme:e,defaultClassName:r="MuiBox-root",generateClassName:h}=t,g=(0,l.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(s.Z),m=n.forwardRef(function(t,n){let l=(0,u.Z)(e),s=(0,c.Z)(t),{className:m,component:f="div"}=s,v=(0,a.Z)(s,d);return(0,p.jsx)(g,(0,o.Z)({as:f,ref:n,className:(0,i.default)(m,h?h(r):r),theme:l},v))});return m}({defaultTheme:m,defaultClassName:"MuiBox-root",generateClassName:h.Z.generate});var v=f},54799:function(t,e,r){var o=r(63366),a=r(87462),n=r(67294),i=r(86010),l=r(94780),s=r(41796),c=r(90948),u=r(71657),p=r(82607),d=r(98216),h=r(96239),g=r(85893);let m=["edge","children","className","color","disabled","disableFocusRipple","size"],f=t=>{let{classes:e,disabled:r,color:o,edge:a,size:n}=t,i={root:["root",r&&"disabled","default"!==o&&`color${(0,d.Z)(o)}`,a&&`edge${(0,d.Z)(a)}`,`size${(0,d.Z)(n)}`]};return(0,l.Z)(i,h.r,e)},v=(0,c.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,"default"!==r.color&&e[`color${(0,d.Z)(r.color)}`],r.edge&&e[`edge${(0,d.Z)(r.edge)}`],e[`size${(0,d.Z)(r.size)}`]]}})(({theme:t,ownerState:e})=>(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}),({theme:t,ownerState:e})=>{var r;let o=null==(r=(t.vars||t).palette)?void 0:r[e.color];return(0,a.Z)({},"inherit"===e.color&&{color:"inherit"},"inherit"!==e.color&&"default"!==e.color&&(0,a.Z)({color:null==o?void 0:o.main},!e.disableRipple&&{"&:hover":(0,a.Z)({},o&&{backgroundColor:t.vars?`rgba(${o.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.Fq)(o.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===e.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===e.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${h.Z.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),y=n.forwardRef(function(t,e){let r=(0,u.Z)({props:t,name:"MuiIconButton"}),{edge:n=!1,children:l,className:s,color:c="default",disabled:p=!1,disableFocusRipple:d=!1,size:h="medium"}=r,y=(0,o.Z)(r,m),Z=(0,a.Z)({},r,{edge:n,color:c,disabled:p,disableFocusRipple:d,size:h}),b=f(Z);return(0,g.jsx)(v,(0,a.Z)({className:(0,i.default)(b.root,s),centerRipple:!0,focusRipple:!d,disabled:p,ref:e,ownerState:Z},y,{children:l}))});e.Z=y},96239:function(t,e,r){r.d(e,{r:function(){return n}});var o=r(1588),a=r(34867);function n(t){return(0,a.Z)("MuiIconButton",t)}let i=(0,o.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);e.Z=i},15861:function(t,e,r){r.d(e,{Z:function(){return C}});var o=r(63366),a=r(87462),n=r(67294),i=r(86010),l=r(39707),s=r(94780),c=r(90948),u=r(71657),p=r(98216),d=r(1588),h=r(34867);function g(t){return(0,h.Z)("MuiTypography",t)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(85893);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=t=>{let{align:e,gutterBottom:r,noWrap:o,paragraph:a,variant:n,classes:i}=t,l={root:["root",n,"inherit"!==t.align&&`align${(0,p.Z)(e)}`,r&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return(0,s.Z)(l,g,i)},y=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,p.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=t=>b[t]||t,w=n.forwardRef(function(t,e){let r=(0,u.Z)({props:t,name:"MuiTypography"}),n=x(r.color),s=(0,l.Z)((0,a.Z)({},r,{color:n})),{align:c="inherit",className:p,component:d,gutterBottom:h=!1,noWrap:g=!1,paragraph:b=!1,variant:w="body1",variantMapping:C=Z}=s,z=(0,o.Z)(s,f),R=(0,a.Z)({},s,{align:c,color:n,className:p,component:d,gutterBottom:h,noWrap:g,paragraph:b,variant:w,variantMapping:C}),k=d||(b?"p":C[w]||Z[w])||"span",O=v(R);return(0,m.jsx)(y,(0,a.Z)({as:k,ref:e,ownerState:R,className:(0,i.default)(O.root,p)},z))});var C=w},90133:function(t,e,r){r.d(e,{Z:function(){return c}});var o=r(85893),a=r(87357),n=r(15861),i=r(25675),l=r.n(i),s=r(67294);function c(t){let{isDark:e}=t,[r,i]=s.useState("0");return(s.useEffect(()=>{window.addEventListener("storage",()=>{let t=window.localStorage.getItem("theme")||"0";i(t)})},[]),e)?(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(l(),{src:"/Dark_Logo.svg",alt:"logo",height:14,width:110}),(0,o.jsx)(n.Z,{paragraph:!0,sx:{mb:0,mt:-.5},color:"onsurfacevariant.main",variant:"LabelSmall",children:"(Backed by CIE-IIITH)"})]}):(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(l(),{src:"0"==r?"/Dark_Logo.svg":"/Light_Logo.svg",alt:"logo",height:14,width:110}),(0,o.jsx)(n.Z,{paragraph:!0,sx:{mb:0,mt:-.5},color:"onsurfacevariant.main",variant:"LabelSmall",children:"(Backed by CIE-IIITH)"})]})}},88357:function(t,e,r){r.d(e,{w_:function(){return s}});var o=r(67294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=o.createContext&&o.createContext(a),i=function(){return(i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},l=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>e.indexOf(o)&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)0>e.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(r[o[a]]=t[o[a]]);return r};function s(t){return function(e){return o.createElement(c,i({attr:i({},t.attr)},e),function t(e){return e&&e.map(function(e,r){return o.createElement(e.tag,i({key:r},e.attr),t(e.child))})}(t.child))}}function c(t){var e=function(e){var r,a=t.attr,n=t.size,s=t.title,c=l(t,["attr","size","title"]),u=n||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,c,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),t.children)};return void 0!==n?o.createElement(n.Consumer,null,function(t){return e(t)}):e(a)}}}]);
//# sourceMappingURL=5283.db40878b0b899f3a.js.map