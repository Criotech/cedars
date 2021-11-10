import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import Tabs from '../../components/Tabbar';
import Form from '../../components/createProject/Form';
import Upload from '../../components/createProject/upload';
import StateInfo from '../../components/createProject/stateInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { updateProject, fetchProject } from '../../redux/actions/projectsAction';


const CreateProject = ({ location }) => {
  let x = (location.state) ? location.state.project : null;

  const history = useHistory();
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);
  const projectsReducer = useSelector(({ projectsReducer }) => projectsReducer);

  const [project, setProject] = useState({
    title: '',
    overview: '',
    guide: '',
  });
  
  useEffect(()=>{
    dispatch(fetchProject(x.id));
    setProject({ title: projectsReducer.project.title, overview: projectsReducer.project.overview, guide: projectsReducer.project.guide  });
  }, [dispatch, x.id, projectsReducer.project.title, projectsReducer.project.overview, projectsReducer.project.guide]);

  const alert = useSelector(({ alert }) => alert);

  const [currentTab, setCurrentTab] = useState(0);

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

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await dispatch(updateProject({ ...project, status: 1 }, projectsReducer.project.id));
  };


  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      addToast('Copied', { appearance: 'success' });
    } catch (err) {
      addToast('Failed to copy', { appearance: 'error' });
    }
  };

  return (
    <div>
      <DashboardLayout title='Projects'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/projects')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">{projectsReducer.project?'Update Project':'Create New Project'}</h5>


            <div className='mt-5 px-5 az'>
              <Tabs tabs={[{name: 'Project Details'}, {name: 'Upload resources'}, {name: 'Excos'}]} setCurrentTab={setCurrentTab} currentTab={currentTab} />
              
              {
                currentTab===0 && <Form data={projectsReducer.project} project={project} handleChange={handleChange} handleUpdate={handleUpdate} loading={loadingReducer.loading} setCurrentTab={setCurrentTab} /> 
              }

              {
                currentTab===1 &&  <Upload />
              }
              {
                currentTab===2 && <StateInfo data={projectsReducer.project} copyToClipBoard={copyToClipBoard} />
              }
         
            </div>

          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateProject;
