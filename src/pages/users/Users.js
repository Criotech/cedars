import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchProspects, fetchCM, approvePCMs } from '../../redux/actions/usersAction';
import CMS from '../../components/users/users';
import PCMS from '../../components/users/pcms';
import ApiService from '../../utils/apiService';
import Admins from '../../components/Admins';
import UsersComponent from '../../components/Users';

const Users = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();


  const alert = useSelector(({ alert }) => alert);
  const usersReducer = useSelector(({ usersReducer }) => usersReducer);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);
  const [userType, switchUserType] = useState('user');

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
  const [cmSearchText, changeCMSearchText] = useState('');
  const [pcmSearchText, changePCMSearchText] = useState('');
  const [usersData, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);


  const fetchAllUsers = async () => {
    try {
      let res = await ApiService.fetchUsers();
      setUsers(res.data.data);
    } catch (e) {
      console.log(e)
    }
  }
  const fetchAllAdmins = async () => {
    try {
      let res = await ApiService.fetchAdmins();
      setAdmins(res.data.data);
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchAllAdmins();
    fetchAllUsers();
  }, []);

  const toCreateUser = () => {
    history.push('/users/add')
  }

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
      dispatch(fetchCM(page, x));
    } else {
      dispatch(fetchProspects(page, x));
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

  const handleCMSearch = async (e) => {
    changeCMSearchText(e.target.value);

    await dispatch(fetchCM(page, per_page, cmSearchText));
  };

  const handlePCMSearch = async (e) => {
    changePCMSearchText(e.target.value);

    await dispatch(fetchProspects(page, per_page, pcmSearchText));
  };

  const handleSwitchTab = (x) => {
    switchUserType(x);
    setPage(1);
  };

  return (
    <div>
      <DashboardLayout title='users'>
        <section className="users-section">
          <div className="flex-between">
            <div className="d-flex align-items-center">
              <h5 onClick={() => switchUserType('user')} className={userType === 'user' ? 'text-green fw-bold mb-3 mr-3 pointer' : 'fw-bold mb-3 mr-3 pointer'}>Users</h5>
              <h5 onClick={() => switchUserType('admin')} className={userType === 'admin' ? 'text-green fw-bold mb-3 mr-3 pointer' : 'fw-bold mb-3 mr-3 pointer'}>Admins</h5>
            </div>
            {
              userType === 'cm'
                ?
                <button onClick={() => history.push('/users/add')} className="btn bg-green text-white">
                  Add
                </button>
                :
                <button onClick={toCreateUser} className="btn bg-green text-white">
                  Create User
                </button>
            }

          </div>

          {
            userType === 'user' ? <UsersComponent data={usersData}/>
            :
            <Admins data={admins} />
          }


        </section>
      </DashboardLayout>
    </div>
  );
};

export default Users;
