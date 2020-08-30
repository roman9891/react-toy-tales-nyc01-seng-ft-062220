import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: ``,
    image: ``
  }

  nameChanger = e => {
    this.setState({
      name: e.target.value
    })
  }

  imageChanger = e => {
    this.setState({
      image: e.target.value
    })
  }

  submitHandler = e => {
    const toy = {
      name: this.state.name,
      image: this.state.image,
      likes: 0
    }
    
    e.preventDefault()
    this.postToys(toy)
  }

  postToys = toy => {
    fetch(`http://localhost:3000/toys`, {
      method: `POST`,
      headers: {
        "content-type": `application/json`,
        accept: `application/json`
      },
      body: JSON.stringify(toy)
    })
    .then(r => r.json())
    .then(() => {
      this.props.appHandler()
      this.setState({name: ``, image: ``})
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." onChange={this.nameChanger} value={this.state.name} className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." onChange={this.imageChanger} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
