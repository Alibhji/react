const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    date: String,
    time: String,
    service: String,
    description: String,
    status: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
} , { collection: "users" });

const User = mongoose.model("User", userSchema);

const getAllUserasync =  () => {
    const users =  User.find();
    return users;
}



exports.mongoose_run = (mongo_string, callback) => {
  console.log(mongo_string);

  mongoose
    .connect(mongo_string, { useUnifiedTopology: true })
    .then((client) => {
      console.log(`Connected to MongoDB[by Mangoose] ${client.connections[0].name}` );
      callback(User ,getAllUserasync)
    })
    .catch((err) => {
      console.log(err);
    });
};
