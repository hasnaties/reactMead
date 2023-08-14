let count = 0;

const addOne = () => {
  count++;
  renderApp();
};
const subOne = () => {
  count--;
  renderApp();
}
const reset = () => {
  count = 0;
  renderApp();
}


const renderApp = () => {

    let template = (
      <div>
          <h1>Counter</h1>
          <p>{count}</p>
  
          <button id='plusOne' onClick={addOne}>+1</button> 
          <button id='minusOne' onClick={subOne}>-1</button>
          <button id='reset' onClick={reset}>0</button>
      </div>
  );
}
