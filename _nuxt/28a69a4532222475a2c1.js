(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{284:function(e,n,t){"use strict";n.a={serverUrl:"https://api.projectunkn.com",stripeKey:"pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T",stripeOptions:{}}},382:function(e,n,t){"use strict";t.r(n);t(69);var r=t(25),o=t(0),c=t(284),l=Stripe("pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T"),d=o.a.extend({name:"Dashboard",data:function(){return{userData:null,loaded:!1,userOpened:!1,unverified:!1,seshkey:null,payable:!1,unsubscribable:!1,keyData:null}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c.a.serverUrl,"/api/payment/payable"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 2:return r=n.sent,n.next=5,r.json();case 5:if(n.t0=n.sent,!0!==n.t0){n.next=14;break}return n.next=9,fetch("".concat(c.a.serverUrl,"/api/payment/createPayment"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 9:return o=n.sent,n.next=12,o.json();case 12:e.seshkey=n.sent.session,e.payable=!0;case 14:return n.next=16,fetch("".concat(c.a.serverUrl,"/api/payment/unsubscribable"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 16:return l=n.sent,n.next=19,l.json();case 19:if(n.t1=n.sent,!0!==n.t1){n.next=22;break}e.unsubscribable=!0;case 22:return n.next=24,e.getUserData();case 24:if(!(data=n.sent)){n.next=34;break}return e.userData=data,"none"===(null===(t=e.userData)||void 0===t?void 0:t.role)&&(e.unverified=!0),n.next=30,e.getKeysForUser();case 30:e.keyData=n.sent,e.loaded=!0,n.next=35;break;case 34:e.$router.push("/login");case 35:case"end":return n.stop()}}),n)})))()},methods:{resendVerificationEmail:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("none"!==(null===(t=e.userData)||void 0===t?void 0:t.role)){n.next=3;break}return n.next=3,fetch("".concat(c.a.serverUrl,"/api/email/sendVerificationEmail/").concat(e.userData.id));case 3:case"end":return n.stop()}}),n)})))()},getUserData:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c.a.serverUrl,"/api/users/userData"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});case 2:if(400!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",null);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent.user);case 10:case"end":return e.stop()}}),e)})))()},getKeysForUser:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.userData){n.next=3;break}return n.abrupt("return",{discordKey:{value:"You are not logged in!",used:!1},rigelKey:{value:"You are not logged in!",used:!1}});case 3:return n.next=5,fetch("".concat(c.a.serverUrl,"/api/keys/getKeysForUser"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t.id})});case 5:return r=n.sent,n.next=8,r.json();case 8:if(200===(o=n.sent).status){n.next=13;break}return n.abrupt("return",{discordKey:{value:o.message,used:!1},rigelKey:{value:o.message,used:!1}});case 13:return n.abrupt("return",{discordKey:{value:o.discordKey.value,used:o.discordKey.used},rigelKey:{value:o.rigelKey.value,used:o.rigelKey.used}});case 14:case"end":return n.stop()}}),n)})))()},pay:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===(t=e.seshkey)||void 0===t?void 0:t.id)){n.next=3;break}return n.next=3,l.redirectToCheckout({sessionId:e.seshkey.id});case 3:case"end":return n.stop()}}),n)})))()},unsubscribe:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c.a.serverUrl,"/api/payment/cancel"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 2:return n.next=4,e.$router.push("/dashboard");case 4:case"end":return n.stop()}}),n)})))()},roleToColor:function(e){return"admin"===e?"#cc2900":"member"===e?"#00800f":"verified"===e?"#003580":"#777"}}}),v=t(62),f=t(87),m=t.n(f),y=t(130),h=t(285),_=t(283),x=t(277),k=t(371),w=t(300),O=t(127),D=t(372),T=t(373),V=t(374),C=t(375),j=t(119),K=t(324),R=t(80),S=t(49),U=t(376),E=t(281),component=Object(v.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.loaded?t("v-layout",[t("v-container",[t("v-row",[t("v-card",[t("v-card-text",[t("p",[t("span",{staticClass:"display-3 text--primary"},[e._v("\n                            "+e._s(e.userData.username)+"\n                        ")]),e._v(" "),t("span",{staticClass:"display-2",style:{color:e.roleToColor(e.userData.role),fontWeight:"bold"}},[e._v("\n                            "+e._s(e.userData.role.charAt(0).toUpperCase())+"\n                        ")])])]),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{on:{click:function(n){e.userOpened=!e.userOpened}}},[e._v("\n                        "+e._s(e.userOpened?"Less info":"More info")+"\n                        "),t("v-icon",[e._v(e._s(e.userOpened?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e._v(" "),t("v-expand-transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.userOpened,expression:"userOpened"}]},[t("v-divider"),e._v(" "),t("v-list-item",{attrs:{"two-line":""}},[t("v-list-item-content",[t("v-list-item-title",[e._v("Email")]),e._v(" "),t("v-list-item-subtitle",[e._v("\n                                    "+e._s(e.userData.email)+"\n                                ")]),e._v(" "),"none"===e.userData.role?t("v-btn",{attrs:{small:"",width:"10px"},on:{click:e.resendVerificationEmail}},[e._v("\n                                    Resend verification email\n                                ")]):e._e()],1)],1),e._v(" "),t("v-list-item",{attrs:{"two-line":""}},[t("v-list-item-content",[t("v-list-item-title",[e._v("Role")]),e._v(" "),t("v-list-item-subtitle",[e._v("\n                                    "+e._s(e.userData.role)+"\n                                ")])],1)],1)],1)])],1),e._v(" "),t("v-spacer")],1),e._v(" "),t("br"),e._v(" "),t("v-row",[e.loaded?t("v-expansion-panels",{attrs:{multiple:""}},[t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\n                        Discord Key\n                    ")]),e._v(" "),t("v-expansion-panel-content",[e._v("\n                        "+e._s(e.keyData.discordKey.value)+"\n                    ")])],1),e._v(" "),t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\n                        Rigel Key\n                    ")]),e._v(" "),t("v-expansion-panel-content",[e._v("\n                        "+e._s(e.keyData.rigelKey.value)+"\n                    ")])],1)],1):e._e()],1),e._v(" "),t("br"),e._v(" "),t("v-row",[t("v-btn",{attrs:{disabled:!0},on:{click:e.pay}},[e._v("\n                Still in pre-release!\n            ")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{disabled:!e.unsubscribable},on:{click:e.unsubscribe}},[e._v("\n                Unsubscribe\n            ")])],1)],1),e._v(" "),t("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:e.unverified,callback:function(n){e.unverified=n},expression:"unverified"}},[t("v-card",[t("v-card-title",[e._v("Email verification")]),e._v(" "),t("v-card-text",[e._v("\n                In order to be a part of Project Unknown, your email must be\n                verified. Simply go to your email, find the verification\n                email that was sent by us, and click the link. Doing so will\n                help us prevent spam accounts. Thank you!\n            ")]),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(n){e.unverified=!1}}},[e._v("Close")])],1)],1)],1)],1):e._e()}),[],!1,null,"0114780a",null);n.default=component.exports;m()(component,{VBtn:y.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VContainer:x.a,VDialog:k.a,VDivider:w.a,VExpandTransition:O.a,VExpansionPanel:D.a,VExpansionPanelContent:T.a,VExpansionPanelHeader:V.a,VExpansionPanels:C.a,VIcon:j.a,VLayout:K.a,VListItem:R.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VRow:U.a,VSpacer:E.a})}}]);