!function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(e);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={1:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([122,0]),n()}({122:function(t,e,n){n(87),n(294),t.exports=n(315)},294:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(295),a=r(n(17));r(n(121)).default.render(a.default.createElement(o.HomeHOC,null),document.getElementById("mount"))},295:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,s)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=0<(o=i.trys).length&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=s(n(17)),u=n(297);n(86);var l=n(298);n(300);var f=n(301),p=n(305),d=n(306),m=function(t){function e(e){var n=t.call(this,e)||this;return n.getMountains=function(){return a(n,void 0,void 0,function(){var t,e;return i(this,function(n){switch(n.label){case 0:return t={type:"GET",url:"https://localhost:44347/api/Mountain/GetMountainsAsync",data:null,headers:null},[4,u.request(t)];case 1:return e=n.sent(),[2,JSON.parse(e.response)]}})})},n.componentDidMount=function(){return a(n,void 0,void 0,function(){var t,e;return i(this,function(n){switch(n.label){case 0:return t=this.setState,e={},[4,this.getMountains()];case 1:return t.apply(this,[(e.skiResorts=n.sent(),e)]),[2]}})})},n.state={skiResorts:[]},n}return o(e,t),e.prototype.render=function(){return c.default.createElement("div",{className:"home-hoc"},c.default.createElement("div",{className:"welcome"},c.default.createElement("div",{className:"welcome__image-container"},c.default.createElement("img",{className:"welcome__image",src:"/images/city.jpg"})),c.default.createElement("div",{className:"welcome__pieces"},c.default.createElement("div",{className:"welcome__navigation"},c.default.createElement("div",{className:"welcome__logo-container"},c.default.createElement("img",{className:"welcome__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1024px-Placeholder_no_text.svg.png"})),c.default.createElement("div",{className:"welcome__navigation-container"},c.default.createElement(f.NavigationBar,{navigationItems:[new p.NavigationLink("/Mountains","Mountains",null),new p.NavigationLink("/Forums","Forums",null),new p.NavigationLink("/AboutUs","About Us",null)]}))),c.default.createElement("div",{className:"welcome__slogan-container"},c.default.createElement("p",{className:"welcome__slogan"},"Be The"),c.default.createElement("p",{className:"welcome__slogan"},"First"),c.default.createElement("p",{className:"welcome__slogan"},"On The Slopes")),c.default.createElement("div",{className:"welcome__button-container"},c.default.createElement(l.Button,{size:"godzilla",text:"Find Users",onClick:function(){}})))),c.default.createElement("div",{className:"section"},c.default.createElement("h2",{className:"section__title"},"Recommended Mountains"),c.default.createElement(d.SkiResortCarousel,{skiResorts:this.state.skiResorts})))},e}(c.default.Component);e.HomeHOC=m},297:function(t,e,n){"use strict";function r(t,e){var n=new URL(t);return e.forEach(function(t){n.searchParams.append(Object.keys(t)[0],t[Object.keys(t)[0]])}),n.href}Object.defineProperty(e,"__esModule",{value:!0}),e.getCompleteUrl=r,e.request=function(t){return new Promise(function(e,n){var o=new XMLHttpRequest;o.open(t.type,null!==t.data?r(t.url,t.data):t.url,!0),t.headers&&Object.keys(t.headers).forEach(function(e){o.setRequestHeader(e,t.headers[e])}),o.onload=function(){200<=o.status&&o.status<=300?e({status:o.status,response:o.response}):n({status:o.status,response:o.response})},t.type,o.send()})}},298:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(17));n(299);var s=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.render=function(){var t=this;return i.default.createElement("button",{type:"button",className:"button "+this.props.size,onClick:function(){t.props.onClick()}},this.props.text)},e}(i.default.Component);e.Button=s},299:function(t,e,n){},300:function(t,e,n){},301:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),n(302);var i=a(n(17)),s=n(303),c=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.render=function(){return i.default.createElement("div",{className:"navigation-bar"},this.props.navigationItems.map(function(t,e){return i.default.createElement(s.Link,{link:t,key:e})}))},e}(i.default.Component);e.NavigationBar=c},302:function(t,e,n){},303:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),n(304);var i=a(n(17)),s=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.render=function(){return i.default.createElement("div",{className:"link"},i.default.createElement("a",{href:this.props.link.href},this.props.link.text))},e}(i.default.Component);e.Link=s},304:function(t,e,n){},305:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.NavigationLink=function(t,e,n){this.href=t,this.text=e,this.iconPath=n}},306:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(17)),s=n(307);n(311);var c=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.render=function(){return console.log("from carousel"),console.log(this.props.skiResorts),i.default.createElement("div",{className:"ski-resort-carousel"},i.default.createElement("div",{className:"mountains"},null!=this.props.skiResorts&&null!=this.props.skiResorts?this.props.skiResorts.map(function(t,e){return i.default.createElement("div",{key:e,className:"mountain"},i.default.createElement(s.SkiResortImageCard,{skiResort:t,key:e}))}):null))},e}(i.default.Component);e.SkiResortCarousel=c},307:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),n(308);var i=a(n(17)),s=n(309),c=function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return o(e,t),e.prototype.render=function(){return console.log("from image card"),console.log(this.props.skiResort),i.default.createElement("div",{className:"image-card"},i.default.createElement("img",{className:"image-card__image",src:this.props.skiResort.imagePath}),i.default.createElement("div",{className:"image-card__details"},i.default.createElement("div",{className:"image-card__top"},i.default.createElement("p",{className:"image-card__name"},this.props.skiResort.name),i.default.createElement("div",{className:"image-card__rating"},i.default.createElement(s.RatingIcon,{filledState:100}),i.default.createElement(s.RatingIcon,{filledState:100}),i.default.createElement(s.RatingIcon,{filledState:100}),i.default.createElement(s.RatingIcon,{filledState:50}),i.default.createElement(s.RatingIcon,{filledState:0}))),i.default.createElement("div",{className:"image-card__middle"},i.default.createElement("div",{className:"image-card__tags"},null!==this.props.skiResort.tags&&void 0!==this.props.skiResort.tags?this.props.skiResort.tags.map(function(t,e){return i.default.createElement("div",{className:"image-card__tag",key:e},t)}):null)),i.default.createElement("div",{className:"image-card__bottom"},i.default.createElement("a",{className:"image-card__learn-more",href:this.props.skiResort.mountainHref},"Learn More"))))},e}(i.default.Component);e.SkiResortImageCard=c},308:function(t,e,n){},309:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0}),n(310);var i=a(n(17)),s=function(t){function e(e){var n=t.call(this,e)||this;return n._refMount=i.createRef(),n.getSvgElement=function(){return(new DOMParser).parseFromString('<div class="rating-icon-container"><svg class="rating-icon-source" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><g id="ratingIconPath"><path d="M12 48 L56 48 L40 22 L36 32 L26 16 Z" /></g><linearGradient id="emptyGradient"><stop stop-opacity="1" offset="50%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="50%"></stop></linearGradient><linearGradient id="quarterGradient"><stop stop-opacity="1" offset="25%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="25%"></stop></linearGradient><linearGradient id="halfGradient"><stop stop-opacity="1" offset="50%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="50%"></stop></linearGradient><linearGradient id="halfQuarterGradient"><stop stop-opacity="1" offset="75%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="75%"></stop></linearGradient><linearGradient id="fullGradient"><stop stop-opacity="1" offset="100%" stop-color="#DD185F"></stop><stop stop-opacity="0" offset="100%"></stop></linearGradient></svg><div><svg class="rating-icons" viewBox="0 0 60 50"><use xlink: href="#ratingIconPath" class="rating-icon" x="0" y="0" /></svg></div></div>',"text/html").getElementsByClassName("rating-icon-container")[0]},n.addRating=function(t){var e=t.getElementsByClassName("rating-icon")[0];switch(n.props.filledState){case 0:e.classList.add("rating-icon--empty");break;case 25:e.classList.add("rating-icon--quarter");break;case 50:e.classList.add("rating-icon--half");break;case 75:e.classList.add("rating-icon--half-quarter");break;case 100:e.classList.add("rating-icon--full")}return t},n.state={},n}return o(e,t),e.prototype.componentDidMount=function(){var t=this.getSvgElement(),e=this.addRating(t);this._refMount.current.appendChild(e)},e.prototype.render=function(){return i.default.createElement("div",{className:"rating-icon-component",ref:this._refMount})},e}(i.default.Component);e.RatingIcon=s},310:function(t,e,n){},311:function(t,e,n){},315:function(t,e,n){},86:function(t,e,n){}});