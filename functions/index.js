const functions = require('firebase-functions');
const nodeMailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendForm = functions.https.onCall((data) => {
  const msgOptions = {
    to: 'juankcontreras00@gmail.com',
    from: 'Vue example',
    subject: data.subject,
    text: data.text,
    html: data.html,
  };
  return mailTransport.sendMail(msgOptions);
});
