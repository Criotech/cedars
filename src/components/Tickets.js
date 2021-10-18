import React from 'react';
import { CardWithoutPadding } from './Card';

const Tickets = () => (
  <div className="">
    <CardWithoutPadding>
      <div className="card-header">
        <div className="d-flex align-items-center">
          <div className="circle">
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </div>
          <div className="ml-1">
            <p className="fw-bold">Tickets</p>
            <p className="p-small">Help Desk</p>
          </div>
        </div>
        <span className="material-icons">
                    more_vert
        </span>
      </div>
      <div className="card-body" style={{ height: 320 }}>
        <div className="py-3 border-bottom d-flex align-items-center">
          <div style={{ width: '33.3%' }}>
            <p className="fw-bold">Date</p>
          </div>
          <div style={{ width: '33.3%' }}>
            <p className="fw-bold">Topic</p>
          </div>
          <div style={{ width: '33.3%' }}>
            <p className="fw-bold">Status</p>
          </div>
        </div>
        {
          [1, 2, 3].map((x, i) => (
            <div key={i} className="py-3 border-bottom d-flex align-items-center">
              <div style={{ width: '33.3%' }}>
                <p className="">2020/12/22 <br />
                                    09:59</p>
              </div>
              <div style={{ width: '33.3%' }}>
                <p className="">Runtime Error <br />
                                    Code: #1002</p>
              </div>
              <div style={{ width: '33.3%' }}>
                <div className="d-flex align-items-center">
                  <p className="">Open </p>
                  <span className="material-icons ml-1">
                                    east
                  </span>
                </div>
              </div>
            </div>
          ))
        }

      </div>

      <div className="card-footer d-flex align-items-center">
        <h6>SEE ALL TICKETS </h6>
        <span className="material-icons">
                    chevron_right
        </span>
      </div>

    </CardWithoutPadding>
  </div>

);

export default Tickets;
