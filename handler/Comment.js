const Comment = require('../models/Comment');

const PostComment = (req, res) => {
    const { comment } = req.body;
    console.log(comment);
    const postComment = new Comment({
        comment,
    })
    postComment.save()
        .then(() => res.status(201).json({ message: 'commentaire posté' }))

}

const GetComment = (req, res) => {
    console.log(res);
    Comment.find()
    .then(( comments ) => res.status(200).json(comments));
}

module.exports.PostComment = PostComment;
module.exports.GetComment = GetComment;