import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [psw, setPassword] = useState("");
    const getCookie = localStorage.getItem("token");
    useEffect(() => {
        if (getCookie) {
            navigate("/");
        }
    }, [getCookie]);

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = "Please enter the value in ";

        if (psw === null || psw === "") {
            isproceed = false;
            errormessage += " Password";
        }
        if (email === null || email === "") {
            isproceed = false;
            errormessage += " Email";
        }
        if (!isproceed) {
            alert(errormessage);
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            } else {
                isproceed = false;
                alert("Please enter the valid email");
            }
        }
        return isproceed;
    };
    async function login() {
        if (IsValidate()) {
            let items = { email, psw };
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, psw: psw }),
            };
            let result = await fetch(
                "https://crudcrud.com/api/a7022b1ceef543c881fd03cf5458d395/data",
                requestOptions
            );
            result = await result.json(items);
            localStorage.setItem("token", email);
            setEmail("");
            setPassword("");
            navigate("/");
        }
    }

    const signupFun = () => {
        navigate("/signup");
    };
    return (
        <>
            <div className="container" id="main">
                <h1>Login Page</h1>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="t2"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email Address"
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="t3"
                        name="psw"
                        autoComplete="off"
                        value={psw}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                    />
                </div>
                <br />
                <div className="signin-btn">
                    <button onClick={() => login()}>Sign In</button>
                </div>
                <div className="signin-btn">
                    <button onClick={() => signupFun()}>Sign Up</button>
                </div>

            </div>
        </>
    );
};

export default Signin;
