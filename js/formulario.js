document.getElementById("idBoton").addEventListener("click", redirigir);

function redirigir(){
    let nombre = document.getElementById("idNombre");
    let apellido = document.getElementById("idApellido");
    let email = document.getElementById("idEmail");
    let direccion = document.getElementById("idDireccion");
    let departamento = document.getElementById("idDepartamento");
    let ciudad = document.getElementById("idCiudad");
    localStorage.nombre = JSON.stringify(nombre);
    localStorage.apellido = JSON.stringify(apellido);
    window.location.replace("home.html");
}