const { City, Warhouse } = require("../models/models");

class CityService {
  async addCity(value) {
    const city = await City.findOne({ where: { value } });
    if (!city) {
      const newCity = await City.create({ value });
      return newCity;
    }
    return city;
  }

  async checkCity(value) {
    const city = await City.findOne({ where: { value } });
    if (city) {
      const warhouses = await Warhouse.findAll({ where: { cityId: city.id } });
      return warhouses;
    }
    return city;
  }

  async getCity(id) {
    const warhouses = await Warhouse.findAll({ where: { cityId: id } });
    return warhouses;
  }
}

module.exports = new CityService();
