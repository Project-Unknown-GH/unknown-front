(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{285:function(t,e,r){var content=r(320);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("01afeb8c",content,!0,{sourceMap:!1})},319:function(t,e,r){"use strict";var n=r(285);r.n(n).a},320:function(t,e,r){(e=r(11)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),e.push([t.i,"#stripes span[data-v-83e55efe]:first-child{grid-column:span 1;background:#35356e}#stripes span[data-v-83e55efe]:nth-child(2){grid-column:span 2;background:#2d3e62}#stripes span[data-v-83e55efe]:nth-child(3){grid-column:span 2;background:#37173b}#stripes span[data-v-83e55efe]:nth-child(4){grid-column:6;grid-row:3;background:#201565}#stripes span[data-v-83e55efe]:nth-child(5){grid-column:span 2;grid-row:4;background:#241659}#stripes[data-v-83e55efe]{width:100vw;height:calc(100vh - 100px);background:linear-gradient(150deg,#35356e 15%,#201565 70%,#111e2c 94%);display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(4,1fr);transform:skewY(-12deg);transform-origin:0;margin-top:-12px}.titleWords[data-v-83e55efe]{top:20vh;font-size:7vh;letter-spacing:3pt}.subtitleWords[data-v-83e55efe],.titleWords[data-v-83e55efe]{position:absolute;text-align:center;font-family:Montserrat,sans-serif}.subtitleWords[data-v-83e55efe]{top:35vh;font-size:3.5vh}@media only screen and (max-width:650px){.subtitleWords[data-v-83e55efe]{top:45vh}}.feature[data-v-83e55efe]{height:90%;text-align:center}.feature[data-v-83e55efe],.feature .featureIcon[data-v-83e55efe],.feature .featureText[data-v-83e55efe]{color:#222}",""]),t.exports=e},330:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{show:!1}}},o=(r(319),r(61)),c=r(85),l=r.n(c),d=r(138),f=r(288),v=r(280),m=(r(10),r(8),r(55),r(38),r(39),r(2)),y=(r(49),r(289),r(50),r(5),r(4),r(9),r(18),r(173),r(0)),h=r(79),_=r(1);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=["sm","md","lg","xl"],x=C.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=C.reduce((function(t,e){return t["offset"+Object(_.s)(e)]={type:[String,Number],default:null},t}),{}),k=C.reduce((function(t,e){return t["order"+Object(_.s)(e)]={type:[String,Number],default:null},t}),{}),S={col:Object.keys(x),offset:Object.keys(O),order:Object.keys(k)};function P(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var T=new Map,W=y.a.extend({name:"v-col",functional:!0,props:j(j(j(j({cols:{type:[Boolean,String,Number],default:!1}},x),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,o=(e.parent,"");for(var c in r)o+=String(r[c]);var l=T.get(o);return l||function(){var t,e;for(e in l=[],S)S[e].forEach((function(t){var n=r[t],o=P(e,t,n);o&&l.push(o)}));var n=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!n||!r.cols},Object(m.a)(t,"col-".concat(r.cols),r.cols),Object(m.a)(t,"offset-".concat(r.offset),r.offset),Object(m.a)(t,"order-".concat(r.order),r.order),Object(m.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),T.set(o,l)}(),t(r.tag,Object(h.a)(data,{class:l}),n)}}),I=r(273),V=r(119),N=r(295),D=r(324),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("div",{attrs:{id:"stripes"}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span"),t._v(" "),r("span"),t._v(" "),r("span")]),t._v(" "),r("h1",{staticClass:"titleWords"},[t._v("Project Unknown")]),t._v(" "),r("h3",{staticClass:"subtitleWords"},[t._v("A new, innovative cook group.")]),t._v(" "),r("br"),t._v(" "),r("h2",{staticStyle:{"font-family":"'Montserrat', sans-serif","font-size":"36px","text-align":"center"}},[t._v("\n        Why Project Unknown?\n    ")]),t._v(" "),r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",[r("v-card",{staticClass:"ma-3 pa-6 feature",attrs:{color:"#ddd"}},[r("v-icon",{staticClass:"featureIcon"},[t._v("mdi-account")]),t._v(" "),r("v-card-title",{staticClass:"justify-center"},[t._v("\n                        Great community\n                    ")]),t._v(" "),r("v-card-text",{staticClass:"featureText"},[t._v("\n                        Our community is helpful, friendly, and will always\n                        help you out with any botting problems or questions\n                        that you might have.\n                    ")])],1)],1),t._v(" "),r("v-col",[r("v-card",{staticClass:"ma-3 pa-6 feature",attrs:{color:"#ddd"}},[r("v-icon",{staticClass:"featureIcon"},[t._v("mdi-robot")]),t._v(" "),r("v-card-title",{staticClass:"justify-center"},[t._v("\n                        Custom-built monitors\n                    ")]),t._v(" "),r("v-card-text",{staticClass:"featureText"},[t._v("\n                        Our development team has carefully constructed a set\n                        of store monitors in order to keep you up to date on\n                        the latest restocks.\n                    ")])],1)],1),t._v(" "),r("v-col",[r("v-card",{staticClass:"ma-3 pa-6 feature",attrs:{color:"#ddd"}},[r("v-icon",{staticClass:"featureIcon"},[t._v("mdi-discord")]),t._v(" "),r("v-card-title",{staticClass:"justify-center"},[t._v("\n                        Exclusive discord\n                    ")]),t._v(" "),r("v-card-text",{staticClass:"featureText"},[t._v("\n                        If you join the group, you gain access to an\n                        exclusive Discord server with plenty of monitors and\n                        a great community.\n                    ")])],1)],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",[r("v-card",{staticClass:"ma-3 pa-6 feature",attrs:{color:"#ddd"}},[r("v-icon",{staticClass:"featureIcon"},[t._v("mdi-cash-multiple")]),t._v(" "),r("v-card-title",{staticClass:"justify-center"},[t._v("\n                        Affordable pricing\n                    ")]),t._v(" "),r("v-card-text",{staticClass:"featureText"},[t._v("\n                        The price to join is especially cheap, with a price\n                        of we don't know yet. Completely worth the money.\n                    ")])],1)],1),t._v(" "),r("v-col",[r("v-card",{staticClass:"ma-3 pa-6 feature",attrs:{color:"#ddd"}},[r("v-icon",{staticClass:"featureIcon"},[t._v("mdi-laptop")]),t._v(" "),r("v-card-title",{staticClass:"justify-center"},[t._v("\n                        Rigel\n                    ")]),t._v(" "),r("v-card-text",{staticClass:"featureText"},[t._v("\n                        Rigel is an automated chrome extension that\n                        maximizes your chances of checking out Supreme. Put\n                        in your info, add your item to the cart, and Rigel\n                        will do the rest.\n                    ")])],1)],1),t._v(" "),r("v-col",[r("v-card",{staticClass:"ma-3 pa-6 feature",attrs:{color:"#ddd"}},[r("v-icon",{staticClass:"featureIcon"},[t._v("mdi-gift")]),t._v(" "),r("v-card-title",{staticClass:"justify-center"},[t._v("\n                        Giveaways\n                    ")]),t._v(" "),r("v-card-text",{staticClass:"featureText"},[t._v("\n                        We host a large amount of giveaways, giving away\n                        things like slots, Discord Nitro, premium shoe bots,\n                        and more!\n                    ")])],1)],1)],1)],1),t._v(" "),r("v-card",{staticClass:"ma-3 pa-6",staticStyle:{"text-align":"center"}},[r("v-card-title",{staticClass:"justify-center",staticStyle:{"font-family":"'Montserrat',sans-serif","font-size":"36px","letter-spacing":"1pt"}},[t._v("Register")]),t._v(" "),r("v-btn",{attrs:{color:"error",to:"login"}},[t._v("Register now!")]),t._v(" "),r("v-card-text",[t._v("Creating an account is free. Once you are registered, you can\n            pay [amount] to become a paid member of Project\n            Unknown!")])],1)],1)}),[],!1,null,"83e55efe",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardText:v.a,VCardTitle:v.b,VCol:W,VContainer:I.a,VIcon:V.a,VLayout:N.a,VRow:D.a})}}]);