import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchProspects, fetchCM, approvePCMs } from '../../redux/actions/usersAction';
import CMS from '../../components/users/users';
import PCMS from '../../components/users/pcms';

const Users = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();


  const alert = useSelector(({ alert }) => alert);
  const usersReducer = useSelector(({ usersReducer }) => usersReducer);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);
  const [userType, switchUserType] = useState('cm');

  const [users, selectUser] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
    { id: 7, active: false },
    { id: 8, active: false },
    { id: 9, active: false },
    { id: 10, active: false },
  ]);
  const [pcmIds, setPCMIds] = useState([]);
  const [selectedNo, countSelected] = useState(0);
  const [page, setPage] = useState(1);
  const [per_page, handleSetPerPage] = useState(15);

  useEffect(() => {
    dispatch(fetchProspects(page, per_page));
    dispatch(fetchCM(page, per_page));
  }, [dispatch, page, per_page]);

  const next = () => {
    let x = page + 1;
    setPage(x);
    if (userType === 'cm') {
      dispatch(fetchCM(page, per_page));
    } else {
      dispatch(fetchProspects(page, per_page));
    }
  };

  const prev = () => {
    let x = page - 1;
    setPage(x);
    if (userType === 'cm') {
      dispatch(fetchCM(page, per_page));
    } else {
      dispatch(fetchProspects(page, per_page));
    }
  };

  const setPerPage = (x) => {
    handleSetPerPage(x);

    if (userType === 'cm') {
      dispatch(fetchCM(page, per_page));
    } else {
      dispatch(fetchProspects(page, per_page));
    }
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
    }
  }, [alert.message, alert.success, addToast]);

  const approvePCMUsers = async () => {
    if (pcmIds.length === 0) {
      return;
    }
    await dispatch(approvePCMs(pcmIds, 1));
  };


  const handleSelectPCMIds = (id) => {
    let check = pcmIds.includes(id);
    if (check) {
      let a = pcmIds.filter(x => {
        return x !== id;
      });
      setPCMIds(a);
    } else {
      setPCMIds([...pcmIds, id]);
    }
  };

  const handleCheck = (x) => {
    let newArr = users;
    newArr[x - 1].active = !newArr[x - 1].active;
    if (newArr[x - 1].active === true) {
      countSelected(selectedNo + 1);
    } else {
      countSelected(selectedNo - 1);
    }
    selectUser([...newArr]);
  };

  const handleSwitchTab = (x) => {
    switchUserType(x);
    setPage(1);
  };

  return (
    <div>
      <DashboardLayout title='Users'>
        <section className="users-section">
          <div className="flex-between">
            <div className="d-flex align-items-center">
              <h5 onClick={() => handleSwitchTab('cm')} className={userType === 'cm' ? 'text-green fw-bold mb-3 mr-3 pointer' : 'fw-bold mb-3 mr-3 pointer'}>Active Users</h5>
              <h5 onClick={() => handleSwitchTab('pcm')} className={userType === 'pcm' ? 'text-green fw-bold mb-3 mr-3 pointer' : 'fw-bold mb-3 mr-3 pointer'}>Interested Users</h5>
            </div>

            {
              userType === 'cm'
                ?
                <button onClick={() => history.push('/users/add')} className="btn bg-green text-white">
                      Add
                </button>
                :
                <button onClick={approvePCMUsers} className="btn bg-green text-white">
                  {loadingReducer.loading ? 'Loading...' : 'Approve all'}
                </button>
            }

          </div>

          {
            userType === 'cm'
              ?
              <CMS users={usersReducer.cms} history={history} prev={prev} next={next} totalUsers={usersReducer.totalCMs} setPerPage={setPerPage}
                handleCheck={handleCheck} selectedNo={selectedNo} page={page} per_page={per_page} />
              :
              <PCMS users={usersReducer.pcms} handleSelectPCMIds={handleSelectPCMIds} selectedCount={pcmIds.length} handleCheck={handleCheck} selectedNo={selectedNo}
                prev={prev} next={next} totalUsers={usersReducer.totalPCMs} setPerPage={setPerPage} page={page} per_page={per_page} />
          }

        </section>
      </DashboardLayout>
    </div>
  );
};

export default Users;
