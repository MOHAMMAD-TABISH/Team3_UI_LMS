import React, { Component } from 'react'
import axios from 'axios'
import './Admin.css'
import { Link } from 'react-router-dom';
export default class showall extends Component {
    constructor(){
        super();
        this.state={
            Employee:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:27852/api/Employee_LMS/ShowAll').then(response=>{
            this.setState({Employee:response.data})
        }).catch(error=>{
            console.warn(error);
        })
    }
    render() {
        const {Employee}=this.state;
        return (<>
        <div className= "Showall">
            <div className = "show-all-employee"> 
                <strong>Show All Employee</strong><br/>
            </div><br/>
            <table className="show-all-employee-table" border={1} > 
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile No.</td>
                <td>Department</td>
                <td>Available Leave</td>
            </tr>
            {
               Employee.map(x=>
                    <tr>
                        <td>{x.emp_Id}</td>
                        <td>{x.emp_Name}</td>
                        <td>{x.emp_Email}</td>
                        <td>{x.emp_Mobile}</td>
                        <td>{x.emp_Dept}</td>
                        <td>{x.available_Leave}</td>
                    </tr>)
            }
            
            </table>
           
      </div>  <br/>
      <Link to={'/Admin_Dashboard'}>
       <button className="showall-back-button" >Back</button></Link>
       </>
       )
    }
}