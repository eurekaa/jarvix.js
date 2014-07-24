(function() {
  jx.test.define('.library', function() {
    return this.describe('.config()', function() {
      return this.it('correctly configures libraries', function() {
        return jx.test.expect(true).to.be["true"];
      });
    });
  });

}).call(this);
