require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.email = function (contacts) {
  for (let i = 0; i < contacts.length; i++) {
    //Email
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL, // TODO: your gmail account
        pass: process.env.PASS, // TODO: your gmail password
      },
    });
    let mailOptions = {
      from: "cashforkeystacoma@gmail.com", // TODO: email sender
      to: contacts[i].email, // TODO: email receiver
      subject: `A Message For ${
        contacts[i].first_name
          ? contacts[i].first_name
          : "The Home Owner at " + contacts[i].address
      } ${contacts[i].last_name ? contacts[i].last_name : ""}`,
      text: _message.message,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return err;
      }
      return log("Email sent!!!");
    });
  }
};
