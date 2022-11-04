const Comment = require('../models/Comment');

const PostComment = (req, res) => {
    const { comment } = req.body;
    const postComment = new Comment({
        comment,
    })
    postComment.save()
        .then(() => res.status(201).json({ message: 'commentaire posté' }))

}

const GetComment = (req, res) => {
    Comment.find()
        .then((commentaire) => res.status(200).json(commentaire))
}

module.exports.PostComment = PostComment;
module.exports.GetComment = GetComment;