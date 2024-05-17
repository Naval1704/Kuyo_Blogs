import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <h2>🐿️Kuyo</h2>
        <h4>hiiii, Welcome to Kuyo👋</h4>
        <p>Please sign-in to your account and start your blogging adventure</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
        <div className="social-login">
          <p>or sign-in with</p>
          <button className="btn-google">Sign in with Google</button>
          <button className="btn-facebook">Sign in with Facebook</button>
        </div>
      </div>
    </div>
  );
}
