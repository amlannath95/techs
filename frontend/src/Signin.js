import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

export default function Signin(props) {

    //States for signin
    const [email, setEmail] = useState('');
    const [pwd, setpwd] = useState('');

    var emailRegex = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/;

    var checkEmail = false, checkPwd = false;

    function emailValidation() {
        var error = document.getElementById('mail');

        //If invalid or empty email field
        if (!email || !emailRegex.test(email)) {
            //Error is shown below the name input field
            error.textContent='Email not in correct format'
            error.style.color='red';
            checkEmail = false; 
        } else {
            //Previous error messages(if any) disappears
            error.textContent='';
            checkEmail = true;
        }
    }

    function pwdValidation() {
        var error = document.getElementById('pwdError');

        //If password field is empty
        if (!pwd) {
            ////Error is shown below the password input field
            error.textContent='Password cannot be empty'
            error.style.color='red';
            checkPwd = false;
        } else {
            //Previous error messages(if any) disappears
            error.textContent=''
            checkPwd = true;
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlepwd = (e) => {
        setpwd(e.target.value);
    }

    //Sends the entered data for sigin
    function signInUser(){
        emailValidation();
        pwdValidation();

        var error = document.getElementById('submitError');

        console.log(email, pwd);
        console.log(checkEmail, checkPwd);

        //If email is in valid format and password is not empty
        if(checkEmail && checkPwd){
        axios.post("http://localhost:9898/signin",{
            email:email,
            pwd:pwd
        }).then((res) => {
            console.log('success', res);
            localStorage.setItem('token', res.data.token);
            error.textContent='';

            //Page redirects to dashboard
            props.history.push('/dashboard');
        }).catch((err) => {
            error.textContent='Invalid email or password';
            error.style.color='red';
            console.log(err)
        })
    } else {
        console.log(checkEmail+" "+checkPwd);
        console.log(email, pwd);
        error.textContent='Invalid email or password';
        error.style.color='red';
    }
        
    }

    //Redirects to sign up page
    function signUp(){
        props.history.push('/');
    }

    return (
        <div className='signin'>
            <div>
                <h1>
                    User SignIn
                </h1>
            </div>
            <form>
                <div>
                <label className='label'>
                    Email
                </label>
                <input onChange={handleEmail} className='input' value={email} type='email'  onBlur={emailValidation} />
                <div id = "mail"></div>
                </div>

                <div>
                <label className='label'>
                    pwd
                </label>
                <input onChange={handlepwd} className='input' value={pwd} type='password' onBlur={pwdValidation}/>
                <div id = "pwdError"></div>
            
                </div>
            </form>
            <button className='submitButton' onClick={signInUser}>Submit</button>
            <div id='submitError'></div>
            <div>
                <button onClick={signUp}>Sign UP!</button>
                
            </div>
        </div>
    );
}