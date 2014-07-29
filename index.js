
var couchbase = require('co-couchbase');

module.exports = couch;


function couch (opts) {
  opts = opts || {};
  if (!opts.bucket) {
    opts.bucket = 'default';
  }
  
  var cluster = new couchbase.Cluster(opts.dsn, opts.username, opts.password);
  var db = cluster.openBucket(opts.bucket);
  return function *(next) {
    this.couchbase = db;
    yield next;
  };
}

