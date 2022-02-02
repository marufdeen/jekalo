import React, { Component } from 'react';
import api from '../services/api';
import trash from '../assets/Icon/trash.svg'
export class UserDetails extends Component {
    constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
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
  render() {
    const { users } = this.state;
    return users.map((user) => ( 
    <tr>
      <td className="align-middle"><p className="name-tag mt-2 mb-2">
        {user.namePrefix}</p></td>
      <td className="align-middle">{user.userName}</td>
          <td className="align-middle">{user.firstName} {user.lastName}</td>
          <td className="align-middle">{user.dob}</td>
          <td className="align-middle"><img src={trash} alt="delete" className="img-fluid icon" /></td>
      </tr>
    ))
  }
}

export default UserDetails;
