import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
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
        this.CreateNewManager=this.CreateNewManager.bind(this);
        this.handlechange=this.handlechange.bind(this);

    }
    handlechange(object){
        this.setState(object);
    }
    CreateNewManager()
    {
        axios.post('http://localhost:27852/api/Manager/InsertManager',{
            
            employeeId:this.state.employeeId,
            mng_Name:this.state.mng_Name,          
            mng_Email:this.state.mng_Email,
            mng_Mobile:this.state.mng_Mobile,
        }).then(response=>{
            console.warn(response);
            alert("data inserted");
        }).catch(error=>{
            alert("error");
        })
    }
    render() {
        return (
            <> <div>
               <h3><strong>Fill this form to Create Manager</strong></h3><br/> 
            </div>
            <form>
                <table>
                <tr>
                        <td>
                           Enter Employee Id
                        </td>
                        <td><input type="text" name="employeeId"
                        onChange={(e)=>this.handlechange({employeeId:e.target.value})}></input></td>
                    </tr>
            
                    <tr>
                        <td>
                           Enter Manager Name
                        </td>
                        <td><input type="text" name="mng_Name"
                        onChange={(e)=>this.handlechange({mng_Name:e.target.value})}></input></td>
                    </tr>

                    <tr>
                        <td>
                           Enter Manager Email
                        </td>
                        <td><input type="text" name="mng_Email"
                        onChange={(e)=>this.handlechange({mng_Email:e.target.value})}></input></td>
                    </tr>

                    <tr>
                        <td>
                           Enter Manager Mobile
                        </td>
                        <td><input type="text" name="mng_Mobile"
                        onChange={(e)=>this.handlechange({mng_Mobile:e.target.value})}></input></td>
                    </tr>

                    <tr>
                        <td><button type="button" onClick={this.CreateNewManager}>Create</button></td>
                    </tr>
                </table>

            </form>
            <br/>
            <Link to={'/Admin_Dashboard'}>
       <button className="showall-back-button" >Back</button></Link>
            </>
            
        )
    }
}