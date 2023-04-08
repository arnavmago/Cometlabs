"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7059],{91057:function(e,t,a){var n,i=a(63366),r=a(87462),o=a(67294),s=a(86010),l=a(94780),d=a(98216),c=a(15861),h=a(47167),p=a(74423),u=a(90948),m=a(19558),g=a(71657),x=a(85893);let f=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(e,t)=>{let{ownerState:a}=e;return[t.root,t[`position${(0,d.Z)(a.position)}`],!0===a.disablePointerEvents&&t.disablePointerEvents,t[a.variant]]},v=e=>{let{classes:t,disablePointerEvents:a,hiddenLabel:n,position:i,size:r,variant:o}=e,s={root:["root",a&&"disablePointerEvents",i&&`position${(0,d.Z)(i)}`,o,n&&"hiddenLabel",r&&`size${(0,d.Z)(r)}`]};return(0,l.Z)(s,m.w,t)},Z=(0,u.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:b})(({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${m.Z.positionStart}&:not(.${m.Z.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),w=o.forwardRef(function(e,t){let a=(0,g.Z)({props:e,name:"MuiInputAdornment"}),{children:l,className:d,component:u="div",disablePointerEvents:m=!1,disableTypography:b=!1,position:w,variant:y}=a,j=(0,i.Z)(a,f),k=(0,p.Z)()||{},S=y;y&&k.variant,k&&!S&&(S=k.variant);let C=(0,r.Z)({},a,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:m,position:w,variant:S}),T=v(C);return(0,x.jsx)(h.Z.Provider,{value:null,children:(0,x.jsx)(Z,(0,r.Z)({as:u,ownerState:C,className:(0,s.default)(T.root,d),ref:t},j,{children:"string"!=typeof l||b?(0,x.jsxs)(o.Fragment,{children:["start"===w?n||(n=(0,x.jsx)("span",{className:"notranslate",children:"​"})):null,l]}):(0,x.jsx)(c.Z,{color:"text.secondary",children:l})}))})});t.Z=w},19558:function(e,t,a){a.d(t,{w:function(){return r}});var n=a(1588),i=a(34867);function r(e){return(0,i.Z)("MuiInputAdornment",e)}let o=(0,n.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);t.Z=o},88078:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(63366),i=a(87462),r=a(67294),o=a(86010),s=a(70917),l=a(94780),d=a(41796),c=a(90948),h=a(71657),p=a(1588),u=a(34867);function m(e){return(0,u.Z)("MuiSkeleton",e)}(0,p.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g=a(85893);let x=["animation","className","component","height","style","variant","width"],f=e=>e,b,v,Z,w,y=e=>{let{classes:t,variant:a,animation:n,hasChildren:i,width:r,height:o}=e;return(0,l.Z)({root:["root",a,n,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]},m,t)},j=(0,s.F4)(b||(b=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,s.F4)(v||(v=f`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let a=String(e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",n=parseFloat(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,d.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(Z||(Z=f`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),j),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(w||(w=f`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,(t.vars||t).palette.action.hover)),C=r.forwardRef(function(e,t){let a=(0,h.Z)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:l="span",height:d,style:c,variant:p="text",width:u}=a,m=(0,n.Z)(a,x),f=(0,i.Z)({},a,{animation:r,component:l,variant:p,hasChildren:Boolean(m.children)}),b=y(f);return(0,g.jsx)(S,(0,i.Z)({as:l,ref:t,className:(0,o.default)(b.root,s),ownerState:f},m,{style:(0,i.Z)({width:u,height:d},c)}))});var T=C},21964:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(63366),i=a(87462),r=a(67294),o=a(86010),s=a(94780),l=a(98216),d=a(90948),c=a(49299),h=a(74423),p=a(82607),u=a(1588),m=a(34867);function g(e){return(0,m.Z)("PrivateSwitchBase",e)}(0,u.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var x=a(85893);let f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=e=>{let{classes:t,checked:a,disabled:n,edge:i}=e,r={root:["root",a&&"checked",n&&"disabled",i&&`edge${(0,l.Z)(i)}`],input:["input"]};return(0,s.Z)(r,g,t)},v=(0,d.ZP)(p.Z)(({ownerState:e})=>(0,i.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),Z=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),w=r.forwardRef(function(e,t){let{autoFocus:a,checked:r,checkedIcon:s,className:l,defaultChecked:d,disabled:p,disableFocusRipple:u=!1,edge:m=!1,icon:g,id:w,inputProps:y,inputRef:j,name:k,onBlur:S,onChange:C,onFocus:T,readOnly:$,required:I=!1,tabIndex:P,type:L,value:z}=e,R=(0,n.Z)(e,f),[A,N]=(0,c.Z)({controlled:r,default:Boolean(d),name:"SwitchBase",state:"checked"}),E=(0,h.Z)(),F=e=>{T&&T(e),E&&E.onFocus&&E.onFocus(e)},O=e=>{S&&S(e),E&&E.onBlur&&E.onBlur(e)},B=e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;N(t),C&&C(e,t)},M=p;E&&void 0===M&&(M=E.disabled);let _=(0,i.Z)({},e,{checked:A,disabled:M,disableFocusRipple:u,edge:m}),W=b(_);return(0,x.jsxs)(v,(0,i.Z)({component:"span",className:(0,o.default)(W.root,l),centerRipple:!0,focusRipple:!u,disabled:M,tabIndex:null,role:void 0,onFocus:F,onBlur:O,ownerState:_,ref:t},R,{children:[(0,x.jsx)(Z,(0,i.Z)({autoFocus:a,checked:r,defaultChecked:d,className:W.input,disabled:M,id:"checkbox"===L||"radio"===L?w:void 0,name:k,onChange:B,readOnly:$,ref:j,required:I,ownerState:_,tabIndex:P,type:L},"checkbox"===L&&void 0===z?{}:{value:z},y)),A?s:g]}))});var y=w},66416:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(85893),i=a(29488),r=a(86886),o=a(67294),s=a(87357),l=a(15861),d=a(63366),c=a(87462),h=a(86010),p=a(94780),u=a(41796),m=a(98216),g=a(21964),x=a(71657),f=a(90948),b=a(1588),v=a(34867);function Z(e){return(0,v.Z)("MuiSwitch",e)}let w=(0,b.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),y=["className","color","edge","size","sx"],j=e=>{let{classes:t,edge:a,size:n,color:i,checked:r,disabled:o}=e,s={root:["root",a&&`edge${(0,m.Z)(a)}`,`size${(0,m.Z)(n)}`],switchBase:["switchBase",`color${(0,m.Z)(i)}`,r&&"checked",o&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=(0,p.Z)(s,Z,t);return(0,c.Z)({},t,l)},k=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,m.Z)(a.edge)}`],t[`size${(0,m.Z)(a.size)}`]]}})(({ownerState:e})=>(0,c.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${w.thumb}`]:{width:16,height:16},[`& .${w.switchBase}`]:{padding:4,[`&.${w.checked}`]:{transform:"translateX(16px)"}}})),S=(0,f.ZP)(g.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.switchBase,{[`& .${w.input}`]:t.input},"default"!==a.color&&t[`color${(0,m.Z)(a.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${w.checked}`]:{transform:"translateX(20px)"},[`&.${w.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${w.checked} + .${w.track}`]:{opacity:.5},[`&.${w.disabled} + .${w.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${w.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>(0,c.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${w.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,u.$n)(e.palette[t.color].main,.62):(0,u._j)(e.palette[t.color].main,.55)}`}},[`&.${w.checked} + .${w.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),C=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),T=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),$=o.forwardRef(function(e,t){let a=(0,x.Z)({props:e,name:"MuiSwitch"}),{className:i,color:r="primary",edge:o=!1,size:s="medium",sx:l}=a,p=(0,d.Z)(a,y),u=(0,c.Z)({},a,{color:r,edge:o,size:s}),m=j(u),g=(0,n.jsx)(T,{className:m.thumb,ownerState:u});return(0,n.jsxs)(k,{className:(0,h.default)(m.root,i),sx:l,ownerState:u,children:[(0,n.jsx)(S,(0,c.Z)({type:"checkbox",icon:g,checkedIcon:g,ref:t,ownerState:u},p,{classes:(0,c.Z)({},m,{root:m.switchBase})})),(0,n.jsx)(C,{className:m.track,ownerState:u})]})});var I=a(68520),P=a(91057),L=a(87536),z=a(20377),R=a(53854),A=a(11163),N=a.n(A),E=a(2286),F=a(89583);let O=e=>{let{user:t,teamm:a,id:i}=e,r=a,{handleSubmit:d,control:c}=(0,L.cI)(),{enqueueSnackbar:h}=(0,z.Ds)(),p=!r||1==r.max_member_count,[u,m]=o.useState(p),g=e=>{m(e.target.checked),!1==u&&r?v():!0==u&&r&&v()},x=async e=>{try{console.log(u?1:4,"max");let n="Token "+t.accessToken,r=await fetch("https://api-staging.cometlabs.in/organize/createTeam",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:n},body:JSON.stringify({team_name:e,eventId:i,max_member_count:u?1:4})});if(r.ok){let{success:e,error:t,team:n}=await r.json();e?(a=n,N().reload()):console.log(t)}else throw Error("ERROR")}catch(e){console.log(e)}},f=async e=>{let{TeamID:n}=e;try{let e="Token "+t.accessToken,r=await fetch("https://api-staging.cometlabs.in/organize/joinTeam",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:e},body:JSON.stringify({team_id:n,eventId:i})}),{success:o,error:s,team:l}=await r.json();o?(a=l,N().reload()):console.log(s)}catch(e){console.log(e)}},b=async e=>{let{email:a}=e;console.log(a);try{let e="Token "+t.accessToken,n=await fetch("https://api-staging.cometlabs.in/organize/inviteTeam",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:e},body:JSON.stringify({email:[a],eventId:i})});if(n.ok){let{success:e,error:t}=await n.json();e?h("Email Successfully Sent to ".concat(a),{variant:"success"}):console.log(t)}else throw Error("ERROR")}catch(e){console.log(e)}},v=async()=>{try{let e="Token "+t.accessToken,a=await fetch("https://api-staging.cometlabs.in/organize/deleteTeam",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:e},body:JSON.stringify({email:t.email,eventId:i,team_id:t.id})}),{success:n,error:r}=await a.json();n?N().reload():console.log(r)}catch(e){console.log(e)}},Z=async()=>{try{let e="Token "+t.accessToken,a=await fetch("https://api-staging.cometlabs.in/organize/leaveTeam",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:e},body:JSON.stringify({eventId:i})}),{success:n,error:r}=await a.json();n?N().reload():console.log(r)}catch(e){console.log(e)}};return(0,n.jsxs)(s.Z,{sx:{padding:"30px",minHeight:"calc(100vh - 64px)",maxWidth:"700px",margin:"auto"},children:[(0,n.jsx)(l.Z,{paragraph:!0,variant:"LabelLarge",sx:{padding:"0 20px 20px 20px"},children:"How would you like to Participate?"}),(0,n.jsxs)(s.Z,{sx:{display:"flex",alignItems:"baseline",justifyContent:"space-between"},columnGap:1,children:[(0,n.jsx)(l.Z,{variant:"LabelLarge",sx:{width:"200px",textAlign:"center"},children:"I'm hacking with my team"}),(0,n.jsx)($,{disabled:!!r,checked:u,onChange:g,inputProps:{"aria-label":"controlled"}}),(0,n.jsx)(l.Z,{variant:"LabelLarge",sx:{width:"200px",textAlign:"center"},children:"I'm joining as lone wolf"})]}),r&&(0,n.jsx)(l.Z,{sx:{width:"100%",textAlign:"center",mt:2},paragraph:!0,variant:"LabelLarge",children:u?"I'm joining as lone wolf":"I'm hacking with my team"}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:(0,n.jsx)(L.Qr,{name:"TeamName",control:c,defaultValue:r&&r.team_name||"",render:e=>{let{field:t,fieldState:{error:a}}=e;return(0,n.jsx)(I.Z,{margin:"normal",required:!0,fullWidth:!0,disabled:u||!!r,id:"TeamName",label:"Team Name",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},InputProps:{endAdornment:(0,n.jsx)(P.Z,{position:"end",children:(0,n.jsx)(E.Uc,{onClick:()=>{x(t.value)},disabled:u||!!r,startIcon:(0,n.jsx)(R.b9W,{}),type:"submit",children:(0,n.jsx)(l.Z,{variant:"LabelLarge",children:"Create Team"})})})},autoComplete:"TeamName",error:!!a,helperText:a?a.message:null,...t,ref:null})}})}),(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(s.Z,{component:"form",onSubmit:d(b),sx:{mt:"20px",mb:"20px"},children:[(0,n.jsx)(l.Z,{paragraph:!0,textAlign:"center",sx:{color:{checked:"onsurfacevariant.main"}},variant:"LabelLarge",children:"Invite your Clan"}),(0,n.jsx)(L.Qr,{name:"email",control:c,render:e=>{let{field:t,fieldState:{error:a}}=e;return(0,n.jsx)(I.Z,{margin:"normal",required:!0,id:"email",label:"Email Address",autoComplete:"email",autoFocus:!0,disabled:u,fullWidth:!0,inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},InputProps:{endAdornment:(0,n.jsx)(P.Z,{position:"end",children:(0,n.jsx)(E.Uc,{disabled:u,startIcon:(0,n.jsx)(R.b9W,{}),type:"submit",children:(0,n.jsx)(l.Z,{variant:"LabelLarge",children:"Add Developers"})})})},error:!!a,helperText:a?a.message:null,...t,ref:null,sx:{margin:"0px"}})}})]}),(0,n.jsx)(s.Z,{children:a&&a.members&&a.members.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{sx:{mb:2,display:"flex",alignItems:"flex-end",justifyContent:"center"},children:[(0,n.jsx)(I.Z,{InputProps:{startAdornment:(0,n.jsx)(P.Z,{position:"start",children:(0,n.jsx)(F.Xws,{})})},value:e.info.name,variant:"standard",disabled:!0}),0==t&&(0,n.jsx)(l.Z,{variant:"LabelLarge",sx:{pl:"10px"},children:"(Leader)"})]},t)}))}),(0,n.jsxs)(s.Z,{component:"form",sx:{mb:2},onSubmit:d(f),children:[(0,n.jsx)(l.Z,{paragraph:!0,textAlign:"center",variant:"LabelLarge",children:"Already have a Team Invite?"}),(0,n.jsx)(L.Qr,{name:"TeamID",control:c,defaultValue:r&&r.team_id||"",render:e=>{let{field:t,fieldState:{error:a}}=e;return(0,n.jsx)(I.Z,{margin:"normal",required:!0,fullWidth:!0,id:"TeamID",disabled:u||!!r,label:"Team Code",autoComplete:"TeamID",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},InputProps:{endAdornment:(0,n.jsx)(P.Z,{position:"end",children:(0,n.jsx)(E.Uc,{disabled:u||!!r,startIcon:(0,n.jsx)(R.b9W,{}),type:"submit",children:(0,n.jsx)(l.Z,{variant:"LabelLarge",children:"Join this Team"})})})},error:!!a,helperText:a?a.message:null,...t,ref:null})}})]})]})]}),(0,n.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"space-around"},children:[!!r&&(0,n.jsx)(n.Fragment,{children:r.team_id==t.id?(0,n.jsx)(E.Uc,{onClick:()=>{v()},children:(0,n.jsx)(l.Z,{variant:"LabelLarge",children:"DeleteTeam"})}):(0,n.jsx)(E.Uc,{onClick:()=>{Z()},children:(0,n.jsx)(l.Z,{variant:"LabelLarge",children:"LeaveTeam"})})}),!r&&u&&(0,n.jsx)(E.IH,{sx:{mt:1},onClick:()=>{x(t.username)},children:(0,n.jsx)(l.Z,{variant:"LabelLarge",children:"Continue"})})]})]})};var B=a(61879);let M=e=>{var t;let{user:a,teamm:s,id:l,submission:d,hack:c,fest:h,type:p}=e,u="Hi, ".concat(null===(t=a.username)||void 0===t?void 0:t.split(" ").slice(0,1).join(" "),"!");return o.useEffect(()=>{s&&localStorage.setItem("team",JSON.stringify(s))},[s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{type:p,id:l}),(0,n.jsxs)(r.ZP,{container:!0,sx:{display:"flex",mt:"64px"},children:[(0,n.jsx)(r.ZP,{item:!0,xs:"auto",sx:{minWidth:{md:"550px",xs:"100%"}},children:(0,n.jsx)(O,{user:a,teamm:s,id:l})}),(0,n.jsx)(r.ZP,{item:!0,xs:!0,children:(0,n.jsx)(B.Z,{fest:h,hack:c,type:p,user:u,id:l,props:d,team:s})})]})]})};var _=M}}]);
//# sourceMappingURL=7059.f4cfe3f90cd379d3.js.map