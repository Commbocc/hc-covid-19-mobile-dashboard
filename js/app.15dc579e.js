(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hc-covid-19-mobile-dashboard/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-overlay",{attrs:{absolute:"",opacity:.75,value:e.$store.state.error}},[r("v-container",{attrs:{fluid:""}},[r("v-alert",{attrs:{type:"warning"}},[e._v(" An error has occured, please try again later. ")])],1)],1),r("Navigation"),r("v-main",[e.$store.state.accessToken?r("Report",{staticClass:"fill-height"}):e._e()],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",[r("v-btn",{attrs:{fixed:"",color:"primary",fab:"",dark:"",top:"",right:""},on:{click:function(t){e.$store.state.showNavigationDrawer=!e.$store.state.showNavigationDrawer}}},[r("v-icon",[e._v("mdi-menu")])],1),r("v-navigation-drawer",{attrs:{floating:"",temporary:"",right:"",app:"",overflow:""},scopedSlots:e._u([{key:"append",fn:function(){return[r("div",{staticClass:"pa-2"},[r("v-btn",{attrs:{href:"http://hcflgov.net",target:"_blank",outlined:"",color:"#FF6F5B",block:""}},[e._v("HCFLGOV.net")])],1)]},proxy:!0}]),model:{value:e.$store.state.showNavigationDrawer,callback:function(t){e.$set(e.$store.state,"showNavigationDrawer",t)},expression:"$store.state.showNavigationDrawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[e._v(" COVID-19 Dashbaord ")]),r("v-list-item-subtitle",[e._v(" Hillsborough County ")])],1)],1),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},e._l(e.pages,(function(t){return r("v-list-item",{key:t.name,attrs:{link:""},on:{click:function(r){return e.goToPage(t.name)}}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-file-document-outline")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.displayName))])],1)],1)})),1)],1)],1)},s=[],c=r("2f62"),u={computed:Object(c["c"])({pages:function(e){return e.pages}}),methods:Object(c["b"])(["goToPage"])},l=u,p=r("2877"),f=r("6544"),d=r.n(f),v=r("8336"),m=r("ce7e"),g=r("132d"),b=r("8860"),h=r("da13"),w=r("5d23"),y=r("34c3"),k=r("f774"),O=Object(p["a"])(l,i,s,!1,null,null,null),$=O.exports;d()(O,{VBtn:v["a"],VDivider:m["a"],VIcon:g["a"],VList:b["a"],VListItem:h["a"],VListItemContent:w["a"],VListItemIcon:y["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VNavigationDrawer:k["a"]});var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article")},x=[],j=(r("d81d"),r("b0c0"),r("5530")),T=(r("96cf"),r("1da1")),P={mounted:function(){var e=this,t=this.$powerbi.embed(this.$el,this.config);t.off("loaded"),t.on("loaded",Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("setReport",e.report),t.next=3,e.getPages();case 3:case"end":return t.stop()}}),t)}))))},methods:{getPages:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.report.getPages();case 2:r=t.sent,r=r.map((function(e){var t=e.name,r=e.displayName;return{name:t,displayName:r}})),e.$store.commit("setPages",r);case 5:case"end":return t.stop()}}),t)})))()}},computed:{report:function(){return this.$powerbi.get(this.$el)},config:function(){return Object(j["a"])(Object(j["a"])({},this.$store.getters.config),{},{type:"report",tokenType:this.$powerbiModels.TokenType.Embed,settings:this.settings})},settings:function(){return{layoutType:this.$powerbiModels.LayoutType.MobilePortrait,panes:{filters:{expanded:!1,visible:!1},pageNavigation:{visible:!0}}}}}},V=P,N=Object(p["a"])(V,_,x,!1,null,null,null),R=N.exports,D={components:{Navigation:$,Report:R},created:function(){this.$store.dispatch("authenticate")}},M=D,C=r("0798"),E=r("7496"),I=r("a523"),L=r("f6c4"),S=r("a797"),U=Object(p["a"])(M,a,o,!1,null,null,null),A=U.exports;d()(U,{VAlert:C["a"],VApp:E["a"],VContainer:I["a"],VMain:L["a"],VOverlay:S["a"]});var F=r("bc3a"),B=r.n(F);n["a"].use(c["a"]);var H="f1bc2751-9253-4e3f-872c-8f89af3d2b98",J=new c["a"].Store({state:function(){return{showNavigationDrawer:!1,accessToken:null,embedUrl:null,report:null,pages:[],error:!1}},actions:{authenticate:function(e){return Object(T["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,B.a.get("https://hc-caching-proxy.herokuapp.com/powerbi/".concat(H));case 4:n=t.sent,a=n.data,o=a.accessToken,i=a.embedUrl,r("setAccessToken",o),r("setEmbedUrl",i),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),r("setError",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()},goToPage:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,r.next=3,n.report.setPage(t);case 3:n.showNavigationDrawer=!1;case 4:case"end":return r.stop()}}),r)})))()}},mutations:{setReport:function(e,t){e.report=t},setAccessToken:function(e,t){e.accessToken=t},setEmbedUrl:function(e,t){e.embedUrl=t},setPages:function(e,t){e.pages=t},setError:function(e,t){console.error(t),e.error=t}},getters:{config:function(e){var t=e.accessToken,r=e.embedUrl;return{accessToken:t,embedUrl:r,id:H}}},modules:{}}),G=r("f309");n["a"].use(G["a"]);var q=new G["a"]({});n["a"].config.productionTip=!1,n["a"].prototype.$powerbi=window.powerbi,n["a"].prototype.$powerbiModels=window["powerbi-client"].models,new n["a"]({store:J,vuetify:q,render:function(e){return e(A)}}).$mount("#app")}});
//# sourceMappingURL=app.15dc579e.js.map