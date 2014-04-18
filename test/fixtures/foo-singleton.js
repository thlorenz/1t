'use strict';

var singleton = require('../../');

singleton('__FOO__', function (existing) {

var path = require('path');

if (existing) { 
  module.exports = existing;
  return;
}

exports.hello = 'world';  
exports.filename = path.basename(__filename);

return module.exports;

})
