
import { useFormik } from 'formik';
import React from 'react'

function Order() {

  const formik = useFormik({
    initialValues: {
      currState:""

    },

    onSubmit: async (values) => {
      try {
        console.log(values);
        // await axios.post(`${config.api}/order`, values);
        // alert("Success");
        // formik.resetForm();
        // navigate("/portal/homepage");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} >

    <div className="form-group inline">
       <div className="form-control">
         <input type="radio" 
         name="currState"  
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value="serviced" 
         />
         <label>serviced</label>
       </div>

       <div className="form-control">
         <input 
         type="radio" 
         value="furnished" 
         name="currState"  
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         />
         <label>furnished</label>
       </div>

       <div className="form-control">
         <input
           type="radio"
           value="newlybuilt"
          name="currState"  
          onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
         />
         <label>newly built</label>
       </div>

     </div>
      <button type="submit">submit </button>
      </form>
  )
}

export default Order