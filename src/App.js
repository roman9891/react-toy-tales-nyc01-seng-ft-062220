import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'



class App extends React.Component{

  state = {
    display: false,
    data: []
  }

  fetchToys = () => {
    fetch(`http://localhost:3000/toys`)
    .then(r => r.json())
    .then(data => this.setState({data: data}))
  }

  componentDidMount() {this.fetchToys()}

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  appHandler = () => {
    this.fetchToys()
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm appHandler={this.appHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer appHandler={this.appHandler} toyData={this.state.data}/>
      </>
    );
  }

}

export default App;
