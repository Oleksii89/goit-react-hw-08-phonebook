"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[671],{9671:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,i,c,o,s=r(1413),a=r(2791),u=r(5244),d=r(9434),l=r(3661),f=r(887),x=function(n){return n.contacts.contactsData},h=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},p=r(184),m=function(){var n=(0,f.cI)(),e=n.register,r=n.handleSubmit,t=n.reset,i=n.formState.errors,c=(0,d.v9)(x),o=(0,d.I0)();(0,a.useEffect)((function(){o((0,l.yF)())}),[o]);return(0,p.jsxs)(u.Gq,{onSubmit:r((function(n){c.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):o((0,l.uK)(n)),t()})),children:[(0,p.jsxs)(u.ar,{children:[(0,p.jsx)("span",{children:"Name:"}),(0,p.jsx)(u.Fy,(0,s.Z)((0,s.Z)({},e("name",{required:!0})),{},{type:"text"})),i.name&&(0,p.jsx)("span",{children:"This field is required"})]}),(0,p.jsxs)(u.ar,{children:[(0,p.jsx)("span",{children:"Number:"}),(0,p.jsx)(u.Fy,(0,s.Z)((0,s.Z)({},e("number",{required:!0})),{},{type:"text"})),i.number&&(0,p.jsx)("span",{children:"This field is required"})]}),(0,p.jsx)(u.Sn,{type:"submit",children:"Add contact"})]})},b=r(168),v=r(5867),y=v.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),w=v.ZP.button(i||(i=(0,b.Z)(["\n  width: 60px;\n  background-color: none;\n  box-sizing: border-box;\n  height: 24px;\n  background-color: white;\n  cursor: pointer;\n  border-radius: 4px;\n  font-weight: 400;\n  font-size: 15px;\n"]))),Z=v.ZP.li(c||(c=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n"]))),g=r(4156),k=function(){var n=(0,d.v9)(x),e=(0,d.v9)(h),r=(0,d.v9)(j),t=(0,d.v9)((function(n){return n.filter.filterData})),i=(0,d.I0)();(0,a.useEffect)((function(){i((0,l.yF)())}),[i]);var c=n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,p.jsxs)("div",{children:[e&&(0,p.jsx)(g.a,{}),r&&(0,p.jsx)("p",{children:r}),c.map((function(n){var e=n.name,r=n.number,t=n.id;return(0,p.jsxs)(Z,{children:[e," : ",[r],(0,p.jsx)(w,{type:"button",onClick:function(){var n;n=t,i((0,l.GK)(n))},children:"Delete"})]},t)}))]})},C=v.ZP.ul(o||(o=(0,b.Z)(["\n  width: 400px;\n  padding: 0;\n"]))),F=function(n){var e=n.children;return(0,p.jsx)(C,{children:e})},q=r(6895),L=function(){var n=(0,d.v9)((function(n){return n.filter.filterData})),e=(0,d.I0)();return(0,p.jsxs)(y,{children:[(0,p.jsx)(u.ar,{children:"Find contact by name"}),(0,p.jsx)(u.Fy,{type:"text",value:n,onChange:function(n){e((0,q.T)(n.currentTarget.value))}})]})},P=function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Phonebook"}),(0,p.jsx)(m,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(L,{}),(0,p.jsx)(F,{children:(0,p.jsx)(k,{})})]})}}}]);
//# sourceMappingURL=671.66895e8e.chunk.js.map