import React, { Component } from 'react';
import InputField from './InputField';
import api from '../services/api'
import UserList from './UserList';
class UserForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          userName: '',
          dob: '',  
      };
      this.onChange = this.onChange.bind(this); 
      this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  } 
  onSubmit = (e) => {
      e.preventDefault(); 
      const userDetails = {...this.state}
      api.post('/users', userDetails)
       .then( ({data}) => { 
        console.log('HELLo',data);
      if (data.error) {  
      this.setState({ error: data.error })
      }
      if(data.newUser) { 
      this.setState({ success: 'You have successfully created a user!' })
      }
      delete this.state.error;
      delete this.state.success;
    })
    .catch((error) =>  error);
  }
  feedBack = () => { 
    const { error, success } = this.state;
    if (error) { 
      return <div style={{textAlign: 'center'}}  className="alert-danger p-3" > {error} </div> ;
    }
    if (success) {    
      return <div style={{textAlign: 'center'}}  className="alert-success p-3" > {success} </div>;
     } 
} 
  render() {
    const { firstName, lastName, userName, dob } = this.state 
    return ( 
    <div className="container mt-5 mx-5">
    { this.feedBack() } 
    <form action="" method="post" onSubmit={this.onSubmit}>
    <div className="row"> 

      <InputField  type='text' name='firstName' value={firstName} 
      onChange={this.onChange} placeholder='Anifowose' label='First Name'  />

      <InputField  type='text' name='lastName' value={lastName} onChange={this.onChange} placeholder='Habeeb' label='Last Name'  />

      <div className="col-md-3">
                  <div className="d-grid gap-2 my-4">
                  <button className="btn btn-primary btn-custom-primary" type="submit">submit</button>
      </div>
</div>
<div className="row"> 
    <InputField  type='text' name='userName' value={userName} onChange={this.onChange} placeholder='mthamayor' label='User Name'  />

    <InputField  type='date' name='dob' value={dob} onChange={this.onChange} placeholder='Emeka' label='Date Of Birth'  />
</div>
    </div>
    </form>  
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
   <UserList />

   </tbody>
          </table>
    </div>
</div>
    </div>
    )
  }
}

export default UserForm;
