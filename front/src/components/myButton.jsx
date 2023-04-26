import React, { Component  } from "react";

export class MyButton extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    
    return (
      <div>
        <button type="button" onClick={this.handleClick} class="btn btn-warning mb-4">
          Warning
        </button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default MyButton;
