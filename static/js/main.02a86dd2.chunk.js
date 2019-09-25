(window["webpackJsonpxc-live-viewer"]=window["webpackJsonpxc-live-viewer"]||[]).push([[0],{44:function(e){e.exports=JSON.parse('[{"featureType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}]')},57:function(e,t,n){e.exports=n(93)},84:function(e,t,n){},88:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),s=n(7),c=n(124),l=n(41),u=n.n(l),h=n(122),m=n(123),d=n(53),f=n.n(d),g=n(52),E=n.n(g),p=n(51),v=n.n(p),b=(n(84),null);var y=function(){var e=Object(a.useState)({ready:!1,error:!1}),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){null===b&&(b=new Promise((function(e,t){console.log("Loading Google Maps API ...");var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCrP5uoEJXfEvz8f_y1HgzQnqUGHz0Aak",n.async=!0,n.addEventListener("load",(function(){return e(!0)})),n.addEventListener("error",(function(){return e(!1)})),document.body.appendChild(n)}))),b.then((function(e){e?(console.log("Google Maps API loaded."),o({ready:!0,error:!1})):(console.log("Error: Cannot load Google Maps API."),o({ready:!1,error:!0}))}))}),[]),[n.ready,n.error,n.ready?window.google:null]},O=n(114),w=n(116),C=n(115),I=n(43),k=n.n(I),S=Object(O.a)((function(e){return{progress:{margin:e.spacing(2)}}})),T=function(e){var t=e.message,n=e.hideIf,a=e.subRef,r=S();return o.a.createElement(c.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center",ref:a},o.a.createElement(c.a,{textAlign:"center"},o.a.createElement(C.a,{className:r.progress}),o.a.createElement(w.a,null,t)))},N=function(e){var t=e.message,n=e.hideIf,a=S();return o.a.createElement(c.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center"},o.a.createElement(c.a,{textAlign:"center"},o.a.createElement(k.a,{fontSize:"large",color:"error",className:a.progress}),o.a.createElement(w.a,{color:"error"},t)))},j=n(44),M=function(){var e=y(),t=Object(s.a)(e,3),n=t[0],r=t[1],i=t[2],l=Object(a.useRef)(),u=Object(a.useState)(null),h=Object(s.a)(u,2),m=h[0],d=h[1];return Object(a.useLayoutEffect)((function(){n&&!m&&d(new i.maps.Map(l.current,{center:{lat:46.509012,lng:11.827984},mapTypeId:"terrain",zoom:12,disableDefaultUI:!0,scaleControl:!0,fullscreenControl:!0,styles:j}))}),[n,m,i,l]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{width:"100%",height:"100%",display:n?"block":"none",ref:l}),o.a.createElement(T,{message:"Loading Maps ...",hideIf:n||r}),o.a.createElement(N,{message:"Unable to load map!",hideIf:!r}))},R=n(118),x=n(117),A=n(45),L=n.n(A),W=Object(O.a)((function(e){return{addButton:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}})),z=function(){var e=W();return console.log(Object(x.a)()),o.a.createElement(R.a,{className:e.addButton,color:"primary"},o.a.createElement(L.a,null))},B=n(125),F=n(120),G=n(121),J=n(119),V=n(50),_=n.n(V),D=n(48),H=n.n(D),P=n(47),U=n.n(P),X=n(49),q=n.n(X),Q=n(21),$=n.n(Q),K=n(24),Y=n(46);function Z(e,t,n){return function(){var o=Object(a.useState)(n),r=Object(s.a)(o,2),i=r[0],c=r[1];return Object(a.useEffect)((function(){var n=e instanceof Function?e():e,a=function(e){c(e)};return n.addListener(t,a),function(){n.removeListener(t,a)}}),[]),i}}var ee=n(18),te=function(){function e(t,n,a){var o=this;Object(K.a)(this,e),this.onOpen=function(){o.handleReset(),console.log("WebSocket: Open!"),o.setConnectionState(ne.ESTABLISHED),o.sock.send(JSON.stringify({tag:"WebFilterArea",area:[{lat:-90,lon:-180},{lat:90,lon:180}]})),o.sock.send(JSON.stringify({tag:"WebFilterContest",contents:"alpha9999"})),o.sock.send(JSON.stringify({tag:"WebFollow",contents:[]}))},this.onMessage=function(e){console.log("WebSocket: Message!"),o.setConnectionState(ne.ACTIVE);var t=JSON.parse(e.data);clearTimeout(o.watchdog),o.watchdog=setTimeout((function(){this.setConnectionState(ne.INACTIVE)}),7e4),o.processMessage(t)},this.onClose=function(e){console.log("WebSocket: Close!"),o.setConnectionState(ne.NO_CONNECTION),setTimeout(o.connect.bind(o),1e3)},this.onError=function(e){console.log("WebSocket: Error!")},this.handleReset=function(){console.log("TODO: handle reset!")},this.processMessage=function(e){if("tag"in e)switch(e.tag){case"LiveFlightInfos":o.dispatchInfoMessage(e.contents);break;case"LiveFlightChunk":o.dispatchTracklogMessage(e);break;default:console.log("Warning: Unknown message tag '".concat(e.tag,"'!"),e)}else console.log("Warning: Invalid message format!",e)},this.setConnectionState=t,this.dispatchInfoMessage=n,this.dispatchTracklogMessage=a,this.connect()}return Object(ee.a)(e,[{key:"connect",value:function(){"WebSocket"in window?(this.setConnectionState(ne.CONNECTING),this.sock=new WebSocket("wss://live.xcontest.org/websock/webclient"),this.sock.onopen=this.onOpen,this.sock.onmessage=this.onMessage,this.sock.onclose=this.onClose,this.sock.onerror=this.onError):(this.setConnectionState(ne.ERROR),alert("WebSocket NOT supported by your Browser!"))}}]),e}(),ne={CONNECTING:"connecting",ERROR:"error",ESTABLISHED:"established",ACTIVE:"active",INACTIVE:"inactive",NO_CONNECTION:"no connection",NO_INFORMATION:"no information"},ae=function e(){var t=this;Object(K.a)(this,e),this.onConnectionStateChanged=function(e){t.eventEmitter.emit("connectionStateChanged",e)},this.onInfoMessageReceived=function(e){console.log(e),t.pilots=[];var n=!0,a=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var c=r.value,l=Object(s.a)(c,2),u=l[0],h=l[1];h.overriden||(t.pilots.push({user:h.info.user,flightId:u}),t.shortTracks[u]={track:h})}}catch(m){a=!0,o=m}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}t.eventEmitter.emit("pilotStateChanged",t.pilots),t.eventEmitter.emit("shortTracksChanged",t.shortTracks)},this.onTracklogMessageReceived=function(e){console.log("Trackog Message: ",e)},this.pilots=[],this.shortTracks={},this.eventEmitter=new Y.EventEmitter,this.socket=new te(this.onConnectionStateChanged,this.onInfoMessageReceived,this.onTracklogMessageReceived)},oe=null,re=function(){return oe||(oe=new ae),oe},ie=(Z((function(){return re().eventEmitter}),"pilotStateChanged",[]),Z((function(){return re().eventEmitter}),"connectionStateChanged",ne.NO_INFORMATION)),se=(Z((function(){return re().eventEmitter}),"shortTracksChanged",{}),Object(O.a)((function(e){return{menuButton:{marginRight:e.spacing(2)}}}))),ce=function(e){return o.a.createElement(J.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:o.a.createElement(C.a,{disableShrink:e.disableShrink,color:"secondary",size:15,thickness:10})},e.children)},le=function(){var e=se(),t=ie();return o.a.createElement("div",null,o.a.createElement(B.a,{position:"static"},o.a.createElement(F.a,null,o.a.createElement(c.a,{clone:!0},o.a.createElement(G.a,{className:e.menuButton,edge:"start",color:"inherit"},o.a.createElement(_.a,null))),o.a.createElement(c.a,{flexGrow:1,clone:!0},o.a.createElement(w.a,{variant:"h6"},"XC Live Viewer")),o.a.createElement(G.a,{disableRipple:!0,disableFocusRipple:!0,edge:"end",color:"inherit"},function(){switch(t){case ne.ACTIVE:return o.a.createElement(U.a,null);case ne.CONNECTING:return o.a.createElement(ce,null,o.a.createElement($.a,null));case ne.ERROR:return o.a.createElement(H.a,{color:"error"});case ne.ESTABLISHED:return o.a.createElement(ce,{disableShrink:!0},o.a.createElement($.a,null));case ne.INACTIVE:return o.a.createElement(q.a,null);case ne.NO_CONNECTION:default:return o.a.createElement($.a,null)}}()))))};function ue(){var e=o.a.useState(1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=o.a.useState(0),i=Object(s.a)(r,2),l=i[0],d=i[1],g=function(){d(window.innerHeight)};o.a.useLayoutEffect((function(){return g(),window.addEventListener("resize",g),function(){return window.removeEventListener("resize",g)}}),[]);return o.a.createElement(c.a,{height:l,display:"flex",flexDirection:"column"},o.a.createElement(c.a,{zIndex:100},o.a.createElement(le,null)),o.a.createElement(c.a,{flexGrow:1,clone:!0},o.a.createElement(u.a,{disabled:!0,index:n},o.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},o.a.createElement(M,null)),o.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},o.a.createElement(z,null)),o.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},"Item Three"))),o.a.createElement(c.a,{zIndex:100,boxShadow:3},o.a.createElement(h.a,{value:n,onChange:function(e,t){return a(t)},showLabels:!0},o.a.createElement(m.a,{label:"Map",icon:o.a.createElement(v.a,null)}),o.a.createElement(m.a,{label:"Pilots",icon:o.a.createElement(E.a,null)}),o.a.createElement(m.a,{label:"Nearby",icon:o.a.createElement(f.a,null)}))))}var he=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(ue,null))};n(88),n(89),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(90).config(),i.a.render(o.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.02a86dd2.chunk.js.map