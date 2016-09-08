var R = require ("ramda");

var AlphabetType = require ("./alphabet-type.js");

var cache = {};

// validateAlphabet :: String -> Boolean
function validateAlphabet(alphabet) {
  switch(alphabet) {
    case AlphabetType.RFC_1421:
    case AlphabetType.RFC_2045:
    case AlphabetType.RFC_3548:
    case AlphabetType.RFC_4880:
    case AlphabetType.RFC_1642:
    case AlphabetType.RFC_3501:
    case AlphabetType.RFC_4648:
    case AlphabetType.FILE_SAFE:
    case AlphabetType.RFC_6920:
    case AlphabetType.YUI:
    case AlphabetType.XML_NAME_TOKEN:
    case AlphabetType.PROGRAM_IDENTIFIERS_V2:
    case AlphabetType.XML_IDENTIFIER:
    case AlphabetType.PROGRAM_IDENTIFIERS_V1:
    case AlphabetType.REGULAR_EXPRESSIONS:
    case AlphabetType.FREENET:
      return true;

    default:
      throw new Error("Unknown alphabet ("+alphabet+")");
  }
}

// getCharacter63 :: String -> String
function getCharacter62(alphabet) {
  validateAlphabet(alphabet);
  switch(alphabet) {
    case AlphabetType.RFC_1421:
    case AlphabetType.RFC_2045:
    case AlphabetType.RFC_3548:
    case AlphabetType.RFC_4880:
    case AlphabetType.RFC_1642:
    case AlphabetType.RFC_3501:
      return '+';

    case AlphabetType.RFC_4648:
    case AlphabetType.FILE_SAFE:
    case AlphabetType.RFC_6920:
      return '-';

    case AlphabetType.YUI:
    case AlphabetType.XML_NAME_TOKEN:
    case AlphabetType.PROGRAM_IDENTIFIERS_V2:
      return '.';

    case AlphabetType.XML_IDENTIFIER:
    case AlphabetType.PROGRAM_IDENTIFIERS_V1:
      return '_';


    case AlphabetType.REGULAR_EXPRESSIONS:
      return '!';

    case AlphabetType.FREENET:
      return '~';
  }
}

// getCharacter63 :: String -> String
function getCharacter63(alphabet) {
  validateAlphabet(alphabet)
  
  switch(alphabet) {
    case AlphabetType.RFC_1421:
    case AlphabetType.RFC_2045:
    case AlphabetType.RFC_3548:
    case AlphabetType.RFC_4880:
    case AlphabetType.RFC_1642:
      return '/';

    case AlphabetType.RFC_3501:
      return ',';

    case AlphabetType.RFC_4648:
    case AlphabetType.FILE_SAFE:
    case AlphabetType.RFC_6920:
    case AlphabetType.YUI:
    case AlphabetType.PROGRAM_IDENTIFIERS_V2:
      return '_';

    case AlphabetType.XML_NAME_TOKEN:
    case AlphabetType.PROGRAM_IDENTIFIERS_V1:
    case AlphabetType.REGULAR_EXPRESSIONS:
    case AlphabetType.FREENET:
      return '-';

    case AlphabetType.XML_IDENTIFIER:
      return ':';
  }
}

function getPadding(alphabet) {
  validateAlphabet(alphabet)

  switch(alphabet) {
    case AlphabetType.RFC_1421:
    case AlphabetType.RFC_2045:
    case AlphabetType.RFC_3548:
    case AlphabetType.RFC_4648:
    case AlphabetType.RFC_4880:
    case AlphabetType.FILE_SAFE:
    case AlphabetType.FREENET:
      return '=';

    case AlphabetType.YUI:
      return '-';

    case AlphabetType.RFC_1642:
    case AlphabetType.RFC_3501:
    case AlphabetType.RFC_6920:
    case AlphabetType.PROGRAM_IDENTIFIERS_V2:
    case AlphabetType.XML_NAME_TOKEN:
    case AlphabetType.PROGRAM_IDENTIFIERS_V1:
    case AlphabetType.REGULAR_EXPRESSIONS:
    case AlphabetType.XML_IDENTIFIER:
      return '';
  }
}

function getAlphabet(alphabet) {
  if (!R.has(alphabet, cache)) {
    const character62 = getCharacter62(alphabet);
    const character63 = getCharacter63(alphabet);
    const padding = getPadding(alphabet);

    cache[alphabet] = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${character62}${character63}${padding}`
  }

  return R.prop(alphabet, cache);
}

module.exports = {
  getAlphabet: getAlphabet
};
