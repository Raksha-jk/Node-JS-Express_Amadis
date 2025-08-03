const express = require('express');
const router = express.Router();
// const { Post, User } = require('../models');
const Post=require('../models/post')
const User=require('../models/users')

// CREATE a post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all posts (with User info)
router.get('/', async (req, res) => {
  const posts = await Post.findAll({ include: User });
  res.json(posts);
});

//READ one post (with User info)
router.get('/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id, { include: User });
  if (post) res.json(post);
  else res.status(404).json({ message: 'Post not found' });
});

// UPDATE post
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Post.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPost = await Post.findByPk(req.params.id, { include: User });
      res.json(updatedPost);
    } else res.status(404).json({ message: 'Post not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE post
router.delete('/:id', async (req, res) => {
  const deleted = await Post.destroy({ where: { id: req.params.id } });
  if (deleted) res.json({ message: 'Post deleted' });
  else res.status(404).json({ message: 'Post not found' });
});

module.exports = router;
