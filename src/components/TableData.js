import React from 'react';

function TableData(props) {
  return (
    <tr>
      <td>{props.index}</td>
      <td><img src={props.user.picture.medium} alt="blank"></img></td>
      <td>{props.user.name.first}</td>
      <td>{props.user.name.last}</td>
      <td>{props.user.email}</td>
      <td>{props.user.dob.age}</td>
      <td>{props.user.gender}</td>
      <td>{props.user.location.state}</td>
    </tr>
  );
}

export default TableData;