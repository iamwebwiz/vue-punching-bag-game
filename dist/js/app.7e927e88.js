(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0ea0":function(e,t,n){"use strict";var a=n("ae4b"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("sui-container",[n("Game")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PunchingBag",{attrs:{gameEnded:e.gameEnded}}),n("BagHealth",{attrs:{state:e.bagHealthState,health:e.bagHealthStatus}}),n("GameControls",{attrs:{punch:e.handleBagPunch,gameEnded:e.gameEnded,reset:e.handleReset}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:{burst:e.gameEnded},attrs:{id:"bag"}})])},u=[],l={name:"PunchingBag",props:["gameEnded"]},d=l,f=(n("e41b"),n("2877")),h=Object(f["a"])(d,c,u,!1,null,"cab8721c",null),p=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("sui-progress",{attrs:{state:e.state,percent:e.health,progress:""}})],1)},b=[],v={name:"BagHealth",props:["health","state"]},m=v,w=(n("0ea0"),Object(f["a"])(m,g,b,!1,null,"82f71f14",null)),y=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"controls"}},[n("sui-button",{directives:[{name:"show",rawName:"v-show",value:!e.gameEnded,expression:"!gameEnded"}],attrs:{primary:""},on:{click:e.punch}},[e._v("Punch")]),n("sui-button",{attrs:{negative:""},on:{click:e.reset}},[e._v("Reset")])],1)])},_=[],S={name:"GameControls",props:["punch","gameEnded","reset"]},j=S,O=Object(f["a"])(j,E,_,!1,null,null,null),P=O.exports,H={name:"PunchingBagGame",components:{PunchingBag:p,BagHealth:y,GameControls:P},data:function(){return{bagHealthStatus:100,bagHealthState:"success",gameEnded:!1}},methods:{handleBagPunch:function(){this.bagHealthStatus-=10},handleReset:function(){this.bagHealthStatus=100,this.gameEnded=!1,this.bagHealthState="success"}},watch:{bagHealthStatus:function(e){e>=30&&e<=50&&(this.bagHealthState="warning"),e<30&&(this.bagHealthState="error"),0===e&&(this.gameEnded=!0)}}},x=H,B=Object(f["a"])(x,s,i,!1,null,null,null),k=B.exports,G={name:"PunchingBagGameApp",components:{Game:k}},$=G,A=(n("034f"),Object(f["a"])($,r,o,!1,null,null,null)),C=A.exports,M=n("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var N=n("92d5"),R=n.n(N);a["a"].use(R.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,n){},"67a1":function(e,t,n){},ae4b:function(e,t,n){},e41b:function(e,t,n){"use strict";var a=n("67a1"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7e927e88.js.map