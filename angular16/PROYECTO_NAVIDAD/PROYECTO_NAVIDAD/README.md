# Plantilla Angular 16 - Estilos, Login, Integración y Guards

Este proyecto es una plantilla base desarrollada con Angular 16 que incluye un sistema completo de autenticación, guards de protección de rutas, y ejemplos de implementación de CRUDs con integración a APIs externas.

## 📋 Descripción

Aplicación web desarrollada con Angular 16 que implementa:
- Sistema de autenticación (login y registro)
- Guards para protección de rutas
- Múltiples CRUDs de ejemplo (Personajes, Transformaciones)
- Integración con APIs externas
- Persistencia local de datos
- Layout responsive con componentes reutilizables

## 🛠️ Tecnologías Utilizadas

- **Angular**: 16.2.0
- **TypeScript**: 5.1.3
- **RxJS**: 7.8.0
- **Angular Router**: Para navegación y guards
- **Angular Forms**: Para formularios reactivos
- **HttpClient**: Para peticiones HTTP
- **Angular Signals**: Para gestión de estado reactivo

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── auth/                    # Módulo de autenticación
│   │   ├── login/               # Componente de login
│   │   └── registro/            # Componente de registro
│   ├── ejercicios/
│   │   └── ejercicio01/         # Módulo de ejercicios
│   │       ├── cruds/           # CRUDs implementados
│   │       │   ├── MisPersonajes/
│   │       │   ├── FiltrarPersonajes/
│   │       │   └── Transformaciones/
│   │       ├── principal/       # Componente principal
│   │       └── servicios/       # Servicios del módulo
│   ├── inicio/                  # Componente de inicio
│   ├── interfaces/              # Interfaces TypeScript
│   ├── layout/                  # Componentes de layout
│   │   ├── header/
│   │   ├── nav/
│   │   ├── main/
│   │   └── footer/
│   ├── servicios/               # Servicios globales
│   │   ├── auth.service.ts      # Servicio de autenticación
│   │   └── acceso-api.service.ts # Servicio de acceso a API
│   ├── auth.guard.ts            # Guard de autenticación
│   ├── app-routing.module.ts    # Configuración de rutas
│   └── app.module.ts            # Módulo principal
└── assets/                      # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn
- Angular CLI 16.2.16

### Pasos de Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar el backend**

   El proyecto requiere un backend API corriendo en `http://localhost:3000/accesoDB` con los siguientes endpoints:
   - `POST /accesoDB/leer` - Para login
   - `POST /accesoDB/grabar` - Para registro

4. **Iniciar el servidor de desarrollo**
```bash
npm start
# o
ng serve
```

5. **Acceder a la aplicación**
   
   Navegar a `http://localhost:4200/`

## 📖 Uso

### Autenticación

1. **Registro de Usuario**
   - Acceder a `/registro`
   - Completar el formulario con nombre, username y password
   - El sistema redirigirá al login tras el registro exitoso

2. **Login**
   - Acceder a `/login`
   - Introducir username y password
   - Tras el login exitoso, se redirige a `/inicio`

3. **Logout**
   - Hacer clic en "Salir" en el menú de navegación
   - Se limpia la sesión y se redirige al login

### Navegación

- **Rutas públicas**: `/login`, `/registro`
- **Rutas protegidas**: `/inicio`, `/ejercicio01`, `/ejercicio02` (requieren autenticación)

### CRUDs Disponibles

El proyecto incluye ejemplos de CRUDs en el módulo `ejercicio01`:
- **Mis Personajes**: CRUD local con persistencia en localStorage
- **Filtrar Personajes**: Integración con API externa de Dragon Ball
- **Transformaciones**: Búsqueda y gestión de transformaciones

## 🔧 Componentes Principales

### AuthService
Servicio que gestiona el estado de autenticación usando Angular Signals:
- `isLoggedIn`: Signal booleano que indica si hay sesión activa
- `usuario`: Signal con los datos del usuario autenticado
- Métodos: `login()`, `registro()`, `logout()`

### AuthGuard
Guard que protege las rutas, verificando si el usuario está autenticado antes de permitir el acceso.

### Layout Components
- **Header**: Cabecera de la aplicación
- **Nav**: Barra de navegación con menú contextual según el estado de autenticación
- **Main**: Contenedor principal con router-outlet
- **Footer**: Pie de página

## 🔐 Seguridad

- Las rutas protegidas están configuradas con `canActivate: [AuthGuard]`
- El estado de autenticación se gestiona mediante signals reactivos
- Las credenciales se validan contra el backend API

## 📝 Scripts Disponibles

```bash
# Servidor de desarrollo
npm start

# Compilar para producción
npm run build

# Ejecutar tests
npm test

# Compilar en modo watch
npm run watch
```

## 🎨 Estilos

Los estilos están organizados en:
- `styles.css`: Estilos globales
- Componentes CSS: Estilos específicos por componente
- Assets: Imágenes de fondo y recursos visuales

## 📚 Interfaces TypeScript

### AuthResponse
```typescript
interface AuthResponse {
  ok: boolean;
  usuario?: {
    id: number;
    username: string;
    nombre: string;
  };
  mensaje?: string;
}
```

## 🔄 Flujo de Autenticación

1. Usuario accede a ruta protegida
2. AuthGuard verifica si está autenticado
3. Si no está autenticado, redirige a `/login`
4. Tras login exitoso, se guarda el estado en AuthService
5. Se redirige a la ruta solicitada o a `/inicio`

## 🐛 Troubleshooting

- **Error de conexión con API**: Verificar que el backend esté corriendo en `http://localhost:3000`
- **Problemas de autenticación**: Verificar que el backend devuelva el formato correcto de `AuthResponse`
- **Rutas no funcionan**: Verificar que el módulo de routing esté correctamente importado

## 📄 Licencia

Este proyecto es una plantilla educativa para uso en el aula.

---

# 📝 Ejercicio de Navidad - Entrega: 11 de Enero de 2026

## Objetivo

Ampliar la funcionalidad de la aplicación implementando un sistema de roles de usuario y gestión de imágenes de perfil.

## Requisitos del Ejercicio

### 1. Usuario Administrador

Debes implementar un sistema de roles de usuario que permita distinguir entre usuarios normales y administradores.

**Tareas a realizar:**

- **Modificar el modelo de usuario**: Añadir un campo `rol` a la estructura de usuario que pueda tener los valores `'usuario'` o `'administrador'`.

- **Crear usuario administrador**: Asegúrate de que exista al menos un usuario con rol `'administrador'` en la base de datos. Puedes hacerlo:
  - Modificando directamente la base de datos, o
  - Añadiendo una funcionalidad de registro especial para administradores, o
  - Creando un script de inicialización

- **Modificar el servicio de autenticación**: Actualizar `AuthService` para que maneje correctamente el rol del usuario autenticado.

- **Modificar la navegación**: En el componente `NavComponent`, añadir lógica para que cuando un usuario con rol `'administrador'` haga login, aparezca un nuevo enlace en el menú de navegación que permita acceder al CRUD de usuarios.

### 2. CRUD de Usuarios

Debes implementar un CRUD completo para la gestión de usuarios, siguiendo el mismo patrón que los CRUDs ya implementados en el proyecto (como `MisPersonajes`, `FiltrarPersonajes`, etc.).

**Estructura requerida:**

- **Componente de formulario**: Un componente para crear/editar usuarios (similar a `miPersonaje.component.ts`)
- **Componente de listado**: Un componente para mostrar la lista de usuarios con opciones de editar y eliminar (similar a `listadoMisPersonajes.component.ts`)
- **Servicio**: Un servicio para gestionar las operaciones CRUD de usuarios (crear, leer, actualizar, eliminar)
- **Interfaz**: Definir la interfaz TypeScript para el modelo de usuario
- **Ruta protegida**: Crear una nueva ruta `/usuarios` que solo sea accesible para administradores

**Funcionalidades del CRUD:**

- ✅ Listar todos los usuarios
- ✅ Crear nuevo usuario
- ✅ Editar usuario existente
- ✅ Eliminar usuario
- ✅ Validación de formularios
- ✅ Manejo de errores

### 3. Gestión de Imágenes de Usuario

Debes añadir la capacidad de gestionar imágenes de perfil para los usuarios.

**Tareas a realizar:**

- **Modificar el modelo de usuario**: Añadir un campo `imagen` (o `avatar`) a la estructura de usuario que almacene la URL o ruta de la imagen.

- **Actualizar el formulario de registro**: Modificar el componente `RegistroComponent` para incluir un campo de carga de imagen.

- **Actualizar el formulario de edición de usuario**: En el CRUD de usuarios, añadir la capacidad de subir/cambiar la imagen de perfil.

- **Mostrar imágenes en la interfaz**:
  - Mostrar la imagen del usuario en el menú de navegación (junto al nombre)
  - Mostrar las imágenes en el listado de usuarios del CRUD
  - Mostrar la imagen en el formulario de edición

- **Gestión de archivos**: Decidir cómo gestionar las imágenes:
  - Opción 1: Almacenar como base64 en la base de datos
  - Opción 2: Subir a un servicio de almacenamiento (recomendado para producción)
  - Opción 3: Almacenar en la carpeta `assets` del proyecto (más simple para desarrollo)

**Recomendación**: Para este ejercicio, puedes usar la opción de base64 o almacenamiento local en `assets`, ya que es más simple de implementar.

## Criterios de Evaluación

1. **Funcionalidad (40%)**
   - El sistema de roles funciona correctamente
   - El CRUD de usuarios está completamente funcional
   - La gestión de imágenes está implementada

2. **Código (30%)**
   - Sigue las convenciones y patrones del proyecto existente
   - Código limpio y bien estructurado
   - Uso correcto de TypeScript e interfaces

3. **Integración (20%)**
   - Se integra correctamente con el sistema de autenticación existente
   - Los guards protegen adecuadamente las rutas de administrador
   - La navegación muestra/oculta elementos según el rol

4. **Interfaz de Usuario (10%)**
   - La interfaz es intuitiva y consistente con el resto de la aplicación
   - Las imágenes se muestran correctamente
   - Los formularios tienen validación adecuada

## Entregables

1. **Código fuente completo** del proyecto con todas las modificaciones
2. **README actualizado** explicando las nuevas funcionalidades implementadas
3. **Capturas de pantalla** mostrando:
   - Login como administrador
   - Menú de navegación con el enlace al CRUD de usuarios
   - Listado de usuarios
   - Formulario de edición de usuario con imagen
   - Usuario con imagen en el menú de navegación

## Fecha de Entrega

**11 de Enero de 2026**

## Notas Importantes

- Asegúrate de que el proyecto compile sin errores
- Prueba todas las funcionalidades antes de entregar
- Mantén la estructura y convenciones del proyecto original
- Documenta cualquier decisión de diseño importante en comentarios del código
- Si encuentras problemas técnicos, documenta cómo los resolviste

## Pistas y Ayuda

- Revisa cómo están implementados los CRUDs existentes (`MisPersonajes`, `FiltrarPersonajes`)
- El `AuthService` ya maneja signals, úsalo para gestionar el rol del usuario
- Para los guards, puedes crear un nuevo `AdminGuard` o modificar el `AuthGuard` existente
- Para la carga de imágenes, puedes usar `<input type="file">` y `FileReader` para convertir a base64
- Recuerda actualizar las interfaces TypeScript cuando modifiques el modelo de datos

¡Mucha suerte con el ejercicio! 🎄🎅
