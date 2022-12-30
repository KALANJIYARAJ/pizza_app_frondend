import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { config } from "./config";
import Topbar from "./Topbar";
import { UserContext } from "./UserContext";

function PortalLayout() {
  const { setPizzas } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(UserContext);
  const { subTotal, setSubTotal } = useContext(UserContext);
  const { tax, setTax } = useContext(UserContext);
  const { total, setTotal } = useContext(UserContext);
  const { vmTotal, setVmTotal } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const getPizzas = await axios.get(`${config.api}/pizzas`);
      setPizzas(getPizzas.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  let removeFromCart = (id) => {
    const indexVal = cartItems.findIndex((obj) => obj.Pizza._id === id);
    cartItems.splice(indexVal, 1);
    setCartItems([...cartItems]);
  };


  return (
    <div className="container-fluid">
      <Topbar />
      <div className="container-fluid text-center m-2">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="container text-center">
              <div className="row justify-content-start g-2">
                {loading ? (
                  <div className="">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div
                      class="spinner-border text-danger justify-content-center forcenter1"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <Outlet />
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-3 p-4">
            <div className="card">
              <div className="card-body">
                <h1>Welcome</h1>
                <ol className="list-group text-start">
                  {cartItems.map((items, index) => {
                    return (
                      <li
                        key={index}
                        className="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-start
                  "
                      >
                        <div className="ms-2 me-auto">
                          <Link
                            className="fw-bold text-black removeUnderLine"
                            to={`/addvm/${index}`}>
                            {items.Pizza.pizza_name}
                          </Link>
                          {
                            setVmTotal(
                              items.add_items.reduce((prev, curr) => {
                                return (prev = parseInt(prev) + parseInt(curr.item_price));
                              }, 0))
                          }
                        </div>
                        {items.price}&nbsp;&nbsp;
                        <button
                          onClick={() => {
                            removeFromCart(items.Pizza._id);
                          }}
                          className="badge bg-black rounded-pill p-2"
                        >
                          x
                        </button> 
                      </li>
                    );
                  })}
                </ol>
                <div className="row justify-content-between mt-3">
                  <div className="col-6">
                    <h6 className="fw-bold text-start">SUBTOTAL</h6>
                  </div>
                  <div className="col-6">
                    {setSubTotal(vmTotal+
                      cartItems.reduce((prev, curr) => {
                        return (prev = parseInt(prev) + parseInt(curr.price));
                      }, 0))}
                    <h6 className="fw-bold text-end">{subTotal}</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="fw-bold text-start">TAX</h6>
                  </div>
                  {setTax((subTotal * 5) / 100)}
                  <div className="col-6">
                    <h6 className="fw-bold text-end">{tax}</h6>
                  </div>
                  <div className="col-6">
                    <h6 className="fw-bold text-start">TOTAL</h6>
                  </div>
                  {setTotal(subTotal + tax)}
                  <div className="col-6">
                    <h6 className="fw-bold text-end">{total}</h6>
                  </div>
                </div>
                <hr />
                <div className="row justify-content-center mt-3">
                  <div className="col-12">
                    <Link className="btn btn-success btn-sm" to={"/payment"}>
                      ORDER {total}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
      <footer>
        <div className="container-fluid bg-light fixed-bottom text-center">
          <div className="row bg-light">
            <div className="col-lg align-self-center">
              <br />
              <p className="footer__copyright">©KALANJIYARAJ</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PortalLayout;
