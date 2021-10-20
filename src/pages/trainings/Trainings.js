import React, { useState } from 'react';
import DashboardLayout from '../../layouts/Dasboard_Layout';

const Trainings = () => {
  const [users] = useState([
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

  return (
    <div>
      <DashboardLayout>
        <section className="trainings-section">
          <div className="flex-between">
            <h5 className="fw-bold mb-3">Trainings</h5>

            <div className="d-flex flex-between">
              <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
              <h5 className="fw-bold text-green">
                Create New
              </h5>
            </div>
          </div>


          <div className='w-100 mt-3'>
            <div className="d-flex align-items-center w-100">
              <div className='search-bar-container'>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" className="form-control flex-grow-1" placeholder='Search' />
              </div>

              <h6 className="px-5 text-green fw-bold">Filters <i className="fa fa-cog ml-1" aria-hidden="true"></i></h6>
            </div>
          </div>

          <div className="mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Title</th>
                  <th scope="col">Overview</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(x => (
                    <tr key={x.id}>
                      <td>16/10/2021</td>
                      <td>Using marketing tools and social media to grow your business</td>
                      <td>Fusce tincidunt arcu sed sem blandit Fusce tincidunt arcu sed sem blanditFusce tincidunt arcu sed sem blandit......  </td>
                      <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button style={{borderColor: '#DFDFDF', backgroundColor: '#DFDFDF', borderWidth: 1}}  type="button" className="btn">Edit</button>
                        <button style={{borderColor: '#DFDFDF', borderWidth: 1}} type="button" className="btn btn-outline-white">Delete</button>
                      </div></td>
                    </tr>
                  ))
                }


              </tbody>
            </table>
          </div>

        </section>
      </DashboardLayout>
    </div>
  );
};

export default Trainings;
