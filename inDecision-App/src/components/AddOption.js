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
                <p className='add-option-error'>{this.state.error && this.state.error}</p>
                <form 
                className='add-option'
                onSubmit= {this.onSubmitForm}
                >
                    <input 
                    className='add-option__input'
                    type= "text" 
                    name= "optionField"
                    ></input>
                    <button 
                    className='button'
                    type= "submit"
                    >
                    Add Option
                    </button>
                </form>
            </div>
        );
    }
}

export default AddOption