import React from 'react';

const Form = ({setCurrentTab}) => {
  return (
    <div>
      <form>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputPassword1" className="label">Project name</label>
          <input type="text" className="form-control" id="exampleInputtext1" />
        </div>
        <div className="mb-4 input-family">
          <label htmlFor="exampleInputtext1" className="label">Project overview</label>
          <textarea type="text" style={{ height: 200 }} className="form-control" id="exampleInputtext1" />
        </div>
      </form>
      <div className='d-flex justify-content-end'>
        <button onClick={()=>setCurrentTab(1)} style={{ marginTop: -10 }} className="btn bg-green text-white px-5 py-2 fw-bold">
                            Save
        </button>
      </div>

    </div>

  );
};

export default Form;
