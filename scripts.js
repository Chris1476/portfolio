function validarTexto() {
    var texto = document.getElementById("txtCifrarDescifrar").value;
    var mensajeError = document.getElementById('mensajeError');

    if (!textoValido(texto)) {
        mensajeError.textContent = 'El texto no debe contener mayúsculas ni caracteres especiales.';
        return false;
    } else {
        mensajeError.textContent = 'Texto válido.';
        return true;
    }
}

function textoValido(texto) {
    var regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function Cifrar() {
    var textoCifrar = document.getElementById("txtCifrarDescifrar").value;
    var textoCifrado = '';

    if(validarTexto() == false)
    { 
        return;
    }        

    for (var i = 0; i < textoCifrar.length; i++) {
        var caracter = textoCifrar[i];

        switch (caracter) {
            case 'a':
                textoCifrado += 'ai';
                break;
            case 'e':
                textoCifrado += 'enter';
                break;
            case 'i':
                textoCifrado += 'imes';
                break;
            case 'o':
                textoCifrado += 'ober';
                break;
            case 'u':
                textoCifrado += 'ufat';
                break;
            default:
                textoCifrado += caracter;
                break;
        }
    }

    var CifradoDescifradoDiv = document.getElementById("CifradoDescifrado");
    CifradoDescifradoDiv.innerHTML = textoCifrado;
}

function Descifrar() {

    if(validarTexto() == false)
        { 
            return;
        } 

    var textoDescifrar = document.getElementById("txtCifrarDescifrar").value;

    var sustituciones = [
        { buscar: 'ai', reemplazo: 'a' },
        { buscar: 'enter', reemplazo: 'e' },
        { buscar: 'imes', reemplazo: 'i' },
        { buscar: 'ober', reemplazo: 'o' },
        { buscar: 'ufat', reemplazo: 'u' }
    ];

    for (var i = 0; i < sustituciones.length; i++) {
        var buscar = sustituciones[i].buscar;
        var reemplazo = sustituciones[i].reemplazo;

        var regex = new RegExp(buscar, 'g');
        textoDescifrar = textoDescifrar.replace(regex, reemplazo);
    }

    var CifradoDescifradoDiv = document.getElementById("CifradoDescifrado");
    CifradoDescifradoDiv.innerHTML = textoDescifrar;
}

function Copiar() {
    var textoParaCopiar = document.getElementById("CifradoDescifrado").innerText;

    // Uso la API de Clipboard para copiar al portapapeles
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        alert('Texto copiado al portapapeles!');
    }).catch(function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

function mostrarModal() {
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}