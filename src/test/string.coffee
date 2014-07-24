# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: string
# Created: 18/12/13 20.11



jx.test.define '.string', ->

   @.describe '.contains()', ->
      @.it 'checks if a string is contained', ->
         @.expect(jx.string.contains('hello world', 'hello')).to.be.true
         @.expect(jx.string.contains('bye bye world', 'hello')).to.be.false

   @.describe '.repeat()', ->
      @.it 'repeats string n times', ->
         @.expect(jx.string.repeat('x')).to.be.equal 'x'
         @.expect(jx.string.repeat('x', 0)).to.be.equal 'x'
         @.expect(jx.string.repeat('x', 1)).to.be.equal 'x'
         @.expect(jx.string.repeat('x', 5)).to.be.equal 'xxxxx'