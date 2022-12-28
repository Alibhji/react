require('dotenv').config({ path: './config.env' });
const fs = require('fs');
const connectDB = require('../config/db');
const Post = require('../models/posts');

connectDB();
const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`), 'utf-8');



const importData = async () => {
    try {
        await Post.create(posts);
        console.log('Data was imported ✌️');
        process.exit();
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }

}

const deleteData = async () => {
    try {
        await Post.deleteMany();
        console.log('Data was deleted 🤯');
        process.exit();

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if (process.argv[2] === '--import' || process.argv[2] === '-i') {
    importData();
}
else if (process.argv[2] === '--delete' || process.argv[2] === '-d') {
    deleteData();
}


