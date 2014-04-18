'use strict';

var g = typeof window !== 'undefined' ? window : global;

var go = module.exports = 

/**
 * Ensures that only one instance for the wrapped module is instantiated.
 * Works similar to [#ifndef/#define pragmas in C](http://www.cprogramming.com/reference/preprocessor/ifndef.html)
 * 
 * @name singleton
 * @function
 * @param {string} id the unique id under which the module is stored in the global namespace
 * @param {Object} mdl the module variable that is passed to each node/browserify module
 * @param {function} fn function that wraps the code of the module
 */
function singleton(id, mdl, fn) {
  var existing = g[id];

  if (existing) {
    mdl.exports = existing;
  } else {
    fn();
    g[id] = mdl.exports;
  }
}
