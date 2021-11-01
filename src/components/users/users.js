import React from 'react';
import moment from 'moment';

const CMS = ({users, history, selectedNo, setPerPage, prev, next, per_page, page, totalUsers}) => {
  return (
    <div className="users-list-container">
      <div className="top d-flex align-items-center">
        <i className="fa fa-trash" style={{ color: '#C7C7C7' }} aria-hidden="true"></i>
        <p className="mx-3 fw-bold"> {selectedNo} selected </p>
        <span className="badge bg-green text-white">{selectedNo}</span>
      </div>

      <div className="table-section">
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col"><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></th> */}
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">State code</th>
              <th scope="col">Phone number</th>
              <th scope="col">No. of trainings attended</th>
              <th scope="col">Status</th>
              <th scope="col">Recent activity</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(x => (
                <tr key={x.id} className={x.active ? 'active pointer' : 'pointer'}>
                  {/* <td><input onChange={() => handleCheck(x.id)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></td> */}
                  <th onClick={()=>history.push('/users/user', { id: x.id })} className="d-flex"><div className="circle"><img src={x.profile.photo} width="100%" height="100%" style={{ borderRadius: '50%' }} alt="Avatar" /></div>{x.name}</th>
                  <td onClick={()=>history.push('/users/user', { id: x.id })}>{x.email}</td>
                  <td onClick={()=>history.push('/users/user', { id: x.id })}>{x.profile.nysc_call_up_number}</td>
                  <td onClick={()=>history.push('/users/user', { id: x.id })}>{x.profile.phone}</td>
                  <td onClick={()=>history.push('/users/user', { id: x.id })}>6</td>
                  <td onClick={()=>history.push('/users/user', { id: x.id })}>{x.status}</td>
                  <td onClick={()=>history.push('/users/user', { id: x.id })}>{moment (x.updated_at).fromNow ()}</td>
                </tr>
              ))
            }


          </tbody>
        </table>

      </div>

      <div className='footer'>
        <div className="d-flex align-items-center">
          <div className='dropdown'>
            <p className="mr-3 pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" aria-hidden="true">Rows per page {per_page} <i  className="fa fa-caret-down  pointer"></i></p>
            <ul className="dropdown-menu p-2" style={{marginLeft: -90}} aria-labelledby="dropdownMenuButton1">
              <li onClick={()=>setPerPage(1)} className='py-2 fw-bold pointer'><small> 1 </small></li>
              <li onClick={()=>setPerPage(2)} className='py-2 fw-bold pointer'><small> 2 </small></li>
              <li onClick={()=>setPerPage(3)} className='py-2 fw-bold pointer'><small> 3 </small></li>
              <li onClick={()=>setPerPage(4)} className='py-2 fw-bold pointer'><small> 4 </small></li>
              <li onClick={()=>setPerPage(5)} className='py-2 fw-bold pointer'><small> 5 </small></li>
              <li onClick={()=>setPerPage(6)} className='py-2 fw-bold pointer'><small> 6 </small></li>
              <li onClick={()=>setPerPage(7)} className='py-2 fw-bold pointer'><small> 7 </small></li>
              <li onClick={()=>setPerPage(8)} className='py-2 fw-bold pointer'><small> 8 </small></li>
              <li onClick={()=>setPerPage(9)} className='py-2 fw-bold pointer'><small> 9 </small></li>
              <li onClick={()=>setPerPage(10)} className='py-2 fw-bold pointer'><small> 10 </small></li>
              <li onClick={()=>setPerPage(11)} className='py-2 fw-bold pointer'><small> 11 </small></li>
              <li onClick={()=>setPerPage(12)} className='py-2 fw-bold pointer'><small> 12 </small></li>
              <li onClick={()=>setPerPage(13)} className='py-2 fw-bold pointer'><small> 13 </small></li>
              <li onClick={()=>setPerPage(14)} className='py-2 fw-bold pointer'><small> 14 </small></li>
              <li onClick={()=>setPerPage(15)} className='py-2 fw-bold pointer'><small> 15 </small></li>
            </ul>
          </div>
            
          <p className="mr-3">{page} of {Math.ceil(+totalUsers/per_page)} </p>
          <h5 className="mr-3 fw-bold">
            {
              page>1 &&
              <i onClick={prev} className="fa fa-angle-left mr-2 pointer" aria-hidden="true"></i> 
            }
            {
              page<Math.ceil(+totalUsers/per_page) &&
              <i className="fa fa-angle-right pointer" onClick={next} aria-hidden="true"></i>
            }
          </h5>
        </div>

      </div>
    </div>

  );
};

export default CMS;
