"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3394,7720],{67720:function(e,t,i){var r=i(63366),a=i(87462),n=i(67294),l=i(86010),o=i(94780),s=i(41796),c=i(90948),d=i(71657),h=i(35097),p=i(85893);let x=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=e=>{let{absolute:t,children:i,classes:r,flexItem:a,light:n,orientation:l,textAlign:s,variant:c}=e;return(0,o.Z)({root:["root",t&&"absolute",c,n&&"light","vertical"===l&&"vertical",a&&"flexItem",i&&"withChildren",i&&"vertical"===l&&"withChildrenVertical","right"===s&&"vertical"!==l&&"textAlignRight","left"===s&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]},h.V,r)},f=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,a.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,a.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,a.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),m=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,a.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),v=n.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:o,className:s,component:c=o?"div":"hr",flexItem:h=!1,light:v=!1,orientation:b="horizontal",role:u="hr"!==c?"separator":void 0,textAlign:j="center",variant:Z="fullWidth"}=i,w=(0,r.Z)(i,x),y=(0,a.Z)({},i,{absolute:n,component:c,flexItem:h,light:v,orientation:b,role:u,textAlign:j,variant:Z}),k=g(y);return(0,p.jsx)(f,(0,a.Z)({as:c,className:(0,l.default)(k.root,s),role:u,ref:t,ownerState:y},w,{children:o?(0,p.jsx)(m,{className:k.wrapper,ownerState:y,children:o}):null}))});t.Z=v},83394:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var r=i(85893),a=i(25675),n=i.n(a);i(67294);var l=i(97735),o=i(87357),s=i(69661),c=i(86886),d=i(15861),h=i(12389),p=i(98456),x=i(67720),g=i(51233),f=i(54799),m=i(2286),v=i(39327);function b(e){let{data:t,percentage:i}=e,a=(0,r.jsx)(o.Z,{sx:{height:"120px",position:"relative",overflow:"hidden"},children:(0,r.jsx)(n(),{src:"https://source.unsplash.com/400x120/?tech,".concat(t.name),layout:"fill",alt:"User bg"})}),b=(0,r.jsx)(o.Z,{sx:{height:"88px",width:"88px",position:"relative",borderRadius:"100%",bgcolor:"white",margin:"4px"},children:(0,r.jsx)(s.Z,{src:"/",alt:"Profile",sx:{height:"80px",width:"80px",margin:"4px"}})});return(0,r.jsxs)(m._L,{sx:{width:350,minHeight:457,padding:"20px",margin:"20px auto",border:0,backgroundColor:"newbackground.main",transition:"transform 0.3s",":hover":{transform:"scale(1.05)"}},children:[(0,r.jsxs)(c.ZP,{container:!0,children:[(0,r.jsx)(c.ZP,{item:!0,xs:12,children:a}),(0,r.jsx)(c.ZP,{item:!0,xs:12,sx:{marginTop:"-60px",mb:"10px",height:"80px",display:"flex",justifyContent:"center"},children:b})]}),(0,r.jsxs)(c.ZP,{container:!0,sx:{pl:2,pr:2},children:[(0,r.jsxs)(c.ZP,{item:!0,xs:12,sx:{mt:1.5},children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(d.Z,{variant:"TitleLarge",component:"p",sx:{height:"28px",overflow:"hidden"},children:t.name}),i&&(0,r.jsx)(h.Z,{title:"".concat(i,"% profile is completed."),placement:"bottom",children:(0,r.jsx)("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:100!=i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{sx:{position:"absolute",display:"flex"},variant:"LabelLarge",children:i}),(0,r.jsx)(p.Z,{variant:"determinate",value:i})]}):(0,r.jsx)(v.jbV,{})})})]}),(0,r.jsx)(d.Z,{variant:"BodyLarge",color:"onsurfacevariant.main",children:t.Username})]}),(0,r.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,r.jsx)(x.Z,{sx:{my:2}}),t.socials&&(0,r.jsxs)(g.Z,{direction:"row",spacing:1,justifyContent:"center",children:[(0,r.jsx)(f.Z,{color:"primary",target:"_blank",href:t.socials.facebookUrl||"#",children:(0,r.jsx)(l.u5I,{})}),(0,r.jsx)(f.Z,{color:"primary",target:"_blank",href:t.socials.linkedinUrl||"#",children:(0,r.jsx)(l.n7M,{})}),(0,r.jsx)(f.Z,{color:"primary",target:"_blank",href:t.socials.githubUrl||"#",children:(0,r.jsx)(l.pZu,{})}),(0,r.jsx)(f.Z,{color:"primary",target:"_blank",href:t.socials.twitterUrl||"#",children:(0,r.jsx)(l.mWf,{})}),(0,r.jsx)(f.Z,{color:"primary",target:"_blank",href:t.socials.instagramUrl||"#",children:(0,r.jsx)(l.Pno,{})})]})]}),(0,r.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,r.jsx)(x.Z,{sx:{mb:2,mt:2}}),t.bio?(0,r.jsx)(d.Z,{paragraph:!0,variant:"BodyLarge",color:"onsurfacevariant.main",align:"left",sx:{mb:2,height:"72px",overflow:"hidden"},children:t.bio}):(0,r.jsxs)(d.Z,{paragraph:!0,variant:"BodyLarge",color:"onsurfacevariant.main",align:"left",sx:{mb:2,height:"72px",overflow:"hidden"},children:["Hi there, this is ",t.name,"."]})]})]})]})}}}]);
//# sourceMappingURL=3394.4446c8b7f7336c68.js.map