import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    
    state = {
      options: [],
      selectedOption: undefined
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
        const option = this.state.options[random];
        this.setState(() => ({selectedOption: option}))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption = (deleteOption) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => deleteOption !== option)})
      );
    }

    handleClearModal = () => {
        this.setState(() => ({selectedOption: undefined}))
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

            <OptionModal 
              selectedOption= {this.state.selectedOption}
              clearModal = {this.handleClearModal}
            />
    </div>
        );
    }
}

export default IndecisionApp;