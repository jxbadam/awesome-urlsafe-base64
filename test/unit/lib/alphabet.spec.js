const Alphabet     = require('../../../lib/alphabet.js');
const AlphabetType = require('../../../lib/alphabet-type.js');

describe('lib/alphabet.js', function() {

    describe(' get, Alphabet', function() {
        const ALPHABETS = [
            AlphabetType.RFC_1421
          , AlphabetType.RFC_2045
          , AlphabetType.RFC_3548
          , AlphabetType.RFC_4880
          , AlphabetType.RFC_1642
          , AlphabetType.RFC_3501
          , AlphabetType.RFC_4648
          , AlphabetType.FILE_SAFE
          , AlphabetType.RFC_6920
          , AlphabetType.YUI
          , AlphabetType.XML_NAME_TOKEN
          , AlphabetType.PROGRAM_IDENTIFIERS_V2
          , AlphabetType.XML_IDENTIFIER
          , AlphabetType.PROGRAM_IDENTIFIERS_V1
          , AlphabetType.REGULAR_EXPRESSIONS
          , AlphabetType.FREENET
        ]

        it('should return an alphabet string for all possibly base64 alphabets',
          function() {
            for (let i = 0; i < ALPHABETS.length; i ++) {
              let result = Alphabet.getAlphabet(ALPHABETS[i]);
              expect(result).to.be.a('string');
            }
          }
        );

        it('should throw an Error on invalid input',
          function() {
            var alphabetError = function() {
              Alphabet.getAlphabet('***unknown_alphabet');
            };

            expect(alphabetError).to.throw(Error);
          }
        );

      }
    );
});
