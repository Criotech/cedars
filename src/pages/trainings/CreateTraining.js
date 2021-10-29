import React, {useState, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import Tabs from '../../components/Tabbar';
import Form from '../../components/createTraining/Form';
import Upload from '../../components/createTraining/upload';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addTraining, updateTraining } from '../../redux/actions/triainingActions';
import {useDropzone} from 'react-dropzone';


const CreateTraining = ({location}) => {
  let data = (location.state)?location.state.training:null;

  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [training, setTraining] = useState({
    title: (data)?data.title:'',
    overview: (data)?data.overview:'',
    live_video: (data)?data.live_video:'',
    start_time: (data)?data.start_time:'',
    tutor: (data)?data.tutor:'',
  });
  const [status, handleCheck] = useState((data&&data.status!=='started')?true:false);
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
    }
    if (alert.success) {
      addToast(alert.success, { appearance: 'success' });
      history.push('/trainings');
    }
  }, [alert.message, alert.success, addToast, history]);

  const handleChange = (e) => {
    setTraining({ ...training, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await dispatch(addTraining({...training, status, myFiles: myFiles}));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await dispatch(updateTraining({...training, status, myFiles: myFiles}, data.id));
  };

  return (
    <div>
      <DashboardLayout title='Trainings'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/trainings')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className="fw-bold mt-3">{data?'Update Training':'Create New Training'}</h5>

              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Lock this training</label>
                <input className="form-check-input" onChange={()=>handleCheck(!status)} type="checkbox" checked={status?true:false} id="flexSwitchCheckDefault" />
              </div>
            </div>

            <div className='mt-5 px-5 az'>
              <Tabs tabs={[{name: 'Overview'}, {name: 'Resources'}]} setCurrentTab={setCurrentTab} currentTab={currentTab} />
              
              {
                currentTab===0 ? <Form handleChange={handleChange} setCurrentTab={setCurrentTab} training={training} /> : 
                  <Upload getRootProps={getRootProps} getInputProps={getInputProps} myFiles={myFiles} 
                    removeFile={removeFile} loading={loadingReducer.loading} handleSubmit={handleSubmit}
                    handleUpdate={handleUpdate} data={data?data:null}
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
