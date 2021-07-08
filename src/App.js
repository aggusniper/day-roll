/////////////////////////////////////////////////////
////////  Day Roll new one more modern //////////////
/////////////////////////////////////////////////////
import React, { Component } from 'react';
import Form from './comps/Form';
import Task from './comps/Tasks';
import Logo from './assets/day-roll-logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: []
    });
    
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(key) {
    const { data } = this.state;

    this.setState({
      data: data.filter((task, index) => {
        return key !== index;
      })
    })
  }

  handleChange = (userData) => {
    // const { data } = this.state;

    // this.setState({
    //   data: [...data, userData],
    // })

    this.setState(state => ({
      data: [...state.data, userData]
    }))
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="row">
            <div className="row__container">
              <div className="heading-group">
                <div className="logo-box">
                  <img src={Logo} alt="Logo" />
                </div>
                <h1 className="heading">Write your day-roll</h1>
              </div>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="row">
            <div className="row__container">
              <div className="row__container--form">
                <Form handleChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row__container">
              <div className="row__container--table">
                <div className="table table__title">
                  <p>Roll</p>
                  <p>Time</p>
                </div>
                <div className="table table__body">
                  {/* <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept sdjfadfjad</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept sdjfadfjad</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept sdjfadfjad</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div>

                  <div className="table__data">
                    <div className="table__data--info label">
                      <p>Learning new JavaScript concept</p>
                    </div>
                    <div className="table__data--time">
                      <p class="time">12:00</p>
                      <button className="delete-btn">
                        <img src={deleteBtn} alt="delete button" />
                      </button>
                    </div>
                  </div> */}

                  <Task data={this.state.data} removeTask={this.removeTask} />

                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="row">
            <div className="row__container">
              <div className="row__container--footer">
                <p>
                  <span className="a-style">A</span>
                  <span className="signature">Design and Implemented by aggusniper</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
