import React from 'react';
import { CardWithoutPadding } from './Card';
import Map from '../assets/images/map.png';

const AudienceStats = () => (
  <div className="">
    <CardWithoutPadding>
      <div className="card-header">
        <div className="d-flex align-items-center">
          <div className="circle">
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </div>
          <div className="ml-1">
            <p className="fw-bold">Audience Map Location</p>
            <p className="p-small">Report Center</p>
          </div>
        </div>
        <span className="material-icons">
          more_vert
        </span>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4">
            {
              [{ state: 'Lagos', users: 580 }, { state: 'Abuja', users: 420 }, { state: 'Delta', users: 500 }, { state: 'Rivers', users: 320 }
                , { state: 'Oyo', users: 3800 }].map((x, i) => (
                <div key={i}>
                  <div className="d-flex justify-content-between">
                    <small className="fw-bold">{x.state}</small>
                    <small>{x.users} Users</small>
                  </div>
                  <div className="progress my-2" style={{ borderRadius: 30 }}>
                    <div className="progress-bar" style={{ width: '25%', backgroundColor: '#29A439' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              ))
            }

          </div>

          <div className="col-lg-8">
            <img src={Map} alt="map" />
          </div>

        </div>
      </div>

      <div className="card-footer d-flex align-items-center">
        <h6>SEE DETAILS </h6>
        <span className="material-icons">
          chevron_right
        </span>
      </div>
    </CardWithoutPadding>
  </div>

);

export default AudienceStats;
