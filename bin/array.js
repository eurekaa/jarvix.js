(function() {
  var jarvix_memory, jarvix_module;

  jarvix_memory = typeof window !== 'undefined' ? window['jarvix_memory'] : global['jarvix_memory'];

  jarvix_module = jarvix_memory.module;

  jarvix_module.define(['underscore'], function(_) {
    return {
      intersection: _.intersection,
      index_of: _.indexOf,
      contains: function(array, value) {
        return _.indexOf(array, value) !== -1;
      }
    };
  });

}).call(this);
