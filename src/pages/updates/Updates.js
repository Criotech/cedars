import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchProspects, fetchCM, approvePCMs } from '../../redux/actions/usersAction';
import ApiService from '../../utils/apiService';
import UsersTable from '../../components/Users';
import ServicesComponent from "../../components/Services"
import DepartmentComponent from '../../components/Department';


const Department = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();


  const alert = useSelector(({ alert }) => alert);
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
  const [cmSearchText, changeCMSearchText] = useState('');
  const [pcmSearchText, changePCMSearchText] = useState('');
  const [departments, setDepartments] = useState([]);


  const fetchAllDepartments = async () => {
    try {
      let res = await ApiService.fetchDepartments();
      console.log(res.data.data);
      setDepartments(res.data.data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchAllDepartments();
  }, []);


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
    <div>im
      <DashboardLayout title='Department'>
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
                  {loadingReducer.loading ? 'Loading...' : 'Approve selected'}
                </button>
            }

          </div>

          <DepartmentComponent data={departments} />

        </section>
      </DashboardLayout>
    </div>
  );
};

export default Department;
