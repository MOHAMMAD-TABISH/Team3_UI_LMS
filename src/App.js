import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './component/login.component'
import SignUp from './component/signup.component'
import Dashboard from './Emplyee/Dashboard'
import Home from './Homes/Home'
import Admin_Login from './Admin/Admin_Login'
import Admin_Dashboard from './Admin/Admin_Dashboard'
import Showall from './Admin/Showall'
import Showall_manager from './Admin/Showall_manager'
import Create_employee from './Admin/Create_employee'
import Searchbyid from './Emplyee/Searchbyid'
import Create_manager from './Admin/Create_manager'
import Apply_leave from './Emplyee/Apply_leave'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
             <strong>LMS</strong> 
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                  <Link className="nav-link" to={'/Home'}>
                    Home
                  </Link>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                   Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                  </li>
                   */}
                  <li className="nav-item-admin">
                  <Link className="nav-link" to={'/Admin_Login'}>
                    Admin               
                  </Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Admin_Login" element={<Admin_Login />} />
              <Route path="/Admin_Dashboard" element={<Admin_Dashboard/>}/>
              <Route path="/Showall" element={<Showall/>}/>
              <Route path ="/Showall_manager" element={<Showall_manager></Showall_manager>}></Route>
              <Route path ="/Create_employee" element={<Create_employee/>}/>
              <Route path="/Searchbyid" element={<Searchbyid/>}></Route>
              <Route path="/Create_manager" element={<Create_manager/>}></Route>
              <Route path="/Apply_leave" element={<Apply_leave/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App