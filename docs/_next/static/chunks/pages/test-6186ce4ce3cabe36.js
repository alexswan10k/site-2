(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{1185:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n(9929)}])},842:function(e,t,n){"use strict";var i=n(5893),a=n(4597),r=n(8056),l=n(1159),o=(0,a.forComponent)(l.Z,"Menu").withDeepSchema({items:(0,a.dsArray)({displayName:"string",link:["./","./about-us","./projects","./test","./contact"]})}).withSensibleDefault(),s=(0,a.createSchema)([o]);t.Z=function(){return(0,i.jsx)(r.xu,{id:"managed-menu",schema:s,model:n(39)})}},1159:function(e,t,n){"use strict";var i=n(7297),a=n(5893),r=n(1664),l=n.n(r),o=n(294),s=n(15),d=n(5675),c=n.n(d);function m(){var e=(0,i.Z)(["\n        display: flex;\n        align-items: center;\n    "]);return m=function(){return e},e}function h(){var e=(0,i.Z)(["\n                padding: 1rem\n            "]);return h=function(){return e},e}t.Z=function(e){var t=e.items;return(0,a.jsxs)("div",{className:(0,o.css)(m()),children:[(0,a.jsx)(l(),{href:"./",children:(0,a.jsx)(c(),{src:"lambda.png",alt:"Lambda Logo",height:30,width:30})}),t.map((function(e,t){return(0,a.jsx)("div",{className:(0,o.css)(h()),children:(0,a.jsx)(s.E.div,{initial:{opacity:.6},whileHover:{scale:1.2,opacity:1,transition:{duration:1}},children:(0,a.jsx)(l(),{href:e.link,children:e.displayName})})},e.displayName)}))]})}},1715:function(e,t,n){"use strict";n.d(t,{f:function(){return b}});var i=n(4597),a=n(5893),r=n(15),l=n(5675),o=n.n(l),s=n(1159),d=function(e){var t=e.text,n=e.children;return(0,a.jsxs)("div",{style:{padding:"10px",margin:"10px",backgroundColor:"lightblue"},children:[t,n]})},c=(0,i.forComponent)(d,"TestComp").withDeepSchema({text:"string"}).withSensibleDefault(),m=(0,i.forComponent)(s.Z,"Menu").withDeepSchema({items:(0,i.dsArray)({displayName:"string",link:["./index","./about-us","./test"]})}).withSensibleDefault(),h=(0,i.forComponent)((function(e){var t=e.id;return(0,a.jsx)(o(),{alt:"lambdasafe logo big",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",src:"/lambda.png",id:t})}),"LambdaLogo").withDeepSchema({}).withSensibleDefault(),p=(0,i.forComponent)((function(e){var t=e.duration,n=e.delay,i=e.children;return(0,a.jsx)(r.E.div,{initial:{opacity:0,scale:1.2},animate:{opacity:1,scale:1},transition:{duration:null!==t&&void 0!==t?t:.5,delay:null!==n&&void 0!==n?n:0},children:i})}),"FadeIn").withDeepSchema({duration:(0,i.dsNullable)("number"),delay:(0,i.dsNullable)("number")}).withSensibleDefault(),u=(0,i.forComponent)((function(e){var t=e.duration,n=e.delay,i=e.children;return(0,a.jsx)(r.E.div,{initial:{opacity:0,left:-300},animate:{opacity:1},transition:{duration:null!==t&&void 0!==t?t:.5,delay:null!==n&&void 0!==n?n:0},children:i})}),"FadeFromLeft").withDeepSchema({duration:(0,i.dsNullable)("number"),delay:(0,i.dsNullable)("number")}).withSensibleDefault(),b=(0,i.createSchema)([c,m,h,p,u])},4738:function(e,t,n){"use strict";n.r(t);var i=n(7297),a=n(5893),r=n(9008),l=n.n(r),o=n(214),s=n.n(o),d=n(294);function c(){var e=(0,i.Z)(["\n        width: 960px;\n        margin: 0 auto;\n      "]);return c=function(){return e},e}t.default=function(e){var t=e.title,n=e.description,i=e.children;return(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:(0,d.css)(c()),children:i})]})}},9929:function(e,t,n){"use strict";n.r(t);var i=n(5893),a=n(8056),r=n(842),l=n(4738),o=n(1715);t.default=function(){return(0,i.jsxs)(l.default,{title:"test",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.xu,{id:"test",schema:o.f,model:n(9416)})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},39:function(e){"use strict";e.exports=JSON.parse('{"component":"Menu","parameters":{"items":[{"displayName":"LambdaSafe","link":"./"},{"displayName":"About Us","link":"./about-us"},{"displayName":"Projects","link":"./projects"},{"displayName":"Get in touch","link":"./contact"}]},"children":[]}')},9416:function(e){"use strict";e.exports=JSON.parse('{"component":"CDyn","parameters":{"data":"WyJ0cmVlX3YxIixbImNzc2dyaWRfdjMiLCJ5c3ZhZmhyYXVrYm51cXNscmdjYiIsWyIyIix7ImFsbCI6eyJzY29wZUlkIjoiIiwicm9vdCI6eyJkaXNwbGF5IjoiZ3JpZCIsImdyaWQtdGVtcGxhdGUtY29sdW1ucyI6WyJhdXRvIiwiYXV0byJdLCJncmlkLXRlbXBsYXRlLXJvd3MiOltdLCJncmlkLXJvdy1nYXAiOm51bGwsImdyaWQtY29sdW1uLWdhcCI6bnVsbCwianVzdGlmeS1pdGVtcyI6InN0cmV0Y2giLCJhbGlnbi1pdGVtcyI6InN0cmV0Y2giLCJqdXN0aWZ5LWNvbnRlbnQiOm51bGwsImFsaWduLWNvbnRlbnQiOm51bGwsImdyaWQtYXV0by1mbG93Ijoicm93IiwiZ3JpZC1hdXRvLWNvbHVtbnMiOm51bGwsImdyaWQtYXV0by1yb3dzIjpudWxsfSwiY2hpbGRyZW4iOltdfSwic2NyZWVuIjpbXSwicHJpbnQiOm51bGx9XV1d","lChildren":[{"lChildren":0,"lCss":"","type":"div"},{"lChildren":1,"lCss":"","type":"div"},{"lChildren":2,"lCss":"","type":"div"},{"lChildren":3,"lCss":"","type":"div"},{"lChildren":4,"lCss":"","type":"div"},{"lChildren":5,"lCss":"","type":"div"},{"lChildren":6,"lCss":"","type":"div"},{"lChildren":7,"lCss":"","type":"div"}],"lCss":"display: grid;grid-template-columns: auto auto;justify-items: stretch;align-items: stretch;grid-auto-flow: row;","lProps":{"id":"cssgrid"},"type":"div"},"children":[{"component":"TestComp","parameters":{"text":"helloewr"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]},{"component":"TestComp","parameters":{"text":"helloewr"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]},{"component":"TestComp","parameters":{"text":"helloewr"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]},{"component":"TestComp","parameters":{"text":"helloewr"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]},{"component":"TestComp","parameters":{"text":"helloewr"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]},{"component":"TestComp","parameters":{"text":"helloewrfadadad"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]},{"component":"TestComp","parameters":{"text":"helloewr"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]},{"component":"TestComp","parameters":{"text":"helloewr"},"children":[{"component":"TestComp","parameters":{"text":"blah blah blah"},"children":[]}]}]}')}},function(e){e.O(0,[991,455,774,888,179],(function(){return t=1185,e(e.s=t);var t}));var t=e.O();_N_E=t}]);