require('dotenv').config({ path: './config.env' });
const express = require('express');
// var cors = require('cors')
// const { createProxyMiddleware } = require('http-proxy-middleware');

const connectDB = require('./config/db');
const postRoutes = require('./routes/PostRoutes');

connectDB();

const app = express()
const PORT = process.env.PORT || 5000;
// app.use(cors())
app.use(express.json());
// app.use('/api/v1/posts', postRoutes , createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/api/v1/posts', postRoutes);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
