(this["webpackJsonptypescript-pwa"]=this["webpackJsonptypescript-pwa"]||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(3),i=n(1),r=n.n(i),c=n(21),a=n.n(c),s=(n(29),n(6)),j=n(4),u=n(7),l=n(9),h=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,34))})),b=function(e){var t=Object.assign({},e);return Object(o.jsxs)("mesh",Object(j.a)(Object(j.a)({},t),{},{receiveShadow:!0,children:[Object(o.jsx)("planeBufferGeometry",{args:[500,500,99,1]}),Object(o.jsx)("shadowMaterial",{transparent:!0,opacity:.4})]}))},d=function(){var e=8.25,t=Object(i.useRef)({x:0,y:0}),n=Object(i.useState)(0),r=Object(s.a)(n,2),c=r[0],a=r[1];return Object(i.useEffect)((function(){var e=function(e){console.log(e.key),parseInt(e.key)<9&&a(parseInt(e.key))};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),Object(o.jsxs)(u.a,{onMouseMove:function(e){return t.current=Object(l.b)(e)},shadowMap:!0,pixelRatio:[1,2.5],camera:{position:[0,-3,18]},children:[Object(o.jsx)("hemisphereLight",{color:65535,intensity:.5,position:[0,50,0]}),Object(o.jsx)("directionalLight",{position:[-8,20,8],"shadow-camera-left":-1*e,"shadow-camera-bottom":-1*e,"shadow-camera-right":e,"shadow-camera-top":e,"shadow-camera-near":.1,"shadow-camera-far":1500,castShadow:!0}),Object(o.jsxs)("mesh",{position:[0,0,-4],children:[Object(o.jsx)("boxGeometry",{args:[20,34]}),Object(o.jsx)("meshBasicMaterial",{color:"#002E2C"})]}),Object(o.jsx)(b,{rotation:[-.5*Math.PI,0,0],position:[0,-10,10]}),Object(o.jsx)(i.Suspense,{fallback:Object(o.jsxs)("mesh",{children:[Object(o.jsx)("sphereBufferGeometry",{}),Object(o.jsx)("meshStandardMaterial",{color:"hotpink"})]}),children:Object(o.jsx)(h,{animationType:c,mouse:t,position:[0,-10,3],scale:[.08,.08,.08]})})]})},O=n(0),p=n(14);function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40,o=Object(l.a)(e.current.x,e.current.y,n);t.rotation.xD=O.MathUtils.lerp(t.rotation.xD||0,o.y,.1),t.rotation.yD=O.MathUtils.lerp(t.rotation.yD||0,o.x,.1),t.rotation.x=O.MathUtils.degToRad(t.rotation.xD),t.rotation.y=O.MathUtils.degToRad(t.rotation.yD)}function f(e){var t=Object.assign({},e),n=Object(i.useRef)(),r=Object(u.c)(p.a,"/stacy.glb"),c=r.nodes,a=r.animations,l=Object(u.c)(O.TextureLoader,"/stacy.jpg"),h=Object(i.useRef)(),b=Object(i.useState)((function(){return new O.AnimationMixer(c[t.animationType])})),d=Object(s.a)(b,1)[0];return Object(u.b)((function(e,t){return d.update(t)})),Object(i.useEffect)((function(){return h.current={idle:d.clipAction(a[t.animationType],n.current)},h.current.idle.play(),function(){return a.forEach((function(e){return d.uncacheClip(e)}))}}),[t.animationType,d,a]),Object(u.b)((function(e,n){d.update(n),x(t.mouse,c.mixamorigNeck),x(t.mouse,c.mixamorigSpine)})),Object(o.jsx)("group",Object(j.a)(Object(j.a)({ref:n},t),{},{dispose:null,children:Object(o.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(o.jsx)("primitive",{object:c.mixamorigHips}),Object(o.jsx)("skinnedMesh",{receiveShadow:!0,castShadow:!0,geometry:c.stacy.geometry,skeleton:c.stacy.skeleton,children:Object(o.jsx)("meshStandardMaterial",{map:l,"map-flipY":!1,skinning:!0})})]})}))}var m=function(e){var t=Object.assign({},e);return Object(o.jsxs)("mesh",Object(j.a)(Object(j.a)({},t),{},{receiveShadow:!0,children:[Object(o.jsx)("planeBufferGeometry",{args:[500,500,99,1]}),Object(o.jsx)("shadowMaterial",{transparent:!0,opacity:.4})]}))},y=function(){var e=8.25,t=Object(i.useRef)({x:0,y:0}),n=Object(i.useState)(5),r=Object(s.a)(n,2),c=r[0],a=r[1];return Object(i.useEffect)((function(){var e=function(e){console.log(e.key),parseInt(e.key)<9&&a(parseInt(e.key))};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),Object(o.jsxs)(u.a,{onMouseMove:function(e){return t.current=Object(l.b)(e)},shadowMap:!0,pixelRatio:[1,2.5],camera:{position:[0,-3,18]},children:[Object(o.jsx)("hemisphereLight",{color:65535,intensity:.5,position:[0,50,0]}),Object(o.jsx)("directionalLight",{position:[-8,20,8],"shadow-camera-left":-1*e,"shadow-camera-bottom":-1*e,"shadow-camera-right":e,"shadow-camera-top":e,"shadow-camera-near":.1,"shadow-camera-far":1500,castShadow:!0}),Object(o.jsxs)("mesh",{position:[0,0,-4],children:[Object(o.jsx)("boxGeometry",{args:[20,34]}),Object(o.jsx)("meshBasicMaterial",{color:"#035E7B"})]}),Object(o.jsx)(m,{rotation:[-.5*Math.PI,0,0],position:[0,-10,10]}),Object(o.jsx)(i.Suspense,{fallback:null,children:Object(o.jsx)(f,{animationType:c,mouse:t,position:[0,-10,3],scale:[.08,.08,.08]})})]})};function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40;if(t.rotation){var o=Object(l.a)(e.current.x,e.current.y,n);t.rotation.xD=O.MathUtils.lerp(t.rotation.xD||0,o.y,.1),t.rotation.yD=O.MathUtils.lerp(t.rotation.yD||0,o.x,.1),t.rotation.x=O.MathUtils.degToRad(t.rotation.xD),t.rotation.y=O.MathUtils.degToRad(t.rotation.yD)}}function v(e){var t=Object.assign({},e),n=Object(i.useRef)(),r=Object(u.c)(p.a,"/capoeira.glb"),c=r.nodes,a=r.animations,l=Object(u.c)(O.TextureLoader,"/capoeira.jpg"),h=Object(i.useRef)(),b=Object(i.useState)((function(){return new O.AnimationMixer(c[t.animationType])})),d=Object(s.a)(b,1)[0];return Object(u.b)((function(e,t){return d.update(t)})),Object(i.useEffect)((function(){return console.log(t.animationType),h.current={idle:d.clipAction(a[t.animationType],n.current)},h.current.idle.play(),function(){return a.forEach((function(e){return d.uncacheClip(e)}))}}),[]),Object(u.b)((function(e,n){d.update(n),g(t.mouse,c.Neck),g(t.mouse,c.Spine)})),Object(o.jsx)("group",Object(j.a)(Object(j.a)({ref:n},t),{},{dispose:null,children:Object(o.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(o.jsx)("primitive",{object:c.Hips}),Object(o.jsx)("skinnedMesh",{receiveShadow:!0,castShadow:!0,geometry:c.Prisoner.geometry,skeleton:c.Prisoner.skeleton,children:Object(o.jsx)("meshStandardMaterial",{map:l,"map-flipY":!1,skinning:!0})})]})}))}var w=function(e){var t=Object.assign({},e);return Object(o.jsxs)("mesh",Object(j.a)(Object(j.a)({},t),{},{receiveShadow:!0,children:[Object(o.jsx)("planeBufferGeometry",{args:[500,500,99,1]}),Object(o.jsx)("shadowMaterial",{transparent:!0,opacity:.4})]}))},k=function(){var e=8.25,t=Object(i.useRef)({x:0,y:0}),n=Object(i.useState)(0),r=Object(s.a)(n,2),c=r[0],a=r[1];return Object(i.useEffect)((function(){var e=function(e){console.log(e.key),parseInt(e.key)<9&&a(parseInt(e.key))};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),Object(o.jsxs)(u.a,{onMouseMove:function(e){return t.current=Object(l.b)(e)},shadowMap:!0,pixelRatio:[1,2.5],camera:{position:[0,-3,18]},children:[Object(o.jsx)("hemisphereLight",{color:65535,intensity:.5,position:[0,50,0]}),Object(o.jsx)("directionalLight",{position:[-8,20,8],"shadow-camera-left":-1*e,"shadow-camera-bottom":-1*e,"shadow-camera-right":e,"shadow-camera-top":e,"shadow-camera-near":.1,"shadow-camera-far":1500,castShadow:!0}),Object(o.jsxs)("mesh",{position:[0,0,-4],children:[Object(o.jsx)("boxGeometry",{args:[20,34]}),Object(o.jsx)("meshBasicMaterial",{color:"#4D2D52"})]}),Object(o.jsx)(w,{rotation:[-.5*Math.PI,0,0],position:[0,-10,10]}),Object(o.jsx)(i.Suspense,{fallback:null,children:Object(o.jsx)(v,{animationType:c,mouse:t,position:[0,-10,3],scale:[.08,.08,.08]})})]})};var M=function(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.jsx)("div",{style:{width:"100vw",height:"100vh"},children:0===n?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"},children:[Object(o.jsx)("div",{style:{flex:"1 0 0",textAlign:"center",backgroundColor:"#002E2C",color:"#FFF",height:"100vh"},children:Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%",flexDirection:"column",cursor:"pointer"},onClick:function(){r(1)},children:Object(o.jsx)("div",{children:"Nurse"})})}),Object(o.jsx)("div",{style:{flex:"1 0 0",backgroundColor:"#4D2D52",height:"100vh",color:"#FFF",textAlign:"center"},children:Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%",flexDirection:"column",cursor:"pointer"},onClick:function(){r(2)},children:Object(o.jsx)("div",{children:"Zombie Prisoner"})})}),Object(o.jsx)("div",{style:{flex:"1 0 0",color:"#FFF",backgroundColor:"#035E7B",height:"100vh",textAlign:"center"},children:Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%",flexDirection:"column",cursor:"pointer"},onClick:function(){r(3)},children:Object(o.jsx)("div",{children:"Stacy"})})})]})}):Object(o.jsxs)(o.Fragment,{children:[1===n&&Object(o.jsx)(d,{}),2===n&&Object(o.jsx)(k,{}),3===n&&Object(o.jsx)(y,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,35)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),r(e),c(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),S()},9:function(e,t,n){"use strict";function o(e){return{x:e.clientX,y:e.clientY}}function i(e,t,n){var o=0,i=0,r=window.innerWidth,c=window.innerHeight;return e<=r/2&&(o=n*((r/2-e)/(r/2)*100)/100*-1),e>=r/2&&(o=n*((e-r/2)/(r/2)*100)/100),t<=c/2&&(i=.5*n*((c/2-t)/(c/2)*100)/100*-1),t>=c/2&&(i=n*((t-c/2)/(c/2)*100)/100),{x:o,y:i}}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c1d400d7.chunk.js.map