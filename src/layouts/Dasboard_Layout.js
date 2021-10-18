import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Dashboard_layout = ({children}) => {

  return (
    <section className="d-flex align-items-stretch h-100">
      <div className="w-10 h-100 d-none d-lg-block">
        <Sidebar />
      </div>
      <div className="w-90 full_height bg-grey">
        <Header />
        <div className="py-4 px-5">
          {children}
        </div>
      </div>
    </section>

  );
};

export default Dashboard_layout;


