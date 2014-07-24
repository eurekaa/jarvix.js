(function() {
  var create_jarvix, create_memory, create_module, jarvix_config, jarvix_memory, jarvix_path, jarvix_ready, parent, script;

  create_jarvix = function(jarvix_path, module, library, callback) {
    library.define({
      name: 'jarvix',
      version: '0.0.1',
      aliases: ['jx', 'jX'],
      global: true,
      base_path: jarvix_path,
      test_path: jarvix_path + 'tests/',
      doc_path: jarvix_path + 'docs/',
      paths: {
        order: jarvix_path + 'libs/require.order',
        use: jarvix_path + 'libs/require.use',
        async: jarvix_path + 'libs/async',
        eventify: jarvix_path + 'libs/eventify',
        underscore: jarvix_path + 'libs/lodash',
        moment: jarvix_path + 'libs/moment',
        traits: jarvix_path + 'libs/traits',
        chai: jarvix_path + 'libs/chai',
        jstest: jarvix_path + 'libs/jstest'
      },
      shim: {}
    }, [jarvix_path + 'array', jarvix_path + 'async', jarvix_path + 'config', jarvix_path + 'date', jarvix_path + 'event', jarvix_path + 'list', jarvix_path + 'memory', jarvix_path + 'object', jarvix_path + 'regexp', jarvix_path + 'string', jarvix_path + 'test', jarvix_path + 'trait', jarvix_path + 'utility'], function(array, async, config, date, event, list, memory, object, regexp, string, test, trait, utility) {
      return {
        require: function(dependencies, callback) {
          return module.require(dependencies, callback);
        },
        module: module,
        array: array,
        async: async,
        config: config,
        date: date,
        event: event,
        library: library,
        list: list,
        memory: memory,
        object: object,
        regexp: regexp,
        string: string,
        test: test,
        trait: trait,
        utility: utility
      };
    });
    return module.require('bin/index', function(jx) {
      return callback(null, jx);
    });
  };

  create_memory = function() {
    var memory, memory_name;
    memory = void 0;
    memory_name = 'jarvix_memory';
    if (typeof window !== 'undefined') {
      window[memory_name] = window[memory_name] || {};
      memory = window[memory_name];
    } else {
      global[memory_name] = global[memory_name] || {};
      memory = global[memory_name];
    }
    return memory;
  };

  create_module = function(define, require, callback) {
    var jarvix_memory;
    jarvix_memory = typeof window !== 'undefined' ? window['jarvix_memory'] : global['jarvix_memory'];
    require.config({
      paths: {
        async: jarvix_memory.path + 'libs/async',
        underscore: jarvix_memory.path + 'libs/lodash'
      }
    });
    return require(['async', 'underscore'], function(async, _) {
      return callback(null, {
        options: {
          requirejs: require,
          base_path: '.',
          cache: true,
          paths: {},
          shim: {},
          use: {}
        },
        on_config: function(options, callback) {
          var self, url_args;
          self = this;
          options = options || {};
          self.options = _.extend(self.options, options);
          url_args = '';
          if (typeof window !== 'undefined') {
            if (self.options.cache === false) {
              url_args = 'v=' + (new Date()).getTime();
            }
          } else {
            self.options.cache = true;
          }
          require.config({
            baseUrl: self.options.base_path || '.',
            urlArgs: url_args,
            paths: self.options.paths || {},
            shim: self.options.shim || {},
            use: self.options.use || {}
          });
          if (callback) {
            return callback(null, options);
          }
        },
        resolve_paths: function(paths, callback) {
          var libs, libs_names, self;
          self = this;
          if (_.isString(paths)) {
            paths = [paths];
          }
          libs = typeof jx !== 'undefined' ? jx.library.options.libs : {};
          libs_names = _.keys(libs);
          if (typeof window !== 'undefined') {
            paths = paths.client || paths.browser || paths;
          } else {
            paths = paths.server || paths.node || paths;
          }
          return async.map(paths, function(path, i) {
            var aliases, name, resolved, sub_path, _i, _len;
            resolved = false;
            if (path.indexOf('node://') !== -1 || path.indexOf('node_modules://') !== -1) {
              path = path.replace('node://', '').replace('node_modules://', '');
              resolved = true;
            }
            if (resolved !== true && _.indexOf(libs_names, path) !== -1) {
              path = libs[path].base_path;
              resolved = true;
            }
            if (resolved !== true && path.indexOf('://') !== -1) {
              sub_path = path.split('://');
              if (_.indexOf(libs_names, sub_path[0]) !== -1) {
                path = libs[sub_path[0]].base_path + sub_path[1];
                resolved = true;
              }
            }
            if (resolved !== true) {
              for (_i = 0, _len = libs_names.length; _i < _len; _i++) {
                name = libs_names[_i];
                aliases = libs[name].aliases || [];
                if (_.indexOf(aliases, path) !== -1) {
                  path = libs[name].base_path;
                  resolved = true;
                }
                if (resolved !== true && path.indexOf('://' !== -1)) {
                  sub_path = path.split('://');
                  if (_.indexOf(aliases, sub_path) !== -1) {
                    path = libs[sub_path[0]].base_path + sub_path[1];
                    resolved = true;
                  }
                }
              }
            }
            return i(null, path);
          }, function(err, paths) {
            return callback(err, paths);
          });
        },
        define: function(dependencies, callback) {
          return this.resolve_paths(dependencies, function(err, dependencies) {
            if (err) {
              throw err;
            }
            return define(dependencies, callback);
          });
        },
        require: function(dependencies, callback) {
          return this.resolve_paths(dependencies, function(err, dependencies) {
            if (err) {
              throw err;
            }
            return require(dependencies, callback);
          });
        }
      });
    });
  };

  if (typeof window !== 'undefined') {
    jarvix_memory = create_memory();
    parent = document.getElementsByTagName('script');
    parent = parent[parent.length - 1];
    jarvix_path = parent['src'].replace(window.location.href, '').replace('jarvix.js', '').replace('index.js', '');
    jarvix_config = parent.getAttribute('data-config' || {});
    jarvix_ready = parent.getAttribute('data-ready' || {});
    jarvix_path = 'bin/';
    jarvix_memory['path'] = jarvix_path;
    script = document.createElement('script');
    script['src'] = jarvix_path + 'libs/require.js';
    script.onload = function() {
      require.onError = function(err) {
        return console.error(err);
      };
      return create_module(define, require, function(err, module) {
        if (err) {
          return console.error(err);
        }
        jarvix_memory['module'] = module;
        return module.require([jarvix_path + 'library'], function(library) {
          return create_jarvix(jarvix_path, module, library, function(err, jarvix) {
            console.log(jarvix);
            console.log(window.global);
            if (err) {
              return console.error(err);
            }
            delete jarvix_memory['module'];
            window['jarvix'] = jarvix;
            window['jx'] = window['jarvix'];
            window['jX'] = window['jarvix'];
            return jx.library.config(jx, jarvix_config, function(err, jx) {
              if (jx.utility.is_string(jarvix_ready)) {
                script = document.createElement('script');
                script['src'] = jx.string.ends_with(jarvix_ready, '.js') ? '' : jarvix_ready + '.js';
                return document.getElementsByTagName('head')[0].appendChild(script);
              }
            });
          });
        });
      });
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    exports['ready'] = function(jarvix_config, callback) {
      var base_path, requirejs, _;
      _ = require('underscore');
      requirejs = require('requirejs');
      requirejs.config({
        baseUrl: '.',
        paths: '',
        nodeRequire: require
      });
      requirejs.onError = function(err) {
        return console.error(err);
      };
      if (typeof jarvix_config === 'function') {
        callback = jarvix_config;
        jarvix_config = {};
      }
      jarvix_config.module = jarvix_config.module || {};
      jarvix_memory = create_memory();
      base_path = module.parent.filename.split('\\');
      base_path.pop();
      jarvix_path = module.id.split('\\');
      jarvix_path.pop();
      jarvix_path = _.difference(jarvix_path, base_path);
      jarvix_path = jarvix_path.join('/') + '/';
      jarvix_memory['path'] = jarvix_path;
      return create_module(requirejs.define, requirejs, function(err, module) {
        if (err) {
          return callback(err);
        }
        jarvix_memory['module'] = module;
        return module.require([jarvix_path + 'library'], function(library) {
          return create_jarvix(jarvix_path, module, library, function(err, jx) {
            console.log(jx);
            delete jarvix_memory['module'];
            global.jarvix = jx;
            global.jx = global.jarvix;
            global.jX = global.jarvix;
            return jx.library.config(jx, jarvix_config, function(err, jx) {
              return callback(err, jx);
            });
          });
        });
      });
    };
  }

}).call(this);
