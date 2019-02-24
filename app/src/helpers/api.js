import axios from "axios";

export default class api {
  static getAll(route) {
    return axios.get(`/api/${route}`).then(res => {
      console.log(res);
      return res.data;
    });
  }
  static addOne(route,req){
      return axios.post(`/api/${route}`, req)
  }
  static deleteOne(route,id){
      return axios.delete(`/api/${route}/${id}`)
  }
  static patchOne(route,req,id){
    return axios.patch(`/api/${route}/${id}`, req)
}
}
