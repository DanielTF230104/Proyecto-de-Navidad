# Sistema de Gestión de Usuarios (FullStack CRUD) - Proyecto Navidad

Este proyecto es una aplicación web completa para la administración de usuarios, desarrollada con una arquitectura moderna que separa el **Frontend (Angular)** del **Backend (Node.js)**, utilizando **MySQL** como base de datos y **Docker** para la orquestación de todo el entorno.

## Demostración en Vídeo
Mira cómo funciona la gestión de usuarios, la edición inteligente y el control de acceso de administrador en el siguiente vídeo:

[![Mira el vídeo en YouTube](https://youtu.be/wLQwT81qRXE)]

---

## Características Principales

* **Autenticación y Roles:** Acceso protegido a la zona de administración basado en roles de usuario.
* **Gestión Reactiva (CRUD):** * **Listar:** Visualización de usuarios en tiempo real mediante *Angular Signals*.
    * **Crear:** Registro de nuevos usuarios con validación de campos.
    * **Editar:** Modificación de perfiles con lógica inteligente (la contraseña solo se actualiza si se introduce una nueva).
    * **Eliminar:** Borrado físico de registros con confirmación.
* **Multimedia:** Soporte para fotos de perfil procesadas en Base64.
* **Contenerización:** Despliegue rápido y consistente mediante Docker Compose.

---

## Tecnologías Utilizadas

* **Frontend:** Angular 16 (Signals, Router, HttpClient).
* **Backend:** Node.js (Express framework).
* **Base de Datos:** MySQL 8.0.
* **Infraestructura:** Docker & Docker Compose.
