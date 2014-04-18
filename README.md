# 1t [![build status](https://secure.travis-ci.org/thlorenz/1t.png)](http://travis-ci.org/thlorenz/1t)

Ensures that only one instance of your module exists either serverside or in the browser.

*1t == [one ton](http://en.wikipedia.org/wiki/Tonne) == a singleton*

```js
var singleton = require('1t');

// #ifndef
singleton('__FOO__', module, function () {
// #define __FOO__

var path = require('path');

exports.hello = 'world';  
exports.filename = path.basename(__filename);

})
// #endif
```

## Installation

    npm install 1t

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="singleton"><span class="type-signature"></span>singleton<span class="signature">(id, mdl, fn)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Ensures that only one instance for the wrapped module is instantiated.
Works similar to <a href="http://www.cprogramming.com/reference/preprocessor/ifndef.html">#ifndef/#define pragmas in C</a></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>id</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>the unique id under which the module is stored in the global namespace</p></td>
</tr>
<tr>
<td class="name"><code>mdl</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>the module variable that is passed to each node/browserify module</p></td>
</tr>
<tr>
<td class="name"><code>fn</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>function that wraps the code of the module</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/1t/blob/master/1t.js">1t.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/1t/blob/master/1t.js#L7">lineno 7</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
