# issrc_2026_pw2_ecommerce-backend

--------------------------------------------------------------------------

Desarrollo de Software | 2°
TSDW - 2026 - Lautaro Bernardini
Back End final: 1er cuatrimestre

Este repositorio de github corresponde al BackEnd de la consiga que la asignatura en coordinación con avances de la asignatura Proyecto Integrador II (Cecilia Piombo) - documento de especificacion de requerimientos en /docs

Todos los modelos y relaciones;
CRUD completo de "Producto" (o equivalente), Categoría y Usuario (cliente)

Ecommerce backend venta de productos de rubro general y personalizar - usar mysql, sequelize, controladores y rutas para CRUDs: GET, POST, PUT y DELETE.

--------------------------------------------------------------------------


Guias y trabajos de referencia de esta asignatura:



entregar en formato ZIP (no incluir la carpeta NODE-MODULES), o link de github

gitignore en app y otro
gitignore en API

Simulacro4.pdf icluye json
Simulacro3.pdf icluye json
Simulacro2.pdf json pegado aca debajo


Material del profe Lautaro:

Para escritura de readme:
https://markdownlivepreview.com/

Extensión para visualización amigable:
- https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles



Referencia completa con ejemplos: HTTP uso e importancia en Sistemas Web




Miro
https://miro.com/app/board/uXjVIs4s5Wk=/


Guía Backend

Guía para inicializar un backend incluyendo conexión con Base de Datos y un modelo de prueba

https://gemini.google.com/share/4278da1f7e88?authuser=0

Backend de ejemplo

Ejemplo de proyecto:
https://github.com/laubernardini/backendProyectosCorporativos




---------------------------------------------------------------------

Mauri Demasi • 2 jun
Repo de Ejemplo basado en el primer parcial 
https://github.com/MauriDemasi/desarrollo-software-Parcial_1


Material adjunto sobre Seeders:

https://gemini.google.com/share/b58843d21568?hl=es_419
https://gemini.google.com/share/b58843d21568?hl=es_419&authuser=0



Que es ReactJS

https://gemini.google.com/share/98f9689ad85f





{
  "peliculas": [
    {
      "id": 1,
      "titulo": "Dune: Parte Dos",
      "horario": "20:30 hs",
      "precio": 4500,
      "img": "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg&quot;
    },
    {
      "id": 2,
      "titulo": "Kung Fu Panda 4",
      "horario": "18:00 hs",
      "precio": 3500,
      "img": "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg&quot;
    },
    {
      "id": 3,
      "titulo": "Godzilla y Kong: El Nuevo Imperio",
      "horario": "22:15 hs",
      "precio": 4000,
      "img": "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg&quot;
    }
  ]
}


{
  "disponibilidad": [
    {
      "peliculaId": 1,
      "asientos": [
        { "id": "A1", "fila": "A", "numero": 1, "ocupado": true },
        { "id": "A2", "fila": "A", "numero": 2, "ocupado": true },
        { "id": "A3", "fila": "A", "numero": 3, "ocupado": false },
        { "id": "A4", "fila": "A", "numero": 4, "ocupado": false },
        { "id": "B1", "fila": "B", "numero": 1, "ocupado": false },
        { "id": "B2", "fila": "B", "numero": 2, "ocupado": false },
        { "id": "B3", "fila": "B", "numero": 3, "ocupado": true },
        { "id": "B4", "fila": "B", "numero": 4, "ocupado": false }
      ]
    },
    {
      "peliculaId": 2,
      "asientos": [
        { "id": "A1", "fila": "A", "numero": 1, "ocupado": false },
        { "id": "A2", "fila": "A", "numero": 2, "ocupado": false },
        { "id": "A3", "fila": "A", "numero": 3, "ocupado": false },
        { "id": "A4", "fila": "A", "numero": 4, "ocupado": true },
        { "id": "B1", "fila": "B", "numero": 1, "ocupado": true },
        { "id": "B2", "fila": "B", "numero": 2, "ocupado": true },
        { "id": "B3", "fila": "B", "numero": 3, "ocupado": false },
        { "id": "B4", "fila": "B", "numero": 4, "ocupado": false }
      ]
    },
    {
      "peliculaId": 3,
      "asientos": [
        { "id": "A1", "fila": "A", "numero": 1, "ocupado": true },
        { "id": "A2", "fila": "A", "numero": 2, "ocupado": false },
        { "id": "A3", "fila": "A", "numero": 3, "ocupado": true },
        { "id": "A4", "fila": "A", "numero": 4, "ocupado": false },
        { "id": "B1", "fila": "B", "numero": 1, "ocupado": true },
        { "id": "B2", "fila": "B", "numero": 2, "ocupado": false },
        { "id": "B3", "fila": "B", "numero": 3, "ocupado": true },
        { "id": "B4", "fila": "B", "numero": 4, "ocupado": false }
      ]
    }
  ]
}