var _ = require('lodash');

var worker = function(input) {
    var template = 'Hello <%= name %> (logins: <%= login.length %>)';
    return  _.template(template)(input);
};

module.exports = worker;
