var req = require('request');
var token;
const params = {
    url: 'https://api.mgmt.cloud.vmware.com/iaas/login',
    headers: { "Accept":'application/json',"Content-Type":'application/json'},
    body: JSON.stringify({ "refreshToken":"6077d732-0f78-421f-8d4e-f41f1423dff9"})
};
function getRestReturn(){
    return new Promise((resolve, reject) =>{
        req.post(params, function(err, res, body) {
            if(err){
            console.log('------error------', err);
            } else{
                console.log('------success--------', body);
                
            }
        })
}).then(res => {
    resolve(body);
});
}
var info = function (req, res){
    getRestReturn().then(function(data){
    res.send(data);
})
}
console.log(info);
