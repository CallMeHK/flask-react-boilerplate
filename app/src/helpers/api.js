import axios from "axios";

export default class api {
  static getAll(route) {
    return axios.get(`/api/${route}`).then(res => {
      console.log(res);
      return res.data;
    });
  }
}
