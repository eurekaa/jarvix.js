(function() {
  var jarvix_module;

  jarvix_module = typeof window !== 'undefined' ? window['jarvix_memory'].module : global['jarvix_memory'].module;

  jarvix_module.define(['moment', 'underscore'], function(moment, _) {
    return {
      iso_pattern: 'YYYY-MM-DDTHH:mm:ssZ',
      default_pattern: 'DD-MM-YYYY',
      is_valid: function(date) {
        if (date === void 0 || date === null || date === '') {
          return false;
        }
        if (_.isString(date)) {
          date = this.parse(date);
        }
        date = new moment(date);
        return date.isValid();
      },
      parse: function(string, pattern) {
        pattern = _.isString(pattern) ? pattern : this.default_pattern;
        return new moment(string, pattern).toDate();
      },
      format: function(date, pattern) {
        pattern = _.isUndefined(pattern) ? this.default_pattern : pattern;
        date = new moment(date);
        return date.format(pattern);
      },
      from_iso: function(string) {
        return this.parse(string, this.iso_pattern);
      },
      to_iso: function(date) {
        if (_.isString(date)) {
          date = this.parse(date);
        }
        return this.format(date, this.iso_pattern);
      }
    };
  });

}).call(this);
