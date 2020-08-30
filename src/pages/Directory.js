import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import UserTable from '../components/UserTable';
import NavBar from '../components/NavBar';

class Directory extends Component {

  render() {
    return (
      <div>
        <Container>
          <NavBar />
          <UserTable />
        </Container>
      </div>
    );
  }
}

export default Directory;