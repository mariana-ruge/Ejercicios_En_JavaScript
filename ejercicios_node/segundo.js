function primerNoRepetido(cadena) {
    const conteo = {}; // Objeto para almacenar el conteo de cada carácter

    // Contar la frecuencia de cada carácter
    for (let char of cadena) {
        conteo[char] = (conteo[char] || 0) + 1;
    }

    // Encontrar el primer carácter que no se repite
    for (let char of cadena) {
        if (conteo[char] === 1) {
            return char;
        }
    }

    return null; // Si todos los caracteres se repiten
}

// Ejemplo de uso
console.log(primerNoRepetido("abacabad")); // "c"
console.log(primerNoRepetido("abacabaabacaba")); // null
