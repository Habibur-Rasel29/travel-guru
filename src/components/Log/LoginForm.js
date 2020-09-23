import React, { useState } from 'react';
import './Log.css'

const LoginForm = () => {

    const [values, setValues] = useState({
        username:'',
        username2:'',
        email:'',
        password:'',
        password2:'',

    })

    const [error, setError]= useState({});


   const handleChange = (e) =>{
       const {name, value} = e.target.value;
       console.log(e)
       setValues({
           ...value,
           [name]:value
       })
   }
    return (
        <div className="form-content">
            <div className="form">
                <div className="form-input">
                    <label htmlFor="username" className="form-label">
                        <input type="text" name="username" className="form-input" placeholder="First Name" id="username"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="username2" className="form-label">
                        <input type="text" name="username2" className="form-input" placeholder=" Last Name" id="username2"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="email" className="form-label">
                        <input type="email" name="email" placeholder="Username or Email"id="email" className="form-label"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="password" className="form-label">
                      <input type="password" name="password" id="password" className="form-input" placeholder=" Create your Password "/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="password2" className="form-input">
                       <input type="password2" name="password2" id="password2" placeholder="Confirm Password"/>
                    </label>
                </div>
                <button className="form-input-btb" type="submit">Create an account</button>
                <br/>
                <p>Already have an account? <a href="/#">Login</a></p>
            </div>
           or
           <div className="facebook">
               <div className="fblogo">

               </div>
               <div>
                   <p>Continue with Facebook</p>
               </div>

           </div>
           <div className="google">
               <div className="goggleLogo">

               </div>
               <div>
                   <p>Continue with Google</p>
               </div>

           </div>

            
        </div>
    );
};

export default LoginForm;