import React, { Component } from 'react'
import axios from 'axios';
import {Link} from  'react-router-dom'
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
            password:''
        }
        this.CreateNewEmployee=this.CreateNewEmployee.bind(this);
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(object){
        this.setState(object);
    }
    CreateNewEmployee()
    {
        axios.post('http://localhost:27852/api/Employee_LMS/InsertEmpolyee',{
          
            emp_Name:this.state.emp_Name,
            emp_Email:this.state.emp_Email,
            emp_Mobile:this.state.emp_Mobile,
            emp_Dept:this.state.emp_Dept,
            available_Leave:this.state.available_Leave,
            password:this.state.password
        }).then(response=>{
            console.warn(response);
            alert("Employee created");
        }).catch(error=>{
            alert("error");
        })
    }
    render() {
        return (
            <> <div>
               <h3><strong>Fill this form to Create Employee</strong></h3><br/> 
            </div>
            <form>
                <table>
            
                    <tr>
                        <td>
                           Emter Employee Name
                        </td>
                        <td><input type="text" name="emp_Name"
                        onChange={(e)=>this.handlechange({emp_Name:e.target.value})}></input></td>
                    </tr>

                    <tr>
                        <td>
                            Enter Employee Email
                        </td>
                        <td><input type="text" name="emp_Email"
                        onChange={(e)=>this.handlechange({emp_Email:e.target.value})}></input></td>
                    </tr>

                    <tr>
                        <td>
                            Enter Employee Mobile Number
                        </td>
                        <td><input type="text" name="emp_Mobile"
                        onChange={(e)=>this.handlechange({emp_Mobile:e.target.value})}></input></td>
                    </tr>

                    <tr>
                        <td>
                            Enter Employee Department 
                        </td>
                        <td><input type="text" name="emp_Dept"
                        onChange={(e)=>this.handlechange({emp_Dept:e.target.value})}></input></td>
                    </tr>

                    <tr>
                        <td>
                            Enter the Available Detail
                        </td>
                        <td><input type="text" name="available_Leave"
                        onChange={(e)=>this.handlechange({available_Leave:e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td>
                            Enter the Password
                        </td>
                        <td><input type="text" name="password"
                        onChange={(e)=>this.handlechange({available_Leave:e.target.value})}></input></td>
                    </tr>
                    <tr>
                        <td><button type="button" onClick={this.CreateNewEmployee}>Create</button></td>
                    </tr>
                </table>

            </form>
            <br/>
            <Link to={'/Admin_Dashboard'}>
       <button className="showall-back-button" >Back</button></Link>
            </>
        )
    }
}
