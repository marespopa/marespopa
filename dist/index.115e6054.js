document.addEventListener("DOMContentLoaded",(function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")}))}))}));var links=document.querySelectorAll("a.navbar-item");console.dir(links),console.log("test"),links.forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector(".is-active");console.dir(t);var a=t.className;t.className=a.replace(" is-active",""),e.className+=" is-active"}))}));
//# sourceMappingURL=index.115e6054.js.map
