"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var elem = _interopRequire(require("fd-elem"));

var append = _interopRequire(require("./"));

it("fd-append", function () {
  var appendtoBody = append(document.body);
  var h1 = elem("h1", "meow");
  appendtoBody(h1);
  assert.equal(document.body.lastChild.textContent, "meow");
});