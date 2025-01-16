function mayores_edad() {
    // Crear un arreglo con objetos (diccionarios)
    const personas = [
        { nombre: "Luis", apellido: "Salazar", edad: 20 },
        { nombre: "Ana", apellido: "Martínez", edad: 16 },
        { nombre: "Luis", apellido: "Pérez", edad: 17 },
        { nombre: "María", apellido: "López", edad: 22 },
        { nombre: "Luis", apellido: "Gómez", edad: 15 }
    ];

    // Lista para mayores de edad con nombre "Luis"
    const mayoresLuis = personas.filter(persona => persona.nombre === "Luis" && persona.edad >= 18);

    // Lista para menores de edad con cuánto les falta para ser mayores
    const menores = personas.filter(persona => persona.edad < 18).map(persona => {
        return {
            nombre: persona.nombre,
            apellido: persona.apellido,
            edad: persona.edad,
            falta: 18 - persona.edad // Años que faltan para ser mayor de edad
        };
    });

    // Mostrar resultados
    console.log("Mayores de edad llamados Luis:", mayoresLuis);
    console.log("Menores de edad y cuánto les falta:", menores);
}

mayores_edad();
