(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{245:function(e,a,t){"use strict";t.r(a);var A=t(308),i=t(255),r=t(251),s=t.n(r),n=t(0),c=t.n(n),o=t(248),l=t.n(o),d=t(311),f=t(312),u=t(313),m=t(246),g=t(247),b=t(250),p=t(249),h=function(e){function a(){return e.apply(this,arguments)||this}return Object(b.a)(a,e),a.prototype.render=function(){var e,a=this.props,t=a.as,A=void 0===t?"div":t,i=a.className,r=a.fluid,s=a.bsPrefix,n=Object(g.a)(a,["as","className","fluid","bsPrefix"]),o=((e={})[s]=!0,e[s+"-fluid"]=r,e);return c.a.createElement(A,Object(m.a)({},n,{className:l()(i,o)}))},a}(c.a.Component);h.defaultProps={fluid:!1};var E=Object(p.a)(h,"jumbotron"),w=t(261),k=c.a.forwardRef(function(e,a){var t=e.bsPrefix,A=e.variant,i=e.size,r=e.active,s=e.className,n=e.block,o=e.type,d=e.as,f=Object(g.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),u=Object(p.b)(t,"btn"),b=l()(s,u,r&&"active",u+"-"+A,n&&u+"-block",i&&u+"-"+i);if(f.href)return c.a.createElement(w.a,Object(m.a)({},f,{as:d,innerRef:a,className:l()(b,f.disabled&&"disabled")}));var h=d||"button";return a&&(f.ref=a),c.a.createElement(h,Object(m.a)({},f,{type:o,className:b}))});k.displayName="Button",k.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var j=k,B=t(264),y=t(253),x=t(252),Q=t(309),S=t.n(Q);a.default=function(){var e=A.data,a=e.site.siteMetadata,t=a.title,r=a.description,o=a.author,m=Object(n.useState)(!0),g=m[0],b=m[1];return c.a.createElement(y.a,null,c.a.createElement(x.a,{title:"Home"}),c.a.createElement("section",{className:"section section-full"},c.a.createElement(B.a,{onLeave:function(){return b(!1)}}),c.a.createElement(s.a,{fluid:e.bgHero.childImageSharp.fluid,style:{position:"absolute"},className:"bg-cover",alt:"background cover"}),c.a.createElement(d.a,null,c.a.createElement(f.a,null,c.a.createElement(u.a,{md:9,lg:7,className:"align-self-end text-center"},c.a.createElement(E,{className:"mb-0 animated fadeInUp"},c.a.createElement("p",{className:"text-muted text-xs"},"by ",o),c.a.createElement("h1",{className:"text-secondary display-3 mb-4"},t),c.a.createElement("p",{className:"mb-5"},r),c.a.createElement("div",{className:l()({"animated infinite slow bounce delay-3s":g})},c.a.createElement(S.a,null))))))),c.a.createElement("section",{className:"section bg-auto"},c.a.createElement(d.a,null,c.a.createElement(f.a,null,c.a.createElement(u.a,null,c.a.createElement("h2",{className:"text-center mb-4"},"About myself"),c.a.createElement("p",{className:"text-center text-muted mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at enim at mi porttitor luctus at id elit. Curabitur accumsan, augue condimentum sagittis mollis, libero dolor finibus libero, ut facilisis mauris ante venenatis leo. Fusce nunc lectus, scelerisque id ornare non, mattis ac sem. Cras vitae viverra nunc, sit amet lacinia leo. Nullam sed ante vulputate, sagittis risus sit amet, mollis nisl. Nam condimentum pulvinar risus. Donec iaculis erat vel libero rhoncus, quis tincidunt lorem sodales. Maecenas a quam urna. Fusce eleifend sit amet velit et ornare. Morbi vulputate dictum erat sit amet ultrices. Nam aliquam molestie nunc, eu sagittis dui interdum id."))))),c.a.createElement("section",{className:"showcase"},c.a.createElement(d.a,{fluid:!0,className:"p-0"},c.a.createElement(f.a,{noGutters:!0},c.a.createElement(u.a,{lg:{span:6,order:2},className:"showcase-img"},c.a.createElement(s.a,{fluid:e.bgDocker.childImageSharp.fluid,alt:"showcase background image"})),c.a.createElement(u.a,{lg:{span:6,order:1},className:"my-auto showcase-text"},c.a.createElement("h2",{className:"mb-3"},"dockerized"),c.a.createElement("p",{className:"lead text-muted"},"Dockerized build environment utilises Docker technology to quickly setup build environment in a container with cross-compiling toolchain preconfigured for building software targeting a specific platform."),c.a.createElement(j,{variant:"primary",size:"lg",onClick:function(){return Object(i.c)("/dockerized/")}},"Learn more"))),c.a.createElement(f.a,{noGutters:!0},c.a.createElement(u.a,{lg:{span:6,order:1},className:"showcase-img"},c.a.createElement(s.a,{fluid:e.bgCMake1.childImageSharp.fluid,alt:"showcase background image"})),c.a.createElement(u.a,{lg:{span:6,order:2},className:"my-auto showcase-text"},c.a.createElement("h2",{className:"mb-3"},"cmake-1"),c.a.createElement("p",{className:"lead text-muted"},"cmake-1 is a collection of CMake modules and toolchains for cross-compiling."),c.a.createElement(j,{variant:"primary",size:"lg",onClick:function(){return Object(i.c)("/cmake-1/")}},"Learn more"))),c.a.createElement(f.a,{noGutters:!0},c.a.createElement(u.a,{lg:{span:6,order:2},className:"showcase-img"},c.a.createElement(s.a,{fluid:e.bgUrho3D.childImageSharp.fluid,alt:"showcase background image"})),c.a.createElement(u.a,{lg:{span:6,order:1},className:"my-auto showcase-text"},c.a.createElement("h2",{className:"mb-3"},"Urho3D"),c.a.createElement("p",{className:"lead text-muted"},"Urho3D is a free lightweight, cross-platform 2D and 3D game engine implemented in C++ and released under the MIT license. Greatly inspired by OGRE and Horde3D."),c.a.createElement(j,{variant:"primary",size:"lg",onClick:function(){return Object(i.c)("/Urho3D/")}},"Learn more"))))))}},251:function(e,a,t){"use strict";t(25),t(26),t(13),t(72),t(149),t(256);var A=t(15);a.__esModule=!0,a.default=void 0;var i,r=A(t(74)),s=A(t(75)),n=A(t(150)),c=A(t(151)),o=A(t(0)),l=A(t(51)),d=function(e){var a=(0,c.default)({},e),t=a.resolutions,A=a.sizes,i=a.critical;return t&&(a.fixed=t,delete a.resolutions),A&&(a.fluid=A,delete a.sizes),i&&(a.loading="eager"),a.fluid&&(a.fluid=w([].concat(a.fluid))),a.fixed&&(a.fixed=w([].concat(a.fixed))),a},f=function(e){var a=e.fluid,t=e.fixed;return(a&&a[0]||t&&t[0]).src},u=Object.create({}),m=function(e){var a=d(e),t=f(a);return u[t]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,p=b&&window.IntersectionObserver,h=new WeakMap;function E(e){return e.map(function(e){var a=e.src,t=e.srcSet,A=e.srcSetWebp,i=e.media,r=e.sizes;return o.default.createElement(o.default.Fragment,{key:a},A&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:A,sizes:r}),o.default.createElement("source",{media:i,srcSet:t,sizes:r}))})}function w(e){var a=[],t=[];return e.forEach(function(e){return(e.media?a:t).push(e)}),a.concat(t)}function k(e){return e.map(function(e){var a=e.src,t=e.media,A=e.tracedSVG;return o.default.createElement("source",{key:a,media:t,srcSet:A})})}function j(e){return e.map(function(e){var a=e.src,t=e.media,A=e.base64;return o.default.createElement("source",{key:a,media:t,srcSet:A})})}function B(e,a){var t=e.srcSet,A=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(a?A:t)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var y=function(e,a){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var a=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),a())}})},{rootMargin:"200px"})),i);return t&&(t.observe(e),h.set(e,a)),function(){t.unobserve(e),h.delete(e)}},x=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",A=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?B(e,!0):"")+B(e)}).join("")+"<img "+o+s+n+t+A+a+r+i+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},Q=function(e){var a=e.src,t=e.imageVariants,A=e.generateSources,i=e.spreadProps,r=o.default.createElement(S,(0,c.default)({src:a},i));return t.length>1?o.default.createElement("picture",null,A(t),r):r},S=o.default.forwardRef(function(e,a){var t=e.sizes,A=e.srcSet,i=e.src,r=e.style,s=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,u=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:t,srcSet:A,src:i},u,{onLoad:s,onError:l,ref:a,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});S.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var N=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=b&&m(a),t.addNoScript=!(a.critical&&!a.fadeIn),t.useIOSupport=!g&&p&&!a.critical&&!t.seenBefore;var A=a.critical||b&&(g||!t.useIOSupport);return t.state={isVisible:A,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,s.default)((0,s.default)(t))),t.handleRef=t.handleRef.bind((0,s.default)((0,s.default)(t))),t}(0,r.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=m(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})})}))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=d(e),t=f(a),u[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=d(this.props),a=e.title,t=e.alt,A=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,n=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,u=e.placeholderClassName,m=e.fluid,g=e.fixed,b=e.backgroundColor,p=e.durationFadeIn,h=e.Tag,w=e.itemProp,B=e.loading,y=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,v=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,c.default)({opacity:N?1:0,transition:v?"opacity "+p+"ms":"none"},n),R="boolean"==typeof b?"lightgray":b,C={transitionDelay:p+"ms"},F=(0,c.default)({opacity:this.state.imgLoaded?0:1},v&&C,n,f),Y={title:a,alt:this.state.isVisible?"":t,style:F,className:u};if(m){var P=m,O=P[0];return o.default.createElement(h,{className:(A||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},o.default.createElement(h,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),R&&o.default.createElement(h,{title:a,style:(0,c.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&C)}),O.base64&&o.default.createElement(Q,{src:O.base64,spreadProps:Y,imageVariants:P,generateSources:j}),O.tracedSVG&&o.default.createElement(Q,{src:O.tracedSVG,spreadProps:Y,imageVariants:P,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,E(P),o.default.createElement(S,{alt:t,title:a,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:B,draggable:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,c.default)({alt:t,title:a,loading:B},O,{imageVariants:P}))}}))}if(g){var M=g,G=M[0],D=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},r);return"inherit"===r.display&&delete D.display,o.default.createElement(h,{className:(A||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},R&&o.default.createElement(h,{title:a,style:(0,c.default)({backgroundColor:R,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},v&&C)}),G.base64&&o.default.createElement(Q,{src:G.base64,spreadProps:Y,imageVariants:M,generateSources:j}),G.tracedSVG&&o.default.createElement(Q,{src:G.tracedSVG,spreadProps:Y,imageVariants:M,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,E(M),o.default.createElement(S,{alt:t,title:a,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:B,draggable:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,c.default)({alt:t,title:a,loading:B},G,{imageVariants:M}))}}))}return null},a}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),I=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});N.propTypes={resolutions:v,sizes:I,fixed:l.default.oneOfType([v,l.default.arrayOf(v)]),fluid:l.default.oneOfType([I,l.default.arrayOf(I)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var R=N;a.default=R},308:function(e){e.exports={data:{site:{siteMetadata:{title:"Human Learning",description:"This PWA contains the online documentation for my projects and personal blog.",author:"Yao Wei Tjong 姚伟忠"}},bgHero:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAASUHtOzH/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxITISL/2gAIAQEAAQUCGFGazOKuF9qnmov3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/Aa1//8QAGxAAAgEFAAAAAAAAAAAAAAAAADEBEUFRgaH/2gAIAQEABj8Cc7Ml+ioQI//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExUUH/2gAIAQEAAT8hXUKpaJ1iOqkN0FwnLwVYHSek/9oADAMBAAIAAwAAABCz3//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAbS//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAgEBPxCk0//EAB4QAQACAQQDAAAAAAAAAAAAAAEAETEhQVFxkaGx/9oACAEBAAE/EMJQWMm9PkTIi0LNHd5vmFiguGsPMQ4wqvUoG1FNt3iOhZ2s/9k=",aspectRatio:1.498371335504886,src:"/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg",srcSet:"/static/83fbccd72b3c8a1197e52c791f02314d/4d406/book-library-with-open-textbook.jpg 250w,\n/static/83fbccd72b3c8a1197e52c791f02314d/32ee9/book-library-with-open-textbook.jpg 500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2f7e7/book-library-with-open-textbook.jpg 1000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/2a5e2/book-library-with-open-textbook.jpg 1500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/883ab/book-library-with-open-textbook.jpg 2000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/8fafe/book-library-with-open-textbook.jpg 7360w",srcWebp:"/static/83fbccd72b3c8a1197e52c791f02314d/80349/book-library-with-open-textbook.webp",srcSetWebp:"/static/83fbccd72b3c8a1197e52c791f02314d/9ed04/book-library-with-open-textbook.webp 250w,\n/static/83fbccd72b3c8a1197e52c791f02314d/71b1f/book-library-with-open-textbook.webp 500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/80349/book-library-with-open-textbook.webp 1000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/8c335/book-library-with-open-textbook.webp 1500w,\n/static/83fbccd72b3c8a1197e52c791f02314d/f6f8b/book-library-with-open-textbook.webp 2000w,\n/static/83fbccd72b3c8a1197e52c791f02314d/fed82/book-library-with-open-textbook.webp 7360w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},bgDocker:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAADBAX/2gAMAwEAAhADEAAAAcrSSbnaEXcTlcR6n//EABoQAAMAAwEAAAAAAAAAAAAAAAABEQITIUH/2gAIAQEAAQUC5YPLuJ7qbIRCP//EABkRAQEBAAMAAAAAAAAAAAAAAAEAEQITYf/aAAgBAwEBPwF4GbdHkLF//8QAGBEAAgMAAAAAAAAAAAAAAAAAAhMAEFH/2gAIAQIBAT8BaUeG3//EABgQAAMBAQAAAAAAAAAAAAAAAAARMRAg/9oACAEBAAY/AlkGiD4//8QAGhABAQEAAwEAAAAAAAAAAAAAAQARITFRkf/aAAgBAQABPyEOhZ8sEZ+wIO7iXOjmCRQ4v//aAAwDAQACAAMAAAAQDz98/8QAGREBAAMBAQAAAAAAAAAAAAAAAQARMSFB/9oACAEDAQE/EEgFebrDiEULME//xAAYEQEBAAMAAAAAAAAAAAAAAAABABExQf/aAAgBAgEBPxAyosdhITu//8QAGhABAQEBAQEBAAAAAAAAAAAAAREAIUFxMf/aAAgBAQABPxBHTZb5ooemcboQgMH1ph35GXWllXl/O4WBVlctCz7lLxn1xPvnDu//2Q==",aspectRatio:1,src:"/static/048a3a6b4c1071761aa0afdde84cff11/2f7e7/container-2661347_1920-square.jpg",srcSet:"/static/048a3a6b4c1071761aa0afdde84cff11/4d406/container-2661347_1920-square.jpg 250w,\n/static/048a3a6b4c1071761aa0afdde84cff11/32ee9/container-2661347_1920-square.jpg 500w,\n/static/048a3a6b4c1071761aa0afdde84cff11/2f7e7/container-2661347_1920-square.jpg 1000w,\n/static/048a3a6b4c1071761aa0afdde84cff11/54dcf/container-2661347_1920-square.jpg 1250w",srcWebp:"/static/048a3a6b4c1071761aa0afdde84cff11/80349/container-2661347_1920-square.webp",srcSetWebp:"/static/048a3a6b4c1071761aa0afdde84cff11/9ed04/container-2661347_1920-square.webp 250w,\n/static/048a3a6b4c1071761aa0afdde84cff11/71b1f/container-2661347_1920-square.webp 500w,\n/static/048a3a6b4c1071761aa0afdde84cff11/80349/container-2661347_1920-square.webp 1000w,\n/static/048a3a6b4c1071761aa0afdde84cff11/d3c1e/container-2661347_1920-square.webp 1250w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},bgCMake1:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4jAAAuIwF4pT92AAAFBElEQVQ4yzVVa2xTZRjuT1kCOBjoMhiwwbr1ftnWIQpoIsbEGE3EHyQY/eE1hh/EGC9xElQMPwgBUTYu0610W+/tOe3anvb0nN7WjbHBYHMD3ByZOn6gIZHEDJXH5zT442v73Z7ved/3eZ/qlJAdctABJWSDErQjF7Iiw/lwzIScYEMmaoEatiIf5n7EAiVgRzLggMz1Eud5DpkYatiObMgBnfaRCdq4aEGWl1J+J1TRhGzEipzPBokjxYeyHKpgQmqgDQWCyV4nijEj79keDpKJWqErp5qR8/PFoAZmJwsrCn4NgEzJthgxkp0R6T4Xgj47hhNNSBNA8luh+ByVhxSeU7UIyVJXEM1Ih82QwxYUSL/AkNQYHxlohzDUhNLAThwPmTGTbcEk93uO7EE6wjMDDJ1gss9eIaMwPSVGpsvFzRiJEJSMsgRWBCOk3g54g2bkYnosdruQ6HJgZupR/HuzCsLnL+P21GYklTrInlZkGHaGqcqGnBwMOeFtY25akBlsQ5Khij4jogkjbiTqsZhqw+sfv4+97tWYn1yNez+tw/L0OhzJV+GDzpcw729FKGBmiiwYEZqhkqnucryBCW6t5Gtc1CPZtwsLIRM6D++HerYe3osbUJpbiVnRgV/L6/DXrTXIJmuQPWvDSOhJyIltSA/yPpVQjBuhu5LbhH6PDVGGK3hMcItWpHxbkL++HlJkG+5PrwGWqnH8nS9Q+roB95dW4sF8NY6pW3Hhm3aCOpDwM4ccmTBlMyFRBl1P4XpBj1L3DtwstyB26EUsT63H4de+xC8nN2Nq3IC9r/Tg2tvtuDu3Fqc+Ooj5HismRxoRdduRj2p6ZOVZB92xhA2ebjO8Q2acO02mKSO+6rZhQmjAm0kT5HObIMl67M/XIvPDJmSyTXi3z4nRYAPOeXag6KUWRTuLamFTMIezqgljfa2YL1MiPR1YutII+bvdwMIjGB3Yg1mpFrizAiP9uzEjM4e3V6Fw5lncKdYi7tmJcpjFiDiQpi5zInPYH9+O70+0w0+GvSda4ZNsOPnpcxjPbsa+tzrx29FGzF1txoEXvFh4z4Xlm49h34cHIZxuQiJjgOKlwBlqjg0h9bug+3liA4psp6lEC66w0hfTNkwObcS1q3U4lqrFXHgjPotbUccLnQcsuNSlR+x6NZS8HuNuFwRKTaKOZcHA/mZRxoQmhAcdiPg1xTej+/wuXAxtxZnDb+BPXyP+vrsCs5frIY5XwTtWxd9r8eBGNf5I16P31DMoSg3IklCWshkmsC7a38EcGGgAbVAGrRjTTCJtgOjfgkjUjp5PDkA++jSWrz4O3KrBPwurMM1uChzaD/cgBc12FAeoQ7Zsii6kU+MmlHggT/QUEzvExVhvK2YSFnTFtyJ1ZBd+n6jBvcXVjKQGr7q3wD9aj6WxWkh92yGx74sBtm3UjGFi6cox9myAvSiYqSdzBVhh8wfOP4FpuRHuC+340e/Ct/EmXKIKxKPP0xM7EOmhfocMkAadSNO2hnk/Rz3qRmKaD1oqnqiQukJjLXCej7cg7tPkwF4fMkJ0tyEfs0GN68mG5svHU/+bclAzB82AqcMMq6fFr7myxMW0j6CawVIKmoGWYwaoPs2eKPKA1pZO5orW5XERiJIRSCjw0PU1P9SQVU5kmqxm8bmIiayc9DZz5QFtPx21IU+H1kw0rf1lMMQkzxdJpmKw/FaZpgLHf18mEHhl8u0+AAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/06e3705daea8440b96af6115d6f05aaf/e9c7b/cmake-1.png",srcSet:"/static/06e3705daea8440b96af6115d6f05aaf/69781/cmake-1.png 250w,\n/static/06e3705daea8440b96af6115d6f05aaf/3fa08/cmake-1.png 500w,\n/static/06e3705daea8440b96af6115d6f05aaf/e9c7b/cmake-1.png 1000w,\n/static/06e3705daea8440b96af6115d6f05aaf/a4fe2/cmake-1.png 1500w,\n/static/06e3705daea8440b96af6115d6f05aaf/dc9f7/cmake-1.png 2000w,\n/static/06e3705daea8440b96af6115d6f05aaf/04ce1/cmake-1.png 2072w",srcWebp:"/static/06e3705daea8440b96af6115d6f05aaf/80349/cmake-1.webp",srcSetWebp:"/static/06e3705daea8440b96af6115d6f05aaf/9ed04/cmake-1.webp 250w,\n/static/06e3705daea8440b96af6115d6f05aaf/71b1f/cmake-1.webp 500w,\n/static/06e3705daea8440b96af6115d6f05aaf/80349/cmake-1.webp 1000w,\n/static/06e3705daea8440b96af6115d6f05aaf/8c335/cmake-1.webp 1500w,\n/static/06e3705daea8440b96af6115d6f05aaf/f6f8b/cmake-1.webp 2000w,\n/static/06e3705daea8440b96af6115d6f05aaf/ee4d9/cmake-1.webp 2072w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},bgUrho3D:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwEC/9oADAMBAAIQAxAAAAHEpGeotz//xAAbEAACAQUAAAAAAAAAAAAAAAABEQACAxASIf/aAAgBAQABBQJhG3KuFF74/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwFyzD//xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPwGn/8QAGhAAAQUBAAAAAAAAAAAAAAAAAAERICExQf/aAAgBAQAGPwJl6UbD/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAITFRQWGR/9oACAEBAAE/IXoXpKmCBmCPcFbnMJgIHG4+3P/aAAwDAQACAAMAAAAQkN//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QYdKP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxBOsIf/xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhMUFRYXGh8P/aAAgBAQABPxAZfqUXdNgvSIl1Zoce4LHUYwzB2mS7H3EQPdRNh4I0du9n/9k=",aspectRatio:1.3333333333333333,src:"/static/a00b403f45148c61939913d7bd635834/2f7e7/Urho_Fishtank.jpg",srcSet:"/static/a00b403f45148c61939913d7bd635834/4d406/Urho_Fishtank.jpg 250w,\n/static/a00b403f45148c61939913d7bd635834/32ee9/Urho_Fishtank.jpg 500w,\n/static/a00b403f45148c61939913d7bd635834/2f7e7/Urho_Fishtank.jpg 1000w,\n/static/a00b403f45148c61939913d7bd635834/2a5e2/Urho_Fishtank.jpg 1500w,\n/static/a00b403f45148c61939913d7bd635834/883ab/Urho_Fishtank.jpg 2000w,\n/static/a00b403f45148c61939913d7bd635834/65ba4/Urho_Fishtank.jpg 3648w",srcWebp:"/static/a00b403f45148c61939913d7bd635834/80349/Urho_Fishtank.webp",srcSetWebp:"/static/a00b403f45148c61939913d7bd635834/9ed04/Urho_Fishtank.webp 250w,\n/static/a00b403f45148c61939913d7bd635834/71b1f/Urho_Fishtank.webp 500w,\n/static/a00b403f45148c61939913d7bd635834/80349/Urho_Fishtank.webp 1000w,\n/static/a00b403f45148c61939913d7bd635834/8c335/Urho_Fishtank.webp 1500w,\n/static/a00b403f45148c61939913d7bd635834/f6f8b/Urho_Fishtank.webp 2000w,\n/static/a00b403f45148c61939913d7bd635834/34377/Urho_Fishtank.webp 3648w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},309:function(e,a,t){var A=t(0);function i(e){return A.createElement("svg",e,[A.createElement("g",{key:0},A.createElement("polygon",{style:{fill:"#FFFFFF"},points:"29.707,45.268 0,15.561 1.414,14.146 29.707,42.439 58,14.146 59.414,15.561 \t"})),A.createElement("g",{key:1}),A.createElement("g",{key:2}),A.createElement("g",{key:3}),A.createElement("g",{key:4}),A.createElement("g",{key:5}),A.createElement("g",{key:6}),A.createElement("g",{key:7}),A.createElement("g",{key:8}),A.createElement("g",{key:9}),A.createElement("g",{key:10}),A.createElement("g",{key:11}),A.createElement("g",{key:12}),A.createElement("g",{key:13}),A.createElement("g",{key:14}),A.createElement("g",{key:15})])}i.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 59.414 59.414",style:{enableBackground:"new 0 0 59.414 59.414"},xmlSpace:"preserve"},e.exports=i,i.default=i}}]);