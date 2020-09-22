const TypeFilterAPICalls = {
  // date
  cancelledExpired: function (api, state) {
    api
      .cancelledExpired()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FSBO: function (api, state) {
    api
      .FSBO()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  foreclosure: function (api, state) {
    api
      .foreclosure()
      .then((data) => {
        state(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export { TypeFilterAPICalls };
