
let city = document.querySelector('input');
let boton = document.querySelector('.boton-enviar');
let temp = document.querySelector("#temperatura");
let contenedor = document.querySelector('.clima-container');
let descripcion = document.querySelector("#desc");
let imagen = document.querySelector("#icon");


boton.addEventListener('click', function verCiudad(data) { 
    ciudad = city.value; 
    if (city.value === '') {return alert('No ingresaste texto') }
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", 
            function(data) { console.log(data);
                document.querySelector("#ciudad").textContent = data.name; 
                temp.textContent = data.main.temp; 
                temp.innerHTML = temp.textContent + '<sup>°C</sup>';
                imagen.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" 
                descripcion.textContent = data.weather[0].description;   
                
            

            

                contenedor.style.visibility = "visible";
                city.value = ''        
            }  ).fail(function() {alert('La ciudad es inexistente')})        
            }     )
            
function cargarCiudad() {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+"Buenos%20Aires"+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", 
    function(data) {  console.log(data) }  )}