module.exports = function() {
  var faker = require('faker');
  var _ = require('lodash');
  return {
    contacts: _.times(100, function(n) {
      return {
        id: n,
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        avatar: faker.internet.avatar(),
      };
    }),
  };
};
