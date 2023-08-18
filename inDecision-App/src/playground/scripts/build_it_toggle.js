class ToggleVis extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            details: 'I built this app all by myself.',
            visStatus: false
        };

        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    render (){
        return (
            <div>
                <h1>Toggle Visibility</h1>
                {this.state.visStatus && <p>{this.state.details}</p>}
                <button onClick={this.toggleSwitch}>{this.state.visStatus ? 'Hide' : 'show'}</button>
            </div>
        );
    }

    toggleSwitch (){
        this.setState((prevState) => {
            return {
                visStatus: !prevState.visStatus
            }
        })
    }
}

ReactDOM.render(<ToggleVis />, document.getElementById('root'));


// console.log('App is running.');

// const details = {
//     text: 'I built this app all by myself.',
//     status: false
// }

// const toggleSwitch = () => {
//    details.status = !details.status;
//    render();
// }

// const rootApp = document.getElementById('root');

// const render = () => {
    
//     const template = (
//         <div>
//             <h1>Toggle Visibility</h1>
//             {details.status && <p>{details.text}</p>}
//             <button onClick={toggleSwitch}>{details.status ? 'Hide' : 'show'}</button>
//     </div>
//     );

//     ReactDOM.render(template, rootApp);
// }

// render();