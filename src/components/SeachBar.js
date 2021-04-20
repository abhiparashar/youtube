import React, { Component } from "react";

class SeachBar extends Component {
  state = { term: "" };
  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e)=>{
        e.preventDefault()
      this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Youtube Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SeachBar;
