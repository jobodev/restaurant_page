(()=>{"use strict";const e=function(){let e=document.getElementById("content"),t=document.createElement("img");t.src="./images/logo.png",e.appendChild(t);let n=document.createElement("p");n.textContent="Luigi's pizza is so well known, that there is no need to \ncreate a magnificent site to showcase our cuisine. \nLuigi's pizza speaks for itself!",e.appendChild(n)};!function t(){document.getElementById("content").textContent="";const n=document.createElement("header"),i=document.createElement("h1");i.textContent="Luigi's Pizza",n.appendChild(i);let d=document.createElement("nav"),a=document.createElement("button");a.textContent="Home",a.classList.add("navButtons"),d.appendChild(a),a.addEventListener("click",(function(){t(),e()}));let c=document.createElement("button");c.textContent="Contact Us",c.classList.add("navButtons"),d.appendChild(c),c.addEventListener("click",(function(){t(),function(){let e=document.getElementById("content"),t=document.createElement("h2");function n(e,t,n){let i=document.createElement("div");i.id="contactCard";let d=document.createElement("h3");d.textContent=`${e}'s Contact Info`,i.appendChild(d);let a=document.createElement("p");a.textContent=t,i.appendChild(a);let c=document.createElement("p");return c.textContent=n,i.appendChild(c),i}t.textContent="Contact Us",e.appendChild(t),e.appendChild(n("Luigi","123-456-7890","luigi@email.com")),e.appendChild(n("Mario","111-222-3333","mario@email.com")),e.appendChild(n("Yoshi","444-555-6666","yoshi@email.com"))}()}));let o=document.createElement("button");o.textContent="Pizza Menu",o.classList.add("navButtons"),d.appendChild(o),o.addEventListener("click",(function(){t(),function(){let e=document.getElementById("content"),t=document.createElement("h2");function n(e,t){let n=document.createElement("div");n.classList.add("menuItems");let i=document.createElement("h3"),d=document.createElement("img");d.classList.add("pizzaImages");let a=document.createElement("p");return i.textContent=e,d.src=`images/menu/${e.toLowerCase()}.jpeg`,a.textContent=t,n.appendChild(i),n.appendChild(d),n.appendChild(a),n}t.textContent="Pizza Menu",e.appendChild(t),e.appendChild(n("Buffalo","Zesty buffalo sauce on Luigi's signature pizza crust.")),e.appendChild(n("Cheese","Keeping it simple, just cheese on Luigi's pizza.")),e.appendChild(n("Chicken","Premium chicken on Luigi's signature pizza."))}()})),n.appendChild(d),document.getElementById("content").appendChild(n)}(),e()})();