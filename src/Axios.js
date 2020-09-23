import Axios from "axios";

// base url to make request
const instance = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
