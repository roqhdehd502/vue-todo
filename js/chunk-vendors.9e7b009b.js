(self["webpackChunkvue_mini_project"]=self["webpackChunkvue_mini_project"]||[]).push([[998],{9662:function(t,e,n){var i=n(7854),r=n(614),s=n(6330),o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not a function")}},6077:function(t,e,n){var i=n(7854),r=n(614),s=i.String,o=i.TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},1223:function(t,e,n){var i=n(5112),r=n(30),s=n(3070),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var i=n(7854),r=n(7976),s=i.TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var i=n(7854),r=n(111),s=i.String,o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var i,r,s,o=n(4019),a=n(9781),c=n(7854),l=n(614),u=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,v=n(7976),y=n(9518),_=n(7674),b=n(5112),w=n(9711),E=c.Int8Array,T=E&&E.prototype,I=c.Uint8ClampedArray,A=I&&I.prototype,k=E&&y(E),C=T&&y(T),S=Object.prototype,O=c.TypeError,N=b("toStringTag"),x=w("TYPED_ARRAY_TAG"),R=w("TYPED_ARRAY_CONSTRUCTOR"),D=o&&!!_&&"Opera"!==d(c.opera),L=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!u(t))return!1;var e=d(t);return"DataView"===e||h(P,e)||h(M,e)},$=function(t){if(!u(t))return!1;var e=d(t);return h(P,e)||h(M,e)},F=function(t){if($(t))return t;throw O("Target is not a typed array")},j=function(t){if(l(t)&&(!_||v(k,t)))return t;throw O(f(t)+" is not a typed array constructor")},V=function(t,e,n,i){if(a){if(n)for(var r in P){var s=c[r];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(l){}}}C[t]&&!n||m(C,t,n?e:D&&T[t]||e,i)}},B=function(t,e,n){var i,r;if(a){if(_){if(n)for(i in P)if(r=c[i],r&&h(r,t))try{delete r[t]}catch(s){}if(k[t]&&!n)return;try{return m(k,t,n?e:D&&k[t]||e)}catch(s){}}for(i in P)r=c[i],!r||r[t]&&!n||m(r,t,e)}};for(i in P)r=c[i],s=r&&r.prototype,s?p(s,R,r):D=!1;for(i in M)r=c[i],s=r&&r.prototype,s&&p(s,R,r);if((!D||!l(k)||k===Function.prototype)&&(k=function(){throw O("Incorrect invocation")},D))for(i in P)c[i]&&_(c[i],k);if((!D||!C||C===S)&&(C=k.prototype,D))for(i in P)c[i]&&_(c[i].prototype,C);if(D&&y(A)!==C&&_(A,C),a&&!h(C,N))for(i in L=!0,g(C,N,{get:function(){return u(this)?this[x]:void 0}}),P)c[i]&&p(c[i],x,i);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_CONSTRUCTOR:R,TYPED_ARRAY_TAG:L&&x,aTypedArray:F,aTypedArrayConstructor:j,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:B,isView:U,isTypedArray:$,TypedArray:k,TypedArrayPrototype:C}},1318:function(t,e,n){var i=n(5656),r=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=i(e),l=s(c),u=r(o,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var i=n(1702),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},648:function(t,e,n){var i=n(7854),r=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),l=i.Object,u="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=l(t),c))?n:u?o(e):"Object"==(i=o(e))&&s(e.callee)?"Arguments":i}},7741:function(t,e,n){var i=n(1702),r=Error,s=i("".replace),o=function(t){return String(r(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9920:function(t,e,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=r(e),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||c(t,h,l(e,h))}}},8544:function(t,e,n){var i=n(7293);t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var i=n(9781),r=n(3070),s=n(9114);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var i=n(7854),r=n(614),s=n(8880),o=n(6339),a=n(3505);t.exports=function(t,e,n,c){var l=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:e;return r(n)&&o(n,d,c),t===i?(u?t[e]=n:a(e,n),t):(l?!h&&t[e]&&(u=!0):delete t[e],u?t[e]=n:s(t,e,n),t)}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,r,s=n(7854),o=n(8113),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var i=n(7293),r=n(9114);t.exports=!i((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",r(1,7)),7!==t.stack)}))},2109:function(t,e,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(8052),a=n(3505),c=n(9920),l=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(u=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,u)for(h in e){if(f=e[h],t.noTargetGet?(p=r(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);t.exports=i?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),r=n(614),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},4664:function(t,e,n){var i=n(9781),r=n(7293),s=n(317);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(7854),r=n(1702),s=n(7293),o=n(4326),a=i.Object,c=r("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var i=n(614),r=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var i=n(111),r=n(8880);t.exports=function(t,e){i(e)&&"cause"in e&&r(t,"cause",e.cause)}},9909:function(t,e,n){var i,r,s,o=n(8536),a=n(7854),c=n(1702),l=n(111),u=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?r(t):i(t,{})},_=function(t){return function(e){var n;if(!l(e)||(n=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),w=c(b.get),E=c(b.has),T=c(b.set);i=function(t,e){if(E(b,t))throw new g(m);return e.facade=t,T(b,t,e),e},r=function(t){return w(b,t)||{}},s=function(t){return E(b,t)}}else{var I=f("state");p[I]=!0,i=function(t,e){if(h(t,I))throw new g(m);return e.facade=t,u(t,I,e),e},r=function(t){return h(t,I)?t[I]:{}},s=function(t){return h(t,I)}}t.exports={set:i,get:r,has:s,enforce:y,getterFor:_}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==u||n!=l&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(7854),r=n(5005),s=n(614),o=n(7976),a=n(3307),c=i.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&o(e.prototype,c(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},6339:function(t,e,n){var i=n(7293),r=n(614),s=n(2597),o=n(3070).f,a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),u=l.enforce,h=l.get,d=!i((function(){return 8!==o((function(){}),"length",{value:8}).length})),f=String(String).split("String"),p=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&o(t,"name",{value:e,configurable:!0}),d&&n&&s(n,"arity")&&t.length!==n.arity&&o(t,"length",{value:n.arity});var i=u(t);return s(i,"source")||(i.source=f.join("string"==typeof e?e:"")),t};Function.prototype.toString=p((function(){return r(this)&&h(this).source||c(this)}),"toString")},133:function(t,e,n){var i=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),r=n(614),s=n(2788),o=i.WeakMap;t.exports=r(o)&&/native code/.test(s(o))},6277:function(t,e,n){var i=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},30:function(t,e,n){var i,r=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),l=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},b=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&i?y(i):_():y(i);var t=o.length;while(t--)delete b[f][o[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=r(t),n=new g,g[f]=null,n[m]=t):n=b(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var i=n(9781),r=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=i&&!r?Object.defineProperties:function(t,e){o(t);var n,i=a(e),r=c(e),l=r.length,u=0;while(l>u)s.f(t,n=r[u++],i[n]);return t}},3070:function(t,e,n){var i=n(7854),r=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),l=i.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";e.f=r?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var i=h(t,e);i&&i[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:i[f],enumerable:d in n?n[d]:i[d],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return u(t,e,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return o(!r(s.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var i=n(7854),r=n(2597),s=n(614),o=n(7908),a=n(6200),c=n(8544),l=a("IE_PROTO"),u=i.Object,h=u.prototype;t.exports=c?u.getPrototypeOf:function(t){var e=o(t);if(r(e,l))return e[l];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);t.exports=function(t,e){var n,i=s(t),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(e.length>l)r(i,n=e[l++])&&(~o(u,n)||c(u,n));return u}},1956:function(t,e,n){var i=n(6324),r=n(748);t.exports=Object.keys||function(t){return i(t,r)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var i=n(1702),r=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),e?t(n,i):n.__proto__=i,n}}():void 0)},2140:function(t,e,n){var i=n(7854),r=n(6916),s=n(614),o=n(111),a=i.TypeError;t.exports=function(t,e){var n,i;if("string"===e&&s(n=t.toString)&&!o(i=r(n,t)))return i;if(s(n=t.valueOf)&&!o(i=r(n,t)))return i;if("string"!==e&&s(n=t.toString)&&!o(i=r(n,t)))return i;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var i=n(3070).f;t.exports=function(t,e,n){n in t||i(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t,e,n){var i=n(7854),r=i.TypeError;t.exports=function(t){if(void 0==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var i=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},6200:function(t,e,n){var i=n(2309),r=n(9711),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},5465:function(t,e,n){var i=n(7854),r=n(3505),s="__core-js_shared__",o=i[s]||r(s,{});t.exports=o},2309:function(t,e,n){var i=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.4",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var i=n(9303),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5656:function(t,e,n){var i=n(8361),r=n(4488);t.exports=function(t){return i(r(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var i=+t;return i!==i||0===i?0:(i>0?n:e)(i)}},7466:function(t,e,n){var i=n(9303),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(7854),r=n(4488),s=i.Object;t.exports=function(t){return s(r(t))}},4590:function(t,e,n){var i=n(7854),r=n(3002),s=i.RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw s("Wrong offset");return n}},3002:function(t,e,n){var i=n(7854),r=n(9303),s=i.RangeError;t.exports=function(t){var e=r(t);if(e<0)throw s("The argument can't be less than 0");return e}},7593:function(t,e,n){var i=n(7854),r=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),l=n(5112),u=i.TypeError,h=l("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,i=a(t,h);if(i){if(void 0===e&&(e="default"),n=r(i,t,e),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var i=n(7593),r=n(2190);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},1694:function(t,e,n){var i=n(5112),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var i=n(7854),r=n(648),s=i.String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t,e,n){var i=n(7854),r=i.String;t.exports=function(t){try{return r(t)}catch(e){return"Object"}}},9711:function(t,e,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),r=n(7293);t.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),l=r("wks"),u=i.Symbol,h=u&&u["for"],d=c?u:u&&u.withoutSetter||o;t.exports=function(t){if(!s(l,t)||!a&&"string"!=typeof l[t]){var e="Symbol."+t;a&&s(u,t)?l[t]=u[t]:l[t]=c&&h?h(e):d(e)}return l[t]}},9191:function(t,e,n){"use strict";var i=n(5005),r=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),l=n(2626),u=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),m=n(9781),g=n(1913);t.exports=function(t,e,n,v){var y="stackTraceLimit",_=v?2:1,b=t.split("."),w=b[b.length-1],E=i.apply(null,b);if(E){var T=E.prototype;if(!g&&r(T,"cause")&&delete T.cause,!n)return E;var I=i("Error"),A=e((function(t,e){var n=h(v?e:t,void 0),i=v?new E(t):new E;return void 0!==n&&s(i,"message",n),p&&s(i,"stack",f(i.stack,2)),this&&o(T,this)&&u(i,this,A),arguments.length>_&&d(i,arguments[_]),i}));if(A.prototype=T,"Error"!==w?a?a(A,I):c(A,I,{name:!0}):m&&y in E&&(l(A,E,y),l(A,E,"prepareStackTrace")),c(A,E),!g)try{T.name!==w&&s(T,"name",w),T.constructor=A}catch(k){}return A}}},2262:function(t,e,n){"use strict";var i=n(2109),r=n(7908),s=n(6244),o=n(9303),a=n(1223);i({target:"Array",proto:!0},{at:function(t){var e=r(this),n=s(e),i=o(t),a=i>=0?i:n+i;return a<0||a>=n?void 0:e[a]}}),a("at")},6699:function(t,e,n){"use strict";var i=n(2109),r=n(1318).includes,s=n(7293),o=n(1223),a=s((function(){return!Array(1).includes()}));i({target:"Array",proto:!0,forced:a},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var i=n(2109),r=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=r[a],l=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=o(t,e,l),i({global:!0,arity:1,forced:l},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,l),i({target:a,stat:!0,arity:1,forced:l},n)}};u("Error",(function(t){return function(e){return s(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),u("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var i=n(2109),r=n(1702),s=n(4488),o=n(9303),a=n(1340),c=n(7293),l=r("".charAt),u=c((function(){return"\ud842"!=="𠮷".at(-2)}));i({target:"String",proto:!0,forced:u},{at:function(t){var e=a(s(this)),n=e.length,i=o(t),r=i>=0?i:n+i;return r<0||r>=n?void 0:l(e,r)}})},8675:function(t,e,n){"use strict";var i=n(260),r=n(6244),s=n(9303),o=i.aTypedArray,a=i.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=r(e),i=s(t),a=i>=0?i:n+i;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var i=n(7854),r=n(6916),s=n(260),o=n(6244),a=n(4590),c=n(7908),l=n(7293),u=i.RangeError,h=i.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!l((function(){var t=new Uint8ClampedArray(2);return r(f,t,{length:1,0:3},1),3!==t[1]})),v=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(g)return r(f,this,n,e);var i=this.length,s=o(n),l=0;if(s+e>i)throw u("Wrong length");while(l<s)this[e+l]=n[l++]}),!g||v)},2801:function(t,e,n){"use strict";var i=n(2109),r=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),l=n(9587),u=n(6277),h=n(3678),d=n(7741),f=n(1913),p="DOMException",m=r("Error"),g=r(p),v=function(){c(this,y);var t=arguments.length,e=u(t<1?void 0:arguments[0]),n=u(t<2?void 0:arguments[1],"Error"),i=new g(e,n),r=m(e);return r.name=p,o(i,"stack",s(1,d(r.stack,1))),l(i,this,v),i},y=v.prototype=g.prototype,_="stack"in m(p),b="stack"in new g(1,2),w=_&&!b;i({global:!0,forced:f||w},{DOMException:w?v:g});var E=r(p),T=E.prototype;if(T.constructor!==E)for(var I in f||o(T,"constructor",s(1,E)),h)if(a(h,I)){var A=h[I],k=A.s;a(E,k)||o(E,k,s(6,A.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return l},L:function(){return a},LL:function(){return w},Mn:function(){return g},ZR:function(){return b},b$:function(){return f},d:function(){return p},eu:function(){return y},hl:function(){return v},m9:function(){return L},ne:function(){return N},pd:function(){return O},ru:function(){return d},tV:function(){return c},uI:function(){return h},vZ:function(){return A},w1:function(){return m},xO:function(){return C},xb:function(){return I},z$:function(){return u},zd:function(){return S}});n(1703),n(2801),n(6699);
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
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const l=r<t.length,u=l?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==u){const t=c<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function m(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const _="FirebaseError";class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?E(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new b(i,o,n);return a}}function E(t,e){return t.replace(T,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
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
 */function I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(k(n)&&k(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function k(t){return null!==t&&"object"===typeof t}
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
function C(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function S(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function O(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function N(t,e){const n=new x(t,e);return n.subscribe.bind(n)}class x{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=D),void 0===i.error&&(i.error=D),void 0===i.complete&&(i.complete=D);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function R(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function D(){}
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
function L(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return s},Fl:function(){return Bt},IU:function(){return Ct},Jd:function(){return T},PG:function(){return Tt},SU:function(){return $t},Um:function(){return bt},WL:function(){return jt},X$:function(){return C},X3:function(){return kt},XI:function(){return Pt},Xl:function(){return St},dq:function(){return Dt},iH:function(){return Lt},j:function(){return A},lk:function(){return I},qj:function(){return _t},qq:function(){return _},yT:function(){return At}});var i=n(2268);let r;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&r&&(this.parent=r,this.index=(r.scopes||(r.scopes=[])).push(this)-1)}run(t){if(this.active){const e=r;try{return r=this,t()}finally{r=e}}else 0}on(){r=this}off(){r=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=r){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,l=t=>(t.n&p)>0,u=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];c(r)&&!l(r)?r.delete(t):e[n++]=r,r.w&=~p,r.n&=~p}e.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const v=Symbol(""),y=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=g,e=w;while(t){if(t===this)return;t=t.parent}try{return this.parent=g,g=this,w=!0,p=1<<++f,f<=m?u(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,w=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let w=!0;const E=[];function T(){E.push(w),w=!1}function I(){const t=E.pop();w=void 0===t||t}function A(t,e,n){if(w&&g){let e=d.get(t);e||d.set(t,e=new Map);let i=e.get(n);i||e.set(n,i=a());const r=void 0;k(i,r)}}function k(t,e){let n=!1;f<=m?l(t)||(t.n|=p,n=!c(t)):n=!t.has(g),n&&(t.add(g),g.deps.push(t))}function C(t,e,n,r,s,o){const c=d.get(t);if(!c)return;let l=[];if("clear"===e)l=[...c.values()];else if("length"===n&&(0,i.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=r)&&l.push(t)}));else switch(void 0!==n&&l.push(c.get(n)),e){case"add":(0,i.kJ)(t)?(0,i.S0)(n)&&l.push(c.get("length")):(l.push(c.get(v)),(0,i._N)(t)&&l.push(c.get(y)));break;case"delete":(0,i.kJ)(t)||(l.push(c.get(v)),(0,i._N)(t)&&l.push(c.get(y)));break;case"set":(0,i._N)(t)&&l.push(c.get(v));break}if(1===l.length)l[0]&&S(l[0]);else{const t=[];for(const e of l)e&&t.push(...e);S(a(t))}}function S(t,e){for(const n of(0,i.kJ)(t)?t:[...t])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const O=(0,i.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(i.yk)),x=M(),R=M(!1,!0),D=M(!0),L=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,r=this.length;e<r;e++)A(n,"get",e+"");const i=n[e](...t);return-1===i||!1===i?n[e](...t.map(Ct)):i}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=Ct(this)[e].apply(this,t);return I(),n}})),t}function M(t=!1,e=!1){return function(n,r,s){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_isShallow"===r)return e;if("__v_raw"===r&&s===(t?e?gt:mt:e?pt:ft).get(n))return n;const o=(0,i.kJ)(n);if(!t&&o&&(0,i.RI)(L,r))return Reflect.get(L,r,s);const a=Reflect.get(n,r,s);if((0,i.yk)(r)?N.has(r):O(r))return a;if(t||A(n,"get",r),e)return a;if(Dt(a)){const t=!o||!(0,i.S0)(r);return t?a.value:a}return(0,i.Kn)(a)?t?wt(a):_t(a):a}}const U=F(),$=F(!0);function F(t=!1){return function(e,n,r,s){let o=e[n];if(It(o)&&Dt(o)&&!Dt(r))return!1;if(!t&&!It(r)&&(At(r)||(r=Ct(r),o=Ct(o)),!(0,i.kJ)(e)&&Dt(o)&&!Dt(r)))return o.value=r,!0;const a=(0,i.kJ)(e)&&(0,i.S0)(n)?Number(n)<e.length:(0,i.RI)(e,n),c=Reflect.set(e,n,r,s);return e===Ct(s)&&(a?(0,i.aU)(r,o)&&C(e,"set",n,r,o):C(e,"add",n,r)),c}}function j(t,e){const n=(0,i.RI)(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&C(t,"delete",e,void 0,r),s}function V(t,e){const n=Reflect.has(t,e);return(0,i.yk)(e)&&N.has(e)||A(t,"has",e),n}function B(t){return A(t,"iterate",(0,i.kJ)(t)?"length":v),Reflect.ownKeys(t)}const q={get:x,set:U,deleteProperty:j,has:V,ownKeys:B},H={get:D,set(t,e){return!0},deleteProperty(t,e){return!0}},z=(0,i.l7)({},q,{get:R,set:$}),W=t=>t,K=t=>Reflect.getPrototypeOf(t);function G(t,e,n=!1,i=!1){t=t["__v_raw"];const r=Ct(t),s=Ct(e);e!==s&&!n&&A(r,"get",e),!n&&A(r,"get",s);const{has:o}=K(r),a=i?W:n?Nt:Ot;return o.call(r,e)?a(t.get(e)):o.call(r,s)?a(t.get(s)):void(t!==r&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],i=Ct(n),r=Ct(t);return t!==r&&!e&&A(i,"has",t),!e&&A(i,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Q(t,e=!1){return t=t["__v_raw"],!e&&A(Ct(t),"iterate",v),Reflect.get(t,"size",t)}function Y(t){t=Ct(t);const e=Ct(this),n=K(e),i=n.has.call(e,t);return i||(e.add(t),C(e,"add",t,t)),this}function J(t,e){e=Ct(e);const n=Ct(this),{has:r,get:s}=K(n);let o=r.call(n,t);o||(t=Ct(t),o=r.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,i.aU)(e,a)&&C(n,"set",t,e,a):C(n,"add",t,e),this}function Z(t){const e=Ct(this),{has:n,get:i}=K(e);let r=n.call(e,t);r||(t=Ct(t),r=n.call(e,t));const s=i?i.call(e,t):void 0,o=e.delete(t);return r&&C(e,"delete",t,void 0,s),o}function tt(){const t=Ct(this),e=0!==t.size,n=void 0,i=t.clear();return e&&C(t,"clear",void 0,void 0,n),i}function et(t,e){return function(n,i){const r=this,s=r["__v_raw"],o=Ct(s),a=e?W:t?Nt:Ot;return!t&&A(o,"iterate",v),s.forEach(((t,e)=>n.call(i,a(t),a(e),r)))}}function nt(t,e,n){return function(...r){const s=this["__v_raw"],o=Ct(s),a=(0,i._N)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=s[t](...r),h=n?W:e?Nt:Ot;return!e&&A(o,"iterate",l?y:v),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&this}}function rt(){const t={get(t){return G(this,t)},get size(){return Q(this)},has:X,add:Y,set:J,delete:Z,clear:tt,forEach:et(!1,!1)},e={get(t){return G(this,t,!1,!0)},get size(){return Q(this)},has:X,add:Y,set:J,delete:Z,clear:tt,forEach:et(!1,!0)},n={get(t){return G(this,t,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:et(!0,!1)},i={get(t){return G(this,t,!0,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:et(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{t[r]=nt(r,!1,!1),n[r]=nt(r,!0,!1),e[r]=nt(r,!1,!0),i[r]=nt(r,!0,!0)})),[t,n,e,i]}const[st,ot,at,ct]=rt();function lt(t,e){const n=e?t?ct:at:t?ot:st;return(e,r,s)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get((0,i.RI)(n,r)&&r in e?n:e,r,s)}const ut={get:lt(!1,!1)},ht={get:lt(!1,!0)},dt={get:lt(!0,!1)};const ft=new WeakMap,pt=new WeakMap,mt=new WeakMap,gt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,i.W7)(t))}function _t(t){return It(t)?t:Et(t,!1,q,ut,ft)}function bt(t){return Et(t,!1,z,ht,pt)}function wt(t){return Et(t,!0,H,dt,mt)}function Et(t,e,n,r,s){if(!(0,i.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=yt(t);if(0===a)return t;const c=new Proxy(t,2===a?r:n);return s.set(t,c),c}function Tt(t){return It(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function It(t){return!(!t||!t["__v_isReadonly"])}function At(t){return!(!t||!t["__v_isShallow"])}function kt(t){return Tt(t)||It(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function St(t){return(0,i.Nj)(t,"__v_skip",!0),t}const Ot=t=>(0,i.Kn)(t)?_t(t):t,Nt=t=>(0,i.Kn)(t)?wt(t):t;function xt(t){w&&g&&(t=Ct(t),k(t.dep||(t.dep=a())))}function Rt(t,e){t=Ct(t),t.dep&&S(t.dep)}function Dt(t){return!(!t||!0!==t.__v_isRef)}function Lt(t){return Mt(t,!1)}function Pt(t){return Mt(t,!0)}function Mt(t,e){return Dt(t)?t:new Ut(t,e)}class Ut{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:Ot(t)}get value(){return xt(this),this._value}set value(t){t=this.__v_isShallow?t:Ct(t),(0,i.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ot(t),Rt(this,t))}}function $t(t){return Dt(t)?t.value:t}const Ft={get:(t,e,n)=>$t(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Dt(r)&&!Dt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function jt(t){return Tt(t)?t:new Proxy(t,Ft)}class Vt{constructor(t,e,n,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _(t,(()=>{this._dirty||(this._dirty=!0,Rt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const t=Ct(this);return xt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bt(t,e,n=!1){let r,s;const o=(0,i.mf)(t);o?(r=t,s=i.dG):(r=t.get,s=t.set);const a=new Vt(r,s,o||!s,n);return a}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Cn:function(){return V},FN:function(){return Sn},Fl:function(){return Hn},HY:function(){return je},JJ:function(){return Y},Ko:function(){return yn},P$:function(){return lt},Q6:function(){return mt},U2:function(){return ht},Uk:function(){return un},Us:function(){return Ee},WI:function(){return _n},Wm:function(){return on},Y3:function(){return E},Y8:function(){return ot},YP:function(){return et},_:function(){return sn},aZ:function(){return gt},bv:function(){return Ot},dD:function(){return j},f3:function(){return J},h:function(){return zn},iD:function(){return Ye},ic:function(){return xt},j4:function(){return Je},kq:function(){return dn},lR:function(){return Le},m0:function(){return Z},nK:function(){return pt},uE:function(){return hn},up:function(){return Me},w5:function(){return B},wg:function(){return We},wy:function(){return pe}});n(6699),n(1703);var i=n(4870),r=n(2268);function s(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){a(s,e,n)}return r}function o(t,e,n,i){if((0,r.mf)(t)){const o=s(t,e,n,i);return o&&(0,r.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let r=0;r<t.length;r++)c.push(o(t[r],e,n,i));return c}function a(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const r=e.proxy,o=n;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,r,o))return;i=i.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,r,o])}c(t,n,r,i)}function c(t,e,n,i=!0){console.error(t)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let v=null,y=0;const _=Promise.resolve();let b=null,w=null;function E(t){const e=b||_;return t?e.then(this?t.bind(this):t):e}function T(t){let e=d+1,n=h.length;while(e<n){const i=e+n>>>1,r=R(h[i]);r<t?e=i+1:n=i}return e}function I(t){h.length&&h.includes(t,l&&t.allowRecurse?d+1:d)||t===w||(null==t.id?h.push(t):h.splice(T(t.id),0,t),A())}function A(){l||u||(u=!0,b=_.then(D))}function k(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function C(t,e,n,i){(0,r.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),A()}function S(t){C(t,p,f,m)}function O(t){C(t,v,g,y)}function N(t,e=null){if(f.length){for(w=e,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,w=null,N(t,e)}}function x(t){if(g.length){const t=[...new Set(g)];if(g.length=0,v)return void v.push(...t);for(v=t,v.sort(((t,e)=>R(t)-R(e))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const R=t=>null==t.id?1/0:t.id;function D(t){u=!1,l=!0,N(t),h.sort(((t,e)=>R(t)-R(e)));r.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&s(t,null,14)}}finally{d=0,h.length=0,x(t),l=!1,b=null,(h.length||f.length||g.length)&&D(t)}}new Set;new Map;function L(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||r.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in i){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=i[t]||r.kT;o?s=n.map((t=>t.trim())):e&&(s=n.map(r.He))}let l;let u=i[l=(0,r.hR)(e)]||i[l=(0,r.hR)((0,r._A)(e))];!u&&a&&(u=i[l=(0,r.hR)((0,r.rs)(e))]),u&&o(u,t,6,s);const h=i[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,s)}}function P(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,r.mf)(t)){const i=t=>{const n=P(t,e,!0);n&&(c=!0,(0,r.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?((0,r.kJ)(o)?o.forEach((t=>a[t]=null)):(0,r.l7)(a,o),i.set(t,a),a):(i.set(t,null),null)}function M(t,e){return!(!t||!(0,r.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,r.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,r.RI)(t,(0,r.rs)(e))||(0,r.RI)(t,e))}let U=null,$=null;function F(t){const e=U;return U=t,$=t&&t.type.__scopeId||null,e}function j(t){$=t}function V(){$=null}function B(t,e=U,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&Xe(-1);const r=F(e),s=t(...n);return F(r),i._d&&Xe(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function q(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=t;let y,_;const b=F(t);try{if(4&n.shapeFlag){const t=s||i;y=fn(d.call(t,t,f,o,m,p,g)),_=u}else{const t=e;0,y=fn(t.length>1?t(o,{attrs:u,slots:l,emit:h}):t(o,null)),_=e.props?u:H(u)}}catch(E){He.length=0,a(E,t,1),y=on(Be)}let w=y;if(_&&!1!==v){const t=Object.keys(_),{shapeFlag:e}=w;t.length&&7&e&&(c&&t.some(r.tR)&&(_=z(_,c)),w=ln(w,_))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,F(b),y}const H=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,r.F7)(n))&&((e||(e={}))[n]=t[n]);return e},z=(t,e)=>{const n={};for(const i in t)(0,r.tR)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function W(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||K(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?K(i,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==i[n]&&!M(l,n))return!0}}return!1}function K(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!M(n,s))return!0}return!1}function G({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const X=t=>t.__isSuspense;function Q(t,e){e&&e.pendingBranch?(0,r.kJ)(t)?e.effects.push(...t):e.effects.push(t):O(t)}function Y(t,e){if(Cn){let n=Cn.provides;const i=Cn.parent&&Cn.parent.provides;i===n&&(n=Cn.provides=Object.create(i)),n[t]=e}else 0}function J(t,e,n=!1){const i=Cn||U;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,r.mf)(e)?e.call(i.proxy):e}else 0}function Z(t,e){return nt(t,null,e)}const tt={};function et(t,e,n){return nt(t,e,n)}function nt(t,e,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=r.kT){const h=Cn;let d,f,p=!1,m=!1;if((0,i.dq)(t)?(d=()=>t.value,p=(0,i.yT)(t)):(0,i.PG)(t)?(d=()=>t,a=!0):(0,r.kJ)(t)?(m=!0,p=t.some(i.PG),d=()=>t.map((t=>(0,i.dq)(t)?t.value:(0,i.PG)(t)?st(t):(0,r.mf)(t)?s(t,h,2):void 0))):d=(0,r.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[g])}:r.dG,e&&a){const t=d;d=()=>st(t())}let g=t=>{f=b.onStop=()=>{s(t,h,4)}};if(Ln)return g=r.dG,e?n&&o(e,h,3,[d(),m?[]:void 0,g]):d(),r.dG;let v=m?[]:tt;const y=()=>{if(b.active)if(e){const t=b.run();(a||p||(m?t.some(((t,e)=>(0,r.aU)(t,v[e]))):(0,r.aU)(t,v)))&&(f&&f(),o(e,h,3,[t,v===tt?void 0:v,g]),v=t)}else b.run()};let _;y.allowRecurse=!!e,_="sync"===c?y:"post"===c?()=>we(y,h&&h.suspense):()=>{!h||h.isMounted?S(y):y()};const b=new i.qq(d,_);return e?n?y():v=b.run():"post"===c?we(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,r.Od)(h.scope.effects,b)}}function it(t,e,n){const i=this.proxy,s=(0,r.HD)(t)?t.includes(".")?rt(i,t):()=>i[t]:t.bind(i,i);let o;(0,r.mf)(e)?o=e:(o=e.handler,n=e);const a=Cn;On(this);const c=nt(s,o.bind(i),n);return a?On(a):Nn(),c}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function st(t,e){if(!(0,r.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,i.dq)(t))st(t.value,e);else if((0,r.kJ)(t))for(let n=0;n<t.length;n++)st(t[n],e);else if((0,r.DM)(t)||(0,r._N)(t))t.forEach((t=>{st(t,e)}));else if((0,r.PO)(t))for(const n in t)st(t[n],e);return t}function ot(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ot((()=>{t.isMounted=!0})),Rt((()=>{t.isUnmounting=!0})),t}const at=[Function,Array],ct={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},setup(t,{slots:e}){const n=Sn(),r=ot();let s;return()=>{const o=e.default&&mt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Be){0,a=e,t=!0;break}}const c=(0,i.IU)(t),{mode:l}=c;if(r.isLeaving)return dt(a);const u=ft(a);if(!u)return dt(a);const h=ht(u,c,r,n);pt(u,h);const d=n.subTree,f=d&&ft(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const t=m();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==Be&&(!tn(u,f)||p)){const t=ht(f,c,r,n);if(pt(f,t),"out-in"===l)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},dt(a);"in-out"===l&&u.type!==Be&&(t.delayLeave=(t,e,n)=>{const i=ut(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},lt=ct;function ut(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ht(t,e,n,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:v,onAfterAppear:y,onAppearCancelled:_}=e,b=String(t.key),w=ut(n,t),E=(t,e)=>{t&&o(t,i,9,e)},T={mode:s,persisted:a,beforeEnter(e){let i=c;if(!n.isMounted){if(!r)return;i=g||c}e._leaveCb&&e._leaveCb(!0);const s=w[b];s&&tn(t,s)&&s.el._leaveCb&&s.el._leaveCb(),E(i,[e])},enter(t){let e=l,i=u,s=h;if(!n.isMounted){if(!r)return;e=v||l,i=y||u,s=_||h}let o=!1;const a=t._enterCb=e=>{o||(o=!0,E(e?s:i,[t]),T.delayedLeave&&T.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,i){const r=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return i();E(d,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,i(),E(n?m:p,[e]),e._leaveCb=void 0,w[r]===t&&delete w[r])};w[r]=t,f?(f(e,o),f.length<=1&&o()):o()},clone(t){return ht(t,e,n,i)}};return T}function dt(t){if(yt(t))return t=ln(t),t.children=null,t}function ft(t){return yt(t)?t.children?t.children[0]:void 0:t}function pt(t,e){6&t.shapeFlag&&t.component?pt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mt(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===je?(128&o.patchFlag&&r++,i=i.concat(mt(o.children,e,a))):(e||o.type!==Be)&&i.push(null!=a?ln(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function gt(t){return(0,r.mf)(t)?{setup:t,name:t.name}:t}const vt=t=>!!t.type.__asyncLoader;const yt=t=>t.type.__isKeepAlive;RegExp,RegExp;function _t(t,e){return(0,r.kJ)(t)?t.some((t=>_t(t,e))):(0,r.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function bt(t,e){Et(t,"a",e)}function wt(t,e){Et(t,"da",e)}function Et(t,e,n=Cn){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(kt(e,i,n),n){let t=n.parent;while(t&&t.parent)yt(t.parent.vnode)&&Tt(i,e,n,t),t=t.parent}}function Tt(t,e,n,i){const s=kt(e,t,i,!0);Dt((()=>{(0,r.Od)(i[e],s)}),n)}function It(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function At(t){return 128&t.shapeFlag?t.ssContent:t}function kt(t,e,n=Cn,r=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),On(n);const s=o(e,n,t,r);return Nn(),(0,i.lk)(),s});return r?s.unshift(a):s.push(a),a}}const Ct=t=>(e,n=Cn)=>(!Ln||"sp"===t)&&kt(t,e,n),St=Ct("bm"),Ot=Ct("m"),Nt=Ct("bu"),xt=Ct("u"),Rt=Ct("bum"),Dt=Ct("um"),Lt=Ct("sp"),Pt=Ct("rtg"),Mt=Ct("rtc");function Ut(t,e=Cn){kt("ec",t,e)}let $t=!0;function Ft(t){const e=qt(t),n=t.proxy,s=t.ctx;$t=!1,e.beforeCreate&&Vt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:E,render:T,renderTracked:I,renderTriggered:A,errorCaptured:k,serverPrefetch:C,expose:S,inheritAttrs:O,components:N,directives:x,filters:R}=e,D=null;if(h&&jt(h,s,D,t.appContext.config.unwrapInjectedRef),c)for(const i in c){const t=c[i];(0,r.mf)(t)&&(s[i]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,r.Kn)(e)&&(t.data=(0,i.qj)(e))}if($t=!0,a)for(const i in a){const t=a[i],e=(0,r.mf)(t)?t.bind(n,n):(0,r.mf)(t.get)?t.get.bind(n,n):r.dG;0;const o=!(0,r.mf)(t)&&(0,r.mf)(t.set)?t.set.bind(n):r.dG,c=Hn({get:e,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const i in l)Bt(l[i],s,n,i);if(u){const t=(0,r.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{Y(e,t[e])}))}function L(t,e){(0,r.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Vt(d,t,"c"),L(St,f),L(Ot,p),L(Nt,m),L(xt,g),L(bt,v),L(wt,y),L(Ut,k),L(Mt,I),L(Pt,A),L(Rt,b),L(Dt,E),L(Lt,C),(0,r.kJ)(S))if(S.length){const e=t.exposed||(t.exposed={});S.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===r.dG&&(t.render=T),null!=O&&(t.inheritAttrs=O),N&&(t.components=N),x&&(t.directives=x)}function jt(t,e,n=r.dG,s=!1){(0,r.kJ)(t)&&(t=Gt(t));for(const o in t){const n=t[o];let a;a=(0,r.Kn)(n)?"default"in n?J(n.from||o,n.default,!0):J(n.from||o):J(n),(0,i.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Vt(t,e,n){o((0,r.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Bt(t,e,n,i){const s=i.includes(".")?rt(n,i):()=>n[i];if((0,r.HD)(t)){const n=e[t];(0,r.mf)(n)&&et(s,n)}else if((0,r.mf)(t))et(s,t.bind(n));else if((0,r.Kn)(t))if((0,r.kJ)(t))t.forEach((t=>Bt(t,e,n,i)));else{const i=(0,r.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,r.mf)(i)&&et(s,i,t)}else 0}function qt(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:r.length||n||i?(c={},r.length&&r.forEach((t=>Ht(c,t,o,!0))),Ht(c,e,o)):c=e,s.set(e,c),c}function Ht(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ht(t,s,n,!0),r&&r.forEach((e=>Ht(t,e,n,!0)));for(const o in e)if(i&&"expose"===o);else{const i=zt[o]||n&&n[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const zt={data:Wt,props:Qt,emits:Qt,methods:Qt,computed:Qt,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:Qt,directives:Qt,watch:Yt,provide:Wt,inject:Kt};function Wt(t,e){return e?t?function(){return(0,r.l7)((0,r.mf)(t)?t.call(this,this):t,(0,r.mf)(e)?e.call(this,this):e)}:e:t}function Kt(t,e){return Qt(Gt(t),Gt(e))}function Gt(t){if((0,r.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Qt(t,e){return t?(0,r.l7)((0,r.l7)(Object.create(null),t),e):e}function Yt(t,e){if(!t)return e;if(!e)return t;const n=(0,r.l7)(Object.create(null),t);for(const i in e)n[i]=Xt(t[i],e[i]);return n}function Jt(t,e,n,s=!1){const o={},a={};(0,r.Nj)(a,en,1),t.propsDefaults=Object.create(null),te(t,e,o,a);for(const i in t.propsOptions[0])i in o||(o[i]=void 0);n?t.props=s?o:(0,i.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function Zt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,i.IU)(o),[u]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let i;te(t,e,o,a)&&(h=!0);for(const s in l)e&&((0,r.RI)(e,s)||(i=(0,r.rs)(s))!==s&&(0,r.RI)(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=ee(u,l,s,void 0,t,!0)):delete o[s]);if(a!==l)for(const t in a)e&&(0,r.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(M(t.emitsOptions,s))continue;const c=e[s];if(u)if((0,r.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,r._A)(s);o[e]=ee(u,l,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,i.X$)(t,"set","$attrs")}function te(t,e,n,s){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let i in e){if((0,r.Gg)(i))continue;const u=e[i];let h;o&&(0,r.RI)(o,h=(0,r._A)(i))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:M(t.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,l=!0)}if(a){const e=(0,i.IU)(n),s=c||r.kT;for(let i=0;i<a.length;i++){const c=a[i];n[c]=ee(o,e,c,s[c],t,!(0,r.RI)(s,c))}}return l}function ee(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=(0,r.RI)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&(0,r.mf)(t)){const{propsDefaults:r}=s;n in r?i=r[n]:(On(s),i=r[n]=t.call(null,e),Nn())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function ne(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let l=!1;if(!(0,r.mf)(t)){const i=t=>{l=!0;const[n,i]=ne(t,e,!0);(0,r.l7)(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!l)return i.set(t,r.Z6),r.Z6;if((0,r.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,r._A)(o[h]);ie(t)&&(a[t]=r.kT)}else if(o){0;for(const t in o){const e=(0,r._A)(t);if(ie(e)){const n=o[t],i=a[e]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:n;if(i){const t=oe(Boolean,i.type),n=oe(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||(0,r.RI)(i,"default"))&&c.push(e)}}}}const u=[a,c];return i.set(t,u),u}function ie(t){return"$"!==t[0]}function re(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function se(t,e){return re(t)===re(e)}function oe(t,e){return(0,r.kJ)(e)?e.findIndex((e=>se(e,t))):(0,r.mf)(e)&&se(e,t)?0:-1}const ae=t=>"_"===t[0]||"$stable"===t,ce=t=>(0,r.kJ)(t)?t.map(fn):[fn(t)],le=(t,e,n)=>{const i=B(((...t)=>ce(e(...t))),n);return i._c=!1,i},ue=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ae(s))continue;const n=t[s];if((0,r.mf)(n))e[s]=le(s,n,i);else if(null!=n){0;const t=ce(n);e[s]=()=>t}}},he=(t,e)=>{const n=ce(e);t.slots.default=()=>n},de=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,i.IU)(e),(0,r.Nj)(e,"_",n)):ue(e,t.slots={})}else t.slots={},e&&he(t,e);(0,r.Nj)(t.slots,en,1)},fe=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r.kT;if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,r.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,ue(e,s)),a=e}else e&&(he(t,e),a={default:1});if(o)for(const r in s)ae(r)||r in a||delete s[r]};function pe(t,e){const n=U;if(null===n)return t;const i=Vn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=r.kT]=e[o];(0,r.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&st(n),s.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function me(t,e,n,r){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[r];u&&((0,i.Jd)(),o(u,n,8,[t.el,l,t,e]),(0,i.lk)())}}function ge(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ve=0;function ye(t,e){return function(n,i=null){(0,r.mf)(n)||(n=Object.assign({},n)),null==i||(0,r.Kn)(i)||(i=null);const s=ge(),o=new Set;let a=!1;const c=s.app={_uid:ve++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Wn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,r.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,r.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(r,o,l){if(!a){const u=on(n,i);return u.appContext=s,o&&e?e(u,r):t(u,r,l),a=!0,c._container=r,r.__vue_app__=c,Vn(u.component)||u.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function _e(t,e,n,o,a=!1){if((0,r.kJ)(t))return void t.forEach(((t,i)=>_e(t,e&&((0,r.kJ)(e)?e[i]:e),n,o,a)));if(vt(o)&&!a)return;const c=4&o.shapeFlag?Vn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=t;const d=e&&e.r,f=u.refs===r.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,r.HD)(d)?(f[d]=null,(0,r.RI)(p,d)&&(p[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,r.mf)(h))s(h,u,12,[l,f]);else{const e=(0,r.HD)(h),s=(0,i.dq)(h);if(e||s){const s=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,r.kJ)(n)&&(0,r.Od)(n,c):(0,r.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,r.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=l,(0,r.RI)(p,h)&&(p[h]=l)):(0,i.dq)(h)&&(h.value=l,t.k&&(f[t.k]=l))};l?(s.id=-1,we(s,n)):s()}else 0}}function be(){}const we=Q;function Ee(t){return Te(t)}function Te(t,e){be();const n=(0,r.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=r.dG,cloneNode:g,insertStaticContent:v}=t,y=(t,e,n,i=null,r=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!tn(t,e)&&(i=Z(t),K(t,r,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Ve:_(t,e,n,i);break;case Be:b(t,e,n,i);break;case qe:null==t&&w(e,n,i,o);break;case je:P(t,e,n,i,r,s,o,a,c);break;default:1&h?A(t,e,n,i,r,s,o,a,c):6&h?M(t,e,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(t,e,n,i,r,s,o,a,c,et)}null!=u&&r&&_e(u,t&&t.ref,s,e||t,!e)},_=(t,e,n,i)=>{if(null==t)s(e.el=l(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,i)=>{null==t?s(e.el=u(e.children||""),n,i):e.el=t.el},w=(t,e,n,i)=>{[t.el,t.anchor]=v(t.children,e,n,i,t.el,t.anchor)},E=({el:t,anchor:e},n,i)=>{let r;while(t&&t!==e)r=p(t),s(t,n,i),t=r;s(e,n,i)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,i,r,s,o,a,c)=>{o=o||"svg"===e.type,null==t?C(e,n,i,r,s,o,a,c):R(t,e,r,s,o,a,c)},C=(t,e,n,i,o,l,u,h)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:_,patchFlag:b,dirs:w}=t;if(t.el&&void 0!==g&&-1===b)f=t.el=g(t.el);else{if(f=t.el=c(t.type,l,v&&v.is,v),8&y?d(f,t.children):16&y&&O(t.children,f,null,i,o,l&&"foreignObject"!==m,u,h),w&&me(t,null,i,"created"),v){for(const e in v)"value"===e||(0,r.Gg)(e)||a(f,e,null,v[e],l,t.children,i,o,J);"value"in v&&a(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&vn(p,i,t)}S(f,t,t.scopeId,u,i)}w&&me(t,null,i,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&_&&!_.persisted;E&&_.beforeEnter(f),s(f,e,n),((p=v&&v.onVnodeMounted)||E||w)&&we((()=>{p&&vn(p,i,t),E&&_.enter(f),w&&me(t,null,i,"mounted")}),o)},S=(t,e,n,i,r)=>{if(n&&m(t,n),i)for(let s=0;s<i.length;s++)m(t,i[s]);if(r){let n=r.subTree;if(e===n){const e=r.vnode;S(t,e,e.scopeId,e.slotScopeIds,r.parent)}}},O=(t,e,n,i,r,s,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?pn(t[l]):fn(t[l]);y(null,c,e,n,i,r,s,o,a)}},R=(t,e,n,i,s,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=e;u|=16&t.patchFlag;const p=t.props||r.kT,m=e.props||r.kT;let g;n&&Ie(n,!1),(g=m.onVnodeBeforeUpdate)&&vn(g,n,e,t),f&&me(e,t,n,"beforeUpdate"),n&&Ie(n,!0);const v=s&&"foreignObject"!==e.type;if(h?D(t.dynamicChildren,h,l,n,i,v,o):c||V(t,e,l,null,n,i,v,o,!1),u>0){if(16&u)L(l,e,p,m,n,i,s);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",p.style,m.style,s),8&u){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const o=r[e],c=p[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,s,t.children,n,i,J)}}1&u&&t.children!==e.children&&d(l,e.children)}else c||null!=h||L(l,e,p,m,n,i,s);((g=m.onVnodeUpdated)||f)&&we((()=>{g&&vn(g,n,e,t),f&&me(e,t,n,"updated")}),i)},D=(t,e,n,i,r,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===je||!tn(c,l)||70&c.shapeFlag)?f(c.el):n;y(c,l,u,null,i,r,s,o,!0)}},L=(t,e,n,i,s,o,c)=>{if(n!==i){for(const l in i){if((0,r.Gg)(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&a(t,l,h,u,c,e.children,s,o,J)}if(n!==r.kT)for(const l in n)(0,r.Gg)(l)||l in i||a(t,l,n[l],null,c,e.children,s,o,J);"value"in i&&a(t,"value",n.value,i.value)}},P=(t,e,n,i,r,o,a,c,u)=>{const h=e.el=t?t.el:l(""),d=e.anchor=t?t.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,i),s(d,n,i),O(e.children,n,d,r,o,a,c,u)):f>0&&64&f&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,r,o,a,c),(null!=e.key||r&&e===r.subTree)&&Ae(t,e,!0)):V(t,e,n,d,r,o,a,c,u)},M=(t,e,n,i,r,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?r.ctx.activate(e,n,i,o,c):U(e,n,i,r,s,o,c):$(t,e,c)},U=(t,e,n,i,r,s,o)=>{const a=t.component=kn(t,i,r);if(yt(t)&&(a.ctx.renderer=et),Pn(a),a.asyncDep){if(r&&r.registerDep(a,F),!t.el){const t=a.subTree=on(Be);b(null,t,e,n)}}else F(a,t,e,n,r,s,o)},$=(t,e,n)=>{const i=e.component=t.component;if(W(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,e,n);i.next=e,k(i.update),i.update()}else e.component=t.component,e.el=t.el,i.vnode=e},F=(t,e,n,s,o,a,c)=>{const l=()=>{if(t.isMounted){let e,{next:n,bu:i,u:s,parent:l,vnode:u}=t,h=n;0,Ie(t,!1),n?(n.el=u.el,j(t,n,c)):n=u,i&&(0,r.ir)(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&vn(e,l,n,u),Ie(t,!0);const d=q(t);0;const p=t.subTree;t.subTree=d,y(p,d,f(p.el),Z(p),t,o,a),n.el=d.el,null===h&&G(t,d.el),s&&we(s,o),(e=n.props&&n.props.onVnodeUpdated)&&we((()=>vn(e,l,n,u)),o)}else{let i;const{el:c,props:l}=e,{bm:u,m:h,parent:d}=t,f=vt(e);if(Ie(t,!1),u&&(0,r.ir)(u),!f&&(i=l&&l.onVnodeBeforeMount)&&vn(i,d,e),Ie(t,!0),c&&it){const n=()=>{t.subTree=q(t),it(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const i=t.subTree=q(t);0,y(null,i,n,s,t,o,a),e.el=i.el}if(h&&we(h,o),!f&&(i=l&&l.onVnodeMounted)){const t=e;we((()=>vn(i,d,t)),o)}256&e.shapeFlag&&t.a&&we(t.a,o),t.isMounted=!0,e=n=s=null}},u=t.effect=new i.qq(l,(()=>I(t.update)),t.scope),h=t.update=u.run.bind(u);h.id=t.uid,Ie(t,!0),h()},j=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,Zt(t,e.props,r,n),fe(t,e.children,n),(0,i.Jd)(),N(void 0,t.update),(0,i.lk)()},V=(t,e,n,i,r,s,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void H(l,h,n,i,r,s,o,a,c);if(256&f)return void B(l,h,n,i,r,s,o,a,c)}8&p?(16&u&&J(l,r,s),h!==l&&d(n,h)):16&u?16&p?H(l,h,n,i,r,s,o,a,c):J(l,r,s,!0):(8&u&&d(n,""),16&p&&O(h,n,i,r,s,o,a,c))},B=(t,e,n,i,s,o,a,c,l)=>{t=t||r.Z6,e=e||r.Z6;const u=t.length,h=e.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=e[f]=l?pn(e[f]):fn(e[f]);y(t[f],i,n,null,s,o,a,c,l)}u>h?J(t,s,o,!0,!1,d):O(e,n,i,s,o,a,c,l,d)},H=(t,e,n,i,s,o,a,c,l)=>{let u=0;const h=e.length;let d=t.length-1,f=h-1;while(u<=d&&u<=f){const i=t[u],r=e[u]=l?pn(e[u]):fn(e[u]);if(!tn(i,r))break;y(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const i=t[d],r=e[f]=l?pn(e[f]):fn(e[f]);if(!tn(i,r))break;y(i,r,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const t=f+1,r=t<h?e[t].el:i;while(u<=f)y(null,e[u]=l?pn(e[u]):fn(e[u]),n,r,s,o,a,c,l),u++}}else if(u>f)while(u<=d)K(t[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const t=e[u]=l?pn(e[u]):fn(e[u]);null!=t.key&&g.set(t.key,u)}let v,_=0;const b=f-m+1;let w=!1,E=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=d;u++){const i=t[u];if(_>=b){K(i,s,o,!0);continue}let r;if(null!=i.key)r=g.get(i.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&tn(i,e[v])){r=v;break}void 0===r?K(i,s,o,!0):(T[r-m]=u+1,r>=E?E=r:w=!0,y(i,e[r],n,null,s,o,a,c,l),_++)}const I=w?ke(T):r.Z6;for(v=I.length-1,u=b-1;u>=0;u--){const t=m+u,r=e[t],d=t+1<h?e[t+1].el:i;0===T[u]?y(null,r,n,d,s,o,a,c,l):w&&(v<0||u!==I[v]?z(r,n,d,2):v--)}}},z=(t,e,n,i,r=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void z(t.component.subTree,e,n,i);if(128&u)return void t.suspense.move(e,n,i);if(64&u)return void a.move(t,e,n,et);if(a===je){s(o,e,n);for(let t=0;t<l.length;t++)z(l[t],e,n,i);return void s(t.anchor,e,n)}if(a===qe)return void E(t,e,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),s(o,e,n),we((()=>c.enter(o)),r);else{const{leave:t,delayLeave:i,afterLeave:r}=c,a=()=>s(o,e,n),l=()=>{t(o,(()=>{a(),r&&r()}))};i?i(o,a,l):l()}else s(o,e,n)},K=(t,e,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=t;if(null!=a&&_e(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const f=1&u&&d,p=!vt(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&vn(m,e,t),6&u)Y(t.component,n,i);else{if(128&u)return void t.suspense.unmount(n,i);f&&me(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,r,et,i):l&&(s!==je||h>0&&64&h)?J(l,e,n,!1,!0):(s===je&&384&h||!r&&16&u)&&J(c,e,n),i&&X(t)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&we((()=>{m&&vn(m,e,t),f&&me(t,null,e,"unmounted")}),n)},X=t=>{const{type:e,el:n,anchor:i,transition:r}=t;if(e===je)return void Q(n,i);if(e===qe)return void T(t);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&t.shapeFlag&&r&&!r.persisted){const{leave:e,delayLeave:i}=r,o=()=>e(n,s);i?i(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=t;i&&(0,r.ir)(i),s.stop(),o&&(o.active=!1,K(a,t,e,n)),c&&we(c,e),we((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,i=!1,r=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,i,r)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),x(),e._vnode=t},et={p:y,um:K,m:z,r:X,mt:U,mc:O,pc:V,pbc:D,n:Z,o:t};let nt,it;return e&&([nt,it]=e(et)),{render:tt,hydrate:nt,createApp:ye(tt,nt)}}function Ie({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ae(t,e,n=!1){const i=t.children,s=e.children;if((0,r.kJ)(i)&&(0,r.kJ)(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=pn(s[r]),e.el=t.el),n||Ae(t,e))}}function ke(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const c=t[i];if(0!==c){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Ce=t=>t.__isTeleport,Se=t=>t&&(t.disabled||""===t.disabled),Oe=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,Ne=(t,e)=>{const n=t&&t.to;if((0,r.HD)(n)){if(e){const t=e(n);return t}return null}return n},xe={__isTeleport:!0,process(t,e,n,i,r,s,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=l,v=Se(e.props);let{shapeFlag:y,children:_,dynamicChildren:b}=e;if(null==t){const t=e.el=m(""),l=e.anchor=m("");f(t,n,i),f(l,n,i);const h=e.target=Ne(e.props,p),d=e.targetAnchor=m("");h&&(f(d,h),o=o||Oe(h));const g=(t,e)=>{16&y&&u(_,t,e,r,s,o,a,c)};v?g(n,l):h&&g(h,d)}else{e.el=t.el;const i=e.anchor=t.anchor,u=e.target=t.target,f=e.targetAnchor=t.targetAnchor,m=Se(t.props),g=m?n:u,y=m?i:f;if(o=o||Oe(u),b?(d(t.dynamicChildren,b,g,r,s,o,a),Ae(t,e,!0)):c||h(t,e,g,y,r,s,o,a,!1),v)m||Re(e,n,i,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=Ne(e.props,p);t&&Re(e,t,null,l,0)}else m&&Re(e,u,f,l,1)}},remove(t,e,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=t;if(h&&s(u),(o||!Se(d))&&(s(l),16&a))for(let f=0;f<c.length;f++){const t=c[f];r(t,e,n,!0,!!t.dynamicChildren)}},move:Re,hydrate:De};function Re(t,e,n,{o:{insert:i},m:r},s=2){0===s&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=2===s;if(h&&i(o,e,n),(!h||Se(u))&&16&c)for(let d=0;d<l.length;d++)r(l[d],e,n,2);h&&i(a,e,n)}function De(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Ne(e.props,c);if(u){const c=u._lpa||u.firstChild;16&e.shapeFlag&&(Se(e.props)?(e.anchor=l(o(t),e,a(t),n,i,r,s),e.targetAnchor=c):(e.anchor=o(t),e.targetAnchor=l(c,e,u,n,i,r,s)),u._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const Le=xe,Pe="components";function Me(t,e){return $e(Pe,t,!0,e)||t}const Ue=Symbol();function $e(t,e,n=!0,i=!1){const s=U||Cn;if(s){const n=s.type;if(t===Pe){const t=Bn(n);if(t&&(t===e||t===(0,r._A)(e)||t===(0,r.kC)((0,r._A)(e))))return n}const o=Fe(s[t]||n[t],e)||Fe(s.appContext[t],e);return!o&&i?n:o}}function Fe(t,e){return t&&(t[e]||t[(0,r._A)(e)]||t[(0,r.kC)((0,r._A)(e))])}const je=Symbol(void 0),Ve=Symbol(void 0),Be=Symbol(void 0),qe=Symbol(void 0),He=[];let ze=null;function We(t=!1){He.push(ze=t?null:[])}function Ke(){He.pop(),ze=He[He.length-1]||null}let Ge=1;function Xe(t){Ge+=t}function Qe(t){return t.dynamicChildren=Ge>0?ze||r.Z6:null,Ke(),Ge>0&&ze&&ze.push(t),t}function Ye(t,e,n,i,r,s){return Qe(sn(t,e,n,i,r,s,!0))}function Je(t,e,n,i,r){return Qe(on(t,e,n,i,r,!0))}function Ze(t){return!!t&&!0===t.__v_isVNode}function tn(t,e){return t.type===e.type&&t.key===e.key}const en="__vInternal",nn=({key:t})=>null!=t?t:null,rn=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,r.HD)(t)||(0,i.dq)(t)||(0,r.mf)(t)?{i:U,r:t,k:e,f:!!n}:t:null;function sn(t,e=null,n=null,i=0,s=null,o=(t===je?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nn(e),ref:e&&rn(e),scopeId:$,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(mn(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,r.HD)(n)?8:16),Ge>0&&!a&&ze&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&ze.push(l),l}const on=an;function an(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Ue||(t=Be),Ze(t)){const i=ln(t,e,!0);return n&&mn(i,n),i}if(qn(t)&&(t=t.__vccOpts),e){e=cn(e);let{class:t,style:n}=e;t&&!(0,r.HD)(t)&&(e.class=(0,r.C_)(t)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),e.style=(0,r.j5)(n))}const c=(0,r.HD)(t)?1:X(t)?128:Ce(t)?64:(0,r.Kn)(t)?4:(0,r.mf)(t)?2:0;return sn(t,e,n,s,o,c,a,!0)}function cn(t){return t?(0,i.X3)(t)||en in t?(0,r.l7)({},t):t:null}function ln(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=t,c=e?gn(i||{},e):i,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&nn(c),ref:e&&e.ref?n&&s?(0,r.kJ)(s)?s.concat(rn(e)):[s,rn(e)]:rn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor};return l}function un(t=" ",e=0){return on(Ve,null,t,e)}function hn(t,e){const n=on(qe,null,t);return n.staticCount=e,n}function dn(t="",e=!1){return e?(We(),Je(Be,null,t)):on(Be,null,t)}function fn(t){return null==t||"boolean"===typeof t?on(Be):(0,r.kJ)(t)?on(je,null,t.slice()):"object"===typeof t?pn(t):on(Ve,null,String(t))}function pn(t){return null===t.el||t.memo?t:ln(t)}function mn(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,r.kJ)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),mn(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||en in e?3===i&&U&&(1===U.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=U}}else(0,r.mf)(e)?(e={default:e,_ctx:U},n=32):(e=String(e),64&i?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function gn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,r.C_)([e.class,i.class]));else if("style"===t)e.style=(0,r.j5)([e.style,i.style]);else if((0,r.F7)(t)){const n=e[t],s=i[t];!s||n===s||(0,r.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function vn(t,e,n,i=null){o(t,e,7,[n,i])}function yn(t,e,n,i){let s;const o=n&&n[i];if((0,r.kJ)(t)||(0,r.HD)(t)){s=new Array(t.length);for(let n=0,i=t.length;n<i;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,r.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=e(t[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}function _n(t,e,n={},i,r){if(U.isCE||U.parent&&vt(U.parent)&&U.parent.isCE)return on("slot","default"===e?null:{name:e},i&&i());let s=t[e];s&&s._c&&(s._d=!1),We();const o=s&&bn(s(n)),a=Je(je,{key:n.key||`_${e}`},o||(i?i():[]),o&&1===t._?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function bn(t){return t.some((t=>!Ze(t)||t.type!==Be&&!(t.type===je&&!bn(t.children))))?t:null}const wn=t=>t?xn(t)?Vn(t)||t.proxy:wn(t.parent):null,En=(0,r.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wn(t.parent),$root:t=>wn(t.root),$emit:t=>t.emit,$options:t=>qt(t),$forceUpdate:t=>()=>I(t.update),$nextTick:t=>E.bind(t.proxy),$watch:t=>it.bind(t)}),Tn={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const i=c[e];if(void 0!==i)switch(i){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==r.kT&&(0,r.RI)(s,e))return c[e]=1,s[e];if(o!==r.kT&&(0,r.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,r.RI)(h,e))return c[e]=3,a[e];if(n!==r.kT&&(0,r.RI)(n,e))return c[e]=4,n[e];$t&&(c[e]=0)}}const d=En[e];let f,p;return d?("$attrs"===e&&(0,i.j)(t,"get",e),d(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==r.kT&&(0,r.RI)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,r.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return s!==r.kT&&(0,r.RI)(s,e)?(s[e]=n,!0):i!==r.kT&&(0,r.RI)(i,e)?(i[e]=n,!0):!(0,r.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==r.kT&&(0,r.RI)(t,a)||e!==r.kT&&(0,r.RI)(e,a)||(c=o[0])&&(0,r.RI)(c,a)||(0,r.RI)(i,a)||(0,r.RI)(En,a)||(0,r.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,r.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const In=ge();let An=0;function kn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||In,a={uid:An++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ne(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:s.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let Cn=null;const Sn=()=>Cn||U,On=t=>{Cn=t,t.scope.on()},Nn=()=>{Cn&&Cn.scope.off(),Cn=null};function xn(t){return 4&t.vnode.shapeFlag}let Rn,Dn,Ln=!1;function Pn(t,e=!1){Ln=e;const{props:n,children:i}=t.vnode,r=xn(t);Jt(t,n,r,e),de(t,i);const s=r?Mn(t,e):void 0;return Ln=!1,s}function Mn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,i.Xl)(new Proxy(t.ctx,Tn));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?jn(t):null;On(t),(0,i.Jd)();const c=s(o,t,0,[t.props,n]);if((0,i.lk)(),Nn(),(0,r.tI)(c)){if(c.then(Nn,Nn),e)return c.then((n=>{Un(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Un(t,c,e)}else $n(t,e)}function Un(t,e,n){(0,r.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,r.Kn)(e)&&(t.setupState=(0,i.WL)(e)),$n(t,n)}function $n(t,e,n){const s=t.type;if(!t.render){if(!e&&Rn&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:o},i),a);s.render=Rn(e,c)}}t.render=s.render||r.dG,Dn&&Dn(t)}On(t),(0,i.Jd)(),Ft(t),(0,i.lk)(),Nn()}function Fn(t){return new Proxy(t.attrs,{get(e,n){return(0,i.j)(t,"get","$attrs"),e[n]}})}function jn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Fn(t))},slots:t.slots,emit:t.emit,expose:e}}function Vn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in En?En[n](t):void 0}}))}function Bn(t){return(0,r.mf)(t)&&t.displayName||t.name}function qn(t){return(0,r.mf)(t)&&"__vccOpts"in t}const Hn=(t,e)=>(0,i.Fl)(t,e,Ln);function zn(t,e,n){const i=arguments.length;return 2===i?(0,r.Kn)(e)&&!(0,r.kJ)(e)?Ze(e)?on(t,null,[e]):on(t,e):on(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Ze(n)&&(n=[n]),on(t,e,n))}Symbol("");const Wn="3.2.33"},9242:function(t,e,n){"use strict";n.d(e,{D2:function(){return It},F8:function(){return At},W3:function(){return rt},bM:function(){return gt},e8:function(){return pt},iM:function(){return Et},nr:function(){return ft},ri:function(){return Nt}});n(6699);var i=n(2268),r=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),l={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(e.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{c.innerHTML=i?`<svg>${t}</svg>`:t;const r=c.content;if(i){const t=r.firstChild;while(t.firstChild)r.appendChild(t.firstChild);r.removeChild(t)}e.insertBefore(r,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const r=t.style,s=(0,i.HD)(n);if(n&&!s){for(const t in n)f(r,t,n[t]);if(e&&!(0,i.HD)(e))for(const t in e)null==n[t]&&f(r,t,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const d=/\s*!important$/;function f(t,e,n){if((0,i.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=g(t,e);d.test(n)?t.setProperty((0,i.rs)(r),n.replace(d,""),"important"):t[r]=n}}const p=["Webkit","Moz","ms"],m={};function g(t,e){const n=m[e];if(n)return n;let r=(0,i._A)(e);if("filter"!==r&&r in t)return m[e]=r;r=(0,i.kC)(r);for(let i=0;i<p.length;i++){const n=p[i]+r;if(n in t)return m[e]=n}return e}const v="http://www.w3.org/1999/xlink";function y(t,e,n,r,s){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const r=(0,i.Pq)(e);null==n||r&&!(0,i.yA)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function _(t,e,n,r,s,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const i=null==n?"":n;return t.value===i&&"OPTION"!==t.tagName||(t.value=i),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(l){0}c&&t.removeAttribute(e)}const[b,w]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const T=Promise.resolve(),I=()=>{E=0},A=()=>E||(T.then(I),E=b());function k(t,e,n,i){t.addEventListener(e,n,i)}function C(t,e,n,i){t.removeEventListener(e,n,i)}function S(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[n,a]=N(e);if(i){const o=s[e]=x(i,r);k(t,n,o,a)}else o&&(C(t,n,o,a),s[e]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function N(t){let e;if(O.test(t)){let n;e={};while(n=t.match(O))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,i.rs)(t.slice(2)),e]}function x(t,e){const n=t=>{const i=t.timeStamp||b();(w||i>=n.attached-1)&&(0,r.$d)(R(t,n.value),e,5,[t])};return n.value=t,n.attached=A(),n}function R(t,e){if((0,i.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const D=/^on[a-z]/,L=(t,e,n,r,s=!1,o,a,c,l)=>{"class"===e?u(t,r,s):"style"===e?h(t,n,r):(0,i.F7)(e)?(0,i.tR)(e)||S(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):P(t,e,r,s))?_(t,e,r,o,a,c,l):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),y(t,e,r,s))};function P(t,e,n,r){return r?"innerHTML"===e||"textContent"===e||!!(e in t&&D.test(e)&&(0,i.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!D.test(e)||!(0,i.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",U="animation",$=(t,{slots:e})=>(0,r.h)(r.P$,q(t),e);$.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j=$.props=(0,i.l7)({},r.P$.props,F),V=(t,e=[])=>{(0,i.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},B=t=>!!t&&((0,i.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function q(t){const e={};for(const i in t)i in F||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=H(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:I=_,onAppearCancelled:A=b}=e,k=(t,e,n)=>{K(t,e?h:c),K(t,e?u:a),n&&n()},C=(t,e)=>{K(t,p),K(t,f),e&&e()},S=t=>(e,n)=>{const i=t?I:_,s=()=>k(e,t,n);V(i,[e,s]),G((()=>{K(e,t?l:o),W(e,t?h:c),B(i)||Q(e,r,g,s)}))};return(0,i.l7)(e,{onBeforeEnter(t){V(y,[t]),W(t,o),W(t,a)},onBeforeAppear(t){V(T,[t]),W(t,l),W(t,u)},onEnter:S(!1),onAppear:S(!0),onLeave(t,e){const n=()=>C(t,e);W(t,d),tt(),W(t,f),G((()=>{K(t,d),W(t,p),B(w)||Q(t,r,v,n)})),V(w,[t,n])},onEnterCancelled(t){k(t,!1),V(b,[t])},onAppearCancelled(t){k(t,!0),V(A,[t])},onLeaveCancelled(t){C(t),V(E,[t])}})}function H(t){if(null==t)return null;if((0,i.Kn)(t))return[z(t.enter),z(t.leave)];{const e=z(t);return[e,e]}}function z(t){const e=(0,i.He)(t);return e}function W(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function G(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let X=0;function Q(t,e,n,i){const r=t._endId=++X,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Y(t,e);if(!o)return i();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),s()},d=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,d)}function Y(t,e){const n=window.getComputedStyle(t),i=t=>(n[t]||"").split(", "),r=i(M+"Delay"),s=i(M+"Duration"),o=J(r,s),a=i(U+"Delay"),c=i(U+"Duration"),l=J(a,c);let u=null,h=0,d=0;e===M?o>0&&(u=M,h=o,d=s.length):e===U?l>0&&(u=U,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?M:U:null,d=u?u===M?s.length:c.length:0);const f=u===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Z(e)+Z(t[n]))))}function Z(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function tt(){return document.body.offsetHeight}const et=new WeakMap,nt=new WeakMap,it={name:"TransitionGroup",props:(0,i.l7)({},j,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!ct(o[0].el,n.vnode.el,e))return;o.forEach(st),o.forEach(ot);const i=o.filter(at);tt(),i.forEach((t=>{const n=t.el,i=n.style;W(n,e),i.transform=i.webkitTransform=i.transitionDuration="";const r=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,K(n,e))};n.addEventListener("transitionend",r)}))})),()=>{const c=(0,s.IU)(t),l=q(c);let u=c.tag||r.HY;o=a,a=e.default?(0,r.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.nK)(e,(0,r.U2)(e,l,i,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,r.nK)(e,(0,r.U2)(e,l,i,n)),et.set(e,e.el.getBoundingClientRect())}return(0,r.Wm)(u,null,a)}}},rt=it;function st(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ot(t){nt.set(t,t.el.getBoundingClientRect())}function at(t){const e=et.get(t),n=nt.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${i}px,${r}px)`,e.transitionDuration="0s",t}}function ct(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&i.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&i.classList.add(t))),i.style.display="none";const r=1===e.nodeType?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=Y(i);return r.removeChild(i),s}const lt=t=>{const e=t.props["onUpdate:modelValue"];return(0,i.kJ)(e)?t=>(0,i.ir)(e,t):e};function ut(t){t.target.composing=!0}function ht(t){const e=t.target;e.composing&&(e.composing=!1,dt(e,"input"))}function dt(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ft={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=lt(s);const o=r||s.props&&"number"===s.props.type;k(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n?r=r.trim():o&&(r=(0,i.He)(r)),t._assign(r)})),n&&k(t,"change",(()=>{t.value=t.value.trim()})),e||(k(t,"compositionstart",ut),k(t,"compositionend",ht),k(t,"change",ht))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},o){if(t._assign=lt(o),t.composing)return;if(document.activeElement===t){if(n)return;if(r&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,i.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},pt={deep:!0,created(t,e,n){t._assign=lt(n),k(t,"change",(()=>{const e=t._modelValue,n=yt(t),r=t.checked,s=t._assign;if((0,i.kJ)(e)){const t=(0,i.hq)(e,n),o=-1!==t;if(r&&!o)s(e.concat(n));else if(!r&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,i.DM)(e)){const t=new Set(e);r?t.add(n):t.delete(n),s(t)}else s(_t(t,r))}))},mounted:mt,beforeUpdate(t,e,n){t._assign=lt(n),mt(t,e,n)}};function mt(t,{value:e,oldValue:n},r){t._modelValue=e,(0,i.kJ)(e)?t.checked=(0,i.hq)(e,r.props.value)>-1:(0,i.DM)(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=(0,i.WV)(e,_t(t,!0)))}const gt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=(0,i.DM)(e);k(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.He)(yt(t)):yt(t)));t._assign(t.multiple?s?new Set(e):e:e[0])})),t._assign=lt(r)},mounted(t,{value:e}){vt(t,e)},beforeUpdate(t,e,n){t._assign=lt(n)},updated(t,{value:e}){vt(t,e)}};function vt(t,e){const n=t.multiple;if(!n||(0,i.kJ)(e)||(0,i.DM)(e)){for(let r=0,s=t.options.length;r<s;r++){const s=t.options[r],o=yt(s);if(n)(0,i.kJ)(e)?s.selected=(0,i.hq)(e,o)>-1:s.selected=e.has(o);else if((0,i.WV)(yt(s),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function yt(t){return"_value"in t?t._value:t.value}function _t(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const bt=["ctrl","shift","alt","meta"],wt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>bt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Et=(t,e)=>(n,...i)=>{for(let t=0;t<e.length;t++){const i=wt[e[t]];if(i&&i(n,e))return}return t(n,...i)},Tt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},It=(t,e)=>n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return e.some((t=>t===r||Tt[t]===r))?t(n):void 0},At={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):kt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!==!n&&(i?e?(i.beforeEnter(t),kt(t,!0),i.enter(t)):i.leave(t,(()=>{kt(t,!1)})):kt(t,e))},beforeUnmount(t,{value:e}){kt(t,e)}};function kt(t,e){t.style.display=e?t._vod:"none"}const Ct=(0,i.l7)({patchProp:L},l);let St;function Ot(){return St||(St=(0,r.Us)(Ct))}const Nt=(...t)=>{const e=Ot().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=xt(t);if(!r)return;const s=e._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function xt(t){if((0,i.HD)(t)){const e=document.querySelector(t);return e}return t}},2268:function(t,e,n){"use strict";function i(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return f},DM:function(){return R},E9:function(){return it},F7:function(){return I},Gg:function(){return H},HD:function(){return P},He:function(){return et},Kn:function(){return U},NO:function(){return E},Nj:function(){return tt},Od:function(){return C},PO:function(){return B},Pq:function(){return a},RI:function(){return O},S0:function(){return q},W7:function(){return V},WV:function(){return m},Z6:function(){return b},_A:function(){return K},_N:function(){return x},aU:function(){return J},dG:function(){return w},e1:function(){return s},fY:function(){return i},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return l},kC:function(){return Q},kJ:function(){return N},kT:function(){return _},l7:function(){return k},mf:function(){return L},rs:function(){return X},tI:function(){return $},tR:function(){return A},yA:function(){return c},yk:function(){return M},zw:function(){return v}});const r="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=i(r);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(o);function c(t){return!!t||""===t}function l(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=P(i)?d(i):l(i);if(r)for(const t in r)e[t]=r[t]}return e}return P(t)||U(t)?t:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(u).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(P(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const i=f(t[n]);i&&(e+=i+" ")}else if(U(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=m(t[i],e[i]);return n}function m(t,e){if(t===e)return!0;let n=D(t),i=D(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=N(t),i=N(e),n||i)return!(!n||!i)&&p(t,e);if(n=U(t),i=U(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const n in t){const i=t.hasOwnProperty(n),r=e.hasOwnProperty(n);if(i&&!r||!i&&r||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function g(t,e){return t.findIndex((t=>m(t,e)))}const v=t=>P(t)?t:null==t?"":N(t)||U(t)&&(t.toString===F||!L(t.toString))?JSON.stringify(t,y,2):String(t),y=(t,e)=>e&&e.__v_isRef?y(t,e.value):x(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:!U(e)||N(e)||B(e)?e:String(e),_={},b=[],w=()=>{},E=()=>!1,T=/^on[^a-z]/,I=t=>T.test(t),A=t=>t.startsWith("onUpdate:"),k=Object.assign,C=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},S=Object.prototype.hasOwnProperty,O=(t,e)=>S.call(t,e),N=Array.isArray,x=t=>"[object Map]"===j(t),R=t=>"[object Set]"===j(t),D=t=>t instanceof Date,L=t=>"function"===typeof t,P=t=>"string"===typeof t,M=t=>"symbol"===typeof t,U=t=>null!==t&&"object"===typeof t,$=t=>U(t)&&L(t.then)&&L(t.catch),F=Object.prototype.toString,j=t=>F.call(t),V=t=>j(t).slice(8,-1),B=t=>"[object Object]"===j(t),q=t=>P(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),z=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},W=/-(\w)/g,K=z((t=>t.replace(W,((t,e)=>e?e.toUpperCase():"")))),G=/\B([A-Z])/g,X=z((t=>t.replace(G,"-$1").toLowerCase())),Q=z((t=>t.charAt(0).toUpperCase()+t.slice(1))),Y=z((t=>t?`on${Q(t)}`:"")),J=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const it=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3455:function(t,e,n){n(6699),n(1703),
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,n){t.exports=n()}(0,(function(){"use strict";const t=1e6,e=1e3,n="transitionend",i=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),r=e=>{do{e+=Math.floor(Math.random()*t)}while(document.getElementById(e));return e},s=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},o=t=>{const e=s(t);return e&&document.querySelector(e)?e:null},a=t=>{const e=s(t);return e?document.querySelector(e):null},c=t=>{if(!t)return 0;let{transitionDuration:n,transitionDelay:i}=window.getComputedStyle(t);const r=Number.parseFloat(n),s=Number.parseFloat(i);return r||s?(n=n.split(",")[0],i=i.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(i))*e):0},l=t=>{t.dispatchEvent(new Event(n))},u=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),h=t=>u(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,d=(t,e,n)=>{Object.keys(n).forEach((r=>{const s=n[r],o=e[r],a=o&&u(o)?"element":i(o);if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${s}".`)}))},f=t=>!(!u(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),p=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),m=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?m(t.parentNode):null},g=()=>{},v=t=>{t.offsetHeight},y=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},_=[],b=t=>{"loading"===document.readyState?(_.length||document.addEventListener("DOMContentLoaded",(()=>{_.forEach((t=>t()))})),_.push(t)):t()},w=()=>"rtl"===document.documentElement.dir,E=t=>{b((()=>{const e=y();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}}))},T=t=>{"function"===typeof t&&t()},I=(t,e,i=!0)=>{if(!i)return void T(t);const r=5,s=c(e)+r;let o=!1;const a=({target:i})=>{i===e&&(o=!0,e.removeEventListener(n,a),T(t))};e.addEventListener(n,a),setTimeout((()=>{o||l(e)}),s)},A=(t,e,n,i)=>{let r=t.indexOf(e);if(-1===r)return t[!n&&i?t.length-1:0];const s=t.length;return r+=n?1:-1,i&&(r=(r+s)%s),t[Math.max(0,Math.min(r,s-1))]},k=/[^.]*(?=\..*)\.|.*/,C=/\..*/,S=/::\d+$/,O={};let N=1;const x={mouseenter:"mouseover",mouseleave:"mouseout"},R=/^(mouseenter|mouseleave)/i,D=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(t,e){return e&&`${e}::${N++}`||t.uidEvent||N++}function P(t){const e=L(t);return t.uidEvent=e,O[e]=O[e]||{},O[e]}function M(t,e){return function n(i){return i.delegateTarget=t,n.oneOff&&H.off(t,i.type,e),e.apply(t,[i])}}function U(t,e,n){return function i(r){const s=t.querySelectorAll(e);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return r.delegateTarget=o,i.oneOff&&H.off(t,r.type,e,n),n.apply(o,[r]);return null}}function $(t,e,n=null){const i=Object.keys(t);for(let r=0,s=i.length;r<s;r++){const s=t[i[r]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function F(t,e,n){const i="string"===typeof e,r=i?n:e;let s=q(t);const o=D.has(s);return o||(s=t),[i,r,s]}function j(t,e,n,i,r){if("string"!==typeof e||!t)return;if(n||(n=i,i=null),R.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};i?i=t(i):n=t(n)}const[s,o,a]=F(e,n,i),c=P(t),l=c[a]||(c[a]={}),u=$(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=L(o,e.replace(k,"")),d=s?U(t,n,i):M(t,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=r,d.uidEvent=h,l[h]=d,t.addEventListener(a,d,s)}function V(t,e,n,i,r){const s=$(e[n],i,r);s&&(t.removeEventListener(n,s,Boolean(r)),delete e[n][s.uidEvent])}function B(t,e,n,i){const r=e[n]||{};Object.keys(r).forEach((s=>{if(s.includes(i)){const i=r[s];V(t,e,n,i.originalHandler,i.delegationSelector)}}))}function q(t){return t=t.replace(C,""),x[t]||t}const H={on(t,e,n,i){j(t,e,n,i,!1)},one(t,e,n,i){j(t,e,n,i,!0)},off(t,e,n,i){if("string"!==typeof e||!t)return;const[r,s,o]=F(e,n,i),a=o!==e,c=P(t),l=e.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void V(t,c,o,s,r?n:null)}l&&Object.keys(c).forEach((n=>{B(t,c,n,e.slice(1))}));const u=c[o]||{};Object.keys(u).forEach((n=>{const i=n.replace(S,"");if(!a||e.includes(i)){const e=u[n];V(t,c,o,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!==typeof e||!t)return null;const i=y(),r=q(e),s=e!==r,o=D.has(r);let a,c=!0,l=!0,u=!1,h=null;return s&&i&&(a=i.Event(e,n),i(t).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(r,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((t=>{Object.defineProperty(h,t,{get(){return n[t]}})})),u&&h.preventDefault(),l&&t.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},z=new Map,W={set(t,e,n){z.has(t)||z.set(t,new Map);const i=z.get(t);i.has(e)||0===i.size?i.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(t,e){return z.has(t)&&z.get(t).get(e)||null},remove(t,e){if(!z.has(t))return;const n=z.get(t);n.delete(e),0===n.size&&z.delete(t)}},K="5.1.3";class G{constructor(t){t=h(t),t&&(this._element=t,W.set(this._element,this.constructor.DATA_KEY,this))}dispose(){W.remove(this._element,this.constructor.DATA_KEY),H.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){I(t,e,n)}static getInstance(t){return W.get(h(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return K}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const X=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;H.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),p(this))return;const r=a(this)||this.closest(`.${i}`),s=t.getOrCreateInstance(r);s[e]()}))},Q="alert",Y="bs.alert",J=`.${Y}`,Z=`close${J}`,tt=`closed${J}`,et="fade",nt="show";class it extends G{static get NAME(){return Q}close(){const t=H.trigger(this._element,Z);if(t.defaultPrevented)return;this._element.classList.remove(nt);const e=this._element.classList.contains(et);this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),H.trigger(this._element,tt),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=it.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}X(it,"close"),E(it);const rt="button",st="bs.button",ot=`.${st}`,at=".data-api",ct="active",lt='[data-bs-toggle="button"]',ut=`click${ot}${at}`;class ht extends G{static get NAME(){return rt}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ct))}static jQueryInterface(t){return this.each((function(){const e=ht.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function dt(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function ft(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}H.on(document,ut,lt,(t=>{t.preventDefault();const e=t.target.closest(lt),n=ht.getOrCreateInstance(e);n.toggle()})),E(ht);const pt={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${ft(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${ft(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=dt(t.dataset[n])})),e},getDataAttribute(t,e){return dt(t.getAttribute(`data-bs-${ft(e)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}},mt=3,gt={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const n=[];let i=t.parentNode;while(i&&i.nodeType===Node.ELEMENT_NODE&&i.nodeType!==mt)i.matches(e)&&n.push(i),i=i.parentNode;return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!p(t)&&f(t)))}},vt="carousel",yt="bs.carousel",_t=`.${yt}`,bt=".data-api",wt="ArrowLeft",Et="ArrowRight",Tt=500,It=40,At={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},kt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ct="next",St="prev",Ot="left",Nt="right",xt={[wt]:Nt,[Et]:Ot},Rt=`slide${_t}`,Dt=`slid${_t}`,Lt=`keydown${_t}`,Pt=`mouseenter${_t}`,Mt=`mouseleave${_t}`,Ut=`touchstart${_t}`,$t=`touchmove${_t}`,Ft=`touchend${_t}`,jt=`pointerdown${_t}`,Vt=`pointerup${_t}`,Bt=`dragstart${_t}`,qt=`load${_t}${bt}`,Ht=`click${_t}${bt}`,zt="carousel",Wt="active",Kt="slide",Gt="carousel-item-end",Xt="carousel-item-start",Qt="carousel-item-next",Yt="carousel-item-prev",Jt="pointer-event",Zt=".active",te=".active.carousel-item",ee=".carousel-item",ne=".carousel-item img",ie=".carousel-item-next, .carousel-item-prev",re=".carousel-indicators",se="[data-bs-target]",oe="[data-bs-slide], [data-bs-slide-to]",ae='[data-bs-ride="carousel"]',ce="touch",le="pen";class ue extends G{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=gt.findOne(re,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return At}static get NAME(){return vt}next(){this._slide(Ct)}nextWhenVisible(){!document.hidden&&f(this._element)&&this.next()}prev(){this._slide(St)}pause(t){t||(this._isPaused=!0),gt.findOne(ie,this._element)&&(l(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=gt.findOne(te,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void H.one(this._element,Dt,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const n=t>e?Ct:St;this._slide(n,this._items[t])}_getConfig(t){return t={...At,...pt.getDataAttributes(this._element),..."object"===typeof t?t:{}},d(vt,t,kt),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=It)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Nt:Ot)}_addEventListeners(){this._config.keyboard&&H.on(this._element,Lt,(t=>this._keydown(t))),"hover"===this._config.pause&&(H.on(this._element,Pt,(t=>this.pause(t))),H.on(this._element,Mt,(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&(t.pointerType===le||t.pointerType===ce),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),Tt+this._config.interval))};gt.find(ne,this._element).forEach((t=>{H.on(t,Bt,(t=>t.preventDefault()))})),this._pointerEvent?(H.on(this._element,jt,(t=>e(t))),H.on(this._element,Vt,(t=>i(t))),this._element.classList.add(Jt)):(H.on(this._element,Ut,(t=>e(t))),H.on(this._element,$t,(t=>n(t))),H.on(this._element,Ft,(t=>i(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=xt[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?gt.find(ee,t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const n=t===Ct;return A(this._items,e,n,this._config.wrap)}_triggerSlideEvent(t,e){const n=this._getItemIndex(t),i=this._getItemIndex(gt.findOne(te,this._element));return H.trigger(this._element,Rt,{relatedTarget:t,direction:e,from:i,to:n})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=gt.findOne(Zt,this._indicatorsElement);e.classList.remove(Wt),e.removeAttribute("aria-current");const n=gt.find(se,this._indicatorsElement);for(let i=0;i<n.length;i++)if(Number.parseInt(n[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[i].classList.add(Wt),n[i].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||gt.findOne(te,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const n=this._directionToOrder(t),i=gt.findOne(te,this._element),r=this._getItemIndex(i),s=e||this._getItemByOrder(n,i),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Ct,l=c?Xt:Gt,u=c?Qt:Yt,h=this._orderToDirection(n);if(s&&s.classList.contains(Wt))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!i||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{H.trigger(this._element,Dt,{relatedTarget:s,direction:h,from:r,to:o})};if(this._element.classList.contains(Kt)){s.classList.add(u),v(s),i.classList.add(l),s.classList.add(l);const t=()=>{s.classList.remove(l,u),s.classList.add(Wt),i.classList.remove(Wt,u,l),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,i,!0)}else i.classList.remove(Wt),s.classList.add(Wt),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[Nt,Ot].includes(t)?w()?t===Ot?St:Ct:t===Ot?Ct:St:t}_orderToDirection(t){return[Ct,St].includes(t)?w()?t===St?Ot:Nt:t===St?Nt:Ot:t}static carouselInterface(t,e){const n=ue.getOrCreateInstance(t,e);let{_config:i}=n;"object"===typeof e&&(i={...i,...e});const r="string"===typeof e?e:i.slide;if("number"===typeof e)n.to(e);else if("string"===typeof r){if("undefined"===typeof n[r])throw new TypeError(`No method named "${r}"`);n[r]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){ue.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=a(this);if(!e||!e.classList.contains(zt))return;const n={...pt.getDataAttributes(e),...pt.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),ue.carouselInterface(e,n),i&&ue.getInstance(e).to(i),t.preventDefault()}}H.on(document,Ht,oe,ue.dataApiClickHandler),H.on(window,qt,(()=>{const t=gt.find(ae);for(let e=0,n=t.length;e<n;e++)ue.carouselInterface(t[e],ue.getInstance(t[e]))})),E(ue);const he="collapse",de="bs.collapse",fe=`.${de}`,pe=".data-api",me={toggle:!0,parent:null},ge={toggle:"boolean",parent:"(null|element)"},ve=`show${fe}`,ye=`shown${fe}`,_e=`hide${fe}`,be=`hidden${fe}`,we=`click${fe}${pe}`,Ee="show",Te="collapse",Ie="collapsing",Ae="collapsed",ke=`:scope .${Te} .${Te}`,Ce="collapse-horizontal",Se="width",Oe="height",Ne=".collapse.show, .collapse.collapsing",xe='[data-bs-toggle="collapse"]';class Re extends G{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=gt.find(xe);for(let i=0,r=n.length;i<r;i++){const t=n[i],e=o(t),r=gt.find(e).filter((t=>t===this._element));null!==e&&r.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return me}static get NAME(){return he}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=gt.find(ke,this._config.parent);e=gt.find(Ne,this._config.parent).filter((e=>!t.includes(e)))}const n=gt.findOne(this._selector);if(e.length){const i=e.find((t=>n!==t));if(t=i?Re.getInstance(i):null,t&&t._isTransitioning)return}const i=H.trigger(this._element,ve);if(i.defaultPrevented)return;e.forEach((e=>{n!==e&&Re.getOrCreateInstance(e,{toggle:!1}).hide(),t||W.set(e,de,null)}));const r=this._getDimension();this._element.classList.remove(Te),this._element.classList.add(Ie),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ie),this._element.classList.add(Te,Ee),this._element.style[r]="",H.trigger(this._element,ye)},o=r[0].toUpperCase()+r.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=H.trigger(this._element,_e);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,v(this._element),this._element.classList.add(Ie),this._element.classList.remove(Te,Ee);const n=this._triggerArray.length;for(let r=0;r<n;r++){const t=this._triggerArray[r],e=a(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Ie),this._element.classList.add(Te),H.trigger(this._element,be)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ee)}_getConfig(t){return t={...me,...pt.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=h(t.parent),d(he,t,ge),t}_getDimension(){return this._element.classList.contains(Ce)?Se:Oe}_initializeChildren(){if(!this._config.parent)return;const t=gt.find(ke,this._config.parent);gt.find(xe,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=a(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(Ae):t.classList.add(Ae),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=Re.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}H.on(document,we,xe,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=o(this),n=gt.find(e);n.forEach((t=>{Re.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),E(Re);var De="top",Le="bottom",Pe="right",Me="left",Ue="auto",$e=[De,Le,Pe,Me],Fe="start",je="end",Ve="clippingParents",Be="viewport",qe="popper",He="reference",ze=$e.reduce((function(t,e){return t.concat([e+"-"+Fe,e+"-"+je])}),[]),We=[].concat($e,[Ue]).reduce((function(t,e){return t.concat([e,e+"-"+Fe,e+"-"+je])}),[]),Ke="beforeRead",Ge="read",Xe="afterRead",Qe="beforeMain",Ye="main",Je="afterMain",Ze="beforeWrite",tn="write",en="afterWrite",nn=[Ke,Ge,Xe,Qe,Ye,Je,Ze,tn,en];function rn(t){return t?(t.nodeName||"").toLowerCase():null}function sn(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function on(t){var e=sn(t).Element;return t instanceof e||t instanceof Element}function an(t){var e=sn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function cn(t){if("undefined"===typeof ShadowRoot)return!1;var e=sn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function ln(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},r=e.elements[t];an(r)&&rn(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))}function un(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],r=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),o=s.reduce((function(t,e){return t[e]="",t}),{});an(i)&&rn(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(t){i.removeAttribute(t)})))}))}}const hn={name:"applyStyles",enabled:!0,phase:"write",fn:ln,effect:un,requires:["computeStyles"]};function dn(t){return t.split("-")[0]}function fn(t,e){var n=t.getBoundingClientRect(),i=1,r=1;return{width:n.width/i,height:n.height/r,top:n.top/r,right:n.right/i,bottom:n.bottom/r,left:n.left/i,x:n.left/i,y:n.top/r}}function pn(t){var e=fn(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function mn(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&cn(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function gn(t){return sn(t).getComputedStyle(t)}function vn(t){return["table","td","th"].indexOf(rn(t))>=0}function yn(t){return((on(t)?t.ownerDocument:t.document)||window.document).documentElement}function _n(t){return"html"===rn(t)?t:t.assignedSlot||t.parentNode||(cn(t)?t.host:null)||yn(t)}function bn(t){return an(t)&&"fixed"!==gn(t).position?t.offsetParent:null}function wn(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&an(t)){var i=gn(t);if("fixed"===i.position)return null}var r=_n(t);while(an(r)&&["html","body"].indexOf(rn(r))<0){var s=gn(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function En(t){var e=sn(t),n=bn(t);while(n&&vn(n)&&"static"===gn(n).position)n=bn(n);return n&&("html"===rn(n)||"body"===rn(n)&&"static"===gn(n).position)?e:n||wn(t)||e}function Tn(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var In=Math.max,An=Math.min,kn=Math.round;function Cn(t,e,n){return In(t,An(e,n))}function Sn(){return{top:0,right:0,bottom:0,left:0}}function On(t){return Object.assign({},Sn(),t)}function Nn(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var xn=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,On("number"!==typeof t?t:Nn(t,$e))};function Rn(t){var e,n=t.state,i=t.name,r=t.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=dn(n.placement),c=Tn(a),l=[Me,Pe].indexOf(a)>=0,u=l?"height":"width";if(s&&o){var h=xn(r.padding,n),d=pn(s),f="y"===c?De:Me,p="y"===c?Le:Pe,m=n.rects.reference[u]+n.rects.reference[c]-o[c]-n.rects.popper[u],g=o[c]-n.rects.reference[c],v=En(s),y=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,_=m/2-g/2,b=h[f],w=y-d[u]-h[p],E=y/2-d[u]/2+_,T=Cn(b,E,w),I=c;n.modifiersData[i]=(e={},e[I]=T,e.centerOffset=T-E,e)}}function Dn(t){var e=t.state,n=t.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r),r))&&mn(e.elements.popper,r)&&(e.elements.arrow=r)}const Ln={name:"arrow",enabled:!0,phase:"main",fn:Rn,effect:Dn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Pn(t){return t.split("-")[1]}var Mn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Un(t){var e=t.x,n=t.y,i=window,r=i.devicePixelRatio||1;return{x:kn(kn(e*r)/r)||0,y:kn(kn(n*r)/r)||0}}function $n(t){var e,n=t.popper,i=t.popperRect,r=t.placement,s=t.variation,o=t.offsets,a=t.position,c=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,h=!0===u?Un(o):"function"===typeof u?u(o):o,d=h.x,f=void 0===d?0:d,p=h.y,m=void 0===p?0:p,g=o.hasOwnProperty("x"),v=o.hasOwnProperty("y"),y=Me,_=De,b=window;if(l){var w=En(n),E="clientHeight",T="clientWidth";w===sn(n)&&(w=yn(n),"static"!==gn(w).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth")),r!==De&&(r!==Me&&r!==Pe||s!==je)||(_=Le,m-=w[E]-i.height,m*=c?1:-1),r!==Me&&(r!==De&&r!==Le||s!==je)||(y=Pe,f-=w[T]-i.width,f*=c?1:-1)}var I,A=Object.assign({position:a},l&&Mn);return c?Object.assign({},A,(I={},I[_]=v?"0":"",I[y]=g?"0":"",I.transform=(b.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",I)):Object.assign({},A,(e={},e[_]=v?m+"px":"",e[y]=g?f+"px":"",e.transform="",e))}function Fn(t){var e=t.state,n=t.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:dn(e.placement),variation:Pn(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,$n(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,$n(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const jn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Fn,data:{}};var Vn={passive:!0};function Bn(t){var e=t.state,n=t.instance,i=t.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,c=sn(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach((function(t){t.addEventListener("scroll",n.update,Vn)})),a&&c.addEventListener("resize",n.update,Vn),function(){s&&l.forEach((function(t){t.removeEventListener("scroll",n.update,Vn)})),a&&c.removeEventListener("resize",n.update,Vn)}}const qn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bn,data:{}};var Hn={left:"right",right:"left",bottom:"top",top:"bottom"};function zn(t){return t.replace(/left|right|bottom|top/g,(function(t){return Hn[t]}))}var Wn={start:"end",end:"start"};function Kn(t){return t.replace(/start|end/g,(function(t){return Wn[t]}))}function Gn(t){var e=sn(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Xn(t){return fn(yn(t)).left+Gn(t).scrollLeft}function Qn(t){var e=sn(t),n=yn(t),i=e.visualViewport,r=n.clientWidth,s=n.clientHeight,o=0,a=0;return i&&(r=i.width,s=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=i.offsetLeft,a=i.offsetTop)),{width:r,height:s,x:o+Xn(t),y:a}}function Yn(t){var e,n=yn(t),i=Gn(t),r=null==(e=t.ownerDocument)?void 0:e.body,s=In(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=In(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+Xn(t),c=-i.scrollTop;return"rtl"===gn(r||n).direction&&(a+=In(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Jn(t){var e=gn(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Zn(t){return["html","body","#document"].indexOf(rn(t))>=0?t.ownerDocument.body:an(t)&&Jn(t)?t:Zn(_n(t))}function ti(t,e){var n;void 0===e&&(e=[]);var i=Zn(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),s=sn(i),o=r?[s].concat(s.visualViewport||[],Jn(i)?i:[]):i,a=e.concat(o);return r?a:a.concat(ti(_n(o)))}function ei(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ni(t){var e=fn(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function ii(t,e){return e===Be?ei(Qn(t)):an(e)?ni(e):ei(Yn(yn(t)))}function ri(t){var e=ti(_n(t)),n=["absolute","fixed"].indexOf(gn(t).position)>=0,i=n&&an(t)?En(t):t;return on(i)?e.filter((function(t){return on(t)&&mn(t,i)&&"body"!==rn(t)})):[]}function si(t,e,n){var i="clippingParents"===e?ri(t):[].concat(e),r=[].concat(i,[n]),s=r[0],o=r.reduce((function(e,n){var i=ii(t,n);return e.top=In(i.top,e.top),e.right=An(i.right,e.right),e.bottom=An(i.bottom,e.bottom),e.left=In(i.left,e.left),e}),ii(t,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function oi(t){var e,n=t.reference,i=t.element,r=t.placement,s=r?dn(r):null,o=r?Pn(r):null,a=n.x+n.width/2-i.width/2,c=n.y+n.height/2-i.height/2;switch(s){case De:e={x:a,y:n.y-i.height};break;case Le:e={x:a,y:n.y+n.height};break;case Pe:e={x:n.x+n.width,y:c};break;case Me:e={x:n.x-i.width,y:c};break;default:e={x:n.x,y:n.y}}var l=s?Tn(s):null;if(null!=l){var u="y"===l?"height":"width";switch(o){case Fe:e[l]=e[l]-(n[u]/2-i[u]/2);break;case je:e[l]=e[l]+(n[u]/2-i[u]/2);break}}return e}function ai(t,e){void 0===e&&(e={});var n=e,i=n.placement,r=void 0===i?t.placement:i,s=n.boundary,o=void 0===s?Ve:s,a=n.rootBoundary,c=void 0===a?Be:a,l=n.elementContext,u=void 0===l?qe:l,h=n.altBoundary,d=void 0!==h&&h,f=n.padding,p=void 0===f?0:f,m=On("number"!==typeof p?p:Nn(p,$e)),g=u===qe?He:qe,v=t.rects.popper,y=t.elements[d?g:u],_=si(on(y)?y:y.contextElement||yn(t.elements.popper),o,c),b=fn(t.elements.reference),w=oi({reference:b,element:v,strategy:"absolute",placement:r}),E=ei(Object.assign({},v,w)),T=u===qe?E:b,I={top:_.top-T.top+m.top,bottom:T.bottom-_.bottom+m.bottom,left:_.left-T.left+m.left,right:T.right-_.right+m.right},A=t.modifiersData.offset;if(u===qe&&A){var k=A[r];Object.keys(I).forEach((function(t){var e=[Pe,Le].indexOf(t)>=0?1:-1,n=[De,Le].indexOf(t)>=0?"y":"x";I[t]+=k[n]*e}))}return I}function ci(t,e){void 0===e&&(e={});var n=e,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?We:c,u=Pn(i),h=u?a?ze:ze.filter((function(t){return Pn(t)===u})):$e,d=h.filter((function(t){return l.indexOf(t)>=0}));0===d.length&&(d=h);var f=d.reduce((function(e,n){return e[n]=ai(t,{placement:n,boundary:r,rootBoundary:s,padding:o})[dn(n)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}function li(t){if(dn(t)===Ue)return[];var e=zn(t);return[Kn(t),e,Kn(e)]}function ui(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var r=n.mainAxis,s=void 0===r||r,o=n.altAxis,a=void 0===o||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=void 0===f||f,m=n.allowedAutoPlacements,g=e.options.placement,v=dn(g),y=v===g,_=c||(y||!p?[zn(g)]:li(g)),b=[g].concat(_).reduce((function(t,n){return t.concat(dn(n)===Ue?ci(e,{placement:n,boundary:u,rootBoundary:h,padding:l,flipVariations:p,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,E=e.rects.popper,T=new Map,I=!0,A=b[0],k=0;k<b.length;k++){var C=b[k],S=dn(C),O=Pn(C)===Fe,N=[De,Le].indexOf(S)>=0,x=N?"width":"height",R=ai(e,{placement:C,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),D=N?O?Pe:Me:O?Le:De;w[x]>E[x]&&(D=zn(D));var L=zn(D),P=[];if(s&&P.push(R[S]<=0),a&&P.push(R[D]<=0,R[L]<=0),P.every((function(t){return t}))){A=C,I=!1;break}T.set(C,P)}if(I)for(var M=p?3:1,U=function(t){var e=b.find((function(e){var n=T.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},$=M;$>0;$--){var F=U($);if("break"===F)break}e.placement!==A&&(e.modifiersData[i]._skip=!0,e.placement=A,e.reset=!0)}}const hi={name:"flip",enabled:!0,phase:"main",fn:ui,requiresIfExists:["offset"],data:{_skip:!1}};function di(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function fi(t){return[De,Pe,Le,Me].some((function(e){return t[e]>=0}))}function pi(t){var e=t.state,n=t.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=ai(e,{elementContext:"reference"}),a=ai(e,{altBoundary:!0}),c=di(o,i),l=di(a,r,s),u=fi(c),h=fi(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const mi={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pi};function gi(t,e,n){var i=dn(t),r=[Me,De].indexOf(i)>=0?-1:1,s="function"===typeof n?n(Object.assign({},e,{placement:t})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[Me,Pe].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function vi(t){var e=t.state,n=t.options,i=t.name,r=n.offset,s=void 0===r?[0,0]:r,o=We.reduce((function(t,n){return t[n]=gi(n,e.rects,s),t}),{}),a=o[e.placement],c=a.x,l=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[i]=o}const yi={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:vi};function _i(t){var e=t.state,n=t.name;e.modifiersData[n]=oi({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const bi={name:"popperOffsets",enabled:!0,phase:"read",fn:_i,data:{}};function wi(t){return"x"===t?"y":"x"}function Ei(t){var e=t.state,n=t.options,i=t.name,r=n.mainAxis,s=void 0===r||r,o=n.altAxis,a=void 0!==o&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=void 0===d||d,p=n.tetherOffset,m=void 0===p?0:p,g=ai(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),v=dn(e.placement),y=Pn(e.placement),_=!y,b=Tn(v),w=wi(b),E=e.modifiersData.popperOffsets,T=e.rects.reference,I=e.rects.popper,A="function"===typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,k={x:0,y:0};if(E){if(s||a){var C="y"===b?De:Me,S="y"===b?Le:Pe,O="y"===b?"height":"width",N=E[b],x=E[b]+g[C],R=E[b]-g[S],D=f?-I[O]/2:0,L=y===Fe?T[O]:I[O],P=y===Fe?-I[O]:-T[O],M=e.elements.arrow,U=f&&M?pn(M):{width:0,height:0},$=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Sn(),F=$[C],j=$[S],V=Cn(0,T[O],U[O]),B=_?T[O]/2-D-V-F-A:L-V-F-A,q=_?-T[O]/2+D+V+j+A:P+V+j+A,H=e.elements.arrow&&En(e.elements.arrow),z=H?"y"===b?H.clientTop||0:H.clientLeft||0:0,W=e.modifiersData.offset?e.modifiersData.offset[e.placement][b]:0,K=E[b]+B-W-z,G=E[b]+q-W;if(s){var X=Cn(f?An(x,K):x,N,f?In(R,G):R);E[b]=X,k[b]=X-N}if(a){var Q="x"===b?De:Me,Y="x"===b?Le:Pe,J=E[w],Z=J+g[Q],tt=J-g[Y],et=Cn(f?An(Z,K):Z,J,f?In(tt,G):tt);E[w]=et,k[w]=et-J}}e.modifiersData[i]=k}}const Ti={name:"preventOverflow",enabled:!0,phase:"main",fn:Ei,requiresIfExists:["offset"]};function Ii(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ai(t){return t!==sn(t)&&an(t)?Ii(t):Gn(t)}function ki(t){var e=t.getBoundingClientRect(),n=e.width/t.offsetWidth||1,i=e.height/t.offsetHeight||1;return 1!==n||1!==i}function Ci(t,e,n){void 0===n&&(n=!1);var i=an(e);an(e)&&ki(e);var r=yn(e),s=fn(t),o={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!n)&&(("body"!==rn(e)||Jn(r))&&(o=Ai(e)),an(e)?(a=fn(e),a.x+=e.clientLeft,a.y+=e.clientTop):r&&(a.x=Xn(r))),{x:s.left+o.scrollLeft-a.x,y:s.top+o.scrollTop-a.y,width:s.width,height:s.height}}function Si(t){var e=new Map,n=new Set,i=[];function r(t){n.add(t.name);var s=[].concat(t.requires||[],t.requiresIfExists||[]);s.forEach((function(t){if(!n.has(t)){var i=e.get(t);i&&r(i)}})),i.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||r(t)})),i}function Oi(t){var e=Si(t);return nn.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function Ni(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function xi(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var Ri={placement:"bottom",modifiers:[],strategy:"absolute"};function Di(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function Li(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,i=void 0===n?[]:n,r=e.defaultOptions,s=void 0===r?Ri:r;return function(t,e,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ri,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,c={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:on(t)?ti(t):t.contextElement?ti(t.contextElement):[],popper:ti(e)};var a=Oi(xi([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(t){return t.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var t=r.elements,e=t.reference,n=t.popper;if(Di(e,n)){r.rects={reference:Ci(e,En(n),"fixed"===r.options.strategy),popper:pn(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(t){return r.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(r=o({state:r,options:u,name:h,instance:c})||r)}else r.reset=!1,i=-1}}},update:Ni((function(){return new Promise((function(t){c.forceUpdate(),t(r)}))})),destroy:function(){u(),a=!0}};if(!Di(t,e))return c;function l(){r.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,i=void 0===n?{}:n,s=t.effect;if("function"===typeof s){var a=s({state:r,name:e,instance:c,options:i}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(t){return t()})),o=[]}return c.setOptions(n).then((function(t){!a&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var Pi=Li(),Mi=[qn,bi,jn,hn],Ui=Li({defaultModifiers:Mi}),$i=[qn,bi,jn,hn,yi,hi,Ti,Ln,mi],Fi=Li({defaultModifiers:$i});const ji=Object.freeze({__proto__:null,popperGenerator:Li,detectOverflow:ai,createPopperBase:Pi,createPopper:Fi,createPopperLite:Ui,top:De,bottom:Le,right:Pe,left:Me,auto:Ue,basePlacements:$e,start:Fe,end:je,clippingParents:Ve,viewport:Be,popper:qe,reference:He,variationPlacements:ze,placements:We,beforeRead:Ke,read:Ge,afterRead:Xe,beforeMain:Qe,main:Ye,afterMain:Je,beforeWrite:Ze,write:tn,afterWrite:en,modifierPhases:nn,applyStyles:hn,arrow:Ln,computeStyles:jn,eventListeners:qn,flip:hi,hide:mi,offset:yi,popperOffsets:bi,preventOverflow:Ti}),Vi="dropdown",Bi="bs.dropdown",qi=`.${Bi}`,Hi=".data-api",zi="Escape",Wi="Space",Ki="Tab",Gi="ArrowUp",Xi="ArrowDown",Qi=2,Yi=new RegExp(`${Gi}|${Xi}|${zi}`),Ji=`hide${qi}`,Zi=`hidden${qi}`,tr=`show${qi}`,er=`shown${qi}`,nr=`click${qi}${Hi}`,ir=`keydown${qi}${Hi}`,rr=`keyup${qi}${Hi}`,sr="show",or="dropup",ar="dropend",cr="dropstart",lr="navbar",ur='[data-bs-toggle="dropdown"]',hr=".dropdown-menu",dr=".navbar-nav",fr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",pr=w()?"top-end":"top-start",mr=w()?"top-start":"top-end",gr=w()?"bottom-end":"bottom-start",vr=w()?"bottom-start":"bottom-end",yr=w()?"left-start":"right-start",_r=w()?"right-start":"left-start",br={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},wr={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Er extends G{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return br}static get DefaultType(){return wr}static get NAME(){return Vi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(p(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element},e=H.trigger(this._element,tr,t);if(e.defaultPrevented)return;const n=Er.getParentFromElement(this._element);this._inNavbar?pt.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(dr)&&[].concat(...document.body.children).forEach((t=>H.on(t,"mouseover",g))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(sr),this._element.classList.add(sr),H.trigger(this._element,er,t)}hide(){if(p(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const e=H.trigger(this._element,Ji,t);e.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>H.off(t,"mouseover",g))),this._popper&&this._popper.destroy(),this._menu.classList.remove(sr),this._element.classList.remove(sr),this._element.setAttribute("aria-expanded","false"),pt.removeDataAttribute(this._menu,"popper"),H.trigger(this._element,Zi,t))}_getConfig(t){if(t={...this.constructor.Default,...pt.getDataAttributes(this._element),...t},d(Vi,t,this.constructor.DefaultType),"object"===typeof t.reference&&!u(t.reference)&&"function"!==typeof t.reference.getBoundingClientRect)throw new TypeError(`${Vi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(t){if("undefined"===typeof ji)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:u(this._config.reference)?e=h(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));this._popper=Fi(e,this._menu,n),i&&pt.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(sr)}_getMenuElement(){return gt.next(this._element,hr)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains(ar))return yr;if(t.classList.contains(cr))return _r;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains(or)?e?mr:pr:e?vr:gr}_detectNavbar(){return null!==this._element.closest(`.${lr}`)}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=gt.find(fr,this._menu).filter(f);n.length&&A(n,e,t===Xi,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Er.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(t.button===Qi||"keyup"===t.type&&t.key!==Ki))return;const e=gt.find(ur);for(let n=0,i=e.length;n<i;n++){const i=Er.getInstance(e[n]);if(!i||!1===i._config.autoClose)continue;if(!i._isShown())continue;const r={relatedTarget:i._element};if(t){const e=t.composedPath(),n=e.includes(i._menu);if(e.includes(i._element)||"inside"===i._config.autoClose&&!n||"outside"===i._config.autoClose&&n)continue;if(i._menu.contains(t.target)&&("keyup"===t.type&&t.key===Ki||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(r.clickEvent=t)}i._completeHide(r)}}static getParentFromElement(t){return a(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===Wi||t.key!==zi&&(t.key!==Xi&&t.key!==Gi||t.target.closest(hr)):!Yi.test(t.key))return;const e=this.classList.contains(sr);if(!e&&t.key===zi)return;if(t.preventDefault(),t.stopPropagation(),p(this))return;const n=this.matches(ur)?this:gt.prev(this,ur)[0],i=Er.getOrCreateInstance(n);if(t.key!==zi)return t.key===Gi||t.key===Xi?(e||i.show(),void i._selectMenuItem(t)):void(e&&t.key!==Wi||Er.clearMenus());i.hide()}}H.on(document,ir,ur,Er.dataApiKeydownHandler),H.on(document,ir,hr,Er.dataApiKeydownHandler),H.on(document,nr,Er.clearMenus),H.on(document,rr,Er.clearMenus),H.on(document,nr,ur,(function(t){t.preventDefault(),Er.getOrCreateInstance(this).toggle()})),E(Er);const Tr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ir=".sticky-top";class Ar{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(Tr,"paddingRight",(e=>e+t)),this._setElementAttributes(Ir,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),r=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const r=window.getComputedStyle(t)[e];t.style[e]=`${n(Number.parseFloat(r))}px`};this._applyManipulationCallback(t,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Tr,"paddingRight"),this._resetElementAttributes(Ir,"marginRight")}_saveInitialAttribute(t,e){const n=t.style[e];n&&pt.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=t=>{const n=pt.getDataAttribute(t,e);"undefined"===typeof n?t.style.removeProperty(e):(pt.removeDataAttribute(t,e),t.style[e]=n)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){u(t)?e(t):gt.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const kr={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Cr={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Sr="backdrop",Or="fade",Nr="show",xr=`mousedown.bs.${Sr}`;class Rr{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&v(this._getElement()),this._getElement().classList.add(Nr),this._emulateAnimation((()=>{T(t)}))):T(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(Nr),this._emulateAnimation((()=>{this.dispose(),T(t)}))):T(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Or),this._element=t}return this._element}_getConfig(t){return t={...kr,..."object"===typeof t?t:{}},t.rootElement=h(t.rootElement),d(Sr,t,Cr),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),H.on(this._getElement(),xr,(()=>{T(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(H.off(this._element,xr),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){I(t,this._getElement(),this._config.isAnimated)}}const Dr={trapElement:null,autofocus:!0},Lr={trapElement:"element",autofocus:"boolean"},Pr="focustrap",Mr="bs.focustrap",Ur=`.${Mr}`,$r=`focusin${Ur}`,Fr=`keydown.tab${Ur}`,jr="Tab",Vr="forward",Br="backward";class qr{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),H.off(document,Ur),H.on(document,$r,(t=>this._handleFocusin(t))),H.on(document,Fr,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,H.off(document,Ur))}_handleFocusin(t){const{target:e}=t,{trapElement:n}=this._config;if(e===document||e===n||n.contains(e))return;const i=gt.focusableChildren(n);0===i.length?n.focus():this._lastTabNavDirection===Br?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===jr&&(this._lastTabNavDirection=t.shiftKey?Br:Vr)}_getConfig(t){return t={...Dr,..."object"===typeof t?t:{}},d(Pr,t,Lr),t}}const Hr="modal",zr="bs.modal",Wr=`.${zr}`,Kr=".data-api",Gr="Escape",Xr={backdrop:!0,keyboard:!0,focus:!0},Qr={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Yr=`hide${Wr}`,Jr=`hidePrevented${Wr}`,Zr=`hidden${Wr}`,ts=`show${Wr}`,es=`shown${Wr}`,ns=`resize${Wr}`,is=`click.dismiss${Wr}`,rs=`keydown.dismiss${Wr}`,ss=`mouseup.dismiss${Wr}`,os=`mousedown.dismiss${Wr}`,as=`click${Wr}${Kr}`,cs="modal-open",ls="fade",us="show",hs="modal-static",ds=".modal.show",fs=".modal-dialog",ps=".modal-body",ms='[data-bs-toggle="modal"]';class gs extends G{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=gt.findOne(fs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ar}static get Default(){return Xr}static get NAME(){return Hr}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=H.trigger(this._element,ts,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(cs),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),H.on(this._dialog,os,(()=>{H.one(this._element,ss,(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=H.trigger(this._element,Yr);if(t.defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(us),H.off(this._element,is),H.off(this._dialog,os),this._queueCallback((()=>this._hideModal()),this._element,e)}dispose(){[window,this._dialog].forEach((t=>H.off(t,Wr))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Rr({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new qr({trapElement:this._element})}_getConfig(t){return t={...Xr,...pt.getDataAttributes(this._element),..."object"===typeof t?t:{}},d(Hr,t,Qr),t}_showElement(t){const e=this._isAnimated(),n=gt.findOne(ps,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),e&&v(this._element),this._element.classList.add(us);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,H.trigger(this._element,es,{relatedTarget:t})};this._queueCallback(i,this._dialog,e)}_setEscapeEvent(){this._isShown?H.on(this._element,rs,(t=>{this._config.keyboard&&t.key===Gr?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Gr||this._triggerBackdropTransition()})):H.off(this._element,rs)}_setResizeEvent(){this._isShown?H.on(window,ns,(()=>this._adjustDialog())):H.off(window,ns)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(cs),this._resetAdjustments(),this._scrollBar.reset(),H.trigger(this._element,Zr)}))}_showBackdrop(t){H.on(this._element,is,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains(ls)}_triggerBackdropTransition(){const t=H.trigger(this._element,Jr);if(t.defaultPrevented)return;const{classList:e,scrollHeight:n,style:i}=this._element,r=n>document.documentElement.clientHeight;!r&&"hidden"===i.overflowY||e.contains(hs)||(r||(i.overflowY="hidden"),e.add(hs),this._queueCallback((()=>{e.remove(hs),r||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;(!n&&t&&!w()||n&&!t&&w())&&(this._element.style.paddingLeft=`${e}px`),(n&&!t&&!w()||!n&&t&&w())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=gs.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}H.on(document,as,ms,(function(t){const e=a(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),H.one(e,ts,(t=>{t.defaultPrevented||H.one(e,Zr,(()=>{f(this)&&this.focus()}))}));const n=gt.findOne(ds);n&&gs.getInstance(n).hide();const i=gs.getOrCreateInstance(e);i.toggle(this)})),X(gs),E(gs);const vs="offcanvas",ys="bs.offcanvas",_s=`.${ys}`,bs=".data-api",ws=`load${_s}${bs}`,Es="Escape",Ts={backdrop:!0,keyboard:!0,scroll:!1},Is={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},As="show",ks="offcanvas-backdrop",Cs=".offcanvas.show",Ss=`show${_s}`,Os=`shown${_s}`,Ns=`hide${_s}`,xs=`hidden${_s}`,Rs=`click${_s}${bs}`,Ds=`keydown.dismiss${_s}`,Ls='[data-bs-toggle="offcanvas"]';class Ps extends G{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return vs}static get Default(){return Ts}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=H.trigger(this._element,Ss,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ar).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(As);const n=()=>{this._config.scroll||this._focustrap.activate(),H.trigger(this._element,Os,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=H.trigger(this._element,Ns);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(As),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ar).reset(),H.trigger(this._element,xs)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...Ts,...pt.getDataAttributes(this._element),..."object"===typeof t?t:{}},d(vs,t,Is),t}_initializeBackDrop(){return new Rr({className:ks,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new qr({trapElement:this._element})}_addEventListeners(){H.on(this._element,Ds,(t=>{this._config.keyboard&&t.key===Es&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=Ps.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}H.on(document,Rs,Ls,(function(t){const e=a(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),p(this))return;H.one(e,xs,(()=>{f(this)&&this.focus()}));const n=gt.findOne(Cs);n&&n!==e&&Ps.getInstance(n).hide();const i=Ps.getOrCreateInstance(e);i.toggle(this)})),H.on(window,ws,(()=>gt.find(Cs).forEach((t=>Ps.getOrCreateInstance(t).show())))),X(Ps),E(Ps);const Ms=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Us=/^aria-[\w-]*$/i,$s=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Fs=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,js=(t,e)=>{const n=t.nodeName.toLowerCase();if(e.includes(n))return!Ms.has(n)||Boolean($s.test(t.nodeValue)||Fs.test(t.nodeValue));const i=e.filter((t=>t instanceof RegExp));for(let r=0,s=i.length;r<s;r++)if(i[r].test(n))return!0;return!1},Vs={"*":["class","dir","id","lang","role",Us],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Bs(t,e,n){if(!t.length)return t;if(n&&"function"===typeof n)return n(t);const i=new window.DOMParser,r=i.parseFromString(t,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const t=s[o],n=t.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){t.remove();continue}const i=[].concat(...t.attributes),r=[].concat(e["*"]||[],e[n]||[]);i.forEach((e=>{js(e,r)||t.removeAttribute(e.nodeName)}))}return r.body.innerHTML}const qs="tooltip",Hs="bs.tooltip",zs=`.${Hs}`,Ws="bs-tooltip",Ks=new Set(["sanitize","allowList","sanitizeFn"]),Gs={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Xs={AUTO:"auto",TOP:"top",RIGHT:w()?"left":"right",BOTTOM:"bottom",LEFT:w()?"right":"left"},Qs={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Vs,popperConfig:null},Ys={HIDE:`hide${zs}`,HIDDEN:`hidden${zs}`,SHOW:`show${zs}`,SHOWN:`shown${zs}`,INSERTED:`inserted${zs}`,CLICK:`click${zs}`,FOCUSIN:`focusin${zs}`,FOCUSOUT:`focusout${zs}`,MOUSEENTER:`mouseenter${zs}`,MOUSELEAVE:`mouseleave${zs}`},Js="fade",Zs="modal",to="show",eo="show",no="out",io=".tooltip-inner",ro=`.${Zs}`,so="hide.bs.modal",oo="hover",ao="focus",co="click",lo="manual";class uo extends G{constructor(t,e){if("undefined"===typeof ji)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return Qs}static get NAME(){return qs}static get Event(){return Ys}static get DefaultType(){return Gs}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(to))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),H.off(this._element.closest(ro),so,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=H.trigger(this._element,this.constructor.Event.SHOW),e=m(this._element),n=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(io).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),s=r(this.constructor.NAME);i.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&i.classList.add(Js);const o="function"===typeof this._config.placement?this._config.placement.call(this,i,this._element):this._config.placement,a=this._getAttachment(o);this._addAttachmentClass(a);const{container:c}=this._config;W.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(i),H.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=Fi(this._element,i,this._getPopperConfig(a)),i.classList.add(to);const l=this._resolvePossibleFunction(this._config.customClass);l&&i.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>{H.on(t,"mouseover",g)}));const u=()=>{const t=this._hoverState;this._hoverState=null,H.trigger(this._element,this.constructor.Event.SHOWN),t===no&&this._leave(null,this)},h=this.tip.classList.contains(Js);this._queueCallback(u,this.tip,h)}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||(this._hoverState!==eo&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),H.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=H.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;t.classList.remove(to),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>H.off(t,"mouseover",g))),this._activeTrigger[co]=!1,this._activeTrigger[ao]=!1,this._activeTrigger[oo]=!1;const i=this.tip.classList.contains(Js);this._queueCallback(e,this.tip,i),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(Js,to),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),io)}_sanitizeAndSetContent(t,e,n){const i=gt.findOne(n,t);e||!i?this.setElementContent(i,e):i.remove()}setElementContent(t,e){if(null!==t)return u(e)?(e=h(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Bs(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"===typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Xs[t.toUpperCase()]}_setListeners(){const t=this._config.trigger.split(" ");t.forEach((t=>{if("click"===t)H.on(this._element,this.constructor.Event.CLICK,this._config.selector,(t=>this.toggle(t)));else if(t!==lo){const e=t===oo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=t===oo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;H.on(this._element,e,this._config.selector,(t=>this._enter(t))),H.on(this._element,n,this._config.selector,(t=>this._leave(t)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},H.on(this._element.closest(ro),so,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?ao:oo]=!0),e.getTipElement().classList.contains(to)||e._hoverState===eo?e._hoverState=eo:(clearTimeout(e._timeout),e._hoverState=eo,e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=>{e._hoverState===eo&&e.show()}),e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?ao:oo]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=no,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=>{e._hoverState===no&&e.hide()}),e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=pt.getDataAttributes(this._element);return Object.keys(e).forEach((t=>{Ks.has(t)&&delete e[t]})),t={...this.constructor.Default,...e,..."object"===typeof t&&t?t:{}},t.container=!1===t.container?document.body:h(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),d(qs,t,this.constructor.DefaultType),t.sanitize&&(t.template=Bs(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=t.getAttribute("class").match(e);null!==n&&n.length>0&&n.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))}_getBasicClassPrefix(){return Ws}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=uo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}E(uo);const ho="popover",fo="bs.popover",po=`.${fo}`,mo="bs-popover",go={...uo.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},vo={...uo.DefaultType,content:"(string|element|function)"},yo={HIDE:`hide${po}`,HIDDEN:`hidden${po}`,SHOW:`show${po}`,SHOWN:`shown${po}`,INSERTED:`inserted${po}`,CLICK:`click${po}`,FOCUSIN:`focusin${po}`,FOCUSOUT:`focusout${po}`,MOUSEENTER:`mouseenter${po}`,MOUSELEAVE:`mouseleave${po}`},_o=".popover-header",bo=".popover-body";class wo extends uo{static get Default(){return go}static get NAME(){return ho}static get Event(){return yo}static get DefaultType(){return vo}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),_o),this._sanitizeAndSetContent(t,this._getContent(),bo)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return mo}static jQueryInterface(t){return this.each((function(){const e=wo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}E(wo);const Eo="scrollspy",To="bs.scrollspy",Io=`.${To}`,Ao=".data-api",ko={offset:10,method:"auto",target:""},Co={offset:"number",method:"string",target:"(string|element)"},So=`activate${Io}`,Oo=`scroll${Io}`,No=`load${Io}${Ao}`,xo="dropdown-item",Ro="active",Do='[data-bs-spy="scroll"]',Lo=".nav, .list-group",Po=".nav-link",Mo=".nav-item",Uo=".list-group-item",$o=`${Po}, ${Uo}, .${xo}`,Fo=".dropdown",jo=".dropdown-toggle",Vo="offset",Bo="position";class qo extends G{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,H.on(this._scrollElement,Oo,(()=>this._process())),this.refresh(),this._process()}static get Default(){return ko}static get NAME(){return Eo}refresh(){const t=this._scrollElement===this._scrollElement.window?Vo:Bo,e="auto"===this._config.method?t:this._config.method,n=e===Bo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const i=gt.find($o,this._config.target);i.map((t=>{const i=o(t),r=i?gt.findOne(i):null;if(r){const t=r.getBoundingClientRect();if(t.width||t.height)return[pt[e](r).top+n,i]}return null})).filter((t=>t)).sort(((t,e)=>t[0]-e[0])).forEach((t=>{this._offsets.push(t[0]),this._targets.push(t[1])}))}dispose(){H.off(this._scrollElement,Io),super.dispose()}_getConfig(t){return t={...ko,...pt.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},t.target=h(t.target)||document.documentElement,d(Eo,t,Co),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;){const n=this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&("undefined"===typeof this._offsets[e+1]||t<this._offsets[e+1]);n&&this._activate(this._targets[e])}}}_activate(t){this._activeTarget=t,this._clear();const e=$o.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),n=gt.findOne(e.join(","),this._config.target);n.classList.add(Ro),n.classList.contains(xo)?gt.findOne(jo,n.closest(Fo)).classList.add(Ro):gt.parents(n,Lo).forEach((t=>{gt.prev(t,`${Po}, ${Uo}`).forEach((t=>t.classList.add(Ro))),gt.prev(t,Mo).forEach((t=>{gt.children(t,Po).forEach((t=>t.classList.add(Ro)))}))})),H.trigger(this._scrollElement,So,{relatedTarget:t})}_clear(){gt.find($o,this._config.target).filter((t=>t.classList.contains(Ro))).forEach((t=>t.classList.remove(Ro)))}static jQueryInterface(t){return this.each((function(){const e=qo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}H.on(window,No,(()=>{gt.find(Do).forEach((t=>new qo(t)))})),E(qo);const Ho="tab",zo="bs.tab",Wo=`.${zo}`,Ko=".data-api",Go=`hide${Wo}`,Xo=`hidden${Wo}`,Qo=`show${Wo}`,Yo=`shown${Wo}`,Jo=`click${Wo}${Ko}`,Zo="dropdown-menu",ta="active",ea="fade",na="show",ia=".dropdown",ra=".nav, .list-group",sa=".active",oa=":scope > li > .active",aa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ca=".dropdown-toggle",la=":scope > .dropdown-menu .active";class ua extends G{static get NAME(){return Ho}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ta))return;let t;const e=a(this._element),n=this._element.closest(ra);if(n){const e="UL"===n.nodeName||"OL"===n.nodeName?oa:sa;t=gt.find(e,n),t=t[t.length-1]}const i=t?H.trigger(t,Go,{relatedTarget:this._element}):null,r=H.trigger(this._element,Qo,{relatedTarget:t});if(r.defaultPrevented||null!==i&&i.defaultPrevented)return;this._activate(this._element,n);const s=()=>{H.trigger(t,Xo,{relatedTarget:this._element}),H.trigger(this._element,Yo,{relatedTarget:t})};e?this._activate(e,e.parentNode,s):s()}_activate(t,e,n){const i=!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?gt.children(e,sa):gt.find(oa,e),r=i[0],s=n&&r&&r.classList.contains(ea),o=()=>this._transitionComplete(t,r,n);r&&s?(r.classList.remove(na),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,n){if(e){e.classList.remove(ta);const t=gt.findOne(la,e.parentNode);t&&t.classList.remove(ta),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(ta),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),v(t),t.classList.contains(ea)&&t.classList.add(na);let i=t.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains(Zo)){const e=t.closest(ia);e&&gt.find(ca,e).forEach((t=>t.classList.add(ta))),t.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=ua.getOrCreateInstance(this);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}H.on(document,Jo,aa,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),p(this))return;const e=ua.getOrCreateInstance(this);e.show()})),E(ua);const ha="toast",da="bs.toast",fa=`.${da}`,pa=`mouseover${fa}`,ma=`mouseout${fa}`,ga=`focusin${fa}`,va=`focusout${fa}`,ya=`hide${fa}`,_a=`hidden${fa}`,ba=`show${fa}`,wa=`shown${fa}`,Ea="fade",Ta="hide",Ia="show",Aa="showing",ka={animation:"boolean",autohide:"boolean",delay:"number"},Ca={animation:!0,autohide:!0,delay:5e3};class Sa extends G{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ka}static get Default(){return Ca}static get NAME(){return ha}show(){const t=H.trigger(this._element,ba);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ea);const e=()=>{this._element.classList.remove(Aa),H.trigger(this._element,wa),this._maybeScheduleHide()};this._element.classList.remove(Ta),v(this._element),this._element.classList.add(Ia),this._element.classList.add(Aa),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Ia))return;const t=H.trigger(this._element,ya);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(Ta),this._element.classList.remove(Aa),this._element.classList.remove(Ia),H.trigger(this._element,_a)};this._element.classList.add(Aa),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Ia)&&this._element.classList.remove(Ia),super.dispose()}_getConfig(t){return t={...Ca,...pt.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},d(ha,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){H.on(this._element,pa,(t=>this._onInteraction(t,!0))),H.on(this._element,ma,(t=>this._onInteraction(t,!1))),H.on(this._element,ga,(t=>this._onInteraction(t,!0))),H.on(this._element,va,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Sa.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}X(Sa),E(Sa);const Oa={Alert:it,Button:ht,Carousel:ue,Collapse:Re,Dropdown:Er,Modal:gs,Offcanvas:Ps,Popover:wo,ScrollSpy:qo,Tab:ua,Toast:Sa,Tooltip:uo};return Oa}))},8937:function(t,e,n){"use strict";var i={};n.r(i),n.d(i,{afterMain:function(){return T},afterRead:function(){return b},afterWrite:function(){return k},applyStyles:function(){return P},arrow:function(){return st},auto:function(){return c},basePlacements:function(){return l},beforeMain:function(){return w},beforeRead:function(){return y},beforeWrite:function(){return I},bottom:function(){return s},clippingParents:function(){return d},computeStyles:function(){return ht},createPopper:function(){return ce},createPopperBase:function(){return oe},createPopperLite:function(){return ue},detectOverflow:function(){return Rt},end:function(){return h},eventListeners:function(){return pt},flip:function(){return Mt},hide:function(){return jt},left:function(){return a},main:function(){return E},modifierPhases:function(){return C},offset:function(){return qt},placements:function(){return v},popper:function(){return p},popperGenerator:function(){return se},popperOffsets:function(){return zt},preventOverflow:function(){return Gt},read:function(){return _},reference:function(){return m},right:function(){return o},start:function(){return u},top:function(){return r},variationPlacements:function(){return g},viewport:function(){return f},write:function(){return A}});n(6699),n(1703);var r="top",s="bottom",o="right",a="left",c="auto",l=[r,s,o,a],u="start",h="end",d="clippingParents",f="viewport",p="popper",m="reference",g=l.reduce((function(t,e){return t.concat([e+"-"+u,e+"-"+h])}),[]),v=[].concat(l,[c]).reduce((function(t,e){return t.concat([e,e+"-"+u,e+"-"+h])}),[]),y="beforeRead",_="read",b="afterRead",w="beforeMain",E="main",T="afterMain",I="beforeWrite",A="write",k="afterWrite",C=[y,_,b,w,E,T,I,A,k];function S(t){return t?(t.nodeName||"").toLowerCase():null}function O(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function N(t){var e=O(t).Element;return t instanceof e||t instanceof Element}function x(t){var e=O(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function R(t){if("undefined"===typeof ShadowRoot)return!1;var e=O(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function D(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},r=e.elements[t];x(r)&&S(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))}function L(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],r=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),o=s.reduce((function(t,e){return t[e]="",t}),{});x(i)&&S(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(t){i.removeAttribute(t)})))}))}}var P={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:L,requires:["computeStyles"]};function M(t){return t.split("-")[0]}var U=Math.max,$=Math.min,F=Math.round;function j(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),i=1,r=1;if(x(t)&&e){var s=t.offsetHeight,o=t.offsetWidth;o>0&&(i=F(n.width)/o||1),s>0&&(r=F(n.height)/s||1)}return{width:n.width/i,height:n.height/r,top:n.top/r,right:n.right/i,bottom:n.bottom/r,left:n.left/i,x:n.left/i,y:n.top/r}}function V(t){var e=j(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function B(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&R(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function q(t){return O(t).getComputedStyle(t)}function H(t){return["table","td","th"].indexOf(S(t))>=0}function z(t){return((N(t)?t.ownerDocument:t.document)||window.document).documentElement}function W(t){return"html"===S(t)?t:t.assignedSlot||t.parentNode||(R(t)?t.host:null)||z(t)}function K(t){return x(t)&&"fixed"!==q(t).position?t.offsetParent:null}function G(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&x(t)){var i=q(t);if("fixed"===i.position)return null}var r=W(t);R(r)&&(r=r.host);while(x(r)&&["html","body"].indexOf(S(r))<0){var s=q(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function X(t){var e=O(t),n=K(t);while(n&&H(n)&&"static"===q(n).position)n=K(n);return n&&("html"===S(n)||"body"===S(n)&&"static"===q(n).position)?e:n||G(t)||e}function Q(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Y(t,e,n){return U(t,$(e,n))}function J(t,e,n){var i=Y(t,e,n);return i>n?n:i}function Z(){return{top:0,right:0,bottom:0,left:0}}function tt(t){return Object.assign({},Z(),t)}function et(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var nt=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,tt("number"!==typeof t?t:et(t,l))};function it(t){var e,n=t.state,i=t.name,c=t.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=M(n.placement),d=Q(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var m=nt(c.padding,n),g=V(l),v="y"===d?r:a,y="y"===d?s:o,_=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],b=u[d]-n.rects.reference[d],w=X(l),E=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,T=_/2-b/2,I=m[v],A=E-g[p]-m[y],k=E/2-g[p]/2+T,C=Y(I,k,A),S=d;n.modifiersData[i]=(e={},e[S]=C,e.centerOffset=C-k,e)}}function rt(t){var e=t.state,n=t.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r),r))&&B(e.elements.popper,r)&&(e.elements.arrow=r)}var st={name:"arrow",enabled:!0,phase:"main",fn:it,effect:rt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ot(t){return t.split("-")[1]}var at={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ct(t){var e=t.x,n=t.y,i=window,r=i.devicePixelRatio||1;return{x:F(e*r)/r||0,y:F(n*r)/r||0}}function lt(t){var e,n=t.popper,i=t.popperRect,c=t.placement,l=t.variation,u=t.offsets,d=t.position,f=t.gpuAcceleration,p=t.adaptive,m=t.roundOffsets,g=t.isFixed,v=u.x,y=void 0===v?0:v,_=u.y,b=void 0===_?0:_,w="function"===typeof m?m({x:y,y:b}):{x:y,y:b};y=w.x,b=w.y;var E=u.hasOwnProperty("x"),T=u.hasOwnProperty("y"),I=a,A=r,k=window;if(p){var C=X(n),S="clientHeight",N="clientWidth";if(C===O(n)&&(C=z(n),"static"!==q(C).position&&"absolute"===d&&(S="scrollHeight",N="scrollWidth")),c===r||(c===a||c===o)&&l===h){A=s;var x=g&&C===k&&k.visualViewport?k.visualViewport.height:C[S];b-=x-i.height,b*=f?1:-1}if(c===a||(c===r||c===s)&&l===h){I=o;var R=g&&C===k&&k.visualViewport?k.visualViewport.width:C[N];y-=R-i.width,y*=f?1:-1}}var D,L=Object.assign({position:d},p&&at),P=!0===m?ct({x:y,y:b}):{x:y,y:b};return y=P.x,b=P.y,f?Object.assign({},L,(D={},D[A]=T?"0":"",D[I]=E?"0":"",D.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",D)):Object.assign({},L,(e={},e[A]=T?b+"px":"",e[I]=E?y+"px":"",e.transform="",e))}function ut(t){var e=t.state,n=t.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:M(e.placement),variation:ot(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,lt(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,lt(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var ht={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ut,data:{}},dt={passive:!0};function ft(t){var e=t.state,n=t.instance,i=t.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,c=O(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach((function(t){t.addEventListener("scroll",n.update,dt)})),a&&c.addEventListener("resize",n.update,dt),function(){s&&l.forEach((function(t){t.removeEventListener("scroll",n.update,dt)})),a&&c.removeEventListener("resize",n.update,dt)}}var pt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ft,data:{}},mt={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,(function(t){return mt[t]}))}var vt={start:"end",end:"start"};function yt(t){return t.replace(/start|end/g,(function(t){return vt[t]}))}function _t(t){var e=O(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function bt(t){return j(z(t)).left+_t(t).scrollLeft}function wt(t){var e=O(t),n=z(t),i=e.visualViewport,r=n.clientWidth,s=n.clientHeight,o=0,a=0;return i&&(r=i.width,s=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=i.offsetLeft,a=i.offsetTop)),{width:r,height:s,x:o+bt(t),y:a}}function Et(t){var e,n=z(t),i=_t(t),r=null==(e=t.ownerDocument)?void 0:e.body,s=U(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=U(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+bt(t),c=-i.scrollTop;return"rtl"===q(r||n).direction&&(a+=U(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Tt(t){var e=q(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function It(t){return["html","body","#document"].indexOf(S(t))>=0?t.ownerDocument.body:x(t)&&Tt(t)?t:It(W(t))}function At(t,e){var n;void 0===e&&(e=[]);var i=It(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),s=O(i),o=r?[s].concat(s.visualViewport||[],Tt(i)?i:[]):i,a=e.concat(o);return r?a:a.concat(At(W(o)))}function kt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ct(t){var e=j(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function St(t,e){return e===f?kt(wt(t)):N(e)?Ct(e):kt(Et(z(t)))}function Ot(t){var e=At(W(t)),n=["absolute","fixed"].indexOf(q(t).position)>=0,i=n&&x(t)?X(t):t;return N(i)?e.filter((function(t){return N(t)&&B(t,i)&&"body"!==S(t)})):[]}function Nt(t,e,n){var i="clippingParents"===e?Ot(t):[].concat(e),r=[].concat(i,[n]),s=r[0],o=r.reduce((function(e,n){var i=St(t,n);return e.top=U(i.top,e.top),e.right=$(i.right,e.right),e.bottom=$(i.bottom,e.bottom),e.left=U(i.left,e.left),e}),St(t,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function xt(t){var e,n=t.reference,i=t.element,c=t.placement,l=c?M(c):null,d=c?ot(c):null,f=n.x+n.width/2-i.width/2,p=n.y+n.height/2-i.height/2;switch(l){case r:e={x:f,y:n.y-i.height};break;case s:e={x:f,y:n.y+n.height};break;case o:e={x:n.x+n.width,y:p};break;case a:e={x:n.x-i.width,y:p};break;default:e={x:n.x,y:n.y}}var m=l?Q(l):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case u:e[m]=e[m]-(n[g]/2-i[g]/2);break;case h:e[m]=e[m]+(n[g]/2-i[g]/2);break;default:}}return e}function Rt(t,e){void 0===e&&(e={});var n=e,i=n.placement,a=void 0===i?t.placement:i,c=n.boundary,u=void 0===c?d:c,h=n.rootBoundary,g=void 0===h?f:h,v=n.elementContext,y=void 0===v?p:v,_=n.altBoundary,b=void 0!==_&&_,w=n.padding,E=void 0===w?0:w,T=tt("number"!==typeof E?E:et(E,l)),I=y===p?m:p,A=t.rects.popper,k=t.elements[b?I:y],C=Nt(N(k)?k:k.contextElement||z(t.elements.popper),u,g),S=j(t.elements.reference),O=xt({reference:S,element:A,strategy:"absolute",placement:a}),x=kt(Object.assign({},A,O)),R=y===p?x:S,D={top:C.top-R.top+T.top,bottom:R.bottom-C.bottom+T.bottom,left:C.left-R.left+T.left,right:R.right-C.right+T.right},L=t.modifiersData.offset;if(y===p&&L){var P=L[a];Object.keys(D).forEach((function(t){var e=[o,s].indexOf(t)>=0?1:-1,n=[r,s].indexOf(t)>=0?"y":"x";D[t]+=P[n]*e}))}return D}function Dt(t,e){void 0===e&&(e={});var n=e,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?v:c,h=ot(i),d=h?a?g:g.filter((function(t){return ot(t)===h})):l,f=d.filter((function(t){return u.indexOf(t)>=0}));0===f.length&&(f=d);var p=f.reduce((function(e,n){return e[n]=Rt(t,{placement:n,boundary:r,rootBoundary:s,padding:o})[M(n)],e}),{});return Object.keys(p).sort((function(t,e){return p[t]-p[e]}))}function Lt(t){if(M(t)===c)return[];var e=gt(t);return[yt(t),e,yt(e)]}function Pt(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var l=n.mainAxis,h=void 0===l||l,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,v=n.rootBoundary,y=n.altBoundary,_=n.flipVariations,b=void 0===_||_,w=n.allowedAutoPlacements,E=e.options.placement,T=M(E),I=T===E,A=p||(I||!b?[gt(E)]:Lt(E)),k=[E].concat(A).reduce((function(t,n){return t.concat(M(n)===c?Dt(e,{placement:n,boundary:g,rootBoundary:v,padding:m,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),C=e.rects.reference,S=e.rects.popper,O=new Map,N=!0,x=k[0],R=0;R<k.length;R++){var D=k[R],L=M(D),P=ot(D)===u,U=[r,s].indexOf(L)>=0,$=U?"width":"height",F=Rt(e,{placement:D,boundary:g,rootBoundary:v,altBoundary:y,padding:m}),j=U?P?o:a:P?s:r;C[$]>S[$]&&(j=gt(j));var V=gt(j),B=[];if(h&&B.push(F[L]<=0),f&&B.push(F[j]<=0,F[V]<=0),B.every((function(t){return t}))){x=D,N=!1;break}O.set(D,B)}if(N)for(var q=b?3:1,H=function(t){var e=k.find((function(e){var n=O.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return x=e,"break"},z=q;z>0;z--){var W=H(z);if("break"===W)break}e.placement!==x&&(e.modifiersData[i]._skip=!0,e.placement=x,e.reset=!0)}}var Mt={name:"flip",enabled:!0,phase:"main",fn:Pt,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function $t(t){return[r,o,s,a].some((function(e){return t[e]>=0}))}function Ft(t){var e=t.state,n=t.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,o=Rt(e,{elementContext:"reference"}),a=Rt(e,{altBoundary:!0}),c=Ut(o,i),l=Ut(a,r,s),u=$t(c),h=$t(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var jt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ft};function Vt(t,e,n){var i=M(t),s=[a,r].indexOf(i)>=0?-1:1,c="function"===typeof n?n(Object.assign({},e,{placement:t})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*s,[a,o].indexOf(i)>=0?{x:u,y:l}:{x:l,y:u}}function Bt(t){var e=t.state,n=t.options,i=t.name,r=n.offset,s=void 0===r?[0,0]:r,o=v.reduce((function(t,n){return t[n]=Vt(n,e.rects,s),t}),{}),a=o[e.placement],c=a.x,l=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[i]=o}var qt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Bt};function Ht(t){var e=t.state,n=t.name;e.modifiersData[n]=xt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var zt={name:"popperOffsets",enabled:!0,phase:"read",fn:Ht,data:{}};function Wt(t){return"x"===t?"y":"x"}function Kt(t){var e=t.state,n=t.options,i=t.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,y=void 0===v||v,_=n.tetherOffset,b=void 0===_?0:_,w=Rt(e,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),E=M(e.placement),T=ot(e.placement),I=!T,A=Q(E),k=Wt(A),C=e.modifiersData.popperOffsets,S=e.rects.reference,O=e.rects.popper,N="function"===typeof b?b(Object.assign({},e.rects,{placement:e.placement})):b,x="number"===typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),R=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,D={x:0,y:0};if(C){if(l){var L,P="y"===A?r:a,F="y"===A?s:o,j="y"===A?"height":"width",B=C[A],q=B+w[P],H=B-w[F],z=y?-O[j]/2:0,W=T===u?S[j]:O[j],K=T===u?-O[j]:-S[j],G=e.elements.arrow,tt=y&&G?V(G):{width:0,height:0},et=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Z(),nt=et[P],it=et[F],rt=Y(0,S[j],tt[j]),st=I?S[j]/2-z-rt-nt-x.mainAxis:W-rt-nt-x.mainAxis,at=I?-S[j]/2+z+rt+it+x.mainAxis:K+rt+it+x.mainAxis,ct=e.elements.arrow&&X(e.elements.arrow),lt=ct?"y"===A?ct.clientTop||0:ct.clientLeft||0:0,ut=null!=(L=null==R?void 0:R[A])?L:0,ht=B+st-ut-lt,dt=B+at-ut,ft=Y(y?$(q,ht):q,B,y?U(H,dt):H);C[A]=ft,D[A]=ft-B}if(d){var pt,mt="x"===A?r:a,gt="x"===A?s:o,vt=C[k],yt="y"===k?"height":"width",_t=vt+w[mt],bt=vt-w[gt],wt=-1!==[r,a].indexOf(E),Et=null!=(pt=null==R?void 0:R[k])?pt:0,Tt=wt?_t:vt-S[yt]-O[yt]-Et+x.altAxis,It=wt?vt+S[yt]+O[yt]-Et-x.altAxis:bt,At=y&&wt?J(Tt,vt,It):Y(y?Tt:_t,vt,y?It:bt);C[k]=At,D[k]=At-vt}e.modifiersData[i]=D}}var Gt={name:"preventOverflow",enabled:!0,phase:"main",fn:Kt,requiresIfExists:["offset"]};function Xt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Qt(t){return t!==O(t)&&x(t)?Xt(t):_t(t)}function Yt(t){var e=t.getBoundingClientRect(),n=F(e.width)/t.offsetWidth||1,i=F(e.height)/t.offsetHeight||1;return 1!==n||1!==i}function Jt(t,e,n){void 0===n&&(n=!1);var i=x(e),r=x(e)&&Yt(e),s=z(e),o=j(t,r),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&(("body"!==S(e)||Tt(s))&&(a=Qt(e)),x(e)?(c=j(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=bt(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Zt(t){var e=new Map,n=new Set,i=[];function r(t){n.add(t.name);var s=[].concat(t.requires||[],t.requiresIfExists||[]);s.forEach((function(t){if(!n.has(t)){var i=e.get(t);i&&r(i)}})),i.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||r(t)})),i}function te(t){var e=Zt(t);return C.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function ee(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function ne(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var ie={placement:"bottom",modifiers:[],strategy:"absolute"};function re(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function se(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,i=void 0===n?[]:n,r=e.defaultOptions,s=void 0===r?ie:r;return function(t,e,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},ie,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,c={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:N(t)?At(t):t.contextElement?At(t.contextElement):[],popper:At(e)};var a=te(ne([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(t){return t.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var t=r.elements,e=t.reference,n=t.popper;if(re(e,n)){r.rects={reference:Jt(e,X(n),"fixed"===r.options.strategy),popper:V(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(t){return r.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(r=o({state:r,options:u,name:h,instance:c})||r)}else r.reset=!1,i=-1}}},update:ee((function(){return new Promise((function(t){c.forceUpdate(),t(r)}))})),destroy:function(){u(),a=!0}};if(!re(t,e))return c;function l(){r.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,i=void 0===n?{}:n,s=t.effect;if("function"===typeof s){var a=s({state:r,name:e,instance:c,options:i}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(t){return t()})),o=[]}return c.setOptions(n).then((function(t){!a&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var oe=se(),ae=[pt,zt,ht,P,qt,Mt,Gt,st,jt],ce=se({defaultModifiers:ae}),le=[pt,zt,ht,P],ue=se({defaultModifiers:le});
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const he=1e6,de=1e3,fe="transitionend",pe=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),me=t=>{do{t+=Math.floor(Math.random()*he)}while(document.getElementById(t));return t},ge=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},ve=t=>{const e=ge(t);return e&&document.querySelector(e)?e:null},ye=t=>{const e=ge(t);return e?document.querySelector(e):null},_e=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const i=Number.parseFloat(e),r=Number.parseFloat(n);return i||r?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*de):0},be=t=>{t.dispatchEvent(new Event(fe))},we=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),Ee=t=>we(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,Te=(t,e,n)=>{Object.keys(n).forEach((i=>{const r=n[i],s=e[i],o=s&&we(s)?"element":pe(s);if(!new RegExp(r).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)}))},Ie=t=>!(!we(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),Ae=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),ke=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?ke(t.parentNode):null},Ce=()=>{},Se=t=>{t.offsetHeight},Oe=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},Ne=[],xe=t=>{"loading"===document.readyState?(Ne.length||document.addEventListener("DOMContentLoaded",(()=>{Ne.forEach((t=>t()))})),Ne.push(t)):t()},Re=()=>"rtl"===document.documentElement.dir,De=t=>{xe((()=>{const e=Oe();if(e){const n=t.NAME,i=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=i,t.jQueryInterface)}}))},Le=t=>{"function"===typeof t&&t()},Pe=(t,e,n=!0)=>{if(!n)return void Le(t);const i=5,r=_e(e)+i;let s=!1;const o=({target:n})=>{n===e&&(s=!0,e.removeEventListener(fe,o),Le(t))};e.addEventListener(fe,o),setTimeout((()=>{s||be(e)}),r)},Me=(t,e,n,i)=>{let r=t.indexOf(e);if(-1===r)return t[!n&&i?t.length-1:0];const s=t.length;return r+=n?1:-1,i&&(r=(r+s)%s),t[Math.max(0,Math.min(r,s-1))]},Ue=/[^.]*(?=\..*)\.|.*/,$e=/\..*/,Fe=/::\d+$/,je={};let Ve=1;const Be={mouseenter:"mouseover",mouseleave:"mouseout"},qe=/^(mouseenter|mouseleave)/i,He=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ze(t,e){return e&&`${e}::${Ve++}`||t.uidEvent||Ve++}function We(t){const e=ze(t);return t.uidEvent=e,je[e]=je[e]||{},je[e]}function Ke(t,e){return function n(i){return i.delegateTarget=t,n.oneOff&&en.off(t,i.type,e),e.apply(t,[i])}}function Ge(t,e,n){return function i(r){const s=t.querySelectorAll(e);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return r.delegateTarget=o,i.oneOff&&en.off(t,r.type,e,n),n.apply(o,[r]);return null}}function Xe(t,e,n=null){const i=Object.keys(t);for(let r=0,s=i.length;r<s;r++){const s=t[i[r]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function Qe(t,e,n){const i="string"===typeof e,r=i?n:e;let s=tn(t);const o=He.has(s);return o||(s=t),[i,r,s]}function Ye(t,e,n,i,r){if("string"!==typeof e||!t)return;if(n||(n=i,i=null),qe.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};i?i=t(i):n=t(n)}const[s,o,a]=Qe(e,n,i),c=We(t),l=c[a]||(c[a]={}),u=Xe(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=ze(o,e.replace(Ue,"")),d=s?Ge(t,n,i):Ke(t,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=r,d.uidEvent=h,l[h]=d,t.addEventListener(a,d,s)}function Je(t,e,n,i,r){const s=Xe(e[n],i,r);s&&(t.removeEventListener(n,s,Boolean(r)),delete e[n][s.uidEvent])}function Ze(t,e,n,i){const r=e[n]||{};Object.keys(r).forEach((s=>{if(s.includes(i)){const i=r[s];Je(t,e,n,i.originalHandler,i.delegationSelector)}}))}function tn(t){return t=t.replace($e,""),Be[t]||t}const en={on(t,e,n,i){Ye(t,e,n,i,!1)},one(t,e,n,i){Ye(t,e,n,i,!0)},off(t,e,n,i){if("string"!==typeof e||!t)return;const[r,s,o]=Qe(e,n,i),a=o!==e,c=We(t),l=e.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void Je(t,c,o,s,r?n:null)}l&&Object.keys(c).forEach((n=>{Ze(t,c,n,e.slice(1))}));const u=c[o]||{};Object.keys(u).forEach((n=>{const i=n.replace(Fe,"");if(!a||e.includes(i)){const e=u[n];Je(t,c,o,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!==typeof e||!t)return null;const i=Oe(),r=tn(e),s=e!==r,o=He.has(r);let a,c=!0,l=!0,u=!1,h=null;return s&&i&&(a=i.Event(e,n),i(t).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(r,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((t=>{Object.defineProperty(h,t,{get(){return n[t]}})})),u&&h.preventDefault(),l&&t.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},nn=new Map,rn={set(t,e,n){nn.has(t)||nn.set(t,new Map);const i=nn.get(t);i.has(e)||0===i.size?i.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(t,e){return nn.has(t)&&nn.get(t).get(e)||null},remove(t,e){if(!nn.has(t))return;const n=nn.get(t);n.delete(e),0===n.size&&nn.delete(t)}},sn="5.1.3";class on{constructor(t){t=Ee(t),t&&(this._element=t,rn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){rn.remove(this._element,this.constructor.DATA_KEY),en.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){Pe(t,e,n)}static getInstance(t){return rn.get(Ee(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return sn}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const an=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;en.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ae(this))return;const r=ye(this)||this.closest(`.${i}`),s=t.getOrCreateInstance(r);s[e]()}))},cn="alert",ln="bs.alert",un=`.${ln}`,hn=`close${un}`,dn=`closed${un}`,fn="fade",pn="show";class mn extends on{static get NAME(){return cn}close(){const t=en.trigger(this._element,hn);if(t.defaultPrevented)return;this._element.classList.remove(pn);const e=this._element.classList.contains(fn);this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),en.trigger(this._element,dn),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=mn.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}an(mn,"close"),De(mn);const gn="button",vn="bs.button",yn=`.${vn}`,_n=".data-api",bn="active",wn='[data-bs-toggle="button"]',En=`click${yn}${_n}`;class Tn extends on{static get NAME(){return gn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(bn))}static jQueryInterface(t){return this.each((function(){const e=Tn.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function In(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function An(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}en.on(document,En,wn,(t=>{t.preventDefault();const e=t.target.closest(wn),n=Tn.getOrCreateInstance(e);n.toggle()})),De(Tn);const kn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${An(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${An(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=In(t.dataset[n])})),e},getDataAttribute(t,e){return In(t.getAttribute(`data-bs-${An(e)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}},Cn=3,Sn={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const n=[];let i=t.parentNode;while(i&&i.nodeType===Node.ELEMENT_NODE&&i.nodeType!==Cn)i.matches(e)&&n.push(i),i=i.parentNode;return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!Ae(t)&&Ie(t)))}},On="carousel",Nn="bs.carousel",xn=`.${Nn}`,Rn=".data-api",Dn="ArrowLeft",Ln="ArrowRight",Pn=500,Mn=40,Un={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},$n={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Fn="next",jn="prev",Vn="left",Bn="right",qn={[Dn]:Bn,[Ln]:Vn},Hn=`slide${xn}`,zn=`slid${xn}`,Wn=`keydown${xn}`,Kn=`mouseenter${xn}`,Gn=`mouseleave${xn}`,Xn=`touchstart${xn}`,Qn=`touchmove${xn}`,Yn=`touchend${xn}`,Jn=`pointerdown${xn}`,Zn=`pointerup${xn}`,ti=`dragstart${xn}`,ei=`load${xn}${Rn}`,ni=`click${xn}${Rn}`,ii="carousel",ri="active",si="slide",oi="carousel-item-end",ai="carousel-item-start",ci="carousel-item-next",li="carousel-item-prev",ui="pointer-event",hi=".active",di=".active.carousel-item",fi=".carousel-item",pi=".carousel-item img",mi=".carousel-item-next, .carousel-item-prev",gi=".carousel-indicators",vi="[data-bs-target]",yi="[data-bs-slide], [data-bs-slide-to]",_i='[data-bs-ride="carousel"]',bi="touch",wi="pen";class Ei extends on{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=Sn.findOne(gi,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Un}static get NAME(){return On}next(){this._slide(Fn)}nextWhenVisible(){!document.hidden&&Ie(this._element)&&this.next()}prev(){this._slide(jn)}pause(t){t||(this._isPaused=!0),Sn.findOne(mi,this._element)&&(be(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=Sn.findOne(di,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void en.one(this._element,zn,(()=>this.to(t)));if(e===t)return this.pause(),void this.cycle();const n=t>e?Fn:jn;this._slide(n,this._items[t])}_getConfig(t){return t={...Un,...kn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(On,t,$n),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=Mn)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Bn:Vn)}_addEventListeners(){this._config.keyboard&&en.on(this._element,Wn,(t=>this._keydown(t))),"hover"===this._config.pause&&(en.on(this._element,Kn,(t=>this.pause(t))),en.on(this._element,Gn,(t=>this.cycle(t)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&(t.pointerType===wi||t.pointerType===bi),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},i=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((t=>this.cycle(t)),Pn+this._config.interval))};Sn.find(pi,this._element).forEach((t=>{en.on(t,ti,(t=>t.preventDefault()))})),this._pointerEvent?(en.on(this._element,Jn,(t=>e(t))),en.on(this._element,Zn,(t=>i(t))),this._element.classList.add(ui)):(en.on(this._element,Xn,(t=>e(t))),en.on(this._element,Qn,(t=>n(t))),en.on(this._element,Yn,(t=>i(t))))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=qn[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?Sn.find(fi,t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const n=t===Fn;return Me(this._items,e,n,this._config.wrap)}_triggerSlideEvent(t,e){const n=this._getItemIndex(t),i=this._getItemIndex(Sn.findOne(di,this._element));return en.trigger(this._element,Hn,{relatedTarget:t,direction:e,from:i,to:n})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=Sn.findOne(hi,this._indicatorsElement);e.classList.remove(ri),e.removeAttribute("aria-current");const n=Sn.find(vi,this._indicatorsElement);for(let i=0;i<n.length;i++)if(Number.parseInt(n[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[i].classList.add(ri),n[i].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||Sn.findOne(di,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const n=this._directionToOrder(t),i=Sn.findOne(di,this._element),r=this._getItemIndex(i),s=e||this._getItemByOrder(n,i),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Fn,l=c?ai:oi,u=c?ci:li,h=this._orderToDirection(n);if(s&&s.classList.contains(ri))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!i||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{en.trigger(this._element,zn,{relatedTarget:s,direction:h,from:r,to:o})};if(this._element.classList.contains(si)){s.classList.add(u),Se(s),i.classList.add(l),s.classList.add(l);const t=()=>{s.classList.remove(l,u),s.classList.add(ri),i.classList.remove(ri,u,l),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,i,!0)}else i.classList.remove(ri),s.classList.add(ri),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[Bn,Vn].includes(t)?Re()?t===Vn?jn:Fn:t===Vn?Fn:jn:t}_orderToDirection(t){return[Fn,jn].includes(t)?Re()?t===jn?Vn:Bn:t===jn?Bn:Vn:t}static carouselInterface(t,e){const n=Ei.getOrCreateInstance(t,e);let{_config:i}=n;"object"===typeof e&&(i={...i,...e});const r="string"===typeof e?e:i.slide;if("number"===typeof e)n.to(e);else if("string"===typeof r){if("undefined"===typeof n[r])throw new TypeError(`No method named "${r}"`);n[r]()}else i.interval&&i.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){Ei.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=ye(this);if(!e||!e.classList.contains(ii))return;const n={...kn.getDataAttributes(e),...kn.getDataAttributes(this)},i=this.getAttribute("data-bs-slide-to");i&&(n.interval=!1),Ei.carouselInterface(e,n),i&&Ei.getInstance(e).to(i),t.preventDefault()}}en.on(document,ni,yi,Ei.dataApiClickHandler),en.on(window,ei,(()=>{const t=Sn.find(_i);for(let e=0,n=t.length;e<n;e++)Ei.carouselInterface(t[e],Ei.getInstance(t[e]))})),De(Ei);const Ti="collapse",Ii="bs.collapse",Ai=`.${Ii}`,ki=".data-api",Ci={toggle:!0,parent:null},Si={toggle:"boolean",parent:"(null|element)"},Oi=`show${Ai}`,Ni=`shown${Ai}`,xi=`hide${Ai}`,Ri=`hidden${Ai}`,Di=`click${Ai}${ki}`,Li="show",Pi="collapse",Mi="collapsing",Ui="collapsed",$i=`:scope .${Pi} .${Pi}`,Fi="collapse-horizontal",ji="width",Vi="height",Bi=".collapse.show, .collapse.collapsing",qi='[data-bs-toggle="collapse"]';class Hi extends on{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=Sn.find(qi);for(let i=0,r=n.length;i<r;i++){const t=n[i],e=ve(t),r=Sn.find(e).filter((t=>t===this._element));null!==e&&r.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ci}static get NAME(){return Ti}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=Sn.find($i,this._config.parent);e=Sn.find(Bi,this._config.parent).filter((e=>!t.includes(e)))}const n=Sn.findOne(this._selector);if(e.length){const i=e.find((t=>n!==t));if(t=i?Hi.getInstance(i):null,t&&t._isTransitioning)return}const i=en.trigger(this._element,Oi);if(i.defaultPrevented)return;e.forEach((e=>{n!==e&&Hi.getOrCreateInstance(e,{toggle:!1}).hide(),t||rn.set(e,Ii,null)}));const r=this._getDimension();this._element.classList.remove(Pi),this._element.classList.add(Mi),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Mi),this._element.classList.add(Pi,Li),this._element.style[r]="",en.trigger(this._element,Ni)},o=r[0].toUpperCase()+r.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=en.trigger(this._element,xi);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Se(this._element),this._element.classList.add(Mi),this._element.classList.remove(Pi,Li);const n=this._triggerArray.length;for(let r=0;r<n;r++){const t=this._triggerArray[r],e=ye(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Mi),this._element.classList.add(Pi),en.trigger(this._element,Ri)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Li)}_getConfig(t){return t={...Ci,...kn.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=Ee(t.parent),Te(Ti,t,Si),t}_getDimension(){return this._element.classList.contains(Fi)?ji:Vi}_initializeChildren(){if(!this._config.parent)return;const t=Sn.find($i,this._config.parent);Sn.find(qi,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=ye(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(Ui):t.classList.add(Ui),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=Hi.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}en.on(document,Di,qi,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=ve(this),n=Sn.find(e);n.forEach((t=>{Hi.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),De(Hi);const zi="dropdown",Wi="bs.dropdown",Ki=`.${Wi}`,Gi=".data-api",Xi="Escape",Qi="Space",Yi="Tab",Ji="ArrowUp",Zi="ArrowDown",tr=2,er=new RegExp(`${Ji}|${Zi}|${Xi}`),nr=`hide${Ki}`,ir=`hidden${Ki}`,rr=`show${Ki}`,sr=`shown${Ki}`,or=`click${Ki}${Gi}`,ar=`keydown${Ki}${Gi}`,cr=`keyup${Ki}${Gi}`,lr="show",ur="dropup",hr="dropend",dr="dropstart",fr="navbar",pr='[data-bs-toggle="dropdown"]',mr=".dropdown-menu",gr=".navbar-nav",vr=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",yr=Re()?"top-end":"top-start",_r=Re()?"top-start":"top-end",br=Re()?"bottom-end":"bottom-start",wr=Re()?"bottom-start":"bottom-end",Er=Re()?"left-start":"right-start",Tr=Re()?"right-start":"left-start",Ir={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ar={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class kr extends on{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Ir}static get DefaultType(){return Ar}static get NAME(){return zi}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ae(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element},e=en.trigger(this._element,rr,t);if(e.defaultPrevented)return;const n=kr.getParentFromElement(this._element);this._inNavbar?kn.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(gr)&&[].concat(...document.body.children).forEach((t=>en.on(t,"mouseover",Ce))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(lr),this._element.classList.add(lr),en.trigger(this._element,sr,t)}hide(){if(Ae(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const e=en.trigger(this._element,nr,t);e.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>en.off(t,"mouseover",Ce))),this._popper&&this._popper.destroy(),this._menu.classList.remove(lr),this._element.classList.remove(lr),this._element.setAttribute("aria-expanded","false"),kn.removeDataAttribute(this._menu,"popper"),en.trigger(this._element,ir,t))}_getConfig(t){if(t={...this.constructor.Default,...kn.getDataAttributes(this._element),...t},Te(zi,t,this.constructor.DefaultType),"object"===typeof t.reference&&!we(t.reference)&&"function"!==typeof t.reference.getBoundingClientRect)throw new TypeError(`${zi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(t){if("undefined"===typeof i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:we(this._config.reference)?e=Ee(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const n=this._getPopperConfig(),r=n.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));this._popper=ce(e,this._menu,n),r&&kn.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(lr)}_getMenuElement(){return Sn.next(this._element,mr)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains(hr))return Er;if(t.classList.contains(dr))return Tr;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains(ur)?e?_r:yr:e?wr:br}_detectNavbar(){return null!==this._element.closest(`.${fr}`)}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=Sn.find(vr,this._menu).filter(Ie);n.length&&Me(n,e,t===Zi,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=kr.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(t.button===tr||"keyup"===t.type&&t.key!==Yi))return;const e=Sn.find(pr);for(let n=0,i=e.length;n<i;n++){const i=kr.getInstance(e[n]);if(!i||!1===i._config.autoClose)continue;if(!i._isShown())continue;const r={relatedTarget:i._element};if(t){const e=t.composedPath(),n=e.includes(i._menu);if(e.includes(i._element)||"inside"===i._config.autoClose&&!n||"outside"===i._config.autoClose&&n)continue;if(i._menu.contains(t.target)&&("keyup"===t.type&&t.key===Yi||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(r.clickEvent=t)}i._completeHide(r)}}static getParentFromElement(t){return ye(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===Qi||t.key!==Xi&&(t.key!==Zi&&t.key!==Ji||t.target.closest(mr)):!er.test(t.key))return;const e=this.classList.contains(lr);if(!e&&t.key===Xi)return;if(t.preventDefault(),t.stopPropagation(),Ae(this))return;const n=this.matches(pr)?this:Sn.prev(this,pr)[0],i=kr.getOrCreateInstance(n);if(t.key!==Xi)return t.key===Ji||t.key===Zi?(e||i.show(),void i._selectMenuItem(t)):void(e&&t.key!==Qi||kr.clearMenus());i.hide()}}en.on(document,ar,pr,kr.dataApiKeydownHandler),en.on(document,ar,mr,kr.dataApiKeydownHandler),en.on(document,or,kr.clearMenus),en.on(document,cr,kr.clearMenus),en.on(document,or,pr,(function(t){t.preventDefault(),kr.getOrCreateInstance(this).toggle()})),De(kr);const Cr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Sr=".sticky-top";class Or{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(Cr,"paddingRight",(e=>e+t)),this._setElementAttributes(Sr,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),r=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const r=window.getComputedStyle(t)[e];t.style[e]=`${n(Number.parseFloat(r))}px`};this._applyManipulationCallback(t,r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Cr,"paddingRight"),this._resetElementAttributes(Sr,"marginRight")}_saveInitialAttribute(t,e){const n=t.style[e];n&&kn.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=t=>{const n=kn.getDataAttribute(t,e);"undefined"===typeof n?t.style.removeProperty(e):(kn.removeDataAttribute(t,e),t.style[e]=n)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){we(t)?e(t):Sn.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const Nr={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},xr={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Rr="backdrop",Dr="fade",Lr="show",Pr=`mousedown.bs.${Rr}`;class Mr{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&Se(this._getElement()),this._getElement().classList.add(Lr),this._emulateAnimation((()=>{Le(t)}))):Le(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(Lr),this._emulateAnimation((()=>{this.dispose(),Le(t)}))):Le(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Dr),this._element=t}return this._element}_getConfig(t){return t={...Nr,..."object"===typeof t?t:{}},t.rootElement=Ee(t.rootElement),Te(Rr,t,xr),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),en.on(this._getElement(),Pr,(()=>{Le(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(en.off(this._element,Pr),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){Pe(t,this._getElement(),this._config.isAnimated)}}const Ur={trapElement:null,autofocus:!0},$r={trapElement:"element",autofocus:"boolean"},Fr="focustrap",jr="bs.focustrap",Vr=`.${jr}`,Br=`focusin${Vr}`,qr=`keydown.tab${Vr}`,Hr="Tab",zr="forward",Wr="backward";class Kr{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),en.off(document,Vr),en.on(document,Br,(t=>this._handleFocusin(t))),en.on(document,qr,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,en.off(document,Vr))}_handleFocusin(t){const{target:e}=t,{trapElement:n}=this._config;if(e===document||e===n||n.contains(e))return;const i=Sn.focusableChildren(n);0===i.length?n.focus():this._lastTabNavDirection===Wr?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===Hr&&(this._lastTabNavDirection=t.shiftKey?Wr:zr)}_getConfig(t){return t={...Ur,..."object"===typeof t?t:{}},Te(Fr,t,$r),t}}const Gr="modal",Xr="bs.modal",Qr=`.${Xr}`,Yr=".data-api",Jr="Escape",Zr={backdrop:!0,keyboard:!0,focus:!0},ts={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},es=`hide${Qr}`,ns=`hidePrevented${Qr}`,is=`hidden${Qr}`,rs=`show${Qr}`,ss=`shown${Qr}`,os=`resize${Qr}`,as=`click.dismiss${Qr}`,cs=`keydown.dismiss${Qr}`,ls=`mouseup.dismiss${Qr}`,us=`mousedown.dismiss${Qr}`,hs=`click${Qr}${Yr}`,ds="modal-open",fs="fade",ps="show",ms="modal-static",gs=".modal.show",vs=".modal-dialog",ys=".modal-body",_s='[data-bs-toggle="modal"]';class bs extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=Sn.findOne(vs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Or}static get Default(){return Zr}static get NAME(){return Gr}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=en.trigger(this._element,rs,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ds),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),en.on(this._dialog,us,(()=>{en.one(this._element,ls,(t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=en.trigger(this._element,es);if(t.defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ps),en.off(this._element,as),en.off(this._dialog,us),this._queueCallback((()=>this._hideModal()),this._element,e)}dispose(){[window,this._dialog].forEach((t=>en.off(t,Qr))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Mr({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Kr({trapElement:this._element})}_getConfig(t){return t={...Zr,...kn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(Gr,t,ts),t}_showElement(t){const e=this._isAnimated(),n=Sn.findOne(ys,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),e&&Se(this._element),this._element.classList.add(ps);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,en.trigger(this._element,ss,{relatedTarget:t})};this._queueCallback(i,this._dialog,e)}_setEscapeEvent(){this._isShown?en.on(this._element,cs,(t=>{this._config.keyboard&&t.key===Jr?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Jr||this._triggerBackdropTransition()})):en.off(this._element,cs)}_setResizeEvent(){this._isShown?en.on(window,os,(()=>this._adjustDialog())):en.off(window,os)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ds),this._resetAdjustments(),this._scrollBar.reset(),en.trigger(this._element,is)}))}_showBackdrop(t){en.on(this._element,as,(t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains(fs)}_triggerBackdropTransition(){const t=en.trigger(this._element,ns);if(t.defaultPrevented)return;const{classList:e,scrollHeight:n,style:i}=this._element,r=n>document.documentElement.clientHeight;!r&&"hidden"===i.overflowY||e.contains(ms)||(r||(i.overflowY="hidden"),e.add(ms),this._queueCallback((()=>{e.remove(ms),r||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;(!n&&t&&!Re()||n&&!t&&Re())&&(this._element.style.paddingLeft=`${e}px`),(n&&!t&&!Re()||!n&&t&&Re())&&(this._element.style.paddingRight=`${e}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=bs.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}en.on(document,hs,_s,(function(t){const e=ye(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),en.one(e,rs,(t=>{t.defaultPrevented||en.one(e,is,(()=>{Ie(this)&&this.focus()}))}));const n=Sn.findOne(gs);n&&bs.getInstance(n).hide();const i=bs.getOrCreateInstance(e);i.toggle(this)})),an(bs),De(bs);const ws="offcanvas",Es="bs.offcanvas",Ts=`.${Es}`,Is=".data-api",As=`load${Ts}${Is}`,ks="Escape",Cs={backdrop:!0,keyboard:!0,scroll:!1},Ss={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Os="show",Ns="offcanvas-backdrop",xs=".offcanvas.show",Rs=`show${Ts}`,Ds=`shown${Ts}`,Ls=`hide${Ts}`,Ps=`hidden${Ts}`,Ms=`click${Ts}${Is}`,Us=`keydown.dismiss${Ts}`,$s='[data-bs-toggle="offcanvas"]';class Fs extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return ws}static get Default(){return Cs}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=en.trigger(this._element,Rs,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Or).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Os);const n=()=>{this._config.scroll||this._focustrap.activate(),en.trigger(this._element,Ds,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=en.trigger(this._element,Ls);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Os),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Or).reset(),en.trigger(this._element,Ps)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...Cs,...kn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(ws,t,Ss),t}_initializeBackDrop(){return new Mr({className:Ns,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Kr({trapElement:this._element})}_addEventListeners(){en.on(this._element,Us,(t=>{this._config.keyboard&&t.key===ks&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=Fs.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}en.on(document,Ms,$s,(function(t){const e=ye(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ae(this))return;en.one(e,Ps,(()=>{Ie(this)&&this.focus()}));const n=Sn.findOne(xs);n&&n!==e&&Fs.getInstance(n).hide();const i=Fs.getOrCreateInstance(e);i.toggle(this)})),en.on(window,As,(()=>Sn.find(xs).forEach((t=>Fs.getOrCreateInstance(t).show())))),an(Fs),De(Fs);const js=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Vs=/^aria-[\w-]*$/i,Bs=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,qs=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Hs=(t,e)=>{const n=t.nodeName.toLowerCase();if(e.includes(n))return!js.has(n)||Boolean(Bs.test(t.nodeValue)||qs.test(t.nodeValue));const i=e.filter((t=>t instanceof RegExp));for(let r=0,s=i.length;r<s;r++)if(i[r].test(n))return!0;return!1},zs={"*":["class","dir","id","lang","role",Vs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Ws(t,e,n){if(!t.length)return t;if(n&&"function"===typeof n)return n(t);const i=new window.DOMParser,r=i.parseFromString(t,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const t=s[o],n=t.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){t.remove();continue}const i=[].concat(...t.attributes),r=[].concat(e["*"]||[],e[n]||[]);i.forEach((e=>{Hs(e,r)||t.removeAttribute(e.nodeName)}))}return r.body.innerHTML}const Ks="tooltip",Gs="bs.tooltip",Xs=`.${Gs}`,Qs="bs-tooltip",Ys=new Set(["sanitize","allowList","sanitizeFn"]),Js={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Zs={AUTO:"auto",TOP:"top",RIGHT:Re()?"left":"right",BOTTOM:"bottom",LEFT:Re()?"right":"left"},to={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:zs,popperConfig:null},eo={HIDE:`hide${Xs}`,HIDDEN:`hidden${Xs}`,SHOW:`show${Xs}`,SHOWN:`shown${Xs}`,INSERTED:`inserted${Xs}`,CLICK:`click${Xs}`,FOCUSIN:`focusin${Xs}`,FOCUSOUT:`focusout${Xs}`,MOUSEENTER:`mouseenter${Xs}`,MOUSELEAVE:`mouseleave${Xs}`},no="fade",io="modal",ro="show",so="show",oo="out",ao=".tooltip-inner",co=`.${io}`,lo="hide.bs.modal",uo="hover",ho="focus",fo="click",po="manual";class mo extends on{constructor(t,e){if("undefined"===typeof i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return to}static get NAME(){return Ks}static get Event(){return eo}static get DefaultType(){return Js}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(ro))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),en.off(this._element.closest(co),lo,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=en.trigger(this._element,this.constructor.Event.SHOW),e=ke(this._element),n=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ao).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const i=this.getTipElement(),r=me(this.constructor.NAME);i.setAttribute("id",r),this._element.setAttribute("aria-describedby",r),this._config.animation&&i.classList.add(no);const s="function"===typeof this._config.placement?this._config.placement.call(this,i,this._element):this._config.placement,o=this._getAttachment(s);this._addAttachmentClass(o);const{container:a}=this._config;rn.set(i,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(i),en.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ce(this._element,i,this._getPopperConfig(o)),i.classList.add(ro);const c=this._resolvePossibleFunction(this._config.customClass);c&&i.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>{en.on(t,"mouseover",Ce)}));const l=()=>{const t=this._hoverState;this._hoverState=null,en.trigger(this._element,this.constructor.Event.SHOWN),t===oo&&this._leave(null,this)},u=this.tip.classList.contains(no);this._queueCallback(l,this.tip,u)}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||(this._hoverState!==so&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),en.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=en.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;t.classList.remove(ro),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>en.off(t,"mouseover",Ce))),this._activeTrigger[fo]=!1,this._activeTrigger[ho]=!1,this._activeTrigger[uo]=!1;const i=this.tip.classList.contains(no);this._queueCallback(e,this.tip,i),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(no,ro),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),ao)}_sanitizeAndSetContent(t,e,n){const i=Sn.findOne(n,t);e||!i?this.setElementContent(i,e):i.remove()}setElementContent(t,e){if(null!==t)return we(e)?(e=Ee(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Ws(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"===typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"===typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Zs[t.toUpperCase()]}_setListeners(){const t=this._config.trigger.split(" ");t.forEach((t=>{if("click"===t)en.on(this._element,this.constructor.Event.CLICK,this._config.selector,(t=>this.toggle(t)));else if(t!==po){const e=t===uo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=t===uo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;en.on(this._element,e,this._config.selector,(t=>this._enter(t))),en.on(this._element,n,this._config.selector,(t=>this._leave(t)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},en.on(this._element.closest(co),lo,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?ho:uo]=!0),e.getTipElement().classList.contains(ro)||e._hoverState===so?e._hoverState=so:(clearTimeout(e._timeout),e._hoverState=so,e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=>{e._hoverState===so&&e.show()}),e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?ho:uo]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=oo,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=>{e._hoverState===oo&&e.hide()}),e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=kn.getDataAttributes(this._element);return Object.keys(e).forEach((t=>{Ys.has(t)&&delete e[t]})),t={...this.constructor.Default,...e,..."object"===typeof t&&t?t:{}},t.container=!1===t.container?document.body:Ee(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),Te(Ks,t,this.constructor.DefaultType),t.sanitize&&(t.template=Ws(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=t.getAttribute("class").match(e);null!==n&&n.length>0&&n.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))}_getBasicClassPrefix(){return Qs}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=mo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}De(mo);const go="popover",vo="bs.popover",yo=`.${vo}`,_o="bs-popover",bo={...mo.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},wo={...mo.DefaultType,content:"(string|element|function)"},Eo={HIDE:`hide${yo}`,HIDDEN:`hidden${yo}`,SHOW:`show${yo}`,SHOWN:`shown${yo}`,INSERTED:`inserted${yo}`,CLICK:`click${yo}`,FOCUSIN:`focusin${yo}`,FOCUSOUT:`focusout${yo}`,MOUSEENTER:`mouseenter${yo}`,MOUSELEAVE:`mouseleave${yo}`},To=".popover-header",Io=".popover-body";class Ao extends mo{static get Default(){return bo}static get NAME(){return go}static get Event(){return Eo}static get DefaultType(){return wo}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),To),this._sanitizeAndSetContent(t,this._getContent(),Io)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return _o}static jQueryInterface(t){return this.each((function(){const e=Ao.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}De(Ao);const ko="scrollspy",Co="bs.scrollspy",So=`.${Co}`,Oo=".data-api",No={offset:10,method:"auto",target:""},xo={offset:"number",method:"string",target:"(string|element)"},Ro=`activate${So}`,Do=`scroll${So}`,Lo=`load${So}${Oo}`,Po="dropdown-item",Mo="active",Uo='[data-bs-spy="scroll"]',$o=".nav, .list-group",Fo=".nav-link",jo=".nav-item",Vo=".list-group-item",Bo=`${Fo}, ${Vo}, .${Po}`,qo=".dropdown",Ho=".dropdown-toggle",zo="offset",Wo="position";class Ko extends on{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,en.on(this._scrollElement,Do,(()=>this._process())),this.refresh(),this._process()}static get Default(){return No}static get NAME(){return ko}refresh(){const t=this._scrollElement===this._scrollElement.window?zo:Wo,e="auto"===this._config.method?t:this._config.method,n=e===Wo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const i=Sn.find(Bo,this._config.target);i.map((t=>{const i=ve(t),r=i?Sn.findOne(i):null;if(r){const t=r.getBoundingClientRect();if(t.width||t.height)return[kn[e](r).top+n,i]}return null})).filter((t=>t)).sort(((t,e)=>t[0]-e[0])).forEach((t=>{this._offsets.push(t[0]),this._targets.push(t[1])}))}dispose(){en.off(this._scrollElement,So),super.dispose()}_getConfig(t){return t={...No,...kn.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},t.target=Ee(t.target)||document.documentElement,Te(ko,t,xo),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;){const n=this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&("undefined"===typeof this._offsets[e+1]||t<this._offsets[e+1]);n&&this._activate(this._targets[e])}}}_activate(t){this._activeTarget=t,this._clear();const e=Bo.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),n=Sn.findOne(e.join(","),this._config.target);n.classList.add(Mo),n.classList.contains(Po)?Sn.findOne(Ho,n.closest(qo)).classList.add(Mo):Sn.parents(n,$o).forEach((t=>{Sn.prev(t,`${Fo}, ${Vo}`).forEach((t=>t.classList.add(Mo))),Sn.prev(t,jo).forEach((t=>{Sn.children(t,Fo).forEach((t=>t.classList.add(Mo)))}))})),en.trigger(this._scrollElement,Ro,{relatedTarget:t})}_clear(){Sn.find(Bo,this._config.target).filter((t=>t.classList.contains(Mo))).forEach((t=>t.classList.remove(Mo)))}static jQueryInterface(t){return this.each((function(){const e=Ko.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(window,Lo,(()=>{Sn.find(Uo).forEach((t=>new Ko(t)))})),De(Ko);const Go="tab",Xo="bs.tab",Qo=`.${Xo}`,Yo=".data-api",Jo=`hide${Qo}`,Zo=`hidden${Qo}`,ta=`show${Qo}`,ea=`shown${Qo}`,na=`click${Qo}${Yo}`,ia="dropdown-menu",ra="active",sa="fade",oa="show",aa=".dropdown",ca=".nav, .list-group",la=".active",ua=":scope > li > .active",ha='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',da=".dropdown-toggle",fa=":scope > .dropdown-menu .active";class pa extends on{static get NAME(){return Go}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ra))return;let t;const e=ye(this._element),n=this._element.closest(ca);if(n){const e="UL"===n.nodeName||"OL"===n.nodeName?ua:la;t=Sn.find(e,n),t=t[t.length-1]}const i=t?en.trigger(t,Jo,{relatedTarget:this._element}):null,r=en.trigger(this._element,ta,{relatedTarget:t});if(r.defaultPrevented||null!==i&&i.defaultPrevented)return;this._activate(this._element,n);const s=()=>{en.trigger(t,Zo,{relatedTarget:this._element}),en.trigger(this._element,ea,{relatedTarget:t})};e?this._activate(e,e.parentNode,s):s()}_activate(t,e,n){const i=!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?Sn.children(e,la):Sn.find(ua,e),r=i[0],s=n&&r&&r.classList.contains(sa),o=()=>this._transitionComplete(t,r,n);r&&s?(r.classList.remove(oa),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,n){if(e){e.classList.remove(ra);const t=Sn.findOne(fa,e.parentNode);t&&t.classList.remove(ra),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(ra),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Se(t),t.classList.contains(sa)&&t.classList.add(oa);let i=t.parentNode;if(i&&"LI"===i.nodeName&&(i=i.parentNode),i&&i.classList.contains(ia)){const e=t.closest(aa);e&&Sn.find(da,e).forEach((t=>t.classList.add(ra))),t.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=pa.getOrCreateInstance(this);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(document,na,ha,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ae(this))return;const e=pa.getOrCreateInstance(this);e.show()})),De(pa);const ma="toast",ga="bs.toast",va=`.${ga}`,ya=`mouseover${va}`,_a=`mouseout${va}`,ba=`focusin${va}`,wa=`focusout${va}`,Ea=`hide${va}`,Ta=`hidden${va}`,Ia=`show${va}`,Aa=`shown${va}`,ka="fade",Ca="hide",Sa="show",Oa="showing",Na={animation:"boolean",autohide:"boolean",delay:"number"},xa={animation:!0,autohide:!0,delay:5e3};class Ra extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Na}static get Default(){return xa}static get NAME(){return ma}show(){const t=en.trigger(this._element,Ia);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(ka);const e=()=>{this._element.classList.remove(Oa),en.trigger(this._element,Aa),this._maybeScheduleHide()};this._element.classList.remove(Ca),Se(this._element),this._element.classList.add(Sa),this._element.classList.add(Oa),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Sa))return;const t=en.trigger(this._element,Ea);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(Ca),this._element.classList.remove(Oa),this._element.classList.remove(Sa),en.trigger(this._element,Ta)};this._element.classList.add(Oa),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Sa)&&this._element.classList.remove(Sa),super.dispose()}_getConfig(t){return t={...xa,...kn.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},Te(ma,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){en.on(this._element,ya,(t=>this._onInteraction(t,!0))),en.on(this._element,_a,(t=>this._onInteraction(t,!1))),en.on(this._element,ba,(t=>this._onInteraction(t,!0))),en.on(this._element,wa,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Ra.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}an(Ra),De(Ra)},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.ZF}});var i=n(7077),r="firebase",s="9.9.1";
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
(0,i.KN)(r,s,"app")},4028:function(t,e,n){"use strict";n.d(e,{Xb:function(){return ce},v0:function(){return di},Aj:function(){return de},e5:function(){return le},w7:function(){return fe},ck:function(){return he}});n(1703),n(6699);var i=n(223),r=n(7077);function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${r.Jn}): ${t}`,...e)}
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
 */function f(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},l()),{[e]:n}),s=new i.LL("auth","Firebase",r);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function _(t,e){t||y(e)}
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
 */function E(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
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
 */class O{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,r,s={}){return M(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),x.fetch()($(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},R),e);try{const e=new F(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw j(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);f(t,a)}}catch(s){if(s instanceof i.ZR)throw s;f(t,"network-request-failed")}}async function U(t,e,n,i,r={}){const s=await P(t,e,n,i,r);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?N(t.config,r):`${t.config.apiScheme}://${r}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=p(t,e,i);return r.customData._tokenResponse=n,r}
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
 */async function H(t,e=!1){const n=(0,i.m9)(t),r=await n.getIdToken(e),s=W(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:q(z(s.auth_time)),issuedAtTime:q(z(s.iat)),expirationTime:q(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(t){return 1e3*Number(t)}function W(t){var e;const[n,r,s]=t.split(".");if(void 0===n||void 0===r||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(r);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function K(t){const e=W(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
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
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.ZR&&X(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */class Y{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function J(t){var e;const n=t.auth,i=await t.getIdToken(),r=await G(t,B(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Z(t){const e=(0,i.m9)(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function nt(t,e){const n=await M(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=$(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await nt(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new it;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return y("not implemented")}}
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
 */function rt(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Y(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,V(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=e;v(_&&T,t,"internal-error");const I=it.fromJSON(this.name,T);v("string"===typeof _,t,"internal-error"),rt(u,t.name),rt(h,t.name),v("boolean"===typeof b,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),rt(d,t.name),rt(f,t.name),rt(p,t.name),rt(m,t.name),rt(g,t.name),rt(y,t.name);const A=new st({uid:_,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(A.providerData=E.map((t=>Object.assign({},t)))),m&&(A._redirectEventId=m),A}static async _fromIdTokenResponse(t,e,n=!1){const i=new it;i.updateFromServerResponse(e);const r=new st({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await J(r),r}}
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
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ct(this.userKey,i.apiKey,r),this.fullPersistenceKey=ct("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(w(at),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||w(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(s);if(e){const n=st._fromJSON(t,e);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(c){}}))),new lt(r,t,n)):new lt(r,t,n)}}
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
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,i.z$)()){return/firefox\//i.test(t)}function dt(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,i.z$)()){return/crios\//i.test(t)}function pt(t=(0,i.z$)()){return/iemobile/i.test(t)}function mt(t=(0,i.z$)()){return/android/i.test(t)}function gt(t=(0,i.z$)()){return/blackberry/i.test(t)}function vt(t=(0,i.z$)()){return/webos/i.test(t)}function yt(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _t(t=(0,i.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function bt(){return(0,i.w1)()&&10===document.documentMode}function wt(t=(0,i.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
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
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=ut((0,i.z$)());break;case"Worker":n=`${ut((0,i.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
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
 */class It{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(i){n.reverse();for(const t of n)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=i)||void 0===e?void 0:e.message})}}}
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
 */class At{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ct(this),this.idTokenSubscription=new Ct(this),this.beforeStateQueue=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await J(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function kt(t){return(0,i.m9)(t)}class Ct{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
async function Nt(t,e){return U(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}
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
async function xt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Rt(t,e){return U(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
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
 */class Dt extends St{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Dt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Dt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Nt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ot(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function Lt(t,e){return U(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
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
 */const Pt="http://localhost";class Mt extends St{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Mt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Mt(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Lt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Lt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Lt(t,e)}buildRequest(){const t={requestUri:Pt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
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
 */async function Ut(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function $t(t,e){return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function Ft(t,e){const n=await U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const jt={["USER_NOT_FOUND"]:"user-not-found"};async function Vt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return U(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),jt)}
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
 */class Bt extends St{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Bt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Bt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return $t(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Vt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Bt({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
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
 */function qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ht(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(t))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||e||t}class zt{constructor(t){var e,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qt(null!==(r=c["mode"])&&void 0!==r?r:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Ht(t);try{return new zt(e)}catch(n){return null}}}
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
class Wt{constructor(){this.providerId=Wt.PROVIDER_ID}static credential(t,e){return Dt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=zt.parseLink(e);return v(n,"argument-error"),Dt._fromEmailAndCode(t,n.code,n.tenantId)}}Wt.PROVIDER_ID="password",Wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Kt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
 */class Gt extends Kt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
class Xt extends Gt{constructor(){super("facebook.com")}static credential(t){return Mt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xt.PROVIDER_ID="facebook.com";
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
class Qt extends Gt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Mt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Qt.credential(e,n)}catch(i){return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com",Qt.PROVIDER_ID="google.com";
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
class Yt extends Gt{constructor(){super("github.com")}static credential(t){return Mt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
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
class Jt extends Gt{constructor(){super("twitter.com")}static credential(t,e){return Mt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Jt.credential(e,n)}catch(i){return null}}}
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
async function Zt(t,e){return U(t,"POST","/v1/accounts:signUp",L(t,e))}
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
 */Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";class te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await st._fromIdTokenResponse(t,n,i),s=ee(n),o=new te({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=ee(n);return new te({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function ee(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class ne extends i.ZR{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ne.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ne(t,e,n,i)}}function ie(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ne._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function re(t,e,n=!1){const i=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return te._forOperation(t,"link",i)}
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
async function se(t,e,n=!1){var i;const{auth:r}=t,s="reauthenticate";try{const i=await G(t,ie(r,s,e,t),n);v(i.idToken,r,"internal-error");const o=W(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),te._forOperation(t,s,i)}catch(o){throw"auth/user-not-found"===(null===(i=o)||void 0===i?void 0:i.code)&&f(r,"user-mismatch"),o}}
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
 */async function oe(t,e,n=!1){const i="signIn",r=await ie(t,i,e),s=await te._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ae(t,e){return oe(kt(t),e)}async function ce(t,e,n){const i=kt(t),r=await Zt(i,{returnSecureToken:!0,email:e,password:n}),s=await te._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function le(t,e,n){return ae((0,i.m9)(t),Wt.credential(e,n))}
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
async function ue(t,e){return P(t,"POST","/v1/accounts:update",e)}
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
 */async function he(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=(0,i.m9)(t),s=await r.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await G(r,ue(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:t})=>"password"===t));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function de(t,e,n,r){return(0,i.m9)(t).onAuthStateChanged(e,n,r)}function fe(t){return(0,i.m9)(t).signOut()}
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
function pe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function me(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const ge="__sak";
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
 */class ve{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ge,"1"),this.storage.removeItem(ge),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function ye(){const t=(0,i.z$)();return dt(t)||yt(t)}const _e=1e3,be=10;class we extends ve{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ye()&&Et(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);bt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,be):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),_e)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}we.type="LOCAL";const Ee=we;
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
 */class Te extends ve{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Te.type="SESSION";const Ie=Te;
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
 */function Ae(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
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
 */class ke{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new ke(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await Ae(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ce(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
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
 */ke.receivers=[];class Se{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Ce("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Oe(){return window}function Ne(t){Oe().location.href=t}
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
 */function xe(){return"undefined"!==typeof Oe()["WorkerGlobalScope"]&&"function"===typeof Oe()["importScripts"]}async function Re(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function De(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Le(){return xe()?self:null}
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
 */const Pe="firebaseLocalStorageDb",Me=1,Ue="firebaseLocalStorage",$e="fbase_key";class Fe{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function je(t,e){return t.transaction([Ue],e?"readwrite":"readonly").objectStore(Ue)}function Ve(){const t=indexedDB.deleteDatabase(Pe);return new Fe(t).toPromise()}function Be(){const t=indexedDB.open(Pe,Me);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ue,{keyPath:$e})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ue)?e(n):(n.close(),await Ve(),e(await Be()))}))}))}async function qe(t,e,n){const i=je(t,!0).put({[$e]:e,value:n});return new Fe(i).toPromise()}async function He(t,e){const n=je(t,!1).get(e),i=await new Fe(n).toPromise();return void 0===i?null:i.value}function ze(t,e){const n=je(t,!0).delete(e);return new Fe(n).toPromise()}const We=800,Ke=3;class Ge{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Be()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ke)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ke._getInstance(Le()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Re(),!this.activeServiceWorker)return;this.sender=new Se(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&De()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Be();return await qe(t,ge,"1"),await ze(t,ge),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>qe(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>He(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ze(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=je(t,!1).getAll();return new Fe(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),We)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ge.type="LOCAL";const Xe=Ge;
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
 */function Qe(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function Ye(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
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
function Je(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ze(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Je().appendChild(i)}))}function tn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
tn("rcb"),new O(3e4,6e4);
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
const en="recaptcha";async function nn(t,e,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,t,"argument-error"),v(n.type===en,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await pe(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Qe(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Ut(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
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
class rn{constructor(t){this.providerId=rn.PROVIDER_ID,this.auth=kt(t)}verifyPhoneNumber(t,e){return nn(this.auth,t,(0,i.m9)(e))}static credential(t,e){return Bt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return rn.credentialFromTaggedObject(e)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Bt._fromTokenResponse(e,n):null}}
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
function sn(t,e){return e?w(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */rn.PROVIDER_ID="phone",rn.PHONE_SIGN_IN_METHOD="phone";class on extends St{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Lt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Lt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Lt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function an(t){return oe(t.auth,new on(t),t.bypassAuthState)}function cn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),se(n,new on(t),t.bypassAuthState)}async function ln(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),re(n,new on(t),t.bypassAuthState)}
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
 */class un{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return an;case"linkViaPopup":case"linkViaRedirect":return ln;case"reauthViaPopup":case"reauthViaRedirect":return cn;default:f(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const hn=new O(2e3,1e4);class dn extends un{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=Ce();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,hn.get())};t()}}dn.currentPopupAction=null;
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
const fn="pendingRedirect",pn=new Map;class mn extends un{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=pn.get(this.auth._key());if(!t){try{const e=await gn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}pn.set(this.auth._key(),t)}return this.bypassAuthState||pn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function gn(t,e){const n=_n(e),i=yn(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function vn(t,e){pn.set(t._key(),e)}function yn(t){return w(t._redirectPersistence)}function _n(t){return ct(fn,t.config.apiKey,t.name)}
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
 */async function bn(t,e,n=!1){const i=kt(t),r=sn(i,e),s=new mn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
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
const wn=6e5;class En{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!An(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!In(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tn(t))}saveEventToCache(t){this.cachedEventUids.add(Tn(t)),this.lastProcessedEventTime=Date.now()}}function Tn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function In({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function An(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return In(t);default:return!1}}
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
 */async function kn(t,e={}){return P(t,"GET","/v1/projects",e)}
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
 */const Cn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sn=/^https?/;async function On(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kn(t);for(const i of e)try{if(Nn(i))return}catch(n){}f(t,"unauthorized-domain")}function Nn(t){const e=I(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Sn.test(n))return!1;if(Cn.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
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
 */const xn=new O(3e4,6e4);function Rn(){const t=Oe().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Dn(t){return new Promise(((e,n)=>{var i,r,s;function o(){Rn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rn(),n(p(t,"network-request-failed"))},timeout:xn.get()})}if(null===(r=null===(i=Oe().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Oe().gapi)||void 0===s?void 0:s.load)){const e=tn("iframefcb");return Oe()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ze(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Ln=null,t}))}let Ln=null;function Pn(t){return Ln=Ln||Dn(t),Ln}
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
 */const Mn=new O(5e3,15e3),Un="__/auth/iframe",$n="emulator/auth/iframe",Fn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?N(e,$n):`https://${t.config.authDomain}/${Un}`,s={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=jn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function Bn(t){const e=await Pn(t),n=Oe().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Vn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fn,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=p(t,"network-request-failed"),s=Oe().setTimeout((()=>{i(r)}),Mn.get());function o(){Oe().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
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
 */const qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hn=500,zn=600,Wn="_blank",Kn="http://localhost";class Gn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Xn(t,e,n,r=Hn,s=zn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},qn),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=ft(u)?Wn:n),ht(u)&&(e=e||Kn,l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(_t(u)&&"_self"!==c)return Qn(e||"",c),new Gn(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Gn(d)}function Qn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */const Yn="__/auth/handler",Jn="emulator/auth/handler";function Zn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.Jn,eventId:o};if(e instanceof Kt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Gt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${ti(t)}?${(0,i.xO)(l).slice(1)}`}function ti({config:t}){return t.emulator?N(t,Jn):`https://${t.authDomain}/${Yn}`}
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
 */const ei="webStorageSupport";class ni{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ie,this._completeRedirectFn=bn,this._overrideRedirectResult=vn}async _openPopup(t,e,n,i){var r;_(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Zn(t,e,n,I(),i);return Xn(t,s,Ce())}async _openRedirect(t,e,n,i){return await this._originValidation(t),Ne(Zn(t,e,n,I(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Bn(t),n=new En(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(ei,{type:ei},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[ei];void 0!==r&&e(!!r),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=On(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const ii=ni;class ri{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class si extends ri{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new si(t)}_finalizeEnroll(t,e,n){return me(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ye(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class oi{constructor(){}static assertion(t){return si._fromCredential(t)}}oi.FACTOR_ID="phone";var ai="@firebase/auth",ci="0.20.5";
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
class li{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function ui(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hi(t){(0,r.Xd)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new At(e,i,r);return T(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new a.wA("auth-internal",(t=>{const e=kt(t.getProvider("auth").getImmediate());return(t=>new li(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(ai,ci,ui(t)),(0,r.KN)(ai,ci,"esm2017")}
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
 */function di(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:ii,persistence:[Xe,Ee,Ie]})}hi("Browser")},6035:function(t,e,n){"use strict";n.d(e,{ET:function(){return Sh},hJ:function(){return ku},JU:function(){return Cu},QT:function(){return Ih},PL:function(){return kh},ad:function(){return Nu},Xo:function(){return yh},IO:function(){return ph},r7:function(){return Ch},ar:function(){return gh}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(6699);var i,r=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function _(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:_,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function T(){this.s=this.s,this.o=this.o}var I=0,A={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=I)){var t=m(this);delete A[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function S(t){t:{var e=Wn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var R,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var M=h.navigator;if(M){var U=M.userAgent;if(U){R=U;break t}}R=""}function $(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function F(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function B(t){return B[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}B[" "]=d;var H,z=L(R,"Opera"),W=L(R,"Trident")||L(R,"MSIE"),K=L(R,"Edge"),G=K||W,X=L(R,"Gecko")&&!(L(R.toLowerCase(),"webkit")&&!L(R,"Edge"))&&!(L(R,"Trident")||L(R,"MSIE"))&&!L(R,"Edge"),Q=L(R.toLowerCase(),"webkit")&&!L(R,"Edge");function Y(){var t=h.document;return t?t.documentMode:void 0}t:{var J="",Z=function(){var t=R;return X?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Q?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(J=Z?Z[1]:""),W){var tt=Y();if(null!=tt&&tt>parseFloat(J)){H=String(tt);break t}}H=J}var et,nt={};function it(){return q((function(){let t=0;const e=D(String(H)).split("."),n=D("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=P(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==r[2].length,0==s[2].length)||P(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&W){var rt=Y();et=rt||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{B(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},E(ct,at);var lt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++ht,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=k(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}pt.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function _t(t,e,n,i,r){if(i&&i.once)return Et(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,i,r);return null}return n=Ot(n),t&&t[ut]?t.N(e,n,p(i)?!!i.capture:!!i,r):bt(t,e,n,!1,i,r)}function bt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,a=Ct(t);if(a||(t[vt]=a=new pt(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=wt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ot||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(At(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function wt(){function t(n){return e.call(t.src,t.listener,n)}var e=kt;return t}function Et(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Et(t,e[s],n,i,r);return null}return n=Ot(n),t&&t[ut]?t.O(e,n,p(i)?!!i.capture:!!i,r):bt(t,e,n,!0,i,r)}function Tt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,i,r);else i=p(i)?!!i.capture:!!i,n=Ot(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gt(s,n,i,r),-1<n&&(ft(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,i,r)),(n=-1<t?e[t]:null)&&It(n))}function It(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])mt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(At(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ct(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):ft(t)}}}function At(t){return t in yt?yt[t]:yt[t]="on"+t}function kt(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&It(t),t=n.call(i,e)}return t}function Ct(t){return t=t[vt],t instanceof pt?t:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[St]||(t[St]=function(e){return t.handleEvent(e)}),t[St])}function Nt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function xt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(i,t),V(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Rt(o,i,!0,e)&&r}if(o=e.g=t,r=Rt(o,i,!0,e)&&r,r=Rt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Rt(o,i,!1,e)&&r}function Rt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mt(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}E(Nt,T),Nt.prototype[ut]=!0,Nt.prototype.removeEventListener=function(t,e,n,i){Tt(this,t,e,n,i)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ft(n[i]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Nt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Dt=h.JSON.stringify;function Lt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=Ut.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Ut=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new $t),(t=>t.reset()));class $t{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ft(t){h.setTimeout((()=>{throw t}),0)}function jt(t,e){Mt||Vt(),Bt||(Mt(),Bt=!0),qt.add(t,e)}function Vt(){var t=h.Promise.resolve(void 0);Mt=function(){t.then(Ht)}}var Bt=!1,qt=new Pt;function Ht(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Ft(n)}var e=Ut;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bt=!1}function zt(t,e){Nt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Wt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Gt(t){t.g=Kt((()=>{t.g=null,t.i&&(t.i=!1,Gt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(zt,Nt),i=zt.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&(Wt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){zt.Z.M.call(this),Wt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qt(t){T.call(this),this.h=t,this.g={}}E(Qt,T);var Yt=[];function Jt(t,e,n,i){Array.isArray(n)||(n&&(Yt[0]=n.toString()),n=Yt);for(var r=0;r<n.length;r++){var s=_t(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){$(t.g,(function(t,e){this.g.hasOwnProperty(e)&&It(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function ie(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(i?" "+i:"")}))}function re(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Dt(n)}catch(a){return e}}Qt.prototype.M=function(){Qt.Z.M.call(this),Zt(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Nt}function le(t){at.call(this,oe.Ma,t)}function ue(t){const e=ce();xt(e,new le(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();xt(e,new he(e,t))}function fe(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",E(le,at),oe.STAT_EVENT="statevent",E(he,at),oe.Na="timingevent",E(fe,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function _e(){}ve.prototype.h=null;var be,we={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ee(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ie(){}function Ae(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Qt(this),this.P=Ce,t=G?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ke}function ke(){this.i=null,this.g="",this.h=!1}E(Ee,at),E(Te,at),E(Ie,ve),Ie.prototype.g=function(){return new XMLHttpRequest},Ie.prototype.i=function(){return{}},be=new Ie;var Ce=45e3,Se={},Oe={};function Ne(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),Pe(t),t.A=Xe(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),vn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new ke,t.g=Ti(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(b(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?F(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Re(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function De(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Le(t,n),i==Oe){4==e&&(t.o=4,de(14),r=!1),ie(t.j,t.m,null,"[Incomplete Response]");break}if(i==Se){t.o=4,de(15),ie(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}ie(t.j,t.m,i,null),je(t,i)}Re(t)&&i!=Oe&&i!=Se&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mi(e),e.L=!0,de(11))):(ie(t.j,t.m,n,"[Invalid Chunked Response]"),Fe(t),$e(t))}function Le(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Oe:(n=Number(e.substring(n,i)),isNaN(n)?Se:(i+=1,i+n>e.length?Oe:(e=e.substr(i,n),t.C=i+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Ue(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function $e(t){0==t.l.G||t.I||yi(t.l,t)}function Fe(t){Ue(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Wt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||An(n.i,t)))if(n.I=t.N,!t.J&&An(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vi(n),si(n)}pi(n),de(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=In(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else bi(n,11)}else if((t.J||n.g==t)&&vi(n),!x(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kn(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,tn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Ei(i,i.H?i.la:null,i.W),o.J){Cn(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Ue(a),Pe(a)),i.g=o}else fi(i);0<n.l.length&&ci(n)}else"stop"!=l[0]&&"close"!=l[0]||bi(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?bi(n,7):ri(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ue(4)}catch(l){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)C(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Ve(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof qe)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ze(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],ze(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=Ae.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const u=Jn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||G||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),Ue(this);var n=this.g.ba();this.N=n;e:if(Re(this)){var i=Zn(this.g);t="";var r=i.length,s=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Fe(this),$e(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,de(12),Fe(this),$e(this);break t}ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(De(this,u,o),G&&this.i&&3==u&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(ie(this.j,this.m,o,null),je(this,o)),4==u&&Fe(this),this.i&&!this.I&&(4==u?yi(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Fe(this),$e(this)}}}catch(u){}},i.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Ue(this),De(this,t,e),this.i&&4!=t&&Pe(this))}},i.cancel=function(){this.I=!0,Fe(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(re(this.j,this.A),2!=this.K&&(ue(3),de(17)),Fe(this),this.o=2,$e(this)):Me(this,this.Y-t)},i=qe.prototype,i.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return He(this),this.g.concat()},i.get=function(t,e){return ze(this.h,t)?this.h[t]:e},i.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,Qe(this,t.j),this.s=t.s,Ye(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(We))?(this.g=!!e,Qe(this,n[1]||"",!0),this.s=sn(n[2]||""),Ye(this,n[3]||"",!0),Je(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function Xe(t){return new Ge(t)}function Qe(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ye(t,e,n){t.i=n?sn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof fn?(t.h=e,_n(t.h,t.g)):(n||(e=on(e,hn)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ge?Xe(t):new Ge(t,void 0)}function rn(t,e,n,i){var r=new Ge(null,void 0);return t&&Qe(r,t),e&&Ye(r,e),n&&Je(r,n),i&&(r.l=i),r}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var cn=/[#\/\?@]/g,ln=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){pn(t),e=yn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function gn(t,e){return pn(t),e=yn(t,e),ze(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),N(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _n(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}i=fn.prototype,i.add=function(t,e){pn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){pn(this),this.g.forEach((function(n,i){C(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){pn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=O(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},i.set=function(t,e){return pn(this),this.i=null,t=yn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function wn(t){this.l=t||En,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function In(t){return t.h?1:t.g?t.g.size:0}function An(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function kn(t,e){t.g?t.g.add(e):t.h=e}function Cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Sn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function On(){}function Nn(){this.g=new On}function xn(t,e,n){const i=n||"";try{Be(t,(function(t,n){let r=t;p(t)&&(r=Dt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Rn(t,e){const n=new te;if(h.Image){const i=new Image;i.onload=w(Dn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=w(Dn,n,i,"TestLoadImage: error",!1,e),i.onabort=w(Dn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=w(Dn,n,i,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Dn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wn.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},On.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Ln,ve),Ln.prototype.g=function(){return new Pn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),E(Pn,Nt);var Mn=0;function Un(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function $n(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fn(t)}function Fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=Pn.prototype,i.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,$n(this)),this.readyState=Mn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Un(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$n(this):Fn(this),3==this.readyState&&Un(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,$n(this))},i.Ta=function(t){this.g&&(this.response=t,$n(this))},i.ha=function(){this.g&&$n(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=h.JSON.parse;function Vn(t){Nt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}E(Vn,Nt);var Bn="",qn=/^https?$/i,Hn=["POST","PUT"];function zn(t){return W&&it()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),Qn(t)}function Gn(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Kt(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===c){var r=String(t.H).match(We)[1]||null;if(!r&&h.self&&h.self.location){var s=h.self.location.protocol;r=s.substr(0,s.length-1)}i=!qn.test(r?r.toLowerCase():"")}n=i}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Gn(t)}}finally{Qn(t)}}}function Qn(t,e){if(t.g){Yn(t);const i=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||xt(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Yn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ti(t){let e="";return $(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ei(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ti(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ii(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ni("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ni("baseRetryDelayMs",5e3,t),this.$a=ni("retryDelaySeedMs",1e4,t),this.Ya=ni("forwardChannelMaxRetries",2,t),this.ra=ni("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wn(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ri(t){if(oi(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hi(t,n),e=new Ae(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ti(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}wi(t)}function si(t){t.g&&(mi(t),t.g.cancel(),t.g=null)}function oi(t){si(t),t.u&&(h.clearTimeout(t.u),t.u=null),vi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ai(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&ci(t)}function ci(t){Tn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function li(t,e){return!(In(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),_i(t,t.C)),t.C++,!0))}function ui(t,e){var n;n=e?e.m:t.V++;const i=Xe(t.F);tn(i,"SID",t.J),tn(i,"RID",n),tn(i,"AID",t.U),hi(t,i),t.o&&t.s&&ei(i,t.o,t.s),n=new Ae(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=di(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kn(t.i,n),Ne(n,i,e)}function hi(t,e){t.j&&Be({},(function(t,n){tn(e,n,t)}))}function di(t,e,n){n=Math.min(t.l.length,n);var i=t.j?b(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{xn(a,t,"req"+n+"_")}catch(Yi){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function fi(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function pi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),_i(t,t.A)),t.A++,!0)}function mi(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function gi(t){t.g=new Ae(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hi(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ei(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,xe(n,t)}function vi(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yi(t,e){var n=null;if(t.g==e){vi(t),mi(t),t.g=null;var i=2}else{if(!An(t.i,e))return;n=e.D,Cn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=ce(),xt(i,new fe(i,n,e,r)),ci(t)}else fi(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==i&&li(t,e)||2==i&&pi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:bi(t,5);break;case 4:bi(t,10);break;case 3:bi(t,6);break;default:bi(t,2)}}function _i(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function bi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=b(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Qe(n,"https"),en(n)),Rn(n.toString(),i)}else de(2);t.G=0,t.j&&t.j.va(e),wi(t),oi(t)}function wi(t){t.G=0,t.I=-1,t.j&&(0==Sn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function Ei(t,e,n){let i=nn(n);if(""!=i.i)e&&Ye(i,e+"."+i.i),Je(i,i.m);else{const t=h.location;i=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&$(t.aa,(function(t,e){tn(i,e,t)})),e=t.D,n=t.sa,e&&n&&tn(i,e,n),tn(i,"VER",t.ma),hi(t,i),i}function Ti(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new Ln({ib:!0})):new Vn(t.qa),e.L=t.H,e}function Ii(){}function Ai(){if(W&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function ki(t,e){Nt.call(this),this.g=new ii(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Oi(this)}function Ci(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Si(){Te.call(this),this.status=1}function Oi(t){this.g=t}i=Vn.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ye(this.u):ye(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Kn(this,s)}t=n||"";const r=new qe(this.headers);i&&Be(i,(function(t,e){r.set(e,t)})),i=S(r.T()),n=h.FormData&&t instanceof h.FormData,!(0<=k(Hn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kn(this,s)}},i.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Qn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qn(this,!0)),Vn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},i.cb=function(){Xn(this)},i.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ii.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ae(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=F(s),V(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=di(this,r,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hi(this,n),this.o&&s&&ei(n,this.o,s),kn(this.i,r),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),r.$=!0,Ne(r,n,null)):Ne(r,n,e),this.G=2}}else 3==this.G&&(t?ui(this,t):0==this.l.length||Tn(this.i)||ui(this))},i.Ga=function(){if(this.u=null,gi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),si(this),gi(this))},i.ab=function(){null!=this.v&&(this.v=null,si(this),pi(this),de(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},i=Ii.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Ai.prototype.g=function(t,e){return new ki(t,e)},E(ki,Nt),ki.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(b(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ei(t,null,t.W),ci(t)},ki.prototype.close=function(){ri(this.g)},ki.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ai(this.g,e)}else this.v?(e={},e.__data__=Dt(t),ai(this.g,e)):ai(this.g,t)},ki.prototype.M=function(){this.g.j=null,delete this.j,ri(this.g),delete this.g,ki.Z.M.call(this)},E(Ci,Ee),E(Si,Te),E(Oi,Ii),Oi.prototype.xa=function(){xt(this.g,"a")},Oi.prototype.wa=function(t){xt(this.g,new Ci(t))},Oi.prototype.va=function(t){xt(this.g,new Si(t))},Oi.prototype.ua=function(){xt(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,ki.prototype.send=ki.prototype.u,ki.prototype.open=ki.prototype.m,ki.prototype.close=ki.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",_e.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Ni=l.createWebChannelTransport=function(){return new Ai},xi=l.getStatEventTarget=function(){return ce()},Ri=l.ErrorCode=me,Di=l.EventType=ge,Li=l.Event=oe,Pi=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mi=l.FetchXmlHttpFactory=Ln,Ui=l.WebChannel=_e,$i=l.XhrIo=Vn;const Fi="@firebase/firestore";
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
 */class ji{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ji.UNAUTHENTICATED=new ji(null),ji.GOOGLE_CREDENTIALS=new ji("google-credentials-uid"),ji.FIRST_PARTY=new ji("first-party-uid"),ji.MOCK_USER=new ji("mock-user");
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
let Vi="9.9.1";
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
 */const Bi=new o.Yd("@firebase/firestore");function qi(){return Bi.logLevel}function Hi(t,...e){if(Bi.logLevel<=o["in"].DEBUG){const n=e.map(Ki);Bi.debug(`Firestore (${Vi}): ${t}`,...n)}}function zi(t,...e){if(Bi.logLevel<=o["in"].ERROR){const n=e.map(Ki);Bi.error(`Firestore (${Vi}): ${t}`,...n)}}function Wi(t,...e){if(Bi.logLevel<=o["in"].WARN){const n=e.map(Ki);Bi.warn(`Firestore (${Vi}): ${t}`,...n)}}function Ki(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Gi(t="Unexpected state"){const e=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: `+t;throw zi(e),new Error(e)}function Xi(t,e){t||Gi()}function Qi(t,e){return t}
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
 */const Yi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ji extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Zi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class tr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class er{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ji.UNAUTHENTICATED)))}shutdown(){}}class nr{constructor(t){this.t=t,this.currentUser=ji.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Zi,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Hi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Zi)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xi("string"==typeof e.accessToken),new tr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xi(null===t||"string"==typeof t),new ji(t)}}class ir{constructor(t,e,n){this.type="FirstParty",this.user=ji.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class rr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ir(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ji.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class or{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Hi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Hi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xi("string"==typeof t.token),this.p=t.token,new sr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function ar(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
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
 */class cr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ar(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function lr(t,e){return t<e?-1:t>e?1:0}function ur(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
class hr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ji(Yi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ji(Yi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ji(Yi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ji(Yi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hr.fromMillis(Date.now())}static fromDate(t){return hr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lr(this.nanoseconds,t.nanoseconds):lr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class dr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new dr(t)}static min(){return new dr(new hr(0,0))}static max(){return new dr(new hr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class fr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Gi(),void 0===n?n=t.length-e:n>t.length-e&&Gi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===fr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pr extends fr{construct(t,e,n){return new pr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ji(Yi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new pr(e)}static emptyPath(){return new pr([])}}const mr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gr extends fr{construct(t,e,n){return new gr(t,e,n)}static isValidIdentifier(t){return mr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gr(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Ji(Yi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Ji(Yi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ji(Yi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Ji(Yi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gr(e)}static emptyPath(){return new gr([])}}
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
 */class vr{constructor(t){this.path=t}static fromPath(t){return new vr(pr.fromString(t))}static fromName(t){return new vr(pr.fromString(t).popFirst(5))}static empty(){return new vr(pr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===pr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return pr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vr(new pr(t.slice()))}}
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
 */class yr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}yr.UNKNOWN_ID=-1;function _r(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=dr.fromTimestamp(1e9===i?new hr(n+1,0):new hr(n,i));return new wr(r,vr.empty(),e)}function br(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new wr(dr.min(),vr.empty(),-1)}static max(){return new wr(dr.max(),vr.empty(),-1)}}function Er(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=vr.comparator(t.documentKey,e.documentKey),0!==n?n:lr(t.largestBatchId,e.largestBatchId))}
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
 */const Tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ir{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function Ar(t){if(t.code!==Yi.FAILED_PRECONDITION||t.message!==Tr)throw t;Hi("LocalStore","Unexpectedly lost primary lease")}
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
 */class kr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Gi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new kr(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof kr?e:kr.resolve(e)}catch(t){return kr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):kr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):kr.reject(e)}static resolve(t){return new kr(((e,n)=>{e(t)}))}static reject(t){return new kr(((e,n)=>{n(t)}))}static waitFor(t){return new kr(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=kr.resolve(!1);for(const n of t)e=e.next((t=>t?kr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new kr(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new kr(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
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
 */function Cr(t){return"IndexedDbTransactionError"===t.name}
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
class Sr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
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
 */function Or(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */Sr.ot=-1;class Rr{constructor(t,e){this.comparator=t,this.root=e||Lr.EMPTY}insert(t,e){return new Rr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lr.BLACK,null,null))}remove(t){return new Rr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dr(this.root,t,this.comparator,!0)}}class Dr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lr{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Lr.RED,this.left=null!=i?i:Lr.EMPTY,this.right=null!=r?r:Lr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Lr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Lr.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gi();if(this.right.isRed())throw Gi();const t=this.left.check();if(t!==this.right.check())throw Gi();return t+(this.isRed()?0:1)}}Lr.EMPTY=null,Lr.RED=!0,Lr.BLACK=!1,Lr.EMPTY=new class{constructor(){this.size=0}get key(){throw Gi()}get value(){throw Gi()}get color(){throw Gi()}get left(){throw Gi()}get right(){throw Gi()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Lr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Pr{constructor(t){this.comparator=t,this.data=new Rr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mr(this.data.getIterator())}getIteratorFrom(t){return new Mr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Pr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Pr(this.comparator);return e.data=t,e}}class Mr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Ur{constructor(t){this.fields=t,t.sort(gr.comparator)}static empty(){return new Ur([])}unionWith(t){let e=new Pr(gr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ur(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ur(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class $r{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new $r(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new $r(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$r.EMPTY_BYTE_STRING=new $r("");const Fr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Xi(!!t),"string"==typeof t){let e=0;const n=Fr.exec(t);if(Xi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Vr(t.seconds),nanos:Vr(t.nanos)}}function Vr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Br(t){return"string"==typeof t?$r.fromBase64String(t):$r.fromUint8Array(t)}
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
 */function qr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hr(t){const e=t.mapValue.fields.__previous_value__;return qr(e)?Hr(e):e}function zr(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new hr(e.seconds,e.nanos)}
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
 */class Wr{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Kr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Kr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Kr&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Gr(t){return null==t}function Xr(t){return 0===t&&1/t==-1/0}function Qr(t){return"number"==typeof t&&Number.isInteger(t)&&!Xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qr(t)?4:ds(t)?9007199254740991:10:Gi()}function Zr(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zr(t).isEqual(zr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=jr(t.timestampValue),i=jr(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Br(t.bytesValue).isEqual(Br(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Vr(t.geoPointValue.latitude)===Vr(e.geoPointValue.latitude)&&Vr(t.geoPointValue.longitude)===Vr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Vr(t.integerValue)===Vr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Vr(t.doubleValue),i=Vr(e.doubleValue);return n===i?Xr(n)===Xr(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ur(t.arrayValue.values||[],e.arrayValue.values||[],Zr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Or(n)!==Or(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Zr(n[r],i[r])))return!1;return!0}(t,e);default:return Gi()}}function ts(t,e){return void 0!==(t.values||[]).find((t=>Zr(t,e)))}function es(t,e){if(t===e)return 0;const n=Jr(t),i=Jr(e);if(n!==i)return lr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return lr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Vr(t.integerValue||t.doubleValue),i=Vr(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return ns(t.timestampValue,e.timestampValue);case 4:return ns(zr(t),zr(e));case 5:return lr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Br(t),i=Br(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=lr(n[r],i[r]);if(0!==t)return t}return lr(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=lr(Vr(t.latitude),Vr(e.latitude));return 0!==n?n:lr(Vr(t.longitude),Vr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=es(n[r],i[r]);if(t)return t}return lr(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Yr.mapValue&&e===Yr.mapValue)return 0;if(t===Yr.mapValue)return 1;if(e===Yr.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=lr(i[o],s[o]);if(0!==t)return t;const e=es(n[i[o]],r[s[o]]);if(0!==e)return e}return lr(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Gi()}}function ns(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return lr(t,e);const n=jr(t),i=jr(e),r=lr(n.seconds,i.seconds);return 0!==r?r:lr(n.nanos,i.nanos)}function is(t){return rs(t)}function rs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=jr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Br(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,vr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=rs(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${rs(t.fields[r])}`;return n+"}"}(t.mapValue):Gi();var e,n}function ss(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function os(t){return!!t&&"integerValue"in t}function as(t){return!!t&&"arrayValue"in t}function cs(t){return!!t&&"nullValue"in t}function ls(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function us(t){return!!t&&"mapValue"in t}function hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=hs(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ds(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class fs{constructor(t){this.value=t}static empty(){return new fs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!us(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hs(e)}setAll(t){let e=gr.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=hs(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());us(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];us(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Nr(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new fs(hs(this.value))}}function ps(t){const e=[];return Nr(t.fields,((t,n)=>{const i=new gr([t]);if(us(n)){const t=ps(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Ur(e)
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
 */}class ms{constructor(t,e,n,i,r,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=r,this.documentState=s}static newInvalidDocument(t){return new ms(t,0,dr.min(),dr.min(),fs.empty(),0)}static newFoundDocument(t,e,n){return new ms(t,1,e,dr.min(),n,0)}static newNoDocument(t,e){return new ms(t,2,e,dr.min(),fs.empty(),0)}static newUnknownDocument(t,e){return new ms(t,3,e,dr.min(),fs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ms&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ms(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class gs{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ut=null}}function vs(t,e=null,n=[],i=[],r=null,s=null,o=null){return new gs(t,e,n,i,r,s,o)}function ys(t){const e=Qi(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+is(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>is(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>is(t))).join(",")),e.ut=t}return e.ut}function _s(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${is(e.value)}`;var e})).join(", ")}]`),Gr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>is(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>is(t))).join(",")),`Target(${e})`}function bs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ds(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Zr(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ps(t.startAt,e.startAt)&&Ps(t.endAt,e.endAt)}function ws(t){return vr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Es extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Ts(t,e,n):"array-contains"===e?new Cs(t,n):"in"===e?new Ss(t,n):"not-in"===e?new Os(t,n):"array-contains-any"===e?new Ns(t,n):new Es(t,e,n)}static ct(t,e,n){return"in"===e?new Is(t,n):new As(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(es(e,this.value)):null!==e&&Jr(this.value)===Jr(e)&&this.at(es(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Gi()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ts extends Es{constructor(t,e,n){super(t,e,n),this.key=vr.fromName(n.referenceValue)}matches(t){const e=vr.comparator(t.key,this.key);return this.at(e)}}class Is extends Es{constructor(t,e){super(t,"in",e),this.keys=ks("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class As extends Es{constructor(t,e){super(t,"not-in",e),this.keys=ks("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ks(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>vr.fromName(t.referenceValue)))}class Cs extends Es{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return as(e)&&ts(e.arrayValue,this.value)}}class Ss extends Es{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ts(this.value.arrayValue,e)}}class Os extends Es{constructor(t,e){super(t,"not-in",e)}matches(t){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ts(this.value.arrayValue,e)}}class Ns extends Es{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!as(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ts(this.value.arrayValue,t)))}}class xs{constructor(t,e){this.position=t,this.inclusive=e}}class Rs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ds(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ls(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?vr.comparator(vr.fromName(o.referenceValue),n.key):es(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ps(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zr(t.position[n],e.position[n]))return!1;return!0}
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
 */class Ms{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Us(t,e,n,i,r,s,o,a){return new Ms(t,e,n,i,r,s,o,a)}function $s(t){return new Ms(t)}function Fs(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function js(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vs(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Bs(t){return null!==t.collectionGroup}function qs(t){const e=Qi(t);if(null===e.lt){e.lt=[];const t=Vs(e),n=js(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Rs(t)),e.lt.push(new Rs(gr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Rs(gr.keyField(),t))}}}return e.lt}function Hs(t){const e=Qi(t);if(!e.ft)if("F"===e.limitType)e.ft=vs(e.path,e.collectionGroup,qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of qs(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Rs(r.field,e))}const n=e.endAt?new xs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xs(e.startAt.position,e.startAt.inclusive):null;e.ft=vs(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.ft}function zs(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ws(t,e){return bs(Hs(t),Hs(e))&&t.limitType===e.limitType}function Ks(t){return`${ys(Hs(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${_s(Hs(t))}; limitType=${t.limitType})`}function Xs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):vr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Ls(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,qs(t),e))&&!(t.endAt&&!function(t,e,n){const i=Ls(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,qs(t),e))}(t,e)}function Qs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ys(t){return(e,n)=>{let i=!1;for(const r of qs(t)){const t=Js(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Js(t,e,n){const i=t.field.isKeyField()?vr.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?es(i,r):Gi()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Gi()}}
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
 */function Zs(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function to(t){return{integerValue:""+t}}function eo(t,e){return Qr(e)?to(e):Zs(t,e)}
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
 */class no{constructor(){this._=void 0}}function io(t,e,n){return t instanceof oo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ao?co(t,e):t instanceof lo?uo(t,e):function(t,e){const n=so(t,e),i=fo(n)+fo(t._t);return os(n)&&os(t._t)?to(i):Zs(t.wt,i)}(t,e)}function ro(t,e,n){return t instanceof ao?co(t,e):t instanceof lo?uo(t,e):n}function so(t,e){return t instanceof ho?os(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class oo extends no{}class ao extends no{constructor(t){super(),this.elements=t}}function co(t,e){const n=po(e);for(const i of t.elements)n.some((t=>Zr(t,i)))||n.push(i);return{arrayValue:{values:n}}}class lo extends no{constructor(t){super(),this.elements=t}}function uo(t,e){let n=po(e);for(const i of t.elements)n=n.filter((t=>!Zr(t,i)));return{arrayValue:{values:n}}}class ho extends no{constructor(t,e){super(),this.wt=t,this._t=e}}function fo(t){return Vr(t.integerValue||t.doubleValue)}function po(t){return as(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function mo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ao&&e instanceof ao||t instanceof lo&&e instanceof lo?ur(t.elements,e.elements,Zr):t instanceof ho&&e instanceof ho?Zr(t._t,e._t):t instanceof oo&&e instanceof oo}(t.transform,e.transform)}class go{constructor(t,e){this.version=t,this.transformResults=e}}class vo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new vo}static exists(t){return new vo(void 0,t)}static updateTime(t){return new vo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class _o{}function bo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new No(t.key,vo.none()):new Ao(t.key,t.data,vo.none());{const n=t.data,i=fs.empty();let r=new Pr(gr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new ko(t.key,i,new Ur(r.toArray()),vo.none())}}function wo(t,e,n){t instanceof Ao?function(t,e,n){const i=t.value.clone(),r=So(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof ko?function(t,e,n){if(!yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=So(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Co(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,i){return t instanceof Ao?function(t,e,n,i){if(!yo(t.precondition,e))return n;const r=t.value.clone(),s=Oo(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof ko?function(t,e,n,i){if(!yo(t.precondition,e))return n;const r=Oo(t.fieldTransforms,i,e),s=e.data;return s.setAll(Co(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return yo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function To(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=so(i.transform,t||null);null!=r&&(null===n&&(n=fs.empty()),n.set(i.field,r))}return n||null}function Io(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ur(t,e,((t,e)=>mo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends _o{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ko extends _o{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Co(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function So(t,e,n){const i=new Map;Xi(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,ro(o,a,n[r]))}return i}function Oo(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,io(t,s,e))}return i}class No extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xo extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */var Do,Lo;function Po(t){switch(t){default:return Gi();case Yi.CANCELLED:case Yi.UNKNOWN:case Yi.DEADLINE_EXCEEDED:case Yi.RESOURCE_EXHAUSTED:case Yi.INTERNAL:case Yi.UNAVAILABLE:case Yi.UNAUTHENTICATED:return!1;case Yi.INVALID_ARGUMENT:case Yi.NOT_FOUND:case Yi.ALREADY_EXISTS:case Yi.PERMISSION_DENIED:case Yi.FAILED_PRECONDITION:case Yi.ABORTED:case Yi.OUT_OF_RANGE:case Yi.UNIMPLEMENTED:case Yi.DATA_LOSS:return!0}}function Mo(t){if(void 0===t)return zi("GRPC error has no .code"),Yi.UNKNOWN;switch(t){case Do.OK:return Yi.OK;case Do.CANCELLED:return Yi.CANCELLED;case Do.UNKNOWN:return Yi.UNKNOWN;case Do.DEADLINE_EXCEEDED:return Yi.DEADLINE_EXCEEDED;case Do.RESOURCE_EXHAUSTED:return Yi.RESOURCE_EXHAUSTED;case Do.INTERNAL:return Yi.INTERNAL;case Do.UNAVAILABLE:return Yi.UNAVAILABLE;case Do.UNAUTHENTICATED:return Yi.UNAUTHENTICATED;case Do.INVALID_ARGUMENT:return Yi.INVALID_ARGUMENT;case Do.NOT_FOUND:return Yi.NOT_FOUND;case Do.ALREADY_EXISTS:return Yi.ALREADY_EXISTS;case Do.PERMISSION_DENIED:return Yi.PERMISSION_DENIED;case Do.FAILED_PRECONDITION:return Yi.FAILED_PRECONDITION;case Do.ABORTED:return Yi.ABORTED;case Do.OUT_OF_RANGE:return Yi.OUT_OF_RANGE;case Do.UNIMPLEMENTED:return Yi.UNIMPLEMENTED;case Do.DATA_LOSS:return Yi.DATA_LOSS;default:return Gi()}}(Lo=Do||(Do={}))[Lo.OK=0]="OK",Lo[Lo.CANCELLED=1]="CANCELLED",Lo[Lo.UNKNOWN=2]="UNKNOWN",Lo[Lo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lo[Lo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lo[Lo.NOT_FOUND=5]="NOT_FOUND",Lo[Lo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lo[Lo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lo[Lo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lo[Lo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lo[Lo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lo[Lo.ABORTED=10]="ABORTED",Lo[Lo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lo[Lo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lo[Lo.INTERNAL=13]="INTERNAL",Lo[Lo.UNAVAILABLE=14]="UNAVAILABLE",Lo[Lo.DATA_LOSS=15]="DATA_LOSS";
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
class Uo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Nr(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return xr(this.inner)}size(){return this.innerSize}}
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
 */const $o=new Rr(vr.comparator);function Fo(){return $o}const jo=new Rr(vr.comparator);function Vo(...t){let e=jo;for(const n of t)e=e.insert(n.key,n);return e}function Bo(t){let e=jo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function qo(){return zo()}function Ho(){return zo()}function zo(){return new Uo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Wo=new Rr(vr.comparator),Ko=new Pr(vr.comparator);function Go(...t){let e=Ko;for(const n of t)e=e.add(n);return e}const Xo=new Pr(lr);function Qo(){return Xo}
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
 */class Yo{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Jo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Yo(dr.min(),n,Qo(),Fo(),Go())}}class Jo{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Jo($r.EMPTY_BYTE_STRING,e,Go(),Go(),Go())}}
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
 */class Zo{constructor(t,e,n,i){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=i}}class ta{constructor(t,e){this.targetId=t,this.It=e}}class ea{constructor(t,e,n=$r.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class na{constructor(){this.Tt=0,this.Et=sa(),this.At=$r.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Go(),e=Go(),n=Go();return this.Et.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Gi()}})),new Jo(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=sa()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class ia{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Fo(),this.Bt=ra(),this.Lt=new Pr(lr)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Gi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,i=this.Ht(e);if(i){const t=i.target;if(ws(t))if(0===n){const n=new vr(t.path);this.Kt(e,n,ms.newNoDocument(n,dr.min()))}else Xi(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,i)=>{const r=this.Ht(i);if(r){if(n.current&&ws(r.target)){const e=new vr(r.target.path);null!==this.$t.get(e)||this.Xt(i,e)||this.Kt(i,e,ms.newNoDocument(e,t))}n.vt&&(e.set(i,n.St()),n.Dt())}}));let n=Go();this.Bt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const i=new Yo(t,e,this.Lt,this.$t,n);return this.$t=Fo(),this.Bt=ra(),this.Lt=new Pr(lr),i}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const i=this.Qt(t);this.Xt(t,e)?i.Ct(e,1):i.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new na,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Pr(lr),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Hi("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new na),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function ra(){return new Rr(vr.comparator)}function sa(){return new Rr(vr.comparator)}
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
 */const oa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),aa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ca{constructor(t,e){this.databaseId=t,this.dt=e}}function la(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ua(t,e){return t.dt?e.toBase64():e.toUint8Array()}function ha(t,e){return la(t,e.toTimestamp())}function da(t){return Xi(!!t),dr.fromTimestamp(function(t){const e=jr(t);return new hr(e.seconds,e.nanos)}(t))}function fa(t,e){return function(t){return new pr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function pa(t){const e=pr.fromString(t);return Xi(Ua(e)),e}function ma(t,e){return fa(t.databaseId,e.path)}function ga(t,e){const n=pa(e);if(n.get(1)!==t.databaseId.projectId)throw new Ji(Yi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ji(Yi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new vr(ba(n))}function va(t,e){return fa(t.databaseId,e)}function ya(t){const e=pa(t);return 4===e.length?pr.emptyPath():ba(e)}function _a(t){return new pr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ba(t){return Xi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function wa(t,e,n){return{name:ma(t,e),fields:n.value.mapValue.fields}}function Ea(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Gi()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.dt?(Xi(void 0===e||"string"==typeof e),$r.fromBase64String(e||"")):(Xi(void 0===e||e instanceof Uint8Array),$r.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Yi.UNKNOWN:Mo(t.code);return new Ji(e,t.message||"")}(o);n=new ea(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=ga(t,i.document.name),s=da(i.document.updateTime),o=new fs({mapValue:{fields:i.document.fields}}),a=ms.newFoundDocument(r,s,o),c=i.targetIds||[],l=i.removedTargetIds||[];n=new Zo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=ga(t,i.document),s=i.readTime?da(i.readTime):dr.min(),o=ms.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Zo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=ga(t,i.document),s=i.removedTargetIds||[];n=new Zo([],s,r,null)}else{if(!("filter"in e))return Gi();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Ro(i),s=t.targetId;n=new ta(s,r)}}return n}function Ta(t,e){let n;if(e instanceof Ao)n={update:wa(t,e.key,e.value)};else if(e instanceof No)n={delete:ma(t,e.key)};else if(e instanceof ko)n={update:wa(t,e.key,e.data),updateMask:Ma(e.fieldMask)};else{if(!(e instanceof xo))return Gi();n={verify:ma(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof oo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ao)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof lo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ho)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Gi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ha(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Gi()}(t,e.precondition)),n}function Ia(t,e){return t&&t.length>0?(Xi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?da(t.updateTime):da(e);return n.isEqual(dr.min())&&(n=da(e)),new go(n,t.transformResults||[])}(t,e)))):[]}function Aa(t,e){return{documents:[va(t,e.path)]}}function ka(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=va(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=va(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(ls(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NAN"}};if(cs(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ls(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NAN"}};if(cs(t.value))return{unaryFilter:{field:Ra(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(t.field),op:xa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ra(t.field),direction:Na(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.dt||Gr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ca(t){let e=ya(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Xi(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Oa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Rs(Da(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Gr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new xs(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new xs(n,e)}(n.endAt)),Us(e,r,o,s,a,"F",c,l)}function Sa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Gi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Oa(t){return t?void 0!==t.unaryFilter?[Pa(t)]:void 0!==t.fieldFilter?[La(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Oa(t))).reduce(((t,e)=>t.concat(e))):Gi():[]}function Na(t){return oa[t]}function xa(t){return aa[t]}function Ra(t){return{fieldPath:t.canonicalString()}}function Da(t){return gr.fromServerFormat(t.fieldPath)}function La(t){return Es.create(Da(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gi()}}(t.fieldFilter.op),t.fieldFilter.value)}function Pa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Da(t.unaryFilter.field);return Es.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Da(t.unaryFilter.field);return Es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Da(t.unaryFilter.field);return Es.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Da(t.unaryFilter.field);return Es.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Gi()}}function Ma(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ua(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const $a=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Fa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ja=Fa;
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
class Va{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&wo(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Eo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ho();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=bo(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(dr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Go())}isEqual(t){return this.batchId===t.batchId&&ur(this.mutations,t.mutations,((t,e)=>Io(t,e)))&&ur(this.baseMutations,t.baseMutations,((t,e)=>Io(t,e)))}}class Ba{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Xi(t.mutations.length===n.length);let i=Wo;const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Ba(t,e,n,i)}}
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
 */class Ha{constructor(t,e,n,i,r=dr.min(),s=dr.min(),o=$r.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ha(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ka{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Vr(t.integerValue));else if("doubleValue"in t){const n=Vr(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Xr(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Br(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?ds(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Gi()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const i of Object.keys(n))this.le(i,e),this.oe(n[i],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const i of n)this.oe(i,e)}_e(t,e){this.ce(e,37),vr.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}Ka.ye=new Ka;
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
class Ga{constructor(){this.ze=new Xa}addToCollectionParentIndex(t,e){return this.ze.add(e),kr.resolve()}getCollectionParents(t,e){return kr.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return kr.resolve()}deleteFieldIndex(t,e){return kr.resolve()}getDocumentsMatchingTarget(t,e){return kr.resolve(null)}getIndexType(t,e){return kr.resolve(0)}getFieldIndexes(t,e){return kr.resolve([])}getNextCollectionGroupToUpdate(t){return kr.resolve(null)}getMinOffset(t,e){return kr.resolve(wr.min())}getMinOffsetFromCollectionGroup(t,e){return kr.resolve(wr.min())}updateCollectionGroup(t,e,n){return kr.resolve()}updateIndexEntries(t,e){return kr.resolve()}}class Xa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Pr(pr.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Pr(pr.comparator)).toArray()}}
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
class Ya{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Ya(0)}static Rn(){return new Ya(-1)}}
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
class Ja{constructor(){this.changes=new Uo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ms.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?kr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class tc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Eo(n.mutation,t,Ur.empty(),hr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Go()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Go()){const i=qo();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Vo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=qo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Go())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Fo();const s=zo(),o=zo();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof ko)?r=r.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),Eo(o.mutation,e,o.mutation.getFieldMask(),hr.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Za(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=zo();let i=new Rr(((t,e)=>t-e)),r=Go();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ur.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Go()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=Ho();c.forEach((t=>{if(!r.has(t)){const i=bo(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return kr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return vr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):kr.resolve(qo());let o=-1,a=r;return s.next((e=>kr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?kr.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Go()))).next((t=>({batchId:o,changes:Bo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new vr(e)).next((t=>{let e=Vo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=Vo();return this.indexManager.getCollectionParents(t,i).next((s=>kr.forEach(s,(s=>{const o=function(t,e){return new Ms(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,ms.newInvalidDocument(n)))}));let n=Vo();return i.forEach(((i,r)=>{const s=t.get(i);void 0!==s&&Eo(s.mutation,r,Ur.empty(),hr.now()),Xs(e,r)&&(n=n.insert(i,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):kr.resolve(ms.newInvalidDocument(e))}}
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
 */class ec{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return kr.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:da(n.createTime)}),kr.resolve()}getNamedQuery(t,e){return kr.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Wa(t.bundledQuery),readTime:da(t.readTime)}}(e)),kr.resolve()}}
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
 */class nc{constructor(){this.overlays=new Rr(vr.comparator),this.Xn=new Map}getOverlay(t,e){return kr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=qo();return kr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ie(t,e,i)})),kr.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Xn.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),kr.resolve()}getOverlaysForCollection(t,e,n){const i=qo(),r=e.length+1,s=new vr(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return kr.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Rr(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=qo(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=qo(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return kr.resolve(o)}ie(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Xn.get(i.largestBatchId).delete(n.key);this.Xn.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qa(e,n));let r=this.Xn.get(e);void 0===r&&(r=Go(),this.Xn.set(e,r)),this.Xn.set(e,r.add(n.key))}}
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
 */class ic{constructor(){this.Zn=new Pr(rc.ts),this.es=new Pr(rc.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new rc(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new rc(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new vr(new pr([])),n=new rc(e,t),i=new rc(e,t+1),r=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),r.push(t.key)})),r}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new vr(new pr([])),n=new rc(e,t),i=new rc(e,t+1);let r=Go();return this.es.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new rc(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class rc{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return vr.comparator(t.key,e.key)||lr(t.ls,e.ls)}static ns(t,e){return lr(t.ls,e.ls)||vr.comparator(t.key,e.key)}}
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
 */class sc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Pr(rc.ts)}checkEmpty(t){return kr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Va(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.ds=this.ds.add(new rc(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return kr.resolve(s)}lookupMutationBatch(t,e){return kr.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ws(n),r=i<0?0:i;return kr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return kr.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return kr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rc(e,0),i=new rc(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,i],(t=>{const e=this._s(t.ls);r.push(e)})),kr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pr(lr);return e.forEach((t=>{const e=new rc(t,0),i=new rc(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),kr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;vr.isDocumentKey(r)||(r=r.child(""));const s=new rc(new vr(r),0);let o=new Pr(lr);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),s),kr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xi(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return kr.forEach(e.mutations,(i=>{const r=new rc(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new rc(e,0),i=this.ds.firstAfterOrEqual(n);return kr.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,kr.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class oc{constructor(t){this.ps=t,this.docs=new Rr(vr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return kr.resolve(n?n.document.mutableCopy():ms.newInvalidDocument(e))}getEntries(t,e){let n=Fo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ms.newInvalidDocument(t))})),kr.resolve(n)}getAllFromCollection(t,e,n){let i=Fo();const r=new vr(e.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Er(br(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return kr.resolve(i)}getAllFromCollectionGroup(t,e,n,i){Gi()}Is(t,e){return kr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ac(this)}getSize(t){return kr.resolve(this.size)}}class ac extends Ja{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.zn.addEntry(t,i)):this.zn.removeEntry(n)})),kr.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
 */class cc{constructor(t){this.persistence=t,this.Ts=new Uo((t=>ys(t)),bs),this.lastRemoteSnapshotVersion=dr.min(),this.highestTargetId=0,this.Es=0,this.As=new ic,this.targetCount=0,this.Rs=Ya.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),kr.resolve()}getLastRemoteSnapshotVersion(t){return kr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return kr.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),kr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),kr.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ya(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,kr.resolve()}updateTargetData(t,e){return this.vn(e),kr.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,kr.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),kr.waitFor(r).next((()=>i))}getTargetCount(t){return kr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return kr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),kr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),kr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),kr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return kr.resolve(n)}containsKey(t,e){return kr.resolve(this.As.containsKey(e))}}
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
 */class lc{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Sr(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new cc(this),this.indexManager=new Ga,this.remoteDocumentCache=function(t){return new oc(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new za(e),this.Ds=new ec(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new sc(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Hi("MemoryPersistence","Starting transaction:",t);const i=new uc(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((t=>this.referenceDelegate.xs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ns(t,e){return kr.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class uc extends Ir{constructor(t){super(),this.currentSequenceNumber=t}}class hc{constructor(t){this.persistence=t,this.ks=new ic,this.Os=null}static Ms(t){return new hc(t)}get Fs(){if(this.Os)return this.Os;throw Gi()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),kr.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),kr.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),kr.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return kr.forEach(this.Fs,(n=>{const i=vr.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i,dr.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return kr.or([()=>kr.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
class dc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=i}static Vi(t,e){let n=Go(),i=Go();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new dc(t,e.fromCache,n,i)}}
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
 */class fc{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ci(t,e).next((r=>r||this.xi(t,e,i,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return kr.resolve(null)}xi(t,e,n,i){return Fs(e)||i.isEqual(dr.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((r=>{const s=this.ki(e,r);return this.Oi(e,s,n,i)?this.Ni(t,e):(qi()<=o["in"].DEBUG&&Hi("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gs(e)),this.Mi(t,s,e,_r(i,-1)))}))}ki(t,e){let n=new Pr(Ys(t));return e.forEach(((e,i)=>{Xs(t,i)&&(n=n.add(i))})),n}Oi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(t,e){return qi()<=o["in"].DEBUG&&Hi("QueryEngine","Using full collection scan to execute query:",Gs(e)),this.Di.getDocumentsMatchingQuery(t,e,wr.min())}Mi(t,e,n,i){return this.Di.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class pc{constructor(t,e,n,i){this.persistence=t,this.Fi=e,this.wt=i,this.$i=new Rr(lr),this.Bi=new Uo((t=>ys(t)),bs),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tc(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function mc(t,e,n,i){return new pc(t,e,n,i)}async function gc(t,e){const n=Qi(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Go();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function vc(t,e){const n=Qi(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=kr.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Xi(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Go();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function yc(t){const e=Qi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function _c(t,e){const n=Qi(t),i=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken($r.EMPTY_BYTE_STRING,dr.min()).withLastLimboFreeSnapshotVersion(dr.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.Vs.updateTargetData(t,l))}));let a=Fo(),c=Go();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(bc(t,s,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!i.isEqual(dr.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return kr.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=r,t)))}function bc(t,e,n){let i=Go(),r=Go();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Fo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(dr.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Hi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:i,Qi:r}}))}function wc(t,e){const n=Qi(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ec(t,e){const n=Qi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Vs.getTargetData(t,e).next((r=>r?(i=r,kr.resolve(i)):n.Vs.allocateTargetId(t).next((r=>(i=new Ha(e,r,0,t.currentSequenceNumber),n.Vs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.$i.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Tc(t,e,n){const i=Qi(t),r=i.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Cr(t))throw t;Hi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.$i=i.$i.remove(e),i.Bi.delete(r.target)}function Ic(t,e,n){const i=Qi(t);let r=dr.min(),s=Go();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Qi(t),r=i.Bi.get(n);return void 0!==r?kr.resolve(i.$i.get(r)):i.Vs.getTargetData(e,n)}(i,t,Hs(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Fi.getDocumentsMatchingQuery(t,e,n?r:dr.min(),n?s:Go()))).next((t=>(Ac(i,Qs(e),t),{documents:t,ji:s})))))}function Ac(t,e,n){let i=dr.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Li.set(e,i)}class kc{constructor(){this.activeTargetIds=Qo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cc{constructor(){this.Fr=new kc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new kc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Oc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Hi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Hi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */class Rc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,i,r){const s=this.oo(t,e);Hi("RestConnection","Sending: ",s,n);const o={};return this.uo(o,i,r),this.co(t,s,o,n).then((t=>(Hi("RestConnection","Received: ",t),t)),(e=>{throw Wi("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,i,r,s){return this.ro(t,e,n,i,r)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Nc[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,i){return new Promise(((r,s)=>{const o=new $i;o.listenOnce(Di.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ri.NO_ERROR:const e=o.getResponseJson();Hi("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Ri.TIMEOUT:Hi("Connection",'RPC "'+t+'" timed out'),s(new Ji(Yi.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const n=o.getStatus();if(Hi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Yi).indexOf(e)>=0?e:Yi.UNKNOWN}(t.status);s(new Ji(e,t.message))}else s(new Ji(Yi.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Ji(Yi.UNAVAILABLE,"Connection failed."));break;default:Gi()}}finally{Hi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ni(),s=xi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mi({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");Hi("Connection","Creating WebChannel: "+c,o);const l=r.createWebChannel(c,o);let u=!1,h=!1;const d=new xc({jr:t=>{h?Hi("Connection","Not sending because WebChannel is closed:",t):(u||(Hi("Connection","Opening WebChannel transport."),l.open(),u=!0),Hi("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(l,Ui.EventType.OPEN,(()=>{h||Hi("Connection","WebChannel transport opened.")})),f(l,Ui.EventType.CLOSE,(()=>{h||(h=!0,Hi("Connection","WebChannel transport closed"),d.eo())})),f(l,Ui.EventType.ERROR,(t=>{h||(h=!0,Wi("Connection","WebChannel transport errored:",t),d.eo(new Ji(Yi.UNAVAILABLE,"The operation could not be completed")))})),f(l,Ui.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xi(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){Hi("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Do[t];if(void 0!==e)return Mo(e)}(t),n=r.message;void 0===e&&(e=Yi.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,d.eo(new Ji(e,n)),l.close()}else Hi("Connection","WebChannel received:",n),d.no(n)}})),f(s,Li.STAT_EVENT,(t=>{t.stat===Pi.PROXY?Hi("Connection","Detected buffering proxy"):t.stat===Pi.NOPROXY&&Hi("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
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
 */function Lc(t){return new ca(t,!0)}class Pc{constructor(t,e,n=1e3,i=1.5,r=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&Hi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
 */class Mc{constructor(t,e,n,i,r,s,o,a){this.js=t,this.Ao=n,this.Ro=i,this.bo=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Pc(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Yi.RESOURCE_EXHAUSTED?(zi(e.toString()),zi("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Yi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Ji(Yi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Hi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Hi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Uc extends Mc{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.wt=r}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Ea(this.wt,t),n=function(t){if(!("targetChange"in t))return dr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?dr.min():e.readTime?da(e.readTime):dr.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=_a(this.wt),e.addTarget=function(t,e){let n;const i=e.target;return n=ws(i)?{documents:Aa(t,i)}:{query:ka(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ua(t,e.resumeToken):e.snapshotVersion.compareTo(dr.min())>0&&(n.readTime=la(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Sa(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=_a(this.wt),e.removeTarget=t,this.Mo(e)}}class $c extends Mc{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Xi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Ia(t.writeResults,t.commitTime),n=da(t.commitTime);return this.listener.Jo(n,e)}return Xi(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=_a(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ta(this.wt,t)))};this.Mo(e)}}
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
 */class Fc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new Ji(Yi.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.ro(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ji(Yi.UNKNOWN,t.toString())}))}ao(t,e,n,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ao(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Yi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ji(Yi.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class jc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(zi(e),this.su=!1):Hi("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
 */class Vc{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br((t=>{n.enqueueAndForget((async()=>{Qc(this)&&(Hi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Qi(t);e.lu.add(4),await qc(e),e._u.set("Unknown"),e.lu.delete(4),await Bc(e)}(this))}))})),this._u=new jc(n,i)}}async function Bc(t){if(Qc(t))for(const e of t.fu)await e(!0)}async function qc(t){for(const e of t.fu)await e(!1)}function Hc(t,e){const n=Qi(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Xc(n)?Gc(n):pl(n).Co()&&Wc(n,e))}function zc(t,e){const n=Qi(t),i=pl(n);n.hu.delete(e),i.Co()&&Kc(n,e),0===n.hu.size&&(i.Co()?i.ko():Qc(n)&&n._u.set("Unknown"))}function Wc(t,e){t.wu.Nt(e.targetId),pl(t).Qo(e)}function Kc(t,e){t.wu.Nt(e),pl(t).jo(e)}function Gc(t){t.wu=new ia({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),pl(t).start(),t._u.iu()}function Xc(t){return Qc(t)&&!pl(t).Do()&&t.hu.size>0}function Qc(t){return 0===Qi(t).lu.size}function Yc(t){t.wu=void 0}async function Jc(t){t.hu.forEach(((e,n)=>{Wc(t,e)}))}async function Zc(t,e){Yc(t),Xc(t)?(t._u.uu(e),Gc(t)):t._u.set("Unknown")}async function tl(t,e,n){if(t._u.set("Online"),e instanceof ea&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.hu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.hu.delete(i),t.wu.removeTarget(i))}(t,e)}catch(n){Hi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await el(t,n)}else if(e instanceof Zo?t.wu.Ut(e):e instanceof ta?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(dr.min()))try{const e=await yc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.hu.get(i);r&&t.hu.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken($r.EMPTY_BYTE_STRING,n.snapshotVersion)),Kc(t,e);const i=new Ha(n.target,e,1,n.sequenceNumber);Wc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hi("RemoteStore","Failed to raise snapshot:",e),await el(t,e)}}async function el(t,e,n){if(!Cr(e))throw e;t.lu.add(1),await qc(t),t._u.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hi("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Bc(t)}))}function nl(t,e){return e().catch((n=>el(t,n,e)))}async function il(t){const e=Qi(t),n=ml(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;rl(e);)try{const t=await wc(e.localStore,i);if(null===t){0===e.au.length&&n.ko();break}i=t.batchId,sl(e,t)}catch(t){await el(e,t)}ol(e)&&al(e)}function rl(t){return Qc(t)&&t.au.length<10}function sl(t,e){t.au.push(e);const n=ml(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ol(t){return Qc(t)&&!ml(t).Do()&&t.au.length>0}function al(t){ml(t).start()}async function cl(t){ml(t).Xo()}async function ll(t){const e=ml(t);for(const n of t.au)e.Ho(n.mutations)}async function ul(t,e,n){const i=t.au.shift(),r=Ba.from(i,e,n);await nl(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await il(t)}async function hl(t,e){e&&ml(t).zo&&await async function(t,e){if(n=e.code,Po(n)&&n!==Yi.ABORTED){const n=t.au.shift();ml(t).No(),await nl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await il(t)}var n}(t,e),ol(t)&&al(t)}async function dl(t,e){const n=Qi(t);n.asyncQueue.verifyOperationInProgress(),Hi("RemoteStore","RemoteStore received new credentials");const i=Qc(n);n.lu.add(3),await qc(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Bc(n)}async function fl(t,e){const n=Qi(t);e?(n.lu.delete(2),await Bc(n)):e||(n.lu.add(2),await qc(n),n._u.set("Unknown"))}function pl(t){return t.mu||(t.mu=function(t,e,n){const i=Qi(t);return i.tu(),new Uc(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)
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
 */}(t.datastore,t.asyncQueue,{zr:Jc.bind(null,t),Jr:Zc.bind(null,t),Go:tl.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Xc(t)?Gc(t):t._u.set("Unknown")):(await t.mu.stop(),Yc(t))}))),t.mu}function ml(t){return t.gu||(t.gu=function(t,e,n){const i=Qi(t);return i.tu(),new $c(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)}(t.datastore,t.asyncQueue,{zr:cl.bind(null,t),Jr:hl.bind(null,t),Yo:ll.bind(null,t),Jo:ul.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await il(t)):(await t.gu.stop(),t.au.length>0&&(Hi("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
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
 */}class gl{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new gl(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ji(Yi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(t,e){if(zi("AsyncQueue",`${e}: ${t}`),Cr(t))return new Ji(Yi.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class yl{constructor(t){this.comparator=t?(e,n)=>t(e,n)||vr.comparator(e.key,n.key):(t,e)=>vr.comparator(t.key,e.key),this.keyedMap=Vo(),this.sortedSet=new Rr(this.comparator)}static emptySet(t){return new yl(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yl))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new yl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class _l{constructor(){this.yu=new Rr(vr.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Gi():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class bl{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new bl(t,e,yl.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ws(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
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
 */class wl{constructor(){this.Iu=void 0,this.listeners=[]}}class El{constructor(){this.queries=new Uo((t=>Ks(t)),Ws),this.onlineState="Unknown",this.Tu=new Set}}async function Tl(t,e){const n=Qi(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new wl),r)try{s.Iu=await n.onListen(i)}catch(t){const n=vl(t,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Cl(n)}async function Il(t,e){const n=Qi(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Al(t,e){const n=Qi(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(r)&&(i=!0);e.Iu=r}}i&&Cl(n)}function kl(t,e,n){const i=Qi(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Cl(t){t.Tu.forEach((t=>{t.next()}))}class Sl{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=bl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
class Ol{constructor(t){this.key=t}}class Nl{constructor(t){this.key=t}}class xl{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Go(),this.mutatedKeys=Go(),this.Lu=Ys(t),this.Uu=new yl(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new _l,i=e?e.Uu:this.Uu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Xs(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Qu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Lu(u,a)>0||c&&this.Lu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Oi:o,mutatedKeys:r}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gi()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==r.length||a?{snapshot:new bl(this.query,t.Uu,i,r,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new _l,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Go(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Nl(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Ol(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Go();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return bl.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Rl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Dl{constructor(t){this.key=t,this.Xu=!1}}class Ll{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new Uo((t=>Ks(t)),Ws),this.ec=new Map,this.nc=new Set,this.sc=new Rr(vr.comparator),this.ic=new Map,this.rc=new ic,this.oc={},this.uc=new Map,this.cc=Ya.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Pl(t,e){const n=tu(t);let i,r;const s=n.tc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Yu();else{const t=await Ec(n.localStore,Hs(e));n.isPrimaryClient&&Hc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Ml(n,e,i,"current"===s)}return r}async function Ml(t,e,n,i){t.hc=(e,n,i)=>async function(t,e,n,i){let r=e.view.Ku(n);r.Oi&&(r=await Ic(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Gl(t,e.targetId,o.zu),o.snapshot}(t,e,n,i);const r=await Ic(t.localStore,e,!0),s=new xl(e,r.ji),o=s.Ku(r.documents),a=Jo.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Gl(t,n,c.zu);const l=new Rl(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Ul(t,e){const n=Qi(t),i=n.tc.get(e),r=n.ec.get(i.targetId);if(r.length>1)return n.ec.set(i.targetId,r.filter((t=>!Ws(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Tc(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),zc(n.remoteStore,i.targetId),Wl(n,i.targetId)})).catch(Ar)):(Wl(n,i.targetId),await Tc(n.localStore,i.targetId,!0))}async function $l(t,e,n){const i=eu(t);try{const t=await function(t,e){const n=Qi(t),i=hr.now(),r=e.reduce(((t,e)=>t.add(e.key)),Go());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Fo(),c=Go();return n.Ui.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=To(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new ko(t.key,e,ps(e.value.mapValue),vo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Bo(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.oc[t.currentUser.toKey()];i||(i=new Rr(lr)),i=i.insert(e,n),t.oc[t.currentUser.toKey()]=i}(i,t.batchId,n),await Yl(i,t.changes),await il(i.remoteStore)}catch(t){const e=vl(t,"Failed to persist write");n.reject(e)}}async function Fl(t,e){const n=Qi(t);try{const t=await _c(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ic.get(e);i&&(Xi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Xu=!0:t.modifiedDocuments.size>0?Xi(i.Xu):t.removedDocuments.size>0&&(Xi(i.Xu),i.Xu=!1))})),await Yl(n,t,e)}catch(t){await Ar(t)}}function jl(t,e,n){const i=Qi(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.tc.forEach(((n,i)=>{const r=i.view.Eu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Qi(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Eu(e)&&(i=!0)})),i&&Cl(n)}(i.eventManager,e),t.length&&i.Zu.Go(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Vl(t,e,n){const i=Qi(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.ic.get(e),s=r&&r.key;if(s){let t=new Rr(vr.comparator);t=t.insert(s,ms.newNoDocument(s,dr.min()));const n=Go().add(s),r=new Yo(dr.min(),new Map,new Pr(lr),t,n);await Fl(i,r),i.sc=i.sc.remove(s),i.ic.delete(e),Ql(i)}else await Tc(i.localStore,e,!1).then((()=>Wl(i,e,n))).catch(Ar)}async function Bl(t,e){const n=Qi(t),i=e.batch.batchId;try{const t=await vc(n.localStore,e);zl(n,i,null),Hl(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Yl(n,t)}catch(t){await Ar(t)}}async function ql(t,e,n){const i=Qi(t);try{const t=await function(t,e){const n=Qi(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Xi(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);zl(i,e,n),Hl(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Yl(i,t)}catch(n){await Ar(n)}}function Hl(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function zl(t,e,n){const i=Qi(t);let r=i.oc[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.oc[i.currentUser.toKey()]=r}}function Wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ec.get(e))t.tc.delete(i),n&&t.Zu.lc(i,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Kl(t,e)}))}function Kl(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(zc(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ql(t))}function Gl(t,e,n){for(const i of n)i instanceof Ol?(t.rc.addReference(i.key,e),Xl(t,i)):i instanceof Nl?(Hi("SyncEngine","Document no longer in limbo: "+i.key),t.rc.removeReference(i.key,e),t.rc.containsKey(i.key)||Kl(t,i.key)):Gi()}function Xl(t,e){const n=e.key,i=n.path.canonicalString();t.sc.get(n)||t.nc.has(i)||(Hi("SyncEngine","New document in limbo: "+n),t.nc.add(i),Ql(t))}function Ql(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new vr(pr.fromString(e)),i=t.cc.next();t.ic.set(i,new Dl(n)),t.sc=t.sc.insert(n,i),Hc(t.remoteStore,new Ha(Hs($s(n.path)),i,2,Sr.ot))}}async function Yl(t,e,n){const i=Qi(t),r=[],s=[],o=[];i.tc.isEmpty()||(i.tc.forEach(((t,a)=>{o.push(i.hc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=dc.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Zu.Go(r),await async function(t,e){const n=Qi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>kr.forEach(e,(e=>kr.forEach(e.Pi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>kr.forEach(e.vi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Cr(t))throw t;Hi("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.$i.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.$i=n.$i.insert(t,r)}}}(i.localStore,s))}async function Jl(t,e){const n=Qi(t);if(!n.currentUser.isEqual(e)){Hi("SyncEngine","User change. New user:",e.toKey());const t=await gc(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Ji(Yi.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Yl(n,t.Ki)}}function Zl(t,e){const n=Qi(t),i=n.ic.get(e);if(i&&i.Xu)return Go().add(i.key);{let t=Go();const i=n.ec.get(e);if(!i)return t;for(const e of i){const i=n.tc.get(e);t=t.unionWith(i.view.qu)}return t}}function tu(t){const e=Qi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vl.bind(null,e),e.Zu.Go=Al.bind(null,e.eventManager),e.Zu.lc=kl.bind(null,e.eventManager),e}function eu(t){const e=Qi(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ql.bind(null,e),e}class nu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Lc(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return mc(this.persistence,new fc,t.initialUser,this.wt)}_c(t){return new lc(hc.Ms,this.wt)}dc(t){return new Cc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>jl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jl.bind(null,this.syncEngine),await fl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new El}createDatastore(t){const e=Lc(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Rc(i));var i;return function(t,e,n,i){return new Fc(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>jl(this.syncEngine,t,0),s=Oc.V()?new Oc:new Sc,new Vc(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Ll(t,e,n,i,r,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Qi(t);Hi("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await qc(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
class ru{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class su{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ji.UNAUTHENTICATED,this.clientId=cr.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ji(Yi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=vl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ou(t,e){t.asyncQueue.verifyOperationInProgress(),Hi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await gc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function au(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cu(t);Hi("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>dl(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>dl(e.remoteStore,n))),t.onlineComponents=e}async function cu(t){return t.offlineComponents||(Hi("FirestoreClient","Using default OfflineComponentProvider"),await ou(t,new nu)),t.offlineComponents}async function lu(t){return t.onlineComponents||(Hi("FirestoreClient","Using default OnlineComponentProvider"),await au(t,new iu)),t.onlineComponents}function uu(t){return lu(t).then((t=>t.syncEngine))}async function hu(t){const e=await lu(t),n=e.eventManager;return n.onListen=Pl.bind(null,e.syncEngine),n.onUnlisten=Ul.bind(null,e.syncEngine),n}function du(t,e,n={}){const i=new Zi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new ru({next:s=>{e.enqueueAndForget((()=>Il(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new Ji(Yi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new Ji(Yi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Sl($s(n.path),s,{includeMetadataChanges:!0,Du:!0});return Tl(t,o)}(await hu(t),t.asyncQueue,e,n,i))),i.promise}function fu(t,e,n={}){const i=new Zi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new ru({next:n=>{e.enqueueAndForget((()=>Il(t,o))),n.fromCache&&"server"===i.source?r.reject(new Ji(Yi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Sl(n,s,{includeMetadataChanges:!0,Du:!0});return Tl(t,o)}(await hu(t),t.asyncQueue,e,n,i))),i.promise}const pu=new Map;
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
 */function mu(t,e,n){if(!n)throw new Ji(Yi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gu(t,e,n,i){if(!0===e&&!0===i)throw new Ji(Yi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vu(t){if(!vr.isDocumentKey(t))throw new Ji(Yi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yu(t){if(vr.isDocumentKey(t))throw new Ji(Yi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _u(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Gi()}function bu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ji(Yi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new Ji(Yi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class wu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ji(Yi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ji(Yi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Eu{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wu({}),this._settingsFrozen=!1,t instanceof Kr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ji(Yi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kr(t.options.projectId)}(t))}get app(){if(!this._app)throw new Ji(Yi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ji(Yi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new er;switch(t.type){case"gapi":const e=t.client;return Xi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new rr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ji(Yi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pu.get(t);e&&(Hi("ComponentProvider","Removing Datastore"),pu.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class Tu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Au(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tu(this.firestore,t,this._key)}}class Iu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Iu(this.firestore,t,this._query)}}class Au extends Iu{constructor(t,e,n){super(t,e,$s(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tu(this.firestore,null,new vr(t))}withConverter(t){return new Au(this.firestore,t,this._path)}}function ku(t,e,...n){if(t=(0,a.m9)(t),mu("collection","path",e),t instanceof Eu){const i=pr.fromString(e,...n);return yu(i),new Au(t,null,i)}{if(!(t instanceof Tu||t instanceof Au))throw new Ji(Yi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(pr.fromString(e,...n));return yu(i),new Au(t.firestore,null,i)}}function Cu(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=cr.I()),mu("doc","path",e),t instanceof Eu){const i=pr.fromString(e,...n);return vu(i),new Tu(t,null,new vr(i))}{if(!(t instanceof Tu||t instanceof Au))throw new Ji(Yi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(pr.fromString(e,...n));return vu(i),new Tu(t.firestore,t instanceof Au?t.converter:null,new vr(i))}}
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
class Su{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pc(this,"async_queue_retry"),this.Kc=()=>{const t=Dc();t&&Hi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Dc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Dc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Zi;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(E){if(!Cr(E))throw E;Hi("AsyncQueue","Operation failed with retryable error: "+E)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw zi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=gl.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&Gi()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Ou extends Eu{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Su,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ru(this),this._firestoreClient.terminate()}}function Nu(t=(0,r.Mq)()){return(0,r.qX)(t,"firestore").getImmediate()}function xu(t){return t._firestoreClient||Ru(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ru(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Wr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new su(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
class Du{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ji(Yi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Lu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Lu($r.fromBase64String(t))}catch(t){throw new Ji(Yi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Lu($r.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Pu{constructor(t){this._methodName=t}}
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
 */class Mu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ji(Yi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ji(Yi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lr(this._lat,t._lat)||lr(this._long,t._long)}}
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
 */const Uu=/^__.*__$/;class $u{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ko(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ao(t,this.data,e,this.fieldTransforms)}}class Fu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ko(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ju(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gi()}}class Vu{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Vu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.sa(t),i}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return nh(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(ju(this.Zc)&&Uu.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Bu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Lc(t)}aa(t,e,n,i=!1){return new Vu({Zc:t,methodName:e,ca:n,path:gr.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function qu(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new Bu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hu(t,e,n,i,r,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,r);Ju("Data must be an object, but it was:",o,i);const a=Qu(i,o);let c,l;if(s.merge)c=new Ur(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Zu(e,i,n);if(!o.contains(r))throw new Ji(Yi.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);ih(t,r)||t.push(r)}c=new Ur(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new $u(new fs(a),c,l)}class zu extends Pu{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zu}}function Wu(t,e,n,i){const r=t.aa(1,e,n);Ju("Data must be an object, but it was:",r,i);const s=[],o=fs.empty();Nr(i,((t,i)=>{const c=eh(e,t,n);i=(0,a.m9)(i);const l=r.ia(c);if(i instanceof zu)s.push(c);else{const t=Xu(i,l);null!=t&&(s.push(c),o.set(c,t))}}));const c=new Ur(s);return new Fu(o,c,r.fieldTransforms)}function Ku(t,e,n,i,r,s){const o=t.aa(1,e,n),c=[Zu(e,i,n)],l=[r];if(s.length%2!=0)throw new Ji(Yi.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Zu(e,s[a])),l.push(s[a+1]);const u=[],h=fs.empty();for(let f=c.length-1;f>=0;--f)if(!ih(u,c[f])){const t=c[f];let e=l[f];e=(0,a.m9)(e);const n=o.ia(t);if(e instanceof zu)u.push(t);else{const i=Xu(e,n);null!=i&&(u.push(t),h.set(t,i))}}const d=new Ur(u);return new Fu(h,d,o.fieldTransforms)}function Gu(t,e,n,i=!1){return Xu(n,t.aa(i?4:3,e))}function Xu(t,e){if(Yu(t=(0,a.m9)(t)))return Ju("Unsupported field value:",e,t),Qu(t,e);if(t instanceof Pu)return function(t,e){if(!ju(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Xu(r,e.ra(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return eo(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hr.fromDate(t);return{timestampValue:la(e.wt,n)}}if(t instanceof hr){const n=new hr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:la(e.wt,n)}}if(t instanceof Mu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Lu)return{bytesValue:ua(e.wt,t._byteString)};if(t instanceof Tu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${_u(t)}`)}(t,e)}function Qu(t,e){const n={};return xr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nr(t,((t,i)=>{const r=Xu(i,e.ea(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Yu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hr||t instanceof Mu||t instanceof Lu||t instanceof Tu||t instanceof Pu)}function Ju(t,e,n){if(!Yu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=_u(n);throw"an object"===i?e.oa(t+" a custom object"):e.oa(t+" "+i)}}function Zu(t,e,n){if((e=(0,a.m9)(e))instanceof Du)return e._internalPath;if("string"==typeof e)return eh(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const th=new RegExp("[~\\*/\\[\\]]");function eh(t,e,n){if(e.search(th)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Du(...e.split("."))._internalPath}catch(i){throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Ji(Yi.INVALID_ARGUMENT,a+t+c)}function ih(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class rh{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Tu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new sh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(oh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class sh extends rh{data(){return super.data()}}function oh(t,e){return"string"==typeof e?eh(t,e):e instanceof Du?e._internalPath:e._delegate._internalPath}
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
 */class ah{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ch extends rh{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(oh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lh extends ch{data(t={}){return super.data(t)}}class uh{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ah(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new lh(this._firestore,this._userDataWriter,n.key,n,new ah(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ji(Yi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new lh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ah(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new lh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ah(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:hh(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function hh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gi()}}
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
function dh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Ji(Yi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fh{}function ph(t,...e){for(const n of e)t=n._apply(t);return t}class mh extends fh{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=qu(t.firestore),n=function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Ji(Yi.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){bh(o,s);const e=[];for(const n of o)e.push(_h(i,t,n));a={arrayValue:{values:e}}}else a=_h(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||bh(o,s),a=Gu(n,e,o,"in"===s||"not-in"===s);const c=Es.create(r,s,a);return function(t,e){if(e.ht()){const n=Vs(t);if(null!==n&&!n.isEqual(e.field))throw new Ji(Yi.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=js(t);null!==i&&wh(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Ji(Yi.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Ji(Yi.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new Iu(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function gh(t,e,n){const i=e,r=oh("where",t);return new mh(r,i,n)}class vh extends fh{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Ji(Yi.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Ji(Yi.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Rs(e,n);return function(t,e){if(null===js(t)){const n=Vs(t);null!==n&&wh(t,n,e.field)}}(t,i),i}(t._query,this.fa,this.wa);return new Iu(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ms(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function yh(t,e="asc"){const n=e,i=oh("orderBy",t);return new vh(i,n)}function _h(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Ji(Yi.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bs(e)&&-1!==n.indexOf("/"))throw new Ji(Yi.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(pr.fromString(n));if(!vr.isDocumentKey(i))throw new Ji(Yi.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ss(t,new vr(i))}if(n instanceof Tu)return ss(t,n._key);throw new Ji(Yi.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_u(n)}.`)}function bh(t,e){if(!Array.isArray(t)||0===t.length)throw new Ji(Yi.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Ji(Yi.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function wh(t,e,n){if(!n.isEqual(e))throw new Ji(Yi.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
class Eh{convertValue(t,e="none"){switch(Jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Br(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Gi()}}convertObject(t,e){const n={};return Nr(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Mu(Vr(t.latitude),Vr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Hr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(zr(t));default:return null}}convertTimestamp(t){const e=jr(t);return new hr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=pr.fromString(t);Xi(Ua(n));const i=new Kr(n.get(1),n.get(3)),r=new vr(n.popFirst(5));return i.isEqual(e)||zi(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
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
 */function Th(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
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
function Ih(t){t=bu(t,Tu);const e=bu(t.firestore,Ou);return du(xu(e),t._key).then((n=>Nh(e,t,n)))}class Ah extends Eh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Lu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tu(this.firestore,null,e)}}function kh(t){t=bu(t,Iu);const e=bu(t.firestore,Ou),n=xu(e),i=new Ah(e);return dh(t._query),fu(n,t._query).then((n=>new uh(e,i,t,n)))}function Ch(t,e,n,...i){t=bu(t,Tu);const r=bu(t.firestore,Ou),s=qu(r);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof Du?Ku(s,"updateDoc",t._key,e,n,i):Wu(s,"updateDoc",t._key,e),Oh(r,[o.toMutation(t._key,vo.exists(!0))])}function Sh(t,e){const n=bu(t.firestore,Ou),i=Cu(t),r=Th(t.converter,e);return Oh(n,[Hu(qu(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,vo.exists(!1))]).then((()=>i))}function Oh(t,e){return function(t,e){const n=new Zi;return t.asyncQueue.enqueueAndForget((async()=>$l(await uu(t),e,n))),n.promise}(xu(t),e)}function Nh(t,e,n){const i=n.docs.get(e._key),r=new Ah(t);return new ch(t,r,e._key,i,new ah(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){!function(t){Vi=t}(r.Jn),(0,r.Xd)(new s.wA("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new Ou(i,new nr(t.getProvider("auth-internal")),new or(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),(0,r.KN)(Fi,"3.4.13",t),(0,r.KN)(Fi,"3.4.13","esm2017")}()},1992:function(t,e,n){"use strict";n.d(e,{Jt:function(){return Zt},cF:function(){return ee},iH:function(){return te},KV:function(){return Jt}});n(2801),n(8675),n(3462),n(6699),n(1703);var i=n(7077),r=n(223),s=n(7142);
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
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
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
class u extends r.ZR{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new u("unknown",t)}function f(t){return new u("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new u("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u("unauthenticated",t)}function g(){return new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new u("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _(){return new u("canceled","User canceled the upload/download.")}function b(t){return new u("invalid-url","Invalid URL '"+t+"'.")}function w(t){return new u("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function E(){return new u("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new u("no-download-url","The given file does not have any download URLs.")}function A(t){return new u("invalid-argument",t)}function k(){return new u("app-deleted","The Firebase app was deleted.")}function C(t){return new u("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(t,e){return new u("invalid-format","String does not match format '"+t+"': "+e)}function O(t){throw new u("internal-error","Internal error: "+t)}
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
 */class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(i){return new N(t,"")}if(""===n.path)return n;throw w(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:r},{regex:f,indices:p,postModify:l},{regex:v,indices:y,postModify:l}];for(let o=0;o<_.length;o++){const e=_[o],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new N(t,r),e.postModify(n);break}}if(null==n)throw b(t);return n}}class x{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function R(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);const n=c()||o;if(n)return d(),void u.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function m(t){p||(p=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function D(t){t(!1)}
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
 */function L(t){return void 0!==t}function P(t){return"object"===typeof t&&!Array.isArray(t)}function M(t){return"string"===typeof t||t instanceof String}function U(t){return $()&&t instanceof Blob}function $(){return"undefined"!==typeof Blob}function F(t,e,n,i){if(i<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function j(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function V(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
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
class q{constructor(t,e,n,i,r,s,o,a,c,l,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new H(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===B.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===B.ABORT;return void t(!1,new H(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new H(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());L(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=d();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?k():_();i(t)}else{const t=y();i(t)}};this.canceled_?e(!1,new H(!1,null,!0)):this.backoffId_=R(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],i=-1!==n.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||i||r}}class H{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function W(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function K(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function X(t,e,n,i,r,s){const o=V(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return K(c,e),z(c,n),W(c,s),G(c,i),new q(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
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
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Y(...t){const e=Q();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if($())return new Blob(t);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}function J(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class et{constructor(t,e){this.data=t,this.contentType=e||null}}function nt(t,e){switch(t){case tt.RAW:return new et(it(e));case tt.BASE64:case tt.BASE64URL:return new et(st(t,e));case tt.DATA_URL:return new et(at(e),ct(e))}throw d()}function it(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function rt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw S(tt.DATA_URL,"Malformed data URL.")}return it(e)}function st(t,e){switch(t){case tt.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw S(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case tt.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw S(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z(e)}catch(r){throw S(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class ot{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw S(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=lt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function at(t){const e=new ot(t);return e.base64?st(tt.BASE64,e.rest):rt(e.rest)}function ct(t){const e=new ot(t);return e.contentType}function lt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class ut{constructor(t,e){let n=0,i="";U(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(U(this.data_)){const n=this.data_,i=J(n,t,e);return null===i?null:new ut(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ut(n,!0)}}static getBlob(...t){if($()){const e=t.map((t=>t instanceof ut?t.data_:t));return new ut(Y.apply(null,e))}{const e=t.map((t=>M(t)?nt(tt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]})),new ut(i,!0)}}uploadData(){return this.data_}}
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
 */function mt(t,e){return e}class gt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||mt}}let vt=null;function yt(t){return!M(t)||t.length<2?t:pt(t)}function _t(){if(vt)return vt;const t=[];function e(t,e){return yt(e)}t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));const n=new gt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new gt("size");return r.xform=i,t.push(r),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),vt=t,vt}function bt(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new N(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function wt(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return bt(i,t),i}function Et(t,e,n){const i=ht(e);if(null===i)return null;const r=i;return wt(t,r,n)}function Tt(t,e,n,i){const r=ht(e);if(null===r)return null;if(!M(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=j(a,n,i),l=V({alt:"media",token:e});return c+l}));return c[0]}function It(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
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
 */class At{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function kt(t){if(!t)throw d()}function Ct(t,e){function n(n,i){const r=Et(t,i,e);return kt(null!==r),r}return n}function St(t,e){function n(n,i){const r=Et(t,i,e);return kt(null!==r),Tt(r,i,t.host,t._protocol)}return n}function Ot(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===e.getStatus()?p(t.bucket):403===e.getStatus()?v(t.path):n,i.serverResponse=n.serverResponse,i}return e}function Nt(t){const e=Ot(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=f(t.path)),r.serverResponse=i.serverResponse,r}return n}function xt(t,e,n){const i=e.fullServerUrl(),r=j(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new At(r,s,St(t,n),o);return a.errorHandler=Nt(e),a}function Rt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Dt(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Rt(null,e)),i}function Lt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Dt(e,i,r),u=It(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ut.getBlob(h,i,d);if(null===f)throw T();const p={name:l["fullPath"]},m=j(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new At(m,g,Ct(t,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Ot(e),y}
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
let Pt=null;class Mt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=B.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=B.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=B.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Ut extends Mt{initXhr(){this.xhr_.responseType="text"}}function $t(){return Pt?Pt():new Ut}
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
class Ft{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ft(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pt(this._location.path)}get storage(){return this._service}get parent(){const t=dt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new Ft(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw C(t)}}function jt(t,e,n){t._throwIfRoot("uploadBytes");const i=Lt(t.storage,t._location,_t(),new ut(e,!0),n);return t.storage.makeRequestWithTokens(i,$t).then((e=>({metadata:e,ref:t})))}function Vt(t){t._throwIfRoot("getDownloadURL");const e=xt(t.storage,t._location,_t());return t.storage.makeRequestWithTokens(e,$t).then((t=>{if(null===t)throw I();return t}))}function Bt(t,e){const n=ft(t._location.path,e),i=new N(t._location.bucket,n);return new Ft(t.storage,i)}
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
 */function qt(t){return/^[A-Za-z]+:\/\//.test(t)}function Ht(t,e){return new Ft(t,e)}function zt(t,e){if(t instanceof Gt){const n=t;if(null==n._bucket)throw E();const i=new Ft(n,n._bucket);return null!=e?zt(i,e):i}return void 0!==e?Bt(t,e):t}function Wt(t,e){if(e&&qt(e)){if(t instanceof Gt)return Ht(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return zt(t,e)}function Kt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}class Gt{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?N.makeFromBucketSpec(i,this._host):Kt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=Kt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ft(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new x(k());{const r=X(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Xt="@firebase/storage",Qt="0.9.9",Yt="storage";function Jt(t,e,n){return t=(0,r.m9)(t),jt(t,e,n)}function Zt(t){return t=(0,r.m9)(t),Vt(t)}function te(t,e){return t=(0,r.m9)(t),Wt(t,e)}function ee(t=(0,i.Mq)(),e){t=(0,r.m9)(t);const n=(0,i.qX)(t,Yt),s=n.getImmediate({identifier:e});return s}function ne(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Gt(n,r,s,e,i.Jn)}function ie(){(0,i.Xd)(new s.wA(Yt,ne,"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Xt,Qt,""),(0,i.KN)(Xt,Qt,"esm2017")}ie()},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n}},678:function(t,e,n){"use strict";n.d(e,{p7:function(){return ne},r5:function(){return W},tv:function(){return se},yj:function(){return oe}});n(6699),n(1703);var i=n(3396),r=n(4870);
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>s?Symbol(t):"_vr_"+t,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(t){return t.__esModule||s&&"Module"===t[Symbol.toStringTag]}const p=Object.assign;function m(t,e){const n={};for(const i in e){const r=e[i];n[i]=Array.isArray(r)?r.map(t):t(r)}return n}const g=()=>{};const v=/\/$/,y=t=>t.replace(v,"");function _(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),r=t(s)),c>-1&&(i=i||e.slice(0,c),o=e.slice(c,e.length)),i=C(null!=i?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function E(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&T(e.matched[i],n.matched[r])&&I(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function T(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function I(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!A(t[n],e[n]))return!1;return!0}function A(t,e){return Array.isArray(t)?k(t,e):Array.isArray(e)?k(e,t):t===e}function k(t,e){return Array.isArray(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function C(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var S,O;(function(t){t["pop"]="pop",t["push"]="push"})(S||(S={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(O||(O={}));function N(t){if(!t)if(d){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),y(t)}const x=/^[^#]+#/;function R(t,e){return t.replace(x,"#")+e}function D(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(t){let e;if("el"in t){const n=t.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=D(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function M(t,e){const n=history.state?history.state.position-e:-1;return n+t}const U=new Map;function $(t,e){U.set(t,e)}function F(t){const e=U.get(t);return U.delete(t),e}let j=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let e=r.includes(t.slice(s))?t.slice(s).length:1,n=r.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,t);return o+i+r}function B(t,e,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=V(t,location),c=n.value,l=e.value;let u=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach((t=>{t(n.value,c,{delta:u,type:S.pop,direction:u?u>0?O.forward:O.back:O.unknown})}))};function c(){o=n.value}function l(t){r.push(t);const e=()=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)};return s.push(e),e}function u(){const{history:t}=window;t.state&&t.replaceState(p({},t.state,{scroll:L()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function q(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?L():null}}function H(t){const{history:e,location:n}=window,i={value:V(t,n)},r={value:e.state};function s(i,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+i:j()+t+i;try{e[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(t,n){const o=p({},e.state,q(r.value.back,t,r.value.forward,!0),n,{position:r.value.position});s(t,o,!0),i.value=t}function a(t,n){const o=p({},r.value,e.state,{forward:t,scroll:L()});s(o.current,o,!0);const a=p({},q(i.value,t,null),{position:o.position+1},n);s(t,a,!1),i.value=t}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function z(t){t=N(t);const e=H(t),n=B(t,e.state,e.location,e.replace);function i(t,e=!0){e||n.pauseListeners(),history.go(t)}const r=p({location:"",base:t,go:i,createHref:R.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function W(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),z(t)}function K(t){return"string"===typeof t||t&&"object"===typeof t}function G(t){return"string"===typeof t||"symbol"===typeof t}const X={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=o("nf");var Y;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Y||(Y={}));function J(t,e){return p(new Error,{type:t,[Q]:!0},e)}function Z(t,e){return t instanceof Error&&Q in t&&(null==e||!!(t.type&e))}const tt="[^/]+?",et={sensitive:!1,strict:!1,start:!0,end:!0},nt=/[.+*?^${}()[\]/\\]/g;function it(t,e){const n=p({},et,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const t=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let e=0;e<u.length;e++){const i=u[e];let o=40+(n.sensitive?.25:0);if(0===i.type)e||(r+="/"),r+=i.value.replace(nt,"\\$&"),o+=40;else if(1===i.type){const{value:t,repeatable:n,optional:a,regexp:c}=i;s.push({name:t,repeatable:n,optional:a});const h=c||tt;if(h!==tt){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}i.push(t)}if(n.strict&&n.end){const t=i.length-1;i[t][i[t].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let i=1;i<e.length;i++){const t=e[i]||"",r=s[i-1];n[r.name]=t&&r.repeatable?t.split("/"):t}return n}function c(e){let n="",i=!1;for(const r of t){i&&n.endsWith("/")||(n+="/"),i=!1;for(const s of r)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:c}=s,l=o in e?e[o]:"";if(Array.isArray(l)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!c)throw new Error(`Missing required param "${o}"`);r.length<2&&t.length>1&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=u}}return n}return{re:o,score:i,keys:s,parse:a,stringify:c}}function rt(t,e){let n=0;while(n<t.length&&n<e.length){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function st(t,e){let n=0;const i=t.score,r=e.score;while(n<i.length&&n<r.length){const t=rt(i[n],r[n]);if(t)return t;n++}return r.length-i.length}const ot={type:0,value:""},at=/[a-zA-Z0-9_]/;function ct(t){if(!t)return[[]];if("/"===t)return[[ot]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:at.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else i=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function lt(t,e,n){const i=it(ct(t.path),n);const r=p(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf===!e.record.aliasOf&&e.children.push(r),r}function ut(t,e){const n=[],i=new Map;function r(t){return i.get(t)}function s(t,n,i){const r=!i,a=dt(t);a.aliasOf=i&&i.record;const l=gt(e,t),u=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)u.push(p({},a,{components:i?i.record.components:a.components,path:t,aliasOf:i?i.record:a}))}let h,d;for(const e of u){const{path:u}=e;if(n&&"/"!==u[0]){const t=n.record.path,i="/"===t[t.length-1]?"":"/";e.path=n.record.path+(u&&i+u)}if(h=lt(e,n,l),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),r&&t.name&&!pt(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,i&&i.children[e])}i=i||h,c(h)}return d?()=>{o(d)}:g}function o(t){if(G(t)){const e=i.get(t);e&&(i.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&i.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&st(t,n[e])>=0&&(t.record.path!==n[e].record.path||!vt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!pt(t)&&i.set(t.record.name,t)}function l(t,e){let r,s,o,a={};if("name"in t&&t.name){if(r=i.get(t.name),!r)throw J(1,{location:t});o=r.record.name,a=p(ht(e.params,r.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),s=r.stringify(a)}else if("path"in t)s=t.path,r=n.find((t=>t.re.test(s))),r&&(a=r.parse(s),o=r.record.name);else{if(r=e.name?i.get(e.name):n.find((t=>t.re.test(e.path))),!r)throw J(1,{location:t,currentLocation:e});o=r.record.name,a=p({},e.params,t.params),s=r.stringify(a)}const c=[];let l=r;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:mt(c)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ht(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function dt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ft(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ft(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]="boolean"===typeof n?n:n[i];return e}function pt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mt(t){return t.reduce(((t,e)=>p(t,e.meta)),{})}function gt(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function vt(t,e){return e.children.some((e=>e===t||vt(t,e)))}const yt=/#/g,_t=/&/g,bt=/\//g,wt=/=/g,Et=/\?/g,Tt=/\+/g,It=/%5B/g,At=/%5D/g,kt=/%5E/g,Ct=/%60/g,St=/%7B/g,Ot=/%7C/g,Nt=/%7D/g,xt=/%20/g;function Rt(t){return encodeURI(""+t).replace(Ot,"|").replace(It,"[").replace(At,"]")}function Dt(t){return Rt(t).replace(St,"{").replace(Nt,"}").replace(kt,"^")}function Lt(t){return Rt(t).replace(Tt,"%2B").replace(xt,"+").replace(yt,"%23").replace(_t,"%26").replace(Ct,"`").replace(St,"{").replace(Nt,"}").replace(kt,"^")}function Pt(t){return Lt(t).replace(wt,"%3D")}function Mt(t){return Rt(t).replace(yt,"%23").replace(Et,"%3F")}function Ut(t){return null==t?"":Mt(t).replace(bt,"%2F")}function $t(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ft(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],i=(n?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const t=i[r].replace(Tt," "),n=t.indexOf("="),s=$t(n<0?t:t.slice(0,n)),o=n<0?null:$t(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function jt(t){let e="";for(let n in t){const i=t[n];if(n=Pt(n),null==i){void 0!==i&&(e+=(e.length?"&":"")+n);continue}const r=Array.isArray(i)?i.map((t=>t&&Lt(t))):[i&&Lt(i)];r.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Vt(t){const e={};for(const n in t){const i=t[n];void 0!==i&&(e[n]=Array.isArray(i)?i.map((t=>null==t?null:""+t)):null==i?i:""+i)}return e}function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(J(4,{from:n,to:e})):t instanceof Error?a(t):K(t)?a(J(2,{from:e,to:t})):(s&&i.enterCallbacks[r]===s&&"function"===typeof t&&s.push(t),o())},l=t.call(i&&i.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch((t=>a(t)))}))}function Ht(t,e,n,i){const r=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(zt(o)){const a=o.__vccOpts||o,c=a[e];c&&r.push(qt(c,n,i,s,t))}else{let a=o();0,r.push((()=>a.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=f(r)?r.default:r;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&qt(c,n,i,s,t)()}))))}}return r}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Wt(t){const e=(0,i.f3)(l),n=(0,i.f3)(u),s=(0,i.Fl)((()=>e.resolve((0,r.SU)(t.to)))),o=(0,i.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,i=t[e-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(T.bind(null,i));if(o>-1)return o;const a=Yt(t[e-2]);return e>1&&Yt(i)===a&&r[r.length-1].path!==a?r.findIndex(T.bind(null,t[e-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Qt(n.params,s.value.params))),c=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&I(n.params,s.value.params)));function h(n={}){return Xt(n)?e[(0,r.SU)(t.replace)?"replace":"push"]((0,r.SU)(t.to)).catch(g):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const Kt=(0,i.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wt,setup(t,{slots:e}){const n=(0,r.qj)(Wt(t)),{options:s}=(0,i.f3)(l),o=(0,i.Fl)((()=>({[Jt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=e.default&&e.default(n);return t.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Gt=Kt;function Xt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const i=e[n],r=t[n];if("string"===typeof i){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some(((t,e)=>t!==r[e])))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,i.f3)(h),o=(0,i.Fl)((()=>t.route||s.value)),l=(0,i.f3)(c,0),u=(0,i.Fl)((()=>o.value.matched[l]));(0,i.JJ)(c,l+1),(0,i.JJ)(a,u),(0,i.JJ)(h,o);const d=(0,r.iH)();return(0,i.YP)((()=>[d.value,u.value,t.name]),(([t,e,n],[i,r,s])=>{e&&(e.instances[n]=t,r&&r!==e&&t&&t===i&&(e.leaveGuards.size||(e.leaveGuards=r.leaveGuards),e.updateGuards.size||(e.updateGuards=r.updateGuards))),!t||!e||r&&T(e,r)&&i||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const r=o.value,s=u.value,a=s&&s.components[t.name],c=t.name;if(!a)return te(n.default,{Component:a,route:r});const l=s.props[t.name],h=l?!0===l?r.params:"function"===typeof l?l(r):l:null,f=t=>{t.component.isUnmounted&&(s.instances[c]=null)},m=(0,i.h)(a,p({},h,e,{onVnodeUnmounted:f,ref:d}));return te(n.default,{Component:m,route:r})||m}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=ut(t.routes,t),n=t.parseQuery||Ft,s=t.stringifyQuery||jt,o=t.history;const a=Bt(),c=Bt(),f=Bt(),v=(0,r.XI)(X);let y=X;d&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=m.bind(null,(t=>""+t)),T=m.bind(null,Ut),I=m.bind(null,$t);function A(t,n){let i,r;return G(t)?(i=e.getRecordMatcher(t),r=n):r=t,e.addRoute(r,i)}function k(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function O(t){return!!e.getRecordMatcher(t)}function N(t,i){if(i=p({},i||v.value),"string"===typeof t){const r=_(n,t,i.path),s=e.resolve({path:r.path},i),a=o.createHref(r.fullPath);return p(r,s,{params:I(s.params),hash:$t(r.hash),redirectedFrom:void 0,href:a})}let r;if("path"in t)r=p({},t,{path:_(n,t.path,i.path).path});else{const e=p({},t.params);for(const t in e)null==e[t]&&delete e[t];r=p({},t,{params:T(t.params)}),i.params=T(i.params)}const a=e.resolve(r,i),c=t.hash||"";a.params=w(I(a.params));const l=b(s,p({},t,{hash:Dt(c),path:a.path})),u=o.createHref(l);return p({fullPath:l,hash:c,query:s===jt?Vt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:u})}function x(t){return"string"===typeof t?_(n,t,v.value.path):p({},t)}function R(t,e){if(y!==t)return J(8,{from:e,to:t})}function D(t){return V(t)}function U(t){return D(p(x(t),{replace:!0}))}function j(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let i="function"===typeof n?n(t):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=x(i):{path:i},i.params={}),p({query:t.query,hash:t.hash,params:t.params},i)}}function V(t,e){const n=y=N(t),i=v.value,r=t.state,o=t.force,a=!0===t.replace,c=j(n);if(c)return V(p(x(c),{state:r,force:o,replace:a}),e||n);const l=n;let u;return l.redirectedFrom=e,!o&&E(s,i,n)&&(u=J(16,{to:l,from:i}),rt(i,i,!0,!1)),(u?Promise.resolve(u):q(l,i)).catch((t=>Z(t)?Z(t,2)?t:it(t):et(t,l,i))).then((t=>{if(t){if(Z(t,2))return V(p(x(t.to),{state:r,force:o,replace:a}),e||l)}else t=z(l,i,!0,a,r);return H(l,i,t),t}))}function B(t,e){const n=R(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[i,r,s]=re(t,e);n=Ht(i.reverse(),"beforeRouteLeave",t,e);for(const a of i)a.leaveGuards.forEach((i=>{n.push(qt(i,t,e))}));const o=B.bind(null,t,e);return n.push(o),ie(n).then((()=>{n=[];for(const i of a.list())n.push(qt(i,t,e));return n.push(o),ie(n)})).then((()=>{n=Ht(r,"beforeRouteUpdate",t,e);for(const i of r)i.updateGuards.forEach((i=>{n.push(qt(i,t,e))}));return n.push(o),ie(n)})).then((()=>{n=[];for(const i of t.matched)if(i.beforeEnter&&!e.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const r of i.beforeEnter)n.push(qt(r,t,e));else n.push(qt(i.beforeEnter,t,e));return n.push(o),ie(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Ht(s,"beforeRouteEnter",t,e),n.push(o),ie(n)))).then((()=>{n=[];for(const i of c.list())n.push(qt(i,t,e));return n.push(o),ie(n)})).catch((t=>Z(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const i of f.list())i(t,e,n)}function z(t,e,n,i,r){const s=R(t,e);if(s)return s;const a=e===X,c=d?history.state:{};n&&(i||a?o.replace(t.fullPath,p({scroll:a&&c&&c.scroll},r)):o.push(t.fullPath,r)),v.value=t,rt(t,e,n,a),it()}let W;function K(){W||(W=o.listen(((t,e,n)=>{const i=N(t),r=j(i);if(r)return void V(p(r,{replace:!0}),i).catch(g);y=i;const s=v.value;d&&$(M(s.fullPath,n.delta),L()),q(i,s).catch((t=>Z(t,12)?t:Z(t,2)?(V(t.to,i).then((t=>{Z(t,20)&&!n.delta&&n.type===S.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),et(t,i,s)))).then((t=>{t=t||z(i,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===S.pop&&Z(t,20)&&o.go(-1,!1)),H(i,s,t)})).catch(g)})))}let Q,Y=Bt(),tt=Bt();function et(t,e,n){it(t);const i=tt.list();return i.length?i.forEach((i=>i(t,e,n))):console.error(t),Promise.reject(t)}function nt(){return Q&&v.value!==X?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function it(t){return Q||(Q=!t,K(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function rt(e,n,r,s){const{scrollBehavior:o}=t;if(!d||!o)return Promise.resolve();const a=!r&&F(M(e.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>o(e,n,a))).then((t=>t&&P(t))).catch((t=>et(t,e,n)))}const st=t=>o.go(t);let ot;const at=new Set,ct={currentRoute:v,addRoute:A,removeRoute:k,hasRoute:O,getRoutes:C,resolve:N,options:t,push:D,replace:U,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:tt.add,isReady:nt,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.SU)(v)}),d&&!ot&&v.value===X&&(ot=!0,D(o.location).catch((t=>{0})));const n={};for(const r in X)n[r]=(0,i.Fl)((()=>v.value[r]));t.provide(l,e),t.provide(u,(0,r.qj)(n)),t.provide(h,v);const s=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(y=X,W&&W(),W=null,v.value=X,ot=!1,Q=!1),s()}}};return ct}function ie(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>T(t,s)))?i.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>T(t,a)))||r.push(a))}return[n,i,r]}function se(){return(0,i.f3)(l)}function oe(){return(0,i.f3)(u)}},7139:function(t,e,n){"use strict";n.d(e,{MT:function(){return et},oR:function(){return v}});n(1703),n(6699);var i=n(3396),r=n(4870);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",l="plugin:settings:set";let u,h;function d(){var t;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(u=!0,h=n.g.perf_hooks.performance):u=!1),u}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},n);try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(r,e)}catch(s){}this.fallbacks={getSettings(){return r},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(s){}r=t},now(){return f()}},e&&e.on(l,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function m(t,e){const n=t,i=o(),r=s(),l=a&&n.enableEarlyProxy;if(!r||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const t=l?new p(n,r):null,s=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else r.emit(c,t,e)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var g="store";function v(t){return void 0===t&&(t=null),(0,i.f3)(null!==t?t:g)}function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function _(t){return null!==t&&"object"===typeof t}function b(t){return t&&"function"===typeof t.then}function w(t,e){return function(){return t(e)}}function E(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function T(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;A(t,n,[],t._modules.root,!0),I(t,n,e)}function I(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={};y(s,(function(e,n){o[n]=w(e,t),Object.defineProperty(t.getters,n,{get:function(){return o[n]()},enumerable:!0})})),t._state=(0,r.qj)({data:e}),t.strict&&x(t),i&&n&&t._withCommit((function(){i.data=null}))}function A(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=R(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=i.state}))}var l=i.context=k(t,o,n);i.forEachMutation((function(e,n){var i=o+n;S(t,i,e,l)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;O(t,i,r,l)})),i.forEachGetter((function(e,n){var i=o+n;N(t,i,e,l)})),i.forEachChild((function(i,s){A(t,e,n.concat(s),i,r)}))}function k(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=D(n,i,r),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,r){var s=D(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return R(t.state,n)}}}),r}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function S(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function O(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return b(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function N(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function x(t){(0,i.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return _(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var L="vuex bindings",P="vuex:mutations",M="vuex:actions",U="vuex",$=0;function F(t,e){m({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[L]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:j}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:j}),n.addInspector({id:U,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===U)if(n.filter){var i=[];W(i,e._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[z(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===U){var i=n.nodeId;C(e,i),n.state=K(X(e._modules,i),"root"===i?e.getters:e._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===U){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit((function(){n.set(e._state.data,r,n.state.value)}))}})),e.subscribe((function(t,e){var i={};t.payload&&(i.payload=t.payload),i.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(U),n.sendInspectorState(U),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,data:i}})})),e.subscribeAction({before:function(t,e){var i={};t.payload&&(i.payload=t.payload),t._id=$++,t._time=Date.now(),i.state=e,n.addTimelineEvent({layerId:M,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:i}})},after:function(t,e){var i={},r=Date.now()-t._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},t.payload&&(i.payload=t.payload),i.state=e,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:i}})}})}))}var j=8702998,V=6710886,B=16777215,q={label:"namespaced",textColor:B,backgroundColor:V};function H(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function z(t,e){return{id:e||"root",label:H(e),tags:t.namespaced?[q]:[],children:Object.keys(t._children).map((function(n){return z(t._children[n],e+n+"/")}))}}function W(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[q]:[]}),Object.keys(e._children).forEach((function(r){W(t,e._children[r],n,i+r+"/")}))}function K(t,e,n){e="root"===n?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(i.length){var s=G(e);r.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?H(t):t,editable:!1,value:Q((function(){return s[t]}))}}))}return r}function G(t){var e={};return Object.keys(t).forEach((function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach((function(t){r[t]||(r[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),r=r[t]._custom.value})),r[s]=Q((function(){return t[n]}))}else e[n]=Q((function(){return t[n]}))})),e}function X(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,i,r){var s=t[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function Q(t){try{return t()}catch(e){return e}}var Y=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(t,e){this._children[t]=e},Y.prototype.removeChild=function(t){delete this._children[t]},Y.prototype.getChild=function(t){return this._children[t]},Y.prototype.hasChild=function(t){return t in this._children},Y.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Y.prototype.forEachChild=function(t){y(this._children,t)},Y.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},Y.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},Y.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(Y.prototype,J);var Z=function(t){this.register([],t,!1)};function tt(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;tt(t.concat(i),e.getChild(i),n.modules[i])}}Z.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Z.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Z.prototype.update=function(t){tt([],this.root,t)},Z.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new Y(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&y(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},Z.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},Z.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function et(t){return new nt(t)}var nt=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Z(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=i;var l=this._modules.root.state;A(this,l,[],this._modules.root),I(this,l),n.forEach((function(t){return t(e)}))},it={state:{configurable:!0}};nt.prototype.install=function(t,e){t.provide(e||g,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&F(t,this)},it.state.get=function(){return this._state.data},it.state.set=function(t){0},nt.prototype.commit=function(t,e,n){var i=this,r=D(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},nt.prototype.dispatch=function(t,e){var n=this,i=D(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(l){0}e(t)}))}))}},nt.prototype.subscribe=function(t,e){return E(t,this._subscribers,e)},nt.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return E(n,this._actionSubscribers,e)},nt.prototype.watch=function(t,e,n){var r=this;return(0,i.YP)((function(){return t(r.state,r.getters)}),e,Object.assign({},n))},nt.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},nt.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),A(this,this.state,t,this._modules.get(t),n.preserveState),I(this,this.state)},nt.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=R(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),T(this)},nt.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},nt.prototype.hotUpdate=function(t){this._modules.update(t),T(this,!0)},nt.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(nt.prototype,it);ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=at(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=at(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||at(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),ot((function(t,e){var n={};return rt(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=at(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n}));function rt(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||_(t)}function ot(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function at(t,e,n){var i=t._modulesNamespaceMap[n];return i}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});var i=n(7142),r=n(5168),s=n(223);n(6699),n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(E(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const i=t.call(T(this),e,...n);return f.set(i,e.sort?e.sort():[e]),E(i)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),o(t,l())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function I(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const A=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function S(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!A.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return C.set(e,s),s}_((t=>({...t,get:(e,n,i)=>S(e,n)||t.get(e,n,i),has:(e,n)=>!!S(e,n)||t.has(e,n)})));
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
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",R="0.7.29",D=new r.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",$="@firebase/app-check",F="@firebase/auth",j="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",X="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",rt="9.9.1",st="[DEFAULT]",ot={[x]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[$]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[j]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[X]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
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
 */const mt=rt;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw ft.create("bad-app-name",{appName:String(r)});const o=at.get(r);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw ft.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of ct.values())a.addComponent(i);const c=new pt(t,n,a);return at.set(r,c),c}function vt(t=st){const e=at.get(t);if(!e)throw ft.create("no-app",{appName:t});return e}function yt(t,e,n){var r;let s=null!==(r=ot[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}ut(new i.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const _t="firebase-heartbeat-database",bt=1,wt="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=I(_t,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw ft.create("storage-open",{originalErrorMessage:t.message})}))),Et}async function It(t){var e;try{const e=await Tt();return e.transaction(wt).objectStore(wt).get(kt(t))}catch(n){throw ft.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function At(t,e){var n;try{const n=await Tt(),i=n.transaction(wt,"readwrite"),r=i.objectStore(wt);return await r.put(e,kt(t)),i.done}catch(i){throw ft.create("storage-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message})}}function kt(t){return`${t.name}!${t.options.appId}`}
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
 */const Ct=1024,St=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=St})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=Ct){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Dt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Lt(t){ut(new i.wA("platform-logger",(t=>new O(t)),"PRIVATE")),ut(new i.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(x,R,t),yt(x,R,"esm2017"),yt("fire-js","")}Lt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return l},wA:function(){return r}});n(1703);var i=n(223);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return l},in:function(){return r}});n(1703);
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
 */const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.9e7b009b.js.map