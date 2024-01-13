import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
      <Link className="navbar-brand fs-1" to ="/">Go Food</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item ">
            <Link className="nav-link active fs-5" aria-current="page" to ="/">Home</Link>
          </li>
          {(localStorage.getItem("authToken")) ?
            <Link className="nav-link active fs-5" aria-current="page" to ="/">My Orders</Link>
            : ""
          }  
        </ul>
       
        {(!localStorage.getItem("authToken")) ?
         <div className='d-flex'>
        <Link className=" btn bg-white text-success mx-1 " to ="/login">Login</Link>
        <Link className=" btn bg-white text-success mx-1 " to="/creatuser">SignUp</Link>
        </div>
        :
        <div className='d-flex'>
        <div className=" btn bg-white text-success mx-2 " >My Cart</div>
        <div className=" btn bg-white text-danger mx-2 " onClick={handleLogout}>Logout</div>
        <Link className="fs-5 nav-link" style={{color: 'PaleGoldenRod'}} >Hey, {localStorage.getItem('name')}</Link>
        </div>
        }
      </div>
    </div>
  </nav>
);
}


