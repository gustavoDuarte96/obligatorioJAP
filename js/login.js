window.addEventListener("load", modal);

function modal() {

//Registro de usuario
  const formulario = document.querySelector("#idFormulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const registroUsuario = document.querySelector("#idUsuario").value;
    const registroContraseña = document.querySelector("#idPassword").value;
    auth
      .createUserWithEmailAndPassword(registroUsuario, registroContraseña)
      .then((userCredential) => {
        localStorage.usuario = JSON.stringify(registroUsuario);
        formulario.reset();
        const divError = document.querySelector("#idErrores");
        divError.innerHTML = "";
        formulario.innerHTML = `<h3 style="color: green;">Te has registrado correctamente!</h3>`;
        setTimeout(() => {
          console.log("1 Segundo esperado");
        }, 1000);
        window.location.replace("home.html");
      })
      .catch((err) => {
        const divError = document.querySelector("#idErrores");
        divError.innerHTML = "";
        let esMail = false;
        let contraseñaCorrecta = false;
        for (let i = 0; i < registroUsuario.length; i++) {
          if (registroUsuario[i] == "@") {
            esMail = true;
          }
        }
        if (registroContraseña.length >= 6) {
          contraseñaCorrecta = true;
        }
        if (!esMail || !contraseñaCorrecta) {
          divError.innerHTML = `<p style="color: red;">Debe ingresar un email correcto y la contraseña debe superar los 6 digitos</p>`;
          formulario.reset();
        } else {
          divError.innerHTML = `<p style="color: red;">Este correo ya esta ingresado</p>`;
          formulario.reset();
        }
      });
  });

  //Iniciar sesion con Google
  const googleSesion = document.querySelector("#iniciarGoogle");
  googleSesion.addEventListener("click", (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const registroUsuario = "Cuenta de Google";
        localStorage.usuario = JSON.stringify(registroUsuario);
        window.location.replace("home.html");
      })
      .catch((err) => {});
  });

  //Iniciar sesion con Facebook
  const facebookSesion = document.querySelector("#iniciarFacebook");
  facebookSesion.addEventListener("click", (e) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const registroUsuario = "Cuenta de Facebook";
        localStorage.usuario = JSON.stringify(registroUsuario);
        window.location.replace("home.html");
      })
      .catch((err) => {});
  });

  //Iniciar sesion con GitHub
  const githubSesion = document.querySelector("#iniciarGithub");
  githubSesion.addEventListener("click", (e) => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const registroUsuario = "Cuenta de GitHub";
        localStorage.usuario = JSON.stringify(registroUsuario);
        window.location.replace("home.html");
      })
      .catch((err) => {});
  });

  //Iniciar sesion con usuario creado
  const formularioInicio = document.querySelector("#idFormularioCreado");
  formularioInicio.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuarioInit = document.querySelector("#idUsuarioCreado").value;
    const passwordInit = document.querySelector("#idPasswordCreado").value;
    auth
      .signInWithEmailAndPassword(usuarioInit, passwordInit)
      .then((userCredential) => {
        localStorage.usuario = JSON.stringify(usuarioInit);
        formularioInicio.reset();
        alert("Ingresado con exito!");
        window.location.replace("home.html");
      })
      .catch((err) => {
        formularioInicio.reset();
        alert("Usuario o contraseña incorrecta");
      });
  });
}
