(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),r=n(5),o=n(6),l=n(7),p=n(9),u=n(8),j=n(0);function d(e){var t=e.total,n=e.positive,c=Object.entries(e).slice(0,3);return Object(j.jsxs)("ul",{className:"statistics",children:[c.map((function(e){return Object(j.jsxs)("li",{className:"item",children:[e[0],": ",e[1]]},e)})),Object(j.jsxs)("li",{className:"item",children:["Total: ",t]},"total"),Object(j.jsxs)("li",{className:"item",children:["Positive feedback: ",n,"%"]},"positive")]})}function b(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),n]})}function h(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{className:"Counter__controls",children:Object(j.jsx)("ul",{className:"buttonList",children:t.map((function(e){return Object(j.jsx)("li",{className:"buttonList__item",children:Object(j.jsx)("button",{className:e,type:"button",onClick:function(){return n(e)},children:e})},e)}))})})}function O(e){var t=e.message;return Object(j.jsx)("p",{children:t})}var v=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.handleIncrease=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotal=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositive=function(){var t=e.state,n=t.good,c=t.neutral,s=t.bad;return Math.round(100*n/(n+c+s))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.countTotal();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:e,onLeaveFeedback:this.handleIncrease})}),Object(j.jsxs)(b,{title:"Statistics",children:[t&&Object(j.jsx)(d,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotal(),positive:this.countPositive()}),!t&&Object(j.jsx)(O,{message:"There is no feedback"})]})]})}}]),n}(c.Component),m=v,x=n.p+"static/media/logo.6ce24c58.svg",f=n(2),g=n.n(f);var _=function(){return Object(j.jsx)("div",{className:g.a.App,children:Object(j.jsxs)("header",{className:g.a.AppHeader,children:[Object(j.jsx)("img",{src:x,className:g.a.AppLogo,alt:"logo"}),Object(j.jsx)(m,{})]})})};n(15);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={App:"App_App__hixBI",AppLogo:"App_AppLogo__3w_Hh","AppLogo-spin":"App_AppLogo-spin__3cMX_",AppHeader:"App_AppHeader__pLCRE",AppLink:"App_AppLink__HZr35"}}},[[16,1,2]]]);
//# sourceMappingURL=main.8d4e8da8.chunk.js.map