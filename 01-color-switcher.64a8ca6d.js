const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){n.style.backgroundColor=`${o()}`,null===r&&(r=setInterval((()=>{n.style.backgroundColor=`${o()}`}),1e3),t.disabled=!0,e.hasAttribute("disabled")&&(e.disabled=!1))})),e.addEventListener("click",stopChangeHandler);let r=null;
//# sourceMappingURL=01-color-switcher.64a8ca6d.js.map
