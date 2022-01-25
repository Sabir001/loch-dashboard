import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./SigninForm.css";

const validEmailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

function SigninForm({ userSignIn, redirect, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (redirect) {
      history.push("/home/deals");
    }
  }, [redirect, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
    } else if (!password) {
      toast.error("Please enter your password");
    } else if (!email.match(validEmailRegex)) {
      toast.error("Invalid email address");
    } else {
      userSignIn({
        username: email,
        password,
      });
    }
  };
  return (
    <div className="sign-in-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="primary">Log in</button>
      </form>
    </div>
  );
}

export default SigninForm;
