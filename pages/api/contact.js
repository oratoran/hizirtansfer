export default async function ContactHandler(req, res) {
  // eslint-disable-next-line global-require
  require('dotenv').config();

  const { email, location, date, time, limoClass, passengers } = req.body;
  const longDate = new Date(date).toLocaleDateString('en-UK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
    subject: `New Limousine order from ${email}`,
    text: `
    Hey, You got a new order!

    Details:
    Email: ${email}
    Location: ${location}
    Date: ${longDate}
    Time: ${time}
    Limo Class: ${limoClass}
    passengers: ${passengers}

    This email was sent from https://hizirtransfer.com
    `,
    html: `
    <h2>Hey, You got a new order!</h2>
    <p style="font-size: 16px;"><b>Email: </b>${email}</p>
    <p style="font-size: 16px;"><b>Location: </b>${location}</p>
    <p style="font-size: 16px;"><b>Date: </b>${longDate}</p>
    <p style="font-size: 16px;"><b>Time: </b>${time}</p>
    <p style="font-size: 16px;"><b>Limo Class: </b>${limoClass}</p>
    <p style="font-size: 16px;"><b>Passengers: </b>${passengers}</p>
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
