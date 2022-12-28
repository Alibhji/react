require('dotenv').config({ path: './config.env' });
const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/PostRoutes');

connectDB();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/posts', postRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
