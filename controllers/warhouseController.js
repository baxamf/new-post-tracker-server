const warhouseService = require("../service/warhouseService");

class WarhouseController {
  async addWarhouse(req, res, next) {
    try {
      const { warhouses, cityId } = req.body;
      const newWarhouses = await warhouseService.addWarhouse(warhouses, cityId);
      return res.json(newWarhouses);
    } catch (error) {
      next(error);
    }
  }

  async getWarhouse(req, res, next) {
    try {
      const { cityId } = req.query;
      const warhouses = await warhouseService.getWarhouses(cityId);
      return res.json(warhouses);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new WarhouseController();
