'use strict';

// JSON = JavaScript Object Notation

window.addEventListener('load', function(){    // ----------- Use window.addEventListener porque document.addEventListener no funcionó parece que es por el LiveServer
  
  var pelicula = {
    titulo : 'Batman',
    year : 2017,
    pais : 'EUA'
  }
    
  var peliculas = [
    {titulo : 'La verdad duele', year: 2018, pais: 'México'},
    pelicula
  ]
  console.log(peliculas);
  
  var cajaPeliculas = document.querySelector('#peliculas');
  console.log(cajaPeliculas);
  var i;
  for(i in peliculas){
    var p = this.document.createElement('p');
    p.append(peliculas[i].titulo + ' - ' + peliculas[i].year);
    cajaPeliculas.append(p);

  }

}) // ----- Fin addEventListener 'load' ---------
