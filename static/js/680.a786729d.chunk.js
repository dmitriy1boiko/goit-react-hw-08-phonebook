"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{6680:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a=t(9439),i=t(168),s=t(6444),o=s.ZP.section(r||(r=(0,i.Z)(["\n  padding-left: 20px;\n  margin-top: 40px;\n"]))),d=t(184);function u(n){var e=n.title,t=n.children;return(0,d.jsxs)(o,{children:[(0,d.jsx)("h2",{children:e}),t]})}var c,l=t(9434),p=t(2791),h=t(3634),m=t(2946);function x(){var n=(0,p.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,p.useState)(""),s=(0,a.Z)(i,2),o=s[0],u=s[1],c=(0,l.I0)(),x=(0,l.v9)(m.EX),f=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":u(a);break;default:return}};return(0,d.jsx)("form",{onSubmit:function(n){n.preventDefault();var e={name:t,number:o};if(x.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()||n.number===e.number})))return alert("".concat(e.name," or ").concat(e.number," has already existed")),r(""),void u("");c((0,h.el)(e)),r(""),u("")},children:(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Name"}),(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:f}),(0,d.jsx)("h3",{children:"Number"}),(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:f}),(0,d.jsx)("button",{type:"submit",children:"Add contact"})]})})}var f,b,v,g=s.ZP.div(c||(c=(0,i.Z)(["\n  margin: 0 auto;\n  padding: 0px;\n  padding-bottom:10px;\n  margin-top: 60px;\n  margin-bottom: 60px;\n  width: 360px;\n  box-shadow: 0px 0px 90px 0px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  overflow: hidden;\n"]))),j=s.ZP.button(f||(f=(0,i.Z)(["\n  min-width: 60px; \n  height: 30px;\n  color: #75706c;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  background: transparent;\n  border: 1px solid #b3aca7;\n  border-radius: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background: #b3aca7;\n    color: #e2dedb;\n  }\n"]))),w=s.ZP.div(b||(b=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n"]))),Z=s.ZP.p(v||(v=(0,i.Z)(["\n  font-size: 15px;\n  font-weight: 600;\n"]))),C=function(){var n=(0,l.v9)(m.EX),e=(0,l.v9)(m.uG),t=(0,l.I0)(),r=""===e?n:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())||n.number.includes(e)}));return(0,p.useEffect)((function(){t((0,h.K2)())}),[t]),(0,d.jsx)("ul",{children:r.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsxs)(w,{children:[(0,d.jsxs)(Z,{children:[n.name,": ",n.number]}),(0,d.jsx)(j,{type:"button",onClick:function(){return t((0,h._f)(n.id))},children:"Delete"})]})},n.id)}))})},k=t(1538),y=function(){var n=(0,l.v9)(m.uG),e=(0,l.I0)();return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Find contacts by name"}),(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:function(n){return e((0,k.W)(n))},value:n})]})},P=t(9649);function z(){var n=(0,p.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1];return(0,d.jsx)(g,{children:(0,d.jsxs)(P.Z,{children:[(0,d.jsx)(u,{children:(0,d.jsx)(x,{})}),(0,d.jsxs)(u,{title:"Contacts",children:[(0,d.jsx)(y,{filter:t,onChangeInput:function(n){r(n)}}),(0,d.jsx)(C,{})]})]})})}}}]);
//# sourceMappingURL=680.a786729d.chunk.js.map