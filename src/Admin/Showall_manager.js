import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class Showall_manager extends Component {
    constructor(){
        super();
        this.state={
            Manager:[],
            
        }
    }
    componentDidMount(){
        axios.get('http://localhost:27853/api/Manager/ShowAll').then(response=>{
            this.setState({Manager:response.data})
        }).catch(error=>{
            console.warn(error);
        })
    }
    render() {
        const {Manager}=this.state;
        return (
            <>
                <div className= "Showall">
            <div className = "show-all-employee"> 
                <strong>Show All Manager</strong><br/>
            </div><br/>
            <table className="show-all-employee-table" border={1} > 
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile No.</td>
                
            </tr>
            {
               Manager.map(x=>
                    <tr>
                        <td>{x.mng_Id}</td>
                        <td>{x.mng_Name}</td>
                        <td>{x.mng_Email}</td>
                        <td>{x.mng_Mobile}</td>                  
                    </tr>)
            }
            
            </table>
           
      </div>  <br/>
      <Link to={'/Admin_Dashboard/'}>
       <button className="showall-back-button" >Back</button></Link> 
            </>
        )
    }
}
