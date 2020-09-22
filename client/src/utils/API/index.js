import axios from "axios";
export default {
  get: () => {
    return axios.get("http://localhost:5000/api/input");
  },
  post: (data) => {
    return axios.post("http://localhost:5000/api/input", data);
  },
  dateHigh: () => {
    return axios.get("http://localhost:5000/api/input/filters/dateHigh");
  },
  dateLow: () => {
    return axios.get("http://localhost:5000/api/input/filters/dateLow");
  },
  typeHigh: () => {
    return axios.get("http://localhost:5000/api/input/filters/typeHigh");
  },
  typeLow: () => {
    return axios.get("http://localhost:5000/api/input/filters/typeLow");
  },
  addressHigh: () => {
    return axios.get("http://localhost:5000/api/input/filters/addressHigh");
  },
  addressLow: () => {
    return axios.get("http://localhost:5000/api/input/filters/addressLow");
  },
  nameHigh: () => {
    return axios.get("http://localhost:5000/api/input/filters/nameHigh");
  },
  nameLow: () => {
    return axios.get("http://localhost:5000/api/input/filters/nameLow");
  },
};
