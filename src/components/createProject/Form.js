import React from 'react';
const Form = ({ setCurrentTab, data, project, handleChange, handleUpdate, loading }) => {
  return (
    <div>
      <form>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputPassword1" className="label">Project name</label>
          <input type="text" name='title' value={project.title} onChange={handleChange} className="form-control" id="exampleInputtext1" />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">Project overview</label>
          <textarea name='overview' onChange={handleChange} value={project.overview} type="text" style={{ height: 200 }} className="form-control" id="exampleInputtext1" />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">Project guide</label>
          <textarea name='guide' value={project.guide} onChange={handleChange} type="text" style={{ height: 200 }} className="form-control" id="exampleInputtext1" />
        </div>
      </form>
      <div className='d-flex justify-content-end'>
        {
          data ?
            <button onClick={handleUpdate} style={{ marginTop: -10 }} className="btn bg-green text-white px-5 py-2 fw-bold">
              {loading ? 'Loading...' : 'Save'}
            </button> :
            <button onClick={() => setCurrentTab(1)} style={{ marginTop: -10 }} className="btn bg-green text-white px-5 py-2 fw-bold">
              {loading ? 'Loading...' : 'Save'}
            </button>
        }
      </div>

    </div>

  );
};

export default Form;
