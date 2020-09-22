const FilterAPICalls = {
  // date
  dateHigh: function (api, state, info) {
    api
      .dateHigh(info)
      .then((data) => {
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  dateHighAll: function (api, state) {
    api
      .dateHighAll()
      .then((data) => {
        console.log(data.data);
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
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  dateLowAll: function (api, state) {
    api
      .dateLowAll()
      .then((data) => {
        console.log(data.data);
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
  typeHighAll: function (api, state) {
    api
      .typeHighAll()
      .then((data) => {
        console.log(data.data);
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
  typeLowAll: function (api, state) {
    api
      .typeLowAll()
      .then((data) => {
        console.log(data.data);
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
  addressHighAll: function (api, state) {
    api
      .addressHighAll()
      .then((data) => {
        console.log(data.data);
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
  addressLowAll: function (api, state) {
    api
      .addressLowAll()
      .then((data) => {
        console.log(data.data);
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
  nameHighAll: function (api, state) {
    api
      .nameHighAll()
      .then((data) => {
        console.log(data.data);
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
  nameLowAll: function (api, state) {
    api
      .nameLowAll()
      .then((data) => {
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export { FilterAPICalls };
