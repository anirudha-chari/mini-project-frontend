import React, {useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)
    const [adminSignUp, setAdminSignUp] = useState(false)
    const navigate = useNavigate()

    async function LogInUser(password) {
        try {
            setErr('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setErr('Account Does not Exist')
        }
        setLoading(false)
        navigate("/")
    }
    async function LogInAdmin(password) {
        try {
            setErr('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setErr('Account Does not Exist')
        }
        setLoading(false)
        navigate('/')
    }

    function handleSubmit(event) {
        event.preventDefault();
        (!adminSignUp && LogInUser(passwordRef.current.value)) || LogInAdmin(passwordRef.current.value)

    }
    return (
        <>
            <div className="card container mt-5 justify-content-center align-items-center" style={{ maxWidth: "400px" }}>
                <div className='card-body'>
                    <h2> Log In</h2>
                    {err && <div class="alert alert-danger" role="alert">{err}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" >Password</label>
                            <input type="password" className="form-control" id="password" ref={passwordRef} pattern=".{8,}" title="Password must be atleast 8 characters" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" htmlFor="exampleCheck1" onChange={() => { setAdminSignUp(true) }}>Login as admin</label>
                        </div>

                        <button disabled={loading} type="submit" className="btn btn-primary w-100">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className='w-100 mt-2 text-center'>
                Need an account? <Link to="/signup">Sign UP</Link>
            </div>

        </>
    )
}