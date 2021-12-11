/*1. Programa una función que cuente el número de caracteres de una cadena 
 de texto*/

function totalDeCaracteres(cadena)
{
    let texto = cadena;
    console.log(texto.length);
}

totalDeCaracteres("Hola Mundo");

/*2. Programa una función que te devuelva el texto recortado según el número 
de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */ 

function cortarCaracteres(cadena)
{
    //El método substring elimina carecteres de los strings
    let extraida = cadena.substring(4);
    console.log("Coratdo: " + extraida);
}

cortarCaracteres("Hola Mundo");

/*3. Programa una función que dada una String te devuelva un 
Array de textos separados por cierto caracter,pe. 
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

//Caracter para separar guión -

 function separarCadena(cadenaADividir,separador) 
 {
    let arrayDeCadenas = cadenaADividir.split(separador);
    console.log('La cadena original es: "' + cadenaADividir + '"');
    console.log('El separador es: "' + separador + '"');
    console.log(' El array tiene ' + arrayDeCadenas.length + "  elementos: ");
 
    for (let i=0; i < arrayDeCadenas.length; i++) 
    {
       document.write(arrayDeCadenas[i] + " - ");
    }
 } 
 
 let cadenaFrase = "Feeling my way through the darkness guided by a beating heart I can't tell where the journey will end but I know where to start";
 
 let espacio = " ";
 let coma = ",";
 let guion = "-";
 

 separarCadena(cadenaFrase, espacio);
 separarCadena(cadenaFrase, coma); 
 separarCadena(cadenaFrase, guion); 


 /*  4. Programa una función que repita un texto X veces
  pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function repetirCadena()
{
    let cadena = " Hola ";
    let cadenaRepetida = cadena.repeat(3);
    let repetir = cadenaRepetida;
    console.log(repetir );
}

repetirCadena();
 
  