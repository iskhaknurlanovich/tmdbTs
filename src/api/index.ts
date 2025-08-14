import axios from "axios";

export const api_tmdb = axios.create({
  baseURL: `${import.meta.env.VITE_API_TMDB}/3` || "",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDRhMDEwNTljZTg5MDlmYzgxMTQxYjk3MGJjMzhjYyIsIm5iZiI6MTcwMjgwMTIzMS4yMDUsInN1YiI6IjY1N2VhZjRmMDcyOTFjMDdkZjNlZjIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5nJEcU0w0TpoZTgi20a6mQ_ftNMQPbvmqQsjvGLENGM",
  },
});
export const image_api = "https://image.tmdb.org/t/p/original";
