(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{125:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=[{state_code:"AB",state_name:"ABIA",other_name:""},{state_code:"AD",state_name:"ADAMAWA",other_name:""},{state_code:"AK",state_name:"AKWA IBOM",other_name:""},{state_code:"AN",state_name:"ANAMBRA",other_name:""},{state_code:"BA",state_name:"BAUCHI",other_name:""},{state_code:"BY",state_name:"BAYELSA",other_name:""},{state_code:"BN",state_name:"BENUE",other_name:""},{state_code:"BO",state_name:"BORNO",other_name:""},{state_code:"CR",state_name:"CROSS RIVER",other_name:""},{state_code:"DT",state_name:"DELTA",other_name:""},{state_code:"EB",state_name:"EBONYI",other_name:""},{state_code:"ED",state_name:"EDO",other_name:""},{state_code:"EK",state_name:"EKITI",other_name:""},{state_code:"EN",state_name:"ENUGU",other_name:""},{state_code:"FCT",state_name:"FCT",other_name:""},{state_code:"GM",state_name:"GOMBE",other_name:""},{state_code:"IM",state_name:"IMO",other_name:""},{state_code:"JG",state_name:"JIGAWA",other_name:""},{state_code:"KD",state_name:"KADUNA",other_name:""},{state_code:"KN",state_name:"KANO",other_name:""},{state_code:"KT",state_name:"KATSINA",other_name:""},{state_code:"KB",state_name:"KEBBI",other_name:""},{state_code:"KG",state_name:"KOGI",other_name:""},{state_code:"KW",state_name:"KWARA",other_name:""},{state_code:"LA",state_name:"LAGOS",other_name:""},{state_code:"NW",state_name:"NASARAWA",other_name:""},{state_code:"NG",state_name:"NIGER",other_name:""},{state_code:"OG",state_name:"OGUN",other_name:""},{state_code:"OD",state_name:"ONDO",other_name:""},{state_code:"OS",state_name:"OSUN",other_name:""},{state_code:"OY",state_name:"OYO",other_name:""},{state_code:"PL",state_name:"PLATEAU",other_name:""},{state_code:"RV",state_name:"RIVERS",other_name:""},{state_code:"SO",state_name:"SOKOTO",other_name:""},{state_code:"TR",state_name:"TARABA",other_name:""},{state_code:"YB",state_name:"YOBE",other_name:""},{state_code:"ZF",state_name:"ZAMFARA",other_name:""}];function r(e,t){return new Array(t-e+1).fill(void 0).map(function(t,a){return a+e})}},137:function(e,t,a){"use strict";a.d(t,"d",function(){return l}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return b}),a.d(t,"e",function(){return p}),a.d(t,"a",function(){return d}),a.d(t,"f",function(){return _}),a.d(t,"g",function(){return f});var n=a(86),r=a.n(n),c=a(87),s=a(1),o=a(97),u=a(95),m=a(96),l=function(e,t,a){return function(){var n=Object(c.a)(r.a.mark(function n(c){var l;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c(Object(m.a)()),n.prev=1,n.next=4,o.a.fetchProspects(e,t,a);case 4:if(!(l=n.sent)){n.next=8;break}return c(Object(m.b)()),n.abrupt("return",c({type:s.j,payload:l.data.data}));case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),c(Object(m.b)()),"Network Error"===n.t0.message||500===n.t0.response.status||500===n.t0.response.status?(c(Object(u.b)("Network Error")),c(Object(u.a)())):(c(Object(u.b)(n.t0.response.data.error.message)),c(Object(u.a)()));case 14:case"end":return n.stop()}},n,null,[[1,10]])}));return function(e){return n.apply(this,arguments)}}()},i=function(e,t,a){return function(){var n=Object(c.a)(r.a.mark(function n(c){var l;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c(Object(m.a)()),n.prev=1,n.next=4,o.a.fetchCM(e,t,a);case 4:if(!(l=n.sent)){n.next=8;break}return c(Object(m.b)()),n.abrupt("return",c({type:s.d,payload:l.data.data}));case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),c(Object(m.b)()),"Network Error"===n.t0.message||500===n.t0.response.status?(c(Object(u.b)("Network Error")),c(Object(u.a)())):(c(Object(u.b)(n.t0.response.data.error.message)),c(Object(u.a)()));case 14:case"end":return n.stop()}},n,null,[[1,10]])}));return function(e){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n){var c;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(Object(m.a)()),a.prev=1,a.next=4,o.a.approvePCMs({ids:e,status:t});case 4:(c=a.sent)&&(n(Object(m.b)()),n(Object(u.c)(c.data.message)),n(Object(u.a)()),n(l())),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),n(Object(m.b)()),"Network Error"===a.t0.message||500===a.t0.response.status?(n(Object(u.b)("Network Error")),n(Object(u.a)())):(n(Object(u.b)(a.t0.response.data.error.message)),n(Object(u.a)()));case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(m.a)()),t.prev=1,t.next=4,o.a.getSingleUser(e);case 4:if(!(n=t.sent)){t.next=8;break}return a(Object(m.b)()),t.abrupt("return",a({type:s.k,payload:n.data.data}));case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),a(Object(m.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(a(Object(u.b)("Network Error")),a(Object(u.a)())):(a(Object(u.b)(t.t0.response.data.error.message)),a(Object(u.a)()));case 14:case"end":return t.stop()}},t,null,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(m.a)()),t.prev=1,(n=new FormData).append("name",e.name),n.append("email",e.email),n.append("deployed_state",e.deployed_state),n.append("nysc_state_code",e.nysc_state_code),n.append("phone_number",e.phone_number),n.append("nysc_call_up_number",e.nysc_call_up_number),n.append("photo",e.photo),t.next=12,o.a.addUser(n);case 12:(c=t.sent)&&(a(Object(m.b)()),a(Object(u.c)(c.data.message)),a(Object(u.a)())),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),a(Object(m.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(a(Object(u.b)("Network Error")),a(Object(u.a)())):(a(Object(u.b)(t.t0.response.data.error.message)),a(Object(u.a)()));case 20:case"end":return t.stop()}},t,null,[[1,16]])}));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(Object(m.a)()),t.prev=1,t.next=4,o.a.toggleActiveUser(e);case 4:(n=t.sent)&&(a(Object(m.b)()),a(Object(u.c)(n.data.message)),a(p(e.id)),a(Object(u.a)())),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),a(Object(m.b)()),"Network Error"===t.t0.message||500===t.t0.response.status?(a(Object(u.b)("Network Error")),a(Object(u.a)())):(a(Object(u.b)(t.t0.response.data.error.message)),a(Object(u.a)()));case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n){var c;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(Object(m.a)()),a.prev=1,a.next=4,o.a.verifyABusiness({status:e.status},t);case 4:(c=a.sent)&&(n(Object(m.b)()),n(Object(u.c)(c.data.message)),n(p(e.userId)),n(Object(u.a)())),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),n(Object(m.b)()),"Network Error"===a.t0.message||500===a.t0.response.status?(n(Object(u.b)("Network Error")),n(Object(u.a)())):(n(Object(u.b)(a.t0.response.data.error.message)),n(Object(u.a)()));case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()}},537:function(e,t,a){"use strict";a.r(t);var n=a(86),r=a.n(n),c=a(87),s=a(28),o=a(2),u=a(89),m=a(0),l=a.n(m),i=a(105),b=a.n(i),p=a(3),d=a(100),_=a(12),f=a(27),O=a(137),h=a(125);t.default=function(){var e=Object(_.c)(),t=Object(p.g)(),a=Object(f.useToasts)().addToast,n=Object(_.d)(function(e){return e.alert}),i=Object(_.d)(function(e){return e.loadingReducer}),j=Object(m.useState)({name:"",email:"",deployed_state:"AB",nysc_state_code:"",phone_number:"",nysc_call_up_number:""}),v=Object(u.a)(j,2),E=v[0],y=v[1],N=Object(m.useState)(""),g=Object(u.a)(N,2),A=g[0],x=g[1],w=Object(m.useState)(""),k=Object(u.a)(w,2),I=k[0],S=k[1],B=Object(m.useRef)(null);Object(m.useEffect)(function(){n.message&&(a(n.message,{appearance:"error"}),b()({title:"Error!",text:n.message,icon:"error",button:"close!"})),n.success&&(a(n.success,{appearance:"success"}),b()({title:"Success!",text:n.success,icon:"success",button:"close!"}))},[n.message,n.success,a]);var R=function(e){y(Object(o.a)({},E,Object(s.a)({},e.target.name,e.target.value)))},C=function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c,s,o,u,m;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=E.name,c=E.email,s=E.deployed_state,o=E.nysc_state_code,u=E.phone_number,m=E.nysc_call_up_number,n||c||s||o||u||m){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,e(Object(O.a)({name:n,email:c,deployed_state:s,nysc_state_code:o,phone_number:u,nysc_call_up_number:m,photo:A}));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement(d.a,{title:"Users"},l.a.createElement("section",{className:"add-user-section"},l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("i",{onClick:function(){return t.push("/users")},className:"fa fa-angle-left fw-bold pointer","aria-hidden":"true"})," "),l.a.createElement("div",{className:"form-outer-container"},l.a.createElement("div",{className:"header d-flex"},l.a.createElement("div",{className:"circle-big mr-2"},l.a.createElement("img",{src:I||"https://cdn.truelancer.com/upload-full/701651-vector-cartoon-portrait-avatar-illustration-fanart.jpg",width:"100%",height:"100%",style:{borderRadius:"50%"},alt:"Avatar"})),l.a.createElement("div",null,l.a.createElement("input",{style:{display:"none"},ref:B,onChange:function(e){var t=e.target.files;t&&t.length&&(x(t[0]),S(URL.createObjectURL(t[0])))},type:"file"}),l.a.createElement("button",{onClick:function(){B.current.click()},className:"btn btn-outline border-green text-green mt-2 fw-bold"},"Upload Avatar"),l.a.createElement("p",{className:"mt-2"},"Recommended dimensions: 200x200, maximum file size: 2MB"))),l.a.createElement("div",{className:"form-container"},l.a.createElement("form",null,l.a.createElement("div",{className:"mb-4 input-family"},l.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"label"},"Full name"),l.a.createElement("input",{name:"name",onChange:R,type:"text",className:"form-control"})),l.a.createElement("div",{className:"mb-4 input-family"},l.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Email address"),l.a.createElement("input",{name:"email",onChange:R,type:"text",className:"form-control"})),l.a.createElement("div",{className:"mb-4 input-family"},l.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"State of deployment"),l.a.createElement("select",{name:"deployed_state",onChange:R,className:"form-select",style:{height:60},"aria-label":"Default select example"},h.b.map(function(e){return l.a.createElement("option",{key:e.state_code,value:e.state_code},e.state_name)}))),l.a.createElement("div",{className:"mb-4 input-family"},l.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Call up number"),l.a.createElement("input",{name:"nysc_call_up_number",onChange:R,type:"text",className:"form-control"})),l.a.createElement("div",{className:"mb-4 input-family"},l.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"State code"),l.a.createElement("input",{name:"nysc_state_code",onChange:R,type:"text",className:"form-control"})),l.a.createElement("div",{className:"mb-4 input-family"},l.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Phone number"),l.a.createElement("input",{name:"phone_number",onChange:R,type:"text",className:"form-control"})))),l.a.createElement("button",{onClick:C,style:{marginTop:-10},className:"btn bg-green text-white px-5 py-2 fw-bold"},i.loading?"Loading...":"Save"))))))}},89:function(e,t,a){"use strict";var n=a(91);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(u){r=!0,c=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",function(){return r})},91:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(93);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},93:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",function(){return n})}}]);
//# sourceMappingURL=16.5703b55b.chunk.js.map