"use strict";const domSelect=document.getElementById("a-select"),form=document.getElementById("form"),select=NiceSelect.bind(domSelect),pristine=new Pristine(form);async function onFormSubmit(e){e.preventDefault();const t=validateSelect();if(pristine.validate()&&t){const e={first_name:document.getElementById("name").value,last_name:document.getElementById("lastname").value,email:document.getElementById("email").value,user_type:document.getElementById("a-select").value};if(Object.values(e).some(e=>!e))return;fetch(" https://landing.133t.com/api/early-adopter/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{e.ok?(clearForm(),successModalAction(!0)):alert(`HTTP Error: ${e.statusText}`)})}}function clearForm(){form.reset(),select.clear(),select.update(),document.getElementById("form-select-error").innerText=""}function validateSelect(){const e=document.getElementById("form-select"),t=document.getElementById("form-select-error");return select.options.some(e=>e.element.classList.contains("selected"))?(e.classList.remove("has-danger-custom"),t.innerText="",!0):(e.classList.add("has-danger-custom"),t.innerText="Please choose.",!1)}function successModalAction(e){const t=document.querySelector(".success-modal");t.style.display=e?"flex":"none";const n=()=>successModalAction(!1);e?t.addEventListener("click",n):t.removeEventListener("click",n)}domSelect.addEventListener("change",()=>{this.validateSelect()}),select.dropdown.addEventListener("focusout",()=>{this.validateSelect()}),form.addEventListener("submit",e=>onFormSubmit(e));