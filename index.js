const app = require("express")();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const cors = require("cors")
app.use(cors())

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/", (request, response) => {
    const email = {
        to: "tjbachorz@gmail.com",
        from: request.body.from,
        subject: `${request.body.full_name} -- ${request.body.subject}`,
        text: request.body.message
    }
    sgMail.send(email)
        .then(response => response.json())
        .catch((error) => {
            response.json(error)
        })
})

const PORT = process.env.PORT || 4000
app.listen(PORT)