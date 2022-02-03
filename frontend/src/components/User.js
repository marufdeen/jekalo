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
    error: '',
    success: ''
    }; 
    this.deleteUSer = this.deleteUSer.bind(this);
    this.onChange = this.onChange.bind(this);
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
         console.log(data.error);
      if (data.error) {  
      this.setState({ error: data.error })
      }
        console.log(data.newUser);
      if(data.newUser) { 
        const usersCopy = [...this.state.users];
        usersCopy.push(data.newUser)
      this.setState({ users: usersCopy })
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
  render() {
    const { users, user} = this.state; 
    return ( 
      <div>
    <UserForm user={user} onChange={this.onChange} onSubmit={this.onSubmit} /> 
    <UserList users={users} deleteUSer={this.deleteUSer}/>

      </div>
    )
  }
}

export default User;
