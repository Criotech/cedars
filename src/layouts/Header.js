import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-lg-5 dash-header d-flex justify-content-between align-items-center">
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
            <span className="material-icons-outlined">
              keyboard_arrow_down
            </span>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

