const nodemailer = require("nodemailer");
const { IP } = process.env;
const baseUrl = `http://${IP}:1337/api`;

async function main(code, email) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "dondevaeljamon@gmail.com", // generated ethereal user
      pass: "dondevaeljamon2020", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"VeganLife" <dondevaeljamon@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Validate your account", // Subject line
    text: "Validate your account", // plain text body
    html: `<h1><span style="font-family: Arial, Helvetica, sans-serif;">Validate your email to finish your registration process</span></h1><a href=${baseUrl}/auth/verification/verify-account/${code}>Validate</a>`,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = main;
