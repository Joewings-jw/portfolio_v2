!function(){const e=document.getElementById("nav-menu"),t=document.getElementById("nav-toggle"),s=document.getElementById("nav-close");t&&t.addEventListener("click",(()=>{e.classList.add("show-menu")})),s&&s.addEventListener("click",(()=>{e.classList.remove("show-menu")}));function o(){document.getElementById("nav-menu").classList.remove("show-menu")}document.querySelectorAll(".nav_link").forEach((e=>e.addEventListener("click",o)));const n=document.querySelectorAll("section[id]");console.log(n),window.addEventListener("scroll",(function(){const e=window.pageYOffset;n.forEach((t=>{const s=t.offsetHeight,o=t.offsetTop;sectionId=t.getAttribute("id"),e>=o&&e<=o+s?document.querySelector('#nav-menu a[href*="#'+sectionId+'"]').classList.add("active-link"):document.querySelector('#nav-menu a[href*="#'+sectionId+'"]').classList.remove("active-link")}))})),window.addEventListener("scroll",(function(){const e=document.getElementById("header");this.scrollY>=80?e.classList.add("scroll-header"):e.classList.remove("scroll-header")})),window.addEventListener("scroll",(function(){const e=document.getElementById("scroll-up");this.scrollY>=80?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}));const c=document.getElementById("theme-button"),l="dark-theme",d="uil-sun",i=localStorage.getItem("selected-theme"),a=localStorage.getItem("selected-icon");i&&(document.body.classList["dark"===i?"add":"remove"](l),c.classList["uil-moon"===a?"add":"remove"](d)),c.addEventListener("click",(()=>{document.body.classList.toggle(l),c.classList.toggle(d),localStorage.setItem("selected-theme",document.body.classList.contains(l)?"dark":"light"),localStorage.setItem("selected-icon",c.classList.contains(d)?"uil-moon":"uil-sun")}))}();
//# sourceMappingURL=index.117f3a2a.js.map
