const accordionItems=document.getElementsByClassName("accordion__item");for(let t=0;t<accordionItems.length;t++)accordionItems[t].addEventListener("click",function(){this.classList.toggle("accordion__item--active")});