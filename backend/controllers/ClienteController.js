const Cliente = require("../models/Cliente");

module.exports = class ClienteController {
  // Cadastro de clientes
  static async register(req, res) {
    const { nome, peso_produto, endereco } = req.body;
    // Validações
    if (!nome) {
      res.status(400).json({ message: "O nome é obrigatório" });
      return;
    }
    if (!peso_produto) {
      res.status(400).json({ message: "O peso do produto é obrigatório" });
      return;
    }
    if (!endereco) {
      res.status(400).json({ message: "O endereco é obrigatório" });
      return;
    }
    // Salvando cliente no banco
    const cliente = new Cliente({
      nome,
      peso_produto,
      endereco: {},
    });
    try {
      const newCliente = await cliente.save();
      res.status(201).json({
        message: "Cliente cadastrado com sucesso!",
        newCliente,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  // Retorno de todos os clientes
  static async getAll(req, res) {
    const clientes = await Cliente.find().sort({ nome: "asc" });
    res.status(200).json({
      clientes: clientes,
    });
  }
  
};
