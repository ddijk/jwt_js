const base64url = require('base64url');

const header = '{ "alg": "HS256", "typ": "JWT" }';

const input = header.replaceAll(/\s+/g, '');
console.log('input:'+input);
console.log(base64url(input))
console.log('expected:')
console.log('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')



