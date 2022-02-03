import React from 'react';
import InputField from './InputField';  
 
  const feedBack = (props) => { 
    const { error, success } = props;
    if (error) { 
      return <div style={{textAlign: 'center'}}  className="alert-danger p-3" > {error} </div> ;
    }
    if (success) {    
      return <div style={{textAlign: 'center'}}  className="alert-success p-3" > {success} </div>;
     } 
} 
  const UserForm = (props) =>  {
    return ( 
    <div className="container mt-5 mx-5">
    {/*  { feedBack() }   */} 
    <form action="" method="post" onSubmit={props.onSubmit}>
    <div className="row"> 

      <InputField  type='text' name='firstName' value={props.user.firstName} 
      onChange={props.onChange} placeholder='Anifowose' label='First Name'  />

      <InputField  type='text' name='lastName' value={props.user.lastName} onChange={props.onChange} placeholder='Habeeb' label='Last Name'  />

      <div className="col-md-3">
                  <div className="d-grid gap-2 my-4">
                  <button className="btn btn-primary btn-custom-primary" type="submit">submit</button>
      </div>
</div>
<div className="row"> 
    <InputField  type='text' name='userName' value={props.user.userName} onChange={props.onChange} placeholder='mthamayor' label='User Name'  />

    <InputField  type='date' name='dob' value={props.user.dob} onChange={props.onChange} placeholder='Emeka' label='Date Of Birth'  />
</div>
    </div>
    </form>  
    </div>
    )
  } 

export default UserForm;
