"use strict";(self.webpackChunkprojectfordeploy=self.webpackChunkprojectfordeploy||[]).push([[467],{2467:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var r=s(5043),o=s(3216),i=s(579);const n=e=>{let[t,s]=(0,r.useState)(!1),[n,l]=(0,r.useState)(e.status);(0,r.useEffect)((()=>{e.status!==n&&(l(e.status),console.log(2)),console.log(1)}),[e.status]);let a=(0,o.g)();const d=t=>{console.log(+a["*"],e.idOwner),+a["*"]!==e.idOwner&&a["*"]||s(t)};return(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)("div",{children:(0,i.jsx)("input",{autoFocus:!0,onBlur:()=>{d(!1),e.updateStatusProfile(n)},onChange:e=>l(e.target.value),value:n})}):(0,i.jsx)("div",{children:(0,i.jsx)("span",{onClick:()=>d(!0),children:e.status||"no status"})})})},l=e=>e.profileInfo?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",alt:""})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{style:{width:200},src:e.profileInfo.photos.large,alt:""}),(0,i.jsx)(n,{idOwner:e.idOwner,updateStatusProfile:e.updateStatusProfile,status:e.statusUser}),(0,i.jsxs)("div",{children:["Full Name: ",e.profileInfo.fullName]}),(0,i.jsxs)("div",{children:["Contacts: ",[Object.keys(e.profileInfo.contacts).map((t=>(0,i.jsxs)("div",{children:[t,": ",e.profileInfo.contacts[t]]})))]]})]})]}):(0,i.jsx)("div",{children:"zagruzka"}),a="mypost_content__jyCSU",d="mypost_posts__hZ9jX",c="mypost_item__estES",u=e=>{let{numberPost:t,id:s,like:r,textPost:o}=e;return(0,i.jsxs)("div",{className:c,children:[(0,i.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-EdfIW5O90FsK5KRfsfB0TM88Yl7brjCqg&usqp=CAU",alt:""}),(0,i.jsxs)("span",{children:[(0,i.jsxs)("div",{children:["number post: ",t]}),(0,i.jsxs)("div",{children:["Text post: ",o]}),(0,i.jsxs)("div",{children:["like ",r]}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{children:"like"})})]})]},s)};var p=s(5963),f=s(3842),j=s(6545),x=s(9105);const h=r.memo((e=>(0,i.jsxs)("div",{className:a,children:[(0,i.jsxs)("div",{children:["my post",(0,i.jsx)("div",{children:(0,i.jsx)(g,{onSubmit:t=>{e.addPost(t.postText)}})}),(0,i.jsx)("div",{className:d,children:e.profilePage.map(((e,t)=>(0,i.jsx)(u,{textPost:e.textPost,id:t,numberPost:e.numberPost,like:e.likes},t)))})]}),"Main content"]}))),g=(0,f.A)({form:"profile"})((e=>{const t=(0,j.R)(10);return(0,i.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,i.jsx)(p.A,{name:"postText",component:x.TM,placeholder:"Profile text post",validate:[j.Q,t]}),(0,i.jsx)("button",{children:"Add"}),(0,i.jsx)("button",{children:"Clear"})]})}));var m=s(8302),P=s(2166);const v=(0,P.Ng)((e=>({profilePage:e.profilePage.postInfo})),(e=>({changeValuePost:t=>{e((0,m.vU)(t))},addPost:t=>{e((0,m.oL)(t))}})))(h),b=e=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l,{updateStatusProfile:e.updateStatusProfile,statusUser:e.statusUser,idOwner:e.idOwner,profileInfo:e.state.profilePage.profileInfo}),(0,i.jsx)(v,{})]});var S=s(7863);const w=(0,s(7048).Zz)(S.H,(0,P.Ng)((e=>({state:e,idOwner:e.headerPage.id,statusUser:e.profilePage.statusUser})),{updateStatusProfile:m.Nt,setProfileDataAC:m.cN,getProfileUser:m.Ft,getStatusProfile:m.Ig}))((e=>{const t=(0,o.g)();return(0,r.useEffect)((()=>{t["*"]?(e.getProfileUser(t["*"]),e.getStatusProfile(t["*"])):e.idOwner&&(e.getStatusProfile(e.idOwner),e.getProfileUser(e.idOwner))}),[t["*"],e.idOwner]),(0,i.jsx)(b,{...e})}))}}]);
//# sourceMappingURL=467.331b9212.chunk.js.map