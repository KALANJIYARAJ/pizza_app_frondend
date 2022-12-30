import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { config } from "../config";
// import { useNavigate, useParams } from "react-router-dom";

function CreatePizza() {
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      pizza_name: "",
      img: "",
      about: "",
      small:"",
      medium:"",
      large:"",
      extra_large:"",
      price:"",
      pizza_type:"base"
      
    },

    onSubmit: async (values) => {
      try {
        await axios.post(`${config.api}/pizza`, values);
        alert("Success");
        formik.resetForm();
        // navigate("/portal/homepage");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container m-2">
      <h1 className="text-center">Create Pizza</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>PizzaName</label>
              <input
                name="pizza_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pizza_name}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>Image</label>
              <input
                name="img"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.img}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>About</label>
              <input
                name="about"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.about}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>small</label>
              <input
                name="small"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.small}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>medium</label>
              <input
                name="medium"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.medium}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>large</label>
              <input
                name="large"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.large}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>extra_large</label>
              <input
                name="extra_large"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.extra_large}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <label>Price</label>
              <input
                name="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                type={"text"}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 mt-2">
                <div className="form-group">
                  <label>Pizza_Type</label>
                  <select
                    name="pizza_type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pizza_type}
                    className="form-control"
                  >
                    <option>base</option>
                    <option>sauce</option>
                    <option>cheese</option>
                    <option>veggies</option>
                    <option>meat</option>
                  </select>
                </div>
              </div>     
          <div className="col-lg-4 mt-2">
            <div className="form-group">
              <input type={"submit"} className="btn btn-danger" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePizza;
