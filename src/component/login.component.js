import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const initialState =
{
          
  Employee:[],
  Emp_Email:'',
  Password:'',
  emailError: "",
  passwordError: ""

}
export default class Login extends Component {
    constructor(){
        super();
        this.state =initialState;
          this.Login= this.Login.bind(this);
          this.handleChange=this.handleChange.bind(this);
    }

    // handleValidation = () => {
    //   const {
    //      Emp_Email,Password
    //   } = this.state;
    //   let error = '';
    //   let formIsValid = true;
    //       if(!Emp_Email || 
    //           !Password 
    //           ){
    //           formIsValid = false;
    //           error = "Input fields cannot be empty";
              
//     //       } 
// this.setState({error: error});
// return formIsValid;
// }
    handleChange(e){
      this.setState(e);
      // e.preventDefault();
      // let Emp_Email = this.state.Emp_Email;
      //   let Password = this.state.Password;
        
      //    if (Emp_Email.trim().length == 0 || Password.trim().length == 0) {
      //    alert("Feild required");
      //   } else {
      //     console.log('input value is not empty');
      //   }
      
  }
  validate()
  {
      if(this.state.Emp_Email==="" &&  this.state.Password==="")
      {
          this.setState({emailError:"Enter Email"});
          this.setState({passwordError:"Enter Password"});
      }
      
      else if(this.state.Emp_Email==="")
      {
          this.setState(
              {
                  usernameError:"Enter Email"})
      }
      else if(this.state.Password==="")
      {
          this.setState(
              {
                passwordError:"Enter Password"})
      }
      else{
          return true;
      }
  
  }
    Login(e){
        e.preventDefault();
        this.setState({
          emailError:"",passwordError:""
      })
      //   this.setState({
      //     emailError:"",passwordError:""
      // })
      if(this.validate()){
        let Emp_Email = this.state.Emp_Email;
        let Password = this.state.Password;
       
        fetch("http://localhost:27852/api/Employee_LMS/Login?email="+Emp_Email+"&password="+Password).
        then(res => res.json()).then(result =>
            {
              console.log(result);
              if(result>0){
                alert("Valid");
                window.location="/Dashboard";
                sessionStorage.setItem("UserEmail",Emp_Email);
              }
              else{
                alert("Enter correct Username/Password");
              }
            })
          }
        
    }
    
  render() {
    return (<>
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="Emp_Email"
            onChange={(e)=>this.handleChange({Emp_Email:e.target.value})}
          />
           <p style={{ fontSize: 10, color: "red" }}>
            {this.state.emailError}
          </p>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="Passwword"
            onChange={(e)=>this.handleChange({Password:e.target.value})}
          />
          <div style={{ fontSize: 10, color: "red" }}>
            {this.state.passwordError}
          </div>
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
      <Link to={'/'}><button>Back</button></Link>
      </>
    )
  }
}