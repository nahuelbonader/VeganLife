const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  products: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref : "productOrder"
  }],
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  client: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  store: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "store",
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Efectivo", "Tarjeta de Débito", "Tarjeta de Crédito", "MercadoPago", "BTC", "Transferencia"],
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    enum: ["Confirmado", "En Camino", "Entregado", "Cancelado"],
    default : "Confirmado"
  },
});

const Purchase = mongoose.model("purchase", purchaseSchema);
module.exports = Purchase;