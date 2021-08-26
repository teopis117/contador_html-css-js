// inicializamos la variable que llevara nuestro conteo de clicks
let contador = 0;

let count =document.querySelector('.contador');

// ahora que ya tenemos como referencia al elemento con la clase contador podemos utilizar todas las propiedades de html en el como el caso de insertarle codigo
count.innerHTML=contador;


// cuando hacemos click en el boton con  la clase click le agregamos 1 al contador y este es mostrado en la pantalla
document.getElementById('mas').addEventListener('click',() => 
{
    contador++;
    count.innerHTML=contador;
});
document.getElementById('menos').addEventListener('click',() => 
{
    contador--;
    count.innerHTML=contador;
});
