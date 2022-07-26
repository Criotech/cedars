import React, { useEffect, useState, useRef } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addUser } from '../../redux/actions/usersAction';
import { states } from '../../utils/states';
import ApiService from '../../utils/apiService';


const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    gender: '',
    email: '',
    password: 'password'
  });
  const [loading, setloading] = useState(false);

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

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    const { email, first_name, last_name, password, gender, phone } = user;
    if (!email || !first_name || !last_name || !password || !gender || !phone) {
      addToast("parameter required", { appearance: 'error' });
      return;
    };

    try {
      setloading(true)
      let res = await ApiService.registerUser(user);

      if (res.data) {
        addToast("User Adder Successfully", { appearance: 'success' });
        swal({
          title: 'Success',
          text: "User Adder Successfully",
          icon: 'success',
          button: 'close!',
        });
        setUser({
          first_name: '',
          last_name: '',
          phone: '',
          gender: '',
          email: '',
          password: 'password'
        });
      } else {
        swal({
          title: 'Error!',
          text: res.data.message,
          icon: 'error',
          button: 'close!',
        });
      }
      setloading(false)
    } catch (e) {
      console.log(e)
      setloading(false)
    }

  };


  return (
    <div>
      <DashboardLayout title='Users'>
        <section className="add-user-section">
          <div>
            <h4><i onClick={() => history.push('/users')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <div className="form-outer-container">
              {/* <div className='header d-flex'>
                <div className="circle-big mr-2">
                  <img src={preview ? preview : 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png'} width="100%" height="100%" style={{ borderRadius: '50%' }} alt="Avatar" />

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
                  <p className="mt-2">Recommended dimensions: 200x200, maximum file size: 2MB.</p>
                </div>
              </div> */}

              <div className="form-container">
                <form>
                  <div className="d-flex flex-row" style={{ gap: 10 }}>
                    <div className="mb-4 input-family w-100">
                      <label htmlFor="exampleInputPassword1" className="label">First Name</label>
                      <input name='first_name' onChange={handleChange} type="text" value={user.first_name} className="form-control" />
                    </div>

                    <div className="mb-4 input-family w-100">
                      <label htmlFor="exampleInputtext1" className="label">Last Name</label>
                      <input name='last_name' onChange={handleChange} type="text" value={user.last_name} className="form-control" />
                    </div>
                  </div>
                  {/* <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
                    <input name='deployed_state' onChange={handleChange} type="text" className="form-control" />
                  </div> */}
                  {/* <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
                    <select name='deployed_state' onChange={handleChange} className="form-select" style={{ height: 60 }} aria-label="Default select example">
                      {
                        states.map(x => (
                          <option key={x.state_code} value={x.state_code}>{x.state_name}</option>
                        ))
                      }
                    </select>
                  </div> */}
                  <div className="mb-4 input-family w-100">
                    <label htmlFor="exampleInputtext1" className="label">Email</label>
                    <input name='email' onChange={handleChange} type="text" value={user.email} className="form-control" />
                  </div>

                  {/* <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">Gender</label>
                    <input name='gender' onChange={handleChange} type="text" value={user.gender} className="form-control" />
                  </div> */}

                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">Gender</label>
                    <select name='gender' onChange={handleChange} className="form-select" style={{ height: 60 }} aria-label="Default select example">
                      {
                        [
                          {
                            name: '',
                            tag: '',
                          },
                          {
                            name: 'Male',
                            tag: 'Male',
                          }, {
                            name: 'Female',
                            tag: 'Female',
                          }].map(x => (
                            <option key={x.tag} value={x.name}>{x.name}</option>
                          ))
                      }
                    </select>
                  </div>

                  <div className="mb-4 input-family">
                    <label htmlFor="exampleInputtext1" className="label">Phone number</label>
                    <input name='phone' onChange={handleChange} type="text" value={user.phone} className="form-control" />
                  </div>

                </form>

                <button onClick={handleAddUser} style={{ marginTop: -10 }} className="btn bg-green text-white px-5 py-2 w-100 mt-3 fw-bold">
                  {loading ? 'Loading...' : 'Save'}
                </button>
              </div>

            </div>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default AddUser;
