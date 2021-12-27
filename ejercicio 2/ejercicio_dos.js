/*1. Programa una funcion que invierta las palabras de una cadena 
de texto, pe. miFuncion ("Hola mundo") devolverá "odnuM aloH" */

function invertirPalabras(string)
{
    if(string === "")
    {
        return "";
    }
    else
    {
        /*Para resolver este ejercicio se usa el método "substring" el cual
        retorna un subconjunto
        Y el método charAt  que devuelve un nuevo string modificado*/

        return invertirPalabras(string.substr(1)) + string.charAt(0);
    }
}

let cadenaInvertida = invertirPalabras("Hola Mundo");
console.log(cadenaInvertida);

//Otra forma de solucionarlo

const invertirCadena = (cadena = "") => 
    (!cadena)
        ? console.warn("No has ingresado una cadena de texto")
    //Podemos usar el método split() y reverse para devolver la cadena
        : console.info(cadena.split("").reverse().join(""));

invertirCadena("Hola Mundo");     

/*2. Programa una función para contar el número de veces  que se repite  una palabra 
en un texto largo pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

function contarRepeticion(cadena, palabra)
{
    return cadena.match(new RegExp('(\\w*' + palabra + '\\w*)', 'gi')).length;

}

let vecesPalabra = contarRepeticion("Tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres, en tres terrenos", "tres");
console.log(vecesPalabra);

//Otra forma de solucionarlo

const textoEnCadena = (cadena = "", texto = "") => {
    if(!cadena) return console.warn("No ingresaste un texto válido");
    if(!texto) return console.warn("No hay texto, ni palabra a evaluar");


    let i = 0;
    let contador = 0;

    while(i !== -1)
    {
        i = cadena.indexOf(texto,i);
        if (i != -1) 
        {
            i ++;
            contador++;
        }
    }
    return console.info(" la palabra " + texto + " se repite " + contador + " veces ");
}

textoEnCadena();
textoEnCadena("Hola mundo, adiós mundo", "mundo");

/*3.Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */


const palindromo = (cadena = "") =>
    (!cadena)
    ? console.warn ("Ingrese una cadena")
        :([...cadena].reverse().join("") == cadena)
        ? console.log(true)
        : console.log(false)
    palindromo("salas")

/* 4. Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/ 

 function eliminarPatron(texto)
 {
    let textoModificado = texto.slice(3);
    console.log(textoModificado)
 }

 eliminarPatron("xyz1");

 //Otra forma de solucionarlo
 const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto)
        ? console.warn("No ingresaste el texto")
        :(!patron)
            ? console.warn("No ingresaste un patron de caracteres")
            //Linea para eliminar los caracteres.
            : console.info(texto.replace(new RegExp(patron, "ig"), ""))

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3", "xyz");
