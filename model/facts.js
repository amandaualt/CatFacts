const MongoClient = require('mongodb').MongoClient;

module.exports = class Connection {
    static async connect() {
        const conn = await MongoClient.connect('mongodb://localhost:27017/animalFacts', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = conn.db();
        return db;
    }
}