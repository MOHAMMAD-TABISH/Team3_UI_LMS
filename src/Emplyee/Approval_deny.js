import React, { Component } from 'react'
import { Link  } from 'react-router-dom';
import axios from 'axios' ;
import './All_leavestatus.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default class Approval_deny extends Component  {
    constructor(){
        super();
        this.state={
  ApplyLeave:[],
  leave_Id:""
           
        }
        this.handlechange=this.handlechange.bind(this);

      //  this.searchbyid=this.searchbyid.bind(this)
    }
    // Update_leave_status(e){
    //     e.preventDefault();  
    //     // let emp_Id=this.state.emp_ID;  
    //     // let password=this.state.password; 
    //     let UserID =sessionStorage.getItem("UserID");

    //     axios.patch("http://localhost:27853/api/ApplyLeave/ChangeStatus/"+UserID,{
          
    //         "leaveId": 0,
    //         "emp_Id": 0,
    //         "noOfDays": 0,
    //         "startDate": "2022-07-24T10:43:55.488Z",
    //         "endDate": "2022-07-24T10:43:55.488Z",
    //         "leaveType": "string",
    //         "leaveStatus": "string",
    //         "leaveReason": "string",
    //         "appliedOn": "2022-07-24T10:43:55.488Z",
    //         "mng_Comments": "string",
    //         "mng_Id": 0
    //     }).catch(error=>{
    //             alert("error");}
    //           )
    // }
    handlechange(object){
        this.setState(object);
    }
    componentDidMount(){
       // e.preventDefault();
        let UserID =sessionStorage.getItem("UserID");
        axios.get('http://localhost:27853/api/ApplyLeave/Mng_Leaves/'+UserID).then(response=>
        {
            this.setState({
                ApplyLeave:response.data
            })
            //sessionStorage.setItem("u_mng",emp_Id);
        }).catch(error=>{console.warn(error);})
       
    }
    Update_deny(e){
        e.preventDefault(); 
        // const[leave__Id] = this.state;
        let leave_Id=this.state.leave_Id;  
        // let password=this.state.password; 
        axios.patch("http://localhost:27853/api/ApplyLeave/Update_deny?id="+leave_Id).
        then(result =>
            {
              console.log(result)
            
                alert("leave Denied");
                setTimeout(10)
                window.location.reload();
                
              }).catch(error=>{
                alert("error");}
              )}
    Update_approve(e){
        e.preventDefault(); 
        // const[leave__Id] = this.state;
        let leave_Id=this.state.leave_Id;  
        // let password=this.state.password; 
        axios.patch("http://localhost:27853/api/ApplyLeave/Update_approve?id="+leave_Id).
        then(result =>
            {
              console.log(result)
            
                alert("leave approved");
                setTimeout(10)
                window.location.reload();
                
              }).catch(error=>{
                alert("error");}
              )}
    
    render() {
        //let u_mng = sessionStorage.getItem('u_mng');
        const {ApplyLeave}=this.state;
        return (
            <div className="apply_leave_return">
            <div>
            <div style={{textAlign:'center'}}>
                <h3 className="head"> <strong>All Leave Status</strong> </h3>
            
             
       {/* <div className="search-by-id-input" style={{textAlign:'center'}}>  <label>Enter your Id</label> */}
       </div>
       {/* <input type="text"  name="emp_Id" onChange={(e)=>this.setState({emp_Id:e.target.value})}>
       </input> */}
        {/* <button className="btn" onClick={(e)=>this.searchbyid(e)}>show leaves</button> */}
        <input  className="input"  type="text" placeholder="LeaveId"
             onChange={(e)=>this.handlechange({leave_Id:e.target.value})}/>
        <button className="btn" onClick={(e)=>this.Update_approve(e)}>Approve</button>
        <button className="btn" onClick={(e)=>this.Update_deny(e)}>Deny</button>


        
       </div>
       {/* <button onClick={(e)=>this.searchbyid(e)}>Search</button></div> */}
       <br/>
      <div className="fixTableHead">
       {/* <table className="table" border="1" align="center"> */}
       <MDBTable hover  >
           <MDBTableHead>
           <tr className="table-primary" >
               <th scope="col">leaveId</th>
               <th scope="col">emp_Id</th>
               <th scope="col">noOfDays</th>
               <th scope="col">startDate</th>
               <th scope="col">endDate</th>
               <th scope="col">leaveType</th>
               <th scope="col">leaveStatus</th>
               <th scope="col">leaveReason</th>
               <th scope="col">appliedOn</th>
               <th scope="col">mng_Comments</th>
               {/* <th scope="col">Actions</th> */}
           </tr>
           </MDBTableHead>
           <MDBTableBody>
           {
          ApplyLeave.map(x=>
            <tr className="table-light"> 
                <td scope="row">{x.leaveId}</td>
                <td scope="row">{x.emp_Id}</td>
                <td scope="row">{x.noOfDays}</td>
                <td scope="row">{x.startDate}</td>
                <td scope="row">{x.endDate}</td>
                <td scope="row">{x.leaveType}</td>
                <td scope="row">{x.leaveStatus}</td>
                <td scope="row">{x.leaveReason}</td>
                <td scope="row">{x.appliedOn}</td>
                <td scope="row">{x.mng_Comments}</td>
                {/* <td scope="row"><button>Approve</button>&nbsp;<button>Deny</button></td> */}

            </tr>)}
            {/* <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
            <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script> */}
            </MDBTableBody>
            </MDBTable> 
    
    {/* //    </table><br/><br/><br/> */}
    </div>
       <div>
           <Link to={'/Dashboard'}><button className="btn">Back</button></Link>
       </div>
       </div>
            
        )
    }
}