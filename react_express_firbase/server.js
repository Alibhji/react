const { mongodb_connection, mongodb_run } = require("./src/backend/mongodb_helper");
const { mongoose_run } = require("./src/backend/mongoose_handeler");
const { routes } = require("./src/backend/routes");
require("dotenv").config();
const mongo_string = process.env.MONGODB_URI;
mongodb_run(mongo_string, routes)
// mongoose_run(mongo_string, routes);