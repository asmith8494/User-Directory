import React from 'react';
import Table from 'react-bootstrap/Table';
import TableData from '../components/TableData';
import TableHead from '../components/TableHead';

function UserTable(props) {
  return(
    <Table striped bordered variant="dark">
          <TableHead />
          <tbody>
            {props.users.map((user, index) => (
              <TableData user={user} index={index} key={index} />
            ))}
          </tbody>
        </Table>
  );
}

export default UserTable;