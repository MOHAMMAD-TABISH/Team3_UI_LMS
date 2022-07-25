import React, { Component } from 'react'
import axios from 'axios'
import {Link,Navigate} from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default class Searchbyid extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
           emp_Id:'',
            emp_Name:'',
            emp_Email:'',
            emp_Mobile:'',
            emp_Dept:'',
            available_Leave:''

        }
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token == null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
       // this.searchbyid=this.searchbyid.bind(this)
    }
    componentDidMount(){
       // e.preventDefault();
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
   
         render() { if(this.state.loggedIn==false){
            return<Navigate to="/Admin_Login"/>
         }
        const{emp_Id}=this.state;
        const{emp_Name}=this.state;
        const{emp_Email}=this.state;
        const{emp_Mobile}=this.state;
        const{emp_Dept}=this.state;
        const{available_Leave}=this.state;
       const{image}=this.state;
        return (
            <div>
            <div style={{textAlign:'center'}}>
         <h3> <strong>My Details</strong> </h3>
         {/* <button  onClick={(e)=>this.searchbyid(e) } className="btn">Show</button> */}
       </div><br/>
       <div className="search-by-id-input" style={{textAlign:'center'}}>
       {/* <label>Enter the Id</label>
       <div></div>
       <input type="text" name="emp_Id" onChange={(e)=>this.setState({emp_Id:e.target.value})}>
       </input>
       <button onClick={(e)=>this.searchbyid(e)}>Search</button> */}
       </div>
       {/* <br/><br/><br/> */}
       {/* <table border="1" align="center"> */}
       <MDBTable>
       <MDBTableHead>
           <tr className="table-primary">
               <th scope="col">emp_Id</th>
               <th scope="col">emp_Name</th>
               <th scope="col">emp_Email</th>
               <th scope="col">emp_Mobile</th>
               <th scope="col">emp_Dept</th>
               <th scope="col">available_Leave</th>
           </tr>
           </MDBTableHead>
           <MDBTableBody>
           <tr>
           <td scope="row">{emp_Id}</td>
           <td scope="row">{emp_Name}</td>
           <td scope="row">{emp_Email}</td>
           <td scope="row">{emp_Mobile}</td>
           <td scope="row">{emp_Dept}</td>
           <td scope="row">{available_Leave}</td>
           </tr>
           </MDBTableBody>
           </MDBTable>
       {/* </table><br/><br/> */}
       <Link to={'/Dashboard'}><button className="btn">Back</button></Link>
       </div>
        )
    }
}