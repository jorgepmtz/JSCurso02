'use strict';

// ---------- Fetch (ajax) y peticiones a servicios / apis rest
// ---------- 3a Parte del 36. ------------------------

var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor');
var div_antonette = document.querySelector('#antonette');

console.log(div_usuarios);

  getUsuarios()
    .then(data => data.json())
    .then(data => {
      listadoUsuarios(data);
      return getInfo();
    })
    .then(data => {
      div_profesor.innerHTML = data;
      console.log( 'JSON.stringify de Profesor -> ', data);
      return getAntonette();
    })
    .then(data => data.json())
    .then(antonette => {
      listarAntonette(antonette);
    })
    .catch( error => {
      alert('Error en las peticiones') // Si vambio 'https://jsonplaceholder.typicode.com/users' por 'https://jsonplaceholder.tipicode.com/users'
    });

// ------- Funnción que hace fetch sobre todos los usuarios ---------    
function getUsuarios(){
  return fetch('https://jsonplaceholder.typicode.com/users');  
} // --------------- Fin function getUsuarios ------------

// ------- Funnción que hace fetch sobre Antonette ---------    
function getAntonette(){
  return fetch('https://jsonplaceholder.typicode.com/users/2');  
} // --------------- Fin function getUsuarios ------------

function getInfo(){
  var profesor = {
    nombre : 'Jorge',
    apellido : 'Peña',
    url : 'http://l2bc.mx'
  } // ---------- Fin del objeto Json de Jorge Peña -----------

  return new Promise((resolve, reject) => {
    var profesor_string =  '';

    setTimeout(function(){
      profesor_string =  JSON.stringify(profesor);

      if (typeof profesor_string != 'string' || profesor_string == '') return reject('error reject');
      return resolve(profesor_string);
    },3000);
    
  });

}

function listadoUsuarios (usuarios) {
  usuarios.map((userx, i) =>{
    let nombre = document.createElement('h4');
    console.log( 'userx', userx);
    nombre.innerHTML = i + '. ' + userx.username + ' - ' + userx.email + ' - ' + userx.name;
    console.log(nombre.innerHTML);
    div_usuarios.appendChild(nombre);
  
    document.querySelector('.loading').style.display = 'none';
  
  });
}; // --------------- Fin function listadoUsuarios -------------

function listarAntonette (usery) {
  let nombre = document.createElement('h4');
  let xtra =  document.createElement('h4');
  //console.log( 'userx', userx);
  nombre.innerHTML = 'Y1' + '. ' + usery.username + ' - ' + usery.email + ' - ' + usery.name;
  xtra.innerHTML = 'extra' + '. ' + usery.company.name;

  console.log(nombre.innerHTML);
  
  div_antonette.appendChild(nombre);
  div_antonette.appendChild(xtra);

  document.querySelector('#antonette .loading').style.display = 'none';

}; // --------------- Fin function listadoUsuarios -------------