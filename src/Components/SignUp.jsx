import React, { useState } from 'react'
import person from "../../public/Assets/person.png"
import email from "../../public/Assets/email.png"
import pass from "../../public/Assets/password.png"
import "./SignUp.css"
import ResetPassword from "../Components/ResetPassword"

const SignUp = () => {
    const[action, setaction]=useState("Login")
    const[inputValue, setinputValue]=useState("")
    const [showPasswordReset,setshowPasswordReset]= useState()

    const HandleForgetPassword = ()=>{
        setshowPasswordReset(true)
    }

    const HandlePasswordResetCancel = ()=>{
        setshowPasswordReset(false)
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                  <img src={person} alt='user-icon'/>
                  <input className='input-field' type='name' placeholder='Enter Your Name'/> 
                </div>}
                

                <div className='input'>
                  <img src={email} alt='email-icon'/>
                  <input className='input-field' type='email' placeholder='Enter Your Email'/> 
                </div>

                <div className='input'>
                  <img src={pass} alt='password-icon'/>
                  <input className='input-field' type='password' placeholder='Enter Your Password'/> 
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password' onClick={HandleForgetPassword}>Forgot Password? <span>Click Here</span></div>
}
            <div className='submit-container'>
                <div onChange={(e)=>setinputValue(e.target.value)}  className={action==="Sign Up"? "submit gray":"submit" } onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
                <div onChange={(e)=>setinputValue(e.target.value)}  className={action==="Login"? "submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>

            </div>
            {showPasswordReset&&(
                <ResetPassword cancel={HandlePasswordResetCancel}/>
            )}
        </div>
    )
}

export default SignUp