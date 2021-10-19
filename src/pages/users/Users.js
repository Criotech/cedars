import React, { useState } from 'react';
import DashboardLayout from '../../layouts/Dasboard_Layout';


const Users = () => {
  const [users, selectUser] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
    { id: 7, active: false }
  ]);

  const handleCheck = (x) => {
    let newArr = users;
    newArr[x - 1].active = !newArr[x - 1].active;
    selectUser([...newArr]);
  };

  return (
    <div>
      <DashboardLayout>
        <section className="users-section">
          <div className="flex-between">
            <h5 className="fw-bold mb-3">Audience reach</h5>
            <button className="btn bg-green text-white">
                            Add
            </button>
          </div>

          <div className="users-list-container">
            <div className="top d-flex align-items-center">
              <i className="fa fa-trash" style={{ color: '#C7C7C7' }} aria-hidden="true"></i>
              <p className="mx-3 fw-bold"> 0 selected </p>
              <span className="badge bg-green text-white">0</span>
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
                      <tr key={x.id} className={x.active?'active':''}>
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

          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default Users;
