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
    const rua = endereco.address.road;
    const cidade = endereco.address.city;
    const pais = endereco.address.country_code;
    const lat = endereco.lat;
    const lng = endereco.lon;
    // Salvando cliente no banco
    const cliente = new Cliente({
      nome,
      peso_produto,
      endereco: {
        rua,
        cidade,
        pais,
        lat,
        lng,
      },
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
  // Remove todos os clientes
  static async deleteAllData(req, res) {
    try {
      await Cliente.deleteMany();
      res
        .status(200)
        .json({ message: "Todos os clientes foram deletados com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};
