const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")

router.use(express.static(path.join(__dirname, "../public")))
router.use(bodyParser.urlencoded({ extended: true }))

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/portfolio", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/portfolio.html"))
})

router.get("/contact-me", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/contact.html"))
})

router.post("/contact", (req, res) => {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;

      let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.GMAIL_PASS,
            },
      });

      const msg = {
            from: `"Portfolio Contact Form" <ithaca.deployment@gmail.com>`,
            to: "alfred.adeoye@cantab.net",
            subject: `Portfolio Contact Form: ${name}`,
            text: `${name}, ${email}, has sent the following message:
            ${message}.`,
      };

      const info = transporter.sendMail(msg, (error, response) => {
            if (error) {
                  res.sendFile(path.join(__dirname, "/../public/contact-failure.html"));
            } else {
                  res.sendFile(path.join(__dirname, "/../public/contact-success.html"));
            }
      });  
})

module.exports = router;
