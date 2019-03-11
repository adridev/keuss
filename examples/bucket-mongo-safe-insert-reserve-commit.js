var MQ = require('../backends/bucket-mongo-safe');

var async = require('async');

var factory_opts = {
  url: 'mongodb://localhost/qeus',
  reserve_delay: 7
};

// initialize factory 
MQ(factory_opts, (err, factory) => {
  if (err) {
    return console.error(err);
  }

  // factory ready, create one queue
  var q_opts = {};
  var q = factory.queue('test_queue_rcr', q_opts);

  var id = null;

  async.series([
    (cb) => q.push({ elem: 1, pl: 'twetrwte' }, cb),
    (cb) => q.push({ elem: 2, pl: 'twetrwte' }, cb),
    (cb) => q.push({ elem: 3, pl: 'twetrwte' }, cb),
    (cb) => setTimeout (cb, 1000),
    (cb) => q.stats ((err, res) => {
        console.log('queue stats now: %j', res);
        cb(err);
    }),
   (cb) => q.pop ('c1', {reserve: true}, (err, res) => {
        id = res._id;
        console.log('reserved element %j, id is %s', res, id)
        cb(err);
    }),
    (cb) => q.stats ((err, res) => {
        console.log('queue stats now: %j', res);
        cb(err);
    }),
    (cb) => q.ko(id, (err, res) => {
      console.log('rolled back element %s -> %s', id, res);
      cb();
    }),
    (cb) => q.stats ((err, res) => {
        console.log('queue stats now: %j', res);
        cb(err);
    }),

//    (cb) => setTimeout (cb, 7000),

    (cb) => q.pop ('c1', {reserve: true}, (err, res) => {
      id = res._id;
      console.log('reserved element %j, id is %s', res, id)
      cb(err);
    }),
    (cb) => q.stats ((err, res) => {
      console.log('queue stats now: %j', res);
      cb(err);
    }),
    (cb) => q.ok (id, (err, res) => {
      console.log('commited element %s -> %s', id, res);
      cb();
    }),
    (cb) => q.stats ((err, res) => {
      console.log('queue stats now: %j', res);
      cb(err);
    }),

    (cb) => setTimeout (cb, 1000),

    (cb) => q.drain (cb),
    (cb) => {factory.close(); cb ();},
  ], (err) => {
    // all done
    if (err) console.log ('error: ', err)
  });
});