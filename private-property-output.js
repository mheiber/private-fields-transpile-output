// Helpers for getting/setting private properties
// that check for provenance restriction violations and throw TypeError when appropriate.
function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; }

class MyClass {
  constructor(_property3) {
    _property.set(this, 1);

    _property2.set(this, void 0);

    _classPrivateFieldSet(this, _property2, _property3);
  }

  method() {
    _classPrivateFieldSet(this, _property, 1);
    return _classPrivateFieldGet(this, _property2);
  }

}

var _property = new WeakMap();

var _property2 = new WeakMap();
