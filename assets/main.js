!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function n(){return window.matchMedia(l).matches}function o(){d&&d.classList.toggle("hidden",!n()),i&&i.classList.toggle("hidden",n()),u&&u.classList.toggle("hidden",!n())}var r=document.querySelector(".container"),i=document.querySelector(".menu"),d=document.querySelector(".menu-trigger"),c=(document.querySelector(".menu__inner--desktop"),document.querySelector(".menu__sub-inner-more-trigger")),u=document.querySelector(".menu__sub-inner-more"),l=getComputedStyle(document.body).getPropertyValue("--phoneWidth");window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;i&&i.addEventListener("click",function(e){return e.stopPropagation()}),u&&u.addEventListener("click",function(e){return e.stopPropagation()}),o(),document.body.addEventListener("click",function(){n()||!u||u.classList.contains("hidden")?n()&&!i.classList.contains("hidden")&&i.classList.add("hidden"):u.classList.add("hidden")}),window.addEventListener("resize",o),window.addEventListener("scroll",function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;null!==document.getElementById("toc_id")&&(document.getElementById("toc_id").style.top=200+e+"px")}),d&&d.addEventListener("click",function(e){e.stopPropagation(),i&&i.classList.toggle("hidden")}),c&&c.addEventListener("click",function(e){e.stopPropagation(),u&&u.classList.toggle("hidden"),u.getBoundingClientRect().right>r.getBoundingClientRect().right&&(u.style.left="auto",u.style.right=0)})}]);