(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{218:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c(2),a=c(1),r=c(31),i=c(92),l=c(47),o=c(0);t.default=function(e){var t=e.Component,c=e.dataType,j=Object(n.g)().id,u=Object(a.useState)(null),b=Object(s.a)(u,2),d=b[0],h=b[1],m=Object(r.a)(),O=m.getCharacter,f=m.getComic,p=m.clearError,x=m.process,v=m.setProcess;Object(a.useEffect)((function(){_()}),[j]);var _=function(){switch(p(),c){case"comic":f(j).then(k).then((function(){return v("confirmed")}));break;case"character":O(j).then(k).then((function(){return v("confirmed")}))}},k=function(e){h(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{}),Object(o.jsx)("div",{className:"single-page",children:Object(l.a)(x,t,d)})]})}},47:function(e,t,c){"use strict";var s=c(25),n=(c(50),c(0)),a=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character on the left to see more information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})},r=c(10);t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(a,{});case"loading":return Object(n.jsx)(r.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(s.a,{});default:throw new Error("Unexpected process state")}}},50:function(e,t,c){}}]);
//# sourceMappingURL=8.14fdc75d.chunk.js.map