import React from 'react';

const revenueTable = (props) => {
    return (
        <table className="column small-12 medium-6 hover">
            <thead>
              <tr>
                <th>{props.title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$ {props.rev}</td>
              </tr>
          </tbody>
        </table>
    )
}

export default revenueTable;
