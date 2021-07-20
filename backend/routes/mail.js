var express = require("express");
var router = express.Router();
const sgMail = require("@sendgrid/mail");
const emailKey =
  "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";
sgMail.setApiKey(emailKey);

/* GET home page. */
router.post("/", function (req, res, next) {
//   const items = JSON.parse(req);
//   console.log(items);
  const emailMSG = {
    to: "workDavidSamoilov@gmail.com",
    from: "dada7117@gmail.com",
    subject: `GymBug order confirmation`,
    text: "hello",
    html: `<h1>items</h1>`,
  };
  console.log("cookies", req.cookies);

  sgMail
    .send(emailMSG)
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
});

module.exports = router;
