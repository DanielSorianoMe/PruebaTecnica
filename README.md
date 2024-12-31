Task Management System

Descripción General

El sistema de gestión de tareas es una aplicación web compuesta por un Frontend desarrollado en Angular y un Backend construido con Spring Boot. Su propósito es ofrecer una plataforma funcional para gestionar tareas (CRUD).

                   +--------------------+
                   |   Angular Frontend |
                   +--------------------+
                            |
                            | REST API
                            |
                   +--------------------+
                   | Spring Boot Backend|
                   +--------------------+
                            |
                            | Database Connection
                            |
                   +--------------------+
                   |   H2 Database      |
                   +--------------------+


El sistema utiliza contenedores Docker para simplificar su despliegue y configuración.

Características Principales

Frontend
	•	Framework: Angular
	•	Funciones:
	•	Crear tareas con título y descripción.
	•	Listar todas las tareas disponibles.
	•	Editar tareas existentes.
	•	Eliminar tareas.
	•	Interacción: Se comunica con el Backend mediante API REST.
	•	Despliegue: Utiliza Apache HTTP Server para servir la aplicación.

Backend
	•	Framework: Spring Boot
	•	Funciones:
	•	Operaciones CRUD para las tareas.
	•	Almacenamiento en base de datos H2 en memoria.
	•	Endpoints:
	•	GET /tasks - Lista todas las tareas.
	•	POST /tasks - Crea una nueva tarea.
	•	PUT /tasks/{id} - Actualiza una tarea existente.
	•	DELETE /tasks/{id} - Elimina una tarea por ID.
	•	Interacción: Exposición de API REST para el consumo del Frontend.

    Requisitos Previos
	1.	Docker y Docker Compose instalados en el sistema.
	2.	Navegador web (Chrome, Firefox, Edge, etc.).
	3.	(Opcional) Postman o cURL para probar la API.

    Ejecución del Proyecto

Levantar el Sistema Completo
	1.	Clonar el repositorio en tu máquina local.
	2.	Ejecutar el siguiente comando en el directorio raíz del proyecto:

    ##docker-compose up --build##

	3.	Accede a las siguientes URL desde el navegador:
	•	Frontend: http://localhost:4200
	•	Backend: http://localhost:8085/swagger-ui/index.html#/

Pruebas

Frontend
	•	Accede a http://localhost:4200 y verifica:
	•	Crear tareas.
	•	Editar tareas.
	•	Eliminar tareas.
	•	Listar tareas.

Backend
	•	Usar Postman o cURL para probar los endpoints:
	•	GET /tasks
	•	POST /tasks
	•	PUT /tasks/{id}
	•	DELETE /tasks/{id}


