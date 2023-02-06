"use strict";(self.webpackChunkyt=self.webpackChunkyt||[]).push([[330],{1330:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var s=n(9439),i=n(2791),l=n(6710),d=n(7689),a=n(1087),c=n(4012),o=n(5502),r=n(786),u=n(3746),m=n(9161),x=n(8175),p=n(184),v=function(){var e,t,n,v,h,j,f,N,w=(0,i.useState)(!0),g=(0,s.Z)(w,2),b=g[0],y=g[1];window.onresize=function(){window.innerWidth<768?y(!1):y(!0)};var Z=(0,d.UO)("search").id,I=(0,i.useState)("comment"),C=(0,s.Z)(I,2),S=C[0],L=C[1],z=(0,i.useState)([]),k=(0,s.Z)(z,2),T=k[0],V=k[1],F=(0,i.useState)(!0),O=(0,s.Z)(F,2),D=O[0],Q=O[1],R=(0,i.useState)([]),A=(0,s.Z)(R,2),P=A[0],Y=A[1],U=(0,i.useState)(!0),X=(0,s.Z)(U,2),E=X[0],H=X[1],K=(0,i.useState)([]),W=(0,s.Z)(K,2),q=W[0],B=W[1],G=(0,i.useState)(!0),J=(0,s.Z)(G,2),M=J[0],$=J[1];return(0,i.useEffect)((function(){(0,o.Q)("videos?part=contentDetails,snippet,statistics&id=".concat(Z)).then((function(e){Q(!1),V(e.items[0])})),(0,o.Q)("commentThreads?videoId=".concat(Z,"&part=snippet&maxResults=200")).then((function(e){H(!1),Y(e.items)})),(0,o.Q)("search?relatedToVideoId=".concat(Z,"&part=snippet,id&type=video&order=date")).then((function(e){$(!1),B(e.items)}))}),[Z]),(0,p.jsxs)("div",{className:"container flex flex-col md:flex-row p-4 space-x-3",children:[(0,p.jsxs)("div",{className:"container text-white flex flex-col w-full md:w-8/12",children:[(0,p.jsxs)("div",{className:"w-full",children:[(0,p.jsx)("div",{className:"flex w-full justify-center items-align",children:(0,p.jsx)(l.Z,{controls:!0,className:"react-player",url:"https://www.youtube.com/watch?v=".concat(Z)})}),(0,p.jsx)("div",{className:"detail my-4 ",children:D?(0,p.jsx)(x.aV,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{className:"text-1xl md:text-3xl",children:null===(e=T.snippet)||void 0===e||null===(t=e.localized)||void 0===t?void 0:t.title}),(0,p.jsxs)("div",{className:"flex justify-between mt-5 md:mr-16",children:[(0,p.jsx)(a.OL,{className:"cursor-pointer",to:"/YT/channel/".concat(null===(n=T.snippet)||void 0===n?void 0:n.channelId),children:(0,p.jsx)("h2",{className:"text-md md:text-2xl",children:null===(v=T.snippet)||void 0===v?void 0:v.channelTitle})}),(0,p.jsxs)("div",{className:"flex justify-end w-full text-sm md:text-1xl md:space-x-5 space-x-2",children:[(0,p.jsxs)("p",{children:[(0,p.jsx)(r.Z,{fontSize:"small"})," ",parseInt(null===(h=T.statistics)||void 0===h?void 0:h.likeCount).toLocaleString()]}),(0,p.jsxs)("p",{children:[(0,p.jsx)(m.Z,{fontSize:"small"})," ",parseInt(null===(j=T.statistics)||void 0===j?void 0:j.commentCount).toLocaleString()]})]})]})]})})]}),(0,p.jsx)("div",{className:"decription w-full bg-slate-500 rounded-lg p-4 container mr-16",children:D?(0,p.jsx)(x.aV,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"flex  md:space-x-4 space-x-1",children:(0,p.jsxs)("h2",{className:"flex items-center",children:[(0,p.jsx)(u.Z,{fontSize:"small",className:"text-xs mr-1"})," ",parseInt(null===(f=T.statistics)||void 0===f?void 0:f.viewCount).toLocaleString()]})}),(0,p.jsxs)("h2",{className:"mt-3 text-md",children:[" ",null===(N=T.snippet)||void 0===N?void 0:N.description]})]})}),(0,p.jsxs)("div",{className:b?"hidden":"btn-container  mx-auto  my-4",children:[(0,p.jsx)("button",{onClick:function(){return L("comment")},className:"border-r-2 rounded-l-full px-3 bg-zinc-500 hover:bg-zinc-600 py-2 ",children:"comments"}),(0,p.jsx)("button",{onClick:function(){return L("suggested")},className:"rounded-r-full  bg-zinc-500 px-3  py-2 hover:bg-zinc-600 ",children:"suggested"})]}),(0,p.jsx)("div",{className:b||"comment"===S?"container  ":"container  hidden",children:E?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"my-5",children:(0,p.jsx)(x.aV,{})}),(0,p.jsx)("div",{className:"my-5",children:(0,p.jsx)(x.aV,{})}),(0,p.jsx)("div",{className:"my-5",children:(0,p.jsx)(x.aV,{})}),(0,p.jsx)("div",{className:"my-5",children:(0,p.jsx)(x.aV,{})})]}):(0,p.jsx)(p.Fragment,{children:null===P||void 0===P?void 0:P.map((function(e){var t,n,s,i,l,d,c,o,r,u,m,x,v,h,j,f;return(0,p.jsxs)("div",{className:"comment bg-red my-5 w-full",children:[(0,p.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,p.jsx)("img",{className:"rounded-full",src:null===(t=e.snippet)||void 0===t||null===(n=t.topLevelComment)||void 0===n||null===(s=n.snippet)||void 0===s?void 0:s.authorProfileImageUrl,width:"25px",height:"25px",alt:""}),(0,p.jsx)(a.OL,{to:"/channel/".concat(null===(i=e.snippet)||void 0===i||null===(l=i.topLevelComment)||void 0===l||null===(d=l.snippet)||void 0===d||null===(c=d.authorChannelId)||void 0===c?void 0:c.value),children:(0,p.jsx)("h4",{className:"text-lg flex items-center",children:null===e||void 0===e||null===(o=e.snippet)||void 0===o||null===(r=o.topLevelComment)||void 0===r||null===(u=r.snippet)||void 0===u?void 0:u.authorDisplayName})}),(0,p.jsx)("p",{className:"text-sm",children:null===e||void 0===e||null===(m=e.snippet)||void 0===m||null===(x=m.topLevelComment)||void 0===x||null===(v=x.snippet)||void 0===v?void 0:v.updatedAt})]}),(0,p.jsx)("p",{className:"ml-10 mt-2",children:null===e||void 0===e||null===(h=e.snippet)||void 0===h||null===(j=h.topLevelComment)||void 0===j||null===(f=j.snippet)||void 0===f?void 0:f.textOriginal})]})}))})})]}),(0,p.jsx)("div",{className:b||"suggested"===S?" w-12/12 md:w-4/12":" w-12/12 hidden md:w-4/12",children:M?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.mr,{}),(0,p.jsx)(x.mr,{}),(0,p.jsx)(x.mr,{})]}):(0,p.jsx)(p.Fragment,{children:q.map((function(e,t){return(0,p.jsx)(c.Z,{id:t,videoDetail:e})}))})})]})}},4012:function(e,t,n){n(2791);var s=n(1087),i=n(184);t.Z=function(e){var t,n,l=e.videoDetail;return(0,i.jsx)(s.OL,{to:null!==l&&void 0!==l&&null!==(t=l.id)&&void 0!==t&&t.videoId?"/YT/video/".concat(null===l||void 0===l||null===(n=l.id)||void 0===n?void 0:n.videoId):"/YT/channel/".concat(null===l||void 0===l?void 0:l.id.channelId),children:(0,i.jsxs)("div",{className:"w-68 rounded-md  mt-3  bg-zinc-800 h-80",children:[(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("img",{className:"w-full h-48 rounded-tl-md rounded-tr-md ",src:l.snippet.thumbnails.medium.url,alt:""})}),(0,i.jsxs)("div",{className:"content p-3",children:[(0,i.jsx)("h3",{className:"text-2xl truncate text-white",children:l.snippet.title}),(0,i.jsx)("p",{className:"text-1xl text-white",children:l.snippet.channelTitle}),(null===l||void 0===l?void 0:l.id.videoId)&&(0,i.jsx)("p",{className:"text-1xl text-white",children:l.snippet.publishTime})]})]})})}},5502:function(e,t,n){n.d(t,{Q:function(){return a}});var s=n(4165),i=n(5861),l=n(1912),d={params:{maxResults:50,regionCode:"IN"},headers:{"X-RapidAPI-Key":"75c484c994mshede7f2b9b2d1e0dp1e9596jsn1bfafeadbb67","X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}},a=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("".concat("https://youtube-v31.p.rapidapi.com","/").concat(t),d);case 2:return n=e.sent,i=n.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=330.e04e920c.chunk.js.map