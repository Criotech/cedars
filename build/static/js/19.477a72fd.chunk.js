(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(e,a,t){"use strict";t.d(a,"b",function(){return n}),t.d(a,"a",function(){return l});var n=[{state_code:"AB",state_name:"ABIA",other_name:""},{state_code:"AD",state_name:"ADAMAWA",other_name:""},{state_code:"AK",state_name:"AKWA IBOM",other_name:""},{state_code:"AN",state_name:"ANAMBRA",other_name:""},{state_code:"BA",state_name:"BAUCHI",other_name:""},{state_code:"BY",state_name:"BAYELSA",other_name:""},{state_code:"BN",state_name:"BENUE",other_name:""},{state_code:"BO",state_name:"BORNO",other_name:""},{state_code:"CR",state_name:"CROSS RIVER",other_name:""},{state_code:"DT",state_name:"DELTA",other_name:""},{state_code:"EB",state_name:"EBONYI",other_name:""},{state_code:"ED",state_name:"EDO",other_name:""},{state_code:"EK",state_name:"EKITI",other_name:""},{state_code:"EN",state_name:"ENUGU",other_name:""},{state_code:"FCT",state_name:"FCT",other_name:""},{state_code:"GM",state_name:"GOMBE",other_name:""},{state_code:"IM",state_name:"IMO",other_name:""},{state_code:"JG",state_name:"JIGAWA",other_name:""},{state_code:"KD",state_name:"KADUNA",other_name:""},{state_code:"KN",state_name:"KANO",other_name:""},{state_code:"KT",state_name:"KATSINA",other_name:""},{state_code:"KB",state_name:"KEBBI",other_name:""},{state_code:"KG",state_name:"KOGI",other_name:""},{state_code:"KW",state_name:"KWARA",other_name:""},{state_code:"LA",state_name:"LAGOS",other_name:""},{state_code:"NW",state_name:"NASARAWA",other_name:""},{state_code:"NG",state_name:"NIGER",other_name:""},{state_code:"OG",state_name:"OGUN",other_name:""},{state_code:"OD",state_name:"ONDO",other_name:""},{state_code:"OS",state_name:"OSUN",other_name:""},{state_code:"OY",state_name:"OYO",other_name:""},{state_code:"PL",state_name:"PLATEAU",other_name:""},{state_code:"RV",state_name:"RIVERS",other_name:""},{state_code:"SO",state_name:"SOKOTO",other_name:""},{state_code:"TR",state_name:"TARABA",other_name:""},{state_code:"YB",state_name:"YOBE",other_name:""},{state_code:"ZF",state_name:"ZAMFARA",other_name:""}];function l(e,a){return new Array(a-e+1).fill(void 0).map(function(a,t){return t+e})}},553:function(e,a,t){"use strict";t.r(a);var n=t(86),l=t.n(n),c=t(87),r=t(28),m=t(2),s=t(88),o=t(0),i=t.n(o),u=t(103),d=t.n(u),b=t(116),p=t(100),f=t(12),E=t(27),h=t(1),N=t(96),_=t(93),v=t(94),y=function(e){return function(){var a=Object(c.a)(l.a.mark(function a(t){var n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t(Object(v.a)()),a.prev=1,a.next=4,N.a.fetchStateExcos(e);case 4:if(!(n=a.sent)){a.next=8;break}return t(Object(v.b)()),a.abrupt("return",t({type:h.f,payload:n.data.data}));case 8:a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),t(Object(v.b)()),"Network Error"===a.t0.message?(t(Object(_.b)("Network Error")),t(Object(_.a)())):(t(Object(_.b)(a.t0.response.data.error.message)),t(Object(_.a)()));case 14:case"end":return a.stop()}},a,null,[[1,10]])}));return function(e){return a.apply(this,arguments)}}()},x=function(e){return function(){var a=Object(c.a)(l.a.mark(function a(t){var n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t(Object(v.a)()),a.prev=1,a.next=4,N.a.postStateExcos(e);case 4:(n=a.sent)&&(t(Object(v.b)()),t(Object(_.c)(n.data.message)),t(y(e.state_code)),t(Object(_.a)())),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),t(Object(v.b)()),"Network Error"===a.t0.message?(t(Object(_.b)("Network Error")),t(Object(_.a)())):(t(Object(_.b)(a.t0.response.data.error.message)),t(Object(_.a)()));case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}()},g=function(e,a){return function(){var t=Object(c.a)(l.a.mark(function t(n){var c;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(v.a)()),t.prev=1,t.next=4,N.a.editStateExcos(e,a);case 4:(c=t.sent)&&(n(Object(v.b)()),n(Object(_.c)(c.data.message)),n(y(e.state_code)),n(Object(_.a)())),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),n(Object(v.b)()),"Network Error"===t.t0.message?(n(Object(_.b)("Network Error")),n(Object(_.a)())):(n(Object(_.b)(t.t0.response.data.error.message)),n(Object(_.a)()));case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()};a.default=function(){var e=Object(f.c)(),a=Object(E.useToasts)().addToast,t=Object(f.d)(function(e){return e.alert}),n=Object(f.d)(function(e){return e.excosReducer}),u=Object(f.d)(function(e){return e.loadingReducer}),h=Object(o.useState)(!1),N=Object(s.a)(h,2),_=N[0],v=N[1],O=Object(o.useState)({stateCode:"ab"}),S=Object(s.a)(O,2),B=S[0],w=S[1],A=Object(o.useState)({name:"",email:"",phone_number:"",instagram:"",facebook:"",state_code:"",year:"",batch:"",type:"",position:""}),j=Object(s.a)(A,2),k=j[0],C=j[1],I=Object(o.useState)(""),D=Object(s.a)(I,2),F=D[0],M=D[1];Object(o.useEffect)(function(){e(y(B.stateCode))},[e,B.stateCode]),Object(o.useEffect)(function(){t.message&&(a(t.message,{appearance:"error"}),d()({title:"Error!",text:t.message,icon:"error",button:"close!"})),t.success&&(a(t.success,{appearance:"success"}),d()({title:"Success!",text:t.success,icon:"success",button:"close!"}))},[t.message,t.success,a]);var R,P=function(a){w(Object(m.a)({},B,Object(r.a)({},a.target.name,a.target.value))),e(y(B.stateCode))},G=function(e){C(Object(m.a)({},k,Object(r.a)({},e.target.name,e.target.value)))},K=function(){var a=Object(c.a)(l.a.mark(function a(t){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,e(x(Object(m.a)({},k)));case 3:C({name:"",email:"",phone_number:"",instagram:"",facebook:"",state_code:"",year:"",batch:"",type:"",position:""});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),T=function(e){C(e),M(e.id),v(!0)},L=function(){var a=Object(c.a)(l.a.mark(function a(t){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),"executive"===k.type?k.type="2":"community-manager"===k.type?k.type="1":"schedule-officer"===k.type&&(k.type="0"),"Batch A Stream1"===k.batch?k.batch="BatchAStream1":"Batch A Stream2"===k.batch?k.batch="BatchAStream2":"Batch B Stream1"===k.batch?k.batch="BatchBStream1":"Batch B Stream2"===k.batch?k.batch="BatchBStream2":"Batch B Stream3"===k.batch&&(k.batch="BatchBStream3"),a.next=5,e(g(Object(m.a)({},k),F));case 5:C({name:"",email:"",phone_number:"",instagram:"",facebook:"",state_code:"",year:"",batch:"",type:"",position:""});case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement(p.a,{title:"StatesInfo"},i.a.createElement("h5",{className:"fw-bold mb-3"},"State Information"),i.a.createElement("div",{className:"row container mt-5 pt-4"},i.a.createElement("div",{className:"mb-4  input-family col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"State of deployment"),i.a.createElement("select",{name:"stateCode",onChange:P,className:"form-select",style:{height:60},"aria-label":"Default select example"},b.b.map(function(e){return i.a.createElement("option",{key:e.state_code,value:e.state_code},e.state_name)}))),i.a.createElement("div",{className:"mb-4 input-family col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Year"),i.a.createElement("select",{name:"deployed_state",onChange:P,className:"form-select",style:{height:60},"aria-label":"Default select example"},Object(b.a)(2020,2040).map(function(e){return i.a.createElement("option",{key:e,value:e},e)}))),i.a.createElement("div",{className:"mb-4 input-family col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Batch"),i.a.createElement("select",{name:"deployed_state",onChange:P,className:"form-select",style:{height:60},"aria-label":"Default select example"},i.a.createElement("option",{value:"BatchAStream1"},"Batch A, Stream 1"),i.a.createElement("option",{value:"BatchAStream2"},"Batch A, Stream 2"),i.a.createElement("option",{value:"BatchBStream1"},"Batch B, Stream 1"),i.a.createElement("option",{value:"BatchBStream2"},"Batch B, Stream 2"),i.a.createElement("option",{value:"BatchCStream1"},"Batch C, Stream 1"),i.a.createElement("option",{value:"BatchCStream2"},"Batch C, Stream 2"))),i.a.createElement("div",{onClick:function(){v(!1),C({name:"",email:"",phone_number:"",instagram:"",facebook:"",state_code:"",year:"",batch:"",type:"",position:""})},className:"d-flex justify-content-end pointer","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},i.a.createElement("i",{className:"fa fa-plus-circle text-green mr-1","aria-hidden":"true"}),i.a.createElement("small",{className:"text-green"},"Create New")),i.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-lg"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-body p-5"},i.a.createElement("div",{className:"flex-between"},i.a.createElement("h5",{className:"fw-bold mb-3"},"Add New"),i.a.createElement("button",{style:{border:"1px solid #D5D8DF",fontSize:12},className:"btn","data-bs-dismiss":"modal"},i.a.createElement("i",{className:"fa fa-close","aria-hidden":"true"}))),i.a.createElement("div",{className:"mt-5"},i.a.createElement("form",null,i.a.createElement("div",{className:"mb-4 input-family"},i.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"label"},"Full Name"),i.a.createElement("input",{name:"name",value:k.name,onChange:G,type:"text",className:"form-control",id:"exampleInputtext1"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"mb-4 input-family"},i.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"label"},"Email Address"),i.a.createElement("input",{name:"email",value:k.email,onChange:G,type:"email",className:"form-control",id:"exampleInputtext1"}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"mb-4 input-family"},i.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"label"},"Phone number"),i.a.createElement("input",{name:"phone_number",value:k.phone_number,onChange:G,type:"text",className:"form-control",id:"exampleInputtext1"}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"mb-4 input-family"},i.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"label"},"Instagram Handle"),i.a.createElement("input",{name:"instagram",value:k.instagram,onChange:G,type:"text",className:"form-control",id:"exampleInputtext1"}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"mb-4 input-family"},i.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"label"},"Facebook Link"),i.a.createElement("input",{name:"facebook",value:k.facebook,onChange:G,type:"email",className:"form-control",id:"exampleInputtext1"})))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"mb-4  input-family col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"State of deployment"),i.a.createElement("select",{name:"state_code",value:k.state_code,onChange:G,className:"form-select",style:{height:60},"aria-label":"Default select example"},i.a.createElement("option",null,k.state_code?function(e){var a;return b.b.map(function(t){return t.state_code===e?a=t.state_name:a}),a}(k.state_code):"Selecet a state"),b.b.map(function(e){return i.a.createElement("option",{key:e.state_code,value:e.state_code},e.state_name)}))),i.a.createElement("div",{className:"mb-4 input-family col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Year"),i.a.createElement("select",{name:"year",value:k.year,onChange:G,className:"form-select",style:{height:60},"aria-label":"Default select example"},i.a.createElement("option",null,k.year?k.year:"Selecet a year"),Object(b.a)(2020,2040).map(function(e){return i.a.createElement("option",{key:e,value:e},e)}))),i.a.createElement("div",{className:"mb-4 input-family col-md-4"},i.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"State of deployment"),i.a.createElement("select",{name:"batch",value:k.batch,onChange:G,className:"form-select",style:{height:60},"aria-label":"Default select example"},i.a.createElement("option",null,k.batch?k.batch:"Selecet a batch"),i.a.createElement("option",{value:"BatchAStream1"},"Batch A, Stream 1"),i.a.createElement("option",{value:"BatchAStream2"},"Batch A, Stream 2"),i.a.createElement("option",{value:"BatchBStream1"},"Batch B, Stream 1"),i.a.createElement("option",{value:"BatchBStream2"},"Batch B, Stream 2"),i.a.createElement("option",{value:"BatchCStream1"},"Batch C, Stream 1"),i.a.createElement("option",{value:"BatchCStream2"},"Batch C, Stream 2")))),i.a.createElement("div",{className:"mb-4 input-family"},i.a.createElement("label",{htmlFor:"exampleInputtext1",className:"label"},"Exco Type"),i.a.createElement("select",{name:"type",value:k.type,onChange:G,className:"form-select",style:{height:60},"aria-label":"Default select example"},i.a.createElement("option",null,k.type?"0"===(R=k.type)?"Schedule Officer":"1"===R?"Community Manager":"2"===R?"Executive":R:"Selecet type"),i.a.createElement("option",{value:0},"Schedule Officer"),i.a.createElement("option",{value:1},"Community Manager"),i.a.createElement("option",{value:2},"Executive"))),i.a.createElement("small",null,"Select Position"),i.a.createElement("div",{className:"row mt-3"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"flex-between form-control"},i.a.createElement("small",null,"President"),i.a.createElement("input",{className:"form-check-input",type:"radio",name:"position",onChange:G,value:"President",id:"defaultCheck1"}))),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"flex-between form-control"},i.a.createElement("small",null,"V. President"),i.a.createElement("input",{className:"form-check-input",type:"radio",name:"position",onChange:G,value:"V. President",id:"defaultCheck1"}))),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"flex-between form-control"},i.a.createElement("small",null,"G. Secretary"),i.a.createElement("input",{className:"form-check-input",type:"radio",name:"position",onChange:G,value:"G. Secretary",id:"defaultCheck1"}))),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("div",{className:"flex-between form-control"},i.a.createElement("small",null,"PRO"),i.a.createElement("input",{className:"form-check-input",type:"radio",name:"position",onChange:G,value:"PRO",id:"defaultCheck1"}))))))),i.a.createElement("div",{className:"modal-footer"},_?i.a.createElement("button",{onClick:L,"data-bs-dismiss":"modal",type:"button",className:"btn bg-green text-white"},u.loading?"Loading...":"Update"):i.a.createElement("button",{onClick:K,"data-bs-dismiss":"modal",type:"button",className:"btn bg-green text-white"},u.loading?"Loading...":"save"))))),i.a.createElement("h5",{className:"fw-bold mb-3  mt-5"},"Executive"),!u.loading&&i.a.createElement("div",{className:"excos-list"},i.a.createElement("div",{className:"row"},n.excos.map(function(e){return i.a.createElement("div",{key:e.id,className:"col-md-6 mb-4 px-5"},i.a.createElement("small",{className:"text-green"},e.position),i.a.createElement("div",{className:"flex-between mt-1"},i.a.createElement("p",{className:"fw-bold text-grey"},e.name),i.a.createElement("button",{onClick:function(){return T(e)},className:"btn btn-outline-dark","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},i.a.createElement("small",null,"Edit Profile ",i.a.createElement("i",{className:"fa fa-edit","aria-hidden":"true"})))),i.a.createElement("div",{className:"mt-2 fw-bold"},i.a.createElement("p",{className:"text-grey"},i.a.createElement("span",{className:"mr-1"},e.email),"  ",e.phone_number)),i.a.createElement("div",{className:"mt-2 fw-bold text-grey"},i.a.createElement("p",null,i.a.createElement("span",{className:"mr-1"},"IG: ",e.instagram," ")," ",i.a.createElement("span",null,"Facebook: ",e.facebook))))}))),i.a.createElement("h5",{className:"fw-bold mb-3  mt-5"},"Schedule Officers"),!u.loading&&i.a.createElement("div",{className:"excos-list"},i.a.createElement("div",{className:"row"},n.scheduleOfficers.map(function(e){return i.a.createElement("div",{key:e.id,className:"col-md-6 mb-4 px-5"},i.a.createElement("small",{className:"text-green"},e.position),i.a.createElement("div",{className:"flex-between mt-1"},i.a.createElement("p",{className:"fw-bold text-grey"},e.name),i.a.createElement("button",{onClick:function(){return T(e)},className:"btn btn-outline-dark","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},i.a.createElement("small",null,"Edit Profile ",i.a.createElement("i",{className:"fa fa-edit","aria-hidden":"true"})))),i.a.createElement("div",{className:"mt-2 fw-bold"},i.a.createElement("p",{className:"text-grey"},i.a.createElement("span",{className:"mr-1"},e.email),"  ",e.phone_number)),i.a.createElement("div",{className:"mt-2 fw-bold text-grey"},i.a.createElement("p",null,i.a.createElement("span",{className:"mr-1"},"IG: ",e.instagram," ")," ",i.a.createElement("span",null,"Facebook: ",e.facebook))))}))),i.a.createElement("h5",{className:"fw-bold mb-3  mt-5"},"Community Managers"),!u.loading&&i.a.createElement("div",{className:"excos-list"},i.a.createElement("div",{className:"row"},n.communityManagers.map(function(e){return i.a.createElement("div",{key:e.id,className:"col-md-6 mb-4 px-5"},i.a.createElement("small",{className:"text-green"},e.position),i.a.createElement("div",{className:"flex-between mt-1"},i.a.createElement("p",{className:"fw-bold text-grey"},e.name),i.a.createElement("button",{onClick:function(){return T(e)},className:"btn btn-outline-dark","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},i.a.createElement("small",null,"Edit Profile ",i.a.createElement("i",{className:"fa fa-edit","aria-hidden":"true"})))),i.a.createElement("div",{className:"mt-2 fw-bold"},i.a.createElement("p",{className:"text-grey"},i.a.createElement("span",{className:"mr-1"},e.email),"  ",e.phone_number)),i.a.createElement("div",{className:"mt-2 fw-bold text-grey"},i.a.createElement("p",null,i.a.createElement("span",{className:"mr-1"},"IG: ",e.instagram," ")," ",i.a.createElement("span",null,"Facebook: ",e.facebook))))}))))))}},88:function(e,a,t){"use strict";var n=t(90);function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,l=!1,c=void 0;try{for(var r,m=e[Symbol.iterator]();!(n=(r=m.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(s){l=!0,c=s}finally{try{n||null==m.return||m.return()}finally{if(l)throw c}}return t}}(e,a)||Object(n.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",function(){return l})},90:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(92);function l(e,a){if(e){if("string"===typeof e)return Object(n.a)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(n.a)(e,a):void 0}}},92:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}t.d(a,"a",function(){return n})}}]);
//# sourceMappingURL=19.477a72fd.chunk.js.map