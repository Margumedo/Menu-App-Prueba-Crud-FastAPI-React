![](https://res.cloudinary.com/maicolino/image/upload/v1704205301/menu/maxresdefault_n62xqy.jpg)

# MenuApp usando FastAPI CRUD con SQLAlchemy, Alembic, PostgreSQL y React.js

MenuApp es una apliacación que te ayuda a llevar un registro de los platos que ofrece un restaurant. Podrás crear trantos platos como quieras, editarlos y borrarlos.

Esta app se creo a patir del enunciado de la siguiente prueba técnica:

### Hacer una crud completo, Create, Read, Update, Delete.

**Cualquier db y Cualquier lenguaje.**

- **Agregar Plato**
- **Modificar Plato**
- **Eliminar**
- **Visualizar lista de platos**

* **Cualquier frontend**
  **El precio de un plato debe estar entre 9 y 25 dolares.**

* **Cualquier Base de datos.**
  **En la lista de platos se deben visualizar los platos activos. Un plato esta activo cuando su fecha de inicio de actividad es mayor o igual a hoy.**

* **El nombre de un plato debe tener mínimo dos palabras.** ✅
* **Color ✅**
* **Precio ✅**
* **Campos ✅**
* **id ✅**
* **Nombre ✅**
* **Fecha ✅**
* **Inicio de Actividad ✅**
* **Oferta Si/No✅**

### Recomendaciones

> Recuerda crear y activar tu entorno virtual antes de instalar los requerimientos.

## Setup

### Requisitos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- Python (versión 3.9) o superior.
- Dependencias: se incluyen en el repo.
- Nodejs para utilizar npm

## Instalación

Sigue estos pasos para configurar el entorno y ejecutar el proyecto:

1. Clona el repositorio desde GitHub:

   ```
   git clone https://github.com/Margumedo/Menu-App-Prueba-Crud-FastAPI-React.git
   ```

2. Navega al directorio del proyecto:

   cd tu-repositorio

3. Crea un entorno virtual (recomendado):

   ```
   python -m virtual venv
   ```

4. Activa el entorno virtual:

- En Windows:

  ```
  venv\Scripts\activate
  ```

- En macOS y Linux:

  ```
  source venv/bin/activate
  ```

5. **Installation of Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

# Database Setup

Instalar PostgreSQL y arrancar el servidor de la base de datos. Crear una nueva base de datos PostgreSQL. Copiar `.env.example` a `.env` y llenar los valores de la variable de entorno de la URL de conexión a la base de datos y otros valores necesarios.

# Running the Application

Executar la aplicación con `uvicorn main:app --reload`:

```bash
 uvicorn main:app --reload
```

Esto iniciará tu aplicación FastAPI y estará disponible en la dirección http://localhost:8000 para interactuar con la API a través de la interfaz de documentación generada automáticamente por FastAPI.

# API Endpoints

### Platos

Create: `POST /platos`

Read: `GET /platos`

Update: `PUT /platos/{platos_id}`

Delete: `DELETE /platos/{platos_id}`

# Testing

Utilizar herramientas como curl o Postman para probar las solicitudes API. También se pueden agregar pruebas unitarias con pytest.

# React

Antes de arrancar el frontend de la apliación es necesario instalar axios con el siguiente comando:
`npm install axios`

Tambien es necesario instalar sweetalert con el siguiente comando:
`npm install sweetalert --save`

Executar la aplicación dentro de la carpeta React/menu-app con
`npm start`

Esto iniciará tu aplicación React y estará disponible en la dirección http://localhost:3000
