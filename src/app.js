import "bootstrap";
import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  const excusasDiv = document.getElementById("excusas");
  const btnGenerator = document.getElementById("btn-generate");
  //write your code here
  function generarExcusa(){
    const quien = who[Math.floor(Math.random() * who.length)];
    const accion = action[Math.floor(Math.random() * action.length)];
    const que = what[Math.floor(Math.random() * what.length)];
    const cuando = when[Math.floor(Math.random() * when.length)];
    return `<p>${quien} <b>${accion}</b> ${que} <b>${cuando}</b>.</p>`;
  }
  excusasDiv.innerHTML = generarExcusa();

  btnGenerator.addEventListener("click", function(){
     excusasDiv.innerHTML = generarExcusa();
  });
}       


