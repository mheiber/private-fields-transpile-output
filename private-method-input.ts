class Component {
    constructor (props) {
        this.props = props;
    }
    #handleClick () {
        console.log(this.props.number)
    }
    pretendClick () {
        this.#handleClick();
        const handleClick = this.#handleClick;
        (function () {
            handleClick.call({props: {number: 2}})
        })();
    }
    render () {
        return {
            type: 'button',
            number: 3,
            onClick: this.#handleClick
        };
    }
}

const component = new Component({number: 1});
component.pretendClick();
component.render().onClick()
