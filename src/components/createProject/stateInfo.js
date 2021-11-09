import React from 'react';
import { states, range } from '../../utils/states';

const StateInfo = ({ handleChange, data, copyToClipBoard }) => {

  return (
    <div>
      <div className='row'>
        <div className="mb-4 input-family col-sm-4">
          <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
          <select name='deployed_state' onChange={handleChange} className="form-select" style={{height: 60}} aria-label="Default select example">
            {
              states.map(x=>(
                <option key={x.state_code} value={x.state_code}>{x.state_name}</option>
              ))
            }
          </select>
        </div>

        <div className="mb-4 input-family col-sm-4">
          <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
          <select name='deployed_state' onChange={handleChange} className="form-select" style={{height: 60}} aria-label="Default select example">
            {
              range(2020, 2040).map(x=>(
                <option key={x} value={x}>{x}</option>
              ))
            }
          </select>
        </div>

        <div className="mb-4 input-family col-sm-4">
          <label htmlFor="exampleInputtext1" className="label">State of deployment</label>
          <select name='deployed_state' onChange={handleChange} className="form-select" style={{height: 60}} aria-label="Default select example">
            <option value='Batch A, Stream 1'>Batch A, Stream 1</option>
            <option value='Batch A, Stream 2'>Batch A, Stream 2</option>
            <option value='Batch B, Stream 1'>Batch B, Stream 1</option>
            <option value='Batch B, Stream 2'>Batch B, Stream 2</option>
            <option value='Batch C, Stream 1'>Batch C, Stream 1</option>
            <option value='Batch C, Stream 2'>Batch C, Stream 2</option>

          </select>
        </div>
      </div>


      <div>
        <div className='row'>
          {
            data.excos.map(x => (
              <div key={x.id} className='col-md-6 mb-4 px-5'>
                <small className='text-green'>{x.position}</small>
                <div className='flex-between mt-1'>
                  <p className='fw-bold text-grey'>{x.name}</p>
                  <button onClick={() => copyToClipBoard(`${x.name} ${x.email} ${x.phone_number} ${x.instagram} ${x.facebook}`)} className='btn btn-outline-dark'>
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

  );
};

export default StateInfo;
