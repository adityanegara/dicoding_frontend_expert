(()=>{var t={517:()=>{function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function o(t){var n="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return i(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function i(t,n,e){return(i=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(y,t);var o,i,f,l,s,p=(o=y,i=u(),function(){var t,n=a(o);if(i){var e=a(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return r(this,t)});function y(){return n(this,y),p.apply(this,arguments)}return f=y,(l=[{key:"connectedCallback",value:function(){this.title=this.getAttribute("title")||null,this.description=this.getAttribute("description")||null,this.buttonCaption=this.getAttribute("button-caption")||null,this.render()}},{key:"render",value:function(){this.innerHTML='<div class="hero-container">\n        <h2 tabindex = "0">'.concat(this.title,'</h2>\n        <h3 tabindex = "0">').concat(this.description,'</h3>\n        <button aria-label="Download Button " tabindex = "0">').concat(this.buttonCaption,"</button>\n        </div>")}}])&&e(f.prototype,l),s&&e(f,s),y}(o(HTMLElement));customElements.define("hero-container",f)},165:()=>{function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function o(t){var n="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return i(t,arguments,a(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function i(t,n,e){return(i=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&c(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}(y,t);var o,i,f,l,s,p=(o=y,i=u(),function(){var t,n=a(o);if(i){var e=a(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return r(this,t)});function y(){return n(this,y),p.apply(this,arguments)}return f=y,(l=[{key:"navbarLink",set:function(t){this._navbarLink=t,this.render()}},{key:"render",value:function(){this.innerHTML=" <li class ='hover-underline-animation'>\n            <a id = \"".concat(this._navbarLink.id,'" tabindex = "').concat(this._navbarLink.tabindex,'" href = "').concat(this._navbarLink.href,'"> ').concat(this._navbarLink.caption," </a>\n          </li>\n        ")}}])&&e(f.prototype,l),s&&e(f,s),y}(o(HTMLElement));customElements.define("navbar-item",f)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}(()=>{"use strict";e(165);function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):e}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function u(t,n,e){return(u=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(y,t);var e,i,u,l,s,p=(e=y,i=c(),function(){var t,n=f(e);if(i){var r=f(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return o(this,t)});function y(){return n(this,y),p.apply(this,arguments)}return u=y,(l=[{key:"navbarLinks",set:function(t){console.log("set"),this._navbarLinks=t,this.render()}},{key:"render",value:function(){var t=this;this._navbarLinks.forEach((function(n){var e=document.createElement("navbar-item");e.navbarLink=n,t.appendChild(e)}));var n='\n        <div class = "logo">\n            <h1 tabindex = "0">ROKU</h1>\n        </div> \n\n        <button class = "burger" data-open = "false" aria-label = "To Navigation"></button>\n            <ul class = \'nav-links\'>\n                '.concat(this.innerHTML,"\n            </ul>\n    \n       \n        ");this.innerHTML=n}}])&&r(u.prototype,l),s&&r(u,s),y}(i(HTMLElement));customElements.define("navbar-list",l);e(517);var s,p,y,b=function(t,n,e){t.classList.toggle("nav-active"),n.forEach((function(t,n){t.style.animation?t.style.animation="":t.style.animation="navLinkFade 0.5s ease forwards ".concat(n/7+.5,"s")})),e.classList.toggle("toggle"),"false"==e.dataset.open?e.setAttribute("data-open","true"):e.setAttribute("data-open","false"),console.log(e.dataset.open)};!function(t){var n=document.getElementById("nav-container"),e=document.createElement("navbar-list");e.navbarLinks=t,console.log(e),n.appendChild(e)}([{id:1,href:"/",caption:"Home",tabindex:0},{id:2,href:"#",caption:"Favorites",tabindex:0},{id:3,href:"https://github.com/adityanegara",caption:"About",tabindex:0}]),s=document.querySelector(".burger"),p=document.querySelector(".nav-links"),y=document.querySelectorAll(".nav-links li"),document.getElementById("1").addEventListener("focus",(function(){window.matchMedia("(max-width: 768px)").matches&&"false"==s.dataset.open&&b(p,y,s)})),s.addEventListener("click",(function(){b(p,y,s)}))})()})();