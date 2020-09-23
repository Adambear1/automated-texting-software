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
  //   Type
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
  //   Amount
  amountHigh: function (api, state, info) {
    api
      .amountHigh(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  amountHighAll: function (api, state) {
    api
      .amountHighAll()
      .then((data) => {
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  amountLow: function (api, state, info) {
    api
      .amountLow(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  amountLowAll: function (api, state) {
    api
      .amountLowAll()
      .then((data) => {
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   Address
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
  //   city
  cityHigh: function (api, state, info) {
    api
      .cityHigh(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  cityHighAll: function (api, state) {
    api
      .cityHighAll()
      .then((data) => {
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  cityLow: function (api, state, info) {
    api
      .cityLow(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  cityLowAll: function (api, state) {
    api
      .cityLowAll()
      .then((data) => {
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   county
  countyHigh: function (api, state, info) {
    api
      .countyHigh(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  countyHighAll: function (api, state) {
    api
      .countyHighAll()
      .then((data) => {
        console.log(data.data);
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  countyLow: function (api, state, info) {
    api
      .countyLow(info)
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  countyLowAll: function (api, state) {
    api
      .countyLowAll()
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
