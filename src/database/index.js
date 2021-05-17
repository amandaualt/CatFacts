const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://animalfacts:lVszs5FhJEOXKj86@cluster0.mcgco.mongodb.net/animalfacts?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;