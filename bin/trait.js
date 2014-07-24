(function() {
  var jarvix_module;

  jarvix_module = typeof window !== 'undefined' ? window['jarvix_memory'].module : global['jarvix_memory'].module;

  jarvix_module.define(['traits'], function(trait) {
    return {
      define: trait,
      create: trait.create,
      compose: trait.compose,
      resolve: trait.resolve,
      override: trait.override,
      required: trait.required,
      is_equal: trait.eqv,
      object: trait.object
    };
  });

}).call(this);
