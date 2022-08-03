import axios from "axios";
import apiKey from "./apiKey";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey.movie,
    language: "ko-KR",
  },
});

export default instance;
