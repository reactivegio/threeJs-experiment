(this["webpackJsonptypescript-pwa"]=this["webpackJsonptypescript-pwa"]||[]).push([[3],{34:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var i=n(4),r=n(6),a=n(3),o=n(0),c=n(1),s=n(7),u=n(14),p=n(9);function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40;if(t.rotation){var i=Object(p.a)(e.current.x,e.current.y,n);t.rotation.xD=o.MathUtils.lerp(t.rotation.xD||0,i.y,.1),t.rotation.yD=o.MathUtils.lerp(t.rotation.yD||0,i.x,.1),t.rotation.x=o.MathUtils.degToRad(t.rotation.xD),t.rotation.y=o.MathUtils.degToRad(t.rotation.yD)}}function d(e){var t=Object.assign({},e),n=Object(c.useRef)(),p=Object(s.c)(u.a,"/nurse.glb"),d=p.nodes,l=p.animations,b=Object(s.c)(o.TextureLoader,"/nurse.jpg"),h=Object(s.c)(o.TextureLoader,"/nurse2.jpg"),m=Object(c.useRef)(),O=Object(c.useState)((function(){return new o.AnimationMixer(d[t.animationType])})),f=Object(r.a)(O,1)[0];return Object(s.b)((function(e,t){return f.update(t)})),Object(c.useEffect)((function(){return m.current={idle:f.clipAction(l[t.animationType],n.current)},m.current.idle.play(),function(){return l.forEach((function(e){return f.uncacheClip(e)}))}}),[t.animationType,f,l]),Object(s.b)((function(e,n){f.update(n),j(t.mouse,d.mixamorigNeck),j(t.mouse,d.mixamorigSpine)})),Object(a.jsx)("group",Object(i.a)(Object(i.a)({ref:n},t),{},{dispose:null,children:Object(a.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(a.jsx)("primitive",{object:d.mixamorigHips}),Object(a.jsxs)("skinnedMesh",{receiveShadow:!0,castShadow:!0,geometry:d.Mesh_1.geometry,skeleton:d.Mesh_1.skeleton,children:[Object(a.jsx)("skinnedMesh",{receiveShadow:!0,castShadow:!0,geometry:d.Mesh.geometry,skeleton:d.Mesh.skeleton,children:Object(a.jsx)("meshStandardMaterial",{map:h,"map-flipY":!1,skinning:!0})}),Object(a.jsx)("meshStandardMaterial",{map:b,"map-flipY":!1,skinning:!0})]})]})}))}}}]);
//# sourceMappingURL=3.bce72654.chunk.js.map