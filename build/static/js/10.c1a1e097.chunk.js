(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{100:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(12),s=n(131),u=n.n(s),o=function(){return r.a.createElement("img",{src:u.a,alt:"logo"})},i=n(121),l=function(){var e=Object(c.c)();return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top px-lg-5 dash-header d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"navbar-brand",href:"#"},r.a.createElement(o,null)),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{className:"d-flex"},r.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"})),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("span",{className:"material-icons-outlined mr-2 text-white"},"notifications"),r.a.createElement("img",{src:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",alt:"Avatar",className:"avatar mr-1"}),r.a.createElement("h6",{className:"mr-2"},"Femi Ilori"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("span",{className:"material-icons-outlined mt-2 pointer",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},"keyboard_arrow_down"),r.a.createElement("ul",{className:"dropdown-menu p-2",style:{marginLeft:-90},"aria-labelledby":"dropdownMenuButton1"},r.a.createElement("li",{className:"py-2 fw-bold pointer"},r.a.createElement("small",null," ",r.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})," Edit Profile ")),r.a.createElement("li",{onClick:function(){return e(Object(i.b)())},className:"py-2 text-danger fw-bold pointer"},r.a.createElement("small",null," ",r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})," Log out ")," ")))))))},p=n(14),m=function(e){var t=e.title;return r.a.createElement("div",{className:"sidebar mt-4 flex-column align-items-center"},r.a.createElement("div",{className:"mt-200"},r.a.createElement("nav",{className:"flex-column navigation"},r.a.createElement(p.b,{to:"/dashboard"},r.a.createElement("div",{className:"Dashboard"===t?"nav-link active":"nav-link"},r.a.createElement("span",{className:"material-icons"},"home"),r.a.createElement("p",null,"Overview"))),r.a.createElement(p.b,{to:"/users"},r.a.createElement("div",{className:"Users"===t?"nav-link active":"nav-link"},r.a.createElement("span",{className:"material-icons"},"groups"),r.a.createElement("p",null,"Users"))),r.a.createElement(p.b,{to:"/trainings"},r.a.createElement("div",{className:"Trainings"===t?"nav-link active":"nav-link"},r.a.createElement("span",{className:"material-icons"},"co_present"),r.a.createElement("p",null,"Trainings"))),r.a.createElement(p.b,{to:"/projects"},r.a.createElement("div",{className:"Projects"===t?"nav-link active":"nav-link"},r.a.createElement("span",{className:"material-icons"},"assignment"),r.a.createElement("p",null,"Projects"))),r.a.createElement(p.b,{to:"/updates"},r.a.createElement("div",{className:"Updates"===t?"nav-link active":"nav-link"},r.a.createElement("span",{className:"material-icons"},"menu_book"),r.a.createElement("p",null,"Updates"))),r.a.createElement(p.b,{to:"/statesinfo"},r.a.createElement("div",{className:"StatesInfo"===t?"nav-link active":"nav-link"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})),r.a.createElement("p",null,"States info"))),r.a.createElement(p.b,{to:"/trainings/chat"},r.a.createElement("div",{className:"TrainingChat"===t?"nav-link active":"nav-link"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-comments-o","aria-hidden":"true"})),r.a.createElement("p",null,"Chat"))))))};t.a=function(e){var t=e.children,n=e.title,a=void 0===n?"Dashboard":n;return r.a.createElement("section",{className:"d-flex mt-55 align-items-stretch h-100"},r.a.createElement("div",{className:"w-10 h-100 position-fixed d-none d-lg-block"},r.a.createElement(m,{title:a})),r.a.createElement("div",{className:"w-90 ml-150 mt-2 full_height bg-grey"},r.a.createElement(l,null),r.a.createElement("div",{className:"py-5 px-5"},t)))}},121:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"b",function(){return m});var a=n(86),r=n.n(a),c=n(87),s=n(1),u=n(97),o=n(95),i=n(96),l=function(e){return function(t){localStorage.setItem("user",JSON.stringify(e)),t({type:s.p,payload:e})}},p=function(e,t){return function(){var n=Object(c.a)(r.a.mark(function n(a){var c;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(Object(i.a)()),n.prev=1,n.next=4,u.a.loginAccount({email:e,password:t});case 4:if(!(c=n.sent)){n.next=9;break}return a(Object(i.b)()),localStorage.setItem("token",c.data.data.api_token),n.abrupt("return",a(l(c.data.data)));case 9:n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),a(Object(i.b)()),"Network Error"===n.t0.message||500===n.t0.response.status?(a(Object(o.b)("Network Error")),a(Object(o.a)())):(a(Object(o.b)(n.t0.response.data.error.message)),a(Object(o.a)()));case 15:case"end":return n.stop()}},n,null,[[1,11]])}));return function(e){return n.apply(this,arguments)}}()},m=function(){return function(e){e({type:s.o})}}},131:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAUCAYAAADiOEEgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUzSURBVHgB7VlNUuNWEO4WMjCTjecEo9mkgGw8i1Rhsog4QcgaksEnGDgBnhNgTmAoYA05wTgboCqLcTZAKgs0J4g3yVjGqNP99OMn+cm2bIpUqugaypbcX3fre69/ngahgCw1Vx2wwZHvlvXQud78rQ1PKCun31aCYK6sLvrg3dauPPgPZel0dRsJm/H1zdYljtK3oIjYUEfEj/JHNLcPTywE9lnsn2PZhv+ZFCP7WWaSZ7KfUJ7JfkKxTTelEVrz4Mr3IOBG9NNVCwqKNDOAuQoF2CGgThEbOhatvle0ETtNt/zC9l20qKz896k9aTOdBTtOUmQLyVhS3dUlCu8h99fl46pHFn4Q5scJ675nTJ3x4dSA8g8TG7ebF4d52K+PqxtzAPuMdWIskR1i+7QOY2QQv+/KNRGG/kvs/2StTffBj3nEqQ1m4z6hv1EUO6kkZUR2k1XCT/zVHdJCcJCoiRZ+P8rYynH1jHUbvE7lPBsrp2tNE3bpdG1vDkHwjhFr8xRCBrsxXohmHWP8SqjCxN0tnXz3Lg/L/G4UxRYRK3ZGgX02RBKSx4vbGfg0EBHJ8kl1PxusYFN4MUG0/Q3r6vfCeZXqWWzKPxNuXETQiE4vVJsz6pA/W2m7QUOdFx4BW1QU2eysnnKGcPDlfuHVzebVm+uty1dM0DoT7eUZCWss7CQ3WFcwgjXhuRjtLB2vuom7APcyJncFF/tn/V0YIdn4KaAaHzDeXm9dyOc63dMbzX85KpUzY4tKXEaS8kC8ojeblzterZXsSGluo2omZ0WaaNbVG2KM13c5lySVBYr09K7a5Yds6Pb/4GtesA+QL6n4b3++OtR/lFrLTbqm3XKlET4CtpDYKi30h6XgyKQoTrlUtMBc018ncMTWbe3SM+KPq0es+17dCOAHkGyw2DcN9LJEx7LYX2z4JT+bAVDhB/fRd+Jri+srx/lx2AKWQXP0cv5vh7HetFj+KPyqYmj0k3ceecq8uz4jGo7/qBFGwedcPI+AMpmkJAAnuTWiVLU505ZPq162b3ShW9ZtchiVPO8pt/yOZRYsTCFDZBPaDuSsGhP92miFsBMHxOUhNxB+MGdgKyopFnjJs/CiSYrqJSztJ79BD3xAh5A64/Qy/M2MnURsSe+Vk2on6fSBSvPzrGLUhV2jFaJfOdJKFMg71m1kZ9IIn9THAFAt6EPPatslLUXtrtT/etaFzO9gkKH4Ac+559RgQpkFO07i2h5vHtUgA6IDTceV0Sw1HnETi2ZYo3B50BenLLrRhJLGG3rDn7ULJh2TTOKav8d1c0e3r4jm+T3Pvx4/x7KdxasYeI5fOVlrZke3WbCjRGJ+WfLvXpT8v/hsoXqNKljSZHr8w/CcHdVQY/pS62bral0z3kiaXwIPS4XB7oFMPMnDyGJgejHDlOY5nQ8ypvlaphOecupx/L7tf0ovJseO6k9suLoNXtBafJKdBZv3Pjs6yd6l4uURUu1saT6A/fXsAUSRrBE99LsmC/2FOmQOARLkMFHU+tJTuomo0TAz2ikcaQcZJiDPv8SvRlO9wYbkuXxvI0UW4e/d3vz5tFjoBS2YQqz5h3JyXJeXPcE9vYUMYaFv3mU87HPK/ZJnTIJWhwAhzTBVRETtSjaYGqDsUm5ONfNEQmpOJ8xfbDUPK9LIOLqqZ+DYuv15N+u/CHaS9yOhjm6LjoRfNClHR9iKvPniFtae5r+/VGng+XQaGzo26EGr6AsgaUyLdrdiWXFWPrT/6X3l5U45j4QFw3PIZ3zA+xdSJDVt2cVnQQAAAABJRU5ErkJggg=="},138:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.tabs,n=e.currentTab,a=void 0===n?0:n,c=e.setCurrentTab;return r.a.createElement("div",{className:"tab-nav-bar row"},t.map(function(e,t){return r.a.createElement("div",{key:t,onClick:function(){return c(t)},className:a===t?"col-sm text-center pointer active":"col-sm pointer text-center"},e.name)}))}},193:function(e,t,n){"use strict";n.d(t,"d",function(){return m}),n.d(t,"c",function(){return f}),n.d(t,"a",function(){return d}),n.d(t,"e",function(){return b}),n.d(t,"b",function(){return v});var a=n(86),r=n.n(a),c=n(87),s=n(107),u=n.n(s),o=n(1),i=n(97),l=n(95),p=n(96),m=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(p.a)()),e.prev=1,e.next=4,i.a.fetchTrainings();case 4:if(!(n=e.sent)){e.next=8;break}return t(Object(p.b)()),e.abrupt("return",t({type:o.m,payload:n.data.data}));case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t(Object(p.b)()),"Network Error"===e.t0.message||500===e.t0.response.status?(t(Object(l.b)("Network Error")),t(Object(l.a)())):(t(Object(l.b)(e.t0.response.data.error.message)),t(Object(l.a)()));case 14:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(p.a)()),t.prev=1,t.next=4,i.a.fetchTraining(e);case 4:if(!(a=t.sent)){t.next=8;break}return n(Object(p.b)()),t.abrupt("return",n({type:o.l,payload:a.data.data}));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),n(Object(p.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(n(Object(l.b)("Network Error")),n(Object(l.a)())):(n(Object(l.b)(t.t0.response.data.error.message)),n(Object(l.a)()));case 14:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a,c,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n(Object(p.a)()),t.prev=1,(a=new FormData).append("title",e.title),a.append("overview",e.overview),a.append("live_video",e.live_video),a.append("start_time",u()(e.start_time).format("YYYY-MM-DD HH:mm:ss")),a.append("attendance_time",u()(e.attandance_time).format("YYYY-MM-DD HH:mm:ss")),a.append("tutor",e.tutor),c=0;c<e.myFiles.length;c++)a.append("resources[".concat(c,"][attachment]"),e.myFiles[c]);return t.next=12,i.a.addTraining(a);case 12:(s=t.sent)&&(n(Object(p.b)()),n(Object(l.c)(s.data.message)),n(Object(l.a)())),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),n(Object(p.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(n(Object(l.b)("Network Error")),n(Object(l.a)())):(n(Object(l.b)(t.t0.response.data.error.message)),n(Object(l.a)()));case 20:case"end":return t.stop()}},t,null,[[1,16]])}));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(c.a)(r.a.mark(function n(a){var c,s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(Object(p.a)()),n.prev=1,(c=new FormData).append("title",e.title),c.append("overview",e.overview),c.append("live_video",e.live_video),c.append("start_time",u()(e.start_time).format("YYYY-MM-DD HH:mm:ss")),c.append("attendance_time",u()(e.attandance_time).format("YYYY-MM-DD HH:mm:ss")),c.append("tutor",e.tutor),c.append("status",e.status),n.next=12,i.a.updateTraining(c,t);case 12:(s=n.sent)&&(a(Object(p.b)()),a(Object(l.c)(s.data.message)),a(Object(l.a)())),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(1),a(Object(p.b)()),"Network Error"===n.t0.message||500===n.t0.response.status?(a(Object(l.b)("Network Error")),a(Object(l.a)())):(a(Object(l.b)(n.t0.response.data.error.message)),a(Object(l.a)()));case 20:case"end":return n.stop()}},n,null,[[1,16]])}));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(p.a)()),t.prev=1,t.next=4,i.a.deleteTraining(e);case 4:(a=t.sent)&&(n(Object(p.b)()),n(Object(l.c)(a.data.message)),n(m()),n(Object(l.a)())),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),n(Object(p.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(n(Object(l.b)("Network Error")),n(Object(l.a)())):(n(Object(l.b)(t.t0.response.data.error.message)),n(Object(l.a)()));case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()}},195:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l});var a=n(86),r=n.n(a),c=n(87),s=n(97),u=n(95),o=n(96),i=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a,c,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n(Object(o.a)()),t.prev=1,(a=new FormData).append("entity_id",e.entity_id),a.append("entity_type",e.entity_type),c=0;c<e.myFiles.length;c++)a.append("files[".concat(c,"][attachment]"),e.myFiles[c]);return t.next=8,s.a.addResources(a);case 8:(i=t.sent)&&(n(Object(o.b)()),n(Object(u.c)(i.data.message)),n(Object(u.a)())),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),n(Object(o.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(n(Object(u.b)("Network Error")),n(Object(u.a)())):(n(Object(u.b)(t.t0.response.data.error.message)),n(Object(u.a)()));case 16:case"end":return t.stop()}},t,null,[[1,12]])}));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(o.a)()),t.prev=1,t.next=4,s.a.deleteResource(e);case 4:(a=t.sent)&&(n(Object(o.b)()),n(Object(u.c)(a.data.message)),n(Object(u.a)())),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),n(Object(o.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(n(Object(u.b)("Network Error")),n(Object(u.a)())):(n(Object(u.b)(t.t0.response.data.error.message)),n(Object(u.a)()));case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()}},550:function(e,t,n){"use strict";n.r(t);var a=n(86),r=n.n(a),c=n(87),s=n(28),u=n(2),o=n(120),i=n(89),l=n(0),p=n.n(l),m=n(107),f=n.n(m),d=n(105),b=n.n(d),v=n(3),h=n(100),g=n(138),x=function(e){var t=e.setCurrentTab,n=e.handleChange,a=e.handleUpdate,r=e.loading,c=e.training,s=e.data;return p.a.createElement("div",null,p.a.createElement("form",null,p.a.createElement("div",{className:"mb-4 input-family"},p.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"label"},"Title of Training"),p.a.createElement("input",{type:"text",className:"form-control",name:"title",onChange:n,value:c.title})),p.a.createElement("div",{className:"mb-4 input-family"},p.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"name of Tutor"),p.a.createElement("input",{type:"text",className:"form-control",name:"tutor",onChange:n,value:c.tutor})),p.a.createElement("div",{className:"mb-4 input-family"},p.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Overview"),p.a.createElement("textarea",{type:"text",name:"overview",style:{height:200},className:"form-control",onChange:n,value:c.overview})),p.a.createElement("div",{className:"mb-4 input-family"},p.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"URL to Video"),p.a.createElement("input",{type:"text",name:"live_video",className:"form-control",onChange:n,value:c.live_video})),p.a.createElement("div",{className:"mb-4 input-family"},p.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Start Time"),p.a.createElement("input",{type:"datetime-local",name:"start_time",className:"form-control",onChange:n,value:c.start_time})),p.a.createElement("div",{className:"mb-4 input-family"},p.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Attendance Time"),p.a.createElement("input",{type:"datetime-local",name:"attandance_time",className:"form-control",onChange:n,value:c.attandance_time})),s&&p.a.createElement("div",{className:"mb-4 input-family"},p.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Training Status"),p.a.createElement("select",{name:"status",onChange:n,className:"form-select",style:{height:60},"aria-label":"Default select example"},p.a.createElement("option",{value:0},"Pending"),p.a.createElement("option",{value:1},"Approved"),p.a.createElement("option",{value:3},"Started"),p.a.createElement("option",{value:4},"Attendance Opened"),p.a.createElement("option",{value:5},"Closed")))),p.a.createElement("div",{className:"d-flex justify-content-end"},s?p.a.createElement("button",{onClick:a,className:"btn bg-green text-white px-4 py-2 float-end mt-5"},r?"Loading...":"Update Training"):p.a.createElement("button",{onClick:function(){return t(1)},style:{marginTop:-10},className:"btn bg-green text-white px-5 py-2 fw-bold"},"Next")))},j=function(e){var t=e.getRootProps,n=e.getInputProps,a=e.removeFile,r=e.myFiles,c=e.handleSubmit,s=e.loading,u=e.data,o=e.resourceData,i=e.addResourcesToTraining,l=e.deleteAProjectResource,m=r.map(function(e){return p.a.createElement("div",{key:e.path,className:"flex-between py-2"},p.a.createElement("p",{className:"fw-bold"},e.path," - ",e.size," bytes"),p.a.createElement("button",{onClick:a(e),style:{border:"1px solid #D5D8DF",fontSize:12},className:"btn"},p.a.createElement("i",{className:"fa fa-close","aria-hidden":"true"})))});return p.a.createElement("div",null,p.a.createElement("div",t({className:"dropzone upload-file-container"}),p.a.createElement("input",n()),p.a.createElement("div",{className:"pointer d-flex flex-column align-items-center"},p.a.createElement("i",{className:"fa fa-upload","aria-hidden":"true"}),p.a.createElement("p",{className:"text-center mt-4"},"Drag and drop a file, or Browse"))),p.a.createElement("div",{className:"mt-3"},m,u&&o.resources.map(function(e){return p.a.createElement("div",{key:e.id,className:"flex-between py-2"},p.a.createElement("p",{className:"fw-bold"},e.filename),p.a.createElement("button",{onClick:function(){return l(e.id)},style:{border:"1px solid #D5D8DF",fontSize:12},className:"btn"},p.a.createElement("i",{className:"fa fa-close","aria-hidden":"true"})))})),u?p.a.createElement("button",{onClick:i,className:"btn bg-green text-white px-4 py-2 float-end mt-5"},s?"Loading...":"Ok, Update Training Resources"):p.a.createElement("button",{onClick:c,className:"btn bg-green text-white px-4 py-2 float-end mt-5"},s?"Loading...":"Ok, Publish Training"))},w=n(12),O=n(27),E=n(193),y=n(195),k=n(284);t.default=function(e){var t=e.location,n=t.state?t.state.training:null,a=Object(v.g)(),m=Object(l.useState)(0),d=Object(i.a)(m,2),N=d[0],A=d[1],T=Object(w.c)(),P=Object(O.useToasts)().addToast;Object(l.useEffect)(function(){t.state&&T(Object(E.c)(t.state.training.id))},[T,t]);var C=Object(w.d)(function(e){return e.trainingsReducer}),U=C.training?C.training:null,D=Object(l.useState)({title:n?n.title:"",overview:n?n.overview:"",live_video:n?n.live_video:"",start_time:n?f()(n.start_time).format("YYYY-MM-DDTHH:mm"):"",tutor:n?n.tutor:"",attandance_time:n?f()(n.attendance_time).format("YYYY-MM-DDTHH:mm"):"",status:n?n.status:""}),Y=Object(i.a)(D,2),F=Y[0],S=Y[1],R=Object(l.useState)([]),H=Object(i.a)(R,2),J=H[0],_=H[1],M=Object(l.useCallback)(function(e){_([].concat(Object(o.a)(J),Object(o.a)(e)))},[J]),B=Object(k.a)({onDrop:M}),K=B.getRootProps,z=B.getInputProps,L=Object(w.d)(function(e){return e.alert}),G=Object(w.d)(function(e){return e.loadingReducer});Object(l.useEffect)(function(){L.message&&(P(L.message,{appearance:"error"}),b()({title:"Error!",text:L.message,icon:"error",button:"close!"})),L.success&&(P(L.success,{appearance:"success"}),b()({title:"Success!",text:L.success,icon:"success",button:"close!"}),a.push("/trainings"))},[L.message,L.success,P,a,n]);var Q=function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T(Object(E.a)(Object(u.a)({},F,{myFiles:J})));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"closed"===F.status?F.status=4:"pending"===F.status?F.status=0:"approved"===F.status?F.status=1:"started"===F.status?F.status=2:"attendanceOpened"===F.status&&(F.status=3),e.next=4,T(Object(E.e)(Object(u.a)({},F),n.id));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return p.a.createElement("div",null,p.a.createElement(h.a,{title:"Trainings"},p.a.createElement("section",{className:"trainings-section"},p.a.createElement("div",null,p.a.createElement("h4",null,p.a.createElement("i",{onClick:function(){return a.push("/trainings")},className:"fa fa-angle-left fw-bold pointer","aria-hidden":"true"})," "),p.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},p.a.createElement("h5",{className:"fw-bold mt-3"},n?"Update Training":"Create New Training")),p.a.createElement("div",{className:"mt-5 px-5 az"},p.a.createElement(g.a,{tabs:[{name:"Overview"},{name:"Resources"}],setCurrentTab:A,currentTab:N}),0===N?p.a.createElement(x,{handleChange:function(e){S(Object(u.a)({},F,Object(s.a)({},e.target.name,e.target.value)))},loading:G.loading,handleUpdate:X,setCurrentTab:A,training:F,data:n||null}):p.a.createElement(j,{addResourcesToTraining:function(){T(Object(y.a)({myFiles:J,entity_id:t.state.training.id,entity_type:"training"}))},resourceData:U,getRootProps:K,getInputProps:z,myFiles:J,removeFile:function(e){return function(){var t=Object(o.a)(J);t.splice(t.indexOf(e),1),_(t)}},loading:G.loading,handleSubmit:Q,handleUpdate:X,deleteAProjectResource:function(e){b()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t?(T(Object(y.b)(e)),b()("Operation canceled!")):b()("Operation canceled!")})},data:n||null}))))))}},95:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var a=n(1),r=function(e){return function(t){t({type:a.r,message:e})}},c=function(e){return function(t){t({type:a.b,message:e})}},s=function(){return function(e){e({type:a.a})}}},96:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c});var a=n(1),r=function(){return function(e){e({type:a.n})}},c=function(){return function(e){e({type:a.q})}}},97:function(e,t,n){"use strict";var a=n(86),r=n.n(a),c=n(87),s=n(29),u=n(30),o=n(141),i=n.n(o);i.a.defaults.baseURL="https://api.dodeelcds.com.ng";var l=i.a.create();l.interceptors.request.use(function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("token"))&&(t.headers.Authorization="Bearer "+n),e.abrupt("return",t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),function(e){return Promise.reject(e)});var p=l,m=new(function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"loginAccount",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchAuthUser",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.get("/auth/profile"));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchTrainings",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/trainings?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchTraining",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/trainings/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchProjects",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/projects?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchJobs",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/jobs?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchNews",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/news?order=desc");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchProspects",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n,a,c){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return e.next=3,p.get("/prospects?&search=".concat(a,"&order=desc"));case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,p.get("/prospects?page=".concat(void 0===t?1:t,"&per_page=").concat(void 0===n?15:n,"&status=").concat(c||null,"&order=desc"));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"fetchCM",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n,a){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return e.next=3,p.get("/users?&search=".concat(a,"&order=desc"));case 3:return e.abrupt("return",e.sent);case 6:return e.next=8,p.get("/users?page=".concat(void 0===t?1:t,"&per_page=").concat(void 0===n?15:n,"&order=desc"));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"approvePCMs",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/prospects",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getSingleUser",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/users/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"addUser",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/users",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"addTraining",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/trainings",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"addNews",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/news",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateNews",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/news/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"addJob",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/jobs",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"toggleActiveUser",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/users/".concat(t.id),{status:t.status});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteTraining",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/trainings/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteProject",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/projects/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteNews",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/news/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteJob",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/jobs/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateJob",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/jobs/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateTraining",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/trainings/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchProject",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/projects/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateProject",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/projects/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchStateExcos",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/states/".concat(t,"/members"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"postStateExcos",value:function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state_code,e.next=3,p.post("/states/".concat(n,"/members"),t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"editStateExcos",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/state-members/".concat(n,"?_method=PATCH"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"verifyABusiness",value:function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.patch("/businesses/".concat(n),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"createAnnoucement",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/announcements",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchAnnoucements",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/announcements");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"addResources",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/resources",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteResource",value:function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/resources/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}());t.a=m}}]);
//# sourceMappingURL=10.c1a1e097.chunk.js.map