import React from "react"

export default class ExpenseForm extends React.Component{
  state = {
    description: '',
    note: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState (() => ({description}))
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState (() => ({note}))
  }

  render () {
    return (
      <div>
        <form>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input 
            type="number"
            placeholder="Amount"
          />
          <br />
          <textarea 
            type="text"
            placeholder="Enter your Note (Optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}