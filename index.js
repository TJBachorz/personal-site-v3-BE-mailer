const app = require("express")();
const sgMail = require("@sendgrid/mail");
const cors = require("cors")
const bodyParser = require("body-parser");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors())
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(bodyParser.json());

// sgMail
//     .send(message)
//     .then(() => {
//         console.log('Email sent')
//     })
//     .catch((error) => {
//         console.error(error)
//     })
// /mail/send

app.post("/", (request, response) => {
    console.log(request.body)
    response.json("Success")
    // const email = {
    //     to: "tjbachorz@gmail.com",
    //     from: request.body.from,
    //     subject: `${request.body.full_name} -- ${request.body.subject}`,
    //     text: request.body.message
    // }
    // sgMail.send(email)
    //     .then(response.json("success"))
    //     .catch((error) => {
    //         response.json(error)
    //     })
})

const PORT = process.env.PORT || 4000
app.listen(PORT)
