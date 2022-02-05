import React, { useState } from "react";
import "../Styles/Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    textarea: "",
  });

  const inputevent = (event) => {
    const { name, value } = event.target;
    setData((oldValue) => {
      return {
        ...oldValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `my email is ${data.email} and the password ${data.password} and the textarea ${data.textarea}`
    );
  };
  return (
    <>
      <section className="contact__container">
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={inputevent}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={inputevent}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Feedback</label>
            <textarea
              className="form-control"
              rows="3"
              name="textarea"
              value={data.textarea}
              onChange={inputevent}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
