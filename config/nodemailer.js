const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6d8283c8e1bdda",
    pass: "c565aaaee01b51"
  }
});

module.exports = transport;