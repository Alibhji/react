const Post = require('../models/Posts');
exports.getAllposts = async (req, res) => {
    try {

        let query = Post.find();

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const skip = (page - 1) * limit;
        const total = await Post.countDocuments();
        const pages = Math.ceil(total / limit);
        query = query.skip(skip).limit(limit);

        const results = await query;

        if (page > pages) {
            return res.status(404).json({
                success: false,
                error: 'No page found'
            })
        }

        res.status(200).json({
            success: true,
            count: results.length,
            pagination: {
                total,
                pages,
                page,
                limit
            },
            data: results
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })

    }

}