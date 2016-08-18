var _          = require ('ramda');

var exports = module.exports = {
  // encode :: String -> String
  encode: function(item) {
    if (!_.is(String, item)) {
      throw new Error('URL Safe Base64 will only operate on a String.');
    }

    buffer = new Buffer(item, 'ascii');

    rawBase64 = buffer.toString('base64');

    rawBase64 = _.replace(/\//g, '-', rawBase64);
    rawBase64 = _.replace(/\+/g, '_', rawBase64);
    rawBase64 = _.replace(/\=/g, ',', rawBase64);

    return rawBase64;
  }

  // decode :: String -> String
  , decode: function(item) {
    if (!_.is(String, item)) {
      throw new Error('URL Safe Base64 will only operate on a String.');
    }

    item = _.replace(/-/g, '/', item);
    item = _.replace(/_/g, '+', item);
    item = _.replace(/,/g, '=', item);

    buffer = new Buffer(item, 'base64');

    text = buffer.toString('ascii');

    return text;
  }
};
