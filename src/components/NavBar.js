import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Form, Button, FormControl, Dropdown} from 'react-bootstrap';

const styles={
  color: "lightgrey"
}

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand  style={styles}>Employee Directory</Navbar.Brand>
      <NavDropdown title="Sort by" id="SortDropdown">
        <NavDropdown.Item>First Name</NavDropdown.Item>
        <NavDropdown.Item>Last Name</NavDropdown.Item>
        <NavDropdown.Item>State</NavDropdown.Item>
      </NavDropdown>

      <Dropdown>
        <Dropdown.Toggle variant="dark" id="LocationFilter">
          State Filter
        </Dropdown.Toggle>

        <Dropdown.Menu style={{height: '150px', overflowY: 'scroll'}}>
          {
            unitedStatesList.map(uSState => (
              <Dropdown.Item key={uSState}>
                {uSState}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>

      <NavDropdown title="Gender Filter" id="GenderFilter">

      </NavDropdown>

      <Form inline className="ml-auto">
        <FormControl type="text" placeholder="Filter by age" />
        <Button variant="outline-success">Filter</Button>
      </Form>
    </Navbar>
  );
}

const unitedStatesList = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "IdahoI",
  "llinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
]


export default NavBar;