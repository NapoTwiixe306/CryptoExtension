const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');

app.use('/', postsRoutes);

app.listen(5500, () => console.log("Server Started: 5500"))