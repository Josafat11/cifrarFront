// Función para el Cifrado César
export function cifrarCesar(mensaje, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Mayúsculas
            resultado += String.fromCharCode((char - 65 + desplazamiento) % 26 + 65);
        } else if (char >= 97 && char <= 122) { // Minúsculas
            resultado += String.fromCharCode((char - 97 + desplazamiento) % 26 + 97);
        } else {
            resultado += mensaje[i]; // Otros caracteres
        }
    }
    return resultado;
}

// Función para descifrar con el Cifrado César
export function descifrarCesar(mensaje, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            resultado += String.fromCharCode((char - 65 - desplazamiento + 26) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            resultado += String.fromCharCode((char - 97 - desplazamiento + 26) % 26 + 97);
        } else {
            resultado += mensaje[i];
        }
    }
    return resultado;
}

// Función para el Cifrado Escítala
export function cifrarEscitala(mensaje, columnas) {
    let resultado = '';
    let filas = Math.ceil(mensaje.length / columnas);

    for (let i = 0; i < columnas; i++) {
        for (let j = i; j < mensaje.length; j += columnas) {
            resultado += mensaje[j];
        }
    }
    return resultado;
}

// Función para descifrar el Cifrado Escítala
export function descifrarEscitala(mensaje, columnas) {
    let resultado = '';
    let filas = Math.ceil(mensaje.length / columnas);
    let matriz = Array.from({ length: filas }, () => []);

    let pos = 0;
    for (let i = 0; i < columnas; i++) {
        for (let j = 0; j < filas && pos < mensaje.length; j++) {
            matriz[j][i] = mensaje[pos];
            pos++;
        }
    }

    for (let fila of matriz) {
        resultado += fila.join('');
    }
    return resultado.trim();
}
