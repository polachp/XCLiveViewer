(window["webpackJsonpxc-live-viewer"]=window["webpackJsonpxc-live-viewer"]||[]).push([[0],{40:function(e,n,t){e.exports=t(75)},67:function(e,n,t){},71:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(11),l=t.n(o),c=t(8),i=t(91),u=t(30),s=t.n(u),d=t(89),m=t(92),h=t(33),E=t.n(h),w=t(34),f=t.n(w),g=t(32),p=t.n(g),v=(t(67),null);var b=function(){var e=Object(a.useState)({ready:!1,error:!1}),n=Object(c.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){null===v&&(v=new Promise((function(e,n){console.log("Loading Google Maps API ...");var t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCrP5uoEJXfEvz8f_y1HgzQnqUGHz0Aak",t.async=!0,t.addEventListener("load",(function(){return e(!0)})),t.addEventListener("error",(function(){return e(!1)})),document.body.appendChild(t)}))),v.then((function(e){e?(console.log("Google Maps API loaded."),r({ready:!0,error:!1})):(console.log("Error: Cannot load Google Maps API."),r({ready:!1,error:!0}))}))}),[]),[t.ready,t.error,t.ready?window.google:null]},y=function(){var e=b(),n=Object(c.a)(e,3),t=n[0],o=n[1],l=n[2],u=Object(a.useState)(r.a.createRef())[0],s=Object(a.useState)(null),d=Object(c.a)(s,2),m=d[0],h=d[1];return Object(a.useEffect)((function(){t&&!m&&h(new l.maps.Map(u.current,{center:{lat:-34.397,lng:150.644},zoom:8}))}),[t,m,l,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{width:"100%",height:"100%",display:t?"block":"none",ref:u}),r.a.createElement(i.a,{width:"100%",height:"100%",display:t||o?"none":"block"},"Loading..."),r.a.createElement(i.a,{width:"100%",height:"100%",display:!t&&o?"block":"none"},"Error!"))};function j(){var e=r.a.useState(0),n=Object(c.a)(e,2),t=n[0],a=n[1],o=r.a.useState(0),l=Object(c.a)(o,2),u=l[0],h=l[1],w=function(){h(window.innerHeight)};r.a.useEffect((function(){return w(),window.addEventListener("resize",w),function(){return window.removeEventListener("resize",w)}}),[]);return r.a.createElement(i.a,{height:u,display:"flex",flexDirection:"column"},r.a.createElement(i.a,{flexGrow:1,clone:!0},r.a.createElement(s.a,{disabled:!0,index:t},r.a.createElement(i.a,{width:"100%",height:"100%"},r.a.createElement(y,null)),r.a.createElement(i.a,{width:"100%",height:"100%"},"Item Two"),r.a.createElement(i.a,{width:"100%",height:"100%"},"Item Three"))),r.a.createElement(i.a,{zIndex:100,boxShadow:3},r.a.createElement(d.a,{value:t,onChange:function(e,n){return a(n)},showLabels:!0},r.a.createElement(m.a,{label:"Map",icon:r.a.createElement(p.a,null)}),r.a.createElement(m.a,{label:"Favorites",icon:r.a.createElement(E.a,null)}),r.a.createElement(m.a,{label:"Nearby",icon:r.a.createElement(f.a,null)}))))}var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};t(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(72).config(),l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.380dcff6.chunk.js.map