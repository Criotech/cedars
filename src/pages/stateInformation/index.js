import React, { useEffect, useState } from 'react';
import { states, range } from '../../utils/states';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchExcos } from '../../redux/actions/excosAction';

const Index = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const alert = useSelector(({ alert }) => alert);
  const excosReducer = useSelector(({ excosReducer }) => excosReducer);

  const [excos, setExcos] = useState({
    stateCode: 'ab'
  });

  useEffect(() => {
    dispatch(fetchExcos(excos.stateCode));
  }, [dispatch, excos.stateCode]);

  useEffect(() => {
    if (alert.message) {
      addToast(alert.message, { appearance: 'error' });
    }
    if (alert.success) {
      addToast(alert.success, { appearance: 'success' });
    }
  }, [alert.message, alert.success, addToast]);

  const handleChange = (e) => {
    setExcos({ ...excos, [e.target.name]: e.target.value });
    dispatch(fetchExcos(excos.stateCode));
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
      <DashboardLayout title='StatesInfo'>
        <h5 className="fw-bold mb-3">State Information</h5>
        <div className='row container mt-5 pt-4'>
          <div className="mb-4  input-family col-md-4">
            <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
            <select name='stateCode' onChange={handleChange} className="form-select" style={{ height: 60 }} aria-label="Default select example">
              {
                states.map(x => (
                  <option key={x.state_code} value={x.state_code}>{x.state_name}</option>
                ))
              }
            </select>
          </div>

          <div className="mb-4 input-family col-md-4">
            <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
            <select name='deployed_state' onChange={handleChange} className="form-select" style={{ height: 60 }} aria-label="Default select example">
              {
                range(2020, 2040).map(x => (
                  <option key={x} value={x}>{x}</option>
                ))
              }
            </select>
          </div>

          <div className="mb-4 input-family col-md-4">
            <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
            <select name='deployed_state' onChange={handleChange} className="form-select" style={{ height: 60 }} aria-label="Default select example">
              <option value='Batch A, Stream 1'>Batch A, Stream 1</option>
              <option value='Batch A, Stream 2'>Batch A, Stream 2</option>
              <option value='Batch B, Stream 1'>Batch B, Stream 1</option>
              <option value='Batch B, Stream 2'>Batch B, Stream 2</option>
              <option value='Batch C, Stream 1'>Batch C, Stream 1</option>
              <option value='Batch C, Stream 2'>Batch C, Stream 2</option>

            </select>
          </div>

          <div className="d-flex justify-content-end pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa fa-plus-circle text-green mr-1" aria-hidden="true"></i>
            <small className="text-green">
                            Create New
            </small>
          </div>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-body p-5">
                  <div className='flex-between'>
                    <h5 className="fw-bold mb-3">Add New</h5>
                    <button style={{ border: '1px solid #D5D8DF', fontSize: 12 }} className='btn' data-bs-dismiss="modal">
                      <i className="fa fa-close" aria-hidden="true"></i>
                    </button>
                  </div>

                  <div className='mt-5'>
                    <form>
                      <div className="mb-4 input-family">
                        <label htmlFor="exampleInputPassword1" className="label">Full Name</label>
                        <input type="text" className="form-control" id="exampleInputtext1" />
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className="mb-4 input-family">
                            <label htmlFor="exampleInputPassword1" className="label">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputtext1" />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className="mb-4 input-family">
                            <label htmlFor="exampleInputPassword1" className="label">Phone number</label>
                            <input type="text" className="form-control" id="exampleInputtext1" />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className="mb-4 input-family">
                            <label htmlFor="exampleInputPassword1" className="label">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputtext1" />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className="mb-4 input-family">
                            <label htmlFor="exampleInputPassword1" className="label">Phone number</label>
                            <input type="text" className="form-control" id="exampleInputtext1" />
                          </div>
                        </div>
                      </div>

                      <small>Select Position</small>

                      <div className='row mt-3'>
                        <div className='col-md-3'>
                          <div className='flex-between form-control'>
                            <small>President</small>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                          </div>
                        </div>

                        <div className='col-md-3'>
                          <div className='flex-between form-control'>
                            <small>V. President</small>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='flex-between form-control'>
                            <small>G. Secretary</small>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='flex-between form-control'>
                            <small>PRO</small>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                          </div>
                        </div>

                      </div>


                    </form>
                  </div>

                </div>
                <div className="modal-footer">

                  <button type="button" className="btn bg-green text-white">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          <h5 className="fw-bold mb-3  mt-5">Excecutives</h5>


          <div className='excos-list'>
            <div className='row'>
              {
                excosReducer.excos.map(x => (
                  <div key={x.id} className='col-md-6 mb-4 px-5'>
                    <small className='text-green'>{x.position}</small>
                    <div className='flex-between mt-1'>
                      <p className='fw-bold text-grey'>{x.name}</p>
                      <button onClick={()=>copyToClipBoard(`${x.name} ${x.email} ${x.phone_number} ${x.instagram} ${x.facebook}`)} className='btn btn-outline-dark'>
                        <small>Copy Profile <i className="fa fa-clone" aria-hidden="true"></i></small>
                      </button>
                    </div>
                    <div className='mt-2 fw-bold'>
                      <p className='text-grey'><span className='mr-1'>{x.email}</span>  {x.phone_number}</p>
                    </div>
                    <div className='mt-2 fw-bold text-grey'>
                      <p><span className='mr-1'>IG: {x.instagram} </span> <span>Facebook: {x.facebook}</span></p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <h5 className="fw-bold mb-3  mt-5">Schedule Officers</h5>


          <div className='excos-list'>
            <div className='row'>
              {
                excosReducer.scheduleOfficers.map(x => (
                  <div key={x.id} className='col-md-6 mb-4 px-5'>
                    <small className='text-green'>{x.position}</small>
                    <div className='flex-between mt-1'>
                      <p className='fw-bold text-grey'>{x.name}</p>
                      <button onClick={()=>copyToClipBoard(`${x.name} ${x.email} ${x.phone_number} ${x.instagram} ${x.facebook}`)} className='btn btn-outline-dark'>
                        <small>Copy Profile <i className="fa fa-clone" aria-hidden="true"></i></small>
                      </button>
                    </div>
                    <div className='mt-2 fw-bold'>
                      <p className='text-grey'><span className='mr-1'>{x.email}</span>  {x.phone_number}</p>
                    </div>
                    <div className='mt-2 fw-bold text-grey'>
                      <p><span className='mr-1'>IG: {x.instagram} </span> <span>Facebook: {x.facebook}</span></p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <h5 className="fw-bold mb-3  mt-5">Community Managers</h5>


          <div className='excos-list'>
            <div className='row'>
              {
                excosReducer.communityManagers.map(x => (
                  <div key={x.id} className='col-md-6 mb-4 px-5'>
                    <small className='text-green'>{x.position}</small>
                    <div className='flex-between mt-1'>
                      <p className='fw-bold text-grey'>{x.name}</p>
                      <button onClick={()=>copyToClipBoard(`${x.name} ${x.email} ${x.phone_number} ${x.instagram} ${x.facebook}`)} className='btn btn-outline-dark'>
                        <small>Copy Profile <i className="fa fa-clone" aria-hidden="true"></i></small>
                      </button>
                    </div>
                    <div className='mt-2 fw-bold'>
                      <p className='text-grey'><span className='mr-1'>{x.email}</span>  {x.phone_number}</p>
                    </div>
                    <div className='mt-2 fw-bold text-grey'>
                      <p><span className='mr-1'>IG: {x.instagram} </span> <span>Facebook: {x.facebook}</span></p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>

  );
};

export default Index;
