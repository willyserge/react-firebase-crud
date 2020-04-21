import React, { useState } from "react";

function ContactForm(props) {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) =>{
     event.preventDefault()
     props.addOrEdit(values)
     setValues(initialFieldValues)
  }

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="fullname"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group ">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-mobile"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="mobile"
          name="mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-address-card"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
}

export default ContactForm;
