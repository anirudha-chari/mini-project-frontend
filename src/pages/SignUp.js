import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const [adminSignUp, setAdminSignUp] = useState(false)
    const navigate = useNavigate()

    async function signUpUser(password, passwordConfirm) {
        if (password !== passwordConfirm) {
            console.log('what?')
            return setErr('Passwords do not match')
        }
        try {
            setErr('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            setErr('Failed to create an account')
        }
        setLoading(false)
        navigate("/")
    }
    async function signUpAdmin(password, passwordConfirm) {
        if (password !== passwordConfirm) {
            console.log('what?')
            return setErr('Passwords do not match')
        }
        try {
            setErr('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            setErr('Failed to create an account')
        }
        setLoading(false)
    }

    function handleSubmit(e) {
        e.preventDefault();
        (!adminSignUp && signUpUser(passwordRef.current.value, passwordConfirmRef.current.value))
        || signUpAdmin(passwordRef.current.value, passwordConfirmRef.current.value)
        
    }
    return (
        <>
            <div className="card container mt-5 justify-content-center align-items-center" style={{ maxWidth: "400px" }}>
                <div className='card-body'>
                    <h2> Sign up</h2>
                    {err && <div class="alert alert-danger" role="alert">{err}</div>}
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
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" htmlFor="exampleCheck1" onChange={()=>{setAdminSignUp(true)}}>Sign up as admin</label>
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
