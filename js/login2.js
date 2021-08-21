window.addEventListener("load", inicio);

function inicio(){
    document.getElementById("idBoton").addEventListener("click", comprobar);
}

function comprobar(){
    let usuario = document.getElementById("inputEmail").value;
    let contraseña = document.getElementById("inputPassword").value;
    if(usuario.length != 0 && contraseña.length != 0){
        finestraSecundaria();
    }
}

function finestraSecundaria (){
    window.location.replace("index2.html")
    }