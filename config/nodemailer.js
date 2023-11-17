const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "**********",
    pass: "***********"
  }
});

module.exports = transporter;