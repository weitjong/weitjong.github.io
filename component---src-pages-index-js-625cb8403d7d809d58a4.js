(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(204),o=a(211),s=a(234),l=a(235),d=a.n(l),c=function(){var e=s.data;return n.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},u=a(209);t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(u.a,{title:"Home"}),n.a.createElement("h1",null,"Hi people"),n.a.createElement("p",null,"Welcome to your new Gatsby site."),n.a.createElement("p",null,"Now go build something great."),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(c,null)),n.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},202:function(e,t,a){var r;e.exports=(r=a(206))&&r.default||r},204:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(67),o=a.n(i);a.d(t,"a",function(){return o.a});a(202),a(9).default.enqueue,n.a.createContext({})},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning"}}}}},206:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e,t,a){"use strict";a(92),a(135),a(53),a(13),a(51),a(40),a(29);var r=a(210),n=a(0),i=a.n(n),o=a(214),s=a.n(o),l=a(91);function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.a=function(e){var t=e.title,a=e.description,o=void 0===a?"":a,c=e.meta,u=void 0===c?[]:c,f=r.data.site.siteMetadata,g=o||f.description,m=Object(n.useContext)(l.b).context;return i.a.createElement(s.a,{htmlAttributes:{lang:m.lang},title:t,titleTemplate:"%s | "+f.title,meta:[{name:"description",content:g},{property:"og:title",content:t},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.author},{name:"twitter:title",content:t},{name:"twitter:description",content:g},{name:"theme_color",content:"dark"===m.theme?"#434343":"#FA709A"}].concat(d(u))})}},210:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This website contains the online documentation for my projects and also my personal blog.",author:"Yao Wei Tjong 姚伟忠"}}}}},211:function(e,t,a){"use strict";var r=a(205),n=a(0),i=a.n(n),o=(a(213),a(91)),s=a(204),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.defaultProps={siteTitle:""};var d=l,c=a(239);t.a=function(e){var t=e.children,a=r.data,s=Object(n.useContext)(o.b),l=s.context,u=s.setContext;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{variant:"warning",className:"mb-0",show:l.showAlert,dismissible:!0,onClose:function(){return u({showAlert:!1})}},"This site is still under construction!"),i.a.createElement(d,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),i.a.createElement("div",null,"Icons made by ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons")," from ",i.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",i.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")))))}},234:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEw0lEQVQ4y11Ue0zWVRj+aVot+0ddbW211mUrZoVra+VtCWtmN5qVqGUbbci8kaCuDNIIGMpNSBGFuIOmgFxFFBFhGBeRIQjmSIGPy8fl4+Mm3+13znmfzvm+D2qd7d3v7Pz2Pud5n/c5r7Y9DZpab4bRAm1u7YDHmmgEbjpFOeVtIsovQ1R9lSz47lyeGlHKDr0Ugq81zZX32hF4eobD5/kQPDGf/+IhN9hGseSzJGTGVhKv6AKM00BtDxBSDJTfsuJAEdBuBLJbgO2/88x1MeS7M4cjtAzYmEhXngrGIm1ZEM0D+6bgatMQ0HTfTl0GB5udZayjj+t78zjfna1T1CXBbFamO2yMOg0C8pzl1jOUNlkc/rnAykis0u4M0GMKrLgNu3pngD/v2R1dBp1GzZyGTJxMk4y6hzh+u0Y4UkJ08Zagxm5OVgujg/mE4HM6S6oFNiUJ4+theFab06JjEM0PTEBLt4NPTnMYxxkNj3MMjzOYJjgkO3yfx3C0XKcdWRxB54nS6oSIuQz4nBTFb4RjxXypy/bRK5WdsN/pZegxOoFIAQ2OcczMMMhEHMrXYZ5muP23A8lXbdicLKhnhPOOAeC7dP20womvsDur1byPI6JR/ugf1dmImWNymtGYZGWeZNDtDNEVHPlNOpq7daRcs+KPehsCMhkutQnxl9R8yxk+oK3E4nmGXvEIKmwDpF7CKNmdqRE4eEHgXKPAXQNHQI7U76IDRY1WFDRYkXXDJllxau8T4r4E9EtnvdrnWDIPqHnQ8tASmCFXzk0hAvN0ZN6wIiCLYf8FQmU7R/B5gV8kaFyFHf6ZjLalEnplye39wJeneLfqhZiZctlPmjj6tryJOxiLvyIossSO6jYLfjjvQEGzAHSGh0aOXXmEiDKB6k6BunucQouIUuuAjxPFnnlyL4fA62QN0ayVMDbB6E4vR+BZV0d/LBBQljFPMakvR0ylwPQMI6Wx1cLpSoeyC+9cHY1tq44h8J0oLNV8ktCg/Dc1zXTpO5VMDySbmi4BgwSZkGA9wxyHiwV25QrIf6phok9aLPW6vdsrjg4EFwKRV4ENCVSgeRyhtwJy6e6IfGamCcaNJpXAMCXtoqyjviWtAjuzdOzJ0VHYIqDbGLssn6ZXnEj3CINPTDWQ1gB8lEitzrK/ScP1MYsL0OVBZWxXjJiZ83u0Qjj1k1qSZM1jq4C3I7HVOQISKfnTE1S/NgZrnIAbElDQOgzMPHKVrawz5GYqz6iqg2PQJYe0FqfBUR2hhRwv/OQG+P96ei95/lqO8UcWwqiZMSm8Ggy8b4RT9k2h9CMXUyWDrMCkU1gJ4dWf8YHK33xaLM6osS1YH4uFbkjx5OFSGJQPB6Qbm+QuoQYIKyWk1gpSzRmVDlD6KvbyBbEkaZd3o7BbZX9yghZ5x7unVv+Ea7M1FSnhZWT1z6bG9XHY/8wBBKXVyxuIs3EJoEIBydek2NurZFM2HBdnVe7ePLZw9THXkNGWB7k3GtO0D/Hcf6X44jSKHspmGSaAXhl9MnpkBYZJ4K4ctAF5wIowvOecB/G00DvejbV0379DFrCorj2u9mujaZ1vClX7ZVDpt+lU5o7S7WlUIs8KfU7S9fdj4TsH6CXL/gfEHE6xFkdcHQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/2b4fa0e216ff2151a42d720756bebf76/fdbb0/human-learning-icon.png",srcSet:"/static/2b4fa0e216ff2151a42d720756bebf76/e22c9/human-learning-icon.png 75w,\n/static/2b4fa0e216ff2151a42d720756bebf76/d3809/human-learning-icon.png 150w,\n/static/2b4fa0e216ff2151a42d720756bebf76/fdbb0/human-learning-icon.png 300w,\n/static/2b4fa0e216ff2151a42d720756bebf76/b5207/human-learning-icon.png 450w,\n/static/2b4fa0e216ff2151a42d720756bebf76/774d6/human-learning-icon.png 512w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},235:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(141),a(236);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(71)),o=r(a(75)),s=r(a(144)),l=r(a(145)),d=r(a(0)),c=r(a(54)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),m=function(e){var t=u(e),a=f(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(L,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},L=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,I=e.loading,A=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:x?1:0,transition:R?"opacity "+b+"ms":"none"},s),M="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},B=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&z,s,f),C={title:t,alt:this.state.isVisible?"":a,style:B,className:g};if(m){var k=m,G=k[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),M&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&z)}),G.base64&&d.default.createElement(j,{src:G.base64,spreadProps:C,imageVariants:k,generateSources:v}),G.tracedSVG&&d.default.createElement(j,{src:G.tracedSVG,spreadProps:C,imageVariants:k,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(k),d.default.createElement(L,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:A})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:I},G,{imageVariants:k}))}}))}if(p){var N=p,T=N[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},M&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:M,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},R&&z)}),T.base64&&d.default.createElement(j,{src:T.base64,spreadProps:C,imageVariants:N,generateSources:v}),T.tracedSVG&&d.default.createElement(j,{src:T.tracedSVG,spreadProps:C,imageVariants:N,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(N),d.default.createElement(L,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:A})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:I},T,{imageVariants:N}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var M=x;t.default=M},236:function(e,t,a){"use strict";a(237)("fixed",function(e){return function(){return e(this,"tt","","")}})},237:function(e,t,a){var r=a(1),n=a(7),i=a(33),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);