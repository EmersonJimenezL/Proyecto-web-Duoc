// RELIZAR VALIDACIONES NUEVAMENTE, REVISAR VARIABLES

function obtenerDatos() {
    var usuario = document.getElementById("inputEmail4").value;
    var password = document.getElementById("inputPassword4").value;
    var address = document.getElementById("inputAddress").value;
    var address2 = document.getElementById("inputAddress2").value;
    var city = document.getElementById("inputCity").value;
    var state = document.getElementById("inputState").value;

    // Validar longitud del nombre de usuario
    if (usuario.trim().length < 5 || usuario.trim().length > 50) {
        alert("El nombre de usuario debe tener entre 5 y 10 caracteres.");
    }

    if (password.trim().length < 5 || password.trim().length > 15) {
        alert("La contraseña debe tener entre 5 y 15 caracteres.");
    }
    
    if(!isNaN(password)) {
        alert("Tu contraseña no solo debe contener numeros, tambien debe contener letras.");
    }

    if (address.trim().length < 4 || address.trim().length > 20) {
        alert("Tu nombre de usuario debe tener entre 4 y 20 caracteres.");
    }
    
    if(!isNaN(address)) {
        alert("Tu Nombre de usuario no puede contener solo numeros, debe ser una mescla de digitos y letras.");
    }

    if (address2.trim().length < 4 || address2.trim().length > 40) {
        alert("Tu direccion debe contener entre 4 y 40 caracteres (tanto el nombre de la calle y la numeracion).");
    }
    
    if(!isNaN(address2)) {
        alert("Tu direccion no puede contener solo numeros, debe ser una mescla del nombre de la calle y su numeracion.");
    }
    
    if (city.trim().length < 4 || city.trim().length > 20) {
        alert("Tu Region debe contener entre 4 y 20 caracteres (tanto el nombre de la calle y la numeracion).");
    }
    
    if(!isNaN(city)) {
        alert("Recuerda rellenar la region con letras y no numeros.");
    }

    console.log("Email: ", usuario);
    console.log("Contraseña: ", password);
    console.log("Nombre De Usuario: ", address);
    console.log("Direccion: ", address2);
    console.log("Region: ", city);
    console.log("Comuna: ", state);
}