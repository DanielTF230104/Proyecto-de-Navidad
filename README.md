# 🐳 Entorno de Desarrollo Web con Docker

Este proyecto proporciona un entorno completo de desarrollo web utilizando Docker Compose, diseñado para trabajar con múltiples tecnologías frontend y backend en un mismo ecosistema.

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Servicios de Desarrollo](#servicios-de-desarrollo)
4. [Servicios Estáticos](#servicios-estáticos)
5. [APIs Backend](#apis-backend)
6. [Base de Datos](#base-de-datos)
7. [Cómo Empezar](#cómo-empezar)
8. [Comandos Útiles](#comandos-útiles)

---

## 🎯 Introducción

Este entorno Docker está configurado para facilitar el desarrollo de aplicaciones web modernas, permitiendo trabajar con:

- **Frontend**: Angular (versiones 16-20) y React 19
- **Backend**: Node.js (implementado), PHP y Python (pendientes de implementación)
- **Base de Datos**: MySQL 5.7 con phpMyAdmin
- **Servidores Estáticos**: Nginx para servir aplicaciones en producción y desarrollo

Todos los servicios están conectados en una red compartida (`shared_network`), lo que permite que se comuniquen entre sí usando los nombres de los contenedores como hosts.

---

## 🏗️ Arquitectura del Proyecto

```
docker-compose/
├── angular16/          # Contenedor para desarrollo Angular 16
├── angular17/          # Contenedor para desarrollo Angular 17
├── angular18/          # Contenedor para desarrollo Angular 18
├── angular19/          # Contenedor para desarrollo Angular 19
├── angular20/          # Contenedor para desarrollo Angular 20
├── react19/            # Contenedor para desarrollo React 19
├── angular-app/        # Servidor estático para builds de Angular
├── vanilla-app/        # Servidor estático para aplicaciones JS Vanilla
├── nodejs-app/         # API REST en Node.js (✅ Implementada)
├── php-app/            # API REST en PHP (⏳ Pendiente)
├── python-app/         # API REST en Python/Flask (⏳ Pendiente)
├── db/                 # Scripts SQL de inicialización
├── docker-compose.yml  # Configuración principal
└── nginx-*.conf        # Configuraciones de Nginx
```

---

## 💻 Servicios de Desarrollo

### Angular (Versiones 16-20)

Cada versión de Angular tiene su propio contenedor independiente, permitiendo trabajar con diferentes versiones del framework simultáneamente.

#### Características:

- **Imagen base**: `node:18-alpine`
- **CLI instalado**: `@angular/cli` en la versión correspondiente
- **Puertos**: 
  - Angular 16: `4216:4200`
  - Angular 17: `4217:4200`
  - Angular 18: `4218:4200`
  - Angular 19: `4219:4200`
  - Angular 20: `4220:4200`
- **Hot Reload**: Habilitado mediante `CHOKIDAR_USEPOLLING=true` para detectar cambios en archivos

#### Uso:

**Proyecto nuevo:**
```bash
# Entrar al contenedor (ejemplo Angular 17)
docker exec -it angular17 bash

# Crear nuevo proyecto
ng new mi-app

# Entrar al proyecto
cd mi-app

# Iniciar servidor de desarrollo
ng serve --host 0.0.0.0
# O usar el alias predefinido:
ng-serve
```

**Proyecto existente:**
```bash
# Entrar al contenedor
docker exec -it angular17 bash

# Entrar a la carpeta del proyecto
cd mi-app

# Instalar dependencias (si es necesario)
npm install

# Iniciar servidor
ng serve --host 0.0.0.0
```

**Acceso**: `http://localhost:4217` (o el puerto correspondiente a la versión)

---

### React 19

Contenedor configurado para desarrollo con React usando Vite como bundler.

#### Características:

- **Imagen base**: `node:20-alpine`
- **Bundler**: Vite 7.1.2
- **Plugin**: `@vitejs/plugin-react`
- **Puerto**: `4319:5173`
- **Hot Reload**: Habilitado

#### Uso:

**Proyecto nuevo:**
```bash
# Entrar al contenedor
docker exec -it react19 bash

# Crear proyecto con Vite
npm create vite@latest mi-app

# Entrar al proyecto
cd mi-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev -- --host 0.0.0.0
# O usar el alias:
react-start
```

**Proyecto existente:**
```bash
docker exec -it react19 bash
cd mi-app
npm install  # Solo si falta node_modules
npm run dev -- --host 0.0.0.0
```

**Acceso**: `http://localhost:4319`

---

## 🌐 Servicios Estáticos

### vanilla-app

Servidor Nginx configurado para servir aplicaciones JavaScript Vanilla con listado automático de directorios.

#### Características:

- **Imagen**: `nginx:alpine`
- **Puerto**: `4300:80`
- **Directorio**: `./vanilla-app/sites`
- **Configuración**: `nginx-vanilla.conf`
- **Funcionalidad**: Autoindex habilitado para navegar por múltiples ejercicios

#### Uso:

1. Coloca tus proyectos en `vanilla-app/sites/`
2. Accede a `http://localhost:4300` para ver el listado de directorios
3. Navega a cualquier subcarpeta directamente

**Ejemplo de estructura:**
```
vanilla-app/sites/
├── DragonBall/
│   ├── index.html
│   ├── js/
│   └── css/
└── MiProyecto/
    └── index.html
```

**Acceso**: `http://localhost:4300/DragonBall/`

---

### angular-app

Servidor Nginx optimizado para servir aplicaciones Angular compiladas en producción, con soporte para Single Page Applications (SPA).

#### Características:

- **Imagen**: `nginx:alpine`
- **Puerto**: `4200:80`
- **Directorio**: `./angular-app/dist`
- **Configuración**: `nginx-angular.conf`
- **SPA Support**: Redirige todas las rutas a `index.html` para el routing de Angular

#### Uso:

1. Compila tu aplicación Angular:
```bash
ng build --configuration production
```

2. Copia los archivos generados:
```bash
# Si tu build genera: dist/mi-proyecto/*
# Copia a: angular-app/mi-proyecto/
cp -r dist/mi-proyecto/* angular-app/mi-proyecto/
```

3. **Importante**: Asegúrate de que en `index.html` el `<base>` tenga un punto:
```html
<base href="./">
```

**Acceso**: `http://localhost:4200/mi-proyecto/`

---

## 🔌 APIs Backend

### ✅ Node.js API (Implementada)

API REST completa implementada con Express.js que proporciona endpoints para múltiples bases de datos.

#### Características:

- **Imagen**: `node:18-alpine`
- **Puerto**: `3000:3000`
- **Framework**: Express.js
- **Base de datos**: MySQL (conecta al contenedor `mysql-db`)
- **CORS**: Habilitado para todas las rutas

#### Estructura de la API:

```
nodejs-app/
├── server.js              # Servidor principal
├── package.json
└── routes/
    ├── config/
    │   └── db.config.js   # Configuración de conexiones DB
    ├── accesoDB/          # Endpoints para usuarios/autenticación
    ├── superheroDB/       # Endpoints para personajes de superhéroes
    └── dbzDB/             # Endpoints para Dragon Ball
        ├── personajes/
        ├── planetas/
        ├── transformaciones/
        └── mispersonajes/
```

#### Endpoints Disponibles:

- **`/accesoDB`** - Gestión de usuarios y autenticación
- **`/superheroDB`** - CRUD de personajes de superhéroes
- **`/dbzDB/personajes`** - CRUD de personajes de Dragon Ball
- **`/dbzDB/planetas`** - CRUD de planetas
- **`/dbzDB/transformaciones`** - CRUD de transformaciones
- **`/dbzDB/mispersonajes`** - CRUD de personajes personalizados

#### Operaciones CRUD por recurso:

Cada recurso (personajes, planetas, etc.) tiene los siguientes endpoints:

- **`GET /recurso/leer`** - Obtener todos los registros
- **`POST /recurso/grabar`** - Crear un nuevo registro
- **`DELETE /recurso/borrar/:id`** - Eliminar un registro
- **`PUT /recurso/actualizarImagen/:id`** - Actualizar imagen (donde aplique)
- **`POST /recurso/crearTabla`** - Crear la tabla en la base de datos

#### Ejemplo de uso:

```javascript
// Leer personajes
fetch('http://localhost:3000/dbzDB/personajes/leer')
  .then(res => res.json())
  .then(data => console.log(data));

// Crear personaje
fetch('http://localhost:3000/dbzDB/personajes/grabar', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: 'Goku',
    fuerza: 1000
  })
});
```

#### Configuración de Base de Datos:

La API se conecta a MySQL usando la configuración en `routes/config/db.config.js`:

```javascript
{
  host: "mysql-db",      // Nombre del contenedor MySQL
  user: "root",
  password: "dejame",
  database: "dbzDB"      // o "accesoDB", "superheroDB"
}
```

**Acceso**: `http://localhost:3000`

---

### ⏳ PHP API (Pendiente de Implementación)

Contenedor preparado para una API REST en PHP, pero aún no implementada completamente.

#### Características:

- **Imagen**: `php:7.4-apache`
- **Puerto**: `8080:80`
- **Extensión**: `mysqli` instalada
- **Directorio**: `./php-app`

#### Estado Actual:

El contenedor está configurado y funcionando, pero solo contiene un archivo `index.php` básico. La implementación completa de los endpoints CRUD está pendiente.

**Acceso**: `http://localhost:8080`

---

### ⏳ Python/Flask API (Pendiente de Implementación)

Contenedor preparado para una API REST en Python usando Flask, parcialmente implementada.

#### Características:

- **Imagen**: `python:3.8-slim`
- **Puerto**: `5001:5000`
- **Framework**: Flask 2.0.1
- **CORS**: Habilitado
- **Base de datos**: MySQL (conecta a `mysql-db`)

#### Estado Actual:

El contenedor tiene una implementación básica con algunos endpoints para la base de datos `dbzDB`:

- **`GET /leer`** - Leer personajes
- **`POST /grabar`** - Crear personaje
- **`DELETE /borrar/<id>`** - Eliminar personaje

Sin embargo, falta la implementación completa de todos los recursos (planetas, transformaciones, etc.) y la estructura modular que tiene la API de Node.js.

**Acceso**: `http://localhost:5001`

---

## 🗄️ Base de Datos

### MySQL

Base de datos relacional MySQL 5.7 para almacenar toda la información de las aplicaciones.

#### Características:

- **Imagen**: `mysql:5.7`
- **Puerto**: `3306:3306`
- **Usuario root**: `root`
- **Contraseña**: `dejame`
- **Volúmenes**: 
  - Scripts SQL en `./db` se ejecutan automáticamente al iniciar
  - Datos persistentes en volumen `mysql_data`

#### Bases de Datos:

- **`accesoDB`** - Usuarios y autenticación
- **`superheroDB`** - Personajes de superhéroes
- **`dbzDB`** - Personajes, planetas, transformaciones de Dragon Ball

#### Inicialización:

Los scripts SQL en `./db/` se ejecutan automáticamente cuando el contenedor se crea por primera vez:
- `mysql-db.sql` - Script principal
- `mysql-db_BACKUP.sql` - Backup de respaldo

#### Conexión desde aplicaciones:

```javascript
// Desde Node.js, PHP, Python
host: "mysql-db"        // Nombre del contenedor
user: "root"
password: "dejame"
database: "dbzDB"       // o la que necesites
```

---

### phpMyAdmin

Interfaz web para administrar la base de datos MySQL de forma visual.

#### Características:

- **Imagen**: `phpmyadmin/phpmyadmin`
- **Puerto**: `8081:80`
- **Configuración automática**: Se conecta automáticamente a `mysql-db`

#### Uso:

1. Accede a `http://localhost:8081`
2. Usa las credenciales:
   - **Usuario**: `root`
   - **Contraseña**: `dejame`
3. Gestiona tus bases de datos, tablas y datos de forma visual

**Acceso**: `http://localhost:8081`

---

## 🚀 Cómo Empezar

### Prerrequisitos

- Docker instalado
- Docker Compose instalado

### Iniciar todos los servicios

```bash
# Desde la carpeta docker-compose/
docker-compose up -d
```

Esto iniciará todos los contenedores en segundo plano.

### Ver el estado de los servicios

```bash
docker-compose ps
```

### Ver los logs

```bash
# Todos los servicios
docker-compose logs -f

# Un servicio específico
docker-compose logs -f nodejs-api
```

### Detener los servicios

```bash
docker-compose down
```

### Detener y eliminar volúmenes (⚠️ Elimina datos de MySQL)

```bash
docker-compose down -v
```

---

## 🛠️ Comandos Útiles

### Desarrollo Frontend

```bash
# Entrar a un contenedor Angular
docker exec -it angular17 bash

# Entrar a React
docker exec -it react19 bash

# Ver logs de un contenedor
docker logs -f angular17
```

### Desarrollo Backend

```bash
# Ver logs de la API Node.js
docker-compose logs -f nodejs-api

# Reiniciar un servicio específico
docker-compose restart nodejs-api

# Reconstruir un contenedor después de cambios en Dockerfile
docker-compose build angular17
docker-compose up -d angular17
```

### Base de Datos

```bash
# Conectarse a MySQL desde la línea de comandos
docker exec -it mysql-db mysql -u root -pdejame

# Ejecutar un script SQL
docker exec -i mysql-db mysql -u root -pdejame dbzDB < mi-script.sql

# Hacer backup de una base de datos
docker exec mysql-db mysqldump -u root -pdejame dbzDB > backup.sql
```

### Limpieza

```bash
# Detener y eliminar contenedores
docker-compose down

# Eliminar imágenes no utilizadas
docker image prune

# Limpiar todo (contenedores, imágenes, volúmenes)
docker system prune -a --volumes
```

---

## 📝 Notas Importantes

1. **Puertos**: Asegúrate de que los puertos no estén en uso por otras aplicaciones
2. **Volúmenes**: Los datos de MySQL se persisten en un volumen Docker. Si eliminas el volumen, perderás los datos
3. **Hot Reload**: Los contenedores de desarrollo tienen `CHOKIDAR_USEPOLLING=true` para detectar cambios en archivos montados
4. **Red**: Todos los servicios están en la red `shared_network`, por lo que pueden comunicarse usando los nombres de los contenedores como hosts
5. **CORS**: Las APIs tienen CORS habilitado para permitir peticiones desde cualquier origen en desarrollo

---

## 🔄 Flujo de Trabajo Recomendado

1. **Iniciar servicios base**: `docker-compose up -d mysql-db phpmyadmin`
2. **Verificar base de datos**: Acceder a phpMyAdmin y verificar que las tablas existen
3. **Iniciar API**: `docker-compose up -d nodejs-api`
4. **Probar API**: Hacer peticiones a `http://localhost:3000` para verificar que funciona
5. **Iniciar desarrollo frontend**: Entrar al contenedor correspondiente y desarrollar
6. **Servir estáticos**: Para producción, compilar y copiar a `angular-app/` o `vanilla-app/`

---

## 📚 Recursos Adicionales

- [Documentación de Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Angular CLI](https://angular.io/cli)
- [React + Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://dev.mysql.com/doc/)
- [Nginx](https://nginx.org/en/docs/)

---

**Desarrollado para el aprendizaje y enseñanza de Desarrollo Web en Entorno Cliente**

