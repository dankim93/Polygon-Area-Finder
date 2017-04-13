import React, { Component } from 'react';
import './App.css';
import InputCoordinate from './InputCoordinate';


class App extends Component {
  constructor() {
    super();

    this.state = {
      coordinates: [],
      area: 0
    };

    this.addCoordinate = this.addCoordinate.bind(this);
    this.findArea = this.findArea.bind(this);
  }

  addCoordinate(coordinate) {
    const newCoordinates = this.state.coordinates.slice();
    newCoordinates.push(coordinate);
    this.setState({
      coordinates: newCoordinates
    });
  }

  displayCoordinates() {
    return this.state.coordinates.map( (el, idx) => (
      <li key={idx}>
        x: { el.x } y: { el.y }
      </li>

    ));
  }

  findArea() {
    let area = 0;
    let coord = this.state.coordinates;

    if (coord.length > 2) {
      for (let i = 0; i < this.state.coordinates.length - 1; i++) {
        area += parseInt(coord[i]['x']) * parseInt(coord[i+1]['y']) - parseInt(coord[i+1]['x']) * parseInt(coord[i]['y']);
      }
      this.setState({
        area: Math.abs(area) / 2
      });
    }
  }

  render() {
    let areaDiv = <div></div>
    if (this.state.area === 0) {
      areaDiv = <div></div>
    } else {
      areaDiv = <div>The Area of the Polygon is {this.state.area}</div>
    }
    return (
      <div className="App">
        <h2>Add Coordinates:</h2>
        <h5>Add coordinates starting from top left and continuing clockwise</h5>
        <InputCoordinate onSubmit={ this.addCoordinate } />
        <ul className="coordinates">
          { this.displayCoordinates() }
        </ul>
        <button onClick={this.findArea}>Find Area</button>
        {areaDiv}
      </div>
    );
  }
}

export default App;
