import "./Apply_leavecsss.css";
import React, { Component } from 'react'
import axios from 'axios';

export default class Apply_leave extends Component {
    constructor(){
        super();
        this.state={
            
            emp_Id: '1',
            noOfDays: '',
            startDate: "",
            endDate: "",
            leaveType: "",
            leaveStatus: "",
            leaveReason: "",
            appliedOn: "",
            mng_Comments: ""
          
        }
        this.CreateNewApplyLeave=this.CreateNewApplyLeave.bind(this);
        this.handlechange=this.handlechange.bind(this);
    }
    handlechange(object){
        this.setState(object);
    }
    CreateNewApplyLeave()
    {
        axios.post('http://localhost:27852/api/ApplyLeave/NewLeave'
        ,{    emp_Id:this.state.emp_Id,
            noOfDays:this.state.noOfDays,
            startDate:this.state.startDate,
            endDate:this.state.endDate,
            leaveType:this.state.leaveType,
            leaveStatus:this.state.leaveStatus,
            leaveReason:this.state. leaveReason,
            appliedOn:this.state.appliedOn,
            mng_Comments:this.state.mng_Comments,
        }).then(response=>{
            console.warn(response);
            alert("Leave Applied");      
        }).catch(error=>{
            alert("error");
        })
        
    }
    render() {
        return (
            <div className="form">
                <div>
                    <h1 className="head" >Apply Leave Form</h1>
                </div>
                <br/>
                <form>
                <label className="label"> Emp_Id: </label>
                <input  className="input"  type="text" name= "emp_Id "onChange={(e)=>this.handlechange({emp_Id:e.target.value})}/>
                <div>
                <label className="label"> No-Of-Days: </label>
                <input  className="input"  type="number" onChange={(e)=>this.handlechange({noOfDays:e.target.value})}/>
                </div>
                <div>
                <label className="label"> StartDate: </label>
                <input  className="input"  type="text" onChange={(e)=>this.handlechange({startDate:e.target.value})}/>
                
                <label className="label"> EndDate: </label>
                <input  className="input"  type="text" onChange={(e)=>this.handlechange({appliedOn:e.target.value})}/>
                </div>
                <div>
            
                <label className="label" for="leavetype"> LeaveType: </label>
                <select className="drop"  id="leavetype" name="leavetype" size="0" onChange={(e)=>this.handlechange({leaveType:e.target.value})}>
                    <option value="Earned Leave">Earned Leave</option>
                    <option value="sick Leave">Sick Leave</option>
                </select>
                
                </div>
                <label className="label"> LeaveStatus: </label>
                <input  className="input"  type="text" onChange={(e)=>this.handlechange({leaveStatus:e.target.value})}/>
                <label className="label"> Reason: </label>
                <input  className="input"  type="comment" min="10" onChange={(e)=>this.handlechange({leaveReason:e.target.value})}/>
                <br/>
                <label className="label"> AppliedO n: </label>
                <input  className="input"  type="text" onChange={(e)=>this.handlechange({endDate:e.target.value})}/>
                <label className="label"> Mng-Comments: </label>
                <input  className="input"  type="text" onChange={(e)=>this.handlechange({mng_Comments:e.target.value})}/>
                <div>
                    <div>
                    <button className="btn" type="button" onClick={this.CreateNewApplyLeave()}>Submit</button>
                    </div>
                </div>
                
                </form>
                
            </div>
        )
    }
}