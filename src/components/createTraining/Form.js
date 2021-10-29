import React from 'react';

const Form = ({setCurrentTab, handleChange, training}) => {
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
          <input type="date" name='start_time' className="form-control" onChange={handleChange} value={training.start_time} />
        </div>

      </form>
      <div className='d-flex justify-content-end'>
        <button onClick={()=>setCurrentTab(1)} style={{ marginTop: -10 }} className="btn bg-green text-white px-5 py-2 fw-bold">
                            Next
        </button>
      </div>

    </div>

  );
};

export default Form;
