var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var dni = document.getElementById('dni');
var usuario = document.getElementById('user');
var clave = document.getElementById('password');
var mail = document.getElementById('mail');

var error = document.getElementById('error');
error.style.color = 'red';


var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
   
//        console.log('Enviando formulario...');

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresá tu Nombre');
    }

    if (apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresá tu Apellido');
    }

    if (dni.value === null || dni.value === ''){
        mensajesError.push('Ingresá tu DNI');
    }

    if (usuario.value === null || usuario.value === ''){
        mensajesError.push('Ingresá tu Usuario');
    }

    if (clave.value === null || clave.value === ''){
        mensajesError.push('Ingresá tu Clave');
    }

    if (mail.value === null || mail.value === ''){
        mensajesError.push('Ingresá tu Mail');
    }


      error.innerHTML = mensajesError.join(', ');
  
      //Si tiene errores no hago el submit del formulario
      if(mensajesError.length > 0) { 
        evt.preventDefault();
       }

    });
