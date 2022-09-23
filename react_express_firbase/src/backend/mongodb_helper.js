const MongoClient = require("mongodb").MongoClient;

exports.mongodb_run = (mongo_string ,callback) => {
    console.log(mongo_string);

  MongoClient.connect(mongo_string, { useUnifiedTopology: true })
    .then((client) => {
      console.log("Connected to MongoDB");
      const db = client.db("usci-appointment-db");
      const auth_collection = db.collection("authentication");
      callback(auth_collection)
    })
    .catch((err) => {
      console.log(err);
    });
};
