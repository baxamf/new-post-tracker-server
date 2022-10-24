const ApiError = require("../exceptions/apiError");
const { Ttn } = require("../models/models");

class ttnService {
  async addTtn(value) {
    const ttn = await Ttn.findOne({ where: { value } });
    if (ttn) {
      throw ApiError.BadRequest(`Заказ з номером ${value} вже існує`);
    }
    const newTtn = await Ttn.create({ value });
    return newTtn;
  }

  async getTtns() {
    const ttns = await Ttn.findAll();
    return ttns;
  }

  async deleteTtn() {
    const ttn = await Ttn.destroy({ where: {} });
    return ttn;
  }
}

module.exports = new ttnService();
