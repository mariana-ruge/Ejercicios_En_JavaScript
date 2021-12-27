/* 1.  Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const aleatorio = (inicio, fin) =>
{
    return (Math.floor((Math.random() * (inicio - fin + 1)) + inicio));
}
console.log(aleatorio(501, 600));

/* 2.  Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/ 
 
 const invertir = (numero) =>
 {
     return Number(numero.toString().split('').reverse('').join(''))
 }

 console.log(invertir(12345));


 //Evaluar si el número es capicua

 const capicua = (numero = 0) =>
 {
     if(!numero)
     {
        return console.warn("No se ha encontrado un número");
     } 
     
     if(typeof numero !== "number")
     {
        return console.error("El valor ingresado no es un número");
     }

     numero = numero.toString();
     let alreves = numero.split("").reverse("").join("");

     return (numero === alreves)
         ? console.info(`si es capicua, Número original ${numero}, Número al revés ${alreves}`)
         : console.info(`No es capicua, Número original ${numero}, Número al revés ${alreves}`)

 }

 capicua(2002);

 /*3. Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n), 
pe. miFuncion(5) devolverá 120.*/

function factorial (numero) 
{
    let total = 1;
    for (i = 1; i<=numero; i++)
    {
        total = total * i;
    }

    return total
}

console.log(factorial(5));
