(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),i=t(12),c=t.n(i),a=t(6),l=t(16),u=t(4),d=t(3),s=t(2);function p(){var n=Object(d.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n  \n  a {\n    text-decoration: none;\n  \n    &:hover {\n      text-decoration: none;\n    }\n  }\n  \n  a:hover {\n    cursor: pointer;\n  }\n\n  button {\n    border: none;\n    background-color: #fff;\n    cursor: pointer;\n  }\n\n  button:hover, button:focus {\n    outline: none;\n  }\n\n  body {\n    font:  14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n  }\n"]);return p=function(){return n},n}var f=Object(s.b)(p());function b(){var n=Object(d.a)(["\n  width: 100%;\n  padding: 0.1em;\n  font-size: 18px;\n  font-weight: lighter;\n  letter-spacing: 0.2em;\n  line-height: 1.4em;\n  outline: none;\n"]);return b=function(){return n},n}function h(){var n=Object(d.a)(["\n  display: none;\n  position: absolute;\n  right: 30px;\n  top: 6px;\n  border: none;\n  outline: none;\n  background: url(delete.svg) center/cover no-repeat;\n  filter: opacity(0.3);\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n"]);return h=function(){return n},n}function x(){var n=Object(d.a)(["\n  ","\n"]);return x=function(){return n},n}function g(){var n=Object(d.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  cursor: pointer;\n  filter: opacity(0.3);\n  ","\n"]);return g=function(){return n},n}function j(){var n=Object(d.a)(["\n  display: none;\n  & + label {\n    max-width: 460px;\n    overflow: hidden;\n    word-break: break-all;\n    word-wrap: break-word; \n    padding: 0.1em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    margin: 0;\n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n  position: relative;\n  font-size: ",";\n  font-weight: lighter;\n  color: ",';\n  letter-spacing: 0.2em;\n  list-style-type: none;\n  text-align: left;\n  margin: 15px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgba(0,0,0,0.05);\n  & p {\n    margin: 0;\n    padding: 0.3rem 0;\n  }\n  &:hover {\n    text-shadow: 0 0 0.1px rgba(0,0,0,1);\n    input[type="button"] {\n      display: unset;\n    }\n  }\n']);return O=function(){return n},n}var m=s.c.li(O(),(function(n){return n.theme.font_size.text}),(function(n){return n.theme.colors.text_primary})),v=s.c.input(j()),y=s.c.span(g(),(function(n){return n.$isDone?"\n      background: url(checked.svg) center/cover no-repeat;\n      margin: 7.5px 15px 7.5px 5px;\n    ":"\n      background: url(unchecked.svg) center/cover no-repeat;\n      margin: 7.5px 15px 7.5px 5px;\n    "})),w=s.c.p(x(),(function(n){return n.$isDone&&"\n      text-decoration: line-through;\n    "})),k=s.c.input(h()),C=s.c.input(b()),D=function(n){var e=n.text,t=n.handleEnterUpdate,i=Object(o.useState)(e),c=Object(u.a)(i,2),a=c[0],l=c[1];return Object(r.jsx)(C,{type:"text",value:a,onChange:function(n){l(n.target.value)},onKeyDown:function(n){13===n.keyCode&&""!==a&&t(a)}})},_=function(n){n.key;var e=n.todo,t=n.handleDeleteTodo,i=n.handleToggleIsDone,c=n.handleUpdateTodo,a=Object(o.useState)(e.content),l=Object(u.a)(a,2),d=l[0],s=l[1];return Object(r.jsxs)(m,{children:[Object(r.jsx)(v,{type:"checkbox",id:e.id}),Object(r.jsx)("label",{for:e.id,children:Object(r.jsx)(y,{$isDone:e.isDone,onClick:function(){i(e.id)}})}),Object(r.jsx)(w,{$isDone:e.isDone,onClick:function(){s("")},children:d||Object(r.jsx)(D,{text:e.content,handleEnterUpdate:function(n){c(e.id,n),s(n)}})}),Object(r.jsx)(k,{type:"button",onClick:function(){t(e.id)}})]})};function z(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  font-weight: lighter;\n  color: $lightColor_02;\n  margin-left: 20px;\n\n  & strong {\n    margin: 5px;\n    font-weight: lighter;\n  }\n\n  & p {\n    margin: 0;\n  }\n"]);return z=function(){return n},n}function S(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: lighter;\n  color: #777;\n  padding: 10px;\n  & ul {\n    display: flex;\n    margin: 0;\n    & li {\n      a {\n        color: #777;\n        margin: 3px;\n        padding: 3px 7px;\n        border: 1px solid transparent;\n        border-radius: 3px;\n      }\n      .selected {\n        border: 0.5px solid rgba(175, 47, 47, 0.2);\n      }\n    } \n  }\n  & button {\n    margin-right: 5px;\n    color: #777;\n  }\n"]);return S=function(){return n},n}var T=s.c.footer(S()),I=s.c.div(z()),$=function(n){var e=n.todos,t=n.handleChangeFilter,o=n.handleClearComplete;return Object(r.jsxs)(T,{children:[Object(r.jsxs)(I,{children:[Object(r.jsx)("strong",{children:function(n){for(var e=0,t=0;t<n.length;t++)n[t].isDone||e++;return e}(e)}),Object(r.jsx)("p",{children:"items left"})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{onClick:function(){t("all")},children:Object(r.jsx)("a",{children:"All"})}),Object(r.jsx)("li",{onClick:function(){t("active")},children:Object(r.jsx)("a",{children:"Active"})}),Object(r.jsx)("li",{onClick:function(){t("complete")},children:Object(r.jsx)("a",{children:"Completed"})})]}),Object(r.jsx)("button",{onClick:o,children:"Clear completed"})]})};function E(){var n=Object(d.a)([""]);return E=function(){return n},n}function J(){var n=Object(d.a)(["\n  padding: 16px 16px 16px 60px;\n  border: none;\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n  outline: none;\n  width: 100%;\n  font-size: ",";\n  font-weight: lighter;\n  letter-spacing: 0.3rem;\n  line-height: 1rem;\n  &::placeholder {\n    color: #a0969638;\n    font-weight: lighter;\n  }\n"]);return J=function(){return n},n}function U(){var n=Object(d.a)(["\n  background: ",";\n  width: 550px;\n  margin: 30px auto;\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 25px 50px 0 rgba(0,0,0,0.1);\n"]);return U=function(){return n},n}function A(){var n=Object(d.a)(["\n  color: ",";\n  font-size: ",";\n  text-align: center;\n  margin: 50px;\n  font-weight: 500;\n  line-height: 1.2;\n"]);return A=function(){return n},n}function N(){var n=Object(d.a)([""]);return N=function(){return n},n}var F=s.c.div(N()),H=s.c.div(A(),(function(n){return n.theme.colors.title_primary}),(function(n){return n.theme.font_size.title})),K=s.c.div(U(),(function(n){return n.theme.bg_colors.bg_primary})),B=s.c.input(J(),(function(n){return n.theme.font_size.input})),W=s.c.ul(E()),q=1,G=window.localStorage.getItem("todos")||"",L=function(){var n=Object(o.useState)(""),e=Object(u.a)(n,2),t=e[0],i=e[1],c=Object(o.useState)("all"),d=Object(u.a)(c,2),s=d[0],p=d[1],b=Object(o.useState)((function(){return G?(G=JSON.parse(G),q=G[G.length-1].id+1):G=[{id:0,content:"new todo",isDone:!1}],G})),h=Object(u.a)(b,2),x=h[0],g=h[1],j=function(n){g(x.filter((function(e){return e.id!==n})))},O=function(n){g(x.map((function(e){return e.id!==n?e:Object(a.a)(Object(a.a)({},e),{},{isDone:!e.isDone})})))},m=function(n,e){g(x.map((function(t){return t.id!==n?t:Object(a.a)(Object(a.a)({},t),{},{content:e})})))};return Object(o.useEffect)((function(){!function(n){window.localStorage.setItem("todos",JSON.stringify(n))}(x)}),[x]),Object(r.jsxs)(F,{children:[Object(r.jsx)(f,{}),Object(r.jsx)(H,{children:"todos"}),Object(r.jsxs)(K,{children:[Object(r.jsx)(B,{placeholder:"What needs to be done?",value:t,onChange:function(n){i(n.target.value)},onKeyDown:function(n){13===n.keyCode&&""!==t&&(g((function(){return q++,[].concat(Object(l.a)(x),[{id:q,content:t,isDone:!1}])})),i(""),q++)}}),Object(r.jsx)(W,{children:x.filter((function(n){return"all"===s?n:"complete"===s?n.isDone:!n.isDone})).map((function(n){return Object(r.jsx)(_,{todo:n,handleDeleteTodo:j,handleToggleIsDone:O,handleUpdateTodo:m},n.id)}))}),Object(r.jsx)($,{todos:x,handleChangeFilter:function(n){p(n)},handleClearComplete:function(){g(x.filter((function(n){return!n.isDone})))}})]})]})};c.a.render(Object(r.jsx)(s.a,{theme:{colors:{title_primary:"rgba(175, 47, 47, 0.15)",text_primary:"#4d4d4d"},bg_colors:{bg_primary:"#fff"},font_size:{title:"6rem",text:"1.4rem",input:"1.5rem"}},children:Object(r.jsx)(L,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.328bd9c9.chunk.js.map