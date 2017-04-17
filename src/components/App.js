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

  draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var first = this.state.coordinates[0];
    if (first) {
      ctx.beginPath();
      ctx.moveTo(parseInt(first.x), parseInt(first.y));
      this.state.coordinates.slice(1).forEach((coord) => {
        ctx.lineTo(parseInt(coord.x), parseInt(coord.y));
      })
      // ctx.lineTo(parseInt(first.x), parseInt(first.y));
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }
}

  render() {
    let areaDiv = <div></div>
    if (this.state.area === 0) {
      areaDiv = <div className="answer"></div>
    } else {
      areaDiv = <div className="answer">The Area of the Polygon is {this.state.area}</div>
    }
    return (
      <div className="App">
        <h1>Polygon Area Finder</h1>
        <h4>Add coordinates starting from top left and continuing clockwise</h4>
        <InputCoordinate onSubmit={ this.addCoordinate } />
        <ul className="coordinates">
          { this.displayCoordinates() }
        </ul>
        <button onClick={this.findArea}>Find Area</button>
        {areaDiv}
        {this.draw()}
      </div>
    );
  }
}

export default App;
