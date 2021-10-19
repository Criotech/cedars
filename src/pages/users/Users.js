import React, { useState } from 'react';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useHistory } from 'react-router-dom';

const Users = () => {
  const history = useHistory();
  const [users, selectUser] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
    { id: 7, active: false },
    { id: 8, active: false },
    { id: 9, active: false },
    { id: 10, active: false },
  ]);
  const [selectedNo, countSelected] = useState(0);

  const handleCheck = (x) => {
    let newArr = users;
    newArr[x - 1].active = !newArr[x - 1].active;
    if (newArr[x - 1].active===true) {
      countSelected(selectedNo+1);
    } else {
      countSelected(selectedNo-1);
    }
    selectUser([...newArr]);
  };

  return (
    <div>
      <DashboardLayout>
        <section className="users-section">
          <div className="flex-between">
            <h5 className="fw-bold mb-3">Audience reach</h5>
            <button onClick={()=>history.push('/users/add')} className="btn bg-green text-white">
              Add
            </button>
          </div>

          <div className="users-list-container">
            <div className="top d-flex align-items-center">
              <i className="fa fa-trash" style={{ color: '#C7C7C7' }} aria-hidden="true"></i>
              <p className="mx-3 fw-bold"> {selectedNo} selected </p>
              <span className="badge bg-green text-white">{selectedNo}</span>
            </div>

            <div className="table-section">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">State code</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">No. of trainings attended</th>
                    <th scope="col">Recent activity</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map(x => (
                      <tr onClick={()=>history.push('/users/user')} key={x.id} className={x.active ? 'active pointer' : 'pointer'}>
                        <td><input onChange={() => handleCheck(x.id)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></td>
                        <th className="d-flex"><div className="circle"><img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="100%" height="100%" style={{ borderRadius: '50%' }} alt="Avatar" /></div>Chen Simmons</th>
                        <td>chensimmons@gmail.com</td>
                        <td>LA/20B/1089</td>
                        <td>08023445560</td>
                        <td>6</td>
                        <td>5 Minutes ago</td>
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
        </section>
      </DashboardLayout>
    </div>
  );
};

export default Users;
