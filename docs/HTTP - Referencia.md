**HTTP - El Lenguaje de la Web**

**Índice:**

1.  **¿Qué es HTTP? Fundamentos.**
    *   Definición y Significado
    *   Modelo Cliente-Servidor
    *   HTTP es "Stateless" (Sin Estado)
    *   HTTP y HTTPS
2.  **¿Cómo nos ayuda a comunicar aplicaciones?**
    *   Estandarización e Interoperabilidad
    *   Estructura de un Mensaje HTTP (Petición y Respuesta)
        *   Línea de Inicio / Línea de Estado
        *   Cabeceras (Headers)
        *   Cuerpo (Body)
3.  **Métodos HTTP: Usos y Buenas Prácticas**
    *   `GET`: Recuperar datos.
    *   `POST`: Crear nuevos recursos / Enviar datos para procesar.
    *   `PUT`: Actualizar un recurso existente (reemplazo completo).
    *   `DELETE`: Eliminar un recurso.
    *   `PATCH`: Actualizar parcialmente un recurso.
    *   `HEAD`: Similar a GET, pero sin el cuerpo de la respuesta.
    *   `OPTIONS`: Describir las opciones de comunicación para el recurso de destino.
    *   Idempotencia y Seguridad de los Métodos.
4.  **Códigos de Estado HTTP Comunes**
    *   1xx: Informativos
    *   2xx: Éxito (200 OK, 201 Created, 204 No Content)
    *   3xx: Redirección (301 Moved Permanently, 302 Found)
    *   4xx: Errores del Cliente (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
    *   5xx: Errores del Servidor (500 Internal Server Error, 503 Service Unavailable)
5.  **Ejemplos Prácticos de Consultas a APIs**
    *   Usando `cURL` (Línea de Comandos)
    *   Usando JavaScript:
        *   `fetch` API
        *   `Axios` (librería popular)
6.  **Conclusiones y Buenas Prácticas Adicionales**

---

**1. ¿Qué es HTTP? Fundamentos**

*   **Definición y Significado:**
    HTTP son las siglas de **H**yper**T**ext **T**ransfer **P**rotocol (Protocolo de Transferencia de Hipertexto). Es el protocolo fundamental utilizado para la comunicación en la World Wide Web. Define cómo se formatean y transmiten los mensajes entre clientes (navegadores, aplicaciones móviles) y servidores (donde residen los sitios web y las APIs).

*   **Modelo Cliente-Servidor:**
    HTTP opera bajo un modelo de solicitud-respuesta.
    *   **Cliente:** Es quien inicia la comunicación. Generalmente es un navegador web, una aplicación móvil o incluso otro servidor que necesita datos. El cliente envía una **petición HTTP** al servidor.
    *   **Servidor:** Es quien espera las peticiones. Aloja los recursos (páginas HTML, imágenes, datos JSON, etc.) y, al recibir una petición, la procesa y envía una **respuesta HTTP** de vuelta al cliente.

    *Analogía sencilla:* Piensen en un restaurante. Ustedes (el cliente) piden un plato (la petición) al camarero, quien lo lleva a la cocina (el servidor). La cocina prepara el plato y el camarero se lo trae de vuelta (la respuesta).

*   **HTTP es "Stateless" (Sin Estado):**
    Esto es crucial. Cada petición HTTP desde un cliente a un servidor se trata como una transacción independiente. El servidor no guarda ninguna información sobre peticiones anteriores del mismo cliente. Si se necesita mantener un estado (por ejemplo, un carrito de compras o una sesión de usuario), se deben usar mecanismos adicionales como cookies, tokens en cabeceras (JWT) o almacenamiento local del lado del cliente.

*   **HTTP y HTTPS:**
    **HTTPS** (HTTP Secure) es la versión segura de HTTP. Utiliza cifrado (TLS/SSL) para proteger la comunicación entre el cliente y el servidor, asegurando la confidencialidad e integridad de los datos. Hoy en día, usar HTTPS es una práctica estándar y esencial.

**2. ¿Cómo nos ayuda a comunicar aplicaciones?**

*   **Estandarización e Interoperabilidad:**
    HTTP proporciona un conjunto de reglas bien definidas (un estándar) que todos los participantes de la web (navegadores, servidores, lenguajes de programación) pueden entender. Esto permite que una aplicación desarrollada en Python pueda comunicarse con un servidor en Java, o que un navegador pueda acceder a cualquier sitio web, independientemente de la tecnología subyacente. Es el "idioma franco" de la web.

*   **Estructura de un Mensaje HTTP (Petición y Respuesta):**
    Tanto las peticiones como las respuestas tienen una estructura similar:

    *   **Petición HTTP:**
        1.  **Línea de Inicio (Request Line):**
            *   **Método HTTP:** (GET, POST, etc.) Indica la acción deseada.
            *   **URI (Uniform Resource Identifier):** La ruta del recurso al que se quiere acceder (ej: `/users/123`).
            *   **Versión de HTTP:** (ej: `HTTP/1.1`, `HTTP/2`).
            *   Ejemplo: `GET /productos/42 HTTP/1.1`

        2.  **Cabeceras (Headers):**
            *   Pares clave-valor que proporcionan información adicional sobre la petición.
            *   Ejemplos:
                *   `Host: api.ejemplo.com` (Dominio del servidor)
                *   `User-Agent: Mozilla/5.0 ...` (Información del cliente)
                *   `Accept: application/json` (Qué tipo de respuesta espera el cliente)
                *   `Content-Type: application/json` (Qué tipo de datos envía el cliente en el cuerpo)
                *   `Authorization: Bearer <token>` (Para autenticación)

        3.  **Cuerpo (Body - Opcional):**
            *   Contiene los datos que se envían al servidor (ej: datos de un formulario en una petición POST, datos JSON). No todas las peticiones llevan cuerpo (GET o HEAD no suelen llevarlo).

    *   **Respuesta HTTP:**
        1.  **Línea de Estado (Status Line):**
            *   **Versión de HTTP:**
            *   **Código de Estado:** Un número de 3 dígitos que indica el resultado de la petición.
            *   **Mensaje de Estado:** Una breve descripción textual del código.
            *   Ejemplo: `HTTP/1.1 200 OK`

        2.  **Cabeceras (Headers):**
            *   Pares clave-valor con información sobre la respuesta.
            *   Ejemplos:
                *   `Date: Tue, 15 Nov 2023 08:12:31 GMT`
                *   `Content-Type: application/json` (Tipo de datos en el cuerpo de la respuesta)
                *   `Content-Length: 150` (Tamaño del cuerpo)
                *   `Set-Cookie: ...` (Para establecer cookies)

        3.  **Cuerpo (Body - Opcional):**
            *   Contiene el recurso solicitado (HTML, JSON, imagen, etc.) o información adicional. No todas las respuestas llevan cuerpo (ej: una respuesta `204 No Content`).

**3. Métodos HTTP: Usos y Buenas Prácticas**

Los métodos HTTP (a veces llamados "verbos HTTP") indican la acción que se desea realizar sobre un recurso.

*   **`GET`**
    *   **Uso:** Recuperar una representación de un recurso específico o una colección de recursos.
    *   **Buenas Prácticas:**
        *   Solo para obtener datos, no para modificar estado en el servidor.
        *   Debe ser **seguro** (no causa efectos secundarios en el servidor) e **idempotente** (múltiples peticiones idénticas tienen el mismo efecto que una sola).
        *   Los datos para filtrar o paginar se envían como parámetros en la URL (query string), ej: `/users?page=2&limit=10`.
        *   Las respuestas GET son cacheables por navegadores y proxies.
        *   No debe tener cuerpo en la petición.

*   **`POST`**
    *   **Uso:** Enviar datos a un servidor para crear un nuevo recurso o para procesar datos (ej: enviar un formulario, subir un archivo).
    *   **Buenas Prácticas:**
        *   Los datos se envían en el cuerpo de la petición.
        *   Generalmente **no es seguro ni idempotente** (múltiples POST idénticos suelen crear múltiples recursos).
        *   Usado cuando la URL del nuevo recurso no se conoce de antemano o la define el servidor.
        *   Comúnmente, una respuesta exitosa a un POST es un `201 Created` con la URL del nuevo recurso en la cabecera `Location`.

*   **`PUT`**
    *   **Uso:** Actualizar un recurso existente reemplazándolo completamente con los datos proporcionados, o crear el recurso si no existe en la URI especificada.
    *   **Buenas Prácticas:**
        *   Es **idempotente**. Si envías la misma petición PUT varias veces, el resultado final en el servidor será el mismo que si la enviaras una sola vez (el recurso queda con el mismo estado).
        *   La URI en la petición debe identificar al recurso que se va a actualizar/crear.
        *   El cuerpo de la petición debe contener la representación completa del recurso actualizado.

*   **`DELETE`**
    *   **Uso:** Eliminar un recurso específico identificado por su URI.
    *   **Buenas Prácticas:**
        *   Es **idempotente**. Eliminar un recurso que ya no existe sigue resultando en "el recurso no existe".
        *   Una respuesta exitosa puede ser `200 OK` (si devuelve algo en el cuerpo), `202 Accepted` (si la eliminación es asíncrona) o `204 No Content` (si no devuelve cuerpo).
        *   Usar con precaución. A menudo se implementan "soft deletes" (marcar como borrado en lugar de eliminar físicamente).

*   **`PATCH`**
    *   **Uso:** Aplicar modificaciones parciales a un recurso. A diferencia de PUT, no necesitas enviar la representación completa del recurso, solo los cambios.
    *   **Buenas Prácticas:**
        *   **No es necesariamente idempotente** por defecto (depende de la operación de parcheo).
        *   El cuerpo de la petición contiene las instrucciones para modificar el recurso (ej: usando formatos como JSON Patch).
        *   Útil para evitar enviar grandes cantidades de datos cuando solo unos pocos campos cambian.

*   **`HEAD`**
    *   **Uso:** Similar a GET, pero el servidor **no** devuelve el cuerpo de la respuesta. Solo devuelve las cabeceras.
    *   **Buenas Prácticas:**
        *   Útil para verificar si un recurso existe, obtener metadatos (como `Content-Type` o `Last-Modified`) sin descargar el contenido completo.
        *   Es **seguro** e **idempotente**.

*   **`OPTIONS`**
    *   **Uso:** Solicitar información sobre las opciones de comunicación disponibles para un recurso específico o para el servidor en general.
    *   **Buenas Prácticas:**
        *   Comúnmente usado en el contexto de **CORS** (Cross-Origin Resource Sharing) para que el navegador pueda determinar si es seguro enviar una petición "real" desde un origen diferente. El servidor responde con cabeceras como `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`.
        *   Es **seguro** e **idempotente**.

**Idempotencia y Seguridad de los Métodos:**

*   **Seguro (Safe):** Un método es seguro si no altera el estado del servidor. GET, HEAD, OPTIONS son seguros.
*   **Idempotente:** Un método es idempotente si realizar múltiples peticiones idénticas tiene el mismo efecto que realizar una sola petición. GET, HEAD, OPTIONS, PUT, DELETE son idempotentes. POST y PATCH generalmente no lo son.

**4. Códigos de Estado HTTP Comunes**

Los códigos de estado nos dicen el resultado de nuestra petición. Se agrupan en categorías:

*   **1xx (Respuestas informativas):** La petición fue recibida y el proceso continúa. Raro verlos directamente en desarrollo de APIs.
*   **2xx (Éxito):** La petición fue recibida, entendida y aceptada exitosamente.
    *   `200 OK`: Respuesta estándar para peticiones exitosas (GET, PUT, PATCH).
    *   `201 Created`: La petición ha tenido éxito y se ha creado un nuevo recurso (típicamente para POST, a veces PUT). La URL del nuevo recurso suele estar en la cabecera `Location`.
    *   `204 No Content`: La petición tuvo éxito pero no hay contenido para devolver en el cuerpo (ej: tras un DELETE exitoso, o un PUT sin devolver el recurso).
*   **3xx (Redirección):** Se necesita realizar una acción adicional para completar la petición.
    *   `301 Moved Permanently`: El recurso solicitado ha sido movido permanentemente a una nueva URI.
    *   `302 Found` (o `307 Temporary Redirect`): El recurso está temporalmente en otra URI.
*   **4xx (Errores del Cliente):** La petición contiene sintaxis incorrecta o no puede ser procesada.
    *   `400 Bad Request`: El servidor no pudo entender la petición debido a una sintaxis inválida (ej: JSON mal formado).
    *   `401 Unauthorized`: Se requiere autenticación para acceder al recurso, o la autenticación falló.
    *   `403 Forbidden`: El cliente está autenticado pero no tiene permisos para acceder al recurso solicitado.
    *   `404 Not Found`: El servidor no pudo encontrar el recurso solicitado.
    *   `405 Method Not Allowed`: El método HTTP usado no está permitido para el recurso solicitado.
    *   `409 Conflict`: La petición no se pudo completar debido a un conflicto con el estado actual del recurso (ej: intentar crear un recurso que ya existe con un identificador único).
*   **5xx (Errores del Servidor):** El servidor falló al cumplir una petición aparentemente válida.
    *   `500 Internal Server Error`: Un error genérico del servidor, algo salió mal en el lado del servidor.
    *   `503 Service Unavailable`: El servidor no está disponible actualmente (sobrecargado o en mantenimiento).

**5. Ejemplos Prácticos de Consultas a APIs**

Usaremos una API pública de ejemplo: **JSONPlaceholder** (`https://jsonplaceholder.typicode.com`).

*   **A. Usando `cURL` (Línea de Comandos)**
    `cURL` es una herramienta muy útil para probar APIs desde la terminal.

    1.  **GET - Obtener todos los posts:**
        ```bash
        curl https://jsonplaceholder.typicode.com/posts
        ```

    2.  **GET - Obtener un post específico (ID 1):**
        ```bash
        curl https://jsonplaceholder.typicode.com/posts/1
        ```

    3.  **POST - Crear un nuevo post:**
        ```bash
        curl -X POST \
             -H "Content-Type: application/json" \
             -d '{"title": "foo", "body": "bar", "userId": 1}' \
             https://jsonplaceholder.typicode.com/posts
        ```
        *   `-X POST`: Especifica el método POST.
        *   `-H "Content-Type: application/json"`: Indica que el cuerpo es JSON.
        *   `-d '{...}'`: Los datos a enviar en el cuerpo.

    4.  **PUT - Actualizar un post (ID 1):**
        ```bash
        curl -X PUT \
             -H "Content-Type: application/json" \
             -d '{"id": 1, "title": "foo_updated", "body": "bar_updated", "userId": 1}' \
             https://jsonplaceholder.typicode.com/posts/1
        ```

    5.  **DELETE - Eliminar un post (ID 1):**
        ```bash
        curl -X DELETE https://jsonplaceholder.typicode.com/posts/1
        ```
        (JSONPlaceholder simulará la eliminación y devolverá un objeto vacío `{}` con un `200 OK`).

*   **B. Usando JavaScript (Navegador/Node.js)**

    1.  **`fetch` API (Nativa en navegadores y Node.js >= 18):**
        `fetch` es una API moderna para realizar peticiones HTTP. Devuelve Promesas.

        *   **GET:**
            ```javascript
            async function getPosts() {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                    if (!response.ok) { // response.ok es true para códigos 200-299
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json(); // Parsea la respuesta JSON
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            getPosts();
            ```

        *   **POST:**
            ```javascript
            async function createPost() {
                const newPost = {
                    title: 'Mi Nuevo Post con Fetch',
                    body: 'Este es el contenido.',
                    userId: 10
                };

                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newPost) // El cuerpo debe ser un string
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log('Post creado:', data);
                } catch (error) {
                    console.error('Error creating post:', error);
                }
            }
            createPost();
            ```

    2.  **`Axios` (Librería popular):**
        Axios es una librería de cliente HTTP basada en promesas muy popular para navegador y Node.js. Simplifica algunas cosas respecto a `fetch`.
        Primero, necesitarías instalarla (`npm install axios` o `yarn add axios`) o incluirla vía CDN.

        *   **GET:**
            ```javascript
            // const axios = require('axios'); // En Node.js
            // O <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> en HTML

            async function getPostsAxios() {
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
                    console.log(response.data); // Axios parsea JSON automáticamente y lo pone en `data`
                } catch (error) {
                    // Axios maneja errores HTTP (4xx, 5xx) en el bloque catch
                    if (error.response) {
                        // La petición se hizo y el servidor respondió con un código de estado fuera del rango 2xx
                        console.error('Error data:', error.response.data);
                        console.error('Error status:', error.response.status);
                    } else if (error.request) {
                        // La petición se hizo pero no se recibió respuesta
                        console.error('No response received:', error.request);
                    } else {
                        // Algo pasó al configurar la petición
                        console.error('Error message:', error.message);
                    }
                }
            }
            getPostsAxios();
            ```

        *   **POST:**
            ```javascript
            // const axios = require('axios');

            async function createPostAxios() {
                const newPost = {
                    title: 'Mi Nuevo Post con Axios',
                    body: 'Este es el contenido con Axios.',
                    userId: 11
                };

                try {
                    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost, {
                        headers: {
                            // 'Content-Type': 'application/json' // Axios lo suele poner por defecto para objetos JS
                        }
                    });
                    console.log('Post creado con Axios:', response.data);
                } catch (error) {
                    console.error('Error creating post con Axios:', error.message);
                }
            }
            createPostAxios();
            ```
        **Ventajas de Axios sobre Fetch (algunas):**
        *   Parseo automático de JSON en peticiones y respuestas.
        *   Manejo de errores HTTP más directo (los errores 4xx y 5xx rechazan la promesa).
        *   Interceptors para peticiones y respuestas (útil para añadir tokens, logs, etc.).
        *   Protección contra XSRF.
        *   Compatibilidad con navegadores más antiguos (mediante polyfills si es necesario).

**6. Conclusiones y Buenas Prácticas Adicionales**

*   **HTTP es el cimiento:** Es la base sobre la que se construyen las APIs RESTful y gran parte de la comunicación en internet.
*   **HTTPS siempre:** Para cualquier aplicación en producción, la comunicación debe ser sobre HTTPS.
*   **Elegir el método correcto:** Usar el verbo HTTP adecuado para la acción que se quiere realizar es fundamental para un diseño de API limpio y semántico.
*   **Manejo de errores:** Siempre contemplar y manejar adecuadamente los posibles errores y códigos de estado.
*   **Cabeceras importantes:**
    *   `Content-Type`: Indica el tipo de medio del cuerpo de la petición/respuesta. Crucial para POST, PUT, PATCH.
    *   `Accept`: Indica al servidor qué tipo de medio (MIME type) puede procesar el cliente en la respuesta.
    *   `Authorization`: Para enviar credenciales de autenticación (ej: tokens JWT).
*   **Caching:** Aprovechar las capacidades de caché de HTTP (con cabeceras como `Cache-Control`, `ETag`, `Last-Modified`) puede mejorar significativamente el rendimiento y reducir la carga del servidor.
