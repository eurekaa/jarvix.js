(function() {
  jx.test.define('.string', function() {
    this.describe('.contains()', function() {
      return this.it('checks if a string is contained', function() {
        this.expect(jx.string.contains('hello world', 'hello')).to.be["true"];
        return this.expect(jx.string.contains('bye bye world', 'hello')).to.be["false"];
      });
    });
    return this.describe('.repeat()', function() {
      return this.it('repeats string n times', function() {
        this.expect(jx.string.repeat('x')).to.be.equal('x');
        this.expect(jx.string.repeat('x', 0)).to.be.equal('x');
        this.expect(jx.string.repeat('x', 1)).to.be.equal('x');
        return this.expect(jx.string.repeat('x', 5)).to.be.equal('xxxxx');
      });
    });
  });

}).call(this);
