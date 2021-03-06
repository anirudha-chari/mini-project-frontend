import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
// import {getAuth} from 'firebase/auth'
import 'bootstrap'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, setIsLoggedin, setIsAdmin, isAdmin } = useAuth()
    const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            // setLoading(true)
            let emailend = '@'+emailRef.current.value.split('@')[1]
            if((emailend !== '@admin.com') && isAdmin){
                throw new Error('You are not authorised')
            }
            await login(emailRef.current.value, passwordRef.current.value)
            setIsLoggedin(true)
            navigate("/")
        } catch (e){
            setError("Failed to log in")
            if(e.message ==='You are not authorised')
            {
                setError(e.message)
            }
        }
        
        // setLoading(false)
    }

    return (
        <div style={{justifyContent:'center', alignItems:'center'}} className='mt-5' >
            <Card style={{maxWidth:"400px", marginLeft:'auto', marginRight:"auto"}}>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Login as admin" onChange={()=>setIsAdmin(true)}/>
                        </Form.Group>
                        <Button className="w-100" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}