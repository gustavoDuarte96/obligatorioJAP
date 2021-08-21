window.addEventListener("load", inicio);

function inicio(){
    modal();
    document.getElementById("botonRegistro").addEventListener("click", sacarModal);
}

function modal(){
    const formulario = document.querySelector('#idFormulario');
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const registroUsuario = document.querySelector('#idUsuario').value;
        const registroContraseña = document.querySelector('#idPassword').value;
    
        auth
            .createUserWithEmailAndPassword(registroUsuario, registroContraseña)
            .then(userCredential => {
                formulario.reset();
                alert("Te has registrado correctamente!");
                window.location.replace("index2.html");            
            })
            .catch(err => {
                formulario.reset();
                alert("Usuario ya registrado");
            })
    
    })

    const googleSesion = document.querySelector('#iniciarGoogle');
    googleSesion.addEventListener('click', e => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                window.location.replace("index2.html");
            })
            .catch(err => {
            })
    })

    const facebookSesion = document.querySelector('#iniciarFacebook');
    facebookSesion.addEventListener('click', e => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                
            })
            .catch(err => {
            })
    })

    const githubSesion = document.querySelector('#iniciarGithub');
    githubSesion.addEventListener('click', e => {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                
            })
            .catch(err => {
            })
    })

    const formularioInicio = document.querySelector('#idFormularioCreado');
    formularioInicio.addEventListener('submit', e => {
        e.preventDefault();
        const usuarioInit = document.querySelector('#idUsuarioCreado').value;
        const passwordInit = document.querySelector('#idPasswordCreado').value;

        auth
            .signInWithEmailAndPassword(usuarioInit, passwordInit)
            .then(userCredential => {
                formularioInicio.reset();
                alert("Ingresado con exito!");
                window.location.replace("index2.html");
            })
            .catch(err => {
                formularioInicio.reset();
                alert("Usuario o contraseña incorrecta"); 
            })

    })
}

function sacarModal(){
    document.getElementById("idRegistro").style.display = "none";
    alert("Te has registrado correctamente!");
    window.location.replace("index2.html");
}


