(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(215),i=a(213);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},206:function(e,t,a){var n;e.exports=(n=a(210))&&n.default||n},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(67),i=a.n(o);a.d(t,"a",function(){return i.a});a(206),a(9).default.enqueue,r.a.createContext({})},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning"}}}}},210:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},213:function(e,t,a){"use strict";a(94),a(137),a(54),a(13),a(53),a(40),a(29);var n=a(214),r=a(0),o=a.n(r),i=a(224),c=a.n(i),l=a(93);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.a=function(e){var t=e.title,a=e.description,i=void 0===a?"":a,m=e.meta,u=void 0===m?[]:m,d=n.data.site.siteMetadata,f=i||d.description,h=Object(r.useContext)(l.b).context;return o.a.createElement(c.a,{htmlAttributes:{lang:h.lang},title:t,titleTemplate:"%s | "+d.title,meta:[{name:"description",content:f},{property:"og:title",content:t},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.author},{name:"twitter:title",content:t},{name:"twitter:description",content:f},{name:"theme_color",content:"dark"===h.theme?"#434343":"#FA709A"}].concat(s(u))})}},214:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This website contains the online documentation for my projects and also my personal blog.",author:"Yao Wei Tjong 姚伟忠"}}}}},215:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(220),a(209)),i=a(207),c=a(203),l=a.n(c),s=a(287),m=a(285),u=a(283),d=a(288),f=a(286),h=a(284),p=a(272),w=a(271),E=a(93),b=function(){var e=o.data.site.siteMetadata,t=Object(n.useContext)(E.b),a=t.context,c=t.setContext;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{variant:"warning",className:"mb-0 fixed-top",show:a.showAlert,dismissible:!0,onClose:function(){return c({showAlert:!1})}},"This site is still under construction!"),r.a.createElement("header",null,r.a.createElement(m.a,{expand:"md",bg:a.theme,variant:a.theme,fixed:"top",className:l()({"with-y-offset":a.showAlert})},r.a.createElement(u.a,null,r.a.createElement(m.a.Brand,{to:"/",as:i.a},e.title),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"#home"},"Home"),r.a.createElement(d.a.Link,{href:"#link"},"Link"),r.a.createElement(f.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(f.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(f.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(f.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(f.a.Divider,null),r.a.createElement(f.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(h.a,{inline:!0},r.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(w.a,{variant:"outline-success"},"Search")))))))},g=function(){return r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")))};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("main",null,t),r.a.createElement(g,null))}}}]);