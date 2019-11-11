import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { register } from './UserFunctions';
import axios from 'axios';


class Archive extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {},
      date: new Date(),
      description:'',

}
}


  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      description: decoded.description,
    })
  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-10 mx-auto">
            <h1 className="text-center">Congratulations {this.state.first_name} your post has been added to database!</h1>
          </div>

          </div></div>


    )
  }
}

export default Archive
