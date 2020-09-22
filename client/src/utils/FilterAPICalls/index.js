const FilterAPICalls = {
  // date
  dateHigh: function (api, state, info) {
    api
      .dateHigh(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  dateLow: function (api, state, info) {
    api
      .dateLow(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   type
  typeHigh: function (api, state, info) {
    api
      .typeHigh(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  typeLow: function (api, state, info) {
    api
      .typeLow(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   address
  addressHigh: function (api, state, info) {
    api
      .addressHigh(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  addressLow: function (api, state, info) {
    api
      .addressLow(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   name
  nameHigh: function (api, state, info) {
    api
      .nameHigh(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  nameLow: function (api, state, info) {
    api
      .nameLow(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export { FilterAPICalls };
