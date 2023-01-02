import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

function AdminNav() {
    const {user}= useContext(UserContext);
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div className="container-fluid">
      <Link className="navbar-brand fw-bold text-white" to={"vieworder"}>Tasty Pizza</Link>
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"viewuser "}>User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"vieworder"}>Order</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"viewpizza"}>Pizza</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"viewvm"}>Veggies&Meats</Link>
                </li>
          </ul>
          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
          <li>
            <Link className='nav-link text-white fw-bold'>{user.name}</Link>
                </li>
                <li>
                <Link className="nav-link text-white" to={"/"}>Logout</Link>
                </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default AdminNav