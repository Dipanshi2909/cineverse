import axios from "axios";

const API_URL = "http://localhost:8080/api/movies";

export const getMovies = async () => {
  return axios.get(API_URL);
};