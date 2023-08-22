import React from 'react';

class AddOption extends React.Component {

    state = {
        error: undefined
    }

    onSubmitForm = (e) => {

        e.preventDefault();
        const option = e.target.elements.optionField.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.optionField.value = '';
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
}

export default AddOption