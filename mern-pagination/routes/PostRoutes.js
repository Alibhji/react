const express = require('express');
const router = express.Router();

const { getAllposts , deletePost } = require('../controllers/PostControllers');

router.route('/').get(getAllposts);
router.route('/delete').delete(deletePost);

module.exports = router;