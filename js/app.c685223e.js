(function(){"use strict";var t={7020:function(t,e,n){var o=n(9242),r=n(3396);function a(t,e,n,o,a,i){const s=(0,r.up)("router-view"),c=(0,r.up)("Toast");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c)],64)}var i=n(2268);function s(t,e,n,a,s,c){return(0,r.wg)(),(0,r.j4)(o.W3,{name:"fade"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.toasts,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:(0,i.C_)(["alert alert-success toast-box",`alert-${t.type}`]),role:"alert"},(0,i.zw)(t.message),3)))),128))])),_:1})}var c=n(7139),u={name:"ToastComponent",setup(){const t=(0,c.oR)(),e=(0,r.Fl)((()=>t.state.toast.toasts));return{toasts:e}}},d=n(89);const l=(0,d.Z)(u,[["render",s],["__scopeId","data-v-0a19d68c"]]);var f=l,m={name:"App",components:{Toast:f}};const p=(0,d.Z)(m,[["render",a]]);var h=p,g=n(6265),v=n.n(g);const O=async()=>await v().get("https://api.coinpaprika.com/v1/tickers?quotes=KRW");var T={namespaced:!0,state:{coins:[]},mutations:{ADD_COINS(t,e){t.coins=[],t.coins=[...JSON.parse(JSON.stringify(e))]}},actions:{async getCoinAPI({commit:t}){await O().then((e=>{t("ADD_COINS",e.data)})).catch((t=>console.log(t)))}},getters:{getCoins(t){return t.coins}}},y={namespaced:!0,state:{toasts:[]},mutations:{ADD_TOAST(t,e){t.toasts.push(e)},REMOVE_TOAST(t){t.toasts.shift()}},actions:{triggerToast({commit:t},e){t("ADD_TOAST",{id:Date.now(),message:e.message,type:e.type}),setTimeout((()=>{t("REMOVE_TOAST")}),3e3)}}},D=n(6035),b=n(4275),S=n(1992);const E={apiKey:"AIzaSyBxtfDo4IlG7IKxflwXKvg-n0B1GouI43M",authDomain:"diserp-62a9c.firebaseapp.com",databaseURL:"https://diserp-62a9c-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"diserp-62a9c",storageBucket:"diserp-62a9c.appspot.com",messagingSenderId:"701542788043",appId:"1:701542788043:web:067674d8332553cf8b244e"},I=(0,b.ZF)(E),A=(0,D.ad)(I),U=((0,S.cF)(I),async t=>{const e=(0,D.JU)(A,"todos",t),n=await(0,D.QT)(e);if(n.exists())return n.data();console.log("NONE DATA!")}),w=async t=>{let e=[],n=(0,D.IO)((0,D.hJ)(A,"todos"),(0,D.ar)("userId","==",t),(0,D.ar)("enabled","==",!0),(0,D.Xo)("uploadDate","desc"));const o=await(0,D.PL)(n);return o.forEach((t=>{let n=t.data();n.docId=t.id,e.push(n)})),e},_=async t=>{await(0,D.ET)((0,D.hJ)(A,"todos"),t)},C=async(t,e)=>{const n=(0,D.JU)(A,"todos",t);await(0,D.r7)(n,e)},L=async(t,e)=>{const n=(0,D.JU)(A,"todos",t);await(0,D.r7)(n,{isCompleted:e})},N=async t=>{const e=(0,D.JU)(A,"todos",t);await(0,D.r7)(e,{enabled:!1})};var M={namespaced:!0,state:{todo:{},todos:[]},mutations:{ADD_TODO(t,e){t.todo=e},ADD_TODOS(t,e){t.todos=e}},actions:{async getTodoInfo({commit:t},e){await U(e).then((e=>{t("ADD_TODO",e)})).catch((t=>console.log(t)))},async getTodosInfo({commit:t},e){await w(e).then((e=>{t("ADD_TODOS",e)})).catch((t=>console.log(t)))},async addTodoInfo({commit:t},e){await _(e).then((e=>{t("ADD_TODOS",e)})).catch((t=>console.log(t)))},async updateTodoInfo({commit:t},e){await C(e.id,e.updateTodoObj).then((e=>{t("ADD_TODOS",e)})).catch((t=>console.log(t)))},async toggleTodoInfo({commit:t},e){await L(e.docId,e.isChecked).then((e=>{t("ADD_TODOS",e)})).catch((t=>console.log(t)))},async deleteTodoInfo({commit:t},e){await N(e).then((e=>{t("ADD_TODOS",e)})).catch((t=>console.log(t)))}},getters:{getTodo(t){return t.todo},getTodos(t){return t.todos}}},k=n(6955),R={namespaced:!0,state:{user:{},dummy:{}},mutations:{ADD_USER(t,e){t.user=e},REMOVE_USER(t){t.user={}},DUMMY_MUTATION(t){t.dummy={}}},actions:{getUserInfo({commit:t}){const e=(0,k.bG)();t("ADD_USER",e)},userLogin({commit:t},e){(0,k.SR)(e.userEmail,e.userPassword),t("DUMMY_MUTATION")},userLogout({commit:t}){(0,k.v1)(),t("REMOVE_USER")},userSignUp({commit:t},e){(0,k.C$)(e.signUpEmail,e.userPassword),t("DUMMY_MUTATION")},updateUserInfo({commit:t},e){(0,k.gS)(e.userObj,e.imageFile),t("DUMMY_MUTATION")},sendUserEmailVerification({commit:t}){(0,k.Q9)(),t("DUMMY_MUTATION")},deleteUserInfo({commit:t}){(0,k.qJ)(),t("REMOVE_USER")}},getters:{getUser(t){return t.user}}},j=(0,c.MT)({modules:{coinAPI:T,toast:y,todosInfo:M,usersInfo:R}}),F=n(1120),P=n(4028);n(3455),n(8937);let J;(0,P.Aj)((0,P.v0)(),(()=>{J||(J=(0,o.ri)(h).use(j).use(F.Z).mount("#app"))}))},6955:function(t,e,n){n.d(e,{C$:function(){return c},Q9:function(){return d},SR:function(){return i},bG:function(){return a},gS:function(){return u},qJ:function(){return l},v1:function(){return s}});var o=n(4028),r=n(1992);const a=()=>{let t=(0,o.v0)().currentUser?(0,o.v0)().currentUser:null;return t},i=(t,e)=>{(0,o.e5)((0,o.v0)(),t,e).then((()=>{console.log("LOGIN SUCCESS.")})).catch((()=>{console.log("LOGIN FAILED!")}))},s=()=>{(0,o.w7)((0,o.v0)()).then((()=>{console.log("LOGOUT SUCCESS.")})).catch((()=>{console.log("LOGOUT FAILED!")}))},c=(t,e)=>{(0,o.Xb)((0,o.v0)(),t,e).then((()=>{console.log("SIGN UP SUCCESS.")})).catch((()=>{console.log("SIGN UP FAILED!")}))},u=async(t,e)=>{const n=r.cF(),a=r.iH(n,`userimages/${t.uid}`),i=e;let s=null;void 0!==i&&r.KV(a,i).then((t=>{console.log("upload image: ",t),r.Jt(a)})),(0,o.ck)((0,o.v0)().currentUser,{displayName:t.displayName,photoURL:void 0===s?t.photoURL:s})},d=()=>{(0,o.v0)().languageCode="ko",(0,o.w$)((0,o.v0)().currentUser).then((()=>{console.log("EMAIL VERIFICATION SEND SUCCESS.")})).catch((()=>{console.log("EMAIL VERIFICATION SEND FAILD.")}))},l=()=>{(0,o.h8)((0,o.v0)().currentUser).then((()=>{console.log("DELETE USER SUCCESS.")})).catch((()=>{console.log("DELETE USER FAILED!")}))}},1120:function(t,e,n){var o=n(678);const r=[{path:"/",name:"defaultLayout",component:()=>n.e(739).then(n.bind(n,6739)),children:[{path:"/",name:"TodosList",component:()=>n.e(672).then(n.bind(n,2672))},{path:"/todo/:id",name:"Todo",component:()=>n.e(34).then(n.bind(n,9034))}]},{path:"/",name:"emptyLayout",component:()=>n.e(507).then(n.bind(n,507)),children:[{path:"/login",name:"Login",component:()=>n.e(892).then(n.bind(n,5892))},{path:"/signup",name:"SignUp",component:()=>n.e(721).then(n.bind(n,4721))},{path:"/user/:id",name:"User",component:()=>n.e(754).then(n.bind(n,4754))}]}],a=(0,o.p7)({history:(0,o.r5)(),routes:r});e["Z"]=a}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],a=t[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{34:"788c173d",507:"e81d2105",672:"5019f4ff",721:"d230db94",739:"a91df94d",754:"5e9db3f7",892:"00714fcc"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{34:"14ff99c9",672:"62f20ac5",721:"d2c19827",739:"284318ac",754:"da49e233",892:"b5fb3c47"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-mini-project:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==e+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/vue-todo/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={34:1,672:1,721:1,739:1,754:1,892:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var d=c(n)}for(e&&e(o);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},o=self["webpackChunkvue_mini_project"]=self["webpackChunkvue_mini_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7020)}));o=n.O(o)})();
//# sourceMappingURL=app.c685223e.js.map