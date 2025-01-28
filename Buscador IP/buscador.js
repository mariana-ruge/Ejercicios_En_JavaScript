// Ejecuta el script después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const $form = document.querySelector("form");
    const $input = document.querySelector("#ipInput");
    const $results = document.querySelector("#results");

    if (!$form || !$input || !$results) {
        console.error("No se encontraron elementos en el DOM. Verifica los selectores.");
        return;
    }

    // Función para obtener información de una IP usando IPRegistry
    const fetchIpInfo = async (ip) => {
        const apiKey = 'ira_DkPWk0RiBu9XGSOr3CAqiGHFP7KycW37kVKx'; // Tu clave de IPRegistry
        const url = `https://api.ipregistry.co/${ip}?key=${apiKey}&fields=connection,location.country.code&hostname=true&pretty=true`;

        try {
            const response = await axios.get(url); // Realiza la solicitud GET
            console.log('Datos recibidos:', response.data);
            return response.data; // Devuelve los datos obtenidos
        } catch (error) {
            if (error.response) {
                console.error('Error en la respuesta:', error.response.status, error.response.data);
            } else if (error.request) {
                console.error('No se recibió respuesta:', error.request);
            } else {
                console.error('Error al configurar la solicitud:', error.message);
            }
            return null;
        }
    };

    // Manejador del evento submit
    $form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita la recarga de la página

        // Obtiene el valor del input y limpia la IP
        const ip = $input.value.trim(); // Limpia espacios en blanco
        if (!ip) {
            console.error("Por favor, ingrese una dirección IP.");
            return;
        }

        console.log("IP a buscar:", ip); // Verifica qué se está enviando a la API

        // Llama a la función para obtener información
        const ipinfo = await fetchIpInfo(ip);

        // Muestra los resultados
        if (ipinfo) {
            $results.innerHTML = `
                <h3>Resultados:</h3>
                <pre>${JSON.stringify(ipinfo, null, 2)}</pre>
            `;
        } else {
            $results.innerHTML = `
                <h3>Ocurrió un error al buscar la información. Por favor, inténtelo nuevamente.</h3>
            `;
        }
    });
});

