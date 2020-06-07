(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{281:function(e,t,r){"use strict";t.a={serverUrl:"http://localhost:7400"}},284:function(e,t,r){var content=r(299);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("9eb2d990",content,!0,{sourceMap:!1})},298:function(e,t,r){"use strict";var n=r(284);r.n(n).a},299:function(e,t,r){(t=r(11)(!1)).push([e.i,".v-tab-item[data-v-75a5110c]{padding:20px}",""]),e.exports=t},327:function(e,t,r){"use strict";r.r(t);r(69);var n=r(25),o=r(0),c=r(281),l=o.a.extend({name:"Login",data:function(){return{username:"",email:"",password:"",status:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/.test(e)||"Password must contain 8 characters, and at least 1 number and special character"}],tab:null}},methods:{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c.a.serverUrl,"/api/auth/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});case 2:return r=t.sent,t.next=5,r.json();case 5:e.status=t.sent;case 6:case"end":return t.stop()}}),t)})))()},create:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c.a.serverUrl,"/api/users/createUser"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,username:e.username,password:e.password})});case 2:return r=t.sent,t.next=5,r.json();case 5:e.status=t.sent;case 6:case"end":return t.stop()}}),t)})))()},logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c.a.serverUrl,"/api/auth/logout"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:e.status=t.sent;case 6:case"end":return t.stop()}}),t)})))()},resetForm:function(){this.username="",this.email="",this.password=""}}}),v=(r(298),r(62)),d=r(89),m=r.n(d),f=r(138),w=r(321),h=r(295),x=r(322),_=r(328),k=r(326),R=r(323),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-tabs",{attrs:{"fixed-tabs":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("Register")]),e._v(" "),r("v-tab-item",{staticClass:"v-tab-item"},[r("v-form",[r("v-text-field",{attrs:{label:"Username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{color:"success"},on:{click:e.create}},[e._v("Submit")]),e._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:e.resetForm}},[e._v("Reset form")])],1),e._v(" "),r("v-tab",[e._v("Login")]),e._v(" "),r("v-tab-item",{staticClass:"v-tab-item"},[r("v-form",[r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{color:"success"},on:{click:e.login}},[e._v("Submit")]),e._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:e.resetForm}},[e._v("Reset form")])],1),e._v(" "),r("v-tab",[e._v("Logout")]),e._v(" "),r("v-tab-item",{staticClass:"v-tab-item"},[r("v-btn",{attrs:{large:"",block:"",color:"error"},on:{click:e.logout}},[e._v("Log out")])],1)],1),e._v("\n    "+e._s(e.status)+"\n")],1)}),[],!1,null,"75a5110c",null);t.default=component.exports;m()(component,{VBtn:f.a,VForm:w.a,VLayout:h.a,VTab:x.a,VTabItem:_.a,VTabs:k.a,VTextField:R.a})}}]);