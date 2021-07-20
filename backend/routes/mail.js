var express = require("express");
var router = express.Router();
const sgMail = require("@sendgrid/mail");
const emailKey =
  "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";
sgMail.setApiKey(emailKey);


/* GET home page. */
router.post("/", function (req, res, next) {
  // const items = JSON.parse(req.header.data);
  // const נריה = cart.reduce((sum, item)=> { return sum+item.price}, 0)
  console.log(req.body);
  console.log(req.data);
  console.log(req);

    // const orderProducts = cart.map((product, index) => {
    //   return `<tr style="background-color: #9e9e9e;">
    //             <td>${index + 1}</td>
    //             <td style="border: 1px solid #dddddd; padding: 8px;">${
    //               product.name
    //             }</td>
    //             <td style="border: 1px solid #dddddd; padding: 8px;">${
    //               product.size
    //             } ס"מ</td>
    //             <td style="border: 1px solid #dddddd; padding: 8px;">${
    //               product.price
    //             } שח</td>
    //         </tr>`;
    // });

    const emailMSG = {
      to: "workDavidSamoilov@gmail.com",
      from: "dada7117@gmail.com",
      subject: `GymBug order confirmation`,
      text: "hello",
      html: `<h1>Hello</h1> <h2>hello</h2>`,
      
    //   `<h1 style="width: 60%;">שלום ${user.firstName} ${user.lastName}</h1>
    //   <br>
    //   <table style="border-collapse: collapse; width: 60%;">
    //     <tr>
    //       <th style ="border: 1px solid #dddddd; padding: 8px;">מספר</th>
    //       <th style ="border: 1px solid #dddddd; padding: 8px;">שם</th>
    //       <th style ="border: 1px solid #dddddd; padding: 8px;">גודל</th>
    //       <th style ="border: 1px solid #dddddd; padding: 8px;">מחיר</th>
    //     </tr>
    //     ${[orderProducts]}
    //   </table>
    //   <br>
    //   <h3 style="width: 40%;">מחיר כולל ${totalPrice} שח</h3>`,
    };
    sgMail
      .send(emailMSG)
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
});

module.exports = router;
