'use strict';

var singleton = require('../../');

// #ifndef
singleton('__FOO__', module, function () {
// #define __FOO__

var path = require('path');

exports.hello = 'world';  
exports.filename = path.basename(__filename);

// #endif
})
