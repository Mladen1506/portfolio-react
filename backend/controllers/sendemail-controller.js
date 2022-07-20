const sgMail = require('@sendgrid/mail');
require('dotenv').config();


const sendEmailController = async (req, res, next) => {
  console.log('sendEmailController');
  console.log('req.body', req.body);
  // console.log('req.body.youremail', req.body.youremail);
  // console.log('req.body.text', req.body.text);

  // res.send('send email router GET(works but use POST method to send an email at /sendemail/contact');

  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  // javascript
  // const nesto = process.env.SENDGRID_API_KEY;
  console.log(process.env);
  console.log(process.env.SENDGRID_API_KEY);
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'makivic.mladen1203@gmail.com', // Change to your recipient
    from: 'makivic.mladen1989@gmail.com', // Change to your verified sender
    subject: 'Mladen Portfolio: Sending with SendGrid is Fun' + req.body.youremail,
    text: req.body.text,
    html: '<div>' + req.body.text + '</div>',
  };
  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })

  try {
    await sgMail.send(msg);
    res.send('Email sent :)');
  } catch (err) {
    console.log('catch error', err);
    res.send('Error: Unable to send email');
  }


};

module.exports = sendEmailController;