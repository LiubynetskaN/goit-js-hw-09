!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){n.style.backgroundColor="".concat(o()),null===a&&(a=setInterval((function(){n.style.backgroundColor="".concat(o())}),1e3),t.disabled=!0,e.hasAttribute("disabled")&&(e.disabled=!1))})),e.addEventListener("click",stopChangeHandler);var a=null}();
//# sourceMappingURL=01-color-switcher.255349a0.js.map