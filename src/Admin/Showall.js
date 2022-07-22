import React, { Component } from 'react'
import axios from 'axios'
import './Admin.css'
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default class showall extends Component {
    constructor(){
        super();
        this.state={
            Employee:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:27853/api/Employee_LMS/ShowAll').then(response=>{
            this.setState({Employee:response.data})
        }).catch(error=>{
            console.warn(error);
        })
    }
    render() {
        const {Employee}=this.state;
        return (<>
            <div className= "Showall">
                <div className = "head"> 
                    <strong>Show All Employee</strong><br/>
                </div><br/>
                {/* <table className="show-all-employee-table" border={1} >  */}
                <MDBTable hover>
          <MDBTableHead>
                <tr className="table-primary">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Department</th>
                    <th scope="col">Available Leave</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                {
                   Employee.map(x=>
                        <tr >
                            {/* <th scope='row'>1</th> */}
                            <td scope="row">{x.emp_Id}</td>
                            <td scope="row">{x.emp_Name}</td>
                            <td scope="row">{x.emp_Email}</td>
                            <td scope="row">{x.emp_Mobile}</td>
                            <td scope="row">{x.emp_Dept}</td>
                            <td scope="row">{x.available_Leave}</td>
                        </tr>)
                }
                </MDBTableBody>
                </MDBTable>
                {/* </table> */}
               
          </div>  <br/>
          <Link to={'/Admin_Dashboard'}>
           <button className="btn" >Back</button></Link>
           </>
       )
    }
}