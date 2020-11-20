const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creacion del Schema Category

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  active: { type: Boolean, default: true },
});

// Creacion del modelo Category
const Category = mongoose.model("category", categorySchema);

// Exportar el modelo

module.exports = Category;
