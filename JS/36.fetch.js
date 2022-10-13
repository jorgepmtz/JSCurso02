'use strict';

// ---------- Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
console.log(div_usuarios);
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(data => {
    usuarios = data;
    console.log('esto es usuarios ->', usuarios);

    usuarios.map((userx, i) =>{
      let nombre = document.createElement('h4');
      //console.log( 'userx', userx);
      nombre.innerHTML = i + '. ' + userx.username + ' - ' + userx.email;
      console.log(nombre.innerHTML);
      div_usuarios.appendChild(nombre);

      document.querySelector('.loading').style.display = 'none';

    });

  });



// var div_usuarios = document.querySelector('#usuarios')

// fetch ('https://jsonplaceholder.typicode.com/users/1')   
// 	  .then(( response ) => response.json())
// 	  .then(( myJson ) => {   
// 	  console.log('Aquí está el json !', myJson );   
//     myJson.map((response, i) => {
//       let name = document.createElement('h2');
//       name.innerHTML = i +'. '+ myJson.username + ' - '+ myJson.name;
//       div_usuarios.appendChild(name);
//     });  

//   });

