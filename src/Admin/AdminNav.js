import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

function AdminNav() {
    const {user}= useContext(UserContext);
    const [show, setShow] = useState({
      expanded: "false",
      collapsed: "navbar-toggler text-white",
      show: "navbar-collapse collapse",
    });

    let hide = () => {
      setShow({
        expanded: "false",
        collapsed: "navbar-toggler text-white",
        show: "navbar-collapse collapse",
      });
    };

    let checkHide = () => {
      if (show.expanded === "true") {
        setShow({
          expanded: "false",
          collapsed: "navbar-toggler text-white",
          show: "navbar-collapse collapse",
        });
      } else {
        setShow({
          expanded: "true",
          collapsed: "navbar-toggler text-white collapsed",
          show: "navbar-collapse collapse show",
        });
      }
    };
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div className="container-fluid">
      <Link className="navbar-brand fw-bold text-white" to={"vieworder"}>Tasty Pizza</Link>
        <button className={show.collapsed} type="button" onClick={() => {
                    checkHide();
                  }} aria-controls="navbarSupportedContent" aria-expanded={show.expanded} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={show.show} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"viewuser "} onClick={() => {
                    hide();
                  }}>User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"vieworder"} onClick={() => {
                    hide();
                  }}>Order</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"viewpizza"} onClick={() => {
                    hide();
                  }}>Pizza</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"viewvm"} onClick={() => {
                    hide();
                  }}>Veggies&Meats</Link>
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