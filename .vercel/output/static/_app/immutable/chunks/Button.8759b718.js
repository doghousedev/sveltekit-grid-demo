import{S as se,i as le,s as ce,y as J,z as K,e as C,A as ue,B as L,b,L as re,Z as k,w as fe,d as j,C as Q,f as de,g as P,h as d,O as T,P as me,_ as _e,T as Z,E as M,Q as v,x as be,D as he,k as w,a as ge,l as x,m as $,c as ye,p as ee,I as pe,J as ke,K as Ce}from"./index.17362ed5.js";import{R as G,c as H,f as Se,S as W,d as Oe}from"./Ripple.5389c5eb.js";function Pe(n,t){let a=Object.getOwnPropertyNames(n);const l={};for(let u=0;u<a.length;u++){const s=a[u],c=s.indexOf("$");c!==-1&&t.indexOf(s.substring(0,c+1))!==-1||t.indexOf(s)===-1&&(l[s]=n[s])}return l}function Me(n,t){let a=Object.getOwnPropertyNames(n);const l={};for(let u=0;u<a.length;u++){const s=a[u];s.substring(0,t.length)===t&&(l[s.substring(t.length)]=n[s])}return l}function X(n){let t;return{c(){t=w("div"),this.h()},l(a){t=x(a,"DIV",{class:!0}),$(t).forEach(d),this.h()},h(){ee(t,"class","mdc-button__touch")},m(a,l){b(a,t,l)},d(a){a&&d(t)}}}function Ee(n){let t,a,l,u;const s=n[28].default,c=he(s,n,n[30],null);let e=n[6]&&X();return{c(){t=w("div"),a=ge(),c&&c.c(),e&&e.c(),l=C(),this.h()},l(o){t=x(o,"DIV",{class:!0}),$(t).forEach(d),a=ye(o),c&&c.l(o),e&&e.l(o),l=C(),this.h()},h(){ee(t,"class","mdc-button__ripple")},m(o,r){b(o,t,r),b(o,a,r),c&&c.m(o,r),e&&e.m(o,r),b(o,l,r),u=!0},p(o,r){c&&c.p&&(!u||r[0]&1073741824)&&pe(c,s,o,o[30],u?Ce(s,o[30],r,null):ke(o[30]),null),o[6]?e||(e=X(),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i(o){u||(P(c,o),u=!0)},o(o){j(c,o),u=!1},d(o){o&&d(t),o&&d(a),c&&c.d(o),e&&e.d(o),o&&d(l)}}}function Ie(n){let t,a,l;const u=[{tag:n[10]},{use:[[G,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[23].disabled,addClass:n[19],removeClass:n[20],addStyle:n[21]}],n[17],...n[0]]},{class:H({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[18]==="card:action","mdc-card__action--button":n[18]==="card:action","mdc-dialog__button":n[18]==="dialog:action","mdc-top-app-bar__navigation-icon":n[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[18]==="top-app-bar:action","mdc-snackbar__action":n[18]==="snackbar:actions","mdc-banner__secondary-action":n[18]==="banner"&&n[8],"mdc-banner__primary-action":n[18]==="banner"&&!n[8],"mdc-tooltip__action":n[18]==="tooltip:rich-actions",...n[12]})},{style:Object.entries(n[13]).map(Y).concat([n[2]]).join(" ")},n[16],n[15],n[14],{href:n[7]},n[23]];var s=n[9];function c(e){let o={$$slots:{default:[Ee]},$$scope:{ctx:e}};for(let r=0;r<u.length;r+=1)o=M(o,u[r]);return{props:o}}return s&&(t=J(s,c(n)),n[29](t),t.$on("click",n[22])),{c(){t&&K(t.$$.fragment),a=C()},l(e){t&&ue(t.$$.fragment,e),a=C()},m(e,o){t&&L(t,e,o),b(e,a,o),l=!0},p(e,o){const r=o[0]&12580351?re(u,[o[0]&1024&&{tag:e[10]},o[0]&12189721&&{use:[[G,{ripple:e[3],unbounded:!1,color:e[4],disabled:!!e[23].disabled,addClass:e[19],removeClass:e[20],addStyle:e[21]}],e[17],...e[0]]},o[0]&266610&&{class:H({[e[1]]:!0,"mdc-button":!0,"mdc-button--raised":e[5]==="raised","mdc-button--unelevated":e[5]==="unelevated","mdc-button--outlined":e[5]==="outlined","smui-button--color-secondary":e[4]==="secondary","mdc-button--touch":e[6],"mdc-card__action":e[18]==="card:action","mdc-card__action--button":e[18]==="card:action","mdc-dialog__button":e[18]==="dialog:action","mdc-top-app-bar__navigation-icon":e[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":e[18]==="top-app-bar:action","mdc-snackbar__action":e[18]==="snackbar:actions","mdc-banner__secondary-action":e[18]==="banner"&&e[8],"mdc-banner__primary-action":e[18]==="banner"&&!e[8],"mdc-tooltip__action":e[18]==="tooltip:rich-actions",...e[12]})},o[0]&8196&&{style:Object.entries(e[13]).map(Y).concat([e[2]]).join(" ")},o[0]&65536&&k(e[16]),o[0]&32768&&k(e[15]),o[0]&16384&&k(e[14]),o[0]&128&&{href:e[7]},o[0]&8388608&&k(e[23])]):{};if(o[0]&1073741888&&(r.$$scope={dirty:o,ctx:e}),o[0]&512&&s!==(s=e[9])){if(t){fe();const h=t;j(h.$$.fragment,1,0,()=>{Q(h,1)}),de()}s?(t=J(s,c(e)),e[29](t),t.$on("click",e[22]),K(t.$$.fragment),P(t.$$.fragment,1),L(t,a.parentNode,a)):t=null}else s&&t.$set(r)},i(e){l||(t&&P(t.$$.fragment,e),l=!0)},o(e){t&&j(t.$$.fragment,e),l=!1},d(e){n[29](null),e&&d(a),t&&Q(t,e)}}}const Y=([n,t])=>`${n}: ${t};`;function Ae(n,t,a){let l,u,s;const c=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","tag","getElement"];let e=T(t,c),{$$slots:o={},$$scope:r}=t;const h=Se(me());let{use:U=[]}=t,{class:D=""}=t,{style:N=""}=t,{ripple:R=!0}=t,{color:V="primary"}=t,{variant:q="text"}=t,{touch:z=!1}=t,{href:S=void 0}=t,{action:g="close"}=t,{defaultAction:O=!1}=t,{secondary:E=!1}=t,y,f={},m={},_=_e("SMUI:button:context"),{component:I=W}=t,{tag:F=I===W?S==null?"button":"a":void 0}=t,A=e.disabled;Z("SMUI:label:context","button"),Z("SMUI:icon:context","button");function te(i){f[i]||a(12,f[i]=!0,f)}function ne(i){(!(i in f)||f[i])&&a(12,f[i]=!1,f)}function ae(i,p){m[i]!=p&&(p===""||p==null?(delete m[i],a(13,m)):a(13,m[i]=p,m))}function oe(){_==="banner"&&Oe(B(),E?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function B(){return y.getElement()}function ie(i){be[i?"unshift":"push"](()=>{y=i,a(11,y)})}return n.$$set=i=>{a(31,t=M(M({},t),v(i))),a(23,e=T(t,c)),"use"in i&&a(0,U=i.use),"class"in i&&a(1,D=i.class),"style"in i&&a(2,N=i.style),"ripple"in i&&a(3,R=i.ripple),"color"in i&&a(4,V=i.color),"variant"in i&&a(5,q=i.variant),"touch"in i&&a(6,z=i.touch),"href"in i&&a(7,S=i.href),"action"in i&&a(24,g=i.action),"defaultAction"in i&&a(25,O=i.defaultAction),"secondary"in i&&a(8,E=i.secondary),"component"in i&&a(9,I=i.component),"tag"in i&&a(10,F=i.tag),"$$scope"in i&&a(30,r=i.$$scope)},n.$$.update=()=>{if(a(16,l=_==="dialog:action"&&g!=null?{"data-mdc-dialog-action":g}:{action:t.action}),a(15,u=_==="dialog:action"&&O?{"data-mdc-dialog-button-default":""}:{default:t.default}),a(14,s=_==="banner"?{}:{secondary:t.secondary}),A!==e.disabled){const i=B();"blur"in i&&i.blur(),a(27,A=e.disabled)}},t=v(t),[U,D,N,R,V,q,z,S,E,I,F,y,f,m,s,u,l,h,_,te,ne,ae,oe,e,g,O,B,A,o,ie,r]}class Ue extends se{constructor(t){super(),le(this,t,Ae,Ie,ce,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:24,defaultAction:25,secondary:8,component:9,tag:10,getElement:26},null,[-1,-1])}get getElement(){return this.$$.ctx[26]}}export{Ue as B,Pe as e,Me as p};