(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{228:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(84),i=t.n(n),c=t(9),s=t(10),o=t(2),m=t(45),u=t.n(m),p=t(85),d=Object(l.createContext)(null),g=t(36),E=t(46),h=(t(97),function(e){var a=e.history,t=Object(l.useContext)(d).setUser,n=Object(l.useState)(!1),i=Object(c.a)(n,2),o=i[0],m=i[1],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(l.useState)(e),t=Object(c.a)(a,2),r=t[0],n=t[1],i=function(){n(e)},s=function(e){var a=e.target,t=a.name,l=a.value;n(Object(E.a)(Object(E.a)({},r),{},Object(g.a)({},t,l)))};return[r,s,i]}({cedula:"",password:""}),v=Object(c.a)(h,2),f=v[0],b=v[1],N=f.cedula,k=f.password,y=function(){var e=Object(p.a)(u.a.mark((function e(l){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.preventDefault(),!N||!k){e.next=7;break}return e.next=4,t({cedula:N,password:k,speak:o});case 4:a.replace("/"),e.next=8;break;case 7:alert("error en campos");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"LOGIN"),r.a.createElement("form",{onSubmit:y},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Your Cedula *",name:"cedula",value:N,onChange:b})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Your Password *",name:"password",value:k,onChange:b})),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",value:o,onChange:function(e){var a=e.target.checked;return m(a)}}),r.a.createElement("label",{className:"form-check-label"},"Desea que el ChatBot hable?")),r.a.createElement("div",{className:"form-group mt-4"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})),r.a.createElement("div",{className:"form-group"},r.a.createElement(s.b,{to:"#",className:"ForgetPwd"},"Forget Password?")))),r.a.createElement("div",{className:"col-md-6 login-form-2 container"},r.a.createElement("h3",null,"BIENVENIDO!!"))))}),v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},"ChatBot"),r.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login"},"Logout"))))},f=t(86),b=t.n(f),N=t(43),k=t(90),y=t.n(k),j=t(44),O=t.n(j),D=function(e){var a=function(){var e=new y.a.LogisticRegressionClassifier(O.a);return e.addDocument("servicios","servicio"),e.addDocument("servicios individuales o independiente","independiente"),e.addDocument("precio de cada servicio","precio-servicios"),e.addDocument("planes","plan"),e.addDocument("servicios  plan premium","premium"),e.addDocument("servicios  plan basico","basico"),e.addDocument("precio plan premium","precio/premium"),e.addDocument("precio plan basico","precio/basico"),e.addDocument("plan familiar o planes familiares","planes-familiares"),e.addDocument("servicios plan familiar","planes-familiares-servicios"),e.addDocument("movimientos o pagos realizados","movimientos"),e.addDocument("primer pago","primer-pago"),e.addDocument("\xfaltimo pago","ultimo-pago"),e.addDocument("meses debo o tengo pendiente","meses-pago"),e.addDocument("precio de los arreglos florales","arreglos florales"),e.addDocument("precio de un ataud","ataud"),e.addDocument("precio de los recordatorios","recordatorios"),e.addDocument("precio de los servicios religiosos","religiosos"),e.addDocument("precio de una lapida","lapida"),e.addDocument("precio de un servicio de m\xfasica","musica"),e.addDocument("Salir o terminar conversacion","end"),e.train(),e}();return.5===a.getClassifications(e)[0].value?"no-existe":a.classify(e)},F=function(e){var a=Object(l.useRef)(!0),t=Object(l.useState)({data:null,loading:!0,error:null}),r=Object(c.a)(t,2),n=r[0],i=r[1];return Object(l.useEffect)((function(){return function(){a.current=!1}}),[]),Object(l.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){a&&i({loading:!1,error:null,data:e})}))}),[]),n},C=Object(l.memo)((function(){var e=Object(l.useContext)(d).user,a="https://pruebachatbots.herokuapp.com/api/mensualidad/".concat(e.cedula),t=F(a),n=t.loading,i=t.data;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("h3",null,"Loading..."):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"Deudas",className:"list-group-item"},r.a.createElement("h3",null,"Pendientes")),r.a.createElement("li",{key:"MesesPendiente",className:"list-group-item"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},"Cantidad de meses pendientes: ",i.mesesPendiente)))))})),P={year:"numeric",month:"2-digit",day:"2-digit"},x=Object(l.memo)((function(e){var a=e.nombre,t=e.apellido,l=e.total,n=e.fecha;return n=new Date(n).toLocaleDateString("es-Es",P),r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},"Cliente: ",a," ",t),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-header"},"Total: ",l),r.a.createElement("h6",{className:"card-header"},"Fecha: ",n)))})),L=function(){var e=Object(l.useContext)(d).user,a="https://pruebachatbots.herokuapp.com/api/mensualidad/primer/".concat(e.cedula),t=F(a),n=t.loading,i=t.data;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("h3",null,"Loading..."):i.data?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"FirstMes",className:"list-group-item"},r.a.createElement("h3",null,"Primer mes Pagado")),function(){var e=i.data,a=e.id,t=e.total,l=e.fecha,n=e.usuario,c=n.nombre,s=n.apellido;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(x,{total:t,fecha:l,nombre:c,apellido:s}))}()):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay pagos disponibles"))))},w=function(){var e=Object(l.useContext)(d).user,a="https://pruebachatbots.herokuapp.com/api/mensualidad/ultimo/".concat(e.cedula),t=F(a),n=t.loading,i=t.data;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("h3",null,"Loading..."):i.data?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"LastMes",className:"list-group-item"},r.a.createElement("h3",null,"Ultimo mes Pagado")),function(){var e=i.data,a=e.id,t=e.total,l=e.fecha,n=e.usuario,c=n.nombre,s=n.apellido;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(x,{total:t,fecha:l,nombre:c,apellido:s}))}()):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay pagos disponibles"))))},S=function(e){e.steps.usuario.value;var a=Object(l.useContext)(d).user,t="https://pruebachatbots.herokuapp.com/api/mensualidad/".concat(a.cedula),n=F(t),i=n.loading,c=n.data;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("h3",null,"Loading..."):c.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"Mensualidad",className:"list-group-item"},r.a.createElement("h3",null,"Mensualidad")),c.data.map((function(e){var a=e.id,t=e.total,l=e.fecha,n=e.usuario,i=n.nombre,c=n.apellido;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(x,{total:t,fecha:l,nombre:i,apellido:c}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay pagos disponibles"))))},_=Object(l.memo)((function(e){var a=e.title,t=e.precio;return r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},a),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-header"},"Precio: ",t)))})),B=function(){var e=F("https://pruebachatbots.herokuapp.com/api/plan"),a=e.loading,t=e.data;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h3",null,"Loading..."):t.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"Planes",className:"list-group-item"},r.a.createElement("h3",null,"Planes")),t.data.map((function(e){var a=e.id,t=e.descripcion,l=e.precio;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(_,{title:t,precio:l}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay planes disponibles"))))},q=function(){var e=F("https://pruebachatbots.herokuapp.com/api/plan/familiar"),a=e.loading,t=e.data;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h3",null,"Loading..."):t.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"Planes",className:"list-group-item"},r.a.createElement("h3",null,"Planes Familiares")),t.data.map((function(e){var a=e.id,t=e.descripcion,l=e.precio;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(_,{title:t,precio:l}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay planes familiares disponibles"))))},A=function(e){var a=e.steps.usuario.value,t=D(a),l="https://pruebachatbots.herokuapp.com/api/plan/".concat(t);console.log(l);var n=F(l),i=n.loading,c=n.data;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("h3",null,"Loading..."):c.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"Plan",className:"list-group-item"},r.a.createElement("h3",null,"Precio del plan ".concat(c.data[0].descripcion))),r.a.createElement("li",{key:c.data.id,className:"list-group-item"},r.a.createElement(_,{title:c.data[0].descripcion,precio:c.data[0].precio}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay planes disponibles"))))},I=Object(l.memo)((function(e){var a=e.title,t=e.img,l=e.precio;return r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},a),r.a.createElement("h6",{className:"card-header"},"Precio: ",l),r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:t,className:"card-img",alt:a})))})),z=function(){var e=F("https://pruebachatbots.herokuapp.com/api/precio"),a=e.loading,t=e.data;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h3",null,"Loading..."):t.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"Precio por servicio")),t.data.map((function(e){var a=e.id,t=e.precio,l=e.servicio,n=l.descripcion,i=l.img;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(I,{title:n,img:i,precio:t}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay servicios disponibles"))))},M=function(e){var a=e.steps.usuario.value,t=D(a),l="https://pruebachatbots.herokuapp.com/api/precio/".concat(t),n=F(l),i=n.loading,c=n.data;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("h3",null,"Loading..."):c.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"Servicio: ",c.data[0].descripcion)),c.data.map((function(e){var a=e.id,t=e.descripcion,l=e.img;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(I,{title:t,img:l,precio:e.precio_vs_servicios[0].precio}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"Este servicio no es un servicio que se vende individual"))))},T=Object(l.memo)((function(e){var a=e.title,t=e.img;return r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},a),r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:t,className:"card-img",alt:a})))})),U=function(){var e=F("https://pruebachatbots.herokuapp.com/api/servicio"),a=e.loading,t=e.data;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h3",null,"Loading..."):t.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"Servicios")),t.data[0].tipo_vs_servicios.map((function(e){var a=e.servicio,t=a.id,l=a.descripcion,n=a.img;return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(T,{title:l,img:n}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay servicios disponibles"))))},R=function(e){var a=e.steps.usuario.value,t=D(a),l="https://pruebachatbots.herokuapp.com/api/plan/".concat(t),n=F(l),i=n.loading,c=n.data;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("h3",null,"Loading..."):c.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h5",null," Plan ".concat(t,": RD$ ").concat(c.data[0].precio))," ",r.a.createElement("h6",null,"Servicios ofrecidos: ")),c.data[0].plan_servicios.map((function(e){var a=e.id,t=e.servicio,l=t.descripcion,n=t.img;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(T,{title:l,img:n}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay planes disponibles"))))},G=Object(l.memo)((function(e){var a=e.title;return r.a.createElement("div",{className:"card"},r.a.createElement("h6",{className:"card-header"},a))})),J=function(){var e=F("https://pruebachatbots.herokuapp.com/api/plan/servicio/familiar"),a=e.loading,t=e.data;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("h3",null,"Loading..."):t.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"Planes Familiares")),t.data.map((function(e){return r.a.createElement("div",{key:e.id,className:"card mb-3"},r.a.createElement("h4",{className:"card-header"},e.descripcion),e.plan_servicios.map((function(e){var a=e.id,t=e.servicio.descripcion;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(G,{title:t}))})))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"No hay planes familiares disponibles"))))},Y=function(e){var a=e.steps.usuario.value,t=D(a),l="https://pruebachatbots.herokuapp.com/api/servicio/".concat(t),n=F(l),i=n.loading,c=n.data;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("h3",null,"Loading..."):c.data.length?r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"Servicios ".concat(t))),c.data[0].tipo_vs_servicios.map((function(e){var a=e.id,t=e.servicio,l=t.descripcion,n=t.img;return r.a.createElement("li",{key:a,className:"list-group-item"},r.a.createElement(T,{title:l,img:n}))}))):r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{key:"servicios",className:"list-group-item"},r.a.createElement("h3",null,"Este no es un tipo de servicio disponible"))))},H={background:"#F5F6F2",fontFamily:"Segoe UI",headerBgColor:"#06A7E8",headerFontColor:"#fff",headerFontSize:"20px",botBubbleColor:"#D8DADA",botFontColor:"#000",userBubbleColor:"#06A7E8",userFontColor:"#fff"},V=function(){var e=Object(l.useContext)(d).user,a=e.cedula,t=e.speak,n="https://pruebachatbots.herokuapp.com/api/usuario/".concat(a),i=F(n),c=i.loading,s=i.data;return r.a.createElement(N.ThemeProvider,{theme:H},c?r.a.createElement("h1",null,"Loading"):navigator.onLine?r.a.createElement(b.a,{headerTitle:"Asistente de ventas",placeholder:"Escriba su mensaje",botAvatar:"https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png",userAvatar:"https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",speechSynthesis:{enable:{speak:t},lang:"es"},recognitionEnable:!0,floating:!0,recognitionLang:"es",steps:[{id:"1",message:"Hola! ".concat(s.data.nombre," ").concat(s.data.apellido,", \xbfEn qu\xe9 te puedo ayudar?"),trigger:"usuario"},{id:"usuario",user:!0,trigger:function(e){var a=e.value;e.steps;return D(a)}},{id:"servicio",component:r.a.createElement(U,null),trigger:"sugerencia2"},{id:"independiente",component:r.a.createElement(Y,null),trigger:"sugerencia2"},{id:"plan",component:r.a.createElement(B,null),trigger:"sugerencia2"},{id:"premium",component:r.a.createElement(R,null),trigger:"sugerencia2"},{id:"basico",component:r.a.createElement(R,null),trigger:"sugerencia2"},{id:"precio/premium",component:r.a.createElement(A,null),trigger:"sugerencia2"},{id:"precio/basico",component:r.a.createElement(A,null),trigger:"sugerencia2"},{id:"planes-familiares",component:r.a.createElement(q,null),trigger:"sugerencia2"},{id:"planes-familiares-servicios",component:r.a.createElement(J,null),trigger:"sugerencia2"},{id:"precio-servicios",component:r.a.createElement(z,null),trigger:"sugerencia2"},{id:"movimientos",component:r.a.createElement(S,null),trigger:"sugerencia2"},{id:"primer-pago",component:r.a.createElement(L,null),trigger:"sugerencia2"},{id:"ultimo-pago",component:r.a.createElement(w,null),trigger:"sugerencia2"},{id:"meses-pago",component:r.a.createElement(C,null),trigger:"sugerencia2"},{id:"ataud",component:r.a.createElement(M,null),trigger:"sugerencia2"},{id:"flores",component:r.a.createElement(M,null),trigger:"sugerencia2"},{id:"musica",component:r.a.createElement(M,null),trigger:"sugerencia2"},{id:"no-existe",message:"La pregunta realizada no puede ser contestada por este ChatBot, favor llamar 809-612-3445 para mas detalles",trigger:"consultar"},{id:"consultar",message:"Estas son algunas sugerencias de lo que le puedo contestar",trigger:"sugerencias"},{id:"sugerencias",options:[{value:1,label:"Servicio",trigger:"servicio"},{value:2,label:"Planes",trigger:"plan"},{value:3,label:"Precio de los servicios",trigger:"precio-servicios"},{value:4,label:"Planes familiares",trigger:"planes-familiares"},{value:5,label:"Pagos realizados",trigger:"movimientos"},{value:6,label:"Otra pregunta...",trigger:"otra"},{value:7,label:"Terminar conversacion",trigger:"end"}]},{id:"sugerencia2",message:"En que otra cosa le puedo ayudar?",trigger:"usuario"},{id:"otra",message:"Introduzca su pregunta en la caja de texto.",trigger:"usuario"},{id:"end",message:"Gracias por charlar!",end:!0}]}):r.a.createElement("h1",null,"No tiene conexon a internet"))},$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"container mt-2"},r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/chatbot",component:V}),r.a.createElement(o.a,{to:"/chatbot"}))))},K=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/login",component:h}),r.a.createElement(o.b,{path:"/",component:$}))))},Q=function(){var e=Object(l.useState)({cedula:"40212345667",password:"qweqwewe",speak:!1}),a=Object(c.a)(e,2),t=a[0],n=a[1];return r.a.createElement(d.Provider,{value:{user:t,setUser:n}},r.a.createElement(K,null))};i.a.render(r.a.createElement(Q,null),document.getElementById("root"))},91:function(e,a,t){e.exports=t(228)},97:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.398bcad3.chunk.js.map