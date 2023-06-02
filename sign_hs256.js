const crypto = require('crypto');
const base64url = require('base64url');

const key='dd';
//const message ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';
const message ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6ImphcGllIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ';
var hash = crypto.createHmac('sha256', key).update(message).digest('base64');


console.log(hash)
console.log(base64url.fromBase64(hash))


// jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ


//      eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

console.log('header decoded:')
console.log(base64url.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlzcyI6ImphcGllIn0'));
console.log('payload decoded:')
console.log(base64url.decode('eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'));
console.log('orig =====')
console.log('header decoded:')
console.log(base64url.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
console.log('payload decoded:')
console.log(base64url.decode('eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9'));