var _ = require('lodash');

var worker = function(collection) {
    collection = _.sortBy(collection, 'income');

    var sum = _.reduce(collection, function(val, obj) {
                   return val += obj.income;
               }, 0);
               
    var average = sum / _.size(collection);

    var underperform = _.filter(collection, function(item) {
        return item.income <= average;
    });

    var overperform = _.filter(collection, function(item) {
        return item.income > average;
    });

    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    };
};

module.exports = worker;
