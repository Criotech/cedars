import React from 'react';

const Upload = () => {
  return (
    <div>
      <div className='upload-file-container'>
        <div className="pointer d-flex flex-column align-items-center"><i className="fa fa-upload" aria-hidden="true"></i>
          <p className='text-center mt-4'>Drag and drop a file, or Browse</p>
        </div>
      </div>

      <div className='mt-3'>
        <div className='flex-between py-2'>
          <p className='fw-bold'>CreateAGMB-Template.pdf</p>
          <button style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
            <i className="fa fa-close" aria-hidden="true"></i>
          </button>
        </div>
        <div className='flex-between py-2'>
          <p className='fw-bold'>CreateAGMB-Template.pdf</p>
          <button style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
            <i className="fa fa-close" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <button className="btn bg-green text-white px-4 py-2 float-end mt-5">
    Upload
      </button>
    </div>
  );
};

export default Upload;
