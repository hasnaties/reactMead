console.log('App is running.');

const details = {
    text: 'I built this app all by myself.',
    status: false
}

const toggleSwitch = () => {
   details.status = !details.status;
   render();
}

const rootApp = document.getElementById('root');

const render = () => {
    
    const template = (
        <div>
            <h1>Toggle Visibility</h1>
            {details.status && <p>{details.text}</p>}
            <button onClick={toggleSwitch}>{details.status ? 'Hide' : 'show'}</button>
    </div>
    );

    ReactDOM.render(template, rootApp);
}

render();