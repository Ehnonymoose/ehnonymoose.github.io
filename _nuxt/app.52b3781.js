(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,n,e){},113:function(t,n,e){},114:function(t,n,e){},151:function(t,n,e){"use strict";var o=e(1),r=e(187),l=e.n(r);o.a.component("VGallery",l.a)},189:function(t,n,e){"use strict";e(12),e(223);var o={data:function(){return{showCovidWarning:!1,links:[{label:"Home",to:"/"},{label:"Our Story",to:"/story"},{label:"Wedding Party",to:"/fellowship-of-the-ring"},{label:"Logistics",to:"/logistics"},{label:"RSVP",to:"/rsvp"},{label:"Registry",to:"/registry"}]}},methods:{hideCovidWarning:function(){this.showCovidWarning=!1,localStorage.covidWarningDismissed=Date.now()}},mounted:function(){if(localStorage.covidWarningDismissed){var t=Number.parseInt(localStorage.covidWarningDismissed),n=new Date(t);Date.now()-n>144e5?this.showCovidWarning=!0:this.showCovidWarning=!1}else this.showCovidWarning=!0}},r=(e(225),e(49)),l=e(64),c=e.n(l),v=e(275),d=e(148),_=e(59),h=e(269),f=e(276),m=e(274),C=e(145),w=e(146),y=e(90),V=e(115),k=e(278),x=e(271),W=e(75),S=e(272),D=e(273),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-sheet",{staticClass:"navbar",attrs:{tag:"header",elevation:"1"}},[e("v-container",{staticClass:"py-0",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center","no-gutters":""}},[e("v-col",{staticClass:"d-sm-none",attrs:{cols:"1"}},[e("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({attrs:{icon:""}},o),[e("v-icon",[t._v("mdi-menu")])],1)]}}])},[t._v(" "),e("v-list",t._l(t.links,(function(link){return e("v-list-item",{key:link.label,attrs:{to:link.to,disabled:link.soon}},[e("v-list-item-title",[t._v(t._s(link.label))])],1)})),1)],1)],1),t._v(" "),e("v-col",{staticClass:"app-title text-center",attrs:{cols:"10","offset-sm":"1"}},[t._v("\n        Daniel "),e("span",{staticStyle:{"font-size":"0.7em"}},[t._v("&")]),t._v(" Christine\n      ")])],1),t._v(" "),e("v-row",{staticClass:"hidden-xs-only pb-0 justify-center nav-item-row"},[t._l(t.links,(function(link){return[e("div",{key:link.label,staticClass:"pb-0"},[link.soon?e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({key:link.label,staticClass:"nav-item coming-soon",attrs:{text:"",tile:"",block:""}},o),[t._v("\n              "+t._s(link.label)+" \n              ")])]}}],null,!0)},[t._v(" "),e("span",[t._v("Coming soon!")])]):e("v-btn",{key:link.label,staticClass:"nav-item",attrs:{text:"",tile:"",block:"",nuxt:"",href:link.to}},[t._v("\n          "+t._s(link.label)+" \n          ")])],1)]}))],2),t._v(" "),e("v-dialog",{staticClass:"covid-warning",attrs:{"max-width":"600",persistent:""},model:{value:t.showCovidWarning,callback:function(n){t.showCovidWarning=n},expression:"showCovidWarning"}},[e("v-card",[e("v-card-title",[t._v("\n          We've Postponed!\n        ")]),t._v(" "),e("v-card-text",{staticClass:"subtitle-1"},[e("p",[t._v("\n            Unfortunately, we have determined that, for everyone's health and safety, it's best to postpone our wedding.\n          ")]),t._v(" "),e("p",[t._v("\n            The new date will be "),e("b",[t._v("September 12, 2021")]),t._v(".\n          ")]),t._v(" "),e("p",[t._v("\n            Hope to see you there! ❤\n          ")])]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.hideCovidWarning}},[t._v("Okay")])],1)],1)],1)],1)],1)}),[],!1,null,null,null),N=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:h.a,VContainer:f.a,VDialog:m.a,VIcon:C.a,VList:w.a,VListItem:y.a,VListItemTitle:V.a,VMenu:k.a,VRow:x.a,VSheet:W.a,VSpacer:S.a,VTooltip:D.a});var E={components:{Navbar:N}},O=(e(255),e(268)),j=e(277),L=Object(r.a)(E,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",{attrs:{light:""}},[n("Navbar"),this._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);n.a=L.exports;c()(L,{VApp:O.a,VContainer:f.a,VMain:j.a})},193:function(t,n,e){t.exports=e(194)},220:function(t,n,e){"use strict";var o=e(111);e.n(o).a},225:function(t,n,e){"use strict";var o=e(113);e.n(o).a},255:function(t,n,e){"use strict";var o=e(114);e.n(o).a},68:function(t,n,e){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}}},r=(e(220),e(49)),l=e(64),c=e.n(l),v=e(268),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"fe76af36",null);n.a=component.exports;c()(component,{VApp:v.a})}},[[193,7,1,9]]]);