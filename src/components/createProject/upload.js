import React from 'react';

const Upload = ({getRootProps, getInputProps, removeFile, myFiles, loading, addResourcesToTraining, data, deleteAProjectResource}) => {
  const files = myFiles.map((file) => (
    <div key={file.path} className='flex-between py-2'>
      <p className='fw-bold'>{file.path} - {file.size} bytes</p>
      <button onClick={removeFile(file)} style={{border: '1px solid #D5D8DF', fontSize: 12}} className='btn'>
        <i className="fa fa-close" aria-hidden="true"></i>
      </button>
    </div>
  ));
  const resources = data.resources.map((x)=> (
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
          <p className='text-center mt-4'>Drag and drop files, or Browse</p>
        </div>
      </div>

      <div className='mt-3'>
        {
          data && 
            resources
        }
        {
          files
        }
      </div>

      <button  onClick={addResourcesToTraining} className="btn bg-green text-white px-4 py-2 float-end mt-5">
        {loading?'Loading...':'Upload'}
      </button>
    </div>
  );
};

export default Upload;
