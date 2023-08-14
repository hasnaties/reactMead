'use strict';

console.log('App is running.');

var details = {
    text: 'I built this app all by myself.',
    status: false
};

var toggleSwitch = function toggleSwitch() {
    details.status = !details.status;
    render();
};

var rootApp = document.getElementById('root');

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Toggle Visibility'
        ),
        details.status && React.createElement(
            'p',
            null,
            details.text
        ),
        React.createElement(
            'button',
            { onClick: toggleSwitch },
            details.status ? 'Hide' : 'show'
        )
    );

    ReactDOM.render(template, rootApp);
};

render();
