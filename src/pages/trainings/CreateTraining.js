import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import Tabs from '../../components/Tabbar';
import Form from '../../components/createTraining/Form';
import Upload from '../../components/createTraining/upload';


const CreateTraining = () => {
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      <DashboardLayout title='Trainings'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/trainings')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">Create New Training</h5>


            <div className='mt-5 px-5 az'>
              <Tabs tabs={[{name: 'Overview'}, {name: 'Resources'}]} setCurrentTab={setCurrentTab} currentTab={currentTab} />
              
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

export default CreateTraining;
