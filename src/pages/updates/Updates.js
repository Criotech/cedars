import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import Tabs from '../../components/Tabbar';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchNews, deleteNews } from '../../redux/actions/newsActions';
import { fetchJobs, deleteJob } from '../../redux/actions/jobActions';
import { fetchAnnoucements } from '../../redux/actions/annoucement';
import { states } from '../../utils/states';

const Updates = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const newsReducer = useSelector(({ newsReducer }) => newsReducer);
  const jobsReducer = useSelector(({ jobsReducer }) => jobsReducer);
  const annoucementsReducer = useSelector(({ annoucementsReducer }) => annoucementsReducer);
  

  useEffect(() => {
    dispatch(fetchNews());
    dispatch(fetchJobs());
    dispatch(fetchAnnoucements());
  }, [dispatch]);

  useEffect(() => {
    if (alert.message) {
      addToast(alert.message, { appearance: 'error' });
      swal({
        title: 'Error!',
        text: alert.message,
        icon: 'error',
        button: 'close!',
      });
    }
    if (alert.success) {
      addToast(alert.success, { appearance: 'success' });
      swal({
        title: 'Success!',
        text: alert.success,
        icon: 'success',
        button: 'close!',
      });
    }
  }, [alert.message, alert.success, addToast]);

  const WithoutTime = (dateTime) => {
    var date = new Date(dateTime);

    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const deleteANews = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteNews(id));
        } else {
          swal('Operation canceled!');
        }
      });
  };

  const returnState = (stateCode) => {
    let state = 'All States';
    if (!stateCode) {
      return 'All States';
    }
    states.map((x) => {
      if (stateCode.toLowerCase() === x.state_code.toLowerCase()) {
        state = x.state_name;
        return state;
      }
      return 'All States';
    });
    return state; 
  };
  const deleteAJob = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteJob(id));
        } else {
          swal('Operation canceled!');
        }
      });
  };


  const [currentTab, setCurrentTab] = useState(0);

  const renderTabs = () => {
    if  (currentTab === 0) {
      return (
        <div onClick={() => history.push('/updates/create/news')} className="d-flex flex-between pointer">
          <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
          <h5 className="fw-bold text-green">
                    Create News Update
          </h5>
        </div>
      );
    } else if (currentTab===1) {
      return (
        <div onClick={() => history.push('/updates/create/job')} className="d-flex flex-between pointer">
          <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
          <h5 className="fw-bold text-green">
          Create Job Update
          </h5>
        </div>
      );
    } else if (currentTab === 2) {
      return (
        <div onClick={() => history.push('/updates/create/notification')} className="d-flex flex-between pointer">
          <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
          <h5 className="fw-bold text-green">
          Create Notification
          </h5>
        </div>
      );
    }
  };

  return (
    <div>
      <DashboardLayout title='Updates'>
        <section className="trainings-section">
          <div className="flex-between">
            <h5 className="fw-bold mb-3">Updates</h5>


            {
              renderTabs()
            }

          </div>


          <div className='mt-5 px-5'>
            <Tabs tabs={[{ name: 'News' }, { name: 'Jobs' }, { name: 'Notifications' }]} setCurrentTab={setCurrentTab} currentTab={currentTab} />
          </div>

          <div className="mt-4 px-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  currentTab === 0 && newsReducer.news.map(x => (
                    <tr key={x.id}>
                      <td>{WithoutTime(x.created_at)}</td>
                      <td>{x.title}...</td>
                      <td>{x.content.slice(0, 200)}...</td>
                      <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button onClick={()=>history.push('/updates/create/news', {news: x})} style={{ borderColor: '#DFDFDF', backgroundColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn">Edit</button>
                        <button onClick={() => deleteANews(x.id)} style={{ borderColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn btn-outline-white">Delete</button>
                      </div></td>
                    </tr>
                  ))
                }

                {
                  currentTab === 1 && jobsReducer.jobs.map(x => (
                    <tr key={x.id}>
                      <td>{WithoutTime(x.created_at)}</td>
                      <td>{x.title}</td>
                      <td>{x.description.slice(0, 200)}...</td>
                      <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button onClick={()=>history.push('/updates/create/job', {job: x})} style={{ borderColor: '#DFDFDF', backgroundColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn">Edit</button>
                        <button onClick={() => deleteAJob(x.id)} style={{ borderColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn btn-outline-white">Delete</button>
                      </div></td>
                    </tr>
                  ))
                }

                {
                  currentTab === 2 && annoucementsReducer.annoucements.map(x => (
                    <tr key={x.id}>
                      <td>{WithoutTime(x.created_at)}</td>
                      <td>{x.title}</td>
                      <td>{x.content.slice(0, 200)}...</td>
                      <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                        {returnState(x.state_code)}
                      </div></td>
                    </tr>
                  ))
                }


              </tbody>
            </table>

            <div className='footer d-flex justify-content-end py-3'>
              <div className="d-flex align-items-center">
                <p className="mr-3">Rows per page 10 <i className="fa fa-caret-down" aria-hidden="true"></i></p>
                <p className="mr-3">1-5 of 13 </p>
                <h5 className="mr-3 fw-bold"><i className="fa fa-angle-left mr-2" aria-hidden="true"></i> <i className="fa fa-angle-right" aria-hidden="true"></i></h5>
              </div>

            </div>
          </div>

        </section>
      </DashboardLayout>
    </div>
  );
};

export default Updates;
