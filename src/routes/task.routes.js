const express = require("express");
const router = express.Router(); //devuelve objeto en el que ingresas rutas

const Task = require("../models/task"); //modelo almacenado en constante para hacer consultas

router.get("/", async (req, res) => {
  const tasks = await Task.find(); // await sig esta tarea tomara algo de tiempo, y lo guarda en constante

  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  console.log(task);
  await task.save();
  res.json({ status: "Task Saved" });
});

router.put("/:id", async (req, res) => {
  const { title, description } = req.body; //cliente va enviar title y description desde form
  const newTask = { title, description }; //nueva tarea que se mandara a db
  await Task.findByIdAndUpdate(req.params.id, newTask); //req.params.id obtiene id que pasa el cliente newTask la nueva info
  res.json({ status: "Task Updated" });
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({ status: "Task Deleted" });
});

module.exports = router;

/** 
 ** Se utiliza REST API. Es una direccion de internet donde la app
 **podra hacer peticiones, obtener datos, actualizar, eliminar, etc.
 
 */
