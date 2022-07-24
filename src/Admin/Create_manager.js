import React, { Component } from 'react'
import axios from 'axios';
import {Link , Navigate} from 'react-router-dom'
import {Route} from 'react-router';

export default class Create_manager extends Component {
    constructor(){
        super();
        this.state={

            employeeId:'',
            mng_Name:'',
          
            mng_Email:'',
            mng_Mobile:''
        }
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token == null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    
        this.CreateNewManager=this.CreateNewManager.bind(this);
        this.handlechange=this.handlechange.bind(this);

    }
    handlechange(object){
        this.setState(object);
    }
    CreateNewManager()
    {
        axios.post('http://localhost:27853/api/Manager/InsertManager',{
            
            employeeId:this.state.employeeId,
            mng_Name:this.state.mng_Name,          
            mng_Email:this.state.mng_Email,
            mng_Mobile:this.state.mng_Mobile,
        }).then(response=>{
            console.warn(response);
            alert("data inserted");
            setTimeout(10);
            window.location.reload();
        }).catch(error=>{
            alert("error");
        })
    }
    render() {
        if(this.state.loggedIn==false){
            return<Navigate to="/Admin_Login"/>
        }
        return (
            <> <div>
            <h3 className="head"><strong>Fill this form to Create Manager</strong></h3><br/> 
         </div>
         <form>
             <table>
             <tr>
                     <td className="label">
                        Enter Employee Id:
                     </td>
                     <td><input className="input" type="text" name="employeeId" placeholder="Enter Employee Id"
                     onChange={(e)=>this.handlechange({employeeId:e.target.value})}></input></td>
                 </tr>
         
                 <tr>
                     <td className="label">
                        Enter Manager Name:
                     </td>
                     <td><input  className="input" type="text" name="mng_Name" placeholder="Enter Manager Name"
                     onChange={(e)=>this.handlechange({mng_Name:e.target.value})}></input></td>
                 </tr>

                 <tr>
                     <td className="label">
                        Enter Manager Email:
                     </td>
                     <td><input  className="input" type="text" name="mng_Email" placeholder="Enter Manager Email"
                     onChange={(e)=>this.handlechange({mng_Email:e.target.value})}></input></td>
                 </tr>

                 <tr>
                     <td className="label">
                        Enter Manager Mobile:
                     </td>
                     <td><input  className="input" type="text" name="mng_Mobile" placeholder="Enter Manager Mobile"
                     onChange={(e)=>this.handlechange({mng_Mobile:e.target.value})}></input></td>
                 </tr><br/>

                 <tr>
                     <td><button className="btn" type="button" onClick={this.CreateNewManager}>Create</button></td>
                 </tr>
             </table>

         </form>
         <br/>
         <Link to={'/Admin_Dashboard'}>
    <button className="btn" >Back</button></Link>
         </>
        )
    }
}