import React from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../components/Logo';
import { logoutUser } from '../redux/actions/authActions';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <nav  className="navbar navbar-expand-lg navbar-light fixed-top px-lg-5 dash-header d-flex justify-content-between align-items-center">
      <div className="navbar-brand" href="#">
        <Logo />
      </div>
      <div className="container-fluid">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>

        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          </ul>
          <div className="d-flex align-items-center">
            <span className="material-icons-outlined mr-2 text-white">
              notifications
            </span>
            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Avatar" className="avatar mr-1"></img>
            <h6 className="mr-2">Femi Ilori</h6>
            
            <div className='dropdown'>
              <span className="material-icons-outlined mt-2 pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              keyboard_arrow_down
              </span>
              <ul className="dropdown-menu p-2" style={{marginLeft: -90}} aria-labelledby="dropdownMenuButton1">
                <li className='py-2 fw-bold pointer'><small> <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile </small></li>
                <li onClick={()=>dispatch(logoutUser())} className='py-2 text-danger fw-bold pointer'><small> <i className="fa fa-sign-out" aria-hidden="true"></i> Log out </small> </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

