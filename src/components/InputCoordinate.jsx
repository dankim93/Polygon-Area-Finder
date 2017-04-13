import React, { Component } from 'react';

class InputCoordinate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: "",
      y: ""
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
        <input className='input'
          type="text"
          name="x"
          value={ this.state.x }
          placeholder="x coord"
          onChange={ this.handleChange } />
        <input className='input'
          type="text"
          name="y"
          value={ this.state.y }
          placeholder="y coord"
          onChange={ this.handleChange } />
        <button onClick={ this.handleSubmit }>Add</button>
      </div>
    );
  }
}

export default InputCoordinate;
