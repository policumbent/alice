(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{292:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},295:function(e,a,l){"use strict";var t=l(36),c=l(289),m=l(1),s=l.n(m),r=l(0),o=l.n(r),n=l(287),b=l.n(n),i=l(288),d={tag:i.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},E=function(e){var a=e.className,l=e.cssModule,m=e.noGutters,r=e.tag,o=e.form,n=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(i.m)(b()(a,m?"no-gutters":null,o?"form-row":"row"),l);return s.a.createElement(r,Object(t.a)({},n,{className:d}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},296:function(e,a,l){"use strict";var t=l(36),c=l(289),m=l(292),s=l.n(m),r=l(1),o=l.n(r),n=l(0),b=l.n(n),i=l(287),d=l.n(i),E=l(288),u=b.a.oneOfType([b.a.number,b.a.string]),x=b.a.oneOfType([b.a.bool,b.a.number,b.a.string,b.a.shape({size:b.a.oneOfType([b.a.bool,b.a.number,b.a.string]),push:Object(E.h)(u,'Please use the prop "order"'),pull:Object(E.h)(u,'Please use the prop "order"'),order:u,offset:u})]),N={tag:E.q,xs:x,sm:x,md:x,lg:x,xl:x,className:b.a.string,cssModule:b.a.object,widths:b.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},k=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},p=function(e){var a=e.className,l=e.cssModule,m=e.widths,r=e.tag,n=Object(c.a)(e,["className","cssModule","widths","tag"]),b=[];m.forEach(function(a,t){var c=e[a];if(delete n[a],c||""===c){var m=!t;if(s()(c)){var r,o=m?"-":"-"+a+"-",i=k(m,a,c.size);b.push(Object(E.m)(d()(((r={})[i]=c.size||""===c.size,r["order"+o+c.order]=c.order||0===c.order,r["offset"+o+c.offset]=c.offset||0===c.offset,r)),l))}else{var u=k(m,a,c);b.push(u)}}}),b.length||b.push("col");var i=Object(E.m)(d()(a,b),l);return o.a.createElement(r,Object(t.a)({},n,{className:i}))};p.propTypes=N,p.defaultProps=g,a.a=p},297:function(e,a,l){"use strict";var t=l(36),c=l(289),m=l(290),s=l(291),r=l(1),o=l.n(r),n=l(0),b=l.n(n),i=l(287),d=l.n(i),E=l(288),u={active:b.a.bool,"aria-label":b.a.string,block:b.a.bool,color:b.a.string,disabled:b.a.bool,outline:b.a.bool,tag:E.q,innerRef:b.a.oneOfType([b.a.object,b.a.func,b.a.string]),onClick:b.a.func,size:b.a.string,children:b.a.node,className:b.a.string,cssModule:b.a.object,close:b.a.bool},x=function(e){function a(a){var l;return(l=e.call(this,a)||this).onClick=l.onClick.bind(Object(s.a)(Object(s.a)(l))),l}Object(m.a)(a,e);var l=a.prototype;return l.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},l.render=function(){var e=this.props,a=e.active,l=e["aria-label"],m=e.block,s=e.className,r=e.close,n=e.cssModule,b=e.color,i=e.outline,u=e.size,x=e.tag,N=e.innerRef,g=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var k="btn"+(i?"-outline":"")+"-"+b,p=Object(E.m)(d()(s,{close:r},r||"btn",r||k,!!u&&"btn-"+u,!!m&&"btn-block",{active:a,disabled:this.props.disabled}),n);g.href&&"button"===x&&(x="a");var f=r?"Close":null;return o.a.createElement(x,Object(t.a)({type:"button"===x&&g.onClick?"button":void 0},g,{className:p,ref:N,onClick:this.onClick,"aria-label":l||f}))},a}(o.a.Component);x.propTypes=u,x.defaultProps={color:"secondary",tag:"button"},a.a=x},298:function(e,a,l){"use strict";var t=l(36),c=l(289),m=l(1),s=l.n(m),r=l(0),o=l.n(r),n=l(287),b=l.n(n),i=l(288),d={tag:i.q,inverse:o.a.bool,color:o.a.string,block:Object(i.h)(o.a.bool,'Please use the props "body"'),body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,m=e.color,r=e.block,o=e.body,n=e.inverse,d=e.outline,E=e.tag,u=e.innerRef,x=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),N=Object(i.m)(b()(a,"card",!!n&&"text-white",!(!r&&!o)&&"card-body",!!m&&(d?"border":"bg")+"-"+m),l);return s.a.createElement(E,Object(t.a)({},x,{className:N,ref:u}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},299:function(e,a,l){"use strict";var t=l(36),c=l(289),m=l(1),s=l.n(m),r=l(0),o=l.n(r),n=l(287),b=l.n(n),i=l(288),d={tag:i.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,l=e.cssModule,m=e.innerRef,r=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),n=Object(i.m)(b()(a,"card-body"),l);return s.a.createElement(r,Object(t.a)({},o,{className:n,ref:m}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},300:function(e,a,l){"use strict";var t=l(36),c=l(289),m=l(1),s=l.n(m),r=l(0),o=l.n(r),n=l(287),b=l.n(n),i=l(288),d={tag:i.q,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,l=e.cssModule,m=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(i.m)(b()(a,"card-header"),l);return s.a.createElement(m,Object(t.a)({},r,{className:o}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},517:function(e,a,l){"use strict";l.r(a);var t=l(95),c=l(96),m=l(98),s=l(97),r=l(99),o=l(1),n=l.n(o),b=l(298),i=l(300),d=l(299),E=l(295),u=l(296),x=l(297),N=function(e){function a(){return Object(t.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"animated fadeIn"},n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Standard Buttons")),n.a.createElement(d.a,null,n.a.createElement(E.a,{className:"align-items-center"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"primary"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"secondary"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"success"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"warning"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"danger"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"info"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"light"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"dark"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"link"},"Link"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"primary","aria-pressed":"true"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"secondary","aria-pressed":"true"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"success","aria-pressed":"true"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"warning","aria-pressed":"true"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"danger","aria-pressed":"true"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"info","aria-pressed":"true"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"light","aria-pressed":"true"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"dark","aria-pressed":"true"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"link","aria-pressed":"true"},"Link"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"primary",disabled:!0},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"secondary",disabled:!0},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"success",disabled:!0},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"warning",disabled:!0},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"danger",disabled:!0},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"info",disabled:!0},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"light",disabled:!0},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"dark",disabled:!0},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"link",disabled:!0},"Link"))))),n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Outline Buttons")),n.a.createElement(d.a,null,n.a.createElement("p",null,"Use ",n.a.createElement("code",null,"outline")," prop"),n.a.createElement(E.a,{className:"align-items-center"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"primary"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"secondary"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"success"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"warning"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"danger"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"info"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"light"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"dark"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"primary","aria-pressed":"true"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"secondary","aria-pressed":"true"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"success","aria-pressed":"true"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"warning","aria-pressed":"true"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"danger","aria-pressed":"true"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"info","aria-pressed":"true"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"light","aria-pressed":"true"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,active:!0,color:"dark","aria-pressed":"true"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"primary",disabled:!0},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"secondary",disabled:!0},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"success",disabled:!0},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"warning",disabled:!0},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"danger",disabled:!0},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"info",disabled:!0},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"light",disabled:!0},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,outline:!0,color:"dark",disabled:!0},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})))),n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Ghost Buttons")),n.a.createElement(d.a,null,n.a.createElement("p",null,"Use",n.a.createElement("code",null,".btn-ghost-*")," class for ghost buttons."),n.a.createElement(E.a,{className:"align-items-center"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-primary"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-secondary"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-success"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-warning"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-danger"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-info"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-light"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-dark"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-primary","aria-pressed":"true"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-secondary","aria-pressed":"true"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-success","aria-pressed":"true"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-warning","aria-pressed":"true"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-danger","aria-pressed":"true"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-info","aria-pressed":"true"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-light","aria-pressed":"true"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,active:!0,color:"ghost-dark","aria-pressed":"true"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-primary",disabled:!0},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-secondary",disabled:!0},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-success",disabled:!0},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-warning",disabled:!0},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-danger",disabled:!0},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-info",disabled:!0},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-light",disabled:!0},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"ghost-dark",disabled:!0},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"})))),n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Square Buttons")),n.a.createElement(d.a,null,n.a.createElement("p",null,"Use",n.a.createElement("code",null,".btn-square")," class for square buttons."),n.a.createElement(E.a,{className:"align-items-center"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"primary",className:"btn-square"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"secondary",className:"btn-square"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"success",className:"btn-square"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"warning",className:"btn-square"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"danger",className:"btn-square"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"info",className:"btn-square"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"light",className:"btn-square"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"dark",className:"btn-square"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"link",className:"btn-square"},"Link"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"primary",className:"btn-square","aria-pressed":"true"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"secondary",className:"btn-square","aria-pressed":"true"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"success",className:"btn-square","aria-pressed":"true"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"warning",className:"btn-square","aria-pressed":"true"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"danger",className:"btn-square","aria-pressed":"true"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"info",className:"btn-square","aria-pressed":"true"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"light",className:"btn-square","aria-pressed":"true"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"dark",className:"btn-square","aria-pressed":"true"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"link",className:"btn-square","aria-pressed":"true"},"Link"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"primary",className:"btn-square",disabled:!0},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"secondary",className:"btn-square",disabled:!0},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"success",className:"btn-square",disabled:!0},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"warning",className:"btn-square",disabled:!0},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"danger",className:"btn-square",disabled:!0},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"info",className:"btn-square",disabled:!0},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"light",className:"btn-square",disabled:!0},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"dark",className:"btn-square",disabled:!0},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"link",className:"btn-square",disabled:!0},"Link"))))),n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Pill Buttons")),n.a.createElement(d.a,null,n.a.createElement("p",null,"Use",n.a.createElement("code",null,".btn-pill")," class for pill buttons."),n.a.createElement(E.a,{className:"align-items-center"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"primary",className:"btn-pill"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"secondary",className:"btn-pill"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"success",className:"btn-pill"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"warning",className:"btn-pill"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"danger",className:"btn-pill"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"info",className:"btn-pill"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"light",className:"btn-pill"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"dark",className:"btn-pill"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"link",className:"btn-pill"},"Link"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Active State"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"primary",className:"btn-pill","aria-pressed":"true"},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"secondary",className:"btn-pill","aria-pressed":"true"},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"success",className:"btn-pill","aria-pressed":"true"},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"warning",className:"btn-pill","aria-pressed":"true"},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"danger",className:"btn-pill","aria-pressed":"true"},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"info",className:"btn-pill","aria-pressed":"true"},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"light",className:"btn-pill","aria-pressed":"true"},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"dark",className:"btn-pill","aria-pressed":"true"},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{active:!0,block:!0,color:"link",className:"btn-pill","aria-pressed":"true"},"Link"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"12",xl:!0,className:"mb-3 mb-xl-0"},"Disabled"),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"primary",className:"btn-pill",disabled:!0},"Primary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"secondary",className:"btn-pill",disabled:!0},"Secondary")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"success",className:"btn-pill",disabled:!0},"Success")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"warning",className:"btn-pill",disabled:!0},"Warning")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"danger",className:"btn-pill",disabled:!0},"Danger")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"info",className:"btn-pill",disabled:!0},"Info")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"light",className:"btn-pill",disabled:!0},"Light")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"dark",className:"btn-pill",disabled:!0},"Dark")),n.a.createElement(u.a,{col:"6",sm:"4",md:"2",xl:!0,className:"mb-3 mb-xl-0"},n.a.createElement(x.a,{block:!0,color:"link",className:"btn-pill",disabled:!0},"Link"))))),n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Sizes")),n.a.createElement(d.a,null,n.a.createElement("p",null,"Fancy larger or smaller buttons? Add ",n.a.createElement("code",null,'size="lg"')," or ",n.a.createElement("code",null,'size="sm"')," for additional sizes."),n.a.createElement(E.a,{className:"align-items-center"},n.a.createElement(u.a,{col:"2",xl:!0,className:"mb-3 mb-xl-0"},"Small"),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"primary",size:"sm"},"Standard Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"secondary",outline:!0,size:"sm"},"Outline Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{size:"sm",color:"ghost-success"},"Ghost Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"warning",size:"sm",className:"btn-square"},"Square Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"danger",size:"sm",className:"btn-pill"},"Pill Button"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"2",xl:!0,className:"mb-3 mb-xl-0"},"Normal"),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"primary"},"Standard Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{outline:!0,color:"secondary"},"Outline Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"ghost-success"},"Ghost Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"warning",className:"btn-square"},"Square Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"danger",className:"btn-pill"},"Pill Button"))),n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{col:"2",xl:!0,className:"mb-3 mb-xl-0"},"Large"),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"primary",size:"lg"},"Standard Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{outline:!0,color:"secondary",size:"lg"},"Outline Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"ghost-success",size:"lg"},"Ghost Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"warning",size:"lg",className:"btn-square"},"Square Button")),n.a.createElement(u.a,{col:"2",className:"mb-3 mb-xl-0 text-center"},n.a.createElement(x.a,{color:"danger",size:"lg",className:"btn-pill"},"Pill Button"))))),n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"With Icons")),n.a.createElement(d.a,null,n.a.createElement(E.a,{className:"align-items-center mt-3"},n.a.createElement(u.a,{sm:!0,xs:"12",className:"text-center mt-3"},n.a.createElement(x.a,{color:"primary"},n.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Standard Button")),n.a.createElement(u.a,{sm:!0,xs:"12",className:"text-center mt-3"},n.a.createElement(x.a,{color:"secondary",outline:!0},n.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Outline Button")),n.a.createElement(u.a,{sm:!0,xs:"12",className:"text-center mt-3"},n.a.createElement(x.a,{color:"ghost-success"},n.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Ghost Button")),n.a.createElement(u.a,{sm:!0,xs:"12",className:"text-center mt-3"},n.a.createElement(x.a,{color:"warning",className:"btn-square"},n.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Square Button")),n.a.createElement(u.a,{sm:!0,xs:"12",className:"text-center mt-3"},n.a.createElement(x.a,{color:"danger",className:"btn-pill"},n.a.createElement("i",{className:"fa fa-lightbulb-o"}),"\xa0Pill Button"))))),n.a.createElement(E.a,null,n.a.createElement(u.a,{xs:"12",md:"6"},n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Block Level Buttons")),n.a.createElement(d.a,null,n.a.createElement("p",null,"Add prop ",n.a.createElement("code",null,"block")),n.a.createElement(x.a,{color:"secondary",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{color:"primary",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{color:"success",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{color:"info",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{color:"warning",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{color:"danger",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{color:"link",size:"lg",block:!0},"Block level button")))),n.a.createElement(u.a,{xs:"12",md:"6"},n.a.createElement(b.a,null,n.a.createElement(i.a,null,n.a.createElement("strong",null,"Block Level Buttons")),n.a.createElement(d.a,null,n.a.createElement("p",null,"Add prop ",n.a.createElement("code",null,"block")),n.a.createElement(x.a,{outline:!0,color:"secondary",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{outline:!0,color:"primary",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{outline:!0,color:"success",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{outline:!0,color:"info",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{outline:!0,color:"warning",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{outline:!0,color:"danger",size:"lg",block:!0},"Block level button"),n.a.createElement(x.a,{color:"ghost-info",size:"lg",block:!0},"Block level button"))))))}}]),a}(o.Component);a.default=N}}]);
//# sourceMappingURL=21.84db1cf8.chunk.js.map