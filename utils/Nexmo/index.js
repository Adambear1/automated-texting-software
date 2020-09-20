const Nexmo = require("nexmo");
const nexmo = new Nexmo(
  {
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET,
  },
  { debug: true }
);

module.exports.text = function (contacts) {
  const number =
    contacts[i].phoneNumber.length >= 7 ? false : "1" + contacts[i].phoneNumber;
  const message = `Hi ${contacts[i].first_name && contacts[i].first_name} ${
    contacts[i].last_name && contacts[i].last_name
  }, I noticed xxxxxxxxxxxxxxxxx`;
  nexmo.message.sendSms(
    process.env.NEXMO_PHONENUMBER,
    number,
    message,
    { type: "unicode" },
    (error, responseData) => {
      if (error) {
        console.log(error);
      } else {
        console.dir(responseData);
      }
    }
  );
};
