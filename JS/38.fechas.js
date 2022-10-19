'use strict';

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos= fecha.getUTCMinutes();
var segundos = fecha.getSeconds();
var textoHora = `
  El año es: ${year}
  El mes es: ${mes} 
  El dia es: ${dia}
  La hora es: ${hora}
  Los minutos son: ${minutos}
  Los segudos son: ${segundos}


`;
// El día comienza en cero por eso tre el 9 aunque estamos en 10-octubre
console.log(textoHora);