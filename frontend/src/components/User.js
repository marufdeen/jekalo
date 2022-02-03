import React, { Component, Fragment } from 'react';
import api from '../services/api';
import UserForm from './UserForm';
import UserList from './UserList';
export class User extends Component {
    constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        dob: '',  
    },
    error: false,
    success: false
    }; 
    this.deleteUSer = this.deleteUSer.bind(this);
    this.onChange = this.onChange.bind(this);
    this.feedBack = this.feedBack.bind(this);
  }
  componentDidMount() {
    api.get("/users")
      .then(({ data }) => {
        this.setState({ users: data.usersFound });
      })
      .catch((error) => {
        console.log(error);
      });
  } 
  onChange(e) {
      const { name, value } = e.target; 
      const userCopy ={ ...this.state.user } 
      const newUserState = {...userCopy, [name]: value} 
      this.setState({ user: newUserState });
  } 
  onSubmit = (e) => {
      e.preventDefault(); 
      const userDetails = {...this.state.user}
      api.post('/users', userDetails)
       .then( ({data}) => {   
      if (data.error) {  
      this.setState({ error: data.error })
      } 
      if(data.newUser) { 
        const usersCopy = [...this.state.users];
        usersCopy.push(data.newUser)
      this.setState({success: 'You have successfully created a user', users: usersCopy })
      } 
    })
    .catch((error) =>  error);
  }
  deleteUSer(userId) {
    api.delete(`/users/${userId}`)
    .then(({ data }) => {
      const usersCopy = [...this.state.users].filter(user => user._id !== userId ) 
      return this.setState({users: usersCopy})
    }) 
    .catch((error) => {
      console.log(error);
    });
  } 
   feedBack  () { 
    const { error, success } = this.state;
    if (error) { 
      return <div style={{textAlign: 'center'}}  className="alert-danger p-3" > {error} </div> ;
    }
    if (success) {    
      return <div style={{textAlign: 'center'}}  className="alert-success p-3" > {success} </div>;
     } 
} 
  render() {
    const { users, user} = this.state; 
    return ( 
      <div>
    <UserForm user={user} feedBack={this.feedBack} onChange={this.onChange} onSubmit={this.onSubmit} /> 
    <UserList users={users} deleteUSer={this.deleteUSer}/>

      </div>
    )
  }
}

export default User;
