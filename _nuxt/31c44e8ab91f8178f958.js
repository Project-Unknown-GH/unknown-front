(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{284:function(e,r,t){"use strict";r.a={serverUrl:"https://api.projectunkn.com",stripeKey:"pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T",stripeOptions:{}}},305:function(e,r,t){var content=t(326);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(12).default)("2d4f7418",content,!0,{sourceMap:!1})},325:function(e,r,t){"use strict";var n=t(305);t.n(n).a},326:function(e,r,t){(r=t(11)(!1)).push([e.i,".v-tab-item[data-v-0f2bd35e]{padding:20px}",""]),e.exports=r},383:function(e,r,t){"use strict";t.r(r);t(69);var n=t(25),o=t(0),c=t(284),l=o.a.extend({name:"Login",data:function(){return{username:"",email:"",password:"",error:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/.test(e)||"Password must contain 8 characters, and at least 1 number and special character"}],tab:null}},computed:{errored:function(){return""!==this.error}},methods:{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(c.a.serverUrl,"/api/auth/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});case 2:return t=r.sent,r.next=5,t.json();case 5:if(200!==(n=r.sent).status){r.next=11;break}return r.next=9,e.$router.push("/dashboard");case 9:r.next=12;break;case 11:e.error=n.message;case 12:case"end":return r.stop()}}),r)})))()},create:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(c.a.serverUrl,"/api/users/createUser"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,username:e.username,password:e.password})});case 2:return t=r.sent,r.next=5,t.json();case 5:if(201!==r.sent.status){r.next=9;break}return r.next=9,e.$router.push("/dashboard");case 9:case"end":return r.stop()}}),r)})))()},logout:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c.a.serverUrl,"/api/auth/logout"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.username="",this.email="",this.password=""}}}),d=(t(325),t(62)),v=t(87),m=t.n(v),f=t(130),h=t(327),w=t(324),x=t(377),_=t(378),k=t(386),R=t(381),y=t(366),component=Object(d.a)(l,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-layout",[t("v-tabs",{attrs:{"fixed-tabs":"",color:"white","slider-color":"white"},model:{value:e.tab,callback:function(r){e.tab=r},expression:"tab"}},[t("v-tab",[e._v("Register")]),e._v(" "),t("v-tab-item",{staticClass:"v-tab-item"},[t("v-form",[t("v-text-field",{attrs:{label:"Username",required:""},model:{value:e.username,callback:function(r){e.username=r},expression:"username"}}),e._v(" "),t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}}),e._v(" "),t("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),e._v(" "),t("br"),e._v(" "),t("v-btn",{attrs:{color:"success"},on:{click:e.create}},[e._v("Submit")]),e._v(" "),t("v-btn",{attrs:{color:"error"},on:{click:e.resetForm}},[e._v("Reset form")])],1),e._v(" "),t("v-tab",[e._v("Login")]),e._v(" "),t("v-tab-item",{staticClass:"v-tab-item"},[t("v-form",[t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}}),e._v(" "),t("v-text-field",{attrs:{label:"Password",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),e._v(" "),t("br"),e._v(" "),t("v-btn",{attrs:{color:"success"},on:{click:e.login}},[e._v("Submit")]),e._v(" "),t("v-btn",{attrs:{color:"error"},on:{click:e.resetForm}},[e._v("Reset form")])],1),e._v(" "),t("v-tab",[e._v("Logout")]),e._v(" "),t("v-tab-item",{staticClass:"v-tab-item"},[t("v-btn",{attrs:{large:"",block:"",color:"error"},on:{click:e.logout}},[e._v("Log out")])],1)],1),e._v(" "),t("v-snackbar",{attrs:{top:!0,color:"error"},model:{value:e.errored,callback:function(r){e.errored=r},expression:"errored"}},[e._v("\n        "+e._s(e.error)+"\n        "),t("v-btn",{on:{click:function(r){e.error=""}}},[e._v("\n            Close\n        ")])],1)],1)}),[],!1,null,"0f2bd35e",null);r.default=component.exports;m()(component,{VBtn:f.a,VForm:h.a,VLayout:w.a,VSnackbar:x.a,VTab:_.a,VTabItem:k.a,VTabs:R.a,VTextField:y.a})}}]);