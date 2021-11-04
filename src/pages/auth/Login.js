import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { loginUser } from '../../redux/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);


  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(()=>{
    if (alert.message) {
      addToast(alert.message, { appearance: 'error', autoDismiss: true, });
    }
  }, [alert.message, addToast]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const {email, password} = user;
    if (!email && !password) return;
    await dispatch(loginUser(email, password));
  };


  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div id="login-row" className="row justify-content-center align-items-center">
        <div id="login-column" className="col-md-6">
          <div id="login-box" className="col-md-12">
            <form id="login-form" className="form" action="" method="post">
              <h3 className="text-center text-green fw-bold">Login</h3>
              <div className="form-group">
                <label htmlFor="email" className="text-green">Email:</label><br/>
                <input type="text" onChange={handleChange} name="email" id="username" className="form-control" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password" className="text-green">Password:</label><br/>
                <input type="password" onChange={handleChange} name="password" id="password" className="form-control" /> 
              </div>
              <div className="form-group">
                <label htmlFor="remember-me" className="text-green">
                </label>
                <br/>
                <input onClick={handleLogin} type="submit" name="submit" className="btn bg-green text-white fw-bold" value={loadingReducer.loading?'Loading...':'Submit'} />
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;