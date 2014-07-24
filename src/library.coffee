# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: library
# Created: 15/10/13 14.33

jarvix_memory = if typeof window isnt 'undefined' then window['jarvix_memory'] else global['jarvix_memory']
module = if typeof jx isnt 'undefined' then jx.module else jarvix_memory['module']
module.define ['async', 'underscore'], (async, _)->
   
   options:
      libs: {}
   
   
   resolve_paths: (paths, callback)->

   # this function must remain synchronous.
   define: (options, dependencies, callback)->
      self = @
      
      # check required options.
      if not options then return callback 'options are required.'
      if not callback then callback = ->
      
      # add library info to internal options (duplicates are avoided).
      if not _.has self.options.libs, options.name then self.options.libs[options.name] = options
      
      # configure module loader with library paths.
      module.on_config
         paths: options.paths || {}
         shim: options.shim || {}
      
      # wrap in a jarvix module.
      module.define dependencies, callback

   
   config: (library, options, callback)->
      self = @
      options = options || {}
      # call each module config function with provided options,
      # then callback configured library.
      on_config = (library, options, callback)->
         modules = _.keys library
         async.each modules, (module, i)->
            if not _.isUndefined options[module] and _.isFunction library[module].on_config
               return library[module].on_config options[module], i
            else i()
         , (err)-> callback err, library
      
      # require library|options first if a string is provided.
      async.parallel [
         (callback)-> if _.isString(library) then module.require [library], (library)-> callback null, library else callback null, library
         (callback)-> if _.isString(options) then module.require [options], (options)-> callback null, options else callback null, options
      ], (err, results)->
         on_config results[0], results[1], callback
         
         
      
   build: (library, options, callback)->
      self = @
      
      # options are optional.
      if _.isFunction options then callback = options; options = undefined
      
      async.series 
         library: (done)->
            if _.isString library then module.require library, (library)-> done null, library
            else done null, library
         paths: (done)->
            paths = []
            async.each _.keys(module.options.paths), (path, i)->
               paths.push module.options.paths[path]
               i()
            , (err)-> done err, paths
         modules: (done)->
            modules = []
            async.each _.keys(library), (module, i)->
               if module isnt 'require' and module isnt 'module' 
                  modules.push 'bin/' + module
               i()
            , (err)-> done err, modules
      , (err, results)->
         if err then return console.error err 
         
         include = _.union results.modules, results.paths
         module.options.paths.requireLib = './bin/libs/require'

         options = options || 
            name: 'bin/index'
            baseUrl: '.'
            paths: module.options.paths
            include: results.modules
            out: 'build/jarvix.js'
            optimize: "uglify"
            preserveLicenseComments: false
         
         module.options.requirejs.optimize options
         , (build)->
            if callback then callback null, build
         ,(err)->
            console.log 'cazzo errore'
            if callback then callback err
               
      
      