import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
import { useState } from 'react'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault() //stops refresh
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // redirect to homepage
                history.push("/")
            })
            .catch(e => console.warn(e.message))
    }

    const register = (e) => {
        e.preventDefault() //stops refresh
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // create and redirect to homepage
                history.push("/profile")
            })
            .catch(e => console.warn(e.message))

    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button onClick={login} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}


export default Login
