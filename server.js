const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('<iframe src="https://giphy.com/embed/11RwocOdukxqN2" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>');
});

app.listen(PORT, function () {
    console.log('Server is running, port ' + PORT);
});