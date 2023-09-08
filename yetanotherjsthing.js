// Importing the required modules
const nodemailer = require('nodemailer');
const readline = require('readline');

// Creating a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to send the email
function sendEmail(name, email, message) {
  // Configuring the transporter
  const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
      user: 'your_email_address',
      pass: 'your_email_password'
    }
  });

  // Email options
  const mailOptions = {
    from: 'your_email_address',
    to: 'recipient_email_address',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Sending the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred while sending the email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}

// Getting user input
rl.question('Enter your name: ', (name) => {
  rl.question('Enter your email address: ', (email) => {
    rl.question('Enter your message: ', (message) => {
      // Sending the email
      sendEmail(name, email, message);

      // Closing the readline interface
      rl.close();
    });
  });
});
