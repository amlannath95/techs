import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

export default function Signin(props) {

    //States for signin
    const [email, setEmail] = useState('');
    const [pwd, setpwd] = useState('');

    //Regex for email and password
    // var emailRegex = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/;
    // var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*~?<>])[a-zA-Z0-9!@#$%^&*~?<>]{8,20}$/;

    var checkEmail = false, checkPwd = false;

    function emailValidation() {
        if (!email) {
            alert('Email cannot be empty');
            checkEmail = false;

        } else {
            checkEmail = true;
        }
    }

    function pwdValidation() {
        if (!pwd) {
            alert('Password not in correct format');
            checkPwd = false;
        } else {
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

        if(checkEmail && checkPwd){
        axios.post("http://localhost:9898/signin",{
            email:email,
            pwd:pwd
        }).then((res) => {
            console.log('success', res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/dashboard');
        }).catch((err) => {
            alert('Error\nError type:',err);
            console.log(err)
        })
    } else {
        console.log(checkEmail+" "+checkPwd);
        console.log(email, pwd);
        alert('Fields cannot be empty');
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
                <label className='label'>
                    Email
                </label>
                <input onChange={handleEmail} className='input' value={email} type='email'  />

                <label className='label'>
                    pwd
                </label>
                <input onChange={handlepwd} className='input' value={pwd} type='password' />
            </form>
            <button className='submitButton' onClick={signInUser}>Submit</button>
            <div>
                <button onClick={signUp}>Sign UP!</button>
            </div>
        </div>
    );
}