(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8042],{87357:function(t,e,r){"use strict";r.d(e,{Z:function(){return x}});var a=r(87462),n=r(63366),i=r(67294),o=r(86010),s=r(49731),l=r(86523),u=r(39707),p=r(96682),d=r(85893);let h=["className","component"];var g=r(37078),m=r(68239);let c=(0,m.Z)(),f=function(t={}){let{defaultTheme:e,defaultClassName:r="MuiBox-root",generateClassName:g}=t,m=(0,s.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(l.Z),c=i.forwardRef(function(t,i){let s=(0,p.Z)(e),l=(0,u.Z)(t),{className:c,component:f="div"}=l,x=(0,n.Z)(l,h);return(0,d.jsx)(m,(0,a.Z)({as:f,ref:i,className:(0,o.default)(c,g?g(r):r),theme:s},x))});return c}({defaultTheme:c,defaultClassName:"MuiBox-root",generateClassName:g.Z.generate});var x=f},65582:function(t,e,r){"use strict";r.d(e,{Z:function(){return W}});var a=r(63366),n=r(87462),i=r(67294),o=r(86010),s=r(28320),l=r(34867),u=r(94780),p=r(65149),d=r(13264),h=r(66500),g=r(85893);let m=["className","component","disableGutters","fixed","maxWidth","classes"],c=(0,h.Z)(),f=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),x=t=>(0,p.Z)({props:t,name:"MuiContainer",defaultTheme:c}),Z=(t,e)=>{let r=t=>(0,l.Z)(e,t),{classes:a,fixed:n,disableGutters:i,maxWidth:o}=t,p={root:["root",o&&`maxWidth${(0,s.Z)(String(o))}`,n&&"fixed",i&&"disableGutters"]};return(0,u.Z)(p,r,a)};var b=r(98216),v=r(90948),y=r(71657);let w=function(t={}){let{createStyledComponent:e=f,useThemeProps:r=x,componentName:s="MuiContainer"}=t,l=e(({theme:t,ownerState:e})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((e,r)=>{let a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:`${a}${t.breakpoints.unit}`}),e},{}),({theme:t,ownerState:e})=>(0,n.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}})),u=i.forwardRef(function(t,e){let i=r(t),{className:u,component:p="div",disableGutters:d=!1,fixed:h=!1,maxWidth:c="lg"}=i,f=(0,a.Z)(i,m),x=(0,n.Z)({},i,{component:p,disableGutters:d,fixed:h,maxWidth:c}),b=Z(x,s);return(0,g.jsx)(l,(0,n.Z)({as:p,ownerState:x,className:(0,o.default)(b.root,u),ref:e},f))});return u}({createStyledComponent:(0,v.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[`maxWidth${(0,b.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,y.Z)({props:t,name:"MuiContainer"})});var W=w},15861:function(t,e,r){"use strict";r.d(e,{Z:function(){return W}});var a=r(63366),n=r(87462),i=r(67294),o=r(86010),s=r(39707),l=r(94780),u=r(90948),p=r(71657),d=r(98216),h=r(1588),g=r(34867);function m(t){return(0,g.Z)("MuiTypography",t)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var c=r(85893);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=t=>{let{align:e,gutterBottom:r,noWrap:a,paragraph:n,variant:i,classes:o}=t,s={root:["root",i,"inherit"!==t.align&&`align${(0,d.Z)(e)}`,r&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,m,o)},Z=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,d.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,n.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=t=>v[t]||t,w=i.forwardRef(function(t,e){let r=(0,p.Z)({props:t,name:"MuiTypography"}),i=y(r.color),l=(0,s.Z)((0,n.Z)({},r,{color:i})),{align:u="inherit",className:d,component:h,gutterBottom:g=!1,noWrap:m=!1,paragraph:v=!1,variant:w="body1",variantMapping:W=b}=l,k=(0,a.Z)(l,f),P=(0,n.Z)({},l,{align:u,color:i,className:d,component:h,gutterBottom:g,noWrap:m,paragraph:v,variant:w,variantMapping:W}),C=h||(v?"p":W[w]||b[w])||"span",M=x(P);return(0,c.jsx)(Z,(0,n.Z)({as:C,ref:e,ownerState:P,className:(0,o.default)(M.root,d)},k))});var W=w},39707:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var a=r(87462),n=r(63366),i=r(59766),o=r(44920);let s=["sx"],l=t=>{var e,r;let a={systemProps:{},otherProps:{}},n=null!=(e=null==t?void 0:null==(r=t.theme)?void 0:r.unstable_sxConfig)?e:o.Z;return Object.keys(t).forEach(e=>{n[e]?a.systemProps[e]=t[e]:a.otherProps[e]=t[e]}),a};function u(t){let e;let{sx:r}=t,o=(0,n.Z)(t,s),{systemProps:u,otherProps:p}=l(o);return e=Array.isArray(r)?[u,...r]:"function"==typeof r?(...t)=>{let e=r(...t);return(0,i.P)(e)?(0,a.Z)({},u,e):u}:(0,a.Z)({},u,r),(0,a.Z)({},p,{sx:e})}},13264:function(t,e,r){"use strict";var a=r(70182);let n=(0,a.ZP)();e.Z=n},51629:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Developers/Evangelists",function(){return r(74140)}])},74140:function(t,e,r){"use strict";r.r(e);var a=r(85893),n=r(65582),i=r(15861),o=r(87357);let s=()=>(0,a.jsxs)(n.Z,{sx:{textAlign:"center",my:5},children:[(0,a.jsx)(i.Z,{paragraph:!0,sx:{mb:5},variant:"DisplayMedium",children:"Comet Delegate Internship Programmer"}),(0,a.jsx)(i.Z,{paragraph:!0,sx:{mb:5},variant:"TitleSmall",children:"2022 - 2023"}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(i.Z,{paragraph:!0,sx:{mb:5},variant:"LabelLarge",children:"About the Programme"}),(0,a.jsx)(i.Z,{paragraph:!0,sx:{mb:5,width:{xs:"100%",md:"95%"}},variant:"LabelLarge",children:"COMETLABS is all set to relaunch “Comet Delegate Internship Programme” to foster young Indian talent by mentorship and facilitating cross boundary learning. It is a nationwide intern hiring drive with a reach of over 2000+ engineering colleges and 1 million+ engineering undergraduates. This internship program is meant to foster cross boundary learning via mentoring sessions and bootcamps as well as tasks to quench the curiosity of interns regarding the corporate world. Thus, facilitating community building."})]})]});e.default=s}},function(t){t.O(0,[9774,2888,179],function(){return t(t.s=51629)}),_N_E=t.O()}]);
//# sourceMappingURL=Evangelists-c44886292bbd1366.js.map