import React, { Component } from 'react'
import axios from 'axios'
export default class SignUp extends Component {
  constructor(){
    super();
    this.state={
        emp_Id:'',
        emp_Name:'',
        emp_Email:'',
        emp_Mobile:'',
        emp_Dept:'',
        available_Leave:'',
        Password:''
    }
    this.CreateNewEmployee=this.CreateNewEmployee.bind(this);
    this.handlechange=this.handlechange.bind(this);
}
handlechange(e){
  this.setState(e);
}
CreateNewEmployee()
{
    axios.post('http://localhost:27853/api/Employee_LMS/InsertEmpolyee',{
        emp_Id:this.state.emp_Id,
        emp_Name:this.state.emp_Name,
        emp_Email:this.state.emp_Email,
        emp_Mobile:this.state.emp_Mobile,
        emp_Dept:this.state.emp_Dept,
        available_Leave:this.state.available_Leave,
        Password:this.state.Password
    }).then(response=>{
        console.warn(response);
        alert("data inserted");
    }).catch(error=>{
        alert("error");
    })
}
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>this.handlechange({emp_Id:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}