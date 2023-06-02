const crypto = require('crypto');
const fs = require('fs'); 
const sign = crypto.createSign('RSA-SHA256');

// copy / paste here the header and the payload of your JWT only
sign.write('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9
           .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9');
sign.end();

var privateKey = fs.readFileSync('./private.key');

console.log(sign.sign(privateKey, 'base64'));
