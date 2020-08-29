import React, {Component} from 'react';

class Directory extends Component {

  state = {
    name: "",
    role: "",
    manager: "",
    user: []
  };

  render() {
    return (
      <span>{this.state.user}</span>
    );
  }
}

export default Directory;