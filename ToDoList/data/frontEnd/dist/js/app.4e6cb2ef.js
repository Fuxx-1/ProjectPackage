(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},1056:function(t,e,o){},"141d":function(t,e,o){"use strict";o("76bf")},1687:function(t,e,o){},"17c9":function(t,e,o){"use strict";o("bb82")},"19c1":function(t,e,o){"use strict";o("8ede")},"21e4":function(t,e,o){},"238b":function(t,e,o){},"2e89":function(t,e,o){},"319c":function(t,e,o){"use strict";o("53a3")},"3cb1":function(t,e,o){"use strict";o("e0b6")},"3ccb":function(t,e,o){},4706:function(t,e,o){"use strict";o("d432")},"49e4":function(t,e,o){"use strict";o("2e89")},"4b1a":function(t,e,o){},"4ebb":function(t,e,o){"use strict";o("21e4")},"53a3":function(t,e,o){},5698:function(t,e,o){"use strict";o("ae79")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"App"}},[t.isLogin?o("todo",{attrs:{backLogin:t.backLogin}}):o("login",{attrs:{loginOk:t.loginOk}})],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t.isEnd?o("div",{staticClass:"endListShow"},[o("end-list-header",{attrs:{findTodos:t.findTodos}}),o("h4",[t._v("已完成列表")]),o("todo-done",{attrs:{todos:t.showTodos}}),o("h4",[t._v("未完成列表")]),o("todo-yet",{attrs:{todos:t.showTodos}})],1):o("div",[o("todo-header",{attrs:{receive:t.receive}}),o("todo-list",{attrs:{todos:t.todos,checkTodo:t.checkTodo,delTodo:t.delTodo}}),o("todo-footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],attrs:{allCheck:t.allCheck,isallCheck:t.isallCheck,length:t.todos.length,haveDone:t.haveDone,endAll:t.endAll}})],1),t.canChange?o("jump-history",{attrs:{jumpPast:t.jumpPast}}):t._e(),o("div",{staticClass:"backLogin",on:{click:t.backLogin}},[t._v("返回登陆")])],1)},r=[],c=(o("d3b7"),o("159b"),o("4de4"),o("99af"),o("e9c4"),o("ac1f"),o("5319"),o("5b81"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todohead"},[o("div",{staticClass:"todoInput"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"",id:"",placeholder:t.isBlur?"输入你要设置的任务":""},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}})]),o("div",{staticClass:"addBtn",on:{click:t.addTodo}},[o("span",[t._v("添加")])])])}),l=[],u=(o("498a"),o("e1bd")),d={name:"todoHeader",props:["receive"],methods:{addTodo:function(){if(!this.title.trim())return alert("输入为空,请重新输入");var t={id:Object(u["a"])(),title:this.title,done:!1};this.receive(t),this.title=""}},data:function(){return{title:"",isBlur:!0}}},p=d,f=(o("6e15"),o("2877")),h=Object(f["a"])(p,c,l,!1,null,"6622f0f5",null),m=h.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todoWrapper"},[t._l(t.todos,(function(e){return o("todo-item",{key:e.id,attrs:{title:e.title,done:e.done,checkTodo:t.checkTodo,id:e.id,delTodo:t.delTodo}})})),o("p",{directives:[{name:"show",rawName:"v-show",value:!t.todos.length,expression:"!todos.length"}],staticStyle:{"text-align":"center"}},[t._v("来添加你的计划项")])],2)},v=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"oneItem",on:{mouseover:t.showDel,mouseleave:t.hideDel2}},[o("div",{staticClass:"done"},[o("input",{attrs:{type:"checkbox",name:"",id:""},domProps:{checked:t.done},on:{click:function(e){return t.checkTodo(t.id)}}})]),o("div",{staticClass:"todoName",on:{click:t.hideDel}},[t._v(t._s(t.title))]),t.isMouseOn?o("div",{staticClass:"delBtn",on:{touchend:function(e){return t.delTodo(t.id)},click:function(e){return t.delTodo(t.id)}}},[o("span",[t._v("删除")])]):t._e()])},b=[],_={name:"todoItem",props:["title","done","handerChange","checkTodo","id","delTodo"],data:function(){return{isMouseOn:!1,timer:""}},methods:{showDel:function(){this.isMouseOn=!0},hideDel2:function(){this.isMouseOn=!1},hideDel:function(){this.isMouseOn=!this.isMouseOn},beginCount:function(t){var e=this;t.preventDefault(),this.timer=setTimeout((function(){e.isMouseOn?e.hideDel():e.showDel()}),1e3)},endCount:function(){clearTimeout(this.timer)},checkThis:function(t){t.target.checked=!t.target.checked}}},y=_,w=(o("6382"),Object(f["a"])(y,k,b,!1,null,"8202cf7e",null)),C=w.exports,x={components:{todoItem:C},name:"todoList",props:["todos","handerChange","checkTodo","delTodo"]},S=x,O=(o("5698"),Object(f["a"])(S,g,v,!1,null,"2ee5de3c",null)),D=O.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-wrapper"},[o("div",{staticClass:"isAllDone"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isallCheck,expression:"isallCheck"}],attrs:{type:"checkbox",name:"",id:""},domProps:{checked:Array.isArray(t.isallCheck)?t._i(t.isallCheck,null)>-1:t.isallCheck},on:{click:t.checkInfooter,change:function(e){var o=t.isallCheck,n=e.target,s=!!n.checked;if(Array.isArray(o)){var a=null,i=t._i(o,a);n.checked?i<0&&(t.isallCheck=o.concat([a])):i>-1&&(t.isallCheck=o.slice(0,i).concat(o.slice(i+1)))}else t.isallCheck=s}}})]),o("div",{staticClass:"compeleted-progress"},[t._v(" 完成 "),o("span",[t._v(t._s(t.haveDone))]),t._v("/"),o("span",[t._v(t._s(t.length))])]),o("div",{staticClass:"confirmDone",on:{click:t.endAll}},[o("span",[t._v("结束")])])])},T=[],j={name:"todoFooter",props:["allCheck","isallCheck","length","haveDone","endAll"],computed:{},methods:{checkInfooter:function(t){this.allCheck(t.target.checked)}}},E=j,I=(o("141d"),Object(f["a"])(E,L,T,!1,null,"08586de8",null)),A=I.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"doneWrapper"},t._l(t.listDone,(function(t,e){return o("todo-item-end",{key:t.id,attrs:{title:t.title,index:e+1}})})),1)},N=[],$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo_end_wrapper"},[o("span",{staticClass:"index"},[t._v(t._s(t.index))]),o("span",{staticClass:"todoName"},[t._v(t._s(t.title))])])},F=[],J={name:"todoItemEnd",props:["title","index"]},U=J,M=(o("f909"),Object(f["a"])(U,$,F,!1,null,"0317579a",null)),H=M.exports,q={name:"todoDone",props:["todos"],components:{todoItemEnd:H},computed:{listDone:function(){return this.todos.filter((function(t){return!0===t.done}))}}},B=q,Y=(o("4706"),Object(f["a"])(B,P,N,!1,null,"2225eb23",null)),R=Y.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"YetWrapper"},t._l(t.listYet,(function(t,e){return o("todo-item-end",{key:t.id,attrs:{title:t.title,index:e+1}})})),1)},W=[],z={name:"todoYet",props:["todos"],components:{todoItemEnd:H},computed:{listYet:function(){return this.todos.filter((function(t){return!t.done}))}}},G=z,K=(o("e9b2"),Object(f["a"])(G,X,W,!1,null,"740cb53a",null)),Q=K.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"endHeader"},[o("div",{staticClass:"input_wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.targetDate,expression:"targetDate"}],attrs:{type:"text",name:"",id:"",placeholder:"输入查找日期如2020-11-01"},domProps:{value:t.targetDate},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendToFind.apply(null,arguments)},input:function(e){e.target.composing||(t.targetDate=e.target.value)}}})]),o("div",{staticClass:"btn_find",on:{click:t.sendToFind}},[o("span",[t._v("查找")])])])},Z=[],tt={name:"endListHeader",props:["findTodos"],methods:{thisDate:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())},sendToFind:function(){this.findTodos("todo-in-"+this.targetDate)}},data:function(){return{targetDate:this.thisDate()}}},et=tt,ot=(o("17c9"),Object(f["a"])(et,V,Z,!1,null,"2da33724",null)),nt=ot.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btnJump",on:{click:t.jumpPast,touchstart:t.startJump,touchend:t.endJump}},[o("span",[t._v("回溯")])])},at=[],it={name:"jumpHistory",props:["jumpPast"],methods:{startJump:function(){var t=this;this.timer=setTimeout((function(){t.jumpPast()}),1e3)},endJump:function(){clearTimeout(this.timer)}},data:function(){return{timer:""}}},rt=it,ct=(o("f49a"),Object(f["a"])(rt,st,at,!1,null,"7f1a19fa",null)),lt=ct.exports,ut={name:"todo",components:{todoHeader:m,todoList:D,todoFooter:A,todoDone:R,todoYet:Q,endListHeader:nt,jumpHistory:lt},props:["backLogin"],data:function(){return{todos:JSON.parse(localStorage.getItem(this.todoDate()))||[],isEnd:"false"===localStorage.getItem("canChange-"+this.todoDate()),canChange:"false"!==localStorage.getItem("canChange-"+this.todoDate()),showTodos:JSON.parse(localStorage.getItem(this.todoDate()))||[],requestUrl:"http://gxd.newimg.ltd:8099/uploadList",requestUrl2:"http://gxd.newimg.ltd:8099/getList"}},methods:{receive:function(t){this.todos.unshift(t)},checkTodo:function(t){this.todos.forEach((function(e){e.id===t&&(e.done=!e.done)}))},delTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!=t}))},alldone:function(){this.todos.forEach((function(t){return t.done=!0}))},allcancel:function(){this.todos.forEach((function(t){return t.done=!1}))},allCheck:function(t){console.log(t),t?this.alldone():this.allcancel()},endAll:function(){!1!==confirm("确定要结束今天的任务状态吗？")&&(this.isEnd=!0,this.canChange=!1,localStorage.setItem("canChange-"+this.todoDate(),!1),this.showTodos=JSON.parse(localStorage.getItem(this.todoDate()))||[])},todoDate:function(){var t=new Date;return"todo-in-".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())},jumpPast:function(){this.showTodos=JSON.parse(localStorage.getItem(this.todoDate()))||[],this.isEnd=!this.isEnd},findTodos:function(t){this.getList(t)},ajax:function(t,e){var o=new XMLHttpRequest;o.onreadystatechange=function(){200==o.status&&4==o.readyState&&e(JSON.parse(o.responseText))},o.open("POST",t,!0),o.send()},sendList:function(t){var e={};e.token=localStorage.getItem("token"),e.date=this.todoDate(),e.list=JSON.stringify(t);var o="";for(var n in e.list)"["===e.list[n]?o+="_mbl":"]"===e.list[n]?o+="_mbr":"{"===e.list[n]?o+="_cbl":"}"===e.list[n]?o+="_cbr":":"===e.list[n]?o+="_mao":o+=e.list[n];var s="".concat(this.requestUrl,"?token=").concat(e.token,"&date=").concat(e.date,"&list=").concat(o);this.ajax(s,(function(t){0===t.code?console.log("上传成功"):console.log(t,"上传失败")}))},getList:function(t){var e=this,o="".concat(this.requestUrl2,"?token=").concat(localStorage.getItem("token"),"&date=").concat(t);this.ajax(o,(function(o){if(-1===o.code)return e.showTodos=JSON.parse(localStorage.getItem(t))||[],console.log("系统繁忙");if(0===o.code&&!o.data)return alert("那一天你还没有设置任务哦");var n=o.data.list;n=n.replaceAll("_mbl","["),n=n.replaceAll("_mbr","]"),n=n.replaceAll("_cbl","{"),n=n.replaceAll("_cbr","}"),n=n.replaceAll("_mao",":"),console.log(n),e.showTodos=JSON.parse(n),localStorage.setItem(t,n),t===e.todoDate&&(e.todos=e.showTodos)}))}},computed:{isallCheck:function(){return this.todos.every((function(t){return!0===t.done}))},haveDone:function(){return this.todos.reduce((function(t,e){return e.done?t+1:t}),0)}},watch:{todos:{deep:!0,immediate:!0,handler:function(t){if(0===t.length)return localStorage.removeItem(this.todoDate());localStorage.setItem(this.todoDate(),JSON.stringify(t)),this.sendList(t)}}}},dt=ut,pt=(o("3cb1"),Object(f["a"])(dt,i,r,!1,null,"0b3f5725",null)),ft=pt.exports,ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.isrotate?"rotate":"",attrs:{id:"app"}},[o("app-back",{ref:"back",attrs:{restoreApp:t.restoreApp}}),o("drop-list",{directives:[{name:"show",rawName:"v-show",value:t.isDropShow,expression:"isDropShow"}],attrs:{dropShow:t.dropShow,autoSave:t.autoSave,autoLogin:t.autoLogin,changeAuLog:t.changeAuLog,changeSave:t.changeSave,rotateApp:t.rotateApp}}),o("app-face",{attrs:{changeDrop:t.changeDrop,autoSave:t.autoSave,autoLogin:t.autoLogin,get_user_pass:t.get_user_pass,loginOk:t.loginOk}})],1)},mt=[],gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"appFace"}},[o("face-head"),o("avatar-list"),o("face-form",{attrs:{autoSave:t.autoSave,autoLogin:t.autoLogin,get_user_pass:t.get_user_pass,loginOk:t.loginOk}}),o("face-footer",{attrs:{changeDrop:t.changeDrop}})],1)},vt=[],kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"face-head"},[o("div",{staticClass:"back",on:{click:function(e){return t.popup("还没有开发好，嘿嘿😁")}}},[o("i",{staticClass:"iconfont"},[t._v("")])]),o("div",{staticClass:"qrcode",on:{click:function(e){return t.popup("还没有开发好，嘿嘿😁")}}},[o("i",{staticClass:"iconfont"},[t._v("")])])])},bt=[],_t={name:"faceHead",props:[],methods:{popup:function(t){alert(t)}}},yt=_t,wt=(o("d86c"),Object(f["a"])(yt,kt,bt,!1,null,null,null)),Ct=wt.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"avatars"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{src:"https://img1.baidu.com/it/u=228436383,3520321118&fm=26&fmt=auto",alt:"",id:"AnimationFromLeftTop"}})])])}],Ot={name:"avatarList",props:[]},Dt=Ot,Lt=(o("49e4"),Object(f["a"])(Dt,xt,St,!1,null,null,null)),Tt=Lt.exports,jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"formbox"},[o("div",{staticClass:"user-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{type:"text",placeholder:t.isUfocus?"":"输入账号"},domProps:{value:t.user},on:{focus:t.hideUplacehoder,blur:t.showUplacehoder,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)},input:function(e){e.target.composing||(t.user=e.target.value)}}})]),o("div",{staticClass:"pass-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:t.isPfocus?"":"输入密码"},domProps:{value:t.password},on:{focus:t.hidePplacehoder,blur:t.showPplacehoder,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),o("div",{staticClass:"submit-btn",on:{click:t.login,mousedown:t.beCyan,mouseup:t.beNormal}},[o("i",{staticClass:"iconfont"},[t._v("")])])])])},Et=[],It={name:"faceForm",props:["autoSave","autoLogin","get_user_pass","loginOk"],data:function(){return{user:localStorage.getItem("user")||"",password:localStorage.getItem("password")||"",isUfocus:!1,isPfocus:!1,requestUrl:"http://gxd.newimg.ltd:8099/logIn"}},methods:{showEle:function(t){console.log(t.target)},showUplacehoder:function(){this.isUfocus=!1},showPplacehoder:function(){this.isPfocus=!1},hideUplacehoder:function(){this.isUfocus=!0},hidePplacehoder:function(){this.isPfocus=!0},login:function(){var t=this;if(!this.user||!this.password)return alert("请输入啊你倒是");var e="".concat(this.requestUrl,"?username=").concat(this.user,"&password=").concat(this.password);this.ajax(e,(function(e){console.log(e),0===e.code?(console.log("登陆成功,跳转页面"),localStorage.setItem("token",e.data),t.loginOk()):alert("用户不存在或密码错误")})),this.autoSave&&(localStorage.setItem("user",this.user),localStorage.setItem("password",this.password))},beCyan:function(t){t.target.style.color="cyan"},beNormal:function(t){t.target.style.color=""},ajax:function(t,e){var o=new XMLHttpRequest;o.onreadystatechange=function(){200==o.status&&4==o.readyState&&e(JSON.parse(o.responseText))},o.open("POST",t,!0),o.send()}},watch:{user:{immediate:!0,handler:function(){this.get_user_pass(this.user,this.password)}}}},At=It,Pt=(o("e1aa"),Object(f["a"])(At,jt,Et,!1,null,null,null)),Nt=Pt.exports,$t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"drop-btn",on:{mousedown:t.downEv,mouseup:t.upEv,touchstart:t.downEv,touchend:t.justColor}},[o("i",{staticClass:"iconfont"},[t._v("")])])},Ft=[],Jt={name:"faceFooter",props:["changeDrop"],methods:{downEv:function(t){t.target.style.color="cyan"},upEv:function(t){t.target.style.color="",this.changeDrop()},justColor:function(t){t.target.style.color=""}}},Ut=Jt,Mt=(o("9b07"),Object(f["a"])(Ut,$t,Ft,!1,null,null,null)),Ht=Mt.exports,qt={name:"appFace",props:["changeDrop","autoSave","autoLogin","get_user_pass","loginOk"],components:{faceHead:Ct,avatarList:Tt,faceForm:Nt,faceFooter:Ht}},Bt=qt,Yt=(o("319c"),Object(f["a"])(Bt,gt,vt,!1,null,null,null)),Rt=Yt.exports,Xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"appBack"}},[o("back-head"),o("back-form"),o("back-footer",{attrs:{restoreApp:t.restoreApp}})],1)},Wt=[],zt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"backHead flex-between"},[o("div",{staticClass:"back",on:{click:function(e){return t.popup("还没有开发好，嘿嘿😁")}}},[o("i",{staticClass:"iconfont"},[t._v("")])]),o("div")])},Gt=[],Kt={name:"backHead",props:[],methods:{popup:function(t){alert(t)}}},Qt=Kt,Vt=(o("6dc8"),Object(f["a"])(Qt,zt,Gt,!1,null,null,null)),Zt=Vt.exports,te=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"formbox",staticStyle:{"margin-top":"15px"}},[o("div",{staticClass:"user-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{type:"text",name:"user",id:"user-sign",placeholder:t.in1focus?"输入账号":""},domProps:{value:t.user},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup.apply(null,arguments)},focus:t.change1,blur:t.change1,input:function(e){e.target.composing||(t.user=e.target.value)}}})]),o("div",{staticClass:"pass-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"emial",id:"email-sign",placeholder:t.is4focus?"输入邮箱":""},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup.apply(null,arguments)},focus:t.change4,blur:t.change4,input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"pass-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.pass1,expression:"pass1"}],attrs:{type:"password",name:"pass",id:"pass-sign",placeholder:t.in2focus?"输入密码":""},domProps:{value:t.pass1},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup.apply(null,arguments)},focus:t.change2,blur:t.change2,input:function(e){e.target.composing||(t.pass1=e.target.value)}}})]),o("div",{staticClass:"pass-box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.pass2,expression:"pass2"}],attrs:{type:"password",name:"pass",id:"pass-sign-confirm",placeholder:t.in3focus?"确认密码":""},domProps:{value:t.pass2},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signup.apply(null,arguments)},focus:t.change3,blur:t.change3,input:function(e){e.target.composing||(t.pass2=e.target.value)}}}),o("div",{staticClass:"submit-btn",on:{click:t.signup,mousedown:t.changeColor,touchstart:t.changeColor,mouseup:t.resetColor,touchend:t.resetColor}},[o("i",{staticClass:"iconfont"},[t._v("")])])])])},ee=[],oe={name:"backForm",props:[],data:function(){return{in1focus:!0,in2focus:!0,in3focus:!0,is4focus:!0,user:"",pass1:"",pass2:"",email:"",requestUrl:"http://gxd.newimg.ltd:8099/signUp"}},methods:{signup:function(){if(!this.user||!this.pass1||!this.pass2)return alert("请输入完整的表单");if(this.pass1!==this.pass2)return this.pass1=this.pass2="",alert("两次密码不一致,请重新输入");var t="".concat(this.requestUrl,"?username=").concat(this.user,"&password=").concat(this.pass1,"&email=").concat(this.email);this.ajax(t,(function(t){if(console.log(t),0===t.code)return alert("注册成功,请登陆")}))},change1:function(){this.in1focus=!this.in1focus},change2:function(){this.in2focus=!this.in2focus},change3:function(){this.in3focus=!this.in3focus},change4:function(){this.is4focus=!this.is4focus},changeColor:function(t){t.target.style.color="cyan"},resetColor:function(t){t.target.style.color=""},ajax:function(t,e){var o=new XMLHttpRequest;o.onreadystatechange=function(){200==o.status&&4==o.readyState&&e(JSON.parse(o.responseText))},o.open("POST",t,!0),o.send()}}},ne=oe,se=Object(f["a"])(ne,te,ee,!1,null,null,null),ae=se.exports,ie=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign-bottom flex-between"},[o("div",{staticClass:"backlog-btn",on:{click:t.restoreApp,mousedown:t.changeColor,mouseup:t.resetColor,touchstart:t.changeColor,touchend:t.resetColor}},[o("i",{staticClass:"iconfont backlog-i"},[t._v("")]),t._v("账号登陆")]),o("div")])},re=[],ce={name:"backFooter",props:["restoreApp"],methods:{changeColor:function(t){t.target.style.color="cyan"},resetColor:function(t){t.target.style.color=""}}},le=ce,ue=(o("e2c8"),Object(f["a"])(le,ie,re,!1,null,null,null)),de=ue.exports,pe={components:{backHead:Zt,backForm:ae,backFooter:de},name:"appBack",props:["restoreApp"]},fe=pe,he=(o("19c1"),Object(f["a"])(fe,Xt,Wt,!1,null,null,null)),me=he.exports,ge=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dropList",attrs:{id:t.dropShow?"show":"hide"}},[o("div",{staticClass:"drop-menu-content"},[o("div",{staticClass:"flex-between"},[o("div",{staticClass:"repass flex-between"},[o("div",{staticClass:"check",on:{click:t.changeSave}},[o("i",{directives:[{name:"show",rawName:"v-show",value:t.autoSave,expression:"autoSave"}],staticClass:"iconfont checkicon"},[t._v("")])]),t._v("记住密码")]),o("div",{staticClass:"forget"},[t._v("忘记密码")])]),o("div",{staticClass:"flex-between"},[o("div",{staticClass:"autolog flex-between"},[o("div",{staticClass:"check",on:{click:t.changeAuLog}},[o("i",{directives:[{name:"show",rawName:"v-show",value:t.autoLogin,expression:"autoLogin"}],staticClass:"iconfont checkicon"},[t._v("")])]),t._v("自动登录")]),o("div",{staticClass:"signup-btn",on:{click:t.rotateApp}},[t._v("注册账号")])])])])},ve=[],ke={name:"dropList",props:["dropShow","autoSave","autoLogin","changeSave","changeAuLog","rotateApp"],methods:{}},be=ke,_e=(o("4ebb"),Object(f["a"])(be,ge,ve,!1,null,null,null)),ye=_e.exports,we={name:"Login",props:["loginOk"],components:{appFace:Rt,appBack:me,dropList:ye},data:function(){return{dropShow:!1,autoSave:"true"===localStorage.getItem("autoSave"),autoLogin:"true"===localStorage.getItem("autoLogin"),user:"",pass:"",isrotate:!1,isDropShow:!0,requestUrl:"http://gxd.newimg.ltd:8099/logIn"}},methods:{changeDrop:function(){this.dropShow=!this.dropShow},changeAuLog:function(){this.autoLogin=!this.autoLogin},changeSave:function(){this.autoSave=!this.autoSave},get_user_pass:function(t,e){var o=[t,e];this.user=o[0],this.pass=o[1]},rotateApp:function(){var t=this;this.isrotate=!this.isrotate,this.isDropShow=!this.isDropShow,setTimeout((function(){t.$refs.back.$el.style.zIndex=2}),500)},restoreApp:function(){var t=this;this.isrotate=!this.isrotate,setTimeout((function(){t.isDropShow=!t.isDropShow,t.$refs.back.$el.style.zIndex=0}),500)},login:function(){var t=this,e="".concat(this.requestUrl,"?username=").concat(this.user,"&password=").concat(this.pass);this.ajax(e,(function(e){console.log(e),0===e.code?(localStorage.setItem("token",e.data),setTimeout((function(){t.loginOk()}),1e3)):alert("用户不存在或密码错误")}))},ajax:function(t,e){var o=new XMLHttpRequest;o.onreadystatechange=function(){200==o.status&&4==o.readyState&&e(JSON.parse(o.responseText))},o.open("POST",t,!0),o.send()}},watch:{autoSave:{immediate:!0,handler:function(t){localStorage.setItem("autoSave",t)}},autoLogin:{immediate:!0,handler:function(t){localStorage.setItem("autoLogin",t)}},user:{immediate:!0,handler:function(t,e){t&&this.autoLogin&&!e&&this.login()}}}},Ce=we,xe=(o("9196"),Object(f["a"])(Ce,ht,mt,!1,null,"0f56f6fe",null)),Se=xe.exports,Oe={name:"App",components:{todo:ft,Login:Se},data:function(){return{isLogin:!1}},methods:{loginOk:function(){this.isLogin=!0},backLogin:function(){this.isLogin=!1,localStorage.setItem("autoLogin","false")}}},De=Oe,Le=(o("034f"),Object(f["a"])(De,s,a,!1,null,null,null)),Te=Le.exports;o("ef07");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Te)}}).$mount("#app")},"5caf":function(t,e,o){},6382:function(t,e,o){"use strict";o("4b1a")},"6bab":function(t,e,o){},"6dc8":function(t,e,o){"use strict";o("5caf")},"6e15":function(t,e,o){"use strict";o("1056")},"76bf":function(t,e,o){},"85ec":function(t,e,o){},"8ede":function(t,e,o){},9196:function(t,e,o){"use strict";o("3ccb")},"9b07":function(t,e,o){"use strict";o("a4d1")},a175:function(t,e,o){},a4d1:function(t,e,o){},ae79:function(t,e,o){},bb82:function(t,e,o){},bfc3:function(t,e,o){},c523:function(t,e,o){},d432:function(t,e,o){},d86c:function(t,e,o){"use strict";o("6bab")},e0b6:function(t,e,o){},e1aa:function(t,e,o){"use strict";o("1687")},e2c8:function(t,e,o){"use strict";o("a175")},e9b2:function(t,e,o){"use strict";o("238b")},ef07:function(t,e,o){},f49a:function(t,e,o){"use strict";o("c523")},f909:function(t,e,o){"use strict";o("bfc3")}});
//# sourceMappingURL=app.4e6cb2ef.js.map