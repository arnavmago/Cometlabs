(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7657],{32031:function(e,i,n){"use strict";n.d(i,{dN:function(){return r},zX:function(){return t}});let r=async(e,i,n)=>{let r=new FormData;r.append("fileName",i,i.name),r.append("festId",e),console.log(r);let t=await fetch("https://api-staging.cometlabs.in/fests/uploadToFestS3",{method:"POST",headers:{Authorization:n},body:r}),l=null;return t.ok&&(l=(t=await t.json()).url),l},t=async(e,i,n)=>{console.log(e);let r=new FormData;r.append("fileName",i,i.name),r.append("email",e);let t=await fetch("https://api-staging.cometlabs.in/user/uploadProfileImage",{method:"POST",headers:{Authorization:n},body:r}),l=null;return t.ok&&(l=(t=await t.json()).url),l}},20777:function(e,i,n){"use strict";var r=n(85893),t=n(87536),l=n(88078),s=n(15861),a=n(87357),o=n(68520),d=n(81329);n(74360);var c=n(5152),x=n.n(c),p=n(34546),h=n.n(p);let u=x()(()=>n.e(6310).then(n.bind(n,56310)),{loadableGenerated:{webpack:()=>[56310]},loading:()=>(0,r.jsx)(l.Z,{height:400,width:"100%"})}),j=x()(()=>n.e(5318).then(n.bind(n,15318)),{loadableGenerated:{webpack:()=>[15318]},loading:()=>(0,r.jsx)(l.Z,{height:350,width:"100%"})}),m=e=>{let{readOnly:i}=e,{watch:n}=(0,t.Gc)(),l=n("description");return Boolean(l)?i?(0,r.jsxs)("div",{children:[!!l.videoUrl&&(0,r.jsx)(a.Z,{sx:{borderRadius:"12px",overflow:"hidden"},children:(0,r.jsx)(u,{url:l.videoUrl,height:"400px",width:"inherit"})}),(0,r.jsx)(s.Z,{variant:"BodyMedium",className:"content",children:(0,r.jsx)(d.D,{className:h().reactMarkDown,children:l.description})})]}):(0,r.jsxs)("div",{children:[(0,r.jsx)(t.Qr,{name:"description.description",defaultValue:"",rules:{required:"Fest description must be filled"},render:e=>{let{field:i}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(j,{placeholder:"Enter description with minimum 100 words.",style:{height:350},value:i.value,renderHTML:e=>(i.onChange(e),(0,r.jsx)(s.Z,{variant:"BodyMedium",className:"content",children:(0,r.jsx)(d.D,{className:h().reactMarkDown,children:e})}))})})}}),(0,r.jsx)(t.Qr,{name:"description.videoUrl",defaultValue:"",rules:{pattern:{value:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,message:"Please enter a valid URL"}},render:e=>{let{field:{ref:i,...n},fieldState:{error:t}}=e;return(0,r.jsx)(o.Z,{sx:{mt:2},placeholder:"Fest video URL from YouTube, Vimeo, SoundCloud, Facebook, etc",fullWidth:!0,inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},error:!!t,variant:"standard",...n})}})]}):(0,r.jsx)(s.Z,{variant:"LabelLarge",align:"center",sx:{mt:2},children:"No Description Provided"})};i.Z=m},94817:function(e,i,n){"use strict";var r=n(85893),t=n(88078),l=n(51233),s=n(87357),a=n(15861),o=n(54799),d=n(68520),c=n(67294),x=n(53854),p=n(87536),h=n(5152),u=n.n(h),j=n(34546),m=n.n(j),g=n(81329),f=n(2286);let b=u()(()=>n.e(5318).then(n.bind(n,15318)),{loadableGenerated:{webpack:()=>[15318]},loading:()=>(0,r.jsx)(t.Z,{height:350,width:"100%"})}),Z=e=>{let{readOnly:i}=e,[n,t]=c.useState(!1),h=["title","description.text"],{trigger:u,setValue:j,getValues:Z,watch:v}=(0,p.Gc)(),w=v("prizes")||[];console.log(w);let y=e=>{j("prizes",w.filter(i=>i.title!==e))},k=()=>{h.forEach(e=>{j(e,"")})},S=async e=>{let i=await u(h);if(i){let e=Z(h);j("prizes",[...w,{title:e[0],description:e[1]}]),console.log(w),k(),t(!1)}};return(0,r.jsxs)(l.Z,{rowGap:2,children:[(0,r.jsx)(s.Z,{children:!i&&(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(x.eW7,{fontSize:"1.5rem"}),(0,r.jsx)(a.Z,{variant:"TitleMedium",sx:{ml:"12px"},children:"Is your Event Got Prizes, add from here (Optional)"})]})}),(0,r.jsx)(s.Z,{children:0===w.length?(0,r.jsx)(a.Z,{variant:"LabelLarge",component:"p",align:"center",children:"No Prices Added"}):(0,r.jsx)(r.Fragment,{children:w.map(e=>(0,r.jsxs)(f._L,{sx:{padding:"20px 0",mb:4,position:"relative",backgroundColor:"surfacevariant.main",border:0},children:[!i&&(0,r.jsx)(o.Z,{color:"error",sx:{position:"absolute",top:"10px",right:"16px"},onClick:()=>{y(e.title)},children:(0,r.jsx)(x.Bhs,{})}),(0,r.jsxs)(l.Z,{sx:{margin:"0 20px",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[(0,r.jsx)(a.Z,{variant:"TitleLarge",color:"onsurfacevariant.main",children:e.title}),(0,r.jsx)(a.Z,{variant:"BodyLarge",className:"content",children:(0,r.jsx)(g.D,{className:m().reactMarkDown,children:e.description})})]})]},e.title))})}),(0,r.jsx)(s.Z,{children:n?(0,r.jsxs)(f._L,{sx:{width:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",padding:"8px 24px"},children:[(0,r.jsxs)(l.Z,{direction:"row",sx:{justifyContent:"space-between",padding:"8px 24px 8px 0"},children:[(0,r.jsx)(o.Z,{color:"error",onClick:()=>{t(!1)},children:(0,r.jsx)(x.Bhs,{})}),(0,r.jsx)(o.Z,{color:"primary",onClick:S,children:(0,r.jsx)(x.HQD,{})})]}),(0,r.jsx)(s.Z,{sx:{pb:3},children:(0,r.jsx)(p.Qr,{name:"title",defaultValue:"",rules:{required:"Required"},render:e=>{let{field:{ref:i,...n},fieldState:{error:t}}=e;return(0,r.jsx)(d.Z,{fullWidth:!0,margin:"none",variant:"standard",size:"small",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},label:"Prize Title, e.g. First prize",error:!!t,...n})}})}),(0,r.jsx)(s.Z,{sx:{pb:2},children:(0,r.jsx)(p.Qr,{name:"description.text",defaultValue:"",rules:{required:"Price Details here..."},render:e=>{let{field:i}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(b,{style:{height:350},value:i.value,renderHTML:e=>(i.onChange(e),(0,r.jsx)(a.Z,{variant:"BodyMedium",className:"content",children:(0,r.jsx)(g.D,{className:m().reactMarkDown,children:e})}))})})}})})]}):!i&&(0,r.jsx)(f.IH,{fullWidth:!0,onClick:()=>t(!0),children:(0,r.jsx)(a.Z,{variant:"LabelLarge",children:"Add Prizes"})})})]})};i.Z=Z},76233:function(e,i,n){"use strict";var r=n(85893);let t=e=>{let{readOnly:i}=e;return(0,r.jsx)("div",{children:"Schedule here"})};i.Z=t},83262:function(e,i,n){"use strict";var r=n(85893),t=n(90629),l=n(88078),s=n(51233),a=n(87357),o=n(15861),d=n(86886),c=n(54799),x=n(63403),p=n(68520),h=n(20040),u=n(53854),j=n(25675),m=n.n(j),g=n(67294),f=n(87536),b=n(33299),Z=n(32031),v=n(53416),w=n(5152),y=n.n(w),k=n(13264),S=n(2286);let z=(0,k.Z)("div")({height:"3px",flexGrow:1,borderRadius:"8px"}),L=(0,k.Z)(t.Z)({borderRadius:"12px",height:"inherit",width:"100%",overflow:"hidden",position:"relative",padding:"8px"}),P=y()(()=>Promise.all([n.e(5162),n.e(7461)]).then(n.bind(n,67461)),{loadableGenerated:{webpack:()=>[67461]},loading:()=>(0,r.jsx)(l.Z,{height:400,width:"100%"})}),C=e=>{let{readOnly:i}=e,[n,t]=g.useState(!1),{trigger:l,setValue:j,getValues:w,watch:y}=(0,f.Gc)(),k=y("sponsor")||[],C=["sponsorTitle","sponsorBanner"],{data:M}=(0,b.useSession)();console.log(k);let T=async e=>{console.log("inside");let i=await l(C);if(i){let e=w(C);j("sponsor",[...k,{sponsorLabel:e[0],bannerSize:e[1],sponsor:[]}])}},D=async e=>{let i=await (null==M?void 0:M.user),n=await "Token "+i.accessToken,r=await (0,Z.dN)(w("festId"),e[0],n);if(r){let e=await l(C);if(e){let e=w(C);console.log(e);let i={imageUrl:r,id:(0,v.x0)()};for(let n in console.log(i),k)e[0]==k[n].sponsorLabel&&console.log(n)}}else alert("Image Upload Error")};return(0,r.jsxs)(s.Z,{rowGap:2,children:[!i&&(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(u.eW7,{fontSize:"1.5rem"}),(0,r.jsx)(o.Z,{variant:"TitleMedium",sx:{fontWeight:500,ml:"12px"},children:"Got any Sponsors? Add here (Optional)"})]}),(0,r.jsx)(a.Z,{children:0===k.length?(0,r.jsx)(o.Z,{variant:"LabelLarge",align:"center",children:"No Sponsors Added"}):(0,r.jsx)(r.Fragment,{children:k.map(e=>(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,r.jsx)(z,{sx:{backgroundColor:e.sponsorLabel||"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")")}}),(0,r.jsx)(o.Z,{variant:"BodyMedium",sx:{textTransform:"capitalize"},children:e.sponsorLabel}),(0,r.jsx)(z,{sx:{backgroundColor:e.sponsorLabel||"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")")}})]}),(0,r.jsxs)(d.ZP,{container:!0,sx:{padding:"16px 8px 8px"},spacing:2,children:[e.sponsor&&e.sponsor.map(n=>(0,r.jsx)(d.ZP,{item:!0,xs:3*e.bannerSize,children:(0,r.jsxs)(L,{elevation:2,sx:{height:100*e.bannerSize},children:[!i&&(0,r.jsx)(c.Z,{size:"small",color:"secondary",sx:{position:"absolute",top:"12px",right:"12px",zIndex:10},children:(0,r.jsx)(u.C9x,{})}),(0,r.jsx)(m(),{height:100*e.bannerSize||100,width:100*e.bannerSize||100,layout:"responsive",objectFit:"contain",src:n.imageUrl,alt:n.imageUrl+" sponsor poster"})]})},n.id)),!i&&(0,r.jsx)(d.ZP,{item:!0,xs:3*e.bannerSize,sx:{height:100*e.bannerSize},children:(0,r.jsx)(L,{elevation:2,children:(0,r.jsx)(P,{multiple:!0,accept:"image/jpeg, image/jpg, image/png",maxFiles:10,onDrop:D,children:(0,r.jsx)(u.qX3,{fontSize:"1.5rem"})})})})]})]},e.sponsorLabel))})}),(0,r.jsx)(a.Z,{children:n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,{open:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsx)(d.ZP,{container:!0,children:(0,r.jsx)(d.ZP,{item:!0,xs:2,md:4,sx:{textAlign:"center",backgroundColor:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",justifyContent:"space-between",alignContent:"center"},children:(0,r.jsxs)(s.Z,{rowGap:6,sx:{margin:"20px 40px"},children:[(0,r.jsx)(o.Z,{id:"modal-modal-title",variant:"TitleMedium",children:"Sponsor Title and Banner Size"}),(0,r.jsxs)(d.ZP,{container:!0,alignItems:"flex-end",justifyContent:"space-between",spacing:3,children:[(0,r.jsxs)(d.ZP,{item:!0,xs:12,sx:{textAlign:"left"},children:[(0,r.jsx)(o.Z,{variant:"BodyMedium",sx:{mb:1},children:"Sponsor Label"}),(0,r.jsx)(f.Qr,{name:"sponsorTitle",defaultValue:"",rules:{required:"Please provide Label for your Sponsor"},render:e=>{let{field:{ref:i,...n},fieldState:{error:t}}=e;return(0,r.jsx)(p.Z,{size:"small",fullWidth:!0,variant:"outlined",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},error:!!t,helperText:t?t.message:null,...n})}})]}),(0,r.jsxs)(d.ZP,{item:!0,xs:12,sx:{textAlign:"left"},children:[(0,r.jsx)(o.Z,{variant:"BodyMedium",sx:{mb:1},children:"Select Event Type"}),(0,r.jsx)(f.Qr,{name:"sponsorBanner",defaultValue:"",rules:{required:"Please provide a title for your arena"},render:e=>{let{field:{ref:i,...n},fieldState:{error:t}}=e;return(0,r.jsxs)(p.Z,{size:"small",select:!0,placeholder:"Select Type",fullWidth:!0,inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},...n,error:!!t,...n,ref:null,children:[(0,r.jsx)(h.Z,{value:4,children:"1 Banner in a row"}),(0,r.jsx)(h.Z,{value:3,children:"2 Banners in a row"}),(0,r.jsx)(h.Z,{value:2,children:"3 Banners in a row"}),(0,r.jsx)(h.Z,{value:1,children:"4 Banneers in a row"})]})}})]})]}),(0,r.jsxs)(s.Z,{direction:"row",sx:{justifyContent:"space-evenly",display:"flex",flexDirection:"row"},children:[(0,r.jsx)(S.IH,{type:"submit",onClick:e=>{T(e),t(!1)},color:"primary",variant:"contained",sx:{mb:"10px"},children:"Proceed"}),(0,r.jsx)(S.Uc,{onClick:()=>t(!1),variant:"outlined",size:"small",sx:{mb:"10px"},children:(0,r.jsx)(o.Z,{variant:"LabelLarge",sx:{fontWeight:500},children:"Cancel"})})]})]})})})})}):!i&&(0,r.jsx)(S.IH,{color:"primary",variant:"contained",fullWidth:!0,onClick:()=>t(!0),children:(0,r.jsx)(o.Z,{variant:"LabelLarge",children:"Add Sponsors"})})})]})};i.Z=C},18615:function(e,i,n){"use strict";var r=n(85893),t=n(67294),l=n(88078),s=n(51233),a=n(87357),o=n(15861),d=n(54799),c=n(68520),x=n(25675),p=n.n(x),h=n(87536),u=n(53854),j=n(5152),m=n.n(j),g=n(32031),f=n(33299),b=n(53416),Z=n(2286);let v=m()(()=>Promise.all([n.e(5162),n.e(7461)]).then(n.bind(n,67461)),{loadableGenerated:{webpack:()=>[67461]},loading:()=>(0,r.jsx)(l.Z,{height:400,width:"100%"})}),w=e=>{let{readOnly:i}=e,[n,l]=t.useState(!1),[x,j]=t.useState(""),{trigger:m,setValue:w,getValues:y,watch:k}=(0,h.Gc)(),S=k("tracks")||[],z=["trackTitle","trackDescription"],{data:L}=(0,f.useSession)();console.log(S);let P=async e=>{let i=await (null==L?void 0:L.user),n=await "Token "+i.accessToken,r=await (0,g.dN)(y("festId"),e[0],n);r?j(r):alert("Image Upload Error")},C=e=>{w("tracks",S.filter(i=>i.id!==e))},M=()=>{z.forEach(e=>{w(e,"")}),j("")},T=async e=>{let i=await m(z);if(i){let e=y(z);w("tracks",[...S,{imageUrl:x,name:e[0],description:e[1],id:(0,b.x0)(7)}]),console.log(S),M(),l(!1)}};return(0,r.jsxs)(s.Z,{rowGap:2,children:[!i&&(0,r.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(u.eW7,{fontSize:"1.5rem"}),(0,r.jsx)(o.Z,{variant:"TitleMedium",sx:{ml:"12px"},children:"Create Tracks (Optional)"})]}),(0,r.jsx)(a.Z,{children:0===S.length?(0,r.jsx)(o.Z,{variant:"LabelLarge",component:"p",align:"center",children:"No Tracks Added"}):(0,r.jsx)(r.Fragment,{children:S.map(e=>(0,r.jsxs)(Z._L,{elevation:1,sx:{padding:"20px 0",backgroundColor:"surfacevariant.main",mb:4,position:"relative",border:0},children:[!i&&(0,r.jsx)(d.Z,{color:"error",sx:{position:"absolute",top:"10px",right:"16px"},onClick:()=>{C(e.id)},children:(0,r.jsx)(u.Bhs,{})}),(0,r.jsxs)(s.Z,{sx:{margin:"0 20px",display:"flex",flexDirection:"row",justifyContent:"flex-start"},children:[(0,r.jsx)(p(),{src:e.imageUrl||"https://source.unsplash.com/400x120/?technology",height:140,width:140,objectFit:"contain",alt:e.name}),(0,r.jsxs)(s.Z,{sx:{ml:"36px"},children:[(0,r.jsx)(o.Z,{variant:"TitleLarge",sx:{mb:"10px"},children:e.name}),(0,r.jsx)(o.Z,{variant:"BodyLarge",color:"onsurfacevariant.main",sx:{maxWidth:"50vw"},children:e.description})]})]})]},e.id))})}),(0,r.jsx)(a.Z,{children:n?(0,r.jsxs)(Z._L,{elevation:2,sx:{height:300,width:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",padding:"8px 24px 24px 24px"},children:[(0,r.jsxs)(s.Z,{direction:"row",sx:{justifyContent:"space-between",padding:"8px 24px"},children:[(0,r.jsx)(d.Z,{color:"error",onClick:()=>{l(!1),M()},children:(0,r.jsx)(u.Bhs,{})}),(0,r.jsx)(d.Z,{color:"primary",onClick:T,children:(0,r.jsx)(u.HQD,{})})]}),(0,r.jsxs)(s.Z,{direction:"row",columnGap:2,children:[(0,r.jsx)(a.Z,{width:"40%",sx:{position:"relative",height:"100%"},children:x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{size:"small",color:"secondary",sx:{position:"absolute",top:"12px",right:"12px",zIndex:10},onClick:()=>j(""),children:(0,r.jsx)(u.C9x,{})}),(0,r.jsx)(p(),{src:x,layout:"fill",objectFit:"cover",alt:"Uploaded Poster"})]}):(0,r.jsx)(v,{multiple:!1,accept:"image/jpeg, image/jpg, image/png",maxFiles:1,onDrop:P,children:(0,r.jsxs)(s.Z,{sx:{mb:1,width:"90%"},alignItems:"center",spacing:2,children:[(0,r.jsx)(u.qX3,{fontSize:"3rem"}),(0,r.jsx)(o.Z,{variant:"TitleMedium",children:"Drop poster here or click to Browse"}),(0,r.jsx)(o.Z,{variant:"LabelMedium",color:"onsurfacevariant.main",sx:{textAlign:"center"},children:"Accepts images (Png, Jpeg, Jpg) of dimension 640\xd7360 or larger upto 10Mb"})]})})}),(0,r.jsxs)(s.Z,{width:"60%",children:[(0,r.jsx)(a.Z,{sx:{pb:2},children:(0,r.jsx)(h.Qr,{name:"trackTitle",defaultValue:"",rules:{required:"Required"},render:e=>{let{field:{ref:i,...n},fieldState:{error:t}}=e;return(0,r.jsx)(c.Z,{fullWidth:!0,margin:"none",variant:"outlined",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},label:"Track Title",error:!!t,...n})}})}),(0,r.jsx)(h.Qr,{name:"trackDescription",defaultValue:"",rules:{required:"Required"},render:e=>{let{field:{ref:i,...n},fieldState:{error:t}}=e;return(0,r.jsx)(c.Z,{placeholder:"Track Description",inputProps:{style:{fontWeight:400,fontSize:"16px",lineHeight:"24px"}},InputLabelProps:{style:{fontWeight:500,fontSize:"14px",lineHeight:"20px"}},fullWidth:!0,multiline:!0,rows:4,variant:"filled",error:!!t,...n})}})]})]})]}):!i&&(0,r.jsx)(Z.IH,{fullWidth:!0,onClick:()=>l(!0),children:(0,r.jsx)(o.Z,{variant:"LabelLarge",children:"Add Tracks"})})})]})};i.Z=w},34546:function(e){e.exports={reactMarkDown:"markdown-styles_reactMarkDown__k3MfX"}}}]);
//# sourceMappingURL=7657.cc347480b750f5b4.js.map