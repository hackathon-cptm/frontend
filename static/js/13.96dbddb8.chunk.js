(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(79),c=n(0),i=n(110),r=n.n(i).a.create({baseURL:"https://evento-bondecptm.herokuapp.com/"}),s=function(){var e=Object(c.useCallback)((function(e){return r.post("/event",Object(a.a)({},e))}),[]),t=Object(c.useCallback)((function(e){return r.patch("/event",Object(a.a)({},e))}),[]);return{newEvent:e,getEventById:Object(c.useCallback)((function(e){return console.log(e),r.get("/event/"+e)}),[]),editEvent:t,getEventAll:Object(c.useCallback)((function(){return r.get("/event/")}),[])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(588),c=n(591),i=n(2),r=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(a.a,{container:!0,justifyContent:"center",children:Object(i.jsx)(a.a,{item:!0,children:Object(i.jsx)(c.a,{color:"error",children:e.message})})})})}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(79),c=n(579),i=n(2),r=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a,Object(a.a)({},e))})}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(85),c=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(a.a)(this,e),this.idEvent=t,this.nome=n,this.descricao=c,this.local=i,this.data=r,this.foto=s}},438:function(e,t,n){},582:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return $}));var a=n(79),c=n(26),i=n(593),r=n(588),s=n(591),o=n(594),d=n(595),j=n(596),l=n(597),b=n(598),x=n(599),h=n(581),u=n(600),O=n(523),p=n.n(O),g=n(524),m=n.n(g),f=n(525),v=n.n(f),y=n(0),k=n(422),w=n.n(k),C=(n(438),n(121)),R=n(115),S=n(521),E=n.n(S),I=n(578),L=n(579),B=n(116),T=n(117),F=n(143),P=n(2),M=function(e){var t=Object(F.a)({initialValues:{idFeedback:"",categoria:"",conteudo:""},onSubmit:function(t){console.log(t),e.onSubmit(t)}});return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("form",{onSubmit:t.handleSubmit,children:Object(P.jsxs)(r.a,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsx)(T.a,Object(a.a)({fullWidth:!0,type:"",label:"Mensagem",placeholder:"Digite sua mensagem",error:t.touched.conteudo&&Boolean(t.errors.conteudo),helperText:t.touched.conteudo&&t.errors.conteudo},t.getFieldProps("conteudo")))}),Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsx)(I.a,{disablePortal:!0,id:"combo-box-demo",options:["Elogio","Ocorrencia","Reclamacao","Sugestao","Outros"],value:t.values.categoria,onChange:function(e,n){t.setFieldValue("categoria",n)},renderInput:function(e){return Object(P.jsx)(L.a,Object(a.a)(Object(a.a)({},e),{},{fullWidth:!0,label:"Tipo"}))}})}),Object(P.jsx)(r.a,{item:!0,xs:12,children:e.errorMessage?Object(P.jsx)(B.a,{message:e.errorMessage}):null}),Object(P.jsx)(r.a,{item:!0,children:Object(P.jsx)(i.a,{type:"submit",variant:"contained",color:"primary",children:"Enviar"})})]})})})},A=n(110),U=n.n(A),W=U.a.create({baseURL:"https://feedback-bondecptm.herokuapp.com/"}),J=n(3),V=n(522),D=n.n(V),H=n(439),z=n.n(H),G=n.p+"static/media/logo.c0649b1f.png",q=n(526),K=n.n(q),N=n(34),Q=n(23),X=U.a.create({baseURL:"https://ponto-bondecptm.herokuapp.com/"}),Y=n(32),Z={dots:!1,infinite:!1,slidesToShow:1,arrows:!1,swipe:!1,autoPlay:!1,accessibility:!1,speed:100},$=function(){var e=Object(Y.a)(),t=(Object(J.f)(),Object(y.useRef)()),n=Object(y.useState)(!1),O=Object(c.a)(n,2),g=O[0],f=O[1],k=Object(y.useState)(!1),S=Object(c.a)(k,2),I=S[0],L=S[1],B=function(){var e=Object(N.a)().getItem;return{getPoints:Object(y.useCallback)((function(){var t=e(Q.a.idCliente);return X.get("/point/"+t)}),[]),postPoints:Object(y.useCallback)((function(){var t=e(Q.a.idCliente);return X.post("/point/",{pontos:"8",idLogin:t})}),[])}}(),T=B.getPoints,F=B.postPoints,A=Object(y.useState)("0"),U=Object(c.a)(A,2),V=U[0],H=U[1];Object(y.useEffect)((function(){T().then((function(e){H(e.data.content.pontos)}))}),[]);var q=Object(y.useState)(0),$=Object(c.a)(q,2),_=$[0],ee=$[1],te=Object(R.a)(),ne=te.getEventAll,ae=te.getEventById,ce={sendFeedback:Object(y.useCallback)((function(e){return W.post("/feedback",Object(a.a)({},e))}),[]),getCategorias:Object(y.useCallback)((function(e){return W.get("/feedback/categoria")}),[])}.sendFeedback,ie=Object(y.useState)(new C.a),re=Object(c.a)(ie,2),se=re[0],oe=re[1],de=function(e){ae(e).then((function(e){200!==e.status&&204!==e.status||(oe(e.data.content),ee(4))}))};Object(y.useEffect)((function(){t.current&&t.current.slickGoTo(_)}),[_]),Object(y.useEffect)((function(){ne().then((function(e){console.log(e),e.data&&e.data.content&&(pe(e.data.content),e.data.content.length>3?xe(e.data.content.slice(0,3)):xe(e.data.content))}))}),[ne]);var je=Object(y.useState)(new Array),le=Object(c.a)(je,2),be=le[0],xe=le[1],he=Object(y.useState)(new Array),ue=Object(c.a)(he,2),Oe=ue[0],pe=ue[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{style:{width:"100vw",background:"#fff",position:"fixed",top:0,zIndex:10,display:"flex",justifyContent:"flex-end"},children:Object(P.jsx)("div",{style:{marginTop:"5px",marginRight:"15px"},children:Object(P.jsx)(i.a,{variant:"contained",onClick:function(){f(!0)},children:Object(P.jsx)(E.a,{})})})}),Object(P.jsx)("div",{style:{marginTop:"45px"},children:Object(P.jsxs)(w.a,Object(a.a)(Object(a.a)({},Z),{},{ref:t,children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(r.a,{item:!0,children:Object(P.jsx)("img",{src:G,alt:"Logo Bonde CPTM"})})}),Object(P.jsxs)(r.a,{container:!0,alignItems:"center",direction:"column",spacing:2,style:{marginTop:"30px"},children:[Object(P.jsx)(r.a,{item:!0,children:Object(P.jsx)(s.a,{variant:"h5",children:"Eventos"})}),Object(P.jsx)(r.a,{item:!0,children:Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:be.map((function(e,t){return Object(P.jsx)(r.a,{item:!0,md:6,xs:12,children:Object(P.jsx)("div",{onClick:function(){de(e.idEvent)},children:Object(P.jsx)(o.a,{children:Object(P.jsxs)(d.a,{children:[Object(P.jsx)(j.a,{component:"img",height:"140",image:e.foto,alt:"green iguana"}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.nome}),Object(P.jsx)(s.a,{variant:"body2",color:"text.secondary",children:e.descricao})]})]})})})},t)}))})})]})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)(s.a,{variant:"h4",align:"center",style:{marginBottom:"20px"},children:"Eventos"}),Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:Oe.map((function(e,t){return Object(P.jsx)(r.a,{item:!0,md:6,xs:12,children:Object(P.jsx)("div",{onClick:function(){de(e.idEvent)},children:Object(P.jsx)(o.a,{children:Object(P.jsxs)(d.a,{children:[Object(P.jsx)(j.a,{component:"img",height:"140",image:e.foto,alt:"green iguana"}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.nome}),Object(P.jsx)(s.a,{variant:"body2",color:"text.secondary",children:e.descricao})]})]})})})},t)}))})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)(s.a,{variant:"h5",align:"center",style:{marginBottom:"10px"},children:"Status das linhas"}),Object(P.jsxs)(r.a,{container:!0,spacing:2,style:{marginBottom:"100px"},children:[Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{style:{borderRadius:"10px",padding:"20px",display:"flex",alignItems:"center",boxShadow:"5px 5px 6px 0px rgba(134,134,134,0.5)",background:"#da0467",color:"white"},children:[Object(P.jsx)(s.a,{variant:"h6",children:"Linha 7 - Rubi"}),Object(P.jsx)("div",{style:{margin:"10px",width:"10px",background:"green",height:"10px",borderRadius:"100%"}}),Object(P.jsx)(s.a,{variant:"subtitle2",children:"Opera\xe7\xe3o normal"})]})}),Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{style:{borderRadius:"10px",padding:"20px",display:"flex",alignItems:"center",boxShadow:"5px 5px 6px 0px rgba(134,134,134,0.5)",background:"#bab6a8",color:"white"},children:[Object(P.jsx)(s.a,{variant:"h6",children:"Linha 8 - Diamante"}),Object(P.jsx)("div",{style:{margin:"10px",width:"10px",background:"green",height:"10px",borderRadius:"100%"}}),Object(P.jsx)(s.a,{variant:"subtitle2",children:"Opera\xe7\xe3o normal"})]})}),Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{style:{borderRadius:"10px",padding:"20px",display:"flex",alignItems:"center",boxShadow:"5px 5px 6px 0px rgba(134,134,134,0.5)",background:"#00ddcd",color:"white"},children:[Object(P.jsx)(s.a,{variant:"h6",children:"Linha 9 - Esmeralda"}),Object(P.jsx)("div",{style:{margin:"10px",width:"10px",background:"yellow",height:"10px",borderRadius:"100%"}}),Object(P.jsx)(s.a,{variant:"subtitle2",children:"Opera\xe7\xe3o moderada"})]})}),Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{style:{borderRadius:"10px",padding:"20px",display:"flex",alignItems:"center",boxShadow:"5px 5px 6px 0px rgba(134,134,134,0.5)",background:"#00adce",color:"white"},children:[Object(P.jsx)(s.a,{variant:"h6",children:"Linha 10 - Esmeralda"}),Object(P.jsx)("div",{style:{margin:"10px",width:"10px",background:"green",height:"10px",borderRadius:"100%"}}),Object(P.jsx)(s.a,{variant:"subtitle2",children:"Opera\xe7\xe3o normal"})]})}),Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{style:{borderRadius:"10px",padding:"20px",display:"flex",alignItems:"center",boxShadow:"5px 5px 6px 0px rgba(134,134,134,0.5)",background:"#f7814b",color:"white"},children:[Object(P.jsx)(s.a,{variant:"h6",children:"Linha 11 - Coral"}),Object(P.jsx)("div",{style:{margin:"10px",width:"10px",background:"green",height:"10px",borderRadius:"100%"}}),Object(P.jsx)(s.a,{variant:"subtitle2",children:"Opera\xe7\xe3o normal"})]})}),Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{style:{borderRadius:"10px",padding:"20px",display:"flex",alignItems:"center",boxShadow:"5px 5px 6px 0px rgba(134,134,134,0.5)",background:"#271c96",color:"white"},children:[Object(P.jsx)(s.a,{variant:"h6",children:"Linha 12 - Safira"}),Object(P.jsx)("div",{style:{margin:"10px",width:"10px",background:"green",height:"10px",borderRadius:"100%"}}),Object(P.jsx)(s.a,{variant:"subtitle2",children:"Opera\xe7\xe3o sobrecarregada"})]})}),Object(P.jsx)(r.a,{item:!0,xs:12,children:Object(P.jsxs)("div",{style:{borderRadius:"10px",padding:"20px",display:"flex",alignItems:"center",boxShadow:"5px 5px 6px 0px rgba(134,134,134,0.5)",background:"#00d664",color:"white"},children:[Object(P.jsx)(s.a,{variant:"h6",children:"Linha 13 - Jade"}),Object(P.jsx)("div",{style:{margin:"10px",width:"10px",background:"green",height:"10px",borderRadius:"100%"}}),Object(P.jsx)(s.a,{variant:"subtitle2",children:"Opera\xe7\xe3o normal"})]})})]})]}),Object(P.jsx)("div",{children:Object(P.jsx)("div",{children:Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(r.a,{item:!0,md:6,xs:10,children:Object(P.jsx)("div",{style:{display:"flex",background:e.palette.primary.main,color:"white",justifyContent:"center",padding:"20px",marginTop:"30px",borderRadius:"20px"},children:Object(P.jsxs)(s.a,{children:["Voc\xea possui ",Object(P.jsx)("br",{}),Object(P.jsxs)("span",{style:{fontWeight:"bold"},children:[V," pontos"]})]})})})})})}),Object(P.jsx)("div",{children:Object(P.jsxs)(r.a,{container:!0,justifyContent:"center",direction:"column",spacing:2,children:[Object(P.jsx)(r.a,{item:!0,xs:10,children:Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(r.a,{item:!0,children:Object(P.jsx)("img",{style:{maxWidth:"100%",maxHeight:"200px"},src:se.foto})})})}),Object(P.jsx)(r.a,{item:!0,xs:10,children:Object(P.jsx)(s.a,{variant:"h5",align:"center",children:se.nome})}),Object(P.jsx)(r.a,{item:!0,xs:10,children:Object(P.jsx)(s.a,{variant:"h5",align:"center",children:se.local})}),Object(P.jsx)(r.a,{item:!0,xs:10,children:Object(P.jsx)(s.a,{variant:"h5",align:"center",children:se.data})}),Object(P.jsx)(r.a,{item:!0,xs:10,children:Object(P.jsx)(s.a,{variant:"h5",align:"center",children:se.descricao})}),Object(P.jsx)(r.a,{item:!0,xs:10,children:Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(r.a,{item:!0,children:Object(P.jsxs)(i.a,{onClick:function(){L(!0)},variant:"contained",color:"primary",children:[Object(P.jsx)(D.a,{style:{marginRight:"10px"}}),"Marcar presen\xe7a"]})})})}),Object(P.jsx)(r.a,{item:!0,xs:10})]})})]}))}),Object(P.jsx)("div",{style:{position:"fixed",bottom:0,width:"100vw"},children:Object(P.jsxs)(b.a,{showLabels:!0,value:_,onChange:function(e,t){ee(t)},children:[Object(P.jsx)(x.a,{onClick:function(){ee(0)},label:"Home",icon:Object(P.jsx)(p.a,{})}),Object(P.jsx)(x.a,{onClick:function(){ee(1)},label:"Eventos",icon:Object(P.jsx)(m.a,{})}),Object(P.jsx)(x.a,{onClick:function(){ee(2)},label:"Trens",icon:Object(P.jsx)(v.a,{})}),Object(P.jsx)(x.a,{onClick:function(){ee(3)},label:"Perfil",icon:Object(P.jsx)(K.a,{})})]})}),I?Object(P.jsx)(h.a,{open:I,onClose:function(){L(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(P.jsx)(u.a,{mt:5,children:Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:Object(P.jsx)(r.a,{item:!0,md:6,xs:10,style:{background:"#fff",padding:"30px",borderRadius:"20px"},children:Object(P.jsx)(z.a,{width:"100%",onUpdate:function(e,t){t&&F().then((function(e){200!==e.status&&204!==e.status||(H(e.data.content.pontos),L(!1),alert("Sucesso ao verificar o c\xf3digo"))}))}})})})})}):null,Object(P.jsx)(h.a,{open:g,onClose:function(){f(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(P.jsx)(u.a,{mt:5,children:Object(P.jsx)(r.a,{container:!0,justifyContent:"center",children:Object(P.jsxs)(r.a,{md:6,xs:10,style:{background:"#fff",padding:"30px",borderRadius:"20px"},children:[Object(P.jsx)(s.a,{variant:"h5",align:"center",style:{marginBottom:"20px"},children:"Enviar feedback"}),Object(P.jsx)(M,{onSubmit:function(e){ce(e).then((function(e){201!==e.status&&200!==e.status||f(!1)}))}})]})})})})]})}}}]);
//# sourceMappingURL=13.96dbddb8.chunk.js.map