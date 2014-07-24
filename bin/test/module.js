(function() {
  jx.test.define('.module', function() {
    return this.describe('.resolve_paths()', function() {
      this.it('resolves paths correctly', function(done) {
        var _this = this;
        return jx.module.resolve_paths(['jarvix://libs/async'], function(err, paths) {
          _this.expect(err).to.be["null"];
          _this.expect(paths).to.be.an('array');
          _this.expect(paths[0]).to.equal('bin/libs/async');
          return done();
        });
      });
      this.it('resolves paths asimmetrically on client and server', function(done) {
        var _this = this;
        return jx.module.resolve_paths({
          client: ['jarvix://libs/async'],
          server: ['node://async']
        }, function(err, paths) {
          _this.expect(err).to.be["null"];
          _this.expect(paths).to.be.an('array');
          if (jx.utility.is_nodejs()) {
            _this.expect(paths[0]).to.eql('async');
          } else if (jx.utility.is_browser()) {
            _this.expect(paths[0]).to.eql('bin/libs/async');
          }
          return done();
        });
      });
      return this.it('adds paramters for caching purposes', function(done) {
        return jx.library.config(jx, {
          module: {
            cache: false
          }
        }, function(err, jx) {
          if (jx.utility.is_nodejs()) {
            jx.test.expect(jx.module.options.cache).to.be["true"];
            return done();
          } else if (jx.utility.is_browser()) {
            return jx.module.resolve_paths(['jarvix://libs/async'], function(err, paths) {
              var path, require;
              jx.test.expect(err).to.be["null"];
              require = jx.module.options.requirejs;
              path = require.toUrl(paths[0]);
              jx.test.expect(require.s.contexts._.config.urlArgs).to.contain('v=');
              jx.test.expect(jx.string.contains(path, '?v=')).to.be["true"];
              return done();
            });
          }
        });
      });
    });
  });

}).call(this);
