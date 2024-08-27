const encriptarBtn = document.querySelector('.contenido__interaccion__boton__encriptar');
const desencriptarBtn = document.querySelector('.contenido__interaccion__boton__desencriptar');
const respuestaDiv = document.querySelector('.contenido__respuesta');
const textarea = document.querySelector('.contenido__texto');
const popup = document.getElementById('popup');

function showPopup() {
    popup.classList.add('active');
}

function closePopup() {
    popup.classList.remove('active');
}

function validateText(text) {
    const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios
    return regex.test(text);
}

function restoreInitialContent() {
    respuestaDiv.innerHTML = `
        <img class="contenido__respuesta__imagen" src="./assets/Muñeco.png">
        <h2 class="contenido__respuesta__titulo">Ningún mensaje fue <br> encontrado</h2>
        <p class="contenido__respuesta__indicacion">Ingresa el texto que desees encriptar o <br> desencriptar.</p>
    `;
}
function encriptarTexto(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

encriptarBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (validateText(text)) {
        const textoEncriptado = encriptarTexto(text);
        cambiarDiseñoRespuesta(textoEncriptado);
        alert('Texto encriptado');
    } else {
        showPopup();
        textarea.value='';
        restoreInitialContent();
    }
});

desencriptarBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (validateText(text)) {
        const textoDesencriptado = desencriptarTexto(text);
        cambiarDiseñoRespuesta(textoDesencriptado);
        alert('Texto desencriptado');
    } else {
        showPopup();
        textarea.value='';
        restoreInitialContent();
    }
});

function cambiarDiseñoRespuesta(texto){
        // Limpiar el div de respuesta
        respuestaDiv.innerHTML = '';
    
        // Mostrar un nuevo textarea y botón copiar
        const newTextarea = document.createElement('textarea');
        newTextarea.classList.add('contenido__respuesta__texto');
        newTextarea.rows = 4;
        newTextarea.cols = 50;
        newTextarea.readOnly = true; // Hacer el textarea solo lectura
        newTextarea.value = texto; // Mostrar el texto encriptado o desencriptado en el textarea

      
    
        const copyButton = document.createElement('button');
        copyButton.classList.add('contenido__respuesta__boton');
        copyButton.textContent = 'Copiar';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(newTextarea.value)
                .then(() => alert('Texto copiado al portapapeles'))
                .catch(err => alert('Error al copiar el texto: ' + err));
        });
        respuestaDiv.appendChild(newTextarea);
        respuestaDiv.appendChild(copyButton);
        respuestaDiv.style.display = 'flex';
        respuestaDiv.style.flexDirection = 'column';
        respuestaDiv.style.justifyContent = 'center';
        respuestaDiv.style.alignItems = 'center';
}



function closePopup() {
    popup.classList.remove('active');
}