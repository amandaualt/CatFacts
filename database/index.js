const moongoose = require('mongoose');

moongoose.connect('mongodb://localhost:27017/animalFacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
moongoose.Promise = global.Promise;

module.exports = moongoose;