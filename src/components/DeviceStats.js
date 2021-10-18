import React from 'react';
import { CardWithoutPadding } from './Card';
import PieChartComponent from './chats.js/PieChart';

const DeviceStats = () => (
  <div className="">
    <CardWithoutPadding>
      <div className="card-header">
        <div className="d-flex align-items-center">
          <div className="circle">
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
          </div>
          <div className="ml-1">
            <p className="fw-bold">Reach by device</p>
            <p className="p-small">Report Center</p>
          </div>
        </div>
        <span className="material-icons">
          more_vert
        </span>
      </div>
      <div className="card-body" style={{height: 300}}>
        <PieChartComponent />
      </div>
      
      <div className="card-footer"/>
        
    </CardWithoutPadding>
  </div>

);

export default DeviceStats;
