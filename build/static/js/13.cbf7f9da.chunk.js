(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{292:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},295:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(1),i=t.n(l),r=t(0),o=t.n(r),s=t(287),m=t.n(s),d=t(288),u={tag:d.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},p=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,r=e.tag,o=e.form,s=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(d.m)(m()(a,l?"no-gutters":null,o?"form-row":"row"),t);return i.a.createElement(r,Object(n.a)({},s,{className:u}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},296:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(292),i=t.n(l),r=t(1),o=t.n(r),s=t(0),m=t.n(s),d=t(287),u=t.n(d),p=t(288),h=m.a.oneOfType([m.a.number,m.a.string]),f=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),push:Object(p.h)(h,'Please use the prop "order"'),pull:Object(p.h)(h,'Please use the prop "order"'),order:h,offset:h})]),b={tag:p.q,xs:f,sm:f,md:f,lg:f,xl:f,className:m.a.string,cssModule:m.a.object,widths:m.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},k=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,l=e.widths,r=e.tag,s=Object(c.a)(e,["className","cssModule","widths","tag"]),m=[];l.forEach(function(a,n){var c=e[a];if(delete s[a],c||""===c){var l=!n;if(i()(c)){var r,o=l?"-":"-"+a+"-",d=k(l,a,c.size);m.push(Object(p.m)(u()(((r={})[d]=c.size||""===c.size,r["order"+o+c.order]=c.order||0===c.order,r["offset"+o+c.offset]=c.offset||0===c.offset,r)),t))}else{var h=k(l,a,c);m.push(h)}}}),m.length||m.push("col");var d=Object(p.m)(u()(a,m),t);return o.a.createElement(r,Object(n.a)({},s,{className:d}))};g.propTypes=b,g.defaultProps=E,a.a=g},297:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(290),i=t(291),r=t(1),o=t.n(r),s=t(0),m=t.n(s),d=t(287),u=t.n(d),p=t(288),h={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:p.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(i.a)(Object(i.a)(t))),t}Object(l.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],l=e.block,i=e.className,r=e.close,s=e.cssModule,m=e.color,d=e.outline,h=e.size,f=e.tag,b=e.innerRef,E=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var k="btn"+(d?"-outline":"")+"-"+m,g=Object(p.m)(u()(i,{close:r},r||"btn",r||k,!!h&&"btn-"+h,!!l&&"btn-block",{active:a,disabled:this.props.disabled}),s);E.href&&"button"===f&&(f="a");var N=r?"Close":null;return o.a.createElement(f,Object(n.a)({type:"button"===f&&E.onClick?"button":void 0},E,{className:g,ref:b,onClick:this.onClick,"aria-label":t||N}))},a}(o.a.Component);f.propTypes=h,f.defaultProps={color:"secondary",tag:"button"},a.a=f},298:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(1),i=t.n(l),r=t(0),o=t.n(r),s=t(287),m=t.n(s),d=t(288),u={tag:d.q,inverse:o.a.bool,color:o.a.string,block:Object(d.h)(o.a.bool,'Please use the props "body"'),body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.color,r=e.block,o=e.body,s=e.inverse,u=e.outline,p=e.tag,h=e.innerRef,f=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),b=Object(d.m)(m()(a,"card",!!s&&"text-white",!(!r&&!o)&&"card-body",!!l&&(u?"border":"bg")+"-"+l),t);return i.a.createElement(p,Object(n.a)({},f,{className:b,ref:h}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},299:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(1),i=t.n(l),r=t(0),o=t.n(r),s=t(287),m=t.n(s),d=t(288),u={tag:d.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,r=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),s=Object(d.m)(m()(a,"card-body"),t);return i.a.createElement(r,Object(n.a)({},o,{className:s,ref:l}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},300:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(1),i=t.n(l),r=t(0),o=t.n(r),s=t(287),m=t.n(s),d=t(288),u={tag:d.q,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.m)(m()(a,"card-header"),t);return i.a.createElement(l,Object(n.a)({},r,{className:o}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},315:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(1),i=t.n(l),r=t(0),o=t.n(r),s=t(287),m=t.n(s),d=t(288),u={tag:d.q,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.m)(m()(a,"card-footer"),t);return i.a.createElement(l,Object(n.a)({},r,{className:o}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},320:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(290),i=t(291),r=t(1),o=t.n(r),s=t(0),m=t.n(s),d=t(287),u=t.n(d),p=t(288),h={children:m.a.node,type:m.a.string,size:m.a.string,bsSize:m.a.string,state:Object(p.h)(m.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:m.a.bool,invalid:m.a.bool,tag:p.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),static:Object(p.h)(m.a.bool,'Please use the prop "plaintext"'),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(Object(i.a)(t))),t.focus=t.focus.bind(Object(i.a)(Object(i.a)(t))),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,i=e.bsSize,r=e.state,s=e.valid,m=e.invalid,d=e.tag,h=e.addon,f=e.static,b=e.plaintext,E=e.innerRef,k=Object(c.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(l)>-1,N=new RegExp("\\D","g"),v=d||("select"===l||"textarea"===l?l:"input"),y="form-control";b||f?(y+="-plaintext",v=d||"input"):"file"===l?y+="-file":g&&(y=h?null:"form-check-input"),r&&"undefined"===typeof s&&"undefined"===typeof m&&("danger"===r?m=!0:"success"===r&&(s=!0)),k.size&&N.test(k.size)&&(Object(p.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=k.size,delete k.size);var j=Object(p.m)(u()(a,m&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,y),t);return("input"===v||d&&"function"===typeof d)&&(k.type=l),!k.children||b||f||"select"===l||"string"!==typeof v||"select"===v||(Object(p.s)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete k.children),o.a.createElement(v,Object(n.a)({},k,{ref:E,className:j}))},a}(o.a.Component);f.propTypes=h,f.defaultProps={type:"text"},a.a=f},475:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(290),i=t(291),r=t(1),o=t.n(r),s=t(0),m=t.n(s),d=t(287),u=t.n(d),p=t(288),h={children:m.a.node,inline:m.a.bool,tag:p.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(Object(i.a)(t))),t.submit=t.submit.bind(Object(i.a)(Object(i.a)(t))),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,i=e.tag,r=e.innerRef,s=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.m)(u()(a,!!l&&"form-inline"),t);return o.a.createElement(i,Object(n.a)({},s,{ref:r,className:m}))},a}(r.Component);f.propTypes=h,f.defaultProps={tag:"form"},a.a=f},476:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(1),i=t.n(l),r=t(0),o=t.n(r),s=t(287),m=t.n(s),d=t(288),u={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.q,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.row,r=e.disabled,o=e.check,s=e.inline,u=e.tag,p=Object(c.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),h=Object(d.m)(m()(a,!!l&&"row",o?"form-check":"form-group",!(!o||!s)&&"form-check-inline",!(!o||!r)&&"disabled"),t);return i.a.createElement(u,Object(n.a)({},p,{className:h}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},477:function(e,a,t){"use strict";var n=t(36),c=t(289),l=t(1),i=t.n(l),r=t(0),o=t.n(r),s=t(287),m=t.n(s),d=t(292),u=t.n(d),p=t(288),h=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.string,o.a.number,o.a.shape({size:h,push:Object(p.h)(h,'Please use the prop "order"'),pull:Object(p.h)(h,'Please use the prop "order"'),order:h,offset:h})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:p.q,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},E={tag:"label",widths:["xs","sm","md","lg","xl"]},k=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,l=e.hidden,r=e.widths,o=e.tag,s=e.check,d=e.size,h=e.for,f=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];r.forEach(function(a,n){var c=e[a];if(delete f[a],c||""===c){var l,i=!n;if(u()(c)){var r,o=i?"-":"-"+a+"-";l=k(i,a,c.size),b.push(Object(p.m)(m()(((r={})[l]=c.size||""===c.size,r["order"+o+c.order]=c.order||0===c.order,r["offset"+o+c.offset]=c.offset||0===c.offset,r))),t)}else l=k(i,a,c),b.push(l)}});var E=Object(p.m)(m()(a,!!l&&"sr-only",!!s&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),t);return i.a.createElement(o,Object(n.a)({htmlFor:h},f,{className:E}))};g.propTypes=b,g.defaultProps=E,a.a=g},500:function(e,a,t){"use strict";t.r(a);var n=t(95),c=t(96),l=t(98),i=t(97),r=t(99),o=t(1),s=t.n(o),m=t(295),d=t(296),u=t(298),p=t(300),h=t(299),f=t(475),b=t(476),E=t(477),k=t(320),g=t(315),N=t(297),v=t(103),y=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(i.a)(a).call(this,e))).loading=function(){return s.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.state={settings:"",gui_settings:""},v.a.getSettings(function(e){t.setState({settings:e})}),t}return Object(r.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log(this.state.settings),s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(m.a,null,s.a.createElement(d.a,{xs:"12",xl:"6"},s.a.createElement(u.a,null,s.a.createElement(p.a,null,s.a.createElement("strong",null,"Raspberry pi")),s.a.createElement(h.a,null,s.a.createElement(f.a,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal"},s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Log")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Video")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Ant")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Ant running")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Video running")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"powermeter_running")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"hr running")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"speed_running")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"average_power_time")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Log")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Log")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Log")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Log")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,null,"Log")),s.a.createElement(d.a,{md:"9"},s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio1",name:"inline-radios",value:"option1"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio1"},"Si")),s.a.createElement(b.a,{check:!0,inline:!0},s.a.createElement(k.a,{className:"form-check-input",type:"radio",id:"inline-radio2",name:"inline-radios",value:"option2"}),s.a.createElement(E.a,{className:"form-check-label",check:!0,htmlFor:"inline-radio2"},"No")))),s.a.createElement(b.a,{row:!0},s.a.createElement(d.a,{md:"3"},s.a.createElement(E.a,{htmlFor:"text-input"},"Testo")),s.a.createElement(d.a,{xs:"12",md:"9"},s.a.createElement(k.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Text"}))))),s.a.createElement(g.a,null,s.a.createElement(N.a,{type:"submit",size:"sm",color:"success"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit")))),s.a.createElement(d.a,{xs:"12",xl:"6"},s.a.createElement(u.a,null,s.a.createElement(p.a,null,s.a.createElement("strong",null,"GUI")),s.a.createElement(h.a,null)))))}}]),a}(o.Component);a.default=y}}]);
//# sourceMappingURL=13.cbf7f9da.chunk.js.map