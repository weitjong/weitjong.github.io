(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{245:function(e,t,a){"use strict";a.r(t);var r=a(307),i=a(0),s=a.n(i),n=a(253),o=a(252),l=a(309),d=a(310),c=a(260),u=a(246),A=a(247),f=a(250),p=a(248),g=a.n(p),m=a(249),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.as,r=void 0===a?"div":a,i=t.className,n=t.fluid,o=t.bsPrefix,l=Object(A.a)(t,["as","className","fluid","bsPrefix"]),d=((e={})[o]=!0,e[o+"-fluid"]=n,e);return s.a.createElement(r,Object(u.a)({},l,{className:g()(i,d)}))},t}(s.a.Component);h.defaultProps={fluid:!1};var b=Object(m.a)(h,"jumbotron"),E=a(251),y=a.n(E);t.default=function(){var e=r.data,t=e.site.siteMetadata,a=t.title,i=t.description,u=t.author,A=e.backgroundImage;return s.a.createElement(n.a,null,s.a.createElement(o.a,{title:"Home"}),s.a.createElement("section",{className:"section section-full"},s.a.createElement(y.a,{fluid:A.childImageSharp.fluid,style:{position:"absolute"},className:"bg-cover",alt:"background cover"}),s.a.createElement(l.a,null,s.a.createElement(d.a,null,s.a.createElement(c.a,{md:9,lg:7,className:"align-self-end"},s.a.createElement(b,{className:"mb-0"},s.a.createElement("p",{className:"text-muted text-xs animated fadeInUp"},"by ",u),s.a.createElement("h1",{className:"text-secondary display-3 mb-4 animated fadeInUp"},a),s.a.createElement("p",{className:"mb-0 animated fadeInUp"},i)))))),s.a.createElement("section",{className:"section"},s.a.createElement(l.a,null,s.a.createElement(d.a,null,s.a.createElement(c.a,null,s.a.createElement("h1",null,"This is H1"),s.a.createElement("h2",null,"This is H2"),s.a.createElement("h3",null,"This is H3"),s.a.createElement("p",null,"Typography test"),s.a.createElement("code",null,"void cast()"))))))}},251:function(e,t,a){"use strict";a(25),a(26),a(13),a(72),a(149),a(254);var r=a(15);t.__esModule=!0,t.default=void 0;var i,s=r(a(74)),n=r(a(75)),o=r(a(150)),l=r(a(151)),d=r(a(0)),c=r(a(51)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),p=function(e){var t=u(e),a=A(t);return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),d.default.createElement("source",{media:i,srcSet:a,sizes:s}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)}).join("")+"<img "+d+n+o+a+r+t+s+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=d.default.createElement(x,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),s):s},x=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:n,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,v=e.loading,j=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:k?1:0,transition:L?"opacity "+h+"ms":"none"},o),R="boolean"==typeof m?"lightgray":m,B={transitionDelay:h+"ms"},Q=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&B,o,A),C={title:t,alt:this.state.isVisible?"":a,style:Q,className:f};if(p){var P=p,z=P[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&B)}),z.base64&&d.default.createElement(I,{src:z.base64,spreadProps:C,imageVariants:P,generateSources:w}),z.tracedSVG&&d.default.createElement(I,{src:z.tracedSVG,spreadProps:C,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(P),d.default.createElement(x,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:v},z,{imageVariants:P}))}}))}if(g){var T=g,V=T[0],Y=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},s);return"inherit"===s.display&&delete Y.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},L&&B)}),V.base64&&d.default.createElement(I,{src:V.base64,spreadProps:C,imageVariants:T,generateSources:w}),V.tracedSVG&&d.default.createElement(I,{src:V.tracedSVG,spreadProps:C,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(x,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:v},V,{imageVariants:T}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:L,sizes:O,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=k;t.default=R},260:function(e,t,a){"use strict";a(32);var r=a(246),i=a(247),s=a(248),n=a.n(s),o=a(0),l=a.n(o),d=a(249),c=["xl","lg","md","sm","xs"],u=l.a.forwardRef(function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,u=void 0===o?"div":o,A=Object(i.a)(e,["bsPrefix","className","as"]),f=Object(d.b)(a,"col"),p=[],g=[];return c.forEach(function(e){var t,a,r,i=A[e];if(delete A[e],null!=i&&"object"==typeof i){var s=i.span;t=void 0===s||s,a=i.offset,r=i.order}else t=i;var n="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+f+n:""+f+n+"-"+t),null!=r&&g.push("order"+n+"-"+r),null!=a&&g.push("offset"+n+"-"+a)}),p.length||p.push(f),l.a.createElement(u,Object(r.a)({},A,{ref:t,className:n.a.apply(void 0,[s].concat(p,g))}))});u.displayName="Col",t.a=u},307:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This PWA contains the online documentation for my projects and personal blog.",author:"Yao Wei Tjong 姚伟忠"}},backgroundImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAASUHtOzH/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxITISL/2gAIAQEAAQUCGFGazOKuF9qnmov3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/Aa1//8QAGxAAAgEFAAAAAAAAAAAAAAAAADEBEUFRgaH/2gAIAQEABj8Cc7Ml+ioQI//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExUUH/2gAIAQEAAT8hXUKpaJ1iOqkN0FwnLwVYHSek/9oADAMBAAIAAwAAABCz3//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAbS//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAgEBPxCk0//EAB4QAQACAQQDAAAAAAAAAAAAAAEAETEhQVFxkaGx/9oACAEBAAE/EMJQWMm9PkTIi0LNHd5vmFiguGsPMQ4wqvUoG1FNt3iOhZ2s/9k=",aspectRatio:1.498371335504886,src:"/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg",srcSet:"/static/83fbccd72b3c8a1197e52c791f02314d/4d406/book-library-with-open-textbook.jpg 250w,\n/static/83fbccd72b3c8a1197e52c791f02314d/32ee9/book-library-with-open-textbook.jpg 500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg 1000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2a5e2/book-library-with-open-textbook.jpg 1500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/883ab/book-library-with-open-textbook.jpg 2000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/8fafe/book-library-with-open-textbook.jpg 7360w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}}}]);