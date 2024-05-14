# Proyecto Personal Fontend & Backend

El proyecto se basa en 2 máquinas, la parte de Frontend realizada con React (Vite) y el Backend se encuentra en la carpera "Server" donde se ha utilizado NodeJs y Express.

### USO DEL PROYECTO
Para levantar el servidor, tenemos que entrar en la carpeta antes mencionada de "server", crear el package .json e instalar los paquetes de dependencias 
```zsh
cd server
npm init
npm install
```
Rellenar el archivo de conexión a BBDD, en este caso en Elefant SQL. Se deja referencia en el archivo ".env.example"
```zsh
DB__HOST=
DB__USER=
DB__PASSWORD=
DB__PORT=5432
DB__DATABASE=
```
La parte visual Frontend se situa por componentes en la carpeta "src". Para levantar la visualización
```zsh
npm run dev
```
----
## Express
### Routes

1. Routes
En server/routes podremos encontrar los endpoints creadas
* user: datos de usuario
* favorite: rutas marcadas como objetivos
* routes: las vias con su información

<br>

2. Conexión BBDD Elefant SQL 
* Configuración en server/config con los datos de conexión en .env
* Sentencias SQL en server/queries
* Modelos de datos en server/models lleva las funciones que se van a usar
* Controladores en server/controllers que lleva la parte lógica del sitio, se encarga de recibir y devolver datos procesados

Estructura de ejemplo de datos
```js
   {
        "provincia": "Alicante",
        "lugar": "Alcalali",
        "sector": "Alcalali",
        "via": "Cactus Climb",
        "grado": "6c+",
        "image_url": "https://image.thecrag.com/240x320/64/ac/64ac7ab1eca7c499a7ac234b2ef013acaf6fa344"
    }
```

3. Postman

Para probar las APIs se encuentra el archivo server/LassoClimber.postman.js

4. Utilidades

Restos de archivos que se han usado
- Datos de inicio para cargar la bbdd (array de objetos)
- Scrapper de 2 webs que no han funcionado correctamente.


## React 

Se ha usado Vite como herramienta de compilacion de React
```zsh
npm create vite@latest
```
* **Estructurado en componentes** => Organizado en carpetas src/components

* **Estilos** => Se ha usado Sass, estructurado en la carpeta src/styles