const h="2023.04.20.10";var u={},i={get exports(){return u},set exports(l){u=l}};(function(l,g){function m(){var c=document.querySelector("[data-toggle-theme]"),t=c?c.getAttribute("data-key"):null;(function(e=localStorage.getItem(t||"theme")){localStorage.getItem(t||"theme")&&(document.documentElement.setAttribute("data-theme",e),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(a=>{a.classList.add(c.getAttribute("data-act-class"))}))})(),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(e=>{e.addEventListener("click",function(){var a=e.getAttribute("data-toggle-theme");if(a){var o=a.split(",");document.documentElement.getAttribute("data-theme")==o[0]?o.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(t||"theme")):(document.documentElement.setAttribute("data-theme",o[1]),localStorage.setItem(t||"theme",o[1])):(document.documentElement.setAttribute("data-theme",o[0]),localStorage.setItem(t||"theme",o[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(s=>{s.classList.toggle(this.getAttribute("data-act-class"))})})})}function d(){var c=document.querySelector("[data-set-theme='']"),t=c?c.getAttribute("data-key"):null;(function(e=localStorage.getItem(t||"theme")){if(e!=null&&e!="")if(localStorage.getItem(t||"theme")&&localStorage.getItem(t||"theme")!=""){document.documentElement.setAttribute("data-theme",e);var a=document.querySelector("[data-set-theme='"+e.toString()+"']");a&&([...document.querySelectorAll("[data-set-theme]")].forEach(o=>{o.classList.remove(o.getAttribute("data-act-class"))}),a.getAttribute("data-act-class")&&a.classList.add(a.getAttribute("data-act-class")))}else{var a=document.querySelector("[data-set-theme='']");a.getAttribute("data-act-class")&&a.classList.add(a.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(e=>{e.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(t||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(a=>{a.classList.remove(a.getAttribute("data-act-class"))}),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class"))})})}function r(){var c=document.querySelector("select[data-choose-theme]"),t=c?c.getAttribute("data-key"):null;(function(e=localStorage.getItem(t||"theme")){if(localStorage.getItem(t||"theme")){document.documentElement.setAttribute("data-theme",e);var a=document.querySelector("select[data-choose-theme] [value='"+e.toString()+"']");a&&[...document.querySelectorAll("select[data-choose-theme] [value='"+e.toString()+"']")].forEach(o=>{o.selected=!0})}})(),c&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(e=>{e.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(t||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(t||"theme")+"']")].forEach(a=>{a.selected=!0})})})}function n(c=!0){c===!0?document.addEventListener("DOMContentLoaded",function(t){m(),r(),d()}):(m(),r(),d())}l.exports={themeChange:n}})(i);export{u as t,h as v};
