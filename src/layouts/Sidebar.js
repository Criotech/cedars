import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

// import { Link } from 'react-router-dom';

const Sidebar = ({ title = 'Dashboard' }) => {

  return (
    <div className="sidebar flex-column align-items-center">
      <div className="text-center" style={{paddingTop: 40}}>
        <Logo />
      </div>
      <div className="mt-200">
        <nav className="flex-column navigation">
          <Link to="/dashboard">
            <div className={title === 'Dashboard' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">home</span>
              <p>Overview</p>
            </div>
          </Link>

          <Link to="/users">
            <div className={title === 'Dashboar' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">groups</span>
              <p>Users</p>
            </div>
          </Link>

          <Link to="/training">
            <div className={title === 'Dashboa' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">co_present</span>
              <p>Trainigs</p>
            </div>
          </Link>

          <Link to="/assignment">
            <div className={title === 'Dashbo' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">assignment</span>
              <p>Projects</p>
            </div>
          </Link>

          <Link to="/news">
            <div className={title === 'Dashb' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">menu_book</span>
              <p>News</p>
            </div>
          </Link>
          
        </nav>

      </div>
    </div>

  );
};

export default Sidebar;


