const express = require('express');
const bodyParser = require('body-parser');

const restRoutes = require('./app/routes/rest');
const app = express();

const { responseHandler } = require('./app/helper/application');

// Log requests to the console.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./app/models");

// Index route
app.get('/', (req, res) => {
  responseHandler(req, res, 'Welcome to graphql nodejs integration');
});

app.use('/rest', restRoutes);

// Error handling for routes
app.use((req, res) => {
  responseHandler(req, res, null, 'Route not found');
});

// Starting Server
db.sequelize.sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  }, (err) => {
    console.error('Error', err);
  });
