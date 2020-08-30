import React, { Component } from 'react';

class ToyCard extends Component {
  clickHandler = (e) => {
    if (e.target.matches(`.like-btn`)) {
      this.patchToy()
    }
    if (e.target.matches(`.del-btn`)) {
      this.deleteToy()
    }
  }

  patchToy = () => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: `PATCH`,
      headers: {
        "content-type": `application/json`,
        accept: `application/json`
      },
      body: JSON.stringify({likes: this.props.toy.likes + 1})
    })
    .then(r => r.json())
    .then(this.props.appHandler())
  }

  deleteToy = () => {
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: `DELETE`,
      headers: {"content-type": `application/json`}
    })
    .then(this.props.appHandler())
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={this.clickHandler} className="like-btn">Like {'<3'}</button>
        <button onClick={this.clickHandler} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
