const Nominatim = require("nominatim-geocoder");
const geocoder = new Nominatim();

module.exports = class ApiController {
  static async search(req, res) {
    const { search } = req.params;
    if (!search && search === undefined) {
      res.status(400).json({ message: "A localização é obrigatória" });
    }
    geocoder
      .search({ q: search, addressdetails: '1' })
      .then((response) => {
        if (response.length === 0) {
          res.status(400).json({ message: "Localização não encontrada" });
          return;
        }
        res.status(200).json({ enderecos: response });
      })
      .catch((error) => {
        res.status(400).json({ message: error });
      });
  }
};
