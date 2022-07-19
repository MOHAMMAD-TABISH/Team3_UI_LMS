import React, { Component } from 'react';
import { Navigate } from 'react-router';
import './Home.css';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  
  render() {
    return (
     <>
     <section id ="header">
     <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mt-auto'>
          <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
            <h1>Welcome to <strong>Leave Management System </strong> 
            </h1>
            
            <h7 className='my-3'>
              This will help you to apply for leave very easy
            </h7>
            <div className='mt3'>
              <Link to={'/sign-in'}>
            <button className='abc'>Get Started
            </button>
            </Link>
            </div>
            <br/>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
              <img src="https://th.bing.com/th/id/OIP.TfyTn0kKR5bPC_f-HH7X9wHaFI?pid=ImgDet&rs=1" className='img-fluid animated' alt="Home img" />

            </div>
            </div>
           
        </div>
      </div>
      <div>
                <h7>
                    Created by Team 3 
                </h7>
            </div>
    </div>
    
     </section>
     </>
    )
  }
}
