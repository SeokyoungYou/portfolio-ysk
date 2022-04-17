(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var i,o,c=n(7),r=n(0),a=n.n(r),s=n(29),l=n.n(s),d=n(52),u=n(6),j=n(45),b=n(18),h=n(10),p=n(82),g=n(17),x=n(33),f=n(2),m=Object(u.c)(p.a.div)(i||(i=Object(c.a)(["\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 20px;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  background-color: ",";\n"])),(function(e){return e.theme.navColor})),O=u.c.div(o||(o=Object(c.a)(["\n  color: #e7e7e7;\n  cursor: pointer;\n  margin-right: 30px;\n  font-size: 14px;\n  &:hover {\n    color: white;\n  }\n"])));var y,v,k,w,S=function(){return Object(f.jsxs)(m,{children:[Object(f.jsx)(O,{children:Object(f.jsx)(b.b,{to:"/",children:Object(f.jsx)(g.a,{icon:x.a,size:"lg"})})}),Object(f.jsx)(O,{children:Object(f.jsx)(b.b,{to:"/projects",children:"Projects"})}),Object(f.jsx)(O,{children:Object(f.jsx)(b.b,{to:"/profile",children:"Profile"})})]})},C=u.c.div(y||(y=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 50px;\n  /* overflow-x: auto; */\n"]))),P=u.c.div(v||(v=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),M=u.c.img(k||(k=Object(c.a)(["\n  width: 40%;\n  height: 80%;\n  margin-bottom: 5px;\n"]))),D=u.c.h2(w||(w=Object(c.a)([""])));var R,A,z,H,G,W,T,J,F,L=function(e){var t=e.slider;return Object(f.jsx)(C,{children:null===t||void 0===t?void 0:t.contents.map((function(e){return Object(f.jsxs)(P,{children:[Object(f.jsx)(M,{src:e.img}),Object(f.jsx)(D,{children:e.title})]})}))})},E=n(8),q=n(83),B=n(16),I=u.c.div(R||(R=Object(c.a)(["\n  height: 350px;\n  width: 100%;\n  margin-bottom: 50px;\n  /* padding-left: 5%; */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]))),Y=u.c.div(A||(A=Object(c.a)(["\n  width: 90%;\n  span {\n    font-size: 24px;\n    font-weight: 600;\n    margin-right: 5px;\n    &:nth-child(2) {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.black.grey})),_=Object(u.c)(p.a.div)(z||(z=Object(c.a)(["\n  height: 75%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  position: absolute;\n  top: 13%;\n  /* grid-template-columns: repeat(3, 1fr); */\n  /* gap: 10px; */\n"]))),V=Object(u.c)(p.a.div)(H||(H=Object(c.a)(["\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  margin-right: 20px;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: space-around; */\n"])),(function(e){return e.theme.white.lighter})),N=u.c.img(G||(G=Object(c.a)(["\n  height: 60px;\n"]))),K=u.c.h1(W||(W=Object(c.a)([""]))),Q=u.c.p(T||(T=Object(c.a)([""]))),U=u.c.div(J||(J=Object(c.a)(["\n  /* position: absolute; */\n  right: 50%;\n  bottom: 0;\n"]))),X=u.c.button(F||(F=Object(c.a)(["\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n  border-radius: 15px;\n  border-style: 0.5px black;\n  margin-left: 10px;\n  padding-top: 2px;\n  margin-top: 8px;\n  cursor: pointer;\n  :hover {\n    background-color: black;\n    color: white;\n  }\n"]))),Z={hidden:function(e){return{x:e?-window.outerWidth-5:window.outerWidth+5}},visible:function(e){return{x:0}},exit:function(e){return{x:e?window.outerWidth+5:-window.outerWidth-5}}};var $,ee,te,ne,ie,oe,ce,re=function(e){var t=e.slider,n=Object(r.useState)(!1),i=Object(E.a)(n,2),o=i[0],c=i[1],a=Object(r.useState)(0),s=Object(E.a)(a,2),l=s[0],d=s[1],u=Object(r.useState)(!1),j=Object(E.a)(u,2),b=j[0],h=j[1],p=function(){return c((function(e){return!e}))};return Object(f.jsxs)(I,{children:[Object(f.jsxs)(Y,{children:[Object(f.jsx)("span",{children:t.title1}),Object(f.jsx)("span",{children:t.title2})]}),Object(f.jsxs)(q.a,{initial:!1,custom:b,onExitComplete:p,children:[Object(f.jsx)(_,{custom:b,variants:Z,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===t||void 0===t?void 0:t.contents.slice(3*l,3*l+3).map((function(e){return Object(f.jsxs)(V,{children:[Object(f.jsx)(N,{src:e.img}),Object(f.jsx)(K,{children:e.title}),Object(f.jsx)(Q,{children:e.description})]})}))},l),Object(f.jsxs)(U,{children:[Object(f.jsx)(X,{onClick:function(){if(t.contents){if(o)return;h(!0),p();var e=t.contents.length-1,n=Math.floor(e/3);d((function(e){return 0===e?n:e-1}))}},children:Object(f.jsx)(g.a,{icon:B.a})}),Object(f.jsx)(X,{onClick:function(){if(t.contents){if(o)return;h(!1),p();var e=t.contents.length-1,n=Math.floor(e/3);d((function(e){return e===n?0:e+1}))}},children:Object(f.jsx)(g.a,{icon:B.b})})]})]})]})},ae={title1:"\ud504\ub85c\uadf8\ub798\ubc0d \uacbd\ud5d8.",title2:"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uc120\ud0dd \uacc4\uae30.",contents:[{img:"".concat("/portfolio-ysk","/HomePic/Arduino_Logo.svg"),title:"Arduino",description:"low level."},{img:"".concat("/portfolio-ysk","/HomePic/Arduino_Logo.svg"),title:"LCDPanel",description:"low level & 3D tools"},{img:"".concat("/portfolio-ysk","/HomePic/Arduino_Logo.svg"),title:"MNIST",description:"python"},{img:"".concat("/portfolio-ysk","/HomePic/Arduino_Logo.svg"),title:"Web Front-end",description:"low level"}]},se={title1:"\ud504\ub860\ud2b8 \uc5d4\ub4dc.",title2:"\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud234.",contents:[{img:"".concat("/portfolio-ysk","/HomePic/react.svg"),title:"React"},{img:"".concat("/portfolio-ysk","/HomePic/css.svg"),title:"CSS"},{img:"".concat("/portfolio-ysk","/HomePic/git.svg"),title:"Git"},{img:"".concat("/portfolio-ysk","/HomePic/html.svg"),title:"HTML"},{img:"".concat("/portfolio-ysk","/HomePic/javascript.svg"),title:"Javascript"},{img:"".concat("/portfolio-ysk","/HomePic/sass.svg"),title:"Sass"},{img:"".concat("/portfolio-ysk","/HomePic/vscode.svg"),title:"VS Code"},{img:"".concat("/portfolio-ysk","/HomePic/styled-component.png"),title:"Styled-component"}]},le={title1:"\ud300 \ud504\ub85c\uc81d\ud2b8.",title2:"\uacf5\ub3d9\uccb4 \uacbd\ud5d8.",contents:[{img:"".concat("/portfolio-ysk","/HomePic/Arduino_Logo.svg"),title:"Aachen",description:"Aachen"}]},de=u.c.div($||($=Object(c.a)(["\n  background-color: ",";\n  width: 100%;\n  display: flex;\n  margin-top: 50px;\n  flex-direction: column;\n  justify-content: center;\n"])),(function(e){return e.theme.backgroundColor.grey})),ue=Object(u.c)(p.a.div)(ee||(ee=Object(c.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),je=Object(u.c)(p.a.h1)(te||(te=Object(c.a)(["\n  font-size: 9vw;\n  font-weight: 900;\n"]))),be=Object(u.c)(p.a.p)(ne||(ne=Object(c.a)(["\n  font-size: 1.4vw;\n  font-weight: 600;\n  padding: 20px 14vw;\n  color: ",";\n"])),(function(e){return e.theme.black.grey})),he=u.c.div(ie||(ie=Object(c.a)(["\n  /* height: 350px; */\n  width: 100%;\n  margin-bottom: 50px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]))),pe=u.c.div(oe||(oe=Object(c.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n  span {\n    font-size: 24px;\n    font-weight: 600;\n    margin-right: 5px;\n    &:nth-child(2) {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.black.grey})),ge=u.c.div(ce||(ce=Object(c.a)(["\n  width: 90%;\n"]))),xe={start:{},end:{transition:{duration:2,delay:.5,staggerChildren:1}}},fe={start:{opacity:0,y:20},end:{opacity:1,y:0,transition:{type:"spring",stiffness:30}}};var me,Oe,ye,ve,ke,we,Se,Ce,Pe=function(){return Object(f.jsxs)(de,{children:[Object(f.jsxs)(ue,{variants:xe,initial:"start",animate:"end",children:[Object(f.jsx)(je,{variants:fe,children:"Code what I love."}),Object(f.jsx)(be,{variants:fe,children:"\uc548\ub155\ud558\uc138\uc694. \uc88b\uc544\ud558\ub294 \uac83\ub4e4\uc744 \uad6c\ud604\ud574\ub098\uac00\uace0 \uc788\ub294 \uac1c\ubc1c\uc790 \uc720\uc11c\uacbd\uc785\ub2c8\ub2e4. \uc2e4\uc7ac\ud558\ub294 \uac10\uac01\uacfc \ubb3c\ub9ac \ubc95\uce59\uc744 \ud65c\uc6a9\ud558\uc5ec 3\ucc28\uc6d0 \ub514\ubc14\uc774\uc2a4\ub97c \uc124\uacc4\ud558\ub294 \uae30\uacc4\uacf5\ud559 \uc5d4\uc9c0\ub2c8\uc5b4\uc5d0\uc11c, \ubb3c\ub9ac\uc801 \uc81c\uc57d\uc774 \uc801\uc740 \uac00\uc0c1\uc758 \ud3c9\uba74\uc5d0\uc11c \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc27d\uac8c \uacbd\ud5d8\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \ucc3d\uc791\ud558\ub294 \uac1c\ubc1c\uc790\uac00. \uc774 \uc6f9\uc0ac\uc774\ud2b8\ub294 \uc560\ud50c \ud074\ub860\ucf54\ub529. \u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147"})]}),Object(f.jsx)(re,{slider:ae}),Object(f.jsxs)(he,{children:[Object(f.jsxs)(pe,{children:[Object(f.jsx)("span",{children:se.title1}),Object(f.jsx)("span",{children:se.title2})]}),Object(f.jsx)(ge,{children:Object(f.jsx)(L,{slider:se})})]}),Object(f.jsx)(re,{slider:le})]})},Me=u.c.div(me||(me=Object(c.a)(["\n  background-color: ",";\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])),(function(e){return e.theme.backgroundColor.grey})),De=u.c.div(Oe||(Oe=Object(c.a)(["\n  height: 45vh;\n  color: ",";\n  text-align: center;\n  line-height: 25vh;\n  font-size: 4vh;\n  font-weight: 700;\n"])),(function(e){return e.theme.white.lighter})),Re=u.c.div(ye||(ye=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Ae=u.c.div(ve||(ve=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 100px;\n  overflow-x: auto;\n"]))),ze=u.c.div(ke||(ke=Object(c.a)([""]))),He=u.c.img(we||(we=Object(c.a)(["\n  height: 50px;\n"]))),Ge=u.c.h2(Se||(Se=Object(c.a)([""]))),We=u.c.h1(Ce||(Ce=Object(c.a)([""])));var Te,Je,Fe,Le,Ee,qe=function(){return Object(f.jsxs)(Me,{children:[Object(f.jsx)(De,{style:{background:" url('".concat("/portfolio-ysk","/ProfilePic/Profile.jpg')"),backgroundSize:"cover",backgroundPosition:"center"},children:"Seokyoung You"}),Object(f.jsx)(Re,{children:Object(f.jsx)(We,{children:"Contact"})}),Object(f.jsx)(Re,{children:Object(f.jsx)(We,{children:"Education"})}),Object(f.jsxs)(Re,{children:[Object(f.jsx)(We,{children:"What I love"}),Object(f.jsxs)(Ae,{children:[Object(f.jsxs)(ze,{children:[Object(f.jsx)(He,{src:"".concat("/portfolio-ysk","/ProfilePic/Guitar.jpg")}),Object(f.jsx)(Ge,{children:"Guitar"})]}),Object(f.jsxs)(ze,{children:[Object(f.jsx)(He,{src:"".concat("/portfolio-ysk","/ProfilePic/Guitar.jpg")}),Object(f.jsx)(Ge,{children:"Guitar"})]}),Object(f.jsxs)(ze,{children:[Object(f.jsx)(He,{src:"".concat("/portfolio-ysk","/ProfilePic/Guitar.jpg")}),Object(f.jsx)(Ge,{children:"Guitar"})]}),Object(f.jsxs)(ze,{children:[Object(f.jsx)(He,{src:"".concat("/portfolio-ysk","/ProfilePic/Guitar.jpg")}),Object(f.jsx)(Ge,{children:"Guitar"})]}),Object(f.jsxs)(ze,{children:[Object(f.jsx)(He,{src:"".concat("/portfolio-ysk","/ProfilePic/Guitar.jpg")}),Object(f.jsx)(Ge,{children:"Guitar"})]}),Object(f.jsxs)(ze,{children:[Object(f.jsx)(He,{src:"".concat("/portfolio-ysk","/ProfilePic/Guitar.jpg")}),Object(f.jsx)(Ge,{children:"Guitar"})]})]})]})]})},Be=Object(u.c)(p.a.div)(Te||(Te=Object(c.a)(["\n  background-color: ",";\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n"])),(function(e){return e.theme.backgroundColor.grey})),Ie=Object(u.c)(p.a.div)(Je||(Je=Object(c.a)(["\n  background-color: ",";\n  height: 110px;\n  width: 100%;\n  padding: 0px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n  z-index: 1;\n"])),(function(e){return e.theme.backgroundColor.grey})),Ye=u.c.div(Fe||(Fe=Object(c.a)(["\n  height: 90px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.blue})),_e=Object(u.c)(p.a.div)(Le||(Le=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 25px;\n  font-size: 12px;\n  transform-origin: top;\n  z-index: 0;\n"]))),Ve=Object(u.c)(p.a.div)(Ee||(Ee=Object(c.a)(["\n  width: 5px;\n  height: 5px;\n  border-radius: 2.5px;\n  background-color: ",";\n"])),(function(e){return e.theme.orange})),Ne={initial:{x:.3*window.outerWidth},animate:{x:0,transition:{duration:.3}}},Ke={initial:{y:-30,backgroundColor:"#f5f5f7",color:"#f5f5f7",transition:{}},animate:{y:0,backgroundColor:"#0071e3",transition:{duration:1.8,type:"tween"},transitionEnd:{backgroundColor:"#f5f5f7",color:"#0071e3"}}};var Qe,Ue,Xe,Ze,$e,et,tt,nt,it,ot,ct=function(e){var t=e.items;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Be,{children:Object(f.jsx)(Ie,{variants:Ne,initial:"initial",animate:"animate",children:null===t||void 0===t?void 0:t.map((function(e){var t;return Object(f.jsx)(b.b,{to:"/projects/".concat(e.title),children:Object(f.jsxs)(Ye,{children:[Object(f.jsx)(g.a,{icon:e.icon,size:"4x",color:"#1d1d1f"}),e.title,(null===(t=e.routeMatch)||void 0===t?void 0:t.isExact)&&Object(f.jsx)(Ve,{layoutId:"circle"})]})})}))})}),Object(f.jsx)(_e,{variants:Ke,initial:"initial",animate:"animate",children:"Select categories of my projects."})]})},rt="Basics",at="ReactJS",st="TypeScript",lt="Back-end",dt="Collaboration",ut={lecture:"ReactJS Master Class",theory:["Routing","State Management","Data Fetching","Animations","Typescript"],packages:["React Router","Styled Component","Recoil","ApexCharts","Gatsby","Typescript","Framer Motion","Beautiful DnD","React Query","React Hook Form"]},jt={title:"Kakao-Clone",lecture:{lecture:"Kokoa Clone",theory:["IDs & Classes","HTML Tags","Semantic & no","Box Model","Inline, Block","CSS Positio","Flexbox","Selectors","Pseudo Select","Transition","Animation","Media Queries"],packages:["HTML5","CSS3","VSCode","Github Desktop","Font Awesome"]},releaseDate:"2021-07",categories:[rt],keywords:["HTML","CSS","Status Bar","Screens","Message Animations"],depolyedWebsite:"https://seokyoungyou.github.io/antenna-messenger-2021",githubRepo:"https://github.com/SeokyoungYou/antenna-messenger-2021"},bt={title:"Momentum-Clone",lecture:{lecture:"Chrome App using ReactJS",theory:["Variables","Functions","Data Type","Arrays, O","DOM Funct","Events","if / else"],packages:["Javascript","localStorage","AJAX","JSON","DOM","fetch","OpenWeather API"]},releaseDate:"2022-01",categories:[rt],keywords:["Clock","To Do List","Get Geolocation","Get Weather Information"],depolyedWebsite:"https://seokyoungyou.github.io/daily-chrome-app-2021",githubRepo:"https://github.com/SeokyoungYou/daily-chrome-app-2021"},ht={title:"Youtube-Clone",lecture:{lecture:"Movie Web Service using ReactJS",theory:["MVC","Routing","Templates","Models","Relationships"],packages:["NodeJS","ES6","Express","Babel","Pug","Passport","AJAX","Webpack","SCSS","MongoDB","Mongoose","Multer","ESLint"]},releaseDate:"2022-01",categories:[lt],keywords:["User Authentication","Video Upload & Record","Heroku","Mongo Atlas"],depolyedWebsite:"https://wetube-quartz.herokuapp.com/",githubRepo:"https://github.com/SeokyoungYou/wetube-clone"},pt={title:"Coin Tracker",lecture:ut,releaseDate:"2022-01",categories:[at,st],keywords:["Data Fetching","Data Visualization","Routing","Dark Mode"],depolyedWebsite:"https://seokyoungyou.github.io/ReactJS-masterclass-cointracker",githubRepo:"https://github.com/SeokyoungYou/ReactJS-masterclass-cointracker"},gt={title:"Netflix-Clone",lecture:ut,releaseDate:"2022-02",categories:[at,st],keywords:["Animations","Sliders","Modals"],depolyedWebsite:"https://seokyoungyou.github.io/nomflix-clone",githubRepo:"https://github.com/SeokyoungYou/nomflix-clone"},xt={title:"DDobok",releaseDate:"2022-04",categories:[at,st,dt],keywords:["Django Collaborate","Media Query","Data Fetching"],depolyedWebsite:"https://github.com/eakyoungyu/JiujitsuGi",githubRepo:"https://github.com/eakyoungyu/JiujitsuGi"},ft=Object(u.c)(p.a.div)(Qe||(Qe=Object(c.a)(["\n  height: 600px;\n  margin: 10px 0px;\n  background-color: ",";\n  border-radius: 15px;\n  /* &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  } */\n"])),(function(e){return e.theme.white.lighter})),mt=Object(u.c)(p.a.div)(Ue||(Ue=Object(c.a)(["\n  height: 50%;\n  border-radius: 15px 15px 0px 0px;\n  color: ",";\n  display: flex;\n  align-items: flex-end;\n  padding: 10px;\n  font-size: 22px;\n  font-weight: 400;\n"])),(function(e){return e.theme.white.darker})),Ot=u.c.div(Xe||(Xe=Object(c.a)(["\n  height: 50%;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),yt=u.c.div(Ze||(Ze=Object(c.a)([""]))),vt=u.c.div($e||($e=Object(c.a)(["\n  display: flex;\n  margin: 15px 0px;\n  height: 20px;\n  align-items: center;\n  text-align: center;\n  font-size: 14px;\n"]))),kt=u.c.h3(et||(et=Object(c.a)(["\n  margin-right: 10px;\n  font-weight: 400;\n"]))),wt=u.c.p(tt||(tt=Object(c.a)(['\n  margin-right: 10px;\n  color: "','";\n'])),(function(e){return e.theme.white.lighter})),St=u.c.div(nt||(nt=Object(c.a)(["\n  height: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n"]))),Ct=u.c.button(it||(it=Object(c.a)(["\n  align-items: center;\n  justify-content: center;\n  border-style: none;\n  padding: 8px;\n  width: 110px;\n  color: ",";\n  background-color: ",";\n"])),(function(e){return e.theme.blue}),(function(e){return e.theme.white.lighter})),Pt=u.c.div(ot||(ot=Object(c.a)(["\n  padding: 8px 13px;\n  border-radius: 20px;\n  background-color: ",";\n  color: ",";\n  /* border: solid "," 1.5px; */\n  margin-right: 10px;\n  margin-bottom: 10px;\n"])),(function(e){return e.theme.blue}),(function(e){return e.theme.white.lighter}),(function(e){return e.theme.blue})),Mt={initial:{},hover:{scale:1.01,boxShadow:"5px 5px 20px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(0, 0, 0, 0.1)",transition:{duration:.3}}},Dt={hover:{color:"white"}};var Rt,At,zt=function(e){var t,n,i=e.project;return Object(f.jsxs)(ft,{variants:Mt,initial:"initial",whileHover:"hover",children:[Object(f.jsx)(mt,{variants:Dt,style:{background:"linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('".concat("/portfolio-ysk","/Thumbnails/").concat(i.title,".PNG')"),backgroundSize:"cover",backgroundPosition:"center"},children:i.title}),Object(f.jsxs)(Ot,{children:[Object(f.jsxs)(yt,{children:[Object(f.jsx)(vt,{children:null===(t=i.categories)||void 0===t?void 0:t.map((function(e){return Object(f.jsx)(Pt,{children:e},e)}))}),Object(f.jsxs)(vt,{children:[Object(f.jsx)(kt,{children:"Release Date"}),Object(f.jsx)(wt,{children:i.releaseDate})]}),Object(f.jsxs)(vt,{children:[Object(f.jsx)(kt,{children:"Keywords"}),null===(n=i.keywords)||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(wt,{children:e},e)}))]})]}),Object(f.jsxs)(St,{children:[Object(f.jsx)(Ct,{children:Object(f.jsxs)("a",{href:i.githubRepo,target:"_blank",children:["Code ",Object(f.jsx)(g.a,{icon:B.b})]})}),Object(f.jsx)(Ct,{children:Object(f.jsxs)("a",{href:i.depolyedWebsite,target:"_blank",children:["Website ",Object(f.jsx)(g.a,{icon:B.b})]})})]})]})]})},Ht=u.c.div(Rt||(Rt=Object(c.a)(["\n  background-color: ",";\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])),(function(e){return e.theme.backgroundColor.grey})),Gt=u.c.div(At||(At=Object(c.a)(["\n  padding: 20px 30px;\n"]))),Wt=[xt,gt,jt,ht,pt,bt],Tt={items:[{title:rt,icon:B.e},{title:at,icon:x.b},{title:st,icon:B.f},{title:lt,icon:B.d},{title:dt,icon:B.c}]}.items;var Jt=function(){var e=[Object(h.f)("/projects"),Object(h.f)("/projects/".concat(Tt[0].title)),Object(h.f)("/projects/".concat(Tt[1].title)),Object(h.f)("/projects/".concat(Tt[2].title)),Object(h.f)("/projects/".concat(Tt[3].title)),Object(h.f)("/projects/".concat(Tt[4].title))],t=new Array;function n(e){t=[],Tt.map((function(e){return e.routeMatch=null})),"/projects"!==(null===e||void 0===e?void 0:e.path)?(null===e||void 0===e?void 0:e.isExact)&&(function(e){Wt.map((function(n){return n.categories.map((function(i){return i===(null===e||void 0===e?void 0:e.path.slice(10))&&t.push(n)}))}))}(e),function(e){Tt.map((function(t){return t.title===(null===e||void 0===e?void 0:e.path.slice(10))&&(t.routeMatch=e)}))}(e)):t=Wt}return Object(f.jsxs)(Ht,{children:[Object(f.jsx)(ct,{items:Tt}),Object(f.jsxs)(Gt,{children:[e.map((function(e){return e?n(e):null})),t.map((function(e){return Object(f.jsx)(zt,{project:e})}))]})]})};var Ft,Lt=function(){return Object(f.jsxs)(b.a,{basename:"/portfolio-ysk",children:[Object(f.jsx)(j.a,{children:Object(f.jsx)("title",{children:"Seokyoung You"})}),Object(f.jsx)(S,{}),Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{path:"/profile",children:Object(f.jsx)(qe,{})}),Object(f.jsx)(h.a,{path:["/projects","/projects/:projectTitle"],children:Object(f.jsx)(Jt,{})}),Object(f.jsx)(h.a,{path:"/",children:Object(f.jsx)(Pe,{})})]})]})},Et=Object(u.b)(Ft||(Ft=Object(c.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  \n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.textColor}));l.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(d.a,{children:Object(f.jsxs)(u.a,{theme:{red:"#E51013",orange:"#f66907",blue:"#0071e3",textColor:"1d1d1f",navColor:"#313131",backgroundColor:{grey:"#f5f5f7",white:"#fafafa"},black:{veryDark:"#141414",darker:"#181818",lighter:"#2F2F2F",grey:"#86858a"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(f.jsx)(Et,{}),Object(f.jsx)(Lt,{})]})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.a1aca5fd.chunk.js.map