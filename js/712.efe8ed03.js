"use strict";(self["webpackChunkvue_mini_project"]=self["webpackChunkvue_mini_project"]||[]).push([[712],{3136:function(e,o,t){t.d(o,{O:function(){return n},Sq:function(){return s},pk:function(){return a}});const s={SUCCESS_LOGOUT:{message:"로그아웃 되었습니다.",type:"success"},SUCCESS_CREATE_USER_INFO:{message:"성공적으로 등록 되었습니다.",type:"success"},SUCCESS_UPDATE_USER_INFO:{message:"성공적으로 변경 되었습니다.",type:"success"},INVALID_ACCESS:{message:"올바르지 않은 접근입니다!",type:"danger"},INVALID_USER_INFO:{message:"올바르지 않은 계정입니다!",type:"warning"},INVALID_CREATE_USER_INFO:{message:"등록할 계정 정보를 다시 입력해주세요!",type:"warning"},INVALID_UPLOAD_USER_IMAGE_INFO:{message:"유저 프로필 이미지를 업로드 할 수 없습니다!",type:"warning"},FAILED_LOGOUT:{message:"오류로 인해 로그아웃 할 수 없습니다!",type:"danger"},FAILED_USER_INFO:{message:"오류로 인해 회원 정보를 불러올 수 없습니다!",type:"danger"},FAILED_UPDATE_USER_INFO:{message:"오류로 인해 회원 정보를 변경 할 수 없습니다!",type:"danger"}},a={FAILED_COINS_INFO:{message:"오류로 인해 코인 정보들을 불러올 수 없습니다!",type:"danger"}},n={SUCCESS_UPDATE_TODO_INFO:{message:"성공적으로 변경 되었습니다.",type:"success"},SUCCESS_DELETE_TODO_INFO:{message:"성공적으로 삭제 되었습니다.",type:"success"},INVALID_TODO_INFO:{message:"올바른 할 일의 내용을 입력해주세요!",type:"warning"},INVALID_UPDATE_TODO_INFO:{message:"올바른 할 일의 내용을 수정해주세요!",type:"warning"},FAILED_TODO_INFO:{message:"오류로 인해 작성한 할 일 정보를 불러올 수 없습니다!",type:"danger"},FAILED_TODOS_INFO:{message:"오류로 인해 작성한 할 일 정보들을 불러올 수 없습니다!",type:"danger"},FAILED_CREATE_TODO_INFO:{message:"오류로 인해 작성 할 수 없습니다!",type:"danger"},FAILED_UPDATE_TODO_INFO:{message:"오류로 인해 변경 할 수 없습니다!",type:"danger"},FAILED_DELETE_TODO_INFO:{message:"오류로 인해 삭제 할 수 없습니다!",type:"danger"}}},6955:function(e,o,t){t.d(o,{C$:function(){return l},SR:function(){return n},bG:function(){return d},bf:function(){return i},v1:function(){return c}});var s=t(4028),a=t(1992);const n=(e,o)=>{(0,s.e5)((0,s.v0)(),e,o).then((()=>{console.log("LOGIN SUCCESS.")})).catch((()=>{console.log("LOGIN FAILED!")}))},d=()=>(0,s.v0)().currentUser,l=(e,o)=>{(0,s.Xb)((0,s.v0)(),e,o).then((()=>{console.log("SIGN UP SUCCESS.")})).catch((()=>{console.log("SIGN UP FAILED!")}))},c=()=>{(0,s.w7)((0,s.v0)()).then((()=>{console.log("LOGOUT SUCCESS.")})).catch((()=>{console.log("LOGOUT FAILED!")}))},i=async(e,o)=>{const t=a.cF(),n=a.iH(t,`userimages/${e.uid}`),d=o;let l=null;void 0!==d&&a.KV(n,d).then((e=>{console.log("upload image: ",e),a.Jt(n)})),(0,s.ck)((0,s.v0)().currentUser,{displayName:e.displayName,photoURL:void 0===l?e.photoURL:l})}},6712:function(e,o,t){t.r(o),t.d(o,{default:function(){return _e}});var s=t(3396);const a=e=>((0,s.dD)("data-v-14833bd3"),e=e(),(0,s.Cn)(),e),n={key:0},d={class:"row todo-form-sticky"},l={key:0,class:"mb-3 bg-light text-success spinner-border",role:"status",style:{"margin-left":"45%"}},c=a((()=>(0,s._)("span",{class:"visually-hidden"},"Loading...",-1))),i=[c],r={key:1,class:"card p-3 bg-secondary text-center",style:{color:"white"}},u={class:"todo-list-overflow"},g={key:1,class:"input-group mb-3"},_=a((()=>(0,s._)("input",{class:"form-control",type:"text",value:"로그인 상태에서만 작성 가능합니다",disabled:"",readonly:""},null,-1)));function p(e,o,t,a,c,p){const m=(0,s.up)("TodoForm"),T=(0,s.up)("ToDoList");return(0,s.wg)(),(0,s.iD)("div",null,[a.isLogin?((0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",d,[(0,s.Wm)(m,{onAddTodo:a.addTodo},null,8,["onAddTodo"])]),a.loading?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",l,i)),a.loading&&!a.todos.length?((0,s.wg)(),(0,s.iD)("div",r," 추가된 할 일이 없습니다. ")):(0,s.kq)("",!0),(0,s._)("div",u,[a.loading?((0,s.wg)(),(0,s.j4)(T,{key:0,todos:a.todos,onToggleTodo:a.toggleTodo,onDeleteTodo:a.deleteTodo},null,8,["todos","onToggleTodo","onDeleteTodo"])):(0,s.kq)("",!0)])])):((0,s.wg)(),(0,s.iD)("div",g,[_,(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[0]||(o[0]=(...e)=>a.moveToLogin&&a.moveToLogin(...e))}," 로그인 ")]))])}var m=t(4870),T=t(7139),v=t(1120),D=t(4028),I=t(6035),O=t(301),y=t(3136),E=t(9242),b=t(2268);const C=e=>((0,s.dD)("data-v-dfd377da"),e=e(),(0,s.Cn)(),e),h=["onClick"],L={class:"flex-glow-1"},S=["onUpdate:modelValue","onChange"],F={class:"container"},A={class:"row align-items-center"},U={class:"col-9"},w={class:"col",style:{"text-align":"right"}},N=["onClick"],f=C((()=>(0,s._)("span",{class:"material-icons"}," delete_outline ",-1))),k=[f];function R(e,o,t,a,n,d){const l=(0,s.up)("TodoDetail");return(0,s.wg)(),(0,s.iD)(s.HY,null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.todos,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e.docId?e.docId:t,class:"card mt-1 mb-1"},[(0,s._)("div",{class:"card-body p-2 d-flex align-items-center todo-cursor",onClick:o=>a.moveToPage(e.docId)},[(0,s._)("div",L,[(0,s.wy)((0,s._)("input",{class:"ml-2 mr-2",type:"checkbox","onUpdate:modelValue":o=>e.isCompleted=o,onChange:e=>a.toggleTodo(t,e),onClick:o[0]||(o[0]=(0,E.iM)((()=>{}),["stop"]))},null,40,S),[[E.e8,e.isCompleted]])]),(0,s._)("div",F,[(0,s._)("div",A,[(0,s._)("div",U,[(0,s._)("label",{class:(0,b.C_)(["form-check-label",{check:e.isCompleted}])},(0,b.zw)(e.subject),3)]),(0,s._)("div",w,[(0,s._)("button",{class:"btn btn-danger btm-sm",type:"button",onClick:(0,E.iM)((o=>a.openModal(e.docId)),["stop"])},k,8,N)])])])],8,h)])))),128)),((0,s.wg)(),(0,s.j4)(s.lR,{to:"#modal"},[a.showModal?((0,s.wg)(),(0,s.j4)(l,{key:0,onClose:a.closeModal,onDelete:a.deleteTodo},null,8,["onClose","onDelete"])):(0,s.kq)("",!0)]))],64)}const j=(0,s.Uk)(" 정말 삭제하시겠습니까? "),M={class:"btn-group me-2"},P={class:"btn-group me-2"};function x(e,o,t,a,n,d){const l=(0,s.up)("Modal");return(0,s.wg)(),(0,s.j4)(l,null,{modalTitle:(0,s.w5)((()=>[j])),modalBody:(0,s.w5)((()=>[(0,s._)("div",M,[(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...e)=>a.onDelete&&a.onDelete(...e))}," 삭제 ")]),(0,s._)("div",P,[(0,s._)("button",{type:"button",class:"btn btn-secondary",onClick:o[1]||(o[1]=(...e)=>a.onClose&&a.onClose(...e))}," 취소 ")])])),_:1})}const G={class:"modal-wrapper"},H={class:"modal-dialog"},V={class:"modal-content"},Z={class:"modal-header"},q={class:"modal-title"},J={class:"modal-body"},$={class:"modal-footer"};function W(e,o,t,a,n,d){return(0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",H,[(0,s._)("div",V,[(0,s._)("div",Z,[(0,s._)("h5",q,[(0,s.WI)(e.$slots,"modalTitle",{},void 0,!0)])]),(0,s._)("div",J,[(0,s.WI)(e.$slots,"modalBody",{},void 0,!0)]),(0,s._)("div",$,[(0,s.WI)(e.$slots,"modalFooter",{},void 0,!0)])])])])}var K={name:"ModalComponent"},B=t(89);const X=(0,B.Z)(K,[["render",W],["__scopeId","data-v-3a09cb70"]]);var Y=X,z={name:"TodoDetail",components:{Modal:Y},emits:["close","delete"],setup(e,{emit:o}){const t=()=>{o("close")},s=()=>{o("delete")};return{onClose:t,onDelete:s}}};const Q=(0,B.Z)(z,[["render",x]]);var ee=Q,oe={name:"TodoList",components:{TodoDetail:ee},props:{todos:{type:Array,required:!0}},emits:["toggle-todo","delete-todo"],setup(e,{emit:o}){const t=(0,m.iH)(null),s=(0,m.iH)(!1),a=e=>{t.value=e,s.value=!0},n=()=>{t.value=null,s.value=!1},d=()=>{o("delete-todo",t.value),t.value=null,s.value=!1},l=(e,t)=>{o("toggle-todo",e,t.target.checked)},c=e=>{v.Z.push({name:"Todo",params:{id:e}})};return{showModal:s,openModal:a,closeModal:n,deleteTodo:d,toggleTodo:l,moveToPage:c}}};const te=(0,B.Z)(oe,[["render",R],["__scopeId","data-v-dfd377da"]]);var se=te;const ae={class:"d-flex"},ne={class:"input-group mb-3"};function de(e,o,t,a,n,d){return(0,s.wg)(),(0,s.iD)("div",ae,[(0,s._)("div",ne,[(0,s.wy)((0,s._)("input",{onKeyup:o[0]||(o[0]=(0,E.D2)(((...e)=>a.addTodo&&a.addTodo(...e)),["enter"])),class:"form-control",type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>a.todo=e),placeholder:"추가할 할 일 입력",maxlength:"30"},null,544),[[E.nr,a.todo]]),(0,s._)("button",{onClick:o[2]||(o[2]=(...e)=>a.addTodo&&a.addTodo(...e)),class:"btn btn-success",type:"button"}," 추가 ")])])}var le=t(6955),ce={name:"TodoForm",emits:["add-todo"],setup(e,{emit:o}){const t=(0,T.oR)(),s=(0,m.iH)(null),a=()=>{s.value=(0,le.bG)().uid};a();const n=(0,m.iH)(""),d=()=>{""===n.value||null===n.value?t.dispatch("toast/triggerToast",y.O.INVALID_TODO_INFO):(o("add-todo",{userId:s.value,subject:n.value,uploadDate:Date.now(),isCompleted:!1,enabled:!0}),n.value="")};return{todo:n,addTodo:d}}};const ie=(0,B.Z)(ce,[["render",de]]);var re=ie,ue={name:"TodoIndex",components:{ToDoList:se,TodoForm:re},setup(){const e=(0,T.oR)(),o=(0,m.iH)(!1),t=(0,m.iH)(!1),s=(0,m.iH)(null),a=(0,m.iH)([]),n=()=>{(0,D.Aj)((0,D.v0)(),(e=>e?(t.value=!0,s.value=e.uid,void d(s.value)):void(t.value=!1)))};n();const d=async t=>{try{let e=(0,I.IO)((0,I.hJ)(O.db,"todos"),(0,I.ar)("userId","==",t),(0,I.ar)("enabled","==",!0),(0,I.Xo)("uploadDate","desc"));(0,I.cf)(e,(e=>{a.value=[],e.forEach((e=>{let o=e.data();o.docId=e.id,a.value.push(o)}))})),o.value=!0}catch(s){e.dispatch("toast/triggerToast",y.O.FAILED_TODOS_INFO)}},l=async o=>{try{await(0,I.ET)((0,I.hJ)(O.db,"todos"),{userId:o.userId,subject:o.subject,uploadDate:o.uploadDate,isCompleted:o.isCompleted,enabled:o.enabled})}catch(t){e.dispatch("toast/triggerToast",y.O.FAILED_CREATE_TODO_INFO)}},c=async(o,t)=>{const s=a.value[o].docId;try{const o=(0,I.JU)(O.db,"todos",s);await(0,I.r7)(o,{isCompleted:t}),e.dispatch("toast/triggerToast",y.O.SUCCESS_UPDATE_TODO_INFO)}catch(n){e.dispatch("toast/triggerToast",y.O.FAILED_UPDATE_TODO_INFO)}},i=async o=>{try{const t=(0,I.JU)(O.db,"todos",o);await(0,I.r7)(t,{enabled:!1}),e.dispatch("toast/triggerToast",y.O.SUCCESS_DELETE_TODO_INFO)}catch(t){e.dispatch("toast/triggerToast",y.O.FAILED_DELETE_TODO_INFO)}},r=()=>{v.Z.push({name:"Login"})};return{loading:o,isLogin:t,userObj:s,todos:a,getTodos:d,addTodo:l,toggleTodo:c,deleteTodo:i,moveToLogin:r}}};const ge=(0,B.Z)(ue,[["render",p],["__scopeId","data-v-14833bd3"]]);var _e=ge}}]);
//# sourceMappingURL=712.efe8ed03.js.map