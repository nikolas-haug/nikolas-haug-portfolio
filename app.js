var express = require("express");
var bodyParser = require("body-parser");

var dotenv = require('dotenv');
dotenv.config();

var sendEmail = require('send-email');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));

//sets up the express app to serve static files
app.use(express.static("public"));

app.get("/", function(req, res) {
    let payload = {
        "to": "papiomagic@gmail.com",
        "subject": "sending emails using send-email",
        "text": "hello world!",
        "html": "hello <b>world</b>!",
        "from": "Myself <myself@domain.com>"
    }
    sendEmail(payload)
        .then((res) => {
            console.log(res);
        });
    res.send("connected");
});

 









app.listen(PORT, function() {
    console.log("listening on port " + PORT);
});