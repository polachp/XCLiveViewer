(window["webpackJsonpxc-live-viewer"]=window["webpackJsonpxc-live-viewer"]||[]).push([[0],{102:function(e,t,n){e.exports=n(158)},129:function(e,t,n){},153:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),l=n(8),c=n(210),s=n(79),u=n.n(s),f=n(207),h=n(208),d=n(92),g=n.n(d),m=n(91),b=n.n(m),p=n(90),v=n.n(p),y=(n(129),null);var E=function(){var e=Object(a.useState)({ready:!1,error:!1}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){null===y&&(y=new Promise((function(e,t){console.log("Loading Google Maps API ...");var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCrP5uoEJXfEvz8f_y1HgzQnqUGHz0Aak",n.async=!0,n.addEventListener("load",(function(){return e(!0)})),n.addEventListener("error",(function(){return e(!1)})),document.body.appendChild(n)}))),y.then((function(e){e?(console.log("Google Maps API loaded."),r({ready:!0,error:!1})):(console.log("Error: Cannot load Google Maps API."),r({ready:!1,error:!0}))}))}),[]),[n.ready,n.error,n.ready?window.google:null]},O=n(190),S=n(193),w=n(192),k=n(81),_=n.n(k),C=Object(O.a)((function(e){return{progress:{margin:e.spacing(2)}}})),A=function(e){var t=e.message,n=e.hideIf,a=e.subRef,i=C();return r.a.createElement(c.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center",ref:a},r.a.createElement(c.a,{textAlign:"center"},r.a.createElement(w.a,{className:i.progress}),r.a.createElement(S.a,null,t)))},N=function(e){var t=e.message,n=e.hideIf,a=C();return r.a.createElement(c.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(c.a,{textAlign:"center"},r.a.createElement(_.a,{fontSize:"large",color:"error",className:a.progress}),r.a.createElement(S.a,{color:"error"},t)))},I=n(82),T=function(){var e=E(),t=Object(l.a)(e,3),n=t[0],i=t[1],o=t[2],s=Object(a.useRef)(),u=Object(a.useState)(null),f=Object(l.a)(u,2),h=f[0],d=f[1];return Object(a.useLayoutEffect)((function(){n&&!h&&d(new o.maps.Map(s.current,{center:{lat:46.509012,lng:11.827984},mapTypeId:"terrain",zoom:12,disableDefaultUI:!0,scaleControl:!0,fullscreenControl:!0,styles:I}))}),[n,h,o,s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{width:"100%",height:"100%",display:n?"block":"none",ref:s}),r.a.createElement(A,{message:"Loading Maps ...",hideIf:n||i}),r.a.createElement(N,{message:"Unable to load map!",hideIf:!i}))},j=n(203),L=n(26),x=n(85),F=n.n(x),P=n(194),V=n(195),M=n(10),W=n(212),D=n(209),H=n(201),R=n(202),z=n(196),G=n(197),U=n(198),J=n(199),Y=n(200),B=n(15),X=n(83);function q(e,t,n){return function(){var r=Object(a.useState)(n),i=Object(l.a)(r,2),o=i[0],c=i[1];return Object(a.useEffect)((function(){var n=e instanceof Function?e():e,a=function(e){c(e)};return n.addListener(t,a),function(){n.removeListener(t,a)}}),[]),o}}var Q=n(17),$=function e(t,n){var r=this;Object(B.a)(this,e),this.getValue=function(){var e=JSON.parse(localStorage.getItem(r.key));return null===e?r.initialValue:e},this._notifyAll=function(){var e=r.getValue(),t=!0,n=!1,a=void 0;try{for(var i,o=r.callbacks[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){(0,i.value)(e)}}catch(l){n=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}},this.registerCallback=function(e){r.callbacks.includes(e)||r.callbacks.push(e)},this.unregisterCallback=function(e){var t=r.callbacks.indexOf(e);t>=0&&r.callbacks.splice(t,1)},this.setValue=function(e){null==e?localStorage.removeItem(r.key):localStorage.setItem(r.key,JSON.stringify(e)),r._notifyAll()},this.use=function(){var e=Object(a.useState)(r.getValue),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(e){i(e)};return r.registerCallback(e),function(){return r.unregisterCallback(e)}}),[]),[n,r.setValue]},this.key=t,this.initialValue=n,this.callbacks=[]},K=function(e,t){return new $(e,t)},Z={PATH_LENGTH:"PATH_LENGTH",FULL_PATHS:"FULL_PATHS",LOW_LATENCY:"LOW_LATENCY",ANIMATION_DELAY:"ANIMATION_DELAY"},ee=function(e,t){return K("SETTINGS_"+e,t)},te={PATH_LENGTH:ee(Z.PATH_LENGTH,900),FULL_PATHS:ee(Z.FULL_PATHS,!1),LOW_LATENCY:ee(Z.LOW_LATENCY,!1),ANIMATION_DELAY:ee(Z.ANIMATION_DELAY,80)},ne=function(e){return te[e]},ae=function(){function e(t,n,a){var r=this;Object(B.a)(this,e),this.formatSubscribedFlights=function(){var e=ne(Z.PATH_LENGTH).getValue(),t=ne(Z.FULL_PATHS).getValue(),n=null;if(!t){var a=new Date(Date.now()-1e3*e);a.setMilliseconds(0),n=a.toISOString()}return r.subscribedFlights.map((function(e){return{flightUuid:e,start:n}}))},this.setSubscribedFlights=function(e){r.subscribedFlights=e,r.sock.readyState===WebSocket.OPEN&&r.connected&&r.sock.send(JSON.stringify({tag:"WebFollow",contents:r.formatSubscribedFlights()}))},this.onOpen=function(){r.handleReset(),console.log("WebSocket: Open!"),r.setConnectionState(de.ESTABLISHED),r.connected=!0,r.sock.send(JSON.stringify({tag:"WebFilterArea",area:[{lat:-90,lon:-180},{lat:90,lon:180}]})),r.sock.send(JSON.stringify({tag:"WebFilterContest",contents:"alpha9999"})),r.sock.send(JSON.stringify({tag:"WebFollow",contents:r.formatSubscribedFlights()}))},this.onMessage=function(e){console.log("WebSocket: Message!"),r.setConnectionState(de.ACTIVE);var t=JSON.parse(e.data);clearTimeout(r.watchdog),r.watchdog=setTimeout((function(){r.setConnectionState(de.INACTIVE)}),7e4),r.processMessage(t)},this.onClose=function(e){r.connected=!1,console.log("WebSocket: Close!"),r.setConnectionState(de.NO_CONNECTION),setTimeout(r.connect.bind(r),1e3)},this.onError=function(e){r.connected=!1,console.log("WebSocket: Error!")},this.handleReset=function(){console.log("TODO: handle reset!")},this.processMessage=function(e){if("tag"in e)switch(e.tag){case"LiveFlightInfos":r.dispatchInfoMessage(e.contents);break;case"LiveFlightChunk":r.dispatchTracklogMessage(e);break;default:console.log("Warning: Unknown message tag '".concat(e.tag,"'!"),e)}else console.log("Warning: Invalid message format!",e)},this.setConnectionState=t,this.dispatchInfoMessage=n,this.dispatchTracklogMessage=a,this.subscribedFlights=[],this.connect(),this.connected=!1}return Object(Q.a)(e,[{key:"connect",value:function(){"WebSocket"in window?(this.connected=!1,this.setConnectionState(de.CONNECTING),this.sock=new WebSocket("wss://live.xcontest.org/websock/webclient"),this.sock.onopen=this.onOpen,this.sock.onmessage=this.onMessage,this.sock.onclose=this.onClose,this.sock.onerror=this.onError):(this.setConnectionState(de.ERROR),alert("WebSocket NOT supported by your Browser!"))}}]),e}(),re=n(11);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(re.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=K("chosen-pilots",{}),ce=function(){return le};var se=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return t-e},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return 0===e};Object(B.a)(this,e),this.computeDiff=n,this.isInvalid=a,this.old_val=null,this.old_t=null,this.running_avg=null,this.smoothingFactor=t}return Object(Q.a)(e,[{key:"update",value:function(e,t){if(null===this.old_val||null===e||null===this.old_t||null===t||this.isInvalid(this.old_val)||this.isInvalid(e)||this.old_t===this.new_t)return this.old_val=e,this.old_t=t,null;var n=t-this.old_t,a=this.computeDiff(this.old_val,e)/n,r=Math.pow(this.smoothingFactor,n);return null===this.running_avg?this.running_avg=a:this.running_avg=r*this.running_avg+(1-r)*a,this.old_val=e,this.old_t=t,this.running_avg}},{key:"reset",value:function(){this.old_val=null,this.old_t=null,this.running_avg=null}}]),e}(),ue=n(84);var fe=function e(){var t=this;Object(B.a)(this,e),this.updateData=function(e){var n=function(e){return Math.round(Date.parse(e)/1e3)};if(!(e.length<1)){var a=n(e[0].timestamp);if(0===t.data.length||t.data[t.data.length-1].t<a){var r=!0,i=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value,u=n(s.timestamp),f={lat:s.lat,lon:s.lon},h=t.counter_gpsVario.update(s.gpsAlt,u),d=t.counter_baroVarion.update(s.baroAlt,u),g=t.counter_velocity.update(f,u),m={baroAlt:s.baroAlt,gpsAlt:s.gpsAlt,elevation:s.elevation,pos:f,gpsVario:h,baroVario:d,velocity:g,t:u};t.data.push(m)}}catch(H){i=!0,o=H}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}}else{var b=[],p=!0,v=!1,y=void 0;try{for(var E,O=e[Symbol.iterator]();!(p=(E=O.next()).done);p=!0){var S=E.value,w=n(S.timestamp),k={lat:S.lat,lon:S.lon},_={baroAlt:S.baroAlt,gpsAlt:S.gpsAlt,elevation:S.elevation,pos:k,gpsVario:null,baroVario:null,velocity:null,t:w};b.push(_)}}catch(H){v=!0,y=H}finally{try{p||null==O.return||O.return()}finally{if(v)throw y}}var C=t.data;t.data=[];for(var A=0,N=0;!(A>=C.length&&N>=b.length);)if(A>=C.length)t.data.push(b[N]),N+=1;else if(N>=b.length)t.data.push(C[A]),A+=1;else{var I=C[A],T=b[N];T.t<I.t?(t.data.push(T),N+=1):I.t<T.t?(t.data.push(I),A+=1):(t.data.push(T),A+=1,N+=1)}t.counter_gpsVario.reset(),t.counter_baroVarion.reset(),t.counter_velocity.reset();var j=!0,L=!1,x=void 0;try{for(var F,P=t.data[Symbol.iterator]();!(j=(F=P.next()).done);j=!0){var V=F.value,M=t.counter_gpsVario.update(V.gpsAlt,V.t),W=t.counter_baroVarion.update(V.baroAlt,V.t),D=t.counter_velocity.update(V.pos,V.t);V.gpsVario=M,V.baroVario=W,V.velocity=D}}catch(H){L=!0,x=H}finally{try{j||null==P.return||P.return()}finally{if(L)throw x}}}}},this.data=[],this.counter_gpsVario=new se(.7),this.counter_baroVarion=new se(.7),this.counter_velocity=new se(.7,(function(e,t){return Object(ue.getDistance)(e,t,.01)}),(function(){return!1}))},he=function(){function e(t){var n=this;Object(B.a)(this,e),this.setSubscribedPilots=function(e){n._subscribedPilots=e,n._updateSubscribedFlights()},this.pushNewInfo=function(e){console.log("newInfo: ",e),n._pilotInfos=e,n._updateSubscribedFlights()},this.pushNewData=function(e,t){console.log("newTrackdata: ",e,t),e in n._flightAnimations||(n._flightAnimations[e]=new fe),n._flightAnimations[e].updateData(t)},this._updateSubscribedFlights=function(){var e=Object.values(n._pilotInfos).filter((function(e){return e.info.user.username in n._subscribedPilots})).map((function(e){return e.flightId})),t=new Set(e);(function(e,t){if(e.size!==t.size)return!1;var n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;if(!t.has(l))return!1}}catch(c){a=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return!0})(t,n._subscribedFlights)||(console.log("Swap: ",n._subscribedFlights,t),n._setSubscribedFlights(t))},this._callbacks=[],this._subscribedPilots=le.getValue(),this._subscribedFlights=new Set,this._pilotInfos={},this._flightAnimations={},this._setSubscribedFlights=function(e){n._subscribedFlights=e,t(Array.from(e))},ce().registerCallback(this.setSubscribedPilots)}return Object(Q.a)(e,[{key:"registerCallback",value:function(e){}},{key:"unregisterCallback",value:function(e){}}]),e}(),de={CONNECTING:"connecting",ERROR:"error",ESTABLISHED:"established",ACTIVE:"active",INACTIVE:"inactive",NO_CONNECTION:"no connection",NO_INFORMATION:"no information"},ge=function e(){var t=this;Object(B.a)(this,e),this.setSubscribedFlights=function(e){t.socket.setSubscribedFlights(e)},this.onConnectionStateChanged=function(e){t.eventEmitter.emit("connectionStateChanged",e)},this.onInfoMessageReceived=function(e){t.pilots={};var n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value,s=Object(l.a)(c,2),u=s[0],f=s[1];f.overriden||(f.flightId=u,t.pilots[f.info.user.username]=f)}}catch(h){a=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}t.eventEmitter.emit("pilotStateChanged",t.pilots),t.animation.pushNewInfo(t.pilots)},this.onTracklogMessageReceived=function(e){t.animation.pushNewData(e.flightUuid,e.trackChunk)},this.pilots=[],this.eventEmitter=new X.EventEmitter,this.socket=new ae(this.onConnectionStateChanged,this.onInfoMessageReceived,this.onTracklogMessageReceived),this.animation=new he(this.setSubscribedFlights)},me=null,be=function(){return me||(me=new ge),me},pe=q((function(){return be().eventEmitter}),"pilotStateChanged",[]),ve=q((function(){return be().eventEmitter}),"connectionStateChanged",de.NO_INFORMATION),ye=[{id:"name",label:"Name",minWidth:0,render:function(e){return r.a.createElement(r.a.Fragment,null,e.user.fullname,r.a.createElement(S.a,{component:"span",variant:"caption",color:"textSecondary",style:{paddingLeft:".3em"}},"[",e.user.username,"]"))}},{id:"country",label:"Country",minWidth:"4em",align:"right",render:function(e){return r.a.createElement(r.a.Fragment,null,e.user.nationality.iso,r.a.createElement(c.a,{fontSize:"large",marginLeft:"4px",boxShadow:1,style:{verticalAlign:"middle"},className:"flag-icon flag-icon-"+e.user.nationality.iso.toLowerCase()}))}}];var Ee=function(e){var t=Object(L.a)(),n=pe(),i=Object(a.useState)([]),o=Object(l.a)(i,2),s=o[0],u=o[1],f=Object(a.useState)(""),h=Object(l.a)(f,2),d=h[0],g=h[1],m=s.length,b=function(){g(""),u([]),e.onClose()},p=Object(P.a)(t.breakpoints.down("xs")),v=function(e){return""===d||e.toLowerCase().includes(d.toLowerCase())},y=Object.values(n).filter((function(e){return v(e.info.user.username)||v(e.info.user.fullname)}));return 0===y.length&&!/\s/.test(d)&&d.length>0&&y.push({info:{user:{login:null,username:d,fullname:"Offline User",gender:"-",nationality:{iso:"--",name:"--"}},flightId:null}}),r.a.createElement(W.a,{open:e.open,onClose:b,fullScreen:p},r.a.createElement(V.a,{style:0===m?{}:"light"===t.palette.type?{color:t.palette.secondary.main,backgroundColor:Object(M.d)(t.palette.secondary.light,.85)}:{color:t.palette.text.primary,backgroundColor:t.palette.secondary.dark}},m>0?r.a.createElement(S.a,{component:"div",color:"inherit",variant:"subtitle1"},m," selected"):r.a.createElement(S.a,{component:"div",variant:"h6",id:"tableTitle"},"Add new pilots:")),r.a.createElement(c.a,{paddingLeft:"1em",paddingRight:"1em",paddingTop:"4px"},r.a.createElement(D.a,{margin:"dense",autoComplete:"off",variant:"outlined",id:"search_field",label:"Search",type:"search",fullWidth:!0,onChange:function(e){return g(e.target.value)}})),r.a.createElement(c.a,{flex:"1 1 auto",marginY:"8px",style:{overflowY:"auto"}},r.a.createElement(z.a,{stickyHeader:!0,size:"small"},r.a.createElement(G.a,null,r.a.createElement(U.a,null,ye.map((function(e){return r.a.createElement(J.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth},component:"th"},e.label)})))),r.a.createElement(Y.a,null,y.map((function(t){var n=t.info.user.username,a=function(e){return-1!==s.indexOf(e)}(n),i=function(t){return-1!==e.alreadyAdded.indexOf(t)}(n),o=i?{filter:"grayscale(100%) opacity(30%)"}:{},l=ye.map((function(e){return r.a.createElement(J.a,{key:e.id,align:e.align},r.a.createElement(c.a,{style:o},e.render(t.info)))}));return i?r.a.createElement(U.a,{key:n},l):r.a.createElement(U.a,{key:n,selected:a,onClick:function(e){return function(e,t){var n=s.indexOf(t),a=[];-1===n?a=a.concat(s,t):0===n?a=a.concat(s.slice(1)):n===s.length-1?a=a.concat(s.slice(0,-1)):n>0&&(a=a.concat(s.slice(0,n),s.slice(n+1))),u(a)}(0,n)}},l)}))))),r.a.createElement(H.a,null,r.a.createElement(R.a,{onClick:b,color:"primary"},"Cancel"),r.a.createElement(R.a,{disabled:0===m,onClick:function(){e.onAddPilots(s),b()},color:"primary"},"Add")))},Oe=function(){var e=Object(L.a)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],o=n[1],s=function(){var e=le.use(),t=Object(l.a)(e,2),n=t[0],a=t[1];return[n,function(e){var t=oe({},n),r=!1,i=!0,o=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value;u in t||(t[u]=null,r=!0)}}catch(f){o=!0,l=f}finally{try{i||null==s.return||s.return()}finally{if(o)throw l}}r&&a(t)},function(e){var t=oe({},n),r=!1,i=!0,o=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value;u in t&&(delete t[u],r=!0)}}catch(f){o=!0,l=f}finally{try{i||null==s.return||s.return()}finally{if(o)throw l}}r&&a(t)}]}(),u=Object(l.a)(s,3),f=u[0],h=u[1],d=u[2],g=Object.entries(f).map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1],i=a;return null===a&&(i=n),r.a.createElement(c.a,{key:n,onClick:function(){return d([n])}},i)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{height:"100%",style:{overflowY:"auto"}},g),r.a.createElement(c.a,{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},r.a.createElement(j.a,{size:"small",color:"primary",onClick:function(){return o(!0)}},r.a.createElement(F.a,null))),r.a.createElement(Ee,{open:i,onClose:function(){return o(!1)},onAddPilots:h,alreadyAdded:Object.keys(f)}))},Se=n(205),we=n(206),ke=n(214),_e=n(204),Ce=n(89),Ae=n.n(Ce),Ne=n(87),Ie=n.n(Ne),Te=n(86),je=n.n(Te),Le=n(88),xe=n.n(Le),Fe=n(40),Pe=n.n(Fe),Ve=Object(O.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},popover:{padding:e.spacing(1),align:"right"}}})),Me=function(e){return r.a.createElement(_e.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:r.a.createElement(w.a,{disableShrink:e.disableShrink,color:"secondary",size:15,thickness:10})},e.children)},We=function(){var e=Ve(),t=ve(),n=r.a.useRef(),i=Object(a.useState)(null),o=Object(l.a)(i,2),s=o[0],u=o[1];r.a.useLayoutEffect((function(){n.current&&n.current.updatePosition()}),[t,s]);return r.a.createElement("div",null,r.a.createElement(Se.a,{position:"static"},r.a.createElement(V.a,null,r.a.createElement(c.a,{clone:!0},r.a.createElement(we.a,{className:e.menuButton,edge:"start",color:"inherit"},r.a.createElement(Ae.a,null))),r.a.createElement(c.a,{flexGrow:1,clone:!0},r.a.createElement(S.a,{variant:"h6"},"XC Live Viewer")),r.a.createElement(we.a,{edge:"end",color:"inherit",onClick:function(e){return u(e.currentTarget)}},function(){switch(t){case de.ACTIVE:return r.a.createElement(je.a,null);case de.CONNECTING:return r.a.createElement(Me,null,r.a.createElement(Pe.a,null));case de.ERROR:return r.a.createElement(Ie.a,{color:"error"});case de.ESTABLISHED:return r.a.createElement(Me,{disableShrink:!0},r.a.createElement(Pe.a,null));case de.INACTIVE:return r.a.createElement(xe.a,null);case de.NO_CONNECTION:default:return r.a.createElement(Pe.a,null)}}()))),r.a.createElement(ke.a,{open:Boolean(s),anchorEl:s,onClose:function(){return u(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},action:n},r.a.createElement(c.a,{className:e.popover},r.a.createElement(S.a,null,t))))};function De(){var e=r.a.useState(1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=r.a.useState(0),o=Object(l.a)(i,2),s=o[0],d=o[1],m=function(){d(window.innerHeight)};r.a.useLayoutEffect((function(){return m(),window.addEventListener("resize",m),function(){return window.removeEventListener("resize",m)}}),[]);return r.a.createElement(c.a,{height:s,display:"flex",flexDirection:"column"},r.a.createElement(c.a,{zIndex:100},r.a.createElement(We,null)),r.a.createElement(c.a,{flexGrow:1,clone:!0},r.a.createElement(u.a,{disabled:!0,index:n},r.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},r.a.createElement(T,null)),r.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},r.a.createElement(Oe,null)),r.a.createElement(c.a,{width:"100%",height:"100%",position:"relative"},"Item Three"))),r.a.createElement(c.a,{zIndex:100,boxShadow:3},r.a.createElement(f.a,{value:n,onChange:function(e,t){return a(t)},showLabels:!0},r.a.createElement(h.a,{label:"Map",icon:r.a.createElement(v.a,null)}),r.a.createElement(h.a,{label:"Pilots",icon:r.a.createElement(b.a,null)}),r.a.createElement(h.a,{label:"Nearby",icon:r.a.createElement(g.a,null)}))))}var He=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(De,null))};n(153),n(154),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(155).config(),o.a.render(r.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e){e.exports=JSON.parse('[{"featureType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}]')}},[[102,1,2]]]);
//# sourceMappingURL=main.ea5e0647.chunk.js.map