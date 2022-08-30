(self["webpackChunkvue_mini_project"]=self["webpackChunkvue_mini_project"]||[]).push([[998],{9662:function(t,e,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},6077:function(t,e,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),s=n(3070),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7854),i=n(7976),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,v=n(7976),y=n(9518),_=n(7674),b=n(5112),w=n(9711),E=c.Int8Array,T=E&&E.prototype,I=c.Uint8ClampedArray,A=I&&I.prototype,k=E&&y(E),C=T&&y(T),S=Object.prototype,O=c.TypeError,N=b("toStringTag"),x=w("TYPED_ARRAY_TAG"),R=w("TYPED_ARRAY_CONSTRUCTOR"),D=o&&!!_&&"Opera"!==d(c.opera),L=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||h(P,e)||h(M,e)},j=function(t){if(!l(t))return!1;var e=d(t);return h(P,e)||h(M,e)},$=function(t){if(j(t))return t;throw O("Target is not a typed array")},F=function(t){if(u(t)&&(!_||v(k,t)))return t;throw O(f(t)+" is not a typed array constructor")},V=function(t,e,n,r){if(a){if(n)for(var i in P){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}C[t]&&!n||m(C,t,n?e:D&&T[t]||e,r)}},B=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in P)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(k[t]&&!n)return;try{return m(k,t,n?e:D&&k[t]||e)}catch(s){}}for(r in P)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in P)i=c[r],s=i&&i.prototype,s?p(s,R,i):D=!1;for(r in M)i=c[r],s=i&&i.prototype,s&&p(s,R,i);if((!D||!u(k)||k===Function.prototype)&&(k=function(){throw O("Incorrect invocation")},D))for(r in P)c[r]&&_(c[r],k);if((!D||!C||C===S)&&(C=k.prototype,D))for(r in P)c[r]&&_(c[r].prototype,C);if(D&&y(A)!==C&&_(A,C),a&&!h(C,N))for(r in L=!0,g(C,N,{get:function(){return l(this)?this[x]:void 0}}),P)c[r]&&p(c[r],x,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_CONSTRUCTOR:R,TYPED_ARRAY_TAG:L&&x,aTypedArray:$,aTypedArrayConstructor:F,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:B,isView:U,isTypedArray:j,TypedArray:k,TypedArrayPrototype:C}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(7854),i=n(614),s=n(8880),o=n(6339),a=n(3505);t.exports=function(t,e,n,c){var u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:e;return i(n)&&o(n,d,c),t===r?(l?t[e]=n:a(e,n),t):(u?!h&&t[e]&&(l=!0):delete t[e],l?t[e]=n:s(t,e,n),t)}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3505),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),i=n(1702),s=n(7293),o=n(4326),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},_=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),w=c(b.get),E=c(b.has),T=c(b.set);r=function(t,e){if(E(b,t))throw new g(m);return e.facade=t,T(b,t,e),e},i=function(t){return w(b,t)||{}},s=function(t){return E(b,t)}}else{var I=f("state");p[I]=!0,r=function(t,e){if(h(t,I))throw new g(m);return e.facade=t,l(t,I,e),e},i=function(t){return h(t,I)?t[I]:{}},s=function(t){return h(t,I)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:_}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),s=n(2597),o=n(3070).f,a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=!r((function(){return 8!==o((function(){}),"length",{value:8}).length})),f=String(String).split("String"),p=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&o(t,"name",{value:e,configurable:!0}),d&&n&&s(n,"arity")&&t.length!==n.arity&&o(t,"length",{value:n.arity});var r=l(t);return s(r,"source")||(r.source=f.join("string"==typeof e?e:"")),t};Function.prototype.toString=p((function(){return i(this)&&h(this).source||c(this)}),"toString")},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?y(r):_():y(r);var t=o.length;while(t--)delete b[f][o[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=i(t),n=new g,g[f]=null,n[m]=t):n=b(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";e.f=i?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(7854),i=n(2597),s=n(614),o=n(7908),a=n(6200),c=n(8544),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t,e,n){var r=n(7854),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!==r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),i=n(4488),s=r.Object;t.exports=function(t){return s(i(t))}},4590:function(t,e,n){var r=n(7854),i=n(3002),s=r.RangeError;t.exports=function(t,e){var n=i(t);if(n%e)throw s("Wrong offset");return n}},3002:function(t,e,n){var r=n(7854),i=n(9303),s=r.RangeError;t.exports=function(t){var e=i(t);if(e<0)throw s("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(7854),i=n(648),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t,e,n){var r=n(7854),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),m=n(9781),g=n(1913);t.exports=function(t,e,n,v){var y="stackTraceLimit",_=v?2:1,b=t.split("."),w=b[b.length-1],E=r.apply(null,b);if(E){var T=E.prototype;if(!g&&i(T,"cause")&&delete T.cause,!n)return E;var I=r("Error"),A=e((function(t,e){var n=h(v?e:t,void 0),r=v?new E(t):new E;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(T,this)&&l(r,this,A),arguments.length>_&&d(r,arguments[_]),r}));if(A.prototype=T,"Error"!==w?a?a(A,I):c(A,I,{name:!0}):m&&y in E&&(u(A,E,y),u(A,E,"prepareStackTrace")),c(A,E),!g)try{T.name!==w&&s(T,"name",w),T.constructor=A}catch(k){}return A}}},2262:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=i(this),n=s(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},6699:function(t,e,n){"use strict";var r=n(2109),i=n(1318).includes,s=n(7293),o=n(1223),a=s((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),r({global:!0,arity:1,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),r({target:a,stat:!0,arity:1,forced:u},n)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),i=n(1702),s=n(4488),o=n(9303),a=n(1340),c=n(7293),u=i("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(t){var e=a(s(this)),n=e.length,r=o(t),i=r>=0?r:n+r;return i<0||i>=n?void 0:u(e,i)}})},8675:function(t,e,n){"use strict";var r=n(260),i=n(6244),s=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=i(e),r=s(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!u((function(){var t=new Uint8ClampedArray(2);return i(f,t,{length:1,0:3},1),3!==t[1]})),v=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(g)return i(f,this,n,e);var r=this.length,s=o(n),u=0;if(s+e>r)throw l("Wrong length");while(u<s)this[e+u]=n[u++]}),!g||v)},2801:function(t,e,n){"use strict";var r=n(2109),i=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),u=n(9587),l=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",m=i("Error"),g=i(p),v=function(){c(this,y);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new g(e,n),i=m(e);return i.name=p,o(r,"stack",s(1,d(i.stack,1))),u(r,this,v),r},y=v.prototype=g.prototype,_="stack"in m(p),b="stack"in new g(1,2),w=_&&!b;r({global:!0,forced:f||w},{DOMException:w?v:g});var E=i(p),T=E.prototype;if(T.constructor!==E)for(var I in f||o(T,"constructor",s(1,E)),h)if(a(h,I)){var A=h[I],k=A.s;a(E,k)||o(E,k,s(6,A.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return u},L:function(){return a},LL:function(){return w},Mn:function(){return g},ZR:function(){return b},b$:function(){return f},d:function(){return p},eu:function(){return y},hl:function(){return v},m9:function(){return L},ne:function(){return N},pd:function(){return O},ru:function(){return d},tV:function(){return c},uI:function(){return h},vZ:function(){return A},w1:function(){return m},xO:function(){return C},xb:function(){return I},z$:function(){return l},zd:function(){return S}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return l().indexOf("Electron/")>=0}function m(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return l().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?E(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new b(r,o,n);return a}}function E(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(k(n)&&k(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function S(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function O(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){const n=new x(t,e);return n.subscribe.bind(n)}class x{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function R(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return s},Fl:function(){return Bt},IU:function(){return Ct},Jd:function(){return T},PG:function(){return Tt},SU:function(){return jt},Um:function(){return bt},WL:function(){return Ft},X$:function(){return C},X3:function(){return kt},XI:function(){return Pt},Xl:function(){return St},dq:function(){return Dt},iH:function(){return Lt},j:function(){return A},lk:function(){return I},qj:function(){return _t},qq:function(){return _},yT:function(){return At}});var r=n(2268);let i;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=i){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];c(i)&&!u(i)?i.delete(t):e[n++]=i,i.w&=~p,i.n&=~p}e.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=g,e=w;while(t){if(t===this)return;t=t.parent}try{return this.parent=g,g=this,w=!0,p=1<<++f,f<=m?l(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,w=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let w=!0;const E=[];function T(){E.push(w),w=!1}function I(){const t=E.pop();w=void 0===t||t}function A(t,e,n){if(w&&g){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const i=void 0;k(r,i)}}function k(t,e){let n=!1;f<=m?u(t)||(t.n|=p,n=!c(t)):n=!t.has(g),n&&(t.add(g),g.deps.push(t))}function C(t,e,n,i,s,o){const c=d.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=i)&&u.push(t)}));else switch(void 0!==n&&u.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(v)),(0,r._N)(t)&&u.push(c.get(y)));break;case"delete":(0,r.kJ)(t)||(u.push(c.get(v)),(0,r._N)(t)&&u.push(c.get(y)));break;case"set":(0,r._N)(t)&&u.push(c.get(v));break}if(1===u.length)u[0]&&S(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);S(a(t))}}function S(t,e){for(const n of(0,r.kJ)(t)?t:[...t])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(r.yk)),x=M(),R=M(!1,!0),D=M(!0),L=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,i=this.length;e<i;e++)A(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ct)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=Ct(this)[e].apply(this,t);return I(),n}})),t}function M(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?gt:mt:e?pt:ft).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(L,i))return Reflect.get(L,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?N.has(i):O(i))return a;if(t||A(n,"get",i),e)return a;if(Dt(a)){const t=!o||!(0,r.S0)(i);return t?a.value:a}return(0,r.Kn)(a)?t?wt(a):_t(a):a}}const U=$(),j=$(!0);function $(t=!1){return function(e,n,i,s){let o=e[n];if(It(o)&&Dt(o)&&!Dt(i))return!1;if(!t&&!It(i)&&(At(i)||(i=Ct(i),o=Ct(o)),!(0,r.kJ)(e)&&Dt(o)&&!Dt(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===Ct(s)&&(a?(0,r.aU)(i,o)&&C(e,"set",n,i,o):C(e,"add",n,i)),c}}function F(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&C(t,"delete",e,void 0,i),s}function V(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||A(t,"has",e),n}function B(t){return A(t,"iterate",(0,r.kJ)(t)?"length":v),Reflect.ownKeys(t)}const q={get:x,set:U,deleteProperty:F,has:V,ownKeys:B},H={get:D,set(t,e){return!0},deleteProperty(t,e){return!0}},z=(0,r.l7)({},q,{get:R,set:j}),W=t=>t,K=t=>Reflect.getPrototypeOf(t);function G(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Ct(t),s=Ct(e);e!==s&&!n&&A(i,"get",e),!n&&A(i,"get",s);const{has:o}=K(i),a=r?W:n?Nt:Ot;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=Ct(n),i=Ct(t);return t!==i&&!e&&A(r,"has",t),!e&&A(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Q(t,e=!1){return t=t["__v_raw"],!e&&A(Ct(t),"iterate",v),Reflect.get(t,"size",t)}function J(t){t=Ct(t);const e=Ct(this),n=K(e),r=n.has.call(e,t);return r||(e.add(t),C(e,"add",t,t)),this}function Y(t,e){e=Ct(e);const n=Ct(this),{has:i,get:s}=K(n);let o=i.call(n,t);o||(t=Ct(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&C(n,"set",t,e,a):C(n,"add",t,e),this}function Z(t){const e=Ct(this),{has:n,get:r}=K(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&C(e,"delete",t,void 0,s),o}function tt(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&C(t,"clear",void 0,void 0,n),r}function et(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Ct(s),a=e?W:t?Nt:Ot;return!t&&A(o,"iterate",v),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function nt(t,e,n){return function(...i){const s=this["__v_raw"],o=Ct(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?W:e?Nt:Ot;return!e&&A(o,"iterate",u?y:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return G(this,t)},get size(){return Q(this)},has:X,add:J,set:Y,delete:Z,clear:tt,forEach:et(!1,!1)},e={get(t){return G(this,t,!1,!0)},get size(){return Q(this)},has:X,add:J,set:Y,delete:Z,clear:tt,forEach:et(!1,!0)},n={get(t){return G(this,t,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!1)},r={get(t){return G(this,t,!0,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=nt(i,!1,!1),n[i]=nt(i,!0,!1),e[i]=nt(i,!1,!0),r[i]=nt(i,!0,!0)})),[t,n,e,r]}const[st,ot,at,ct]=it();function ut(t,e){const n=e?t?ct:at:t?ot:st;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const lt={get:ut(!1,!1)},ht={get:ut(!1,!0)},dt={get:ut(!0,!1)};const ft=new WeakMap,pt=new WeakMap,mt=new WeakMap,gt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function _t(t){return It(t)?t:Et(t,!1,q,lt,ft)}function bt(t){return Et(t,!1,z,ht,pt)}function wt(t){return Et(t,!0,H,dt,mt)}function Et(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=yt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function Tt(t){return It(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function At(t){return!(!t||!t["__v_isShallow"])}function kt(t){return Tt(t)||It(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function St(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Ot=t=>(0,r.Kn)(t)?_t(t):t,Nt=t=>(0,r.Kn)(t)?wt(t):t;function xt(t){w&&g&&(t=Ct(t),k(t.dep||(t.dep=a())))}function Rt(t,e){t=Ct(t),t.dep&&S(t.dep)}function Dt(t){return!(!t||!0!==t.__v_isRef)}function Lt(t){return Mt(t,!1)}function Pt(t){return Mt(t,!0)}function Mt(t,e){return Dt(t)?t:new Ut(t,e)}class Ut{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:Ot(t)}get value(){return xt(this),this._value}set value(t){t=this.__v_isShallow?t:Ct(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ot(t),Rt(this,t))}}function jt(t){return Dt(t)?t.value:t}const $t={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Dt(i)&&!Dt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ft(t){return Tt(t)?t:new Proxy(t,$t)}class Vt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _(t,(()=>{this._dirty||(this._dirty=!0,Rt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Ct(this);return xt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Vt(i,s,o||!s,n);return a}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Cn:function(){return V},FN:function(){return Sn},Fl:function(){return Hn},HY:function(){return Fe},JJ:function(){return J},Ko:function(){return yn},P$:function(){return ut},Q6:function(){return mt},U2:function(){return ht},Uk:function(){return ln},Us:function(){return Ee},WI:function(){return _n},Wm:function(){return on},Y3:function(){return E},Y8:function(){return ot},YP:function(){return et},_:function(){return sn},aZ:function(){return gt},bv:function(){return Ot},dD:function(){return F},f3:function(){return Y},h:function(){return zn},iD:function(){return Je},ic:function(){return xt},j4:function(){return Ye},kq:function(){return dn},lR:function(){return Le},m0:function(){return Z},nK:function(){return pt},uE:function(){return hn},up:function(){return Me},w5:function(){return B},wg:function(){return We},wy:function(){return pe}});n(6699),n(1703);var r=n(4870),i=n(2268);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let v=null,y=0;const _=Promise.resolve();let b=null,w=null;function E(t){const e=b||_;return t?e.then(this?t.bind(this):t):e}function T(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,i=R(h[r]);i<t?e=r+1:n=r}return e}function I(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||t===w||(null==t.id?h.push(t):h.splice(T(t.id),0,t),A())}function A(){u||l||(l=!0,b=_.then(D))}function k(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function C(t,e,n,r){(0,i.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),A()}function S(t){C(t,p,f,m)}function O(t){C(t,v,g,y)}function N(t,e=null){if(f.length){for(w=e,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,w=null,N(t,e)}}function x(t){if(g.length){const t=[...new Set(g)];if(g.length=0,v)return void v.push(...t);for(v=t,v.sort(((t,e)=>R(t)-R(e))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const R=t=>null==t.id?1/0:t.id;function D(t){l=!1,u=!0,N(t),h.sort(((t,e)=>R(t)-R(e)));i.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&s(t,null,14)}}finally{d=0,h.length=0,x(t),u=!1,b=null,(h.length||f.length||g.length)&&D(t)}}new Set;new Map;function L(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o?s=n.map((t=>t.trim())):e&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function P(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=P(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function M(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let U=null,j=null;function $(t){const e=U;return U=t,j=t&&t.type.__scopeId||null,e}function F(t){j=t}function V(){j=null}function B(t,e=U,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Xe(-1);const i=$(e),s=t(...n);return $(i),r._d&&Xe(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function q(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=t;let y,_;const b=$(t);try{if(4&n.shapeFlag){const t=s||r;y=fn(d.call(t,t,f,o,m,p,g)),_=l}else{const t=e;0,y=fn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),_=e.props?l:H(l)}}catch(E){He.length=0,a(E,t,1),y=on(Be)}let w=y;if(_&&!1!==v){const t=Object.keys(_),{shapeFlag:e}=w;t.length&&7&e&&(c&&t.some(i.tR)&&(_=z(_,c)),w=un(w,_))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,$(b),y}const H=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},z=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function W(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||K(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?K(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function K(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!M(n,s))return!0}return!1}function G({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const X=t=>t.__isSuspense;function Q(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):O(t)}function J(t,e){if(Cn){let n=Cn.provides;const r=Cn.parent&&Cn.parent.provides;r===n&&(n=Cn.provides=Object.create(r)),n[t]=e}else 0}function Y(t,e,n=!1){const r=Cn||U;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}function Z(t,e){return nt(t,null,e)}const tt={};function et(t,e,n){return nt(t,e,n)}function nt(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=Cn;let d,f,p=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,i.kJ)(t)?(m=!0,p=t.some(r.PG),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?st(t):(0,i.mf)(t)?s(t,h,2):void 0))):d=(0,i.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[g])}:i.dG,e&&a){const t=d;d=()=>st(t())}let g=t=>{f=b.onStop=()=>{s(t,h,4)}};if(Ln)return g=i.dG,e?n&&o(e,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let v=m?[]:tt;const y=()=>{if(b.active)if(e){const t=b.run();(a||p||(m?t.some(((t,e)=>(0,i.aU)(t,v[e]))):(0,i.aU)(t,v)))&&(f&&f(),o(e,h,3,[t,v===tt?void 0:v,g]),v=t)}else b.run()};let _;y.allowRecurse=!!e,_="sync"===c?y:"post"===c?()=>we(y,h&&h.suspense):()=>{!h||h.isMounted?S(y):y()};const b=new r.qq(d,_);return e?n?y():v=b.run():"post"===c?we(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function rt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?it(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=Cn;On(this);const c=nt(s,o.bind(r),n);return a?On(a):Nn(),c}function it(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function st(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))st(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)st(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{st(t,e)}));else if((0,i.PO)(t))for(const n in t)st(t[n],e);return t}function ot(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ot((()=>{t.isMounted=!0})),Rt((()=>{t.isUnmounting=!0})),t}const at=[Function,Array],ct={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},setup(t,{slots:e}){const n=Sn(),i=ot();let s;return()=>{const o=e.default&&mt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Be){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(i.isLeaving)return dt(a);const l=ft(a);if(!l)return dt(a);const h=ht(l,c,i,n);pt(l,h);const d=n.subTree,f=d&&ft(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==Be&&(!tn(l,f)||p)){const t=ht(f,c,i,n);if(pt(f,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},dt(a);"in-out"===u&&l.type!==Be&&(t.delayLeave=(t,e,n)=>{const r=lt(i,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ut=ct;function lt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ht(t,e,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:y,onAppearCancelled:_}=e,b=String(t.key),w=lt(n,t),E=(t,e)=>{t&&o(t,r,9,e)},T={mode:s,persisted:a,beforeEnter(e){let r=c;if(!n.isMounted){if(!i)return;r=g||c}e._leaveCb&&e._leaveCb(!0);const s=w[b];s&&tn(t,s)&&s.el._leaveCb&&s.el._leaveCb(),E(r,[e])},enter(t){let e=u,r=l,s=h;if(!n.isMounted){if(!i)return;e=v||u,r=y||l,s=_||h}let o=!1;const a=t._enterCb=e=>{o||(o=!0,E(e?s:r,[t]),T.delayedLeave&&T.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();E(d,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),E(n?m:p,[e]),e._leaveCb=void 0,w[i]===t&&delete w[i])};w[i]=t,f?(f(e,o),f.length<=1&&o()):o()},clone(t){return ht(t,e,n,r)}};return T}function dt(t){if(yt(t))return t=un(t),t.children=null,t}function ft(t){return yt(t)?t.children?t.children[0]:void 0:t}function pt(t,e){6&t.shapeFlag&&t.component?pt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Fe?(128&o.patchFlag&&i++,r=r.concat(mt(o.children,e,a))):(e||o.type!==Be)&&r.push(null!=a?un(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function gt(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const vt=t=>!!t.type.__asyncLoader;const yt=t=>t.type.__isKeepAlive;RegExp,RegExp;function _t(t,e){return(0,i.kJ)(t)?t.some((t=>_t(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function bt(t,e){Et(t,"a",e)}function wt(t,e){Et(t,"da",e)}function Et(t,e,n=Cn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(kt(e,r,n),n){let t=n.parent;while(t&&t.parent)yt(t.parent.vnode)&&Tt(r,e,n,t),t=t.parent}}function Tt(t,e,n,r){const s=kt(e,t,r,!0);Dt((()=>{(0,i.Od)(r[e],s)}),n)}function It(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function At(t){return 128&t.shapeFlag?t.ssContent:t}function kt(t,e,n=Cn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),On(n);const s=o(e,n,t,i);return Nn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ct=t=>(e,n=Cn)=>(!Ln||"sp"===t)&&kt(t,e,n),St=Ct("bm"),Ot=Ct("m"),Nt=Ct("bu"),xt=Ct("u"),Rt=Ct("bum"),Dt=Ct("um"),Lt=Ct("sp"),Pt=Ct("rtg"),Mt=Ct("rtc");function Ut(t,e=Cn){kt("ec",t,e)}let jt=!0;function $t(t){const e=qt(t),n=t.proxy,s=t.ctx;jt=!1,e.beforeCreate&&Vt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:T,renderTracked:I,renderTriggered:A,errorCaptured:k,serverPrefetch:C,expose:S,inheritAttrs:O,components:N,directives:x,filters:R}=e,D=null;if(h&&Ft(h,s,D,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(jt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Hn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Bt(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{J(e,t[e])}))}function L(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Vt(d,t,"c"),L(St,f),L(Ot,p),L(Nt,m),L(xt,g),L(bt,v),L(wt,y),L(Ut,k),L(Mt,I),L(Pt,A),L(Rt,b),L(Dt,E),L(Lt,C),(0,i.kJ)(S))if(S.length){const e=t.exposed||(t.exposed={});S.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=O&&(t.inheritAttrs=O),N&&(t.components=N),x&&(t.directives=x)}function Ft(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=Gt(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?Y(n.from||o,n.default,!0):Y(n.from||o):Y(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Vt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Bt(t,e,n,r){const s=r.includes(".")?it(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&et(s,n)}else if((0,i.mf)(t))et(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Bt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&et(s,r,t)}else 0}function qt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((t=>Ht(c,t,o,!0))),Ht(c,e,o)):c=e,s.set(e,c),c}function Ht(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ht(t,s,n,!0),i&&i.forEach((e=>Ht(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=zt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const zt={data:Wt,props:Qt,emits:Qt,methods:Qt,computed:Qt,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Qt,directives:Qt,watch:Jt,provide:Wt,inject:Kt};function Wt(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function Kt(t,e){return Qt(Gt(t),Gt(e))}function Gt(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qt(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function Jt(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=Xt(t[r],e[r]);return n}function Yt(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,en,1),t.propsDefaults=Object.create(null),te(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function Zt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;te(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ee(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=ee(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function te(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ee(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function ee(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(On(s),r=i[n]=t.call(null,e),Nn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ne(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=ne(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);re(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(re(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=oe(Boolean,r.type),n=oe(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function re(t){return"$"!==t[0]}function ie(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function se(t,e){return ie(t)===ie(e)}function oe(t,e){return(0,i.kJ)(e)?e.findIndex((e=>se(e,t))):(0,i.mf)(e)&&se(e,t)?0:-1}const ae=t=>"_"===t[0]||"$stable"===t,ce=t=>(0,i.kJ)(t)?t.map(fn):[fn(t)],ue=(t,e,n)=>{const r=B(((...t)=>ce(e(...t))),n);return r._c=!1,r},le=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ae(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=ue(s,n,r);else if(null!=n){0;const t=ce(n);e[s]=()=>t}}},he=(t,e)=>{const n=ce(e);t.slots.default=()=>n},de=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):le(e,t.slots={})}else t.slots={},e&&he(t,e);(0,i.Nj)(t.slots,en,1)},fe=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,le(e,s)),a=e}else e&&(he(t,e),a={default:1});if(o)for(const i in s)ae(i)||i in a||delete s[i]};function pe(t,e){const n=U;if(null===n)return t;const r=Vn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&st(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function me(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}function ge(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ve=0;function ye(t,e){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=ge(),o=new Set;let a=!1;const c=s.app={_uid:ve++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Wn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){const l=on(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Vn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function _e(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>_e(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(vt(o)&&!a)return;const c=4&o.shapeFlag?Vn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const s=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,t.k&&(f[t.k]=u))};u?(s.id=-1,we(s,n)):s()}else 0}}function be(){}const we=Q;function Ee(t){return Te(t)}function Te(t,e){be();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:v}=t,y=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!tn(t,e)&&(r=Z(t),K(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ve:_(t,e,n,r);break;case Be:b(t,e,n,r);break;case qe:null==t&&w(e,n,r,o);break;case Fe:P(t,e,n,r,i,s,o,a,c);break;default:1&h?A(t,e,n,r,i,s,o,a,c):6&h?M(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,et)}null!=l&&i&&_e(l,t&&t.ref,s,e||t,!e)},_=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=v(t.children,e,n,r,t.el,t.anchor)},E=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?C(e,n,r,i,s,o,a,c):R(t,e,i,s,o,a,c)},C=(t,e,n,r,o,u,l,h)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:_,patchFlag:b,dirs:w}=t;if(t.el&&void 0!==g&&-1===b)f=t.el=g(t.el);else{if(f=t.el=c(t.type,u,v&&v.is,v),8&y?d(f,t.children):16&y&&O(t.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&me(t,null,r,"created"),v){for(const e in v)"value"===e||(0,i.Gg)(e)||a(f,e,null,v[e],u,t.children,r,o,Y);"value"in v&&a(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&vn(p,r,t)}S(f,t,t.scopeId,l,r)}w&&me(t,null,r,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;E&&_.beforeEnter(f),s(f,e,n),((p=v&&v.onVnodeMounted)||E||w)&&we((()=>{p&&vn(p,r,t),E&&_.enter(f),w&&me(t,null,r,"mounted")}),o)},S=(t,e,n,r,i)=>{if(n&&m(t,n),r)for(let s=0;s<r.length;s++)m(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;S(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},O=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?pn(t[u]):fn(t[u]);y(null,c,e,n,r,i,s,o,a)}},R=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.kT,m=e.props||i.kT;let g;n&&Ie(n,!1),(g=m.onVnodeBeforeUpdate)&&vn(g,n,e,t),f&&me(e,t,n,"beforeUpdate"),n&&Ie(n,!0);const v=s&&"foreignObject"!==e.type;if(h?D(t.dynamicChildren,h,u,n,r,v,o):c||V(t,e,u,null,n,r,v,o,!1),l>0){if(16&l)L(u,e,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,Y)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||L(u,e,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&we((()=>{g&&vn(g,n,e,t),f&&me(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Fe||!tn(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},L=(t,e,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,Y)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,Y);"value"in r&&a(t,"value",n.value,r.value)}},P=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,r),s(d,n,r),O(e.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Ae(t,e,!0)):V(t,e,n,d,i,o,a,c,l)},M=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):U(e,n,r,i,s,o,c):j(t,e,c)},U=(t,e,n,r,i,s,o)=>{const a=t.component=kn(t,r,i);if(yt(t)&&(a.ctx.renderer=et),Pn(a),a.asyncDep){if(i&&i.registerDep(a,$),!t.el){const t=a.subTree=on(Be);b(null,t,e,n)}}else $(a,t,e,n,i,s,o)},j=(t,e,n)=>{const r=e.component=t.component;if(W(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,k(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},$=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Ie(t,!1),n?(n.el=l.el,F(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&vn(e,u,n,l),Ie(t,!0);const d=q(t);0;const p=t.subTree;t.subTree=d,y(p,d,f(p.el),Z(p),t,o,a),n.el=d.el,null===h&&G(t,d.el),s&&we(s,o),(e=n.props&&n.props.onVnodeUpdated)&&we((()=>vn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=vt(e);if(Ie(t,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&vn(r,d,e),Ie(t,!0),c&&rt){const n=()=>{t.subTree=q(t),rt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=q(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&we(h,o),!f&&(r=u&&u.onVnodeMounted)){const t=e;we((()=>vn(r,d,t)),o)}256&e.shapeFlag&&t.a&&we(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,(()=>I(t.update)),t.scope),h=t.update=l.run.bind(l);h.id=t.uid,Ie(t,!0),h()},F=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Zt(t,e.props,i,n),fe(t,e.children,n),(0,r.Jd)(),N(void 0,t.update),(0,r.lk)()},V=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void H(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Y(u,i,s),h!==u&&d(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):Y(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},B=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?pn(e[f]):fn(e[f]);y(t[f],r,n,null,s,o,a,c,u)}l>h?Y(t,s,o,!0,!1,d):O(e,n,r,s,o,a,c,u,d)},H=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?pn(e[l]):fn(e[l]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?pn(e[f]):fn(e[f]);if(!tn(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)y(null,e[l]=u?pn(e[l]):fn(e[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)K(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const t=e[l]=u?pn(e[l]):fn(e[l]);null!=t.key&&g.set(t.key,l)}let v,_=0;const b=f-m+1;let w=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(_>=b){K(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&tn(r,e[v])){i=v;break}void 0===i?K(r,s,o,!0):(T[i-m]=l+1,i>=E?E=i:w=!0,y(r,e[i],n,null,s,o,a,c,u),_++)}const I=w?ke(T):i.Z6;for(v=I.length-1,l=b-1;l>=0;l--){const t=m+l,i=e[t],d=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):w&&(v<0||l!==I[v]?z(i,n,d,2):v--)}}},z=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void z(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Fe){s(o,e,n);for(let t=0;t<u.length;t++)z(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===qe)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),we((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},K=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&_e(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!vt(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&vn(m,e,t),6&l)J(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&me(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):u&&(s!==Fe||h>0&&64&h)?Y(u,e,n,!1,!0):(s===Fe&&384&h||!i&&16&l)&&Y(c,e,n),r&&X(t)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&we((()=>{m&&vn(m,e,t),f&&me(t,null,e,"unmounted")}),n)},X=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Fe)return void Q(n,r);if(e===qe)return void T(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,K(a,t,e,n)),c&&we(c,e),we((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,r,i)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),x(),e._vnode=t},et={p:y,um:K,m:z,r:X,mt:U,mc:O,pc:V,pbc:D,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:ye(tt,nt)}}function Ie({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ae(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=pn(s[i]),e.el=t.el),n||Ae(t,e))}}function ke(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Ce=t=>t.__isTeleport,Se=t=>t&&(t.disabled||""===t.disabled),Oe=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,Ne=(t,e)=>{const n=t&&t.to;if((0,i.HD)(n)){if(e){const t=e(n);return t}return null}return n},xe={__isTeleport:!0,process(t,e,n,r,i,s,o,a,c,u){const{mc:l,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=u,v=Se(e.props);let{shapeFlag:y,children:_,dynamicChildren:b}=e;if(null==t){const t=e.el=m(""),u=e.anchor=m("");f(t,n,r),f(u,n,r);const h=e.target=Ne(e.props,p),d=e.targetAnchor=m("");h&&(f(d,h),o=o||Oe(h));const g=(t,e)=>{16&y&&l(_,t,e,i,s,o,a,c)};v?g(n,u):h&&g(h,d)}else{e.el=t.el;const r=e.anchor=t.anchor,l=e.target=t.target,f=e.targetAnchor=t.targetAnchor,m=Se(t.props),g=m?n:l,y=m?r:f;if(o=o||Oe(l),b?(d(t.dynamicChildren,b,g,i,s,o,a),Ae(t,e,!0)):c||h(t,e,g,y,i,s,o,a,!1),v)m||Re(e,n,r,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=Ne(e.props,p);t&&Re(e,t,null,u,0)}else m&&Re(e,l,f,u,1)}},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:d}=t;if(h&&s(l),(o||!Se(d))&&(s(u),16&a))for(let f=0;f<c.length;f++){const t=c[f];i(t,e,n,!0,!!t.dynamicChildren)}},move:Re,hydrate:De};function Re(t,e,n,{o:{insert:r},m:i},s=2){0===s&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:l}=t,h=2===s;if(h&&r(o,e,n),(!h||Se(l))&&16&c)for(let d=0;d<u.length;d++)i(u[d],e,n,2);h&&r(a,e,n)}function De(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},u){const l=e.target=Ne(e.props,c);if(l){const c=l._lpa||l.firstChild;16&e.shapeFlag&&(Se(e.props)?(e.anchor=u(o(t),e,a(t),n,r,i,s),e.targetAnchor=c):(e.anchor=o(t),e.targetAnchor=u(c,e,l,n,r,i,s)),l._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const Le=xe,Pe="components";function Me(t,e){return je(Pe,t,!0,e)||t}const Ue=Symbol();function je(t,e,n=!0,r=!1){const s=U||Cn;if(s){const n=s.type;if(t===Pe){const t=Bn(n);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=$e(s[t]||n[t],e)||$e(s.appContext[t],e);return!o&&r?n:o}}function $e(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}const Fe=Symbol(void 0),Ve=Symbol(void 0),Be=Symbol(void 0),qe=Symbol(void 0),He=[];let ze=null;function We(t=!1){He.push(ze=t?null:[])}function Ke(){He.pop(),ze=He[He.length-1]||null}let Ge=1;function Xe(t){Ge+=t}function Qe(t){return t.dynamicChildren=Ge>0?ze||i.Z6:null,Ke(),Ge>0&&ze&&ze.push(t),t}function Je(t,e,n,r,i,s){return Qe(sn(t,e,n,r,i,s,!0))}function Ye(t,e,n,r,i){return Qe(on(t,e,n,r,i,!0))}function Ze(t){return!!t&&!0===t.__v_isVNode}function tn(t,e){return t.type===e.type&&t.key===e.key}const en="__vInternal",nn=({key:t})=>null!=t?t:null,rn=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:U,r:t,k:e,f:!!n}:t:null;function sn(t,e=null,n=null,r=0,s=null,o=(t===Fe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nn(e),ref:e&&rn(e),scopeId:j,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(mn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Ge>0&&!a&&ze&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&ze.push(u),u}const on=an;function an(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Ue||(t=Be),Ze(t)){const r=un(t,e,!0);return n&&mn(r,n),r}if(qn(t)&&(t=t.__vccOpts),e){e=cn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:X(t)?128:Ce(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return sn(t,e,n,s,o,c,a,!0)}function cn(t){return t?(0,r.X3)(t)||en in t?(0,i.l7)({},t):t:null}function un(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?gn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&nn(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(rn(e)):[s,rn(e)]:rn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor};return u}function ln(t=" ",e=0){return on(Ve,null,t,e)}function hn(t,e){const n=on(qe,null,t);return n.staticCount=e,n}function dn(t="",e=!1){return e?(We(),Ye(Be,null,t)):on(Be,null,t)}function fn(t){return null==t||"boolean"===typeof t?on(Be):(0,i.kJ)(t)?on(Fe,null,t.slice()):"object"===typeof t?pn(t):on(Ve,null,String(t))}function pn(t){return null===t.el||t.memo?t:un(t)}function mn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),mn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||en in e?3===r&&U&&(1===U.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=U}}else(0,i.mf)(e)?(e={default:e,_ctx:U},n=32):(e=String(e),64&r?(n=16,e=[ln(e)]):n=8);t.children=e,t.shapeFlag|=n}function gn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function vn(t,e,n,r=null){o(t,e,7,[n,r])}function yn(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function _n(t,e,n={},r,i){if(U.isCE||U.parent&&vt(U.parent)&&U.parent.isCE)return on("slot","default"===e?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),We();const o=s&&bn(s(n)),a=Ye(Fe,{key:n.key||`_${e}`},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function bn(t){return t.some((t=>!Ze(t)||t.type!==Be&&!(t.type===Fe&&!bn(t.children))))?t:null}const wn=t=>t?xn(t)?Vn(t)||t.proxy:wn(t.parent):null,En=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wn(t.parent),$root:t=>wn(t.root),$emit:t=>t.emit,$options:t=>qt(t),$forceUpdate:t=>()=>I(t.update),$nextTick:t=>E.bind(t.proxy),$watch:t=>rt.bind(t)}),Tn={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];jt&&(c[e]=0)}}const d=En[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return s!==i.kT&&(0,i.RI)(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(En,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const In=ge();let An=0;function kn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||In,a={uid:An++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ne(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let Cn=null;const Sn=()=>Cn||U,On=t=>{Cn=t,t.scope.on()},Nn=()=>{Cn&&Cn.scope.off(),Cn=null};function xn(t){return 4&t.vnode.shapeFlag}let Rn,Dn,Ln=!1;function Pn(t,e=!1){Ln=e;const{props:n,children:r}=t.vnode,i=xn(t);Yt(t,n,i,e),de(t,r);const s=i?Mn(t,e):void 0;return Ln=!1,s}function Mn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Tn));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Fn(t):null;On(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),Nn(),(0,i.tI)(c)){if(c.then(Nn,Nn),e)return c.then((n=>{Un(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Un(t,c,e)}else jn(t,e)}function Un(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),jn(t,n)}function jn(t,e,n){const s=t.type;if(!t.render){if(!e&&Rn&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Rn(e,c)}}t.render=s.render||i.dG,Dn&&Dn(t)}On(t),(0,r.Jd)(),$t(t),(0,r.lk)(),Nn()}function $n(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function Fn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=$n(t))},slots:t.slots,emit:t.emit,expose:e}}function Vn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in En?En[n](t):void 0}}))}function Bn(t){return(0,i.mf)(t)&&t.displayName||t.name}function qn(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Hn=(t,e)=>(0,r.Fl)(t,e,Ln);function zn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Ze(e)?on(t,null,[e]):on(t,e):on(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ze(n)&&(n=[n]),on(t,e,n))}Symbol("");const Wn="3.2.33"},9242:function(t,e,n){"use strict";n.d(e,{D2:function(){return It},F8:function(){return At},W3:function(){return it},bM:function(){return gt},e8:function(){return pt},iM:function(){return Et},nr:function(){return ft},ri:function(){return Nt}});n(6699);var r=n(2268),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const i=c.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){for(const t in n)f(i,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const d=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);d.test(n)?t.setProperty((0,r.rs)(i),n.replace(d,""),"important"):t[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(t,e){const n=m[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return m[e]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in t)return m[e]=n}return e}const v="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function _(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[b,w]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const T=Promise.resolve(),I=()=>{E=0},A=()=>E||(T.then(I),E=b());function k(t,e,n,r){t.addEventListener(e,n,r)}function C(t,e,n,r){t.removeEventListener(e,n,r)}function S(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=N(e);if(r){const o=s[e]=x(r,i);k(t,n,o,a)}else o&&(C(t,n,o,a),s[e]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function N(t){let e;if(O.test(t)){let n;e={};while(n=t.match(O))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function x(t,e){const n=t=>{const r=t.timeStamp||b();(w||r>=n.attached-1)&&(0,i.$d)(R(t,n.value),e,5,[t])};return n.value=t,n.attached=A(),n}function R(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const D=/^on[a-z]/,L=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?l(t,i,s):"style"===e?h(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||S(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):P(t,e,i,s))?_(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function P(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&D.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!D.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",U="animation",j=(t,{slots:e})=>(0,i.h)(i.P$,q(t),e);j.displayName="Transition";const $={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=j.props=(0,r.l7)({},i.P$.props,$),V=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},B=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function q(t){const e={};for(const r in t)r in $||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=H(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:I=_,onAppearCancelled:A=b}=e,k=(t,e,n)=>{K(t,e?h:c),K(t,e?l:a),n&&n()},C=(t,e)=>{K(t,p),K(t,f),e&&e()},S=t=>(e,n)=>{const r=t?I:_,s=()=>k(e,t,n);V(r,[e,s]),G((()=>{K(e,t?u:o),W(e,t?h:c),B(r)||Q(e,i,g,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){V(y,[t]),W(t,o),W(t,a)},onBeforeAppear(t){V(T,[t]),W(t,u),W(t,l)},onEnter:S(!1),onAppear:S(!0),onLeave(t,e){const n=()=>C(t,e);W(t,d),tt(),W(t,f),G((()=>{K(t,d),W(t,p),B(w)||Q(t,i,v,n)})),V(w,[t,n])},onEnterCancelled(t){k(t,!1),V(b,[t])},onAppearCancelled(t){k(t,!0),V(A,[t])},onLeaveCancelled(t){C(t),V(E,[t])}})}function H(t){if(null==t)return null;if((0,r.Kn)(t))return[z(t.enter),z(t.leave)];{const e=z(t);return[e,e]}}function z(t){const e=(0,r.He)(t);return e}function W(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function G(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let X=0;function Q(t,e,n,r){const i=t._endId=++X,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=J(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function J(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(M+"Delay"),s=r(M+"Duration"),o=Y(i,s),a=r(U+"Delay"),c=r(U+"Duration"),u=Y(a,c);let l=null,h=0,d=0;e===M?o>0&&(l=M,h=o,d=s.length):e===U?u>0&&(l=U,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?M:U:null,d=l?l===M?s.length:c.length:0);const f=l===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Y(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Z(e)+Z(t[n]))))}function Z(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function tt(){return document.body.offsetHeight}const et=new WeakMap,nt=new WeakMap,rt={name:"TransitionGroup",props:(0,r.l7)({},F,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!ct(o[0].el,n.vnode.el,e))return;o.forEach(st),o.forEach(ot);const r=o.filter(at);tt(),r.forEach((t=>{const n=t.el,r=n.style;W(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,K(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(t),u=q(c);let l=c.tag||i.HY;o=a,a=e.default?(0,i.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,i.nK)(e,(0,i.U2)(e,u,r,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,i.nK)(e,(0,i.U2)(e,u,r,n)),et.set(e,e.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}},it=rt;function st(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ot(t){nt.set(t,t.el.getBoundingClientRect())}function at(t){const e=et.get(t),n=nt.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function ct(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=J(r);return i.removeChild(r),s}const ut=t=>{const e=t.props["onUpdate:modelValue"];return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function lt(t){t.target.composing=!0}function ht(t){const e=t.target;e.composing&&(e.composing=!1,dt(e,"input"))}function dt(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ft={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=ut(s);const o=i||s.props&&"number"===s.props.type;k(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():o&&(i=(0,r.He)(i)),t._assign(i)})),n&&k(t,"change",(()=>{t.value=t.value.trim()})),e||(k(t,"compositionstart",lt),k(t,"compositionend",ht),k(t,"change",ht))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=ut(o),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},pt={deep:!0,created(t,e,n){t._assign=ut(n),k(t,"change",(()=>{const e=t._modelValue,n=yt(t),i=t.checked,s=t._assign;if((0,r.kJ)(e)){const t=(0,r.hq)(e,n),o=-1!==t;if(i&&!o)s(e.concat(n));else if(!i&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,r.DM)(e)){const t=new Set(e);i?t.add(n):t.delete(n),s(t)}else s(_t(t,i))}))},mounted:mt,beforeUpdate(t,e,n){t._assign=ut(n),mt(t,e,n)}};function mt(t,{value:e,oldValue:n},i){t._modelValue=e,(0,r.kJ)(e)?t.checked=(0,r.hq)(e,i.props.value)>-1:(0,r.DM)(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=(0,r.WV)(e,_t(t,!0)))}const gt={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=(0,r.DM)(e);k(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.He)(yt(t)):yt(t)));t._assign(t.multiple?s?new Set(e):e:e[0])})),t._assign=ut(i)},mounted(t,{value:e}){vt(t,e)},beforeUpdate(t,e,n){t._assign=ut(n)},updated(t,{value:e}){vt(t,e)}};function vt(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let i=0,s=t.options.length;i<s;i++){const s=t.options[i],o=yt(s);if(n)(0,r.kJ)(e)?s.selected=(0,r.hq)(e,o)>-1:s.selected=e.has(o);else if((0,r.WV)(yt(s),e))return void(t.selectedIndex!==i&&(t.selectedIndex=i))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function yt(t){return"_value"in t?t._value:t.value}function _t(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const bt=["ctrl","shift","alt","meta"],wt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>bt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Et=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=wt[e[t]];if(r&&r(n,e))return}return t(n,...r)},Tt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},It=(t,e)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return e.some((t=>t===i||Tt[t]===i))?t(n):void 0},At={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):kt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),kt(t,!0),r.enter(t)):r.leave(t,(()=>{kt(t,!1)})):kt(t,e))},beforeUnmount(t,{value:e}){kt(t,e)}};function kt(t,e){t.style.display=e?t._vod:"none"}const Ct=(0,r.l7)({patchProp:L},u);let St;function Ot(){return St||(St=(0,i.Us)(Ct))}const Nt=(...t)=>{const e=Ot().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=xt(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function xt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},2268:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return f},DM:function(){return R},E9:function(){return rt},F7:function(){return I},Gg:function(){return H},HD:function(){return P},He:function(){return et},Kn:function(){return U},NO:function(){return E},Nj:function(){return tt},Od:function(){return C},PO:function(){return B},Pq:function(){return a},RI:function(){return O},S0:function(){return q},W7:function(){return V},WV:function(){return m},Z6:function(){return b},_A:function(){return K},_N:function(){return x},aU:function(){return Y},dG:function(){return w},e1:function(){return s},fY:function(){return r},hR:function(){return J},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return Q},kJ:function(){return N},kT:function(){return _},l7:function(){return k},mf:function(){return L},rs:function(){return X},tI:function(){return j},tR:function(){return A},yA:function(){return c},yk:function(){return M},zw:function(){return v}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=P(r)?d(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return P(t)||U(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(P(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(U(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=m(t[r],e[r]);return n}function m(t,e){if(t===e)return!0;let n=D(t),r=D(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=N(t),r=N(e),n||r)return!(!n||!r)&&p(t,e);if(n=U(t),r=U(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function g(t,e){return t.findIndex((t=>m(t,e)))}const v=t=>P(t)?t:null==t?"":N(t)||U(t)&&(t.toString===$||!L(t.toString))?JSON.stringify(t,y,2):String(t),y=(t,e)=>e&&e.__v_isRef?y(t,e.value):x(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:!U(e)||N(e)||B(e)?e:String(e),_={},b=[],w=()=>{},E=()=>!1,T=/^on[^a-z]/,I=t=>T.test(t),A=t=>t.startsWith("onUpdate:"),k=Object.assign,C=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},S=Object.prototype.hasOwnProperty,O=(t,e)=>S.call(t,e),N=Array.isArray,x=t=>"[object Map]"===F(t),R=t=>"[object Set]"===F(t),D=t=>t instanceof Date,L=t=>"function"===typeof t,P=t=>"string"===typeof t,M=t=>"symbol"===typeof t,U=t=>null!==t&&"object"===typeof t,j=t=>U(t)&&L(t.then)&&L(t.catch),$=Object.prototype.toString,F=t=>$.call(t),V=t=>F(t).slice(8,-1),B=t=>"[object Object]"===F(t),q=t=>P(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),z=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},W=/-(\w)/g,K=z((t=>t.replace(W,((t,e)=>e?e.toUpperCase():"")))),G=/\B([A-Z])/g,X=z((t=>t.replace(G,"-$1").toLowerCase())),Q=z((t=>t.charAt(0).toUpperCase()+t.slice(1))),J=z((t=>t?`on${Q(t)}`:"")),Y=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},6265:function(t,e,n){t.exports=n(9435)},4951:function(t,e,n){"use strict";n(2801);var r=n(6642),i=n(6806),s=n(3833),o=n(4360),a=n(5047),c=n(5976),u=n(9896),l=n(8507),h=n(3303),d=n(6090),f=n(1874);t.exports=function(t){return new Promise((function(e,n){var p,m=t.data,g=t.headers,v=t.responseType;function y(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}r.isFormData(m)&&r.isStandardBrowserEnv()&&delete g["Content-Type"];var _=new XMLHttpRequest;if(t.auth){var b=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+w)}var E=a(t.baseURL,t.url);function T(){if(_){var r="getAllResponseHeaders"in _?c(_.getAllResponseHeaders()):null,s=v&&"text"!==v&&"json"!==v?_.response:_.responseText,o={data:s,status:_.status,statusText:_.statusText,headers:r,config:t,request:_};i((function(t){e(t),y()}),(function(t){n(t),y()}),o),_=null}}if(_.open(t.method.toUpperCase(),o(E,t.params,t.paramsSerializer),!0),_.timeout=t.timeout,"onloadend"in _?_.onloadend=T:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(T)},_.onabort=function(){_&&(n(new h("Request aborted",h.ECONNABORTED,t,_)),_=null)},_.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,t,_,_)),_=null},_.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||l;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new h(e,r.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,t,_)),_=null},r.isStandardBrowserEnv()){var I=(t.withCredentials||u(E))&&t.xsrfCookieName?s.read(t.xsrfCookieName):void 0;I&&(g[t.xsrfHeaderName]=I)}"setRequestHeader"in _&&r.forEach(g,(function(t,e){"undefined"===typeof m&&"content-type"===e.toLowerCase()?delete g[e]:_.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(_.withCredentials=!!t.withCredentials),v&&"json"!==v&&(_.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&_.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){_&&(n(!t||t&&t.type?new d:t),_.abort(),_=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),m||(m=null);var A=f(E);A&&-1===["http","https","file"].indexOf(A)?n(new h("Unsupported protocol "+A+":",h.ERR_BAD_REQUEST,t)):_.send(m)}))}},9435:function(t,e,n){"use strict";var r=n(6642),i=n(5955),s=n(7104),o=n(8186),a=n(7);function c(t){var e=new s(t),n=i(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n.create=function(e){return c(o(t,e))},n}var u=c(a);u.Axios=s,u.CanceledError=n(6090),u.CancelToken=n(6016),u.isCancel=n(5936),u.VERSION=n(4679).version,u.toFormData=n(8994),u.AxiosError=n(3303),u.Cancel=u.CanceledError,u.all=function(t){return Promise.all(t)},u.spread=n(5431),u.isAxiosError=n(786),t.exports=u,t.exports["default"]=u},6016:function(t,e,n){"use strict";n(1703);var r=n(6090);function i(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},i.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},i.source=function(){var t,e=new i((function(e){t=e}));return{token:e,cancel:t}},t.exports=i},6090:function(t,e,n){"use strict";var r=n(3303),i=n(6642);function s(t){r.call(this,null==t?"canceled":t,r.ERR_CANCELED),this.name="CanceledError"}i.inherits(s,r,{__CANCEL__:!0}),t.exports=s},5936:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},7104:function(t,e,n){"use strict";var r=n(6642),i=n(4360),s=n(999),o=n(6559),a=n(8186),c=n(5047),u=n(6298),l=u.validators;function h(t){this.defaults=t,this.interceptors={request:new s,response:new s}}h.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(i=i&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)})),!i){var h=[o,void 0];Array.prototype.unshift.apply(h,r),h=h.concat(c),s=Promise.resolve(e);while(h.length)s=s.then(h.shift(),h.shift());return s}var d=e;while(r.length){var f=r.shift(),p=r.shift();try{d=f(d)}catch(m){p(m);break}}try{s=o(d)}catch(m){return Promise.reject(m)}while(c.length)s=s.then(c.shift(),c.shift());return s},h.prototype.getUri=function(t){t=a(this.defaults,t);var e=c(t.baseURL,t.url);return i(e,t.params,t.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(a(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[t]=e(),h.prototype[t+"Form"]=e(!0)})),t.exports=h},3303:function(t,e,n){"use strict";n(1703);var r=n(6642);function i(t,e,n,r,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var s=i.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){o[t]={value:t}})),Object.defineProperties(i,o),Object.defineProperty(s,"isAxiosError",{value:!0}),i.from=function(t,e,n,o,a,c){var u=Object.create(s);return r.toFlatObject(t,u,(function(t){return t!==Error.prototype})),i.call(u,t.message,e,n,o,a),u.name=t.name,c&&Object.assign(u,c),u},t.exports=i},999:function(t,e,n){"use strict";var r=n(6642);function i(){this.handlers=[]}i.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},5047:function(t,e,n){"use strict";var r=n(4777),i=n(2381);t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},6559:function(t,e,n){"use strict";var r=n(6642),i=n(3756),s=n(5936),o=n(7),a=n(6090);function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){c(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return c(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(c(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},8186:function(t,e,n){"use strict";var r=n(6642);t.exports=function(t,e){e=e||{};var n={};function i(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function s(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(t[n],e[n])}function o(t){if(!r.isUndefined(e[t]))return i(void 0,e[t])}function a(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(void 0,e[n])}function c(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||s,i=e(t);r.isUndefined(i)&&e!==c||(n[t]=i)})),n}},6806:function(t,e,n){"use strict";var r=n(3303);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}},3756:function(t,e,n){"use strict";var r=n(6642),i=n(7);t.exports=function(t,e,n){var s=this||i;return r.forEach(n,(function(n){t=n.call(s,t,e)})),t}},7:function(t,e,n){"use strict";var r=n(6642),i=n(1446),s=n(3303),o=n(8507),a=n(8994),c={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function l(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(4951)),t}function h(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(t)}var d={transitional:o,adapter:l(),transformRequest:[function(t,e){if(i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t))return t;if(r.isArrayBufferView(t))return t.buffer;if(r.isURLSearchParams(t))return u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var n,s=r.isObject(t),o=e&&e["Content-Type"];if((n=r.isFileList(t))||s&&"multipart/form-data"===o){var c=this.env&&this.env.FormData;return a(n?{"files[]":t}:t,c&&new c)}return s||"application/json"===o?(u(e,"application/json"),h(t)):t}],transformResponse:[function(t){var e=this.transitional||d.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(o){if("SyntaxError"===a.name)throw s.from(a,s.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1051)},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){d.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){d.headers[t]=r.merge(c)})),t.exports=d},8507:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4679:function(t){t.exports={version:"0.27.2"}},5955:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},4360:function(t,e,n){"use strict";var r=n(6642);function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var o=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(i(e)+"="+i(t))})))})),s=o.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},2381:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},3833:function(t,e,n){"use strict";var r=n(6642);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,s,o){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},4777:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},786:function(t,e,n){"use strict";var r=n(6642);t.exports=function(t){return r.isObject(t)&&!0===t.isAxiosError}},9896:function(t,e,n){"use strict";var r=n(6642);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},1446:function(t,e,n){"use strict";var r=n(6642);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},1051:function(t){t.exports=null},5976:function(t,e,n){"use strict";var r=n(6642),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,o={};return t?(r.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(o[e]&&i.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},1874:function(t){"use strict";t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}},5431:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},8994:function(t,e,n){"use strict";n(1703);var r=n(6642);function i(t,e){e=e||new FormData;var n=[];function i(t){return null===t?"":r.isDate(t)?t.toISOString():r.isArrayBuffer(t)||r.isTypedArray(t)?"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function s(t,o){if(r.isPlainObject(t)||r.isArray(t)){if(-1!==n.indexOf(t))throw Error("Circular reference detected in "+o);n.push(t),r.forEach(t,(function(t,n){if(!r.isUndefined(t)){var a,c=o?o+"."+n:n;if(t&&!o&&"object"===typeof t)if(r.endsWith(n,"{}"))t=JSON.stringify(t);else if(r.endsWith(n,"[]")&&(a=r.toArray(t)))return void a.forEach((function(t){!r.isUndefined(t)&&e.append(c,i(t))}));s(t,c)}})),n.pop()}else e.append(o,i(t))}return s(t),e}t.exports=i},6298:function(t,e,n){"use strict";var r=n(4679).version,i=n(3303),s={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){s[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var o={};function a(t,e,n){if("object"!==typeof t)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);var r=Object.keys(t),s=r.length;while(s-- >0){var o=r[s],a=e[o];if(a){var c=t[o],u=void 0===c||a(c,o,t);if(!0!==u)throw new i("option "+o+" must be "+u,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+o,i.ERR_BAD_OPTION)}}s.transitional=function(t,e,n){function s(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,a){if(!1===t)throw new i(s(r," has been removed"+(e?" in "+e:"")),i.ERR_DEPRECATED);return e&&!o[r]&&(o[r]=!0,console.warn(s(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,a)}},t.exports={assertOptions:a,validators:s}},6642:function(t,e,n){"use strict";n(8675),n(3462);var r=n(5955),i=Object.prototype.toString,s=function(t){return function(e){var n=i.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function o(t){return t=t.toLowerCase(),function(e){return s(e)===t}}function a(t){return Array.isArray(t)}function c(t){return"undefined"===typeof t}function u(t){return null!==t&&!c(t)&&null!==t.constructor&&!c(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var l=o("ArrayBuffer");function h(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&l(t.buffer),e}function d(t){return"string"===typeof t}function f(t){return"number"===typeof t}function p(t){return null!==t&&"object"===typeof t}function m(t){if("object"!==s(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var g=o("Date"),v=o("File"),y=o("Blob"),_=o("FileList");function b(t){return"[object Function]"===i.call(t)}function w(t){return p(t)&&b(t.pipe)}function E(t){var e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||i.call(t)===e||b(t.toString)&&t.toString()===e)}var T=o("URLSearchParams");function I(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function A(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function k(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function C(){var t={};function e(e,n){m(t[n])&&m(e)?t[n]=C(t[n],e):m(e)?t[n]=C({},e):a(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)k(arguments[n],e);return t}function S(t,e,n){return k(e,(function(e,i){t[i]=n&&"function"===typeof e?r(e,n):e})),t}function O(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}function N(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function x(t,e,n){var r,i,s,o={};e=e||{};do{r=Object.getOwnPropertyNames(t),i=r.length;while(i-- >0)s=r[i],o[s]||(e[s]=t[s],o[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function R(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return-1!==r&&r===n}function D(t){if(!t)return null;var e=t.length;if(c(e))return null;var n=new Array(e);while(e-- >0)n[e]=t[e];return n}var L=function(t){return function(e){return t&&e instanceof t}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));t.exports={isArray:a,isArrayBuffer:l,isBuffer:u,isFormData:E,isArrayBufferView:h,isString:d,isNumber:f,isObject:p,isPlainObject:m,isUndefined:c,isDate:g,isFile:v,isBlob:y,isFunction:b,isStream:w,isURLSearchParams:T,isStandardBrowserEnv:A,forEach:k,merge:C,extend:S,trim:I,stripBOM:O,inherits:N,toFlatObject:x,kindOf:s,kindOfTest:o,endsWith:R,toArray:D,isTypedArray:L,isFileList:_}},3455:function(t,e,n){n(6699),n(1703),
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,n){t.exports=n()}(0,(function(){"use strict";const t=1e6,e=1e3,n="transitionend",r=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),i=e=>{do{e+=Math.floor(Math.random()*t)}while(document.getElementById(e));return e},s=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},o=t=>{const e=s(t);return e&&document.querySelector(e)?e:null},a=t=>{const e=s(t);return e?document.querySelector(e):null},c=t=>{if(!t)return 0;let{transitionDuration:n,transitionDelay:r}=window.getComputedStyle(t);const i=Number.parseFloat(n),s=Number.parseFloat(r);return i||s?(n=n.split(",")[0],r=r.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(r))*e):0},u=t=>{t.dispatchEvent(new Event(n))},l=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),h=t=>l(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,d=(t,e,n)=>{Object.keys(n).forEach((i=>{const s=n[i],o=e[i],a=o&&l(o)?"element":r(o);if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`)}))},f=t=>!(!l(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),p=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),m=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?m(t.parentNode):null},g=()=>{},v=t=>{t.offsetHeight},y=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},_=[],b=t=>{"loading"===document.readyState?(_.length||document.addEventListener("DOMContentLoaded",(()=>{_.forEach((t=>t()))})),_.push(t)):t()},w=()=>"rtl"===document.documentElement.dir,E=t=>{b((()=>{const e=y();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}}))},T=t=>{"function"===typeof t&&t()},I=(t,e,r=!0)=>{if(!r)return void T(t);const i=5,s=c(e)+i;let o=!1;const a=({target:r})=>{r===e&&(o=!0,e.removeEventListener(n,a),T(t))};e.addEventListener(n,a),setTimeout((()=>{o||u(e)}),s)},A=(t,e,n,r)=>{let i=t.indexOf(e);if(-1===i)return t[!n&&r?t.length-1:0];const s=t.length;return i+=n?1:-1,r&&(i=(i+s)%s),t[Math.max(0,Math.min(i,s-1))]},k=/[^.]*(?=\..*)\.|.*/,C=/\..*/,S=/::\d+$/,O={};let N=1;const x={mouseenter:"mouseover",mouseleave:"mouseout"},R=/^(mouseenter|mouseleave)/i,D=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(t,e){return e&&`${e}::${N++}`||t.uidEvent||N++}function P(t){const e=L(t);return t.uidEvent=e,O[e]=O[e]||{},O[e]}function M(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&H.off(t,r.type,e),e.apply(t,[r])}}function U(t,e,n){return function r(i){const s=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&H.off(t,i.type,e,n),n.apply(o,[i]);return null}}function j(t,e,n=null){const r=Object.keys(t);for(let i=0,s=r.length;i<s;i++){const s=t[r[i]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function $(t,e,n){const r="string"===typeof e,i=r?n:e;let s=q(t);const o=D.has(s);return o||(s=t),[r,i,s]}function F(t,e,n,r,i){if("string"!==typeof e||!t)return;if(n||(n=r,r=null),R.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r?r=t(r):n=t(n)}const[s,o,a]=$(e,n,r),c=P(t),u=c[a]||(c[a]={}),l=j(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=L(o,e.replace(k,"")),d=s?U(t,n,r):M(t,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,u[h]=d,t.addEventListener(a,d,s)}function V(t,e,n,r,i){const s=j(e[n],r,i);s&&(t.removeEventListener(n,s,Boolean(i)),delete e[n][s.uidEvent])}function B(t,e,n,r){const i=e[n]||{};Object.keys(i).forEach((s=>{if(s.includes(r)){const r=i[s];V(t,e,n,r.originalHandler,r.delegationSelector)}}))}function q(t){return t=t.replace(C,""),x[t]||t}const H={on(t,e,n,r){F(t,e,n,r,!1)},one(t,e,n,r){F(t,e,n,r,!0)},off(t,e,n,r){if("string"!==typeof e||!t)return;const[i,s,o]=$(e,n,r),a=o!==e,c=P(t),u=e.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void V(t,c,o,s,i?n:null)}u&&Object.keys(c).forEach((n=>{B(t,c,n,e.slice(1))}));const l=c[o]||{};Object.keys(l).forEach((n=>{const r=n.replace(S,"");if(!a||e.includes(r)){const e=l[n];V(t,c,o,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!==typeof e||!t)return null;const r=y(),i=q(e),s=e!==i,o=D.has(i);let a,c=!0,u=!0,l=!1,h=null;return s&&r&&(a=r.Event(e,n),r(t).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((t=>{Object.defineProperty(h,t,{get(){return n[t]}})})),l&&h.preventDefault(),u&&t.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},z=new Map,W={set(t,e,n){z.has(t)||z.set(t,new Map);const r=z.get(t);r.has(e)||0===r.size?r.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(t,e){return z.has(t)&&z.get(t).get(e)||null},remove(t,e){if(!z.has(t))return;const n=z.get(t);n.delete(e),0===n.size&&z.delete(t)}},K="5.1.3";class G{constructor(t){t=h(t),t&&(this._element=t,W.set(this._element,this.constructor.DATA_KEY,this))}dispose(){W.remove(this._element,this.constructor.DATA_KEY),H.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){I(t,e,n)}static getInstance(t){return W.get(h(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return K}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const X=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,r=t.NAME;H.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),p(this))return;const i=a(this)||this.closest(`.${r}`),s=t.getOrCreateInstance(i);s[e]()}))},Q="alert",J="bs.alert",Y=`.${J}`,Z=`close${Y}`,tt=`closed${Y}`,et="fade",nt="show";class rt extends G{static get NAME(){return Q}close(){const t=H.trigger(this._element,Z);if(t.defaultPrevented)return;this._element.classList.remove(nt);const e=this._element.classList.contains(et);this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),H.trigger(this._element,tt),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=rt.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}X(rt,"close"),E(rt);const it="button",st="bs.button",ot=`.${st}`,at=".data-api",ct="active",ut='[data-bs-toggle="button"]',lt=`click${ot}${at}`;class ht extends G{static get NAME(){return it}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ct))}static jQueryInterface(t){return this.each((function(){const e=ht.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function dt(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function ft(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}H.on(document,lt,ut,(t=>{t.preventDefault();const e=t.target.closest(ut),n=ht.getOrCreateInstance(e);n.toggle()})),E(ht);const pt={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${ft(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${ft(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=dt(t.dataset[n])})),e},getDataAttribute(t,e){return dt(t.getAttribute(`data-bs-${ft(e)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}},mt=3,gt={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const n=[];let r=t.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==mt)r.matches(e)&&n.push(r),r=r.parentNode;return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!p(t)&&f(t)))}},vt="carousel",yt="bs.carousel",_t=`.${yt}`,bt=".data-api",wt="ArrowLeft",Et="ArrowRight",Tt=500,It=40,At={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},kt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ct="next",St="prev",Ot="left",Nt="right",xt={[wt]:Nt,[Et]:Ot},Rt=`slide${_t}`,Dt=`slid${_t}`,Lt=`keydown${_t}`,Pt=`mouseenter${_t}`,Mt=`mouseleave${_t}`,Ut=`touchstart${_t}`,jt=`touchmove${_t}`,$t=`touchend${_t}`,Ft=`pointerdown${_t}`,Vt=`pointerup${_t}`,Bt=`dragstart${_t}`,qt=`load${_t}${bt}`,Ht=`click${_t}${bt}`,zt="carousel",Wt="active",Kt="slide",Gt="carousel-item-end",Xt="carousel-item-start",Qt="carousel-item-next",Jt="carousel-item-prev",Yt="pointer-event",Zt=".active",te=".active.carousel-item",ee=".carousel-item",ne=".carousel-item img",re=".carousel-item-next, .carousel-item-prev",ie=".carousel-indicators",se="[data-bs-target]",oe="[data-bs-slide], [data-bs-slide-to]",ae='[data-bs-ride="carousel"]',ce="touch",ue="pen";class le extends G{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=gt.findOne(ie,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return At}static get NAME(){return vt}next(){this._slide(Ct)}nextWhenVisible(){!document.hidden&&f(this._element)&&this.next()}prev(){this._slide(St)}pause(t){t||(this._isPaused=!0),gt.findOne(re,this._element)&&(u(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=gt.findOne(te,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void H.one(this._element,Dt,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const n=t>e?Ct:St;this._slide(n,this._items[t])}_getConfig(t){return t={...At,...pt.getDataAttributes(this._element),..."object"===typeof t?t:{}},d(vt,t,kt),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=It)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Nt:Ot)}_addEventListeners(){this._config.keyboard&&H.on(this._element,Lt,(t=>this._keydown(t))),"hover"===this._config.pause&&(H.on(this._element,Pt,(t=>this.pause(t))),H.on(this._element,Mt,(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&(t.pointerType===ue||t.pointerType===ce),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},r=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),Tt+this._config.interval))};gt.find(ne,this._element).forEach((t=>{H.on(t,Bt,(t=>t.preventDefault()))})),this._pointerEvent?(H.on(this._element,Ft,(t=>e(t))),H.on(this._element,Vt,(t=>r(t))),this._element.classList.add(Yt)):(H.on(this._element,Ut,(t=>e(t))),H.on(this._element,jt,(t=>n(t))),H.on(this._element,$t,(t=>r(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=xt[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?gt.find(ee,t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const n=t===Ct;return A(this._items,e,n,this._config.wrap)}_triggerSlideEvent(t,e){const n=this._getItemIndex(t),r=this._getItemIndex(gt.findOne(te,this._element));return H.trigger(this._element,Rt,{relatedTarget:t,direction:e,from:r,to:n})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=gt.findOne(Zt,this._indicatorsElement);e.classList.remove(Wt),e.removeAttribute("aria-current");const n=gt.find(se,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[r].classList.add(Wt),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||gt.findOne(te,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const n=this._directionToOrder(t),r=gt.findOne(te,this._element),i=this._getItemIndex(r),s=e||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Ct,u=c?Xt:Gt,l=c?Qt:Jt,h=this._orderToDirection(n);if(s&&s.classList.contains(Wt))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{H.trigger(this._element,Dt,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(Kt)){s.classList.add(l),v(s),r.classList.add(u),s.classList.add(u);const t=()=>{s.classList.remove(u,l),s.classList.add(Wt),r.classList.remove(Wt,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,r,!0)}else r.classList.remove(Wt),s.classList.add(Wt),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[Nt,Ot].includes(t)?w()?t===Ot?St:Ct:t===Ot?Ct:St:t}_orderToDirection(t){return[Ct,St].includes(t)?w()?t===St?Ot:Nt:t===St?Nt:Ot:t}static carouselInterface(t,e){const n=le.getOrCreateInstance(t,e);let{_config:r}=n;"object"===typeof e&&(r={...r,...e});const i="string"===typeof e?e:r.slide;if("number"===typeof e)n.to(e);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){le.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=a(this);if(!e||!e.classList.contains(zt))return;const n={...pt.getDataAttributes(e),...pt.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),le.carouselInterface(e,n),r&&le.getInstance(e).to(r),t.preventDefault()}}H.on(document,Ht,oe,le.dataApiClickHandler),H.on(window,qt,(()=>{const t=gt.find(ae);for(let e=0,n=t.length;e<n;e++)le.carouselInterface(t[e],le.getInstance(t[e]))})),E(le);const he="collapse",de="bs.collapse",fe=`.${de}`,pe=".data-api",me={toggle:!0,parent:null},ge={toggle:"boolean",parent:"(null|element)"},ve=`show${fe}`,ye=`shown${fe}`,_e=`hide${fe}`,be=`hidden${fe}`,we=`click${fe}${pe}`,Ee="show",Te="collapse",Ie="collapsing",Ae="collapsed",ke=`:scope .${Te} .${Te}`,Ce="collapse-horizontal",Se="width",Oe="height",Ne=".collapse.show, .collapse.collapsing",xe='[data-bs-toggle="collapse"]';class Re extends G{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=gt.find(xe);for(let r=0,i=n.length;r<i;r++){const t=n[r],e=o(t),i=gt.find(e).filter((t=>t===this._element));null!==e&&i.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return me}static get NAME(){return he}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=gt.find(ke,this._config.parent);e=gt.find(Ne,this._config.parent).filter((e=>!t.includes(e)))}const n=gt.findOne(this._selector);if(e.length){const r=e.find((t=>n!==t));if(t=r?Re.getInstance(r):null,t&&t._isTransitioning)return}const r=H.trigger(this._element,ve);if(r.defaultPrevented)return;e.forEach((e=>{n!==e&&Re.getOrCreateInstance(e,{toggle:!1}).hide(),t||W.set(e,de,null)}));const i=this._getDimension();this._element.classList.remove(Te),this._element.classList.add(Ie),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ie),this._element.classList.add(Te,Ee),this._element.style[i]="",H.trigger(this._element,ye)},o=i[0].toUpperCase()+i.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=H.trigger(this._element,_e);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,v(this._element),this._element.classList.add(Ie),this._element.classList.remove(Te,Ee);const n=this._triggerArray.length;for(let i=0;i<n;i++){const t=this._triggerArray[i],e=a(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Ie),this._element.classList.add(Te),H.trigger(this._element,be)};this._element.style[e]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ee)}_getConfig(t){return t={...me,...pt.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=h(t.parent),d(he,t,ge),t}_getDimension(){return this._element.classList.contains(Ce)?Se:Oe}_initializeChildren(){if(!this._config.parent)return;const t=gt.find(ke,this._config.parent);gt.find(xe,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=a(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(Ae):t.classList.add(Ae),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=Re.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}H.on(document,we,xe,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=o(this),n=gt.find(e);n.forEach((t=>{Re.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),E(Re);var De="top",Le="bottom",Pe="right",Me="left",Ue="auto",je=[De,Le,Pe,Me],$e="start",Fe="end",Ve="clippingParents",Be="viewport",qe="popper",He="reference",ze=je.reduce((function(t,e){return t.concat([e+"-"+$e,e+"-"+Fe])}),[]),We=[].concat(je,[Ue]).reduce((function(t,e){return t.concat([e,e+"-"+$e,e+"-"+Fe])}),[]),Ke="beforeRead",Ge="read",Xe="afterRead",Qe="beforeMain",Je="main",Ye="afterMain",Ze="beforeWrite",tn="write",en="afterWrite",nn=[Ke,Ge,Xe,Qe,Je,Ye,Ze,tn,en];function rn(t){return t?(t.nodeName||"").toLowerCase():null}function sn(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function on(t){var e=sn(t).Element;return t instanceof e||t instanceof Element}function an(t){var e=sn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function cn(t){if("undefined"===typeof ShadowRoot)return!1;var e=sn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function un(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},i=e.elements[t];an(i)&&rn(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))}function ln(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],i=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),o=s.reduce((function(t,e){return t[e]="",t}),{});an(r)&&rn(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(t){r.removeAttribute(t)})))}))}}const hn={name:"applyStyles",enabled:!0,phase:"write",fn:un,effect:ln,requires:["computeStyles"]};function dn(t){return t.split("-")[0]}function fn(t,e){var n=t.getBoundingClientRect(),r=1,i=1;return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function pn(t){var e=fn(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function mn(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&cn(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function gn(t){return sn(t).getComputedStyle(t)}function vn(t){return["table","td","th"].indexOf(rn(t))>=0}function yn(t){return((on(t)?t.ownerDocument:t.document)||window.document).documentElement}function _n(t){return"html"===rn(t)?t:t.assignedSlot||t.parentNode||(cn(t)?t.host:null)||yn(t)}function bn(t){return an(t)&&"fixed"!==gn(t).position?t.offsetParent:null}function wn(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&an(t)){var r=gn(t);if("fixed"===r.position)return null}var i=_n(t);while(an(i)&&["html","body"].indexOf(rn(i))<0){var s=gn(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function En(t){var e=sn(t),n=bn(t);while(n&&vn(n)&&"static"===gn(n).position)n=bn(n);return n&&("html"===rn(n)||"body"===rn(n)&&"static"===gn(n).position)?e:n||wn(t)||e}function Tn(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var In=Math.max,An=Math.min,kn=Math.round;function Cn(t,e,n){return In(t,An(e,n))}function Sn(){return{top:0,right:0,bottom:0,left:0}}function On(t){return Object.assign({},Sn(),t)}function Nn(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var xn=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,On("number"!==typeof t?t:Nn(t,je))};function Rn(t){var e,n=t.state,r=t.name,i=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=dn(n.placement),c=Tn(a),u=[Me,Pe].indexOf(a)>=0,l=u?"height":"width";if(s&&o){var h=xn(i.padding,n),d=pn(s),f="y"===c?De:Me,p="y"===c?Le:Pe,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],g=o[c]-n.rects.reference[c],v=En(s),y=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,_=m/2-g/2,b=h[f],w=y-d[l]-h[p],E=y/2-d[l]/2+_,T=Cn(b,E,w),I=c;n.modifiersData[r]=(e={},e[I]=T,e.centerOffset=T-E,e)}}function Dn(t){var e=t.state,n=t.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=e.elements.popper.querySelector(i),i))&&mn(e.elements.popper,i)&&(e.elements.arrow=i)}const Ln={name:"arrow",enabled:!0,phase:"main",fn:Rn,effect:Dn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Pn(t){return t.split("-")[1]}var Mn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Un(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:kn(kn(e*i)/i)||0,y:kn(kn(n*i)/i)||0}}function jn(t){var e,n=t.popper,r=t.popperRect,i=t.placement,s=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,u=t.adaptive,l=t.roundOffsets,h=!0===l?Un(o):"function"===typeof l?l(o):o,d=h.x,f=void 0===d?0:d,p=h.y,m=void 0===p?0:p,g=o.hasOwnProperty("x"),v=o.hasOwnProperty("y"),y=Me,_=De,b=window;if(u){var w=En(n),E="clientHeight",T="clientWidth";w===sn(n)&&(w=yn(n),"static"!==gn(w).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth")),i!==De&&(i!==Me&&i!==Pe||s!==Fe)||(_=Le,m-=w[E]-r.height,m*=c?1:-1),i!==Me&&(i!==De&&i!==Le||s!==Fe)||(y=Pe,f-=w[T]-r.width,f*=c?1:-1)}var I,A=Object.assign({position:a},u&&Mn);return c?Object.assign({},A,(I={},I[_]=v?"0":"",I[y]=g?"0":"",I.transform=(b.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",I)):Object.assign({},A,(e={},e[_]=v?m+"px":"",e[y]=g?f+"px":"",e.transform="",e))}function $n(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:dn(e.placement),variation:Pn(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,jn(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,jn(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Fn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:$n,data:{}};var Vn={passive:!0};function Bn(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=sn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach((function(t){t.addEventListener("scroll",n.update,Vn)})),a&&c.addEventListener("resize",n.update,Vn),function(){s&&u.forEach((function(t){t.removeEventListener("scroll",n.update,Vn)})),a&&c.removeEventListener("resize",n.update,Vn)}}const qn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bn,data:{}};var Hn={left:"right",right:"left",bottom:"top",top:"bottom"};function zn(t){return t.replace(/left|right|bottom|top/g,(function(t){return Hn[t]}))}var Wn={start:"end",end:"start"};function Kn(t){return t.replace(/start|end/g,(function(t){return Wn[t]}))}function Gn(t){var e=sn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Xn(t){return fn(yn(t)).left+Gn(t).scrollLeft}function Qn(t){var e=sn(t),n=yn(t),r=e.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+Xn(t),y:a}}function Jn(t){var e,n=yn(t),r=Gn(t),i=null==(e=t.ownerDocument)?void 0:e.body,s=In(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=In(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Xn(t),c=-r.scrollTop;return"rtl"===gn(i||n).direction&&(a+=In(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Yn(t){var e=gn(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Zn(t){return["html","body","#document"].indexOf(rn(t))>=0?t.ownerDocument.body:an(t)&&Yn(t)?t:Zn(_n(t))}function tr(t,e){var n;void 0===e&&(e=[]);var r=Zn(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),s=sn(r),o=i?[s].concat(s.visualViewport||[],Yn(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(tr(_n(o)))}function er(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function nr(t){var e=fn(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function rr(t,e){return e===Be?er(Qn(t)):an(e)?nr(e):er(Jn(yn(t)))}function ir(t){var e=tr(_n(t)),n=["absolute","fixed"].indexOf(gn(t).position)>=0,r=n&&an(t)?En(t):t;return on(r)?e.filter((function(t){return on(t)&&mn(t,r)&&"body"!==rn(t)})):[]}function sr(t,e,n){var r="clippingParents"===e?ir(t):[].concat(e),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(e,n){var r=rr(t,n);return e.top=In(r.top,e.top),e.right=An(r.right,e.right),e.bottom=An(r.bottom,e.bottom),e.left=In(r.left,e.left),e}),rr(t,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function or(t){var e,n=t.reference,r=t.element,i=t.placement,s=i?dn(i):null,o=i?Pn(i):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(s){case De:e={x:a,y:n.y-r.height};break;case Le:e={x:a,y:n.y+n.height};break;case Pe:e={x:n.x+n.width,y:c};break;case Me:e={x:n.x-r.width,y:c};break;default:e={x:n.x,y:n.y}}var u=s?Tn(s):null;if(null!=u){var l="y"===u?"height":"width";switch(o){case $e:e[u]=e[u]-(n[l]/2-r[l]/2);break;case Fe:e[u]=e[u]+(n[l]/2-r[l]/2);break}}return e}function ar(t,e){void 0===e&&(e={});var n=e,r=n.placement,i=void 0===r?t.placement:r,s=n.boundary,o=void 0===s?Ve:s,a=n.rootBoundary,c=void 0===a?Be:a,u=n.elementContext,l=void 0===u?qe:u,h=n.altBoundary,d=void 0!==h&&h,f=n.padding,p=void 0===f?0:f,m=On("number"!==typeof p?p:Nn(p,je)),g=l===qe?He:qe,v=t.rects.popper,y=t.elements[d?g:l],_=sr(on(y)?y:y.contextElement||yn(t.elements.popper),o,c),b=fn(t.elements.reference),w=or({reference:b,element:v,strategy:"absolute",placement:i}),E=er(Object.assign({},v,w)),T=l===qe?E:b,I={top:_.top-T.top+m.top,bottom:T.bottom-_.bottom+m.bottom,left:_.left-T.left+m.left,right:T.right-_.right+m.right},A=t.modifiersData.offset;if(l===qe&&A){var k=A[i];Object.keys(I).forEach((function(t){var e=[Pe,Le].indexOf(t)>=0?1:-1,n=[De,Le].indexOf(t)>=0?"y":"x";I[t]+=k[n]*e}))}return I}function cr(t,e){void 0===e&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?We:c,l=Pn(r),h=l?a?ze:ze.filter((function(t){return Pn(t)===l})):je,d=h.filter((function(t){return u.indexOf(t)>=0}));0===d.length&&(d=h);var f=d.reduce((function(e,n){return e[n]=ar(t,{placement:n,boundary:i,rootBoundary:s,padding:o})[dn(n)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}function ur(t){if(dn(t)===Ue)return[];var e=zn(t);return[Kn(t),e,Kn(e)]}function lr(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0===o||o,c=n.fallbackPlacements,u=n.padding,l=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=void 0===f||f,m=n.allowedAutoPlacements,g=e.options.placement,v=dn(g),y=v===g,_=c||(y||!p?[zn(g)]:ur(g)),b=[g].concat(_).reduce((function(t,n){return t.concat(dn(n)===Ue?cr(e,{placement:n,boundary:l,rootBoundary:h,padding:u,flipVariations:p,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,E=e.rects.popper,T=new Map,I=!0,A=b[0],k=0;k<b.length;k++){var C=b[k],S=dn(C),O=Pn(C)===$e,N=[De,Le].indexOf(S)>=0,x=N?"width":"height",R=ar(e,{placement:C,boundary:l,rootBoundary:h,altBoundary:d,padding:u}),D=N?O?Pe:Me:O?Le:De;w[x]>E[x]&&(D=zn(D));var L=zn(D),P=[];if(s&&P.push(R[S]<=0),a&&P.push(R[D]<=0,R[L]<=0),P.every((function(t){return t}))){A=C,I=!1;break}T.set(C,P)}if(I)for(var M=p?3:1,U=function(t){var e=b.find((function(e){var n=T.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},j=M;j>0;j--){var $=U(j);if("break"===$)break}e.placement!==A&&(e.modifiersData[r]._skip=!0,e.placement=A,e.reset=!0)}}const hr={name:"flip",enabled:!0,phase:"main",fn:lr,requiresIfExists:["offset"],data:{_skip:!1}};function dr(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function fr(t){return[De,Pe,Le,Me].some((function(e){return t[e]>=0}))}function pr(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=ar(e,{elementContext:"reference"}),a=ar(e,{altBoundary:!0}),c=dr(o,r),u=dr(a,i,s),l=fr(c),h=fr(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}const mr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pr};function gr(t,e,n){var r=dn(t),i=[Me,De].indexOf(r)>=0?-1:1,s="function"===typeof n?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Me,Pe].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function vr(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=void 0===i?[0,0]:i,o=We.reduce((function(t,n){return t[n]=gr(n,e.rects,s),t}),{}),a=o[e.placement],c=a.x,u=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}const yr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:vr};function _r(t){var e=t.state,n=t.name;e.modifiersData[n]=or({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const br={name:"popperOffsets",enabled:!0,phase:"read",fn:_r,data:{}};function wr(t){return"x"===t?"y":"x"}function Er(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0!==o&&o,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,h=n.padding,d=n.tether,f=void 0===d||d,p=n.tetherOffset,m=void 0===p?0:p,g=ar(e,{boundary:c,rootBoundary:u,padding:h,altBoundary:l}),v=dn(e.placement),y=Pn(e.placement),_=!y,b=Tn(v),w=wr(b),E=e.modifiersData.popperOffsets,T=e.rects.reference,I=e.rects.popper,A="function"===typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,k={x:0,y:0};if(E){if(s||a){var C="y"===b?De:Me,S="y"===b?Le:Pe,O="y"===b?"height":"width",N=E[b],x=E[b]+g[C],R=E[b]-g[S],D=f?-I[O]/2:0,L=y===$e?T[O]:I[O],P=y===$e?-I[O]:-T[O],M=e.elements.arrow,U=f&&M?pn(M):{width:0,height:0},j=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Sn(),$=j[C],F=j[S],V=Cn(0,T[O],U[O]),B=_?T[O]/2-D-V-$-A:L-V-$-A,q=_?-T[O]/2+D+V+F+A:P+V+F+A,H=e.elements.arrow&&En(e.elements.arrow),z=H?"y"===b?H.clientTop||0:H.clientLeft||0:0,W=e.modifiersData.offset?e.modifiersData.offset[e.placement][b]:0,K=E[b]+B-W-z,G=E[b]+q-W;if(s){var X=Cn(f?An(x,K):x,N,f?In(R,G):R);E[b]=X,k[b]=X-N}if(a){var Q="x"===b?De:Me,J="x"===b?Le:Pe,Y=E[w],Z=Y+g[Q],tt=Y-g[J],et=Cn(f?An(Z,K):Z,Y,f?In(tt,G):tt);E[w]=et,k[w]=et-Y}}e.modifiersData[r]=k}}const Tr={name:"preventOverflow",enabled:!0,phase:"main",fn:Er,requiresIfExists:["offset"]};function Ir(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ar(t){return t!==sn(t)&&an(t)?Ir(t):Gn(t)}function kr(t){var e=t.getBoundingClientRect(),n=e.width/t.offsetWidth||1,r=e.height/t.offsetHeight||1;return 1!==n||1!==r}function Cr(t,e,n){void 0===n&&(n=!1);var r=an(e);an(e)&&kr(e);var i=yn(e),s=fn(t),o={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(r||!r&&!n)&&(("body"!==rn(e)||Yn(i))&&(o=Ar(e)),an(e)?(a=fn(e),a.x+=e.clientLeft,a.y+=e.clientTop):i&&(a.x=Xn(i))),{x:s.left+o.scrollLeft-a.x,y:s.top+o.scrollTop-a.y,width:s.width,height:s.height}}function Sr(t){var e=new Map,n=new Set,r=[];function i(t){n.add(t.name);var s=[].concat(t.requires||[],t.requiresIfExists||[]);s.forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&i(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),r}function Or(t){var e=Sr(t);return nn.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function Nr(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function xr(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var Rr={placement:"bottom",modifiers:[],strategy:"absolute"};function Dr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function Lr(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,i=e.defaultOptions,s=void 0===i?Rr:i;return function(t,e,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},Rr,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:on(t)?tr(t):t.contextElement?tr(t.contextElement):[],popper:tr(e)};var a=Or(xr([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(t){return t.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var t=i.elements,e=t.reference,n=t.popper;if(Dr(e,n)){i.rects={reference:Cr(e,En(n),"fixed"===i.options.strategy),popper:pn(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(t){return i.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:Nr((function(){return new Promise((function(t){c.forceUpdate(),t(i)}))})),destroy:function(){l(),a=!0}};if(!Dr(t,e))return c;function u(){i.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,s=t.effect;if("function"===typeof s){var a=s({state:i,name:e,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(t){return t()})),o=[]}return c.setOptions(n).then((function(t){!a&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var Pr=Lr(),Mr=[qn,br,Fn,hn],Ur=Lr({defaultModifiers:Mr}),jr=[qn,br,Fn,hn,yr,hr,Tr,Ln,mr],$r=Lr({defaultModifiers:jr});const Fr=Object.freeze({__proto__:null,popperGenerator:Lr,detectOverflow:ar,createPopperBase:Pr,createPopper:$r,createPopperLite:Ur,top:De,bottom:Le,right:Pe,left:Me,auto:Ue,basePlacements:je,start:$e,end:Fe,clippingParents:Ve,viewport:Be,popper:qe,reference:He,variationPlacements:ze,placements:We,beforeRead:Ke,read:Ge,afterRead:Xe,beforeMain:Qe,main:Je,afterMain:Ye,beforeWrite:Ze,write:tn,afterWrite:en,modifierPhases:nn,applyStyles:hn,arrow:Ln,computeStyles:Fn,eventListeners:qn,flip:hr,hide:mr,offset:yr,popperOffsets:br,preventOverflow:Tr}),Vr="dropdown",Br="bs.dropdown",qr=`.${Br}`,Hr=".data-api",zr="Escape",Wr="Space",Kr="Tab",Gr="ArrowUp",Xr="ArrowDown",Qr=2,Jr=new RegExp(`${Gr}|${Xr}|${zr}`),Yr=`hide${qr}`,Zr=`hidden${qr}`,ti=`show${qr}`,ei=`shown${qr}`,ni=`click${qr}${Hr}`,ri=`keydown${qr}${Hr}`,ii=`keyup${qr}${Hr}`,si="show",oi="dropup",ai="dropend",ci="dropstart",ui="navbar",li='[data-bs-toggle="dropdown"]',hi=".dropdown-menu",di=".navbar-nav",fi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",pi=w()?"top-end":"top-start",mi=w()?"top-start":"top-end",gi=w()?"bottom-end":"bottom-start",vi=w()?"bottom-start":"bottom-end",yi=w()?"left-start":"right-start",_i=w()?"right-start":"left-start",bi={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},wi={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ei extends G{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return bi}static get DefaultType(){return wi}static get NAME(){return Vr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(p(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element},e=H.trigger(this._element,ti,t);if(e.defaultPrevented)return;const n=Ei.getParentFromElement(this._element);this._inNavbar?pt.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(di)&&[].concat(...document.body.children).forEach((t=>H.on(t,"mouseover",g))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(si),this._element.classList.add(si),H.trigger(this._element,ei,t)}hide(){if(p(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const e=H.trigger(this._element,Yr,t);e.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>H.off(t,"mouseover",g))),this._popper&&this._popper.destroy(),this._menu.classList.remove(si),this._element.classList.remove(si),this._element.setAttribute("aria-expanded","false"),pt.removeDataAttribute(this._menu,"popper"),H.trigger(this._element,Zr,t))}_getConfig(t){if(t={...this.constructor.Default,...pt.getDataAttributes(this._element),...t},d(Vr,t,this.constructor.DefaultType),"object"===typeof t.reference&&!l(t.reference)&&"function"!==typeof t.reference.getBoundingClientRect)throw new TypeError(`${Vr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(t){if("undefined"===typeof Fr)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:l(this._config.reference)?e=h(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const n=this._getPopperConfig(),r=n.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));this._popper=$r(e,this._menu,n),r&&pt.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(si)}_getMenuElement(){return gt.next(this._element,hi)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains(ai))return yi;if(t.classList.contains(ci))return _i;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains(oi)?e?mi:pi:e?vi:gi}_detectNavbar(){return null!==this._element.closest(`.${ui}`)}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=gt.find(fi,this._menu).filter(f);n.length&&A(n,e,t===Xr,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Ei.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(t.button===Qr||"keyup"===t.type&&t.key!==Kr))return;const e=gt.find(li);for(let n=0,r=e.length;n<r;n++){const r=Ei.getInstance(e[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(t){const e=t.composedPath(),n=e.includes(r._menu);if(e.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(t.target)&&("keyup"===t.type&&t.key===Kr||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(i.clickEvent=t)}r._completeHide(i)}}static getParentFromElement(t){return a(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===Wr||t.key!==zr&&(t.key!==Xr&&t.key!==Gr||t.target.closest(hi)):!Jr.test(t.key))return;const e=this.classList.contains(si);if(!e&&t.key===zr)return;if(t.preventDefault(),t.stopPropagation(),p(this))return;const n=this.matches(li)?this:gt.prev(this,li)[0],r=Ei.getOrCreateInstance(n);if(t.key!==zr)return t.key===Gr||t.key===Xr?(e||r.show(),void r._selectMenuItem(t)):void(e&&t.key!==Wr||Ei.clearMenus());r.hide()}}H.on(document,ri,li,Ei.dataApiKeydownHandler),H.on(document,ri,hi,Ei.dataApiKeydownHandler),H.on(document,ni,Ei.clearMenus),H.on(document,ii,Ei.clearMenus),H.on(document,ni,li,(function(t){t.preventDefault(),Ei.getOrCreateInstance(this).toggle()})),E(Ei);const Ti=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ii=".sticky-top";class Ai{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(Ti,"paddingRight",(e=>e+t)),this._setElementAttributes(Ii,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const r=this.getWidth(),i=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+r)return;this._saveInitialAttribute(t,e);const i=window.getComputedStyle(t)[e];t.style[e]=`${n(Number.parseFloat(i))}px`};this._applyManipulationCallback(t,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Ti,"paddingRight"),this._resetElementAttributes(Ii,"marginRight")}_saveInitialAttribute(t,e){const n=t.style[e];n&&pt.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=t=>{const n=pt.getDataAttribute(t,e);"undefined"===typeof n?t.style.removeProperty(e):(pt.removeDataAttribute(t,e),t.style[e]=n)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){l(t)?e(t):gt.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const ki={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ci={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Si="backdrop",Oi="fade",Ni="show",xi=`mousedown.bs.${Si}`;class Ri{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&v(this._getElement()),this._getElement().classList.add(Ni),this._emulateAnimation((()=>{T(t)}))):T(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(Ni),this._emulateAnimation((()=>{this.dispose(),T(t)}))):T(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Oi),this._element=t}return this._element}_getConfig(t){return t={...ki,..."object"===typeof t?t:{}},t.rootElement=h(t.rootElement),d(Si,t,Ci),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),H.on(this._getElement(),xi,(()=>{T(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(H.off(this._element,xi),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){I(t,this._getElement(),this._config.isAnimated)}}const Di={trapElement:null,autofocus:!0},Li={trapElement:"element",autofocus:"boolean"},Pi="focustrap",Mi="bs.focustrap",Ui=`.${Mi}`,ji=`focusin${Ui}`,$i=`keydown.tab${Ui}`,Fi="Tab",Vi="forward",Bi="backward";class qi{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),H.off(document,Ui),H.on(document,ji,(t=>this._handleFocusin(t))),H.on(document,$i,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,H.off(document,Ui))}_handleFocusin(t){const{target:e}=t,{trapElement:n}=this._config;if(e===document||e===n||n.contains(e))return;const r=gt.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===Bi?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===Fi&&(this._lastTabNavDirection=t.shiftKey?Bi:Vi)}_getConfig(t){return t={...Di,..."object"===typeof t?t:{}},d(Pi,t,Li),t}}const Hi="modal",zi="bs.modal",Wi=`.${zi}`,Ki=".data-api",Gi="Escape",Xi={backdrop:!0,keyboard:!0,focus:!0},Qi={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Ji=`hide${Wi}`,Yi=`hidePrevented${Wi}`,Zi=`hidden${Wi}`,ts=`show${Wi}`,es=`shown${Wi}`,ns=`resize${Wi}`,rs=`click.dismiss${Wi}`,is=`keydown.dismiss${Wi}`,ss=`mouseup.dismiss${Wi}`,os=`mousedown.dismiss${Wi}`,as=`click${Wi}${Ki}`,cs="modal-open",us="fade",ls="show",hs="modal-static",ds=".modal.show",fs=".modal-dialog",ps=".modal-body",ms='[data-bs-toggle="modal"]';class gs extends G{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=gt.findOne(fs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ai}static get Default(){return Xi}static get NAME(){return Hi}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=H.trigger(this._element,ts,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(cs),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),H.on(this._dialog,os,(()=>{H.one(this._element,ss,(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=H.trigger(this._element,Ji);if(t.defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ls),H.off(this._element,rs),H.off(this._dialog,os),this._queueCallback((()=>this._hideModal()),this._element,e)}dispose(){[window,this._dialog].forEach((t=>H.off(t,Wi))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ri({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new qi({trapElement:this._element})}_getConfig(t){return t={...Xi,...pt.getDataAttributes(this._element),..."object"===typeof t?t:{}},d(Hi,t,Qi),t}_showElement(t){const e=this._isAnimated(),n=gt.findOne(ps,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),e&&v(this._element),this._element.classList.add(ls);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,H.trigger(this._element,es,{relatedTarget:t})};this._queueCallback(r,this._dialog,e)}_setEscapeEvent(){this._isShown?H.on(this._element,is,(t=>{this._config.keyboard&&t.key===Gi?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Gi||this._triggerBackdropTransition()})):H.off(this._element,is)}_setResizeEvent(){this._isShown?H.on(window,ns,(()=>this._adjustDialog())):H.off(window,ns)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(cs),this._resetAdjustments(),this._scrollBar.reset(),H.trigger(this._element,Zi)}))}_showBackdrop(t){H.on(this._element,rs,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains(us)}_triggerBackdropTransition(){const t=H.trigger(this._element,Yi);if(t.defaultPrevented)return;const{classList:e,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||e.contains(hs)||(i||(r.overflowY="hidden"),e.add(hs),this._queueCallback((()=>{e.remove(hs),i||this._queueCallback((()=>{r.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;(!n&&t&&!w()||n&&!t&&w())&&(this._element.style.paddingLeft=`${e}px`),(n&&!t&&!w()||!n&&t&&w())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=gs.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}H.on(document,as,ms,(function(t){const e=a(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),H.one(e,ts,(t=>{t.defaultPrevented||H.one(e,Zi,(()=>{f(this)&&this.focus()}))}));const n=gt.findOne(ds);n&&gs.getInstance(n).hide();const r=gs.getOrCreateInstance(e);r.toggle(this)})),X(gs),E(gs);const vs="offcanvas",ys="bs.offcanvas",_s=`.${ys}`,bs=".data-api",ws=`load${_s}${bs}`,Es="Escape",Ts={backdrop:!0,keyboard:!0,scroll:!1},Is={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},As="show",ks="offcanvas-backdrop",Cs=".offcanvas.show",Ss=`show${_s}`,Os=`shown${_s}`,Ns=`hide${_s}`,xs=`hidden${_s}`,Rs=`click${_s}${bs}`,Ds=`keydown.dismiss${_s}`,Ls='[data-bs-toggle="offcanvas"]';class Ps extends G{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return vs}static get Default(){return Ts}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=H.trigger(this._element,Ss,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ai).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(As);const n=()=>{this._config.scroll||this._focustrap.activate(),H.trigger(this._element,Os,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=H.trigger(this._element,Ns);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(As),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ai).reset(),H.trigger(this._element,xs)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...Ts,...pt.getDataAttributes(this._element),..."object"===typeof t?t:{}},d(vs,t,Is),t}_initializeBackDrop(){return new Ri({className:ks,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new qi({trapElement:this._element})}_addEventListeners(){H.on(this._element,Ds,(t=>{this._config.keyboard&&t.key===Es&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=Ps.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}H.on(document,Rs,Ls,(function(t){const e=a(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),p(this))return;H.one(e,xs,(()=>{f(this)&&this.focus()}));const n=gt.findOne(Cs);n&&n!==e&&Ps.getInstance(n).hide();const r=Ps.getOrCreateInstance(e);r.toggle(this)})),H.on(window,ws,(()=>gt.find(Cs).forEach((t=>Ps.getOrCreateInstance(t).show())))),X(Ps),E(Ps);const Ms=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Us=/^aria-[\w-]*$/i,js=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,$s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Fs=(t,e)=>{const n=t.nodeName.toLowerCase();if(e.includes(n))return!Ms.has(n)||Boolean(js.test(t.nodeValue)||$s.test(t.nodeValue));const r=e.filter((t=>t instanceof RegExp));for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},Vs={"*":["class","dir","id","lang","role",Us],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Bs(t,e,n){if(!t.length)return t;if(n&&"function"===typeof n)return n(t);const r=new window.DOMParser,i=r.parseFromString(t,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const t=s[o],n=t.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){t.remove();continue}const r=[].concat(...t.attributes),i=[].concat(e["*"]||[],e[n]||[]);r.forEach((e=>{Fs(e,i)||t.removeAttribute(e.nodeName)}))}return i.body.innerHTML}const qs="tooltip",Hs="bs.tooltip",zs=`.${Hs}`,Ws="bs-tooltip",Ks=new Set(["sanitize","allowList","sanitizeFn"]),Gs={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Xs={AUTO:"auto",TOP:"top",RIGHT:w()?"left":"right",BOTTOM:"bottom",LEFT:w()?"right":"left"},Qs={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Vs,popperConfig:null},Js={HIDE:`hide${zs}`,HIDDEN:`hidden${zs}`,SHOW:`show${zs}`,SHOWN:`shown${zs}`,INSERTED:`inserted${zs}`,CLICK:`click${zs}`,FOCUSIN:`focusin${zs}`,FOCUSOUT:`focusout${zs}`,MOUSEENTER:`mouseenter${zs}`,MOUSELEAVE:`mouseleave${zs}`},Ys="fade",Zs="modal",to="show",eo="show",no="out",ro=".tooltip-inner",io=`.${Zs}`,so="hide.bs.modal",oo="hover",ao="focus",co="click",uo="manual";class lo extends G{constructor(t,e){if("undefined"===typeof Fr)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return Qs}static get NAME(){return qs}static get Event(){return Js}static get DefaultType(){return Gs}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(to))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),H.off(this._element.closest(io),so,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=H.trigger(this._element,this.constructor.Event.SHOW),e=m(this._element),n=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ro).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),s=i(this.constructor.NAME);r.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&r.classList.add(Ys);const o="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,a=this._getAttachment(o);this._addAttachmentClass(a);const{container:c}=this._config;W.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(r),H.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=$r(this._element,r,this._getPopperConfig(a)),r.classList.add(to);const u=this._resolvePossibleFunction(this._config.customClass);u&&r.classList.add(...u.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>{H.on(t,"mouseover",g)}));const l=()=>{const t=this._hoverState;this._hoverState=null,H.trigger(this._element,this.constructor.Event.SHOWN),t===no&&this._leave(null,this)},h=this.tip.classList.contains(Ys);this._queueCallback(l,this.tip,h)}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||(this._hoverState!==eo&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),H.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=H.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;t.classList.remove(to),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>H.off(t,"mouseover",g))),this._activeTrigger[co]=!1,this._activeTrigger[ao]=!1,this._activeTrigger[oo]=!1;const r=this.tip.classList.contains(Ys);this._queueCallback(e,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(Ys,to),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),ro)}_sanitizeAndSetContent(t,e,n){const r=gt.findOne(n,t);e||!r?this.setElementContent(r,e):r.remove()}setElementContent(t,e){if(null!==t)return l(e)?(e=h(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Bs(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"===typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Xs[t.toUpperCase()]}_setListeners(){const t=this._config.trigger.split(" ");t.forEach((t=>{if("click"===t)H.on(this._element,this.constructor.Event.CLICK,this._config.selector,(t=>this.toggle(t)));else if(t!==uo){const e=t===oo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=t===oo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;H.on(this._element,e,this._config.selector,(t=>this._enter(t))),H.on(this._element,n,this._config.selector,(t=>this._leave(t)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},H.on(this._element.closest(io),so,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?ao:oo]=!0),e.getTipElement().classList.contains(to)||e._hoverState===eo?e._hoverState=eo:(clearTimeout(e._timeout),e._hoverState=eo,e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=>{e._hoverState===eo&&e.show()}),e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?ao:oo]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=no,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=>{e._hoverState===no&&e.hide()}),e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=pt.getDataAttributes(this._element);return Object.keys(e).forEach((t=>{Ks.has(t)&&delete e[t]})),t={...this.constructor.Default,...e,..."object"===typeof t&&t?t:{}},t.container=!1===t.container?document.body:h(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),d(qs,t,this.constructor.DefaultType),t.sanitize&&(t.template=Bs(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=t.getAttribute("class").match(e);null!==n&&n.length>0&&n.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))}_getBasicClassPrefix(){return Ws}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=lo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}E(lo);const ho="popover",fo="bs.popover",po=`.${fo}`,mo="bs-popover",go={...lo.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},vo={...lo.DefaultType,content:"(string|element|function)"},yo={HIDE:`hide${po}`,HIDDEN:`hidden${po}`,SHOW:`show${po}`,SHOWN:`shown${po}`,INSERTED:`inserted${po}`,CLICK:`click${po}`,FOCUSIN:`focusin${po}`,FOCUSOUT:`focusout${po}`,MOUSEENTER:`mouseenter${po}`,MOUSELEAVE:`mouseleave${po}`},_o=".popover-header",bo=".popover-body";class wo extends lo{static get Default(){return go}static get NAME(){return ho}static get Event(){return yo}static get DefaultType(){return vo}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),_o),this._sanitizeAndSetContent(t,this._getContent(),bo)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return mo}static jQueryInterface(t){return this.each((function(){const e=wo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}E(wo);const Eo="scrollspy",To="bs.scrollspy",Io=`.${To}`,Ao=".data-api",ko={offset:10,method:"auto",target:""},Co={offset:"number",method:"string",target:"(string|element)"},So=`activate${Io}`,Oo=`scroll${Io}`,No=`load${Io}${Ao}`,xo="dropdown-item",Ro="active",Do='[data-bs-spy="scroll"]',Lo=".nav, .list-group",Po=".nav-link",Mo=".nav-item",Uo=".list-group-item",jo=`${Po}, ${Uo}, .${xo}`,$o=".dropdown",Fo=".dropdown-toggle",Vo="offset",Bo="position";class qo extends G{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,H.on(this._scrollElement,Oo,(()=>this._process())),this.refresh(),this._process()}static get Default(){return ko}static get NAME(){return Eo}refresh(){const t=this._scrollElement===this._scrollElement.window?Vo:Bo,e="auto"===this._config.method?t:this._config.method,n=e===Bo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=gt.find(jo,this._config.target);r.map((t=>{const r=o(t),i=r?gt.findOne(r):null;if(i){const t=i.getBoundingClientRect();if(t.width||t.height)return[pt[e](i).top+n,r]}return null})).filter((t=>t)).sort(((t,e)=>t[0]-e[0])).forEach((t=>{this._offsets.push(t[0]),this._targets.push(t[1])}))}dispose(){H.off(this._scrollElement,Io),super.dispose()}_getConfig(t){return t={...ko,...pt.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},t.target=h(t.target)||document.documentElement,d(Eo,t,Co),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;){const n=this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&("undefined"===typeof this._offsets[e+1]||t<this._offsets[e+1]);n&&this._activate(this._targets[e])}}}_activate(t){this._activeTarget=t,this._clear();const e=jo.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),n=gt.findOne(e.join(","),this._config.target);n.classList.add(Ro),n.classList.contains(xo)?gt.findOne(Fo,n.closest($o)).classList.add(Ro):gt.parents(n,Lo).forEach((t=>{gt.prev(t,`${Po}, ${Uo}`).forEach((t=>t.classList.add(Ro))),gt.prev(t,Mo).forEach((t=>{gt.children(t,Po).forEach((t=>t.classList.add(Ro)))}))})),H.trigger(this._scrollElement,So,{relatedTarget:t})}_clear(){gt.find(jo,this._config.target).filter((t=>t.classList.contains(Ro))).forEach((t=>t.classList.remove(Ro)))}static jQueryInterface(t){return this.each((function(){const e=qo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}H.on(window,No,(()=>{gt.find(Do).forEach((t=>new qo(t)))})),E(qo);const Ho="tab",zo="bs.tab",Wo=`.${zo}`,Ko=".data-api",Go=`hide${Wo}`,Xo=`hidden${Wo}`,Qo=`show${Wo}`,Jo=`shown${Wo}`,Yo=`click${Wo}${Ko}`,Zo="dropdown-menu",ta="active",ea="fade",na="show",ra=".dropdown",ia=".nav, .list-group",sa=".active",oa=":scope > li > .active",aa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ca=".dropdown-toggle",ua=":scope > .dropdown-menu .active";class la extends G{static get NAME(){return Ho}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ta))return;let t;const e=a(this._element),n=this._element.closest(ia);if(n){const e="UL"===n.nodeName||"OL"===n.nodeName?oa:sa;t=gt.find(e,n),t=t[t.length-1]}const r=t?H.trigger(t,Go,{relatedTarget:this._element}):null,i=H.trigger(this._element,Qo,{relatedTarget:t});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{H.trigger(t,Xo,{relatedTarget:this._element}),H.trigger(this._element,Jo,{relatedTarget:t})};e?this._activate(e,e.parentNode,s):s()}_activate(t,e,n){const r=!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?gt.children(e,sa):gt.find(oa,e),i=r[0],s=n&&i&&i.classList.contains(ea),o=()=>this._transitionComplete(t,i,n);i&&s?(i.classList.remove(na),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,n){if(e){e.classList.remove(ta);const t=gt.findOne(ua,e.parentNode);t&&t.classList.remove(ta),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(ta),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),v(t),t.classList.contains(ea)&&t.classList.add(na);let r=t.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(Zo)){const e=t.closest(ra);e&&gt.find(ca,e).forEach((t=>t.classList.add(ta))),t.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=la.getOrCreateInstance(this);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}H.on(document,Yo,aa,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),p(this))return;const e=la.getOrCreateInstance(this);e.show()})),E(la);const ha="toast",da="bs.toast",fa=`.${da}`,pa=`mouseover${fa}`,ma=`mouseout${fa}`,ga=`focusin${fa}`,va=`focusout${fa}`,ya=`hide${fa}`,_a=`hidden${fa}`,ba=`show${fa}`,wa=`shown${fa}`,Ea="fade",Ta="hide",Ia="show",Aa="showing",ka={animation:"boolean",autohide:"boolean",delay:"number"},Ca={animation:!0,autohide:!0,delay:5e3};class Sa extends G{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ka}static get Default(){return Ca}static get NAME(){return ha}show(){const t=H.trigger(this._element,ba);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ea);const e=()=>{this._element.classList.remove(Aa),H.trigger(this._element,wa),this._maybeScheduleHide()};this._element.classList.remove(Ta),v(this._element),this._element.classList.add(Ia),this._element.classList.add(Aa),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Ia))return;const t=H.trigger(this._element,ya);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(Ta),this._element.classList.remove(Aa),this._element.classList.remove(Ia),H.trigger(this._element,_a)};this._element.classList.add(Aa),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Ia)&&this._element.classList.remove(Ia),super.dispose()}_getConfig(t){return t={...Ca,...pt.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},d(ha,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){H.on(this._element,pa,(t=>this._onInteraction(t,!0))),H.on(this._element,ma,(t=>this._onInteraction(t,!1))),H.on(this._element,ga,(t=>this._onInteraction(t,!0))),H.on(this._element,va,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Sa.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}X(Sa),E(Sa);const Oa={Alert:rt,Button:ht,Carousel:le,Collapse:Re,Dropdown:Ei,Modal:gs,Offcanvas:Ps,Popover:wo,ScrollSpy:qo,Tab:la,Toast:Sa,Tooltip:lo};return Oa}))},8937:function(t,e,n){"use strict";var r={};n.r(r),n.d(r,{afterMain:function(){return T},afterRead:function(){return b},afterWrite:function(){return k},applyStyles:function(){return P},arrow:function(){return st},auto:function(){return c},basePlacements:function(){return u},beforeMain:function(){return w},beforeRead:function(){return y},beforeWrite:function(){return I},bottom:function(){return s},clippingParents:function(){return d},computeStyles:function(){return ht},createPopper:function(){return ce},createPopperBase:function(){return oe},createPopperLite:function(){return le},detectOverflow:function(){return Rt},end:function(){return h},eventListeners:function(){return pt},flip:function(){return Mt},hide:function(){return Ft},left:function(){return a},main:function(){return E},modifierPhases:function(){return C},offset:function(){return qt},placements:function(){return v},popper:function(){return p},popperGenerator:function(){return se},popperOffsets:function(){return zt},preventOverflow:function(){return Gt},read:function(){return _},reference:function(){return m},right:function(){return o},start:function(){return l},top:function(){return i},variationPlacements:function(){return g},viewport:function(){return f},write:function(){return A}});n(6699),n(1703);var i="top",s="bottom",o="right",a="left",c="auto",u=[i,s,o,a],l="start",h="end",d="clippingParents",f="viewport",p="popper",m="reference",g=u.reduce((function(t,e){return t.concat([e+"-"+l,e+"-"+h])}),[]),v=[].concat(u,[c]).reduce((function(t,e){return t.concat([e,e+"-"+l,e+"-"+h])}),[]),y="beforeRead",_="read",b="afterRead",w="beforeMain",E="main",T="afterMain",I="beforeWrite",A="write",k="afterWrite",C=[y,_,b,w,E,T,I,A,k];function S(t){return t?(t.nodeName||"").toLowerCase():null}function O(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function N(t){var e=O(t).Element;return t instanceof e||t instanceof Element}function x(t){var e=O(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function R(t){if("undefined"===typeof ShadowRoot)return!1;var e=O(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function D(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},i=e.elements[t];x(i)&&S(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))}function L(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],i=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),o=s.reduce((function(t,e){return t[e]="",t}),{});x(r)&&S(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(t){r.removeAttribute(t)})))}))}}var P={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:L,requires:["computeStyles"]};function M(t){return t.split("-")[0]}var U=Math.max,j=Math.min,$=Math.round;function F(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),r=1,i=1;if(x(t)&&e){var s=t.offsetHeight,o=t.offsetWidth;o>0&&(r=$(n.width)/o||1),s>0&&(i=$(n.height)/s||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function V(t){var e=F(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function B(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&R(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(t){return O(t).getComputedStyle(t)}function H(t){return["table","td","th"].indexOf(S(t))>=0}function z(t){return((N(t)?t.ownerDocument:t.document)||window.document).documentElement}function W(t){return"html"===S(t)?t:t.assignedSlot||t.parentNode||(R(t)?t.host:null)||z(t)}function K(t){return x(t)&&"fixed"!==q(t).position?t.offsetParent:null}function G(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&x(t)){var r=q(t);if("fixed"===r.position)return null}var i=W(t);R(i)&&(i=i.host);while(x(i)&&["html","body"].indexOf(S(i))<0){var s=q(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function X(t){var e=O(t),n=K(t);while(n&&H(n)&&"static"===q(n).position)n=K(n);return n&&("html"===S(n)||"body"===S(n)&&"static"===q(n).position)?e:n||G(t)||e}function Q(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function J(t,e,n){return U(t,j(e,n))}function Y(t,e,n){var r=J(t,e,n);return r>n?n:r}function Z(){return{top:0,right:0,bottom:0,left:0}}function tt(t){return Object.assign({},Z(),t)}function et(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var nt=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,tt("number"!==typeof t?t:et(t,u))};function rt(t){var e,n=t.state,r=t.name,c=t.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=M(n.placement),d=Q(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var m=nt(c.padding,n),g=V(u),v="y"===d?i:a,y="y"===d?s:o,_=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],b=l[d]-n.rects.reference[d],w=X(u),E=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,T=_/2-b/2,I=m[v],A=E-g[p]-m[y],k=E/2-g[p]/2+T,C=J(I,k,A),S=d;n.modifiersData[r]=(e={},e[S]=C,e.centerOffset=C-k,e)}}function it(t){var e=t.state,n=t.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=e.elements.popper.querySelector(i),i))&&B(e.elements.popper,i)&&(e.elements.arrow=i)}var st={name:"arrow",enabled:!0,phase:"main",fn:rt,effect:it,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ot(t){return t.split("-")[1]}var at={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ct(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:$(e*i)/i||0,y:$(n*i)/i||0}}function ut(t){var e,n=t.popper,r=t.popperRect,c=t.placement,u=t.variation,l=t.offsets,d=t.position,f=t.gpuAcceleration,p=t.adaptive,m=t.roundOffsets,g=t.isFixed,v=l.x,y=void 0===v?0:v,_=l.y,b=void 0===_?0:_,w="function"===typeof m?m({x:y,y:b}):{x:y,y:b};y=w.x,b=w.y;var E=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),I=a,A=i,k=window;if(p){var C=X(n),S="clientHeight",N="clientWidth";if(C===O(n)&&(C=z(n),"static"!==q(C).position&&"absolute"===d&&(S="scrollHeight",N="scrollWidth")),c===i||(c===a||c===o)&&u===h){A=s;var x=g&&C===k&&k.visualViewport?k.visualViewport.height:C[S];b-=x-r.height,b*=f?1:-1}if(c===a||(c===i||c===s)&&u===h){I=o;var R=g&&C===k&&k.visualViewport?k.visualViewport.width:C[N];y-=R-r.width,y*=f?1:-1}}var D,L=Object.assign({position:d},p&&at),P=!0===m?ct({x:y,y:b}):{x:y,y:b};return y=P.x,b=P.y,f?Object.assign({},L,(D={},D[A]=T?"0":"",D[I]=E?"0":"",D.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",D)):Object.assign({},L,(e={},e[A]=T?b+"px":"",e[I]=E?y+"px":"",e.transform="",e))}function lt(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:M(e.placement),variation:ot(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ut(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ut(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var ht={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lt,data:{}},dt={passive:!0};function ft(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=O(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach((function(t){t.addEventListener("scroll",n.update,dt)})),a&&c.addEventListener("resize",n.update,dt),function(){s&&u.forEach((function(t){t.removeEventListener("scroll",n.update,dt)})),a&&c.removeEventListener("resize",n.update,dt)}}var pt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ft,data:{}},mt={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,(function(t){return mt[t]}))}var vt={start:"end",end:"start"};function yt(t){return t.replace(/start|end/g,(function(t){return vt[t]}))}function _t(t){var e=O(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function bt(t){return F(z(t)).left+_t(t).scrollLeft}function wt(t){var e=O(t),n=z(t),r=e.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+bt(t),y:a}}function Et(t){var e,n=z(t),r=_t(t),i=null==(e=t.ownerDocument)?void 0:e.body,s=U(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=U(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+bt(t),c=-r.scrollTop;return"rtl"===q(i||n).direction&&(a+=U(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Tt(t){var e=q(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function It(t){return["html","body","#document"].indexOf(S(t))>=0?t.ownerDocument.body:x(t)&&Tt(t)?t:It(W(t))}function At(t,e){var n;void 0===e&&(e=[]);var r=It(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),s=O(r),o=i?[s].concat(s.visualViewport||[],Tt(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(At(W(o)))}function kt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ct(t){var e=F(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function St(t,e){return e===f?kt(wt(t)):N(e)?Ct(e):kt(Et(z(t)))}function Ot(t){var e=At(W(t)),n=["absolute","fixed"].indexOf(q(t).position)>=0,r=n&&x(t)?X(t):t;return N(r)?e.filter((function(t){return N(t)&&B(t,r)&&"body"!==S(t)})):[]}function Nt(t,e,n){var r="clippingParents"===e?Ot(t):[].concat(e),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(e,n){var r=St(t,n);return e.top=U(r.top,e.top),e.right=j(r.right,e.right),e.bottom=j(r.bottom,e.bottom),e.left=U(r.left,e.left),e}),St(t,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function xt(t){var e,n=t.reference,r=t.element,c=t.placement,u=c?M(c):null,d=c?ot(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:e={x:f,y:n.y-r.height};break;case s:e={x:f,y:n.y+n.height};break;case o:e={x:n.x+n.width,y:p};break;case a:e={x:n.x-r.width,y:p};break;default:e={x:n.x,y:n.y}}var m=u?Q(u):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case l:e[m]=e[m]-(n[g]/2-r[g]/2);break;case h:e[m]=e[m]+(n[g]/2-r[g]/2);break;default:}}return e}function Rt(t,e){void 0===e&&(e={});var n=e,r=n.placement,a=void 0===r?t.placement:r,c=n.boundary,l=void 0===c?d:c,h=n.rootBoundary,g=void 0===h?f:h,v=n.elementContext,y=void 0===v?p:v,_=n.altBoundary,b=void 0!==_&&_,w=n.padding,E=void 0===w?0:w,T=tt("number"!==typeof E?E:et(E,u)),I=y===p?m:p,A=t.rects.popper,k=t.elements[b?I:y],C=Nt(N(k)?k:k.contextElement||z(t.elements.popper),l,g),S=F(t.elements.reference),O=xt({reference:S,element:A,strategy:"absolute",placement:a}),x=kt(Object.assign({},A,O)),R=y===p?x:S,D={top:C.top-R.top+T.top,bottom:R.bottom-C.bottom+T.bottom,left:C.left-R.left+T.left,right:R.right-C.right+T.right},L=t.modifiersData.offset;if(y===p&&L){var P=L[a];Object.keys(D).forEach((function(t){var e=[o,s].indexOf(t)>=0?1:-1,n=[i,s].indexOf(t)>=0?"y":"x";D[t]+=P[n]*e}))}return D}function Dt(t,e){void 0===e&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?v:c,h=ot(r),d=h?a?g:g.filter((function(t){return ot(t)===h})):u,f=d.filter((function(t){return l.indexOf(t)>=0}));0===f.length&&(f=d);var p=f.reduce((function(e,n){return e[n]=Rt(t,{placement:n,boundary:i,rootBoundary:s,padding:o})[M(n)],e}),{});return Object.keys(p).sort((function(t,e){return p[t]-p[e]}))}function Lt(t){if(M(t)===c)return[];var e=gt(t);return[yt(t),e,yt(e)]}function Pt(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,v=n.rootBoundary,y=n.altBoundary,_=n.flipVariations,b=void 0===_||_,w=n.allowedAutoPlacements,E=e.options.placement,T=M(E),I=T===E,A=p||(I||!b?[gt(E)]:Lt(E)),k=[E].concat(A).reduce((function(t,n){return t.concat(M(n)===c?Dt(e,{placement:n,boundary:g,rootBoundary:v,padding:m,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),C=e.rects.reference,S=e.rects.popper,O=new Map,N=!0,x=k[0],R=0;R<k.length;R++){var D=k[R],L=M(D),P=ot(D)===l,U=[i,s].indexOf(L)>=0,j=U?"width":"height",$=Rt(e,{placement:D,boundary:g,rootBoundary:v,altBoundary:y,padding:m}),F=U?P?o:a:P?s:i;C[j]>S[j]&&(F=gt(F));var V=gt(F),B=[];if(h&&B.push($[L]<=0),f&&B.push($[F]<=0,$[V]<=0),B.every((function(t){return t}))){x=D,N=!1;break}O.set(D,B)}if(N)for(var q=b?3:1,H=function(t){var e=k.find((function(e){var n=O.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return x=e,"break"},z=q;z>0;z--){var W=H(z);if("break"===W)break}e.placement!==x&&(e.modifiersData[r]._skip=!0,e.placement=x,e.reset=!0)}}var Mt={name:"flip",enabled:!0,phase:"main",fn:Pt,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function jt(t){return[i,o,s,a].some((function(e){return t[e]>=0}))}function $t(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=Rt(e,{elementContext:"reference"}),a=Rt(e,{altBoundary:!0}),c=Ut(o,r),u=Ut(a,i,s),l=jt(c),h=jt(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Ft={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$t};function Vt(t,e,n){var r=M(t),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},e,{placement:t})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*s,[a,o].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function Bt(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=void 0===i?[0,0]:i,o=v.reduce((function(t,n){return t[n]=Vt(n,e.rects,s),t}),{}),a=o[e.placement],c=a.x,u=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}var qt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Bt};function Ht(t){var e=t.state,n=t.name;e.modifiersData[n]=xt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var zt={name:"popperOffsets",enabled:!0,phase:"read",fn:Ht,data:{}};function Wt(t){return"x"===t?"y":"x"}function Kt(t){var e=t.state,n=t.options,r=t.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,_=n.tetherOffset,b=void 0===_?0:_,w=Rt(e,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),E=M(e.placement),T=ot(e.placement),I=!T,A=Q(E),k=Wt(A),C=e.modifiersData.popperOffsets,S=e.rects.reference,O=e.rects.popper,N="function"===typeof b?b(Object.assign({},e.rects,{placement:e.placement})):b,x="number"===typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),R=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,D={x:0,y:0};if(C){if(u){var L,P="y"===A?i:a,$="y"===A?s:o,F="y"===A?"height":"width",B=C[A],q=B+w[P],H=B-w[$],z=y?-O[F]/2:0,W=T===l?S[F]:O[F],K=T===l?-O[F]:-S[F],G=e.elements.arrow,tt=y&&G?V(G):{width:0,height:0},et=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Z(),nt=et[P],rt=et[$],it=J(0,S[F],tt[F]),st=I?S[F]/2-z-it-nt-x.mainAxis:W-it-nt-x.mainAxis,at=I?-S[F]/2+z+it+rt+x.mainAxis:K+it+rt+x.mainAxis,ct=e.elements.arrow&&X(e.elements.arrow),ut=ct?"y"===A?ct.clientTop||0:ct.clientLeft||0:0,lt=null!=(L=null==R?void 0:R[A])?L:0,ht=B+st-lt-ut,dt=B+at-lt,ft=J(y?j(q,ht):q,B,y?U(H,dt):H);C[A]=ft,D[A]=ft-B}if(d){var pt,mt="x"===A?i:a,gt="x"===A?s:o,vt=C[k],yt="y"===k?"height":"width",_t=vt+w[mt],bt=vt-w[gt],wt=-1!==[i,a].indexOf(E),Et=null!=(pt=null==R?void 0:R[k])?pt:0,Tt=wt?_t:vt-S[yt]-O[yt]-Et+x.altAxis,It=wt?vt+S[yt]+O[yt]-Et-x.altAxis:bt,At=y&&wt?Y(Tt,vt,It):J(y?Tt:_t,vt,y?It:bt);C[k]=At,D[k]=At-vt}e.modifiersData[r]=D}}var Gt={name:"preventOverflow",enabled:!0,phase:"main",fn:Kt,requiresIfExists:["offset"]};function Xt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Qt(t){return t!==O(t)&&x(t)?Xt(t):_t(t)}function Jt(t){var e=t.getBoundingClientRect(),n=$(e.width)/t.offsetWidth||1,r=$(e.height)/t.offsetHeight||1;return 1!==n||1!==r}function Yt(t,e,n){void 0===n&&(n=!1);var r=x(e),i=x(e)&&Jt(e),s=z(e),o=F(t,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==S(e)||Tt(s))&&(a=Qt(e)),x(e)?(c=F(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=bt(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Zt(t){var e=new Map,n=new Set,r=[];function i(t){n.add(t.name);var s=[].concat(t.requires||[],t.requiresIfExists||[]);s.forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&i(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),r}function te(t){var e=Zt(t);return C.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function ee(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function ne(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var re={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function se(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,i=e.defaultOptions,s=void 0===i?re:i;return function(t,e,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},re,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:N(t)?At(t):t.contextElement?At(t.contextElement):[],popper:At(e)};var a=te(ne([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(t){return t.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var t=i.elements,e=t.reference,n=t.popper;if(ie(e,n)){i.rects={reference:Yt(e,X(n),"fixed"===i.options.strategy),popper:V(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(t){return i.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:ee((function(){return new Promise((function(t){c.forceUpdate(),t(i)}))})),destroy:function(){l(),a=!0}};if(!ie(t,e))return c;function u(){i.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,s=t.effect;if("function"===typeof s){var a=s({state:i,name:e,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(t){return t()})),o=[]}return c.setOptions(n).then((function(t){!a&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var oe=se(),ae=[pt,zt,ht,P,qt,Mt,Gt,st,Ft],ce=se({defaultModifiers:ae}),ue=[pt,zt,ht,P],le=se({defaultModifiers:ue});
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const he=1e6,de=1e3,fe="transitionend",pe=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),me=t=>{do{t+=Math.floor(Math.random()*he)}while(document.getElementById(t));return t},ge=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},ve=t=>{const e=ge(t);return e&&document.querySelector(e)?e:null},ye=t=>{const e=ge(t);return e?document.querySelector(e):null},_e=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),i=Number.parseFloat(n);return r||i?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*de):0},be=t=>{t.dispatchEvent(new Event(fe))},we=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),Ee=t=>we(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,Te=(t,e,n)=>{Object.keys(n).forEach((r=>{const i=n[r],s=e[r],o=s&&we(s)?"element":pe(s);if(!new RegExp(i).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)}))},Ie=t=>!(!we(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),Ae=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),ke=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?ke(t.parentNode):null},Ce=()=>{},Se=t=>{t.offsetHeight},Oe=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},Ne=[],xe=t=>{"loading"===document.readyState?(Ne.length||document.addEventListener("DOMContentLoaded",(()=>{Ne.forEach((t=>t()))})),Ne.push(t)):t()},Re=()=>"rtl"===document.documentElement.dir,De=t=>{xe((()=>{const e=Oe();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}}))},Le=t=>{"function"===typeof t&&t()},Pe=(t,e,n=!0)=>{if(!n)return void Le(t);const r=5,i=_e(e)+r;let s=!1;const o=({target:n})=>{n===e&&(s=!0,e.removeEventListener(fe,o),Le(t))};e.addEventListener(fe,o),setTimeout((()=>{s||be(e)}),i)},Me=(t,e,n,r)=>{let i=t.indexOf(e);if(-1===i)return t[!n&&r?t.length-1:0];const s=t.length;return i+=n?1:-1,r&&(i=(i+s)%s),t[Math.max(0,Math.min(i,s-1))]},Ue=/[^.]*(?=\..*)\.|.*/,je=/\..*/,$e=/::\d+$/,Fe={};let Ve=1;const Be={mouseenter:"mouseover",mouseleave:"mouseout"},qe=/^(mouseenter|mouseleave)/i,He=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ze(t,e){return e&&`${e}::${Ve++}`||t.uidEvent||Ve++}function We(t){const e=ze(t);return t.uidEvent=e,Fe[e]=Fe[e]||{},Fe[e]}function Ke(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&en.off(t,r.type,e),e.apply(t,[r])}}function Ge(t,e,n){return function r(i){const s=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&en.off(t,i.type,e,n),n.apply(o,[i]);return null}}function Xe(t,e,n=null){const r=Object.keys(t);for(let i=0,s=r.length;i<s;i++){const s=t[r[i]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function Qe(t,e,n){const r="string"===typeof e,i=r?n:e;let s=tn(t);const o=He.has(s);return o||(s=t),[r,i,s]}function Je(t,e,n,r,i){if("string"!==typeof e||!t)return;if(n||(n=r,r=null),qe.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r?r=t(r):n=t(n)}const[s,o,a]=Qe(e,n,r),c=We(t),u=c[a]||(c[a]={}),l=Xe(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=ze(o,e.replace(Ue,"")),d=s?Ge(t,n,r):Ke(t,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,u[h]=d,t.addEventListener(a,d,s)}function Ye(t,e,n,r,i){const s=Xe(e[n],r,i);s&&(t.removeEventListener(n,s,Boolean(i)),delete e[n][s.uidEvent])}function Ze(t,e,n,r){const i=e[n]||{};Object.keys(i).forEach((s=>{if(s.includes(r)){const r=i[s];Ye(t,e,n,r.originalHandler,r.delegationSelector)}}))}function tn(t){return t=t.replace(je,""),Be[t]||t}const en={on(t,e,n,r){Je(t,e,n,r,!1)},one(t,e,n,r){Je(t,e,n,r,!0)},off(t,e,n,r){if("string"!==typeof e||!t)return;const[i,s,o]=Qe(e,n,r),a=o!==e,c=We(t),u=e.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void Ye(t,c,o,s,i?n:null)}u&&Object.keys(c).forEach((n=>{Ze(t,c,n,e.slice(1))}));const l=c[o]||{};Object.keys(l).forEach((n=>{const r=n.replace($e,"");if(!a||e.includes(r)){const e=l[n];Ye(t,c,o,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!==typeof e||!t)return null;const r=Oe(),i=tn(e),s=e!==i,o=He.has(i);let a,c=!0,u=!0,l=!1,h=null;return s&&r&&(a=r.Event(e,n),r(t).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((t=>{Object.defineProperty(h,t,{get(){return n[t]}})})),l&&h.preventDefault(),u&&t.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},nn=new Map,rn={set(t,e,n){nn.has(t)||nn.set(t,new Map);const r=nn.get(t);r.has(e)||0===r.size?r.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(t,e){return nn.has(t)&&nn.get(t).get(e)||null},remove(t,e){if(!nn.has(t))return;const n=nn.get(t);n.delete(e),0===n.size&&nn.delete(t)}},sn="5.1.3";class on{constructor(t){t=Ee(t),t&&(this._element=t,rn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){rn.remove(this._element,this.constructor.DATA_KEY),en.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){Pe(t,e,n)}static getInstance(t){return rn.get(Ee(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return sn}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const an=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,r=t.NAME;en.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ae(this))return;const i=ye(this)||this.closest(`.${r}`),s=t.getOrCreateInstance(i);s[e]()}))},cn="alert",un="bs.alert",ln=`.${un}`,hn=`close${ln}`,dn=`closed${ln}`,fn="fade",pn="show";class mn extends on{static get NAME(){return cn}close(){const t=en.trigger(this._element,hn);if(t.defaultPrevented)return;this._element.classList.remove(pn);const e=this._element.classList.contains(fn);this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),en.trigger(this._element,dn),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=mn.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}an(mn,"close"),De(mn);const gn="button",vn="bs.button",yn=`.${vn}`,_n=".data-api",bn="active",wn='[data-bs-toggle="button"]',En=`click${yn}${_n}`;class Tn extends on{static get NAME(){return gn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(bn))}static jQueryInterface(t){return this.each((function(){const e=Tn.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function In(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function An(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}en.on(document,En,wn,(t=>{t.preventDefault();const e=t.target.closest(wn),n=Tn.getOrCreateInstance(e);n.toggle()})),De(Tn);const kn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${An(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${An(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=In(t.dataset[n])})),e},getDataAttribute(t,e){return In(t.getAttribute(`data-bs-${An(e)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}},Cn=3,Sn={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const n=[];let r=t.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==Cn)r.matches(e)&&n.push(r),r=r.parentNode;return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!Ae(t)&&Ie(t)))}},On="carousel",Nn="bs.carousel",xn=`.${Nn}`,Rn=".data-api",Dn="ArrowLeft",Ln="ArrowRight",Pn=500,Mn=40,Un={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},jn={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$n="next",Fn="prev",Vn="left",Bn="right",qn={[Dn]:Bn,[Ln]:Vn},Hn=`slide${xn}`,zn=`slid${xn}`,Wn=`keydown${xn}`,Kn=`mouseenter${xn}`,Gn=`mouseleave${xn}`,Xn=`touchstart${xn}`,Qn=`touchmove${xn}`,Jn=`touchend${xn}`,Yn=`pointerdown${xn}`,Zn=`pointerup${xn}`,tr=`dragstart${xn}`,er=`load${xn}${Rn}`,nr=`click${xn}${Rn}`,rr="carousel",ir="active",sr="slide",or="carousel-item-end",ar="carousel-item-start",cr="carousel-item-next",ur="carousel-item-prev",lr="pointer-event",hr=".active",dr=".active.carousel-item",fr=".carousel-item",pr=".carousel-item img",mr=".carousel-item-next, .carousel-item-prev",gr=".carousel-indicators",vr="[data-bs-target]",yr="[data-bs-slide], [data-bs-slide-to]",_r='[data-bs-ride="carousel"]',br="touch",wr="pen";class Er extends on{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=Sn.findOne(gr,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Un}static get NAME(){return On}next(){this._slide($n)}nextWhenVisible(){!document.hidden&&Ie(this._element)&&this.next()}prev(){this._slide(Fn)}pause(t){t||(this._isPaused=!0),Sn.findOne(mr,this._element)&&(be(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=Sn.findOne(dr,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void en.one(this._element,zn,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const n=t>e?$n:Fn;this._slide(n,this._items[t])}_getConfig(t){return t={...Un,...kn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(On,t,jn),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=Mn)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Bn:Vn)}_addEventListeners(){this._config.keyboard&&en.on(this._element,Wn,(t=>this._keydown(t))),"hover"===this._config.pause&&(en.on(this._element,Kn,(t=>this.pause(t))),en.on(this._element,Gn,(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&(t.pointerType===wr||t.pointerType===br),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},r=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),Pn+this._config.interval))};Sn.find(pr,this._element).forEach((t=>{en.on(t,tr,(t=>t.preventDefault()))})),this._pointerEvent?(en.on(this._element,Yn,(t=>e(t))),en.on(this._element,Zn,(t=>r(t))),this._element.classList.add(lr)):(en.on(this._element,Xn,(t=>e(t))),en.on(this._element,Qn,(t=>n(t))),en.on(this._element,Jn,(t=>r(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=qn[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?Sn.find(fr,t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const n=t===$n;return Me(this._items,e,n,this._config.wrap)}_triggerSlideEvent(t,e){const n=this._getItemIndex(t),r=this._getItemIndex(Sn.findOne(dr,this._element));return en.trigger(this._element,Hn,{relatedTarget:t,direction:e,from:r,to:n})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=Sn.findOne(hr,this._indicatorsElement);e.classList.remove(ir),e.removeAttribute("aria-current");const n=Sn.find(vr,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[r].classList.add(ir),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||Sn.findOne(dr,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const n=this._directionToOrder(t),r=Sn.findOne(dr,this._element),i=this._getItemIndex(r),s=e||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===$n,u=c?ar:or,l=c?cr:ur,h=this._orderToDirection(n);if(s&&s.classList.contains(ir))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{en.trigger(this._element,zn,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(sr)){s.classList.add(l),Se(s),r.classList.add(u),s.classList.add(u);const t=()=>{s.classList.remove(u,l),s.classList.add(ir),r.classList.remove(ir,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,r,!0)}else r.classList.remove(ir),s.classList.add(ir),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[Bn,Vn].includes(t)?Re()?t===Vn?Fn:$n:t===Vn?$n:Fn:t}_orderToDirection(t){return[$n,Fn].includes(t)?Re()?t===Fn?Vn:Bn:t===Fn?Bn:Vn:t}static carouselInterface(t,e){const n=Er.getOrCreateInstance(t,e);let{_config:r}=n;"object"===typeof e&&(r={...r,...e});const i="string"===typeof e?e:r.slide;if("number"===typeof e)n.to(e);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){Er.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=ye(this);if(!e||!e.classList.contains(rr))return;const n={...kn.getDataAttributes(e),...kn.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),Er.carouselInterface(e,n),r&&Er.getInstance(e).to(r),t.preventDefault()}}en.on(document,nr,yr,Er.dataApiClickHandler),en.on(window,er,(()=>{const t=Sn.find(_r);for(let e=0,n=t.length;e<n;e++)Er.carouselInterface(t[e],Er.getInstance(t[e]))})),De(Er);const Tr="collapse",Ir="bs.collapse",Ar=`.${Ir}`,kr=".data-api",Cr={toggle:!0,parent:null},Sr={toggle:"boolean",parent:"(null|element)"},Or=`show${Ar}`,Nr=`shown${Ar}`,xr=`hide${Ar}`,Rr=`hidden${Ar}`,Dr=`click${Ar}${kr}`,Lr="show",Pr="collapse",Mr="collapsing",Ur="collapsed",jr=`:scope .${Pr} .${Pr}`,$r="collapse-horizontal",Fr="width",Vr="height",Br=".collapse.show, .collapse.collapsing",qr='[data-bs-toggle="collapse"]';class Hr extends on{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=Sn.find(qr);for(let r=0,i=n.length;r<i;r++){const t=n[r],e=ve(t),i=Sn.find(e).filter((t=>t===this._element));null!==e&&i.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Cr}static get NAME(){return Tr}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=Sn.find(jr,this._config.parent);e=Sn.find(Br,this._config.parent).filter((e=>!t.includes(e)))}const n=Sn.findOne(this._selector);if(e.length){const r=e.find((t=>n!==t));if(t=r?Hr.getInstance(r):null,t&&t._isTransitioning)return}const r=en.trigger(this._element,Or);if(r.defaultPrevented)return;e.forEach((e=>{n!==e&&Hr.getOrCreateInstance(e,{toggle:!1}).hide(),t||rn.set(e,Ir,null)}));const i=this._getDimension();this._element.classList.remove(Pr),this._element.classList.add(Mr),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Mr),this._element.classList.add(Pr,Lr),this._element.style[i]="",en.trigger(this._element,Nr)},o=i[0].toUpperCase()+i.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=en.trigger(this._element,xr);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Se(this._element),this._element.classList.add(Mr),this._element.classList.remove(Pr,Lr);const n=this._triggerArray.length;for(let i=0;i<n;i++){const t=this._triggerArray[i],e=ye(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Mr),this._element.classList.add(Pr),en.trigger(this._element,Rr)};this._element.style[e]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Lr)}_getConfig(t){return t={...Cr,...kn.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=Ee(t.parent),Te(Tr,t,Sr),t}_getDimension(){return this._element.classList.contains($r)?Fr:Vr}_initializeChildren(){if(!this._config.parent)return;const t=Sn.find(jr,this._config.parent);Sn.find(qr,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=ye(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(Ur):t.classList.add(Ur),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=Hr.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}en.on(document,Dr,qr,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=ve(this),n=Sn.find(e);n.forEach((t=>{Hr.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),De(Hr);const zr="dropdown",Wr="bs.dropdown",Kr=`.${Wr}`,Gr=".data-api",Xr="Escape",Qr="Space",Jr="Tab",Yr="ArrowUp",Zr="ArrowDown",ti=2,ei=new RegExp(`${Yr}|${Zr}|${Xr}`),ni=`hide${Kr}`,ri=`hidden${Kr}`,ii=`show${Kr}`,si=`shown${Kr}`,oi=`click${Kr}${Gr}`,ai=`keydown${Kr}${Gr}`,ci=`keyup${Kr}${Gr}`,ui="show",li="dropup",hi="dropend",di="dropstart",fi="navbar",pi='[data-bs-toggle="dropdown"]',mi=".dropdown-menu",gi=".navbar-nav",vi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",yi=Re()?"top-end":"top-start",_i=Re()?"top-start":"top-end",bi=Re()?"bottom-end":"bottom-start",wi=Re()?"bottom-start":"bottom-end",Ei=Re()?"left-start":"right-start",Ti=Re()?"right-start":"left-start",Ii={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ai={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class ki extends on{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Ii}static get DefaultType(){return Ai}static get NAME(){return zr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ae(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element},e=en.trigger(this._element,ii,t);if(e.defaultPrevented)return;const n=ki.getParentFromElement(this._element);this._inNavbar?kn.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(gi)&&[].concat(...document.body.children).forEach((t=>en.on(t,"mouseover",Ce))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ui),this._element.classList.add(ui),en.trigger(this._element,si,t)}hide(){if(Ae(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const e=en.trigger(this._element,ni,t);e.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>en.off(t,"mouseover",Ce))),this._popper&&this._popper.destroy(),this._menu.classList.remove(ui),this._element.classList.remove(ui),this._element.setAttribute("aria-expanded","false"),kn.removeDataAttribute(this._menu,"popper"),en.trigger(this._element,ri,t))}_getConfig(t){if(t={...this.constructor.Default,...kn.getDataAttributes(this._element),...t},Te(zr,t,this.constructor.DefaultType),"object"===typeof t.reference&&!we(t.reference)&&"function"!==typeof t.reference.getBoundingClientRect)throw new TypeError(`${zr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(t){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:we(this._config.reference)?e=Ee(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));this._popper=ce(e,this._menu,n),i&&kn.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(ui)}_getMenuElement(){return Sn.next(this._element,mi)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains(hi))return Ei;if(t.classList.contains(di))return Ti;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains(li)?e?_i:yi:e?wi:bi}_detectNavbar(){return null!==this._element.closest(`.${fi}`)}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=Sn.find(vi,this._menu).filter(Ie);n.length&&Me(n,e,t===Zr,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=ki.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(t.button===ti||"keyup"===t.type&&t.key!==Jr))return;const e=Sn.find(pi);for(let n=0,r=e.length;n<r;n++){const r=ki.getInstance(e[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(t){const e=t.composedPath(),n=e.includes(r._menu);if(e.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(t.target)&&("keyup"===t.type&&t.key===Jr||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(i.clickEvent=t)}r._completeHide(i)}}static getParentFromElement(t){return ye(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===Qr||t.key!==Xr&&(t.key!==Zr&&t.key!==Yr||t.target.closest(mi)):!ei.test(t.key))return;const e=this.classList.contains(ui);if(!e&&t.key===Xr)return;if(t.preventDefault(),t.stopPropagation(),Ae(this))return;const n=this.matches(pi)?this:Sn.prev(this,pi)[0],r=ki.getOrCreateInstance(n);if(t.key!==Xr)return t.key===Yr||t.key===Zr?(e||r.show(),void r._selectMenuItem(t)):void(e&&t.key!==Qr||ki.clearMenus());r.hide()}}en.on(document,ai,pi,ki.dataApiKeydownHandler),en.on(document,ai,mi,ki.dataApiKeydownHandler),en.on(document,oi,ki.clearMenus),en.on(document,ci,ki.clearMenus),en.on(document,oi,pi,(function(t){t.preventDefault(),ki.getOrCreateInstance(this).toggle()})),De(ki);const Ci=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Si=".sticky-top";class Oi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(Ci,"paddingRight",(e=>e+t)),this._setElementAttributes(Si,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const r=this.getWidth(),i=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+r)return;this._saveInitialAttribute(t,e);const i=window.getComputedStyle(t)[e];t.style[e]=`${n(Number.parseFloat(i))}px`};this._applyManipulationCallback(t,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Ci,"paddingRight"),this._resetElementAttributes(Si,"marginRight")}_saveInitialAttribute(t,e){const n=t.style[e];n&&kn.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=t=>{const n=kn.getDataAttribute(t,e);"undefined"===typeof n?t.style.removeProperty(e):(kn.removeDataAttribute(t,e),t.style[e]=n)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){we(t)?e(t):Sn.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const Ni={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},xi={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Ri="backdrop",Di="fade",Li="show",Pi=`mousedown.bs.${Ri}`;class Mi{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&Se(this._getElement()),this._getElement().classList.add(Li),this._emulateAnimation((()=>{Le(t)}))):Le(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(Li),this._emulateAnimation((()=>{this.dispose(),Le(t)}))):Le(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Di),this._element=t}return this._element}_getConfig(t){return t={...Ni,..."object"===typeof t?t:{}},t.rootElement=Ee(t.rootElement),Te(Ri,t,xi),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),en.on(this._getElement(),Pi,(()=>{Le(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(en.off(this._element,Pi),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){Pe(t,this._getElement(),this._config.isAnimated)}}const Ui={trapElement:null,autofocus:!0},ji={trapElement:"element",autofocus:"boolean"},$i="focustrap",Fi="bs.focustrap",Vi=`.${Fi}`,Bi=`focusin${Vi}`,qi=`keydown.tab${Vi}`,Hi="Tab",zi="forward",Wi="backward";class Ki{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),en.off(document,Vi),en.on(document,Bi,(t=>this._handleFocusin(t))),en.on(document,qi,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,en.off(document,Vi))}_handleFocusin(t){const{target:e}=t,{trapElement:n}=this._config;if(e===document||e===n||n.contains(e))return;const r=Sn.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===Wi?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===Hi&&(this._lastTabNavDirection=t.shiftKey?Wi:zi)}_getConfig(t){return t={...Ui,..."object"===typeof t?t:{}},Te($i,t,ji),t}}const Gi="modal",Xi="bs.modal",Qi=`.${Xi}`,Ji=".data-api",Yi="Escape",Zi={backdrop:!0,keyboard:!0,focus:!0},ts={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},es=`hide${Qi}`,ns=`hidePrevented${Qi}`,rs=`hidden${Qi}`,is=`show${Qi}`,ss=`shown${Qi}`,os=`resize${Qi}`,as=`click.dismiss${Qi}`,cs=`keydown.dismiss${Qi}`,us=`mouseup.dismiss${Qi}`,ls=`mousedown.dismiss${Qi}`,hs=`click${Qi}${Ji}`,ds="modal-open",fs="fade",ps="show",ms="modal-static",gs=".modal.show",vs=".modal-dialog",ys=".modal-body",_s='[data-bs-toggle="modal"]';class bs extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=Sn.findOne(vs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Oi}static get Default(){return Zi}static get NAME(){return Gi}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=en.trigger(this._element,is,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ds),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),en.on(this._dialog,ls,(()=>{en.one(this._element,us,(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=en.trigger(this._element,es);if(t.defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ps),en.off(this._element,as),en.off(this._dialog,ls),this._queueCallback((()=>this._hideModal()),this._element,e)}dispose(){[window,this._dialog].forEach((t=>en.off(t,Qi))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Mi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ki({trapElement:this._element})}_getConfig(t){return t={...Zi,...kn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(Gi,t,ts),t}_showElement(t){const e=this._isAnimated(),n=Sn.findOne(ys,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),e&&Se(this._element),this._element.classList.add(ps);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,en.trigger(this._element,ss,{relatedTarget:t})};this._queueCallback(r,this._dialog,e)}_setEscapeEvent(){this._isShown?en.on(this._element,cs,(t=>{this._config.keyboard&&t.key===Yi?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Yi||this._triggerBackdropTransition()})):en.off(this._element,cs)}_setResizeEvent(){this._isShown?en.on(window,os,(()=>this._adjustDialog())):en.off(window,os)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ds),this._resetAdjustments(),this._scrollBar.reset(),en.trigger(this._element,rs)}))}_showBackdrop(t){en.on(this._element,as,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains(fs)}_triggerBackdropTransition(){const t=en.trigger(this._element,ns);if(t.defaultPrevented)return;const{classList:e,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||e.contains(ms)||(i||(r.overflowY="hidden"),e.add(ms),this._queueCallback((()=>{e.remove(ms),i||this._queueCallback((()=>{r.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;(!n&&t&&!Re()||n&&!t&&Re())&&(this._element.style.paddingLeft=`${e}px`),(n&&!t&&!Re()||!n&&t&&Re())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=bs.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}en.on(document,hs,_s,(function(t){const e=ye(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),en.one(e,is,(t=>{t.defaultPrevented||en.one(e,rs,(()=>{Ie(this)&&this.focus()}))}));const n=Sn.findOne(gs);n&&bs.getInstance(n).hide();const r=bs.getOrCreateInstance(e);r.toggle(this)})),an(bs),De(bs);const ws="offcanvas",Es="bs.offcanvas",Ts=`.${Es}`,Is=".data-api",As=`load${Ts}${Is}`,ks="Escape",Cs={backdrop:!0,keyboard:!0,scroll:!1},Ss={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Os="show",Ns="offcanvas-backdrop",xs=".offcanvas.show",Rs=`show${Ts}`,Ds=`shown${Ts}`,Ls=`hide${Ts}`,Ps=`hidden${Ts}`,Ms=`click${Ts}${Is}`,Us=`keydown.dismiss${Ts}`,js='[data-bs-toggle="offcanvas"]';class $s extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return ws}static get Default(){return Cs}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=en.trigger(this._element,Rs,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Oi).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Os);const n=()=>{this._config.scroll||this._focustrap.activate(),en.trigger(this._element,Ds,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=en.trigger(this._element,Ls);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Os),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Oi).reset(),en.trigger(this._element,Ps)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...Cs,...kn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(ws,t,Ss),t}_initializeBackDrop(){return new Mi({className:Ns,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Ki({trapElement:this._element})}_addEventListeners(){en.on(this._element,Us,(t=>{this._config.keyboard&&t.key===ks&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=$s.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}en.on(document,Ms,js,(function(t){const e=ye(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ae(this))return;en.one(e,Ps,(()=>{Ie(this)&&this.focus()}));const n=Sn.findOne(xs);n&&n!==e&&$s.getInstance(n).hide();const r=$s.getOrCreateInstance(e);r.toggle(this)})),en.on(window,As,(()=>Sn.find(xs).forEach((t=>$s.getOrCreateInstance(t).show())))),an($s),De($s);const Fs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Vs=/^aria-[\w-]*$/i,Bs=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,qs=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Hs=(t,e)=>{const n=t.nodeName.toLowerCase();if(e.includes(n))return!Fs.has(n)||Boolean(Bs.test(t.nodeValue)||qs.test(t.nodeValue));const r=e.filter((t=>t instanceof RegExp));for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},zs={"*":["class","dir","id","lang","role",Vs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Ws(t,e,n){if(!t.length)return t;if(n&&"function"===typeof n)return n(t);const r=new window.DOMParser,i=r.parseFromString(t,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const t=s[o],n=t.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){t.remove();continue}const r=[].concat(...t.attributes),i=[].concat(e["*"]||[],e[n]||[]);r.forEach((e=>{Hs(e,i)||t.removeAttribute(e.nodeName)}))}return i.body.innerHTML}const Ks="tooltip",Gs="bs.tooltip",Xs=`.${Gs}`,Qs="bs-tooltip",Js=new Set(["sanitize","allowList","sanitizeFn"]),Ys={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Zs={AUTO:"auto",TOP:"top",RIGHT:Re()?"left":"right",BOTTOM:"bottom",LEFT:Re()?"right":"left"},to={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:zs,popperConfig:null},eo={HIDE:`hide${Xs}`,HIDDEN:`hidden${Xs}`,SHOW:`show${Xs}`,SHOWN:`shown${Xs}`,INSERTED:`inserted${Xs}`,CLICK:`click${Xs}`,FOCUSIN:`focusin${Xs}`,FOCUSOUT:`focusout${Xs}`,MOUSEENTER:`mouseenter${Xs}`,MOUSELEAVE:`mouseleave${Xs}`},no="fade",ro="modal",io="show",so="show",oo="out",ao=".tooltip-inner",co=`.${ro}`,uo="hide.bs.modal",lo="hover",ho="focus",fo="click",po="manual";class mo extends on{constructor(t,e){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return to}static get NAME(){return Ks}static get Event(){return eo}static get DefaultType(){return Ys}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(io))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),en.off(this._element.closest(co),uo,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=en.trigger(this._element,this.constructor.Event.SHOW),e=ke(this._element),n=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ao).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),i=me(this.constructor.NAME);r.setAttribute("id",i),this._element.setAttribute("aria-describedby",i),this._config.animation&&r.classList.add(no);const s="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,o=this._getAttachment(s);this._addAttachmentClass(o);const{container:a}=this._config;rn.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),en.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ce(this._element,r,this._getPopperConfig(o)),r.classList.add(io);const c=this._resolvePossibleFunction(this._config.customClass);c&&r.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>{en.on(t,"mouseover",Ce)}));const u=()=>{const t=this._hoverState;this._hoverState=null,en.trigger(this._element,this.constructor.Event.SHOWN),t===oo&&this._leave(null,this)},l=this.tip.classList.contains(no);this._queueCallback(u,this.tip,l)}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||(this._hoverState!==so&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),en.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=en.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;t.classList.remove(io),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>en.off(t,"mouseover",Ce))),this._activeTrigger[fo]=!1,this._activeTrigger[ho]=!1,this._activeTrigger[lo]=!1;const r=this.tip.classList.contains(no);this._queueCallback(e,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(no,io),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),ao)}_sanitizeAndSetContent(t,e,n){const r=Sn.findOne(n,t);e||!r?this.setElementContent(r,e):r.remove()}setElementContent(t,e){if(null!==t)return we(e)?(e=Ee(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Ws(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"===typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Zs[t.toUpperCase()]}_setListeners(){const t=this._config.trigger.split(" ");t.forEach((t=>{if("click"===t)en.on(this._element,this.constructor.Event.CLICK,this._config.selector,(t=>this.toggle(t)));else if(t!==po){const e=t===lo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=t===lo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;en.on(this._element,e,this._config.selector,(t=>this._enter(t))),en.on(this._element,n,this._config.selector,(t=>this._leave(t)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},en.on(this._element.closest(co),uo,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?ho:lo]=!0),e.getTipElement().classList.contains(io)||e._hoverState===so?e._hoverState=so:(clearTimeout(e._timeout),e._hoverState=so,e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=>{e._hoverState===so&&e.show()}),e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?ho:lo]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=oo,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=>{e._hoverState===oo&&e.hide()}),e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=kn.getDataAttributes(this._element);return Object.keys(e).forEach((t=>{Js.has(t)&&delete e[t]})),t={...this.constructor.Default,...e,..."object"===typeof t&&t?t:{}},t.container=!1===t.container?document.body:Ee(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),Te(Ks,t,this.constructor.DefaultType),t.sanitize&&(t.template=Ws(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=t.getAttribute("class").match(e);null!==n&&n.length>0&&n.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))}_getBasicClassPrefix(){return Qs}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=mo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}De(mo);const go="popover",vo="bs.popover",yo=`.${vo}`,_o="bs-popover",bo={...mo.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},wo={...mo.DefaultType,content:"(string|element|function)"},Eo={HIDE:`hide${yo}`,HIDDEN:`hidden${yo}`,SHOW:`show${yo}`,SHOWN:`shown${yo}`,INSERTED:`inserted${yo}`,CLICK:`click${yo}`,FOCUSIN:`focusin${yo}`,FOCUSOUT:`focusout${yo}`,MOUSEENTER:`mouseenter${yo}`,MOUSELEAVE:`mouseleave${yo}`},To=".popover-header",Io=".popover-body";class Ao extends mo{static get Default(){return bo}static get NAME(){return go}static get Event(){return Eo}static get DefaultType(){return wo}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),To),this._sanitizeAndSetContent(t,this._getContent(),Io)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return _o}static jQueryInterface(t){return this.each((function(){const e=Ao.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}De(Ao);const ko="scrollspy",Co="bs.scrollspy",So=`.${Co}`,Oo=".data-api",No={offset:10,method:"auto",target:""},xo={offset:"number",method:"string",target:"(string|element)"},Ro=`activate${So}`,Do=`scroll${So}`,Lo=`load${So}${Oo}`,Po="dropdown-item",Mo="active",Uo='[data-bs-spy="scroll"]',jo=".nav, .list-group",$o=".nav-link",Fo=".nav-item",Vo=".list-group-item",Bo=`${$o}, ${Vo}, .${Po}`,qo=".dropdown",Ho=".dropdown-toggle",zo="offset",Wo="position";class Ko extends on{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,en.on(this._scrollElement,Do,(()=>this._process())),this.refresh(),this._process()}static get Default(){return No}static get NAME(){return ko}refresh(){const t=this._scrollElement===this._scrollElement.window?zo:Wo,e="auto"===this._config.method?t:this._config.method,n=e===Wo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=Sn.find(Bo,this._config.target);r.map((t=>{const r=ve(t),i=r?Sn.findOne(r):null;if(i){const t=i.getBoundingClientRect();if(t.width||t.height)return[kn[e](i).top+n,r]}return null})).filter((t=>t)).sort(((t,e)=>t[0]-e[0])).forEach((t=>{this._offsets.push(t[0]),this._targets.push(t[1])}))}dispose(){en.off(this._scrollElement,So),super.dispose()}_getConfig(t){return t={...No,...kn.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},t.target=Ee(t.target)||document.documentElement,Te(ko,t,xo),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;){const n=this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&("undefined"===typeof this._offsets[e+1]||t<this._offsets[e+1]);n&&this._activate(this._targets[e])}}}_activate(t){this._activeTarget=t,this._clear();const e=Bo.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),n=Sn.findOne(e.join(","),this._config.target);n.classList.add(Mo),n.classList.contains(Po)?Sn.findOne(Ho,n.closest(qo)).classList.add(Mo):Sn.parents(n,jo).forEach((t=>{Sn.prev(t,`${$o}, ${Vo}`).forEach((t=>t.classList.add(Mo))),Sn.prev(t,Fo).forEach((t=>{Sn.children(t,$o).forEach((t=>t.classList.add(Mo)))}))})),en.trigger(this._scrollElement,Ro,{relatedTarget:t})}_clear(){Sn.find(Bo,this._config.target).filter((t=>t.classList.contains(Mo))).forEach((t=>t.classList.remove(Mo)))}static jQueryInterface(t){return this.each((function(){const e=Ko.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(window,Lo,(()=>{Sn.find(Uo).forEach((t=>new Ko(t)))})),De(Ko);const Go="tab",Xo="bs.tab",Qo=`.${Xo}`,Jo=".data-api",Yo=`hide${Qo}`,Zo=`hidden${Qo}`,ta=`show${Qo}`,ea=`shown${Qo}`,na=`click${Qo}${Jo}`,ra="dropdown-menu",ia="active",sa="fade",oa="show",aa=".dropdown",ca=".nav, .list-group",ua=".active",la=":scope > li > .active",ha='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',da=".dropdown-toggle",fa=":scope > .dropdown-menu .active";class pa extends on{static get NAME(){return Go}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ia))return;let t;const e=ye(this._element),n=this._element.closest(ca);if(n){const e="UL"===n.nodeName||"OL"===n.nodeName?la:ua;t=Sn.find(e,n),t=t[t.length-1]}const r=t?en.trigger(t,Yo,{relatedTarget:this._element}):null,i=en.trigger(this._element,ta,{relatedTarget:t});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{en.trigger(t,Zo,{relatedTarget:this._element}),en.trigger(this._element,ea,{relatedTarget:t})};e?this._activate(e,e.parentNode,s):s()}_activate(t,e,n){const r=!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?Sn.children(e,ua):Sn.find(la,e),i=r[0],s=n&&i&&i.classList.contains(sa),o=()=>this._transitionComplete(t,i,n);i&&s?(i.classList.remove(oa),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,n){if(e){e.classList.remove(ia);const t=Sn.findOne(fa,e.parentNode);t&&t.classList.remove(ia),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(ia),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Se(t),t.classList.contains(sa)&&t.classList.add(oa);let r=t.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(ra)){const e=t.closest(aa);e&&Sn.find(da,e).forEach((t=>t.classList.add(ia))),t.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=pa.getOrCreateInstance(this);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(document,na,ha,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ae(this))return;const e=pa.getOrCreateInstance(this);e.show()})),De(pa);const ma="toast",ga="bs.toast",va=`.${ga}`,ya=`mouseover${va}`,_a=`mouseout${va}`,ba=`focusin${va}`,wa=`focusout${va}`,Ea=`hide${va}`,Ta=`hidden${va}`,Ia=`show${va}`,Aa=`shown${va}`,ka="fade",Ca="hide",Sa="show",Oa="showing",Na={animation:"boolean",autohide:"boolean",delay:"number"},xa={animation:!0,autohide:!0,delay:5e3};class Ra extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Na}static get Default(){return xa}static get NAME(){return ma}show(){const t=en.trigger(this._element,Ia);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(ka);const e=()=>{this._element.classList.remove(Oa),en.trigger(this._element,Aa),this._maybeScheduleHide()};this._element.classList.remove(Ca),Se(this._element),this._element.classList.add(Sa),this._element.classList.add(Oa),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Sa))return;const t=en.trigger(this._element,Ea);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(Ca),this._element.classList.remove(Oa),this._element.classList.remove(Sa),en.trigger(this._element,Ta)};this._element.classList.add(Oa),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Sa)&&this._element.classList.remove(Sa),super.dispose()}_getConfig(t){return t={...xa,...kn.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},Te(ma,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){en.on(this._element,ya,(t=>this._onInteraction(t,!0))),en.on(this._element,_a,(t=>this._onInteraction(t,!1))),en.on(this._element,ba,(t=>this._onInteraction(t,!0))),en.on(this._element,wa,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Ra.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}an(Ra),De(Ra)},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},4028:function(t,e,n){"use strict";n.d(e,{Xb:function(){return he},h8:function(){return ye},v0:function(){return vr},Aj:function(){return ge},w$:function(){return fe},e5:function(){return de},w7:function(){return ve},ck:function(){return me}});n(1703),n(6699);var r=n(223),i=n(7077);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(t){_(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function A(){return"http:"===k()||"https:"===k()}function k(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,s={}){return M(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),x.fetch()(j(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new $(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);f(t,a)}}catch(s){if(s instanceof r.ZR)throw s;f(t,"network-request-failed")}}async function U(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function j(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?N(t.config,i):`${t.config.apiScheme}://${i}`}class ${constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function B(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=W(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(z(s.auth_time)),issuedAtTime:q(z(s.iat)),expirationTime:q(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(t){return 1e3*Number(t)}function W(t){var e;const[n,i,s]=t.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(i);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function K(t){const e=W(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await G(t,B(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new J(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=(0,r.m9)(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=j(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,V(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=e;v(_&&T,t,"internal-error");const I=rt.fromJSON(this.name,T);v("string"===typeof _,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof b,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(m,t.name),it(g,t.name),it(y,t.name);const A=new st({uid:_,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(A.providerData=E.map((t=>Object.assign({},t)))),m&&(A._redirectEventId=m),A}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(w(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||w(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function dt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function vt(t=(0,r.z$)()){return/webos/i.test(t)}function yt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _t(t=(0,r.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,r.w1)()&&10===document.documentMode}function wt(t=(0,r.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(r){n.reverse();for(const t of n)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=r)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ct(this),this.idTokenSubscription=new Ct(this),this.beforeStateQueue=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await Y(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function kt(t){return(0,r.m9)(t)}class Ct{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}async function xt(t,e){return P(t,"POST","/v1/accounts:sendOobCode",L(t,e))}async function Rt(t,e){return xt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Lt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends St{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Pt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Pt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Nt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ot(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="http://localhost";class jt extends St{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new jt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new jt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Mt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Mt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Mt(t,e)}buildRequest(){const t={requestUri:Ut,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function Ft(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function Vt(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const Bt={["USER_NOT_FOUND"]:"user-not-found"};async function qt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),Bt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends St{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Ht({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ht({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ft(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Vt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return qt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Ht({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wt(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class Kt{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=zt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Wt(t);try{return new Kt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(){this.providerId=Gt.PROVIDER_ID}static credential(t,e){return Pt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Kt.parseLink(e);return v(n,"argument-error"),Pt._fromEmailAndCode(t,n.code,n.tenantId)}}Gt.PROVIDER_ID="password",Gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Xt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Qt{constructor(){super("facebook.com")}static credential(t){return jt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch(e){return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Qt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return jt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Yt.credential(e,n)}catch(r){return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com",Yt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends Qt{constructor(){super("github.com")}static credential(t){return jt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Zt.credential(t.oauthAccessToken)}catch(e){return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com",Zt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te extends Qt{constructor(){super("twitter.com")}static credential(t,e){return jt._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return te.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ee(t,e){return U(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te.TWITTER_SIGN_IN_METHOD="twitter.com",te.PROVIDER_ID="twitter.com";class ne{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=re(n),o=new ne({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=re(n);return new ne({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function re(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ie.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ie(t,e,n,r)}}function se(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ie._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const r=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ne._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ae(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const r=await G(t,se(i,s,e,t),n);v(r.idToken,i,"internal-error");const o=W(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(t.uid===a,i,"user-mismatch"),ne._forOperation(t,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e,n=!1){const r="signIn",i=await se(t,r,e),s=await ne._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ue(t,e){return ce(kt(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(t,e,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e,n){const r=kt(t),i=await ee(r,{returnSecureToken:!0,email:e,password:n}),s=await ne._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function de(t,e,n){return ue((0,r.m9)(t),Gt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,e){const n=(0,r.m9)(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&le(n.auth,s,e);const{email:o}=await Rt(n.auth,s);o!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pe(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=(0,r.m9)(t),s=await i.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await G(i,pe(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:t})=>"password"===t));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function ge(t,e,n,i){return(0,r.m9)(t).onAuthStateChanged(e,n,i)}function ve(t){return(0,r.m9)(t).signOut()}async function ye(t){return(0,r.m9)(t).delete()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function be(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const we="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(we,"1"),this.storage.removeItem(we),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){const t=(0,r.z$)();return dt(t)||yt(t)}const Ie=1e3,Ae=10;class ke extends Ee{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Te()&&Et(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);bt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Ae):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Ie)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ke.type="LOCAL";const Ce=ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Ee{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Se.type="SESSION";const Oe=Se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new xe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Ne(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.receivers=[];class De{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Re("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function Pe(t){Le().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return"undefined"!==typeof Le()["WorkerGlobalScope"]&&"function"===typeof Le()["importScripts"]}async function Ue(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function je(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function $e(){return Me()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="firebaseLocalStorageDb",Ve=1,Be="firebaseLocalStorage",qe="fbase_key";class He{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ze(t,e){return t.transaction([Be],e?"readwrite":"readonly").objectStore(Be)}function We(){const t=indexedDB.deleteDatabase(Fe);return new He(t).toPromise()}function Ke(){const t=indexedDB.open(Fe,Ve);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Be,{keyPath:qe})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Be)?e(n):(n.close(),await We(),e(await Ke()))}))}))}async function Ge(t,e,n){const r=ze(t,!0).put({[qe]:e,value:n});return new He(r).toPromise()}async function Xe(t,e){const n=ze(t,!1).get(e),r=await new He(n).toPromise();return void 0===r?null:r.value}function Qe(t,e){const n=ze(t,!0).delete(e);return new He(n).toPromise()}const Je=800,Ye=3;class Ze{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ke()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ye)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Me()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xe._getInstance($e()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ue(),!this.activeServiceWorker)return;this.sender=new De(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&je()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ke();return await Ge(t,we,"1"),await Qe(t,we),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ge(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Xe(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Qe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ze(t,!1).getAll();return new He(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Je)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ze.type="LOCAL";const tn=Ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function nn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function sn(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",rn().appendChild(r)}))}function on(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="recaptcha";async function cn(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===an,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await _e(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await en(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await $t(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(t){this.providerId=un.PROVIDER_ID,this.auth=kt(t)}verifyPhoneNumber(t,e){return cn(this.auth,t,(0,r.m9)(e))}static credential(t,e){return Ht._fromVerification(t,e)}static credentialFromResult(t){const e=t;return un.credentialFromTaggedObject(e)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ht._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(t,e){return e?w(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";class hn extends St{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Mt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Mt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function dn(t){return ce(t.auth,new hn(t),t.bypassAuthState)}function fn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ae(n,new hn(t),t.bypassAuthState)}async function pn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),oe(n,new hn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dn;case"linkViaPopup":case"linkViaRedirect":return pn;case"reauthViaPopup":case"reauthViaRedirect":return fn;default:f(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new O(2e3,1e4);class vn extends mn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=Re();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,gn.get())};t()}}vn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn="pendingRedirect",_n=new Map;class bn extends mn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=_n.get(this.auth._key());if(!t){try{const e=await wn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}_n.set(this.auth._key(),t)}return this.bypassAuthState||_n.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function wn(t,e){const n=In(e),r=Tn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function En(t,e){_n.set(t._key(),e)}function Tn(t){return w(t._redirectPersistence)}function In(t){return ct(yn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e,n=!1){const r=kt(t),i=ln(r,e),s=new bn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn=6e5;class Cn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Nn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!On(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sn(t))}saveEventToCache(t){this.cachedEventUids.add(Sn(t)),this.lastProcessedEventTime=Date.now()}}function Sn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function On({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Nn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dn=/^https?/;async function Ln(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xn(t);for(const r of e)try{if(Pn(r))return}catch(n){}f(t,"unauthorized-domain")}function Pn(t){const e=I(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Dn.test(n))return!1;if(Rn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new O(3e4,6e4);function Un(){const t=Le().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function jn(t){return new Promise(((e,n)=>{var r,i,s;function o(){Un(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Un(),n(p(t,"network-request-failed"))},timeout:Mn.get()})}if(null===(i=null===(r=Le().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Le().gapi)||void 0===s?void 0:s.load)){const e=on("iframefcb");return Le()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw $n=null,t}))}let $n=null;function Fn(t){return $n=$n||jn(t),$n}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new O(5e3,15e3),Bn="__/auth/iframe",qn="emulator/auth/iframe",Hn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?N(e,qn):`https://${t.config.authDomain}/${Bn}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=zn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Kn(t){const e=await Fn(t),n=Le().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Wn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Le().setTimeout((()=>{r(i)}),Vn.get());function o(){Le().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xn=500,Qn=600,Jn="_blank",Yn="http://localhost";class Zn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function tr(t,e,n,i=Xn,s=Qn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Gn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ft(l)?Jn:n),ht(l)&&(e=e||Yn,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(_t(l)&&"_self"!==c)return er(e||"",c),new Zn(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Zn(d)}function er(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="__/auth/handler",rr="emulator/auth/handler";function ir(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof Xt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Qt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${sr(t)}?${(0,r.xO)(u).slice(1)}`}function sr({config:t}){return t.emulator?N(t,rr):`https://${t.authDomain}/${nr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class ar{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oe,this._completeRedirectFn=An,this._overrideRedirectResult=En}async _openPopup(t,e,n,r){var i;_(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=ir(t,e,n,I(),r);return tr(t,s,Re())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Pe(ir(t,e,n,I(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Kn(t),n=new Cn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(or,{type:or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==i&&e(!!i),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ln(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const cr=ar;class ur{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class lr extends ur{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new lr(t)}_finalizeEnroll(t,e,n){return be(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return nn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hr{constructor(){}static assertion(t){return lr._fromCredential(t)}}hr.FACTOR_ID="phone";var dr="@firebase/auth",fr="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gr(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new At(e,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=kt(t.getProvider("auth").getImmediate());return(t=>new pr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(dr,fr,mr(t)),(0,i.KN)(dr,fr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:cr,persistence:[tn,Ce,Oe]})}gr("Browser")},6035:function(t,e,n){"use strict";n.d(e,{ET:function(){return Sh},hJ:function(){return kl},JU:function(){return Cl},QT:function(){return Ih},PL:function(){return kh},ad:function(){return Nl},Xo:function(){return yh},IO:function(){return ph},r7:function(){return Ch},ar:function(){return gh}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(6699);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var I=0,A={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=I)){var t=m(this);delete A[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function S(t){t:{var e=Wn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var R,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var M=h.navigator;if(M){var U=M.userAgent;if(U){R=U;break t}}R=""}function j(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $(t){const e={};for(const n in t)e[n]=t[n];return e}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<F.length;e++)n=F[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function B(t){return B[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}B[" "]=d;var H,z=L(R,"Opera"),W=L(R,"Trident")||L(R,"MSIE"),K=L(R,"Edge"),G=K||W,X=L(R,"Gecko")&&!(L(R.toLowerCase(),"webkit")&&!L(R,"Edge"))&&!(L(R,"Trident")||L(R,"MSIE"))&&!L(R,"Edge"),Q=L(R.toLowerCase(),"webkit")&&!L(R,"Edge");function J(){var t=h.document;return t?t.documentMode:void 0}t:{var Y="",Z=function(){var t=R;return X?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Q?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Y=Z?Z[1]:""),W){var tt=J();if(null!=tt&&tt>parseFloat(Y)){H=String(tt);break t}}H=Y}var et,nt={};function rt(){return q((function(){let t=0;const e=D(String(H)).split("."),n=D("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=P(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==i[2].length,0==s[2].length)||P(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&W){var it=J();et=it||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{B(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},E(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=k(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function _t(t,e,n,r,i){if(r&&r.once)return Et(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[lt]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ct(t);if(a||(t[vt]=a=new pt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(At(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=kt;return t}function Et(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Et(t,e[s],n,r,i);return null}return n=Ot(n),t&&t[lt]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ot(n),t&&t[lt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gt(s,n,r,i),-1<n&&(ft(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,r,i)),(n=-1<t?e[t]:null)&&It(n))}function It(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lt])mt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(At(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ct(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):ft(t)}}}function At(t){return t in yt?yt[t]:yt[t]="on"+t}function kt(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&It(t),t=n.call(r,e)}return t}function Ct(t){return t=t[vt],t instanceof pt?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function Nt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function xt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),V(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Rt(o,r,!0,e)&&i}if(o=e.g=t,i=Rt(o,r,!0,e)&&i,i=Rt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Rt(o,r,!1,e)&&i}function Rt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Nt,T),Nt.prototype[lt]=!0,Nt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ft(n[r]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Dt=h.JSON.stringify;function Lt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=Ut.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Ut=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new jt),(t=>t.reset()));class jt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function $t(t){h.setTimeout((()=>{throw t}),0)}function Ft(t,e){Mt||Vt(),Bt||(Mt(),Bt=!0),qt.add(t,e)}function Vt(){var t=h.Promise.resolve(void 0);Mt=function(){t.then(Ht)}}var Bt=!1,qt=new Pt;function Ht(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){$t(n)}var e=Ut;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bt=!1}function zt(t,e){Nt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Wt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Gt(t){t.g=Kt((()=>{t.g=null,t.i&&(t.i=!1,Gt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(zt,Nt),r=zt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(Wt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){zt.Z.M.call(this),Wt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qt(t){T.call(this),this.h=t,this.g={}}E(Qt,T);var Jt=[];function Yt(t,e,n,r){Array.isArray(n)||(n&&(Jt[0]=n.toString()),n=Jt);for(var i=0;i<n.length;i++){var s=_t(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){j(t.g,(function(t,e){this.g.hasOwnProperty(e)&&It(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Dt(n)}catch(a){return e}}Qt.prototype.M=function(){Qt.Z.M.call(this),Zt(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Nt}function ue(t){at.call(this,oe.Ma,t)}function le(t){const e=ce();xt(e,new ue(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();xt(e,new he(e,t))}function fe(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",E(ue,at),oe.STAT_EVENT="statevent",E(he,at),oe.Na="timingevent",E(fe,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function _e(){}ve.prototype.h=null;var be,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ee(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ie(){}function Ae(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Qt(this),this.P=Ce,t=G?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}E(Ee,at),E(Te,at),E(Ie,ve),Ie.prototype.g=function(){return new XMLHttpRequest},Ie.prototype.i=function(){return{}},be=new Ie;var Ce=45e3,Se={},Oe={};function Ne(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),Pe(t),t.A=Xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ke,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(b(t.Ia,t,t.g),t.O)),Yt(t.V,t.g,"readystatechange",t.gb),e=t.H?$(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),le(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Re(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function De(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==Oe){4==e&&(t.o=4,de(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==Se){t.o=4,de(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),Fe(t,r)}Re(t)&&r!=Oe&&r!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(e),e.L=!0,de(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),$e(t),je(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Oe:(n=Number(e.substring(n,r)),isNaN(n)?Se:(r+=1,r+n>e.length?Oe:(e=e.substr(r,n),t.C=r+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Ue(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function je(t){0==t.l.G||t.I||yr(t.l,t)}function $e(t){Ue(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Wt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||An(n.i,t)))if(n.I=t.N,!t.J&&An(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),sr(n)}pr(n),de(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=In(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&vr(n),!x(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Er(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ue(a),Pe(a)),r.g=o}else fr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||br(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?br(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}le(4)}catch(u){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)C(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ve(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ze(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ze(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ae.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Yn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Yn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||G||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==e||le(8==e||0>=d?3:2),Ue(this);var n=this.g.ba();this.N=n;e:if(Re(this)){var r=Zn(this.g);t="";var i=r.length,s=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){$e(this),je(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,de(12),$e(this),je(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,n)}this.U?(De(this,l,o),G&&this.i&&3==l&&(Yt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),Fe(this,o)),4==l&&$e(this),this.i&&!this.I&&(4==l?yr(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),$e(this),je(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Yn(this.g),e=this.g.ga();this.C<e.length&&(Ue(this),De(this,t,e),this.i&&4!=t&&Pe(this))}},r.cancel=function(){this.I=!0,$e(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(le(3),de(17)),$e(this),this.o=2,je(this)):Me(this,this.Y-t)},r=qe.prototype,r.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return He(this),this.g.concat()},r.get=function(t,e){return ze(this.h,t)?this.h[t]:e},r.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,Qe(this,t.j),this.s=t.s,Je(this,t.i),Ye(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(We))?(this.g=!!e,Qe(this,n[1]||"",!0),this.s=sn(n[2]||""),Je(this,n[3]||"",!0),Ye(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Xe(t){return new Ge(t)}function Qe(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Je(t,e,n){t.i=n?sn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof fn?(t.h=e,_n(t.h,t.g)):(n||(e=on(e,hn)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ge?Xe(t):new Ge(t,void 0)}function rn(t,e,n,r){var i=new Ge(null,void 0);return t&&Qe(i,t),e&&Je(i,e),n&&Ye(i,n),r&&(i.l=r),i}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){pn(t),e=yn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function gn(t,e){return pn(t),e=yn(t,e),ze(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),N(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _n(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}r=fn.prototype,r.add=function(t,e){pn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){C(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=O(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=yn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||En,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function In(t){return t.h?1:t.g?t.g.size:0}function An(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function kn(t,e){t.g?t.g.add(e):t.h=e}function Cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Sn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function On(){}function Nn(){this.g=new On}function xn(t,e,n){const r=n||"";try{Be(t,(function(t,n){let i=t;p(t)&&(i=Dt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=w(Dn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(Dn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(Dn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(Dn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Dn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},On.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Ln,ve),Ln.prototype.g=function(){return new Pn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),E(Pn,Nt);var Mn=0;function Un(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function jn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$n(t)}function $n(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Pn.prototype,r.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$n(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,jn(this)),this.readyState=Mn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Un(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jn(this):$n(this),3==this.readyState&&Un(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,jn(this))},r.Ta=function(t){this.g&&(this.response=t,jn(this))},r.ha=function(){this.g&&jn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fn=h.JSON.parse;function Vn(t){Nt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}E(Vn,Nt);var Bn="",qn=/^https?$/i,Hn=["POST","PUT"];function zn(t){return W&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),Qn(t)}function Gn(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Yn(t)||2!=t.ba()))if(t.v&&4==Yn(t))Kt(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Yn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(We)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Gn(t)}}finally{Qn(t)}}}function Qn(t,e){if(t.g){Jn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||xt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return j(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(or(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Ae(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}wr(t)}function sr(t){t.g&&(mr(t),t.g.cancel(),t.g=null)}function or(t){sr(t),t.u&&(h.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,Ft(t.Ha,t),t.C=0)}function ur(t,e){return!(In(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),_r(t,t.C)),t.C++,!0))}function lr(t,e){var n;n=e?e.m:t.V++;const r=Xe(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Ae(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=dr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kn(t.i,n),Ne(n,r,e)}function hr(t,e){t.j&&Be({},(function(t,n){tn(e,n,t)}))}function dr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{xn(a,t,"req"+n+"_")}catch(Jr){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function fr(t){t.g||t.u||(t.Y=1,Ft(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),_r(t,t.A)),t.A++,!0)}function mr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function gr(t){t.g=new Ae(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,xe(n,t)}function vr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yr(t,e){var n=null;if(t.g==e){vr(t),mr(t),t.g=null;var r=2}else{if(!An(t.i,e))return;n=e.D,Cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),xt(r,new fe(r,n,e,i)),cr(t)}else fr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ur(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function _r(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Qe(n,"https"),en(n)),Rn(n.toString(),r)}else de(2);t.G=0,t.j&&t.j.va(e),wr(t),or(t)}function wr(t){t.G=0,t.I=-1,t.j&&(0==Sn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function Er(t,e,n){let r=nn(n);if(""!=r.i)e&&Je(r,e+"."+r.i),Ye(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&j(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new Ln({ib:!0})):new Vn(t.qa),e.L=t.H,e}function Ir(){}function Ar(){if(W&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function kr(t,e){Nt.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}function Cr(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Sr(){Te.call(this),this.status=1}function Or(t){this.g=t}r=Vn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ye(this.u):ye(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Kn(this,s)}t=n||"";const i=new qe(this.headers);r&&Be(r,(function(t,e){i.set(e,t)})),r=S(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=k(Hn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Qn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),Vn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},r.cb=function(){Xn(this)},r.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ae(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=$(s),V(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=dr(this,i,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&er(n,this.o,s),kn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Ne(i,n,null)):Ne(i,n,e),this.G=2}}else 3==this.G&&(t?lr(this,t):0==this.l.length||Tn(this.i)||lr(this))},r.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),sr(this),gr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),de(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},r=Ir.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ar.prototype.g=function(t,e){return new kr(t,e)},E(kr,Nt),kr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ft(b(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Er(t,null,t.W),cr(t)},kr.prototype.close=function(){ir(this.g)},kr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=Dt(t),ar(this.g,e)):ar(this.g,t)},kr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,kr.Z.M.call(this)},E(Cr,Ee),E(Sr,Te),E(Or,Ir),Or.prototype.xa=function(){xt(this.g,"a")},Or.prototype.wa=function(t){xt(this.g,new Cr(t))},Or.prototype.va=function(t){xt(this.g,new Sr(t))},Or.prototype.ua=function(){xt(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,kr.prototype.send=kr.prototype.u,kr.prototype.open=kr.prototype.m,kr.prototype.close=kr.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",_e.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Nr=u.createWebChannelTransport=function(){return new Ar},xr=u.getStatEventTarget=function(){return ce()},Rr=u.ErrorCode=me,Dr=u.EventType=ge,Lr=u.Event=oe,Pr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Ln,Ur=u.WebChannel=_e,jr=u.XhrIo=Vn;const $r="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Fr.UNAUTHENTICATED=new Fr(null),Fr.GOOGLE_CREDENTIALS=new Fr("google-credentials-uid"),Fr.FIRST_PARTY=new Fr("first-party-uid"),Fr.MOCK_USER=new Fr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vr="9.9.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new o.Yd("@firebase/firestore");function qr(){return Br.logLevel}function Hr(t,...e){if(Br.logLevel<=o["in"].DEBUG){const n=e.map(Kr);Br.debug(`Firestore (${Vr}): ${t}`,...n)}}function zr(t,...e){if(Br.logLevel<=o["in"].ERROR){const n=e.map(Kr);Br.error(`Firestore (${Vr}): ${t}`,...n)}}function Wr(t,...e){if(Br.logLevel<=o["in"].WARN){const n=e.map(Kr);Br.warn(`Firestore (${Vr}): ${t}`,...n)}}function Kr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t="Unexpected state"){const e=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+t;throw zr(e),new Error(e)}function Xr(t,e){t||Gr()}function Qr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Yr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Fr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=Fr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Hr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xr(null===t||"string"==typeof t),new Fr(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=Fr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Fr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Hr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Hr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xr("string"==typeof t.token),this.p=t.token,new si(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ai(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ai(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function ui(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Yr(Jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Yr(Jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Yr(Jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Yr(Jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hi.fromMillis(Date.now())}static fromDate(t){return hi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ui(this.nanoseconds,t.nanoseconds):ui(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.timestamp=t}static fromTimestamp(t){return new di(t)}static min(){return new di(new hi(0,0))}static max(){return new di(new hi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Gr(),void 0===n?n=t.length-e:n>t.length-e&&Gr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===fi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pi extends fi{construct(t,e,n){return new pi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Yr(Jr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new pi(e)}static emptyPath(){return new pi([])}}const mi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gi extends fi{construct(t,e,n){return new gi(t,e,n)}static isValidIdentifier(t){return mi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Yr(Jr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Yr(Jr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Yr(Jr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Yr(Jr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gi(e)}static emptyPath(){return new gi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t){this.path=t}static fromPath(t){return new vi(pi.fromString(t))}static fromName(t){return new vi(pi.fromString(t).popFirst(5))}static empty(){return new vi(pi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===pi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return pi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vi(new pi(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}yi.UNKNOWN_ID=-1;function _i(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=di.fromTimestamp(1e9===r?new hi(n+1,0):new hi(n,r));return new wi(i,vi.empty(),e)}function bi(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new wi(di.min(),vi.empty(),-1)}static max(){return new wi(di.max(),vi.empty(),-1)}}function Ei(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=vi.comparator(t.documentKey,e.documentKey),0!==n?n:ui(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ii{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t){if(t.code!==Jr.FAILED_PRECONDITION||t.message!==Ti)throw t;Hr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Gr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ki(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ki?e:ki.resolve(e)}catch(t){return ki.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ki.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ki.reject(e)}static resolve(t){return new ki(((e,n)=>{e(t)}))}static reject(t){return new ki(((e,n)=>{n(t)}))}static waitFor(t){return new ki(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=ki.resolve(!1);for(const n of t)e=e.next((t=>t?ki.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ki(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new ki(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Si.ot=-1;class Ri{constructor(t,e){this.comparator=t,this.root=e||Li.EMPTY}insert(t,e){return new Ri(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Li.BLACK,null,null))}remove(t){return new Ri(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Li.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Di(this.root,t,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Di(this.root,t,this.comparator,!0)}}class Di{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Li{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Li.RED,this.left=null!=r?r:Li.EMPTY,this.right=null!=i?i:Li.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Li(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Li.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Li.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Li.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Li.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gr();if(this.right.isRed())throw Gr();const t=this.left.check();if(t!==this.right.check())throw Gr();return t+(this.isRed()?0:1)}}Li.EMPTY=null,Li.RED=!0,Li.BLACK=!1,Li.EMPTY=new class{constructor(){this.size=0}get key(){throw Gr()}get value(){throw Gr()}get color(){throw Gr()}get left(){throw Gr()}get right(){throw Gr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Li(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi{constructor(t){this.comparator=t,this.data=new Ri(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mi(this.data.getIterator())}getIteratorFrom(t){return new Mi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Pi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Pi(this.comparator);return e.data=t,e}}class Mi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(t){this.fields=t,t.sort(gi.comparator)}static empty(){return new Ui([])}unionWith(t){let e=new Pi(gi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ui(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return li(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ji(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ji(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ui(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ji.EMPTY_BYTE_STRING=new ji("");const $i=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(t){if(Xr(!!t),"string"==typeof t){let e=0;const n=$i.exec(t);if(Xr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Vi(t.seconds),nanos:Vi(t.nanos)}}function Vi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Bi(t){return"string"==typeof t?ji.fromBase64String(t):ji.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hi(t){const e=t.mapValue.fields.__previous_value__;return qi(e)?Hi(e):e}function zi(t){const e=Fi(t.mapValue.fields.__local_write_time__.timestampValue);return new hi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ki{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ki("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ki&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){return null==t}function Xi(t){return 0===t&&1/t==-1/0}function Qi(t){return"number"==typeof t&&Number.isInteger(t)&&!Xi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qi(t)?4:ds(t)?9007199254740991:10:Gr()}function Zi(t,e){if(t===e)return!0;const n=Yi(t);if(n!==Yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zi(t).isEqual(zi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Fi(t.timestampValue),r=Fi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Bi(t.bytesValue).isEqual(Bi(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Vi(t.geoPointValue.latitude)===Vi(e.geoPointValue.latitude)&&Vi(t.geoPointValue.longitude)===Vi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Vi(t.integerValue)===Vi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Vi(t.doubleValue),r=Vi(e.doubleValue);return n===r?Xi(n)===Xi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],Zi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Oi(n)!==Oi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Zi(n[i],r[i])))return!1;return!0}(t,e);default:return Gr()}}function ts(t,e){return void 0!==(t.values||[]).find((t=>Zi(t,e)))}function es(t,e){if(t===e)return 0;const n=Yi(t),r=Yi(e);if(n!==r)return ui(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ui(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Vi(t.integerValue||t.doubleValue),r=Vi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ns(t.timestampValue,e.timestampValue);case 4:return ns(zi(t),zi(e));case 5:return ui(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Bi(t),r=Bi(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=ui(n[i],r[i]);if(0!==t)return t}return ui(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ui(Vi(t.latitude),Vi(e.latitude));return 0!==n?n:ui(Vi(t.longitude),Vi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=es(n[i],r[i]);if(t)return t}return ui(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ji.mapValue&&e===Ji.mapValue)return 0;if(t===Ji.mapValue)return 1;if(e===Ji.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=ui(r[o],s[o]);if(0!==t)return t;const e=es(n[r[o]],i[s[o]]);if(0!==e)return e}return ui(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Gr()}}function ns(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ui(t,e);const n=Fi(t),r=Fi(e),i=ui(n.seconds,r.seconds);return 0!==i?i:ui(n.nanos,r.nanos)}function rs(t){return is(t)}function is(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Fi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,vi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=is(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${is(t.fields[i])}`;return n+"}"}(t.mapValue):Gr();var e,n}function ss(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function os(t){return!!t&&"integerValue"in t}function as(t){return!!t&&"arrayValue"in t}function cs(t){return!!t&&"nullValue"in t}function us(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ls(t){return!!t&&"mapValue"in t}function hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=hs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ds(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(t){this.value=t}static empty(){return new fs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ls(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hs(e)}setAll(t){let e=gi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=hs(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ls(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ls(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ni(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new fs(hs(this.value))}}function ps(t){const e=[];return Ni(t.fields,((t,n)=>{const r=new gi([t]);if(ls(n)){const t=ps(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ui(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ms{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new ms(t,0,di.min(),di.min(),fs.empty(),0)}static newFoundDocument(t,e,n){return new ms(t,1,e,di.min(),n,0)}static newNoDocument(t,e){return new ms(t,2,e,di.min(),fs.empty(),0)}static newUnknownDocument(t,e){return new ms(t,3,e,di.min(),fs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=di.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ms&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ms(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function vs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gs(t,e,n,r,i,s,o)}function ys(t){const e=Qr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+rs(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>rs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>rs(t))).join(",")),e.ut=t}return e.ut}function _s(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${rs(e.value)}`;var e})).join(", ")}]`),Gi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>rs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>rs(t))).join(",")),`Target(${e})`}function bs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ds(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Zi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ps(t.startAt,e.startAt)&&Ps(t.endAt,e.endAt)}function ws(t){return vi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Es extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Ts(t,e,n):"array-contains"===e?new Cs(t,n):"in"===e?new Ss(t,n):"not-in"===e?new Os(t,n):"array-contains-any"===e?new Ns(t,n):new Es(t,e,n)}static ct(t,e,n){return"in"===e?new Is(t,n):new As(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(es(e,this.value)):null!==e&&Yi(this.value)===Yi(e)&&this.at(es(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Gr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ts extends Es{constructor(t,e,n){super(t,e,n),this.key=vi.fromName(n.referenceValue)}matches(t){const e=vi.comparator(t.key,this.key);return this.at(e)}}class Is extends Es{constructor(t,e){super(t,"in",e),this.keys=ks("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class As extends Es{constructor(t,e){super(t,"not-in",e),this.keys=ks("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ks(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>vi.fromName(t.referenceValue)))}class Cs extends Es{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return as(e)&&ts(e.arrayValue,this.value)}}class Ss extends Es{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ts(this.value.arrayValue,e)}}class Os extends Es{constructor(t,e){super(t,"not-in",e)}matches(t){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ts(this.value.arrayValue,e)}}class Ns extends Es{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!as(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ts(this.value.arrayValue,t)))}}class xs{constructor(t,e){this.position=t,this.inclusive=e}}class Rs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ds(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ls(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?vi.comparator(vi.fromName(o.referenceValue),n.key):es(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ps(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Us(t,e,n,r,i,s,o,a){return new Ms(t,e,n,r,i,s,o,a)}function js(t){return new Ms(t)}function $s(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Fs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vs(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Bs(t){return null!==t.collectionGroup}function qs(t){const e=Qr(t);if(null===e.lt){e.lt=[];const t=Vs(e),n=Fs(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Rs(t)),e.lt.push(new Rs(gi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Rs(gi.keyField(),t))}}}return e.lt}function Hs(t){const e=Qr(t);if(!e.ft)if("F"===e.limitType)e.ft=vs(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of qs(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Rs(i.field,e))}const n=e.endAt?new xs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new xs(e.startAt.position,e.startAt.inclusive):null;e.ft=vs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function zs(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ws(t,e){return bs(Hs(t),Hs(e))&&t.limitType===e.limitType}function Ks(t){return`${ys(Hs(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${_s(Hs(t))}; limitType=${t.limitType})`}function Xs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):vi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ls(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,qs(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ls(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,qs(t),e))}(t,e)}function Qs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Js(t){return(e,n)=>{let r=!1;for(const i of qs(t)){const t=Ys(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ys(t,e,n){const r=t.field.isKeyField()?vi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?es(r,i):Gr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Gr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function to(t){return{integerValue:""+t}}function eo(t,e){return Qi(e)?to(e):Zs(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this._=void 0}}function ro(t,e,n){return t instanceof oo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ao?co(t,e):t instanceof uo?lo(t,e):function(t,e){const n=so(t,e),r=fo(n)+fo(t._t);return os(n)&&os(t._t)?to(r):Zs(t.wt,r)}(t,e)}function io(t,e,n){return t instanceof ao?co(t,e):t instanceof uo?lo(t,e):n}function so(t,e){return t instanceof ho?os(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class oo extends no{}class ao extends no{constructor(t){super(),this.elements=t}}function co(t,e){const n=po(e);for(const r of t.elements)n.some((t=>Zi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class uo extends no{constructor(t){super(),this.elements=t}}function lo(t,e){let n=po(e);for(const r of t.elements)n=n.filter((t=>!Zi(t,r)));return{arrayValue:{values:n}}}class ho extends no{constructor(t,e){super(),this.wt=t,this._t=e}}function fo(t){return Vi(t.integerValue||t.doubleValue)}function po(t){return as(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ao&&e instanceof ao||t instanceof uo&&e instanceof uo?li(t.elements,e.elements,Zi):t instanceof ho&&e instanceof ho?Zi(t._t,e._t):t instanceof oo&&e instanceof oo}(t.transform,e.transform)}class go{constructor(t,e){this.version=t,this.transformResults=e}}class vo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new vo}static exists(t){return new vo(void 0,t)}static updateTime(t){return new vo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class _o{}function bo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new No(t.key,vo.none()):new Ao(t.key,t.data,vo.none());{const n=t.data,r=fs.empty();let i=new Pi(gi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ko(t.key,r,new Ui(i.toArray()),vo.none())}}function wo(t,e,n){t instanceof Ao?function(t,e,n){const r=t.value.clone(),i=So(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ko?function(t,e,n){if(!yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=So(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Co(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof Ao?function(t,e,n,r){if(!yo(t.precondition,e))return n;const i=t.value.clone(),s=Oo(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ko?function(t,e,n,r){if(!yo(t.precondition,e))return n;const i=Oo(t.fieldTransforms,r,e),s=e.data;return s.setAll(Co(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return yo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function To(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=so(r.transform,t||null);null!=i&&(null===n&&(n=fs.empty()),n.set(r.field,i))}return n||null}function Io(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&li(t,e,((t,e)=>mo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends _o{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ko extends _o{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Co(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function So(t,e,n){const r=new Map;Xr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,io(o,a,n[i]))}return r}function Oo(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ro(t,s,e))}return r}class No extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xo extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Do,Lo;function Po(t){switch(t){default:return Gr();case Jr.CANCELLED:case Jr.UNKNOWN:case Jr.DEADLINE_EXCEEDED:case Jr.RESOURCE_EXHAUSTED:case Jr.INTERNAL:case Jr.UNAVAILABLE:case Jr.UNAUTHENTICATED:return!1;case Jr.INVALID_ARGUMENT:case Jr.NOT_FOUND:case Jr.ALREADY_EXISTS:case Jr.PERMISSION_DENIED:case Jr.FAILED_PRECONDITION:case Jr.ABORTED:case Jr.OUT_OF_RANGE:case Jr.UNIMPLEMENTED:case Jr.DATA_LOSS:return!0}}function Mo(t){if(void 0===t)return zr("GRPC error has no .code"),Jr.UNKNOWN;switch(t){case Do.OK:return Jr.OK;case Do.CANCELLED:return Jr.CANCELLED;case Do.UNKNOWN:return Jr.UNKNOWN;case Do.DEADLINE_EXCEEDED:return Jr.DEADLINE_EXCEEDED;case Do.RESOURCE_EXHAUSTED:return Jr.RESOURCE_EXHAUSTED;case Do.INTERNAL:return Jr.INTERNAL;case Do.UNAVAILABLE:return Jr.UNAVAILABLE;case Do.UNAUTHENTICATED:return Jr.UNAUTHENTICATED;case Do.INVALID_ARGUMENT:return Jr.INVALID_ARGUMENT;case Do.NOT_FOUND:return Jr.NOT_FOUND;case Do.ALREADY_EXISTS:return Jr.ALREADY_EXISTS;case Do.PERMISSION_DENIED:return Jr.PERMISSION_DENIED;case Do.FAILED_PRECONDITION:return Jr.FAILED_PRECONDITION;case Do.ABORTED:return Jr.ABORTED;case Do.OUT_OF_RANGE:return Jr.OUT_OF_RANGE;case Do.UNIMPLEMENTED:return Jr.UNIMPLEMENTED;case Do.DATA_LOSS:return Jr.DATA_LOSS;default:return Gr()}}(Lo=Do||(Do={}))[Lo.OK=0]="OK",Lo[Lo.CANCELLED=1]="CANCELLED",Lo[Lo.UNKNOWN=2]="UNKNOWN",Lo[Lo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lo[Lo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lo[Lo.NOT_FOUND=5]="NOT_FOUND",Lo[Lo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lo[Lo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lo[Lo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lo[Lo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lo[Lo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lo[Lo.ABORTED=10]="ABORTED",Lo[Lo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lo[Lo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lo[Lo.INTERNAL=13]="INTERNAL",Lo[Lo.UNAVAILABLE=14]="UNAVAILABLE",Lo[Lo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ni(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return xi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Ri(vi.comparator);function $o(){return jo}const Fo=new Ri(vi.comparator);function Vo(...t){let e=Fo;for(const n of t)e=e.insert(n.key,n);return e}function Bo(t){let e=Fo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function qo(){return zo()}function Ho(){return zo()}function zo(){return new Uo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Wo=new Ri(vi.comparator),Ko=new Pi(vi.comparator);function Go(...t){let e=Ko;for(const n of t)e=e.add(n);return e}const Xo=new Pi(ui);function Qo(){return Xo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Yo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Jo(di.min(),n,Qo(),$o(),Go())}}class Yo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Yo(ji.EMPTY_BYTE_STRING,e,Go(),Go(),Go())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class ta{constructor(t,e){this.targetId=t,this.It=e}}class ea{constructor(t,e,n=ji.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class na{constructor(){this.Tt=0,this.Et=sa(),this.At=ji.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Go(),e=Go(),n=Go();return this.Et.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Gr()}})),new Yo(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=sa()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class ra{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=$o(),this.Bt=ia(),this.Lt=new Pi(ui)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Gr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(ws(t))if(0===n){const n=new vi(t.path);this.Kt(e,n,ms.newNoDocument(n,di.min()))}else Xr(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&ws(i.target)){const e=new vi(i.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,ms.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=Go();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new Jo(t,e,this.Lt,this.$t,n);return this.$t=$o(),this.Bt=ia(),this.Lt=new Pi(ui),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new na,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Pi(ui),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Hr("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new na),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function ia(){return new Ri(vi.comparator)}function sa(){return new Ri(vi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),aa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ca{constructor(t,e){this.databaseId=t,this.dt=e}}function ua(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function la(t,e){return t.dt?e.toBase64():e.toUint8Array()}function ha(t,e){return ua(t,e.toTimestamp())}function da(t){return Xr(!!t),di.fromTimestamp(function(t){const e=Fi(t);return new hi(e.seconds,e.nanos)}(t))}function fa(t,e){return function(t){return new pi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function pa(t){const e=pi.fromString(t);return Xr(Ua(e)),e}function ma(t,e){return fa(t.databaseId,e.path)}function ga(t,e){const n=pa(e);if(n.get(1)!==t.databaseId.projectId)throw new Yr(Jr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Yr(Jr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new vi(ba(n))}function va(t,e){return fa(t.databaseId,e)}function ya(t){const e=pa(t);return 4===e.length?pi.emptyPath():ba(e)}function _a(t){return new pi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ba(t){return Xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function wa(t,e,n){return{name:ma(t,e),fields:n.value.mapValue.fields}}function Ea(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Gr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.dt?(Xr(void 0===e||"string"==typeof e),ji.fromBase64String(e||"")):(Xr(void 0===e||e instanceof Uint8Array),ji.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Jr.UNKNOWN:Mo(t.code);return new Yr(e,t.message||"")}(o);n=new ea(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ga(t,r.document.name),s=da(r.document.updateTime),o=new fs({mapValue:{fields:r.document.fields}}),a=ms.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Zo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ga(t,r.document),s=r.readTime?da(r.readTime):di.min(),o=ms.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ga(t,r.document),s=r.removedTargetIds||[];n=new Zo([],s,i,null)}else{if(!("filter"in e))return Gr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ro(r),s=t.targetId;n=new ta(s,i)}}return n}function Ta(t,e){let n;if(e instanceof Ao)n={update:wa(t,e.key,e.value)};else if(e instanceof No)n={delete:ma(t,e.key)};else if(e instanceof ko)n={update:wa(t,e.key,e.data),updateMask:Ma(e.fieldMask)};else{if(!(e instanceof xo))return Gr();n={verify:ma(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof oo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ao)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof uo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ho)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Gr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ha(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Gr()}(t,e.precondition)),n}function Ia(t,e){return t&&t.length>0?(Xr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?da(t.updateTime):da(e);return n.isEqual(di.min())&&(n=da(e)),new go(n,t.transformResults||[])}(t,e)))):[]}function Aa(t,e){return{documents:[va(t,e.path)]}}function ka(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=va(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=va(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(us(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NAN"}};if(cs(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(us(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NAN"}};if(cs(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(t.field),op:xa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ra(t.field),direction:Na(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.dt||Gi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ca(t){let e=ya(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Oa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Rs(Da(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Gi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new xs(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new xs(n,e)}(n.endAt)),Us(e,i,o,s,a,"F",c,u)}function Sa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Gr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Oa(t){return t?void 0!==t.unaryFilter?[Pa(t)]:void 0!==t.fieldFilter?[La(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Oa(t))).reduce(((t,e)=>t.concat(e))):Gr():[]}function Na(t){return oa[t]}function xa(t){return aa[t]}function Ra(t){return{fieldPath:t.canonicalString()}}function Da(t){return gi.fromServerFormat(t.fieldPath)}function La(t){return Es.create(Da(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Pa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Da(t.unaryFilter.field);return Es.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Da(t.unaryFilter.field);return Es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Da(t.unaryFilter.field);return Es.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Da(t.unaryFilter.field);return Es.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gr()}}function Ma(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ua(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$a=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fa=$a;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&wo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ho();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=bo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(di.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Go())}isEqual(t){return this.batchId===t.batchId&&li(this.mutations,t.mutations,((t,e)=>Io(t,e)))&&li(this.baseMutations,t.baseMutations,((t,e)=>Io(t,e)))}}class Ba{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Xr(t.mutations.length===n.length);let r=Wo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ba(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e,n,r,i=di.min(),s=di.min(),o=ji.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ha(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.ne=t}}function Wa(t){const e=Ca({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?zs(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Vi(t.integerValue));else if("doubleValue"in t){const n=Vi(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Xi(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Bi(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?ds(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Gr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),vi.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}Ka.ye=new Ka;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(){this.ze=new Xa}addToCollectionParentIndex(t,e){return this.ze.add(e),ki.resolve()}getCollectionParents(t,e){return ki.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return ki.resolve()}deleteFieldIndex(t,e){return ki.resolve()}getDocumentsMatchingTarget(t,e){return ki.resolve(null)}getIndexType(t,e){return ki.resolve(0)}getFieldIndexes(t,e){return ki.resolve([])}getNextCollectionGroupToUpdate(t){return ki.resolve(null)}getMinOffset(t,e){return ki.resolve(wi.min())}getMinOffsetFromCollectionGroup(t,e){return ki.resolve(wi.min())}updateCollectionGroup(t,e,n){return ki.resolve()}updateIndexEntries(t,e){return ki.resolve()}}class Xa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Pi(pi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Pi(pi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Qa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Qa(t,Qa.DEFAULT_COLLECTION_PERCENTILE,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qa.DEFAULT_COLLECTION_PERCENTILE=10,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qa.DEFAULT=new Qa(41943040,Qa.DEFAULT_COLLECTION_PERCENTILE,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qa.DISABLED=new Qa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Ja(0)}static Rn(){return new Ja(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(){this.changes=new Uo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ms.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ki.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Eo(n.mutation,t,Ui.empty(),hi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Go()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Go()){const r=qo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Vo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=qo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Go())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=$o();const s=zo(),o=zo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ko)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Eo(o.mutation,e,o.mutation.getFieldMask(),hi.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Za(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=zo();let r=new Ri(((t,e)=>t-e)),i=Go();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ui.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Go()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ho();c.forEach((t=>{if(!i.has(t)){const r=bo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ki.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return vi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):ki.resolve(qo());let o=-1,a=i;return s.next((e=>ki.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?ki.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Go()))).next((t=>({batchId:o,changes:Bo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new vi(e)).next((t=>{let e=Vo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Vo();return this.indexManager.getCollectionParents(t,r).next((s=>ki.forEach(s,(s=>{const o=function(t,e){return new Ms(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ms.newInvalidDocument(n)))}));let n=Vo();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&Eo(s.mutation,i,Ui.empty(),hi.now()),Xs(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ki.resolve(ms.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return ki.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:da(n.createTime)}),ki.resolve()}getNamedQuery(t,e){return ki.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Wa(t.bundledQuery),readTime:da(t.readTime)}}(e)),ki.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.overlays=new Ri(vi.comparator),this.Xn=new Map}getOverlay(t,e){return ki.resolve(this.overlays.get(e))}getOverlays(t,e){const n=qo();return ki.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),ki.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),ki.resolve()}getOverlaysForCollection(t,e,n){const r=qo(),i=e.length+1,s=new vi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ki.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ri(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=qo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=qo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return ki.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qa(e,n));let i=this.Xn.get(e);void 0===i&&(i=Go(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.Zn=new Pi(ic.ts),this.es=new Pi(ic.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new ic(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new ic(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new vi(new pi([])),n=new ic(e,t),r=new ic(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new vi(new pi([])),n=new ic(e,t),r=new ic(e,t+1);let i=Go();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ic(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ic{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return vi.comparator(t.key,e.key)||ui(t.ls,e.ls)}static ns(t,e){return ui(t.ls,e.ls)||vi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Pi(ic.ts)}checkEmpty(t){return ki.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Va(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.ds=this.ds.add(new ic(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return ki.resolve(s)}lookupMutationBatch(t,e){return ki.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),i=r<0?0:r;return ki.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ki.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return ki.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ic(e,0),r=new ic(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);i.push(e)})),ki.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pi(ui);return e.forEach((t=>{const e=new ic(t,0),r=new ic(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),ki.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;vi.isDocumentKey(i)||(i=i.child(""));const s=new ic(new vi(i),0);let o=new Pi(ui);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),ki.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return ki.forEach(e.mutations,(r=>{const i=new ic(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new ic(e,0),r=this.ds.firstAfterOrEqual(n);return ki.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ki.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.ps=t,this.docs=new Ri(vi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ki.resolve(n?n.document.mutableCopy():ms.newInvalidDocument(e))}getEntries(t,e){let n=$o();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ms.newInvalidDocument(t))})),ki.resolve(n)}getAllFromCollection(t,e,n){let r=$o();const i=new vi(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ei(bi(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return ki.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Gr()}Is(t,e){return ki.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ac(this)}getSize(t){return ki.resolve(this.size)}}class ac extends Ya{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),ki.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.persistence=t,this.Ts=new Uo((t=>ys(t)),bs),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.Es=0,this.As=new rc,this.targetCount=0,this.Rs=Ja.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),ki.resolve()}getLastRemoteSnapshotVersion(t){return ki.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ki.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ki.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),ki.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ja(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,ki.resolve()}updateTargetData(t,e){return this.vn(e),ki.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,ki.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ki.waitFor(i).next((()=>r))}getTargetCount(t){return ki.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ki.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ki.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),ki.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),ki.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ki.resolve(n)}containsKey(t,e){return ki.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Si(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new cc(this),this.indexManager=new Ga,this.remoteDocumentCache=function(t){return new oc(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new za(e),this.Ds=new ec(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new sc(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Hr("MemoryPersistence","Starting transaction:",t);const r=new lc(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return ki.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class lc extends Ii{constructor(t){super(),this.currentSequenceNumber=t}}class hc{constructor(t){this.persistence=t,this.ks=new rc,this.Os=null}static Ms(t){return new hc(t)}get Fs(){if(this.Os)return this.Os;throw Gr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),ki.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),ki.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),ki.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ki.forEach(this.Fs,(n=>{const r=vi.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,di.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return ki.or([()=>ki.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Go(),r=Go();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((i=>i||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return ki.resolve(null)}xi(t,e,n,r){return $s(e)||r.isEqual(di.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const s=this.ki(e,i);return this.Oi(e,s,n,r)?this.Ni(t,e):(qr()<=o["in"].DEBUG&&Hr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gs(e)),this.Mi(t,s,e,_i(r,-1)))}))}ki(t,e){let n=new Pi(Js(t));return e.forEach(((e,r)=>{Xs(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,e){return qr()<=o["in"].DEBUG&&Hr("QueryEngine","Using full collection scan to execute query:",Gs(e)),this.Di.getDocumentsMatchingQuery(t,e,wi.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Ri(ui),this.Bi=new Uo((t=>ys(t)),bs),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tc(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function mc(t,e,n,r){return new pc(t,e,n,r)}async function gc(t,e){const n=Qr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Go();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function vc(t,e){const n=Qr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=ki.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Xr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Go();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function yc(t){const e=Qr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function _c(t,e){const n=Qr(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ji.EMPTY_BYTE_STRING,di.min()).withLastLimboFreeSnapshotVersion(di.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Vs.updateTargetData(t,u))}));let a=$o(),c=Go();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(bc(t,s,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(di.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ki.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}function bc(t,e,n){let r=Go(),i=Go();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=$o();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(di.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Hr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function wc(t,e){const n=Qr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ec(t,e){const n=Qr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((i=>i?(r=i,ki.resolve(r)):n.Vs.allocateTargetId(t).next((i=>(r=new Ha(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Tc(t,e,n){const r=Qr(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Ci(t))throw t;Hr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Ic(t,e,n){const r=Qr(t);let i=di.min(),s=Go();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Qr(t),i=r.Bi.get(n);return void 0!==i?ki.resolve(r.$i.get(i)):r.Vs.getTargetData(e,n)}(r,t,Hs(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?i:di.min(),n?s:Go()))).next((t=>(Ac(r,Qs(e),t),{documents:t,ji:s})))))}function Ac(t,e,n){let r=di.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}class kc{constructor(){this.activeTargetIds=Qo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cc{constructor(){this.Fr=new kc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new kc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Hr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Hr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,i){const s=this.oo(t,e);Hr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(t,s,o,n).then((t=>(Hr("RestConnection","Received: ",t),t)),(e=>{throw Wr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,r,i,s){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Nc[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((i,s)=>{const o=new jr;o.listenOnce(Dr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Rr.NO_ERROR:const e=o.getResponseJson();Hr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Rr.TIMEOUT:Hr("Connection",'RPC "'+t+'" timed out'),s(new Yr(Jr.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const n=o.getStatus();if(Hr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Jr).indexOf(e)>=0?e:Jr.UNKNOWN}(t.status);s(new Yr(e,t.message))}else s(new Yr(Jr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Yr(Jr.UNAVAILABLE,"Connection failed."));break;default:Gr()}}finally{Hr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Nr(),s=xr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Hr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const d=new xc({jr:t=>{h?Hr("Connection","Not sending because WebChannel is closed:",t):(l||(Hr("Connection","Opening WebChannel transport."),u.open(),l=!0),Hr("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Ur.EventType.OPEN,(()=>{h||Hr("Connection","WebChannel transport opened.")})),f(u,Ur.EventType.CLOSE,(()=>{h||(h=!0,Hr("Connection","WebChannel transport closed"),d.eo())})),f(u,Ur.EventType.ERROR,(t=>{h||(h=!0,Wr("Connection","WebChannel transport errored:",t),d.eo(new Yr(Jr.UNAVAILABLE,"The operation could not be completed")))})),f(u,Ur.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Hr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Do[t];if(void 0!==e)return Mo(e)}(t),n=i.message;void 0===e&&(e=Jr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.eo(new Yr(e,n)),u.close()}else Hr("Connection","WebChannel received:",n),d.no(n)}})),f(s,Lr.STAT_EVENT,(t=>{t.stat===Pr.PROXY?Hr("Connection","Detected buffering proxy"):t.stat===Pr.NOPROXY&&Hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return new ca(t,!0)}class Pc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Hr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,n,r,i,s,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Pc(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Jr.RESOURCE_EXHAUSTED?(zr(e.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Jr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Yr(Jr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Hr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Uc extends Mc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.wt=i}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Ea(this.wt,t),n=function(t){if(!("targetChange"in t))return di.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?di.min():e.readTime?da(e.readTime):di.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=_a(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=ws(r)?{documents:Aa(t,r)}:{query:ka(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=la(t,e.resumeToken):e.snapshotVersion.compareTo(di.min())>0&&(n.readTime=ua(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Sa(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=_a(this.wt),e.removeTarget=t,this.Mo(e)}}class jc extends Mc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Xr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Ia(t.writeResults,t.commitTime),n=da(t.commitTime);return this.listener.Jo(n,e)}return Xr(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=_a(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ta(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Yr(Jr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Jr.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Jr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Fc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(zr(e),this.su=!1):Hr("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{Qc(this)&&(Hr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Qr(t);e.lu.add(4),await qc(e),e._u.set("Unknown"),e.lu.delete(4),await Bc(e)}(this))}))})),this._u=new Fc(n,r)}}async function Bc(t){if(Qc(t))for(const e of t.fu)await e(!0)}async function qc(t){for(const e of t.fu)await e(!1)}function Hc(t,e){const n=Qr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Xc(n)?Gc(n):pu(n).Co()&&Wc(n,e))}function zc(t,e){const n=Qr(t),r=pu(n);n.hu.delete(e),r.Co()&&Kc(n,e),0===n.hu.size&&(r.Co()?r.ko():Qc(n)&&n._u.set("Unknown"))}function Wc(t,e){t.wu.Nt(e.targetId),pu(t).Qo(e)}function Kc(t,e){t.wu.Nt(e),pu(t).jo(e)}function Gc(t){t.wu=new ra({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),pu(t).start(),t._u.iu()}function Xc(t){return Qc(t)&&!pu(t).Do()&&t.hu.size>0}function Qc(t){return 0===Qr(t).lu.size}function Jc(t){t.wu=void 0}async function Yc(t){t.hu.forEach(((e,n)=>{Wc(t,e)}))}async function Zc(t,e){Jc(t),Xc(t)?(t._u.uu(e),Gc(t)):t._u.set("Unknown")}async function tu(t,e,n){if(t._u.set("Online"),e instanceof ea&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){Hr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await eu(t,n)}else if(e instanceof Zo?t.wu.Ut(e):e instanceof ta?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(di.min()))try{const e=await yc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(ji.EMPTY_BYTE_STRING,n.snapshotVersion)),Kc(t,e);const r=new Ha(n.target,e,1,n.sequenceNumber);Wc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hr("RemoteStore","Failed to raise snapshot:",e),await eu(t,e)}}async function eu(t,e,n){if(!Ci(e))throw e;t.lu.add(1),await qc(t),t._u.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Bc(t)}))}function nu(t,e){return e().catch((n=>eu(t,n,e)))}async function ru(t){const e=Qr(t),n=mu(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;iu(e);)try{const t=await wc(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,su(e,t)}catch(t){await eu(e,t)}ou(e)&&au(e)}function iu(t){return Qc(t)&&t.au.length<10}function su(t,e){t.au.push(e);const n=mu(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ou(t){return Qc(t)&&!mu(t).Do()&&t.au.length>0}function au(t){mu(t).start()}async function cu(t){mu(t).Xo()}async function uu(t){const e=mu(t);for(const n of t.au)e.Ho(n.mutations)}async function lu(t,e,n){const r=t.au.shift(),i=Ba.from(r,e,n);await nu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ru(t)}async function hu(t,e){e&&mu(t).zo&&await async function(t,e){if(n=e.code,Po(n)&&n!==Jr.ABORTED){const n=t.au.shift();mu(t).No(),await nu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ru(t)}var n}(t,e),ou(t)&&au(t)}async function du(t,e){const n=Qr(t);n.asyncQueue.verifyOperationInProgress(),Hr("RemoteStore","RemoteStore received new credentials");const r=Qc(n);n.lu.add(3),await qc(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Bc(n)}async function fu(t,e){const n=Qr(t);e?(n.lu.delete(2),await Bc(n)):e||(n.lu.add(2),await qc(n),n._u.set("Unknown"))}function pu(t){return t.mu||(t.mu=function(t,e,n){const r=Qr(t);return r.tu(),new Uc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:Yc.bind(null,t),Jr:Zc.bind(null,t),Go:tu.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Xc(t)?Gc(t):t._u.set("Unknown")):(await t.mu.stop(),Jc(t))}))),t.mu}function mu(t){return t.gu||(t.gu=function(t,e,n){const r=Qr(t);return r.tu(),new jc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:cu.bind(null,t),Jr:hu.bind(null,t),Yo:uu.bind(null,t),Jo:lu.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await ru(t)):(await t.gu.stop(),t.au.length>0&&(Hr("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new gu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yr(Jr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vu(t,e){if(zr("AsyncQueue",`${e}: ${t}`),Ci(t))return new Yr(Jr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||vi.comparator(e.key,n.key):(t,e)=>vi.comparator(t.key,e.key),this.keyedMap=Vo(),this.sortedSet=new Ri(this.comparator)}static emptySet(t){return new yu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new yu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.yu=new Ri(vi.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Gr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class bu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new bu(t,e,yu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ws(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.Iu=void 0,this.listeners=[]}}class Eu{constructor(){this.queries=new Uo((t=>Ks(t)),Ws),this.onlineState="Unknown",this.Tu=new Set}}async function Tu(t,e){const n=Qr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wu),i)try{s.Iu=await n.onListen(r)}catch(t){const n=vu(t,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Cu(n)}async function Iu(t,e){const n=Qr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Au(t,e){const n=Qr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(i)&&(r=!0);e.Iu=i}}r&&Cu(n)}function ku(t,e,n){const r=Qr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Cu(t){t.Tu.forEach((t=>{t.next()}))}class Su{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=bu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(t){this.key=t}}class Nu{constructor(t){this.key=t}}class xu{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Go(),this.mutatedKeys=Go(),this.Lu=Js(t),this.Uu=new yu(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new _u,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Xs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Oi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new bu(this.query,t.Uu,r,i,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new _u,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Go(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Nu(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Ou(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Go();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return bu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Ru{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Du{constructor(t){this.key=t,this.Xu=!1}}class Lu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new Uo((t=>Ks(t)),Ws),this.ec=new Map,this.nc=new Set,this.sc=new Ri(vi.comparator),this.ic=new Map,this.rc=new rc,this.oc={},this.uc=new Map,this.cc=Ja.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Pu(t,e){const n=tl(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const t=await Ec(n.localStore,Hs(e));n.isPrimaryClient&&Hc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Mu(n,e,r,"current"===s)}return i}async function Mu(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let i=e.view.Ku(n);i.Oi&&(i=await Ic(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Gu(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const i=await Ic(t.localStore,e,!0),s=new xu(e,i.ji),o=s.Ku(i.documents),a=Yo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Gu(t,n,c.zu);const u=new Ru(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Uu(t,e){const n=Qr(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((t=>!Ws(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Tc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),zc(n.remoteStore,r.targetId),Wu(n,r.targetId)})).catch(Ai)):(Wu(n,r.targetId),await Tc(n.localStore,r.targetId,!0))}async function ju(t,e,n){const r=el(t);try{const t=await function(t,e){const n=Qr(t),r=hi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Go());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=$o(),c=Go();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=To(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new ko(t.key,e,ps(e.value.mapValue),vo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Bo(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Ri(ui)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ju(r,t.changes),await ru(r.remoteStore)}catch(t){const e=vu(t,"Failed to persist write");n.reject(e)}}async function $u(t,e){const n=Qr(t);try{const t=await _c(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Xr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Xr(r.Xu):t.removedDocuments.size>0&&(Xr(r.Xu),r.Xu=!1))})),await Ju(n,t,e)}catch(t){await Ai(t)}}function Fu(t,e,n){const r=Qr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Qr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(r=!0)})),r&&Cu(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vu(t,e,n){const r=Qr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let t=new Ri(vi.comparator);t=t.insert(s,ms.newNoDocument(s,di.min()));const n=Go().add(s),i=new Jo(di.min(),new Map,new Pi(ui),t,n);await $u(r,i),r.sc=r.sc.remove(s),r.ic.delete(e),Qu(r)}else await Tc(r.localStore,e,!1).then((()=>Wu(r,e,n))).catch(Ai)}async function Bu(t,e){const n=Qr(t),r=e.batch.batchId;try{const t=await vc(n.localStore,e);zu(n,r,null),Hu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ju(n,t)}catch(t){await Ai(t)}}async function qu(t,e,n){const r=Qr(t);try{const t=await function(t,e){const n=Qr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Xr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);zu(r,e,n),Hu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ju(r,t)}catch(n){await Ai(n)}}function Hu(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function zu(t,e,n){const r=Qr(t);let i=r.oc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Wu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Ku(t,e)}))}function Ku(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(zc(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Qu(t))}function Gu(t,e,n){for(const r of n)r instanceof Ou?(t.rc.addReference(r.key,e),Xu(t,r)):r instanceof Nu?(Hr("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Ku(t,r.key)):Gr()}function Xu(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(Hr("SyncEngine","New document in limbo: "+n),t.nc.add(r),Qu(t))}function Qu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new vi(pi.fromString(e)),r=t.cc.next();t.ic.set(r,new Du(n)),t.sc=t.sc.insert(n,r),Hc(t.remoteStore,new Ha(Hs(js(n.path)),r,2,Si.ot))}}async function Ju(t,e,n){const r=Qr(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=dc.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(t,e){const n=Qr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ki.forEach(e,(e=>ki.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ki.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ci(t))throw t;Hr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,i)}}}(r.localStore,s))}async function Yu(t,e){const n=Qr(t);if(!n.currentUser.isEqual(e)){Hr("SyncEngine","User change. New user:",e.toKey());const t=await gc(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Yr(Jr.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ju(n,t.Ki)}}function Zu(t,e){const n=Qr(t),r=n.ic.get(e);if(r&&r.Xu)return Go().add(r.key);{let t=Go();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function tl(t){const e=Qr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$u.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vu.bind(null,e),e.Zu.Go=Au.bind(null,e.eventManager),e.Zu.lc=ku.bind(null,e.eventManager),e}function el(t){const e=Qr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qu.bind(null,e),e}class nl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Lc(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return mc(this.persistence,new fc,t.initialUser,this.wt)}_c(t){return new uc(hc.Ms,this.wt)}dc(t){return new Cc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Fu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yu.bind(null,this.syncEngine),await fu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Eu}createDatastore(t){const e=Lc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Rc(r));var r;return function(t,e,n,r){return new $c(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Fu(this.syncEngine,t,0),s=Oc.V()?new Oc:new Sc,new Vc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Lu(t,e,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Qr(t);Hr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await qc(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Fr.UNAUTHENTICATED,this.clientId=ci.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Yr(Jr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ol(t,e){t.asyncQueue.verifyOperationInProgress(),Hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await gc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function al(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cl(t);Hr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>du(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>du(e.remoteStore,n))),t.onlineComponents=e}async function cl(t){return t.offlineComponents||(Hr("FirestoreClient","Using default OfflineComponentProvider"),await ol(t,new nl)),t.offlineComponents}async function ul(t){return t.onlineComponents||(Hr("FirestoreClient","Using default OnlineComponentProvider"),await al(t,new rl)),t.onlineComponents}function ll(t){return ul(t).then((t=>t.syncEngine))}async function hl(t){const e=await ul(t),n=e.eventManager;return n.onListen=Pu.bind(null,e.syncEngine),n.onUnlisten=Uu.bind(null,e.syncEngine),n}function dl(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new il({next:s=>{e.enqueueAndForget((()=>Iu(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Yr(Jr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Yr(Jr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Su(js(n.path),s,{includeMetadataChanges:!0,Du:!0});return Tu(t,o)}(await hl(t),t.asyncQueue,e,n,r))),r.promise}function fl(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new il({next:n=>{e.enqueueAndForget((()=>Iu(t,o))),n.fromCache&&"server"===r.source?i.reject(new Yr(Jr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Su(n,s,{includeMetadataChanges:!0,Du:!0});return Tu(t,o)}(await hl(t),t.asyncQueue,e,n,r))),r.promise}const pl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e,n){if(!n)throw new Yr(Jr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gl(t,e,n,r){if(!0===e&&!0===r)throw new Yr(Jr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vl(t){if(!vi.isDocumentKey(t))throw new Yr(Jr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yl(t){if(vi.isDocumentKey(t))throw new Yr(Jr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _l(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Gr()}function bl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Yr(Jr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_l(t);throw new Yr(Jr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Yr(Jr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Yr(Jr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wl({}),this._settingsFrozen=!1,t instanceof Ki?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Yr(Jr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(t.options.projectId)}(t))}get app(){if(!this._app)throw new Yr(Jr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Yr(Jr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Xr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Yr(Jr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pl.get(t);e&&(Hr("ComponentProvider","Removing Datastore"),pl.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Al(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tl(this.firestore,t,this._key)}}class Il{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Il(this.firestore,t,this._query)}}class Al extends Il{constructor(t,e,n){super(t,e,js(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tl(this.firestore,null,new vi(t))}withConverter(t){return new Al(this.firestore,t,this._path)}}function kl(t,e,...n){if(t=(0,a.m9)(t),ml("collection","path",e),t instanceof El){const r=pi.fromString(e,...n);return yl(r),new Al(t,null,r)}{if(!(t instanceof Tl||t instanceof Al))throw new Yr(Jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pi.fromString(e,...n));return yl(r),new Al(t.firestore,null,r)}}function Cl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ci.I()),ml("doc","path",e),t instanceof El){const r=pi.fromString(e,...n);return vl(r),new Tl(t,null,new vi(r))}{if(!(t instanceof Tl||t instanceof Al))throw new Yr(Jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pi.fromString(e,...n));return vl(r),new Tl(t.firestore,t instanceof Al?t.converter:null,new vi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pc(this,"async_queue_retry"),this.Kc=()=>{const t=Dc();t&&Hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Dc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Dc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Zr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(E){if(!Ci(E))throw E;Hr("AsyncQueue","Operation failed with retryable error: "+E)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=gu.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Gr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Ol extends El{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Sl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Rl(this),this._firestoreClient.terminate()}}function Nl(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function xl(t){return t._firestoreClient||Rl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Wi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sl(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Yr(Jr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ll(ji.fromBase64String(t))}catch(t){throw new Yr(Jr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ll(ji.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Yr(Jr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Yr(Jr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ui(this._lat,t._lat)||ui(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=/^__.*__$/;class jl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ko(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ao(t,this.data,e,this.fieldTransforms)}}class $l{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ko(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Fl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gr()}}class Vl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Vl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return nh(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Fl(this.Zc)&&Ul.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Bl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Lc(t)}aa(t,e,n,r=!1){return new Vl({Zc:t,methodName:e,ca:n,path:gi.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ql(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new Bl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hl(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);Yl("Data must be an object, but it was:",o,r);const a=Ql(r,o);let c,u;if(s.merge)c=new Ui(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Zl(e,r,n);if(!o.contains(i))throw new Yr(Jr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);rh(t,i)||t.push(i)}c=new Ui(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new jl(new fs(a),c,u)}class zl extends Pl{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zl}}function Wl(t,e,n,r){const i=t.aa(1,e,n);Yl("Data must be an object, but it was:",i,r);const s=[],o=fs.empty();Ni(r,((t,r)=>{const c=eh(e,t,n);r=(0,a.m9)(r);const u=i.ia(c);if(r instanceof zl)s.push(c);else{const t=Xl(r,u);null!=t&&(s.push(c),o.set(c,t))}}));const c=new Ui(s);return new $l(o,c,i.fieldTransforms)}function Kl(t,e,n,r,i,s){const o=t.aa(1,e,n),c=[Zl(e,r,n)],u=[i];if(s.length%2!=0)throw new Yr(Jr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Zl(e,s[a])),u.push(s[a+1]);const l=[],h=fs.empty();for(let f=c.length-1;f>=0;--f)if(!rh(l,c[f])){const t=c[f];let e=u[f];e=(0,a.m9)(e);const n=o.ia(t);if(e instanceof zl)l.push(t);else{const r=Xl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new Ui(l);return new $l(h,d,o.fieldTransforms)}function Gl(t,e,n,r=!1){return Xl(n,t.aa(r?4:3,e))}function Xl(t,e){if(Jl(t=(0,a.m9)(t)))return Yl("Unsupported field value:",e,t),Ql(t,e);if(t instanceof Pl)return function(t,e){if(!Fl(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Xl(i,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return eo(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hi.fromDate(t);return{timestampValue:ua(e.wt,n)}}if(t instanceof hi){const n=new hi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ua(e.wt,n)}}if(t instanceof Ml)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ll)return{bytesValue:la(e.wt,t._byteString)};if(t instanceof Tl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${_l(t)}`)}(t,e)}function Ql(t,e){const n={};return xi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,((t,r)=>{const i=Xl(r,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Jl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hi||t instanceof Ml||t instanceof Ll||t instanceof Tl||t instanceof Pl)}function Yl(t,e,n){if(!Jl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=_l(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Zl(t,e,n){if((e=(0,a.m9)(e))instanceof Dl)return e._internalPath;if("string"==typeof e)return eh(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const th=new RegExp("[~\\*/\\[\\]]");function eh(t,e,n){if(e.search(th)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dl(...e.split("."))._internalPath}catch(r){throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Yr(Jr.INVALID_ARGUMENT,a+t+c)}function rh(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new sh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(oh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class sh extends ih{data(){return super.data()}}function oh(t,e){return"string"==typeof e?eh(t,e):e instanceof Dl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ch extends ih{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new uh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(oh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class uh extends ch{data(t={}){return super.data(t)}}class lh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ah(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new uh(this._firestore,this._userDataWriter,n.key,n,new ah(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Yr(Jr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new uh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ah(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new uh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ah(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:hh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function hh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Yr(Jr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fh{}function ph(t,...e){for(const n of e)t=n._apply(t);return t}class mh extends fh{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=ql(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Yr(Jr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){bh(o,s);const e=[];for(const n of o)e.push(_h(r,t,n));a={arrayValue:{values:e}}}else a=_h(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||bh(o,s),a=Gl(n,e,o,"in"===s||"not-in"===s);const c=Es.create(i,s,a);return function(t,e){if(e.ht()){const n=Vs(t);if(null!==n&&!n.isEqual(e.field))throw new Yr(Jr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Fs(t);null!==r&&wh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Yr(Jr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Yr(Jr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new Il(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function gh(t,e,n){const r=e,i=oh("where",t);return new mh(i,r,n)}class vh extends fh{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Yr(Jr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Yr(Jr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Rs(e,n);return function(t,e){if(null===Fs(t)){const n=Vs(t);null!==n&&wh(t,n,e.field)}}(t,r),r}(t._query,this.fa,this.wa);return new Il(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ms(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function yh(t,e="asc"){const n=e,r=oh("orderBy",t);return new vh(r,n)}function _h(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Yr(Jr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bs(e)&&-1!==n.indexOf("/"))throw new Yr(Jr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pi.fromString(n));if(!vi.isDocumentKey(r))throw new Yr(Jr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ss(t,new vi(r))}if(n instanceof Tl)return ss(t,n._key);throw new Yr(Jr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_l(n)}.`)}function bh(t,e){if(!Array.isArray(t)||0===t.length)throw new Yr(Jr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Yr(Jr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function wh(t,e,n){if(!n.isEqual(e))throw new Yr(Jr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh{convertValue(t,e="none"){switch(Yi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vi(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Gr()}}convertObject(t,e){const n={};return Ni(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Ml(Vi(t.latitude),Vi(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Hi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(zi(t));default:return null}}convertTimestamp(t){const e=Fi(t);return new hi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=pi.fromString(t);Xr(Ua(n));const r=new Ki(n.get(1),n.get(3)),i=new vi(n.popFirst(5));return r.isEqual(e)||zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ih(t){t=bl(t,Tl);const e=bl(t.firestore,Ol);return dl(xl(e),t._key).then((n=>Nh(e,t,n)))}class Ah extends Eh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ll(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tl(this.firestore,null,e)}}function kh(t){t=bl(t,Il);const e=bl(t.firestore,Ol),n=xl(e),r=new Ah(e);return dh(t._query),fl(n,t._query).then((n=>new lh(e,r,t,n)))}function Ch(t,e,n,...r){t=bl(t,Tl);const i=bl(t.firestore,Ol),s=ql(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Dl?Kl(s,"updateDoc",t._key,e,n,r):Wl(s,"updateDoc",t._key,e),Oh(i,[o.toMutation(t._key,vo.exists(!0))])}function Sh(t,e){const n=bl(t.firestore,Ol),r=Cl(t),i=Th(t.converter,e);return Oh(n,[Hl(ql(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,vo.exists(!1))]).then((()=>r))}function Oh(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>ju(await ll(t),e,n))),n.promise}(xl(t),e)}function Nh(t,e,n){const r=n.docs.get(e._key),i=new Ah(t);return new ch(t,i,e._key,r,new ah(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Vr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Ol(r,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)($r,"3.4.13",t),(0,i.KN)($r,"3.4.13","esm2017")}()},1992:function(t,e,n){"use strict";n.d(e,{Jt:function(){return Zt},cF:function(){return ee},iH:function(){return te},KV:function(){return Yt}});n(2801),n(8675),n(3462),n(6699),n(1703);var r=n(7077),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function f(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function g(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _(){return new l("canceled","User canceled the upload/download.")}function b(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function w(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new l("no-download-url","The given file does not have any download URLs.")}function A(t){return new l("invalid-argument",t)}function k(){return new l("app-deleted","The Firebase app was deleted.")}function C(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function O(t){throw new l("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw w(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw b(t);return n}}class x{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function D(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return void 0!==t}function P(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function U(t){return j()&&t instanceof Blob}function j(){return"undefined"!==typeof Blob}function $(t,e,n,r){if(r<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function V(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(B||(B={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(t,e,n,r,i,s,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new H(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===B.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===B.ABORT;return void t(!1,new H(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new H(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());L(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=d();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?k():_();r(t)}else{const t=y();r(t)}};this.canceled_?e(!1,new H(!1,null,!0)):this.backoffId_=R(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class H{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function W(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function K(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function X(t,e,n,r,i,s){const o=V(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return K(c,e),z(c,n),W(c,s),G(c,r),new q(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(...t){const e=Q();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(j())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Y(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class et{constructor(t,e){this.data=t,this.contentType=e||null}}function nt(t,e){switch(t){case tt.RAW:return new et(rt(e));case tt.BASE64:case tt.BASE64URL:return new et(st(t,e));case tt.DATA_URL:return new et(at(e),ct(e))}throw d()}function rt(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function it(t){let e;try{e=decodeURIComponent(t)}catch(n){throw S(tt.DATA_URL,"Malformed data URL.")}return rt(e)}function st(t,e){switch(t){case tt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw S(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case tt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw S(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z(e)}catch(i){throw S(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ot{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw S(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ut(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function at(t){const e=new ot(t);return e.base64?st(tt.BASE64,e.rest):it(e.rest)}function ct(t){const e=new ot(t);return e.contentType}function ut(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e){let n=0,r="";U(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(U(this.data_)){const n=this.data_,r=Y(n,t,e);return null===r?null:new lt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new lt(n,!0)}}static getBlob(...t){if(j()){const e=t.map((t=>t instanceof lt?t.data_:t));return new lt(J.apply(null,e))}{const e=t.map((t=>M(t)?nt(tt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new lt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){let e;try{e=JSON.parse(t)}catch(n){return null}return P(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function ft(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function pt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){return e}class gt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||mt}}let vt=null;function yt(t){return!M(t)||t.length<2?t:pt(t)}function _t(){if(vt)return vt;const t=[];function e(t,e){return yt(e)}t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));const n=new gt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new gt("size");return i.xform=r,t.push(i),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),vt=t,vt}function bt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function wt(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return bt(r,t),r}function Et(t,e,n){const r=ht(e);if(null===r)return null;const i=r;return wt(t,i,n)}function Tt(t,e,n,r){const i=ht(e);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=F(a,n,r),u=V({alt:"media",token:e});return c+u}));return c[0]}function It(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(!t)throw d()}function Ct(t,e){function n(n,r){const i=Et(t,r,e);return kt(null!==i),i}return n}function St(t,e){function n(n,r){const i=Et(t,r,e);return kt(null!==i),Tt(i,r,t.host,t._protocol)}return n}function Ot(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===e.getStatus()?p(t.bucket):403===e.getStatus()?v(t.path):n,r.serverResponse=n.serverResponse,r}return e}function Nt(t){const e=Ot(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=f(t.path)),i.serverResponse=r.serverResponse,i}return n}function xt(t,e,n){const r=e.fullServerUrl(),i=F(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new At(i,s,St(t,n),o);return a.errorHandler=Nt(e),a}function Rt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Dt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Rt(null,e)),r}function Lt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Dt(e,r,i),l=It(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=lt.getBlob(h,r,d);if(null===f)throw T();const p={name:u["fullPath"]},m=F(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new At(m,g,Ct(t,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Ot(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Pt=null;class Mt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=B.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=B.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Ut extends Mt{initXhr(){this.xhr_.responseType="text"}}function jt(){return Pt?Pt():new Ut}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new $t(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pt(this._location.path)}get storage(){return this._service}get parent(){const t=dt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new $t(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw C(t)}}function Ft(t,e,n){t._throwIfRoot("uploadBytes");const r=Lt(t.storage,t._location,_t(),new lt(e,!0),n);return t.storage.makeRequestWithTokens(r,jt).then((e=>({metadata:e,ref:t})))}function Vt(t){t._throwIfRoot("getDownloadURL");const e=xt(t.storage,t._location,_t());return t.storage.makeRequestWithTokens(e,jt).then((t=>{if(null===t)throw I();return t}))}function Bt(t,e){const n=ft(t._location.path,e),r=new N(t._location.bucket,n);return new $t(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){return/^[A-Za-z]+:\/\//.test(t)}function Ht(t,e){return new $t(t,e)}function zt(t,e){if(t instanceof Gt){const n=t;if(null==n._bucket)throw E();const r=new $t(n,n._bucket);return null!=e?zt(r,e):r}return void 0!==e?Bt(t,e):t}function Wt(t,e){if(e&&qt(e)){if(t instanceof Gt)return Ht(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return zt(t,e)}function Kt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}class Gt{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):Kt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=Kt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $t(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new x(k());{const i=X(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Xt="@firebase/storage",Qt="0.9.9",Jt="storage";function Yt(t,e,n){return t=(0,i.m9)(t),Ft(t,e,n)}function Zt(t){return t=(0,i.m9)(t),Vt(t)}function te(t,e){return t=(0,i.m9)(t),Wt(t,e)}function ee(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,Jt),s=n.getImmediate({identifier:e});return s}function ne(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Gt(n,i,s,e,r.Jn)}function re(){(0,r.Xd)(new s.wA(Jt,ne,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Xt,Qt,""),(0,r.KN)(Xt,Qt,"esm2017")}re()},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},678:function(t,e,n){"use strict";n.d(e,{p7:function(){return ne},r5:function(){return W},tv:function(){return se},yj:function(){return oe}});n(6699),n(1703);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>s?Symbol(t):"_vr_"+t,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(t){return t.__esModule||s&&"Module"===t[Symbol.toStringTag]}const p=Object.assign;function m(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const v=/\/$/,y=t=>t.replace(v,"");function _(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=C(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function E(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&T(e.matched[r],n.matched[i])&&I(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function T(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function I(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!A(t[n],e[n]))return!1;return!0}function A(t,e){return Array.isArray(t)?k(t,e):Array.isArray(e)?k(e,t):t===e}function k(t,e){return Array.isArray(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function C(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var S,O;(function(t){t["pop"]="pop",t["push"]="push"})(S||(S={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(O||(O={}));function N(t){if(!t)if(d){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),y(t)}const x=/^[^#]+#/;function R(t,e){return t.replace(x,"#")+e}function D(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=D(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function M(t,e){const n=history.state?history.state.position-e:-1;return n+t}const U=new Map;function j(t,e){U.set(t,e)}function $(t){const e=U.get(t);return U.delete(t),e}let F=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,t);return o+r+i}function B(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:S.pop,direction:l?l>0?O.forward:O.back:O.unknown})}))};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(p({},t.state,{scroll:L()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function H(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:F()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=p({},e.state,q(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=p({},i.value,e.state,{forward:t,scroll:L()});s(o.current,o,!0);const a=p({},q(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function z(t){t=N(t);const e=H(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=p({location:"",base:t,go:r,createHref:R.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function W(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),z(t)}function K(t){return"string"===typeof t||t&&"object"===typeof t}function G(t){return"string"===typeof t||"symbol"===typeof t}const X={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=o("nf");var J;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(J||(J={}));function Y(t,e){return p(new Error,{type:t,[Q]:!0},e)}function Z(t,e){return t instanceof Error&&Q in t&&(null==e||!!(t.type&e))}const tt="[^/]+?",et={sensitive:!1,strict:!1,start:!0,end:!0},nt=/[.+*?^${}()[\]/\\]/g;function rt(t,e){const n=p({},et,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(nt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||tt;if(h!==tt){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:c}=s,u=o in e?e[o]:"";if(Array.isArray(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);i.length<2&&t.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function it(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function st(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=it(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const ot={type:0,value:""},at=/[a-zA-Z0-9_]/;function ct(t){if(!t)return[[]];if("/"===t)return[[ot]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:at.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ut(t,e,n){const r=rt(ct(t.path),n);const i=p(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function lt(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=dt(t);a.aliasOf=r&&r.record;const u=gt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(p({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,d;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=ut(e,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&t.name&&!pt(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(t){if(G(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&st(t,n[e])>=0&&(t.record.path!==n[e].record.path||!vt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!pt(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw Y(1,{location:t});o=i.record.name,a=p(ht(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw Y(1,{location:t,currentLocation:e});o=i.record.name,a=p({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:mt(c)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ht(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ft(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ft(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function pt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mt(t){return t.reduce(((t,e)=>p(t,e.meta)),{})}function gt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vt(t,e){return e.children.some((e=>e===t||vt(t,e)))}const yt=/#/g,_t=/&/g,bt=/\//g,wt=/=/g,Et=/\?/g,Tt=/\+/g,It=/%5B/g,At=/%5D/g,kt=/%5E/g,Ct=/%60/g,St=/%7B/g,Ot=/%7C/g,Nt=/%7D/g,xt=/%20/g;function Rt(t){return encodeURI(""+t).replace(Ot,"|").replace(It,"[").replace(At,"]")}function Dt(t){return Rt(t).replace(St,"{").replace(Nt,"}").replace(kt,"^")}function Lt(t){return Rt(t).replace(Tt,"%2B").replace(xt,"+").replace(yt,"%23").replace(_t,"%26").replace(Ct,"`").replace(St,"{").replace(Nt,"}").replace(kt,"^")}function Pt(t){return Lt(t).replace(wt,"%3D")}function Mt(t){return Rt(t).replace(yt,"%23").replace(Et,"%3F")}function Ut(t){return null==t?"":Mt(t).replace(bt,"%2F")}function jt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function $t(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(Tt," "),n=t.indexOf("="),s=jt(n<0?t:t.slice(0,n)),o=n<0?null:jt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ft(t){let e="";for(let n in t){const r=t[n];if(n=Pt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((t=>t&&Lt(t))):[r&&Lt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Vt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(Y(4,{from:n,to:e})):t instanceof Error?a(t):K(t)?a(Y(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function Ht(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(zt(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(qt(c,n,r,s,t))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&qt(c,n,r,s,t)()}))))}}return i}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Wt(t){const e=(0,r.f3)(u),n=(0,r.f3)(l),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(T.bind(null,r));if(o>-1)return o;const a=Jt(t[e-2]);return e>1&&Jt(r)===a&&i[i.length-1].path!==a?i.findIndex(T.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&I(n.params,s.value.params)));function h(n={}){return Xt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(g):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const Kt=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wt,setup(t,{slots:e}){const n=(0,i.qj)(Wt(t)),{options:s}=(0,r.f3)(u),o=(0,r.Fl)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=Kt;function Xt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Jt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>t.route||s.value)),u=(0,r.f3)(c,0),l=(0,r.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&T(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=l.value,a=s&&s.components[t.name],c=t.name;if(!a)return te(n.default,{Component:a,route:i});const u=s.props[t.name],h=u?!0===u?i.params:"function"===typeof u?u(i):u:null,f=t=>{t.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,e,{onVnodeUnmounted:f,ref:d}));return te(n.default,{Component:m,route:i})||m}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=lt(t.routes,t),n=t.parseQuery||$t,s=t.stringifyQuery||Ft,o=t.history;const a=Bt(),c=Bt(),f=Bt(),v=(0,i.XI)(X);let y=X;d&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=m.bind(null,(t=>""+t)),T=m.bind(null,Ut),I=m.bind(null,jt);function A(t,n){let r,i;return G(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function k(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function O(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=p({},r||v.value),"string"===typeof t){const i=_(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:I(s.params),hash:jt(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in t)i=p({},t,{path:_(n,t.path,r.path).path});else{const e=p({},t.params);for(const t in e)null==e[t]&&delete e[t];i=p({},t,{params:T(t.params)}),r.params=T(r.params)}const a=e.resolve(i,r),c=t.hash||"";a.params=w(I(a.params));const u=b(s,p({},t,{hash:Dt(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:s===Ft?Vt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function x(t){return"string"===typeof t?_(n,t,v.value.path):p({},t)}function R(t,e){if(y!==t)return Y(8,{from:e,to:t})}function D(t){return V(t)}function U(t){return D(p(x(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),p({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=y=N(t),r=v.value,i=t.state,o=t.force,a=!0===t.replace,c=F(n);if(c)return V(p(x(c),{state:i,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&E(s,r,n)&&(l=Y(16,{to:u,from:r}),it(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch((t=>Z(t)?Z(t,2)?t:rt(t):et(t,u,r))).then((t=>{if(t){if(Z(t,2))return V(p(x(t.to),{state:i,force:o,replace:a}),e||u)}else t=z(u,r,!0,a,i);return H(u,r,t),t}))}function B(t,e){const n=R(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=ie(t,e);n=Ht(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=B.bind(null,t,e);return n.push(o),re(n).then((()=>{n=[];for(const r of a.list())n.push(qt(r,t,e));return n.push(o),re(n)})).then((()=>{n=Ht(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),re(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),re(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Ht(s,"beforeRouteEnter",t,e),n.push(o),re(n)))).then((()=>{n=[];for(const r of c.list())n.push(qt(r,t,e));return n.push(o),re(n)})).catch((t=>Z(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const r of f.list())r(t,e,n)}function z(t,e,n,r,i){const s=R(t,e);if(s)return s;const a=e===X,c=d?history.state:{};n&&(r||a?o.replace(t.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),v.value=t,it(t,e,n,a),rt()}let W;function K(){W||(W=o.listen(((t,e,n)=>{const r=N(t),i=F(r);if(i)return void V(p(i,{replace:!0}),r).catch(g);y=r;const s=v.value;d&&j(M(s.fullPath,n.delta),L()),q(r,s).catch((t=>Z(t,12)?t:Z(t,2)?(V(t.to,r).then((t=>{Z(t,20)&&!n.delta&&n.type===S.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),et(t,r,s)))).then((t=>{t=t||z(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===S.pop&&Z(t,20)&&o.go(-1,!1)),H(r,s,t)})).catch(g)})))}let Q,J=Bt(),tt=Bt();function et(t,e,n){rt(t);const r=tt.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function nt(){return Q&&v.value!==X?Promise.resolve():new Promise(((t,e)=>{J.add([t,e])}))}function rt(t){return Q||(Q=!t,K(),J.list().forEach((([e,n])=>t?n(t):e())),J.reset()),t}function it(e,n,i,s){const{scrollBehavior:o}=t;if(!d||!o)return Promise.resolve();const a=!i&&$(M(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(e,n,a))).then((t=>t&&P(t))).catch((t=>et(t,e,n)))}const st=t=>o.go(t);let ot;const at=new Set,ct={currentRoute:v,addRoute:A,removeRoute:k,hasRoute:O,getRoutes:C,resolve:N,options:t,push:D,replace:U,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:tt.add,isReady:nt,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),d&&!ot&&v.value===X&&(ot=!0,D(o.location).catch((t=>{0})));const n={};for(const i in X)n[i]=(0,r.Fl)((()=>v.value[i]));t.provide(u,e),t.provide(l,(0,i.qj)(n)),t.provide(h,v);const s=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(y=X,W&&W(),W=null,v.value=X,ot=!1,Q=!1),s()}}};return ct}function re(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function ie(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>T(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>T(t,a)))||i.push(a))}return[n,r,i]}function se(){return(0,r.f3)(u)}function oe(){return(0,r.f3)(l)}},7139:function(t,e,n){"use strict";n.d(e,{MT:function(){return et},oR:function(){return v}});n(1703),n(6699);var r=n(3396),i=n(4870);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return f()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function m(t,e){const n=t,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(c,t,e)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var g="store";function v(t){return void 0===t&&(t=null),(0,r.f3)(null!==t?t:g)}function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function _(t){return null!==t&&"object"===typeof t}function b(t){return t&&"function"===typeof t.then}function w(t,e){return function(){return t(e)}}function E(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function T(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;A(t,n,[],t._modules.root,!0),I(t,n,e)}function I(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={};y(s,(function(e,n){o[n]=w(e,t),Object.defineProperty(t.getters,n,{get:function(){return o[n]()},enumerable:!0})})),t._state=(0,i.qj)({data:e}),t.strict&&x(t),r&&n&&t._withCommit((function(){r.data=null}))}function A(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=R(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=k(t,o,n);r.forEachMutation((function(e,n){var r=o+n;S(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;O(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;N(t,r,e,u)})),r.forEachChild((function(r,s){A(t,e,n.concat(s),r,i)}))}function k(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return R(t.state,n)}}}),i}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function S(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function O(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return b(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function N(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function x(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return _(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var L="vuex bindings",P="vuex:mutations",M="vuex:actions",U="vuex",j=0;function $(t,e){m({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[L]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:F}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:F}),n.addInspector({id:U,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===U)if(n.filter){var r=[];W(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[z(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===U){var r=n.nodeId;C(e,r),n.state=K(X(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===U){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(U),n.sendInspectorState(U),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=j++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:M,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var F=8702998,V=6710886,B=16777215,q={label:"namespaced",textColor:B,backgroundColor:V};function H(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function z(t,e){return{id:e||"root",label:H(e),tags:t.namespaced?[q]:[],children:Object.keys(t._children).map((function(n){return z(t._children[n],e+n+"/")}))}}function W(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[q]:[]}),Object.keys(e._children).forEach((function(i){W(t,e._children[i],n,r+i+"/")}))}function K(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=G(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?H(t):t,editable:!1,value:Q((function(){return s[t]}))}}))}return i}function G(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=Q((function(){return t[n]}))}else e[n]=Q((function(){return t[n]}))})),e}function X(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function Q(t){try{return t()}catch(e){return e}}var J=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},Y={namespaced:{configurable:!0}};Y.namespaced.get=function(){return!!this._rawModule.namespaced},J.prototype.addChild=function(t,e){this._children[t]=e},J.prototype.removeChild=function(t){delete this._children[t]},J.prototype.getChild=function(t){return this._children[t]},J.prototype.hasChild=function(t){return t in this._children},J.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},J.prototype.forEachChild=function(t){y(this._children,t)},J.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},J.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},J.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(J.prototype,Y);var Z=function(t){this.register([],t,!1)};function tt(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;tt(t.concat(r),e.getChild(r),n.modules[r])}}Z.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Z.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Z.prototype.update=function(t){tt([],this.root,t)},Z.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new J(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&y(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},Z.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},Z.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function et(t){return new nt(t)}var nt=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Z(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=r;var u=this._modules.root.state;A(this,u,[],this._modules.root),I(this,u),n.forEach((function(t){return t(e)}))},rt={state:{configurable:!0}};nt.prototype.install=function(t,e){t.provide(e||g,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&$(t,this)},rt.state.get=function(){return this._state.data},rt.state.set=function(t){0},nt.prototype.commit=function(t,e,n){var r=this,i=D(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},nt.prototype.dispatch=function(t,e){var n=this,r=D(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},nt.prototype.subscribe=function(t,e){return E(t,this._subscribers,e)},nt.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return E(n,this._actionSubscribers,e)},nt.prototype.watch=function(t,e,n){var i=this;return(0,r.YP)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},nt.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},nt.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),A(this,this.state,t,this._modules.get(t),n.preserveState),I(this,this.state)},nt.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=R(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),T(this)},nt.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},nt.prototype.hotUpdate=function(t){this._modules.update(t),T(this,!0)},nt.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(nt.prototype,rt);ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=at(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=at(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||at(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=at(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function it(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||_(t)}function ot(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function at(t,e,n){var r=t._modulesNamespaceMap[n];return r}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});var r=n(7142),i=n(5168),s=n(223);n(6699),n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const A=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function S(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!A.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return C.set(e,s),s}_((t=>({...t,get:(e,n,r)=>S(e,n)||t.get(e,n,r),has:(e,n)=>!!S(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",R="0.7.29",D=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",$="@firebase/auth",F="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",X="@firebase/performance",Q="@firebase/performance-compat",J="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.9.1",st="[DEFAULT]",ot={[x]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[$]:"fire-auth",[F]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[X]:"fire-perf",[Q]:"fire-perf-compat",[J]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ft=new s.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=it;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw ft.create("bad-app-name",{appName:String(i)});const o=at.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw ft.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(i,c),c}function vt(t=st){const e=at.get(t);if(!e)throw ft.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="firebase-heartbeat-database",bt=1,wt="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=I(_t,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw ft.create("storage-open",{originalErrorMessage:t.message})}))),Et}async function It(t){var e;try{const e=await Tt();return e.transaction(wt).objectStore(wt).get(kt(t))}catch(n){throw ft.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function At(t,e){var n;try{const n=await Tt(),r=n.transaction(wt,"readwrite"),i=r.objectStore(wt);return await i.put(e,kt(t)),r.done}catch(r){throw ft.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1024,St=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=St})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=Ct){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new O(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(x,R,t),yt(x,R,"esm2017"),yt("fire-js","")}Lt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.98101e32.js.map