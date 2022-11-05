const axios = require("axios");
const NEWPOSTURL = "https://api.novaposhta.ua/v2.0/json/";

const apiNewPost = axios.create({
  baseURL: NEWPOSTURL,
});

class ApiNewPost {
  async getCityNewPost(city) {
    const { data } = await apiNewPost.post("", {
      apiKey: "853151f9823953b980cea3dc6b9d795b",
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: city,
        Page: "1",
        Limit: "10",
        Language: "UA",
      },
    });
    return data;
  }

  async getStatusNewPost(ttn) {
    const { data } = await apiNewPost.post("", {
      apiKey: "853151f9823953b980cea3dc6b9d795b",
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: ttn,
          },
        ],
      },
    });
    return data;
  }
}

module.exports = new ApiNewPost();
