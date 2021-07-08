import React, { Component } from 'react';
import addBtn from '../assets/add-button.png';

class Form extends Component {
    constructor(props) {
        super(props);
        const initialState = {
            roll: '',
            time: '',
        }

        this.state = initialState;

        this.handleRoll = this.handleRoll.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleRoll = (event) => {        
        this.setState({
            roll: event.target.value,
        });
    }

    handleTime = (event) => {        
        this.setState({
            time: event.target.value,
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        return this.props.handleChange(this.state);
        this.setState({
            roll: '',
            time: ''
        });
    } 

    render() {
        const { roll, time } = this.state;

        return (
            <form className="form">
                <input 
                    id="roll"
                    type="text" 
                    name="roll"
                    value={roll}
                    placeholder="e.g Write your roll"
                    className="input-roll"
                    onChange={this.handleRoll}
                />
                <input 
                    id="time"
                    type="text" 
                    name="roll"
                    value={time}
                    placeholder="e.g Time"
                    className="input-time"
                    onChange={this.handleTime}
                />
                <button type="submit" className="add-btn">
                    <img src={addBtn} alt="add button" onClick={this.submitForm} />
                    <p>Add</p>
                </button>
            </form>
        )
    }
}

export default Form;