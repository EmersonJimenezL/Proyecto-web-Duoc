function comprobacionDatos() {
    var usuario = document.getElementById("Nombre").value;
    var password = document.getElementById("Contrasena").value;
    var codigo = document.getElementById("Codigo").value;
   
    if (usuario.trim().length < 5 || usuario.trim().length > 50) {
        alert("El nombre de usuario debe tener entre 5 y 10 caracteres.");
    }

    if (password.trim().length < 5 || password.trim().length > 15) {
        alert("La contrase単a debe tener entre 5 y 15 caracteres.");
    }
    
    if(!isNaN(password)) {
        alert("Tu contrase単a no solo debe contener numeros, tambien debe contener letras.");
    }

    console.log("Nombre: ",usuario);
    console.log("Contrasena: ",password);
    console.log("Codigo: ",codigo);
}