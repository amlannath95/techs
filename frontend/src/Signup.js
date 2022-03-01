import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

var checkEmail = false, checkPwd = false, checkName = false,
        checkDob = false, checkContact = false, checkLang = false;

export default function Signup(props) {

    //States for signup
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setpwd] = useState('');
    const [dob, setDob] = useState('');
    const [contact, setContact] = useState('');
    const [lang, setLang] = useState('');

    var contactRegex = /^\d{10}$/;

    var emailRegex = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/;

    var dobRegex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*~?<>])[a-zA-Z0-9!@#$%^&*~?<>]{8,20}$/;

    function emailValidation() {
        var error = document.getElementById('emailError');
        if (emailRegex.test(email)) {
            error.textContent='';
            checkEmail = true;
        } else {
            error.textContent='Email not in correct format';
            error.style.color='red';
            checkEmail = false;
        }
    }

    function pwdValidation() {
        var error = document.getElementById('pwdError');
        if (passwordRegex.test(pwd)) {
            error.textContent='';
            checkPwd = true;
        } else {
            error.textContent='Password not in correct format';
            error.style.color='red';
            checkPwd = false;
        }
    }

    function dobValidation() {
        var error = document.getElementById('dobError');
        if (dobRegex.test(dob)) {
            error.textContent='';
            checkDob = true;
        } else {
            error.textContent='Invalid DOB';
            error.style.color='red';
            checkDob = false;
        }
    }

    function contactValidation() {
        var error = document.getElementById('contactError');
        if (contactRegex.test(contact)) {
            error.textContent='';
            checkContact = true;
        } else {
            error.textContent='Invalid contact number';
            error.style.color='red';
            checkContact = false;

        }
    }

    function nameValidation() {
        var error = document.getElementById('nameError');
        if (name) {
            error.textContent='';
            checkName = true;
        } else {
            error.textContent='Name cannot be empty';
            error.style.color='red';
            checkName = false;
        }
    }

    function langValidation() {
        var error = document.getElementById('langError');
        if (lang) {
            error.textContent = '';
            checkLang = true;
        } else {
            error.textContent='Lang cannot be empty';
            error.style.color='red';
            checkLang = false;
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleLang = (e) => {
        setLang(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlepwd = (e) => {
        setpwd(e.target.value);
    }

    const handleDob = (e) => {
        setDob(e.target.value);
    }

    const handleContact = (e) => {
        setContact(e.target.value);
    }

    const signUpUser = () => {
            emailValidation();
            nameValidation();
            pwdValidation();
            dobValidation();
            langValidation();
            contactValidation();

        if (checkContact && checkDob && checkEmail && checkLang && checkName && checkPwd) {
            var error = document.getElementById('submitError');
            axios.post("http://localhost:9898/signup", {
                email: email,
                pwd: pwd,
                dob: dob,
                contact: contact,
                name: name,
                lang: lang
            }).then((res) => {
                console.log("Signup", res.data.token);
                localStorage.setItem('token', res.data.token);
                console.log('success', res);
               
                //After suucessful signup it will redirect to the dashboard page
                props.history.push('/dashboard')
            }).catch((err) => {
                error.textContent='Email already exists';
                error.style.color='red';
            })

            
        } else {
            console.log(checkContact+" "+checkDob+" "+checkEmail+" "+checkLang+" "+checkName+" "+checkPwd)
            console.log(contact,dob,email,lang, name,pwd);
            var error = document.getElementById('submitError');
            error.textContent='Fill all the fields correctly';
            error.style.color='red';
        }
    }

    const signInUser = () => {

        //It will redirect to signin page
        props.history.push('/signin');
    }


    return (
        <div className='signup'>
            <div>
                <h1>
                    User SignUp
                </h1>
            </div>
            <form>
                
                <label className='label'>
                    Email
                </label>
                <input onChange={handleEmail} className='input' value={email} type='email' onBlur={emailValidation} />
                <div id='emailError'></div>
                

                <label className='label'>
                    Name
                </label>
                <input onChange={handleName} className='input' value={name} type='text' onBlur={nameValidation} />
                <div id='nameError'></div>

                <label className='label'>
                    pwd
                </label>
                <input onChange={handlepwd} className='input' value={pwd} type='password' onBlur={pwdValidation} />
                <div id='pwdError'></div>

                <label className='label'>
                    Contact
                </label>
                <input onChange={handleContact} className='input' value={contact} type='text' onBlur={contactValidation} />
                <div id='contactError'></div>

                <label className='label'>
                    DOB
                </label>
                <input onChange={handleDob} className='input' value={dob} type='date' onBlur={dobValidation} />
                <div id='dobError'></div>

                <label className='label'>
                    Lang
                </label>
                <input onChange={handleLang} className='input' value={lang} type='text' onBlur={langValidation} />
                <div id='langError'></div>
            </form>
            <button className='submitButton' onClick={signUpUser}>SUBMIT</button>
            <div id='submitError'></div>
            <div>
                <button className='submitButton' onClick={signInUser}>Sign In</button>
            </div>
        </div>

    )

}

