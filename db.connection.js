const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ApurvSapar21:%401P2u3r4v5@cluster0.fqnr4s5.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;