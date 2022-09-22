'use strict'

// Este ejemplo fucncionó al cambiar window. x document. y el evento en addEventlistener en lugar de 'load' x 'DOMContentLoaded'
// document.addEventListener('DOMContentLoaded', function(){
  
//   console.log(document.querySelector("h3"));
//   console.log(document.querySelector("p"));
//   console.log(document.getElementById("tituloh1"));

// })

window.addEventListener('load', function(){
  var formulario = document.querySelector('#idFomulario');
  var box_none = this.document.querySelector('.dashed');
  box_none.style.display = 'none';
  console.log(formulario);
  formulario.addEventListener('submit', function(){
    console.log('Evento submit capturado');

    var nombre = document.querySelector('#idNombre').value;
    var apellido = document.querySelector('#idApellido').value;
    var edad = parseInt(document.querySelector('#idEdad').value);
    
    // Validar formulario 

    if(nombre.trim() == null || nombre.trim().length == 0){
      alert('El nombre no es valido');
      return false;
    };
    if(apellido.trim() == null || apellido.trim().length == 0){
      alert('El apellido no es valido');
      return false;
    };
    if(edad == null || edad <= 0 || isNaN(edad)){
      alert('La edad no es valida');
      return false;
    };


    box_none.style.display = 'block';
    var datos_usuario = [nombre, apellido, edad];
    var i;    
    for (i in datos_usuario ){
      var parrafo = document.createElement('p');
      parrafo.append(datos_usuario[i]);
      box_none.append(parrafo);
    }

  }); // --- addEventListener submit ---

}); // --- addEventListener load --- 