var y=Object.defineProperty;var o=(r,e)=>y(r,"name",{value:e,configurable:!0});import{j as _,G as p,H as m}from"./iframe.3708f059.js";import{M as b,i as h}from"./index.4eb382c7.js";import"./es.map.constructor.d99247f9.js";function A(r,e){return T(r)||w(r,e)||E(r,e)||g()}o(A,"_slicedToArray");function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o(g,"_nonIterableRest");function E(r,e){if(!!r){if(typeof r=="string")return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(r,e)}}o(E,"_unsupportedIterableToArray");function c(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}o(c,"_arrayLikeToArray");function w(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],a=!0,f=!1,u,l;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));a=!0);}catch(i){f=!0,l=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(f)throw l}}return n}}o(w,"_iterableToArrayLimit");function T(r){if(Array.isArray(r))return r}o(T,"_arrayWithHoles");var d=new b(global),C=d.fn.bind(d),O=h({action:C},{retain:!0}),j=O.action,v=_.getChannel(),s=[];v.on(p,function(){return s.forEach(function(r){var e;return r==null||(e=r.mockClear)===null||e===void 0?void 0:e.call(r)})});v.on(m,function(r){var e=r.newPhase;e==="loading"&&s.forEach(function(t){var n;return t==null||(n=t.mockClear)===null||n===void 0?void 0:n.call(t)})});var S=o(function(e){var t=e.id,n=e.initialArgs;return Object.entries(n).reduce(function(a,f){var u=A(f,2),l=u[0],i=u[1];return typeof i=="function"&&i.name==="actionHandler"?(Object.defineProperty(i,"name",{value:l,writable:!1}),Object.defineProperty(i,"__storyId__",{value:t,writable:!1}),a[l]=j(i),s.push(a[l]),a):(a[l]=i,a)},{})},"addActionsFromArgTypes"),H=[S];export{H as argsEnhancers};
//# sourceMappingURL=preview.17540ff7.js.map
