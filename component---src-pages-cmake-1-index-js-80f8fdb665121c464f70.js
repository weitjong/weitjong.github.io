(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(e,t,a){"use strict";a.r(t);var r=a(257),i=a(0),s=a.n(i),n=a(311),o=a(312),l=a(313),d=a(253),c=a(252),A=a(251),u=a.n(A);t.default=function(){var e=r.data.backgroundImage;return s.a.createElement(d.a,null,s.a.createElement(c.a,{title:"cmake-1"}),s.a.createElement("section",{className:"section section-full"},s.a.createElement(u.a,{fluid:e.childImageSharp.fluid,style:{position:"absolute"},className:"bg-cover",alt:"background cover"}),s.a.createElement(n.a,null,s.a.createElement(o.a,null,s.a.createElement(l.a,null,s.a.createElement("h1",null,"cmake-1"))))),s.a.createElement("section",{className:"section"},s.a.createElement(n.a,null,s.a.createElement(o.a,null,s.a.createElement(l.a,null,s.a.createElement("h1",null,"This is H1"),s.a.createElement("h2",null,"This is H2"),s.a.createElement("h3",null,"This is H3"),s.a.createElement("p",null,"Typography test"),s.a.createElement("code",null,"void cast()"))))))}},251:function(e,t,a){"use strict";a(25),a(26),a(13),a(72),a(149),a(256);var r=a(15);t.__esModule=!0,t.default=void 0;var i,s=r(a(74)),n=r(a(75)),o=r(a(150)),l=r(a(151)),d=r(a(0)),c=r(a(51)),A=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=A(e),a=u(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),d.default.createElement("source",{media:i,srcSet:a,sizes:s}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)}).join("")+"<img "+d+n+o+a+r+t+s+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=d.default.createElement(L,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),s):s},L=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,A=e.loading,u=e.draggable,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},f,{onLoad:n,onError:c,ref:t,loading:A,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var B=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=A(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,y=e.itemProp,v=e.loading,j=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:B?1:0,transition:N?"opacity "+m+"ms":"none"},o),x="boolean"==typeof h?"lightgray":h,O={transitionDelay:m+"ms"},Q=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&O,o,u),z={title:t,alt:this.state.isVisible?"":a,style:Q,className:f};if(g){var C=g,V=C[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),x&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&O)}),V.base64&&d.default.createElement(I,{src:V.base64,spreadProps:z,imageVariants:C,generateSources:w}),V.tracedSVG&&d.default.createElement(I,{src:V.tracedSVG,spreadProps:z,imageVariants:C,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(C),d.default.createElement(L,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:v},V,{imageVariants:C}))}}))}if(p){var T=p,P=T[0],Y=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},s);return"inherit"===s.display&&delete Y.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},x&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:x,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},N&&O)}),P.base64&&d.default.createElement(I,{src:P.base64,spreadProps:z,imageVariants:T,generateSources:w}),P.tracedSVG&&d.default.createElement(I,{src:P.tracedSVG,spreadProps:z,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(L,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:v},P,{imageVariants:T}))}}))}return null},t}(d.default.Component);B.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});B.propTypes={resolutions:N,sizes:R,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var x=B;t.default=x},257:function(e){e.exports={data:{backgroundImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAASUHtOzH/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxITISL/2gAIAQEAAQUCGFGazOKuF9qnmov3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/Aa1//8QAGxAAAgEFAAAAAAAAAAAAAAAAADEBEUFRgaH/2gAIAQEABj8Cc7Ml+ioQI//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExUUH/2gAIAQEAAT8hXUKpaJ1iOqkN0FwnLwVYHSek/9oADAMBAAIAAwAAABCz3//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAbS//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAgEBPxCk0//EAB4QAQACAQQDAAAAAAAAAAAAAAEAETEhQVFxkaGx/9oACAEBAAE/EMJQWMm9PkTIi0LNHd5vmFiguGsPMQ4wqvUoG1FNt3iOhZ2s/9k=",aspectRatio:1.498371335504886,src:"/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg",srcSet:"/static/83fbccd72b3c8a1197e52c791f02314d/4d406/book-library-with-open-textbook.jpg 250w,\n/static/83fbccd72b3c8a1197e52c791f02314d/32ee9/book-library-with-open-textbook.jpg 500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg 1000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2a5e2/book-library-with-open-textbook.jpg 1500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/883ab/book-library-with-open-textbook.jpg 2000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/8fafe/book-library-with-open-textbook.jpg 7360w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}}}]);