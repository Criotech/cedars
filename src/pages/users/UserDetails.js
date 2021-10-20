import React from 'react';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useHistory } from 'react-router-dom';
import { Card } from '../../components/Card';


const UserDetails = () => {
  const history = useHistory();


  return (
    <div>
      <DashboardLayout title='Users'>
        <section className="user-section">
          <div className='d-flex justify-content-between align-items-center'>
            <h4><i onClick={() => history.push('/users')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <button style={{ marginTop: -10 }} className="btn bg-green text-white px-3 py-2 fw-bold mt-2">
                            Deactivate user
            </button>
          </div>

          <div className="flex-between mt-3">
            <div className="d-flex align-items-center">
              <div style={{ height: 100, width: 100 }} className="circle-big mt-3 mr-2">
                <img src="https://cdn.truelancer.com/upload-full/701651-vector-cartoon-portrait-avatar-illustration-fanart.jpg" width="100%" height="100%" style={{ borderRadius: '50%' }} alt="Avatar" />
              </div>
              <div className="d-flex flex-column align-items-baseline">
                <h5 className="fw-bold mt-2">Chen Simmons</h5>
                <p style={{ color: '#17161699', marginTop: 10 }}>State code: LA/21B/1098</p>
                <p style={{ color: '#17161699' }}>Part of DO_DEEL CDS since  October, 2021</p>
              </div>
            </div>
            <div>
              <p className="text-primary fw-bold">chen.simmons@gmail.com</p>
              <p>08163426709</p>
            </div>
          </div>

          <div className="mt-4">
            <Card>
              <p className="fw-bold text-green">Trainings completed</p>
              <div className="mt-2">
                {
                  [1,2,3,4,5,6].map((x,i)=>(
                    <div key={i} className="training-list-item">
                      <div className="d-flex">
                        <i className="fa fa-tag" aria-hidden="true"></i>
                        <p>Using marketing tools and social media to grow your business</p>
                      </div>
                      <div>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      </div>
                    </div>
                  ))
                }
              </div>
            </Card>
          </div>

          <div className='mt-4'>
            <Card>
              <p className="fw-bold text-green">Onboarded businesses</p>
            
              <div className="mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Time stamp</th>
                      <th scope="col">Business name</th>
                      <th scope="col">Email address</th>
                      <th scope="col">Owner’s name</th>
                      <th scope="col">Phone number</th>
                      <th scope="col">Status</th>
                      <th scope="col">Comment</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      [1,2,3,4,5,6].map((x,i) => (
                        <tr key={i}>
                          <td>{x}</td>
                          <td>14/12/2021 11:01:13</td>
                          <td>Samuel hub</td>
                          <td>samuelhub@gmail.com</td>
                          <td>Samuel Akintunde</td>
                          <td>08167526178</td>
                          <td><p className="badge bg-green text-white">verified</p></td>
                          <td>MTG added as manager</td>
                        </tr>
                      ))
                    }


                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default UserDetails;
