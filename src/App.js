import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './component/login.component'
import SignUp from './component/signup.component'
import Dashboard from './Emplyee/Dashboard'
import Home from './Homes/Home'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/Home'}>
              LMS
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to={'/Home'}>
                    Home
                  </Link>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                   <strong>Login</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App