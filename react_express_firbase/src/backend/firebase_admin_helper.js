var admin = require("firebase-admin");
var serviceAccount = require("./react-aws-test-firebase-adminsdk-x9ctb-e27860299e.json");

var {
  getAuth
} = require("firebase-admin/auth");

defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

auth = getAuth(defaultApp);


