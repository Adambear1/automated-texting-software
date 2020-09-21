import axios from "axios";
export default {
  get: () => {
    return axios.get("http://localhost:5000/api/input");
  },
  post: (data) => {
    return axios.post("http://localhost:5000/api/input", data);
  },
};
