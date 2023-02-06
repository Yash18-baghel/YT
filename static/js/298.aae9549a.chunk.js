"use strict";(self.webpackChunkyt=self.webpackChunkyt||[]).push([[298],{298:function(e,t,i){i.r(t);var n=i(9439),s=i(2791),l=i(7689),a=i(4012),d=i(3746),c=i(5502),r=i(8175),o=i(184);t.default=function(){var e,t,i,u,p,v,x,m=(0,s.useState)([]),h=(0,n.Z)(m,2),f=h[0],j=h[1],b=(0,s.useState)(!0),g=(0,n.Z)(b,2),w=g[0],N=g[1],y=(0,s.useState)([]),Z=(0,n.Z)(y,2),I=Z[0],S=Z[1],C=(0,s.useState)(!0),T=(0,n.Z)(C,2),k=T[0],z=T[1],L=(0,l.TH)(),F=L.pathname.split("/").length,Q=L.pathname.split("/")[F-1];return(0,s.useEffect)((function(){(0,c.Q)("channels?id=".concat(Q,"&part=snippet,statistics")).then((function(e){N(!1),j(e.items[0])})),(0,c.Q)("search?channelId=".concat(Q,"&part=snippet,id&order=date")).then((function(e){z(!1),S(e.items)}))}),[Q]),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{className:"w-full m-0 md:object-cover md:h-48 h-full",src:null===f||void 0===f||null===(e=f.brandingSettings)||void 0===e||null===(t=e.image)||void 0===t?void 0:t.bannerExternalUrl,alt:"channel banner"}),(0,o.jsx)("div",{className:"container py-5 bg-slate-700",children:(0,o.jsxs)("div",{className:"profileImg",children:[(0,o.jsx)("h3",{className:"text-center text-4xl text-white",children:null===(i=f.snippet)||void 0===i?void 0:i.title}),(0,o.jsx)("p",{className:"text-md md:px-10 px-5 py-3 text-white text-center",children:null===(u=f.snippet)||void 0===u?void 0:u.description}),(0,o.jsx)("div",{className:"flex flex-col md:flex-row px-5 justify-between text-lg text-white md:px-20",children:w?(0,o.jsx)(r.aV,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("p",{class:"md:p-0 py-2",children:["Subscribers: ",parseInt(null===f||void 0===f||null===(p=f.statistics)||void 0===p?void 0:p.subscriberCount).toLocaleString()]}),(0,o.jsxs)("p",{class:"md:p-0 py-2",children:["Total videos: ",parseInt(null===f||void 0===f||null===(v=f.statistics)||void 0===v?void 0:v.videoCount).toLocaleString()]}),(0,o.jsxs)("p",{class:"md:p-0 py-2",children:[(0,o.jsx)(d.Z,{fontSize:"medium"}),parseInt(null===f||void 0===f||null===(x=f.statistics)||void 0===x?void 0:x.viewCount).toLocaleString()]})]})})]})}),(0,o.jsx)("div",{className:"container my-5 px-4 grid md:grid-cols-3 grid-cols-1 gap-4",children:k?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.mr,{}),(0,o.jsx)(r.mr,{}),(0,o.jsx)(r.mr,{})]}):(0,o.jsx)(o.Fragment,{children:null===I||void 0===I?void 0:I.map((function(e,t){return(0,o.jsx)(a.Z,{id:t,videoDetail:e})}))})})]})}},4012:function(e,t,i){i(2791);var n=i(1087),s=i(184);t.Z=function(e){var t,i,l=e.videoDetail;return(0,s.jsx)(n.OL,{to:null!==l&&void 0!==l&&null!==(t=l.id)&&void 0!==t&&t.videoId?"/YT/video/".concat(null===l||void 0===l||null===(i=l.id)||void 0===i?void 0:i.videoId):"/YT/channel/".concat(null===l||void 0===l?void 0:l.id.channelId),children:(0,s.jsxs)("div",{className:"w-68 rounded-md  mt-3  bg-zinc-800 h-80",children:[(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("img",{className:"w-full h-48 rounded-tl-md rounded-tr-md ",src:l.snippet.thumbnails.medium.url,alt:""})}),(0,s.jsxs)("div",{className:"content p-3",children:[(0,s.jsx)("h3",{className:"text-2xl truncate text-white",children:l.snippet.title}),(0,s.jsx)("p",{className:"text-1xl text-white",children:l.snippet.channelTitle}),(null===l||void 0===l?void 0:l.id.videoId)&&(0,s.jsx)("p",{className:"text-1xl text-white",children:l.snippet.publishTime})]})]})})}},5502:function(e,t,i){i.d(t,{Q:function(){return d}});var n=i(4165),s=i(5861),l=i(1912),a={params:{maxResults:50,regionCode:"IN"},headers:{"X-RapidAPI-Key":"75c484c994mshede7f2b9b2d1e0dp1e9596jsn1bfafeadbb67","X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}},d=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat("https://youtube-v31.p.rapidapi.com","/").concat(t),a);case 2:return i=e.sent,s=i.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3746:function(e,t,i){var n=i(4836);t.Z=void 0;var s=n(i(5649)),l=i(184),a=(0,s.default)((0,l.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=a}}]);
//# sourceMappingURL=298.aae9549a.chunk.js.map