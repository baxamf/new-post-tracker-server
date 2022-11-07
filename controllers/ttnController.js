const ttnService = require("../service/ttnService");

class TtnController {
  async checkTtn(req, res, next) {
    try {
      const { value, userId } = req.body;
      const ttnStatus = await ttnService.checkTtn(value, userId);
      return res.json(ttnStatus);
    } catch (error) {
      next(error);
    }
  }

  async getTtn(req, res) {
    const { userId } = req.query;
    try {
      const ttns = await ttnService.getTtns(userId);
      return res.json(ttns);
    } catch (error) {
      next(error);
    }
  }

  async deleteTtn(req, res, next) {
    const { userId } = req.query;
    try {
      const ttn = await ttnService.deleteTtn(userId);
      return res.json(ttn);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TtnController();
