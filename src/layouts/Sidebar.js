import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

// import { Link } from 'react-router-dom';

const Sidebar = ({ title }) => {

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
            <div className={title === 'Users' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">groups</span>
              <p>Users</p>
            </div>
          </Link>

          <Link to="/trainings">
            <div className={title === 'Trainings' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">co_present</span>
              <p>Trainings</p>
            </div>
          </Link>

          <Link to="/projects">
            <div className={title === 'Projects' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">assignment</span>
              <p>Projects</p>
            </div>
          </Link>

          <Link to="/news">
            <div className={title === 'News' ? 'nav-link active' : 'nav-link'} >
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


