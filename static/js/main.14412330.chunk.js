(this.webpackJsonpsportsee=this.webpackJsonpsportsee||[]).push([[0],{193:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(69),c=a.n(n),i=(a(193),a.p+"static/media/logo.83741486.svg"),o=a(22),l=a(2);var d=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("div",{className:"container container-l",children:[Object(l.jsx)(o.b,{to:"/",className:"header_logo",children:Object(l.jsx)("img",{src:i,alt:"logo"})}),Object(l.jsxs)("nav",{className:"header_nav",children:[Object(l.jsx)(o.b,{to:"/",className:"nav-item",children:"Accueil"}),Object(l.jsx)(o.b,{to:"/",className:"nav-item",children:"Profil"}),Object(l.jsx)(o.b,{to:"/",className:"nav-item",children:"R\xe9glage"}),Object(l.jsx)(o.b,{to:"/",className:"nav-item",children:"Communaut\xe9"})]})]})})},j=a(18),u=a.p+"static/media/swimmingIcon.e26dba43.svg",b=a.p+"static/media/yogaIcon.6c31a277.svg",h=a.p+"static/media/bikingIcon.d516c0e8.svg",m=a.p+"static/media/bodybuildingIcon.7c04704d.svg";var x=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"footer_content",children:[Object(l.jsxs)("nav",{className:"footer_nav",children:[Object(l.jsx)(o.b,{to:"/",className:"footer_icon",children:Object(l.jsx)("img",{src:b,alt:"yogaIcon"})}),Object(l.jsx)(o.b,{to:"/",className:"footer_icon",children:Object(l.jsx)("img",{src:u,alt:"swimmingIcon"})}),Object(l.jsx)(o.b,{to:"/",className:"footer_icon",children:Object(l.jsx)("img",{src:h,alt:"bikingIcon"})}),Object(l.jsx)(o.b,{to:"/",className:"footer_icon",children:Object(l.jsx)("img",{src:m,alt:"bodybuildingIcon"})})]}),Object(l.jsx)("p",{className:"footer_copiryght",children:"Copiryght, SportSee 2020"})]})})},p=a(26),O=a.n(p),v=a(57),g=a(17),y=a(5),f=a.n(y);function k(e){var t=e.user;return Object(l.jsxs)("section",{className:"welcome",children:[Object(l.jsxs)("h1",{className:"welcome_title",children:["Bonjour",Object(l.jsx)("span",{className:"title-firstname",children:t.userInfos.firstName})]}),Object(l.jsx)("p",{className:"welcome_para",children:"F\xe9licitation ! Vous avez explos\xe9 vos objectifs hier \ud83d\udc4f"})]})}k.prototype={user:f.a.array};var N=k,_=a(333),C=a(334),w=a(338),I=a(96),L=a(97),D=a(78),S=a(75),F=a(177);function A(e){var t=e.active,a=e.payload;return t&&a&&a.length?Object(l.jsxs)("div",{className:"custom-tooltip",children:[Object(l.jsx)("p",{className:"custom-tooltip-text",children:"".concat(a[0].value,"kg")}),Object(l.jsx)("p",{className:"custom-tooltip-text",children:"".concat(a[1].value,"kCal")})]}):null}A.prototype={active:f.a.bool,payload:f.a.array};var K=A;function z(e){var t=e.user;return Object(l.jsxs)("div",{className:"chart_activity",children:[Object(l.jsx)("h2",{className:"chart_activity_title",children:"Activit\xe9 quotidienne"}),Object(l.jsx)(_.a,{width:"100%",height:320,children:Object(l.jsxs)(C.a,{data:null===t||void 0===t?void 0:t.sessions,margin:{top:70,right:25,left:25,bottom:25},barGap:8,barSize:7,children:[Object(l.jsx)(w.a,{vertical:!1,strokeDasharray:"3 3"}),Object(l.jsx)(I.a,{dy:15,dataKey:"day",tickLine:!1,stroke:"#9B9EAC",tickFormatter:function(e){return new Date(e).getDate()}}),Object(l.jsx)(L.a,{tickCount:3,axisLine:!1,tickLine:!1,orientation:"right",stroke:"#9B9EAC"}),Object(l.jsx)(D.a,{content:Object(l.jsx)(K,{}),cursor:{fill:"rgba(196, 196, 196, 0.5)"}}),Object(l.jsx)(S.a,{style:{color:"#74798C"},verticalAlign:"top",iconType:"circle",iconSize:8,align:"right"}),Object(l.jsx)(F.a,{name:"Poids (kg)",dataKey:"kilogram",fill:"#282D30",radius:[3,3,0,0]}),Object(l.jsx)(F.a,{name:"Calories br\xfbl\xe9es (kCal)",dataKey:"calories",fill:"#E60000",radius:[3,3,0,0]})]})})]})}z.prototype={user:f.a.array};var M=z,R=[{id:12,userInfos:{firstName:"Karl",lastName:"Dovineau",age:31},todayScore:.12,keyData:{calorieCount:1930,proteinCount:155,carbohydrateCount:290,lipidCount:50}},{id:18,userInfos:{firstName:"Cecilia",lastName:"Ratorez",age:34},score:.3,keyData:{calorieCount:2500,proteinCount:90,carbohydrateCount:150,lipidCount:120}}],E=[{userId:12,sessions:[{day:"2020-07-01",kilogram:80,calories:240},{day:"2020-07-02",kilogram:80,calories:220},{day:"2020-07-03",kilogram:81,calories:280},{day:"2020-07-04",kilogram:81,calories:290},{day:"2020-07-05",kilogram:80,calories:160},{day:"2020-07-06",kilogram:78,calories:162},{day:"2020-07-07",kilogram:76,calories:390}]},{userId:18,sessions:[{day:"2020-07-01",kilogram:70,calories:240},{day:"2020-07-02",kilogram:69,calories:220},{day:"2020-07-03",kilogram:70,calories:280},{day:"2020-07-04",kilogram:70,calories:500},{day:"2020-07-05",kilogram:69,calories:160},{day:"2020-07-06",kilogram:69,calories:162},{day:"2020-07-07",kilogram:69,calories:390}]}],P=[{userId:12,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:23},{day:3,sessionLength:45},{day:4,sessionLength:50},{day:5,sessionLength:0},{day:6,sessionLength:0},{day:7,sessionLength:60}]},{userId:18,sessions:[{day:1,sessionLength:30},{day:2,sessionLength:40},{day:3,sessionLength:50},{day:4,sessionLength:30},{day:5,sessionLength:30},{day:6,sessionLength:50},{day:7,sessionLength:50}]}],B=[{userId:12,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:80,kind:1},{value:120,kind:2},{value:140,kind:3},{value:50,kind:4},{value:200,kind:5},{value:90,kind:6}]},{userId:18,kind:{1:"cardio",2:"energy",3:"endurance",4:"strength",5:"speed",6:"intensity"},data:[{value:200,kind:1},{value:240,kind:2},{value:80,kind:3},{value:80,kind:4},{value:220,kind:5},{value:110,kind:6}]}];function W(e){var t=e.image,a=e.keyData,s=e.unit,r=e.type;return Object(l.jsxs)("div",{className:"card_infos",children:[Object(l.jsx)("div",{className:"card_infos_icon",children:Object(l.jsx)("img",{src:t,alt:"icon"})}),Object(l.jsxs)("div",{className:"card_infos_text",children:[Object(l.jsxs)("p",{className:"card_infos_qte",children:[a,s]}),Object(l.jsx)("p",{className:"card_infos_type",children:r})]})]})}W.prototype={image:f.a.string,keyData:f.a.number,unit:f.a.string,type:f.a.string};var G=W,J=a.p+"static/media/calories.5db5a3af.svg",q=a.p+"static/media/protein.c2859796.svg",V=a.p+"static/media/carbs.aa0e7466.svg",T=a.p+"static/media/fat.82c6cb9f.svg",H=a(339),Q=a(340),U=a(99),X=a(178);function Y(e){var t=e.user;return Object(l.jsx)("div",{className:"chart_radar_performance chart-group-item",children:Object(l.jsx)(_.a,{width:"100%",height:263,children:Object(l.jsxs)(H.a,{cx:"50%",cy:"50%",outerRadius:"50%",data:null===t||void 0===t?void 0:t.data,children:[Object(l.jsx)(Q.a,{radialLines:!1}),Object(l.jsx)(U.a,{tick:{fill:"#FFFFFF",fontSize:"12px",fontWeight:500},fill:"white",dataKey:"kind",tickFormatter:function(e){return null===t||void 0===t?void 0:t.kind[e]}}),Object(l.jsx)(X.a,{dataKey:"value",fill:"rgba(255, 1, 1, 0.7)"})]})})})}Y.prototype={user:f.a.array};var Z=Y,$=a(341),ee=a(182);function te(e){var t=e.active,a=e.payload;return t&&a&&a.length?Object(l.jsx)("div",{className:"custom_tooltip_average",children:Object(l.jsx)("p",{className:"custom_tooltip_average_text",children:"".concat(a[0].value," min")})}):null}te.prototype={active:f.a.bool,payload:f.a.array};var ae=te;function se(e){var t=e.user;return Object(l.jsxs)("div",{className:"chart_line_average chart-group-item",children:[Object(l.jsx)("h2",{className:"chart_line_average_title",children:"Dur\xe9e moyenne des sessions"}),Object(l.jsx)(_.a,{width:"100%",height:263,children:Object(l.jsxs)($.a,{width:500,height:300,data:null===t||void 0===t?void 0:t.sessions,margin:{top:5,right:10,left:10,bottom:40},children:[Object(l.jsx)(I.a,{dataKey:"day",axisLine:!1,tickLine:!1,tickMargin:30,tickFormatter:function(e){return{1:"L",2:"M",3:"M",4:"J",5:"V",6:"S",7:"D"}[e]},tick:{fill:"rgba(255, 255, 255, 0.5)",fontWeight:500,fontSize:12}}),Object(l.jsx)(L.a,{type:"number",domain:[0,"dataMax + 60"],hide:!0}),Object(l.jsx)(D.a,{content:Object(l.jsx)(ae,{}),cursor:!1}),Object(l.jsx)("defs",{children:Object(l.jsxs)("linearGradient",{id:"linear",children:[Object(l.jsx)("stop",{offset:"30%",stopColor:"rgba(255,255,255,0.4)"}),Object(l.jsx)("stop",{offset:"100%",stopColor:"rgb(255,255,255)"})]})}),Object(l.jsx)(ee.a,{type:"natural",dataKey:"sessionLength",dot:!1,stroke:" url(#linear)",strokeWidth:2,activeDot:{fill:"white",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:8,r:2}})]})})]})}se.prototype={user:f.a.array};var re=se;function ne(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(v.a)(O.a.mark((function e(t){var a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/user/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(v.a)(O.a.mark((function e(t){var a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/user/".concat(t,"/activity"));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return de.apply(this,arguments)}function de(){return(de=Object(v.a)(O.a.mark((function e(t){var a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/user/".concat(t,"/average-sessions"));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(v.a)(O.a.mark((function e(t){var a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/user/".concat(t,"/performance"));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=a(342),he=a(183);function me(e){var t=e.user,a=(null===t||void 0===t?void 0:t.score)||(null===t||void 0===t?void 0:t.todayScore);return Object(l.jsxs)("div",{className:"chart_score chart-group-item",children:[Object(l.jsx)("h2",{className:"chart_score_title",children:"Score"}),Object(l.jsxs)("p",{className:"chart_score_percentage",children:[Object(l.jsxs)("span",{children:[100*a,"%"]}),Object(l.jsx)("br",{}),"de votre objectif"]}),Object(l.jsx)(_.a,{width:"100%",height:263,children:Object(l.jsxs)(be.a,{cx:"50%",cy:"50%",outerRadius:100,innerRadius:85,barSize:10,data:[{score:100*a}],startAngle:80,endAngle:430,fill:"#FF0000",children:[Object(l.jsx)(he.a,{dataKey:"todayScore",minAngle:15,cornerRadius:50}),Object(l.jsx)(U.a,{type:"number",domain:[0,100],angleAxisId:0,tick:!1})]})})]})}me.prototype={user:f.a.array};var xe=me,pe=Object(s.createContext)({});var Oe=function(e){var t=e.children,a=Object(s.useState)(!1),r=Object(g.a)(a,2),n=r[0],c=r[1];return Object(l.jsx)(pe.Provider,{value:[n,c],children:t})};var ve=function(){var e=Object(s.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)([]),c=Object(g.a)(n,2),i=c[0],o=c[1],d=Object(s.useState)([]),u=Object(g.a)(d,2),b=u[0],h=u[1],m=Object(s.useState)([]),x=Object(g.a)(m,2),p=x[0],y=x[1],f=Object(j.e)().id,k=Object(s.useState)(!0),_=Object(g.a)(k,2),C=_[0],w=_[1],I=Object(s.useContext)(pe),L=Object(g.a)(I,1)[0];return Object(s.useEffect)((function(){if(L)return r(R.find((function(e){return e.id===parseInt(f)}))),o(E.find((function(e){return e.userId===parseInt(f)}))),h(P.find((function(e){return e.userId===parseInt(f)}))),y(B.find((function(e){return e.userId===parseInt(f)}))),void w(!1);var e=function(){var e=Object(v.a)(O.a.mark((function e(){var t,a,s,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(f);case 2:return t=e.sent,r(t),e.next=6,ie(f);case 6:return a=e.sent,o(a),e.next=10,le(f);case 10:return s=e.sent,h(s),e.next=14,je(f);case 14:n=e.sent,y(n),w(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[f,L]),C?Object(l.jsx)("div",{className:"container container-main",children:Object(l.jsx)("p",{className:"loading",children:"Loading..."})}):Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"container container-main",children:[Object(l.jsx)(N,{user:a}),Object(l.jsxs)("div",{className:"charts",children:[Object(l.jsxs)("div",{className:"charts_content",children:[Object(l.jsx)(M,{user:i}),Object(l.jsxs)("div",{className:"charts-group",children:[Object(l.jsx)(re,{user:b}),Object(l.jsx)(Z,{user:p}),Object(l.jsx)(xe,{user:a})]})]}),Object(l.jsxs)("aside",{children:[Object(l.jsx)(G,{keyData:a.keyData.calorieCount,image:J,unit:"kcal",type:"Calories"}),Object(l.jsx)(G,{keyData:a.keyData.proteinCount,image:q,unit:"g",type:"Proteines"}),Object(l.jsx)(G,{keyData:a.keyData.carbohydrateCount,image:V,unit:"g",type:"Glucides"}),Object(l.jsx)(G,{keyData:a.keyData.lipidCount,image:T,unit:"g",type:"Lipides"})]})]})]})})};var ge=function(){var e=Object(s.useContext)(pe),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(l.jsx)("main",{className:"home",children:Object(l.jsxs)("div",{className:"container container-main",children:[Object(l.jsxs)("div",{className:"radio-btn",children:[Object(l.jsxs)("label",{htmlFor:"radio-one",className:"group",children:["API",Object(l.jsx)("input",{id:"radio-one",type:"radio",value:"api",name:"data",defaultChecked:!a,onChange:function(){return r(!1)}}),Object(l.jsx)("span",{className:"checkmark"})]}),Object(l.jsxs)("label",{htmlFor:"radio-two",className:"group",children:["MOCK",Object(l.jsx)("input",{id:"radio-two",type:"radio",value:"mock",name:"data",onChange:function(){return r(!0)}}),Object(l.jsx)("span",{className:"checkmark"})]})]}),Object(l.jsxs)("div",{className:"link-user",children:[Object(l.jsx)(o.b,{to:"/user/12",children:Object(l.jsx)("button",{className:"link-user-btn",children:"utilisateur 12"})}),Object(l.jsx)(o.b,{to:"/user/18",children:Object(l.jsx)("button",{className:"link-user-btn",children:"utilisateur 18"})})]})]})})};var ye=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(ge,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/user/:id",children:Object(l.jsx)(ve,{})}),Object(l.jsx)(x,{})]})};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(Oe,{children:Object(l.jsx)(ye,{})})}),document.getElementById("root"))}},[[332,1,2]]]);
//# sourceMappingURL=main.14412330.chunk.js.map