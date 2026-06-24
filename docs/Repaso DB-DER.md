# Repaso de Modelado de Base de Datos (DER)

---

### Primero, verificaremos la instalación de nuestro SGBD, que en nuestro caso es MySQL.

## 🛠 Instalación de MySQL Server y Workbench (Windows)

### Paso 1: Descargar el instalador

- Ve a la página oficial: [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
- Descarga el instalador "Windows (x86, 32-bit), MSI Installer"

### Paso 2: Ejecutar el instalador

- Ejecuta el archivo `.msi` descargado.
- Selecciona **Developer Default** para instalar Server + Workbench + herramientas adicionales.

### Paso 3: Configurar MySQL Server

- Asigna un puerto (por defecto: 3306)
- Elige autenticación: **Use Legacy Authentication Method** (opcional pero útil para compatibilidad)
- Establece la contraseña del usuario `root` (recuerda guardarla)

### Paso 4: Finalizar instalación

- MySQL Server y Workbench estarán listos para usar.
- Puedes abrir **MySQL Workbench** desde el menú de inicio para conectarte y gestionar tus bases de datos.

---

# Ejercicios de Modelado de Bases de datos (DER)

---

## Ejercicio 1: Cursos y Estudiantes

### Entidades:

- **Estudiante** (id, nombre, email)
- **Curso** (id, nombre, descripción)

### Relacionamiento:

- Un estudiante puede inscribirse en varios cursos.
- Un curso puede tener varios estudiantes inscritos.

---

## Ejercicio 1: Libros y Autores

### Entidades:

- **Libro** (id, título, año)
- **Autor** (id, nombre, nacionalidad)

### Relacionamiento:

- Un libro puede ser escrito un autor.
- Un autor puede haber escrito varios libros.

---

## Ejercicio 2: Películas y Géneros

### Entidades:

- **Película** (id, título, duración)
- **Género** (id, nombre)

### Relacionamiento:

- Una película puede pertenecer a varios géneros.
- Un género puede incluir varias películas.

---

## Ejercicio 3: Profesores, Cursos y Estudiantes

### Entidades:

- **Profesor** (id, nombre, especialidad)
- **Curso** (id, nombre, nivel)
- **Estudiante** (id, nombre, email)

### Relacionamiento:

- Un profesor puede dictar varias asignaturas.
- Un curso puede ser dictado un profesor.
- Un estudiante puede inscribirse en varios cursos.
- Un curso puede tener varios estudiantes inscritos.

---
