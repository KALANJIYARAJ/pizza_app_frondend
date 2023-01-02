import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

function PizzaCard(props) {
  const { pizzas } = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(UserContext);
  const [price, setPrice] = useState({
    
  });
  const [id, setId] = useState();

  const handleInputs = (e) => {
    setPrice(e.target.value);
  };

  let indexfind = (id) => {
    setId(id);
  };

  //add selected pizza to card item
  let addPizza = (Pizza) => {
    setCartItems([...cartItems, { Pizza, price,add_items:[{"item_name":"Onion","item_icon_name":"Onion","item_price":"0",
    "item_type":"veggies"}]}]);
  };

  return (
    <>
      {pizzas.map((Pizza, index) => {
        if (Pizza.pizza_type === props.type) {
          return (
            <div className="col-lg-4" key={index}>
              <div className="p-3 border bg-light">
                <div className="card" style={{ height: "27rem auto" }}>
                  <img
                    src={Pizza.img}
                    className="card-img-top img-flex"
                    alt="Pizza"
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12" style={{ height: "6rem" }}>
                        <h5 className="card-title">{Pizza.pizza_name}</h5>
                        <p className="card-text text-start">{Pizza.about}</p>
                      </div>
                      <div className="col-12">
                        <hr />
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onClick={(e) => {
                            indexfind(Pizza._id);
                            handleInputs(e);
                          }}
                        >
                          <option name="small" value={Pizza.small}>
                            Small
                          </option>
                          <option name="medium" value={Pizza.medium}>
                            Medium
                          </option>
                          <option name="large" value={Pizza.large}>
                            Large
                          </option>
                          <option name="extra_large" value={Pizza.extra_large}>
                            Extra Large
                          </option>
                        </select>
                        <hr />
                      </div>
                      <div className="col-12 align-self-center">
                        {id === Pizza._id ? (
                          <button
                            onClick={() => {
                              addPizza(Pizza);
                            }}
                            className="btn btn-success"
                          >
                            Add to Card &nbsp;&nbsp;&#8377;{price}
                          </button>
                        ) : (
                          <button className="btn btn-success" disabled>
                            select size
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default PizzaCard;
