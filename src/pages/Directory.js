import React, {Component} from 'react';
import API from '../utils/API';
import Container from 'react-bootstrap/Container';
import UserTable from '../components/UserTable';
class Directory extends Component {

  state = {
    name: "",
    role: "",
    manager: "",
    users: []
  };

  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({users: res.data.results}))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.users[0]);
    return (
      <Container>
        <UserTable users={this.state.users} />
      </Container>
    );
  }
}

export default Directory;