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
  // app.use(bodyParser.urlencoded({ extended: true }));
  // use this in Ui:
  //   const response = await axios.post("http://localhost:3000/new_user" ,{"email": "s"},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

  app.use(bodyParser.json());
  // for this body parser use this in Ui:
  // //   const response = await axios.post("http://localhost:3000/new_user" ,{"email": "s"},{headers: {'Content-Type': 'application/json'}});

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

  app.post("/new_user", (req, res) => {
    const newUser = {
      phone: req.body.phone,
      email: req.body.email,
    };
    auth_collection.findOne({ email: newUser.email }).then((result) => {
      if (result) {
        res.send("User already exists");
      } else {
        auth_collection.insertOne(newUser).then((result) => {
          console.log(result);
          res.send("Success");
        });
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};
