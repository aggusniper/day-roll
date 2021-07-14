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
        
        // create a user alert⚠️ to help the user know what happening
        // if he / she doesn't fulfill all input fields

        // 1: to check the input field

        if (this.state.roll !== '' && this.state.time !== '') {
            this.setState({
                roll: '',
                time: ''
            });
            return this.props.handleChange(this.state);
        }
    } 

    render() {
        const { roll, time } = this.state;
        
        return (
            <form className="form">
                <label htmlFor="roll">Roll</label>
                <input 
                    enterKeyHint="next"
                    id="roll"
                    type="text" 
                    name="roll"
                    value={roll}
                    placeholder="e.g Write your roll"
                    className="input-roll"
                    onChange={this.handleRoll}
                    required
                    autoFocus
                />
                <label htmlFor="time">Time</label>
                <input 
                    enterKeyHint="done"
                    id="time"
                    type="time" 
                    name="roll"
                    value={time}
                    placeholder="e.g Time"
                    className="input-time"
                    onChange={this.handleTime}
                    required
                />
                <button type="submit" className="add-btn">
                    <article>
                        <img src={addBtn} alt="add button" onClick={this.submitForm} />
                        <p>Add</p>
                    </article>
                </button>
            </form>
        )
    }
}

export default Form;