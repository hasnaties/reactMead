class IndecisionApp extends React.Component {
    
    constructor (props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        }
    }

    render (){
        return (
        <div>
            <Header />

            <Action 
              handleAction= {this.handleAction} 
              btnState= {this.state.options.length > 0}
            />

            <AddOption 
              handleAddOption= {this.handleAddOption}
            />

            <Options 
              optionsList= {this.state.options}
              removeAll= {this.handleDeleteOptions}
              removeOne= {this.handleDeleteOption}
            />
    </div>
        );
    }

    handleAddOption (option){

        if (!option) {
            return 'Invalid Input'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This one already exists.'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }

    handleAction (){
        const random = Math.floor(Math.random() * this.state.options.length);
        console.log (this.state.options[random]);
    }

    handleDeleteOptions (){
        this.setState(() => ({options: []}));
    }

    handleDeleteOption (deleteOption){
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => deleteOption !== option)})
      );
    }
}

const Header = () => {
    
    return (
        <h1>Indecision App</h1>
    );
};

const Action = (props) => {

        return (
            <div>
                <button 
                onClick= {props.handleAction}
                disabled= {!(props.btnState)}
                >What should I do?</button>
            </div>
        );
};

const Option = (props) => {
    
    return (
        <div>
            {props.option}
            <button 
              onClick= {() => {
                props.removeOne(props.option);
              }}>

              rmv
            </button>
        </div>
    );
}

const Options = (props) => {
    
    return (
        <div>
            <button onClick= {props.removeAll}>Remove All</button>
            <p>Options: </p>
            {props.optionsList.map((option, index) => {
                return (
                    <Option 
                      key= {index} 
                      option= {option}
                      removeOne= {props.removeOne}
                    />
                );
            })}
        </div>
    );
}

class AddOption extends React.Component {

    constructor (props){
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);

        this.state = {
            error: undefined
        }
    }

    render (){
        return (
            <div>
                {this.state.error && this.state.error}
                <form onSubmit= {this.onSubmitForm}>
                    <input type= "text" name= "optionField"></input>
                    <button type= "submit">Add</button>
                </form>
            </div>
        );
    }

    onSubmitForm (e){

        e.preventDefault();
        const option = e.target.elements.optionField.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));