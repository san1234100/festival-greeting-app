import Fireworks from 'fireworks-js'

const fwContainer=document.querySelector('#fireworks');
const fireworks=new Fireworks(fwContainer)

fireworks.start()

const url=new URL(window.location.href)

const fullname=url.searchParams.get('name').toUpperCase();
// console.log(fullname);
const greeterNameEl=document.getElementById('greeterName');
if(fullname){
    greeterNameEl.textContent=fullname;
}else{
    location.href="/festival-greeting-app/index.html"
}
