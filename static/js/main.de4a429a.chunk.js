(this["webpackJsonpmy-test-react"]=this["webpackJsonpmy-test-react"]||[]).push([[0],{10:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),r=n.n(s),a=n(19),o=n.n(a),j=(n(26),n(10),n(7));var i=function(){var e={color:"yellow"};return Object(c.jsxs)("nav",{children:[Object(c.jsx)("h3",{children:"Logo"}),Object(c.jsxs)("ul",{className:"nav-links",children:[Object(c.jsx)(j.b,{style:e,exact:!0,to:"/",children:Object(c.jsx)("li",{children:"Home"})}),Object(c.jsx)(j.b,{style:e,to:"/shop",children:Object(c.jsx)("li",{children:"Shop"})}),Object(c.jsx)(j.b,{style:e,to:"/about",children:Object(c.jsx)("li",{children:"About"})})]})]})},b=n(9),h=n.n(b),l=n(12),u=n(13);var d=function(){Object(s.useEffect)((function(){a()}),[]);var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(l.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.data),r(n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"shopInfo",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h2",{children:" United State Population"}),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsxs)("div",{className:"infoPage",children:[Object(c.jsx)("h3",{children:e.Nation}),Object(c.jsx)("h4",{children:e.Year}),Object(c.jsx)("h4",{children:e.Population}),Object(c.jsx)("br",{})]})}))})]})};var O=function(){Object(s.useEffect)((function(){a()}),[]);var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(l.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://official-joke-api.appspot.com/jokes/ten");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),r(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"aboutInfo",children:[Object(c.jsx)("h2",{children:"Random jokes"}),Object(c.jsx)("br",{}),n.map((function(e){return Object(c.jsxs)("h3",{children:[e.setup,Object(c.jsx)("br",{}),e.punchline,Object(c.jsx)("br",{}),Object(c.jsx)("hr",{})]})}))]})},x=n(2);var p=function(){return Object(c.jsx)("div",{className:"footerInfo",children:Object(c.jsx)("h1",{children:"Footer"})})};var f=function(){return Object(c.jsxs)("div",{className:"homeInfo",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{children:" Using React Router to Optimize Single Page Applications (SPAs)"}),Object(c.jsx)("br",{}),Object(c.jsx)("h3",{children:"Welcome to the Home Page"}),Object(c.jsx)("p",{children:Object(c.jsx)("h4",{children:"Go to the Shop page and the about page to find some information!!"})})]})},m=function(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(i,{}),Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/",exact:!0,component:f}),Object(c.jsx)(x.a,{path:"/about",component:O}),Object(c.jsx)(x.a,{path:"/shop",component:d})]}),Object(c.jsx)(p,{})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.de4a429a.chunk.js.map