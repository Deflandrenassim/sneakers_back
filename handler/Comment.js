const Comment = require('../models/Comment');

const PostComment = (req, res) => {
    const { comment } = req.body;
    const postComment = new Comment({
        comment,
    })
    postComment.save()
        .then(() => res.status(201).json({ message: 'commentaire posté' }))

}

const GetComments = (req, res) => {
    Comment.findOne({ comment: req.params.comment })
        .then((comments) => res.status(200).json(comments))
    console.log(comments);

}

module.exports.PostComment = PostComment;
module.exports.GetComments = GetComments;