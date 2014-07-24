(function() {
  var jarvix_memory, module;

  jarvix_memory = typeof window !== 'undefined' ? window['jarvix_memory'] : global['jarvix_memory'];

  module = typeof jx !== 'undefined' ? jx.module : jarvix_memory['module'];

  module.define(['async', 'underscore'], function(async, _) {
    return {
      options: {
        libs: {}
      },
      resolve_paths: function(paths, callback) {},
      define: function(options, dependencies, callback) {
        var self;
        self = this;
        if (!options) {
          return callback('options are required.');
        }
        if (!callback) {
          callback = function() {};
        }
        if (!_.has(self.options.libs, options.name)) {
          self.options.libs[options.name] = options;
        }
        module.on_config({
          paths: options.paths || {},
          shim: options.shim || {}
        });
        return module.define(dependencies, callback);
      },
      config: function(library, options, callback) {
        var on_config, self;
        self = this;
        options = options || {};
        on_config = function(library, options, callback) {
          var modules;
          modules = _.keys(library);
          return async.each(modules, function(module, i) {
            if (!_.isUndefined(options[module] && _.isFunction(library[module].on_config))) {
              return library[module].on_config(options[module], i);
            } else {
              return i();
            }
          }, function(err) {
            return callback(err, library);
          });
        };
        return async.parallel([
          function(callback) {
            if (_.isString(library)) {
              return module.require([library], function(library) {
                return callback(null, library);
              });
            } else {
              return callback(null, library);
            }
          }, function(callback) {
            if (_.isString(options)) {
              return module.require([options], function(options) {
                return callback(null, options);
              });
            } else {
              return callback(null, options);
            }
          }
        ], function(err, results) {
          return on_config(results[0], results[1], callback);
        });
      },
      build: function(library, options, callback) {
        var self;
        self = this;
        if (_.isFunction(options)) {
          callback = options;
          options = void 0;
        }
        return async.series({
          library: function(done) {
            if (_.isString(library)) {
              return module.require(library, function(library) {
                return done(null, library);
              });
            } else {
              return done(null, library);
            }
          },
          paths: function(done) {
            var paths;
            paths = [];
            return async.each(_.keys(module.options.paths), function(path, i) {
              paths.push(module.options.paths[path]);
              return i();
            }, function(err) {
              return done(err, paths);
            });
          },
          modules: function(done) {
            var modules;
            modules = [];
            return async.each(_.keys(library), function(module, i) {
              if (module !== 'require' && module !== 'module') {
                modules.push('bin/' + module);
              }
              return i();
            }, function(err) {
              return done(err, modules);
            });
          }
        }, function(err, results) {
          var include;
          if (err) {
            return console.error(err);
          }
          include = _.union(results.modules, results.paths);
          module.options.paths.requireLib = './bin/libs/require';
          options = options || {
            name: 'bin/index',
            baseUrl: '.',
            paths: module.options.paths,
            include: results.modules,
            out: 'build/jarvix.js',
            optimize: "uglify",
            preserveLicenseComments: false
          };
          return module.options.requirejs.optimize(options, function(build) {
            if (callback) {
              return callback(null, build);
            }
          }, function(err) {
            console.log('cazzo errore');
            if (callback) {
              return callback(err);
            }
          });
        });
      }
    };
  });

}).call(this);
