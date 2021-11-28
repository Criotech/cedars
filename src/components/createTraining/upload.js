import React from 'react';

const Upload = ({getRootProps, getInputProps, removeFile, myFiles, handleSubmit, loading, data, resourceData, addResourcesToTraining, deleteAProjectResource}) => {
  const files = myFiles.map((file) => (
    <div key={file.path} className='flex-between py-2'>
      <p className='fw-bold'>{file.path} - {file.size} bytes</p>
      <button onClick={removeFile(file)} style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
        <i className="fa fa-close" aria-hidden="true"></i>
      </button>
    </div>
  ));
  const resources = resourceData.resources.map((x)=> (
    <div key={x.id} className='flex-between py-2'>
      <p className='fw-bold'>{x.filename}</p>
      {/* onClick={()=>deleteAProjectResource(x.id)} */}
      <button onClick={()=>deleteAProjectResource(x.id)} style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
        <i className="fa fa-close" aria-hidden="true"></i>
      </button>
    </div>
  ));
  
  return (
    <div>
      <div {...getRootProps({className: 'dropzone upload-file-container'})}>
        <input {...getInputProps()} />
        <div className="pointer d-flex flex-column align-items-center"><i className="fa fa-upload" aria-hidden="true"></i>
          <p className='text-center mt-4'>Drag and drop a file, or Browse</p>
        </div>
      </div>

      <div className='mt-3'>
        {
          files
        }
        {
          data && 
          resources
        }
      </div>

      {
        data
          ?
          <button onClick={addResourcesToTraining} className="btn bg-green text-white px-4 py-2 float-end mt-5">
            {loading?'Loading...':'Ok, Update Training Resources'}
          </button>
          :
          <button onClick={handleSubmit} className="btn bg-green text-white px-4 py-2 float-end mt-5">
            {loading?'Loading...':'Ok, Publish Training'}
          </button>
      }
    </div>
  );
};

export default Upload;
