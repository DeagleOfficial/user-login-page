import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/userSlice";
import axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [loggedIn, setLoggedIn] = useState(false);

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogin = () => {

        axios.post(`https://reqres.in/api/login`, {
            "email": email, 
            "password": password
        })
        .then((res) => {
            console.log(res);
            navigate(`/${res.data.token}`)
        })
        .catch((err) => alert(err.response.data.error))
    }


    return ( 
        <div className="Login">
            <div className="wrapper row">
            <div className="left col-lg-5 col-md-5 col-sm-12 col-xs-12">

                {props.loggedIn && (
                    <div className="left-content"><h4>Logged In successfully</h4></div>
                )}

                {!props.loggedIn && (
                    <div className="left-content">
                    <h3>Welcome back</h3>
                    <small className="subtitle">Sub-title text goes here</small>
                    <input type="email" className="form-control" placeholder="Email Address*"
                    onChange={(e) => {
                        setEmail(e.target.value)
                        dispatch(update({
                            email: e.target.value,
                            password: password
                        }))
                    }}
                    ></input>
                    <input type="password" className="form-control" placeholder="Password*"
                    onChange={(e) => {
                        setPassword(e.target.value)
                        dispatch(update({
                            email: email,
                            password: e.target.value
                        }))
                    }}
                    ></input>
                    <button type="button" className="btn btn-deepblue form-control"
                    onClick={handleLogin}
                    >Login</button>

                    <div className="form-foot">
                        <div className="remember-password"> 
                            <input type="checkbox" name="remember"></input>&nbsp;
                            <label for="remember"><small>Remember Password</small></label>
                        </div>
                        <div className="forgot-password">
                            <a href="#"><small>Forgot password?</small></a>
                        </div>
                    </div>
                </div>
                )}
                
            </div>
            <div className="right col-lg-7 col-md-7 d-none d-lg-block d-md-block">
                {/* image to be inserted here */}
            </div>
            </div>
        </div>
    )
}

export default Login;