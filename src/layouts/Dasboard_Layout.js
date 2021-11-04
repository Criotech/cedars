import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Dashboard_layout = ({children, title='Dashboard'}) => {

  return (

    <section className="d-flex mt-55 align-items-stretch h-100">
      <div className="w-10 h-100 position-fixed d-none d-lg-block">
        <Sidebar title={title} />
      </div>
      <div className="w-90 ml-150 mt-2 full_height bg-grey">
        <Header />
        <div className="py-5 px-5">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Dashboard_layout;


