"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[120],{234:function(e,s,i){i.r(s),i.d(s,{default:function(){return E}});var t=i(861),a=i(439),n=i(757),r=i.n(n),c=i(791),l=i(639),o=i(87),u=i(689),v=i(856),d=i(91),f="MovieDetails_movieDetailsSection__P4-Qq",m="MovieDetails_movieDetailsWrapper__GNaOX",_="MovieDetails_backLink__dzd-p",h="MovieDetails_error__uOHXe",p="MovieDetails_imageWrapper__Racpx",x="MovieDetails_imagePreview__YGEzs",j="MovieDetails_additional__+f3rh",N="MovieDetails_detail__ZJ+CR",b="MovieDetails_active__uPNdW",D="MovieDetails_details__TGlfg",g="MovieDetails_starIcon__E7t+d",w="MovieDetails_iconErrorInfo__EloQH",k=i(433),Z=i(820),M=i(184),H=i(762),S=function(e){var s,i=[],t=(0,H.Z)(e);try{for(t.s();!(s=t.n()).done;){var a=s.value;i.push(a.name)}}catch(n){t.e(n)}finally{t.f()}return i.join(", ")},O=i(874),E=function(){var e,s,i,n,H,E,L=(0,c.useState)(null),C=(0,a.Z)(L,2),G=C[0],I=C[1],P=(0,c.useState)(!1),R=(0,a.Z)(P,2),y=R[0],z=R[1],A=(0,c.useState)(null),T=(0,a.Z)(A,2),W=T[0],Q=T[1],X=(0,c.useState)([]),q=(0,a.Z)(X,2),B=q[0],F=q[1],J=(0,c.useState)(!1),U=(0,a.Z)(J,2),Y=U[0],$=U[1],K=(0,u.UO)().movieId,V=(0,u.TH)();return(0,c.useEffect)((function(){(0,t.Z)(r().mark((function e(){var s,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z(!0),e.next=4,(0,d.TP)(K);case 4:s=e.sent,i=s.data,I(i),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),$(!0);case 13:return e.prev=13,z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})))()}),[K]),(0,c.useEffect)((function(){!function(e,s,i,t){if(t)if(Number(t)<3){s(1);for(var a=function(e){i((function(s){return[].concat((0,k.Z)(s),[(0,M.jsx)(Z.pHD,{className:g},e)])}))},n=0;n<e;n++)a(n)}else if(Number(t)>=3&&Number(t)<5){s(2);for(var r=function(e){i((function(s){return[].concat((0,k.Z)(s),[(0,M.jsx)(Z.pHD,{className:g},e)])}))},c=0;c<e;c++)r(c)}else if(Number(t)>=5&&Number(t)<7){s(3);for(var l=function(e){i((function(s){return[].concat((0,k.Z)(s),[(0,M.jsx)(Z.pHD,{className:g},e)])}))},o=0;o<e;o++)l(o)}else if(Number(t)>=7&&Number(t)<9){s(4);for(var u=function(e){i((function(s){return[].concat((0,k.Z)(s),[(0,M.jsx)(Z.pHD,{className:g},e)])}))},v=0;v<e;v++)u(v)}else if(Number(t)>=9&&Number(t)<=10){s(5);for(var d=function(e){i((function(s){return[].concat((0,k.Z)(s),[(0,M.jsx)(Z.pHD,{className:g},e)])}))},f=0;f<e;f++)d(f)}}(W,Q,F,null===G||void 0===G?void 0:G.vote_average)}),[W,G]),(0,M.jsxs)("section",{className:f,children:[(0,M.jsx)(o.OL,{to:null!==(e=null===(s=V.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/movies",className:_,children:"Back"}),y&&(0,M.jsx)(l.Z,{}),Y&&(0,M.jsxs)("div",{className:h,children:[(0,M.jsx)(v.wr$,{className:w}),"Something went wrong..."]}),G&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{className:m,children:[(0,M.jsx)("div",{className:p,children:(0,M.jsx)(O.LazyLoadImage,{effect:"blur",className:x,src:G.backdrop_path?"http://image.tmdb.org/t/p/w500/".concat(G.backdrop_path):"http://bcibelisle.com/wp-content/uploads/2017/05/img_placeholder.png",alt:""})}),(0,M.jsxs)("div",{className:D,children:[(0,M.jsx)("p",{children:(0,M.jsx)("b",{children:G.original_title})}),(0,M.jsxs)("p",{children:["Rating: ",G.vote_average,"\xa0",B]}),(0,M.jsx)("hr",{}),(0,M.jsx)("p",{children:(0,M.jsx)("b",{children:"Overview:"})}),(0,M.jsx)("p",{children:G.overview}),(0,M.jsx)("hr",{}),(0,M.jsx)("p",{children:(0,M.jsx)("b",{children:"Genres: "})}),(0,M.jsx)("p",{children:S(G.genres)}),(0,M.jsx)("hr",{})]})]}),(0,M.jsx)("h4",{children:"Additional information: "}),(0,M.jsxs)("div",{className:j,children:[(0,M.jsx)(o.OL,{to:"cast",className:function(e){return e.isActive?b:N},state:{from:null!==(i=null===(n=V.state)||void 0===n?void 0:n.from)&&void 0!==i?i:"/"},children:"Cast"}),(0,M.jsx)("br",{}),(0,M.jsx)(o.OL,{to:"review",className:function(e){return e.isActive?b:N},state:{from:null!==(H=null===(E=V.state)||void 0===E?void 0:E.from)&&void 0!==H?H:"/"},children:"Review"})]}),(0,M.jsx)("hr",{}),(0,M.jsx)("div",{children:(0,M.jsx)(c.Suspense,{fallback:null,children:(0,M.jsx)(u.j3,{})})})]})]})}}}]);
//# sourceMappingURL=120.afe4e96b.chunk.js.map