import React, { Component } from 'react';

class InputCoordinate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="InputCoordinate">
        <input
          type="text"
          name="x"
          value={ this.state.x }
          onChange={ this.handleChange } />
        <input
          type="text"
          name="y"
          value={ this.state.y }
          onChange={ this.handleChange } />
        <button onClick={ this.handleSubmit }>Add</button>
      </div>
    );
  }
}

export default InputCoordinate;
