var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var dni = document.getElementById('dni');
var usuario = document.getElementById('user');
var clave = document.getElementById('password');

var error = document.getElementById('error');
error.style.color = 'red';

//function enviarFormulario(){

//    console.log('Enviando formulario...');

//    var mensajesError = [];

//    if (nombre.value == null || nombre.value === ''){
//        mensajesError.push('Ingresa tu nombre');
//    }

//      error.innerHTML = mensajesError.join(',');

 //   return false;

//} 


var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
   
//        console.log('Enviando formulario...');

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }

    if (apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresa tu apellido');
    }

    if (dni.value === null || dni.value === ''){
        mensajesError.push('Ingresa tu DNI');
    }

    if (usuario.value === null || usuario.value === ''){
        mensajesError.push('Ingresa tu Usuario');
    }

    if (clave.value === null || clave.value === ''){
        mensajesError.push('Ingresa tu Clave');
    }


      error.innerHTML = mensajesError.join(', ');
  
      //Si tiene errores no hago el submit del formulario
      if(mensajesError.length > 0) { 
        evt.preventDefault();
       }

    });
