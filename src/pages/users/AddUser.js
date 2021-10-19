import React from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';


const AddUser = () => {
  const history = useHistory();
  return (
    <div>
      <DashboardLayout>
        <section className="add-user-section">
          <div>
            <h4><i onClick={() => history.push('/users')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <div className="form-outer-container">
              <div className='header d-flex'>
                <div className="circle-big mr-2">
                  <img src="https://cdn.truelancer.com/upload-full/701651-vector-cartoon-portrait-avatar-illustration-fanart.jpg" width="100%" height="100%" style={{ borderRadius: '50%' }} alt="Avatar" />
                </div>
                <div>
                  <button className="btn btn-outline border-green text-green mt-2 fw-bold">
                                        Upload Avatar
                  </button>
                  <p className="mt-2 fw-bold">Recommended dimensions: 200x200, maximum file size: 2MB</p>
                </div>
              </div>

              <div className="form-container">
                <form>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputPassword1" className="label">Full name</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputPassword1" className="label">Email address</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputPassword1" className="label">State of deployment</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputPassword1" className="label">Call up number</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputPassword1" className="label">State code</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputPassword1" className="label">Phone number</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                </form>

              </div>
              <button style={{marginTop: -10}} className="btn bg-green text-white px-5 py-2 fw-bold">
                                Save
              </button>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default AddUser;
