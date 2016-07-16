var _ = require('lodash');

var worker = function(collection) {
    return _.chain(collection)
            .groupBy('username')
            .map(function(comments, key) { return { 'username': key, comment_count: _.size(comments) } })
            .sortBy('comment_count')
            .reverse()
            .value();
};

module.exports = worker;
