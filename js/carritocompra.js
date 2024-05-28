document.addEventListener('DOMContentLoaded',()=>{
    obtenerDatos();
});

async function obtenerDatos() { //funcion asincrona, nos conectamos a una pagina exterior para pedir informacion
        const url = 'https://dwnuvpjkltqfzsdsfhcfz3hmkq0sxihp.lambda-url.us-east-1.on.aws/';
        const dato = await fetch(url);
        const datosJson = await dato.json();
        console.log(datosJson.hoteles)
        recorrerDatos(datosJson.hoteles)
}


function recorrerDatos( datosHotel/*climas vendria siendo climaJson.current*/){
    const contenedor = document.getElementById('tbodyCarro');
    datosHotel.forEach(datos => {
        const tabla = crearFilas(datos);
        contenedor.appendChild(tabla);
    });
}



function crearFilas(hotel){

    const {nombre,precio} = hotel;

    const trBody = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = nombre;

    const td2 = document.createElement('td');

    const input = document.createElement('input');
    input.setAttribute('type', 'number');


    const td3 = document.createElement('td');
    td3.textContent = precio;
    // const td3 = document.createElement('td');
    // const td4 = document.createElement('td');
    // const td5 = document.createElement('td');

    trBody.appendChild(td1)
    trBody.appendChild(td2)
    trBody.appendChild(td3)
    td2.appendChild(input)
    // trBody.appendChild(td4)
    // trBody.appendChild(td5)

    return trBody;
    
}
