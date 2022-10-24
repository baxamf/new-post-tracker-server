const { Warhouse } = require("../models/models");

class warhouseService {
  async addWarhouse(warhouses, cityId) {
    const newWarhouses = [];
    for await (const warhouse of warhouses) {
      const newWarhouse = await Warhouse.create({
        description: warhouse.Description,
        cityId,
      });
      newWarhouses.push(newWarhouse);
    }
    return newWarhouses;
  }

  async getWarhouses(cityId) {
    let warhouses;
    if (!cityId) {
      warhouses = await Warhouse.findAll();
    }
    if (cityId) {
      warhouses = await Warhouse.findAll({ where: { cityId } });
    }
    return warhouses;
  }
}

module.exports = new warhouseService();
