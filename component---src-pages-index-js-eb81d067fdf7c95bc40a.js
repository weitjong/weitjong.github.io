(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(197),s=a(202),o=a(212),l=a(213),d=a.n(l),c=function(){var e=o.data;return n.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},u=a(200);t.default=function(){return n.a.createElement(s.a,null,n.a.createElement(u.a,{title:"Home"}),n.a.createElement("h1",null,"Hi people"),n.a.createElement("p",null,"Welcome to your new Gatsby site."),n.a.createElement("p",null,"Now go build something great."),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(c,null)),n.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},196:function(e,t,a){var r;e.exports=(r=a(199))&&r.default||r},197:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(196),a(9).default.enqueue,n.a.createContext({})},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning"}}}}},199:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},200:function(e,t,a){"use strict";var r=a(201),n=a(0),i=a.n(n),s=a(204),o=a.n(s);function l(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This website contains the online documentation for my projects and also my personal blog.",author:"Yao Wei Tjong 姚伟忠"}}}}},202:function(e,t,a){"use strict";var r=a(198),n=a(0),i=a.n(n),s=a(197),o=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:""};var l=o;a(203),t.a=function(e){var t=e.children,a=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),i.a.createElement("div",null,"Icons made by ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons")," from ",i.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",i.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")))))}},212:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEw0lEQVQ4y11Ue0zWVRj+aVot+0ddbW211mUrZoVra+VtCWtmN5qVqGUbbci8kaCuDNIIGMpNSBGFuIOmgFxFFBFhGBeRIQjmSIGPy8fl4+Mm3+13znmfzvm+D2qd7d3v7Pz2Pud5n/c5r7Y9DZpab4bRAm1u7YDHmmgEbjpFOeVtIsovQ1R9lSz47lyeGlHKDr0Ugq81zZX32hF4eobD5/kQPDGf/+IhN9hGseSzJGTGVhKv6AKM00BtDxBSDJTfsuJAEdBuBLJbgO2/88x1MeS7M4cjtAzYmEhXngrGIm1ZEM0D+6bgatMQ0HTfTl0GB5udZayjj+t78zjfna1T1CXBbFamO2yMOg0C8pzl1jOUNlkc/rnAykis0u4M0GMKrLgNu3pngD/v2R1dBp1GzZyGTJxMk4y6hzh+u0Y4UkJ08Zagxm5OVgujg/mE4HM6S6oFNiUJ4+theFab06JjEM0PTEBLt4NPTnMYxxkNj3MMjzOYJjgkO3yfx3C0XKcdWRxB54nS6oSIuQz4nBTFb4RjxXypy/bRK5WdsN/pZegxOoFIAQ2OcczMMMhEHMrXYZ5muP23A8lXbdicLKhnhPOOAeC7dP20womvsDur1byPI6JR/ugf1dmImWNymtGYZGWeZNDtDNEVHPlNOpq7daRcs+KPehsCMhkutQnxl9R8yxk+oK3E4nmGXvEIKmwDpF7CKNmdqRE4eEHgXKPAXQNHQI7U76IDRY1WFDRYkXXDJllxau8T4r4E9EtnvdrnWDIPqHnQ8tASmCFXzk0hAvN0ZN6wIiCLYf8FQmU7R/B5gV8kaFyFHf6ZjLalEnplye39wJeneLfqhZiZctlPmjj6tryJOxiLvyIossSO6jYLfjjvQEGzAHSGh0aOXXmEiDKB6k6BunucQouIUuuAjxPFnnlyL4fA62QN0ayVMDbB6E4vR+BZV0d/LBBQljFPMakvR0ylwPQMI6Wx1cLpSoeyC+9cHY1tq44h8J0oLNV8ktCg/Dc1zXTpO5VMDySbmi4BgwSZkGA9wxyHiwV25QrIf6phok9aLPW6vdsrjg4EFwKRV4ENCVSgeRyhtwJy6e6IfGamCcaNJpXAMCXtoqyjviWtAjuzdOzJ0VHYIqDbGLssn6ZXnEj3CINPTDWQ1gB8lEitzrK/ScP1MYsL0OVBZWxXjJiZ83u0Qjj1k1qSZM1jq4C3I7HVOQISKfnTE1S/NgZrnIAbElDQOgzMPHKVrawz5GYqz6iqg2PQJYe0FqfBUR2hhRwv/OQG+P96ei95/lqO8UcWwqiZMSm8Ggy8b4RT9k2h9CMXUyWDrMCkU1gJ4dWf8YHK33xaLM6osS1YH4uFbkjx5OFSGJQPB6Qbm+QuoQYIKyWk1gpSzRmVDlD6KvbyBbEkaZd3o7BbZX9yghZ5x7unVv+Ea7M1FSnhZWT1z6bG9XHY/8wBBKXVyxuIs3EJoEIBydek2NurZFM2HBdnVe7ePLZw9THXkNGWB7k3GtO0D/Hcf6X44jSKHspmGSaAXhl9MnpkBYZJ4K4ctAF5wIowvOecB/G00DvejbV0379DFrCorj2u9mujaZ1vClX7ZVDpt+lU5o7S7WlUIs8KfU7S9fdj4TsH6CXL/gfEHE6xFkdcHQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/2b4fa0e216ff2151a42d720756bebf76/fdbb0/human-learning-icon.png",srcSet:"/static/2b4fa0e216ff2151a42d720756bebf76/e22c9/human-learning-icon.png 75w,\n/static/2b4fa0e216ff2151a42d720756bebf76/d3809/human-learning-icon.png 150w,\n/static/2b4fa0e216ff2151a42d720756bebf76/fdbb0/human-learning-icon.png 300w,\n/static/2b4fa0e216ff2151a42d720756bebf76/b5207/human-learning-icon.png 450w,\n/static/2b4fa0e216ff2151a42d720756bebf76/774d6/human-learning-icon.png 512w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},213:function(e,t,a){"use strict";a(29),a(30),a(13),a(95),a(137),a(214);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),s=r(a(74)),o=r(a(139)),l=r(a(140)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),m=function(e){var t=u(e),a=f(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(j,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},j=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});j.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,I=e.loading,L=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,l.default)({opacity:R?1:0,transition:V?"opacity "+b+"ms":"none"},o),x="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},B=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&z,o,f),k={title:t,alt:this.state.isVisible?"":a,style:B,className:g};if(m){var G=m,C=G[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&z)}),C.base64&&d.default.createElement(O,{src:C.base64,spreadProps:k,imageVariants:G,generateSources:w}),C.tracedSVG&&d.default.createElement(O,{src:C.tracedSVG,spreadProps:k,imageVariants:G,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(G),d.default.createElement(j,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:a,title:t,loading:I},C,{imageVariants:G}))}}))}if(p){var N=p,P=N[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},x&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:x,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},V&&z)}),P.base64&&d.default.createElement(O,{src:P.base64,spreadProps:k,imageVariants:N,generateSources:w}),P.tracedSVG&&d.default.createElement(O,{src:P.tracedSVG,spreadProps:k,imageVariants:N,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(N),d.default.createElement(j,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:a,title:t,loading:I},P,{imageVariants:N}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),M=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:V,sizes:M,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([M,c.default.arrayOf(M)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=R;t.default=x},214:function(e,t,a){"use strict";a(215)("fixed",function(e){return function(){return e(this,"tt","","")}})},215:function(e,t,a){var r=a(1),n=a(7),i=a(32),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);