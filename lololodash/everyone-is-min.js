var _ = require('lodash');

var worker = function(towns) {
    var result = {
        'hot': [],
        'warm': []
    };


    function isHot(temperature) {
        return temperature > 19;
    }

    _.forEach(towns, function(temperatures, town) {
        if (_.every(temperatures, isHot)) {
            result.hot.push(town);
        } else if (_.some(temperatures, isHot)) {
            result.warm.push(town);
        }
    });
    return result;
};

module.exports = worker;
