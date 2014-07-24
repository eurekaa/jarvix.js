// client.
if (typeof window !== 'undefined'){
    jx.test.run('./build/jarvix.test');
    
// server.
}else{
    require('./bin/index').ready(function(err, jx){
       jx.test.run('./build/jarvix.test');
    });
}