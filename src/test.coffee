# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: test
# Created: 16/10/13 18.06


jarvix_memory = if typeof window isnt 'undefined' then window['jarvix_memory'] else global['jarvix_memory']
jarvix_path = jarvix_memory.path
jarvix_module = jarvix_memory.module

# define test module.
jarvix_module.define ['chai', 'jstest', 'underscore'], (chai, test, _)->
   
   define: (name, dependencies, callback)->
      self = @
      
      # if dependendecies are not defined manage it as a test.s
      if _.isFunction dependencies
         callback = dependencies
         root_name = name.split('.')[0]
         JS.Test.describe root_name, ->
            @.before ->
               @.expect = self.expect
            @.describe name, callback
         
      # if dependencies are defined manage it as a library hub.
      else jarvix_module.define dependencies, callback

   describe: (name, callback)-> JS.Test.describe name, callback


   should: chai.should()
   expect: chai.expect
   
   run: (tests, callback)->

      jarvix_module.require tests, ->
         JS.cache = false
         JS.Test.ASSERTION_ERRORS.push chai.AssertionError
         JS.Test.autorun (runner)->
            if typeof window isnt 'undefined' # is browser.
               runner.setReporter new JS.Test.Reporters.Browser()
            else 
               runner.setReporter new JS.Test.Reporters.Spec()
               runner.addReporter JS.Test.Reporters.ExitStatus()
               runner.addReporter JS.Test.Reporters.Error()
            
            if callback then callback null