import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import Tabs from '../../components/Tabbar';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchNews, deleteNews } from '../../redux/actions/newsActions';
import { fetchJobs, deleteJob } from '../../redux/actions/jobActions';

const Updates = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const newsReducer = useSelector(({ newsReducer }) => newsReducer);
  const jobsReducer = useSelector(({ jobsReducer }) => jobsReducer);

  useEffect(() => {
    dispatch(fetchNews());
    dispatch(fetchJobs());
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

  return (
    <div>
      <DashboardLayout title='Updates'>
        <section className="trainings-section">
          <div className="flex-between">
            <h5 className="fw-bold mb-3">Updates</h5>


            {
              currentTab === 0 ?
                <div onClick={() => history.push('/updates/create/news')} className="d-flex flex-between pointer">
                  <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
                  <h5 className="fw-bold text-green">
                    Create News Update
                  </h5>
                </div>
                :
                <div onClick={() => history.push('/updates/create/job')} className="d-flex flex-between pointer">
                  <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
                  <h5 className="fw-bold text-green">
                    Create Job Update
                  </h5>
                </div>
            }

          </div>


          <div className='mt-5 px-5'>
            <Tabs tabs={[{ name: 'News' }, { name: 'Jobs' }]} setCurrentTab={setCurrentTab} currentTab={currentTab} />
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
                      <td>{x.title}</td>
                      <td>{x.content}</td>
                      <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button style={{ borderColor: '#DFDFDF', backgroundColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn">Edit</button>
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
                      <td>{x.description}</td>
                      <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button style={{ borderColor: '#DFDFDF', backgroundColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn">Edit</button>
                        <button onClick={() => deleteAJob(x.id)} style={{ borderColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn btn-outline-white">Delete</button>
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
