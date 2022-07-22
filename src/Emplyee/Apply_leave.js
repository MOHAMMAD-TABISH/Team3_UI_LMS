import "./Apply_leavecsss.css";
import React, { Component } from 'react'
import axios from 'axios';
import './All_leavestatus.css'
import {Link} from 'react-router-dom'


export default class Apply_leave extends Component {
    constructor(){
        super();
        this.state={
            
         //   "leaveId: "",
            "noOfDays": "",
            "startDate": "",
            "endDate": "",
            "leaveType": "",
            "leaveStatus": "",
            "leaveReason": "",
            "appliedOn": "",
            "mng_Comments": "",
            "emp_Id": ''
        }
        this.CreateNewApplyLeave=this.CreateNewApplyLeave.bind(this);
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(object){
        this.setState(object);
    }
    
    CreateNewApplyLeave()
    {   let UserID =sessionStorage.getItem("UserID");
        axios.post('http://localhost:27853/api/ApplyLeave/Leave',{
            "leaveId": 0,
            "noOfDays":this.state.noOfDays,
            "startDate":this.state.startDate,
            "endDate":this.state.endDate,
            "leaveType":this.state.leaveType,
            "leaveStatus":"Pending",
            "leaveReason":this.state. leaveReason,
            "appliedOn":this.state.appliedOn,
            "mng_Comments":"Pending",
            "emp_Id":UserID
    //         noOfDays:this.state.noOfDays,
    // startDate:this.state.startDate,
    // endDate:this.state.endDate,
    // leaveType:this.state.leaveType,
    // leaveStatus:this.state.leaveStatus,
    // leaveReason:this.state. leaveReason,
    // appliedOn:this.state.appliedOn,
    // mng_Comments:this.state.mng_Comments,
    // emp_Id:this.state.emp_Id
        }).then(response=>{
            console.warn(response);
            alert("Applied Leave");
        }).catch(error=>{
            alert("error");
        })   
    }
   
    render() {
        
        return (<>
        <div>
                <h1 className="head" >Apply Leave Form</h1>
            </div>
            <div className="form">
        
            <br/>
            <form>
             <tr>
            <div>
            <label className="label"> No-Of-Days: </label>
            <input  className="input"  type="text" placeholder="NoOfDays"
             onChange={(e)=>this.handlechange({noOfDays:e.target.value})}/>
            </div>
            </tr>
            <div>
            <label className="label"> StartDate: </label>
            <input  className="input"  type="date" placeholder="StartDate"
            onChange={(e)=>this.handlechange({startDate:e.target.value})}/>
            </div><div>
            <label className="label"> EndDate: </label>
            <input  className="input"  type="date" placeholder="EndDate"
            onChange={(e)=>this.handlechange({endDate:e.target.value})}/>
            </div>
            <div>
        
            <label className="label" for="leavetype"> LeaveType: </label>
            <select className="drop"  id="leavetype" name="leavetype" size="0" onChange={(e)=>this.handlechange({leaveType:e.target.value})}>
                <option value="Earned Leave">Earned Leave</option>
                <option value="sick Leave">Sick Leave</option>
            </select>
            
            </div>
            {/* <label className="label"> LeaveStatus: </label>
            <input  className="input"  type="text" placeholder="LeaveStatus"
            onChange={(e)=>this.handlechange({leaveStatus:e.target.value})}/> */}
            <label className="label"> Reason: </label>
            <input  className="input"  type="comment" placeholder="Reason"
             onChange={(e)=>this.handlechange({leaveReason:e.target.value})}/>
            <br/>
            <label className="label"> AppliedOn: </label>
            <input  className="input"  type="date" placeholder="AppliedOn"
             onChange={(e)=>this.handlechange({appliedOn:e.target.value})}/><br/>
            {/* <label className="label"> Mng-Comments: </label>
            <input  className="input"  type="text" placeholder="Mng_Comments"
            onChange={(e)=>this.handlechange({mng_Comments:e.target.value})}/> */}
             {/* <tr>
            <label className="label"> Emp_Id: </label>
            <input  className="input"  type="text"
             placeholder="Emp_Id" onChange={(e)=>this.handlechange({emp_Id:e.target.value})}/>
              </tr> */}
            <br/> 
            <div>
                <div>
                <button className="btn" type="button" onClick={this.CreateNewApplyLeave}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={'/Dashboard'}><button className="btn" >Back</button></Link>
                </div>
            </div>
            
            </form>
            
        </div>
        
                
           
            
        </>
            
        )
    }
}