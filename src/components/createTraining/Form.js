import React from 'react';

const Form = ({ setCurrentTab, handleChange, handleUpdate, loading, training, data }) => {
  return (
    <div>
      <form>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputPassword1" className="label">Title of Training</label>
          <input type="text" className="form-control" name='title' onChange={handleChange} value={training.title} />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">name of Tutor</label>
          <input type="text" className="form-control" name='tutor' onChange={handleChange} value={training.tutor} />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">Overview</label>
          <textarea type="text" name='overview' style={{ height: 200 }} className="form-control" onChange={handleChange} value={training.overview} />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">URL to Video</label>
          <input type="text" name='live_video' className="form-control" onChange={handleChange} value={training.live_video} />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">Start Time</label>
          <input type="datetime-local" name='start_time' className="form-control" onChange={handleChange} value={training.start_time} />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">Attendance Time</label>
          <input type="datetime-local" name='attandance_time' className="form-control" onChange={handleChange} value={training.attandance_time} />
        </div>
        {
          data &&
          <div className="mb-4 input-family">
            <label htmlFor="exampleInputtext1" className="label">Training Status</label>
            <select name='status' onChange={handleChange} className="form-select" style={{ height: 60 }} aria-label="Default select example">
              <option value={0}>Pending</option>
              <option value={1}>Approved</option>
              <option value={3}>Started</option>
              <option value={4}>Attendance Opened</option>
              <option value={5}>Closed</option>
            </select>
          </div>
        }


      </form>
      <div className='d-flex justify-content-end'>
        {
          data ?
            <button onClick={handleUpdate} className="btn bg-green text-white px-4 py-2 float-end mt-5">
              {loading?'Loading...':'Update Training'}
            </button>
            :
            <button onClick={handleUpdate} style={{ marginTop: -10 }} className="btn bg-green text-white px-5 py-2 fw-bold">
          Next
            </button>
            
        }

      </div>

    </div>

  );
};

export default Form;


