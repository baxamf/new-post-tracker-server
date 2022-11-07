const { getStatusNewPost } = require("../api");
const ApiError = require("../exceptions/apiError");
const { Ttn } = require("../models/models");

class ttnService {
  async addTtn(value, userId) {
    const ttn = await Ttn.findOne({ where: { value, userId } });
    if (!ttn) {
      const newTtn = await Ttn.create({ value, userId });
    }
  }

  async checkTtn(value, userId) {
    const { data: packageInfo, success } = await getStatusNewPost(value);
    if (!success || packageInfo[0].StatusCode === "3") {
      throw ApiError.BadRequest("Не має інфо за цим номером");
    }
    this.addTtn(value, userId);
    const status = {
      Status: packageInfo[0].Status,
      CitySender: packageInfo[0].CitySender,
      WarehouseSender: packageInfo[0].WarehouseSender,
      CityRecipient: packageInfo[0].CityRecipient,
      WarehouseRecipient: packageInfo[0].WarehouseRecipient,
    };
    return status;
  }

  async getTtns(userId) {
    const ttns = await Ttn.findAll({ where: { userId } });
    return ttns;
  }

  async deleteTtn(userId) {
    const ttn = await Ttn.destroy({ where: { userId } });
    return ttn;
  }
}

module.exports = new ttnService();
