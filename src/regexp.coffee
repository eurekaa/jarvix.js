# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: regexp
# Created: 18/11/13 22.27

jarvix_module = if typeof window isnt 'undefined' then window['jarvix_memory'].module else global['jarvix_memory'].module
jarvix_module.define ['underscore'],(_) ->
   
   # regular expression testing function.
   test: (string, regexp)->
      if _.isString(regexp) and not _.isUndefined(@[regexp]) then regexp = @[regexp]
      regexp = new RegExp regexp
      match = string.match regexp
      return match and match.length > 0
   
   
   # regular expressions patterns.
   email: '^([a-zA-Z0-9]+([\.+_-][a-zA-Z0-9]+)*)@(([a-zA-Z0-9]+((\.|[-]{1,2})[a-zA-Z0-9]+)*)\.[a-zA-Z]{2,6})$'