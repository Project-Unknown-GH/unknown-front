(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{283:function(e,n,t){"use strict";n.a={serverUrl:"http://api.projectunkn.com",stripeKey:"pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T",stripeOptions:{}}},348:function(e,n,t){"use strict";t.r(n);t(69);var r=t(25),c=t(0),o=t(283),l=Stripe("pk_test_1SMbb3HOTJRaOp9Cpy8iAg9K00hW9hlE7T"),d=c.a.extend({data:function(){return{seshkey:null,payable:!1,unsubscribable:!1}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o.a.serverUrl,"/api/payment/payable"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 2:return t=n.sent,n.next=5,t.json();case 5:if(n.t0=n.sent,!0!==n.t0){n.next=14;break}return n.next=9,fetch("".concat(o.a.serverUrl,"/api/payment/createPayment"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 9:return r=n.sent,n.next=12,r.json();case 12:e.seshkey=n.sent.session,e.payable=!0;case 14:return n.next=16,fetch("".concat(o.a.serverUrl,"/api/payment/unsubscribable"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 16:return c=n.sent,n.next=19,c.json();case 19:if(n.t1=n.sent,!0!==n.t1){n.next=22;break}e.unsubscribable=!0;case 22:case"end":return n.stop()}}),n)})))()},methods:{pay:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===(t=e.seshkey)||void 0===t?void 0:t.id)){n.next=3;break}return n.next=3,l.redirectToCheckout({sessionId:e.seshkey.id});case 3:case"end":return n.stop()}}),n)})))()},unsubscribe:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o.a.serverUrl,"/api/payment/cancel"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 2:case"end":return e.stop()}}),e)})))()}}}),y=t(61),h=t(86),f=t.n(h),m=t(138),component=Object(y.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"payment"}},[t("h1",[e._v("Become a member of Project Unknown")]),e._v(" "),t("v-btn",{attrs:{disabled:!0!==e.payable},on:{click:e.pay}},[e._v("\n        "+e._s("Sold out"===e.payable?"Sold out":"Pay with credit card")+"\n    ")]),e._v(" "),t("v-btn",{attrs:{disabled:!e.unsubscribable},on:{click:e.unsubscribe}},[e._v("\n        Unsubscribe\n    ")])],1)}),[],!1,null,null,null);n.default=component.exports;f()(component,{VBtn:m.a})}}]);