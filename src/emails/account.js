const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: 'andrew@mead.io',
    from: 'andrew@mead.io',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.',
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'dxarafat@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon`,
  });
};

module.exports = {
  sendCancelationEmail,
  sendWelcomeEmail,
};
