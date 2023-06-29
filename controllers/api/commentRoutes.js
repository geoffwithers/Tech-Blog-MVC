const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');
// http://localhost:3001/api/projects/
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
// http://localhost:3001/api/projects/1
router.delete('/:id', withAuth, async (req, res) => {
//   try {
    console.log(req.params.id)
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
});

module.exports = router;
