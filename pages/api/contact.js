export default async function ContactHandler(req, res) {
  // eslint-disable-next-line global-require
  require('dotenv').config();

  const { email, location, time, limoClass, passengers } = req.body;

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
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New Limousine order from ${email}`,
    text: `
    Email: ${email}
    Location: ${location}
    Time: ${time}
    Limo Class: ${limoClass}
    passengers: ${passengers}
    `,
    html: `
    <p style="font-size: 22px;"><b>Email</b>: ${email}</p>
    <p style="font-size: 22px;"><b>Location</b>: ${location}</p>
    <p style="font-size: 22px;"><b>Time</b>: ${time}</p>
    <p style="font-size: 22px;"><b>Limo Class</b>: ${limoClass}</p>
    <p style="font-size: 22px;"><b>Passengers</b>: ${passengers}</p>
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
