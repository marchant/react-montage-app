/**
 * @module ui/hello.reel
 */
var Component = require("montage/ui/component").Component;

if (!window.LGI) {
    window.LGI = {};
}

window.LGI.ReactHello = createReactClass({

    render: function () {
        return React.createElement('span', null, `Hello ${this.props.name}!`);
    }

});;

document.registerReact('react-hello', window.LGI.ReactHello);

/**
 * @class Hello
 * @extends Component
 */
exports.Hello = Component.specialize(/** @lends Hello# */ {
    
});
