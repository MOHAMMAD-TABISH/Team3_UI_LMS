import React, { Component } from 'react';
import axios from 'axios';
import {Link,Navigate} from 'react-router-dom';
import './Manager.css'

export default class ManagerDetails extends Component {
    constructor(){
        super();
        this.state={
            
            mng_Id: '',
            employeeId: '',
            mng_Name: '',
            mng_Email: '',
            mng_Mobile: ''

        }
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token == null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
        this.searchbyid=this.searchbyid.bind(this)
    }
    searchbyid(e){
        e.preventDefault();
        let UserID =sessionStorage.getItem("UserID");
      axios.get('http://localhost:27853/api/Manager/EmployeeMangerDetails/'+UserID).then(response=>
        {
            this.setState({
                mng_Id:response.data.mng_Id,
                employeeId:response.data.emp_Name,
                mng_Name:response.data.mng_Name,
                mng_Email:response.data.mng_Email,
                mng_Mobile:response.data.mng_Mobile,
         
            })
        }).catch(error=>{console.warn(error);})
    }

    render() {
        if(this.state.loggedIn==false){
            return<Navigate to="/Admin_Login"/>}
       const{mng_Id}=this.state;
        const{employeeId}=this.state;
        const{mng_Name}=this.state;
        const{mng_Email}=this.state;
        const{mng_Mobile}=this.state;
        
        return (
            <div>
                 <div style={{textAlign:'center'}}>
                     <h3 className="head"> <strong>My Manager Details</strong> </h3>
                 
                  <br/>
            <div className="search-by-id-input" style={{textAlign:'center'}}>  
            </div>
            {/* <input type="text"  name="emp_Id" onChange={(e)=>this.setState({emp_Id:e.target.value})}>
            </input> */}
             <button className="btn" onClick={(e)=>this.searchbyid(e)}>SHOW</button>
            </div>
            {/* <button onClick={(e)=>this.searchbyid(e)}>Search</button></div> */}
            <br/><br/>
            <table className="table" border="1" align="center" >
                <tr className="table-primary">
                    <th>mng_Id</th>
                    {/* <th>employeeId</th> */}
                    <th>mng_Name</th>
                    <th>mng_Email</th>
                    <th>mng_Mobile</th>
                   
                </tr>
                <tr>
                <td>{mng_Id}</td>
                {/* <td>{employeeId}</td> */}
                <td>{mng_Name}</td>
                <td>{mng_Email}</td>
                <td>{mng_Mobile}</td>

                </tr>
            </table><br/><br/>
            <div>
                <Link to={'/Dashboard'}><button>Back</button></Link>
            </div>
            </div>
        )
    }
}