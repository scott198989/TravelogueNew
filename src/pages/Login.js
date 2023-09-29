import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LogIn.css';
import "animate.css";

const Login = ({ login }) => {
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const userInfo = {
            "user":{ email: data.email, password: data.password },
        };
        login(userInfo);
        navigate('/')
        e.target.reset();
    };

    return (
        <>
            <div>
                <div id="login" 
                    className="
                        header__login 
                        animate__animated 
                        animate__slideInUp"
                >
                    <p className="title__login">
                        Log your journey
                    </p>

                    <p className="banner__login 
                            animate__animated 
                            animate__fadeInLeft"
                    >
                        A new trip or a trip through time
                    </p>
                </div>
                <div id="login" 
                    className="
                        form__login 
                        animate__animated 
                        animate__slideInUp"
                >
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <label>
                                Email:
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                />
                            </label>
                            <label>
                                Password:
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                />
                            </label>
                            <input 
                                type="submit" 
                                value="Login" 
                                className="submit__login" 
                            />
                        </form>
                    <div className="link__to-signup text-center">
                        Not registered yet? <br /> 
                        <a href="/signup">
                            Sign Up.
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login
