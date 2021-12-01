import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import swal from 'sweetalert';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addJob, updateJob } from '../../redux/actions/jobActions';

const CreateJob = ({ location }) => {
  let data = (location.state) ? location.state.job : null;

  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [update, setUpdate] = useState({
    title: (data) ? data.title : '',
    description: (data) ? data.description : '', 
    role: (data) ? data.role : '', 
    closing_date: (data) ? moment(data.closing_date).format('YYYY-MM-DDTHH:mm') : '', 
    location: (data) ? data.location : '',
    type: (data) ? data.type : '', 
    apply_link: (data) ? data.apply_link : '', 
    rate: (data) ? data.rate : '', 
    employer_name: (data) ? data.employer.name : '',
    employer_location: (data) ? data.employer.location : '', 
    employer_email: (data) ? data.employer.email : ''
  });
  const [image, setImage] = useState('');
  const [perks, setPerks] = useState((data)?data.perks:[]);
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      setImage(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };


  const alert = useSelector(({ alert }) => alert);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);


  useEffect(() => {
    if (alert.message) {
      addToast(alert.message, { appearance: 'error' });
      swal({
        title: 'Error!',
        text: alert.message,
        icon: 'error',
        button: 'close!',
      });
    }
    if (alert.success) {
      addToast(alert.success, { appearance: 'success' });
      swal({
        title: 'Success!',
        text: alert.success,
        icon: 'success',
        button: 'close!',
      });
      history.push('/updates');
    }
  }, [alert.message, alert.success, addToast, history]);

  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addJob({ ...update, perks, image: image }));
  };


  const handleUpdate = async (e) => {
    e.preventDefault();

    await dispatch(updateJob({ ...update, perks, image: image }, data.id));
  };

  const removeFile = () => {
    setImage('');
  };

  return (
    <div>
      <DashboardLayout title='Updates'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/updates')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">{data?'Update New Job':'Create New Job'}</h5>


            <div className='mt-5 px-5 az'>
              <form>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Title</label>
                  <input type="text" className="form-control" name='title' value={update.title} onChange={handleChange} />
                </div>

                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Employer name</label>
                  <input type="text" className="form-control" name='employer_name' value={update.employer_name} onChange={handleChange} />
                </div>

                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Employer location</label>
                  <input type="text" className="form-control" name='employer_location' value={update.employer_location} onChange={handleChange} />
                </div>

                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Employer email</label>
                  <input type="email" className="form-control" name='employer_email' value={update.employer_email} onChange={handleChange} />
                </div>


                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Application link</label>
                  <input type="text" className="form-control" name='apply_link' value={update.apply_link} onChange={handleChange} />
                </div>

                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Location</label>
                  <input type="text" className="form-control" name='location' value={update.location} onChange={handleChange} />
                </div>

                <div className='row'>
                  <div className="mb-4 input-family col-md-6">
                    <label htmlFor="exampleInputPassword1" className="label">Job role</label>
                    <input type="text" className="form-control" name='role' value={update.role} onChange={handleChange} />
                  </div>

                  <div className="mb-4 input-family col-md-6">
                    <label htmlFor="exampleInputPassword1" className="label">Category</label>
                    <input type="text" className="form-control" name='type' value={update.type} onChange={handleChange} />
                  </div>
                </div>

                <div className='row'>

                  <div className="mb-4 input-family col-md-6">
                    <label htmlFor="exampleInputPassword1" className="label">Rate</label>
                    <input type="text" className="form-control" name='rate' value={update.rate} onChange={handleChange} />
                  </div>

                  <div className="mb-4 input-family col-md-6">
                    <label htmlFor="exampleInputtext1" className="label">Closing Time</label>
                    <input type="date" name='closing_date' className="form-control" onChange={handleChange} value={update.closing_date} />
                  </div>
                </div>

                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Tags</label>
                  <ReactTagInput
                    tags={perks}
                    onChange={(newTags) => setPerks(newTags)}
                  />
                </div>

                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">Description</label>
                  <textarea type="text" style={{ height: 200 }} className="form-control" name='description' value={update.description} onChange={handleChange} />
                </div>

              </form>
              <input
                style={{ display: 'none' }}
                // accept=".zip,.rar"
                ref={inputFile}
                onChange={handleFileUpload}
                type="file"
              />
              <p className="fw-bold">Add Logo</p>

              <div className="d-flex align-items-center">
                <div className="mr-2 fd-flex align-items-center justify-content-center" style={{ backgroundColor: '#E7F9E9' }}>
                  <span style={{ fontSize: 20 }} className="material-icons-outlined">
                                        image
                  </span>
                </div>
                <div>
                  <p>Please upload an image in JPG, JPEG or PNG format (not more than 1MB)</p>
                  <button style={{ backgroundColor: '#E7F9E9', fontSize: 11 }} onClick={onButtonClick} className="btn">Chooose file</button>
                </div>
              </div>

              {
                image &&
                                <div key={image.path} className='flex-between py-2'>
                                  <p className='fw-bold'>{image.name} - {image.size} bytes</p>
                                  <button onClick={removeFile} style={{ border: '1px solid #D5D8DF', fontSize: 12 }} className='btn'>
                                    <i className="fa fa-close" aria-hidden="true"></i>
                                  </button>
                                </div>
              }

              <div className="d-flex justify-content-center mt-5">
                {
                  data ?
                    <button style={{ fontSize: 13 }} onClick={handleUpdate} className='btn bg-green text-white  px-5 py-2'>{loadingReducer.loading ? 'Loading...' : 'Publish'}</button>
                    :
                    <button style={{ fontSize: 13 }} onClick={handleSubmit} className='btn bg-green text-white  px-5 py-2'>{loadingReducer.loading ? 'Loading...' : 'Publish'}</button>
                }
              </div>

            </div>


          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateJob;
