(this["webpackJsonpcf-problems-frontend"]=this["webpackJsonpcf-problems-frontend"]||[]).push([[7],{854:function(e,t,r){"use strict";r.r(t);var a=r(90),n=r.n(a),c=r(102),s=r(9),i=r(0),o=r.n(i),l=r(360),d=r(853),j=r(2),u=function(e){return Object(j.jsx)(d.a,{message:"User not found!",type:"error"})},b=r(251),m=r(468),h=function(e){return Object(j.jsx)(m.a,{size:"large"})},g=r(91),O=r(356),v=r(246),x=function(e){var t=Object(g.b)(e.rating),r=void 0===e.rating?Object(j.jsx)(O.a,{title:"Unrated",color:"black",children:Object(j.jsx)("div",{className:"difficulty-unavailable-circle",children:Object(j.jsx)("span",{className:"big-difficulty-circle"})})}):Object(j.jsxs)(O.a,{title:"Rating: "+String(e.rating),color:"black",children:[Object(j.jsx)(v.a,{rating:e.rating,big:!0})," "]});return Object(j.jsxs)("h3",{children:[r," ",Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codeforces.com/profile/"+e.userId,className:t,children:e.userId})]})},p=r(113),f=r(861),S=r(863),k=r(864),y={xxl:8,xl:8,lg:8,md:8,sm:8,xs:12},E=Object(j.jsx)(O.a,{title:"Each achievement is based on Local Time.",color:"black",children:Object(j.jsx)("span",{children:Object(j.jsx)(f.a,{title:"",count:"?",style:{backgroundColor:"#6c757d",borderColor:"#6c757d"}})})}),C=function(e){return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsxs)("h3",{children:["Achievements ",E]}),Object(j.jsx)("hr",{}),Object(j.jsxs)(S.a,{gutter:10,children:[Object(i.createElement)(k.a,Object(p.a)(Object(p.a)({},y),{},{key:"solved-all",className:"achievement-item"}),Object(j.jsx)("h6",{children:"solved for all time"}),Object(j.jsxs)("h4",{children:[e.solvedCountAll," problems"]})),Object(i.createElement)(k.a,Object(p.a)(Object(p.a)({},y),{},{key:"solved-year",className:"achievement-item"}),Object(j.jsx)("h6",{children:"solved for the last year"}),Object(j.jsxs)("h4",{children:[e.solvedCountLastYear," problems"]})),Object(i.createElement)(k.a,Object(p.a)(Object(p.a)({},y),{},{key:"solved-month",className:"achievement-item"}),Object(j.jsx)("h6",{children:"solved for the last month"}),Object(j.jsxs)("h4",{children:[e.solvedCountLastMonth," problems"]}))]}),Object(j.jsxs)(S.a,{gutter:10,children:[Object(i.createElement)(k.a,Object(p.a)(Object(p.a)({},y),{},{key:"longest-streak",className:"achievement-item"}),Object(j.jsx)("h6",{children:"Longest Streak"}),Object(j.jsxs)("h4",{children:[e.longestStreak," days"]})),Object(i.createElement)(k.a,Object(p.a)(Object(p.a)({},y),{},{key:"current-streak",className:"achievement-item"}),Object(j.jsx)("h6",{children:"Current Streak"}),Object(j.jsxs)("h4",{children:[e.currentStreak," days"]})),Object(i.createElement)(k.a,Object(p.a)(Object(p.a)({},y),{},{key:"streak-sum",className:"achievement-item"}),Object(j.jsx)("h6",{children:"Streak Sum"}),Object(j.jsxs)("h4",{children:[e.streakSum," days"]}))]})]})},N=r(852),I=r(245),M=function(e){var t=new Date(1e3*e),r=String(t.getFullYear()),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0"),i=String(t.getSeconds()).padStart(2,"0");return"".concat(r,"-").concat(a,"-").concat(n," ").concat(c,":").concat(s,":").concat(i)},T=function(e){var t=new Date(1e3*e),r=String(t.getFullYear()),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return"".concat(r,"-").concat(a,"-").concat(n)},L=[{title:"Date",dataIndex:"creationTimeSeconds",key:"creationTimeSeconds"},{title:"Problem",dataIndex:"problem",key:"problem"},{title:"Verdict",dataIndex:"verdict",key:"verdict"},{title:"Language",dataIndex:"programmingLanguage",key:"programmingLanguage"},{title:"Detail",dataIndex:"detail",key:"detail"}],w=function(e){var t=e.submission.map((function(e){var t=e.creationTimeSeconds,r=e.problem.rating,a=Object(j.jsx)(I.a,{rating:e.problem.rating}),n=String(e.problem.contestId),c=String(e.problem.index),s="https://codeforces.com/contest/"+n+"/submission/"+String(e.submissionId),i="https://codeforces.com/contest/"+n+"/problem/"+c,o=e.verdict;switch(o){case void 0:o="unknown";break;case"OK":o=Object(j.jsx)("div",{className:"verdict-accepted",children:"Accepted"});break;case"WRONG_ANSWER":o=Object(j.jsx)("div",{className:"verdict-rejected",children:"Wrong answer"});break;case"TIME_LIMIT_EXCEEDED":o=Object(j.jsx)("div",{className:"verdict-rejected",children:"Time limit exceeded"});break;case"COMPILATION_ERROR":o=Object(j.jsx)("div",{className:"verdict-rejected",children:"Compilation error"});break;case"MEMORY_LIMIT_EXCEEDED":o=Object(j.jsx)("div",{className:"verdict-rejected",children:"Memory limit exceeded"});break;case"RUNTIME_ERROR":o=Object(j.jsx)("div",{className:"verdict-rejected",children:"Runtime error"});break;case"PRESENTATION_ERROR":o=Object(j.jsx)("div",{className:"verdict-rejected",children:"Presentation error"});break;case"IDLENESS_LIMIT_EXCEEDED":o=Object(j.jsx)("div",{className:"verdict-rejected",children:"Idleness limit exceeded"})}return{key:String(e.creationTimeSeconds),creationTimeSeconds:Object(j.jsx)("div",{className:"cell-element",children:M(t)}),problem:Object(j.jsxs)("div",{className:"cell-element",children:[a,Object(j.jsx)("a",{href:i,target:"_blank",rel:"noopenner noreferrer",className:Object(g.b)(r),children:String(e.problem.index)+". "+String(e.problem.name)})]}),programmingLanguage:Object(j.jsx)("div",{className:"cell-element",children:String(e.programmingLanguage)}),verdict:Object(j.jsx)("div",{className:"cell-element",children:o}),detail:Object(j.jsx)("div",{className:"cell-element",children:Object(j.jsx)("a",{href:s,target:"_blank",rel:"noopenner noreferrer",children:"Detail"})})}}));return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)("h3",{children:"Submissions"}),Object(j.jsx)("hr",{}),Object(j.jsx)("br",{}),Object(j.jsx)(N.a,{bordered:!0,dataSource:t,columns:L})]})},D=r(865),R=r(782),A=r(787),F=r(719),Y=r(720),B=r(771),H=r(772),_=function(e){if(!e.active||void 0===e.payload)return null;var t=e.label;return Object(j.jsxs)("div",{className:"recharts-default-tooltip",style:{margin:"0px",padding:"10px",backgroundColor:"rgb(255, 255, 255)",border:"1px solid rgb(204, 204, 204)",whiteSpace:"nowrap"},children:[Object(j.jsx)("p",{className:"recharts-tooltip-label",style:{margin:"0px"},children:T(t)}),Object(j.jsx)("ul",{className:"recharts-tooltip-item-list",style:{padding:"0px",margin:"0px"},children:Object(j.jsxs)("li",{className:"recharts-tooltip-item",style:{display:"block",paddingTop:"4px",paddingBottom:"4px",color:"rgb(136, 132, 216)"},children:[Object(j.jsx)("span",{className:"recharts-tooltip-item-name",children:"count"}),Object(j.jsx)("span",{className:"recharts-tooltip-item-separator",children:" : "}),Object(j.jsx)("span",{className:"recharts-tooltip-item-value",children:e.payload.reduce((function(e,t){return e+t.value}),0)})]})}),Object(j.jsx)("hr",{style:{marginTop:"0.3em",marginBottom:"0.3em"}}),Object(j.jsx)("div",{children:e.payload&&e.payload.slice().reverse().map((function(e){return e.value<=0?null:Object(j.jsxs)("div",{style:{color:Object(g.c)(e.dataKey)},children:["Black"===e.dataKey?"Other":e.dataKey," : ",e.value]},e.dataKey)}))})]})},K=function(e){return Object(j.jsx)(D.a,{width:"100%",height:300,children:Object(j.jsxs)(R.a,{data:e.solvedHistory,margin:{top:5,right:30,left:20,bottom:5},children:[Object(j.jsx)(A.a,{strokeDasharray:"3 3"}),Object(j.jsx)(F.a,{dataKey:"dateSecond",domain:["dataMin","dataMax"],type:"number",tickFormatter:function(e){return T(e)}}),Object(j.jsx)(Y.a,{}),Object(j.jsx)(B.a,{content:Object(j.jsx)(_,{label:1})}),g.d.map((function(e){var t=Object(g.c)(e);return Object(j.jsx)(H.a,{type:"linear",isAnimationActive:!1,dataKey:"Black"===e?"Other":e,stackId:"1",stroke:t,fill:t},e)}))]})})},U=function(e){return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)("h3",{children:"Climbing"}),Object(j.jsx)("hr",{}),Object(j.jsx)(K,{solvedHistory:e.solvedHistory})]})},W=r(721),G=r(353),V=r(18),P=function(e){return Object(j.jsx)(o.a.Fragment,{children:e.value?Object(j.jsxs)("div",{style:{background:"black",color:"white",padding:"8px",borderRadius:"10px",textAlign:"center"},children:[e.day,Object(j.jsx)("br",{}),e.value," submissions"]}):null})},z=function(e){var t=Object(V.c)();return Object(j.jsx)(W.a,{data:e.data,from:e.year+"-01-01",to:e.year+"-12-31",emptyColor:"#ebedf0",colors:["#C6E48B","#7BC96F","#239A3B","#196127"],minValue:"auto",theme:{textColor:"dark"===t?"#fff":"#333"},margin:{top:5,right:5,bottom:5,left:25},yearSpacing:45,dayBorderWidth:.5,dayBorderColor:"dark"===t?"#333":"#fff",monthBorderWidth:0,tooltip:P,legends:[{anchor:"bottom-right",direction:"row",translateY:36,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left"}]})},X=function(e){var t=new Set;e.data.forEach((function(e){t.add(e.day.slice(0,4))}));var r=Array.from(t);r.reverse();var a=o.a.useState(r[0]),n=Object(s.a)(a,2),c=n[0],i=n[1];return o.a.useEffect((function(){}),[]),Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)("h3",{children:"Heatmap"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{style:{height:300,marginBottom:50},children:[Object(j.jsx)("div",{style:{textAlign:"right",paddingTop:"20px"},children:r.length>0&&Object(j.jsx)(G.a,{defaultValue:"Choose year",style:{width:150,textAlign:"left"},onChange:function(e){i(e)},children:r.map((function(e){return Object(j.jsx)(G.a.Option,{value:e,children:e},e)}))})}),Object(j.jsx)(z,{data:e.data,year:c})]})]})};function J(e){var t=new Date(1e3*e),r=String(t.getFullYear()),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return"".concat(r,"-").concat(a,"-").concat(n)}var q=function(e){var t=0,r=0,a=0,n=0,c=0,s=0,i=0,o=0,l=0,d=[],j=new Map,u=e.slice().reverse(),b=[];u.forEach((function(e){if("OK"===e.verdict){var t=e.problem,r=String(t.contestId)+":"+String(t.index);j.get(r)||(j.set(r,!0),b.push(e))}}));for(var m=b.length,h=0;h<m;h++){var O=b[h];switch(t++,Object(g.a)(O.problem.rating)){case"Red":r++;break;case"Orange":a++;break;case"Violet":n++;break;case"Blue":c++;break;case"Cyan":s++;break;case"Green":i++;break;case"Grey":o++;break;case"Black":l++}var v=O.creationTimeSeconds;h!==m-1&&m>1&&J(v)===J(b[h+1].creationTimeSeconds)||d.push({dateSecond:v,dateFormat:J(v),count:t,Red:r,Orange:a,Violet:n,Blue:c,Cyan:s,Green:i,Grey:o,Other:l})}return d};function Q(e){var t=new Date(1e3*e),r=String(t.getFullYear()),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return"".concat(r,"-").concat(a,"-").concat(n)}var Z=function(e){for(var t=0,r=[],a=e.slice().reverse(),n=a.length,c=0;c<n;c++)c===n-1||Q(a[c].creationTimeSeconds)!==Q(a[c+1].creationTimeSeconds)?(r.push({day:Q(a[c].creationTimeSeconds),value:t+1}),t=0):t++;return r},$=function(){var e=Object(c.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){var t;r=null===(t=e.result)||void 0===t?void 0:t.map((function(e){return{creationTimeSeconds:e.creationTimeSeconds,problem:e.problem,verdict:e.verdict,programmingLanguage:e.programmingLanguage,submissionId:e.id}}))})).catch((function(e){return console.log("Error: ",e.message),[]}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){var t=new Map,r=new Map,a=new Date,n=a.getFullYear(),c=a.getMonth(),s=0,i=0,o=[];e.forEach((function(e){if("OK"===e.verdict){var a=new Date(1e3*e.creationTimeSeconds),l=String(e.problem.contestId)+":"+String(e.problem.index);if(void 0===t.get(l)){1===c?12===a.getMonth()&&a.getFullYear()===n-1&&i++:a.getMonth()===c-1&&a.getFullYear()===n&&i++,a.getFullYear()===n-1&&s++,t.set(l,!0);var d=T(a.getTime()/1e3);void 0===r.get(d)&&(r.set(d,!0),o.push(e.creationTimeSeconds))}}}));for(var l=0,d=a,j=0;j<o.length;j++){var u=o[j],b=T(u);if(T(d.getTime()/1e3)!==b)break;l++,d=new Date(d.getTime()-864e5)}o.reverse();for(var m=0,h=0,g=0;g<o.length;g++){if(0!==g)T(o[g]-86400)===T(o[g-1])?h++:h=1,m=Math.max(m,h);else m=1,h=1}return{submission:e,solvedCountAll:t.size,solvedCountLastYear:s,solvedCountLastMonth:i,longestStreak:m,currentStreak:l,streakSum:r.size}},te=r(250);t.default=function(e){var t=o.a.useState(!1),r=Object(s.a)(t,2),a=r[0],i=r[1],d=o.a.useState(!1),m=Object(s.a)(d,2),g=m[0],O=m[1],v=o.a.useState(!0),p=Object(s.a)(v,2),f=p[0],S=p[1],k=o.a.useState(0),y=Object(s.a)(k,2),E=y[0],N=y[1],I=o.a.useState([]),M=Object(s.a)(I,2),T=M[0],L=M[1],D=o.a.useState({solvedCountAll:0,solvedCountLastYear:0,solvedCountLastMonth:0,longestStreak:0,currentStreak:0,streakSum:0,solvedHistory:[],submissionHistory:[]}),R=Object(s.a)(D,2),A=R[0],F=R[1];o.a.useEffect((function(){S(!0);var t=!0;return function(){var r=Object(c.a)(n.a.mark((function r(a){var c,s,o,l;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c="https://codeforces.com/api/user.status?handle=",r.next=3,Object(te.b)(e.userId);case 3:if(!(s=r.sent).isUserExist||!1!==s.isError){r.next=12;break}return r.next=7,$(c+a);case 7:o=r.sent,l=ee(o),t&&(S(!1),L(o),F({solvedCountAll:l.solvedCountAll,solvedCountLastYear:l.solvedCountLastYear,solvedCountLastMonth:l.solvedCountLastMonth,longestStreak:l.longestStreak,currentStreak:l.currentStreak,streakSum:l.streakSum,solvedHistory:q(o),submissionHistory:Z(o)}),O(s.isUserExist),N(s.userRating)),r.next=13;break;case 12:t&&(S(!1),i(s.isError),O(s.isUserExist));case 13:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()(e.userId),function(){t=!1}}),[e.userId]);var Y=g&&!1===a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{userId:e.userId,rating:E}),Object(j.jsx)("hr",{}),Object(j.jsx)(C,{userId:e.userId,solvedCountAll:A.solvedCountAll,solvedCountLastYear:A.solvedCountLastYear,solvedCountLastMonth:A.solvedCountLastMonth,longestStreak:A.longestStreak,currentStreak:A.currentStreak,streakSum:A.streakSum}),Object(j.jsx)(U,{solvedHistory:A.solvedHistory}),Object(j.jsx)(X,{data:A.submissionHistory}),Object(j.jsx)(w,{submission:T})]}):a?Object(j.jsx)(b.a,{}):Object(j.jsx)(u,{}),B=f?Object(j.jsx)(h,{}):Y;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{userId:e.userId,location:"user"}),Object(j.jsx)("div",{className:"Main",children:B})]})}}}]);
//# sourceMappingURL=7.d1e1141f.chunk.js.map