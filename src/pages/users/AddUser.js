import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addUser } from '../../redux/actions/usersAction';

const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);

  const [user, setUser] = useState({
    name: '',
    email: '',
    deployed_state: '',
    nysc_state_code: '',
    phone_number: '',
    nysc_call_up_number: ''
  });

  useEffect(() => {
    if (alert.message) {
      addToast(alert.message, { appearance: 'error' });
    }
    if (alert.success) {
      addToast(alert.success, { appearance: 'success' });
      history.push('/users');
    }
  }, [alert.message, alert.success, addToast, history]);

  

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); 
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    const {name, email, deployed_state, nysc_state_code, phone_number, nysc_call_up_number} = user;
    if (!name && !email && !deployed_state && !nysc_state_code && !phone_number && !nysc_call_up_number ) return;
    
    await dispatch(addUser({name, email, deployed_state, nysc_state_code, phone_number, nysc_call_up_number}));
  };

  return (
    <div>
      <DashboardLayout title='Users'>
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
                  <p className="mt-2">Recommended dimensions: 200x200, maximum file size: 2MB</p>
                </div>
              </div>

              <div className="form-container">
                <form>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputPassword1" className="label">Full name</label>
                    <input name='name' onChange={handleChange} type="text" className="form-control" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">Email address</label>
                    <input name='email' onChange={handleChange} type="text" className="form-control" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
                    <input name='deployed_state' onChange={handleChange} type="text" className="form-control" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">Call up number</label>
                    <input name='nysc_call_up_number' onChange={handleChange} type="text" className="form-control" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">State code</label>
                    <input name='nysc_state_code' onChange={handleChange} type="text" className="form-control" />
                  </div>
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">Phone number</label>
                    <input name='phone_number' onChange={handleChange} type="text" className="form-control" />
                  </div>
                </form>

              </div>
              <button onClick={handleAddUser} style={{marginTop: -10}} className="btn bg-green text-white px-5 py-2 fw-bold">
                {loadingReducer.loading?'Loading...':'Save'}
              </button>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default AddUser;
