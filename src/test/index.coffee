# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: structural
# Created: 16/10/13 22.26


#@todo: riconoscere la presenza di jarvix, in caso contrario caricarla manualmente
# (nel caso venga lanciato il test da console).

jx.library.define
   name: 'jarvix.test'
   version: '0.0.1',
   [
      'jarvix://test/string'
      'jarvix://test/module'
      'jarvix://test/library'
   ]