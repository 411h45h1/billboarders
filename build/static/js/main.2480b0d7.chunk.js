(this.webpackJsonpbillboarders=this.webpackJsonpbillboarders||[]).push([[0],{330:function(e,t,a){e.exports=a(729)},335:function(e,t,a){},337:function(e,t,a){},354:function(e,t){},356:function(e,t){},365:function(e,t){},367:function(e,t){},392:function(e,t){},393:function(e,t){},398:function(e,t){},400:function(e,t){},424:function(e,t){},463:function(e,t){},565:function(e,t){},729:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(52),o=a.n(r),c=(a(335),a(336),a(337),a(71)),i=Object(n.createContext)(),m=a(185),s=a(38),u=function(e,t){var a=t.type,n=t.payload;switch(a){case"LOADING":return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case"GET_ALLTIME_200":return Object(s.a)(Object(s.a)({},e),{},{allTime:[].concat(Object(m.a)(e.allTime),[n])});case"GET_HOT100_WEEK":return Object(s.a)(Object(s.a)({},e),{},{week:[].concat(Object(m.a)(e.week),[n])});case"CLEAR_HOT100_WEEK":return Object(s.a)(Object(s.a)({},e),{},{week:[]});default:return e}},E=a(124),d=function(e){var t=Object(n.useReducer)(u,{allTime:[],week:[],loading:!1}),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(i.Provider,{value:{loading:r.loading,week:r.week,allTime:r.allTime,onLoading:function(){return o({type:"LOADING"})},getAllTime200:function(){Object(E.getChart)("greatest-billboard-200-albums",(function(e,t){e&&console.log(e),o({type:"GET_ALLTIME_200",payload:t}),console.log("greatest",t.songs)}))},getChartLists:function(){Object(E.listCharts)((function(e,t){e&&console.log(e),console.log(t)}))},getChartWeek:function(e){Object(E.getChart)("hot-100",e,(function(e,t){0===r.week.length?o({type:"GET_HOT100_WEEK",payload:t}):e&&console.log(e)}))},clearWeek:function(){return o({type:"CLEAR_HOT100_WEEK"})}}},e.children)},g=a(745),h=a(743),b=a(744),p=a(730),f=a(737),k=a(69),w=Object(k.createMedia)({breakpoints:{mobile:320,tablet:768,computer:992,largeScreen:1400,widescreen:1920}}).Media,C=function(){var e=Object(n.useContext)(i),t=e.allTime,a=e.getChartWeek,r=e.clearWeek,o=e.getAllTime200,m=Object(n.useState)(""),s=Object(c.a)(m,2),u=s[0],E=s[1],d=Object(n.useState)(!1),k=Object(c.a)(d,2),C=k[0],v=k[1],O=Object(n.useState)(!1),y=Object(c.a)(O,2),T=y[0],z=y[1],j=function(){v(!C),z(!1),t.length<1&&o()},B=function(){v(!1),z(!T)};return l.a.createElement(g.a,null,l.a.createElement(h.a,{centered:!0},l.a.createElement(h.a.Column,{width:16},l.a.createElement(b.a,{as:"div",block:!0},l.a.createElement(h.a,null,l.a.createElement(h.a.Column,{floated:"left",width:8,as:w,at:"mobile"},l.a.createElement(p.a,{toggle:!0,size:"huge",active:C,onClick:j,content:"Billboard Top 200 Albums "})),l.a.createElement(h.a.Column,{floated:"right",width:7,as:w,at:"mobile"},l.a.createElement(p.a,{toggle:!0,size:"huge",active:T,onClick:B,content:"Billboard Hot 100"})),l.a.createElement(h.a.Column,{floated:"left",width:6,as:w,at:"tablet"},l.a.createElement(p.a,{toggle:!0,size:"massive",active:C,onClick:j,content:"Billboard Top 200 Albums "})),l.a.createElement(h.a.Column,{floated:"right",width:6,as:w,at:"tablet"},l.a.createElement(p.a,{toggle:!0,size:"massive",active:T,onClick:B,content:"Billboard Hot 100"})),l.a.createElement(h.a.Column,{floated:"left",width:5,as:w,greaterThanOrEqual:"computer"},l.a.createElement(p.a,{toggle:!0,size:"massive",active:C,onClick:j,content:"Billboard Top 200 Albums "})),l.a.createElement(h.a.Column,{floated:"right",width:5,as:w,greaterThanOrEqual:"computer"},l.a.createElement(p.a,{toggle:!0,size:"massive",active:T,onClick:B,content:"Billboard Hot 100"}))))),T&&l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a.Column,{width:16,as:w,at:"mobile"},l.a.createElement(b.a,{size:"huge",textAlign:"center"},"Billboard Hot 100 Search")),l.a.createElement(h.a.Column,{width:16,as:w,at:"mobile"},l.a.createElement(f.a,{style:{width:"100%"},type:"text",onChange:function(e){return E(e.target.value)},size:"large",disabled:!1,loading:!1,placeholder:"YYYY-MM-DD"})),l.a.createElement(h.a.Column,{width:16,as:w,at:"mobile"},u.length>9?l.a.createElement(p.a,{content:"Submit",primary:!0,onClick:function(){return a(u)}}):null,u.length>9?l.a.createElement(p.a,{content:"Clear",color:"red",onClick:function(){return r()}}):null),l.a.createElement(h.a.Column,{width:4,as:w,greaterThanOrEqual:"tablet"},l.a.createElement(b.a,{size:"huge",textAlign:"center"},"Billboard Hot 100 Search")),l.a.createElement(h.a.Column,{width:8,as:w,greaterThanOrEqual:"tablet"},l.a.createElement(f.a,{style:{width:"100%"},type:"text",onChange:function(e){return E(e.target.value)},size:"large",disabled:!1,loading:!1,placeholder:"YYYY-MM-DD"})),l.a.createElement(h.a.Column,{width:4,as:w,greaterThanOrEqual:"tablet"},u.length>9?l.a.createElement(p.a,{content:"Submit",primary:!0,onClick:function(){return a(u)}}):null,u.length>9?l.a.createElement(p.a,{content:"Clear",color:"red",onClick:function(){return r()}}):null))))},v=a(741),O=a(738),y=a(93),T=a(740),z=a(319),j=a(742),B=Object(k.createMedia)({breakpoints:{mobile:320,tablet:768,computer:992,largeScreen:1400,widescreen:1920}}).Media,M=function(){var e=Object(n.useContext)(i),t=e.allTime,a=e.week,r=e.loading;return t.length>0|a.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{as:B,at:"mobile"},l.a.createElement(v.a,{active:r},l.a.createElement(O.a,null)),a.length>0&&l.a.createElement(h.a,{centered:!0},l.a.createElement(h.a.Row,{centered:!0,columns:2},a[0].songs.map((function(e,t){return l.a.createElement(h.a.Column,{key:t},l.a.createElement(g.a,{inverted:!0,className:"OutputItem",style:{marginBottom:10}},l.a.createElement(y.a,{color:"purple",size:"large",ribbon:!0},e.rank),l.a.createElement(T.a,null,l.a.createElement(T.a.Content,null,l.a.createElement(z.a,{floated:"left",size:"tiny",src:e.cover}),l.a.createElement(T.a.Header,null,e.artist),l.a.createElement(T.a.Meta,null,l.a.createElement("span",null,e.title)))),l.a.createElement(j.a.Group,{inverted:!0,size:"mini",horizontal:!0},l.a.createElement(j.a,{inverted:!0,color:"yellow",label:"Highest Position",value:e.position.peakPosition}),e.position.positionLastWeek?l.a.createElement(j.a,{inverted:!0,color:"teal",label:"Prior week's Position",value:e.position.positionLastWeek}):null,e.position.weeksOnChart?l.a.createElement(j.a,{inverted:!0,color:"orange",label:"Week's on the chart",value:e.position.weeksOnChart}):null)))})))),t.length>0&&l.a.createElement(h.a,{centered:!0},l.a.createElement(h.a.Row,{centered:!0,columns:2},t[0].songs.map((function(e,t){return l.a.createElement(h.a.Column,{key:t},l.a.createElement(g.a,{inverted:!0,className:"OutputItem",style:{marginBottom:10}},l.a.createElement(y.a,{color:"purple",size:"large",ribbon:!0},e.rank),l.a.createElement(T.a,null,l.a.createElement(T.a.Content,null,l.a.createElement(z.a,{floated:"left",size:"tiny",src:e.cover}),l.a.createElement(T.a.Header,null,e.artist),l.a.createElement(T.a.Meta,null,l.a.createElement("span",null,e.title))))))}))))),l.a.createElement(g.a,{as:B,at:"tablet"},l.a.createElement(v.a,{active:r},l.a.createElement(O.a,null)),a.length>0&&l.a.createElement(h.a,{centered:!0},l.a.createElement(h.a.Row,{centered:!0,columns:4},a[0].songs.map((function(e,t){return l.a.createElement(h.a.Column,{key:t},l.a.createElement(g.a,{inverted:!0,className:"OutputItem",style:{marginBottom:10}},l.a.createElement(y.a,{color:"purple",size:"large",ribbon:!0},e.rank),l.a.createElement(T.a,null,l.a.createElement(T.a.Content,null,l.a.createElement(z.a,{floated:"left",size:"tiny",src:e.cover}),l.a.createElement(T.a.Header,null,e.artist),l.a.createElement(T.a.Meta,null,l.a.createElement("span",null,e.title)))),l.a.createElement(j.a.Group,{inverted:!0,size:"mini",horizontal:!0},l.a.createElement(j.a,{inverted:!0,color:"yellow",label:"Highest Position",value:e.position.peakPosition}),e.position.positionLastWeek?l.a.createElement(j.a,{inverted:!0,color:"teal",label:"Prior week's Position",value:e.position.positionLastWeek}):null,e.position.weeksOnChart?l.a.createElement(j.a,{inverted:!0,color:"orange",label:"Week's on the chart",value:e.position.weeksOnChart}):null)))})))),t.length>0&&l.a.createElement(h.a,{centered:!0},l.a.createElement(h.a.Row,{centered:!0,columns:4},t[0].songs.map((function(e,t){return l.a.createElement(h.a.Column,{key:t},l.a.createElement(g.a,{inverted:!0,className:"OutputItem",style:{marginBottom:10}},l.a.createElement(y.a,{color:"purple",size:"large",ribbon:!0},e.rank),l.a.createElement(T.a,null,l.a.createElement(T.a.Content,null,l.a.createElement(z.a,{floated:"left",size:"tiny",src:e.cover}),l.a.createElement(T.a.Header,null,e.artist),l.a.createElement(T.a.Meta,null,l.a.createElement("span",null,e.title))))))}))))),l.a.createElement(g.a,{as:B,greaterThanOrEqual:"computer"},l.a.createElement(v.a,{active:r},l.a.createElement(O.a,null)),a.length>0&&l.a.createElement(h.a,{centered:!0},l.a.createElement(h.a.Row,{centered:!0,columns:5},a[0].songs.map((function(e,t){return l.a.createElement(h.a.Column,{key:t},l.a.createElement(g.a,{inverted:!0,className:"OutputItem",style:{marginBottom:10}},l.a.createElement(y.a,{color:"purple",size:"large",ribbon:!0},e.rank),l.a.createElement(T.a,null,l.a.createElement(T.a.Content,null,l.a.createElement(z.a,{floated:"left",size:"tiny",src:e.cover}),l.a.createElement(T.a.Header,null,e.artist),l.a.createElement(T.a.Meta,null,l.a.createElement("span",null,e.title)))),l.a.createElement(j.a.Group,{inverted:!0,size:"mini",horizontal:!0},l.a.createElement(j.a,{inverted:!0,color:"yellow",label:"Highest Position",value:e.position.peakPosition}),e.position.positionLastWeek?l.a.createElement(j.a,{inverted:!0,color:"teal",label:"Prior week's Position",value:e.position.positionLastWeek}):null,e.position.weeksOnChart?l.a.createElement(j.a,{inverted:!0,color:"orange",label:"Week's on the chart",value:e.position.weeksOnChart}):null)))})))),t.length>0&&l.a.createElement(h.a,{centered:!0},l.a.createElement(h.a.Row,{centered:!0,columns:5},t[0].songs.map((function(e,t){return l.a.createElement(h.a.Column,{key:t},l.a.createElement(g.a,{inverted:!0,className:"OutputItem",style:{marginBottom:10}},l.a.createElement(y.a,{color:"purple",size:"large",ribbon:!0},e.rank),l.a.createElement(T.a,null,l.a.createElement(T.a.Content,null,l.a.createElement(z.a,{floated:"left",size:"tiny",src:e.cover}),l.a.createElement(T.a.Header,null,e.artist),l.a.createElement(T.a.Meta,null,l.a.createElement("span",null,e.title))))))})))))):null},A=a(318),H=Object(k.createMedia)({breakpoints:{mobile:320,tablet:768,computer:992,largeScreen:1400,widescreen:1920}}),W=H.createMediaStyle(),L=H.Media,P=H.MediaContextProvider,_=function(){return l.a.createElement(d,null,l.a.createElement(A.Scrollbars,{style:{width:"100vw",height:"100vh",backgroundColor:"#AE854E"}},l.a.createElement("style",null,W),l.a.createElement(P,null,l.a.createElement(h.a,{style:{margin:5}},l.a.createElement(h.a.Row,{className:"AppHeader",columns:"equal"},l.a.createElement(h.a.Column,{width:16,as:L,at:"mobile"},l.a.createElement(p.a.Group,{id:"NoDrag",floated:"right"},l.a.createElement(p.a,{as:"a",href:"https://github.com/AhmedAlihashi/billboarders",target:"_blank",rel:"noopener noreferrer",content:"Click here for the repository"}),l.a.createElement(p.a,{icon:"power off",color:"red",onClick:function(){window.close()}}))),l.a.createElement(h.a.Column,{width:16,as:L,at:"mobile"},l.a.createElement("p",{id:"headerText"},"BillBoarders")),l.a.createElement(h.a.Column,{width:8,as:L,greaterThanOrEqual:"tablet"},l.a.createElement("p",{id:"headerText"},"BillBoarders")),l.a.createElement(h.a.Column,{width:8,as:L,greaterThanOrEqual:"tablet"},l.a.createElement(p.a.Group,{id:"NoDrag",floated:"right"},l.a.createElement(p.a,{as:"a",href:"https://github.com/AhmedAlihashi/billboarders",target:"_blank",rel:"noopener noreferrer",content:"Click here for the repository"}),l.a.createElement(p.a,{icon:"power off",color:"red",onClick:function(){window.close()}})))),l.a.createElement(h.a.Column,{id:"NoDrag",width:16},l.a.createElement(C,null)),l.a.createElement(h.a.Column,{id:"NoDrag",width:16},l.a.createElement(M,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[330,1,2]]]);
//# sourceMappingURL=main.2480b0d7.chunk.js.map