const express = require('express');
const sequelize = require('./config/db');
// const { User, Post } = require('./models');
const User=require('./models/users')
const Post=require('./models/post')
require('./models')
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Sync DB and start server
sequelize.sync({force:true}).then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
