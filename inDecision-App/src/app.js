class IndecisionApp extends React.Component {
    
    render(){

        const options = [1, 2, 4]
        return (
        <div>
            <Header />
            <AddOption />
            <Options optionsList = {options}/>
    </div>
        );
    }
}

class Header extends React.Component {
    
    render(){
        return (
            <h1>Indecision App</h1>
        );
    }
}

class Option extends React.Component {
    
    render() { 
        return (
            <div>
                <p> {this.props.option} </p>
            </div>
        );
    }
}

class Options extends React.Component {
    
    render (){
        return (
            <div>
                <button onClick= {this.removeAll}>Remove All</button>
                <p>Options: </p>
                {this.props.optionsList.map((option, index) => {
                    return <Option  key= {index} option= {option}/>
                })}
            </div>
        );
    }

    removeAll (){
        alert('Removed all.')
    }
}

class AddOption extends React.Component {

    render (){
        return (
            <div>
                <form onSubmit= {this.onSubmitForm}>
                    <input type= "text" name= "addOption"></input>
                    <button type= "submit">Add</button>
                </form>
            </div>
        );
    }

    onSubmitForm (e){

        e.preventDefault();
        const option = e.target.elements.addOption.value.trim();

        if (option) {
            return alert(option);
        }
        return;
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));