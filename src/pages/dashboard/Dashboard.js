import React, { useState } from 'react';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { Card } from '../../components/Card';
import ActivityMonitor from '../../components/ActivityMonitor';
import AudienceStats from '../../components/AudienceStats';
import DeviceStats from '../../components/DeviceStats';
import Reviews from '../../components/Reviews';
import Tickets from '../../components/Tickets';
// import UsersDashComponent from '../../components/UsersDashComponent';
import LineChartComponent from '../../components/chats.js/LineChart';
import MultipleBarChart from '../../components/chats.js/MultipleBarChart';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const About = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DashboardLayout title='Dashboard'>
        <h3 className="mb-3">Overview</h3>
        <div className="row row-eq-height">
          <div className="col-lg-8 panel">
            <div className="mb-3">
              <Card>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold mb-3">Audience reach</h5>
                  <div className="d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <p className="ml-1 mr-1">Total</p>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <p className="ml-1">Users</p>
                  </div>
                </div>
                <LineChartComponent />
              </Card>
            </div>

            <div className="mb-3">
              <Card>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-bold mb-3">Gender / Age</h5>
                </div>
                <MultipleBarChart />
              </Card>
            </div>
          </div>

          <div className="col-lg-4 panel">
            <div className="mb-2">

              <Card>
                <DatePicker
                
                  selected={startDate} active onChange={(date) => setStartDate(date)} customInput={<div className="d-flex justify-content-between align-items-center pointer">
                    <div className="d-flex">
                      <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
                      <h6 className="flex-1">{moment(startDate).format('YYYY-MM-DD HH:MM:SS')}</h6>

                    </div>
                    <span className="material-icons">
                    keyboard_arrow_down
                    </span>
                  </div>} />


              </Card>
            </div>

            <ActivityMonitor />

          </div>
        </div>


        <div className="row row-eq-height mb-3">
          <div className="col-lg-8 panel">
            <AudienceStats />
          </div>

          <div className="col-lg-4 panel">
            <DeviceStats />
          </div>
        </div>

        <div className="row">
          {/* <div className="col-lg-4">
            <UsersDashComponent />
          </div> */}
          <div className="col-lg-4">
            <Reviews />
          </div>
          <div className="col-lg-4">
            <Tickets />
          </div>
        </div>





      </DashboardLayout>
    </div>
  );
};

export default About;
