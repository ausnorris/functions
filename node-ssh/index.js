exports.handler = function handler(context, inputs) {
var SSH = require('simple-ssh');
var fs = require('fs'); 


var ssh = new SSH({
    host: inputs.host,
    user: 'centos',
    //pass: 'P@ssw0rd'
    key: fs.readFileSync("cert.pem")
});


/* -- execute SSH command -- */
ssh.exec('cd /tmp').exec('ls -al', {
 out: function(stdout) {
    console.log('ls -al got:');
    console.log(stdout);
    outputs["stdout"] = stdout;

 }
}).start();



}