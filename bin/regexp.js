(function() {
  var jarvix_module;

  jarvix_module = typeof window !== 'undefined' ? window['jarvix_memory'].module : global['jarvix_memory'].module;

  jarvix_module.define(['underscore'], function(_) {
    return {
      test: function(string, regexp) {
        var match;
        if (_.isString(regexp) && !_.isUndefined(this[regexp])) {
          regexp = this[regexp];
        }
        regexp = new RegExp(regexp);
        match = string.match(regexp);
        return match && match.length > 0;
      },
      email: '^([a-zA-Z0-9]+([\.+_-][a-zA-Z0-9]+)*)@(([a-zA-Z0-9]+((\.|[-]{1,2})[a-zA-Z0-9]+)*)\.[a-zA-Z]{2,6})$'
    };
  });

}).call(this);
