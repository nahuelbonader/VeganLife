const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creacion del Schema ProductOrder

const productOrderSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "product" },
  units: { type: Number },
});

// Creacion del modelo ProductOrder
const ProductOrder = mongoose.model("productOrder", productOrderSchema);

// Exportar el modelo

module.exports = ProductOrder;
