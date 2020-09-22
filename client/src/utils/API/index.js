import axios from "axios";
export default {
  get: () => {
    return axios.get("http://localhost:5000/api/input");
  },
  post: (data) => {
    return axios.post("http://localhost:5000/api/input", data);
  },
  dateHigh: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/dateHigh", data);
  },
  dateLow: (data) => {
    return axios.get("http://localhost:5000/api/input/filters/dateLow", data);
  },
  typeHigh: (data) => {
    return axios.get("http://localhost:5000/api/input/filters/typeHigh", data);
  },
  typeLow: (data) => {
    return axios.get("http://localhost:5000/api/input/filters/typeLow", data);
  },
  addressHigh: (data) => {
    return axios.get(
      "http://localhost:5000/api/input/filters/addressHigh",
      data
    );
  },
  addressLow: (data) => {
    return axios.get(
      "http://localhost:5000/api/input/filters/addressLow",
      data
    );
  },
  nameHigh: (data) => {
    return axios.get("http://localhost:5000/api/input/filters/nameHigh", data);
  },
  nameLow: (data) => {
    return axios.get("http://localhost:5000/api/input/filters/nameLow", data);
  },
  cancelledExpired: () => {
    return axios.get(
      "http://localhost:5000/api/input/typefilters/cancelledExpired"
    );
  },
  FSBO: () => {
    return axios.get("http://localhost:5000/api/input/typefilters/FSBO");
  },
  foreclosure: () => {
    return axios.get("http://localhost:5000/api/input/typefilters/foreclosure");
  },
};
