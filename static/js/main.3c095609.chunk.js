(this.webpackJsonptransferencia=this.webpackJsonptransferencia||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(15),o=c.n(s),r=(c(20),c(3)),d=(c(21),c(6)),i=c.n(d),l=c(4),j=c.n(l),u=(c(40),c(0));var b=function(){j()(document).ready((function(){j()("#valor").mask("#.##0,00",{reverse:!0})}));var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),o=Object(r.a)(s,2),d=o[0],l=o[1],b=Object(n.useState)({}),m=Object(r.a)(b,2),p=m[0],O=m[1];Object(n.useEffect)((function(){i.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce",{method:"GET"}).then((function(e){a(e.data)}))}),[]);var v=Object(n.useState)(!1),x=Object(r.a)(v,2),h=x[0],f=x[1];return Object(u.jsxs)(u.Fragment,{children:[c.map((function(e,t){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("img",{src:e.img,alt:""}),Object(u.jsxs)("div",{className:"text-user",children:[Object(u.jsxs)("p",{children:["Nome do usu\xe1rio: ",e.name]}),Object(u.jsxs)("p",{children:["ID: ",e.id," - Username: ",e.username]})]}),Object(u.jsx)("button",{type:"button","data-index":t,onClick:function(e){return n=t,console.log(n),O(c[n]),void l(!0);var n},children:"Pagar"})]})},"user"+t)})),Object(u.jsx)("div",{className:"background-modal",style:{display:d?"block":"none"},onClick:function(){l(!1),f()}}),Object(u.jsxs)("div",{className:"modal-content",style:{display:d?"block":"none"},children:[Object(u.jsx)("div",{className:"modal-title",children:Object(u.jsxs)("p",{children:["Pagamento para ",Object(u.jsxs)("span",{children:[p.name," "]})]})}),Object(u.jsxs)("div",{className:"content-form",children:[Object(u.jsx)("input",{id:"valor",type:"text",placeholder:"R$ 0,00"}),Object(u.jsxs)("select",{id:"selectCards",children:[Object(u.jsx)("option",{value:"selecionarCartao",children:"Selecionar o cart\xe3o"}),[{card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}].map((function(e,t){return Object(u.jsxs)("option",{value:"card"+t,children:["Cart\xe3o com o final ",e.card_number.substr(-4)]},t)}))]}),Object(u.jsx)("button",{type:"button",onClick:function(e){return function(e){e.preventDefault();var t=document.getElementById("selectCards").value,c=document.getElementById("valor").value,n=document.getElementById("paySuccess"),a=document.getElementById("payError");"card0"===t?(i.a.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",{card_number:"1111111111111111",cvv:789,expiry_date:"01/18",destination_user_id:p.id,value:c}),f(!0),a.innerHTML=""):(f(!0),n.innerHTML="")}(e)},children:"Pagar"})]})]}),Object(u.jsxs)("div",{className:"modal-content",style:{display:h?"block":"none"},children:[Object(u.jsx)("div",{className:"modal-title",children:Object(u.jsx)("p",{children:"Recibo de pagamento"})}),Object(u.jsxs)("div",{className:"content-modal-pay",children:[Object(u.jsx)("p",{id:"paySuccess",children:"O pagamento foi conclu\xeddo com sucesso!"}),Object(u.jsx)("p",{id:"payError",children:"O pagamento n\xe3o foi conclu\xeddo com sucesso!"}),Object(u.jsx)("button",{onClick:function(){window.location.reload()},children:"Fechar"})]})]})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3c095609.chunk.js.map