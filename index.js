const base64url = require('base64url');

const removeSpaces = (input) => input.replaceAll(/\s+/g,'');

const header = '{ "alg": "HS256", "typ": "JWT" }';

const input = removeSpaces(header)
console.log('HEADER')
console.log('input:'+input);
console.log(base64url(input))
console.log('expected:')
console.log('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')



console.log('PAYLOAD')
const payload = '{"sub":"1234567890","name":"John Doe","admin":true}';
// const payload = '{"iss":"Identifier of our Authentication Server","iat":1504699136,"sub":"github|353454354354353453","exp":1504699256}';
console.log('input:'+payload);
console.log(base64url((payload)))
console.log('expected:')
console.log('eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9')

// HMAC base64 V1MaMsKJvkejp8NgDlyyqtCZLyKXUvY6BdZCrdHYLQo=
// HMAC base64url: 

const hmac = 'V1MaMsKJvkejp8NgDlyyqtCZLyKXUvY6BdZCrdHYLQo=';
console.log('MAC')
console.log('input:');
console.log(hmac)
console.log('result:');
console.log(base64url.fromBase64(hmac))
//console.log('expected:')
//console.log('eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9')

const jwt='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'


