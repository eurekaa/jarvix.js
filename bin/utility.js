/**
   @description
   A set of utilities.   
   
   @module jarvix/utility
   @requires underscore
*/


(function() {
  var jarvix_module;

  jarvix_module = typeof window !== 'undefined' ? window['jarvix_memory'].module : global['jarvix_memory'].module;

  jarvix_module.define(['underscore'], function(_) {
    return {
      is_object: function(object) {
        return _.isObject(object);
      },
      is_equal: function(object, other) {
        return _.isEqual(object, other);
      },
      is_empty: function(object) {
        return _.isEmpty(object);
      },
      is_array: function(object) {
        return _.isArray(object);
      },
      is_function: function(object) {
        return _.isFunction(object);
      },
      is_arguments: function(object) {
        return _.isArguments(object);
      },
      is_string: function(object) {
        return _.isString(object);
      },
      is_number: function(object) {
        return _.isNumber(object);
      },
      is_nan: function(object) {
        return _.isNaN(object);
      },
      is_finite: function(object) {
        return _.isFinite(object);
      },
      is_boolean: function(object) {
        return _.isBoolean(object);
      },
      is_regexp: function(object) {
        return _.isRegExp(object);
      },
      is_null: function(object) {
        return _.isNull(object);
      },
      is_undefined: function(object) {
        return _.isUndefined(object);
      },
      is_defined: function(object) {
        return !_.isUndefined(object);
      },
      is_element: function(object) {
        return _.isElement(object);
      },
      is_browser: function() {
        return typeof window !== 'undefined';
      },
      is_nodejs: function() {
        return !this.is_browser();
      },
      to_upper: function(string) {
        return string.toUpperCase();
      },
      to_lower: function(string) {
        return string.toLowerCase();
      },
      to_capitalized: function(string) {
        return this.to_upper(string.charAt(0)) + this.to_lower(string.slice(1));
      }
    };
  });

}).call(this);
