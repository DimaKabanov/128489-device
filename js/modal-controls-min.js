"use strict";!function(){var a=document.querySelector(".btn-write-us"),b=document.querySelector(".index-info-map"),c=13,d=27,e=null,f=null,g=function(a){return a.keyCode&&a.keyCode===c},h=function(a){return a.keyCode&&a.keyCode===d},i=function(a){h(a)&&j()},j=function(){e.setAttribute("hidden",""),e.classList.remove("modal-show"),f.removeEventListener("click",j),document.removeEventListener("keydown",i)},e=function(a){a.preventDefault();var b=a.target.dataset.modal;e=document.querySelector("."+b+"-modal"),e.removeAttribute("hidden"),e.classList.add("modal-show"),f=e.querySelector(".modal-close"),f.focus(),f.addEventListener("click",j),document.addEventListener("keydown",i)};a.addEventListener("click",e),a.addEventListener("keydown",function(a){g(a)&&e(a)}),b.addEventListener("click",e),b.addEventListener("keydown",function(a){g(a)&&e(a)})}();
