import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

const styles={
  color: "lightgrey"
}

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand  style={styles}>Employee Directory</Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;