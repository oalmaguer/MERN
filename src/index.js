const express = require("express");
const path = require("path");
const morgan = require("morgan"); //middleware permite ver info en consola

const { mongoose } = require("./database");
const app = express();

// Seccion de configuracion
//port es como una variable , puerto de donde lo suba o 3000
app.set("port", process.env.PORT || 4000);

//Seccion de Middleware
app.use(morgan("dev")); //middleware funcion que se ejecuta antes de que lleguen las rutas
app.use(express.json()); // cada que llega dato a servidor pasa por esta funcion
//y si es formato json se puede acceder a el desde elc odigo del servidor, al igual que mandar

//Routes
app.use("/api/tasks", require("./routes/task.routes")); //leyendo task routes
// Static Files
// console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

//start the server
app.listen(app.get("port"), () => {
  console.log(`Server running on ${app.get("port")}`);
});
