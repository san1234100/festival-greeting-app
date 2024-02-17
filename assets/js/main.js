const formEl=document.querySelector('form')
console.log(formEl);

formEl.addEventListener("submit",(e)=>{
e.preventDefault();
const greeterName=e.target[0].value;
window.location.href="http://localhost:5174/festival-greeting-app/greeting.html?name="+greeterName;
})
