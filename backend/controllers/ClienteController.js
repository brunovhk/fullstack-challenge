const Cliente = require("../models/Cliente");

module.exports = class ClienteController{
    static async register(req, res){
        res.json('ola')
    }
}