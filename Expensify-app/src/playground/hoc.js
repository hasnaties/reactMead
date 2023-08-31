import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    {props.isAuthenticated ? <p>Welcome!</p> : <p>Please login!</p>}
  </div>
);

const withInfo = (WrappedComponent) => {
  return (props) => (
    <WrappedComponent {...props}/>
  );
}

const IsAuth = withInfo(Info)

ReactDOM.render(<IsAuth isAuthenticated= {false}/>, document.getElementById('root'))