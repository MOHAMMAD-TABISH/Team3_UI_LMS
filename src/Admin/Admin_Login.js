import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Admin_Login extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
            Emp_Email:'',
            Password:''
          }
          this.Admin_Login= this.Admin_Login.bind(this);
          this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
          this.setState(e);
    }
    Admin_Login(e){
        e.preventDefault();
        let Emp_Email = this.state.Emp_Email;
        let Password = this.state.Password;
        if(Emp_Email=="admin@gmail.com"&&Password=="Admin"){
            alert("Login Successful");
            window.location="/Admin_Dashboard"
        }
        else{
            alert("Email or Password Incorrect");
        }
       
        // fetch("http://localhost:27852/api/Employee_LMS/Admin_Login?"+Emp_Email+"&"+Password).
        // then(res => res.json()).then(result =>
        //     {
        //       console.log(result);
              
        //       if(result>0){
        //         alert("Valid");
        //         window.location="/Dashboard";
        //       }
        //       else{
        //         alert("InValid");
        //       }
        //     })
        
    }
  render() {
    return (
      <>
      <form>
        <h3>Admin Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({Emp_Email:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({Password:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary"  onClick={this.Admin_Login}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
            <Link to={'/'}><button>Back</button></Link>
            </>

    )
  }
}