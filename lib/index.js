const { terminator } = require('lambda-terminator');

exports.terminator = () => next => terminator;
