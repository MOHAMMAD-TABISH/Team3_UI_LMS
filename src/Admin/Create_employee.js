import React, { Component } from 'react'
import axios from 'axios';
import {Link,Navigate} from  'react-router-dom'
import { Route } from 'react-router';
export default class Create_employee extends Component {
    constructor(){
        super();
        this.state={       
            emp_Name:'',
            emp_Email:'',
            emp_Mobile:'',
            emp_Dept:'',
            available_Leave:'',
            password:'',
            image:''
           // loggedIn:''
        }
       
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token == null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    
        this.CreateNewEmployee=this.CreateNewEmployee.bind(this);
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(object){
        this.setState(object);
    }
    CreateNewEmployee()
    {
        axios.post('http://localhost:27853/api/Employee_LMS/InsertEmpolyee',{
          
            emp_Name:this.state.emp_Name,
            emp_Email:this.state.emp_Email,
            emp_Mobile:this.state.emp_Mobile,
            emp_Dept:this.state.emp_Dept,
            available_Leave:this.state.available_Leave,
            password:this.state.password,
            image:this.state.image
        }).then(response=>{
            console.warn(response);
            alert("Employee created");
            setTimeout(10);
            window.location.reload();
        }).catch(error=>{
            alert("error");
        })
    }
    render() {
      //  let loggedIn=this.state.loggedIn
        if(this.state.loggedIn==false){
            return<Navigate to="/Admin_Login"/>
       }
        return (
            <> <div>
            <h3 className="head"><strong>Fill this form to Create Employee</strong></h3>
         </div>
         <form>
             <table>
         
                 <tr>
                     <td className="label">
                        Enter Emp Name:
                     </td>
                     <td><input className="input" type="text" name="emp_Name" placeholder="Enter Emp Name"
                     onChange={(e)=>this.handlechange({emp_Name:e.target.value})}></input></td>
                 </tr>

                 <tr>
                     <td className="label">
                         Enter Emp Email
                     </td>
                     <td><input className="input" type="text" name="emp_Email" placeholder="Enter Emp Email"
                     onChange={(e)=>this.handlechange({emp_Email:e.target.value})}></input></td>
                 </tr>

                 <tr>
                     <td className="label">
                         Enter Emp Mobile Number:
                     </td>
                     <td><input className="input" type="text" name="emp_Mobile" placeholder="Enter Emp Mobile Number"
                     onChange={(e)=>this.handlechange({emp_Mobile:e.target.value})}></input></td>
                 </tr>

                 <tr>
                     <td className="label">
                         Enter Emp Department:
                     </td>
                     <td><input className="input" type="text" name="emp_Dept" placeholder="Enter Emp Department"
                     onChange={(e)=>this.handlechange({emp_Dept:e.target.value})}></input></td>
                 </tr>

                 <tr>
                     <td className="label">
                         Enter the Available Leaves:
                     </td>
                     <td><input className="input" type="text" name="available_Leave" placeholder="Available Leaves"
                     onChange={(e)=>this.handlechange({available_Leave:e.target.value})}></input></td>
                 </tr>
                 <tr>
                     <td className="label">
                         Enter the Password:
                     </td>
                     <td><input className="input" type="text" name="password" placeholder="Enter the password"
                     onChange={(e)=>this.handlechange({password:e.target.value})}></input></td>
                 </tr>
                 <tr>
                     <td className="label">
                        Enter Image URL
                     </td>
                     <td><input className="input" type="text" name="image" placeholder="enter image url"
                     onChange={(e)=>this.handlechange({image:e.target.value})}></input></td>
                 </tr>
                 <tr>
                     <td><button className="btn" type="button" onClick={this.CreateNewEmployee}>Create</button></td>
                 </tr>
             </table>

         </form>
         
         <Link to={'/Admin_Dashboard'}>
    <button className="btn" >Back</button></Link>
         </>
        )
    }
}
