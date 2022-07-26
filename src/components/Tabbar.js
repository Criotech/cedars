import React from 'react';

const Tabs = ({ tabs, currentTab = 0, setCurrentTab }) => {
  return (
    <div className='tab-nav-bar row'>
      {
        tabs.map((x, i) => {
          return (
            <div key={i} onClick={()=>setCurrentTab(i)} className={currentTab === i ? 'col-sm text-center pointer active' : 'col-sm pointer text-center'}>
              {x.name}
            </div>);
        })
      }

    </div>
  );
};

export default Tabs;
