"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3125],{35097:function(e,t,n){n.d(t,{V:function(){return l}});var a=n(1588),i=n(34867);function l(e){return(0,i.Z)("MuiDivider",e)}let r=(0,a.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=r},32031:function(e,t,n){n.d(t,{dN:function(){return a},zX:function(){return i}});let a=async(e,t,n)=>{let a=new FormData;a.append("fileName",t,t.name),a.append("festId",e),console.log(a);let i=await fetch("https://api-staging.cometlabs.in/fests/uploadToFestS3",{method:"POST",headers:{Authorization:n},body:a}),l=null;return i.ok&&(l=(i=await i.json()).url),l},i=async(e,t,n)=>{console.log(e);let a=new FormData;a.append("fileName",t,t.name),a.append("email",e);let i=await fetch("https://api-staging.cometlabs.in/user/uploadProfileImage",{method:"POST",headers:{Authorization:n},body:a}),l=null;return i.ok&&(l=(i=await i.json()).url),l}}}]);
//# sourceMappingURL=3125.c8de65895dea5217.js.map