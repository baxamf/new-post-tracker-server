const { City, Warhouse } = require("../models/models");
const apiNewPost = require("../api/index");
const warhouseService = require("./warhouseService");
const ApiError = require("../exceptions/apiError");

class CityService {
  async addCity(value) {
    const { data: newWarhouses } = await apiNewPost.getCityNewPost(value);
    if (!newWarhouses.length) {
      throw ApiError.BadRequest("Немає адрес за цим запросом");
    }
    const newCity = await City.create({ value });
    const warhouses = await warhouseService.addWarhouse(
      newWarhouses,
      newCity.id
    );
    return warhouses;
  }

  async checkCity(value) {
    const city = await City.findOne({ where: { value } });
    return city ? this.getCity(city.id) : this.addCity(value);
  }

  async getCity(id) {
    const warhouses = await Warhouse.findAll({ where: { cityId: id } });
    return warhouses;
  }
}

module.exports = new CityService();
