import React from 'react';


import TableData from '../components/TableData';

function TableBody(props) {
  return (
    <tbody>
        {props.users.map((user, index) => (
          <TableData user={user} index={index} key={index} />
        ))}
    </tbody>
  );
}

export default TableBody;