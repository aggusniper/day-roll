import React, { Component } from 'react';
import deleteBtn from '../assets/delete-button.png';

const Tasks = (props) => {
    const tasks = props.data.map((task, index) => {
        return (
            <div key={index} className="table__data">
                <div className="table__data--info label">
                    <p>{task.roll}</p>
                </div>
                <div className="table__data--time">
                    <p className="time">{task.time}</p>
                    <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" onClick={() => props.removeTask(index)} />
                    </button>
                </div>
            </div>
        )
    });

    return (
        <>{tasks}</>
    )
}


class Task extends Component {
    render() {
        const { data, removeTask } = this.props;

        return (
            <>
                <Tasks data={data} removeTask={removeTask} />
            </>
        )
    }
}

export default Task