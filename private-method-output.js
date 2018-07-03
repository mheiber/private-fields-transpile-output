// method output
// > This is likely to evolve as we get closer to implementation
// and discuss more with the team implementing for Babel

// only generated if unbound version needed
const _handleClickWm = new WeakMap();
const _handleClickBoundWm = new WeakMap();
function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver); }
function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } privateMap.set(receiver, value); return value; }

class Component {
    constructor (props) {
        this.props = props
        const handleClick = function () {
            console.log(this.props.number);
        };
        _classPrivateFieldSet(this, _handleClickWm, handleClick);
        // for when the method is called with `this`
        _classPrivateFieldSet(this, _handleClickBoundWm, handleClick.bind(this));
    }
    pretendClick () {
        // logs '1'
        _classPrivateFieldGet(this, _handleClickBoundWm)();
        const handleClick = _classPrivateFieldGet(this, _handleClickWm);
        (function () {
            // logs '2'
            handleClick.call({props: {number: 2}});
        })();
    }
    render () {
        return {
            type: 'button',
            props: {
                number: 3
            },
            // logs '3'
            onClick: _classPrivateFieldGet(this, _handleClickWm)
        };
    }
}

const component = new Component({number: 1});
component.pretendClick();
component.render().onClick()
