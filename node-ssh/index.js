var SSH = require('simple-ssh');
var fs = require('fs'); 

var ssh = new SSH({
    host: '13.211.125.58',
    user: 'centos',
    key: fs.readFileSync("cert.pem")
});
let tempCommand = 'echo "linuxpassword"'
/* -- execute SSH command -- */
ssh.exec('cd /tmp').exec('ls -al', {
 out: function(stdout) {
    console.log('ls -al got:');
    console.log(stdout);
    console.log('now launching command');
    console.log(tempCommand);
 }
}).exec(tempCommand, {
    out: function(stdout1){
        console.log("another command");
        console.log(stdout1);
    }
}).start();