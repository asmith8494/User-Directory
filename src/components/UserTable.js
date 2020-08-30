import React from 'react';
import Table from 'react-bootstrap/Table';
import TableHead from '../components/TableHead';
import SortFilterNavbar from './SortFilterNavbar';
import TableBody from '../components/TableBody';
import API from '../utils/API';

const SortFilter = require('../utils/sortFilter');

class UserTable extends React.Component {
  
  state = {
    users: [],
    sortBy: "",
    filteredGender: "",
    filteredState: "",
  };

  componentDidMount() {
    API.getUsers()
    //.then(res => console.log(res.data.results))
    .then(res => this.setState({users: res.data.results}))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    
    const value = event.target.value;

    this.setState({filteredState: value});
  };

  handleFilterChange = event => {
    this.setState({ filteredGender: event});
  }

  handleSortChange = event => {
    this.setState({ sortBy: event});
  }

  render() {
    const userListToRender = SortFilter.sortFilter(this.state.users, this.state.filteredGender, this.state.filteredState, this.state.sortBy);

    return(
      <div>
        <SortFilterNavbar handleInputChange={this.handleInputChange} handleSortChange={this.handleSortChange} handleFilterChange={this.handleFilterChange}/>
        <Table striped bordered variant="dark">
          <TableHead />
              <TableBody users={userListToRender} />
        </Table>
      </div>
    );
  }
}

export default UserTable;