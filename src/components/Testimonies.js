import React, { useState } from 'react';
import moment from 'moment';

const Testimonies = ({ data, setPerPage, prev, next, per_page, page, totalUsers, loading, handlePCMSearch, filterPCMByStatus, pcmSearchText }) => {
    console.log(data, 'soloman')
  const [showFIlter, toggleFilter] = useState(false);
  const [allChecked, setAllChecked] = useState(false);


  return (
    <div className="users-list-container">
      <div className="top d-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center mr-5'>
          <p className="mx-3 fw-bold">Services </p>
          <span className="badge bg-green text-white">{data.length}</span>
        </div>
        <div className='search-bar-container'>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input onChange={handlePCMSearch} value={pcmSearchText} type="text" className="form-control flex-grow-1" placeholder='Search for User' />
        </div>
        <div className="dropdown bg-success position relative">
          <button onClick={() => toggleFilter(!showFIlter)} className="btn btn-secondary dropdown-toggle" type="button">
            Filter
          </button>
          {
            showFIlter &&
            <div className='border position-absolute bg-white p-2'>
              <p onClick={() => filterPCMByStatus(0)} className='pointer py-2 border-bottom'>Pending</p>
              <p onClick={() => filterPCMByStatus(1)} className='pointer py-2 border-bottom'>Approved</p>
              <p onClick={() => filterPCMByStatus(null)} className='pointer py-2 border-bottom'>All</p>
            </div>
          }
        </div>
111
      </div>

          <div className="table-section">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col">Name</th>
                  <th scope="col">Created</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(x => (
                    <tr key={x.id} className={x.active ? 'active pointer' : 'pointer'}>
                       <td><b>{x.title}</b></td>
                      <td >{x.content}</td>
                      <td >{x.name}</td>
                      <td >{moment(x.createdAt).format('DD/MM/YYY DD:MM a')}</td>
                      <td ></td>
                    </tr>
                  ))
                }


              </tbody>
            </table>
          </div>

      <div className='footer'>
        <div className="d-flex align-items-center">
          <div className='dropdown'>
            <p className="mr-3 pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" aria-hidden="true">Rows per page {per_page} <i className="fa fa-caret-down  pointer"></i></p>
            <ul className="dropdown-menu p-2" style={{ marginLeft: -90 }} aria-labelledby="dropdownMenuButton1">
              <li onClick={() => setPerPage(1)} className='py-2 fw-bold pointer'><small> 1 </small></li>
              <li onClick={() => setPerPage(2)} className='py-2 fw-bold pointer'><small> 2 </small></li>
              <li onClick={() => setPerPage(3)} className='py-2 fw-bold pointer'><small> 3 </small></li>
              <li onClick={() => setPerPage(4)} className='py-2 fw-bold pointer'><small> 4 </small></li>
              <li onClick={() => setPerPage(5)} className='py-2 fw-bold pointer'><small> 5 </small></li>
              <li onClick={() => setPerPage(6)} className='py-2 fw-bold pointer'><small> 6 </small></li>
              <li onClick={() => setPerPage(7)} className='py-2 fw-bold pointer'><small> 7 </small></li>
              <li onClick={() => setPerPage(8)} className='py-2 fw-bold pointer'><small> 8 </small></li>
              <li onClick={() => setPerPage(9)} className='py-2 fw-bold pointer'><small> 9 </small></li>
              <li onClick={() => setPerPage(10)} className='py-2 fw-bold pointer'><small> 10 </small></li>
              <li onClick={() => setPerPage(11)} className='py-2 fw-bold pointer'><small> 11 </small></li>
              <li onClick={() => setPerPage(12)} className='py-2 fw-bold pointer'><small> 12 </small></li>
              <li onClick={() => setPerPage(13)} className='py-2 fw-bold pointer'><small> 13 </small></li>
              <li onClick={() => setPerPage(14)} className='py-2 fw-bold pointer'><small> 14 </small></li>
              <li onClick={() => setPerPage(15)} className='py-2 fw-bold pointer'><small> 15 </small></li>
            </ul>
          </div>

          <p className="mr-3">{page} of {Math.ceil(+totalUsers / per_page)} </p>

          <h5 className="mr-3 fw-bold">
            {
              page > 1 &&
              <i onClick={prev} className="fa fa-angle-left mr-2 pointer" aria-hidden="true"></i>
            }
            {
              page < Math.ceil(+totalUsers / per_page) &&
              <i className="fa fa-angle-right pointer" onClick={next} aria-hidden="true"></i>
            }
          </h5>
        </div>

      </div>
    </div>

  );
};

export default Testimonies;
