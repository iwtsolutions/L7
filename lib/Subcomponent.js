// Generated by CoffeeScript 1.6.2
(function() {
  var Composed, Subcomponent,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Composed = require('./Composed');

  Subcomponent = (function(_super) {
    __extends(Subcomponent, _super);

    function Subcomponent(raw) {
      this.raw = raw;
      return;
    }

    Subcomponent.prototype.getValue = function() {
      return this.raw;
    };

    return Subcomponent;

  })(Composed);

  module.exports = Subcomponent;

}).call(this);
