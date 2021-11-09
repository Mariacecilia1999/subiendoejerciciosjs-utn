var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];


/*Con map*/
var alumno = alumnos.map(function(alumno){
     if(alumno.nota >= 7){
         console.log("Aprobado: "+alumno.nombre)
     }

})

/*Con filter*/
var filtro=alumnos.filter(function(alumno){
    if(alumno.nota >= 7){ 
    document.write("Aprobado: "+alumno.nombre+", nota: "+alumno.nota+
    "<br>")
    }else{
        document.write("Desaprobado: "+alumno.nombre+",  nota: "+alumno.nota+"<br>")
    }
})

