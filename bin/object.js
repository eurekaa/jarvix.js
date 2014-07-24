(function() {
  var jarvix_module;

  jarvix_module = typeof window !== 'undefined' ? window['jarvix_memory'].module : global['jarvix_memory'].module;

  jarvix_module.define(['underscore'], function(_) {
    return {
      create: Object.create,
      get_properties: Object.getOwnProperties,
      freeze: function(object) {
        return Object.freeze(object);
      },
      /**
      @summary Retrieve all the names of the object's properties.  
      @param {object} object - object to be analized.   
      @return {array} an array with all property names founded.   
      @example .keys({one: 1, two: 2, three: 3}); => ["one", "two", "three"]
      */

      keys: function(object) {
        return _.keys(object);
      },
      has: function(object, key) {
        return _.has(object, key);
      },
      extend: _.extend
    };
  });

}).call(this);
