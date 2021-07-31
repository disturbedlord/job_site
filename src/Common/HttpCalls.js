const axios = require("axios");
const Http = {
  POST: (url, body, headers = "") => {
    return axios.post(url, body, { headers: headers });
  },
  GET: (url, headers) => {
    console.log(headers);
    return axios.get(url, { headers: headers });
  },
};

export default Http;
