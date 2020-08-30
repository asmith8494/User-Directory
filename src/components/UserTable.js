import React from 'react';
import Table from 'react-bootstrap/Table';
import TableData from '../components/TableData';
import TableHead from '../components/TableHead';

function UserTable(props) {
  console.log(props);
  return(
    <Table striped bordered>
          
          <tbody>
            {props.users.map((user, index) => (
              <TableData user={user} index={index} />
            ))}
          </tbody>
        </Table>
  );
}

export default UserTable;