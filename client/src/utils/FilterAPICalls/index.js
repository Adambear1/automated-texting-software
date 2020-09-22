const FilterAPICalls = {
  // date
  dateHigh: function (api, state) {
    api
      .dateHigh()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  dateLow: function (api, state) {
    api
      .dateLow()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   type
  typeHigh: function (api, state) {
    api
      .typeHigh()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  typeLow: function (api, state) {
    api
      .typeLow()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   address
  addressHigh: function (api, state) {
    api
      .addressHigh()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  addressLow: function (api, state) {
    api
      .addressLow()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //   name
  nameHigh: function (api, state) {
    api
      .nameHigh()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  nameLow: function (api, state) {
    api
      .nameLow()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export { FilterAPICalls };
