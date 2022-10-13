'use strict'

window.addEventListener('load', function(){

  //console.log(document.querySelector('#formPeliculas'));
  var formulario = document.querySelector('#formPeliculas');
  console.log(formulario)
  
  formulario.addEventListener('submit', function (){
    var titulo = document.querySelector('#addPelicula').value;
    if (titulo.length > 0){
      localStorage.setItem(titulo, titulo);
    }
  }) // ---------- Fin addEventListener de submit

  var ul = this.document.querySelector('#peliculas-list');

  for (var i in this.localStorage){
    console.log(this.localStorage[i]);
    if (typeof this.localStorage [i] == 'string'){
      var li = this.document.createElement('li');
      li.append(this.localStorage[i]);
      ul.append(li);
    }; // --------- Fin de if -----
  }; // ----------- Fin for ---

  var formulariob = document.querySelector('#formBorraPeliculas');
  console.log(formulariob)
  
  formulariob.addEventListener('submit', function (){
    var titulo = document.querySelector('#deletePelicula').value;
    if (titulo.length > 0){
      localStorage.removeItem(titulo);
    }
  }) // ---------- Fin addEventListener de submit


}); // ----------- Fin addEventlistener de load

