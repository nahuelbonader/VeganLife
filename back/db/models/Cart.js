const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creacion del Schema ProductOrder

const cartSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: "productOrder" }],
  owner: { type: Schema.Types.ObjectId, ref: "user" },
});

// Creacion del modelo ProductOrder
const Cart = mongoose.model("cart", cartSchema);

// Exportar el modelo

module.exports = Cart;
