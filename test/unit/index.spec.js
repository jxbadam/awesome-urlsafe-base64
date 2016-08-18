const _ = require('ramda');
const Base64 = require('../../index.js');

const STRING_TO_ENCODE = "Uber String to Encode";
const ENCODED = "VWJlciBTdHJpbmcgdG8gRW5jb2Rl";

describe('index.js', function() {

    describe(':: encode', function() {
        it('should encode a string to url safe base64',
          function() {
            var result = Base64.encode(STRING_TO_ENCODE);
            expect(result).to.equal(ENCODED);
          }
        );

        it('should throw an Error on invalid input',
          function() {
            var encodeError = function() {
              Base64.encode({});
            };

            expect(encodeError).to.throw(Error);
          }
        );

      }
    );

    describe(':: decode', function() {

        it('should decode a string',
          function() {
            var result = Base64.decode(ENCODED);
            expect(result).to.equal(STRING_TO_ENCODE);
          }
        );

        it('should throw an Error on invalid input',
          function() {
            var decodeError = function() {
              Base64.decode({});
            };

            expect(decodeError).to.throw(Error);
          }
        );

      }
    );

});
