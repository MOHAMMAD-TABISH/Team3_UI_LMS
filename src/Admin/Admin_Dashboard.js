import React, { Component } from 'react'
import { Link, useHref, useNavigate } from "react-router-dom";

export default class Admin_Dashboard extends Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <div>
              <div class="col main pt-5 mt-3">
         
         
         <p class="lead d-none d-sm-block"><strong>Hello Admin,</strong></p>
  
        
         <div class="row mb-3">
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card bg-success text-white h-100">
                     <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                         <div class="rotate">
                             <i class="fa fa-user fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">Show All Employee</h6><br/>
                         <Link to={'/Showall'}>
                         <button style={{backgroundColor:"Yellow"}} >Click me</button>
                         </Link >
                     </div>
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-danger h-100">
                     <div class="card-body bg-danger">
                         <div class="rotate">
                             <i class="fa fa-list fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">Show All manager</h6><br/>
                         <Link to={'/Showall_manager'}>
                         <button style={{backgroundColor:"hotpink"}}>Click me</button></Link>
                     </div>
                 </div>
             </div>
             <div class="col-xl-3 col-sm-6 py-2">
                 <div class="card text-white bg-info h-100">
                     <div class="card-body bg-info">
                         <div class="rotate">
                           <i class="fab fa-twitter fa-4x"></i>
                         </div>
                         <h6 class="text-uppercase">Create New Employee</h6><br/>
                         <Link to={'/Create_employee'}>
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
                         <h6 class="text-uppercase">Create A Manager</h6><br/>
                         <Link to={'/Create_manager'}>
                         <button style={{backgroundColor:"lightred"}}>Click me</button></Link>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <Link to={'/Admin_Login'}><button>Log Out</button></Link>
     </div>
        )
    }
}
