const { City, Warhouse } = require("../models/models");
const cityService = require("../service/cityService");

class CityController {
  async addCity(req, res, next) {
    try {
      const { value } = req.body;
      const city = await cityService.addCity(value);
      return res.json(city);
    } catch (error) {
      next(error);
    }
  }

  async checkCity(req, res, next) {
    try {
      const { value } = req.query;
      const city = await cityService.checkCity(value);
      return res.json(city);
    } catch (error) {
      next(error);
    }
  }

  async getCity(req, res, next) {
    try {
      const { id } = req.params;
      const warhouses = await cityService.getCity(id);
      return res.json(warhouses);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CityController();
