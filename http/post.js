const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = 3000

app.post('/post', function (req, res) {
    var login = req.body.login;
    var password = req.body.password;
    console.log("User name = " + login + ", password is " + password);
    res.json({ "status": 0, "data": req.body });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})