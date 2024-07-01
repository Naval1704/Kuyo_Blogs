import React from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();

  const [details,changeDetails]=React.useState({
    name:"",
    email:"",
    password:""
  });

  function changeValue(event){
    const key=event.target.name;
    const val=event.target.value;
    changeDetails({...details,[key]:val});
  }

  async function handleSubmit(e){
    console.log("working");
    e.preventDefault();
    const info= await fetch("http://localhost:5000/api/create-account",{
      method:'POST',
      //headers here is very important and it will not work without it being written correctly
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:details.name,email:details.email,password:details.password})
    });

    const json=await info.json()
    console.log(json);

    if(!json.success){
      alert("entre valid credentials")
    }
    else{
      navigate('/');
    }

  }

  return (
    <div className="login">
      <div className="card">
        <h2>🐿️ Kuyo</h2>
        <h4>hiiii, Welcome to Kuyo👋</h4>
        <p>Please Sign-Up to your account and start your blogging adventure</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Name</label>
            <input type="name" id="name" name="name" value={details.name} onChange={changeValue} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={details.email} onChange={changeValue} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={details.password} onChange={changeValue}required />
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
          <button type="submit" className="btn-primary">Sign Up</button>
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
