import React from 'react';
import moment from 'moment';

const PCMS = ({users, handleSelectPCMIds, selectedCount}) => {
  return (
    <div className="users-list-container">
      <div className="top d-flex align-items-center">
        <i className="fa fa-trash" style={{ color: '#C7C7C7' }} aria-hidden="true"></i>
        <p className="mx-3 fw-bold"> {selectedCount} selected </p>
        <span className="badge bg-green text-white">{users.length}</span>
      </div>

      <div className="table-section">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">State code</th>
              <th scope="col">State of deployment</th>
              <th scope="col">Status</th>
              <th scope="col">Recent activity</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(x => (
                <tr key={x.id} className={x.active ? 'active pointer' : 'pointer'}>
                  <td><input onChange={() => handleSelectPCMIds(x.id)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></td>
                  <th  className="d-flex">{x.name}</th>
                  <td >{x.email}</td>
                  <td >{x.nysc_state_code}</td>
                  <td >Lagos</td>
                  <td >{x.status}</td>
                  <td >{moment (x.updated_at).fromNow ()}</td>
                </tr>
              ))
            }


          </tbody>
        </table>

      </div>

      <div className='footer'>
        <div className="d-flex align-items-center">
          <p className="mr-3">Rows per page 10 <i className="fa fa-caret-down" aria-hidden="true"></i></p>
          <p className="mr-3">1-5 of 13 </p>
          <h5 className="mr-3 fw-bold"><i className="fa fa-angle-left mr-2" aria-hidden="true"></i> <i className="fa fa-angle-right" aria-hidden="true"></i></h5>
        </div>

      </div>
    </div>

  );
};

export default PCMS;
