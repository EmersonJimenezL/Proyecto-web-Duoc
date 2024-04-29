function obtenerDatos(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("pass").value;

    const mensaje_error_name = document.getElementById('mensaje-error-nombre');
    const mensaje_error_password = document.getElementById('mensaje-error-password');

    mensaje_error_name.style.display= 'none';
    mensaje_error_password.style.display= 'none';

    console.log(name,password)

    if(name.trim().length<3){
        mensaje_error_name.style.display= 'block';
        mensaje_error_name.textContent = '¡Error en las credenciales de inicio!';
    } 

    if(name.trim() === ""){
        mensaje_error_name.style.display= 'block';
        mensaje_error_name.textContent = '¡Error, el cambo no puede estar vacio!';
    } 

    if(password.trim() === ""){
        mensaje_error_password.style.display= 'block';
        mensaje_error_password.textContent = '¡El campo no puede estar vacío!';
    }

}