import React from 'react';
import { CardWithoutPadding } from './Card';

const UsersDashComponent = () => (
  <div className="">
    <CardWithoutPadding>
      <div className="card-header">
        <div className="d-flex align-items-center">
          <div className="circle">
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </div>
          <div className="ml-1">
            <p className="fw-bold">Users</p>
            <p className="p-small">Role Management</p>
          </div>
        </div>
        <span className="material-icons">
                    more_vert
        </span>
      </div>
      <div className="card-body" style={{ height: 320 }}>
        {
          [1, 2].map((x, i) => (
            <div className="border-bottom p-4" key={i}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h6 className="fw-bold">Ashley H.</h6>
                  <div style={{ color: '#51CD65', backgroundColor: '#D3F9D8' }} className="badge ml-1">
                                        Admin
                  </div>
                </div>
                <p className="fw-bold">2021/09/24</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="d-flex align-items-center flex-1 mr-3">
                  <span style={{ color: '#29A439', fontSize: 18 }} className="material-icons mr-1">
                                        check
                  </span>
                  <small>
                                        Manage User Accounts
                  </small>
                </div>

                <div className="d-flex align-items-center flex-">
                  <span style={{ color: '#29A439', fontSize: 18 }} className="material-icons mr-1">
                                        check
                  </span>
                  <small className='flex-1'>
                                        Edit info
                  </small>
                </div>
                
              </div>

              <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="d-flex align-items-center flex-1 mr-3">
                  <span style={{ color: '#29A439', fontSize: 18 }} className="material-icons mr-1">
                                        check
                  </span>
                  <small>
                                    See Analytics
                  </small>
                </div>

                <div className="d-flex align-items-center flex-1">
                  <span style={{ color: '#29A439', fontSize: 18 }} className="material-icons mr-1">
                                        check
                  </span>
                  <small className='flex-1'>
                                        Export Data
                  </small>
                </div>
                
              </div>


            </div>
          ))
        }

      </div>

      <div className="card-footer d-flex align-items-center">
        <h5>SEE ALL USERS </h5>
        <span className="material-icons">
                    chevron_right
        </span>
      </div>

    </CardWithoutPadding>
  </div>

);

export default UsersDashComponent;
