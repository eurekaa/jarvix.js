(function() {
  jx.library.define('sample', {
    version: '0.0.1',
    config: 'jarvix://test/samples/config',
    base_path: 'scripts/libs/jarvix/test/samples/'
  }, ['jarvix://date', 'jarvix://object'], function(date, object) {
    return {
      date: date,
      object: object
    };
  });

}).call(this);
