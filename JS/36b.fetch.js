'use strict';

// ---------- Fetch (ajax) y peticiones a servicios / apis rest
// ---------- 2a Parte del 36. ------------------------

var div_usuarios = document.querySelector('#usuarios');
console.log(div_usuarios);
var div_antonette = document.querySelector('#antonette');

  getUsuarios()
    .then(data => data.json())
    .then(data => {
      listadoUsuarios(data);
      return getAntonette()
    })
    .then(data => data.json())
    .then(antonette => {
      listarAntonette(antonette);   
    });

// ------- Funnción que hace fetch sobre todos los usuarios ---------    
function getUsuarios(){
  return fetch('https://jsonplaceholder.typicode.com/users');  
} // --------------- Fin function getUsuarios ------------

// ------- Funnción que hace fetch sobre Antonette ---------    
function getAntonette(){
  return fetch('https://jsonplaceholder.typicode.com/users/2');  
} // --------------- Fin function getUsuarios ------------



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