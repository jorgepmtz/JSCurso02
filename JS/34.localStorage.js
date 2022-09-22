'use strict';
// ------ Local Storage ---------
window.addEventListener('load', function(){
  // --- Lo primero es comprobar si nuestro navegador soporta localStorage
  if(typeof (Storage) != 'undefined'){
    console.log('Local Storage Disponible en mi navegador');
  }else{
    console.log('Local Storage NO Disponible en mi navegador');
  }
  
  // Guardar datos en el localStorage
  localStorage.setItem('titulo', 'curso de JSx');
  
  // Recuperar datos del locaStorage
  document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo');

  // Guardar objetos
  var usuario = {
    nombre: 'Hugo',
    email: 'hugo@yopmail.com',
    web : 'www.hugo-web.com'
  }
  this.localStorage.setItem('usuario', JSON.stringify(usuario));

  // Recuperar el objeto usuario
  console.log(this.localStorage.getItem('usuario') + ' <-- es una cadena string'); // -- me devuelve una cadena string
  var userjs = JSON.parse(this.localStorage.getItem('usuario'));
  console.log(userjs);   // ---- Ahora si es un objeto js -----
  // --- enviando a página --
  this.document.querySelector('#idDatos').append(userjs.nombre + ' - ' + userjs.web);

  // ---- con esta instrucción borro el localStorage en -> Aplicación -> Almacenamiento local
  // this.localStorage.removeItem('usuario'); // --- solo borra el objeto usuario
  this.localStorage.clear();  // ----- borra todo el localStorage ----


}) // ----- Fin window.addEventListener - load
