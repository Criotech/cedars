import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import '@pathofdev/react-tag-input/build/index.css';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { createAnnoucement } from '../../redux/actions/annoucement';
import { states } from '../../utils/states';

const CreateNotifiaction = ({ location }) => {
  let data = (location.state) ? location.state.job : null;

  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [update, setUpdate] = useState({
    title: (data) ? data.title : '',
    state_code: (data) ? data.role : '', 
    content: (data) ? data.description : '', 
  });


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

    await dispatch(createAnnoucement({ ...update }));
  };



  return (
    <div>
      <DashboardLayout title='Updates'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/updates')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">Create Notification</h5>


            <div className='mt-5 px-5 az'>
              <form>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Title</label>
                  <input type="text" className="form-control" name='title' value={update.title} onChange={handleChange} />
                </div>

                <div className="mb-4  input-family">
                  <label htmlFor="exampleInputtext1" className="label">Select State</label>
                  <select name='state_code' onChange={handleChange} className="form-select" style={{ height: 60 }} aria-label="Default select example">
                    <option>Selecet a state</option>
                    {
                      states.map(x => (
                        <option key={x.state_code} value={x.state_code}>{x.state_name}</option>
                      ))
                    }
                  </select>
                </div>

                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">Content</label>
                  <textarea type="text" style={{ height: 200 }} className="form-control" name='content' value={update.content} onChange={handleChange} />
                </div>
              </form>
              

              <div className="d-flex justify-content-end mt-5">
                <button style={{ fontSize: 13 }} onClick={handleSubmit} className='btn bg-green text-white  px-5 py-2'>{loadingReducer.loading ? 'Loading...' : 'Publish'}</button>
              </div>

            </div>


          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateNotifiaction;
