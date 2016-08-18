(function(global, require) {
  'use strict';

  global.sinon            = require('sinon');
  global.chai             = require('chai');
  global.expect           = global.chai.expect;
  global.AssertionError   = global.chai.AssertionError;

  global.swallow          = function(thrower) {
    try {
      thrower();
    } catch (e) {
      // intentionally swallowing the error
    }
  };

  var sinonChai           = require('sinon-chai');
  global.chai.use(sinonChai);

  return global;

}(global, require));
