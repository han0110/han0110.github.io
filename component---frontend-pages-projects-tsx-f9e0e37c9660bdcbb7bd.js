(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{OYKi:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return l}));a("91GP");var n=a("q1tI"),r=a("Wbzz"),c=a("xQAF");t.default=Object(c.a)((function(e){var t=e.data.allMarkdownRemark,a=e.location.pathname,c=t.edges.map((function(e){return Object.assign({},e.node)}));return n.createElement("div",{className:"projects__wrapper"},n.createElement("div",null,c.map((function(e){var t=e.html,r=e.frontmatter,c=r.title,l=r.theme,o=r.status,u=r.demo,s=r.source,i=e.fields.slug;return n.createElement("div",{className:"projects__content","data-active":i===a,key:c},n.createElement("h2",{"data-status":o,style:{color:l}},c),n.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),n.createElement("a",{href:u,rel:"noopener noreferrer",target:"_blank"},n.createElement("p",null,"demo")),n.createElement("a",{href:s,rel:"noopener noreferrer",target:"_blank"},n.createElement("p",null,"source")))}))),n.createElement("div",{className:"projects__cards"},c.map((function(e){var t=e.frontmatter,a=t.title,c=t.theme,l=e.fields,o=l.slug,u=l.icon;return n.createElement(r.a,{style:{backgroundColor:c},to:o,key:o},n.createElement("img",{src:u,alt:a}))}))))}));var l="1030758657"},Wbzz:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("+ZDr"),l=a.n(c);a.d(t,"a",(function(){return l.a})),a.d(t,"b",(function(){return c.withPrefix}));a("lw3w"),a("emEt").default.enqueue,r.a.createContext({})},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),c=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},xQAF:function(e,t,a){"use strict";var n=a("q1tI"),r=(a("Z2Ku"),a("L9s1"),a("Wbzz")),c=function(e){var t=e.pathname;return n.createElement("div",{className:"navbar__wrapper"},n.createElement("h1",{className:"navbar__title"},"HAN"),n.createElement("nav",{className:"navbar__links"},[{id:"About",to:"/"},{id:"Projects",to:"/projects"}].map((function(e){var a=e.id,c=e.to;return n.createElement(r.a,{className:"navbar__link","data-active":"/"===c?t===Object(r.b)(c):t.includes(Object(r.b)(c)),key:a,to:c},a)}))))};a.d(t,"a",(function(){return o}));var l=function(e){var t=e.children,a=e.location;return n.createElement("div",{className:"layout__wrapper"},n.createElement(c,{pathname:a.pathname}),n.createElement("div",{className:"layout__children"},t))},o=function(e){return function(t){return n.createElement(l,{location:t.location},n.createElement(e,t))}}}}]);
//# sourceMappingURL=component---frontend-pages-projects-tsx-f9e0e37c9660bdcbb7bd.js.map