import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown, Form, FormControl} from 'react-bootstrap';


function SortFilterNavbar(props) {
  return (
    <Navbar bg="dark" expand="lg">
      <NavDropdown title="Sort by" id="SortDropdown" onSelect={props.handleSortChange}>
        <NavDropdown.Item eventKey='none'>None</NavDropdown.Item>
        <NavDropdown.Item eventKey='first'>First Name</NavDropdown.Item>
        <NavDropdown.Item eventKey='last'>Last Name</NavDropdown.Item>
        <NavDropdown.Item eventKey='state'>State</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Gender Filter" id="GenderFilter" onSelect={props.handleFilterChange}>
        <NavDropdown.Item eventKey='none'>None</NavDropdown.Item>
        <NavDropdown.Item eventKey='male'>Male</NavDropdown.Item>
        <NavDropdown.Item eventKey='female'>Female</NavDropdown.Item>
      </NavDropdown>

      <Form inline className="ml-auto">
        <FormControl type="text" placeholder="Filter by State" onChange={props.handleInputChange}/>
      </Form>
    </Navbar>
  );
}

export default SortFilterNavbar;