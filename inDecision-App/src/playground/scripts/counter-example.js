class Counter extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      count: 0
    }

    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  render (){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick= {this.addOne}>+1</button>
        <button onClick= {this.subOne}>-1</button>
        <button onClick= {this.resetCounter}>reset</button>
      </div>
    );
  }

  componentDidMount (){
    	
    try {
      const itemCount = parseInt(localStorage.getItem('count'), 10);
      console.log(itemCount);
      if (!isNaN(itemCount)) {
        this.setState(() => ({count: itemCount}));
      }

    } catch (error) {
      console.log('componentDidMount Error: ', error);
    }
  }

  componentDidUpdate (prevProps, prevState){

    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  addOne (){

    this.setState((pervState) => {
      return {
        count: pervState.count + 1
      };
    })
  }

  subOne (){
    this.setState((pervState) => {
      return {
        count: pervState.count - 1
      };
    });
  }
  
  resetCounter (){
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));


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
