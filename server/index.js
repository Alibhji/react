//This is a backend servers based on the express
const express = require("express");
//body parser is added to pars body parameters
const bodyParser = require("body-parser");
//Rendering the HTML by Embedeb javascript [EJS]
// npm install ejs --save
// it is needed to tell Express we are using EJS as the Template Engine.
// It should be placed before app.use, app.get, app.post
// this proceess is called rendering HTML

const app = express();
//Connect to MongoDB
const MongoClient = require("mongodb").MongoClient;
// Hide the environment variable
require("dotenv").config();
const mongo_string = process.env.MONGODB_URI;

MongoClient.connect(mongo_string, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB");
    const db = client.db("usci-appointment-db");
    const auth_collection = db.collection("authentication");
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(__dirname + "/public"));

    app.get("/", (req, res) => {
      //   res.send("This is the server script");
      auth_collection.find({}).toArray((err, result) => {
        if (err) {
          console.log(err);
        } else {
          // res.send(result);
          res.render("index.ejs", { result: result });
        }
      });

      // res.sendFile(__dirname + "/public/auth.html");
    });

    app.post("/auth", (req, res) => {
      console.log(req.body);
      auth_collection.insertOne(req.body).then((result) => {
        console.log(result);
        // res.send("Success");
        res.redirect("/");
      });

      // res.sendFile(__dirname + "/public/auth.html");
    });

    app.listen(3200, () => {
      console.log("Server is listening on port 3200");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });
