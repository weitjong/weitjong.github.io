(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{245:function(e,t,a){"use strict";a.r(t);var r=a(307),i=a(0),n=a.n(i),s=a(253),l=a(252),o=a(310),c=a(311),d=a(260),u=a(246),f=a(247),A=a(250),m=a(248),g=a.n(m),p=a(249),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.as,r=void 0===a?"div":a,i=t.className,s=t.fluid,l=t.bsPrefix,o=Object(f.a)(t,["as","className","fluid","bsPrefix"]),c=((e={})[l]=!0,e[l+"-fluid"]=s,e);return n.a.createElement(r,Object(u.a)({},o,{className:g()(i,c)}))},t}(n.a.Component);b.defaultProps={fluid:!1};var h=Object(p.a)(b,"jumbotron"),E=a(262),y=n.a.forwardRef(function(e,t){var a=e.bsPrefix,r=e.variant,i=e.size,s=e.active,l=e.className,o=e.block,c=e.type,d=e.as,A=Object(f.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(p.b)(a,"btn"),b=g()(l,m,s&&"active",m+"-"+r,o&&m+"-block",i&&m+"-"+i);if(A.href)return n.a.createElement(E.a,Object(u.a)({},A,{as:d,innerRef:t,className:g()(b,A.disabled&&"disabled")}));var h=d||"button";return t&&(A.ref=t),n.a.createElement(h,Object(u.a)({},A,{type:c,className:b}))});y.displayName="Button",y.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var v=y,w=a(251),S=a.n(w),N=a(308),j=function(){var e=N.data;return n.a.createElement(S.a,{fluid:e.placeholderImage.childImageSharp.fluid})};t.default=function(){var e=r.data,t=e.site.siteMetadata,a=t.title,i=t.description,u=t.author,f=e.backgroundImage;return n.a.createElement(s.a,null,n.a.createElement(l.a,{title:"Home"}),n.a.createElement("section",{className:"section section-full"},n.a.createElement(S.a,{fluid:f.childImageSharp.fluid,style:{position:"absolute"},className:"bg-cover",alt:"background cover"}),n.a.createElement(o.a,null,n.a.createElement(c.a,null,n.a.createElement(d.a,{md:9,lg:7,className:"align-self-end"},n.a.createElement(h,{className:"mb-0"},n.a.createElement("p",{className:"text-muted text-xs animated fadeInUp"},"by ",u),n.a.createElement("h1",{className:"text-secondary display-3 mb-4 animated fadeInUp"},a),n.a.createElement("p",{className:"mb-0 animated fadeInUp"},i)))))),n.a.createElement("section",{className:"section"},n.a.createElement(o.a,null,n.a.createElement(c.a,null,n.a.createElement(d.a,null,n.a.createElement("h2",{className:"text-center mb-4"},"About myself"),n.a.createElement("p",{className:"text-center text-muted mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at enim at mi porttitor luctus at id elit. Curabitur accumsan, augue condimentum sagittis mollis, libero dolor finibus libero, ut facilisis mauris ante venenatis leo. Fusce nunc lectus, scelerisque id ornare non, mattis ac sem. Cras vitae viverra nunc, sit amet lacinia leo. Nullam sed ante vulputate, sagittis risus sit amet, mollis nisl. Nam condimentum pulvinar risus. Donec iaculis erat vel libero rhoncus, quis tincidunt lorem sodales. Maecenas a quam urna. Fusce eleifend sit amet velit et ornare. Morbi vulputate dictum erat sit amet ultrices. Nam aliquam molestie nunc, eu sagittis dui interdum id."))))),n.a.createElement("section",{className:"showcase"},n.a.createElement(o.a,{fluid:!0,className:"p-0"},n.a.createElement(c.a,{noGutters:!0},n.a.createElement(d.a,{lg:{span:6,order:2},className:"showcase-img"},n.a.createElement(j,null)),n.a.createElement(d.a,{lg:{span:6,order:1},className:"my-auto showcase-text"},n.a.createElement("h2",null,"dockerized"),n.a.createElement("p",{className:"lead"},"Dockerized build environment."),n.a.createElement(v,{variant:"outline-primary",size:"lg"},"Learn more"))),n.a.createElement(c.a,{noGutters:!0},n.a.createElement(d.a,{lg:{span:6,order:1},className:"showcase-img"},n.a.createElement(j,null)),n.a.createElement(d.a,{lg:{span:6,order:2},className:"my-auto showcase-text"},n.a.createElement("h2",null,"cmake-1"),n.a.createElement("p",{className:"lead"},"cmake-1 is a collection of CMake modules and toolchains for cross-compiling."),n.a.createElement(v,{variant:"outline-primary",size:"lg"},"Learn more"))),n.a.createElement(c.a,{noGutters:!0},n.a.createElement(d.a,{lg:{span:6,order:2},className:"showcase-img"},n.a.createElement(j,null)),n.a.createElement(d.a,{lg:{span:6,order:1},className:"my-auto showcase-text"},n.a.createElement("h2",null,"Urho3D"),n.a.createElement("p",{className:"lead"},"Cross-platform rendering and game engine."),n.a.createElement(v,{variant:"outline-primary",size:"lg"},"Learn more"))))))}},251:function(e,t,a){"use strict";a(25),a(26),a(13),a(72),a(149),a(254);var r=a(15);t.__esModule=!0,t.default=void 0;var i,n=r(a(74)),s=r(a(75)),l=r(a(150)),o=r(a(151)),c=r(a(0)),d=r(a(51)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),m=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,b=p&&window.IntersectionObserver,h=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(x,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},x=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var r=t.critical||p&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,m=e.fluid,g=e.fixed,p=e.backgroundColor,b=e.durationFadeIn,h=e.Tag,y=e.itemProp,S=e.loading,N=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:k?1:0,transition:B?"opacity "+b+"ms":"none"},l),R="boolean"==typeof p?"lightgray":p,L={transitionDelay:b+"ms"},Q=(0,o.default)({opacity:this.state.imgLoaded?0:1},B&&L,l,f),M={title:t,alt:this.state.isVisible?"":a,style:Q,className:A};if(m){var z=m,C=z[0];return c.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},c.default.createElement(h,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),R&&c.default.createElement(h,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&L)}),C.base64&&c.default.createElement(I,{src:C.base64,spreadProps:M,imageVariants:z,generateSources:w}),C.tracedSVG&&c.default.createElement(I,{src:C.tracedSVG,spreadProps:M,imageVariants:z,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(z),c.default.createElement(x,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:S},C,{imageVariants:z}))}}))}if(g){var G=g,P=G[0],V=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete V.display,c.default.createElement(h,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},R&&c.default.createElement(h,{title:t,style:(0,o.default)({backgroundColor:R,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},B&&L)}),P.base64&&c.default.createElement(I,{src:P.base64,spreadProps:M,imageVariants:G,generateSources:w}),P.tracedSVG&&c.default.createElement(I,{src:P.tracedSVG,spreadProps:M,imageVariants:G,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(G),c.default.createElement(x,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:a,title:t,loading:S},P,{imageVariants:G}))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});k.propTypes={resolutions:B,sizes:O,fixed:d.default.oneOfType([B,d.default.arrayOf(B)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=k;t.default=R},260:function(e,t,a){"use strict";a(32);var r=a(246),i=a(247),n=a(248),s=a.n(n),l=a(0),o=a.n(l),c=a(249),d=["xl","lg","md","sm","xs"],u=o.a.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,u=void 0===l?"div":l,f=Object(i.a)(e,["bsPrefix","className","as"]),A=Object(c.b)(a,"col"),m=[],g=[];return d.forEach(function(e){var t,a,r,i=f[e];if(delete f[e],null!=i&&"object"==typeof i){var n=i.span;t=void 0===n||n,a=i.offset,r=i.order}else t=i;var s="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+A+s:""+A+s+"-"+t),null!=r&&g.push("order"+s+"-"+r),null!=a&&g.push("offset"+s+"-"+a)}),m.length||m.push(A),o.a.createElement(u,Object(r.a)({},f,{ref:t,className:s.a.apply(void 0,[n].concat(m,g))}))});u.displayName="Col",t.a=u},307:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This PWA contains the online documentation for my projects and personal blog.",author:"Yao Wei Tjong 姚伟忠"}},backgroundImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAASUHtOzH/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxITISL/2gAIAQEAAQUCGFGazOKuF9qnmov3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/Aa1//8QAGxAAAgEFAAAAAAAAAAAAAAAAADEBEUFRgaH/2gAIAQEABj8Cc7Ml+ioQI//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExUUH/2gAIAQEAAT8hXUKpaJ1iOqkN0FwnLwVYHSek/9oADAMBAAIAAwAAABCz3//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAbS//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAgEBPxCk0//EAB4QAQACAQQDAAAAAAAAAAAAAAEAETEhQVFxkaGx/9oACAEBAAE/EMJQWMm9PkTIi0LNHd5vmFiguGsPMQ4wqvUoG1FNt3iOhZ2s/9k=",aspectRatio:1.498371335504886,src:"/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg",srcSet:"/static/83fbccd72b3c8a1197e52c791f02314d/4d406/book-library-with-open-textbook.jpg 250w,\n/static/83fbccd72b3c8a1197e52c791f02314d/32ee9/book-library-with-open-textbook.jpg 500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg 1000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2a5e2/book-library-with-open-textbook.jpg 1500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/883ab/book-library-with-open-textbook.jpg 2000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/8fafe/book-library-with-open-textbook.jpg 7360w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},308:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEw0lEQVQ4y11Ue0zWVRj+aVot+0ddbW211mUrZoVra+VtCWtmN5qVqGUbbci8kaCuDNIIGMpNSBGFuIOmgFxFFBFhGBeRIQjmSIGPy8fl4+Mm3+13znmfzvm+D2qd7d3v7Pz2Pud5n/c5r7Y9DZpab4bRAm1u7YDHmmgEbjpFOeVtIsovQ1R9lSz47lyeGlHKDr0Ugq81zZX32hF4eobD5/kQPDGf/+IhN9hGseSzJGTGVhKv6AKM00BtDxBSDJTfsuJAEdBuBLJbgO2/88x1MeS7M4cjtAzYmEhXngrGIm1ZEM0D+6bgatMQ0HTfTl0GB5udZayjj+t78zjfna1T1CXBbFamO2yMOg0C8pzl1jOUNlkc/rnAykis0u4M0GMKrLgNu3pngD/v2R1dBp1GzZyGTJxMk4y6hzh+u0Y4UkJ08Zagxm5OVgujg/mE4HM6S6oFNiUJ4+theFab06JjEM0PTEBLt4NPTnMYxxkNj3MMjzOYJjgkO3yfx3C0XKcdWRxB54nS6oSIuQz4nBTFb4RjxXypy/bRK5WdsN/pZegxOoFIAQ2OcczMMMhEHMrXYZ5muP23A8lXbdicLKhnhPOOAeC7dP20womvsDur1byPI6JR/ugf1dmImWNymtGYZGWeZNDtDNEVHPlNOpq7daRcs+KPehsCMhkutQnxl9R8yxk+oK3E4nmGXvEIKmwDpF7CKNmdqRE4eEHgXKPAXQNHQI7U76IDRY1WFDRYkXXDJllxau8T4r4E9EtnvdrnWDIPqHnQ8tASmCFXzk0hAvN0ZN6wIiCLYf8FQmU7R/B5gV8kaFyFHf6ZjLalEnplye39wJeneLfqhZiZctlPmjj6tryJOxiLvyIossSO6jYLfjjvQEGzAHSGh0aOXXmEiDKB6k6BunucQouIUuuAjxPFnnlyL4fA62QN0ayVMDbB6E4vR+BZV0d/LBBQljFPMakvR0ylwPQMI6Wx1cLpSoeyC+9cHY1tq44h8J0oLNV8ktCg/Dc1zXTpO5VMDySbmi4BgwSZkGA9wxyHiwV25QrIf6phok9aLPW6vdsrjg4EFwKRV4ENCVSgeRyhtwJy6e6IfGamCcaNJpXAMCXtoqyjviWtAjuzdOzJ0VHYIqDbGLssn6ZXnEj3CINPTDWQ1gB8lEitzrK/ScP1MYsL0OVBZWxXjJiZ83u0Qjj1k1qSZM1jq4C3I7HVOQISKfnTE1S/NgZrnIAbElDQOgzMPHKVrawz5GYqz6iqg2PQJYe0FqfBUR2hhRwv/OQG+P96ei95/lqO8UcWwqiZMSm8Ggy8b4RT9k2h9CMXUyWDrMCkU1gJ4dWf8YHK33xaLM6osS1YH4uFbkjx5OFSGJQPB6Qbm+QuoQYIKyWk1gpSzRmVDlD6KvbyBbEkaZd3o7BbZX9yghZ5x7unVv+Ea7M1FSnhZWT1z6bG9XHY/8wBBKXVyxuIs3EJoEIBydek2NurZFM2HBdnVe7ePLZw9THXkNGWB7k3GtO0D/Hcf6X44jSKHspmGSaAXhl9MnpkBYZJ4K4ctAF5wIowvOecB/G00DvejbV0379DFrCorj2u9mujaZ1vClX7ZVDpt+lU5o7S7WlUIs8KfU7S9fdj4TsH6CXL/gfEHE6xFkdcHQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/2b4fa0e216ff2151a42d720756bebf76/fdbb0/human-learning.png",srcSet:"/static/2b4fa0e216ff2151a42d720756bebf76/e22c9/human-learning.png 75w,\n/static/2b4fa0e216ff2151a42d720756bebf76/d3809/human-learning.png 150w,\n/static/2b4fa0e216ff2151a42d720756bebf76/fdbb0/human-learning.png 300w,\n/static/2b4fa0e216ff2151a42d720756bebf76/b5207/human-learning.png 450w,\n/static/2b4fa0e216ff2151a42d720756bebf76/774d6/human-learning.png 512w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);