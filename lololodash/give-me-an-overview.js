var _ = require('lodash');

var worker = function(collection) {
    return _.chain(collection)
            .reduce(function(result, item) {
                var match = _.find(result, { article: item.article });
                if (match) {
                    match.total_orders += item.quantity;
                } else {
                    result.push({ article: item.article, total_orders: item.quantity });
                }
                return result;
            }, [])
            .sortBy('total_orders')
            .reverse()
            .value();
};

module.exports = worker;
