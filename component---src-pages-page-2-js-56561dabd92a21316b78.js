(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(197),o=a(202),c=a(200);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},196:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(196),a(9).default.enqueue,r.a.createContext({})},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning"}}}}},199:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},200:function(e,t,a){"use strict";var n=a(201),r=a(0),i=a.n(r),o=a(204),c=a.n(o);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This website contains the online documentation for my projects and also my personal blog.",author:"Yao Wei Tjong 姚伟忠"}}}}},202:function(e,t,a){"use strict";var n=a(198),r=a(0),i=a.n(r),o=a(197),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.defaultProps={siteTitle:""};var l=c;a(203),t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),i.a.createElement("div",null,"Icons made by ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons")," from ",i.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",i.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")))))}}}]);