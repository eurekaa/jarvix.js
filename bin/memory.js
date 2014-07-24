(function() {
  var jarvix_module;

  jarvix_module = typeof window !== 'undefined' ? window['jarvix_memory'].module : global['jarvix_memory'].module;

  jarvix_module.define([], function() {
    return {
      data: {},
      set: function(name, object) {
        return this.data[name] = object;
      },
      get: function(name) {
        return this.data[name];
      }
    };
  });

}).call(this);
