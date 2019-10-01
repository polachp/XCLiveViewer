(window["webpackJsonpxc-live-viewer"]=window["webpackJsonpxc-live-viewer"]||[]).push([[0],{112:function(e,t,n){},116:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),l=n(8),c=n(173),s=n(61),u=n.n(s),f=n(170),d=n(171),m=n(75),h=n.n(m),g=n(74),b=n.n(g),p=n(73),E=n.n(p),v=(n(112),null);var y=function(){var e=Object(a.useState)({ready:!1,error:!1}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){null===v&&(v=new Promise((function(e,t){console.log("Loading Google Maps API ...");var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCrP5uoEJXfEvz8f_y1HgzQnqUGHz0Aak",n.async=!0,n.addEventListener("load",(function(){return e(!0)})),n.addEventListener("error",(function(){return e(!1)})),document.body.appendChild(n)}))),v.then((function(e){e?(console.log("Google Maps API loaded."),r({ready:!0,error:!1})):(console.log("Error: Cannot load Google Maps API."),r({ready:!1,error:!0}))}))}),[]),[n.ready,n.error,n.ready?window.google:null]},O=n(153),w=n(156),S=n(155),C=n(63),k=n.n(C),I=Object(O.a)((function(e){return{progress:{margin:e.spacing(2)}}})),j=function(e){var t=e.message,n=e.hideIf,a=e.subRef,i=I();return r.a.createElement(c.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center",ref:a},r.a.createElement(c.a,{textAlign:"center"},r.a.createElement(S.a,{className:i.progress}),r.a.createElement(w.a,null,t)))},N=function(e){var t=e.message,n=e.hideIf,a=I();return r.a.createElement(c.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(c.a,{textAlign:"center"},r.a.createElement(k.a,{fontSize:"large",color:"error",className:a.progress}),r.a.createElement(w.a,{color:"error"},t)))},T=n(64),x=function(){var e=y(),t=Object(l.a)(e,3),n=t[0],i=t[1],o=t[2],s=Object(a.useRef)(),u=Object(a.useState)(null),f=Object(l.a)(u,2),d=f[0],m=f[1];return Object(a.useLayoutEffect)((function(){n&&!d&&m(new o.maps.Map(s.current,{center:{lat:46.509012,lng:11.827984},mapTypeId:"terrain",zoom:12,disableDefaultUI:!0,scaleControl:!0,fullscreenControl:!0,styles:T}))}),[n,d,o,s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{width:"100%",height:"100%",display:n?"block":"none",ref:s}),r.a.createElement(j,{message:"Loading Maps ...",hideIf:n||i}),r.a.createElement(N,{message:"Unable to load map!",hideIf:!i}))},F=n(166),A=n(22),P=n(68),L=n.n(P),_=n(157),M=n(158),R=n(10),W=n(175),z=n(172),D=n(164),B=n(165),J=n(159),G=n(160),H=n(161),U=n(162),V=n(163),Y=n(21),X=n(65);function q(e,t,n){return function(){var r=Object(a.useState)(n),i=Object(l.a)(r,2),o=i[0],c=i[1];return Object(a.useEffect)((function(){var n=e instanceof Function?e():e,a=function(e){c(e)};return n.addListener(t,a),function(){n.removeListener(t,a)}}),[]),o}}var Q=n(18),$=function(){function e(t,n,a){var r=this;Object(Y.a)(this,e),this.formatSubscribedFlights=function(){var e=new Date(Date.now()-9e5);e.setMilliseconds(0);var t=e.toISOString();return r.subscribedFlights.map((function(e){return{flightUuid:e,start:t}}))},this.setSubscribedFlights=function(e){r.subscribedFlights=e,r.sock.readyState===WebSocket.OPEN&&r.connected&&r.sock.send(JSON.stringify({tag:"WebFollow",contents:r.formatSubscribedFlights()}))},this.onOpen=function(){r.handleReset(),console.log("WebSocket: Open!"),r.setConnectionState(re.ESTABLISHED),r.connected=!0,r.sock.send(JSON.stringify({tag:"WebFilterArea",area:[{lat:-90,lon:-180},{lat:90,lon:180}]})),r.sock.send(JSON.stringify({tag:"WebFilterContest",contents:"alpha9999"})),r.sock.send(JSON.stringify({tag:"WebFollow",contents:r.formatSubscribedFlights()}))},this.onMessage=function(e){console.log("WebSocket: Message!"),r.setConnectionState(re.ACTIVE);var t=JSON.parse(e.data);clearTimeout(r.watchdog),r.watchdog=setTimeout((function(){r.setConnectionState(re.INACTIVE)}),7e4),r.processMessage(t)},this.onClose=function(e){r.connected=!1,console.log("WebSocket: Close!"),r.setConnectionState(re.NO_CONNECTION),setTimeout(r.connect.bind(r),1e3)},this.onError=function(e){r.connected=!1,console.log("WebSocket: Error!")},this.handleReset=function(){console.log("TODO: handle reset!")},this.processMessage=function(e){if("tag"in e)switch(e.tag){case"LiveFlightInfos":r.dispatchInfoMessage(e.contents);break;case"LiveFlightChunk":r.dispatchTracklogMessage(e);break;default:console.log("Warning: Unknown message tag '".concat(e.tag,"'!"),e)}else console.log("Warning: Invalid message format!",e)},this.setConnectionState=t,this.dispatchInfoMessage=n,this.dispatchTracklogMessage=a,this.subscribedFlights=[],this.connect(),this.connected=!1}return Object(Q.a)(e,[{key:"connect",value:function(){"WebSocket"in window?(this.connected=!1,this.setConnectionState(re.CONNECTING),this.sock=new WebSocket("wss://live.xcontest.org/websock/webclient"),this.sock.onopen=this.onOpen,this.sock.onmessage=this.onMessage,this.sock.onclose=this.onClose,this.sock.onerror=this.onError):(this.setConnectionState(re.ERROR),alert("WebSocket NOT supported by your Browser!"))}}]),e}(),K=n(11),Z=n(66);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(K.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=Object(Z.a)("chosen-pilots");var ae=function(){function e(t){var n=this;Object(Y.a)(this,e),this.setSubscribedPilots=function(e){n._subscribedPilots=e,n._updateSubscribedFlights()},this.pushNewInfo=function(e){console.log("newInfo: ",e),n._pilotInfos=e,n._updateSubscribedFlights()},this.pushNewData=function(e,t){console.log("newTrackdata: ",e,t)},this._updateSubscribedFlights=function(){var e=Object.values(n._pilotInfos).filter((function(e){return e.info.user.username in n._subscribedPilots})).map((function(e){return e.flightId})),t=new Set(e);(function(e,t){if(e.size!==t.size)return!1;var n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;if(!t.has(l))return!1}}catch(c){a=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return!0})(t,n._subscribedFlights)||(console.log("Swap: ",n._subscribedFlights,t),n._setSubscribedFlights(t))},this._callbacks=[],this._subscribedPilots=function(){var e=JSON.parse(localStorage.getItem("chosen-pilots"));return null===e?{}:e}(),this._subscribedFlights=new Set,this._pilotInfos={},this._setSubscribedFlights=function(e){n._subscribedFlights=e,t(Array.from(e))}}return Object(Q.a)(e,[{key:"registerCallback",value:function(e){}},{key:"unregisterCallback",value:function(e){}}]),e}(),re={CONNECTING:"connecting",ERROR:"error",ESTABLISHED:"established",ACTIVE:"active",INACTIVE:"inactive",NO_CONNECTION:"no connection",NO_INFORMATION:"no information"},ie=function e(){var t=this;Object(Y.a)(this,e),this.setSubscribedFlights=function(e){t.socket.setSubscribedFlights(e)},this.setSubscribedPilots=function(e){t.animation.setSubscribedPilots(e)},this.onConnectionStateChanged=function(e){t.eventEmitter.emit("connectionStateChanged",e)},this.onInfoMessageReceived=function(e){t.pilots={};var n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value,s=Object(l.a)(c,2),u=s[0],f=s[1];f.overriden||(f.flightId=u,t.pilots[f.info.user.username]=f)}}catch(d){a=!0,r=d}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}t.eventEmitter.emit("pilotStateChanged",t.pilots),t.animation.pushNewInfo(t.pilots)},this.onTracklogMessageReceived=function(e){t.animation.pushNewData(e.flightUuid,e.trackChunk)},this.pilots=[],this.eventEmitter=new X.EventEmitter,this.socket=new $(this.onConnectionStateChanged,this.onInfoMessageReceived,this.onTracklogMessageReceived),this.animation=new ae(this.setSubscribedFlights)},oe=null,le=function(){return oe||(oe=new ie),oe},ce=q((function(){return le().eventEmitter}),"pilotStateChanged",[]),se=q((function(){return le().eventEmitter}),"connectionStateChanged",re.NO_INFORMATION),ue=[{id:"name",label:"Name",minWidth:0,render:function(e){return r.a.createElement(r.a.Fragment,null,e.user.fullname,r.a.createElement(w.a,{component:"span",variant:"caption",color:"textSecondary",style:{paddingLeft:".3em"}},"[",e.user.username,"]"))}},{id:"country",label:"Country",minWidth:"4em",align:"right",render:function(e){return r.a.createElement(r.a.Fragment,null,e.user.nationality.iso,r.a.createElement(c.a,{fontSize:"large",marginLeft:"4px",boxShadow:1,style:{verticalAlign:"middle"},className:"flag-icon flag-icon-"+e.user.nationality.iso.toLowerCase()}))}}];var fe=function(e){var t=Object(A.a)(),n=ce(),i=Object(a.useState)([]),o=Object(l.a)(i,2),s=o[0],u=o[1],f=Object(a.useState)(""),d=Object(l.a)(f,2),m=d[0],h=d[1],g=s.length,b=function(){h(""),u([]),e.onClose()},p=Object(_.a)(t.breakpoints.down("xs")),E=function(e){return""===m||e.toLowerCase().includes(m.toLowerCase())},v=Object.values(n).filter((function(e){return E(e.info.user.username)||E(e.info.user.fullname)}));return 0===v.length&&!/\s/.test(m)&&m.length>0&&v.push({info:{user:{login:null,username:m,fullname:"Offline User",gender:"-",nationality:{iso:"--",name:"--"}},flightId:null}}),r.a.createElement(W.a,{open:e.open,onClose:b,fullScreen:p},r.a.createElement(M.a,{style:0===g?{}:"light"===t.palette.type?{color:t.palette.secondary.main,backgroundColor:Object(R.d)(t.palette.secondary.light,.85)}:{color:t.palette.text.primary,backgroundColor:t.palette.secondary.dark}},g>0?r.a.createElement(w.a,{component:"div",color:"inherit",variant:"subtitle1"},g," selected"):r.a.createElement(w.a,{component:"div",variant:"h6",id:"tableTitle"},"Add new pilots:")),r.a.createElement(c.a,{paddingLeft:"1em",paddingRight:"1em",paddingTop:"4px"},r.a.createElement(z.a,{margin:"dense",autoComplete:"off",variant:"outlined",id:"search_field",label:"Search",type:"search",fullWidth:!0,onChange:function(e){return h(e.target.value)}})),r.a.createElement(c.a,{flex:"1 1 auto",marginY:"8px",style:{overflowY:"auto"}},r.a.createElement(J.a,{stickyHeader:!0,size:"small"},r.a.createElement(G.a,null,r.a.createElement(H.a,null,ue.map((function(e){return r.a.createElement(U.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth},component:"th"},e.label)})))),r.a.createElement(V.a,null,v.map((function(t){var n=t.info.user.username,a=function(e){return-1!==s.indexOf(e)}(n),i=function(t){return-1!==e.alreadyAdded.indexOf(t)}(n),o=i?{filter:"grayscale(100%) opacity(30%)"}:{},l=ue.map((function(e){return r.a.createElement(U.a,{key:e.id,align:e.align},r.a.createElement(c.a,{style:o},e.render(t.info)))}));return i?r.a.createElement(H.a,{key:n},l):r.a.createElement(H.a,{key:n,selected:a,onClick:function(e){return function(e,t){var n=s.indexOf(t),a=[];-1===n?a=a.concat(s,t):0===n?a=a.concat(s.slice(1)):n===s.length-1?a=a.concat(s.slice(0,-1)):n>0&&(a=a.concat(s.slice(0,n),s.slice(n+1))),u(a)}(0,n)}},l)}))))),r.a.createElement(D.a,null,r.a.createElement(B.a,{onClick:b,color:"primary"},"Cancel"),r.a.createElement(B.a,{disabled:0===g,onClick:function(){e.onAddPilots(s),b()},color:"primary"},"Add")))},de=function(){var e=Object(A.a)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],o=n[1],s=function(){var e=ne({}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(e){le().setSubscribedPilots(e),a(e)};return[n,function(e){var t=te({},n),a=!1,i=!0,o=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value;u in t||(t[u]=null,a=!0)}}catch(f){o=!0,l=f}finally{try{i||null==s.return||s.return()}finally{if(o)throw l}}a&&r(t)},function(e){var t=te({},n),a=!1,i=!0,o=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value;u in t&&(delete t[u],a=!0)}}catch(f){o=!0,l=f}finally{try{i||null==s.return||s.return()}finally{if(o)throw l}}a&&r(t)}]}(),u=Object(l.a)(s,3),f=u[0],d=u[1],m=u[2],h=Object.entries(f).map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1],i=a;return null===a&&(i=n),r.a.createElement(c.a,{key:n,onClick:function(){return m([n])}},i)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{height:"100%",style:{overflowY:"auto"}},h),r.a.createElement(c.a,{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},r.a.createElement(F.a,{size:"small",color:"primary",onClick:function(){return o(!0)}},r.a.createElement(L.a,null))),r.a.createElement(fe,{open:i,onClose:function(){return o(!1)},onAddPilots:d,alreadyAdded:Object.keys(f)}))},me=n(168),he=n(169),ge=n(177),be=n(167),pe=n(72),Ee=n.n(pe),ve=n(70),ye=n.n(ve),Oe=n(69),we=n.n(Oe),Se=n(71),Ce=n.n(Se),ke=n(34),Ie=n.n(ke),je=Object(O.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},popover:{padding:e.spacing(1),align:"right"}}})),Ne=function(e){return r.a.createElement(be.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:r.a.createElement(S.a,{disableShrink:e.disableShrink,color:"secondary",size:15,thickness:10})},e.children)},Te=function(){var e=je(),t=se(),n=r.a.useRef(),i=Object(a.useState)(null),o=Object(l.a)(i,2),s=o[0],u=o[1];r.a.useLayoutEffect((function(){n.current&&n.current.updatePosition()}),[t,s]);return r.a.createElement("div",null,r.a.createElement(me.a,{position:"static"},r.a.createElement(M.a,null,r.a.createElement(c.a,{clone:!0},r.a.createElement(he.a,{className:e.menuButton,edge:"start",color:"inherit"},r.a.createElement(Ee.a,null))),r.a.createElement(c.a,{flexGrow:1,clone:!0},r.a.createElement(w.a,{variant:"h6"},"XC Live Viewer")),r.a.createElement(he.a,{edge:"end",color:"inherit",onClick:function(e){return u(e.currentTarget)}},function(){switch(t){case re.ACTIVE:return r.a.createElement(we.a,null);case re.CONNECTING:return r.a.createElement(Ne,null,r.a.createElement(Ie.a,null));case re.ERROR:return r.a.createElement(ye.a,{color:"error"});case re.ESTABLISHED:return r.a.createElement(Ne,{disableShrink:!0},r.a.createElement(Ie.a,null));case re.INACTIVE:return r.a.createElement(Ce.a,null);case re.NO_CONNECTION:default:return r.a.createElement(Ie.a,null)}}()))),r.a.createElement(ge.a,{open:Boolean(s),anchorEl:s,onClose:function(){return u(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},action:n},r.a.createElement(c.a,{className:e.popover},r.a.createElement(w.a,null,t))))};function xe(){var e=r.a.useState(1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=r.a.useState(0),o=Object(l.a)(i,2),s=o[0],m=o[1],g=function(){m(window.innerHeight)};r.a.useLayoutEffect((function(){return g(),window.addEventListener("resize",g),function(){return window.removeEventListener("resize",g)}}),[]);return r.a.createElement(c.a,{height:s,display:"flex",flexDirection:"column"},r.a.createElement(c.a,{zIndex:100},r.a.createElement(Te,null)),r.a.createElement(c.a,{flexGrow:1,clone:!0},r.a.createElement(u.a,{disabled:!0,index:n},r.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},r.a.createElement(x,null)),r.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},r.a.createElement(de,null)),r.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},"Item Three"))),r.a.createElement(c.a,{zIndex:100,boxShadow:3},r.a.createElement(f.a,{value:n,onChange:function(e,t){return a(t)},showLabels:!0},r.a.createElement(d.a,{label:"Map",icon:r.a.createElement(E.a,null)}),r.a.createElement(d.a,{label:"Pilots",icon:r.a.createElement(b.a,null)}),r.a.createElement(d.a,{label:"Nearby",icon:r.a.createElement(h.a,null)}))))}var Fe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(xe,null))};n(116),n(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(118).config(),o.a.render(r.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e){e.exports=JSON.parse('[{"featureType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}]')},85:function(e,t,n){e.exports=n(121)}},[[85,1,2]]]);
//# sourceMappingURL=main.b420ed82.chunk.js.map