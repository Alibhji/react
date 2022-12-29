const express = require('express');
const router = express.Router();

const { getAllposts } = require('../controllers/PostControllers');

router.route('/').get(getAllposts);

module.exports = router;