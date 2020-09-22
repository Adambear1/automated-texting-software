import axios from "axios";
export default {
  get: () => {
    return axios.get("http://localhost:5000/api/input");
  },
  post: (data) => {
    return axios.post("http://localhost:5000/api/input", data);
  },
  remove: (data) => {
    return axios.delete("http://localhost:5000/api/input", data);
  },
  dateHigh: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/dateHigh", data);
  },
  dateHighAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/dateHighAll");
  },
  dateLow: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/dateLow", data);
  },
  dateLowAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/dateLow");
  },
  typeHigh: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/typeHigh", data);
  },
  typeHighAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/typeHighAll");
  },
  typeLow: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/typeLow", data);
  },
  typeLowAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/typeLowAll");
  },
  addressHigh: (data) => {
    return axios.post(
      "http://localhost:5000/api/input/filters/addressHigh",
      data
    );
  },
  addressHighAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/addressHighAll");
  },
  addressLow: (data) => {
    return axios.post(
      "http://localhost:5000/api/input/filters/addressLow",
      data
    );
  },
  addressLowAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/addressLowAll");
  },
  nameHigh: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/nameHigh", data);
  },
  nameHighAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/nameHighAll");
  },
  nameLow: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/nameLow", data);
  },
  nameLowAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/nameLowAll");
  },
  // Types
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
