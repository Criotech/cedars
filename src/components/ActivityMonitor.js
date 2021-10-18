import React from 'react';
import { CardWithoutPadding } from './Card';

const ActivityMonitor = () => (
  <div className="">
    <CardWithoutPadding>
      <div className="card-header">
        <div className="d-flex align-items-center">
          <div className="circle">
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </div>
          <div className="ml-1">
            <p className="fw-bold">Activity Monitor</p>
            <p className="p-small">Report Center</p>
          </div>
        </div>
        <span className="material-icons">
                    more_vert
        </span>
      </div>
      <div className="card-body ht">

        <div className="alart">
          <div className="circle-1">
            <div className="circle-2"/>
          </div>
          <h6 className="ml-2">Keep Chilling <br/>All 3 monitors are running smoothly. </h6>
        </div>

        <p className="fw-bold py-3">Recent alerts</p>

        {
          [1,2,3].map((x, i) => (
            <div className="alert-items" key={i}>
              <div>
                <p style={{fontSize: 14}}>DO_DEEL_CDS is up</p>
                <small>Sept 24, 2021 | 09:25:05 AM</small>
              </div>

              <div className="circle">
                <i className="fa fa-arrow-up text-white" aria-hidden="true"></i>
              </div>

            </div>
          ))
        }

      </div>
    </CardWithoutPadding>
  </div>
          
);

export default ActivityMonitor;
