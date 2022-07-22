import React, { Component } from 'react'
import { Link  } from 'react-router-dom';
import axios from 'axios' ;
import './All_leavestatus.css'
export default class All_leave_status extends Component {
    constructor(){
        super();
        this.state={
  ApplyLeave:[]
           
        }
        this.searchbyid=this.searchbyid.bind(this)
    }
    searchbyid(e){
        e.preventDefault();
        let UserID =sessionStorage.getItem("UserID");
        axios.get('http://localhost:27853/api/ApplyLeave/Emp_Leaves/'+UserID).then(response=>
        {
            this.setState({
                ApplyLeave:response.data
            })
            
        }).catch(error=>{console.warn(error);})
       
    }
    render() {
        const {ApplyLeave}=this.state;
        return (
            <div className="apply_leave_return">
            <div>
            <div style={{textAlign:'center'}}>
                <h3 className="head"> <strong>All Leave status</strong> </h3>
            
             <br/>
       {/* <div className="search-by-id-input" style={{textAlign:'center'}}>  <label>Enter your Id</label> */}
       </div>
       {/* <input type="text"  name="emp_Id" onChange={(e)=>this.setState({emp_Id:e.target.value})}>
       </input> */}
        <button onClick={(e)=>this.searchbyid(e)}>Click me </button>
       </div>
       {/* <button onClick={(e)=>this.searchbyid(e)}>Search</button></div> */}
       <br/><br/>
       <table className="table" border="1" align="center">
           <tr >
               <th>leaveId</th>
               <th>emp_Id</th>
               <th>noOfDays</th>
               <th>startDate</th>
               <th>endDate</th>
               <th>leaveType</th>
               <th>leaveStatus</th>
               <th>leaveReason</th>
               <th>appliedOn</th>
               <th>mng_Comments</th>
           </tr>
           { 
          ApplyLeave.map(x=>
            <tr> 
                <td>{x.leaveId}</td>
                <td>{x.emp_Id}</td>
                <td>{x.noOfDays}</td>
                <td>{x.startDate}</td>
                <td>{x.endDate}</td>
                <td>{x.leaveType}</td>
                <td>{x.leaveStatus}</td>
                <td>{x.leaveReason}</td>
                <td>{x.appliedOn}</td>
                <td>{x.mng_Comments}</td>
            </tr>)
    }
       </table><br/><br/>
       <div>
           <Link to={'/Dashboard'}><button>Back</button></Link>
       </div>
       </div>
            
        )
    }
}
