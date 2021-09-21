# Stack MEAN
MongoDB, Express, Angular y Node.js


## RUN PROYECT

```
Run the following commands:

- Stack-MEAN\client

$ npm install

- Stack-MEAN\server

$ npm install

In the server project root create the file config.env copy/paste the database connection:

DB_MONGO=your-database-connection/name_database

Ej:

DB_MONGO=mongodb+srv://user:<password>@cluster0.pebzw.mongodb.net/name_database

```

## Angular Project - Client

```
ng new client
mode strict? Yes
Would you like to add Angular routing? Yes
SCSS

BOOSTRAP 5.1

https://getbootstrap.com/docs/5.1/getting-started/download/

npm install bootstrap
npm install bootstrap@next → Last version

angular.json

"styles": [
    "src/styles.scss",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],

Note: Run server again

Components or Pages:

Se crea el módulo con su propio componente y ruta:

ng g m pages/create-product --module app --route create
ng g m pages/list-product --module app --route list

ng g s services/product --skip-tests

Routing

CSS Gradientes:
https://uigradients.com/#CosmicFusion
https://uigradients.com/#Netflix

Netflix

font-awesome:

https://cdnjs.com/libraries/font-awesome

https://fonts.google.com/specimen/Montserrat?query=Montserrat

ngx-toastr
https://www.npmjs.com/package/ngx-toastr

npm install ngx-toastr --save

"styles": [
  "styles.scss",
  "node_modules/ngx-toastr/toastr.css" // try adding '../' if you're using angular cli before 6
]

Running server again


```

## Node.js - Server

```
mkdir server
cd server

- Solicita datos para iniciar el proyecto node.js:

npm init

Press ^C at any time to quit.
package name: (server) serverapi
version: (1.0.0)
description: MEAN API
entry point: (index.js) app.js
test command:
git repository:
keywords:
author: Geovanny Días
license: (ISC)

{
  "name": "serverapi",
  "version": "1.0.0",
  "description": "MEAN API",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Geovanny Días",
  "license": "ISC"
}

- Inicializa el proyecto node.js con información por defecto:

npm init -y

Dependencias:
npm i express mongoose dotenv

dotenv → Para manjer archivos de entorno

Dependencias Desarrollo:
npm i -D nodemon


NODEMON CONFIG:

package.json

 "scripts": {
    "dev": "nodemon src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

npm run dev

CORS:
npm install cors

```


## MongoDB

```
https://www.mongodb.com/es

Crear cuenta (Login → Google)

- Create a database → Build a Database
- Shared → Create → FREE
- Create Cluster

Your cluster is being created
New clusters take between 1-3 minutes to provision.

- Create User and Password

SECURITY:
Database Access
g=geo
g=/g=123456

- Databases
- Connect
- Choose a connection method
- Connect using MongoDB Compass
- Copy the connection string, then open MongoDB Compass.

mongodb+srv://user:<password>@cluster0.pebzw.mongodb.net/test


- Download MongoDB Compass (Application Portable UI to MongoDB)
https://www.mongodb.com/try/download/compass
- Descomprimir
- Ejecutar la App MongoDBCompass.exe

mongodb+srv://user:<password>@cluster0.pebzw.mongodb.net/test
Eliminar "/test" que es la base de datos
mongodb+srv://user:<password>@cluster0.pebzw.mongodb.net

ERROR (Cluster):

connection <monitor> to 34.204.152.215:27017 closed

- Network Access
- Add IP Address

Access List Entry: 0.0.0.0/0 → En producción cambiar conexión al cluster
Comment: desarrollo

Connection Successful...
Create database

Database Name: appmean
Collection Name: products


Agregar Extensión a VSC para que reconozca *.env:
ext:env
Install DotENV



mongoose docs:
https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
https://mongoosejs.com
https://mongoosejs.com/docs/index.html

```

## ENVIRONMENT (.env)

```
Crear el fichero config.env y en una variable de entorno colocar la cadena de conexión a la base de datos:

Ej: 

DB_MONGO=mongodb+srv://user:<password>@cluster0.pebzw.mongodb.net/name_database

```

## Express → Métodos de respuesta

```
https://expressjs.com/es/guide/routing.html

res.download()	Solicita un archivo para descargarlo.
res.end()	Finaliza el proceso de respuesta.
res.json()	Envía una respuesta JSON.
res.jsonp()	Envía una respuesta JSON con soporte JSONP.
res.redirect()	Redirecciona una solicitud.
res.render()	Representa una plantilla de vista.
res.send()	Envía una respuesta de varios tipos.
res.sendFile()	Envía un archivo como una secuencia de octetos.
res.sendStatus()	Establece el código de estado de la respuesta y envía su representación de serie como el cuerpo de respuesta.

https://expressjs.com/es/api.html

```


