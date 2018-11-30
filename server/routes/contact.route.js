require("dotenv").config();

const express = require("express");
const nodeMailer = require("nodemailer");

const router = express.Router();

const transporter = nodeMailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: process.env.GMAIL_FROM,
    pass: process.env.GMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

router.post("/message", (req, res) => {
  const { name, email, message } = req.body;
  const html = `<h2>${name}</h2> <p>${message}</p>`;

  let Option = {
    from: `PORTFOLIO <${email}`,
    to: process.env.MY_GMAIL,
    subject: "Potential Client",
    html
  };

  transporter.sendMail(Option, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400).send("Bad request");
      return;
    } else {
      res.status(200).send("OK");
      return;
    }
  });
});

module.exports = router;
