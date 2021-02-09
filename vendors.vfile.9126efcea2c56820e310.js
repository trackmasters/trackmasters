(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{157:function(t,e,n){"use strict";t.exports=n(158)},158:function(t,e,n){"use strict";var i=n(159),r=n(160);t.exports=r,r.prototype.message=function(t,e,n){var r=new i(t,e,n);this.path&&(r.name=this.path+":"+r.name,r.file=this.path);return r.fatal=!1,this.messages.push(r),r},r.prototype.info=function(){var t=this.message.apply(this,arguments);return t.fatal=null,t},r.prototype.fail=function(){var t=this.message.apply(this,arguments);throw t.fatal=!0,t}},160:function(t,e,n){"use strict";var i=n(161),r=n(162),o=n(163);t.exports=h;var s={}.hasOwnProperty,a=["history","path","basename","stem","extname","dirname"];function h(t){var e,n;if(t){if("string"==typeof t||o(t))t={contents:t};else if("message"in t&&"messages"in t)return t}else t={};if(!(this instanceof h))return new h(t);for(this.data={},this.messages=[],this.history=[],this.cwd=r.cwd(),n=-1;++n<a.length;)e=a[n],s.call(t,e)&&(this[e]=t[e]);for(e in t)a.indexOf(e)<0&&(this[e]=t[e])}function f(t,e){if(t&&t.indexOf(i.sep)>-1)throw new Error("`"+e+"` cannot be a path: did not expect `"+i.sep+"`")}function c(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function u(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}h.prototype.toString=function(t){return(this.contents||"").toString(t)},Object.defineProperty(h.prototype,"path",{get:function(){return this.history[this.history.length-1]},set:function(t){c(t,"path"),this.path!==t&&this.history.push(t)}}),Object.defineProperty(h.prototype,"dirname",{get:function(){return"string"==typeof this.path?i.dirname(this.path):void 0},set:function(t){u(this.path,"dirname"),this.path=i.join(t||"",this.basename)}}),Object.defineProperty(h.prototype,"basename",{get:function(){return"string"==typeof this.path?i.basename(this.path):void 0},set:function(t){c(t,"basename"),f(t,"basename"),this.path=i.join(this.dirname||"",t)}}),Object.defineProperty(h.prototype,"extname",{get:function(){return"string"==typeof this.path?i.extname(this.path):void 0},set:function(t){if(f(t,"extname"),u(this.path,"extname"),t){if(46!==t.charCodeAt(0))throw new Error("`extname` must start with `.`");if(t.indexOf(".",1)>-1)throw new Error("`extname` cannot contain multiple dots")}this.path=i.join(this.dirname,this.stem+(t||""))}}),Object.defineProperty(h.prototype,"stem",{get:function(){return"string"==typeof this.path?i.basename(this.path,this.extname):void 0},set:function(t){c(t,"stem"),f(t,"stem"),this.path=i.join(this.dirname||"",t+(this.extname||""))}})},161:function(t,e,n){"use strict";function i(t){var e,n;return r(t),e=47===t.charCodeAt(0),(n=function(t,e){var n,i,r="",o=0,s=-1,a=0,h=-1;for(;++h<=t.length;){if(h<t.length)n=t.charCodeAt(h);else{if(47===n)break;n=47}if(47===n){if(s===h-1||1===a);else if(s!==h-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){if((i=r.lastIndexOf("/"))!==r.length-1){i<0?(r="",o=0):(r=r.slice(0,i),o=r.length-1-r.lastIndexOf("/")),s=h,a=0;continue}}else if(r.length){r="",o=0,s=h,a=0;continue}e&&(r=r.length?r+"/..":"..",o=2)}else r.length?r+="/"+t.slice(s+1,h):r=t.slice(s+1,h),o=h-s-1;s=h,a=0}else 46===n&&a>-1?a++:a=-1}return r}(t,!e)).length||e||(n="."),n.length&&47===t.charCodeAt(t.length-1)&&(n+="/"),e?"/"+n:n}function r(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}e.basename=function(t,e){var n,i,o,s,a=0,h=-1;if(void 0!==e&&"string"!=typeof e)throw new TypeError('"ext" argument must be a string');if(r(t),n=t.length,void 0===e||!e.length||e.length>t.length){for(;n--;)if(47===t.charCodeAt(n)){if(o){a=n+1;break}}else h<0&&(o=!0,h=n+1);return h<0?"":t.slice(a,h)}if(e===t)return"";i=-1,s=e.length-1;for(;n--;)if(47===t.charCodeAt(n)){if(o){a=n+1;break}}else i<0&&(o=!0,i=n+1),s>-1&&(t.charCodeAt(n)===e.charCodeAt(s--)?s<0&&(h=n):(s=-1,h=i));a===h?h=i:h<0&&(h=t.length);return t.slice(a,h)},e.dirname=function(t){var e,n,i;if(r(t),!t.length)return".";e=-1,i=t.length;for(;--i;)if(47===t.charCodeAt(i)){if(n){e=i;break}}else n||(n=!0);return e<0?47===t.charCodeAt(0)?"/":".":1===e&&47===t.charCodeAt(0)?"//":t.slice(0,e)},e.extname=function(t){var e,n,i,o=-1,s=0,a=-1,h=0;r(t),i=t.length;for(;i--;)if(47!==(n=t.charCodeAt(i)))a<0&&(e=!0,a=i+1),46===n?o<0?o=i:1!==h&&(h=1):o>-1&&(h=-1);else if(e){s=i+1;break}if(o<0||a<0||0===h||1===h&&o===a-1&&o===s+1)return"";return t.slice(o,a)},e.join=function(){var t,e=-1;for(;++e<arguments.length;)r(arguments[e]),arguments[e]&&(t=void 0===t?arguments[e]:t+"/"+arguments[e]);return void 0===t?".":i(t)},e.sep="/"},162:function(t,e,n){"use strict";e.cwd=function(){return"/"}},163:function(t,e){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}}}]);
//# sourceMappingURL=vendors.vfile.9126efcea2c56820e310.js.map