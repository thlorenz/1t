'use strict';

var g = typeof window !== 'undefined' ? window : global;

var go = module.exports = function (name, fn) {
  var existing = g[name];
  if (existing) return fn(existing);

  g[name] = fn();
};
