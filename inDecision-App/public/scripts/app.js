'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: 0
    };

    _this.addOne = _this.addOne.bind(_this);
    _this.subOne = _this.subOne.bind(_this);
    _this.resetCounter = _this.resetCounter.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.addOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.subOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.resetCounter },
          'reset'
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      try {
        var itemCount = parseInt(localStorage.getItem('count'), 10);
        console.log(itemCount);
        if (!isNaN(itemCount)) {
          this.setState(function () {
            return { count: itemCount };
          });
        }
      } catch (error) {
        console.log('componentDidMount Error: ', error);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
    }
  }, {
    key: 'addOne',
    value: function addOne() {

      this.setState(function (pervState) {
        return {
          count: pervState.count + 1
        };
      });
    }
  }, {
    key: 'subOne',
    value: function subOne() {
      this.setState(function (pervState) {
        return {
          count: pervState.count - 1
        };
      });
    }
  }, {
    key: 'resetCounter',
    value: function resetCounter() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('root'));

/* Old Non-React JSx code */

// let count = 0;

// const addOne = () => {
//   count++;
//   renderApp();
// };
// const subOne = () => {
//   count--;
//   renderApp();
// }
// const reset = () => {
//   count = 0;
//   renderApp();
// }


// const renderApp = () => {

//     let template = (
//       <div>
//           <h1>Counter</h1>
//           <p>{count}</p>

//           <button id='plusOne' onClick={addOne}>+1</button> 
//           <button id='minusOne' onClick={subOne}>-1</button>
//           <button id='reset' onClick={reset}>0</button>
//       </div>
//   );
// }
