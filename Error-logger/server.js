const express = require('express');
const bodyParser = require('body-parser');
const logMiddleware = require('./middleware/logger');
const logRoutes = require('./routes/log');
require('dotenv').config();

const app = express(); 
const Port = 3000;

app.use(bodyParser.json());      
app.use(logMiddleware);         
app.use('/', logRoutes);        

app.listen(Port, () => {
  console.log(`Server running at ${Port}`);
});
