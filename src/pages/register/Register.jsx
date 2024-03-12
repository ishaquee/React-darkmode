import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='register'>
      <div className="card">

      <div className="left">
        <h1>Innovate. Inform. Inspire.</h1>
        <p>Social Media can provide a conversational extension to a B2B company’s nurturing programs. Social Media gives us the opportunity to humanize our communications and make our companies more approachable</p>
        <span>Already have an account ?</span>
        <Link to='/login' >
        <button> Login </button>
        </Link> 
      </div>

      <div className="right">
        <h1>Register</h1>
        <form action="">
          <input type="text" name="" id="" placeholder="username"/>
          <input type="email" name="" id="" placeholder="email"/>
          <input type="password" name="" id="" placeholder="password"/>
          <input type="password" name="" id="" placeholder="confirm password"/>
          <button>  Register  </button>
        </form>
        <div className="registerPage">
        <span>Already have an account ?</span>
        <Link to='/Login'> 
         <button>  Login here</button>
        </Link> 
      </div>
      </div>
    </div>
    </div>
  )
}

export default Register