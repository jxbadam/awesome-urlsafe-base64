[![Build Status](https://travis-ci.org/jxbadam/awesome-urlsafe-base64.svg?branch=master)](https://travis-ci.org/jxbadam/awesome-urlsafe-base64)
[![codecov](https://codecov.io/gh/jxbadam/awesome-urlsafe-base64/branch/master/graph/badge.svg)](https://codecov.io/gh/jxbadam/awesome-urlsafe-base64)

# awesome-urlsafe-base64
-----
This is a simple utility that will do base64 encoding and then do some replacing of the URL unfriendly characters that are potentially added during the base64 encoding.

This utility is somewhat compatible with the existing [urlsafe-base64](https://www.npmjs.com/package/urlsafe-base64) NPM module.

Eventually this library will support [Variants](https://en.wikipedia.org/wiki/Base64#Variants_summary_table) of the
Base64 algorithm.

### .encodeBuffer(buffer) :: string

Encodes a buffer as an URL Safe Base64-like string. This function encodes to
the RFC 4648 Spec where '+' is encoded as '-' the '/' is encoded as '_' and the
padding character '=' is encoded as '.'.

```javascript
var AwesomeBase64 = require('awesome-urlsafe-base64');
var buffer = new Buffer('http://www.encode.me/please/kthxbye');
var encodedString = AwesomeBase64.encode(buffer);
```

### .decodeBuffer(string) :: buffer

Decodes a previously encoded string.

```javascript
var AwesomeBase64 = require('awesome-urlsafe-base64');
var toDecode = 'VWJlciBTdHJpbmcgdG8gRW5jb2Rl';
var buffer = AwesomeBase64.decode(toDecode);
```

### .encodeString(string) :: string

Encodes a string.

```javascript
var AwesomeBase64 = require('awesome-urlsafe-base64');
var toEncode = 'http://www.encode.me/please/kthxbye';
var encodedString = AwesomeBase64.encode(buffer);
```

### .decodeString(string) :: string

Decodes a string.

```javascript
var AwesomeBase64 = require('awesome-urlsafe-base64');
var toDecode = 'VWJlciBTdHJpbmcgdG8gRW5jb2Rl';
var decodedString = AwesomeBase64.encode(buffer);
```

### .encode(buffer) :: string
Alias for .encodeBuffer

### .decode(string) :: buffer
Alias for .decodeBuffer
