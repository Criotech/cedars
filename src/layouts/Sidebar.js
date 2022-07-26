import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../components/Logo';


const Sidebar = ({ title }) => {

  return (
    <div className="sidebar mt-4 flex-column align-items-center">
      {/* <div className="text-center" style={{paddingTop: 40}}>
        <Logo />
      </div> */}
      <div className="mt-200">
        <nav className="flex-column navigation">
          <Link to="/dashboard">
            <div className={title === 'Dashboard' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">home</span>
              <p>Overview</p>
            </div>
          </Link>

          <Link to="/users">
            <div className={title === 'users' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">groups</span>
              <p>Users</p>
            </div>
          </Link>

          <Link to="/projects">
            <div className={title === 'Services' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">assignment</span>
              <p>Services</p>
            </div>
          </Link>

          <Link to="/updates">
            <div className={title === 'Department' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">menu_book</span>
              <p>Department</p>
            </div>
          </Link>

          <Link to="/attendances">
            <div className={title === 'Attendances' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">menu_book</span>
              <p>Attendances</p>
            </div>
          </Link>

          <Link to="/confessions">
            <div className={title === 'Confessions' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">menu_book</span>
              <p>Confessions</p>
            </div>
          </Link>

          <Link to="/books">
            <div className={title === 'Books' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">menu_book</span>
              <p>Books</p>
            </div>
          </Link>


          <Link to="/testimonies">
            <div className={title === 'Testimonies' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">menu_book</span>
              <p>Testimonies</p>
            </div>
          </Link>

          <Link to="/church-locations">
            <div className={title === 'Chruch Locations' ? 'nav-link active' : 'nav-link'} >
              <span className="material-icons">menu_book</span>
              <p>Church Locations</p>
            </div>
          </Link>

          <Link to="/trainings/chat">
            <div className={title === 'TrainingChat' ? 'nav-link active' : 'nav-link'} >
              <span><i className="fa fa-comments-o" aria-hidden="true"></i></span>
              <p>Chat</p>
            </div>
          </Link>


        </nav>

      </div>
    </div>

  );
};

export default Sidebar;


