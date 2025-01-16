function evaluar(expresion) {
    // Eliminar espacios de la expresión
    expresion = expresion.replace(/\s+/g, '');

    // Función para manejar cálculos simples sin paréntesis
    function calcularSinParentesis(expr) {
        const operadores = /[+\\-*/]/g;
        const numeros = expr.split(operadores).map(Number);
        const ops = expr.match(operadores);

        // Resolver multiplicación y división primero
        for (let i = 0; i < ops.length; i++) {
            if (ops[i] === '*' || ops[i] === '/') {
                const resultado = ops[i] === '*' ? numeros[i] * numeros[i + 1] : numeros[i] / numeros[i + 1];
                numeros.splice(i, 2, resultado);
                ops.splice(i, 1);
                i--; // Recalcular en el mismo índice
            }
        }

        // Resolver suma y resta
        let resultado = numeros[0];
        for (let i = 0; i < ops.length; i++) {
            resultado = ops[i] === '+' ? resultado + numeros[i + 1] : resultado - numeros[i + 1];
        }

        return resultado;
    }

    // Resolver paréntesis recursivamente
    while (expresion.includes('(')) {
        expresion = expresion.replace(/\(([^()]+)\)/g, (_, innerExpr) => calcularSinParentesis(innerExpr));
    }

    // Calcular el resultado final (sin paréntesis)
    return calcularSinParentesis(expresion);
}

// Ejemplo de uso
console.log(evaluar("(2 + 3) * 4")); // 20
console.log(evaluar("10 + (2 * 3) - (4 / 2)")); // 14
console.log(evaluar("((2 + 3) * (7 - 2)) / 5")); // 5
