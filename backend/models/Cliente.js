const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Cliente = mongoose.model(
  "Cliente",
  new Schema({
    nome: {
      type: String,
      required: true,
    },
    peso_produto: {
      type: Number,
      required: true,
    },
    endereco: Object,
  }),
  { timestamps: true }
);

module.exports = Cliente;
