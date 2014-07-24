(function() {
  var jarvix_module;

  jarvix_module = typeof window !== 'undefined' ? window['jarvix_memory'].module : global['jarvix_memory'].module;

  jarvix_module.define([], function() {
    return {
      /**
         @summary reapeat a string several times.
         @param {string} string - string to be repeated.
         @param {number} [times=1] - number of times the string has to be repeated.
         @returns {string} string - the string repeated.
         @example
         .repeat('a', 5); => 'aaaaa'
      *
      */

      repeat: function(string, times) {
        if (!times || times < 1) {
          times = 1;
        }
        return new Array(times + 1).join(string);
      },
      starts_with: function(string, token) {
        return new String(string).slice(0, token.length) === token;
      },
      ends_with: function(string, token) {
        return new String(string).slice(-token.length) === token;
      },
      contains: function(string, token) {
        return string.indexOf(token) !== -1;
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
