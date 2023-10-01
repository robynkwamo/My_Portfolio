const Email = require('email-templates');
// const nodemailer = require('node-mailer');

const send = true;
const host = 'smtp.gmail.com';
const emailPort = 465;

// function to select the Template
function selectTemplate(flag) {
  if (!flag) {
    return 'custEmailPugTemp';
  }
  return 'ownerEmailPugTemp';
}

// Function to send email
const sendEmail = function sendEmail(firstName, lastName, phoneNumber, isConfirmed, emailCredentials, templateFlag) {
  const ownerEmail = emailCredentials.USER;
  const newEmail = new Email({
    views: { root: __dirname },
    message: { from: emailCredentials.USER },
    send,
    preview: false,
    transport: {
      secure: true,
      host,
      port: emailPort,
      auth: {
        user: emailCredentials.USER,
        pass: emailCredentials.PASS,
      },
    },
  });

  const isEmailSent = newEmail
    .send({
      template: selectTemplate(templateFlag),
      message: {
        to: templateFlag ? ownerEmail : custEmail,
      },
      locals: {
        firstName,
        lastName,
        phoneNumber,
        isConfirmed,
      },
    })
    .then(() => {
      console.log('Email Sent for', templateFlag ? 'LSU' : name);
      return true;
    })
    .catch((err) => {
      console.log('error caught while sending email', err);
      return false;
    });
  return isEmailSent;
};

module.exports = sendEmail;
