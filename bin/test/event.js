(function() {
  jx.test.define('.event', [], function() {
    return jx.test.describe('.enable()', function() {
      return jx.test.it('extends argument with .on() .off() .trigger() functions.', function() {
        var target;
        target = jx.event.enable({});
        jx.test.expect(target).to.have.property('on');
        jx.test.expect(target).to.have.property('off');
        return jx.test.expect(target).to.have.property('trigger');
      });
    });
  });

}).call(this);
