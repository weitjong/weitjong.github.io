(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{252:function(e,t,a){"use strict";a(72),a(157),a(55),a(13),a(54),a(42),a(25);var n=a(300),r=a(0),l=a.n(r),C=a(301),i=a.n(C),c=a(103);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.a=function(e){var t=e.title,a=e.description,C=void 0===a?"":a,s=e.meta,m=void 0===s?[]:s,d=n.data.site.siteMetadata,u=C||d.description,p=Object(r.useContext)(c.b),f=p.lang,h=p.theme;return l.a.createElement(i.a,{htmlAttributes:{lang:f},bodyAttributes:{class:h},title:t,titleTemplate:"%s | "+d.title,meta:[{name:"description",content:u},{property:"og:title",content:t},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.author},{name:"twitter:title",content:t},{name:"twitter:description",content:u}].concat(o(m))})}},253:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(277),a(16),a(278)),C=a(255),i=a(248),c=a.n(i),o=a(315),s=a(316),m=a(311),d=a(314),u=a(312),p=a(264),f=a(103),h=a(265),y=a.n(h),E=function(e,t){void 0===t&&(t=100);var a="undefined"!=typeof window?function(e){void 0===e&&(e=!0);var a=document.documentElement.style.getPropertyValue("--vh").slice(0,-2),n=window.innerHeight;(e||Math.abs(100*a-n)>t)&&document.documentElement.style.setProperty("--vh",n/100+"px","important")}:function(e){return e};return[function(t){return"undefined"!=typeof window&&(document.documentElement.style.getPropertyValue("--vh")||(a(),Object(n.useEffect)(function(){return window.addEventListener("resize",function(){return a(!1)}),window.addEventListener("deviceorientation",a),function(){window.removeEventListener("resize",function(){return a(!1)}),window.removeEventListener("deviceorientation",a)}}))),r.a.createElement(e,t)},a]},g=function(e){return r.a.createElement(C.a,Object.assign({},e,{activeClassName:"active"}))},k=(a(25),a(26),a(13),a(50),a(283)),v=a.n(k);function F(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var w=function(e){var t=e.disabled,a=void 0!==t&&t,n=F(e,["disabled"]),l=n.className,C=F(n,["className"]);return r.a.createElement("div",Object.assign({className:"search "+l},C),r.a.createElement(v.a,{className:c()({disabled:a})}))};var x=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={theme:""},t.setContext=function(){},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=this,t=this.context,a=t.theme,n=t.setContext;this.setState({theme:a}),this.setContext=function(t){n(t),e.setState(t)}},l.render=function(){var e=this,t=this.state.theme;return r.a.createElement("div",{className:"theme-switcher "+t,onClick:function(){e.setContext({theme:"dark"===t?"light":"dark"})}})},n}(r.a.Component);x.contextType=f.b;var b=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={showConstructionAlert:!1,dark:!0,gradient:!1,expanded:!1},t.toggleExpanded=function(e){e?(t.resetVH(),t.setState(function(t){return{gradient:!0,expanded:e}}),document.body.style.overflow="hidden"):(t.setState(function(t){return{gradient:!1,expanded:e}}),document.body.style.overflow="auto")},t.setContext=function(e){return e},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){var e=this,t=this.context,a=t.showConstructionAlert,n=t.setContext;this.setState({showConstructionAlert:a}),this.setContext=function(t){n(t),e.setState(t)}},i.render=function(){var e=this,t=this.state,a=t.showConstructionAlert,n=t.dark,i=t.gradient,f=t.expanded,h=E(o.a.Collapse),k=h[0],v=h[1];return this.resetVH=v,r.a.createElement(C.b,{query:"459041758",render:function(t){var l=t.site.siteMetadata;return r.a.createElement("header",null,r.a.createElement(s.a,{variant:"warning",className:"mb-0 fixed-top text-center",show:a,dismissible:!0,onClose:function(){return e.setContext({showConstructionAlert:!1})}},"This application is under construction.",r.a.createElement("span",{className:"d-none d-sm-inline"}," Pardon our dust.")),r.a.createElement(o.a,{collapseOnSelect:!0,expand:"md",bg:"top-nav",variant:"dark",fixed:"top",className:c()({"with-y-offset":a,dark:n,gradient:i}),expanded:f,onToggle:e.toggleExpanded},r.a.createElement(m.a,null,r.a.createElement(o.a.Brand,{to:"/",as:g,className:"mr-0"},r.a.createElement(y.a,{width:26,height:26,alt:"logo",className:"mr-1"}),l.title),r.a.createElement(o.a.Toggle,{"aria-controls":"top-nav"}),r.a.createElement(k,{id:"top-nav"},r.a.createElement(d.a,{justify:!0,className:"mx-auto w-75 middle"},r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"dockerized",to:"/dockerized/",as:g},"dockerized")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"cmake-1",to:"/cmake-1/",as:g},"cmake-1")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"Urho3D",to:"/Urho3D/",as:g},"Urho3D")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"page-2",to:"/page-2/",as:g,disabled:!0},"Blog"))),r.a.createElement(u.a,{className:"mx-0"},r.a.createElement(w,{disabled:!0,className:"mr-3"}),r.a.createElement(d.a,null,r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{eventKey:"theme",className:"py-0"},r.a.createElement(x,null)))))))),r.a.createElement(p.a,{topOffset:-250,bottomOffset:-250,onEnter:function(){return e.setState(function(e){return Object.assign({},e,{dark:!1})})},onLeave:function(){return e.setState(function(e){return Object.assign({},e,{dark:!0})})}}))},data:l})},n}(r.a.Component);b.contextType=f.b;var M=a(298),L=a(313),S=function(){var e=M.data.site.siteMetadata;return r.a.createElement("footer",{className:"section"},r.a.createElement(m.a,null,r.a.createElement(u.a,{className:"align-self-center"},r.a.createElement(L.a,{md:{span:!0,order:2}},r.a.createElement("div",{className:"text-muted text-md-right"},r.a.createElement("p",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")),r.a.createElement("p",null,"book-library-with-open-textbook.jpg - Created by jcomp from ",r.a.createElement("a",{href:"https://www.freepik.com/free-photos-vectors/background"},"www.freepik.com")),r.a.createElement("p",null,"container-2661347_1920.jpg - Image by ",r.a.createElement("a",{href:"https://pixabay.com/users/distel2610-2726923/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2661347"},"Markus Distelrath")," from ",r.a.createElement("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2661347"},"Pixabay")),r.a.createElement("p",{className:"mb-0"},"Urho_Fishtank.jpg - Image courtesy of Lasse Öörni"))),r.a.createElement(L.a,{md:{span:"auto",order:1},className:"align-self-center"},r.a.createElement("p",{className:"lead mt-5 mt-md-0"},r.a.createElement(C.a,{to:"/",className:"footer-brand text-white"},r.a.createElement(y.a,{width:26,height:26,alt:"logo",className:"mr-1"}),e.title)),r.a.createElement("p",{className:"text-muted mb-0"},"© Copyright ",(new Date).getFullYear()," ",e.author)))))},Z=a(299),A=function(){var e=Z.data.site.siteMetadata.cssVars;return Object(n.useEffect)(function(){document.documentElement.style.setProperty("--theme-color",""+e.themeColor,"important")}),null};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(b,null),r.a.createElement("main",null,t),r.a.createElement(S,null))}},255:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(71),C=a.n(l);a.d(t,"a",function(){return C.a}),a.d(t,"c",function(){return l.navigate});a(263),a(9).default.enqueue;var i=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,C=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,C&&l(C),!C&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||l,staticQueryData:e})})}},263:function(e,t,a){var n;e.exports=(n=a(279))&&n.default||n},265:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"038 - Mind Map"),n.createElement("desc",{key:1},"Created with Sketch."),n.createElement("defs",{key:2}),n.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:3},n.createElement("g",{id:"038---Mind-Map",transform:"translate(-1.000000, 0.000000)",fillRule:"nonzero"},[n.createElement("path",{d:"M47.26,37.71 C45.9803538,40.6319437 45.5006323,43.8415908 45.87,47.01 C46.0951005,49.0721875 46.5033794,51.1102353 47.09,53.1 C47.4066015,54.1331686 47.8045116,55.1396471 48.28,56.11 C48.8738098,57.0143772 49.4082676,57.956359 49.88,58.93 L24.78,59 L24.78,58.99 C24.7,58.69 23.19,52.81 19.85,51.3 C19.23,51.52 18.57,51.74 17.9,51.97 C15.6789002,52.7404523 13.4191713,53.3946722 11.13,53.93 C10.4993821,54.0806865 9.83512584,53.9878335 9.27,53.67 C8.62676625,53.2742562 8.14753634,52.660132 7.92,51.94 C7.65806229,51.2276891 7.56229323,50.4649569 7.64,49.71 C7.87036773,48.9391054 7.94848689,48.1307419 7.87,47.33 C7.61,46.32 6.65,46.07 5.89,45.53 C5.27,45.09 6.38,43.68 6.38,43.68 C6.38,43.68 5.2,42.81 4.78,42.44 C4.34,42.07 4.96,41.45 5.51,40.28 C5.73694079,39.7719796 5.80323378,39.2067446 5.7,38.66 C5.49,37.59 3.87,37.19 3.07,36.59 C2.69,36.31 2.08,35.89 2.01,35.38 C1.9,34.67 2.74,33.67 3.15,33.17 C4.89454657,30.9217816 6.38996718,28.4908848 7.61,25.92 C7.77010631,25.6486227 7.86589137,25.3441631 7.89,25.03 C7.87,23.6 5.8,23.01 5.61,21.62 C5.58022555,21.2120559 5.65239212,20.803112 5.82,20.43 C6.39667192,19.2042401 6.89109856,17.9414478 7.3,16.65 C7.54612792,15.4653226 7.86336869,14.2965408 8.25,13.15 C9.08859812,10.8496676 10.3808376,8.74127689 12.05,6.95 C14.5,4.36 18.12,3.08 21.54,2.4 C24.5813721,1.73504394 27.6655865,1.28393999 30.77,1.05 C30.87,1.04 30.97,1.04 31.07,1.03 C37.47,0.71 42.53,2.88 47.49,6.77 C50.1943357,8.78046229 52.1705976,11.6167315 53.12,14.85 C53.8445851,17.5214574 54.1846722,20.2825609 54.13,23.05 C54.110834,25.7831121 53.3129958,28.4541358 51.83,30.75 C50.34,33.11 48.39,35.14 47.26,37.71 Z",id:"Shape",fill:"#A4C2F7",key:0}),n.createElement("path",{d:"M44.26,37.71 C42.9803538,40.6319437 42.5006323,43.8415908 42.87,47.01 C43.0951005,49.0721875 43.5033794,51.1102353 44.09,53.1 C44.4066015,54.1331686 44.8045116,55.1396471 45.28,56.11 C45.8738098,57.0143772 46.4082676,57.956359 46.88,58.93 L27.65,58.98 L24.78,58.99 C24.71,58.72 23.5,54.02 20.87,51.93 C20.5569122,51.679263 20.2143771,51.4676972 19.85,51.3 C19.82,51.31 19.8,51.32 19.77,51.33 C19.17,51.54 18.54,51.75 17.9,51.97 C17.89,51.96 17.87,51.95 17.86,51.94 C17.5556688,51.6794682 17.215538,51.4639398 16.85,51.3 C15.16,51.89 13.21,52.54 11.43,53.07 C10.67,53.3 9.94,53.5 9.27,53.67 C8.62676625,53.2742562 8.14753634,52.660132 7.92,51.94 C7.65806229,51.2276891 7.56229323,50.4649569 7.64,49.71 C7.87036773,48.9391054 7.94848689,48.1307419 7.87,47.33 C7.61,46.32 6.65,46.07 5.89,45.53 C5.27,45.09 6.38,43.68 6.38,43.68 C6.38,43.68 5.2,42.81 4.78,42.44 C4.34,42.07 4.96,41.45 5.51,40.28 C5.73694079,39.7719796 5.80323378,39.2067446 5.7,38.66 C5.49,37.59 3.87,37.19 3.07,36.59 C2.69,36.31 2.08,35.89 2.01,35.38 C1.9,34.67 2.74,33.67 3.15,33.17 C4.89454657,30.9217816 6.38996718,28.4908848 7.61,25.92 C7.77010631,25.6486227 7.86589137,25.3441631 7.89,25.03 C7.87,23.6 5.8,23.01 5.61,21.62 C5.58022555,21.2120559 5.65239212,20.803112 5.82,20.43 C6.39667192,19.2042401 6.89109856,17.9414478 7.3,16.65 C7.54612792,15.4653226 7.86336869,14.2965408 8.25,13.15 C9.08859812,10.8496676 10.3808376,8.74127689 12.05,6.95 C14.5,4.36 18.12,3.08 21.54,2.4 C24.5813721,1.73504394 27.6655865,1.28393999 30.77,1.05 C31.22,1.08 31.66,1.12 32.09,1.18 C36.6667113,1.84036982 40.9644787,3.7778311 44.49,6.77 C47.1943357,8.78046229 49.1705976,11.6167315 50.12,14.85 C50.8445851,17.5214574 51.1846722,20.2825609 51.13,23.05 C51.110834,25.7831121 50.3129958,28.4541358 48.83,30.75 C47.34,33.11 45.39,35.14 44.26,37.71 Z",id:"Shape",fill:"#FFFFFF",key:1}),n.createElement("path",{d:"M44.26,37.71 C42.9803538,40.6319437 42.5006323,43.8415908 42.87,47.01 C43.0951005,49.0721875 43.5033794,51.1102353 44.09,53.1 C44.4066015,54.1331686 44.8045116,55.1396471 45.28,56.11 C45.8738098,57.0143772 46.4082676,57.956359 46.88,58.93 L27.65,58.98 C27.55,58.6 26.03,52.8 22.72,51.3 C22.13,51.51 21.51,51.72 20.87,51.93 C20.8385311,51.9475899 20.8049188,51.9610348 20.77,51.97 C20.4691967,51.7096627 20.1323908,51.4941069 19.77,51.33 C19.75,51.32 19.74,51.31 19.72,51.3 C19.13,51.51 18.5,51.72 17.86,51.94 C15.91,52.59 13.82,53.25 12.14,53.67 C11.8682142,53.5157011 11.6274621,53.3122486 11.43,53.07 C11.1453175,52.7384628 10.9279367,52.3546498 10.79,51.94 C10.5280623,51.2276891 10.4322932,50.4649569 10.51,49.71 C10.7403677,48.9391054 10.8184869,48.1307419 10.74,47.33 C10.48,46.32 9.52,46.07 8.76,45.53 C8.14,45.09 9.25,43.68 9.25,43.68 C9.25,43.68 8.07,42.81 7.65,42.44 C7.21,42.07 7.83,41.45 8.38,40.28 C8.60694079,39.7719796 8.67323378,39.2067446 8.57,38.66 C8.36,37.59 6.74,37.19 5.94,36.59 C5.56,36.31 4.95,35.89 4.88,35.38 C4.77,34.67 5.61,33.67 6.02,33.17 C7.76454657,30.9217816 9.25996718,28.4908848 10.48,25.92 C10.6401063,25.6486227 10.7358914,25.3441631 10.76,25.03 C10.74,23.6 8.67,23.01 8.48,21.62 C8.45022555,21.2120559 8.52239212,20.803112 8.69,20.43 C9.26667192,19.2042401 9.76109856,17.9414478 10.17,16.65 C10.4161279,15.4653226 10.7333687,14.2965408 11.12,13.15 C11.9585981,10.8496676 13.2508376,8.74127689 14.92,6.95 C17.37,4.36 20.99,3.08 24.41,2.4 C26.9456224,1.85244071 29.5095166,1.44515544 32.09,1.18 C36.6667113,1.84036982 40.9644787,3.7778311 44.49,6.77 C47.1943357,8.78046229 49.1705976,11.6167315 50.12,14.85 C50.8445851,17.5214574 51.1846722,20.2825609 51.13,23.05 C51.110834,25.7831121 50.3129958,28.4541358 48.83,30.75 C47.34,33.11 45.39,35.14 44.26,37.71 Z",id:"Shape",fill:"#E8EDFC",key:2}),n.createElement("path",{d:"M46,20 C46,24.418278 42.418278,28 38,28 C37.4967634,27.99946 36.9946448,27.9525956 36.5,27.86 C32.7235972,27.1440687 29.9901007,23.843667 29.9901007,20 C29.9901007,16.156333 32.7235972,12.8559313 36.5,12.14 C36.9946448,12.0474044 37.4967634,12.00054 38,12 C42.418278,12 46,15.581722 46,20 Z",id:"Shape",fill:"#7FACFA",key:3}),n.createElement("ellipse",{id:"Oval",fill:"#A4C2F7",cx:"36.5",cy:"20",rx:"6.5",ry:"7.86",key:4}),n.createElement("path",{d:"M58,8 C58,10.7614237 55.7614237,13 53,13 C52.4920766,12.9984453 51.986978,12.9243642 51.5,12.78 C49.4160564,12.1199968 47.9998679,10.185961 47.9998679,8 C47.9998679,5.81403904 49.4160564,3.88000321 51.5,3.22 C51.986978,3.07563582 52.4920766,3.00155469 53,3 C55.7614237,3 58,5.23857625 58,8 Z",id:"Shape",fill:"#7FACFA",key:5}),n.createElement("ellipse",{id:"Oval",fill:"#A4C2F7",cx:"51.5",cy:"8",rx:"3.5",ry:"4.78",key:6}),n.createElement("path",{d:"M60,37 C60,39.209139 58.209139,41 56,41 C55.4847146,41.0039542 54.9741272,40.9018367 54.5,40.7 C52.9895658,40.0925605 52,38.6280031 52,37 C52,35.3719969 52.9895658,33.9074395 54.5,33.3 C54.9741272,33.0981633 55.4847146,32.9960458 56,33 C57.060866,33 58.0782816,33.4214274 58.8284271,34.1715729 C59.5785726,34.9217184 60,35.939134 60,37 Z",id:"Shape",fill:"#7FACFA",key:7}),n.createElement("ellipse",{id:"Oval",fill:"#A4C2F7",cx:"54.5",cy:"37",rx:"2.5",ry:"3.7",key:8}),n.createElement("circle",{id:"Oval",fill:"#A4C2F7",cx:"34",cy:"38",r:"3",key:9}),n.createElement("circle",{id:"Oval",fill:"#A4C2F7",cx:"20",cy:"28",r:"5",key:10}),n.createElement("circle",{id:"Oval",fill:"#A4C2F7",cx:"32",cy:"5",r:"4",key:11}),n.createElement("path",{d:"M52.78,30.019 C52.4384041,30.0186142 52.1206374,29.8438874 51.9373214,29.5556459 C51.7540055,29.2674044 51.7305046,28.9055303 51.875,28.596 C52.6878018,26.8536036 53.1158384,24.9566002 53.13,23.034 C53.16152,21.0668379 52.9967038,19.1014383 52.638,17.167 C52.5347228,16.6243802 52.8908802,16.1007772 53.4335,15.9975 C53.9761198,15.8942228 54.4997228,16.2503802 54.603,16.793 C54.9862987,18.8610072 55.1628354,20.9620275 55.13,23.065 C55.1118993,25.2691233 54.6201202,27.4435919 53.688,29.441 C53.5236795,29.794016 53.1693857,30.0195466 52.78,30.019 Z",id:"Shape",fill:"#428DFF",key:12}),n.createElement("path",{d:"M4.885,20.074 C5.305,18.983 5.811,18.033 6.126,17.107 C6.204,16.877 6.272,16.649 6.326,16.423 L6.511,15.632 C6.636,15.1 6.767,14.558 6.923,14.012 C7.56346558,11.8108928 8.59047178,9.74130434 9.956,7.9 C10.3793703,7.32910856 10.8358188,6.78350741 11.323,6.266 L12.777,7.638 C12.3440873,8.09899293 11.9384,8.58481605 11.562,9.093 C10.3407465,10.740536 9.42118943,12.5915001 8.846,14.56 C8.705,15.06 8.581,15.567 8.458,16.09 L8.273,16.881 C8.201,17.181 8.114,17.474 8.018,17.756 C7.628,18.883 7.108,19.856 6.755,20.786 L4.885,20.074 Z",id:"Shape",fill:"#FFFFFF",key:13}),n.createElement("path",{d:"M7.513,15.739 C6.97947131,15.6175667 6.44660839,15.9443893 6.313,16.475 C5.90884796,17.7022696 5.43200475,18.9043953 4.885,20.075 L6.755,20.787 C7.33737032,19.5420918 7.83842105,18.260738 8.255,16.951 C8.31868433,16.691802 8.27610737,16.4179011 8.13674647,16.1902658 C7.99738557,15.9626305 7.77280686,15.8001531 7.513,15.739 Z",id:"Shape",fill:"#428DFF",key:14}),n.createElement("path",{d:"M12.777,7.636 L11.323,6.264 C10.8357572,6.78215357 10.3793077,7.32842388 9.956,7.9 C9.74466667,8.18266667 9.54266667,8.47133333 9.35,8.766 C9.19577342,8.98986572 9.14146537,9.26773547 9.2000561,9.53319512 C9.25864684,9.79865476 9.42487134,10.0278498 9.659,10.166 C10.1217884,10.4363395 10.7146211,10.3057596 11.021,9.866 C11.193,9.59933333 11.3733333,9.34166667 11.562,9.093 C11.9383376,8.58413147 12.3440261,8.09763922 12.777,7.636 Z",id:"Shape",fill:"#428DFF",key:15}),n.createElement("path",{d:"M7.428,12.5 C7.32893401,12.7585724 7.33467447,13.0455955 7.444,13.3 L7.544,13.466 C7.58465947,13.5204844 7.63280027,13.5689618 7.687,13.61 C7.73213663,13.6547458 7.78370602,13.6924959 7.84,13.722 C7.89961618,13.7528975 7.96145447,13.7793041 8.025,13.801 C8.27732655,13.8750857 8.54777802,13.8570083 8.788,13.75 C8.90019081,13.6936515 9.00170824,13.6181902 9.088,13.527 C9.35003296,13.2456908 9.424242,12.837541 9.278,12.482 C9.22440304,12.3633266 9.14988143,12.2552703 9.058,12.163 C8.9680284,12.0679635 8.86078575,11.9909252 8.742,11.936 C8.49819435,11.82929 8.22203842,11.8235368 7.974,11.92 C7.72370365,12.0352565 7.52794474,12.2432056 7.428,12.5 Z",id:"Shape",fill:"#428DFF",key:16}),n.createElement("path",{d:"M10.511,55 C8.86145152,54.9690108 7.4263849,53.8624583 6.977,52.275 C6.66129272,51.4143284 6.54869822,50.4923539 6.648,49.581 C6.682,49.318 6.739,49.05 6.798,48.781 C6.91941128,48.3932674 6.95356021,47.9834802 6.898,47.581 C6.817,47.267 6.586,47.11 5.998,46.774 C5.765,46.641 5.528,46.505 5.306,46.349 C4.98074391,46.1171358 4.76606133,45.7609003 4.713,45.365 C4.67448978,44.8623148 4.78770505,44.359639 5.038,43.922 C4.698,43.661 4.325,43.367 4.109,43.172 C3.185,42.417 3.798,41.333 4.164,40.686 C4.299,40.449 4.455,40.174 4.604,39.854 C4.74159405,39.5365137 4.78128854,39.1851827 4.718,38.845 C4.667,38.586 3.942,38.216 3.51,37.995 C3.14797678,37.8240989 2.80078202,37.6234083 2.472,37.395 C1.75470729,36.9902386 1.23115797,36.313086 1.02,35.517 C0.86,34.487 1.62,33.458 2.345,32.575 C4.05560327,30.369443 5.52247783,27.985227 6.72,25.464 C6.79697882,25.3281355 6.85421996,25.1820023 6.89,25.03 C6.89,24.755 6.565,24.439 6.076,23.991 C5.3374331,23.4449531 4.82021123,22.6511932 4.619,21.755 C4.56192334,21.1842424 4.65284498,20.6084053 4.883,20.083 C5.00021597,19.7389111 5.29491991,19.485529 5.65269387,19.4212286 C6.01046783,19.3569282 6.37495692,19.4918378 6.60464931,19.7735791 C6.83434171,20.0553204 6.89305732,20.4395148 6.758,20.777 C6.66025243,20.9954 6.6062353,21.2308331 6.599,21.47 C6.644,21.796 7.025,22.146 7.429,22.517 C8.25404392,23.1003679 8.78670832,24.0118401 8.89,25.017 C8.87135428,25.4916102 8.73934083,25.9548574 8.505,26.368 C7.25146701,29.0036041 5.7158239,31.4955036 3.925,33.8 C3.163,34.727 3.005,35.1 3,35.247 C3.18518784,35.4261779 3.38598284,35.5884872 3.6,35.732 C3.86136569,35.9140729 4.13730073,36.0742824 4.425,36.211 C5.277,36.647 6.446,37.245 6.686,38.465 C6.82865982,39.2207273 6.73544627,40.0020454 6.419,40.703 C6.244,41.073 6.065,41.393 5.908,41.668 C5.859,41.755 5.808,41.851 5.758,41.938 C6.172,42.272 6.738,42.696 6.978,42.872 C7.19643076,43.0334948 7.33976225,43.2769033 7.37503403,43.5462515 C7.41030582,43.8155997 7.33448237,44.0877071 7.165,44.3 C7.01691908,44.4930204 6.88797779,44.6999963 6.78,44.918 L6.987,45.036 C7.87220583,45.4166291 8.54814599,46.1633751 8.839,47.082 C8.98564963,47.7876772 8.95576498,48.5186489 8.752,49.21 C8.706,49.419 8.658,49.627 8.632,49.837 C8.57350619,50.4418023 8.65388223,51.0519761 8.867,51.621 C9.0847514,52.5454575 9.99364951,53.1329967 10.926,52.952 C13.8403482,52.2516858 16.7117997,51.3835725 19.526,50.352 C20.0479091,50.1705745 20.6180744,50.4465909 20.7995,50.9685 C20.9809255,51.4904091 20.7049091,52.0605744 20.183,52.242 C17.2887222,53.3027843 14.334635,54.19265 11.336,54.907 C11.0649467,54.96639 10.7884727,54.9975562 10.511,55 Z M5.411,41.659 L5.443,41.688 C5.43377066,41.6766361 5.42374541,41.6659425 5.413,41.656 L5.411,41.659 Z",id:"Shape",fill:"#428DFF",key:17}),n.createElement("path",{d:"M12.05,7.95 C11.6505745,7.95013686 11.2893784,7.71257247 11.1313026,7.34575817 C10.9732267,6.97894386 11.0485947,6.55324547 11.323,6.263 C13.559,3.9 16.836,2.316 21.345,1.419 C22.389,1.20833333 23.4376667,1.00833333 24.491,0.819 C25.0344482,0.720141043 25.555141,1.08055182 25.654,1.624 C25.7528589,2.16744819 25.3924482,2.68814102 24.849,2.787 C23.805,2.976 22.771,3.174 21.738,3.387 C17.704,4.187 14.689,5.622 12.776,7.644 C12.5860694,7.84104917 12.3236774,7.95164418 12.05,7.95 Z",id:"Shape",fill:"#428DFF",key:18}),n.createElement("path",{d:"M44.619,5.73 C44.4287081,5.72982603 44.2424161,5.67536077 44.082,5.573 C42.5427839,4.57309008 40.8910506,3.75813208 39.161,3.145 C38.6393671,2.96329832 38.3637983,2.39313295 38.5455,1.8715 C38.7272017,1.34986705 39.2973671,1.07429832 39.819,1.256 C41.6958324,1.92024351 43.4878551,2.80333242 45.158,3.887 C45.5327788,4.12614366 45.7046757,4.58399726 45.579883,5.01070044 C45.4550902,5.43740363 45.0635769,5.73048342 44.619,5.73 Z",id:"Shape",fill:"#428DFF",key:19}),n.createElement("path",{d:"M24.78,60 C24.3194886,59.9998779 23.9186017,59.6852787 23.809,59.238 C23.421,57.657 21.88,53.314 19.438,52.211 C19.0639436,52.0419148 18.8312137,51.6614066 18.8510746,51.25139 C18.8709354,50.8413735 19.1393525,50.4851405 19.528,50.353 C20.57,49.999 21.515,49.669 22.258,49.409 C22.951,49.167 23.473,48.985 23.744,48.898 C27.901,47.583 28.744,46.082 28.72,45.053 C28.7138345,44.7872547 28.8137271,44.5299897 28.9976105,44.338038 C29.1814939,44.1460862 29.4342349,44.0352448 29.7,44.03 L29.724,44.03 C30.2670463,44.0298436 30.7109669,44.4631101 30.724,45.006 C30.782,47.498 28.64,49.449 24.356,50.806 C24.097,50.889 23.592,51.065 22.922,51.299 L22.022,51.614 C23.671106,53.4424992 24.8739191,55.6283742 25.536,58 L48.218,57.937 L48.151,57.837 C47.8630969,57.4195592 47.6041562,56.9828684 47.376,56.53 C46.879054,55.5216399 46.4640482,54.4749292 46.135,53.4 C45.5288621,51.3528819 45.1078369,49.2554538 44.877,47.133 C44.4836273,43.7875409 44.9896868,40.3977013 46.343,37.313 C46.5834189,36.7519168 46.8669333,36.2102972 47.191,35.693 C47.3803508,35.3893242 47.7173272,35.2097337 48.0749935,35.2218784 C48.4326598,35.2340231 48.7566779,35.436058 48.9249935,35.7518784 C49.093309,36.0676989 49.0803508,36.4493242 48.891,36.753 C48.6190587,37.1835644 48.3822909,37.6353627 48.183,38.104 C46.9685034,40.863928 46.5134787,43.8982317 46.865,46.893 C47.0808071,48.8965347 47.4767419,50.8765435 48.048,52.809 C48.3464759,53.7867332 48.7240564,54.7385437 49.177,55.655 C49.3680492,56.0298282 49.5842082,56.3913183 49.824,56.737 C50.2487748,57.3198965 50.589758,57.9594505 50.837,58.637 C50.9324293,58.9404437 50.8777998,59.2711879 50.6898608,59.5278273 C50.5019218,59.7844667 50.203095,59.9363833 49.885,59.937 L24.785,60.007 L24.78,60 Z",id:"Shape",fill:"#428DFF",key:20}),n.createElement("path",{d:"M11.194,18.567 C10.8884083,18.5671753 10.5995104,18.4276105 10.4097039,18.1881114 C10.2198975,17.9486123 10.1500194,17.635471 10.22,17.338 L10.32,16.905 C10.5131052,15.9892005 10.7602032,15.085623 11.06,14.199 C11.7555725,12.2746582 12.8327926,10.5106976 14.227,9.013 C15.7596426,7.53520641 17.6473921,6.47750189 19.708,5.942 C20.0522577,5.82944433 20.4304681,5.91183364 20.6967164,6.1573819 C20.9629648,6.40293017 21.0756292,6.7732514 20.9912433,7.12547458 C20.9068574,7.47769775 20.6386132,7.75676066 20.29,7.855 C18.5634442,8.29302828 16.9771231,9.16414541 15.681,10.386 C14.473376,11.6866578 13.5398447,13.2170369 12.936,14.886 C12.666621,15.6959837 12.4435932,16.5206524 12.268,17.356 L12.168,17.791 C12.0636686,18.2449301 11.6597655,18.5667256 11.194,18.567 Z",id:"Shape",fill:"#A4C2F7",key:21}),n.createElement("circle",{id:"Oval",fill:"#A4C2F7",cx:"10",cy:"21",r:"1",key:22}),n.createElement("path",{d:"M38,29 C33.0294373,29 29,24.9705627 29,20 C29,15.0294373 33.0294373,11 38,11 C42.9705627,11 47,15.0294373 47,20 C46.9944889,24.9682782 42.9682782,28.9944889 38,29 Z M38,13 C34.1340068,13 31,16.1340068 31,20 C31,23.8659932 34.1340068,27 38,27 C41.8659932,27 45,23.8659932 45,20 C44.9955914,16.1358343 41.8641657,13.0044086 38,13 Z",id:"Shape",fill:"#428DFF",key:23}),n.createElement("path",{d:"M34,21 C33.4477153,21 33,20.5522847 33,20 C33.0033061,17.2399468 35.2399468,15.0033061 38,15 C38.5522847,15 39,15.4477153 39,16 C39,16.5522847 38.5522847,17 38,17 C36.3431458,17 35,18.3431458 35,20 C35,20.5522847 34.5522847,21 34,21 Z",id:"Shape",fill:"#FFFFFF",key:24}),n.createElement("path",{d:"M53,14 C49.6862915,14 47,11.3137085 47,8 C47,4.6862915 49.6862915,2 53,2 C56.3137085,2 59,4.6862915 59,8 C58.9966926,11.3123376 56.3123376,13.9966926 53,14 Z M53,4 C50.790861,4 49,5.790861 49,8 C49,10.209139 50.790861,12 53,12 C55.209139,12 57,10.209139 57,8 C57,6.93913404 56.5785726,5.92171839 55.8284271,5.17157288 C55.0782816,4.42142736 54.060866,4 53,4 Z",id:"Shape",fill:"#428DFF",key:25}),n.createElement("path",{d:"M56,42 C53.2385763,42 51,39.7614237 51,37 C51,34.2385763 53.2385763,32 56,32 C58.7614237,32 61,34.2385763 61,37 C60.9966939,39.7600532 58.7600532,41.9966939 56,42 Z M56,34 C54.3431458,34 53,35.3431458 53,37 C53,38.6568542 54.3431458,40 56,40 C57.6568542,40 59,38.6568542 59,37 C59,35.3431458 57.6568542,34 56,34 Z",id:"Shape",fill:"#428DFF",key:26}),n.createElement("path",{d:"M34,42 C31.790861,42 30,40.209139 30,38 C30,35.790861 31.790861,34 34,34 C36.209139,34 38,35.790861 38,38 C38,40.209139 36.209139,42 34,42 Z M34,36 C32.8954305,36 32,36.8954305 32,38 C32,39.1045695 32.8954305,40 34,40 C35.1045695,40 36,39.1045695 36,38 C36,36.8954305 35.1045695,36 34,36 Z",id:"Shape",fill:"#428DFF",key:27}),n.createElement("path",{d:"M20,34 C16.6862915,34 14,31.3137085 14,28 C14,24.6862915 16.6862915,22 20,22 C23.3137085,22 26,24.6862915 26,28 C25.9966926,31.3123376 23.3123376,33.9966926 20,34 Z M20,24 C17.790861,24 16,25.790861 16,28 C16,30.209139 17.790861,32 20,32 C22.209139,32 24,30.209139 24,28 C24,25.790861 22.209139,24 20,24 Z",id:"Shape",fill:"#428DFF",key:28}),n.createElement("path",{d:"M32,10 C29.2385763,10 27,7.76142375 27,5 C27,2.23857625 29.2385763,5.07265313e-16 32,0 C34.7614237,-5.07265313e-16 37,2.23857625 37,5 C36.9966939,7.76005315 34.7600532,9.99669388 32,10 Z M32,2 C30.3431458,2 29,3.34314575 29,5 C29,6.65685425 30.3431458,8 32,8 C33.6568542,8 35,6.65685425 35,5 C35,3.34314575 33.6568542,2 32,2 Z",id:"Shape",fill:"#428DFF",key:29}),n.createElement("path",{d:"M35.03,13.57 C34.6217844,13.5694967 34.254856,13.3209195 34.103,12.942 L32.553,9.083 C32.4091801,8.74951203 32.4574725,8.36426472 32.6791572,8.07659429 C32.9008419,7.78892386 33.261066,7.64405747 33.6201931,7.69815074 C33.9793202,7.75224401 34.280889,7.99679246 34.408,8.337 L35.958,12.197 C36.0818959,12.505189 36.0446779,12.8547836 35.8586744,13.1299806 C35.6726709,13.4051775 35.3621606,13.570056 35.03,13.57 Z",id:"Shape",fill:"#428DFF",key:30}),n.createElement("path",{d:"M44.251,16 C43.8260033,16.0006249 43.4470392,15.7325525 43.3061098,15.3316018 C43.1651805,14.930651 43.2930767,14.4844234 43.625,14.219 L48.475,10.339 C48.9063344,9.99382206 49.535822,10.0636657 49.881,10.495 C50.2261779,10.9263344 50.1563344,11.555822 49.725,11.901 L44.875,15.781 C44.6978557,15.9226545 44.4778173,15.9998795 44.251,16 Z",id:"Shape",fill:"#428DFF",key:31}),n.createElement("path",{d:"M53.09,35.26 C52.8340525,35.2600781 52.5878179,35.1620137 52.402,34.986 L43.133,26.217 C42.8734465,25.9713799 42.764646,25.6059475 42.8475825,25.2583575 C42.9305191,24.9107676 43.1925926,24.6338274 43.5350825,24.5318575 C43.8775725,24.4298877 44.2484465,24.5183799 44.508,24.764 L53.777,33.533 C54.0748732,33.8143354 54.1709898,34.2489153 54.0195426,34.6296276 C53.8680954,35.0103398 53.4997292,35.2601486 53.09,35.26 Z",id:"Shape",fill:"#428DFF",key:32}),n.createElement("path",{d:"M34.651,36.07 C34.5780146,36.0698175 34.5052613,36.061771 34.434,36.046 C33.8951016,35.9265185 33.5549324,35.39299 33.674,34.854 L35.283,27.594 C35.3601694,27.2451302 35.6175967,26.9639305 35.9583115,26.8563262 C36.2990263,26.7487219 36.671266,26.8310606 36.9348115,27.0723262 C37.198357,27.3135918 37.3131694,27.6771302 37.236,28.026 L35.627,35.286 C35.5257158,35.743839 35.1199083,36.0698155 34.651,36.07 Z",id:"Shape",fill:"#428DFF",key:33}),n.createElement("path",{d:"M24.571,26.971 C24.0983905,26.9716086 23.6898817,26.6412681 23.591582,26.178994 C23.4932824,25.71672 23.7320341,25.2487437 24.164,25.057 L30.284,22.336 C30.7887883,22.1114962 31.3799962,22.3387117 31.6045,22.8435 C31.8290038,23.3482883 31.6017883,23.9394962 31.097,24.164 L24.977,26.884 C24.8493096,26.9412865 24.710952,26.9709346 24.571,26.971 Z",id:"Shape",fill:"#428DFF",key:34})]))])}r.defaultProps={width:"512",height:"512",viewBox:"0 0 60 61",version:"1.1"},e.exports=r,r.default=r},278:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning"}}}}},279:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),l=a(141);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},283:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("path",{d:"M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21\n\tc5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279\n\tC52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19\n\tS32.459,40,21.983,40z",key:0}),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}r.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 52.966 52.966",style:{enableBackground:"new 0 0 52.966 52.966"},xmlSpace:"preserve"},e.exports=r,r.default=r},298:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",author:"Yao Wei Tjong 姚伟忠"}}}}},299:function(e){e.exports={data:{site:{siteMetadata:{cssVars:{themeColor:"#434343"}}}}}},300:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This PWA contains the online documentation for my projects and personal blog.",author:"Yao Wei Tjong 姚伟忠"}}}}}}]);