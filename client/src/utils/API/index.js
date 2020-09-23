import axios from "axios";
export default {
  get: () => {
    return axios.get("http://localhost:5000/api/input");
  },
  post: (data) => {
    return axios.post("http://localhost:5000/api/input", data);
  },
  remove: (data) => {
    console.log(data);
    return axios.delete("http://localhost:5000/api/input/" + data);
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
  amountHigh: (data) => {
    return axios.post(
      "http://localhost:5000/api/input/filters/amountHigh",
      data
    );
  },
  amountHighAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/amountHighAll");
  },
  amountLow: (data) => {
    return axios.post(
      "http://localhost:5000/api/input/filters/amountLow",
      data
    );
  },
  amountLowAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/amountLowAll");
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
  cityHigh: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/cityHigh", data);
  },
  cityHighAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/cityHighAll");
  },
  cityLow: (data) => {
    return axios.post("http://localhost:5000/api/input/filters/cityLow", data);
  },
  cityLowAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/cityLowAll");
  },
  countyHigh: (data) => {
    return axios.post(
      "http://localhost:5000/api/input/filters/countyHigh",
      data
    );
  },
  countyHighAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/countyHighAll");
  },
  countyLow: (data) => {
    return axios.post(
      "http://localhost:5000/api/input/filters/countyLow",
      data
    );
  },
  countyLowAll: () => {
    return axios.get("http://localhost:5000/api/input/filters/countyLowAll");
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
