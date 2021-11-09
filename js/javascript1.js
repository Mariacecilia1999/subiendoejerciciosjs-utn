//Ejercicio 1

/*Variables generales**/
var body=document.querySelector('body')
var subtitulo=document.querySelector('h2')



var rojo=document.getElementById('rojo')
rojo.addEventListener('click', function(){
   body.style.background='red'
   subtitulo.style.color='white'
   subtitulo.innerText="Cambiaste el fondo a Rojo"
})

var verde=document.getElementById('verde')
verde.addEventListener('click', function(){
    body.style.background='green'
    subtitulo.style.color='white'
    subtitulo.innerText='Cambiaste a fondo Verde'
})


var azul= document.getElementById('azul')
azul.addEventListener('click',function(){
    body.style.background='blue'
    subtitulo.style.color='white'
    subtitulo.innerText='Cambiaste el fondo a Azul'
})




















