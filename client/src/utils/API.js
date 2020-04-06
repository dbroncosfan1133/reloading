import axios from "axios";

export default {
  // Gets all loads
  getLoads: function() {
    return axios.get("/api/loads");
  },
  // Gets the load with the given id
  getLoad: function(id) {
    return axios.get("/api/loads/" + id);
  },
  // Deletes the load with the given id
  deleteLoad: function(id) {
    return axios.delete("/api/loads/" + id);
  },
  // Saves a new load to the database
  saveLoad: function(loadData) {
    return axios.post("/api/loads", loadData);
  },
  getData: function() {
    return axios.get("/api/data");
  }
};
