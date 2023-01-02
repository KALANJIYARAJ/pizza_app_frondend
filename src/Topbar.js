import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Topbar() {
  const { user} = useContext(UserContext);
  return (
    <> 
<nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
  <div className="container-fluid">
  <Link className="navbar-brand fw-bold text-white" to={"base"}>Tasty Pizza</Link>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to={"base"}>Base</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"sauce"}>Sauce</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"cheese"}>Cheese</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"veggies"}>Veggies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"meat"}>Meat</Link>
            </li>
      </ul>
      <div className="nav-item dropdown m-2">
          <Link className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user.name}
          </Link>
          <ul className="dropdown-menu bg-danger">
          <li className="nav-item">
              <Link className="nav-link text-white" to={"/profile"}>Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"/orderitems"}>Your Order</Link>
            </li>
          </ul>
        </div>
      <Link className="nav-link text-white me-3" to={"/"}>Logout</Link>
    </div>
  </div>
</nav>
    <br /><br /><br /><br />
</>
  );
}

export default Topbar;
