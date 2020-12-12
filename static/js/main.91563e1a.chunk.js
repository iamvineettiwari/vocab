(this.webpackJsonpvocab=this.webpackJsonpvocab||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),o=n(10),i=n.n(o),s=n(167),l=n(82),d=Object(l.a)({palette:{primary:{main:"#5d1049",light:"#9e7092",dark:"#4e0d3a"},secondary:{main:"#e93651",light:"#f49ba8",dark:"#e30425"}},typography:{fontFamily:"'Kumbh Sans', sans-serif"}}),u=n(17),j=n(150),b=n(158),p=n(165),h=n(114),m=n(166),f=n(80),O=n.n(f),x=n(157),g=n(171),v=n(156),y=n(154),w=n(153),C=n(168),k=Object(j.a)((function(e){return{formControl:{width:"100%"},addButtonContainer:{position:"relative"},loadingBar:{position:"absolute",left:"50%",top:"50%",marginTop:-12,marginLeft:-12}}})),T=function(e){var t=k(),n=Object(r.useState)(""),c=Object(u.a)(n,2),o=c[0],i=c[1],s=Object(r.useState)(!1),l=Object(u.a)(s,2),d=l[0],j=l[1],p=Object(r.useState)(""),m=Object(u.a)(p,2),f=m[0],O=m[1],T=function(){e.handleClose(),i("")};return Object(a.jsxs)(g.a,{fullWidth:!0,maxWidth:"xs",open:e.isOpen,onClose:T,"aria-labelledby":"max-width-dialog-title",children:[Object(a.jsx)(w.a,{id:"max-width-dialog-title",children:"Add to Dictionary"}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(C.a,{label:"New Word",value:o,onChange:function(e){return i(e.target.value)},className:t.formControl}),d&&Object(a.jsx)(h.a,{variant:"body2",component:"p",color:"secondary",style:{paddingTop:5,paddingBottom:5},children:f})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsx)(x.a,{onClick:T,color:"primary",children:"CANCEL"}),Object(a.jsxs)("div",{className:t.addButtonContainer,children:[Object(a.jsx)(x.a,{disabled:e.isSubmiting,onClick:function(){if(0===o.length)return j(!0),void O("Please enter something to add !");j(!1),O(""),e.handleSubmit(o)},color:"primary",children:"ADD"}),e.isSubmiting&&Object(a.jsx)(b.a,{size:24,className:t.loadingBar})]})]})]})},S=n(23),N=n(160),A=n(161),D=n(162),I=n(76),E=n.n(I),B=n(159),R=Object(j.a)((function(e){return{title:{textTransform:"capitalize"},infoContainer:{padding:20,marginTop:20}}})),L=c.a.forwardRef((function(e,t){return Object(a.jsx)(B.a,Object(S.a)({direction:"up",ref:t},e))})),z=function(e){var t=R();return Object(a.jsx)("div",{children:Object(a.jsxs)(g.a,{fullScreen:!0,open:e.open,onClose:e.handleClose,TransitionComponent:L,children:[Object(a.jsx)(N.a,{className:t.appBar,position:"sticky",children:Object(a.jsxs)(A.a,{className:t.toolbar,children:[Object(a.jsx)(h.a,{variant:"h5",className:t.title,children:e.selectedWord.word}),Object(a.jsx)(D.a,{style:{marginLeft:"auto"},edge:"end",color:"inherit",onClick:e.handleClose,"aria-label":"close",children:Object(a.jsx)(E.a,{})})]})}),e.selectedWord.information.map((function(e,n){return Object(a.jsxs)("div",{className:t.infoContainer,children:[Object(a.jsx)(h.a,{className:t.pos,color:"textSecondary",children:e.lexicalCategory.id}),e.entries[0].etymologies&&Object(a.jsxs)(h.a,{className:t.pos,color:"textSecondary",children:["Origin: ",e.entries[0].etymologies[0]]}),e.entries[0].senses.map((function(e,t){return Object(a.jsxs)(h.a,{style:{marginTop:15},children:[e.definitions[0],e.examples&&Object(a.jsx)("ul",{style:{marginTop:0,paddingTop:0},children:e.examples.map((function(e,t){return Object(a.jsx)("li",{children:e.text},t.toString())}))}),e.subsenses&&e.subsenses.map((function(e,t){return Object(a.jsxs)(h.a,{children:[e.definitions[0],e.examples&&Object(a.jsx)("ul",{style:{marginTop:0,paddingTop:0},children:e.examples.map((function(e,t){return Object(a.jsx)("li",{children:e.text},t.toString())}))})]},t.toString())}))]},t.toString())}))]},n.toString())}))]})})},W=n(163),_=n(164),P=Object(j.a)({mainContainer:{position:"relative",backgroundColor:"#fff",borderTopRightRadius:8,borderTopLeftRadius:8,padding:20,marginTop:-5,zIndex:20},addButton:{position:"fixed",bottom:15,right:15,zIndex:30},title:{textTransform:"capitalize"},card:{cursor:"pointer",marginTop:20},information:{marginTop:8}}),G=function(e){var t=P(),n=e.data;return Object(a.jsx)(W.a,{className:t.card,variant:"outlined",onClick:e.onClick,children:Object(a.jsxs)(_.a,{children:[Object(a.jsx)(h.a,{variant:"h5",className:t.title,component:"h2",children:n.word}),n.information.map((function(e){return Object(a.jsxs)(h.a,{variant:"body2",component:"p",className:t.information,children:["[",e.lexicalCategory.id,"] ",e.entries[0].senses[0].definitions[0]]},e.lexicalCategory.id)}))]})})},J=n(46),F=n(32),U=n.n(F),H=n(57),K="https://vocabbackend.herokuapp.com/api/v1/",V=n(172),q=n(170),M=function(e){return Object(a.jsx)(q.a,Object(S.a)({elevation:6,variant:"filled"},e))},Q=function(e){return Object(a.jsx)(V.a,{open:e.open,autoHideDuration:6e3,onClose:e.onClose,children:Object(a.jsx)(M,{onClose:e.onClose,severity:e.severity,children:e.message})})},X=n(38),Y=n(173),Z=n(13),$=n(79),ee=n.n($),te=Object(j.a)((function(e){return{root:{flexGrow:1},appBar:{paddingTop:10,paddingBottom:10,zIndex:10},title:Object(X.a)({flexGrow:1,display:"block"},e.breakpoints.up("sm"),{display:"block"}),search:Object(X.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Z.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Z.c)(e.palette.common.white,.25)},marginLeft:0,width:"50%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(X.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),ne=function(e){var t=te();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(N.a,{position:"static",className:t.appBar,children:Object(a.jsxs)(A.a,{children:[Object(a.jsx)(h.a,{className:t.title,variant:"h5",noWrap:!0,children:"Vocab"}),Object(a.jsxs)("div",{className:t.search,children:[Object(a.jsx)("div",{className:t.searchIcon,children:Object(a.jsx)(ee.a,{})}),Object(a.jsx)(Y.a,{placeholder:"Search word",classes:{root:t.inputRoot,input:t.inputInput},value:e.value,inputProps:{"aria-label":"search"},onChange:e.onChange})]})]})})})},ae=Object(j.a)({mainContainer:{position:"relative",backgroundColor:"#fff",borderTopRightRadius:8,borderTopLeftRadius:8,padding:20,marginTop:-5,zIndex:20},addButton:{position:"fixed",bottom:15,right:15,zIndex:30},card:{cursor:"pointer",marginTop:20}}),re=function(e){var t=ae(),n=Object(J.c)((function(e){return e.dictionary})),c=Object(J.b)(),o=Object(r.useState)(""),i=Object(u.a)(o,2),s=i[0],l=i[1],d=Object(r.useState)(!1),j=Object(u.a)(d,2),f=j[0],x=j[1],g=Object(r.useState)(!1),v=Object(u.a)(g,2),y=v[0],w=v[1],C=Object(r.useState)({}),k=Object(u.a)(C,2),S=k[0],N=k[1],A=Object(r.useState)(!0),D=Object(u.a)(A,2),I=D[0],E=D[1],B=Object(r.useState)(!1),R=Object(u.a)(B,2),L=R[0],W=R[1],_=Object(r.useState)(!1),P=Object(u.a)(_,2),F=P[0],V=P[1],q=Object(r.useState)(""),M=Object(u.a)(q,2),X=M[0],Y=M[1],Z=Object(r.useState)(""),$=Object(u.a)(Z,2),ee=$[0],te=$[1];return Object(r.useEffect)((function(){E(!0),c(function(){var e=Object(H.a)(U.a.mark((function e(t){var n,a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(K),{method:"GET"});case 3:if(!(n=e.sent).ok){e.next=15;break}return e.next=7,n.json();case 7:if(!(a=e.sent).error){e.next=12;break}throw new Error(a.message);case 12:return e.abrupt("return",t({type:"ADD_DATA",result:a.result}));case 13:e.next=19;break;case 15:return e.next=17,n.text();case 17:throw r=e.sent,new Error(r);case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(0),new Error(e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}()).then((function(e){E(!1)})).catch((function(e){E(!1),V(!0),Y(e.message),te("error")}))}),[c]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ne,{onChange:function(e){var t=e.target.value;l(t),E(!0),c(function(e){return function(){var t=Object(H.a)(U.a.mark((function t(n){var a,r,c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(K,"search?word=").concat(e));case 3:if(!(a=t.sent).ok){t.next=15;break}return t.next=7,a.json();case 7:if(!(r=t.sent).error){t.next=12;break}throw new Error(r.message);case 12:return t.abrupt("return",n({type:"ADD_DATA",result:r.result}));case 13:t.next=19;break;case 15:return t.next=17,a.text();case 17:throw c=t.sent,new Error(c);case 19:t.next=24;break;case 21:throw t.prev=21,t.t0=t.catch(0),new Error(t.t0.message);case 24:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(){E(!1)})).catch((function(e){E(!1),V(!0),Y(e.message),te("error")}))},value:s}),Object(a.jsxs)("div",{className:t.mainContainer,children:[I&&Object(a.jsx)(b.a,{style:{marginLeft:"47%"}}),Object(a.jsx)(p.a,{container:!0,justify:"center",children:Object(a.jsxs)(p.a,{item:!0,md:6,sm:12,xs:12,children:[!I&&0===n.dictionary.length&&Object(a.jsx)(h.a,{varient:"body",component:"p",color:"secondary",align:"center",children:"No word found in dictionary !"}),!I&&n.dictionary.length>0&&n.dictionary.map((function(e){return Object(a.jsx)(G,{data:e,onClick:function(){N(e),w(!0)}},e._id)}))]})})]}),Object(a.jsx)(m.a,{className:t.addButton,color:"primary","aria-label":"add",onClick:function(){return x(!0)},children:Object(a.jsx)(O.a,{})}),f&&Object(a.jsx)(T,{isOpen:f,isSubmiting:L,handleClose:function(){x(!1)},handleSubmit:function(e){var t;W(!0),c((t=e,function(){var e=Object(H.a)(U.a.mark((function e(n){var a,r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(K),{method:"POST",body:JSON.stringify({word:t}),headers:{"Content-Type":"application/json"}});case 3:if(!(a=e.sent).ok){e.next=15;break}return e.next=7,a.json();case 7:if(!(r=e.sent).error){e.next=12;break}throw new Error(r.message);case 12:return e.abrupt("return",n({type:"UPDATE_DATA",result:r.dict}));case 13:e.next=19;break;case 15:return e.next=17,a.text();case 17:throw c=e.sent,new Error(c);case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(0),new Error(e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}())).then((function(e){W(!1),x(!1),V(!0),Y("Word added successfully !"),te("success")})).catch((function(e){W(!1),V(!0),Y(e.message),te("error")}))}}),y&&Object(a.jsx)(z,{open:y,handleClose:function(){N(""),w(!1)},selectedWord:S}),F&&Object(a.jsx)(Q,{message:X,onClose:function(){V(!1)},open:F,severity:ee})]})},ce=n(39),oe=n(83),ie={totalItems:0,dictionary:[]},se=n(81),le=(n(112),Object(ce.c)({dictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DATA":return Object(S.a)(Object(S.a)({},e),{},{totalItems:t.totalItems,dictionary:t.result});case"UPDATE_DATA":var n=e.totalItems+t.totalItems,a=[].concat(Object(oe.a)(e.dictionary),[t.result]);return Object(S.a)(Object(S.a)({},e),{},{totalItems:n,dictionary:a});default:return Object(S.a)({},e)}}})),de=Object(ce.d)(le,Object(ce.a)(se.a));i.a.render(Object(a.jsx)(J.a,{store:de,children:Object(a.jsx)(s.a,{theme:d,children:Object(a.jsx)(re,{})})}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.91563e1a.chunk.js.map