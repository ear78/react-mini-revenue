import React from 'react';

const totalUsers = (props) => {
    return (
        <table className="column small-12 medium-6 hover">
            <thead>
              <tr>
                <th >Total Users</th>
                <th >Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {props.users}</td>
                <td> {props.date}
                </td>
              </tr>
          </tbody>
        </table>
    )
}

export default totalUsers;
