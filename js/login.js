window.addEventListener("load", inicio);

function inicio(){
    document.getElementById("idBoton").addEventListener("click", finestraSecundaria);
}

function finestraSecundaria (){
    window.location.replace("index2.html")
    }