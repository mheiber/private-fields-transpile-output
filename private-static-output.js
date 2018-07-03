// private static output
// > This is likely to evolve as we get closer to implementation
// and discuss more with the team implementing for Babel

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); }
function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; }

const _fooWm = new WeakMap()

class A { 
    constructor () {
        _classPrivateFieldSet(this, _fooWm, 1);
    }
    static bar () {
        return _classPrivateFieldGet(this, _fooWm);
    }
}
