import React from 'react';

function TableData(props) {
  return (
    <tr key={props.user.id.value}>
      <td>{props.index}</td>
      <td><img src={props.user.picture.medium} alt="No image"></img></td>
      <td>{props.user.name.first}</td>
      <td>{props.user.name.last}</td>
      <td>{props.user.email}</td>
    </tr>
  );
}

export default TableData;