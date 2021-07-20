const sgMail = require('@sendgrid/mail')
const emailKey ="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"
sgMail.setApiKey(emailKey)
const emailMSG = {
  to: 'dada7117+1@gmail.com',
  from: 'dada7117@gmail.com',
  subject:`GymBug order confirmation`,
  text:'hello',
  html:'<h1>Hello</h1>'
}

sgMail.send(emailMSG)
.then(response => console.log(response))
.catch(err => console.log(err))