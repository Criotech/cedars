import React, {useEffect, useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addUser } from '../../redux/actions/usersAction';
import { states } from '../../utils/states';

const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);

  const [user, setUser] = useState({
    name: '',
    email: '',
    deployed_state: 'AB',
    nysc_state_code: '',
    phone_number: '',
    nysc_call_up_number: ''
  });

  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useState('');
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      // const filename = files[0].name;

      // var parts = filename.split('.');
      // const fileType = parts[parts.length - 1];
      // console.log('fileType', fileType); //ex: zip, rar, jpg, svg etc.

      setPhoto(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    }
  };


  const onButtonClick = () => {
    inputFile.current.click();
  };

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
    
    await dispatch(addUser({name, email, deployed_state, nysc_state_code, phone_number, nysc_call_up_number, photo}));
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
                  <img src={preview?preview:'https://cdn.truelancer.com/upload-full/701651-vector-cartoon-portrait-avatar-illustration-fanart.jpg'} width="100%" height="100%" style={{ borderRadius: '50%' }} alt="Avatar" />

                </div>
                <div>
                  <input
                    style={{ display: 'none' }}
                    // accept=".zip,.rar"
                    ref={inputFile}
                    onChange={handleFileUpload}
                    type="file"
                  />
                  <button onClick={onButtonClick} className="btn btn-outline border-green text-green mt-2 fw-bold">
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
                  {/* <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
                    <input name='deployed_state' onChange={handleChange} type="text" className="form-control" />
                  </div> */}
                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
                    <select name='deployed_state' onChange={handleChange} className="form-select" style={{height: 60}} aria-label="Default select example">
                      {
                        states.map(x=>(
                          <option key={x.state_code} value={x.state_code}>{x.state_name}</option>
                        ))
                      }
                    </select>
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
