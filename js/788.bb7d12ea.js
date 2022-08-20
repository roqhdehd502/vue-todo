"use strict";(self["webpackChunkvue_mini_project"]=self["webpackChunkvue_mini_project"]||[]).push([[788],{3136:function(e,s,o){o.d(s,{O:function(){return a},Sq:function(){return t},pk:function(){return n}});const t={SUCCESS_LOGOUT:{message:"로그아웃 되었습니다.",type:"success"},SUCCESS_CREATE_USER_INFO:{message:"성공적으로 등록 되었습니다.",type:"success"},SUCCESS_UPDATE_USER_INFO:{message:"성공적으로 변경 되었습니다.",type:"success"},SUCCESS_SEND_USER_EMAIL_VERIFY:{message:"인증 메시지를 전송 하였습니다.",type:"success"},INVALID_ACCESS:{message:"올바르지 않은 접근입니다!",type:"danger"},INVALID_USER_INFO:{message:"올바르지 않은 계정입니다!",type:"warning"},INVALID_CREATE_USER_INFO:{message:"등록할 계정 정보를 다시 입력해주세요!",type:"warning"},INVALID_UPLOAD_USER_IMAGE_INFO:{message:"유저 프로필 이미지를 업로드 할 수 없습니다!",type:"warning"},FAILED_LOGOUT:{message:"오류로 인해 로그아웃 할 수 없습니다!",type:"danger"},FAILED_USER_INFO:{message:"오류로 인해 회원 정보를 불러올 수 없습니다!",type:"danger"},FAILED_UPDATE_USER_INFO:{message:"오류로 인해 회원 정보를 변경 할 수 없습니다!",type:"danger"},FAILED_SEND_USER_EMAIL_VERIFY:{message:"오류로 인해 인증 메시지를 전송 할 수 없습니다!",type:"danger"},FAILED_DELETE_USER_INFO:{message:"오류로 인해 회원 정보를 삭제 할 수 없습니다!",type:"danger"}},n={FAILED_COINS_INFO:{message:"오류로 인해 코인 정보들을 불러올 수 없습니다!",type:"danger"}},a={SUCCESS_UPDATE_TODO_INFO:{message:"성공적으로 변경 되었습니다.",type:"success"},SUCCESS_DELETE_TODO_INFO:{message:"성공적으로 삭제 되었습니다.",type:"success"},INVALID_TODO_INFO:{message:"올바른 할 일의 내용을 입력해주세요!",type:"warning"},INVALID_UPDATE_TODO_INFO:{message:"올바른 할 일의 내용을 수정해주세요!",type:"warning"},FAILED_TODO_INFO:{message:"오류로 인해 작성한 할 일 정보를 불러올 수 없습니다!",type:"danger"},FAILED_TODOS_INFO:{message:"오류로 인해 작성한 할 일 정보들을 불러올 수 없습니다!",type:"danger"},FAILED_CREATE_TODO_INFO:{message:"오류로 인해 작성 할 수 없습니다!",type:"danger"},FAILED_UPDATE_TODO_INFO:{message:"오류로 인해 변경 할 수 없습니다!",type:"danger"},FAILED_DELETE_TODO_INFO:{message:"오류로 인해 삭제 할 수 없습니다!",type:"danger"}}},6955:function(e,s,o){o.d(s,{C$:function(){return i},Q9:function(){return d},SR:function(){return a},bG:function(){return l},gS:function(){return r},qJ:function(){return u},v1:function(){return c}});var t=o(4028),n=o(1992);const a=(e,s)=>{(0,t.e5)((0,t.v0)(),e,s).then((()=>{console.log("LOGIN SUCCESS.")})).catch((()=>{console.log("LOGIN FAILED!")}))},l=()=>(0,t.v0)().currentUser,i=(e,s)=>{(0,t.Xb)((0,t.v0)(),e,s).then((()=>{console.log("SIGN UP SUCCESS.")})).catch((()=>{console.log("SIGN UP FAILED!")}))},c=()=>{(0,t.w7)((0,t.v0)()).then((()=>{console.log("LOGOUT SUCCESS.")})).catch((()=>{console.log("LOGOUT FAILED!")}))},r=async(e,s)=>{const o=n.cF(),a=n.iH(o,`userimages/${e.uid}`),l=s;let i=null;void 0!==l&&n.KV(a,l).then((e=>{console.log("upload image: ",e),n.Jt(a)})),(0,t.ck)((0,t.v0)().currentUser,{displayName:e.displayName,photoURL:void 0===i?e.photoURL:i})},d=()=>{(0,t.v0)().languageCode="ko",(0,t.w$)((0,t.v0)().currentUser).then((()=>{console.log("EMAIL VERIFICATION SEND SUCCESS.")})).catch((()=>{console.log("EMAIL VERIFICATION SEND FAILD.")}))},u=()=>{(0,t.h8)((0,t.v0)().currentUser).then((()=>{console.log("DELETE USER SUCCESS.")})).catch((()=>{console.log("DELETE USER FAILED!")}))}},6595:function(e,s,o){o.d(s,{Z:function(){return m}});var t=o(3396);const n={class:"modal-wrapper"},a={class:"modal-dialog"},l={class:"modal-content"},i={class:"modal-header"},c={class:"modal-title"},r={class:"modal-body"},d={class:"modal-footer"};function u(e,s,o,u,_,g){return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",a,[(0,t._)("div",l,[(0,t._)("div",i,[(0,t._)("h6",c,[(0,t.WI)(e.$slots,"modalTitle",{},void 0,!0)])]),(0,t._)("div",r,[(0,t.WI)(e.$slots,"modalBody",{},void 0,!0)]),(0,t._)("div",d,[(0,t.WI)(e.$slots,"modalFooter",{},void 0,!0)])])])])}var _={name:"ModalComponent"},g=o(89);const E=(0,g.Z)(_,[["render",u],["__scopeId","data-v-742fd37a"]]);var m=E},5788:function(e,s,o){o.r(s),o.d(s,{default:function(){return z}});var t=o(3396),n=o(2268),a=o(9242);const l=e=>((0,t.dD)("data-v-309ab5de"),e=e(),(0,t.Cn)(),e),i={key:0,class:"spinner-border text-success justify-content-center",role:"status"},c=l((()=>(0,t._)("span",{class:"visually-hidden"},"Loading...",-1))),r=[c],d={key:1,class:"container profile-container"},u={class:"row"},_={class:"col"},g={class:"display-3"},E={key:0},m=l((()=>(0,t._)("button",{type:"button",class:"btn btn-outline-info btn-sm",disabled:""}," 인증됨 ",-1))),p=[m],I={key:1},y=(0,t.Uk)("  "),S=l((()=>(0,t._)("span",{class:"badge rounded-pill bg-secondary","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"계정 찾기시 회원님의 이메일이 인증되어야 합니다."}," ? ",-1))),b={class:"row mt-3"},D=["src"],O={class:"row mt-3 g-3"},v={key:2,class:"modify-mode-style"},U=l((()=>(0,t._)("label",null,"닉네임",-1))),L={class:"input-group mb-3"},C=l((()=>(0,t._)("label",null,"프로필 사진",-1))),f=l((()=>(0,t._)("div",{class:"input-group mb-3"},[(0,t._)("input",{type:"file",id:"user-image",class:"form-control",accept:"image/gif, image/jpeg, image/png",required:""})],-1))),F={class:"row g-2"},A=l((()=>(0,t._)("hr",null,null,-1))),N={class:"row g-2"};function T(e,s,l,c,m,T){const h=(0,t.up)("UserDetail");return(0,t.wg)(),(0,t.iD)(t.HY,null,[c.loading&&!c.isModifyMode?((0,t.wg)(),(0,t.iD)("div",i,r)):(0,t.kq)("",!0),c.loading||c.isModifyMode?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("div",u,[(0,t._)("div",_,[(0,t._)("h1",g,(0,n.zw)(c.userObj.displayName?c.userObj.displayName:c.userObj.email),1),(0,t._)("h4",null,[(0,t.Uk)((0,n.zw)(c.userObj.email)+"  ",1),c.userObj.emailVerified?((0,t.wg)(),(0,t.iD)("span",E,p)):((0,t.wg)(),(0,t.iD)("span",I,[(0,t._)("button",{type:"button",class:"btn btn-info btn-sm",onClick:s[0]||(s[0]=(...e)=>c.onEmailVerify&&c.onEmailVerify(...e))}," 인증하기 "),y,S]))])])]),(0,t._)("div",b,[(0,t._)("img",{src:c.userObj.photoURL?c.userObj.photoURL:o(5622),class:"user-image"},null,8,D)]),(0,t._)("div",O,[(0,t._)("button",{onClick:s[1]||(s[1]=(...e)=>c.modifyMode&&c.modifyMode(...e)),class:"btn btn-success"},"프로필수정"),(0,t._)("button",{onClick:s[2]||(s[2]=(...e)=>c.moveToTodoListPage&&c.moveToTodoListPage(...e)),class:"btn btn-primary"},"메인페이지")])])),!c.loading&&c.isModifyMode?((0,t.wg)(),(0,t.iD)("div",v,[U,(0,t._)("div",L,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>c.userObj.displayName=e),type:"text",class:"form-control",required:""},null,512),[[a.nr,c.userObj.displayName]])]),C,f,(0,t._)("div",F,[(0,t._)("button",{onClick:s[4]||(s[4]=e=>c.updateUser(c.userObj)),type:"button",class:"btn btn-success"}," 저장 "),(0,t._)("button",{class:"btn btn-secondary",onClick:s[5]||(s[5]=(...e)=>c.modifyMode&&c.modifyMode(...e))}," 돌아가기 ")]),A,(0,t._)("div",N,[(0,t._)("button",{onClick:s[6]||(s[6]=(0,a.iM)((e=>c.openModal()),["stop"])),type:"button",class:"btn btn-danger"}," 회원탈퇴 ")])])):(0,t.kq)("",!0),((0,t.wg)(),(0,t.j4)(t.lR,{to:"#modal"},[c.showModal?((0,t.wg)(),(0,t.j4)(h,{key:0,onClose:c.closeModal,onDelete:c.deleteUser},null,8,["onClose","onDelete"])):(0,t.kq)("",!0)]))],64)}var h=o(4870),w=o(7139),R=o(678),M=o(3136),k=o(6955);const j=(0,t.Uk)(" 정말 탈퇴 하시겠습니까? "),V={class:"d-flex justify-content-center"},q={class:"btn-group me-2"},P={class:"btn-group me-2"};function G(e,s,o,n,a,l){const i=(0,t.up)("Modal");return(0,t.wg)(),(0,t.j4)(i,null,{modalTitle:(0,t.w5)((()=>[j])),modalBody:(0,t.w5)((()=>[(0,t._)("div",V,[(0,t._)("div",q,[(0,t._)("button",{type:"button",class:"btn btn-secondary",onClick:s[0]||(s[0]=(...e)=>n.onClose&&n.onClose(...e))}," 취소 ")]),(0,t._)("div",P,[(0,t._)("button",{type:"button",class:"btn btn-danger",onClick:s[1]||(s[1]=(...e)=>n.onDelete&&n.onDelete(...e))}," 삭제 ")])])])),_:1})}var H=o(6595),$={name:"UserDetail",components:{Modal:H.Z},emits:["close","delete"],setup(e,{emit:s}){const o=()=>{s("close")},t=()=>{s("delete")};return{onClose:o,onDelete:t}}},Y=o(89);const Z=(0,Y.Z)($,[["render",G]]);var x=Z,J={name:"users_id",components:{UserDetail:x},setup(){const e=(0,w.oR)(),s=(0,R.tv)(),o=(0,h.iH)(!0),t=(0,h.iH)(null),n=(0,h.iH)(!1),a=(0,h.iH)(!1),l=()=>{a.value=!0},i=()=>{a.value=!1},c=()=>{t.value=(0,k.bG)(),o.value=!1,console.log(t.value.emailVerified)};c();const r=()=>{try{(0,k.Q9)(),e.dispatch("toast/triggerToast",M.Sq.SUCCESS_SEND_USER_EMAIL_VERIFY)}catch(s){e.dispatch("toast/triggerToast",M.Sq.SUCCESS_SEND_USER_EMAIL_VERIFY)}},d=()=>{!1===n.value?n.value=!0:n.value=!1},u=async o=>{try{const e=document.querySelector("#user-image").files[0];(0,k.gS)(o,e),s.push({name:"TodosList"})}catch(t){e.dispatch("toast/triggerToast",M.Sq.FAILED_UPDATE_USER_INFO)}},_=()=>{try{(0,k.qJ)(),a.value=!1,s.push({name:"TodosList"})}catch(o){e.dispatch("toast/triggerToast",M.Sq.FAILED_DELETE_USER_INFO)}},g=()=>{s.push({name:"TodosList"})};return{loading:o,userObj:t,isModifyMode:n,showModal:a,openModal:l,closeModal:i,onEmailVerify:r,modifyMode:d,updateUser:u,deleteUser:_,moveToTodoListPage:g}}};const W=(0,Y.Z)(J,[["render",T],["__scopeId","data-v-309ab5de"]]);var z=W},5622:function(e,s,o){e.exports=o.p+"img/AnonymousUser.1b828a07.png"}}]);
//# sourceMappingURL=788.bb7d12ea.js.map