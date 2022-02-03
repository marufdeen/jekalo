import React from 'react';
import trash from '../assets/Icon/trash.svg'
function UserList(props) {
    const usersList =  props.users.map((user) => ( 
        <tr key={user._id}>
          <td className="align-middle"><p className="name-tag mt-2 mb-2">
            {user.namePrefix}</p></td>
          <td className="align-middle">{user.userName}</td>
              <td className="align-middle">{user.firstName} {user.lastName}</td>
              <td className="align-middle">{user.dob}</td>
              <td className="align-middle" onClick={() => props.deleteUSer(user._id) }><img src={trash} alt="delete" className="img-fluid icon" /></td>
          </tr>
        )) 
        return (

     <div className="row my-5">
     <div className="col-md-8">
         <table className="table table-borderless">
             <thead className="table-light">
               <tr>
                 <th scope="col">Users</th>
                 <th scope="col"></th>
                 <th scope="col"></th>
                 <th scope="col"></th>
                 <th scope="col"></th>
               </tr>
             </thead>
             <tbody> 
                 {usersList} 
    </tbody>
           </table>
     </div>
 </div>
        )
}

export default UserList;
