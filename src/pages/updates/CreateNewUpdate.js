import React, {useEffect, useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addNews } from '../../redux/actions/newsActions';

const CreateUpdate = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [update, setUpdate] = useState({
    title: '',
    content: '',
  });
  const [image, setImage] = useState('');
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      // const filename = files[0].name;

      // var parts = filename.split('.');
      // const fileType = parts[parts.length - 1];
      // console.log('fileType', fileType); //ex: zip, rar, jpg, svg etc.

      setImage(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };


  const alert = useSelector(({ alert }) => alert);
  const loadingReducer = useSelector(({ loadingReducer }) => loadingReducer);


  useEffect(() => {
    if (alert.message) {
      addToast(alert.message, { appearance: 'error' });
    }
    if (alert.success) {
      addToast(alert.success, { appearance: 'success' });
      history.push('/updates');
    }
  }, [alert.message, alert.success, addToast, history]);

  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await dispatch(addNews({...update, image: image}));
  };

  const removeFile = () => {
    setImage('');
  };

  return (
    <div>
      <DashboardLayout title='Trainings'>
        <section className="trainings-section">
          <div>
            <h4><i onClick={() => history.push('/updates')} className="fa fa-angle-left fw-bold pointer" aria-hidden="true"></i> </h4>
            <h5 className="fw-bold mt-3">Create New Update</h5>


            <div className='mt-5 px-5 az'>
              <form>
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputPassword1" className="label">Title</label>
                  <input type="text" className="form-control" name='title' value={update.title} onChange={handleChange} />
                </div>
        
                <div className="mb-4 input-family">
                  <label htmlFor="exampleInputtext1" className="label">Details</label>
                  <textarea type="text" style={{ height: 200 }} className="form-control" name='content' value={update.content} onChange={handleChange}  />
                </div>

              </form>
              <input
                style={{ display: 'none' }}
                // accept=".zip,.rar"
                ref={inputFile}
                onChange={handleFileUpload}
                type="file"
              />
              <p className="fw-bold">Add cover</p>

              <div className="d-flex align-items-center">
                <div className="mr-2 fd-flex align-items-center justify-content-center" style={{backgroundColor: '#E7F9E9'}}>
                  <span style={{fontSize: 20}} className="material-icons-outlined">
                    image
                  </span>
                </div>
                <div>
                  <p>Please upload an image in JPG, JPEG or PNG format (not more than 1MB)</p>
                  <button style={{backgroundColor: '#E7F9E9', fontSize: 11}} onClick={onButtonClick} className="btn">Chooose file</button>
                </div>

              </div>

              {
                image && 
                  <div key={image.path} className='flex-between py-2'>
                    <p className='fw-bold'>{image.name} - {image.size} bytes</p>
                    <button onClick={removeFile} style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
                      <i className="fa fa-close" aria-hidden="true"></i>
                    </button>
                  </div>
              }

              <div className="d-flex justify-content-center mt-5">
                <button style={{fontSize: 13}} onClick={handleSubmit} className='btn bg-green text-white  px-5 py-2'>{loadingReducer.loading?'Loading...':'Publish'}</button>
              </div>
         
            </div>


          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default CreateUpdate;
