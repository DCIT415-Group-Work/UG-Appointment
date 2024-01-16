import { Link } from 'react-router-dom'
import React from 'react'
import './styles/login.css'
const Login = () => {
  return (
    <main className='loginContainer'>
      <section className='loginContainer1'>
        <h3>Login</h3>
        <article className='loginContent'>
          <Link to='/lecturerLogin' className='links'>
          <div>
            <h4>Login as a lecturer</h4>
          </div>
          </Link>
          <Link to='/studentLogin' className='links'>
          <div style={{marginBottom: '1rem'}}>
            <h4>Login as a student</h4>
          </div>
          </Link>
        </article>
      </section>
    </main>
  )
}

export default Login