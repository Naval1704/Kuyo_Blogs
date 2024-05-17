import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <h2>🐿️ Kuyo</h2>
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
          <div>
          <div className="memory">
            <div className="remember">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="forgot">
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          </div>
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
        <div className="social-login">
          <p>or sign-in with</p>
          <button className="btn-google">Sign in with Google</button>
          <button className="btn-facebook">Sign in with Facebook</button>
        </div>
        <div className="create-account">
          <p>Don't have an account? <a href="/create-account">Create one</a></p>
        </div>
      </div>
    </div>
  );
}
