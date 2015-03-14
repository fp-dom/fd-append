"use strict";

var curry2 = require("fj-curry").curry2;


var _append = function (parent, child) {
  return parent.appendChild(child);
};

module.exports = curry2(_append);