"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[596],{9596:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,o,i,c,s,u,d,l=t(9439),p=t(2791),x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},h=t(168),f=t(5867),m=f.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  border: 2px solid black;\n  padding: 10px;\n"]))),b=f.ZP.input(a||(a=(0,h.Z)(["\n  margin-bottom: 15px;\n  height: 20px;\n  border-radius: 5px;\n  width: 250px;\n"]))),g=f.ZP.label(o||(o=(0,h.Z)(["\n  font-size: 20px;\n  margin-bottom: 8px;\n"]))),v=f.ZP.button(i||(i=(0,h.Z)(["\n  box-sizing: border-box;\n  width: 100px;\n  height: 24px;\n  background: teal;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 15px;\n"]))),j=t(9434),Z=t(1623),w=t(184),y=function(){var n=(0,j.v9)((function(n){return n.contacts.contactsData})),e=(0,j.I0)(),t=(0,p.useState)(""),r=(0,l.Z)(t,2),a=r[0],o=r[1],i=(0,p.useState)(""),c=(0,l.Z)(i,2),s=c[0],u=c[1],d=function(t){n.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):e((0,Z.uK)(t))};return(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault(),d({name:a,phone:s,id:x()}),o(""),u("")},children:[(0,w.jsxs)(g,{children:["Name",(0,w.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:a,onChange:function(n){o(n.target.value)},required:!0})]}),(0,w.jsxs)(g,{children:["Number",(0,w.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:s,onChange:function(n){u(n.target.value)},required:!0})]}),(0,w.jsx)(v,{type:"submit",children:"Add contact"})]})},C=f.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),k=f.ZP.button(s||(s=(0,h.Z)(["\n  width: 60px;\n  background-color: none;\n  box-sizing: border-box;\n  height: 24px;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  font-weight: 400;\n  font-size: 15px;\n"]))),P=f.ZP.li(u||(u=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]))),z=t(4156),A=function(n){return n.contacts.contactsData},D=function(n){return n.contacts.isLoading},L=function(n){return n.contacts.error},S=function(){var n=(0,j.v9)(A),e=(0,j.v9)(D),t=(0,j.v9)(L),r=(0,j.v9)((function(n){return n.filter.filterData})),a=(0,j.I0)();(0,p.useEffect)((function(){a((0,Z.yF)())}),[a]);var o=n.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,w.jsxs)("div",{children:[e&&(0,w.jsx)(z.a,{}),t&&(0,w.jsx)("p",{children:t}),o.map((function(n){var e=n.name,t=n.phone,r=n.id;return(0,w.jsxs)(P,{children:[e," : ",[t],(0,w.jsx)(k,{type:"button",onClick:function(){var n;n=r,a((0,Z.GK)(n))},children:"Delete"})]},r)}))]})},_=f.ZP.ul(d||(d=(0,h.Z)(["\n  width: 400px;\n  padding: 0;\n"]))),F=function(n){var e=n.children;return(0,w.jsx)(_,{children:e})},I=t(6895),N=function(){var n=(0,j.v9)((function(n){return n.filter.filterData})),e=(0,j.I0)();return(0,w.jsxs)(C,{children:[(0,w.jsx)(g,{children:"Find contact by name"}),(0,w.jsx)(b,{type:"text",value:n,onChange:function(n){e((0,I.T)(n.currentTarget.value))}})]})},q=function(){return(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(y,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(N,{}),(0,w.jsx)(F,{children:(0,w.jsx)(S,{})})]})}}}]);
//# sourceMappingURL=596.89d994e6.chunk.js.map