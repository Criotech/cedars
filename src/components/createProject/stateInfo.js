import React from 'react';
import { states, range } from '../../utils/states';

const StateInfo = ({ handleChange }) => {

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

    </div>

  );
};

export default StateInfo;
