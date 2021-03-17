(this["webpackJsonpcf-problems-frontend"]=this["webpackJsonpcf-problems-frontend"]||[]).push([[0],{466:function(e,t,r){},470:function(e,t,r){},471:function(e,t,r){},478:function(e,t,r){},480:function(e,t,r){},481:function(e,t,r){},722:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(55),s=r.n(c),i=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,777)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},o=(r(466),r(86)),l=r(50),u=r(23),d=r(405),j=function(e,t){var r=localStorage.getItem(e),n=a.a.useState(r?JSON.parse(r):t),c=Object(u.a)(n,2),s=c[0],i=c[1];return a.a.useEffect((function(){localStorage.setItem(e,JSON.stringify(s))}),[s,e]),[s,i]},b=r(3),h=a.a.createContext(["light",function(){throw new Error("setThemeId is not implemented.")}]),f=function(e){var t=j("theme","light"),r=Object(u.a)(t,2),n=r[0],a=r[1];return Object(b.jsxs)(h.Provider,{value:[n,a],children:[Object(b.jsx)(d.a,{children:Object(b.jsx)("html",{className:"theme-".concat(n)})}),e.children]})},m=r(54),x=r(770),g=(r(470),function(e){return Object(b.jsx)("div",{id:"hamburger-btn",children:Object(b.jsx)(x.a,{})})}),O=(r(471),function(e){return Object(b.jsx)("h1",{id:"logo",children:Object(b.jsxs)(o.b,{to:"/table",children:[Object(b.jsx)("img",{alt:"logo",src:"../CF-like-logo.png"}),"CF Problems"," "]})})}),v=r(408),p=r.n(v),S=(r(477),r(478),function(){var e=a.a.useContext(h),t=Object(u.a)(e,2)[1],r=function(){var e=a.a.useContext(h);return Object(u.a)(e,1)[0]}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"theme-toggler",children:Object(b.jsx)(p.a,{defaultChecked:"dark"===r,onChange:function(){t("light"===r?"dark":"light")},icons:{checked:Object(b.jsx)("span",{className:"toggle-icon",children:"\ud83c\udf1c"}),unchecked:Object(b.jsx)("span",{className:"toggle-icon",children:"\ud83c\udf1e"})}})})})}),y=r(773),k=r(774),C=r(771),N=r(106),w=r(409),I=(r(480),r(481),[{xxl:4,xl:5,lg:6,md:6,sm:8,xs:20},{xxl:20,xl:19,lg:18,md:18,sm:16,xs:0},{xxl:0,xl:0,lg:0,md:0,sm:0,xs:4}]),E=function(e){var t=a.a.useState(e.userId),r=Object(u.a)(t,2),n=r[0],c=r[1],s=a.a.useState(!1),i=Object(u.a)(s,2),d=i[0],j=i[1],h=function(e){c(e.currentTarget.value)},f=Object(l.g)(),x=function(t){f.push("/"+e.location+"/"+n)},v=d?"collapse-isOpen-true":"collapse-isOpen-false";return Object(b.jsxs)("div",{id:"header",children:[Object(b.jsxs)(y.a,{style:{flexFlow:"nowrap",height:56},children:[Object(b.jsx)(k.a,Object(m.a)(Object(m.a)({},I[0]),{},{children:Object(b.jsx)(O,{})})),Object(b.jsxs)(k.a,Object(m.a)(Object(m.a)({},I[1]),{},{className:"menu-row",style:{display:"flex"},children:[Object(b.jsxs)("div",{id:"input-box",children:[Object(b.jsx)(C.a,{placeholder:"Codeforces ID",value:n,onChange:h,onPressEnter:x}),Object(b.jsx)(N.a,{children:Object(b.jsx)(o.b,{to:"/table/"+n,replace:!0,children:"Table"})}),""===n?Object(b.jsx)(N.a,{disabled:!0,children:Object(b.jsx)(o.b,{to:"/user/"+n,replace:!0,children:"User"})}):Object(b.jsx)(N.a,{children:Object(b.jsx)(o.b,{to:"/user/"+n,replace:!0,children:"User"})})]}),Object(b.jsx)(S,{})]})),Object(b.jsx)(k.a,Object(m.a)(Object(m.a)({},I[2]),{},{children:Object(b.jsx)("div",{onClick:function(){j(!d)},children:Object(b.jsx)(g,{})})}))]}),Object(b.jsx)(w.Collapse,{isOpened:d,children:Object(b.jsxs)("div",{className:v,children:[Object(b.jsxs)("div",{id:"input-box",children:[Object(b.jsx)(C.a,{placeholder:"Codeforces ID",value:n,onChange:h,onPressEnter:x}),Object(b.jsx)(N.a,{children:Object(b.jsx)(o.b,{to:"/table/"+n,replace:!0,children:"Table"})}),""===n?Object(b.jsx)(N.a,{disabled:!0,children:Object(b.jsx)(o.b,{to:"/user/"+n,replace:!0,children:"User"})}):Object(b.jsx)(N.a,{children:Object(b.jsx)(o.b,{to:"/user/"+n,replace:!0,children:"User"})})]}),Object(b.jsx)(S,{})]})})]})},D=r(775),F=r(237),M=r(27),A=r.n(M),B=r(47),T=r(768),R=r(107),L=r(241);var G=function(e){var t,r=void 0===(t=e.rating)?"black":t<1200?"grey":t<1400?"green":t<1600?"cyan":t<1900?"blue":t<2100?"violet":t<2400?"orange":t<2600?"red":t<2900?"bronze":t<3200?"silver":"gold",n=function(e){return e<1200?"#808080":e<1400?"#008000":e<1600?"#03A89E":e<1900?"#0000FF":e<2100?"#AA00AA":e<2400?"#FF8C00":e<2600?"#FF0000":e<2900?"#965C2C":e<3200?"#808080":"#FFD700"}(e.rating),a=function(e){return e<1200?e/1200:e<1400?1-(1400-e)/200:e<1600?1-(1600-e)/200:e<1900?1-(1900-e)/300:e<2100?1-(2100-e)/200:e<2400?1-(2400-e)/300:e<2600?1-(2600-e)/200:1}(e.rating),c={base:"",highlight:""};"bronze"===r&&(c={base:"#965C2C",highlight:"#FFDABD"}),"silver"===r&&(c={base:"#808080",highlight:"white"}),"gold"===r&&(c={base:"#FFD700",highlight:"white"});var s="bronze"===r||"silver"===r||"gold"===r?{borderColor:n,background:"linear-gradient(to right,         ".concat(c.base,", ").concat(c.highlight,", ").concat(c.base),color:n}:{borderColor:n,borderStyle:"solid",background:"linear-gradient(to top,         ".concat(n," 0%,         ").concat(n," ").concat(100*a,"%,         rgba(0,0,0,0) ").concat(100*a,"%,         rgba(0,0,0,0) 100%)"),color:n};return Object(b.jsx)("span",{className:e.big?"big-difficulty-circle":"common-difficulty-circle",style:s})};G.defaultProps={big:!1};var _,z,Y=G,H=function(e){return void 0===e.rating?Object(b.jsx)(L.a,{title:"Difficulty is unavailable.",color:"black",children:Object(b.jsx)("div",{className:"difficulty-unavailable-circle",children:Object(b.jsx)("span",{className:"common-difficulty-circle"})})}):Object(b.jsx)(L.a,{title:"Difficulty :"+String(e.rating),color:"black",children:Object(b.jsx)("div",{className:"div-diff-circle",children:Object(b.jsx)(Y,{rating:e.rating})})})},P=["Red","Orange","Violet","Blue","Cyan","Green","Grey","Black"],U=function(e){switch(e){case"Black":return"#000000";case"Grey":return"#808080";case"Green":return"#008000";case"Cyan":return"#03A89E";case"Blue":return"#0000FF";case"Violet":return"#AA00AA";case"Orange":return"#FF8C00";case"Red":return"#FF0000"}},K=function(e){return void 0===e?"Black":e<1200?"Grey":e<1400?"Green":e<1600?"Cyan":e<1900?"Blue":e<2100?"Violet":e<2400?"Orange":"Red"},V=function(e){switch(K(e)){case"Black":return"difficulty-black";case"Grey":return"difficulty-grey";case"Green":return"difficulty-green";case"Cyan":return"difficulty-cyan";case"Blue":return"difficulty-blue";case"Violet":return"difficulty-violet";case"Orange":return"difficulty-orange";case"Red":return"difficulty-red"}},J=function(e){for(var t=[{title:"Contest",dataIndex:"name",render:function(e){return e}}],r=0;r<e;r++){var n=String.fromCharCode(65+r);t.push({title:n,dataIndex:n,render:function(e){return e}})}return t},Q="https://codeforces.com/contest/",W="https://codeforces.com/api",X=function(){var e=Object(B.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){r=e.result.filter((function(e){return"FINISHED"===e.phase}))}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(B.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==_){e.next=11;break}return e.prev=1,e.next=4,X(W+"/contest.list");case 4:t=e.sent,_=t,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_=[];case 11:return e.abrupt("return",_);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(B.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Map,e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.result.problems,n=new Map;t.reverse().forEach((function(e){var t=e.contestId;if(n.has(t)){var r=n.get(t);n.set(t,[].concat(Object(R.a)(r),[e]))}else n.set(t,[e])})),r=n}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(B.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==z){e.next=10;break}return e.prev=1,e.next=4,q(W+"/problemset.problems");case 4:z=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),z=new Map;case 10:return e.abrupt("return",z);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(B.a)(A.a.mark((function e(t){var r,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){r=e.result.filter((function(e){return"OK"===e.verdict}))})).catch((function(e){console.log("Error: ",e.message)}));case 3:return n=new Map,r.forEach((function(e){var t=String(e.problem.contestId)+e.problem.index;n.set(t,!0)})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(B.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(t);case 3:r=e.sent,e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),r=new Map;case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(B.a)(A.a.mark((function e(t){var r,n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,n=!0,a=!1,e.next=5,fetch(t).then((function(e){return e.json()})).catch((function(){a=!0})).then((function(e){"OK"!==e.status&&(n=!1),r=e.result[0].rating})).catch((function(e){console.log("Error: ",e.message)}));case 5:return e.abrupt("return",{isUserExist:n,isError:a,userRating:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=new Map,ae=function(){var e=Object(B.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==ne.get(t)){e.next=13;break}return e.prev=1,e.t0=ne,e.t1=t,e.next=6,re(W+"/user.info?handles="+t);case 6:e.t2=e.sent,e.t0.set.call(e.t0,e.t1,e.t2),e.next=13;break;case 10:e.prev=10,e.t3=e.catch(1),z=new Map;case 13:return e.abrupt("return",ne.get(t));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),ce=r(769),se=function(e){return Object(b.jsx)(ce.a,{message:"An error occurred. Codeforces is probably down now.",type:"error"})},ie=function(e){var t,r=a.a.useState(!1),n=Object(u.a)(r,2),c=n[0],s=n[1],i=a.a.useState(new Map),o=Object(u.a)(i,2),l=o[0],d=o[1],j=localStorage.getItem("problemData"),h=localStorage.getItem("contestData"),f=a.a.useState(void 0===h||null===h?[]:JSON.parse(h)),m=Object(u.a)(f,2),x=m[0],g=m[1],O=a.a.useState(void 0===j||null===j?new Map:new Map(JSON.parse(j))),v=Object(u.a)(O,2),p=v[0],S=v[1],y=void 0!==j&&null!==j&&void 0!==h&&null!==h,k=a.a.useState(!y),C=Object(u.a)(k,2),N=C[0],w=C[1];if(a.a.useEffect((function(){var t=!0;if(void 0!==e.userId&&""!==e.userId){return function(){var r=Object(B.a)(A.a.mark((function r(){var n,a,c;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([te("https://codeforces.com/api/user.status?handle="+e.userId)]);case 2:n=r.sent,a=Object(u.a)(n,1),c=a[0],t&&d(c);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()(),function(){t=!1}}t&&d(new Map)}),[e.userId]),a.a.useEffect((function(){var e=!0;return function(){var t=Object(B.a)(A.a.mark((function t(){var r,n,a,c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([Z(),$()]);case 2:r=t.sent,n=Object(u.a)(r,2),a=n[0],c=n[1],0===a.length&&0===c.size&&s(!0),e&&(g(a),S(c),localStorage.setItem("problemData",JSON.stringify(Array.from(c.entries()))),localStorage.setItem("contestData",JSON.stringify(a)),w(!1));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]),0!==p.size&&void 0!==p.size){var I=x.filter((function(e){var t=e.id;return p.has(t)}));t=function(e,t,r,n){return e.map((function(e){var a={},c=e.id,s=t.get(c),i=new Map,o=!0;return s.forEach((function(t){var r=n.get(String(e.id)+String(t.index));o=o&&void 0!==r;var a=i.get(t.index[0]);void 0===a?a=1:a++,i.set(t.index[0],a)})),a.name=Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)("div",{className:"table-success-1 cell-element",children:Object(b.jsx)("a",{href:Q+String(e.id),rel:"noopener noreferrer",target:"_blank",children:e.name})}):Object(b.jsx)("div",{className:"cell-element",children:Object(b.jsx)("a",{href:Q+String(e.id),rel:"noopener noreferrer",target:"_blank",children:e.name})})}),s.forEach((function(t){var c=n.get(String(e.id)+String(t.index))?"table-success-"+i.get(t.index[0]):"table-not-success-"+i.get(t.index[0]),s=r?V(t.rating):"difficulty-black";a[t.index[0]]=Object(b.jsx)(b.Fragment,{children:void 0!==a[t.index[0]]?Object(b.jsxs)(b.Fragment,{children:[a[t.index[0]],Object(b.jsx)("div",{className:c,children:Object(b.jsxs)("div",{className:"cell-element",children:[r&&Object(b.jsx)(H,{rating:t.rating}),Object(b.jsx)("a",{href:Q+String(e.id)+"/problem/"+t.index,rel:"noopener noreferrer",target:"_blank",className:s,children:String(t.index)+". "+t.name})]})})]}):Object(b.jsx)("div",{className:c,children:Object(b.jsxs)("div",{className:"cell-element",children:[r&&Object(b.jsx)(H,{rating:t.rating}),Object(b.jsx)("a",{href:Q+String(e.id)+"/problem/"+t.index,rel:"noopener noreferrer",target:"_blank",className:s,children:String(t.index)+". "+t.name})]})})})})),a.key=c,a.id=c,a.name=Object(b.jsx)("div",{className:"box",children:a.name}),a.A=Object(b.jsx)("div",{className:"box",children:a.A}),a.B=Object(b.jsx)("div",{className:"box",children:a.B}),a.C=Object(b.jsx)("div",{className:"box",children:a.C}),a.D=Object(b.jsx)("div",{className:"box",children:a.D}),a.E=Object(b.jsx)("div",{className:"box",children:a.E}),a.F=Object(b.jsx)("div",{className:"box",children:a.F}),a.G=Object(b.jsx)("div",{className:"box",children:a.G}),a.H=Object(b.jsx)("div",{className:"box",children:a.H}),a.I=Object(b.jsx)("div",{className:"box",children:a.I}),a}))}(I=function(e,t){var r;return"All Contests"===e&&(r=t.filter((function(e){return!0}))),"Educational Codeforces Rounds"===e&&(r=t.filter((function(e){return"Educational"===e.name.substr(0,11)}))),"Codeforces Global Rounds"===e&&(r=t.filter((function(e){return e.name.includes("Codeforces Global Round")}))),"Div. 1 Contests"===e&&(r=t.filter((function(e){return e.name.includes("Div. 1")&&!e.name.includes("Bubble Cup")}))),"Div. 2 Contests"===e&&(r=t.filter((function(e){return e.name.includes("Div. 2")&&!e.name.includes("Educational")&&!e.name.includes("Bubble Cup")}))),"Div. 3 Contests"===e&&(r=t.filter((function(e){return e.name.includes("Div. 3")}))),"Div. 4 Contests"===e&&(r=t.filter((function(e){return e.name.includes("Div. 4")}))),"Microsoft Q# Coding Contests"===e&&(r=t.filter((function(e){return e.name.includes("Q#")}))),void 0!==r?r:[]}(e.name,I),p,e.isShowDifficulty,l)}var E=function(e){var t=9;switch(e){case"Educational Codeforces Rounds":case"Codeforces Global Rounds":t=9;break;case"Div. 1 Contests":case"Div. 2 Contests":case"Div. 3 Contests":t=8;break;case"Div. 4 Contests":t=7;break;case"Q#":t=9;break;case"All Contests":t=18}var r=J(t);return"Microsoft Q# Coding Contests"===e&&(r=[].concat(Object(R.a)(J(9)),[{title:"U",dataIndex:"U",render:function(e){return e}}])),r}(e.name);return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("h2",{children:e.name}),c&&Object(b.jsx)(se,{}),N?Object(b.jsx)(T.a,{loading:!0,pagination:{defaultPageSize:50,pageSizeOptions:["10","20","50","100"]},bordered:!0,className:"ant-contest-table",columns:E,dataSource:t,locale:{emptyText:Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("br",{}),"Now Loading!!!!"]})}}):Object(b.jsx)(T.a,{pagination:{defaultPageSize:50,pageSizeOptions:["10","20","50","100"]},bordered:!0,className:"ant-contest-table",columns:E,dataSource:t})]})},oe=function(e){var t=a.a.useState("Educational Codeforces Rounds"),r=Object(u.a)(t,2),n=r[0],c=r[1],s=j("isShowDifficulty",!0),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"show-diff-btn",children:o?Object(b.jsx)(D.a,{size:"small",defaultChecked:!0,onChange:function(e){l(!o)}}):Object(b.jsx)(D.a,{size:"small",onChange:function(e){l(!o)}})}),Object(b.jsx)("label",{className:"show-diff-btn",children:"Show Difficulty"})]}),Object(b.jsxs)(F.a.Group,{value:n,id:"radio-buttons",size:"large",onChange:function(e){c(e.target.value)},children:[Object(b.jsx)(F.a.Button,{value:"Educational Codeforces Rounds",children:"ECR"}),Object(b.jsx)(F.a.Button,{value:"Codeforces Global Rounds",children:"CGR"}),Object(b.jsx)(F.a.Button,{value:"Div. 1 Contests",children:"Div1"}),Object(b.jsx)(F.a.Button,{value:"Div. 2 Contests",children:"Div2"}),Object(b.jsx)(F.a.Button,{value:"Div. 3 Contests",children:"Div3"}),Object(b.jsx)(F.a.Button,{value:"Div. 4 Contests",children:"Div4"}),Object(b.jsx)(F.a.Button,{value:"Microsoft Q# Coding Contests",children:"Q#"}),Object(b.jsx)(F.a.Button,{value:"All Contests",children:"All"})," "]}),Object(b.jsx)(ie,{name:n,isShowDifficulty:o,userId:e.userId})]})},le=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{userId:e.userId,location:"table"}),Object(b.jsx)("div",{className:"Main",children:Object(b.jsx)(oe,{userId:e.userId})})]})},ue=function(e){return Object(b.jsx)(ce.a,{message:"User not found!",type:"error"})},de=r(417),je=function(e){return Object(b.jsx)(de.a,{size:"large"})},be=function(e){var t=V(e.rating),r=void 0===e.rating?Object(b.jsx)(L.a,{title:"Unrated",color:"black",children:Object(b.jsx)("div",{className:"difficulty-unavailable-circle",children:Object(b.jsx)("span",{className:"big-difficulty-circle"})})}):Object(b.jsxs)(L.a,{title:"Rating: "+String(e.rating),color:"black",children:[Object(b.jsx)(Y,{rating:e.rating,big:!0})," "]});return Object(b.jsxs)("h3",{children:[r," ",Object(b.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codeforces.com/profile/"+e.userId,className:t,children:e.userId})]})},he=r(772),fe={xxl:8,xl:8,lg:8,md:8,sm:8,xs:12},me=Object(b.jsx)(L.a,{title:"Each achievement is based on Local Time.",color:"black",children:Object(b.jsx)("span",{children:Object(b.jsx)(he.a,{title:"",count:"?",style:{backgroundColor:"#6c757d",borderColor:"#6c757d"}})})}),xe=function(e){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("h3",{children:["Achievements ",me]}),Object(b.jsx)("hr",{}),Object(b.jsxs)(y.a,{gutter:10,children:[Object(n.createElement)(k.a,Object(m.a)(Object(m.a)({},fe),{},{key:"solved-all",className:"achievement-item"}),Object(b.jsx)("h6",{children:"solved for all time"}),Object(b.jsxs)("h4",{children:[e.solvedCountAll," problems"]})),Object(n.createElement)(k.a,Object(m.a)(Object(m.a)({},fe),{},{key:"solved-year",className:"achievement-item"}),Object(b.jsx)("h6",{children:"solved for the last year"}),Object(b.jsxs)("h4",{children:[e.solvedCountLastYear," problems"]})),Object(n.createElement)(k.a,Object(m.a)(Object(m.a)({},fe),{},{key:"solved-month",className:"achievement-item"}),Object(b.jsx)("h6",{children:"solved for the last month"}),Object(b.jsxs)("h4",{children:[e.solvedCountLastMonth," problems"]}))]}),Object(b.jsxs)(y.a,{gutter:10,children:[Object(n.createElement)(k.a,Object(m.a)(Object(m.a)({},fe),{},{key:"longest-streak",className:"achievement-item"}),Object(b.jsx)("h6",{children:"Longest Streak"}),Object(b.jsxs)("h4",{children:[e.longestStreak," days"]})),Object(n.createElement)(k.a,Object(m.a)(Object(m.a)({},fe),{},{key:"current-streak",className:"achievement-item"}),Object(b.jsx)("h6",{children:"Current Streak"}),Object(b.jsxs)("h4",{children:[e.currentStreak," days"]})),Object(n.createElement)(k.a,Object(m.a)(Object(m.a)({},fe),{},{key:"streak-sum",className:"achievement-item"}),Object(b.jsx)("h6",{children:"Streak Sum"}),Object(b.jsxs)("h4",{children:[e.streakSum," days"]}))]})]})},ge=function(e){var t=new Date(1e3*e),r=String(t.getFullYear()),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0"),i=String(t.getSeconds()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(a," ").concat(c,":").concat(s,":").concat(i)},Oe=function(e){var t=new Date(1e3*e),r=String(t.getFullYear()),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(a)},ve=[{title:"Date",dataIndex:"creationTimeSeconds",key:"creationTimeSeconds"},{title:"Problem",dataIndex:"problem",key:"problem"},{title:"Verdict",dataIndex:"verdict",key:"verdict"},{title:"Language",dataIndex:"programmingLanguage",key:"programmingLanguage"},{title:"Detail",dataIndex:"detail",key:"detail"}],pe=function(e){var t=e.submission.map((function(e){var t=e.creationTimeSeconds,r=e.problem.rating,n=void 0===r?Object(b.jsx)(L.a,{title:"Difficulty is unavailable.",color:"black",children:Object(b.jsx)("div",{className:"difficulty-unavailable-circle",children:Object(b.jsx)("span",{className:"common-difficulty-circle"})})}):Object(b.jsxs)(L.a,{title:"Difficulty: "+String(r),color:"black",children:[" ",Object(b.jsx)("span",{children:Object(b.jsx)(Y,{rating:r})})]}),a=String(e.problem.contestId),c=String(e.problem.index),s="https://codeforces.com/contest/"+a+"/submission/"+String(e.submissionId),i="https://codeforces.com/contest/"+a+"/problem/"+c,o=e.verdict;switch(o){case void 0:o="unknown";break;case"OK":o=Object(b.jsx)("div",{className:"verdict-accepted",children:"Accepted"});break;case"WRONG_ANSWER":o=Object(b.jsx)("div",{className:"verdict-rejected",children:"Wrong answer"});break;case"TIME_LIMIT_EXCEEDED":o=Object(b.jsx)("div",{className:"verdict-rejected",children:"Time limit exceeded"});break;case"COMPILATION_ERROR":o=Object(b.jsx)("div",{className:"verdict-rejected",children:"Compilation error"});break;case"MEMORY_LIMIT_EXCEEDED":o=Object(b.jsx)("div",{className:"verdict-rejected",children:"Memory limit exceeded"});break;case"RUNTIME_ERROR":o=Object(b.jsx)("div",{className:"verdict-rejected",children:"Runtime error"});break;case"PRESENTATION_ERROR":o=Object(b.jsx)("div",{className:"verdict-rejected",children:"Presentation error"});break;case"IDLENESS_LIMIT_EXCEEDED":o=Object(b.jsx)("div",{className:"verdict-rejected",children:"Idleness limit exceeded"})}return{key:String(e.creationTimeSeconds),creationTimeSeconds:Object(b.jsx)("div",{className:"cell-element",children:ge(t)}),problem:Object(b.jsxs)("div",{className:"cell-element",children:[n,Object(b.jsx)("a",{href:i,target:"_blank",rel:"noopenner noreferrer",className:V(r),children:String(e.problem.index)+". "+String(e.problem.name)})]}),programmingLanguage:Object(b.jsx)("div",{className:"cell-element",children:String(e.programmingLanguage)}),verdict:Object(b.jsx)("div",{className:"cell-element",children:o}),detail:Object(b.jsx)("div",{className:"cell-element",children:Object(b.jsx)("a",{href:s,target:"_blank",rel:"noopenner noreferrer",children:"Detail"})})}}));return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("h3",{children:"Submissions"}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)(T.a,{bordered:!0,dataSource:t,columns:ve})]})},Se=r(776),ye=r(765),ke=r(767),Ce=r(434),Ne=r(435),we=r(198),Ie=r(449),Ee=function(e){if(!e.active||void 0===e.payload)return null;var t=e.label;return Object(b.jsxs)("div",{className:"recharts-default-tooltip",style:{margin:"0px",padding:"10px",backgroundColor:"rgb(255, 255, 255)",border:"1px solid rgb(204, 204, 204)",whiteSpace:"nowrap"},children:[Object(b.jsx)("p",{className:"recharts-tooltip-label",style:{margin:"0px"},children:Oe(t)}),Object(b.jsx)("ul",{className:"recharts-tooltip-item-list",style:{padding:"0px",margin:"0px"},children:Object(b.jsxs)("li",{className:"recharts-tooltip-item",style:{display:"block",paddingTop:"4px",paddingBottom:"4px",color:"rgb(136, 132, 216)"},children:[Object(b.jsx)("span",{className:"recharts-tooltip-item-name",children:"count"}),Object(b.jsx)("span",{className:"recharts-tooltip-item-separator",children:" : "}),Object(b.jsx)("span",{className:"recharts-tooltip-item-value",children:e.payload.reduce((function(e,t){return e+t.value}),0)})]})}),Object(b.jsx)("hr",{style:{marginTop:"0.3em",marginBottom:"0.3em"}}),Object(b.jsx)("div",{children:e.payload&&e.payload.slice().reverse().map((function(e){return e.value<=0?null:Object(b.jsxs)("div",{style:{color:U(e.dataKey)},children:["Black"===e.dataKey?"Other":e.dataKey," : ",e.value]},e.dataKey)}))})]})},De=function(e){return Object(b.jsx)(Se.a,{width:"100%",height:300,children:Object(b.jsxs)(ye.a,{data:e.solvedHistory,margin:{top:5,right:30,left:20,bottom:5},children:[Object(b.jsx)(ke.a,{strokeDasharray:"3 3"}),Object(b.jsx)(Ce.a,{dataKey:"dateSecond",domain:["dataMin","dataMax"],type:"number",tickFormatter:function(e){return Oe(e)}}),Object(b.jsx)(Ne.a,{}),Object(b.jsx)(we.a,{content:Object(b.jsx)(Ee,{label:1})}),P.map((function(e){var t=U(e);return Object(b.jsx)(Ie.a,{type:"linear",dataKey:"Black"===e?"Other":e,stackId:"1",stroke:t,fill:t},e)}))]})})},Fe=function(e){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("h3",{children:"Climbing"}),Object(b.jsx)("hr",{}),Object(b.jsx)(De,{solvedHistory:e.solvedHistory})]})},Me=r(436),Ae=r(192),Be=function(e){return Object(b.jsx)(a.a.Fragment,{children:e.value?Object(b.jsxs)("div",{style:{background:"black",color:"white",padding:"8px",borderRadius:"10px",textAlign:"center"},children:[e.day,Object(b.jsx)("br",{}),e.value," submissions"]}):null})},Te=function(e){return Object(b.jsx)(Me.a,{data:e.data,from:e.year+"-01-01",to:e.year+"-12-31",emptyColor:"#ebedf0",colors:["#C6E48B","#7BC96F","#239A3B","#196127"],minValue:"auto",margin:{top:5,right:5,bottom:5,left:25},yearSpacing:45,monthBorderColor:"#ffffff",dayBorderWidth:2,dayBorderColor:"#ffffff",tooltip:Be,legends:[{anchor:"bottom-right",direction:"row",translateY:36,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left"}]})},Re=function(e){var t=new Set;e.data.forEach((function(e){t.add(e.day.slice(0,4))}));var r=Array.from(t);r.reverse();var n=a.a.useState(r[0]),c=Object(u.a)(n,2),s=c[0],i=c[1];return a.a.useEffect((function(){}),[]),Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("h3",{children:"Heatmap"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{style:{height:300,marginBottom:50},children:[Object(b.jsx)("div",{style:{textAlign:"right",paddingTop:"20px"},children:r.length>0&&Object(b.jsx)(Ae.a,{defaultValue:"Choose year",style:{width:150,textAlign:"left"},onChange:function(e){i(e)},children:r.map((function(e){return Object(b.jsx)(Ae.a.Option,{value:e,children:e},e)}))})}),Object(b.jsx)(Te,{data:e.data,year:s})]})]})};function Le(e){var t=new Date(1e3*e),r=String(t.getFullYear()),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(a)}var Ge=function(e){var t=0,r=0,n=0,a=0,c=0,s=0,i=0,o=0,l=0,u=[],d=new Map,j=e.slice().reverse(),b=[];j.forEach((function(e){if("OK"===e.verdict){var t=e.problem,r=String(t.contestId)+":"+String(t.index);d.get(r)||(d.set(r,!0),b.push(e))}}));for(var h=b.length,f=0;f<h;f++){var m=b[f];switch(t++,K(m.problem.rating)){case"Red":r++;break;case"Orange":n++;break;case"Violet":a++;break;case"Blue":c++;break;case"Cyan":s++;break;case"Green":i++;break;case"Grey":o++;break;case"Black":l++}var x=m.creationTimeSeconds;f!==h-1&&h>1&&Le(x)===Le(b[f+1].creationTimeSeconds)||u.push({dateSecond:x,dateFormat:Le(x),count:t,Red:r,Orange:n,Violet:a,Blue:c,Cyan:s,Green:i,Grey:o,Other:l})}return u};function _e(e){var t=new Date(1e3*e),r=String(t.getFullYear()),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(a)}var ze=function(e){for(var t=0,r=[],n=e.slice().reverse(),a=n.length,c=0;c<a;c++)c===a-1||_e(n[c].creationTimeSeconds)!==_e(n[c+1].creationTimeSeconds)?(r.push({day:_e(n[c].creationTimeSeconds),value:t+1}),t=0):t++;return r},Ye=function(){var e=Object(B.a)(A.a.mark((function e(t){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){var t;r=null===(t=e.result)||void 0===t?void 0:t.map((function(e){return{creationTimeSeconds:e.creationTimeSeconds,problem:e.problem,verdict:e.verdict,programmingLanguage:e.programmingLanguage,submissionId:e.id}}))})).catch((function(e){return console.log("Error: ",e.message),[]}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(e){var t=new Map,r=new Map,n=new Date,a=n.getFullYear(),c=n.getMonth(),s=0,i=0,o=[];e.forEach((function(e){if("OK"===e.verdict){var n=new Date(1e3*e.creationTimeSeconds),l=String(e.problem.contestId)+":"+String(e.problem.index);if(void 0===t.get(l)){1===c?12===n.getMonth()&&n.getFullYear()===a-1&&i++:n.getMonth()===c-1&&n.getFullYear()===a&&i++,n.getFullYear()===a-1&&s++,t.set(l,!0);var u=Oe(n.getTime()/1e3);void 0===r.get(u)&&(r.set(u,!0),o.push(e.creationTimeSeconds))}}}));for(var l=0,u=n,d=0;d<o.length;d++){var j=o[d],b=Oe(j);if(Oe(u.getTime()/1e3)!==b)break;l++,u=new Date(u.getTime()-864e5)}o.reverse();for(var h=0,f=0,m=0;m<o.length;m++){if(0!==m)Oe(o[m]-86400)===Oe(o[m-1])?f++:f=1,h=Math.max(h,f);else h=1,f=1}return{submission:e,solvedCountAll:t.size,solvedCountLastYear:s,solvedCountLastMonth:i,longestStreak:h,currentStreak:l,streakSum:r.size}},Pe=function(e){var t=a.a.useState(!1),r=Object(u.a)(t,2),n=r[0],c=r[1],s=a.a.useState(!1),i=Object(u.a)(s,2),o=i[0],l=i[1],d=a.a.useState(!0),j=Object(u.a)(d,2),h=j[0],f=j[1],m=a.a.useState(0),x=Object(u.a)(m,2),g=x[0],O=x[1],v=a.a.useState([]),p=Object(u.a)(v,2),S=p[0],y=p[1],k=a.a.useState({solvedCountAll:0,solvedCountLastYear:0,solvedCountLastMonth:0,longestStreak:0,currentStreak:0,streakSum:0,solvedHistory:[],submissionHistory:[]}),C=Object(u.a)(k,2),N=C[0],w=C[1];a.a.useEffect((function(){f(!0);var t=!0;return function(){var r=Object(B.a)(A.a.mark((function r(n){var a,s,i,o;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a="https://codeforces.com/api/user.status?handle=",r.next=3,ae(e.userId);case 3:if(!(s=r.sent).isUserExist||!1!==s.isError){r.next=12;break}return r.next=7,Ye(a+n);case 7:i=r.sent,o=He(i),t&&(f(!1),y(i),w({solvedCountAll:o.solvedCountAll,solvedCountLastYear:o.solvedCountLastYear,solvedCountLastMonth:o.solvedCountLastMonth,longestStreak:o.longestStreak,currentStreak:o.currentStreak,streakSum:o.streakSum,solvedHistory:Ge(i),submissionHistory:ze(i)}),l(s.isUserExist),O(s.userRating)),r.next=13;break;case 12:t&&(f(!1),c(s.isError),l(s.isUserExist));case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()(e.userId),function(){t=!1}}),[e.userId]);var I=o&&!1===n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(be,{userId:e.userId,rating:g}),Object(b.jsx)("hr",{}),Object(b.jsx)(xe,{userId:e.userId,solvedCountAll:N.solvedCountAll,solvedCountLastYear:N.solvedCountLastYear,solvedCountLastMonth:N.solvedCountLastMonth,longestStreak:N.longestStreak,currentStreak:N.currentStreak,streakSum:N.streakSum}),Object(b.jsx)(Fe,{solvedHistory:N.solvedHistory}),Object(b.jsx)(Re,{data:N.submissionHistory}),Object(b.jsx)(pe,{submission:S})]}):n?Object(b.jsx)(se,{}):Object(b.jsx)(ue,{}),D=h?Object(b.jsx)(je,{}):I;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{userId:e.userId,location:"user"}),Object(b.jsx)("div",{className:"Main",children:D})]})},Ue=function(){return Object(b.jsx)(f,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/table/:userIds([a-zA-Z0-9_]*)*",render:function(e){var t=e.match.params,r=void 0===t.userIds?"":t.userIds;return Object(b.jsx)(le,{userId:r})}}),Object(b.jsx)(l.b,{path:"/user/:userIds([a-zA-Z0-9_]*)*",render:function(e){var t=e.match.params,r=void 0===t.userIds?"":t.userIds;return Object(b.jsx)(Pe,{userId:r})}}),Object(b.jsx)(l.a,{path:"/",to:"/table/"})]})})})})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Ue,{})}),document.getElementById("root")),i()}},[[722,1,2]]]);
//# sourceMappingURL=main.86beffa1.chunk.js.map