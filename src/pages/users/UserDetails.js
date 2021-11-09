import React, {useEffect} from 'react';
import swal from 'sweetalert';
import moment from 'moment';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useHistory } from 'react-router-dom';
import { Card } from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { getSingleUser, toggleActiveUser, updateBusinessStatus } from '../../redux/actions/usersAction';
import loadingReducer from '../../redux/reducers/loadingReducer';

const UserDetails = ({location}) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();


  const alert = useSelector(({ alert }) => alert);
  const usersReducer = useSelector(({ usersReducer }) => usersReducer);
 
  useEffect(()=>{
    dispatch(getSingleUser(location.state.id));
  }, [dispatch, location]);

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

  let businesses = usersReducer.cm.businesses;
  let attendance = usersReducer.cm.attendance;

  var arBusinesses = [];
  for(const item in businesses){
    arBusinesses.push(businesses[item]);
  }

  var arAttendance = [];
  for(const item in attendance){
    arAttendance.push(attendance[item]);
  }

  const verifyBusiness = (businessId) => {
    dispatch(updateBusinessStatus({status: 1, userId: usersReducer.cm.id}, businessId));
  };

  const renderBusiness = () => {
    return arBusinesses.map((item, i)=>{
      return (
        <tr key={item.id}>
          <td>{i+1}</td>
          <td>{moment(item.created_at).format('YYYY-MM-DD, h:mm:ss')}</td>
          <td>{item.business_name}</td>
          <td>{item.business_email}</td>
          <td>{item.business_owner}</td>
          <td onClick={()=>verifyBusiness(item.id)} ><p className={item.status==='approved'?'badge bg-green text-white pointer':'badge bg-pending text-white pointer'}>{item.status==='approved'?'verified':'pending'}</p></td>
          <td>{item.reject_reason}</td>
        </tr>
      );
    });
  };



  const renderAttendance = () => {
    return arAttendance.map(item=>{
      return (
        <div key={item.id} className="training-list-item">
          <div className="d-flex">
            <i className="fa fa-tag" aria-hidden="true"></i>
            <p>{item.training.title}</p>
          </div>
          <div>
            <input className="form-check-input" type="checkbox" checked={true} id="flexCheckChecked" />
          </div>
        </div>
      );
    });
  };

  const toggleUserState = () => {
    dispatch(toggleActiveUser(({id: usersReducer.cm.id, status: usersReducer.cm.status==='active'?0:1})));
  };


  return (
    <div>
      <DashboardLayout title='Users'>
        <section className="user-section">
          <div className='d-flex justify-content-between align-items-center'>
            <h4><i onClick={() => history.push('/users')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            {
              loadingReducer.loading?
                <button onClick={toggleUserState} style={{ marginTop: -10 }} className="btn bg-green text-white px-3 py-2 fw-bold mt-2">
              Loading...
                </button>
                :
                <button onClick={toggleUserState} style={{ marginTop: -10 }} className="btn bg-green text-white px-3 py-2 fw-bold mt-2">
                  {usersReducer.cm.status==='active'?'Deactivate user':'Activate user'}  
                </button>
            }

          </div>
          
          <div className="flex-between mt-3">
            <div className="d-flex align-items-center">
              <div style={{ height: 100, width: 100 }} className="circle-big mt-3 mr-2">
                <img src={usersReducer.cm.profile&&usersReducer.cm.profile.photo} width="100%" height="100%" style={{ borderRadius: '50%' }} alt="Avatar" />
              </div>
              <div className="d-flex flex-column align-items-baseline">
                <h5 className="fw-bold mt-2">{usersReducer.cm.name}</h5>
                <p style={{ color: '#17161699', marginTop: 10 }}>State code: {usersReducer.cm.profile&&usersReducer.cm.profile.nysc_state_code}</p>
                <p style={{ color: '#17161699' }}>Part of DO_DEEL CDS since  {moment(usersReducer.cm.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
              </div>
            </div>
            <div>
              <p className="text-primary fw-bold">{usersReducer.cm.email}</p>
              <p>{usersReducer.cm.profile&&usersReducer.cm.profile.phone_number}</p>
            </div>
          </div>

          <div className="mt-4">
            <Card>
              <p className="fw-bold text-green">Trainings completed</p>
              <div className="mt-2">
                {
                  renderAttendance()
                }
              </div>
            </Card>
          </div>

          <div className='mt-4'>
            <Card>
              <p className="fw-bold text-green">Onboarded businesses</p>
            
              <div className="mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Time stamp</th>
                      <th scope="col">Business name</th>
                      <th scope="col">Email address</th>
                      <th scope="col">Owner’s name</th>
                      {/* <th scope="col">Phone number</th> */}
                      <th scope="col">Status</th>
                      <th scope="col">Comment</th>

                    </tr>
                  </thead>
                  <tbody>
                    
                    {
                      renderBusiness()
                    }


                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default UserDetails;
