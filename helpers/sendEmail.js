const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const sendMail = async (data) => {
  const email = { ...data, from: "jaroslav.procjuk@gmail.com" };
  await sgMail.send(email);
};
module.exports = sendMail;
