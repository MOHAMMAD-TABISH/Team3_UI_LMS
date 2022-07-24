import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom';
import ReactRoundedImage from "react-rounded-image";
export default class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
            emp_Id:'',
            emp_Name:'',
            emp_Email:'',
            emp_Mobile:'',
            emp_Dept:'',
            available_Leave:'',
            image:''

        }
        // this.searchbyid=this.searchbyid.bind(this)
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token == null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }
    logout(){
        localStorage.removeItem('token')
    }
    componentDidMount(){
      //  e.preventDefault();
      let UserID =sessionStorage.getItem("UserID");
      axios.get('http://localhost:27853/api/Employee_LMS/MyDetails/'+UserID).then(response=>
        {
            this.setState({
                emp_Id:response.data.emp_Id,
                emp_Name:response.data.emp_Name,
            emp_Email:response.data.emp_Email,
            emp_Mobile:response.data.emp_Mobile,
            emp_Dept:response.data.emp_Dept,
            available_Leave:response.data.available_Leave,
            image:response.data.image
            })
            
        }).catch(error=>{console.warn(error);})
       
    }
    
    render() {
        let UserID =sessionStorage.getItem("UserID");
        if(this.state.loggedIn==false){
            return<Navigate to="/Admin_Login"/>
        }
        const{image}=this.state;
        const{emp_Dept}=this.state;
        return (
            <>
            <ReactRoundedImage image={image} roundedSize="0" imageWidth="90" imageHeight="90" />
              <p>Employee Id : {UserID}</p>
           
              {/* <div class="col main pt-5 mt-3"> */}
         
         <h3 class="lead d-none d-sm-block"><strong>Welcome To Dashboard</strong></h3>
  
        
         <div class="row mb-3">
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card bg-success text-white h-100">
                     <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                         <div class="rotate">
                             <i class="fa fa-user fa-4x"></i>
                         </div>
                        <h6 class="text-uppercase">My Details</h6><br/><br/>
                        {/* <input type="number" className="id-input" ></input>  */}
                        <Link to={'/Searchbyid'}>
                         <button style={{backgroundColor:"Yellow"}} >Click me</button></Link>
                     </div>
                     
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-danger h-100">
                     <div class="card-body bg-danger">
                         <div class="rotate">
                             <i class="fa fa-list fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">My Manager</h6><br/><br/>
                         <Link to={'/Manager_Info'}><button style={{backgroundColor:"hotpink"}}>Click me</button></Link>
                     </div>
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-info h-100">
                     <div class="card-body bg-info">
                         <div class="rotate">
                           <i class="fab fa-twitter fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">Apply for Leave</h6><br/><Link to={'/Apply_leave'}>
                         <button style={{backgroundColor:"lightgreen"}}>Click me</button></Link>
                     </div>
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-warning h-100">
                     <div class="card-body">
                         <div class="rotate">
                             <i class="fa fa-share fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">All Leave Status</h6><br/>
                         <Link to={'/All_leave_status'}>
                         <button style={{backgroundColor:"lightred"}}>Click me</button></Link>
                     </div>
                 </div>
             </div>
         </div>
     {/* </div> */}

     
     <Link to={'/Approval_deny'}><button style={{backgroundColor:"lightred"}}>Pending Approval</button></Link>
     <br/>
     <br/>
     <Link to={'/sign-in'}><button className="btn" onClick={()=>this.logout()}>Log Out</button></Link>
        </>
        )
    }
}