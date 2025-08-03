const express = require('express');
const router = express.Router();
// const { User } = require('../models');
const User=require('../models/users')

// CREATE a user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all users
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// READ one user
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
});

// UPDATE user
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else res.status(404).json({ message: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  const deleted = await User.destroy({ where: { id: req.params.id } });
  if (deleted) res.json({ message: 'User deleted' });
  else res.status(404).json({ message: 'User not found' });
});

module.exports = router;
