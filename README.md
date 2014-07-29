koa-couchbase
=============

Koa middleware that gets you a Couchbase client.

This extends Koa by adding `this.couchbase`.

Usage
-----

```javascript
var koa = require('koa');
var couchbase = require('koa-couchbase');

var app = koa();

var options = {
  dsn: 'localhost',
  bucket: 'default',
  username: 'my-username',
  password: 'my-password'
};

app.use(couchbase(options));

app.use(function *(next) {
    // Here we have access to this.couchbase which is a connection to your bucket.
    var result = yield this.couchbase.get('document-id');
    this.body = result.value;
})

app.listen(3000);
```

