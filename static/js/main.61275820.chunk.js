(this["webpackJsonpmath-magic"]=this["webpackJsonpmath-magic"]||[]).push([[0],{27:function(t,e,a){},28:function(t,e,a){},38:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),l=a(16),s=a.n(l),i=(a(27),a(9)),r=a(17),o=a(18),b=a(22),j=a(21),u=(a(28),a(2)),h=a(4),x=a(11),p=a(14),O=a.n(p);function m(t,e,a){var n=O()(t),c=O()(e);if("+"===a)return n.plus(c).toString();if("-"===a)return n.minus(c).toString();if("x"===a)return n.times(c).toString();if("\xf7"===a)try{return n.div(c).toString()}catch(l){return"Can't divide by 0."}if("%"===a)return n.mod(c).toString();throw Error("Unknown operation '".concat(a,"'"))}var d=a(0),v=function(){var t=Object(n.useState)({total:null,next:null,operation:null}),e=Object(x.a)(t,2),a=e[0],c=e[1],l=function(t){var e,n;c(Object(h.a)(Object(h.a)({},a),(e=a,"AC"===(n=t.target.value)?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===e.next?{}:e.operation?e.next?Object(h.a)(Object(h.a)({},e),{},{next:e.next+n}):Object(h.a)(Object(h.a)({},e),{},{next:n}):e.next?{next:e.next+n,total:null}:{next:n,total:null}:"."===n?e.next?e.next.includes(".")?Object(h.a)({},e):Object(h.a)(Object(h.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===n?e.next&&e.operation?{total:m(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===n?e.next?Object(h.a)(Object(h.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(h.a)(Object(h.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(h.a)(Object(h.a)({},e),{},{operation:n}):{total:m(e.total,e.next,e.operation),next:null,operation:n}:e.next?{total:e.next,next:null,operation:n}:{operation:n}:Object(h.a)(Object(h.a)({},e),{},{operation:n}))))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"do-math",children:" Let us do some basic maths: "}),Object(d.jsxs)("div",{className:"calculator",children:[Object(d.jsxs)("div",{className:"screen",children:[Object(d.jsx)("input",{type:"text",className:"input-number",value:a.total||a.next||"0"}),Object(d.jsx)("div",{className:"input-operation",children:a.operation&&a.next?a.operation+a.next:a.operation})]}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{className:"tr1",children:[Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"AC",className:"glob numbers","aria-label":"AC",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"+/-",className:"glob numbers","aria-label":"+/-",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"%",className:" glob numbers","aria-label":"%",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"\xf7",className:"glob operations","aria-label":"\xf7",onClick:l})})]}),Object(d.jsxs)("tr",{className:"tr2",children:[Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"7",className:"glob numbers","aria-label":"7",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"8",className:"glob numbers","aria-label":"8",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"9",className:"glob numbers","aria-label":"9",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"x",className:"glob operations","aria-label":"x",onClick:l})})]}),Object(d.jsxs)("tr",{className:"tr3",children:[Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"4",className:"glob numbers","aria-label":"4",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"6",className:"glob numbers","aria-label":"6",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"5",className:"glob numbers","aria-label":"5",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"-",className:"glob operations","aria-label":"-",onClick:l})})]}),Object(d.jsxs)("tr",{className:"tr4",children:[Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"1",className:"glob numbers","aria-label":"1",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"2",className:"glob numbers","aria-label":"2",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"3",className:"glob numbers","aria-label":"3",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"+",className:"glob operations","aria-label":"+",onClick:l})})]}),Object(d.jsxs)("tr",{className:"tr5",children:[Object(d.jsx)("th",{colSpan:"2",children:Object(d.jsx)("input",{type:"button",value:"0",className:"glob zero","aria-label":"0",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:".",className:"glob numbers","aria-label":".",onClick:l})}),Object(d.jsx)("th",{children:Object(d.jsx)("input",{type:"button",value:"=",className:"glob operations","aria-label":"=",onClick:l})})]})]})]})]})},g=function(){return Object(d.jsxs)("nav",{className:"navBar",children:[Object(d.jsx)("h1",{children:"Math magicians"}),Object(d.jsx)("ul",{children:[{id:1,path:"/",text:"Home"},{id:2,path:"/calculator",text:"Calculator"},{id:3,path:"/quotes",text:"Quotes"}].map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:t.path,activeClassName:"active-link",exact:!0,children:t.text})},t.id)}))})]})},N=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"welcome",children:"Welcome to our page !"}),Object(d.jsx)("p",{className:"intro",children:"Even though everyone learns mathematics at school, it is difficult to define exactly what mathematics is. Clearly numbers, shapes and equations form part of it, but only a small part compared to the vast space of mathematical concepts and ideas. The best way to understand what mathematics is and what mathematicians work on \u2013 is to do mathematics."}),Object(d.jsx)("p",{className:"intro",children:"One idea that appears everywhere in mathematics is abstraction. Instead of thinking about particular numbers, shapes, equations or any other objects, mathematicians tend to think about their underlying structures and patterns. This means that the results, called Theorems, are more general and provide deeper insight."})]})},f=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"No match for this page"})})},y=function(){var t=Object(n.useState)({}),e=Object(x.a)(t,2),a=e[0],c=e[1];return Object(n.useEffect)((function(){fetch("https://random-math-quote-api.herokuapp.com/").then((function(t){return t.json()})).then((function(t){return c(t)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h3",{className:"quote-author",children:[a.author," ",":"]}),Object(d.jsx)("p",{className:"quote",children:a.quote})]})},k=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(u.a,{path:"/calculator",children:Object(d.jsx)(v,{})}),Object(d.jsx)(u.a,{path:"/quotes",children:Object(d.jsx)(y,{})}),Object(d.jsx)(u.a,{path:"*",children:Object(d.jsx)(f,{})})]})]})}}]),a}(n.Component);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(k,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.61275820.chunk.js.map