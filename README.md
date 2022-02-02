# jekalo

## Application Features

jekalo is a car pooling application.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Development](#development)

### API Deployment (Non-Persistent)

API is deployed at [https://jekalo-app-v1.herokuapp.com/](https://jekalo-app-v1.herokuapp.com/)

## Technologies

- [NodeJS](https://nodejs.org/) - Runtime Environment
- [ExpressJs](https://expressjs.com/) - Web Application Framework
- [MongoDB](https://www.mongodb.com/) - Database

## Features

### Users
 
- Create a user 
- View all users 
- Delete a patient 

## API Endpoints

###

<table>

<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<th colspan=3>Users</th>

<tr><td>POST</td> <td>/users</td> <td>Create users</td></tr> 

<tr><td>GET</td> <td>/users</td> <td> View all users</td></tr> 

<tr><td>DELETE</td> <td>/users/:userId</td> <td>Delete a user</td></tr>
 
</table>

## Getting Started

### Installation

- git clone
  [jekalo]https://github.com/marufdeen/jekalo)
- Run `yarn install` or `npm install` to install packages
- Run `yarn run seed` or `npm run seed` to automatically seed admin into the database
- Run `yarn run dev` or `npm run dev` to start the server
- Navigate to [localhost:8080](http://localhost:8080) in browser to access the application

## Testing

#### Data

* User Creation

```sh
 {
 firstName: String,
 lastName: String,
 username: String,
 dob: String,
}
```
 
#### Prerequisites

- [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

- After installing as shown above
- Navigate to [localhost:8080](http://localhost:8080/api) in
  [Postman](https://getpostman.com/) to access the application
- Super-admin login details ( {email: admin@dervac.com, password: admin} )
