# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: module
# Created: 26/01/14 10.49

jx.test.define '.module', ->
   
   @.describe '.resolve_paths()', ->
      
      @.it 'resolves paths correctly', (done)->
         jx.module.resolve_paths [
            'jarvix://libs/async'
         ], (err, paths)=>
            @.expect(err).to.be.null
            @.expect(paths).to.be.an 'array'
            @.expect(paths[0]).to.equal 'bin/libs/async'
            done()
      
      
      @.it 'resolves paths asimmetrically on client and server', (done)->
         jx.module.resolve_paths 
            client: ['jarvix://libs/async']
            server: ['node://async']
         , (err, paths)=>
               
               # common tests.
               @.expect(err).to.be.null
               @.expect(paths).to.be.an 'array'

               # nodejs tests.
               if jx.utility.is_nodejs()
                  @.expect(paths[0]).to.eql 'async'
               
               # browser tests.
               else if jx.utility.is_browser()
                  @.expect(paths[0]).to.eql 'bin/libs/async'

               done()
                     
               

      @.it 'adds paramters for caching purposes', (done)->
         jx.library.config jx, module: cache: false, (err, jx)->
            
            # nodejs tests.
            if jx.utility.is_nodejs()
               jx.test.expect(jx.module.options.cache).to.be.true
               done()
   
            # browser tests.
            else if jx.utility.is_browser()
               jx.module.resolve_paths ['jarvix://libs/async'], (err, paths)->
                  jx.test.expect(err).to.be.null
                  require = jx.module.options.requirejs
                  path = require.toUrl paths[0]
                  jx.test.expect(require.s.contexts._.config.urlArgs).to.contain 'v='
                  jx.test.expect(jx.string.contains(path, '?v=')).to.be.true
      
                  done()
                  
            