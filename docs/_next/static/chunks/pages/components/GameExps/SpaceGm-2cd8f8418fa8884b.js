(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{28:function(t,o,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/GameExps/SpaceGm",function(){return i(2561)}])},2561:function(t,o,i){"use strict";i.r(o);var n=i(1799),e=i(5893),r=i(7294),a=15;o.default=function(){var t=(0,r.useRef)(null),o=(0,r.useState)({position:{x:400,y:300},velocity:{x:0,y:0},angle:0,thrust:!1,rotating:"none"}),i=o[0],s=o[1],l=[{position:{x:200,y:200},radius:30,color:"#2ecc71"},{position:{x:600,y:400},radius:40,color:"#3498db"}],u=Array.from({length:10},(function(){return{position:{x:800*Math.random(),y:600*Math.random()},velocity:{x:2*(Math.random()-.5),y:2*(Math.random()-.5)},radius:10*Math.random()+5}}));return(0,r.useEffect)((function(){var o=t.current;if(o){var e=o.getContext("2d");if(e){var r,c={},y=function(t){c[t.key]=!0,s((function(o){var i=(0,n.Z)({},o);return"ArrowLeft"===t.key&&(i.rotating="left"),"ArrowRight"===t.key&&(i.rotating="right"),"ArrowUp"===t.key&&(i.thrust=!0),i}))},f=function(t){c[t.key]=!1,s((function(o){var i=(0,n.Z)({},o);return"ArrowLeft"===t.key&&"left"===o.rotating&&(i.rotating="none"),"ArrowRight"===t.key&&"right"===o.rotating&&(i.rotating="none"),"ArrowUp"===t.key&&(i.thrust=!1),i}))};window.addEventListener("keydown",y),window.addEventListener("keyup",f);var p=function(){s((function(t){var o=(0,n.Z)({},t);if("left"===o.rotating&&(o.angle=t.angle-4),"right"===o.rotating&&(o.angle=t.angle+4),o.thrust){var i=o.angle*Math.PI/180;o.velocity.x+=.02*Math.cos(i),o.velocity.y+=.02*Math.sin(i)}return o.position.x+=o.velocity.x,o.position.y+=o.velocity.y,o.position.x>800&&(o.position.x=0),o.position.x<0&&(o.position.x=800),o.position.y>600&&(o.position.y=0),o.position.y<0&&(o.position.y=600),o})),u.forEach((function(t){t.position.x+=t.velocity.x,t.position.y+=t.velocity.y,t.position.x>800&&(t.position.x=0),t.position.x<0&&(t.position.x=800),t.position.y>600&&(t.position.y=0),t.position.y<0&&(t.position.y=600)})),e.fillStyle="#000",e.fillRect(0,0,800,600),l.forEach((function(t){e.beginPath(),e.arc(t.position.x,t.position.y,t.radius,0,2*Math.PI),e.fillStyle=t.color,e.fill()})),u.forEach((function(t){e.beginPath(),e.arc(t.position.x,t.position.y,t.radius,0,2*Math.PI),e.fillStyle="#888",e.fill()})),e.save(),e.translate(i.position.x,i.position.y),e.rotate(1e3*i.angle),e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(a,0),e.lineTo(-15,7.5),e.lineTo(-15,-7.5),e.closePath(),e.stroke(),i.thrust&&(e.beginPath(),e.moveTo(-15,7.5),e.lineTo(-22.5,0),e.lineTo(-15,-7.5),e.strokeStyle="#f00",e.stroke()),e.restore(),r=requestAnimationFrame(p)};return p(),function(){window.removeEventListener("keydown",y),window.removeEventListener("keyup",f),cancelAnimationFrame(r)}}}}),[]),(0,e.jsx)("canvas",{ref:t,width:800,height:600,style:{border:"1px solid #333"}})}}},function(t){t.O(0,[774,888,179],(function(){return o=28,t(t.s=o);var o}));var o=t.O();_N_E=o}]);