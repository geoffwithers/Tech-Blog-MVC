const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
// http://localhost:3001/api/users
router.use('/users', userRoutes);
// http://localhost:3001/api/projects
router.use('/posts', postRoutes);

router.use('/comments', commentRoutes);

module.exports = router;
