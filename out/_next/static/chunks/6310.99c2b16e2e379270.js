(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6310],{9996:function(e){"use strict";var t=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l(Array.isArray(e)?[]:{},e,t):e}function o(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function a(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[])}function i(e,t){try{return t in e}catch(e){return!1}}function l(e,r,u){(u=u||{}).arrayMerge=u.arrayMerge||o,u.isMergeableObject=u.isMergeableObject||t,u.cloneUnlessOtherwiseSpecified=n;var c,s,f=Array.isArray(r);return f!==Array.isArray(e)?n(r,u):f?u.arrayMerge(e,r,u):(s={},(c=u).isMergeableObject(e)&&a(e).forEach(function(t){s[t]=n(e[t],c)}),a(r).forEach(function(t){(!i(e,t)||Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))&&(i(e,t)&&c.isMergeableObject(r[t])?s[t]=(function(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"==typeof r?r:l})(t,c)(e[t],r[t],c):s[t]=n(r[t],c))}),s)}l.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,r){return l(e,r,t)},{})},e.exports=l},49090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},30845:function(e,t,r){"use strict";r.r(t);var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function o(e,t){if(e.length!==t.length)return!1;for(var r,o,a=0;a<e.length;a++)if(!((r=e[a])===(o=t[a])||n(r)&&n(o)))return!1;return!0}t.default=function(e,t){void 0===t&&(t=o);var r,n,a=[],i=!1;return function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return i&&r===this&&t(o,a)||(n=e.apply(this,o),i=!0,r=this,a=o),n}}},69590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,a){try{return function e(a,i){if(a===i)return!0;if(a&&i&&"object"==typeof a&&"object"==typeof i){var l,u,c,s;if(a.constructor!==i.constructor)return!1;if(Array.isArray(a)){if((l=a.length)!=i.length)return!1;for(u=l;0!=u--;)if(!e(a[u],i[u]))return!1;return!0}if(r&&a instanceof Map&&i instanceof Map){if(a.size!==i.size)return!1;for(s=a.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=a.entries();!(u=s.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(n&&a instanceof Set&&i instanceof Set){if(a.size!==i.size)return!1;for(s=a.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(i)){if((l=a.length)!=i.length)return!1;for(u=l;0!=u--;)if(a[u]!==i[u])return!1;return!0}if(a.constructor===RegExp)return a.source===i.source&&a.flags===i.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===i.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===i.toString();if((l=(c=Object.keys(a)).length)!==Object.keys(i).length)return!1;for(u=l;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,c[u]))return!1;if(t&&a instanceof Element)return!1;for(u=l;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!a.$$typeof)&&!e(a[c[u]],i[c[u]]))return!1;return!0}return a!=a&&i!=i}(e,a)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},59605:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(67294)),i=(o=r(69590))&&o.__esModule?o:{default:o},l=r(29448),u=r(56281);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,r,o,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,o=d(c);if(t){var a=d(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return(e=r)&&("object"===n(e)||"function"==typeof e)?e:p(this)});function c(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(p(e=l.call.apply(l,[this].concat(r))),"mounted",!1),h(p(e),"isReady",!1),h(p(e),"isPlaying",!1),h(p(e),"isLoading",!0),h(p(e),"loadOnReady",null),h(p(e),"startOnPlay",!0),h(p(e),"seekOnPlay",null),h(p(e),"onDurationCalled",!1),h(p(e),"handlePlayerMount",function(t){if(e.player){e.progress();return}e.player=t,e.player.load(e.props.url),e.progress()}),h(p(e),"getInternalPlayer",function(t){return e.player?e.player[t]:null}),h(p(e),"progress",function(){if(e.props.url&&e.player&&e.isReady){var t=e.getCurrentTime()||0,r=e.getSecondsLoaded(),n=e.getDuration();if(n){var o={playedSeconds:t,played:t/n};null!==r&&(o.loadedSeconds=r,o.loaded=r/n),(o.playedSeconds!==e.prevPlayed||o.loadedSeconds!==e.prevLoaded)&&e.props.onProgress(o),e.prevPlayed=o.playedSeconds,e.prevLoaded=o.loadedSeconds}}e.progressTimeout=setTimeout(e.progress,e.props.progressFrequency||e.props.progressInterval)}),h(p(e),"handleReady",function(){if(e.mounted){e.isReady=!0,e.isLoading=!1;var t=e.props,r=t.onReady,n=t.playing,o=t.volume,a=t.muted;r(),a||null===o||e.player.setVolume(o),e.loadOnReady?(e.player.load(e.loadOnReady,!0),e.loadOnReady=null):n&&e.player.play(),e.handleDurationCheck()}}),h(p(e),"handlePlay",function(){e.isPlaying=!0,e.isLoading=!1;var t=e.props,r=t.onStart,n=t.onPlay,o=t.playbackRate;e.startOnPlay&&(e.player.setPlaybackRate&&1!==o&&e.player.setPlaybackRate(o),r(),e.startOnPlay=!1),n(),e.seekOnPlay&&(e.seekTo(e.seekOnPlay),e.seekOnPlay=null),e.handleDurationCheck()}),h(p(e),"handlePause",function(t){e.isPlaying=!1,e.isLoading||e.props.onPause(t)}),h(p(e),"handleEnded",function(){var t=e.props,r=t.activePlayer,n=t.loop,o=t.onEnded;r.loopOnEnded&&n&&e.seekTo(0),n||(e.isPlaying=!1,o())}),h(p(e),"handleError",function(){var t;e.isLoading=!1,(t=e.props).onError.apply(t,arguments)}),h(p(e),"handleDurationCheck",function(){clearTimeout(e.durationCheckTimeout);var t=e.getDuration();t?e.onDurationCalled||(e.props.onDuration(t),e.onDurationCalled=!0):e.durationCheckTimeout=setTimeout(e.handleDurationCheck,100)}),h(p(e),"handleLoaded",function(){e.isLoading=!1}),e}return r=[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.player){var r=this.props,n=r.url,o=r.playing,a=r.volume,l=r.muted,c=r.playbackRate,s=r.pip,f=r.loop,y=r.activePlayer,p=r.disableDeferredLoading;if(!(0,i.default)(e.url,n)){if(this.isLoading&&!y.forceLoad&&!p&&!(0,u.isMediaStream)(n)){console.warn("ReactPlayer: the attempt to load ".concat(n," is being deferred until the player has loaded")),this.loadOnReady=n;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}e.playing||!o||this.isPlaying||this.player.play(),e.playing&&!o&&this.isPlaying&&this.player.pause(),!e.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==l&&(l?this.player.mute():(this.player.unmute(),null!==a&&setTimeout(function(){return t.player.setVolume(a)}))),e.playbackRate!==c&&this.player.setPlaybackRate&&this.player.setPlaybackRate(c),e.loop!==f&&this.player.setLoop&&this.player.setLoop(f)}}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e,t){var r=this;if(!this.isReady){0!==e&&(this.seekOnPlay=e,setTimeout(function(){r.seekOnPlay=null},5e3));return}if(t?"fraction"===t:e>0&&e<1){var n=this.player.getDuration();if(!n){console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");return}this.player.seekTo(n*e);return}this.player.seekTo(e)}},{key:"render",value:function(){var e=this.props.activePlayer;return e?a.default.createElement(e,s({},this.props,{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}],f(c.prototype,r),o&&f(c,o),c}(a.Component);t.default=b,h(b,"displayName","Player"),h(b,"propTypes",l.propTypes),h(b,"defaultProps",l.defaultProps)},48800:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createReactPlayer=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(67294)),a=f(r(9996)),i=f(r(30845)),l=f(r(69590)),u=r(29448),c=r(56281),s=f(r(59605));function f(e){return e&&e.__esModule?e:{default:e}}function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=(0,o.lazy)(function(){return r.e(7664).then(r.bind(r,57284))}),S="undefined"!=typeof window&&window.document,A=void 0!==r.g&&r.g.window&&r.g.window.document,T=Object.keys(u.propTypes),k=S||A?o.Suspense:function(){return null},E=[];t.createReactPlayer=function(e,t){var r,f;return f=r=function(r){(function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)})(S,r);var f,y,p,v=(f=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,r=w(S);if(f){var o=w(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(e=t)&&("object"===n(e)||"function"==typeof e)?e:P(this)});function S(){var r;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,S);for(var n=arguments.length,l=Array(n),f=0;f<n;f++)l[f]=arguments[f];return O(P(r=v.call.apply(v,[this].concat(l))),"state",{showPreview:!!r.props.light}),O(P(r),"references",{wrapper:function(e){r.wrapper=e},player:function(e){r.player=e}}),O(P(r),"handleClickPreview",function(e){r.setState({showPreview:!1}),r.props.onClickPreview(e)}),O(P(r),"showPreview",function(){r.setState({showPreview:!0})}),O(P(r),"getDuration",function(){return r.player?r.player.getDuration():null}),O(P(r),"getCurrentTime",function(){return r.player?r.player.getCurrentTime():null}),O(P(r),"getSecondsLoaded",function(){return r.player?r.player.getSecondsLoaded():null}),O(P(r),"getInternalPlayer",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return r.player?r.player.getInternalPlayer(e):null}),O(P(r),"seekTo",function(e,t){if(!r.player)return null;r.player.seekTo(e,t)}),O(P(r),"handleReady",function(){r.props.onReady(P(r))}),O(P(r),"getActivePlayer",(0,i.default)(function(r){for(var n=0,o=[].concat(E,b(e));n<o.length;n++){var a=o[n];if(a.canPlay(r))return a}return t||null})),O(P(r),"getConfig",(0,i.default)(function(e,t){var n=r.props.config;return a.default.all([u.defaultProps.config,u.defaultProps.config[t]||{},n,n[t]||{}])})),O(P(r),"getAttributes",(0,i.default)(function(e){return(0,c.omit)(r.props,T)})),O(P(r),"renderActivePlayer",function(e){if(!e)return null;var t=r.getActivePlayer(e);if(!t)return null;var n=r.getConfig(e,t.key);return o.default.createElement(s.default,h({},r.props,{key:t.key,ref:r.references.player,config:n,activePlayer:t.lazyPlayer||t,onReady:r.handleReady}))}),r}return y=[{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.light;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}},{key:"renderPreview",value:function(e){if(!e)return null;var t=this.props,r=t.light,n=t.playIcon,a=t.previewTabIndex,i=t.oEmbedUrl;return o.default.createElement(_,{url:e,light:r,playIcon:n,previewTabIndex:a,oEmbedUrl:i,onClick:this.handleClickPreview})}},{key:"render",value:function(){var e=this.props,t=e.url,r=e.style,n=e.width,a=e.height,i=e.fallback,l=e.wrapper,u=this.state.showPreview,c=this.getAttributes(t),s="string"==typeof l?this.references.wrapper:void 0;return o.default.createElement(l,h({ref:s,style:d(d({},r),{},{width:n,height:a})},c),o.default.createElement(k,{fallback:i},u?this.renderPreview(t):this.renderActivePlayer(t)))}}],m(S.prototype,y),p&&m(S,p),S}(o.Component),O(r,"displayName","ReactPlayer"),O(r,"propTypes",u.propTypes),O(r,"defaultProps",u.defaultProps),O(r,"addCustomPlayer",function(e){E.push(e)}),O(r,"removeCustomPlayers",function(){E.length=0}),O(r,"canPlay",function(t){for(var r=0,n=[].concat(E,b(e));r<n.length;r++)if(n[r].canPlay(t))return!0;return!1}),O(r,"canEnablePIP",function(t){for(var r=0,n=[].concat(E,b(e));r<n.length;r++){var o=n[r];if(o.canEnablePIP&&o.canEnablePIP(t))return!0}return!1}),f}},56310:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(29760))&&n.__esModule?n:{default:n},a=r(48800),i=o.default[o.default.length-1],l=(0,a.createReactPlayer)(o.default,i);t.default=l},99790:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canPlay=t.FLV_EXTENSIONS=t.DASH_EXTENSIONS=t.HLS_EXTENSIONS=t.VIDEO_EXTENSIONS=t.AUDIO_EXTENSIONS=t.MATCH_URL_KALTURA=t.MATCH_URL_VIDYARD=t.MATCH_URL_MIXCLOUD=t.MATCH_URL_DAILYMOTION=t.MATCH_URL_TWITCH_CHANNEL=t.MATCH_URL_TWITCH_VIDEO=t.MATCH_URL_WISTIA=t.MATCH_URL_STREAMABLE=t.MATCH_URL_FACEBOOK_WATCH=t.MATCH_URL_FACEBOOK=t.MATCH_URL_VIMEO=t.MATCH_URL_SOUNDCLOUD=t.MATCH_URL_YOUTUBE=void 0;var n=r(56281);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var a=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;t.MATCH_URL_YOUTUBE=a;var i=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/;t.MATCH_URL_SOUNDCLOUD=i;var l=/vimeo\.com\/(?!progressive_redirect).+/;t.MATCH_URL_VIMEO=l;var u=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;t.MATCH_URL_FACEBOOK=u;var c=/^https?:\/\/fb\.watch\/.+$/;t.MATCH_URL_FACEBOOK_WATCH=c;var s=/streamable\.com\/([a-z0-9]+)$/;t.MATCH_URL_STREAMABLE=s;var f=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;t.MATCH_URL_WISTIA=f;var y=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;t.MATCH_URL_TWITCH_VIDEO=y;var p=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;t.MATCH_URL_TWITCH_CHANNEL=p;var d=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;t.MATCH_URL_DAILYMOTION=d;var h=/mixcloud\.com\/([^/]+\/[^/]+)/;t.MATCH_URL_MIXCLOUD=h;var b=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;t.MATCH_URL_VIDYARD=b;var v=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;t.MATCH_URL_KALTURA=v;var m=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;t.AUDIO_EXTENSIONS=m;var g=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;t.VIDEO_EXTENSIONS=g;var P=/\.(m3u8)($|\?)/i;t.HLS_EXTENSIONS=P;var w=/\.(mpd)($|\?)/i;t.DASH_EXTENSIONS=w;var O=/\.(flv)($|\?)/i;t.FLV_EXTENSIONS=O,t.canPlay={youtube:function(e){return e instanceof Array?e.every(function(e){return a.test(e)}):a.test(e)},soundcloud:function(e){return i.test(e)&&!m.test(e)},vimeo:function(e){return l.test(e)&&!g.test(e)&&!P.test(e)},facebook:function(e){return u.test(e)||c.test(e)},streamable:function(e){return s.test(e)},wistia:function(e){return f.test(e)},twitch:function(e){return y.test(e)||p.test(e)},dailymotion:function(e){return d.test(e)},mixcloud:function(e){return h.test(e)},vidyard:function(e){return b.test(e)},kaltura:function(e){return v.test(e)},file:function e(t){if(t instanceof Array){var r,a=function(e,t){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e))){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i,l=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==a.return||a.return()}finally{if(u)throw i}}}}(t);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("string"==typeof i&&e(i)||e(i.src))return!0}}catch(e){a.e(e)}finally{a.f()}return!1}return!!((0,n.isMediaStream)(t)||(0,n.isBlobUrl)(t))||m.test(t)||g.test(t)||P.test(t)||w.test(t)||O.test(t)}}},29760:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(67294),o=r(56281),a=r(99790),i=[{key:"youtube",name:"YouTube",canPlay:a.canPlay.youtube,lazyPlayer:(0,n.lazy)(function(){return r.e(4439).then(r.bind(r,85034))})},{key:"soundcloud",name:"SoundCloud",canPlay:a.canPlay.soundcloud,lazyPlayer:(0,n.lazy)(function(){return r.e(6125).then(r.bind(r,76655))})},{key:"vimeo",name:"Vimeo",canPlay:a.canPlay.vimeo,lazyPlayer:(0,n.lazy)(function(){return r.e(3743).then(r.bind(r,86746))})},{key:"facebook",name:"Facebook",canPlay:a.canPlay.facebook,lazyPlayer:(0,n.lazy)(function(){return r.e(2121).then(r.bind(r,26429))})},{key:"streamable",name:"Streamable",canPlay:a.canPlay.streamable,lazyPlayer:(0,n.lazy)(function(){return r.e(2546).then(r.bind(r,76479))})},{key:"wistia",name:"Wistia",canPlay:a.canPlay.wistia,lazyPlayer:(0,n.lazy)(function(){return r.e(8055).then(r.bind(r,13134))})},{key:"twitch",name:"Twitch",canPlay:a.canPlay.twitch,lazyPlayer:(0,n.lazy)(function(){return r.e(6216).then(r.bind(r,89743))})},{key:"dailymotion",name:"DailyMotion",canPlay:a.canPlay.dailymotion,lazyPlayer:(0,n.lazy)(function(){return r.e(7596).then(r.bind(r,65134))})},{key:"mixcloud",name:"Mixcloud",canPlay:a.canPlay.mixcloud,lazyPlayer:(0,n.lazy)(function(){return r.e(4667).then(r.bind(r,99734))})},{key:"vidyard",name:"Vidyard",canPlay:a.canPlay.vidyard,lazyPlayer:(0,n.lazy)(function(){return r.e(8888).then(r.bind(r,27287))})},{key:"kaltura",name:"Kaltura",canPlay:a.canPlay.kaltura,lazyPlayer:(0,n.lazy)(function(){return r.e(261).then(r.bind(r,49289))})},{key:"file",name:"FilePlayer",canPlay:a.canPlay.file,canEnablePIP:function(e){return a.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,o.supportsWebKitPresentationMode)())&&!a.AUDIO_EXTENSIONS.test(e)},lazyPlayer:(0,n.lazy)(function(){return r.e(6011).then(r.bind(r,33364))})}];t.default=i},29448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultProps=t.propTypes=void 0;var n,o=(n=r(45697))&&n.__esModule?n:{default:n},a=o.default.string,i=o.default.bool,l=o.default.number,u=o.default.array,c=o.default.oneOfType,s=o.default.shape,f=o.default.object,y=o.default.func,p=o.default.node,d={url:c([a,u,f]),playing:i,loop:i,controls:i,volume:l,muted:i,playbackRate:l,width:c([a,l]),height:c([a,l]),style:f,progressInterval:l,playsinline:i,pip:i,stopOnUnmount:i,light:c([i,a,f]),playIcon:p,previewTabIndex:l,fallback:p,oEmbedUrl:a,wrapper:c([a,y,s({render:y.isRequired})]),config:s({soundcloud:s({options:f}),youtube:s({playerVars:f,embedOptions:f,onUnstarted:y}),facebook:s({appId:a,version:a,playerId:a,attributes:f}),dailymotion:s({params:f}),vimeo:s({playerOptions:f,title:a}),file:s({attributes:f,tracks:u,forceVideo:i,forceAudio:i,forceHLS:i,forceSafariHLS:i,forceDASH:i,forceFLV:i,hlsOptions:f,hlsVersion:a,dashVersion:a,flvVersion:a}),wistia:s({options:f,playerId:a,customControls:u}),mixcloud:s({options:f}),twitch:s({options:f,playerId:a}),vidyard:s({options:f})}),onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y};t.propTypes=d;var h=function(){};t.defaultProps={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:h},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0"},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:h,onStart:h,onPlay:h,onPause:h,onBuffer:h,onBufferEnd:h,onEnded:h,onError:h,onDuration:h,onSeek:h,onPlaybackRateChange:h,onProgress:h,onClickPreview:h,onEnablePIP:h,onDisablePIP:h}},56281:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseStartTime=function(e){return f(e,l)},t.parseEndTime=function(e){return f(e,u)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&")},t.getSDK=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.default,i=y(t);return i&&o(i)?Promise.resolve(i):new Promise(function(n,o){if(p[e]){p[e].push({resolve:n,reject:o});return}p[e]=[{resolve:n,reject:o}];var i=function(t){p[e].forEach(function(e){return e.resolve(t)})};if(r){var l=window[r];window[r]=function(){l&&l(),i(y(t))}}a(e,function(n){n?(p[e].forEach(function(e){return e.reject(n)}),p[e]=null):r||i(y(t))})})},t.getConfig=function(e,t){return(0,o.default)(t.config,e.config)},t.omit=function(e){for(var t,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var a=(t=[]).concat.apply(t,n),i={},l=Object.keys(e),u=0;u<l.length;u++){var c=l[u];-1===a.indexOf(c)&&(i[c]=e[c])}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var r="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c – ");return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isMediaStream=function(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream},t.isBlobUrl=function(e){return/^blob:/.test(e)},t.supportsWebKitPresentationMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video"),t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t};var n=a(r(49090)),o=a(r(9996));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var l=/[?&#](?:start|t)=([0-9hms]+)/,u=/[?&#]end=([0-9hms]+)/,c=/(\d+)(h|m|s)/g,s=/^\d+$/;function f(e,t){if(!(e instanceof Array)){var r=e.match(t);if(r){var n=r[1];if(n.match(c))return function(e){for(var t=0,r=c.exec(e);null!==r;){var n,o=function(e){if(Array.isArray(e))return e}(n=r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(n,3)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}}(n,3)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=o[1],l=o[2];"h"===l&&(t+=3600*parseInt(a,10)),"m"===l&&(t+=60*parseInt(a,10)),"s"===l&&(t+=parseInt(a,10)),r=c.exec(e)}return t}(n);if(s.test(n))return parseInt(n)}}}function y(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}var p={}}}]);
//# sourceMappingURL=6310.99c2b16e2e379270.js.map