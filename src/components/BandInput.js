import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    };
  };

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });

    this.setState({
      text: ""
    });

  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Band name</label>
          <input type="text" value={this.state.text} onChange={event => this.handleChange(event)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
