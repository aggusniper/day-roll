//////////////////////////////////////////
////// DAY-ROLL APP
/////////////////////////////////////////
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">

      </div>
    )
  }
}

export default App



































// import React, { Component } from 'react';
// import Table1 from './components/Table1';
// import Form from './components/Form';

// class App extends Component {
//   state = {
//     characters: [],
//     characters: [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Denis',
//         job: 'Bartender',
//       },
//     ],
//   }

//   removeCharacter = (index) => {
//     const {characters} = this.state

//     this.setState({
//       characters: characters.filter((character, i) => {
//         return i !== index
//       }),
//     })
//   }

//   handleSubmit = (character) => {
//     this.setState({characters: [...this.state.characters, character]})
//   }

//   render() {  
//     // removeCharacter (props) {
//     //   state = {props};
//     //   this.state = this.state.characters.filter((character, i) => {
//     //     return i !== index;
//     //   });
//     // }
    
//     const { characters } = this.state
  

//     return(
//       <div className="container">
//         <h1>React Tutorial</h1>
//         <p>Add a character with a name and a job to the table.</p>
//         <Table1 characterData={characters} removeCharacter={this.removeCharacter} />
//         <h3>Add New</h3>
//         <Form handleSubmit={this.handleSubmit} />
//       </div>
//     )
//   }
// }


// export default App








































// import Navigation from  './components/Navigation';
// // import Header from './components/Header';
// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import LoggingButton from './components/Logginng';
// import TestComponent from './components/TestComponent';
// import StateAndLifecycle from './components/StateAndLifecycle';
// import Table from './components/Table';
// import TableHeader from './components/TableHeader';
// import TableBody from './components/TableBody';
// import Form from './components/Form';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types'

// class App extends Component {
//   state = {
//     characters: [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Denis',
//         job: 'Bartender',
//       },
//     ]
//   }

//   removeCharacter = (index) => {
//     const {characters} = this.state

//     this.setState({
//       characters: characters.filter((character, i) => {
//         return i !== index
//       }),
//     })
//   }

//   render() {
//     // const name = this.props.name;
//     // const onClick = (e) => {
//     //   e.preventDefault();
//     //   console.log('The component was clicked!');
//     // };

//     // const { characters } = this.state

//     return (
//       <div className="container">
//         {/* <Navigation />
//         <Navigation />
//         <Navigation />
//         <h1 style={data} onClick={onClick}>Hello, {name}</h1>

//         <Clock />
//         <Clock />

//         <Toggle />

//         <LoggingButton /> */}

//         {/* <TestComponent name={ 'alex' } />
//         <TestComponent name={ 'godson' } /> */}

//         {/* <StateAndLifecycle /> */}

//         {/* <Table /> */}

//         {/* <table className="table">
//           <TableHeader className="thead"/>
//           <TableBody className="tbody"/>
//         </table> */}

//         {/* <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
//         <Form /> */}


//       </div>
//     )
//   }
// }

// App.defaultProps = {
//   name: 'Aggu Sniper'
// }

// App.propTypes = {
//   name: PropTypes.string.isRequired
// };

// // Header.defaultProp = {
// //   id: 1,
// //   content: ' Is this your account',
// //   user: 'aggu'
// // }

// // App.propTypes = {
// //   id: PropTypes.number,
// //   content: PropTypes.content,
// //   user: PropTypes.user
// // }

// const data = {
//   color: '#fff',
//   backgroundColor: '#000',
//   marginTop: '1.5em',
//   padding: '.5em'
// }


// export default App



// // import Header from './components/Header'

// // function App() {
// //   return (
// //     <div className="container">
// //       <Header />
// //     </div>
// //   );
// // }


// // export default App;