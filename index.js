const app = require("express")();
const cors = require("cors")
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
    to: "tjbachorz@gmail.com",
    from: "tjbachorz@gmail.com",
    subject: "Message from tjbachorz.live",
    text: "test text email!",
    
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
    console.log(response)
})
