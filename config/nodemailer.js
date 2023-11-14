const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d62b946d73f88b",
      pass: "bd09a968514826"
    }
  });

module.exports = transporter;