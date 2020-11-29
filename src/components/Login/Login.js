import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { provider, auth } from '../../firebase/firebaseConfig'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

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
                toast.success(`Login Successful, redirecting to homepage`);
                setTimeout(function () { history.push("/") }, 1000);
            })
            .catch(e => {
                toast.error(`unable to login, please check your credentials`);
                setTimeout(function () { history.push("/login") }, 4000);
                console.warn(e.message)
            })
    }

    const register = (e) => {
        e.preventDefault() //stops refresh
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // create and redirect to homepage
                toast.success(`Registration Successful, redirecting to homepage`);
                setTimeout(function () { history.push("/") }, 1000);
            })
            .catch(e => {
                toast.error(`unable to register, please check your credentials`);
                setTimeout(function () { history.push("/login") }, 4000);
                console.warn(e.message)
            })

    }

    const loginWithGoogle = (e) => {
        e.preventDefault() //stops refresh

        auth.signInWithPopup(provider)
            .then(function (result) {
                // redirect to homepage
                toast.success(`Login Successful, redirecting to homepage`);
                setTimeout(function () { history.push("/") }, 1000);
            })
            .catch(e => {
                toast.error(`unable to login, please check your credentials`);
                setTimeout(function () { history.push("/login") }, 4000);
                console.warn(e.message)
            });
    }

    return (
        <div className="login">
            <ToastContainer />
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

                <br />
                <p style={{ textAlign: "center" }}>
                    Login With :
                </p>

                <a
                    className="login__signInGoogleButton"
                    onClick={loginWithGoogle}
                >
                    <img
                        className="login__signInGoogleIcon"
                        src="https://elearnam.com/assets/frontend/elegant/images/gicon.png"
                        alt="google login" />
                </a>
            </div>
        </div>
    )
}


export default Login
