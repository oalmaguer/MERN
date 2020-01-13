const mongoose = require("mongoose");

const { Schema } = mongoose; //requiero esquema desde mongoose

//esquema guardado en esta constante
const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model("Task", TaskSchema);
//Task para reutilizar el squema, taskschema como va lucir tu esquema
