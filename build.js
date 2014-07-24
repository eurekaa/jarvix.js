require('./bin/index').ready(function (err, jx) {
    console.log('qui');
    jx.library.build('bin/index', function (err, jx) {
        if (err) console.error(err);
        else console.log('jarvix builded');
    });


    /*
     jx.library.build('./bin/test/index', {
     name: 'bin/test/index',
     baseUrl: '.',
     out: 'build/jarvix.test.js',
     optimize: "uglify",
     preserveLicenseComments: false,
     include: [
     'bin/test/string', 'bin/test/module' //, 'bin/test/library'
     ]
     }, function (err, jx) {
     if (err) console.error(err);
     else console.log('test builded');
     });
     */

});