(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{198:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(211),i=n(207);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},202:function(e,t,n){var a;e.exports=(a=n(206))&&a.default||a},204:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(67),i=n.n(o);n.d(t,"a",function(){return i.a});n(202),n(9).default.enqueue,r.a.createContext({})},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning"}}}}},206:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),r=n.n(a),o=n(95);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},207:function(e,t,n){"use strict";var a=n(208),r=n(0),o=n.n(r),i=n(213),c=n.n(i),l=n(91),s=function(e){var t=e.description,n=e.lang,i=e.meta,s=e.title,m=a.data.site.siteMetadata,u=t||m.description,d=Object(r.useContext)(l.b).context.theme;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+m.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u},{name:"theme_color",content:"dark"===d?"#434343":"#FA709A"}].concat(i)})};s.defaultProps={lang:"en",meta:[],description:""},t.a=s},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This website contains the online documentation for my projects and also my personal blog.",author:"Yao Wei Tjong 姚伟忠"}}}}},211:function(e,t,n){"use strict";var a=n(205),r=n(0),o=n.n(r),i=(n(212),n(91)),c=n(204),l=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.defaultProps={siteTitle:""};var s=l;t.a=function(e){var t=e.children,n=a.data,c=Object(r.useContext)(i.b),l=c.context.theme,m=c.setContext;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:function(){return m({theme:"dark"===l?"light":"dark"})}},"Click here to test the theme switcher: ",l),o.a.createElement(s,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),o.a.createElement("div",null,"Icons made by ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons")," from ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",o.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")))))}}}]);