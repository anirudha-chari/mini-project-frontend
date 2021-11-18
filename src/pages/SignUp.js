import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
/*    const [adminSignUp, setAdminSignUp] = useState(false)*/
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }
      
          try {
            setError("")
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
        
        
    }
    return (
        <>
            <div className="card container mt-5 justify-content-center align-items-center" style={{ maxWidth: "400px" }}>
                <div className='card-body'>
                    <h2> Sign up</h2>
                    {error && <div class="alert alert-danger" role="alert">{error}</div>}
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" >Password</label>
                            <input type="password" className="form-control" id="password" ref={passwordRef} pattern=".{8,}" title="Password must be atleast 8 characters" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordconfirm" className="form-label" >Password</label>
                            <input type="password" className="form-control" id="passwordconfirm" ref={passwordConfirmRef} pattern=".{8,}" title="Password must be atleast 8 characters"/>
                        </div>

                        <button disabled={loading} type="submit" className="btn btn-primary w-100">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className='w-100 mt-2 text-center'>
                Already have an account? <Link to="/login">Login</Link>
            </div>

        </>
    )
}
