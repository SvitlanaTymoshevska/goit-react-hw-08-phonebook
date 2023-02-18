"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[142],{5142:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,a,i,s,c,d,l,u,p,x,h,m,b=t(9434),f=t(6916),g=function(n){return n.contacts.items},Z=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},j=(0,f.P1)([function(n){return n.filter},g],(function(n,e){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),v=t(5934),y=t(8174),P=t(168),k=t(6444),C=k.ZP.form(r||(r=(0,P.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    padding: 10px;\n    border: 2px solid darkgray;\n"]))),A=k.ZP.label(o||(o=(0,P.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n"]))),_=k.ZP.span(a||(a=(0,P.Z)(["\n   margin-bottom: 20px;\n   font-weight: bold;\n"]))),I=k.ZP.input(i||(i=(0,P.Z)(["\n    width: 300px;\n    height: 30px;\n"]))),L=k.ZP.button(s||(s=(0,P.Z)(["\n    width: 120px;\n    height: 40px;\n    border: 2px solid darkgray;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;    \n    color: white;\n    background-color: green;\n    border: 2px solid transparent; \n\n      &:hover {\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    }\n"]))),z=t(184),F=function(){var n=(0,b.v9)(g),e=(0,b.I0)();return(0,z.jsxs)(C,{onSubmit:function(t){t.preventDefault();var r=t.target,o=r.elements.name.value,a=r.elements.number.value;if(!function(n,e,t){var r,o=null;n&&(o=n.find((function(n){if(n.name.toLowerCase()===e.toLowerCase()&&n.number===t)return n.name}))),o&&(r="".concat(o.name," is alredy in contacts."),y.Am.error(r));return o}(n,o,a)){e((0,v.uK)({name:o,number:a}));var i;i='Added contact "'.concat(o,'"'),y.Am.info(i),r.reset()}},children:[(0,z.jsxs)(A,{children:[(0,z.jsx)(_,{children:"Name"}),(0,z.jsx)(I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(A,{children:[(0,z.jsx)(_,{children:"Phone number"}),(0,z.jsx)(I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)(L,{type:"submit",children:"Add contact"})]})},D=t(2791),N=t(4289),q=t(3524),K=t(5243),S=k.ZP.li(c||(c=(0,P.Z)(["\n    display: flex;\n    justify-content: space-between;\n    font-size: 16px;\n    line-height: 1.8;\n"]))),B=k.ZP.button(d||(d=(0,P.Z)(["\n    margin-left: 20px;\n    width: 80px;\n    height: 24px;\n    border: 2px solid darkgray;\n    border-radius: 4px;\n    cursor: pointer;\n    font-weight: bold;    \n\n      &:hover {\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n        color: white;\n        background-color: green;\n        border: 2px solid transparent;\n    }\n"]))),E=function(n){var e=n.contact,t=e.id,r=e.name,o=e.number,a=(0,b.I0)();return(0,z.jsxs)(S,{children:[r,": ",o,(0,z.jsx)(B,{type:"button",onClick:function(){a((0,v.GK)(t));var n;n='Deleted contact "'.concat(r,'"'),y.Am.info(n)},children:"Delete"})]})},G=function(){var n,e=(0,b.I0)(),t=(0,b.v9)(N.uo),r=(0,b.v9)(j),o=(0,b.v9)(Z),a=(0,b.v9)(w);if((0,D.useEffect)((function(){t===q.u.logIn&&e((0,v.yF)())}),[t,e]),a){return n=a,void y.Am.error(n)}return(0,z.jsxs)(z.Fragment,{children:[o&&!a&&(0,z.jsx)(K.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0}),r&&!o&&!a&&(0,z.jsx)("ul",{children:r.map((function(n){return(0,z.jsx)(E,{contact:n},n.id)}))}),!r.length&&!o&&!a&&(0,z.jsx)("p",{children:"Contacts not found"})]})},J=t(4808),M=k.ZP.label(l||(l=(0,P.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n"]))),T=k.ZP.span(u||(u=(0,P.Z)(["\n   margin-bottom: 20px;\n   font-weight: bold;\n"]))),$=k.ZP.input(p||(p=(0,P.Z)(["\n    width: 300px;\n    height: 30px;\n"]))),H=function(){var n=(0,b.I0)();return(0,z.jsxs)(M,{children:[(0,z.jsx)(T,{children:"Find contacts by name"}),(0,z.jsx)($,{type:"text",onChange:function(e){return n((0,J.T)(e.target.value))}})]})},O=k.ZP.main(x||(x=(0,P.Z)(["\n    margin-top: 40px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 20px;\n    width: 500px;\n    border-radius: 4px;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),Q=k.ZP.h1(h||(h=(0,P.Z)(["\n    margin-bottom: 20px;\n"]))),R=k.ZP.h2(m||(m=(0,P.Z)(["\n    margin-bottom: 20px;\n"]))),U=(t(5462),function(){return(0,z.jsxs)(O,{children:[(0,z.jsx)(Q,{children:"Phonebook"}),(0,z.jsx)(F,{}),(0,z.jsx)(R,{children:"Contacts"}),(0,z.jsx)(H,{}),(0,z.jsx)(G,{}),(0,z.jsx)(y.Ix,{})]})})}}]);
//# sourceMappingURL=142.8a939b95.chunk.js.map