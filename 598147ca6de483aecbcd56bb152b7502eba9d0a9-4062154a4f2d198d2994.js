(self.webpackChunkgatsby_portfolio=self.webpackChunkgatsby_portfolio||[]).push([[126],{1046:function(e,t,a){"use strict";a.d(t,{w_:function(){return d}});var r=a(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),o(e.child))}))}function d(e){return function(t){return r.createElement(c,s({attr:s({},e.attr)},t),o(e.child))}}function c(e){var t=function(t){var a,i=e.attr,n=e.size,o=e.title,d=l(e,["attr","size","title"]),c=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(i)}},1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),s=r(a(5354)),l=r(a(7316)),o=r(a(7154)),d=r(a(7294)),c=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=Z([].concat(t.fluid))),t.fixed&&(t.fixed=Z([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),a=m(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,S=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function Z(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function _(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(k,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,p=e.draggable,m=e.ariaHidden,g=(0,l.default)(e,u);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:p,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,Z=e.draggable,N=m||h;if(!N)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:O?1:0,transition:x?"opacity "+y+"ms":"none"},l),z="boolean"==typeof b?"lightgray":b,V={transitionDelay:y+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},x&&V,l,u),H={title:t,alt:this.state.isVisible?"":a,style:j,className:p,itemProp:S},T=this.state.isHydrated?g(N):N[0];if(m)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&V)}),T.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:N,generateSources:L}),T.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:N,generateSources:_}),this.state.isVisible&&d.default.createElement("picture",null,E(N),d.default.createElement(k,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:Z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:N}))}}));if(h){var P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete P.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},x&&V)}),T.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:N,generateSources:L}),T.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:N,generateSources:_}),this.state.isVisible&&d.default.createElement("picture",null,E(N),d.default.createElement(k,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:Z})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:N}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}x.propTypes={resolutions:C,sizes:z,fixed:V(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:V(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=x;t.Z=j},4228:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),i=a(5444),n=a(1496),s=a(3201),l=a(3314),o={angellist:s.GaV,email:s.SRX,kofi:s.EKJ,github:s.hJX,instagram:s.Zf_,linkedin:s.ltd,patreon:s.oKc,rss:s.FZ6,twitch:s.aWC,twitter:s.fWC,youtube:s.V2E};var d=function(e){return void 0!==o[e.component]?r.createElement(o[e.component],{}):r.createElement((function(){return(0,l.tZ)("div",null,"The component ",e.component," has not been created yet.")}),{})},c=function(e){var t=e.children,a=(0,r.useState)(!1),s=a[0],o=a[1],c=(0,i.useStaticQuery)("342711794"),u=c.mdx.frontmatter,f=c.allSocialJson;return(0,l.tZ)("div",{className:"container "+(s?"is-open":"")},(0,l.tZ)("div",{className:"container__sidebar"},(0,l.tZ)("div",{className:"sidebar"},(0,l.tZ)("div",{className:"sidebar__header"},(0,l.tZ)("div",{className:"sidebar__icon sidebar__pixelated"},(0,l.tZ)(i.Link,{to:"/"},(0,l.tZ)(n.Z,{fluid:u.iconImage.childImageSharp.fluid}))),(0,l.tZ)("div",null,(0,l.tZ)("h6",{className:"sidebar__title"},(0,l.tZ)(i.Link,{to:"/"},u.title)),(0,l.tZ)("div",{className:"sidebar__subtitle"},u.subtitle))),(0,l.tZ)("div",{className:"sidebar__intro",dangerouslySetInnerHTML:{__html:u.introText}}),(0,l.tZ)("ul",{className:"sidebar__menu"},(0,l.tZ)("li",null,(0,l.tZ)(i.Link,{to:"/"},"Home")),(0,l.tZ)("li",null,(0,l.tZ)(i.Link,{to:"/projects"},"Projects")),(0,l.tZ)("li",null,(0,l.tZ)(i.Link,{to:"/tags"},"Tags")),(0,l.tZ)("li",null,(0,l.tZ)(i.Link,{to:"/projects/writing-samples"},"Writing Samples")),(0,l.tZ)("li",null,(0,l.tZ)("a",{href:"/files/resume-jerry_belich.pdf",type:"application/pdf"},"Resume")),(0,l.tZ)("li",null,(0,l.tZ)("a",{href:"/files/artist_cv-jerry_belich.pdf",type:"application/pdf"},"Artist CV"))),(0,l.tZ)("div",{className:"sidebar__social social-icons"},(0,l.tZ)("ul",null,f.edges.map((function(e){var t=e.node;return(0,l.tZ)("li",{key:t.name},(0,l.tZ)("a",{href:t.url,className:"",title:t.title,target:"_blank",rel:"noopener noreferrer"},d(t)))})))),(0,l.tZ)("div",{className:"sidebar__copyright"},u.copyright),(0,l.tZ)("div",{className:"sidebar__created"},u.created))),(0,l.tZ)("div",{className:"container__body"},(0,l.tZ)("div",{className:"container__mobile-header"},(0,l.tZ)("div",{className:"mobile-header"},(0,l.tZ)("button",{"aria-label":"Show Menu",className:"mobile-header__button",onClick:function(e){e.preventDefault(),o(!s)}}),(0,l.tZ)("div",{className:"mobile-header__logo"},(0,l.tZ)(i.Link,{to:"/"},u.title)))),t))}}}]);
//# sourceMappingURL=598147ca6de483aecbcd56bb152b7502eba9d0a9-4062154a4f2d198d2994.js.map