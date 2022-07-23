import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
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
            <div className = "show-all-employee" className="head"> 
                <strong>Show All Manager</strong><br/>
            </div><br/>
            <MDBTable hover>
      <MDBTableHead>
            {/* <table className="show-all-employee-table" border={1} >  */}
            <tr className="table-primary">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No.</th>
                
            </tr>
        </MDBTableHead>
      <MDBTableBody>
            {
               Manager.map(x=>
                    <tr>
                        {/* <th scope='row'>1</th> */}
                        <td scope="row">{x.mng_Id}</td>
                        <td scope="row">{x.mng_Name}</td>
                        <td scope="row">{x.mng_Email}</td>
                        <td scope="row">{x.mng_Mobile}</td>                  
                    </tr>)
            }
            </MDBTableBody>
            {/* </table> */}
            
            </MDBTable>
           
      </div>  <br/>
      <Link to={'/Admin_Dashboard/'}>
       <button className="btn" >Back</button></Link> 
       {/* <Link><button className="showall-back-button" >Back</button></Link>  */}
            </>
        )
    }
}
