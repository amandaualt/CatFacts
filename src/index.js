const express = require('express');
const bodyparser = require('body-parser');

const cors = require('cors')

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Methods", "*");
    app.use(cors())
    next()
})

app.get('/teste', function (req, res, next) {
    res.json({ msg: 'This is Cors-Enable for all origins' });
})

require('./app/controllers/index')(app);

app.listen(3000, function () {
    console.log('CORS-ENABLE web service listening on port 3000')
});