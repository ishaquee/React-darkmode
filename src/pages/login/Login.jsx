import "./login.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Login() {
 // const {darkMode} = useContext(DarkModeContext)
 const {login} = useContext(AuthContext)

  return (
    <div className='login'>
    <div className="card">
      <div className="left">
        <h1>Love the life you live</h1>
        <p>Social media is not a media. The key is to listen, engage, and build relationships</p>
        <span>Don't have an account ?</span>
        <Link to='/register'> 
         <button>  Register </button>
        </Link> 
      </div>
      <div className="right">
        <h1>Login</h1>
        <form action="">
          <input type="text" name="" id="" placeholder="username"/>
          <input type="password" name="" id="" placeholder="password"/>
          <button onClick={() =>login()}>  Login </button>
        </form>
        <div className="registerPage">
        <span>Don't have an account ?</span>
        <Link to='/register'> 
         <button>  Register here</button>
        </Link> 
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login