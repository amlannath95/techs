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
        if (!email || !emailRegex.test(email)) {
            error.textContent='Email not in correct format'
            error.style.color='red';
            checkEmail = false; 
        } else {
            error.textContent=''
            checkEmail = true;
        }
    }

    function pwdValidation() {
        var error = document.getElementById('pwdError');
        if (!pwd) {
            error.textContent='Password cannot be empty'
            error.style.color='red';
            checkPwd = false;
        } else {
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

        console.log(email, pwd);
        console.log(checkEmail, checkPwd);

        if(checkEmail && checkPwd){
        axios.post("http://localhost:9898/signin",{
            email:email,
            pwd:pwd
        }).then((res) => {
            console.log('success', res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/dashboard');
        }).catch((err) => {
            alert('Invalid email or password');
            console.log(err)
        })
    } else {
        console.log(checkEmail+" "+checkPwd);
        console.log(email, pwd);
        alert('Invalid email or password');
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
            <div>
                <button onClick={signUp}>Sign UP!</button>
            </div>
        </div>
    );
}