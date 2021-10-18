import React from 'react';
import { CardWithoutPadding } from './Card';

const Reviews = () => (
  <div className="">
    <CardWithoutPadding>
      <div className="card-header">
        <div className="d-flex align-items-center">
          <div className="circle">
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </div>
          <div className="ml-1">
            <p className="fw-bold">Reviews</p>
            <p className="p-small">Messages</p>
          </div>
        </div>
        <span className="material-icons">
                    more_vert
        </span>
      </div>
      <div className="card-body" style={{ height: 320 }}>
        {
          [1, 2,3].map((x, i) => (
            <div className="border-bottom py-3" key={i}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h6 className="fw-bold">Sally H.</h6>
                  <p className="ml-1">20m ago</p>
                </div>
                <p className="fw-bold"><i style={{color: '#FFB500'}} className="fa fa-star" aria-hidden="true"></i> 5/5</p>
              </div>
              <div>
                <p style={{color: '#B8BEC9'}}>It is over qualified and easy to use, thank you. </p>
              </div>

            </div>
          ))
        }

      </div>

      <div className="card-footer d-flex align-items-center">
        <h6>SEE ALL REVIEWS </h6>
        <span className="material-icons">
                    chevron_right
        </span>
      </div>

    </CardWithoutPadding>
  </div>

);

export default Reviews;
