// const app = require("express")();
// const cors = require("cors")
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
    to: "amybachorz@gmail.com",
    from: "tjbachorz@gmail.com",
    subject: "Message from tjbachorz.live",
    text: "test email!",
    html: "<h1>Hi Beeb!! Love you!  I'm testing a new automated mailer!</h1>"
};

sgMail
    .send(message)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
    console.error(error)
    })

app.post("/mail/send", (request, response) => {
    request.send()
})
