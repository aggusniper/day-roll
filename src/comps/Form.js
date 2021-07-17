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

    // Try to make the Enter key work as well as stopping the page to auto reload
    // handleEnterEvent = (event) => {
    //     document.addEventListener('keyup', event => {
    //         window.reload();
    //         if (event.keyCode === 13) {
    //             console.log('Enter key on ending process');
    //         }
    //     })
    // }
    

    submitForm = (event) => {
        event.preventDefault();

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
                    placeholder='hh:mm' 
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