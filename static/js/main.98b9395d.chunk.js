(this.webpackJsonpmultiplik=this.webpackJsonpmultiplik||[]).push([[0],{134:function(e,t,n){e.exports=n(263)},139:function(e,t,n){},140:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n.n(r),c=(n(139),n(125)),l=n(38),u=(n(140),n(270)),s=n(117),m=n(112),d=n(51),f=n(273),p=n(272),h=n(109),g=n.n(h),v=n(110),O=n.n(v),E=n(111),k=n.n(E),b={angle:"0",spread:"360",startVelocity:"30",elementCount:"30",dragFriction:"0.2",duration:"1000",stagger:"0",width:"10px",height:"10px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},y=[{operator:"mult",leftOperand:5,rightOperand:5,solution:25,random_solutions:[25,32,15]},{operator:"mult",leftOperand:6,rightOperand:7,solution:42,random_solutions:[42,32,44]},{operator:"mult",leftOperand:{operator:"mult",leftOperand:5,rightOperand:5},rightOperand:2,solution:50,random_solutions:[25,32,15]}];function j(e){return o.a.createElement(f.a,{size:"huge"},(t=e.operation,"".concat(t.leftOperand," ").concat("x"," ").concat(t.rightOperand)));var t}function w(e){return e.operation.random_solutions.map((function(t,n){return o.a.createElement("p",{key:n},o.a.createElement(x,{value:t,handleClick:function(){return e.handleClick(n)},confettiActive:e.confettisActive[n]}))}))}function x(e){return o.a.createElement(p.a,{onClick:e.handleClick},o.a.createElement(g.a,{active:e.confettiActive,config:b}),e.value)}var C=function(){var e=Object(a.useState)(y[0]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(n.random_solutions.map((function(){return!1}))),f=Object(l.a)(i,2),p=f[0],h=f[1],g=Object(a.useState)(0),v=Object(l.a)(g,2),E=v[0],b=v[1],x=Object(a.useState)(0),C=Object(l.a)(x,2),_=C[0],A=C[1];return o.a.createElement("div",{className:"GameContainer"},o.a.createElement(k.a,{spy:E,duration:1e3},o.a.createElement(O.a,{spy:_},o.a.createElement(u.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},o.a.createElement(s.a,null,o.a.createElement(u.a.Column,{style:{maxWidth:450}},o.a.createElement(j,{operation:n}),o.a.createElement(w,{operation:n,handleClick:function(e){if(n.random_solutions[e]===n.solution){var t=Object(c.a)(p);t[e]=!0,h(t),setTimeout((function(){return h(n.random_solutions.map((function(){return!1})))}),1e3),setTimeout((function(){A(_+1)}),300)}else b(E+1);var a=function(){function e(e,t){return Math.floor(Math.random()*t)+e}function t(e){return e-Math.floor(e/3)}function n(e){return e+Math.floor(e/3)}var a=e(1,9),o=e(1,9),r=a*o,i=[e(t(r),n(r)),e(t(r),n(r)),e(t(r),n(r))],c=e(0,(i=i.map((function(e){return e===r?e+2:e}))).length+1);return i.splice(c,0,r),{operator:"mult",leftOperand:a,rightOperand:o,solution:r,random_solutions:i}}();setTimeout((function(){r(a)}),1e3)},confettisActive:p}))),o.a.createElement(s.a,{columns:2},o.a.createElement(m.a,{style:{maxWidth:150}},o.a.createElement(d.a,{circular:!0,color:"green",size:"huge"},_)),o.a.createElement(m.a,{style:{maxWidth:150}},o.a.createElement(d.a,{circular:!0,color:"red",size:"huge"},E)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(262);i.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.98b9395d.chunk.js.map