(window["webpackJsonpxc-live-viewer"]=window["webpackJsonpxc-live-viewer"]||[]).push([[0],{102:function(e,t,n){e.exports=n(158)},129:function(e,t,n){},153:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),l=n(8),s=n(210),c=n(79),u=n.n(c),f=n(207),h=n(208),d=n(92),g=n.n(d),m=n(91),b=n.n(m),p=n(90),v=n.n(p),y=(n(129),null);var E=function(){var e=Object(a.useState)({ready:!1,error:!1}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){null===y&&(y=new Promise((function(e,t){console.log("Loading Google Maps API ...");var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCrP5uoEJXfEvz8f_y1HgzQnqUGHz0Aak",n.async=!0,n.addEventListener("load",(function(){return e(!0)})),n.addEventListener("error",(function(){return e(!1)})),document.body.appendChild(n)}))),y.then((function(e){e?(console.log("Google Maps API loaded."),r({ready:!0,error:!1})):(console.log("Error: Cannot load Google Maps API."),r({ready:!1,error:!0}))}))}),[]),[n.ready,n.error,n.ready?window.google:null]},O=n(190),A=n(193),_=n(192),S=n(81),w=n.n(S),k=Object(O.a)((function(e){return{progress:{margin:e.spacing(2)}}})),C=function(e){var t=e.message,n=e.hideIf,a=e.subRef,i=k();return r.a.createElement(s.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center",ref:a},r.a.createElement(s.a,{textAlign:"center"},r.a.createElement(_.a,{className:i.progress}),r.a.createElement(A.a,null,t)))},j=function(e){var t=e.message,n=e.hideIf,a=k();return r.a.createElement(s.a,{width:"100%",height:"100%",display:n?"none":"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(s.a,{textAlign:"center"},r.a.createElement(w.a,{fontSize:"large",color:"error",className:a.progress}),r.a.createElement(A.a,{color:"error"},t)))},T=n(82),I=n(12),N=n(83);function L(e,t,n){return function(){var r=Object(a.useState)(n),i=Object(l.a)(r,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){var n=e instanceof Function?e():e,a=function(e){s(e)};return n.addListener(t,a),function(){n.removeListener(t,a)}}),[]),o}}var P=n(22),F=function e(t,n){var r=this;Object(I.a)(this,e),this.getValue=function(){var e=JSON.parse(localStorage.getItem(r.key));return null===e?r.initialValue:e},this._notifyAll=function(){var e=r.getValue(),t=!0,n=!1,a=void 0;try{for(var i,o=r.callbacks[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){(0,i.value)(e)}}catch(l){n=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}},this.registerCallback=function(e){r.callbacks.includes(e)||r.callbacks.push(e)},this.unregisterCallback=function(e){var t=r.callbacks.indexOf(e);t>=0&&r.callbacks.splice(t,1)},this.setValue=function(e){null==e?localStorage.removeItem(r.key):localStorage.setItem(r.key,JSON.stringify(e)),r._notifyAll()},this.use=function(){var e=Object(a.useState)(r.getValue),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(e){i(e)};return r.registerCallback(e),function(){return r.unregisterCallback(e)}}),[]),[n,r.setValue]},this.key=t,this.initialValue=n,this.callbacks=[]},V=function(e,t){return new F(e,t)},x={PATH_LENGTH:"PATH_LENGTH",FULL_PATHS:"FULL_PATHS",LOW_LATENCY:"LOW_LATENCY",ANIMATION_DELAY:"ANIMATION_DELAY"},D=function(e,t){return V("SETTINGS_"+e,t)},M={PATH_LENGTH:D(x.PATH_LENGTH,900),FULL_PATHS:D(x.FULL_PATHS,!1),LOW_LATENCY:D(x.LOW_LATENCY,!1),ANIMATION_DELAY:D(x.ANIMATION_DELAY,80)},W=function(e){return M[e]},H=function(){function e(t,n,a){var r=this;Object(I.a)(this,e),this.formatSubscribedFlights=function(){var e=W(x.PATH_LENGTH).getValue(),t=W(x.FULL_PATHS).getValue(),n=null;if(!t){var a=new Date(Date.now()-1e3*e);a.setMilliseconds(0),n=a.toISOString()}return r.subscribedFlights.map((function(e){return{flightUuid:e,start:n}}))},this.refreshSubscribedFlights=function(){r.sock.readyState===WebSocket.OPEN&&r.connected&&r.sock.send(JSON.stringify({tag:"WebFollow",contents:r.formatSubscribedFlights()}))},this.setSubscribedFlights=function(e){r.subscribedFlights=e,r.refreshSubscribedFlights()},this.onOpen=function(){r.handleReset(),console.log("WebSocket: Open!"),r.setConnectionState(Z.ESTABLISHED),r.connected=!0,r.sock.send(JSON.stringify({tag:"WebFilterArea",area:[{lat:-90,lon:-180},{lat:90,lon:180}]})),r.sock.send(JSON.stringify({tag:"WebFilterContest",contents:"alpha9999"})),r.sock.send(JSON.stringify({tag:"WebFollow",contents:r.formatSubscribedFlights()}))},this.onMessage=function(e){console.log("WebSocket: Message!"),r.setConnectionState(Z.ACTIVE);var t=JSON.parse(e.data);clearTimeout(r.watchdog),r.watchdog=setTimeout((function(){r.setConnectionState(Z.INACTIVE)}),7e4),r.processMessage(t)},this.onClose=function(e){r.connected=!1,console.log("WebSocket: Close!"),r.setConnectionState(Z.NO_CONNECTION),setTimeout(r.connect.bind(r),1e3)},this.onError=function(e){r.connected=!1,console.log("WebSocket: Error!")},this.handleReset=function(){console.log("TODO: handle reset!")},this.processMessage=function(e){if("tag"in e)switch(e.tag){case"LiveFlightInfos":r.dispatchInfoMessage(e.contents);break;case"LiveFlightChunk":r.dispatchTracklogMessage(e);break;default:console.log("Warning: Unknown message tag '".concat(e.tag,"'!"),e)}else console.log("Warning: Invalid message format!",e)},this.setConnectionState=t,this.dispatchInfoMessage=n,this.dispatchTracklogMessage=a,this.subscribedFlights=[],this.connect(),this.connected=!1,W(x.PATH_LENGTH).registerCallback(this.refreshSubscribedFlights),W(x.FULL_PATHS).registerCallback(this.refreshSubscribedFlights)}return Object(P.a)(e,[{key:"connect",value:function(){"WebSocket"in window?(this.connected=!1,this.setConnectionState(Z.CONNECTING),this.sock=new WebSocket("wss://live.xcontest.org/websock/webclient"),this.sock.onopen=this.onOpen,this.sock.onmessage=this.onMessage,this.sock.onclose=this.onClose,this.sock.onerror=this.onError):(this.setConnectionState(Z.ERROR),alert("WebSocket NOT supported by your Browser!"))}}]),e}(),R=n(10);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=V("chosen-pilots",{});var Y=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return t-e},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return null===e};Object(I.a)(this,e),this.computeDiff=n,this.isInvalid=a,this.old_val=null,this.old_t=null,this.running_avg=null,this.smoothingFactor=t}return Object(P.a)(e,[{key:"update",value:function(e,t){if(null===this.old_val||null===e||null===this.old_t||null===t||this.isInvalid(this.old_val)||this.isInvalid(e)||this.old_t===this.new_t)return this.old_val=e,this.old_t=t,null;var n=t-this.old_t,a=this.computeDiff(this.old_val,e)/n,r=Math.pow(this.smoothingFactor,n);return null===this.running_avg?this.running_avg=a:this.running_avg=r*this.running_avg+(1-r)*a,this.old_val=e,this.old_t=t,this.running_avg}},{key:"reset",value:function(){this.old_val=null,this.old_t=null,this.running_avg=null}}]),e}(),J=n(84),B=function(e,t,n){if(t<1)return 0;for(var a=-1,r=t,i=0;a<r-1;)n(i=(a+r)/2|0)<e?a=i:r=i;return r},q=function(e,t,n){return null===t?e:null===e?t:(1-n)*e+n*t};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Q=function e(){var t=this;Object(I.a)(this,e),this.updateData=function(e){var n=function(e){return Math.round(Date.parse(e)/1e3)};if(!(e.length<1)){var a=n(e[0].timestamp);if(0===t.data.length||t.data[t.data.length-1].t<a){var r=!0,i=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value,u=n(c.timestamp),f={lat:c.lat,lon:c.lon},h=0===c.baroAlt?null:c.baroAlt,d=0===c.gpsAlt?null:c.gpsAlt,g=t.counter_gpsVario.update(d,u),m=t.counter_baroVarion.update(h,u),b=t.counter_velocity.update(f,u),p={baroAlt:h,gpsAlt:d,elevation:c.elevation,pos:f,gpsVario:g,baroVario:m,velocity:b,t:u};t.data.push(p)}}catch(z){i=!0,o=z}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}else{var v=[],y=!0,E=!1,O=void 0;try{for(var A,_=e[Symbol.iterator]();!(y=(A=_.next()).done);y=!0){var S=A.value,w=n(S.timestamp),k={lat:S.lat,lon:S.lon},C={baroAlt:0===S.baroAlt?null:S.baroAlt,gpsAlt:0===S.gpsAlt?null:S.gpsAlt,elevation:S.elevation,pos:k,gpsVario:null,baroVario:null,velocity:null,t:w};v.push(C)}}catch(z){E=!0,O=z}finally{try{y||null==_.return||_.return()}finally{if(E)throw O}}var j=t.data;t.data=[];for(var T=0,I=0;!(T>=j.length&&I>=v.length);)if(T>=j.length)t.data.push(v[I]),I+=1;else if(I>=v.length)t.data.push(j[T]),T+=1;else{var N=j[T],L=v[I];L.t<N.t?(t.data.push(L),I+=1):N.t<L.t?(t.data.push(N),T+=1):(t.data.push(L),T+=1,I+=1)}t.counter_gpsVario.reset(),t.counter_baroVarion.reset(),t.counter_velocity.reset();var P=!0,F=!1,V=void 0;try{for(var x,D=t.data[Symbol.iterator]();!(P=(x=D.next()).done);P=!0){var M=x.value,W=t.counter_gpsVario.update(M.gpsAlt,M.t),H=t.counter_baroVarion.update(M.baroAlt,M.t),R=t.counter_velocity.update(M.pos,M.t);M.gpsVario=W,M.baroVario=H,M.velocity=R}}catch(z){F=!0,V=z}finally{try{P||null==D.return||D.return()}finally{if(F)throw V}}t.resetAnimation()}console.log("Animation updated.",t.data)}},this.resetAnimation=function(){t.animationArrayPos=null,t.mapsPath=[]},this.takeData=function(e){return{baroAlt:e.baroAlt,gpsAlt:e.gpsAlt,elevation:e.elevation,pos:{lat:e.pos.lat,lon:e.pos.lon},gpsVario:e.gpsVario,baroVario:e.baroVario,velocity:e.velocity}},this.blendData=function(e,t,n){return{baroAlt:q(e.baroAlt,t.baroAlt,n),gpsAlt:q(e.gpsAlt,t.gpsAlt,n),elevation:q(e.elevation,t.elevation,n),pos:{lat:q(e.pos.lat,t.pos.lat,n),lon:q(e.pos.lon,t.pos.lon,n)},gpsVario:q(e.gpsVario,t.gpsVario,n),baroVario:q(e.baroVario,t.baroVario,n),velocity:q(e.velocity,t.velocity,n)}},this.updateAnimation=function(e,n){var a=e/1e3;if(null===t.animationArrayPos)t.animationArrayPos=B(a,t.data.length,(function(e){return t.data[e].t}));else for(;t.animationArrayPos<t.data.length&&t.data[t.animationArrayPos].t<a;)t.animationArrayPos+=1;var r=null,i=!1,o=!1;if(t.data.length>0)if(t.animationArrayPos<=0)r=t.takeData(t.data[0]),o=!0;else if(t.animationArrayPos>=t.data.length)r=t.takeData(t.data[t.data.length-1]),i=!0;else{var l=t.data[t.animationArrayPos-1],s=t.data[t.animationArrayPos],c=(a-l.t)/(s.t-l.t);r=t.blendData(l,s,c)}return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{currentPos:t.animationArrayPos,startOfTrack:o,endOfTrack:i})},this.data=[],this.counter_gpsVario=new Y(.7),this.counter_baroVarion=new Y(.7),this.counter_velocity=new Y(.7,(function(e,t){return Object(J.getDistance)(e,t,.01)}),(function(){return!1})),this.animationArrayPos=null,this.mapsPath=[]},$=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;Object(I.a)(this,e),this.get=function(e,n){var a=e+t.offset,r=a-n;return(r>t.tolerance||r<-t.tolerance)&&(t.offset-=r,a=e+t.offset,console.log("adjusted:",r)),a},this.offset=0,this.tolerance=n};var K=function e(t){var n=this;Object(I.a)(this,e),this.animationLoop=function(e){var t=Date.now(),a=n._highPrecisionTimeSync.get(e,t)-1e3*n._setting_timeOffset,r={};Object.keys(n._subscribedPilots).forEach((function(e){if(e in n._pilotInfos){var t=n._pilotInfos[e].flightId;if(t in n._flightAnimations){var i=n._flightAnimations[t];r[e]=i.updateAnimation(a,n._setting_lowLatencyMode)}}})),n._updateAnimationData(r),requestAnimationFrame(n.animationLoop)},this._updateAnimationData=function(e){n._currentAnimationData=e;var t=!0,a=!1,r=void 0;try{for(var i,o=n._callbacks[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){(0,i.value)(e)}}catch(l){a=!0,r=l}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}},this.setSubscribedPilots=function(e){n._subscribedPilots=e,n._updateSubscribedFlights()},this.pushNewInfo=function(e){console.log("newInfo: ",e),n._pilotInfos=e,n._updateSubscribedFlights()},this.pushNewData=function(e,t){console.log("newTrackdata: ",e,t),e in n._flightAnimations||(n._flightAnimations[e]=new Q),n._flightAnimations[e].updateData(t)},this.registerCallback=function(e){n._callbacks.includes(e)||n._callbacks.push(e)},this.unregisterCallback=function(e){var t=n._callbacks.indexOf(e);t>=0&&n._callbacks.splice(t,1)},this.useAnimatedData=function(){var e=Object(a.useState)(n._currentAnimationData),t=Object(l.a)(e,2),r=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(e){i(e)};return n.registerCallback(e),function(){return n.unregisterCallback(e)}}),[]),r},this._updateSubscribedFlights=function(){var e=Object.values(n._pilotInfos).filter((function(e){return e.info.user.username in n._subscribedPilots})).map((function(e){return e.flightId})),t=new Set(e);(function(e,t){if(e.size!==t.size)return!1;var n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;if(!t.has(l))return!1}}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return!0})(t,n._subscribedFlights)||(console.log("Swap: ",n._subscribedFlights,t),n._setSubscribedFlights(t))},this._currentAnimationData={},this._callbacks=[],this._subscribedPilots=U.getValue(),this._subscribedFlights=new Set,this._pilotInfos={},this._flightAnimations={},this._highPrecisionTimeSync=new $;var r=W(x.ANIMATION_DELAY),i=W(x.LOW_LATENCY);this._setting_timeOffset=r.getValue(),this._setting_lowLatencyMode=i.getValue(),r.registerCallback((function(e){n._setting_timeOffset=e})),i.registerCallback((function(e){n._setting_lowLatencyMode=e})),this._setSubscribedFlights=function(e){n._subscribedFlights=e,t(Array.from(e))},U.registerCallback(this.setSubscribedPilots),requestAnimationFrame(this.animationLoop)},Z={CONNECTING:"connecting",ERROR:"error",ESTABLISHED:"established",ACTIVE:"active",INACTIVE:"inactive",NO_CONNECTION:"no connection",NO_INFORMATION:"no information"},ee=function e(){var t=this;Object(I.a)(this,e),this.setSubscribedFlights=function(e){t.socket.setSubscribedFlights(e)},this.onConnectionStateChanged=function(e){t.eventEmitter.emit("connectionStateChanged",e)},this.onInfoMessageReceived=function(e){t.pilots={};var n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value,c=Object(l.a)(s,2),u=c[0],f=c[1];f.overriden||(f.flightId=u,t.pilots[f.info.user.username]=f)}}catch(h){a=!0,r=h}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}t.eventEmitter.emit("pilotStateChanged",t.pilots),t.animation.pushNewInfo(t.pilots)},this.onTracklogMessageReceived=function(e){t.animation.pushNewData(e.flightUuid,e.trackChunk)},this.pilots=[],this.eventEmitter=new N.EventEmitter,this.socket=new H(this.onConnectionStateChanged,this.onInfoMessageReceived,this.onTracklogMessageReceived),this.animation=new K(this.setSubscribedFlights)},te=null,ne=function(){return te||(te=new ee),te},ae=L((function(){return ne().eventEmitter}),"pilotStateChanged",[]),re=L((function(){return ne().eventEmitter}),"connectionStateChanged",Z.NO_INFORMATION),ie=function e(t){Object(I.a)(this,e),this.update=function(e){},this.map=t,this.markers={}},oe=function(){var e=E(),t=Object(l.a)(e,3),n=t[0],i=t[1],o=t[2],c=Object(a.useRef)(),u=Object(a.useState)(null),f=Object(l.a)(u,2),h=f[0],d=f[1];return Object(a.useLayoutEffect)((function(){n&&!h&&d(new o.maps.Map(c.current,{center:{lat:46.509012,lng:11.827984},mapTypeId:"terrain",zoom:12,disableDefaultUI:!0,scaleControl:!0,fullscreenControl:!0,styles:T}))}),[n,h,o,c]),Object(a.useEffect)((function(){if(h){var e=new ie(h),t=function(t){return e.update(t)};return ne().animation.registerCallback(t),function(){ne().animation.unregisterCallback(t)}}}),[h]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{width:"100%",height:"100%",display:n?"block":"none",ref:c}),r.a.createElement(C,{message:"Loading Maps ...",hideIf:n||i}),r.a.createElement(j,{message:"Unable to load map!",hideIf:!i}))},le=n(203),se=n(26),ce=n(85),ue=n.n(ce),fe=n(194),he=n(195),de=n(11),ge=n(212),me=n(209),be=n(201),pe=n(202),ve=n(196),ye=n(197),Ee=n(198),Oe=n(199),Ae=n(200),_e=[{id:"name",label:"Name",minWidth:0,render:function(e){return r.a.createElement(r.a.Fragment,null,e.user.fullname,r.a.createElement(A.a,{component:"span",variant:"caption",color:"textSecondary",style:{paddingLeft:".3em"}},"[",e.user.username,"]"))}},{id:"country",label:"Country",minWidth:"4em",align:"right",render:function(e){return r.a.createElement(r.a.Fragment,null,e.user.nationality.iso,r.a.createElement(s.a,{fontSize:"large",marginLeft:"4px",boxShadow:1,style:{verticalAlign:"middle"},className:"flag-icon flag-icon-"+e.user.nationality.iso.toLowerCase()}))}}];var Se=function(e){var t=Object(se.a)(),n=ae(),i=Object(a.useState)([]),o=Object(l.a)(i,2),c=o[0],u=o[1],f=Object(a.useState)(""),h=Object(l.a)(f,2),d=h[0],g=h[1],m=c.length,b=function(){g(""),u([]),e.onClose()},p=Object(fe.a)(t.breakpoints.down("xs")),v=function(e){return""===d||e.toLowerCase().includes(d.toLowerCase())},y=Object.values(n).filter((function(e){return v(e.info.user.username)||v(e.info.user.fullname)}));return 0===y.length&&!/\s/.test(d)&&d.length>0&&y.push({info:{user:{login:null,username:d,fullname:"Offline User",gender:"-",nationality:{iso:"--",name:"--"}},flightId:null}}),r.a.createElement(ge.a,{open:e.open,onClose:b,fullScreen:p},r.a.createElement(he.a,{style:0===m?{}:"light"===t.palette.type?{color:t.palette.secondary.main,backgroundColor:Object(de.d)(t.palette.secondary.light,.85)}:{color:t.palette.text.primary,backgroundColor:t.palette.secondary.dark}},m>0?r.a.createElement(A.a,{component:"div",color:"inherit",variant:"subtitle1"},m," selected"):r.a.createElement(A.a,{component:"div",variant:"h6",id:"tableTitle"},"Add new pilots:")),r.a.createElement(s.a,{paddingLeft:"1em",paddingRight:"1em",paddingTop:"4px"},r.a.createElement(me.a,{margin:"dense",autoComplete:"off",variant:"outlined",id:"search_field",label:"Search",type:"search",fullWidth:!0,onChange:function(e){return g(e.target.value)}})),r.a.createElement(s.a,{flex:"1 1 auto",marginY:"8px",style:{overflowY:"auto"}},r.a.createElement(ve.a,{stickyHeader:!0,size:"small"},r.a.createElement(ye.a,null,r.a.createElement(Ee.a,null,_e.map((function(e){return r.a.createElement(Oe.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth},component:"th"},e.label)})))),r.a.createElement(Ae.a,null,y.map((function(t){var n=t.info.user.username,a=function(e){return-1!==c.indexOf(e)}(n),i=function(t){return-1!==e.alreadyAdded.indexOf(t)}(n),o=i?{filter:"grayscale(100%) opacity(30%)"}:{},l=_e.map((function(e){return r.a.createElement(Oe.a,{key:e.id,align:e.align},r.a.createElement(s.a,{style:o},e.render(t.info)))}));return i?r.a.createElement(Ee.a,{key:n},l):r.a.createElement(Ee.a,{key:n,selected:a,onClick:function(e){return function(e,t){var n=c.indexOf(t),a=[];-1===n?a=a.concat(c,t):0===n?a=a.concat(c.slice(1)):n===c.length-1?a=a.concat(c.slice(0,-1)):n>0&&(a=a.concat(c.slice(0,n),c.slice(n+1))),u(a)}(0,n)}},l)}))))),r.a.createElement(be.a,null,r.a.createElement(pe.a,{onClick:b,color:"primary"},"Cancel"),r.a.createElement(pe.a,{disabled:0===m,onClick:function(){e.onAddPilots(c),b()},color:"primary"},"Add")))},we=function(e){var t=ne().animation.useAnimatedData(),n=Object.entries(e.pilots).map((function(n){var a=Object(l.a)(n,2),i=a[0],o=a[1],c=o;null===o&&(c=i);var u=[];if(i in t){var f=t[i];for(var h in f)u.push(r.a.createElement("tr",{key:h},r.a.createElement("td",null,h),r.a.createElement("td",null,(Math.round(100*f[h])/100).toString())))}return r.a.createElement(s.a,{margin:"10px",key:i,onClick:function(){return e.removePilots([i])}},c,r.a.createElement("table",null,r.a.createElement("tbody",null,u)))}));return r.a.createElement(s.a,{height:"100%",style:{overflowY:"auto"}},n)},ke=function(){var e=Object(se.a)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],o=n[1],c=function(){var e=U.use(),t=Object(l.a)(e,2),n=t[0],a=t[1];return[n,function(e){var t=G({},n),r=!1,i=!0,o=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;u in t||(t[u]=null,r=!0)}}catch(f){o=!0,l=f}finally{try{i||null==c.return||c.return()}finally{if(o)throw l}}r&&a(t)},function(e){var t=G({},n),r=!1,i=!0,o=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;u in t&&(delete t[u],r=!0)}}catch(f){o=!0,l=f}finally{try{i||null==c.return||c.return()}finally{if(o)throw l}}r&&a(t)}]}(),u=Object(l.a)(c,3),f=u[0],h=u[1],d=u[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement(we,{pilots:f,removePilots:d}),r.a.createElement(s.a,{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},r.a.createElement(le.a,{size:"small",color:"primary",onClick:function(){return o(!0)}},r.a.createElement(ue.a,null))),r.a.createElement(Se,{open:i,onClose:function(){return o(!1)},onAddPilots:h,alreadyAdded:Object.keys(f)}))},Ce=n(205),je=n(206),Te=n(214),Ie=n(204),Ne=n(89),Le=n.n(Ne),Pe=n(87),Fe=n.n(Pe),Ve=n(86),xe=n.n(Ve),De=n(88),Me=n.n(De),We=n(40),He=n.n(We),Re=Object(O.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},popover:{padding:e.spacing(1),align:"right"}}})),ze=function(e){return r.a.createElement(Ie.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:r.a.createElement(_.a,{disableShrink:e.disableShrink,color:"secondary",size:15,thickness:10})},e.children)},Ge=function(){var e=Re(),t=re(),n=r.a.useRef(),i=Object(a.useState)(null),o=Object(l.a)(i,2),c=o[0],u=o[1];r.a.useLayoutEffect((function(){n.current&&n.current.updatePosition()}),[t,c]);return r.a.createElement("div",null,r.a.createElement(Ce.a,{position:"static"},r.a.createElement(he.a,null,r.a.createElement(s.a,{clone:!0},r.a.createElement(je.a,{className:e.menuButton,edge:"start",color:"inherit"},r.a.createElement(Le.a,null))),r.a.createElement(s.a,{flexGrow:1,clone:!0},r.a.createElement(A.a,{variant:"h6"},"XC Live Viewer")),r.a.createElement(je.a,{edge:"end",color:"inherit",onClick:function(e){return u(e.currentTarget)}},function(){switch(t){case Z.ACTIVE:return r.a.createElement(xe.a,null);case Z.CONNECTING:return r.a.createElement(ze,null,r.a.createElement(He.a,null));case Z.ERROR:return r.a.createElement(Fe.a,{color:"error"});case Z.ESTABLISHED:return r.a.createElement(ze,{disableShrink:!0},r.a.createElement(He.a,null));case Z.INACTIVE:return r.a.createElement(Me.a,null);case Z.NO_CONNECTION:default:return r.a.createElement(He.a,null)}}()))),r.a.createElement(Te.a,{open:Boolean(c),anchorEl:c,onClose:function(){return u(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},action:n},r.a.createElement(s.a,{className:e.popover},r.a.createElement(A.a,null,t))))};function Ue(){var e=r.a.useState(1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=r.a.useState(0),o=Object(l.a)(i,2),c=o[0],d=o[1],m=function(){d(window.innerHeight)};r.a.useLayoutEffect((function(){return m(),window.addEventListener("resize",m),function(){return window.removeEventListener("resize",m)}}),[]);return r.a.createElement(s.a,{height:c,display:"flex",flexDirection:"column"},r.a.createElement(s.a,{zIndex:100},r.a.createElement(Ge,null)),r.a.createElement(s.a,{flexGrow:1,clone:!0},r.a.createElement(u.a,{disabled:!0,index:n},r.a.createElement(s.a,{width:"100%",height:"100%",position:"relative"},r.a.createElement(oe,null)),r.a.createElement(s.a,{width:"100%",height:"100%",position:"relative"},r.a.createElement(ke,null)),r.a.createElement(s.a,{width:"100%",height:"100%",position:"relative"},"Item Three"))),r.a.createElement(s.a,{zIndex:100,boxShadow:3},r.a.createElement(f.a,{value:n,onChange:function(e,t){return a(t)},showLabels:!0},r.a.createElement(h.a,{label:"Map",icon:r.a.createElement(v.a,null)}),r.a.createElement(h.a,{label:"Pilots",icon:r.a.createElement(b.a,null)}),r.a.createElement(h.a,{label:"Nearby",icon:r.a.createElement(g.a,null)}))))}var Ye=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ue,null))};n(153),n(154),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(155).config(),o.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e){e.exports=JSON.parse('[{"featureType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}]')}},[[102,1,2]]]);
//# sourceMappingURL=main.b66bd9ee.chunk.js.map