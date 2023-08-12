'use strict';

console.log('App is running!');

var count = 0;

var addOne = function addOne() {
  count++;
  renderApp();
};
var subOne = function subOne() {
  count--;
  renderApp();
};
var reset = function reset() {
  count = 0;
  renderApp();
};

var renderApp = function renderApp() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Counter'
    ),
    React.createElement(
      'p',
      null,
      count
    ),
    React.createElement(
      'button',
      { id: 'plusOne', onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { id: 'minusOne', onClick: subOne },
      '-1'
    ),
    React.createElement(
      'button',
      { id: 'reset', onClick: reset },
      '0'
    )
  );

  var appRootTwo = document.getElementById('personal-info');
  ReactDOM.render(template, appRootTwo);
};

renderApp();
