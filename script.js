
function mostrarProducto(nombre) {          //productos
    alert("Has seleccionado: " + nombre + ". Próximamente podrás agregar este producto al carrito.");
}


const formularioRegistro = document.getElementById("formRegistro");                 //registroo

if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("regNombre").value.trim();
        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;

        const errorNombre = document.getElementById("errorNombre");
        const errorEmail = document.getElementById("errorEmail");
        const errorPassword = document.getElementById("errorPassword");
        const mensaje = document.getElementById("mensajeRegistro");

        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorPassword.textContent = "";
        mensaje.textContent = "";

        let valido = true;

        if (nombre.length < 3) {
            errorNombre.textContent = "Ingresa un nombre válido.";
            valido = false;
        }

        if (!validarEmail(email)) {
            errorEmail.textContent = "Ingresa un correo electrónico válido.";
            valido = false;
        }

        if (password.length < 6) {
            errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres.";
            valido = false;
        }

        if (valido) {
            mensaje.textContent = "Registro realizado correctamente.";
            formularioRegistro.reset();
        }
    });
}


const formularioLogin = document.getElementById("formLogin");              //login

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const errorEmail = document.getElementById("errorLoginEmail");
        const errorPassword = document.getElementById("errorLoginPassword");
        const mensaje = document.getElementById("mensajeLogin");

        errorEmail.textContent = "";
        errorPassword.textContent = "";
        mensaje.textContent = "";

        let valido = true;

        if (!validarEmail(email)) {
            errorEmail.textContent = "Ingresa un correo electrónico válido.";
            valido = false;
        }

        if (password.length < 6) {
            errorPassword.textContent = "Ingresa una contraseña de al menos 6 caracteres.";
            valido = false;
        }

        if (valido) {
            mensaje.textContent = "Inicio de sesión correcto.";
            formularioLogin.reset();
        }
    });
}


const formularioContacto = document.getElementById("formContacto");  //fromulario de contacto

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("contactoNombre").value.trim();
        const email = document.getElementById("contactoEmail").value.trim();
        const mensajeTexto = document.getElementById("contactoMensaje").value.trim();

        const errorNombre = document.getElementById("errorContactoNombre");
        const errorEmail = document.getElementById("errorContactoEmail");
        const errorMensaje = document.getElementById("errorContactoMensaje");
        const mensaje = document.getElementById("mensajeContacto");

        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorMensaje.textContent = "";
        mensaje.textContent = "";

        let valido = true;

        if (nombre.length < 3) {
            errorNombre.textContent = "Ingresa tu nombre.";
            valido = false;
        }

        if (!validarEmail(email)) {
            errorEmail.textContent = "Ingresa un correo electrónico válido.";
            valido = false;
        }

        if (mensajeTexto.length < 10) {
            errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
            valido = false;
        }

        if (valido) {
            mensaje.textContent = "Mensaje enviado correctamente.";
            formularioContacto.reset();
        }
    });
}


function validarEmail(email) {             //validacion de correo
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
}