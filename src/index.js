const express = require('express');
const bodyparser = require('body-parser');


const User = require('./app/model/User');

const cors = require('cors')
const ejs = require('ejs');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/app/'))
app.set('views', __dirname + '/app/');
app.engine('html', ejs.renderFile);




app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Methods", "*");
    app.use(cors())
    next()
})

app.get('/teste', async function (req, res) {
    const user = await User.find({ "name": /oi/ });
    res.send(user)
})

require('./app/controllers/index')(app);

app.listen(3000, function () {
    console.log('CORS-ENABLE web service listening on port 3000')
});