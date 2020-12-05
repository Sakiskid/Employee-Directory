(this["webpackJsonpOverwatch-League-Player-Directory"]=this["webpackJsonpOverwatch-League-Player-Directory"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),o=a.n(n),c=a(16),s=a.n(c),i=(a(25),a(26),a(19)),l=a(12),u=a(17);var d=function(e){return Object(r.jsx)("th",{children:Object(r.jsxs)("button",{onClick:function(){return e.sortMethod(e.category)},className:"header-btn",children:[" ",e.text," "]})})},h=a(10),j={getCategories:function(e){var t=[];for(var a in j){var r=j[a];null===r.display||h.a.isFunction(r)||t.push(e(r))}return t},id:{display:null,value:"id",path:"id"},link:{display:null,value:"link",path:""},headshot:{display:"Photo",value:"headshot",path:"headshot"},team:{display:"Team",value:"team",path:["teams",0,"team","name"]},teamColorPrimary:{display:null,value:"teamColorPrimary",path:["teams",0,"team","primaryColor"]},teamColorSecondary:{display:null,value:"teamColorSecondary",path:["teams",0,"team","secondaryColor"]},username:{display:"Username",value:"username",path:"name"},firstName:{display:"First Name",value:"firstName",path:"givenName"},lastName:{display:"Last Name",value:"lastName",path:"familyName"},nat:{display:"Nationality",value:"nat",path:"nationality"},mainRole:{display:"Role",value:"mainRole",path:["attributes","role"]},mainHero:{display:"Main Hero",value:"mainHero",path:["attributes","heroes",[0]]}},m=j;var v=function(e){return Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:m.getCategories((function(t){return Object(r.jsx)(d,{text:t.display,category:t.value,sortMethod:e.sortMethod},"tableHeader-"+t.value)}))})})};var y=function(e){return Object(r.jsx)("tr",{className:"entry",children:m.getCategories((function(t){var a="entry-"+e.id+"-"+t.value,n="#"+e.teamColorPrimary,o="#"+e.teamColorSecondary;switch(t.value){case"headshot":return Object(r.jsxs)("td",{className:"entry-headshot",style:{backgroundColor:n},children:[Object(r.jsx)("div",{className:"entry-headshot-clr",style:{backgroundColor:n,borderBottomColor:o}}),Object(r.jsx)("img",{src:e[t.value],width:"128"})]},a);default:return Object(r.jsx)("td",{children:e[t.value]},a)}}))})};var b=function(e,t){return h.a.get(e,m[t].path)};var p=function(e){return Object(r.jsx)("tbody",{children:e.players.map((function(e){return Object(r.jsx)(y,{id:b(e,"id"),link:b(e,"link"),username:b(e,"username"),firstName:b(e,"firstName"),lastName:b(e,"lastName"),mainRole:b(e,"mainRole"),mainHero:b(e,"mainHero"),team:b(e,"team"),teamColorPrimary:b(e,"teamColorPrimary"),teamColorSecondary:b(e,"teamColorSecondary"),nat:b(e,"nat"),headshot:b(e,"headshot")},b(e,"id"))}))})},f=a(7);var g,O=function(e){return Object(r.jsxs)(f.a,{children:[Object(r.jsxs)(f.a.Group,{controlId:"formSearch",children:[Object(r.jsx)(f.a.Label,{children:"Search Query"}),Object(r.jsx)(f.a.Control,{as:"textarea",rows:1,placeholder:"Search for a player here!",value:e.query,onChange:e.searchMethod})]}),Object(r.jsxs)(f.a.Group,{controlId:"formCategory",children:[Object(r.jsx)(f.a.Label,{children:"Search Category"}),Object(r.jsx)(f.a.Control,{as:"select",value:e.category,onChange:e.categoryMethod,children:m.getCategories((function(e){return Object(r.jsx)("option",{value:e.value,children:e.display},"searchoption-"+e.value)}))})]})]})},x=(a(31),"username"),C="descending";var N=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),d=s[0],h=s[1],j=Object(n.useState)("team"),m=Object(l.a)(j,2),y=m[0],f=m[1];return Object(n.useEffect)((function(){if(null!==a){var e=g.filter((function(e){var t=b(e,y);return!(void 0===t||!t.toLowerCase().includes(d))}));o(e)}}),[d]),Object(n.useEffect)((function(){fetch("https://api.overwatchleague.com/players").then((function(e){return e.json()})).then((function(e){g=e.content,console.log("pdata",g)})).then((function(){o(g)}))}),[]),null===a?Object(r.jsx)("div",{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{searchMethod:function(e){var t=e.target.value.toLowerCase();h(t)},categoryMethod:function(e){console.log("event: ",e.target.value),f(e.target.value)},category:y,query:d}),Object(r.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)(v,{sortMethod:function(e){var t,r;x===e?C="ascending"===C?"descending":"ascending":(C="descending",x=e);var n=a.sort((function(a,n){return t=b(a,e),r=b(n,e),void 0!==t&&void 0!==r?("string"===typeof t&&"string"===typeof r&&(t=t.toUpperCase(),r=r.toUpperCase()),t>r?1:t<r?-1:0):void 0===t&&void 0===r?0:void 0===t?1:void 0===r?-1:void 0}));"number"===typeof t&&n.reverse(),"ascending"===C&&n.reverse(),o(Object(i.a)(n))}}),Object(r.jsx)(p,{players:a})]})]})},S=a(18);var w=function(){return Object(r.jsxs)(S.a,{children:[Object(r.jsx)("header",{children:"Overwatch League Playersheet"}),Object(r.jsx)(N,{})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),o(e),c(e)}))};a(32);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),L()}},[[33,1,2]]]);
//# sourceMappingURL=main.40104157.chunk.js.map