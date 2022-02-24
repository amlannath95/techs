import {useState} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css'

export default function Signup(props) {

    //States for signup
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setpwd] = useState('');
    const [dob, setDob] =useState('');
    const [contact, setContact] = useState('');
    const [lang, setLang] = useState('');

    var contactRegex = /^\d{10}$/;

    var emailRegex = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/;

    var dobRegex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*~?<>])[a-zA-Z0-9!@#$%^&*~?<>]{8,20}$/;

    var checkVariable = true;
    
    function emailValidation(){
        if(!emailRegex.test(email)){
            if(!contactRegex.test(contact)){
                alert('Email not in correct format');
                checkVariable = false;
            }
        }
    }

    function pwdValidation(){
        if(!passwordRegex.test(pwd)){
            alert('Password not in correct format');
            checkVariable = false;
        }
    }

    function dobValidation(){
        if(!dobRegex.test(dob)){
            alert('DOB not in correct format');
            checkVariable = false;
        }
    }

    function contactValidation(){
        if(!contactRegex.test(contact)){
            alert('Contact number not in correct format');
            checkVariable = false;
        }
    }

    function nameValidation(){
        if(!name){
            alert('Name cannot be empty');
            checkVariable = false;
        }
    }

    function langValidation(){
        if(!lang){
            alert('Lang cannot be empty');
            checkVariable = false;
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
        axios.post("http://localhost:9898/signup",{
            email:email,
            pwd:pwd,
            dob:dob,
            contact:contact,
            name:name,
            lang:lang
        }).then((res) => {
            console.log("Signup",res.data.token);
            localStorage.setItem('token', res.data.token);
            console.log('success', res);
        })
        
        //After suucessful signup it will redirect to the dashboard page
        props.history.push('/dashboard')
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
                <input onChange={handleEmail} className='input' value={email} type='email' onBlur={emailValidation}/>
                
                <label className='label'>
                    Name
                </label>
                <input onChange={handleName} className='input' value={name} type='text' onBlur={nameValidation}/>

                <label className='label'>
                    pwd
                </label>
                <input onChange={handlepwd} className='input' value={pwd} type='password' onBlur={pwdValidation}/>

                <label className='label'>
                    Contact
                </label>
                <input onChange={handleContact} className='input' value={contact} type='text' onBlur={contactValidation}/>

                <label className='label'>
                    DOB
                </label>
                <input onChange={handleDob} className='input' value={dob} type='date' onBlur={dobValidation}/>

                <label className='label'>
                    Lang
                </label>
                <input onChange={handleLang} className='input' value={lang} type='text' onBlur={langValidation}/>
                </form>
                <button className='submitButton' onClick={signUpUser}>SUBMIT</button>
                <div>
                    <button className='submitButton' onClick={signInUser}>Sign In</button>
                </div>
        </div>
        
    )
    
}

