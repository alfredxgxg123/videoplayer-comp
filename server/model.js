const db = require('../db/index.js');

module.exports = {
  avatar: {
    get: () => db.Avatar.find().limit(1),
  },
};

// .skip(Math.random() * 100)
