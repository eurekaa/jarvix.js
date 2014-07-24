# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: array
# Created: 20/10/13 4.46

# get module loader and info from memory.
jarvix_memory = if typeof window isnt 'undefined' then window['jarvix_memory'] else global['jarvix_memory']
jarvix_module = jarvix_memory.module
jarvix_module.define ['underscore'], (_)->
   
   intersection: _.intersection
   index_of: _.indexOf
   contains: (array, value)-> _.indexOf(array, value) isnt -1
   