(function() {
  var jarvix_memory, jarvix_module, jarvix_path;

  jarvix_memory = typeof window !== 'undefined' ? window['jarvix_memory'] : global['jarvix_memory'];

  jarvix_path = jarvix_memory.path;

  jarvix_module = jarvix_memory.module;

  jarvix_module.define(['chai', 'jstest', 'underscore'], function(chai, test, _) {
    return {
      define: function(name, dependencies, callback) {
        var root_name, self;
        self = this;
        if (_.isFunction(dependencies)) {
          callback = dependencies;
          root_name = name.split('.')[0];
          return JS.Test.describe(root_name, function() {
            this.before(function() {
              return this.expect = self.expect;
            });
            return this.describe(name, callback);
          });
        } else {
          return jarvix_module.define(dependencies, callback);
        }
      },
      describe: function(name, callback) {
        return JS.Test.describe(name, callback);
      },
      should: chai.should(),
      expect: chai.expect,
      run: function(tests, callback) {
        return jarvix_module.require(tests, function() {
          JS.cache = false;
          JS.Test.ASSERTION_ERRORS.push(chai.AssertionError);
          return JS.Test.autorun(function(runner) {
            if (typeof window !== 'undefined') {
              runner.setReporter(new JS.Test.Reporters.Browser());
            } else {
              runner.setReporter(new JS.Test.Reporters.Spec());
              runner.addReporter(JS.Test.Reporters.ExitStatus());
              runner.addReporter(JS.Test.Reporters.Error());
            }
            if (callback) {
              return callback(null);
            }
          });
        });
      }
    };
  });

}).call(this);
