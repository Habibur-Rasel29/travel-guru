import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import './Log.css'
import googlelogo from '../../images/Icon/google.png'
import fblogo from '../../images/Icon/fb.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUSer] = useContext(UserContext);

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignIn: false,
        username: '',
        email: '',
        password: '',
        error: '',
        success: '',

    })

    const provider = new firebase.auth.GoogleAuthProvider();

    const fbProvider = new firebase.auth.FacebookAuthProvider();


    const handleGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res)
                const { displayName, email, photoURL } = res.user;
                const isSignedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(isSignedInUser);
                setLoggedInUSer(isSignedInUser);
                history.replace(from);

                console.log(displayName, email, photoURL);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleFacebook = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                console.log(res)
                var token = res.credential.accessToken;
                const { displayName, email, photoURL } = res.user;
                const isSignedInUser = {

                    name: displayName,
                    email: email,

                }
                console.log(from);
                setUser(isSignedInUser);
                setLoggedInUSer(isSignedInUser);
                history.replace(from);

                console.log(displayName, email, photoURL, token);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);

        let isFormValid = true;
        if (e.target.name === "email") {
            const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value);
            isFormValid = emailValid;
            // console.log(emailVaild);
        }
        if (e.target.name === "password") {
            const passwordValid = /[a-z]\d|\d[a-z]/i.test(e.target.value);
            isFormValid = passwordValid;
            // console.log(passwordValid);
        }
        if (isFormValid) {
            const userNewInfo = { ...user };
            userNewInfo[e.target.name] = e.target.value;
            console.log(userNewInfo);
            setUser(userNewInfo)
        }
    }


    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (newUser && user.email && user.password) {
            console.log("submitting")
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    // console.log(res);
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUSer(newUserInfo);
                    history.replace(from);
                    console.log(res);

                })
                .catch(error => {
                    // Handle Errors here.
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(error);


                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUSer(newUserInfo);
                    history.replace(from);
                    console.log('user name', res.name);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(error);

                });
        }

    }





    return (

        <div className="form-section">
            <div className="form-container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>

                    {/* name:{ user.username} */}
                    {newUser ? <h5>Create an Account</h5>
                        :
                        <h5>Login</h5>}

                    <div className="form-input">
                        {newUser && <label htmlFor="username" className="form-label">
                            <input onBlur={handleChange} type="text" name="username" className="form-input" placeholder="First Name" id="username" ref={register({ required: true })} />
                            {errors.username && <span className="error">First Name is required</span>}
                        </label>}
                    </div>
                    <div className="form-input">
                        {newUser && <label htmlFor="username2" className="form-label">
                            <input onBlur={handleChange} type="text" name="username2" className="form-input" placeholder=" Last Name" id="username2" ref={register({ required: true })} />
                            {errors.username2 && <span className="error">Last Name required</span>}

                        </label>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="email" className="form-label">
                            <input onBlur={handleChange} type="email" name="email" placeholder="Username or Email" id="email" className="form-label" ref={register({
                                required: "Enter your e-mail",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Enter a valid e-mail address",
                                },
                            })} />
                            {errors.email && <span className="error">Enter a valid email address</span>}


                        </label>
                    </div>
                    <div className="form-input">
                        {newUser && <label htmlFor="password" className="form-label">
                            <input onBlur={handleChange} type="password" name="password" id="password" className="form-input" placeholder=" Create your Password " ref={register({ required: true, minLength: 8 })} />
                            {errors.password && <span className="error">Password is required</span>}

                        </label>}
                    </div>
                    <div className="form-input">
                        <label htmlFor="password2" className="form-label">
                            <input onBlur={handleChange} type="password2" name="confirmPassword" id="password2" placeholder="Confirm Password" ref={register({
                                validate: (value) => value === watch('password') || "Passwords don't match."
                            })} />
                            {errors.confirmPassword && <span className="error">Password is not match</span>}

                        </label>
                    </div>
                    {newUser ? <div className="btn">
                        <input type="submit" className="login-btn" value="Create an account" />

                        <br />

                        <p style={{ color: 'black' }}> Already have an account? <button onClick={() => setNewUser(!newUser)} className="login-button">Login</button> </p>
                    </div>
                        :
                        <div className="btn">
                            <input type="submit" value="Login" />

                            <br />

                            <p style={{ color: 'black' }}> <br /> Don't have an account? <button onClick={() => setNewUser(!newUser)} className="login-button">Create an account</button> </p>
                        </div>}
                </form>


            </div>

          
            <p className="or">or</p>

            <div class="social-media">

                <button class="fb-btn" onClick={handleFacebook}>
                    <img src={fblogo} alt="" />
                    <i class="fab fa-facebook"></i> Continue with Facebook
         </button>

                <br />
                <br />

                <div>
                    <button href="/#" class="google-btn" onClick={handleGoogle}>
                        <img src={googlelogo} alt="" />
                        <i class="fab fa-facebook"></i> Continue with Google
        </button>
                </div>
            </div>
            <br />
            <p style={{ color: 'red' }}> {user.error}</p>



        </div>

    );
}
export default Login;