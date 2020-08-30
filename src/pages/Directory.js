import React, {Component} from 'react';
import API from '../utils/API';
import Container from 'react-bootstrap/Container';
import UserTable from '../components/UserTable';
import NavBar from '../components/NavBar';

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
    return (
      <div>
        <Container>
          <NavBar />
          <UserTable users={this.state.users} />
        </Container>
      </div>
    );
  }
}

export default Directory;