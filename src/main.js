import "./style.css";

const btnHome = document.getElementById("nav_home");
const btnContact = document.getElementById("nav_contact");
const btnOurs = document.getElementById("nav_about_us");
const containerMain = document.getElementById("container_main");

btnHome.addEventListener("click", ()=>{
    containerMain.innerHTML=`
    <h2>Inicio</h2>
    <p>Hola soy inicio</p>
    `
});
btnContact.addEventListener("click", ()=>{
    containerMain.innerHTML=`
    <h2>Contactanos</h2>
    <p>Hola soy contactanos</p>
    `
});
btnOurs.addEventListener("click", ()=>{
    containerMain.innerHTML=`
    <h2>Nosotros</h2>
    <p>Hola soy nosotros</p>
    `
});