import axios from "axios";

export default {
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // },

  getArticle: (query) => {
    return axios.get(query);
  },
  getSavedArticles: (query) => {
    return axios.get("api/articles/all");
  },

  saveArticle: (articleData) =>{
    return axios.post("/api/articles", articleData);
  },
  
  deleteArticle: (id) => {
    return axios.delete("/api/articles/"+ id);
  }


};
