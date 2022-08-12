const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

exports.routes = (auth_collection, getAllUserasync) => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(corsOptions));

  app.get("/", (req, res) => {
    auth_collection.find({}).toArray((err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
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

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};
