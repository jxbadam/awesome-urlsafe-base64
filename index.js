var _          = require ('ramda');

// encodeString :: String -> String
const encodeString = function(item) {
  if (!_.is(String, item)) {
    throw new Error('URL Safe Base64 will only operate on a String.');
  }

  buffer = new Buffer(item, 'ascii');

  return encodeBuffer(buffer);
};

// encodeBuffer :: Buffer -> String
const encodeBuffer = function(buffer) {
  if (!_.is(Buffer, buffer)) {
    throw new Error('encodeBuffer: expected Buffer.');
  }

  encoded = buffer.toString('base64');

  encoded = _.replace(/\//g, '_', encoded);
  encoded = _.replace(/\+/g, '-', encoded);
  encoded = _.replace(/\=/g, '.', encoded);

  return encoded;
}

// decodeBuffer :: String -> Buffer
const decodeBuffer = function(buffer) {
  if (!_.is(Buffer, buffer)) {
    throw new Error('decodeBuffer: expected Buffer.');
  }

  item = buffer.toString('ascii');

  item = _internalDecode(item);

  decoded = new Buffer(item, 'base64');

  return decoded;
}

// decodeString :: String -> String
const decodeString = function(item) {
  if (!_.is(String, item)) {
    throw new Error('decodeString: expected String.');
  }

  item = _internalDecode(item);

  buffer = new Buffer(item, 'base64');

  plain = buffer.toString('ascii');

  return plain;
}

// _internalDecode :: String -> String
const _internalDecode = function(item) {
  item = _.replace(/_/g, '/', item);
  item = _.replace(/-/g, '+', item);
  item = _.replace(/\./g, '=', item);

  return item;
}

var exports = module.exports = {
  encodeString: encodeString

  , decodeString: decodeString

  , encodeBuffer: encodeBuffer

  , decodeBuffer: decodeBuffer

  , encode: encodeBuffer

  , decode: decodeString
};
