import axios from "axios";

export default {
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
