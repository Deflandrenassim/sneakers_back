const Comment = require('../models/Comment');

const PostComment = (req, res ) => {
    const { comment } = req.body;
    console.log({comment});

    const postComment = new postComment ({
        comment, 
    })

}

module.exports.PostComment = PostComment;