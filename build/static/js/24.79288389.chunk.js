(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{138:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"d",function(){return b}),a.d(t,"b",function(){return m}),a.d(t,"a",function(){return d});var r=a(86),n=a.n(r),c=a(87),s=a(1),o=a(96),l=a(93),u=a(94),i=function(){return function(){var e=Object(c.a)(n.a.mark(function e(t){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(u.a)()),e.prev=1,e.next=4,o.a.fetchProjects();case 4:if(!(a=e.sent)){e.next=8;break}return t(Object(u.b)()),e.abrupt("return",t({type:s.j,payload:a.data.data}));case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t(Object(u.b)()),"Network Error"===e.t0.message||500===e.t0.response.status?(t(Object(l.b)("Network Error")),t(Object(l.a)())):(t(Object(l.b)(e.t0.response.data.error.message)),t(Object(l.a)()));case 14:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},b=function(e,t){return function(){var a=Object(c.a)(n.a.mark(function a(r){var c;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r(Object(u.a)()),a.prev=1,a.next=4,o.a.updateProject(e,t);case 4:(c=a.sent)&&(r(Object(u.b)()),r(Object(l.c)(c.data.message)),r(Object(l.a)())),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),r(Object(u.b)()),"Network Error"===a.t0.message||500===a.t0.response.status?(r(Object(l.b)("Network Error")),r(Object(l.a)())):(r(Object(l.b)(a.t0.response.data.error.message)),r(Object(l.a)()));case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(n.a.mark(function t(a){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(u.a)()),t.prev=1,t.next=4,o.a.fetchProject(e);case 4:if(!(r=t.sent)){t.next=8;break}return a(Object(u.b)()),t.abrupt("return",a({type:s.i,payload:r.data.data}));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),a(Object(u.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(a(Object(l.b)("Network Error")),a(Object(l.a)())):(a(Object(l.b)(t.t0.response.data.error.message)),a(Object(l.a)()));case 14:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()},d=function(e,t,a){return function(){var r=Object(c.a)(n.a.mark(function r(c){var i;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c(Object(u.a)()),r.prev=1,r.next=4,o.a.fetchBusinesses(e,t,a);case 4:if(!(i=r.sent)){r.next=8;break}return c(Object(u.b)()),r.abrupt("return",c({type:s.d,payload:i.data.data}));case 8:r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),c(Object(u.b)()),"Network Error"===r.t0.message||500===r.t0.response.status?(c(Object(l.b)("Network Error")),c(Object(l.a)())):(c(Object(l.b)(r.t0.response.data.error.message)),c(Object(l.a)()));case 14:case"end":return r.stop()}},r,null,[[1,10]])}));return function(e){return r.apply(this,arguments)}}()}},540:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(103),s=a.n(c),o=a(100),l=a(3),u=a(12),i=a(27),b=a(138);t.default=function(){var e=Object(l.g)(),t=Object(u.c)(),a=Object(i.useToasts)().addToast,c=Object(u.d)(function(e){return e.alert}),m=Object(u.d)(function(e){return e.projectsReducer});Object(r.useEffect)(function(){t(Object(b.c)())},[t]),Object(r.useEffect)(function(){c.message&&(a(c.message,{appearance:"error"}),s()({title:"Error!",text:c.message,icon:"error",button:"close!"})),c.success&&(a(c.success,{appearance:"success"}),s()({title:"Success!",text:c.success,icon:"success",button:"close!"}))},[c.message,c.success,a]);return n.a.createElement("div",null,n.a.createElement(o.a,{title:"Projects"},n.a.createElement("section",{className:"trainings-section"},n.a.createElement("div",{className:"flex-between"},n.a.createElement("h5",{className:"fw-bold mb-3"},"Projects"),n.a.createElement("div",{onClick:function(){return e.push("/projects/create")},className:"d-flex flex-between pointer"},n.a.createElement("i",{className:"fa fa-plus-circle text-green mr-1","aria-hidden":"true"}),n.a.createElement("h5",{className:"fw-bold text-green"},"Create New"))),n.a.createElement("button",{onClick:function(){return e.push("/projects/onboardedbusiness")},className:"btn bg-green text-white"},"Onboarded Businesses"),n.a.createElement("div",{className:"w-100 mt-4"},n.a.createElement("div",{className:"d-flex align-items-center w-100"},n.a.createElement("div",{className:"search-bar-container"},n.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),n.a.createElement("input",{type:"text",className:"form-control flex-grow-1",placeholder:"Search"})),n.a.createElement("h6",{className:"px-5 text-green fw-bold"},"Filters ",n.a.createElement("i",{className:"fa fa-cog ml-1","aria-hidden":"true"})))),n.a.createElement("div",{className:"mt-4"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Date"),n.a.createElement("th",{scope:"col"},"Title"),n.a.createElement("th",{scope:"col"},"Overview"),n.a.createElement("th",{scope:"col"}))),n.a.createElement("tbody",null,m.projects.map(function(t){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,function(e){var t=new Date(e);return"".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear())}(t.created_at)),n.a.createElement("td",null,t.title),n.a.createElement("td",null,t.overview.slice(0,200),"......  "),n.a.createElement("td",null,n.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic outlined example"},n.a.createElement("button",{style:{borderColor:"#DFDFDF",backgroundColor:"#DFDFDF",borderWidth:1},onClick:function(){return e.push("/projects/create",{project:t})},type:"button",className:"btn"},"Edit"),n.a.createElement("button",{onClick:function(){return t.id,void s()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(e){s()("Operation canceled!")})},style:{borderColor:"#DFDFDF",borderWidth:1},type:"button",className:"btn btn-outline-white"},"Delete"))))}))),n.a.createElement("div",{className:"footer d-flex justify-content-end py-3"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("p",{className:"mr-3"},"Rows per page 10 ",n.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"})),n.a.createElement("p",{className:"mr-3"},"1-5 of 13 "),n.a.createElement("h5",{className:"mr-3 fw-bold"},n.a.createElement("i",{className:"fa fa-angle-left mr-2","aria-hidden":"true"})," ",n.a.createElement("i",{className:"fa fa-angle-right","aria-hidden":"true"}))))))))}}}]);
//# sourceMappingURL=24.79288389.chunk.js.map