import React, {useState, useEffect} from 'react';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchBusinesses } from '../../redux/actions/projectsAction';
import { updateBusinessStatus } from '../../redux/actions/usersAction';
import moment from 'moment';

const OnboardedBusinesses = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const projectsReducer = useSelector(({ projectsReducer }) => projectsReducer);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);


  const [page, setPage] = useState(1);
  const [per_page, handleSetPerPage] = useState(15);

  useEffect(() => {
    dispatch(fetchBusinesses());
  }, [dispatch]);

  const next = () => {
    let x = page + 1;
    setPage(x);
    dispatch(fetchBusinesses(x, per_page));
  };

  const prev = () => {
    let x = page - 1;
    setPage(x);
    dispatch(fetchBusinesses(x, per_page));
  };

  const setPerPage = (x) => {
    handleSetPerPage(x);
    dispatch(fetchBusinesses(page, per_page));
  };


  const verifyBusiness = (businessId, userId) => {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure you want to verify business.',
      icon: 'warning',
      buttons: true,
      dangerMode: false,
    })
      .then((willUpdte) => {
        if (willUpdte) {
          dispatch(updateBusinessStatus({status: 1, userId}, businessId));
        } else {
          swal('Operation canceled!');
        }
      });
  };


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
      dispatch(fetchBusinesses(page, per_page));
    }
  }, [alert.success, alert.message, page, per_page, dispatch, addToast]);

  const renderBusiness = () => {
    return projectsReducer.businesses.map((item, i) => {
      return (
        <tr key={item.id}>
          {/* <td>{i + 1}</td> */}
          <td>{moment(item.created_at).format('YYYY-MM-DD, h:mm:ss')}</td>
          <td>{item.business_name}</td>
          <td>{item.business_email}</td>
          <td>{item.business_owner}</td>
          <td></td>
          <td></td>
          <td><p onClick={()=>verifyBusiness(item.id, item.user_id)} className={item.status==='approved'?'badge bg-green text-white pointer':'badge bg-pending text-white pointer'}>{item.status==='approved'?'verified':'pending'}</p></td>
          <td>{item.reject_reason}</td>
        </tr>              
      );
    });
  };

  return (
    <div>
      <DashboardLayout title='Projects'>
        <div className="mt-4">
          <h4><i onClick={() => history.push('/projects')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>

          {/* <div className='w-100 mt-4'>
            <div className="d-flex align-items-center w-100">
              <div className='search-bar-container'>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" className="form-control flex-grow-1" placeholder='Search' />
              </div>

              <h6 className="px-5 text-green fw-bold">Filters <i className="fa fa-cog ml-1" aria-hidden="true"></i></h6>
            </div>
          </div> */}

          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">S/N</th> */}
                <th scope="col">Time stamp</th>
                <th scope="col">Business name</th>
                <th scope="col">Email address</th>
                <th scope="col">Owner’s name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Onboader</th>
                <th scope="col">Status</th>
                <th scope="col">Comment</th>

              </tr>
            </thead>
            <tbody>

              {
                !loadingReducer.loading &&
                renderBusiness()
              }


            </tbody>
          </table>

          <div className='footer'>
            <div className="d-flex align-items-center">
              <div className='dropdown'>
                <p className="mr-3 pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" aria-hidden="true">Rows per page {per_page} <i className="fa fa-caret-down  pointer"></i></p>
                <ul className="dropdown-menu p-2" style={{ marginLeft: -90 }} aria-labelledby="dropdownMenuButton1">
                  <li onClick={() => setPerPage(1)} className='py-2 fw-bold pointer'><small> 1 </small></li>
                  <li onClick={() => setPerPage(2)} className='py-2 fw-bold pointer'><small> 2 </small></li>
                  <li onClick={() => setPerPage(3)} className='py-2 fw-bold pointer'><small> 3 </small></li>
                  <li onClick={() => setPerPage(4)} className='py-2 fw-bold pointer'><small> 4 </small></li>
                  <li onClick={() => setPerPage(5)} className='py-2 fw-bold pointer'><small> 5 </small></li>
                  <li onClick={() => setPerPage(6)} className='py-2 fw-bold pointer'><small> 6 </small></li>
                  <li onClick={() => setPerPage(7)} className='py-2 fw-bold pointer'><small> 7 </small></li>
                  <li onClick={() => setPerPage(8)} className='py-2 fw-bold pointer'><small> 8 </small></li>
                  <li onClick={() => setPerPage(9)} className='py-2 fw-bold pointer'><small> 9 </small></li>
                  <li onClick={() => setPerPage(10)} className='py-2 fw-bold pointer'><small> 10 </small></li>
                  <li onClick={() => setPerPage(11)} className='py-2 fw-bold pointer'><small> 11 </small></li>
                  <li onClick={() => setPerPage(12)} className='py-2 fw-bold pointer'><small> 12 </small></li>
                  <li onClick={() => setPerPage(13)} className='py-2 fw-bold pointer'><small> 13 </small></li>
                  <li onClick={() => setPerPage(14)} className='py-2 fw-bold pointer'><small> 14 </small></li>
                  <li onClick={() => setPerPage(15)} className='py-2 fw-bold pointer'><small> 15 </small></li>
                </ul>
              </div>

              <p className="mr-3">{page} of {Math.ceil(+projectsReducer.totalBusinesses / per_page)} </p>

              <h5 className="mr-3 fw-bold">
                {
                  page > 1 &&
              <i onClick={prev} className="fa fa-angle-left mr-2 pointer" aria-hidden="true"></i>
                }
                {
                  page < Math.ceil(+projectsReducer.totalBusinesses / per_page) &&
              <i className="fa fa-angle-right pointer" onClick={next} aria-hidden="true"></i>
                }
              </h5>
            </div>

          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default OnboardedBusinesses;