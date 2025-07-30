const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.Email_send,
    pass: process.env.password,
  },
});

const sendCriticalError = async (subject, text) => {
  const mailOptions = {
    from: process.env.Email_send,
    to: process.env.Email_rec,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendCriticalError;
