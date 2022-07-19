import React, { Component } from 'react'
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
            Emp_Email:'',
            Password:''
          }
          this.Login= this.Login.bind(this);
          this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
          this.setState(e);
    }
    Login(e){
        e.preventDefault();
        let Emp_Email = this.state.Emp_Email;
        let Password = this.state.Password;
       
        fetch("http://localhost:27852/api/Employee_LMS/Login?"+Emp_Email+"&"+Password).
        then(res => res.json()).then(result =>
            {
              console.log(result);
              
              if(result>0){
                alert("Valid");
                window.location="/Dashboard";
              }
              else{
                alert("InValid");
              }
            })
        
    }
  render() {
    return (
      <form>
        <h3>Sign In</h3>
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
          <button type="submit" className="btn btn-primary"  onClick={this.Login}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}