var R            = require ('ramda');

var Alphabet = require ('./lib/alphabet.js');

var AlphabetType = require ('./lib/alphabet-type.js');

var VERSION = "1.1.0"

// encodeString :: String -> String
function encodeString(item) {
  if (!R.is(String, item)) {
    throw new Error('URL Safe Base64 will only operate on a String.');
  }

  buffer = new Buffer(item, 'utf8');

  return encodeBuffer(buffer);
};

// encodeBuffer :: Buffer -> String
function encodeBuffer(buffer) {
  if (!R.is(Buffer, buffer)) {
    throw new Error('encodeBuffer: expected Buffer.');
  }

  encoded = buffer.toString('base64');

  encoded = R.replace(/\//g, '_', encoded);
  encoded = R.replace(/\+/g, '-', encoded);
  encoded = R.replace(/\=/g, '.', encoded);

  return encoded;
}

// decodeBuffer :: String -> Buffer
function decodeBuffer(buffer) {
  if (!R.is(Buffer, buffer)) {
    throw new Error('decodeBuffer: expected Buffer.');
  }

  item = buffer.toString('utf8');

  item = _internalDecode(item);

  decoded = new Buffer(item, 'base64');

  return decoded;
}

// decodeString :: String -> String
function decodeString(item) {
  if (!R.is(String, item)) {
    throw new Error('decodeString: expected String.');
  }

  item = _internalDecode(item);

  buffer = new Buffer(item, 'base64');

  plain = buffer.toString('utf8');

  return plain;
}

// decodeString :: String -> Buffer
function decodeStringToBuffer(item) {
  if (!R.is(String, item)) {
    throw new Error('decodeString: expected String.');
  }

  item = _internalDecode(item);

  buffer = new Buffer(item, 'base64');

  return buffer;
}

// _internalDecode :: String -> String
function _internalDecode(item) {

  item = R.replace(/_/g, '/', item);
  item = R.replace(/-/g, '+', item);
  item = R.replace(/\./g, '=', item);

  return item;
}

function validate(item) {
  var alphabet = Alphabet.getAlphabet(AlphabetType.RFC_6920);
  var i, char;

  for(i = 0; i < item.length; i ++) {
    char = item.charAt(i);

    if (!alphabet.includes(char)) {
      return false;
    }
  }

  return true;
}

module.exports = {
     version: VERSION

  , encodeString: encodeString

  , decodeString: decodeString

  , encodeBuffer: encodeBuffer

  , decodeBuffer: decodeBuffer

  , encode: encodeBuffer

  , decode: decodeStringToBuffer

  , validate: validate
};
