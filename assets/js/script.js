//Parte I
// Función asíncrona principal
async function obtenerTitulosDeAlbums() {
    try {
      // URL de la nube
    const url = 'https://jsonplaceholder.typicode.com/photos';

// Realizar la solicitud utilizando fetch y await
    const response = await fetch(url);
    const data = await response.json();

// Mostrar los primeros 20 títulos de álbumes
    data.slice(0, 20).forEach(album => {
        console.log(album.title);
    });

    // Retornar la promesa de la función de enviar información después de 3 segundos
    return enviarInformacionDespuesDe3Segundos();
    } catch (error) {
    console.error('Error al obtener los títulos de álbumes:', error);
    }
}

  // Función que retorna una promesa para simular un retraso de 3 segundos
    function enviarInformacionDespuesDe3Segundos() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Información Enviada');
    }, 3000);
    });
}

// Función asíncrona para manejar la respuesta de enviarInformacionDespuesDe3Segundos
    async function manejarInformacionEnviada() {
    const mensaje = await enviarInformacionDespuesDe3Segundos();
    console.log(mensaje);
}

// Llamar a la función principal
obtenerTitulosDeAlbums();

// Llamar a la función para manejar la respuesta después de 3 segundos
manejarInformacionEnviada();

//Parte II
// Requerimiento 1: Implementar ES6 --> Listo!
// Requerimiento 2: Crear una función asíncrona para obtener datos de la URL.
async function obtenerTitulosDeAlbums() {
    try {
      // Requerimiento 3: Utilizar fetch con await dentro de un bloque Try/Catch
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const response = await fetch(url);
    const data = await response.json();

      // Requerimiento 4: Utilizar forEach para mostrar los primeros 20 títulos
    data.slice(0, 20).forEach(album => {
        console.log(album.title);
    });

      // Requerimiento 5: Crear una función que retorne una promesa después de 3 segundos
    const mensajePromesa = () => {
        return new Promise(resolve => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
        });
    };

      // Requerimiento 6: Crear una función asíncrona que reciba y muestre el mensaje
    async function mostrarMensaje() {
        const mensaje = await mensajePromesa();
        console.log(mensaje);
    }

      // Llamar a la función para mostrar el mensaje después de 3 segundos
    mostrarMensaje();
    } catch (error) {
    console.error('Error al obtener los títulos de álbumes:', error);
    }
}

  // Llamar a la función principal
obtenerTitulosDeAlbums();

