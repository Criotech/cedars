import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import Tabs from '../../components/Tabbar';
import Form from '../../components/createProject/Form';
import Upload from '../../components/createProject/upload';


const CreateProject = () => {
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      <DashboardLayout title='Projects'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/projects')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">Create New Project</h5>


            <div className='mt-5 px-5 az'>
              <Tabs tabs={[{name: 'Project Details'}, {name: 'Upload resources'}]} setCurrentTab={setCurrentTab} currentTab={currentTab} />
              
              {
                currentTab===0 ? <Form setCurrentTab={setCurrentTab} /> : <Upload />
              }
         
            </div>

          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateProject;
