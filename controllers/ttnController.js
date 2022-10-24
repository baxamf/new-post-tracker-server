const ttnService = require("../service/ttnService");

class TtnController {
  async addTtn(req, res, next) {
    try {
      const { value } = req.body;
      const ttn = await ttnService.addTtn(value);
      return res.json(ttn);
    } catch (error) {
      next(error);
    }
  }

  async getTtn(req, res) {
    const ttns = await ttnService.getTtns();
    return res.json(ttns);
  }

  async deleteTtn(req, res, next) {
    try {
      const ttn = await ttnService.deleteTtn();
      return res.json(ttn);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TtnController();
