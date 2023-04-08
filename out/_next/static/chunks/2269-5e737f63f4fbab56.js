"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2269],{72269:function(e,t,a){a.r(t),a.d(t,{default:function(){return j},getPercentage:function(){return f}});var i=a(85893),n=a(67294),r=a(87357),s=a(15861),l=a(12389),o=a(98456),c=a(54799),d=a(53854),p=a(82987),u=a(99879),h=a(2286),x=a(47516),m=a(41425),g=a(39327);let f=e=>{let t=0;if(e.info){let a=e.info;if(a.name&&(t+=3),a.mobile&&(t+=3),a.profileImage&&(t+=2),a.email&&(t+=3),a.bio&&(t+=2),a.Username&&(t+=3),a.socials){let e=a.socials;e.facebookUrl&&(t+=1),e.twitterUrl&&(t+=2),e.instagramUrl&&(t+=1),e.linkedinUrl&&(t+=2),e.githubUrl&&(t+=2),e.leetcodeUrl&&(t+=2)}}return e.experience&&e.experience.length&&(t+=6),e.education&&e.education.length&&(t+=6),e.projects&&e.projects.length&&(t+=6),e.skills&&(e.skills.length>=3?t+=6:t+=e.skills.length),2*t};function j(e){let{isUser:t,ResumeData:a,langs:j,score:y,freelabs:b}=e,[v,k]=n.useState(!1),S=f(a);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p.default,{...a,children:(0,i.jsxs)(r.Z,{sx:{my:4,mx:{xs:0,md:7}},children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)(s.Z,{sx:{mr:1},variant:"HeadlineSmall",color:"primary",children:t?"Your ":"".concat(a.info.name,"'s ")}),(0,i.jsx)(s.Z,{sx:{mr:2},variant:"HeadlineSmall",children:"Comet Profile"}),(0,i.jsx)(l.Z,{title:"".concat(S,"% profile is completed."),placement:"right",children:(0,i.jsx)("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:100!=S?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{sx:{position:"absolute",display:"flex"},variant:"LabelLarge",children:S}),(0,i.jsx)(o.Z,{variant:"determinate",value:S})]}):(0,i.jsx)(g.jbV,{})})})]}),(0,i.jsxs)(h._L,{elevation:1,sx:{mt:2,pb:2,position:"relative",backgroundColor:"transparent"},children:[t&&(0,i.jsx)(c.Z,{color:"primary",sx:{position:"absolute",top:"15px",right:"15px",zIndex:10},onClick:()=>{k(!v)},children:v?(0,i.jsx)(x.YiX,{}):(0,i.jsx)(d._vs,{})}),(0,i.jsx)(u.ZP,{score:y,gitusername:a.info.socials.githubUrl.replace("https://github.com/",""),langs:j,readOnly:!v}),t&&(0,i.jsx)(i.Fragment,{children:v?(0,i.jsx)(h.Uc,{sx:{ml:4.5},variant:"outlined",onClick:()=>{k(!v)},children:(0,i.jsx)(s.Z,{variant:"LabelLarge",children:"Save Resume"})}):(0,i.jsx)(h.Uc,{sx:{ml:4.5},variant:"outlined",type:"submit",onClick:()=>{k(!v)},children:(0,i.jsx)(s.Z,{variant:"LabelLarge",children:"Edit Resume"})})})]}),b&&b.length>0&&(0,i.jsx)(h._L,{sx:{backgroundColor:"transparent",mt:4},children:(0,i.jsx)(m.Z,{freelabs:b})})]})})})}},82987:function(e,t,a){a.r(t),a.d(t,{DEFAULT:function(){return d}});var i=a(85893),n=a(31130),r=a(33299),s=a(11163),l=a(20377),o=a(87536);let c=e=>{let{children:t,...a}=e,{data:c}=(0,r.useSession)(),p=null==c?void 0:c.user,{enqueueSnackbar:u}=(0,l.Ds)(),h=(0,s.useRouter)(),x=(0,o.cI)({mode:"onChange",defaultValues:{...d,...a}});x.watch(e=>{localStorage.setItem("resumeAutoSaveData",JSON.stringify(e))});let m=async e=>{let t=p?"".concat(n.Hb.DEV_DASHBOARD).concat(p.username):"".concat(n.Hb.SIGNIN_PAGE),a={info:e.info,education:e.education,experience:e.experience,skills:e.skills,projects:e.projects,languages:e.languages,dummyData:e.dummyData,username:e.username};try{let e="Token "+p.accessToken,i=await fetch("https://api-staging.cometlabs.in/user/createProfile",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:e},body:JSON.stringify({profileObj:a})});if(i.ok){let{message:e,error:n}=await i.json();if(e){let e=p;e.name=a.info.name,e.profileImage=a.info.profileImage,localStorage.setItem("user",JSON.stringify(e)),u("Profile Updated",{variant:"success"}),localStorage.removeItem("resumeAutoSaveData"),h.push(t)}else console.log(n)}else if(401==i.status)u("Unauthorised access!!",{variant:"error"});else throw Error("ON FEST DETAIL SAVE: ERROR")}catch(e){console.log("Fest details could not be saved"),console.log(e)}};return(0,i.jsx)(o.RV,{...x,children:(0,i.jsx)("form",{onSubmit:x.handleSubmit(e=>m(e)),children:t})})};t.default=c;let d={info:{name:"",profileImage:"",email:"",bio:"",mobile:0,socials:{facebookUrl:"",instagramUrl:"",twitterUrl:"",githubUrl:"",linkedinUrl:""},Username:""},experience:[{urlName:"",endDate:"",name:"",description:"",position:"",id:"",urlLink:"",startDate:""}],education:[{institution:"",endDate:"",course:"",description:"",id:"",startDate:""}],skills:[{name:""}],languages:[{fluency:"",language:""}],projects:[{highlights:[""],name:"",description:"",project_url:"",id:"",github_repo:"",tags:[{name:""}]}],dummyData:{LineChartGraph:[],PiChartGraph:[],RadarChartGraph:[],gitscore:0},username:""}},41425:function(e,t,a){var i=a(85893),n=a(2286),r=a(54799),s=a(15861),l=a(87918),o=a(68520),c=a(20040),d=a(86886),p=a(69661),u=a(11163),h=a(67294),x=a(5434),m=a(47516);let g=e=>{let{freelabs:t}=e,[a,n]=(0,h.useState)(t),[p,u]=(0,h.useState)(!1),x=t&&[...new Map(t.map(e=>[e.framework,e])).values()].map(e=>{let{framework:t}=e;return t}),g=e=>{let a=t.filter(t=>t.question.toLowerCase().includes(e.toLowerCase()));console.log(a),n(a)},j=e=>{let a=t.filter(t=>t.framework.toLowerCase().includes(e.toLowerCase()));console.log(a),n(a)};return(0,i.jsxs)("div",{style:{margin:"32px"},children:[(0,i.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[(0,i.jsx)(r.Z,{sx:{mr:1},onClick:()=>{u(!p)},children:p?(0,i.jsx)(m.lU2,{}):(0,i.jsx)(m.OrA,{})}),(0,i.jsx)(s.Z,{width:"100%",variant:"TitleLarge",color:"primary",children:"Practice Playgrounds"}),(0,i.jsx)(l.Z,{sx:{backgroundColor:"surfacevariant.main",color:"primary.main",fontWeight:"bold",ml:2},label:"Total Labs - ".concat(t.length)})]}),(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)(o.Z,{style:{paddingBottom:"0px",width:"150px",maxWidth:"200px"},size:"small",select:!0,label:"Search By Type",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},onChange:e=>{j(e.target.value)},ref:null,children:[(0,i.jsx)(c.Z,{value:"",children:"Select"}),x.map(e=>(0,i.jsx)(c.Z,{value:e,children:e},e))]}),(0,i.jsx)(o.Z,{style:{paddingLeft:"8px",paddingBottom:"0px",width:"150px",maxWidth:"200px"},size:"small",label:"Search Repository",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},onChange:e=>{g(e.target.value)},ref:null})]})]}),!p&&(0,i.jsxs)(d.ZP,{container:!0,spacing:2,sx:{mt:3,justifyContent:"space-around"},children:[a&&a.map(e=>(0,i.jsx)(d.ZP,{item:!0,children:(0,i.jsx)(f,{...e})},e.question_id)),a&&0==a.length&&(0,i.jsx)(s.Z,{variant:"LabelLarge",children:"No Labs found"})]})]})},f=e=>{let t=JSON.parse(localStorage.getItem("user")),a="Token "+t.accessToken,o=(0,u.useRouter)(),c="https://cometlabs.in/lab/"+e.framework+"/"+t.username+"/"+e.type+"/"+e.question_id,d=e.framework.split("-");return(0,i.jsxs)(n.nU,{sx:{cursor:"pointer",width:"250px",transition:"transform 0.3s",":hover":{transform:"scale(1.05)"}},onClick:()=>{window.open(c)},children:[(0,i.jsx)("div",{style:{height:"144px",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center"},children:d&&d.map(e=>(0,i.jsx)(p.Z,{src:"/new/".concat(e,".png")||0,alt:"logo",sx:{height:"50px",width:"50px",marginLeft:"4px",marginRight:"4px"}},e))}),(0,i.jsxs)("div",{style:{padding:"16px"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[(0,i.jsx)(l.Z,{label:(e=>{switch(e){case"f":return"project";case"h":return"hackathon";case"l":return"product";case"g":return"github"}})(e.type),sx:{my:"auto",color:"onsurfacevariant.main"}}),(0,i.jsx)(r.Z,{color:"error",sx:{p:0,my:"auto"},onClick:async t=>{t.stopPropagation();let i={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",authorization:a},body:JSON.stringify({question_id:e.question_id,user_id:e.user_id})};try{(await fetch("https://api-staging.cometlabs.in/labs/deleteSavedUserCode",i)).ok?o.reload():console.log("error")}catch(e){console.log(e)}t.stopPropagation()},children:(0,i.jsx)(x.ZkW,{})})]}),(0,i.jsx)(s.Z,{paragraph:!0,sx:{mt:1,maxHeight:"20px",overflow:"hidden"},variant:"TitleMedium",children:e.question}),(0,i.jsxs)(s.Z,{paragraph:!0,sx:{m:0,color:"onsurfacevariant.main",maxHeight:"24px",overflow:"hidden"},variant:"LabelLarge",children:["Last Modified ",new Date(e.modifiedAt).toDateString()]})]})]})};t.Z=g}}]);
//# sourceMappingURL=2269-5e737f63f4fbab56.js.map