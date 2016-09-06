const Base64 = require('../../index.js');

const STRING_TO_ENCODE = "Uber String to Encode";
const ENCODED = "VWJlciBTdHJpbmcgdG8gRW5jb2Rl";

describe('index.js', function() {

    describe(':: encodeString', function() {
        it('should encode a string to url safe base64',
          function() {
            var result = Base64.encodeString(STRING_TO_ENCODE);
            expect(result).to.equal(ENCODED);
          }
        );

        it('should throw an Error on invalid input',
          function() {
            var encodeError = function() {
              Base64.encodeString({});
            };

            expect(encodeError).to.throw(Error);
          }
        );

      }
    );

    describe(':: encodeBuffer', function() {
        it('should throw an Error on invalid input',
          function() {
            var encodeError = function() {
              Base64.encodeBuffer({});
            };

            expect(encodeError).to.throw(Error);
          }
        );

      }
    );

    describe(':: decodeString', function() {

        it('should decode a string',
          function() {
            var result = Base64.decodeString(ENCODED);
            expect(result).to.equal(STRING_TO_ENCODE);
          }
        );

        it('should throw an Error on invalid input',
          function() {
            var decodeError = function() {
              Base64.decodeString({});
            };

            expect(decodeError).to.throw(Error);
          }
        );

      }
    );

    describe(':: decode', function() {

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

    describe(':: decodeBuffer', function() {
      it('should decode a string',
        function() {
          var input = new Buffer(ENCODED, 'ascii');
          var result = Base64.decodeBuffer(input);

          expect(result).to.be.an.instanceof(Buffer)

          var output = result.toString('ascii');
          expect(output).to.equal(STRING_TO_ENCODE);
        }
      );

        it('should throw an Error on invalid input',
          function() {
            var encodeError = function() {
              Base64.decodeBuffer({});
            };

            expect(encodeError).to.throw(Error);
          }
        );

      }
    );
});
