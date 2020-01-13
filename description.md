routes es para definir operaciones a traves de url que damos en servidor, url para agregar tarea, para borrar, etc.

models que datos se pueden almacenar en nuestar base de datos

database.js para conectar a base de datos, se utiliza en index.js

public carpeta para enviar cualquier archivo al front end

carpeta app se coloca todo el codigo de react, y ese codigo se transforma ahtml css javascript para que el servidor pueda leerlo y se manda a la carpeta public

primero npm init --yes para crear package.json

npm i express instala express

npm i nodemon -D instala nodemon como dependencia de desarrollo, modulo que ayuda a desarrollar mas no es imoprtante para que corra

en package.json "dev": "nodemon /src/index.js"

npm run dev para correr con nodemon

npm install morgan

dirname ruta de archivo

requerir mongoose en database.js que es la coneccion
requerir objeto mongoose en index.js

codigo asincrono tarea que se ejecuta cuando termina otra

npm i webpack -D
npm i webpack -cli -D
