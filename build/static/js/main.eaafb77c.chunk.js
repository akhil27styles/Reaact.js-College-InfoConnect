(this.webpackJsonpchartcreater=this.webpackJsonpchartcreater||[]).push([[0],{128:function(e,t,a){e.exports=a(270)},133:function(e,t,a){},149:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t){},270:function(e,t,a){"use strict";a.r(t),a.d(t,"db",(function(){return pe}));var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(133),a(7)),i=a(14),s=a(16),m=a(22),u=a.n(m),p=a(33),d=(a(72),a(20)),h=a(19),g=a.n(h),b="USER_LOGIN",f="USER_LOGOUT";d.a.configure();var E=function(){return function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"".concat(f,"_REQUEST")}),Object(h.auth)().signOut().then((function(){localStorage.clear(),t({type:"".concat(f,"_SUCCESS")})})).catch((function(e){console.log(e),t({type:"".concat(f,"_FALIURE"),payload:{error:e}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=(a(149),function(e){var t=Object(s.c)((function(e){return e.auth})),a=Object(s.b)();return r.a.createElement("header",{className:"header"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"logo"},r.a.createElement(o.b,{to:"/",style:{textDecoration:"none",color:"white",fontStyle:"italic"}},"InfoConnect")),t.authenticated?null:r.a.createElement("ul",{className:"leftMenu"},r.a.createElement("li",null,r.a.createElement(o.c,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/signup"},"Sign up")))),r.a.createElement("div",{style:{margin:"20px 0",color:"#fff",fontWeight:"bold",fontSize:"25px"}},t.authenticated?"Welcome ".concat(t.firstName," ").concat(t.lastName):""),r.a.createElement("ul",{className:"menu"},t.authenticated?r.a.createElement("li",null,r.a.createElement(o.b,{to:"#",onClick:function(){a(E())}},"Logout")):null))}),v=function(e){return r.a.createElement("div",null,r.a.createElement(y,null),e.children)},w=a(71),O=a(23),C=a(11),j=a(67),S=a.n(j),N=(a(93),function(e){var t=e.showperpage,a=e.onPaginationChange,l=e.total,c=Object(n.useState)(1),o=Object(C.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){var e=t*i;a(e-t,e)}),[i]);var m=function(e){"prev"===e?s(1===i?1:i-1):"next"===e&&(Math.ceil(l/t)===i?s(i):s(i+1))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("div",{style:{float:"right"}},r.a.createElement("span",{class:"material-icons",onClick:function(){return m("prev")},style:{cursor:"pointer"}},"arrow_back_ios"),r.a.createElement("span",{class:"material-icons",onClick:function(){return m("next")},style:{cursor:"pointer"}},"arrow_forward_ios"),r.a.createElement("h4",null,"Page of ",i," of",l)))}),x=(a(170),function(){return r.a.createElement("div",null,r.a.createElement("footer",{class:"site-footer"},r.a.createElement("p",{class:"copyright-text",style:{marginTop:"-50px",marginLeft:"800px"}},"Copyright \xa9 2021-2022 All Rights Reserved by",r.a.createElement("a",{href:"#"},"AKHIL KUMAR SINGH")),r.a.createElement("div",{class:"container"})))}),I=(a(171),function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),i=Object(C.a)(c,2),s=i[0],m=i[1],d=Object(n.useState)(8),h=Object(C.a)(d,2),b=h[0],f=(h[1],Object(n.useState)({start:0,end:b})),E=Object(C.a)(f,2),y=E[0],v=E[1];Object(n.useEffect)((function(){j()}),[]);var j=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.firestore().collection("Notices");case 2:e.sent.get().then((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)({id:e.id},e.data()))})),t.forEach((function(e){return l((function(t){return[].concat(Object(w.a)(t),[e])}))})),m(!1),console.log(t)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!0===s)return console.log("Loading"),r.a.createElement("div",{style:{marginLeft:"40rem",marginTop:"10rem"}},r.a.createElement(S.a,{type:"Bars",color:"#00BFFF",height:80,width:80}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{showperpage:b,onPaginationChange:function(e,t){v({start:e,end:t})},total:a.length}),r.a.createElement("table",{className:"table table-bordered",style:{marginLeft:"100px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"S.no"),r.a.createElement("th",{scope:"col"},"Posted by"),r.a.createElement("th",{scope:"col"},"Post"),r.a.createElement("th",{scope:"col"},"Date"))),r.a.createElement("tbody",null,a.slice(y.start,y.end).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.PostedBy),r.a.createElement(o.b,{to:"/detail/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement("td",{className:"link"}),e.Post),r.a.createElement("td",{style:{fontWeight:"bold"}},new Date(1e3*e.Date.seconds).toJSON()," "))})))))}),T=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4",style:{marginTop:"100px"}},r.a.createElement("h1",{style:{fontFamily:"Cormorant Garamond, serif",marginLeft:"600px"}},"College InfoConnect"),r.a.createElement("h5",{style:{marginLeft:"580px"}},"Stay updated, anywhere anytime!"),r.a.createElement("h1",{style:{marginLeft:"50px"}},"ALL NOTICES"),r.a.createElement(I,null)))},L=function(){Object(s.c)((function(e){return e.auth}));var e=Object(s.b)();return r.a.createElement("div",null,r.a.createElement("div",{class:"sidenav"},r.a.createElement(o.b,{to:"/"},"Home \u2003\u2003\u2003\u2003\u2003\u2003 \xa0 \xa0\xa0",r.a.createElement("span",{class:"material-icons"},"home")),r.a.createElement(o.b,{to:"/relevent"},"Relevent Notices  \u2003\u2003",r.a.createElement("span",{class:"material-icons"},"event_note")),r.a.createElement(o.b,{to:"/placement"},"Placement Notices \xa0\xa0\xa0",r.a.createElement("span",{class:"material-icons"},"analytics")),r.a.createElement(o.b,{to:"/About"},"About \u2003\u2003\u2003\u2003 \u2003\u2003\u2003",r.a.createElement("span",{class:"material-icons"},"account_box")),r.a.createElement(o.b,{to:"/charts"},"Placement Statistics \xa0",r.a.createElement("span",{class:"material-icons"},"analytics")),r.a.createElement(o.b,{to:"/contact"},"Contact  \u2003\u2003\u2003 \u2003 \u2003 \xa0 \xa0",r.a.createElement("span",{class:"material-icons"},"perm_contact_calendar")),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://nptel.ac.in/"},"Nptel ",r.a.createElement("span",{class:"material-icons"},"school")),r.a.createElement("a",{href:"https://swayam.gov.in/"},"Swayam",r.a.createElement("span",{class:"material-icons"},"school")),r.a.createElement(o.b,{to:"#",onClick:function(){e(E())}},"Logout  \u2003\u2003\u2003 \u2003\u2003\u2003 \xa0",r.a.createElement("span",{class:"material-icons"},"login")),r.a.createElement("h2",{style:{marginTop:"300px",color:"white"}},"COLLEGE MAHAVIDYPEETHA"),r.a.createElement("h2",{style:{marginTop:"390px",color:"white"}},"InfoConnect"),r.a.createElement("p",{style:{marginTop:"150px",color:"white",marginLeft:"70px"}},"Stay updated, anywhere anytime!")))},A=function(e){return r.a.createElement(v,null,r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(T,null),r.a.createElement(L,null)))},P=a(297),k=a(300),R=a(302),U=a(307),_=a(303),D=a(308),F=a(304),B=a(310),H=(a(172),Object(P.a)({root:{maxWidth:545,marginLeft:800,marginTop:15},content:{margin:110,marginLeft:150},button:{marginLeft:50,marginTop:30,padding:5}}));d.a.configure();var M=function(e){var t=H(),a=Object(n.useState)(""),l=Object(C.a)(a,2),c=l[0],m=l[1],g=Object(n.useState)(""),f=Object(C.a)(g,2),E=f[0],y=f[1],w=Object(s.b)();return Object(s.c)((function(e){return e.auth})).authenticated?r.a.createElement(i.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-image"},r.a.createElement(v,null),r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(k.a,{className:t.root},r.a.createElement(R.a,null,r.a.createElement(_.a,{className:t.content},r.a.createElement("h2",null,"Login Here"),r.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},"College-InfoConnect Login",r.a.createElement(B.a,{id:"standard-basic",name:"email",label:"Email",type:"email",value:c,onChange:function(e){return m(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(B.a,{id:"standard-basic",label:"Password",name:"password",type:"password",value:E,onChange:function(e){return y(e.target.value)}})),r.a.createElement(U.a,null,r.a.createElement(D.a,{className:t.button,size:"small",color:"primary",variant:"contained",onClick:function(e){var t;(e.preventDefault(),""!==c)?""!==E?w((t={email:c,password:E},function(){var e=Object(p.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"".concat(b,"_REQUEST")}),Object(h.auth)().signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e);var t=e.user.displayName.split(" "),n={firstName:t[0],lastName:t[1],uid:e.user.uid,email:e.user.email};localStorage.setItem("CollegeStudents",JSON.stringify(n)),a({type:"".concat(b,"_SUCCESS"),payload:{user:n}})})).catch((function(e){console.log(e),d.a.error("User Not found",{position:d.a.POSITION.TOP_CENTER}),a({type:"".concat(b,"_FAILURE"),payload:{error:e}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):d.a.warn("Password is Require! ",{position:d.a.POSITION.TOP_CENTER}):d.a.warn("Email is Require! ",{position:d.a.POSITION.TOP_CENTER})}},"Log In")),r.a.createElement("p",{style:{color:"#1D4975"}},"Didn't Have an Account?",r.a.createElement(o.b,{to:"/signup"},"Register"))))),r.a.createElement("br",null),r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("br",null),"  ",r.a.createElement("br",null)),r.a.createElement(x,null))},G=function(){var e=Object(i.h)().id,t=Object(n.useState)([]),a=Object(C.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!0),m=Object(C.a)(s,2),d=m[0],h=m[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){var t=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.firestore().collection("Notices");case 2:t.sent.get().then((function(t){var a=[];t.forEach((function(t){t.id===e&&a.push(Object(O.a)({id:t.id},t.data()))})),a.forEach((function(e){return c((function(t){return[].concat(Object(w.a)(t),[e])}))})),h(!1),console.log(a)})).catch((function(e){return console.log(e)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return!0===d?(console.log("Loading"),r.a.createElement("div",{style:{marginLeft:"60rem",marginTop:"20rem"}},r.a.createElement(S.a,{type:"Bars",color:"#00BFFF",height:80,width:80}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"ALL Details"),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("span",{style:{marginRight:"100px",float:"right",cursor:"pointer",fontSize:"50px",marginBottom:"-50px"},class:"material-icons"},"clear"))),r.a.createElement("hr",null),l.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Title:"),r.a.createElement("h3",null,e.Post),r.a.createElement("h4",null,"Details:"),r.a.createElement("h4",null,e.Details),r.a.createElement("h6",{style:{color:"grey",fontSize:"30px",fontStyle:"italic"}},"Posted By ",e.PostedBy," on ",new Date(1e3*e.Date.seconds).toJSON()))})))},W=a(309),J=a(311);d.a.configure();var z=Object(P.a)({root:{maxWidth:545,marginLeft:800,marginTop:20},content:{margin:100,marginLeft:150},button:{marginLeft:50,marginTop:30,padding:15}}),K=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),m=Object(C.a)(c,2),g=m[0],f=m[1],E=Object(n.useState)(""),y=Object(C.a)(E,2),w=y[0],O=y[1],j=Object(n.useState)(""),S=Object(C.a)(j,2),N=S[0],I=S[1],T=Object(n.useState)(""),L=Object(C.a)(T,2),A=L[0],P=L[1],H=Object(n.useState)(""),M=Object(C.a)(H,2),G=M[0],K=M[1],Q=Object(s.b)(),Y=z(),q=Object(s.c)((function(e){return e.auth}));Object(i.g)();return q.authenticated?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:"bg-image"},r.a.createElement(v,null,r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(k.a,{className:Y.root},r.a.createElement(R.a,null,r.a.createElement(_.a,{className:Y.content},r.a.createElement("h2",null,"Register Here"),r.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},"College-InfoConnect",r.a.createElement(B.a,{id:"standard-basic",label:"FirstName",name:"firstname",type:"text",value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement(B.a,{id:"standard-basic",label:"LastName",type:"text",value:g,onChange:function(e){return f(e.target.value)}}),r.a.createElement(B.a,{id:"standard-basic",label:"Email",type:"text",value:w,onChange:function(e){return O(e.target.value)}}),r.a.createElement(B.a,{id:"standard-basic",label:"Password",type:"password",value:N,onChange:function(e){return I(e.target.value)}}),r.a.createElement(B.a,{id:"standard-basic",label:"RollNo",type:"text",value:A,onChange:function(e){return P(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(J.a,{htmlFor:"age-native-simple"},"Branch"),r.a.createElement(W.a,{native:!0,name:"Branch",type:"text",value:G,onChange:function(e){return K(e.target.value)},inputProps:{name:"Branch",id:"age-native-simple"}},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:"IT"},"IT"),r.a.createElement("option",{value:"CS"},"CS"),r.a.createElement("option",{value:"ECE"},"ECE"),r.a.createElement("option",{value:"EEE"},"EEE"),r.a.createElement("option",{value:"CIVIL"},"CIVIL"),r.a.createElement("option",{value:"Mecahnaical"},"Meach"))),r.a.createElement(U.a,null,r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var t={firstName:a,lastName:g,email:w,password:N,roll:A,Branch:G};""!==a&&""!==g&&""!==w&&""!==N&&""!==A&&""!==G||d.a.warn("Please Provide All the Details ! ",{position:d.a.POSITION.TOP_CENTER}),Q(function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(h.firestore)(),a({type:"".concat(b,"_REQUEST")}),Object(h.auth)().createUserWithEmailAndPassword(e.email,e.password).then((function(t){console.log(t);var r=Object(h.auth)().currentUser,l="".concat(e.firstName," ").concat(e.lastName);r.updateProfile({displayName:l}).then((function(){n.collection("CollegeStudents").add({firstname:e.firstName,lastname:e.lastName,uid:t.user.uid,roll:e.roll,Branch:e.Branch,createdAt:new Date}).then((function(){var n={firstname:e.firstname,lastname:e.lastname,uid:t.user.uid,email:e.email};localStorage.setItem("CollegeStudents",JSON.stringify(n)),console.log("User logged in sucessfullt...!"),a({type:"".concat(b,"_SUCESS"),payload:{user:n}})})).catch((function(e){console.log(e),a({type:"".concat(b,"_FAILURE"),payload:{error:e}})}))}))})).catch((function(e){console.log(e),d.a.error("Error",{position:d.a.POSITION.TOP_CENTER})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}},"Register ")),r.a.createElement("p",{style:{color:"#1D4975"}},"Already have an account ",r.a.createElement(o.b,{to:"/login"},"login")))))),r.a.createElement("br",null),r.a.createElement(x,null))},Q=function(){var e=Object(s.c)((function(e){return e.auth}));Object(s.b)();return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},e.authenticated?"\n             FirstName ".concat(e.firstName):""))},Y=a(112),q=function(e){var t=e.component,a=Object(Y.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},a,{component:function(e){return(localStorage.getItem("CollegeStudents")?JSON.parse(localStorage.getItem("CollegeStudents")):null)?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}}))},V=a(110),X=(a(267),[{id:1,name:"TATA",img:"https://i.ibb.co/x31mLMX/tata.jpg"},{id:2,name:"KRONOS",img:"https://i.ibb.co/jVktmZF/KRONOS.jpg"},{id:3,name:"SAMSUNG",img:"https://i.ibb.co/mN112FN/SAMSUNG.jpg"},{id:4,name:"CAPEGEMINI",img:"https://i.ibb.co/rsDLNkx/CAMPE.webp"},{id:5,name:"Accenture",img:"https://i.ibb.co/HzhnYv4/accenture.jpg"},{id:6,name:"Wipro",img:"https://i.ibb.co/bBxSM00/wipro.png"},{id:7,name:"info",img:"https://i.ibb.co/7j2zcYH/info.png"},{id:8,name:"hcl",img:"https://i.ibb.co/4fqWJn1/hcl.png"},{id:9,name:"naggrpo",img:"https://i.ibb.co/zZS8Q9K/nagarro.png"},{id:11,name:"Byjus",img:"https://i.ibb.co/k40dCjW/Byjus.png"},{id:11,name:"Algo",img:"https://i.ibb.co/Th0bmpj/Algoworks.jpgg"},{id:12,name:"Algo",img:"https://i.ibb.co/997hTck/hexaware.jpg"},{id:13,name:"grade",img:"https://i.ibb.co/zmGHfvq/GRADE.jpg"},{id:14,name:"planet",img:"https://i.ibb.co/JpbKMpd/imc.png"},{id:15,name:"DXC",img:"https://i.ibb.co/sCwCLfJ/DXC.jpg"},{id:16,name:"HANG",img:"https://i.ibb.co/CQTn6Qr/handu.png"}]),Z=function(e){return r.a.createElement("div",{class:"container"},r.a.createElement("h1",{style:{textAlign:"center"}},"College Major Recruiters"),X.map((function(e){return r.a.createElement("img",{src:e.img,className:"card-img-top",alt:e.name,style:{width:"25%",height:"50%"}})})))},$=function(){return r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Our College Placements Statistics"),r.a.createElement("hr",null),r.a.createElement(V.Bar,{data:{labels:["2015","2016","2017","2018","2019","2020"],datasets:[{label:"Our Placed Students",data:[500,432,380,490,400,395],borderColor:["rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)"],backgroundColor:["rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)"]},{label:"No. Of Campanies Visited",data:[40,70,80,110,90,78],borderColor:["rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)"],backgroundColor:["rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)","rgba(255,206,86,0.2)"]}]},width:30,height:10,options:{maintainAspectRatio:!0}}),r.a.createElement(Z,null)))},ee=Object(P.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"85ch"}}}})),te=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(C.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(""),u=Object(C.a)(m,2),p=u[0],d=u[1],h=Object(n.useState)(!1),b=Object(C.a)(h,2),f=b[0],E=b[1],y=ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(L,null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{color:"blue"}},"Contact Us"),r.a.createElement("br",null),r.a.createElement("h1",{style:{marginTop:"15px",marginLeft:"300px"}},"College InfoConnect"),r.a.createElement("h3",{style:{marginTop:"15px",marginLeft:"300px"}},"Stay updated anywhere,anytime"),r.a.createElement("h3",{style:{marginLeft:"400px"}},"You can communicate to us your opinion about the present structure of Info-centre or come up with a new suggestion or report a bug. You can even post your queries using the form below. In case of Login Issues, provide us with your admission number in contact message."),r.a.createElement("form",{className:y.root,noValidate:!0,autoComplete:"off",style:{marginLeft:"250px"}},r.a.createElement(B.a,{id:"standard-basic",label:"Name",value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(B.a,{id:"standard-basic",label:"Email",value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(B.a,{id:"standard-basic",label:"Message",value:p,onChange:function(e){return d(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(D.a,{style:{backgroundColor:f?"#ccc":"rgb(2,2,110)",color:"white"},variant:"contained",onClick:function(e){e.preventDefault(),g.a.firestore().collection("contacts").add({name:a,email:i,message:p}).then((function(){alert("Message has been Sent"),E(!1)})).catch((function(e){alert(e.message),E(!1)})),l(""),s(""),d("")}},"Submit Here")),r.a.createElement("p",{style:{marginLeft:"300px",marginTop:"100px"}},"Only message if necessary for regarding any issye you can contact Register Office Thank You !"))))},ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(L,null),r.a.createElement("div",{style:{marginLeft:"30rem"}},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{style:{marginLeft:"35rem",color:"#1D4975"}},"About-Us"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"College Info-Connect has been designed as a web based interface between the students and the faculty, facilitating interactions not limited to the classroom. The JSSATE Info-Connect aims to provide a live platform",r.a.createElement("br",null),"for fast exchange of information within college management, faculty and students to carry the overall functioning at various levels to a higher degree of quality and competence.",r.a.createElement("br",null),"The web-site can be accessed from within the college campus using- http://Info-Connect and from across the world using- http://www.jssaten.org.in.",r.a.createElement("br",null),'The Info-Connect provides a wide variety of utilities to its users. It can be spoken of as one place where the faculty and students alike can maintain their personal and academic records. The site provides individual user-accounts for faculty members and students with personal space and interface on "Info-Connect" website. The user can upload and edit personal information through this facility.',r.a.createElement("br",null),'Personal and public messaging by management and faculty is possible using the Info-Connect notice board. This facility aims at increasing the interaction between faculty and students while carrying the student-teacher relationship to a newer level of co-ordination and understanding. Not only that, there is provision for uploading of assignments and tutorials by faculty for various target batches and personal messaging about the uploading to the students will also be accomplished. The Info-Connect also proposes to bring easier access to the UPTU end-semester results and their analysis. Comprehensive comparative reports of the result analysis will be available for all batches and branches with emphasis on relative performances and improvement in results over previous years. The web-site can be accessed from within the college campus using- http://Info-Connect and from across the world using- http://www.jssaten.org.in. The Info-Connect provides a wide variety of utilities to its users. It can be spoken of as one place where the faculty and students alike can maintain their personal and academic records. The site provides individual user-accounts for faculty members and students with personal space and interface on "Info-Connect" website. The user can upload and edit personal information through this facility.',r.a.createElement("br",null),"Personal and public messaging by management and faculty is possible using the Info-Connect notice board. This facility aims at increasing the interaction between faculty and students while carrying the student-teacher relationship to a newer level of co-ordination and understanding. Not only that, there is provision for uploading of assignments and tutorials by faculty for various target batches and personal messaging about the uploading to the students will also be accomplished.",r.a.createElement("br",null),"Personal and public messaging by management and faculty is possible using the Info-Connect notice board. This facility aims at increasing the interaction between faculty and students while carrying the student-teacher relationship to a newer level of co-ordination and understanding. Not only that, there is provision for uploading of assignments and tutorials by faculty for various target batches and personal messaging about the uploading to the students will also be accomplished. The Info-Connect also proposes to bring easier access to the UPTU end-semester results and their analysis. Comprehensive comparative reports of the result analysis will be available for all batches and branches with emphasis on relative performances and improvement in results over previous years. The web-site can be accessed from within the college campus using- http://Info-Connect and from across the world using- http://www.jssaten.org.in. Personal and public messaging by management and faculty is possible using the Info-Connect notice board. This facility aims at increasing the interaction between faculty and students while carrying the student-teacher relationship to a newer level of co-ordination and understanding. Not only that, there is provision for uploading of assignments and tutorials by faculty for various target batches and personal messaging about the uploading to the students will also be accomplished. The Info-Connect also proposes to bring easier access to the UPTU end-semester results and their analysis. Comprehensive comparative reports of the result analysis will be available for all batches and branches with emphasis on relative performances and improvement in results over previous years. The web-site can be accessed from within the college campus using- http://Info-Connect and from across the world using- http://www.jssaten.org.in."))))},ne=(a(268),a(269),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Error"},r.a.createElement("h1",{className:"text-center"},"ERROR 404"),r.a.createElement("h1",{className:"text-center"},"This Page Doest Not Exist"),r.a.createElement("h1",{className:"text-center"},"Kindly return to Home Page"),r.a.createElement("h1",{className:"text-center"},r.a.createElement(o.b,{to:"/"},"Click Here"))))}),re=function(){return r.a.createElement(v,null,r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4",style:{marginTop:"100px"}},r.a.createElement("h1",{style:{fontFamily:"Cormorant Garamond, serif",marginLeft:"600px"}},"College InfoConnect"),r.a.createElement("h5",{style:{marginLeft:"580px"}},"Stay updated, anywhere anytime!"),r.a.createElement("h1",{style:{marginLeft:"50px"}},"Relevent Notices"),r.a.createElement(I,null),r.a.createElement(L,null)))))},le=function(){return r.a.createElement(v,null,r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4",style:{marginTop:"100px"}},r.a.createElement("h1",{style:{fontFamily:"Cormorant Garamond, serif",marginLeft:"600px"}},"College InfoConnect"),r.a.createElement("h5",{style:{marginLeft:"580px"}},"Stay updated, anywhere anytime!"),r.a.createElement("h1",{style:{marginLeft:"50px"}},"Campus Recruitemnt"),r.a.createElement(I,null),r.a.createElement(L,null)))))},ce=function(){var e=Object(s.c)((function(e){return e.auth})),t=Object(s.b)();return Object(n.useEffect)((function(){e.authenticated||t(function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("CollegeStudents")?JSON.parse(localStorage.getItem("CollegeStudents")):null,t(a?{type:"".concat(b,"_SUCCESS"),payload:{user:a}}:{type:"".concat(b,"_FAILURE"),payload:{error:"login again please"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(q,{path:"/",exact:!0,component:A}),r.a.createElement(i.b,{exact:!0,path:"/login",component:M}),r.a.createElement(i.b,{exact:!0,path:"/signup",component:K}),r.a.createElement(i.b,{exact:!0,path:"/detail/:id",component:G}),r.a.createElement(i.b,{exact:!0,path:"/profile",component:Q}),r.a.createElement(i.b,{exact:!0,path:"/contact",component:te}),r.a.createElement(i.b,{exact:!0,path:"/charts",component:$}),r.a.createElement(i.b,{exact:!0,path:"/About",component:ae}),r.a.createElement(i.b,{exact:!0,path:"/relevent",component:re}),r.a.createElement(i.b,{exact:!0,path:"/placement",component:le}),r.a.createElement(i.b,{component:ne}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(42),ie={firstName:"",lastName:"",email:"",roll:"",Branch:"",authenticating:!1,authenticated:!1,error:null},se=Object(oe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(b,"_REQUEST"):e=Object(O.a)(Object(O.a)({},e),{},{authenticating:!0});break;case"".concat(b,"_SUCCESS"):e=Object(O.a)(Object(O.a)(Object(O.a)({},e),t.payload.user),{},{authenticated:!0,authenticating:!0});break;case"".concat(b,"_FAILURE"):e=Object(O.a)(Object(O.a)({},e),{},{authenticated:!1,authenticating:!1,error:t.payload.error});break;case"".concat(f,"_REQUEST"):break;case"".concat(f,"_SUCCESS"):e=Object(O.a)({},ie);break;case"".concat(f,"_FALIURE"):e=Object(O.a)(Object(O.a)({},e),{},{error:t.payload.error})}return e}}),me=a(111),ue=Object(oe.d)(se,Object(oe.a)(me.a));g.a.initializeApp({apiKey:"AIzaSyAN4NWO4aDLTtYlk5ju-t7oT45H60u97k0",authDomain:"messenger-87813.firebaseapp.com",databaseURL:"https://messenger-87813.firebaseio.com",projectId:"messenger-87813",storageBucket:"messenger-87813.appspot.com",messagingSenderId:"271668517691",appId:"1:271668517691:web:6cf951080b1e7ad7a7351e",measurementId:"G-20G400564X"});var pe=g.a.firestore();g.a.auth();c.a.render(r.a.createElement(s.a,{store:ue},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.eaafb77c.chunk.js.map