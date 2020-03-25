import axios from "axios";

export default {
  // Gets all books
  getLoads: function() {
    return axios.get("/api/loads");
  },
  // Gets the book with the given id
  getLoad: function(id) {
    return axios.get("/api/loads/" + id);
  },
  // Deletes the book with the given id
  deleteLoad: function(id) {
    return axios.delete("/api/loads/" + id);
  },
  // Saves a book to the database
  saveLoad: function(loadData) {
    return axios.post("/api/loads", loadData);
  }
};
