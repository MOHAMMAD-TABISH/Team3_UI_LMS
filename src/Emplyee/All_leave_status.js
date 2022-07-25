// import React, { Component } from 'react'
// import { Link  } from 'react-router-dom';
// import axios from 'axios' ;
// import './All_leavestatus.css'
// export default class All_leave_status extends Component {
//     constructor(){
//         super();
//         this.state={
//   ApplyLeave:[]
           
//         }
//         this.searchbyid=this.searchbyid.bind(this)
//     }
//     searchbyid(e){
//         e.preventDefault();
//         let UserID =sessionStorage.getItem("UserID");
//         axios.get('http://localhost:27853/api/ApplyLeave/Emp_Leaves/'+UserID).then(response=>
//         {
//             this.setState({
//                 ApplyLeave:response.data
//             })
            
//         }).catch(error=>{console.warn(error);})
       
//     }
//     render() {
//         const {ApplyLeave}=this.state;
//         return (
//             <div className="apply_leave_return">
//             <div>
//             <div style={{textAlign:'center'}}>
//                 <h3 className="head"> <strong>All Leave status</strong> </h3>
            
//              <br/>
//        {/* <div className="search-by-id-input" style={{textAlign:'center'}}>  <label>Enter your Id</label> */}
//        </div>
//        {/* <input type="text"  name="emp_Id" onChange={(e)=>this.setState({emp_Id:e.target.value})}>
//        </input> */}
//         <button className="btn" onClick={(e)=>this.searchbyid(e)}>Click me </button>
//        </div>
//        {/* <button onClick={(e)=>this.searchbyid(e)}>Search</button></div> */}
//        <br/>
//        <div className="fixTableHead">
//        <table className="table" border="1" align="center">
//            <tr >
//                <th>leaveId</th>
//                <th>emp_Id</th>
//                <th>noOfDays</th>
//                <th>startDate</th>
//                <th>endDate</th>
//                <th>leaveType</th>
//                <th>leaveStatus</th>
//                <th>leaveReason</th>
//                <th>appliedOn</th>
//                <th>mng_Comments</th>
//            </tr>
//            { 
//           ApplyLeave.map(x=>
//             <tr> 
//                 <td>{x.leaveId}</td>
//                 <td>{x.emp_Id}</td>
//                 <td>{x.noOfDays}</td>
//                 <td>{x.startDate}</td>
//                 <td>{x.endDate}</td>
//                 <td>{x.leaveType}</td>
//                 <td>{x.leaveStatus}</td>
//                 <td>{x.leaveReason}</td>
//                 <td>{x.appliedOn}</td>
//                 <td>{x.mng_Comments}</td>
//             </tr>)
//     }
//        </table><br/>
//        </div>
//        <br/>
//        <div>
//            <Link to={'/Dashboard'}><button className="btn">Back</button></Link>
//        </div>
//        </div>
            
//         )
//     }
// }
import React, { Component } from 'react'
import { Link  } from 'react-router-dom';
import axios from 'axios' ;
import './All_leavestatus.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
export default class All_leave_status extends Component {
   
    constructor(){
        super();
        this.state={
  ApplyLeave:[]
           
        }
       // this.searchbyid=this.searchbyid.bind(this)
    }
    componentDidMount(){
       // e.preventDefault();
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
                <h3 className="head"> <strong>All Leave Status</strong> </h3>
            
             
       {/* <div className="search-by-id-input" style={{textAlign:'center'}}>  <label>Enter your Id</label> */}
       </div>
       {/* <input type="text"  name="emp_Id" onChange={(e)=>this.setState({emp_Id:e.target.value})}>
       </input> */}
        {/* <button className="btn" onClick={(e)=>this.searchbyid(e)}>Click me </button> */}
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