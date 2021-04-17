import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/merchants");
  }

  get(id) {
    return http.get(`/merchants/${id}`);
  }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

  findByTitle(name) {
    return http.get(`/merchants?name=${name}`);
  }
}
export default new DataService();