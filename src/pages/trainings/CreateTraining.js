import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import Tabs from '../../components/Tabbar';
import Form from '../../components/createTraining/Form';
import Upload from '../../components/createTraining/upload';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addTraining, updateTraining, fetchTraining } from '../../redux/actions/triainingActions';
import { deleteResource, addResources } from '../../redux/actions/resourceAction';

import { useDropzone } from 'react-dropzone';


const CreateTraining = ({ location }) => {
  let data = (location.state) ? location.state.training : null;

  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  useEffect(()=>{
    if (location.state) {
      dispatch(fetchTraining(location.state.training.id));
    }
  }, [dispatch, location]);

  const trainingsReducer = useSelector(({ trainingsReducer }) => trainingsReducer);
  let resourceData = trainingsReducer.training ? trainingsReducer.training : null;

  const [training, setTraining] = useState({
    title: (data) ? data.title : '',
    overview: (data) ? data.overview : '',
    live_video: (data) ? data.live_video : '',
    start_time: (data) ? moment(data.start_time).format('YYYY-MM-DDTHH:mm') : '',
    tutor: (data) ? data.tutor : '',
    attandance_time: (data) ? moment(data.attendance_time).format('YYYY-MM-DDTHH:mm') : '',
    status: (data) ? data.status : ''
  }); 
  
  const [myFiles, setMyFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles]);
  }, [myFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = file => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const alert = useSelector(({ alert }) => alert);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);


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
      history.push('/trainings');
    }
  }, [alert.message, alert.success, addToast, history, data]);

  const handleChange = (e) => {
    setTraining({ ...training, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addTraining({ ...training, myFiles: myFiles }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (training.status === 'closed') {
      training.status = 4;
    } else if (training.status === 'pending') {
      training.status = 0;
    } else if (training.status === 'approved') {
      training.status = 1;
    } else if (training.status === 'started') {
      training.status = 2;
    } else if (training.status === 'attendanceOpened') {
      training.status = 3;
    } 

    await dispatch(updateTraining({ ...training }, data.id));
  };

  const addResourcesToTraining = () => {
    
    dispatch(addResources({myFiles: myFiles, entity_id: location.state.training.id,entity_type: 'training' }));
  };

  const deleteAProjectResource = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteResource(id));
          swal('Operation canceled!');
        } else {
          swal('Operation canceled!');
        }
      });
  };

  return (
    <div>
      <DashboardLayout title='Trainings'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/trainings')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className="fw-bold mt-3">{data ? 'Update Training' : 'Create New Training'}</h5>
            </div>

            <div className='mt-5 px-5 az'>
              <Tabs tabs={[{ name: 'Overview' }, { name: 'Resources' }]} setCurrentTab={setCurrentTab} currentTab={currentTab}  />

              {
                currentTab === 0 ? <Form handleChange={handleChange} loading={loadingReducer.loading} handleUpdate={handleUpdate} setCurrentTab={setCurrentTab} training={training} data={data ? data : null} /> :
                  <Upload addResourcesToTraining={addResourcesToTraining} resourceData={resourceData} getRootProps={getRootProps} getInputProps={getInputProps} myFiles={myFiles}
                    removeFile={removeFile} loading={loadingReducer.loading} handleSubmit={handleSubmit}
                    handleUpdate={handleUpdate} deleteAProjectResource={deleteAProjectResource} data={data ? data : null}
                  />
              }

            </div>


          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateTraining;
