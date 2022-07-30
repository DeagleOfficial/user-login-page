import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";


const Nav = (props) => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)

    const handleLogin = (e) => {
        e.preventDefault()

        console.log(user.user)

        axios.post(`https://reqres.in/api/login`, {
            "email": user.email, 
            "password": user.password
        })
        .then((res) => {
            console.log(res);
            navigate(`/${res.data.token}`)
            // setLoggedIn(true);
        })
        .catch((err) => alert(err.response.data.error))
    }

  

    return (
        <>
        {
            props.loggedIn && (
                <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand"><h4>ATools<sub style={{color: "red"}}><small>*</small></sub></h4></a>
                </nav>
            )
        }


        {
            !props.loggedIn && (
                <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand"><h4>ATools<sub style={{color: "red"}}><small>*</small></sub></h4></a>
                <form className="form-inline d-none d-lg-block">
                <button className="btn-deepblue btn  my-2 my-sm-0" type="submit">Start Free Trial</button>
                <button className="btn-orange btn  my-2 my-sm-0" type="submit"
                onClick={handleLogin}
                >Login</button>
                </form>
                </nav>
            )
        }
        </>
    )
}

export default Nav;