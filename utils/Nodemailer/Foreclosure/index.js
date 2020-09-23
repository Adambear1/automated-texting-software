require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.foreclosure = function (data) {
  //Email
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL, // TODO: your gmail account
      pass: process.env.PASS, // TODO: your gmail password
    },
  });
  let mailOptions = {
    from: process.env.EMAIL, // TODO: email sender
    to: data.email, // TODO: email receiver
    subject: `${data.address}`,
    html: `Hi ${data.name},<br/><br/>
      My name is Lucinda.  I noticed that your property on <u>${data.address}</u> in ${data.city} is in foreclosure.<br/>
      I can purchase your property directly <b>AND GUARANTEE</b> that you walk away with at least <b>$10k CASH</b>. No hidden fees, commissions, no middle-men, etc.<br/>
      If interested, please give me a call at <br><a href="tel:253-632-9234">(253)-632-9234 </a></br> and I will make sure one of my associates will take great care of you. 
<br/>
<br/>
      Much consideration,
  <br/>
      Lucinda
<br/>
<br/>
  **Please feel free to visit my website at 
    <i><a href="http://LucindaBuysHomes.com" target="_blank">LucindaBuysHomes.com</a></i> to read more about me and my company! 😊 
     `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return log("Email sent!!!");
  });
};
