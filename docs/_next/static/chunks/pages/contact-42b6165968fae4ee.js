(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return i(5210)}])},842:function(e,n,i){"use strict";var t=i(5893),a=i(4597),r=i(8056),l=i(1159),o=(0,a.forComponent)(l.Z,"Menu").withDeepSchema({items:(0,a.dsArray)({displayName:"string",link:["./","./about-us","./test","./contact"]})}).withSensibleDefault(),c=(0,a.createSchema)([o]);n.Z=function(){return(0,t.jsx)(r.xu,{id:"managed-menu",schema:c,model:i(39)})}},1159:function(e,n,i){"use strict";var t=i(7297),a=i(5893),r=i(1664),l=i.n(r),o=i(294),c=i(15);function s(){var e=(0,t.Z)(["\n        display: flex;\n    "]);return s=function(){return e},e}function d(){var e=(0,t.Z)(["\n                padding: 1rem\n            "]);return d=function(){return e},e}n.Z=function(e){var n=e.items;return(0,a.jsx)("div",{className:(0,o.css)(s()),children:n.map((function(e,n){return(0,a.jsx)("div",{className:(0,o.css)(d()),children:(0,a.jsx)(c.E.div,{initial:{opacity:.6},whileHover:{scale:1.2,opacity:1,transition:{duration:1}},children:(0,a.jsx)(l(),{href:e.link,children:e.displayName})})},e.displayName)}))})}},1715:function(e,n,i){"use strict";i.d(n,{f:function(){return f}});var t=i(4597),a=i(5893),r=i(15),l=i(5675),o=i.n(l),c=i(1159),s=function(e){var n=e.text,i=e.children;return(0,a.jsxs)("div",{style:{padding:"10px",margin:"10px",backgroundColor:"lightblue"},children:[n,i]})},d=(0,t.forComponent)(s,"TestComp").withDeepSchema({text:"string"}).withSensibleDefault(),u=(0,t.forComponent)(c.Z,"Menu").withDeepSchema({items:(0,t.dsArray)({displayName:"string",link:["./index","./about-us","./test"]})}).withSensibleDefault(),m=(0,t.forComponent)((function(e){var n=e.id;return(0,a.jsx)(o(),{alt:"lambdasafe logo big",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",src:"/lambda.png",id:n})}),"LambdaLogo").withDeepSchema({}).withSensibleDefault(),h=(0,t.forComponent)((function(e){var n=e.duration,i=e.delay,t=e.children;return(0,a.jsx)(r.E.div,{initial:{opacity:0,scale:1.2},animate:{opacity:1,scale:1},transition:{duration:null!==n&&void 0!==n?n:.5,delay:null!==i&&void 0!==i?i:0},children:t})}),"FadeIn").withDeepSchema({duration:(0,t.dsNullable)("number"),delay:(0,t.dsNullable)("number")}).withSensibleDefault(),p=(0,t.forComponent)((function(e){var n=e.duration,i=e.delay,t=e.children;return(0,a.jsx)(r.E.div,{initial:{opacity:0,left:-300},animate:{opacity:1},transition:{duration:null!==n&&void 0!==n?n:.5,delay:null!==i&&void 0!==i?i:0},children:t})}),"FadeFromLeft").withDeepSchema({duration:(0,t.dsNullable)("number"),delay:(0,t.dsNullable)("number")}).withSensibleDefault(),f=(0,t.createSchema)([d,u,m,h,p])},4738:function(e,n,i){"use strict";i.r(n);var t=i(7297),a=i(5893),r=i(9008),l=i.n(r),o=i(214),c=i.n(o),s=i(294);function d(){var e=(0,t.Z)(["\n        width: 960px;\n        margin: 0 auto;\n      "]);return d=function(){return e},e}n.default=function(e){var n=e.title,i=e.description,t=e.children;return(0,a.jsxs)("div",{className:c().container,children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("meta",{name:"description",content:i}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:(0,s.css)(d()),children:t})]})}},5210:function(e,n,i){"use strict";i.r(n);var t=i(5893),a=i(8056),r=i(842),l=i(4738),o=i(1715);n.default=function(){return(0,t.jsxs)(l.default,{title:"contact",children:[(0,t.jsx)(r.Z,{}),(0,t.jsx)(a.xu,{id:"contact",schema:o.f,model:i(4312)})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},39:function(e){"use strict";e.exports=JSON.parse('{"component":"Menu","parameters":{"items":[{"displayName":"LambdaSafe","link":"./"},{"displayName":"About Us","link":"./about-us"},{"displayName":"Get in touch","link":"./contact"},{"displayName":"asdasd","link":"./"},{"displayName":"dfgdgfdfg","link":"./"}]},"children":[]}')},4312:function(e){"use strict";e.exports=JSON.parse('{"component":"div","parameters":{"style":{"padding":"30px"}},"children":[{"component":"CDyn","parameters":{"data":"WyJ0cmVlX3YxIixbInNjUmVhY3RDb21wb192MSIseyJ0eXBlIjpbImh0bWxlbGVtIiwicCJdLCJwcm9wc192MiI6W10sImNhblN0YXRFdmFsIjpmYWxzZX1dXQ==","lChildren":"all","lCss":"","lProps":{},"type":"p"},"children":[{"component":"Text","parameters":{"text":"You can get in touch by contacting"},"children":[]},{"component":"CDyn","parameters":{"data":"WyJ0cmVlX3YxIixbInNjUmVhY3RDb21wb192MSIseyJ0eXBlIjpbImh0bWxlbGVtIiwiYSJdLCJwcm9wc192MiI6W1tbImhyZWYiXSxbImhyZWZfdjEiLFsic3RhdGljX3YxIixbImNvbnN0X3YzIixbInN0cmluZyIsIm1haWx0bzphbGV4LmxhbWJkYXNhZmVAZ21haWwuY29tIl0sdHJ1ZV1dXV0sW1sic3R5bGUiXSxbImlubGluZVN0eWxlX3YzIix7ImRlZiI6ImRpc3BsYXk6IGlubGluZTtjb2xvcjogcmVkOyIsInJlZnMiOltdfSxmYWxzZV1dXSwiY2FuU3RhdEV2YWwiOmZhbHNlfV1d","lChildren":"all","lCss":"\\r\\ncolor: red;display: inline;","lProps":{"href":"mailto:alex.lambdasafe@gmail.com"},"type":"a"},"children":[{"component":"Text","parameters":{"text":"alex.lambdasafe@gmail.com"},"children":[]}]}]}]}')}},function(e){e.O(0,[961,455,774,888,179],(function(){return n=1382,e(e.s=n);var n}));var n=e.O();_N_E=n}]);