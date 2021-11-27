import React, { useEffect } from 'react';
import moment from 'moment';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { fetchTrainings, deleteTraining } from '../../redux/actions/triainingActions';


const Trainings = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const trainingsReducer = useSelector(({ trainingsReducer }) => trainingsReducer);

  useEffect(()=>{
    dispatch(fetchTrainings());
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

  const deletATraining = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteTraining(id));
        } else {
          swal('Operation canceled!');
        }
      });
  };

  return (
    <div>
      <DashboardLayout title='Trainings'>
        <section className="trainings-section">
          <div className="flex-between">
            <h5 className="fw-bold mb-3">Trainings</h5>

            <div onClick={() => history.push('/trainings/create')} className="d-flex flex-between pointer">
              <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
              <h5 className="fw-bold text-green">
                Create New
              </h5>
            </div>
          </div>


          <div className='w-100 mt-4'>
            <div className="d-flex align-items-center w-100">
              <div className='search-bar-container'>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" className="form-control flex-grow-1" placeholder='Search' />
              </div>

              <h6 className="px-5 text-green fw-bold">Filters <i className="fa fa-cog ml-1" aria-hidden="true"></i></h6>
            </div>
          </div>

          <div className="mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Title</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>

                {
                  trainingsReducer.trainings.map(x => (
                    <tr key={x.id}>
                      <td>{moment(x.updated_at).format('YYYY-MM-DD')}</td>
                      <td>{x.title}</td>
                      <td> {x.overview.slice(0,200)}... </td>
                      <td> {x.status} </td>
                      <td><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button onClick={()=>history.push('/trainings/create', {training: x})} style={{ borderColor: '#DFDFDF', backgroundColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn">Edit</button>
                        <button onClick={()=>deletATraining(x.id)} style={{ borderColor: '#DFDFDF', borderWidth: 1 }} type="button" className="btn btn-outline-white">Delete</button>
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

export default Trainings;
