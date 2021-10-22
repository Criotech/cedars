import React from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';


const CreateUpdate = () => {
  const history = useHistory();

  return (
    <div>
      <DashboardLayout title='Trainings'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/trainings')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">Create New Update</h5>


            <div className='mt-5 px-5 az'>
              <form>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Title</label>
                  <input type="text" className="form-control" id="exampleInputtext1" />
                </div>
        
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">Details</label>
                  <textarea type="text" style={{ height: 200 }} className="form-control" id="exampleInputtext1" />
                </div>

              </form>
              <p className="fw-bold">Add cover</p>

              <div className="d-flex align-items-center">
                <div className="mr-2 fd-flex align-items-center justify-content-center" style={{backgroundColor: '#E7F9E9'}}>
                  <span style={{fontSize: 20}} className="material-icons-outlined">
                    image
                  </span>
                </div>
                <div>
                  <p>Please upload an image in JPG, JPEG or PNG format (not more than 1MB)</p>
                  <button style={{backgroundColor: '#E7F9E9', fontSize: 11}} className="btn">Chooose file</button>
                </div>
              </div>

              <div className="d-flex justify-content-center mt-5">
                <button style={{fontSize: 13}} className='btn bg-green text-white  px-5 py-2'>Publish</button>
              </div>
         
            </div>


          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateUpdate;
