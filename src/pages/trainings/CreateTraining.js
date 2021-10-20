import React from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';


const CreateTraining = () => {
  const history = useHistory();
  return (
    <div>
      <DashboardLayout title='Trainings'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/trainings')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">Create New Training</h5>
        

            {/* <div className='mt-5 px-5'>
              <form>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Title of Training</label>
                  <input type="text" className="form-control" id="exampleInputtext1" />
                </div>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">name of Tutor</label>
                  <input type="text" className="form-control" id="exampleInputtext1" />
                </div>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
                  <input type="text" className="form-control" id="exampleInputtext1" />
                </div>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">Overview</label>
                  <textarea type="text" style={{height: 200}} className="form-control" id="exampleInputtext1" />
                </div>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">URL to Video</label>
                  <input type="text" className="form-control" id="exampleInputtext1" />
                </div>
        
              </form>
              <div className='d-flex justify-content-end'>
                <button style={{marginTop: -10}} className="btn bg-green text-white px-5 py-2 fw-bold">
                                Next
                </button>
              </div>

            </div> */}

            <div className='mt-5 px-5'>
              <div className='az'>
                <div className='upload-file-container'>
                  <div className="pointer d-flex flex-column align-items-center"><i className="fa fa-upload" aria-hidden="true"></i>
                    <p className='text-center mt-4'>Drag and drop a file, or Browse</p>
                  </div>
                </div>

                <div className='mt-3'>
                  <div className='flex-between py-2'>
                    <p className='fw-bold'>CreateAGMB-Template.pdf</p>
                    <button style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
                      <i className="fa fa-close" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className='flex-between py-2'>
                    <p className='fw-bold'>CreateAGMB-Template.pdf</p>
                    <button style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
                      <i className="fa fa-close" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <button className="btn bg-green text-white px-4 py-2 float-end mt-5">
                Ok, Publish Training
                </button>
              </div>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateTraining;
