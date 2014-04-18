'use strict';
/*jshint asi: true */

var test = require('tap').test

test('\nthere may be multiple instances of non singleton modules ', function (t) {
  var foo_nosingletonPath = require.resolve('./fixtures/foo-nosingleton');

  var foo1 = require(foo_nosingletonPath);
  delete require.cache[foo_nosingletonPath];
  var foo2 = require(foo_nosingletonPath);
  
  foo1.hello = 'welt';

  t.equal(foo1.hello, 'welt', 'changing foo1 mutates foo1')
  t.equal(foo2.hello, 'world', 'changing foo1 does not mutate foo2')
  t.end()
})

test('\nthere may only be one instance of singleton modules ', function (t) {
  var foo_singletonPath = require.resolve('./fixtures/foo-singleton');

  var foo1 = require(foo_singletonPath);
  delete require.cache[foo_singletonPath];
  var foo2 = require(foo_singletonPath);
  
  foo1.hello = 'welt';

  t.equal(foo1.hello, 'welt', 'changing foo1 mutates foo1')
  t.equal(foo2.hello, 'welt', 'changing foo1 mutates foo2')
  t.end()
})
