import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends React.Component {
    
    state = {
      options: []
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Invalid Input'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This one already exists.'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }

    handleAction = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        console.log (this.state.options[random]);
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption = (deleteOption) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => deleteOption !== option)})
      );
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
}

export default IndecisionApp;