(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2],{100:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(12),s=n(131),u=n.n(s),o=function(){return a.a.createElement("img",{src:u.a,alt:"logo"})},i=n(119),l=function(){var e=Object(c.c)();return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top px-lg-5 dash-header d-flex justify-content-between align-items-center"},a.a.createElement("div",{className:"navbar-brand",href:"#"},a.a.createElement(o,null)),a.a.createElement("div",{className:"container-fluid"},a.a.createElement("form",{className:"d-flex"},a.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"})),a.a.createElement("div",null,a.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),a.a.createElement("div",{className:"d-flex align-items-center"},a.a.createElement("span",{className:"material-icons-outlined mr-2 text-white"},"notifications"),a.a.createElement("img",{src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",alt:"Avatar",className:"avatar mr-1"}),a.a.createElement("h6",{className:"mr-2"},"Femi Ilori"),a.a.createElement("div",{className:"dropdown"},a.a.createElement("span",{className:"material-icons-outlined mt-2 pointer",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},"keyboard_arrow_down"),a.a.createElement("ul",{className:"dropdown-menu p-2",style:{marginLeft:-90},"aria-labelledby":"dropdownMenuButton1"},a.a.createElement("li",{className:"py-2 fw-bold pointer"},a.a.createElement("small",null," ",a.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})," Edit Profile ")),a.a.createElement("li",{onClick:function(){return e(Object(i.b)())},className:"py-2 text-danger fw-bold pointer"},a.a.createElement("small",null," ",a.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})," Log out ")," ")))))))},p=n(14),f=function(e){var t=e.title;return a.a.createElement("div",{className:"sidebar mt-4 flex-column align-items-center"},a.a.createElement("div",{className:"mt-200"},a.a.createElement("nav",{className:"flex-column navigation"},a.a.createElement(p.b,{to:"/dashboard"},a.a.createElement("div",{className:"Dashboard"===t?"nav-link active":"nav-link"},a.a.createElement("span",{className:"material-icons"},"home"),a.a.createElement("p",null,"Overview"))),a.a.createElement(p.b,{to:"/users"},a.a.createElement("div",{className:"Users"===t?"nav-link active":"nav-link"},a.a.createElement("span",{className:"material-icons"},"groups"),a.a.createElement("p",null,"Users"))),a.a.createElement(p.b,{to:"/trainings"},a.a.createElement("div",{className:"Trainings"===t?"nav-link active":"nav-link"},a.a.createElement("span",{className:"material-icons"},"co_present"),a.a.createElement("p",null,"Trainings"))),a.a.createElement(p.b,{to:"/projects"},a.a.createElement("div",{className:"Projects"===t?"nav-link active":"nav-link"},a.a.createElement("span",{className:"material-icons"},"assignment"),a.a.createElement("p",null,"Projects"))),a.a.createElement(p.b,{to:"/updates"},a.a.createElement("div",{className:"Updates"===t?"nav-link active":"nav-link"},a.a.createElement("span",{className:"material-icons"},"menu_book"),a.a.createElement("p",null,"Updates"))),a.a.createElement(p.b,{to:"/statesinfo"},a.a.createElement("div",{className:"StatesInfo"===t?"nav-link active":"nav-link"},a.a.createElement("span",null,a.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})),a.a.createElement("p",null,"States info"))),a.a.createElement(p.b,{to:"/trainings/chat"},a.a.createElement("div",{className:"TrainingChat"===t?"nav-link active":"nav-link"},a.a.createElement("span",null,a.a.createElement("i",{className:"fa fa-comments-o","aria-hidden":"true"})),a.a.createElement("p",null,"Chat"))))))};t.a=function(e){var t=e.children,n=e.title,r=void 0===n?"Dashboard":n;return a.a.createElement("section",{className:"d-flex mt-55 align-items-stretch h-100"},a.a.createElement("div",{className:"w-10 h-100 position-fixed d-none d-lg-block"},a.a.createElement(f,{title:r})),a.a.createElement("div",{className:"w-90 ml-150 mt-2 full_height bg-grey"},a.a.createElement(l,null),a.a.createElement("div",{className:"py-5 px-5"},t)))}},119:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"b",function(){return f});var r=n(86),a=n.n(r),c=n(87),s=n(1),u=n(97),o=n(95),i=n(96),l=function(e){return function(t){localStorage.setItem("user",JSON.stringify(e)),t({type:s.p,payload:e})}},p=function(e,t){return function(){var n=Object(c.a)(a.a.mark(function n(r){var c;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(i.a)()),n.prev=1,n.next=4,u.a.loginAccount({email:e,password:t});case 4:if(!(c=n.sent)){n.next=9;break}return r(Object(i.b)()),localStorage.setItem("token",c.data.data.api_token),n.abrupt("return",r(l(c.data.data)));case 9:n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),r(Object(i.b)()),"Network Error"===n.t0.message||500===n.t0.response.status?(r(Object(o.b)("Network Error")),r(Object(o.a)())):(r(Object(o.b)(n.t0.response.data.error.message)),r(Object(o.a)()));case 15:case"end":return n.stop()}},n,null,[[1,11]])}));return function(e){return n.apply(this,arguments)}}()},f=function(){return function(e){e({type:s.o})}}},131:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAUCAYAAADiOEEgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUzSURBVHgB7VlNUuNWEO4WMjCTjecEo9mkgGw8i1Rhsog4QcgaksEnGDgBnhNgTmAoYA05wTgboCqLcTZAKgs0J4g3yVjGqNP99OMn+cm2bIpUqugaypbcX3fre69/ngahgCw1Vx2wwZHvlvXQud78rQ1PKCun31aCYK6sLvrg3dauPPgPZel0dRsJm/H1zdYljtK3oIjYUEfEj/JHNLcPTywE9lnsn2PZhv+ZFCP7WWaSZ7KfUJ7JfkKxTTelEVrz4Mr3IOBG9NNVCwqKNDOAuQoF2CGgThEbOhatvle0ETtNt/zC9l20qKz896k9aTOdBTtOUmQLyVhS3dUlCu8h99fl46pHFn4Q5scJ675nTJ3x4dSA8g8TG7ebF4d52K+PqxtzAPuMdWIskR1i+7QOY2QQv+/KNRGG/kvs/2StTffBj3nEqQ1m4z6hv1EUO6kkZUR2k1XCT/zVHdJCcJCoiRZ+P8rYynH1jHUbvE7lPBsrp2tNE3bpdG1vDkHwjhFr8xRCBrsxXohmHWP8SqjCxN0tnXz3Lg/L/G4UxRYRK3ZGgX02RBKSx4vbGfg0EBHJ8kl1PxusYFN4MUG0/Q3r6vfCeZXqWWzKPxNuXETQiE4vVJsz6pA/W2m7QUOdFx4BW1QU2eysnnKGcPDlfuHVzebVm+uty1dM0DoT7eUZCWss7CQ3WFcwgjXhuRjtLB2vuom7APcyJncFF/tn/V0YIdn4KaAaHzDeXm9dyOc63dMbzX85KpUzY4tKXEaS8kC8ojeblzterZXsSGluo2omZ0WaaNbVG2KM13c5lySVBYr09K7a5Yds6Pb/4GtesA+QL6n4b3++OtR/lFrLTbqm3XKlET4CtpDYKi30h6XgyKQoTrlUtMBc018ncMTWbe3SM+KPq0es+17dCOAHkGyw2DcN9LJEx7LYX2z4JT+bAVDhB/fRd+Jri+srx/lx2AKWQXP0cv5vh7HetFj+KPyqYmj0k3ceecq8uz4jGo7/qBFGwedcPI+AMpmkJAAnuTWiVLU505ZPq162b3ShW9ZtchiVPO8pt/yOZRYsTCFDZBPaDuSsGhP92miFsBMHxOUhNxB+MGdgKyopFnjJs/CiSYrqJSztJ79BD3xAh5A64/Qy/M2MnURsSe+Vk2on6fSBSvPzrGLUhV2jFaJfOdJKFMg71m1kZ9IIn9THAFAt6EPPatslLUXtrtT/etaFzO9gkKH4Ac+559RgQpkFO07i2h5vHtUgA6IDTceV0Sw1HnETi2ZYo3B50BenLLrRhJLGG3rDn7ULJh2TTOKav8d1c0e3r4jm+T3Pvx4/x7KdxasYeI5fOVlrZke3WbCjRGJ+WfLvXpT8v/hsoXqNKljSZHr8w/CcHdVQY/pS62bral0z3kiaXwIPS4XB7oFMPMnDyGJgejHDlOY5nQ8ypvlaphOecupx/L7tf0ovJseO6k9suLoNXtBafJKdBZv3Pjs6yd6l4uURUu1saT6A/fXsAUSRrBE99LsmC/2FOmQOARLkMFHU+tJTuomo0TAz2ikcaQcZJiDPv8SvRlO9wYbkuXxvI0UW4e/d3vz5tFjoBS2YQqz5h3JyXJeXPcE9vYUMYaFv3mU87HPK/ZJnTIJWhwAhzTBVRETtSjaYGqDsUm5ONfNEQmpOJ8xfbDUPK9LIOLqqZ+DYuv15N+u/CHaS9yOhjm6LjoRfNClHR9iKvPniFtae5r+/VGng+XQaGzo26EGr6AsgaUyLdrdiWXFWPrT/6X3l5U45j4QFw3PIZ3zA+xdSJDVt2cVnQQAAAABJRU5ErkJggg=="},544:function(e,t,n){"use strict";n.r(t);var r=n(86),a=n.n(r),c=n(87),s=n(89),u=n(0),o=n.n(u),i=n(107),l=n.n(i),p=n(105),f=n.n(p),d=n(100),m=n(514),v=n(279);m.a({apiKey:"AIzaSyAfOD0YL2cC5s0eDoYu7l2zkyoBhuc6rfE",authDomain:"dodeel-cds.firebaseapp.com",projectId:"dodeel-cds",storageBucket:"dodeel-cds.appspot.com",messagingSenderId:"60292476262",appId:"1:60292476262:web:e74f8f938da332429faca7",measurementId:"G-Z175Z158DS"});var b=Object(v.f)();t.default=function(){var e=Object(u.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(u.useState)(""),p=Object(s.a)(i,2),m=p[0],h=p[1],w=Object(u.useRef)(null),x=Object(u.useState)(!1),g=Object(s.a)(x,2),k=g[0],y=g[1],j=Object(u.useState)("all users"),E=Object(s.a)(j,2),O=E[0],A=E[1];function N(){return(N=Object(c.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.i)(Object(v.b)(b,"chats"),Object(v.h)("createdAt"));case 2:t=e.sent,Object(v.g)(t,function(e){var t=[];e.forEach(function(e){t.push({id:e.id,value:e.data()})}),r(t)});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(){return(P=Object(c.a)(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)(b,"settings");case 2:t=e.sent,Object(v.g)(t,function(e){e.forEach(function(e){A(e.data().status)})});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(u.useEffect)(function(){!function(){N.apply(this,arguments)}(),function(){P.apply(this,arguments)}()},[]),Object(u.useEffect)(function(){w&&w.current.addEventListener("DOMNodeInserted",function(e){var t=e.currentTarget;t.scroll({top:t.scrollHeight,behavior:"smooth"})})},[]);var T=function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=4;break}return e.next=3,Object(v.a)(Object(v.b)(b,"chats"),{text:m,name:"Admin",isAdmin:!0,createdAt:Object(v.j)()});case 3:h("");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(v.d)(b,"settings","Z0loDfGgk4myMYa9bctL"),e.next=3,Object(v.k)(n,{status:t});case 3:A(t),y(!1);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U=function(e){f()({title:"Are you sure?",text:"Are you sure you want to update chat status.",icon:"warning",buttons:!0,dangerMode:!1}).then(function(t){t?C(e):f()("Operation canceled!")})},S=function(){var e=Object(c.a)(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(v.i)(Object(v.b)(b,"chats")),e.next=3,Object(v.e)(t);case 3:return e.sent.forEach(function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)(Object(v.d)(b,"chats",t.id));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n=Object(v.i)(Object(v.b)(b,"people")),e.next=8,Object(v.e)(n);case 8:e.sent.forEach(function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)(Object(v.d)(b,"people",t.id));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return o.a.createElement(d.a,{title:"TrainingChat"},o.a.createElement("section",{className:"chat-section"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"position-relative"},o.a.createElement("button",{onClick:function(){return y(!k)},className:"btn btn-secondary dropdown-toggle",type:"button"},"Chats Settings"),o.a.createElement("div",{className:k?"position-absolute bg-white border":"position-absolute bg-white border d-none"},o.a.createElement("p",{onClick:function(){return U("all users")},className:"dropdown-item"},"All Users"),o.a.createElement("p",{onClick:function(){return U("admin only")},className:"dropdown-item"},"Admin Only"),o.a.createElement("p",{onClick:function(){return U("disable chat")},className:"dropdown-item"},"Disable Chat"))),o.a.createElement("button",{onClick:function(){f()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(e){e?S():f()("Operation canceled!")})},className:"btn bg-danger text-white"},"Clear Chats")),o.a.createElement("div",{className:"mt-5 px-5 ag"},o.a.createElement("div",{ref:w,className:"flex-1 h-90 overflow-auto"},0===n.length?o.a.createElement("div",{className:"d-flex justify-content-center align-items-center h-90"},o.a.createElement("p",null,"Empty chats")):n.map(function(e){return o.a.createElement("div",{className:e.value.isAdmin?"d-flex justify-content-end":"d-flex",key:e.id},o.a.createElement("div",{className:e.value.isAdmin?"chatcont darker":"chatcont"},o.a.createElement("p",{className:"fw-bold"},e.value.text),o.a.createElement("span",{className:e.value.isAdmin?"time-left text-white":"time-left"},e.value.name," ",e.value.stateCode," ",e.value.createdAt&&l()(e.value.createdAt.toDate()).fromNow())))})),"disable chat"!==O&&o.a.createElement("div",{className:"flex-row align-items-center"},o.a.createElement("input",{type:"text",onKeyDown:T,onChange:function(e){h(e.target.value)},value:m,className:"form-control chatInput",placeholder:"Enter Message"})))))}},95:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var r=n(1),a=function(e){return function(t){t({type:r.r,message:e})}},c=function(e){return function(t){t({type:r.b,message:e})}},s=function(){return function(e){e({type:r.a})}}},96:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c});var r=n(1),a=function(){return function(e){e({type:r.n})}},c=function(){return function(e){e({type:r.q})}}},97:function(e,t,n){"use strict";var r=n(86),a=n.n(r),c=n(87),s=n(29),u=n(30),o=n(141),i=n.n(o);i.a.defaults.baseURL="https://dodeel.douglasokolaa.codes";var l=i.a.create();l.interceptors.request.use(function(){var e=Object(c.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("token"))&&(t.headers.Authorization="Bearer "+n),e.abrupt("return",t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),function(e){return Promise.reject(e)});var p=l,f=new(function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"loginAccount",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchAuthUser",value:function(){var e=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.get("/auth/profile"));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchTrainings",value:function(){var e=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/trainings?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchTraining",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/trainings/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchProjects",value:function(){var e=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/projects?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchJobs",value:function(){var e=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/jobs?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchNews",value:function(){var e=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/news?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchProspects",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return e.next=3,p.get("/prospects?&search=".concat(r,"&order=desc"));case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,p.get("/prospects?page=".concat(void 0===t?1:t,"&per_page=").concat(void 0===n?15:n,"&order=desc"));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"fetchCM",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return e.next=3,p.get("/users?&search=".concat(r,"&order=desc"));case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,p.get("/users?page=".concat(void 0===t?1:t,"&per_page=").concat(void 0===n?15:n,"&order=desc"));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"approvePCMs",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/prospects",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getSingleUser",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/users/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"addUser",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/users",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"addTraining",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/trainings",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"addNews",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/news",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateNews",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/news/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"addJob",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/jobs",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"toggleActiveUser",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/users/".concat(t.id),{status:t.status});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTraining",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/trainings/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteProject",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/projects/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteNews",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/news/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteJob",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/jobs/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateJob",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/jobs/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateTraining",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/trainings/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchProject",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/projects/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateProject",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/projects/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchStateExcos",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/states/".concat(t,"/members"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"postStateExcos",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state_code,e.next=3,p.post("/states/".concat(n,"/members"),t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"verifyABusiness",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/businesses/".concat(n),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"createAnnoucement",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/announcements",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchAnnoucements",value:function(){var e=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/announcements");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"addResources",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/resources",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteResource",value:function(){var e=Object(c.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/resources/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}());t.a=f}}]);
//# sourceMappingURL=14.60eb6a2a.chunk.js.map