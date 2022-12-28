const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log('MongoDB was connected 👍')

    } catch (error) {

        console.log(error)
        console.log('MongoDB was not connected 👎')
        process.exit(1)
    }
}

module.exports = connectDB