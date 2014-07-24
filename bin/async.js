(function() {
  var jarvix_memory, jarvix_module;

  jarvix_memory = typeof window !== 'undefined' ? window['jarvix_memory'] : global['jarvix_memory'];

  jarvix_module = jarvix_memory.module;

  jarvix_module.define(['async'], function(a) {
    return {
      "if": function(condition, action, callback) {
        if (condition) {
          return action.then(callback);
        } else {
          return action["else"](callback);
        }
      },
      each: a.each,
      parallel: a.parallel,
      series: a.series,
      map: a.map
    };
  });

}).call(this);
