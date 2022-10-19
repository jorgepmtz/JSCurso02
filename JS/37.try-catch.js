'use strict';

try{              // ---- try ---- es todo loq ue se quiere probar
  var year = 2022;
  alert(year);
  alert(decodeURIComponent('https://%l2bc.mx'))        // ------------ Si le pongo un '%' me va enviar "Ha ocurrido un error en el código"
}catch(error){    // ----- catch ------- atrapa todo lo que generé error del try
  console.log(error)
  alert('Ha ocurrido un error en el código');
};


