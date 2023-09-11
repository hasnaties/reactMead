import React from 'react';
import ReactDOM from 'react-dom'

const Info = ({isAuthenticated}) => (
  <div>
    {isAuthenticated ? <p>Welcome!</p> : <p>Please login!</p>}
  </div>
);

const withInfo = (WrappedComponent) => {
  return (props) => (
    <WrappedComponent {...props}/>
  );
}

const IsAuth = withInfo(Info)

ReactDOM.render(<IsAuth isAuthenticated= {true}/>, document.getElementById('root'))