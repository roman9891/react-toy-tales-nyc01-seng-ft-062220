import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {
  
  renderToyCards = () => this.props.toyData.map(toy => <ToyCard key={toy.id} toy={toy} appHandler={this.props.appHandler}/>)

  render() {
    return(
      <div id="toy-collection">
        {this.renderToyCards()}
      </div>
    );
  } 
}

export default ToyContainer;
