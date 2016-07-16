var _ = require('lodash');

var worker = function(items) {
    return _.forEach(items, function(item) {
        if (item.population > 1) {
            item.size = 'big';
        } else if (item.population > 0.5) {
            item.size = 'med';
        } else {
            item.size = 'small';
        }
        return item;
    });
};

module.exports = worker;
