// > This is likely to evolve as we get closer to implementation
// and discuss more with the team implementing for Babel

// getters and setters transform output
// We convert the getters/setters to plain methods
// and bind them to `this` in the constructor

// helper to set function.name
function _withName (name, func) {
    Object.defineProperty(func, 'name', {
        enumerable: false,
        writable: false,
        configurable: true,
        value: name
    });
    return func;
};

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); }
function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; }


const _diameterWm = new WeakMap();
const _radiusGetterWm = new WeakMap();
const _radiusSetterWm = new WeakMap();

class Circle {
    constructor(diameter) {
        _diameterWm.set(this, diameter);
        _radiusGetterWm.set(this, _withName('get radius', function () {
            return _classPrivateFieldGet(this, _diameterWm) / 2;
        }.bind(this)));
        _radiusSetterWm.set(this, _withName('set radius', function (radius) {
            return _classPrivateFieldSet(this, _diameterWm, radius * 2);
        }.bind(this)));
    }
   
    get area () {
        return Math.PI * _classPrivateFieldGet(this, _radiusGetterWm)() ** 2;
    }
}

console.log(new Circle(10).area) // 78.52981633974483
