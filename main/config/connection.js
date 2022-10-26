const { connect, connection } = require('mongoose');

connect('mongodb://localhost/friendsZone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;