export default async function ContactHandler(req, res) {
  // eslint-disable-next-line global-require
  require('dotenv').config();

  const { email, name, message } = req.body;

  // eslint-disable-next-line global-require
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.com.tr',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailData = {
    from: `"Hizirtransfer" ${process.env.EMAIL}`,
    to: process.env.EMAIL,
    subject: `New message from ${email}`,
    text: `
    Hey, You got a new message!

    Details:
    Name: ${name}
    Email: ${email}

    ${message}

    This email was sent from https://hizirtransfer.com
    `,
    html: `
    <h2>Hey, You got a new message!</h2>
    <p style="font-size: 16px;"><b>Name: </b>${name}</p>
    <p style="font-size: 16px;"><b>Email: </b>${email}</p>
    <p style="font-size: 16px;">${message}</p>
    <p style="color: #888888">
      This email was sent from
      <a href="https://hizirtransfer.com">https://hizirtransfer.com</a>
    </p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailData);
    console.log(info);
  } catch (err) {
    console.log(err);
  }

  return res.send(mailData);
}
