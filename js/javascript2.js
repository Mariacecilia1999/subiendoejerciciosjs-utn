/*Programar contador de caracteres para un textarea**/


function contar(){ 
var div = document.querySelector('div')
var mensaje=document.getElementById('mensaje').value
console.log(mensaje.length)
var mensajeNuevo='Caracteres en total: '+mensaje.length
var crearH2=document.createElement('h2')
div.appendChild(crearH2)
crearH2.innerHTML=mensajeNuevo
}