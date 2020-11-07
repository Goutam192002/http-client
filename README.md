# http-client
Yet another node.js http client library that solves all your needs.

## How to make requests?

GET request.
```javascript
var client = require('http-client');
var response = client.get('https://www.google.com/');
```

POST request.
```javascript
var client = require('http-client');
var response = client.post('http://localhost:3000/', {
    contentType: 'application/json',
    data: {
        name: 'Goutam'
    }
});
```
Similarly, you can use `put`, `patch`, and `delete` methods respectively.

### How to make authenticated requests?
Just use `auth` property to make basic authenticated requests.
```javascript
var client = require('http-client');
var response = client.get('http://localhost:3000/protected', {
    auth: 'user:password'
});
```

To make other requests like `Token`, `Bearer` authentication mechanisms.
```javascript
var client = require('http-client');
var response = client.get('http://localhost:3000/protected', {
    headers: {
        Authorization: 'Bearer token'
    }
});
```