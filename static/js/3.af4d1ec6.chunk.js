(this["webpackJsonptypescript-pwa"]=this["webpackJsonptypescript-pwa"]||[]).push([[3],{33:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(4),i=n(6),a=n(3),o=n(0),c=n(1),s=n(7),u=n(14),p=n(9);function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40;if(t.rotation){var r=Object(p.a)(e.current.x,e.current.y,n);t.rotation.xD=o.MathUtils.lerp(t.rotation.xD||0,r.y,.1),t.rotation.yD=o.MathUtils.lerp(t.rotation.yD||0,r.x,.1),t.rotation.x=o.MathUtils.degToRad(t.rotation.xD),t.rotation.y=o.MathUtils.degToRad(t.rotation.yD)}}function h(e){var t=Object.assign({},e),n=Object(c.useRef)(),p=Object(s.c)(u.a,"./threeJs-experiment/nurse.glb"),h=p.nodes,d=p.animations,l=Object(s.c)(o.TextureLoader,"./threeJs-experiment/nurse.jpg"),b=Object(s.c)(o.TextureLoader,"./threeJs-experiment/nurse2.jpg"),m=Object(c.useRef)(),x=Object(c.useState)((function(){return new o.AnimationMixer(h[t.animationType])})),O=Object(i.a)(x,1)[0];return Object(s.b)((function(e,t){return O.update(t)})),Object(c.useEffect)((function(){return m.current={idle:O.clipAction(d[t.animationType],n.current)},m.current.idle.play(),function(){return d.forEach((function(e){return O.uncacheClip(e)}))}}),[t.animationType,O,d]),Object(s.b)((function(e,n){O.update(n),j(t.mouse,h.mixamorigNeck),j(t.mouse,h.mixamorigSpine)})),Object(a.jsx)("group",Object(r.a)(Object(r.a)({ref:n},t),{},{dispose:null,children:Object(a.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(a.jsx)("primitive",{object:h.mixamorigHips}),Object(a.jsxs)("skinnedMesh",{receiveShadow:!0,castShadow:!0,geometry:h.Mesh_1.geometry,skeleton:h.Mesh_1.skeleton,children:[Object(a.jsx)("skinnedMesh",{receiveShadow:!0,castShadow:!0,geometry:h.Mesh.geometry,skeleton:h.Mesh.skeleton,children:Object(a.jsx)("meshStandardMaterial",{map:b,"map-flipY":!1,skinning:!0})}),Object(a.jsx)("meshStandardMaterial",{map:l,"map-flipY":!1,skinning:!0})]})]})}))}}}]);
//# sourceMappingURL=3.af4d1ec6.chunk.js.map