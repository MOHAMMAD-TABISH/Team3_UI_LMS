import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class Searchbyid extends Component {
    constructor(){
        super();
        this.state={
            
            emp_Id:'',
            emp_Name:'',
            emp_Email:'',
            emp_Mobile:'',
            emp_Dept:'',
            available_Leave:''

        }
        this.searchbyid=this.searchbyid.bind(this)
    }
    searchbyid(e){
        e.preventDefault();
        let emp_Id=this.state.emp_Id;
        axios.get('http://localhost:27852/api/Employee_LMS/MyDetails/'+emp_Id).then(response=>
        {
            this.setState({
                emp_Id:response.data.emp_Id,
                emp_Name:response.data.emp_Name,
            emp_Email:response.data.emp_Email,
            emp_Mobile:response.data.emp_Mobile,
            emp_Dept:response.data.emp_Dept,
            available_Leave:response.data.available_Leave
            })
        }).catch(error=>{console.warn(error);})
    }
    render() {
        const{emp_Id}=this.state;
        const{emp_Name}=this.state;
        const{emp_Email}=this.state;
        const{emp_Mobile}=this.state;
        const{emp_Dept}=this.state;
        const{available_Leave}=this.state;
        return (
            <div>
                 <div style={{textAlign:'center'}}>
              <h3> <strong>Search By Id</strong> </h3>
            </div><br/>
            <div className="search-by-id-input" style={{textAlign:'center'}}>
            <label>Enter the Id</label>
            <div></div>
            <input type="text" name="emp_Id" onChange={(e)=>this.setState({emp_Id:e.target.value})}>
            </input>
            <button onClick={(e)=>this.searchbyid(e)}>Search</button>
            </div>
            <br/><br/><br/>
            <table border="1" align="center" >
                <tr>
                    <td>emp_Id</td>
                    <td>emp_Name</td>
                    <td>emp_Email</td>
                    <td>emp_Mobile</td>
                    <td>emp_Dept</td>
                    <td>available_Leave</td>
                </tr>
                <tr>
                <td>{this.state.emp_Id}</td>
                <td>{emp_Name}</td>
                <td>{emp_Email}</td>
                <td>{emp_Mobile}</td>
                <td>{emp_Dept}</td>
                <td>{available_Leave}</td>
                </tr>
            </table><br/><br/>
            <Link to={'/Dashboard'}><button>Back</button></Link>
            </div>
        )
    }
}
