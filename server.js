const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const restRoutes = require('./app/routes/rest');
const graphqlRoutes = require('./app/routes/graphql');

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
app.use('/graphql', graphqlRoutes);

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
