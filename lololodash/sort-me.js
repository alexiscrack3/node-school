var _ = require('lodash');

var worker = function(collection) {
    var results = _.sortBy(collection, function(item) {
        return item.quantity;
    });
    return results.reverse();
};

// var worker = function(collection) {
//      return _.sortBy(collection, function(item) {
//          return -item.quantity;
//      });
//  };

// var worker = function(collection) {
//     return _.sortBy(collection, 'quantity').reverse();
// };

module.exports = worker;
